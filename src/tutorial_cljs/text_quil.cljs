(ns tutorial-cljs.text-quil)

(def text
  ";; +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  ;; +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  ;; ++++++                                                              +++++++++
  ;; ++++++                                                              +++++++++
  ;;                   An Interactive Introduction to Quil
  ;; ++++++                                                              +++++++++
  ;; ++++++                                                              +++++++++
  ;; +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  ;; +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

(ns tutorial-cljs.quil
  (:require [quil.core :as q :include-macros]))

(defn setup []
  (q/smooth)
  (q/frame-rate 1)
  (q/background 200))

(defn draw []
  (q/stroke (q/random 255))
  ;; (q/stroke (q/random 255) (q/random 255) (q/random 255))
  (q/stroke-weight (q/random 10))
  (q/fill (q/random 255))

  (let [diam (q/random 100)
        x    (q/random (q/width))
        y    (q/random (q/height))]
    (q/ellipse x y diam diam)))

(q/defsketch example
  :title \"Oh so many gray circles\"
  :setup setup
  :draw draw
  :size [323 200])
  ")
