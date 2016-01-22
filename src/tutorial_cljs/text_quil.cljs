(ns tutorial-cljs.text-quil)

(def text
";; ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
;; ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
;; +++++++++++++++                                             ++++++++++++++++
;;                     An Interactive Introduction to Quil
;; +++++++++++++++                                             ++++++++++++++++
;; ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
;; ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

;; ============================================================================
;; Using this Tutorial
;; ============================================================================

;; # Evaluating forms
;;
;; You can evaluate forms in this tutorial by putting your cursor at the end of
;; the form and pressing \"Cmd-Enter\". The output will be displayed to the
;; right of your cursor. You can dismiss the output view (if it's in your way)
;; with \"Cmd-Shift-Enter\".
;;
;; Try evaluating this:

(+ 1 2) ; <- put your cursor right after the closing ) and press Cmd-Enter

;; ^ You can also put your cursor on the following line and press Cmd-Enter

;; Ok, that was cool, but how about some data that's more complicated?
{:some 10
 :other 20
 :list (range 10)} ; evaluate this, and you'll be able to interact with the result

;; # Documentation + auto-complete
;;
;; If you click `range` in that code above, the documentation for the range
;; function will appear in the bottom-right corner of this page. You can type
;; into this document, and documentation + auto-complete suggestions will
;; appear. Press Tab (and Shift-Tab) to cycle through the suggestions.
;;
;; Go ahead, put your cursor at the end of `map`, and see what other functions
;; have `map` in the name.

map

;; # The REPL
;;
;; The right hand pane is a REPL where you can type in clojurescript code and
;; see the results. It will show you documentation + auto-complete suggestions
;; as well.


;; ============================================================================
;; The Setup
;; ============================================================================

;; We've already evaluated this for you, so you're already in the tutorial.quil ns
(ns tutorial.quil
  (:require [quil.core :as q]))

;; We start with a fairly simple setup function, no state, and empty update &
;; draw functions so we can experiment at the REPL

(defn setup []
  (q/smooth)
  (q/frame-rate 10)
  (q/background 255)
  {})

(defn q-update [state]
  state)

(defn draw [state]
  )

;; In normal quil, this would be `q/defketch`, but we're doing some magic so that
;; it will work in this tutorial enviornment. The API is the same, although we
;; automatically enable the `fun-mode` middleware for you.

(makesketch example
  :title \"My Sketch\"
  :setup setup
  :update q-update
  :draw draw
  :size [323 200])

;; When you evaluate this (Cmd-Enter on the line below it), a new quil sketch
;; will open. If you evaluate it again, the sketch will reload (setup will run
;; again, etc.). If you change `example` to some other name, or create a new
;; `(makesketch)` form with a different name, another sketch will open. The most
;; recent sketch you've created will also be available to the REPL -- if you
;; execute `q/rect` in the REPL or in this page, it will be evaluated on the most
;; recently created sketch.


;; ============================================================================
;; Drawing
;; ============================================================================
;; Once you've made the sketch, we can start drawing on it.

;; # Solids & fill

(q/rect 0 0 10 10)

;; You can change the fill
(q/fill 200) ; one argument (0-255) means gray

(q/fill 0 255 100) ; three arguments (0-255) mean red, green, blue

(q/rect 0 0 20 30) ; now evalute again, and see that the color has changed

(q/ellipse 100 100 10 30) ; unlike the rect, the ellipse is *centered* around the first two args

;; # Lines & Stroke

(q/line 0 0 100 100)

(q/stroke 255 0 100) ; you can also pass one arg for gray
(q/stroke-weight 20)
;; now try that line ^ again

;; You can clear the canvas at any time with this
(q/background 255) ; 255 = white

;; Now lets use a clojurescript loop to do something more fun
(dorun
  (for [angle (range 0 360 10)]
    (let [x (q/cos (q/radians angle))
          y (q/sin (q/radians angle))]
      (q/stroke (/ angle 2))
      (q/line 100 100 (+ 100 (* x 100)) (+ 100 (* y 100))))))

;; ============================================================================
;; Animating
;; ============================================================================
;; Here we only have to change the draw function, and the
;; sketch automatically updates to show the changes.

(defn draw [state]
  (q/stroke (q/random 255))
  ;; (q/stroke (q/random 255) (q/random 255) (q/random 255))
  (q/stroke-weight (q/random 10))
  (q/fill (q/random 255))

  (let [diam (q/random 100)
        x    (q/random (q/width))
        y    (q/random (q/height))]
    (q/ellipse x y diam diam)))
;; (put your cursor here and hit Cmd-Enter)

;; Now try taking that `(dorun)` form from above and putting it in the draw
;; function here; then you'll always have that wheel of lines on top of the
;; circles that are drawn.

;; There's a `q/stroke` call in that draw function that's commented out --
;; remove the `;;' to make your sketch more colorful.
;; Can you make the fill colorful as well?


;; TODO more to come :)
  ")

