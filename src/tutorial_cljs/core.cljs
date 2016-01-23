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

#_(def tutorials
  {:cljs {:text text/text
          :prelude "(ns tutorial.cljs (:require [clojure.string :as str]))"}
   :quil {:text text-quil/text
          :prelude "(ns tutorial.quil (:require [quil.core :as q]))"}
   :reagent {:text text-reagent/text
             :prelude "(ns tutorial.reagent (:require [reagent.core :as r]))"}
   }
  )


(reepl-replumb/run-repl "(ns tutorial.quil (:require [quil.core :as q]))"
                        repl/replumb-opts
                        identity)

;; TODO "rewind" state when a sketch is paused
;; TODO persist the text across reloads
;; TODO auto-pause when an error occurs
;; TODO pause via keyboard shortcut
;; TODO keyboard everything; allow "focus" the canvas
;; TODO control framerate w/ slider
