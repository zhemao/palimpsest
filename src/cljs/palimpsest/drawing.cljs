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
  (let [canvas (.-canvas ctx)
        w (.-width canvas)
        h (.-height canvas)]
      (canvas/clear-rect ctx {:x 0 :y 0 :w w :h h})))

(defn calc-expanded-dim [normal-dim offset-dim]
  (if (< offset-dim 0)
    (- normal-dim offset-dim)
    normal-dim))

(defn redraw-all-strokes [ctx strokes origin]
  (clear-screen ctx)
  ; before doing anything, save the current state of the canvas
  (canvas/save ctx)
  (let [trans-x (:x origin)
        trans-y (:y origin)]
    (canvas/translate ctx trans-x trans-y)
    (doseq [stroke strokes]
      (draw-stroke ctx stroke)))
  ; restore the canvas back to its original position
  (canvas/restore ctx))
