(ns tutorial-cljs.core
  (:require [reepl.core :as reepl]
            [reepl.replumb :as reepl-replumb]
            [replumb.core :as replumb]

            [reepl.show-function :as show-function]
            [reepl.show-devtools :as show-devtools]
            [reepl.show-value :as show-value]

            [devtools.core :as devtools]

            [tutorial-cljs.text :as text]
            [tutorial-cljs.text-quil :as text-quil]
            [tutorial-cljs.quil-docs :as quil-docs]

            #_[quil.core]

            [cljs.tools.reader :as reader]
            [cljsjs.codemirror]
            [cljs.js :as jsc]

            [parinfer-codemirror.editor :as parinfer]
            [parinfer.codemirror.mode.clojure.clojure-parinfer]

            [reagent.core :as r]))

(defn to-pos [obj]
  {:line (.-line obj)
   :ch (.-ch obj)})

;; TODO if you are at the start of a token, then return that one...
(defn get-form-at-cursor
  "Returns [form-as-string end-pos]"
  [cm cursor]
  (let [token (.getTokenAt cm cursor)]
    (js/console.log "token" token)
    (case (.-type token)
      "bracket" (let [rr (.findMatchingBracket cm cursor)
                      [from to] (if (.-forward rr)
                                  [(.-from rr) (.-to rr)]
                                  [(.-to rr) (.-from rr)])
                      to #js {:line (.-line to)
                              :ch (inc (.-ch to))}]
                  [(.getRange cm from to) to])
      ("comment" nil) (if (or (= 0 (.-start token))
                  (= 0 (count (.-string token))))
            (when-not (= 0 (.-line cursor))
              (js/console.log token)
              (let [line (.getLine cm (dec (.-line cursor)))]
                (recur cm #js {:line (dec (.-line cursor))
                               :ch (count line)})))
            (recur cm #js {:line (.-line cursor)
                           :ch (- (.-ch cursor) (count (.-string token)))}))
      "string" [(str \" (.-string token)) #js {:line (.-line cursor)
                                               :ch (.-end token)}]
      [(.-string token) #js {:line (.-line cursor)
                             :ch (.-end token)}])))

(defn get-active-form
  "Returns [form-as-string end-pos]"
  [cm]
  (let [selection (first (.listSelections cm))
        start (to-pos (.-anchor selection))
        end (to-pos (.-head selection))]
    (if (= start end)
      (get-form-at-cursor cm (.getCursor cm))
      [(.getSelection cm) (clj->js end)])))

(def replumb-opts
  (merge (replumb/browser-options
          ["/js/main.out" "/js/main.out"]
          reepl-replumb/fetch-file!)))


;; Used to make the repl reload-tolerant
(defonce repl-state
  (r/atom reepl/initial-state))

(defonce complete-atom
  (r/atom nil))

(defn maybe-fn-docs [fn]
  (let [doc (reepl-replumb/doc-from-sym fn)]
    (when (:forms doc)
      (with-out-str
        (reepl-replumb/print-doc doc)))))

(def default-settings
  {:vim false
   :warning-as-error true
   :parinfer true})

(defn get-settings []
  (let [val js/localStorage.reeplSettings]
    (if-not val
      default-settings
      (try
        (js->clj (js/JSON.parse val) :keywordize-keys true)
        (catch js/Error _
          default-settings)))))

(defn save-settings [settings]
  (let [str (js/JSON.stringify (clj->js settings))]
    (aset js/localStorage "reeplSettings" str)))

(defonce
  settings (r/atom (get-settings)))

(defonce pi-count (atom 0))

(def display-el (js/document.createElement "div"))

(defn hide-display []
  (.removeChild (.-parentNode display-el) display-el))

#_(defn replace-current [new-value]
  (js/console.log "replacing")
  (swap! current-display
         #(do (when %
                (js/console.log "removing" %)
                (.removeChild (.-parentNode %) %))
              new-value)))

(def styles
  {:container {:display :flex
               :flex-direction :column
               :flex 1
               :align-self :stretch
               :justify-content :center
               :align-items :center}
   :repl {:display :flex
          :flex 1
          :align-self :stretch
          :margin-left 10
          :background-color :white
          :border-radius 5}
   :bottom {:display :flex
            :flex-direction :row
            :align-items :center
            :margin-top 5
            :color "#ddd"}
   :label {:margin "0 5px"
           :display :flex
           :flex-direction :row
           :align-items :center
           :font-size ".8em"
           :cursor :pointer}
   :checkbox {:margin-right 5}

   :output-wrapper {:position :relative
                    :top "-1.5em"
                    :left "2em"
                    :background-color :white
                    :box-shadow "0 0 5px #aaa"
                    ;; :opacity 0.9
                    :z-index 10000
                    :padding 5
                    :border-radius 5}
   :error {:background-color :white
           :color :red}
   :error-cause {:margin-left 10}
   :link {:color "#aaa"
          :text-decoration :none
          :margin "2px 20px 0"}
   })

(defn show-error [error]
  (let [cause (.-cause error)]
    [:div {:style (:error styles)}
     (.-message error)
     (when cause
       [:span {:style (:error-cause styles)}
        (.-message cause)])]))

(defn show-output-view [success? value]
  [:div {:style (:output-wrapper styles)}
   (if-not success?
     [show-error value]
     [reepl.show-value/show-value
      value
      nil
      {:showers [reepl.show-devtools/show-devtools
                 reepl.show-function/show-fn]}])])

(defn show-output [cm pos success? value]
  ;; TODO display things cooler. using cljs-devtools, etc.
  ;; (js* "debugger;")
  (r/render (show-output-view success? value) display-el)
  (.addWidget cm pos display-el true))

