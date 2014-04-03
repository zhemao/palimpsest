(ns palimpsest.gestures
  (:require [palimpsest.drawing :as drawing :refer [redraw-all-strokes]]
            [palimpsest.types :refer [Coord Stroke last-coord
                                      extend-last-stroke]]))

(def dragging (atom false))
(def last-pan-coord (atom nil))
(def canvas-origin (atom (Coord. 0 0)))
(def drawn-strokes (atom []))
(def undone-strokes (atom '()))
(def stroke-thickness (atom 1))
(def current-touch-id (atom nil))

(defn translate-coord [coord]
  (Coord. (- (:x coord) (:x @canvas-origin))
          (- (:y coord) (:y @canvas-origin))))

(defn start-stroke [coord]
  (let [coord (translate-coord coord)]
    (swap! drawn-strokes conj (Stroke. [coord] @stroke-thickness))))

(defn finish-stroke []
  (swap! undone-strokes #()))

(defn start-pan [coord]
  (swap! last-pan-coord #(-> coord)))

(defn finish-pan []
  (swap! last-pan-coord #(-> nil)))

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
