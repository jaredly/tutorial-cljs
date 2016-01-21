(ns tutorial-cljs.core
  (:require [reepl.core :as reepl]
            [reepl.replumb :as reepl-replumb]

            [reepl.show-function :as show-function]
            [reepl.show-devtools :as show-devtools]

            [tutorial-cljs.text :as text]

            [cljsjs.codemirror]

            [parinfer-codemirror.editor :as parinfer]
            [parinfer.codemirror.mode.clojure.clojure-parinfer]

            [reagent.core :as r]))

(defn get-active-form
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
      nil (if (or (= 0 (.-start token))
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

(def current-display (atom nil))

(defn replace-current [new-value]
  (js/console.log "replacing")
  (swap! current-display
         #(do
            (when %
              (js/console.log "removing" %)
              (.removeChild (.-parentNode %) %))
            new-value)))

(defn make-node [result]
  (let [output (pr-str result)
        container (js/document.createElement "div")
        node (js/document.createElement "div")]
    (aset node "textContent" output)
    ;;(aset node "textContent" output)
    (aset node "style" "position" "absolute")
    (aset node "style" "top" "-1.5em")
    (aset node "style" "left" "2em")
    (aset node "style" "opacity" .8)
    (aset node "style" "zIndex" "100000")
    (aset node "style" "whiteSpace" "pre")
    (aset node "style" "backgroundColor" "#eee")
    (aset node "style" "padding" "5px")
    (aset node "style" "borderRadius" "5px")
    (.appendChild container node)
    container))

(defn show-output [cm pos success? value]
  ;; TODO display things cooler. using cljs-devtools, etc.
  (let [container (make-node value)]
    ;; (js* "debugger;")
    (.addWidget cm pos container true)
    (replace-current container)))

;; TODO only show one result at a time...
(defn eval-current-form [cm]
  (when-let [[form pos] (get-active-form cm (.getCursor cm))]
    (js/console.log "things" form)
    (reepl-replumb/run-repl form (partial show-output cm pos))))

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
   :link {:color "#aaa"
          :text-decoration :none
          :margin "2px 20px 0"}
   })

(defn checkbox [keyword title]
  [:label
   {:style (:label styles)}
   [:input {:type "checkbox"
            :checked (keyword @settings)
            :style (:checkbox styles)
            :on-change #(swap! settings update keyword not)
            }]
   title])

(def complete-cmd
  (reepl/make-complete-cmd reepl-replumb/process-apropos complete-atom))

(defn main-view []
  [:div
   {:style (:container styles)}
   [:div {:style (:repl styles)}
    [reepl/repl
     :execute reepl-replumb/run-repl
     :complete-word reepl-replumb/process-apropos
     :get-docs reepl-replumb/process-doc
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

(reepl-replumb/run-repl "(ns lt-cljs-tutorial.main (:require [clojure.string :as string]))" identity)

(defn render-text []
  (let [text-el (js/document.getElementById "text")]
    (aset text-el "innerHTML" "")
    (def text-mirror
      (js/CodeMirror.
       text-el
       #js {:lineNumbers true
            :matchBrackets true
            :cursorScrollMargin 5
            :value text/text
            :keyMap (if (:vim @settings) "vim" "default")
            :extraKeys #js {"Shift-Cmd-Enter" (fn [_] (replace-current nil))
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
                             text/text))

    (.on text-mirror "keydown"
         (fn [inst evt]
           (case (.-keyCode evt)
             (17 18 91 93) ((complete-cmd :show-all))
             9 ((complete-cmd :cycle) (.-shiftKey evt) text-mirror evt)
             :none)))

    (.on text-mirror "keyup"
         (fn [inst evt]
           (reepl.code-mirror/complete-keyup complete-cmd (.-keyCode evt) inst)))
    ))

(add-watch settings :settings #(do
                                 (render-text)
                                 (save-settings %4)))

(defonce -setup-text
  (render-text))
