(ns tutorial-cljs.inline-eval
  (:require
   [reagent.core :as r]
   [cljs.tools.reader :as reader]
   [reepl.replumb :as reepl-replumb]
   [tutorial-cljs.repl :as repl]
   ))

(def styles
  {
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
   })

;; TODO
(defn handle-make-sketch [form]
  (js/console.log "make sketch" form))

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


(def display-el (js/document.createElement "div"))

(defn hide-display []
  (when (.-parentNode display-el)
    (.removeChild (.-parentNode display-el) display-el)))

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

(defn eval-current-form [cm]
  (when-let [[form pos] (get-active-form cm)
             ]
    (let [form (.trim form)
          is-list (= \( (first form))
          first-item (and is-list
                          (reader/read-string (.slice form 1)))]
      (if (= first-item 'makesketch)
        (handle-make-sketch (reader/read-string form))
        (reepl-replumb/run-repl form repl/replumb-opts (partial show-output cm pos))))))
