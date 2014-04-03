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

(defn calc-buffer-dim [normal-dim offset-dim]
  (if (< offset-dim 0)
    (- normal-dim offset-dim)
    normal-dim))

(defn redraw-all-strokes [ctx strokes origin]
  (clear-screen ctx)
  (let [buffer-canvas (.createElement js/document "canvas")
        buffer-ctx (.getContext buffer-canvas "2d")
        canvas-width (-> ctx .-canvas .-width)
        canvas-height (-> ctx .-canvas .-height)
        trans-x (:x origin)
        trans-y (:y origin)
        buffer-width (calc-buffer-dim canvas-width trans-x)
        buffer-height (calc-buffer-dim canvas-height trans-y)]
    (set! (.-width buffer-canvas) buffer-width)
    (set! (.-height buffer-canvas) buffer-height)
    (doseq [stroke strokes]
      (draw-stroke buffer-ctx stroke))
    (canvas/draw-image ctx buffer-canvas trans-x trans-y)))
