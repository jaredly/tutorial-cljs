(ns tutorial-cljs.repl
  (:require [reepl.core :as reepl]
            [reepl.replumb :as reepl-replumb]
            [replumb.core :as replumb]

            [reepl.show-function :as show-function]
            [reepl.show-devtools :as show-devtools]
            [reepl.show-value :as show-value]

            [devtools.core :as devtools]

            [tutorial-cljs.quil-complete :as quil-complete]

            [parinfer-codemirror.editor :as parinfer]
            [parinfer.codemirror.mode.clojure.clojure-parinfer]
            [reagent.core :as r]
   ))

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

(def replumb-opts
  (merge (replumb/browser-options
          ["/js/main.out"]
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


(defn checkbox [keyword title]
  [:label
   {:style (:label styles)}
   [:input {:type "checkbox"
            :checked (keyword @settings)
            :style (:checkbox styles)
            :on-change #(swap! settings update keyword not)
            }]
   title])

(defn auto-complete [sym]
  (let [text (str sym)
        quil (quil-complete/quil-prefix)]
    (if (and quil (= 0 (.indexOf text (str quil "/"))))
      (quil-complete/quil-complete quil text)
      (reepl-replumb/process-apropos sym))))

(defn get-docs [sym]
  (let [text (str sym)
        quil (quil-complete/quil-prefix)]
    (if (and quil (= 0 (.indexOf text (str quil "/"))))
      (quil-complete/quil-doc text)
      (reepl-replumb/process-doc sym))))

(defn repl-view []
  [:div
   {:style (:container styles)}
   [:div {:style (:repl styles)}
    [reepl/repl
     :execute #(reepl-replumb/run-repl %1
                                       (merge replumb-opts
                                              {:verbose true
                                               :warning-as-error (:warning-as-error @settings)}) %2)
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

(add-watch settings :settings #(do
                                 ;; (render-text)
                                 (save-settings %4)))
