(ns tutorial-cljs.text-quil)

(def text ;""
  ";; ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
;; ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
;; ++++++                                             +++++++++
;; ++++++                                             +++++++++
;;            An Interactive Introduction to Quil
;; ++++++                                             +++++++++
;; ++++++                                             +++++++++
;; ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
;; ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

(ns tutorial-cljs.quil
  (:require [quil.core :as q]
            [quil.middleware :as m]))

;; =============================================================
;; The Setup
;; =============================================================
;; We start with a fairly simple setup function, no state, and empty update &
;; draw functions so we can experiment at the REPL

(defn setup []
  (q/smooth)
  (q/frame-rate 1)
  (q/background 200)
  {})

(defn q-update [state]
  state)

(defn draw [state]
  )

;; In normal quil, this would be `q/defketch`, but we're doing some magic so that
;; it will work in this tutorial enviornment. The API is the same, though.
;;
;; TODO reword this v
;; When you evaluate this, a new quil sketch will open. If you evaluate it again,
;; the sketch will reload (setup will run again, etc.). If you change `example` to
;; some other name, or create a new `(makesketch)` form with a different name, another
;; sketch will open.
;; The most recent sketch you've created will also be available to the REPL -- if you
;; execute `q/rect` in the REPL or in this page, it will be evaluated on the most recently
;; created sketch.
(makesketch example
  :title \"Oh so many gray circles\"
  :setup setup
  :update q-update
  :draw draw
  :middleware [m/fun-mode]
  :size [323 200])

;; =============================================================
;; Drawing
;; =============================================================
;; Once you've made the sketch, we can start drawing on it.

(q/rect 0 0 10 10)

;; You can change the fill
(q/fill 200) ; one argument (0-255) means gray

(q/fill 0 255 100) ; three arguments (0-255) mean red, green, blue

(q/rect 0 0 20 30) ; now evalute again, and see that the color has changed



;; =============================================================
;; Animating
;; =============================================================

(defn draw [state]
  (q/stroke (q/random 255))
  ;; (q/stroke (q/random 255) (q/random 255) (q/random 255))
  (q/stroke-weight (q/random 10))
  (q/fill (q/random 255))

  (let [diam (q/random 100)
        x    (q/random (q/width))
        y    (q/random (q/height))]
    (q/ellipse x y diam diam)))

;; =============================================================
;; More complex
;; =============================================================
  ")

