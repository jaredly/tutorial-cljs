(ns tutorial-cljs.text.reagent)

(def text
";; ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
;; ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
;; +++++++++++++++                                             ++++++++++++++++
;;                    An Interactive Introduction to Reagent
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
;; Basic forms
;; ============================================================================

;; We've already evaluated this for you, so you're already in the tutorial.reagent ns
(ns tutorial.reagent
  (:require [reagent.core :as r]))

[:span \"Hello\"]

[:div \"one\" \"two\"]

[:span {:style {:color :red}} \"Red text\"]

[:button {:on-click #(js/alert \"clicked!\")} \"Click for a message\"]

;; ============================================================================
;; Components
;; ============================================================================

(defn my-component [name]
  [:span (str \"Hello \" name)])

[my-component \"Julie\"]





;; ============================================================================
;; Components
;; ============================================================================


(defn my-stateful-component [initial-count]
  (let [count (r/atom initial-count)]
    (fn []
      [:button {:on-click #(swap! count inc)}
       (str \"Clicked \" @count \" times\")])))

[my-stateful-component 10]


;; TODO more to come :)
  ")

(def unready
  "

  ;; ============================================================================
  ;; Render Windows
  ;; ============================================================================

  ;; TODO do we even need this???
  ;; Basically: how do I make this be devcards?


  ;; In normal reagent, this would be `r/render`, but we're doing some magic so that
  ;; it will work in this tutorial enviornment.
  (makerender
  :example
  \"My Awesome Button\"
  [:button nil \"Click and despair\" ])

  ;; When you evaluate this (Cmd-Enter on the line below it), a new reagent render
  ;; will open. If you evaluate it again, the render will reload.
  ;; If you change `:example` to some other name, or create a new
  ;; `(makerender)` form with a different name, another render will open.

  ")
