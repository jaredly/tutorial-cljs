(ns tutorial-cljs.editor
  (:require
   [reepl.core :as reepl]
   [tutorial-cljs.text :as text]
   [tutorial-cljs.repl :as repl]
   [tutorial-cljs.text-quil :as text-quil]
   [tutorial-cljs.inline-eval :as inline-eval]
   ))

(def complete-cmd
  (reepl/make-complete-cmd repl/auto-complete repl/complete-atom))

(defn render-text []
  (let [text-el (js/document.getElementById "text")]
    (aset text-el "innerHTML" "")
    (def text-mirror
      (js/CodeMirror.
       text-el
       #js {:lineNumbers true
            :matchBrackets true
            :cursorScrollMargin 5
            :value text-quil/text
            :keyMap (if (:vim @repl/settings) "vim" "default")
            :extraKeys #js {"Shift-Cmd-Enter" (fn [_] (inline-eval/hide-display))
                            "Cmd-Enter" (fn [cm]
                                          (inline-eval/eval-current-form cm))}
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
                             text-quil/text))

    (.on text-mirror "keydown"
         (fn [inst evt]
           (case (.-keyCode evt)
             (17 18 91 93) ((complete-cmd :show-all))
             9 ((complete-cmd :cycle) (.-shiftKey evt) text-mirror evt)
             :none)))

    (.on text-mirror "keyup"
         (fn [inst evt]
           (reepl.code-mirror/complete-keyup complete-cmd (.-keyCode evt) inst)))

    (.addEventListener text-el "mouseup"
                       (fn [evt]
                         ((complete-cmd :set) (reepl.code-mirror/get-word-and-range text-mirror))))
    ))

