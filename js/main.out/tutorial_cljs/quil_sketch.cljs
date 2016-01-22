(ns tutorial-cljs.quil-sketch
  (:require org.processingjs.Processing
            [quil.core :as q]
            [quil.middleware :as m]
            [quil.sketch]
            [reagent.core :as r]
            ))

(defn parse-make-sketch [form]
  {:post [(every? (comp not nil?)
                  (map % [:setup :update :draw :size]))]}
  (try
    (let [name (second form)
          opts (apply hash-map (drop 2 form))]
      (assoc opts :name name))
    (catch js/Error e
      (throw (js/Error. "Invalid makesketch form")))))

(defonce current-sketch (atom nil))
(defonce current-applet (atom nil))

(defonce applets (atom {}))

(def styles
  {
   :container {:position :absolute
               :z-index 10000
               :box-shadow "0 0 5px #999"
               :border-radius 2
               :background-color :white
               }
   :handle {:cursor :pointer
            :display :flex
            :justify-content :center
            :align-items :center
            }
   :title {:flex 1
           :padding "5px 10px"
           :font-weight :bold}
   :close-button {:cursor :pointer
                  :background-color :transparent
                  :border :none
                  :font-weight :bold
                  :font-size "1.2em"
                  :padding "6px 10px 8px"
                  :line-height "10px"
                  :color "#999"}
   })

(defn canvas [[width height] on-canvas]
  (r/create-class
   {:component-did-mount
    (fn [this]
      (on-canvas (r/dom-node this)))
    :reagent-render
    (fn []
      [:canvas {:width width :height height}])}))

(defn mobile-sketch [name title size pos-atom on-canvas on-close]
  (let [{:keys [left top]} @pos-atom
        state (r/atom {:top top
                       :left left
                       :moving false
                       :dx 0
                       :dy 0})
        move-listener (fn [evt]
                        (.preventDefault evt)
                        (swap! state (fn [{:keys [dx dy] :as state}]
                                       (assoc state
                                              :top (- (.-clientY evt) dy)
                                              :left (- (.-clientX evt) dx)))))
        up-listener (fn up-listener [evt]
                      (let [{:keys [top left]} @state]
                        (swap! pos-atom assoc :top top :left left))
                      (.preventDefault evt)
                      (.removeEventListener js/window "mouseup" up-listener)
                      (.removeEventListener js/window "mousemove" move-listener)
                      (swap! state assoc :moving false))
        ]
    (fn []
      (let [{:keys [top left moving]} @state]
        [:div
         {:style (merge (:container styles)
                        {:top top
                         :left left})}
         [canvas size on-canvas]
         [:div
          {:style (:handle styles)
           :on-mouse-down
           (fn [evt]
             (.preventDefault evt)
             (.addEventListener js/window "mouseup" up-listener)
             (.addEventListener js/window "mousemove" move-listener)
             (swap! state assoc
                    :dx (- (.-clientX evt) left)
                    :dy (- (.-clientY evt) top)
                    :moving true))
           }
          ;; [:span {:style (:name styles)} name]
          [:span {:style (:title styles)} title]
          [:button {:on-click on-close
                    :style (:close-button styles)}
           "×"]
          ]]))))

(defn make-el []
  (let [el (js/document.createElement "canvas")]
    (aset el "style" "position" "absolute")
    (aset el "style" "top" "0")
    (aset el "style" "right" "0")
    el))

(defn get-in-ns [ns sym]
  (let [parts (vec (map munge (.split (str ns) ".")))]
    (reduce (fnil aget (js-obj))
            js/window
            (conj parts (str sym)))))

(defn get-fn [ns sym]
  (fn [state]
    (let [f (get-in-ns ns sym)
          res (when (and f (= js/Function (type f)))
                (f state))]
      (or res state))))

(defn handle-make-sketch [ns form]
  (js/console.log "make sketch" form)
  (let [opts (parse-make-sketch form)
        old-data (@applets (:name opts))
        _ (js/console.log (:name opts) old-data @applets)
        [width height] (:size opts)
        node (or (:node old-data)
                 (js/document.createElement "div"))
        pos-atom (or (:pos-atom old-data)
                     (atom {:top 20
                            :left (- (.-innerWidth js/window) width 20)}))
        _ (js/React.unmountComponentAtNode node)
        sketch (quil.sketch/make-sketch
                ;; TODO get actual values for title & size...
                {:title (:title opts)
                 :setup (fn []
                          (let [new-applet (quil.sketch/current-applet)]
                            (swap! applets update (:name opts)
                                   (fn [old]
                                     (when old (.exit (:applet old)))
                                     {:node node
                                      :pos-atom pos-atom
                                      :applet new-applet}))
                            (reset! current-applet new-applet)
                            ;; Allow q/* functions to be used from the REPL
                            (js/setTimeout #(set! quil.sketch/*applet* new-applet) 5)
                            ((get-fn ns (:setup opts)))))
                 :draw (get-fn ns (:draw opts))
                 :update (get-fn ns (:update opts))
                 :middleware [m/fun-mode]
                 :size (:size opts)})]
    (js/document.body.appendChild node)
    (r/render
     [mobile-sketch
      (str (:name opts))
      (:title opts)
      (:size opts)
      pos-atom
      #(js/Processing. % sketch)
      (fn []
        (when-let [data (@applets (:name opts))]
          (.exit (:applet data))
          (when-let [parent (.-parentNode (:node data))]
            (.removeChild parent (:node data)))
          (swap! applets dissoc (:name opts))))]
     node)
    (reset! current-sketch sketch)))
