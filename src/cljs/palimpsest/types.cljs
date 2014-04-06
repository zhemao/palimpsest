(ns palimpsest.types)

; x and y should be integers
(defrecord Coord [x y])

(defprotocol StrokeProtocol
  (add-coord [this p])
  (change-thickness [this t]))

; coords is a sequence (preferrably vector) of coords
; thickness is an integer
(defrecord Stroke [coords thickness]
  StrokeProtocol
  (add-coord [this p]
    (Stroke. (conj (:coords this) p)
             (:thickness this)))
  (change-thickness [this t] (Stroke. (:coords this) t)))

(defn last-coord [stroke-seq]
  (-> (last stroke-seq) (:coords) (last)))

(defn extend-last-stroke [stroke-seq coord]
  (let [new-stroke (add-coord (last stroke-seq) coord)]
    (conj (vec (drop-last stroke-seq)) new-stroke)))

; a cubic bezier function represented by its control points
(defrecord Bezier [v0 v1 v2 v3])
