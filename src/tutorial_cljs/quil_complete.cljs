(ns tutorial-cljs.quil-complete
  (:require
   [tutorial-cljs.quil-docs :as quil-docs]
   [reepl.replumb :as reepl-replumb]
   [replumb.repl]
   [replumb.ast]
   ))

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
