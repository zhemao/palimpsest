(ns palimpsest.control
  (:require [goog.dom :as dom]
            [monet.canvas :as canvas]
            [palimpsest.drawing :refer [redraw-all-strokes]]
            [palimpsest.smoothing :refer [smooth-stroke]]
            [palimpsest.types :refer [Coord Stroke last-coord
                                      extend-last-stroke]]))

(def canvas-element (dom/getElement "canvas"))
(def canvas-context (canvas/get-context canvas-element "2d"))

(def dragging (atom false))
(def last-pan-coord (atom nil))
(def canvas-origin (atom (Coord. 0 0)))
(def drawn-strokes (atom []))
(def undone-strokes (atom '()))
(def stroke-thickness (atom 1))
(def smoothing-on (atom true))

(defn translate-coord [coord]
  (Coord. (- (:x coord) (:x @canvas-origin))
          (- (:y coord) (:y @canvas-origin))))

(defn start-stroke [coord]
  (let [coord (translate-coord coord)]
    (swap! drawn-strokes conj (Stroke. [coord] @stroke-thickness))))

(defn finish-stroke []
  (when @smoothing-on
    (swap! drawn-strokes
           #(conj (vec (drop-last %)) (smooth-stroke (last %))))
    (redraw-all-strokes canvas-context @drawn-strokes @canvas-origin))
  (swap! undone-strokes #()))

(defn start-pan [coord]
  (swap! last-pan-coord #(-> coord)))

(defn finish-pan []
  (swap! last-pan-coord #(-> nil)))

(defn add-drawn-coord [coord]
  (let [coord (translate-coord coord)
        from-coord (last-coord @drawn-strokes)]
    (canvas/stroke-width canvas-context @stroke-thickness)
    (swap! drawn-strokes extend-last-stroke coord)
    (redraw-all-strokes canvas-context @drawn-strokes @canvas-origin)))

(defn add-negative [a b]
  (let [c (+ a b)]
    (if (> c 0) 0 c)))

(defn update-pan [coord]
  (let [trans-x (- (:x coord) (:x @last-pan-coord))
        trans-y (- (:y coord) (:y @last-pan-coord))]
    (swap! canvas-origin #(Coord. (add-negative (:x %) trans-x)
                                  (add-negative (:y %) trans-y)))
    (swap! last-pan-coord #(-> coord))
    (redraw-all-strokes canvas-context @drawn-strokes @canvas-origin)))

(defn start-gesture [mode coord]
  (swap! dragging #(-> true))
  (case mode
    :draw (start-stroke coord)
    :pan  (start-pan coord)))

(defn finish-gesture [mode]
  (swap! dragging #(-> false))
  (case mode
    :draw (finish-stroke)
    :pan  (finish-pan)))

(defn move-gesture [mode coord]
  (when @dragging
    (case mode
      :draw (add-drawn-coord coord)
      :pan  (update-pan coord))))

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
      (redraw-all-strokes canvas-context @drawn-strokes @canvas-origin))))

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

(defn update-statusbar []
  (set! (.-value (dom/getElement "stroke-thickness")) @stroke-thickness))

(defn inc-thickness []
  (swap! stroke-thickness #(if (= % 50) % (inc %)))
  (update-statusbar))

(defn dec-thickness []
  (swap! stroke-thickness #(if (zero? %) % (dec %)))
  (update-statusbar))

(defn set-thickness [thickness]
  (swap! stroke-thickness #(-> thickness)))

(defn init-canvas []
  (resize-canvas nil)
  (canvas/fill-style canvas-context "#000"))

(defn get-strokes []
  @drawn-strokes)

(defn enable-smoothing [en]
  (swap! smoothing-on #(-> en)))

(defn set-strokes [strokes]
  (swap! drawn-strokes #(-> strokes))
  (swap! undone-strokes #())
  (swap! canvas-origin #(Coord. 0 0))
  (redraw-all-strokes canvas-context @drawn-strokes @canvas-origin))
