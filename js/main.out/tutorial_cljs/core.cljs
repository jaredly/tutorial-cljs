(ns tutorial-cljs.core
  (:require [reepl.core :as reepl]
            [reepl.replumb :as reepl-replumb]
            [replumb.core :as replumb]

            [tutorial-cljs.repl :as repl]
            [tutorial-cljs.inline-eval :as inline-eval]
            [tutorial-cljs.editor :as editor]
            [tutorial-cljs.quil-sketch :as quil-sketch]

            [tutorial-cljs.text.cljs :as text-cljs]
            [tutorial-cljs.text.quil :as text-quil]
            [tutorial-cljs.text.webgl :as text-webgl]
            [tutorial-cljs.text.reagent :as text-reagent]

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
            [clojure.zip :as z]

            [reagent.core :as r]
            ))

(def reagent-tag #{:div :span :button :a :table :li :ul :ol :tr :td :input :textarea})

(defn valid-reagent-start [val]
  (or (reagent-tag val)
      (= js/Function (type val))))

(defn reagent-shower [val]
  (when (and (vector? val)
             (valid-reagent-start (first val)))
    val))

(def tutorials
  {:cljs {:text text-cljs/text
          :title "ClojureScript"
          :prelude "(ns tutorial.cljs (:require [clojure.string :as str]))"}
   :quil {:text text-quil/text
          :title "Quil"
          :special-forms
          {'makesketch
           #(quil-sketch/handle-make-sketch
             (replumb.repl/current-ns)
             (reader/read-string %))}
          :prelude "(ns tutorial.quil (:require [quil.core :as q]))"}
   :reagent {:text text-reagent/text
             :title "Reagent"
             :showers [reagent-shower]
             :prelude "(ns tutorial.reagent (:require [reagent.core :as r]))"}
   #_:glsl #_{:text text-webgl/text
          :title "WebGL"
          :special-forms
          {'makegl
           identity}
          :prelude "(ns tutorial.webgl (:require [gamma.api :as g] [gamma.program :as p]))"}
   })

;; TODO "rewind" state when a sketch is paused
;; TODO persist the text across reloads
;; TODO auto-pause when an error occurs
;; TODO pause via keyboard shortcut
;; TODO keyboard everything; allow "focus" the canvas
;; TODO control framerate w/ slider

(defn main [])


;; TODO get reagent docs in here, and gamma
(swap! jsc/*loaded* conj
       'org.processingjs.Processing
       'quil.core
       'quil.middleware
       'quil.util
       'quil.sketch
       'reagent.core
       ;; TODO make this real
       'gamma.api
       'gamma.program)

(defonce -general-setup
  (do
    (devtools/install!)
    (parinfer/start-editor-sync!)))

(defn maybe-fn-docs [fn]
  (let [doc (reepl-replumb/doc-from-sym fn)]
    (when (:forms doc)
      (with-out-str
        (reepl-replumb/print-doc doc)))))

(defn keyname [name]
  (str "text-" name))

(defn get-saved [name]
  (aget js/localStorage (keyname name)))

(defn save-text [name text]
  (aset js/localStorage (keyname name) text))

(def default-showers
  [show-devtools/show-devtools
   (partial show-function/show-fn-with-docs maybe-fn-docs)])

(defn go-to-tutorial [tutorial]
  (aset js/location "hash" (name tutorial)))

(declare setup-tutorial)

(defn go-from-hash []
  (let [name (.slice (.-hash js/location) 1)
        kwd (when (not (empty? name))
              (keyword name))]
    (setup-tutorial (if (and (tutorials kwd) kwd) kwd :quil))))

(.addEventListener js/window "hashchange"
                   go-from-hash)

(defn setup-tutorial [name]
  (js/console.log "setup" name)
  (let [{:keys [title text prelude special-forms showers] :as tutorial} (tutorials name)]

    (editor/render-text
     (or (get-saved name)
         text)
     (concat showers default-showers)
     special-forms
     (partial save-text name))

    ;; # Render REPL
    ;; TODO pass in custom completers too
    (let [repl-el (js/document.getElementById "repl")]
      (r/render [repl/repl-view
                 name
                 (map #(assoc (second %) :name (first %)) tutorials)
                 #(go-to-tutorial %)
                 (concat showers default-showers)
                 #(do
                    (save-text name text)
                    (setup-tutorial name))] repl-el))

    (reepl-replumb/run-repl prelude
                            repl/replumb-opts
                            identity)))

(go-from-hash)
