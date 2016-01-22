(ns tutorial-cljs.core
  (:require [reepl.core :as reepl]
            [reepl.replumb :as reepl-replumb]
            [replumb.core :as replumb]


            [tutorial-cljs.repl :as repl]
            [tutorial-cljs.inline-eval :as inline-eval]
            [tutorial-cljs.editor :as editor]

            [parinfer-codemirror.editor :as parinfer]

            [reepl.show-function :as show-function]
            [reepl.show-devtools :as show-devtools]
            [reepl.show-value :as show-value]

            [devtools.core :as devtools]

            [quil.core]
            [quil.middleware]

            [cljs.tools.reader :as reader]
            [cljsjs.codemirror]
            [cljs.js :as jsc]

            [reagent.core :as r]
            ))

(defonce -setup-text
  (do
    (parinfer/start-editor-sync!)
    (editor/render-text)))

(swap! jsc/*loaded* conj
       'org.processingjs.Processing
       'quil.core
       'quil.middleware
       'quil.util
       'quil.sketch)

(defn main [])
(devtools/install!)

(let [repl-el (js/document.getElementById "repl")]
  (js/console.log repl-el)
  (r/render [repl/repl-view] repl-el))

(reepl-replumb/run-repl "(ns lt-cljs-tutorial.main (:require [clojure.string :as str] [quil.core :as q]))"
                        repl/replumb-opts
                        identity)
