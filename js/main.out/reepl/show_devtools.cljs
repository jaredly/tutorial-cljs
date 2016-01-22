(ns reepl.show-devtools
  (:require [clojure.string :as str]
            [reagent.core :as r]

            [devtools.format :as devtools]
            [cljs.pprint :as pprint]
            [reepl.helpers :as helpers])
  (:require-macros
   [reagent.ratom :refer [reaction]]))

(def styles
  {:value-head {:flex-direction :row}
   :value-toggle {:font-size 9
                  :padding 4
                  :cursor :pointer}})

(def view (partial helpers/view styles))
(def text (partial helpers/text styles))
(def button (partial helpers/button styles))

(defn str? [val]
  (= js/String (type val)))

(defn pprint-str [val]
  (pprint/write val :stream nil))

(defn js-array? [val]
  (= js/Array (type val)))

(defn parse-style [raw]
  (into {}
        (map (fn [line]
               (let [[k v] (str/split line ":")]
                 [(keyword k) v]))(str/split raw ";"))))

(defn show-el [val show-value]
  (let [type (first val)
        opts (second val)
        children (drop 2 val)]
    (if (= "object" type)
      [show-value (.-object opts) (.-config opts)]
      (into
       [(keyword type) {:style (when opts (parse-style (.-style opts)))}]
       (map #(if-not (js-array? %) % (show-el % show-value)) children))
      )))

(defn openable [header val config show-value]
  (let [open (r/atom false)]
    (fn [_ _]
      (let [is-open @open]
        [view :value-with-body
         [view :value-head
          [view {:on-click #(swap! open not)
                 :style :value-toggle}
           (if is-open "▼" "▶")]
          (show-el header show-value)]
         (when is-open
           (show-el (devtools/body-api-call val config) show-value))
         ]))))

;; see https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview
(defn show-devtools [val config show-value]
  (if (var? val)
    nil
    (let [header (try
                   (devtools/header-api-call val config)
                   (catch js/Error e
                     e))]
      (cond
        (not header)
        nil
        (instance? js/Error header)
        [view :inline-value "Error expanding lazy value"]
        :else
        (if-not (devtools/has-body-api-call val config)
          [view :inline-value (show-el header show-value)]
          [openable header val config show-value]
          )))))
