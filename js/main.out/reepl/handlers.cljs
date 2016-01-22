(ns reepl.handlers
  (:require [reagent.core :as r]
            [reepl.helpers :as helpers])
  (:require-macros
   [reagent.ratom :refer [reaction]]))

(defn clear-items [db]
  (assoc db :items []))

(defn init [db data]
  (merge db data))

(defn add-item [db item]
  (update db :items conj item))

(defn add-items [db items]
  (update db :items concat items))

(defn add-input [db input]
  (let [inum (count (:history db))]
    (-> db
      (assoc :hist-pos 0)
      (update :history conj "")
      (update :items conj {:type :input :text input :num inum}))))

(defn add-result [db error? value]
  (update db :items conj {:type (if error? :error :output)
                          :value value}))

(defn add-log [db val]
  (update db :items conj {:type :log :value val}))

(defn set-text [db text]
  (let [history (:history db)
        pos (:hist-pos db)
        idx (- (count history) pos 1)]
    (-> db
        (assoc :hist-pos 0)
        (assoc :history
               (if (= pos 0)
                 (assoc history idx text)
                 (if (= "" (last history))
                   (assoc history (dec (count history)) text)
                   (conj history text)))))))

(defn go-up [db]
  (let [pos (:hist-pos db)
        len (count (:history db))
        new-pos (if (>= pos (dec len))
                  pos
                  (inc pos))]
    (assoc db :hist-pos new-pos)))

(defn go-down [db]
  (let [pos (:hist-pos db)
        new-pos (if (<= pos 0)
                  0
                  (dec pos))
        ]
    (assoc db :hist-pos new-pos)))