;; TODO
(defn handle-make-sketch [form]
  (js/console.log "make sketch" form))

(defn eval-current-form [cm]
  (when-let [[form pos] (get-active-form cm)
             ]
    (let [form (.trim form)
          is-list (= \( (first form))
          first-item (and is-list
                          (reader/read-string (.slice form 1)))]
      (if (= first-item 'makesketch)
        (handle-make-sketch (reader/read-string form))
        (reepl-replumb/run-repl form replumb-opts (partial show-output cm pos))))))

(defn checkbox [keyword title]
  [:label
   {:style (:label styles)}
   [:input {:type "checkbox"
            :checked (keyword @settings)
            :style (:checkbox styles)
            :on-change #(swap! settings update keyword not)
            }]
   title])

(def quil-names
  (sort (map :name quil-docs/docs)))

(def quil-map
  (into {} (map #(-> [(:name %) (assoc % :type :normal :name (symbol 'quil.core (:name %)))]) quil-docs/docs)))

(defn quil-prefix []
  (let [nss (:requires (replumb.ast/namespace @replumb.repl/st (replumb.repl/current-ns)))
        qss (filter #(= 'quil.core (second %)) nss)
        name (first (first qss))]
    name))

(defn quil-complete [prefix text]
  (let [name (second (.split text "/"))]
    (->> quil-names
     (filter
      #(not (= -1 (.indexOf (str %) name))))
     (map str)
     (sort (partial reepl-replumb/compare-completion name))
     (map
      #(-> [(symbol prefix %) (str (symbol prefix %)) (str (symbol prefix %)) %]))
     )))

(defn quil-doc [text]
  (let [name (second (.split text "/"))]
    (with-out-str
      (reepl-replumb/print-doc (quil-map (symbol name))))))

(defn auto-complete [sym]
  (let [text (str sym)
        quil nil #_(quil-prefix)]
    (if (and quil (= 0 (.indexOf text (str quil "/"))))
      (quil-complete quil text)
      (reepl-replumb/process-apropos sym))))

(defn get-docs [sym]
  (let [text (str sym)
        quil (quil-prefix)]
    (if (and quil (= 0 (.indexOf text (str quil "/"))))
      (quil-doc text)
      (reepl-replumb/process-doc sym))))

(def complete-cmd
  (reepl/make-complete-cmd auto-complete complete-atom))

(defn main-view []
  [:div
   {:style (:container styles)}
   [:div {:style (:repl styles)}
    [reepl/repl
     :execute #(reepl-replumb/run-repl %1 (merge replumb-opts {:verbose true :warning-as-error (:warning-as-error @settings)}) %2)
     :complete-word auto-complete
     :get-docs get-docs
     :state repl-state
     :complete-atom complete-atom
     :show-value-opts
     {:showers [show-devtools/show-devtools
                (partial show-function/show-fn-with-docs maybe-fn-docs)]}
     :js-cm-opts {:mode "clojure-parinfer"
                  :keyMap (if (:vim @settings) "vim" "default")
                  :showCursorWhenSelecting true}
     :on-cm-init #(parinfer/parinferize! % (swap! pi-count inc)
                                         :indent-mode (.getValue %))]]
   [:div {:style (styles :bottom)}
    [checkbox :vim "Vim"]
    [checkbox :parinfer "Parinfer"]
    [checkbox :warning-as-error "Warning as error"]
    [:a {:href "https://github.com/jaredly/tutorial-cljs"
         :target :_blank
         :style (:link styles)}
     "Github"]
    ]])

(let [repl-el (js/document.getElementById "repl")]
  (js/console.log repl-el)
  (r/render [main-view] repl-el))

(reepl-replumb/run-repl "(ns lt-cljs-tutorial.main (:require [clojure.string :as str]))" identity)

(defn render-text []
  (let [text-el (js/document.getElementById "text")]
    (aset text-el "innerHTML" "")
    (def text-mirror
      (js/CodeMirror.
       text-el
       #js {:lineNumbers true
            :matchBrackets true
            :cursorScrollMargin 5
            :value text-quil/text
            :keyMap (if (:vim @settings) "vim" "default")
            :extraKeys #js {"Shift-Cmd-Enter" (fn [_] (hide-display))
                            "Cmd-Enter" (fn [cm]
                                          (eval-current-form cm))}
            :autoCloseBrackets true
            :mode "clojure"
            #_(if (:parinfer @settings)
                "clojure-parinfer"
                "clojure")}))
    ;; TODO parinfer is way too slow for large files -- once it speeds up, it
    ;; would be awesome to have that here.
    #_(if (:parinfer @settings)
      (parinfer/parinferize! text-mirror
                             (str "text" (swap! pi-count inc))
                             :indent-mode
                             text-quil/text))

    (.on text-mirror "keydown"
         (fn [inst evt]
           (case (.-keyCode evt)
             (17 18 91 93) ((complete-cmd :show-all))
             9 ((complete-cmd :cycle) (.-shiftKey evt) text-mirror evt)
             :none)))

    (.on text-mirror "keyup"
         (fn [inst evt]
           (reepl.code-mirror/complete-keyup complete-cmd (.-keyCode evt) inst)))

    (.addEventListener text-el "mouseup"
                       (fn [evt]
                         ((complete-cmd :set) (reepl.code-mirror/get-word-and-range text-mirror))))
    ))

(add-watch settings :settings #(do
                                 ;; (render-text)
                                 (save-settings %4)))

(defonce -setup-text
  (do
    (parinfer/start-editor-sync!)
    (render-text)))

(swap! jsc/*loaded* conj
       'org.processingjs.Processing
       )

(defn main [])
(devtools/install!)
