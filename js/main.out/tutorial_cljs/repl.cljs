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
               :min-width 0
               :flex 1
               :align-self :stretch
               :justify-content :center
               :align-items :center}
   :choose-container {
                      :flex 1
                      :flex-direction :row
                      :align-items :center
                      :margin-bottom 5
                      :padding-left 10
                      }
   :chooser-title {:font-size "1.5em"
                   :margin-right 10}
   :chooser {:font-size "1.5em"
             :margin-right 5}
   :repl {:display :flex
          :flex 1
          :align-self :stretch
          :margin-left 10
          :background-color :white
          :border-radius 5}
   :bottom {:display :flex
            :align-self :stretch
            :margin-left 10
            :flex-direction :row
            :align-items :center
            :margin-bottom 5
            :color "#ddd"}
   :label {:margin "0 5px"
           :display :flex
           :flex-direction :row
           :align-items :center
           :font-size ".5em"
           :cursor :pointer}
   :checkbox {:margin-right 5
              :font-size ".5em"}

   :reset-button {:border :none
                  :background-color :transparent
                  :cursor :pointer
                  :color "#faa"
                  :margin-right 20
                  :font-size ".8em"
                  :padding "0 5px"}

   :link {:color "#aaa"
          :text-decoration :none
          :margin "2px 10px 0"}
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

;; TODO abstract out the quil-complete stuff
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

(defn repl-view [current-tutorial tutorials on-tutorial showers reset-text]
  [:div
   {:style (:container styles)}
   [:div {:style (styles :bottom)}
    [:div {:style (styles :choose-container)}
     [:span {:style (:chooser-title styles)}
      "Tutorial"]
     (into

      [:select {:style (:chooser styles)
                :value (name current-tutorial)
                :on-change #(on-tutorial (keyword (.-target.value %)))}]
      (map #(-> [:option {:value (name (:name %))}
                 (:title %)]) tutorials))

     [:button {:style (:reset-button styles)
               :on-click reset-text}
      "Revert Text"]]
    [checkbox :vim "Vim"]
    [checkbox :parinfer "Parinfer"]
    [checkbox :warning-as-error "Warning as error"]
    [:a {:href "https://github.com/jaredly/tutorial-cljs"
         :target :_blank
         :style (:link styles)}
     "Github"]
    ]
   [:div {:style (:repl styles)}
    [reepl/repl
     :execute #(reepl-replumb/run-repl %1
                                       (merge replumb-opts
                                              {:warning-as-error (:warning-as-error @settings)}) %2)
     :complete-word auto-complete
     :get-docs get-docs
     :state repl-state
     :complete-atom complete-atom
     :show-value-opts
     {:showers showers}
     :js-cm-opts {:mode "clojure-parinfer"
                  :keyMap (if (:vim @settings) "vim" "default")
                  :showCursorWhenSelecting true}
     :on-cm-init #(parinfer/parinferize! % (swap! pi-count inc)
                                         :indent-mode (.getValue %))]]])

(add-watch settings :settings #(do
                                 ;; (render-text)
                                 (save-settings %4)))
