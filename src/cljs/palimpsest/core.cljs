;;; If this namespace requires macros, remember that ClojureScript's
;;; macros are written in Clojure and have to be referenced via the
;;; :require-macros directive where the :as keyword is required, while in Clojure is optional. Even
;;; if you can add files containing macros and compile-time only
;;; functions in the :source-paths setting of the :builds, it is
;;; strongly suggested to add them to the leiningen :source-paths.
(ns palimpsest.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [monet.canvas :as canvas]
            [palimpsest.pathfinder :as pathfinder]
            [palimpsest.drawing :as drawing]
            [palimpsest.types :refer [Coord Stroke
                                      last-coord extend-last-stroke]]
            [cljs.core.async :refer [put! chan <!]]))

(def container-element (dom/getElement "container"))
(def canvas-element (dom/getElement "canvas"))
(def canvas-context (canvas/get-context canvas-element "2d"))

(defn add-canvas-handlers [& args]
  (doseq [[typ cb] args]
    (events/listen canvas-element typ cb)))

(def dragging (atom false))
(def drawn-strokes (atom []))
(def undone-strokes (atom '()))
(def stroke-thickness (atom 1))
(def current-touch-id (atom nil))
(def input-mode (atom :draw))
(def last-pan-coord (atom nil))
(def canvas-origin (atom (Coord. 0 0)))

(defn event->coord [event]
  (let [canvasrect (.getBoundingClientRect canvas-element)]
    (Coord. (- (.-clientX event) (.-left canvasrect))
            (- (.-clientY event) (.-top canvasrect)))))

(defn translate-coord [coord]
  (Coord. (- (:x coord) (:x @canvas-origin))
          (- (:y coord) (:y @canvas-origin))))

(defn redraw-all-strokes [ctx strokes origin]
  (drawing/clear-screen ctx)
  (.restore ctx)
  (.save ctx)
  (let [trans-x (:x origin)
        trans-y (:y origin)]
    (.translate ctx trans-x trans-y))
  (doseq [stroke strokes]
    (drawing/draw-stroke ctx stroke)))

(defn start-stroke [coord]
  (let [coord (translate-coord coord)]
    (swap! drawn-strokes conj (Stroke. [coord] @stroke-thickness))))

(defn finish-stroke []
  (swap! undone-strokes #()))

(defn start-pan [coord]
  (swap! last-pan-coord #(-> coord)))

(defn finish-pan []
  (swap! last-pan-coord #(-> nil)))

(defn start-gesture [coord]
  (swap! dragging #(-> true))
  (case @input-mode
    :draw (start-stroke coord)
    :pan  (start-pan coord)))

(defn finish-gesture []
  (swap! dragging #(-> false))
  (case @input-mode
    :draw (finish-stroke)
    :pan  (finish-pan)))

(defn mousedown-handler [event]
  (when (= 0 (.-button event))
    (start-gesture (event->coord event))))

(defn add-drawn-coord [coord]
    (let [coord (translate-coord coord)
          from-coord (last-coord @drawn-strokes)]
      (canvas/stroke-width canvas-context @stroke-thickness)
      (drawing/draw-line canvas-context from-coord coord)
      (swap! drawn-strokes extend-last-stroke coord)))

(defn update-pan [coord]
  (let [trans-x (- (:x coord) (:x @last-pan-coord))
        trans-y (- (:y coord) (:y @last-pan-coord))]
    (pathfinder/log (str "translating origin by (" trans-x ", " trans-y ")"))
    (swap! canvas-origin #(Coord. (+ (:x %) trans-x) (+ (:y %) trans-y)))
    (swap! last-pan-coord #(-> coord))
    (redraw-all-strokes canvas-context @drawn-strokes @canvas-origin)))

(defn move-gesture [coord]
  (pathfinder/log (str @input-mode))
  (case @input-mode
    :draw (add-drawn-coord coord)
    :pan  (update-pan coord)))

(defn mousemove-handler [event]
  (when @dragging
    (move-gesture (event->coord event))))

(defn mouseup-handler [event]
  (when (= 0 (.-button event))
    (finish-gesture)))

(defn identified-touch [touchlist]
  (let [target-id @current-touch-id
        touchseq (for [i (range (.-length touchlist))] (.item touchlist i))
        matching (filter #(= target-id (.-identifier %)) touchseq)]
    (if-not (empty? matching)
      (first matching) nil)))

(defn first-touch [touchlist]
  (.item touchlist 0))

(defn touchstart-handler [event]
  (let [touchlist (-> event .getBrowserEvent .-targetTouches)]
    (when (not= (.-length touchlist) 0)
      (let [touch (first-touch touchlist)]
        (pathfinder/log (.-identifier touch))
        (swap! current-touch-id #(.-identifier touch))
        (start-gesture (event->coord touch))))))

(defn touchmove-handler [event]
  (let [touchlist (-> event .getBrowserEvent .-targetTouches)
        touch (identified-touch touchlist)]
    (pathfinder/log (.-identifier touch))
    (when (and (not (nil? touch)) @dragging)
      (move-gesture (event->coord touch)))))

(defn touchend-handler [event]
  (let [touchlist (-> event .getBrowserEvent .-changedTouches)
        touch (identified-touch touchlist)]
    (pathfinder/log (.-identifier touch))
    (when-not (nil? touch)
      (finish-gesture))))

(defn undo-stroke []
  (when-not (empty? @drawn-strokes)
    (let [last-stroke (last @drawn-strokes)]
      (swap! drawn-strokes (comp vec drop-last))
      (swap! undone-strokes conj last-stroke))
    (redraw-all-strokes canvas-context @drawn-strokes @canvas-origin)))

(defn redo-stroke []
  (when-not (empty? @undone-strokes)
    (let [last-undone (first @undone-strokes)]
      (swap! drawn-strokes conj last-undone)
      (swap! undone-strokes rest)
      (drawing/draw-stroke canvas-context last-undone))))

(defn update-statusbar []
  (set! (.-value (dom/getElement "stroke-thickness")) @stroke-thickness))

(defn inc-thickness []
  (swap! stroke-thickness #(if (= % 50) % (inc %)))
  (update-statusbar))

(defn dec-thickness []
  (swap! stroke-thickness #(if (zero? %) % (dec %)))
  (update-statusbar))

(defn change-cssclass [id cssclass]
  (set! (-> (dom/getElement id) .-className) cssclass))

(defn set-input-mode [mode]
  (let [other-mode (case mode
          "draw" "pan"
          "pan"  "draw")]
    (pathfinder/log (str "setting input mode to " mode))
    (change-cssclass (str mode "-mode") "toggle-selected")
    (change-cssclass (str other-mode "-mode") "toggle-unselected")
    (swap! input-mode #(keyword mode))))

(defn click-handler [event]
  (let [target-id (-> event .-currentTarget .-id)]
    (case target-id
      "increase-thickness" (inc-thickness)
      "decrease-thickness" (dec-thickness)
      "undo" (undo-stroke)
      "redo" (redo-stroke)
      "draw-mode" (set-input-mode "draw")
      "pan-mode"  (set-input-mode "pan")
      (pathfinder/log (str "unknown target " target-id)))))

(defn setup-click-handler [elem-ids]
  (doseq [id elem-ids]
    (events/listen (dom/getElement id) "click" click-handler)))

(defn input-handler [event]
  (let [target-id (-> event .-currentTarget .-id)
        value (.-value (dom/getElement target-id))]
    (case target-id
      "stroke-thickness" (swap! stroke-thickness #(int value))
      (pathfinder/log (str "Unknown target " target-id)))))

(defn setup-input-handler [elem-ids]
  (doseq [id elem-ids]
    (events/listen (dom/getElement id) "input" input-handler)))

(defn resize-canvas [_]
  (let [title-rect  (.getBoundingClientRect (dom/getElement "titlebar"))
        status-rect (.getBoundingClientRect (dom/getElement "statusbar"))
        desired-height (- window/innerHeight
                          (.-height title-rect)
                          (.-height status-rect))]
    (set! (-> canvas-element .-style .-width) (str window/innerWidth "px"))
    (set! (.-height (.-style canvas-element)) (str desired-height "px"))
    (set! (.-width canvas-element)
          (-> (.getBoundingClientRect canvas-element) .-width))
    (set! (.-height canvas-element)
          (-> (.getBoundingClientRect canvas-element) .-height))
    (redraw-all-strokes canvas-context @drawn-strokes @canvas-origin)))

(defn init []
  (resize-canvas nil)
  (.save canvas-context)
  (events/listen js/window "resize" resize-canvas)
  (setup-click-handler ["increase-thickness" "decrease-thickness"
                        "undo" "redo" "draw-mode" "pan-mode"])
  (setup-input-handler ["stroke-thickness"])
  (add-canvas-handlers
    ["touchmove"  touchmove-handler]
    ["touchstart" touchstart-handler]
    ["touchend"   touchend-handler]
    ["mousemove"  mousemove-handler]
    ["mousedown"  mousedown-handler]
    ["mouseup"    mouseup-handler])
  (canvas/fill-style canvas-context "#000"))

(try
  (init)
  (catch js/Object e
    (pathfinder/log e)))
