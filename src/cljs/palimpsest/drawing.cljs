(ns palimpsest.drawing
  (:require [monet.canvas :as canvas]))

(defn move-to-coord [ctx coord]
  (canvas/move-to ctx (:x coord) (:y coord)))

(defn line-to-coord [ctx coord]
  (canvas/line-to ctx (:x coord) (:y coord)))

(defn draw-line [ctx from to]
  (canvas/begin-path ctx)
  (move-to-coord ctx from)
  (line-to-coord ctx to)
  (canvas/stroke ctx)
  (canvas/close-path ctx))

(defn draw-stroke [ctx stroke]
  (canvas/begin-path ctx)
  (canvas/stroke-width ctx (:thickness stroke))
  (let [coords (:coords stroke)]
    (move-to-coord ctx (first coords))
    (doseq [c (rest coords)]
      (line-to-coord ctx c)))
  (canvas/stroke ctx)
  (canvas/close-path ctx))

(defn clear-screen [ctx]
  (let [canvas (.-canvas ctx)]
    (let [w (.-width canvas)
          h (.-height canvas)]
      (canvas/clear-rect ctx {:x 0 :y 0 :w w :h h}))))
