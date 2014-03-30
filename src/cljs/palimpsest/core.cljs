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

(defn event->coord [event]
  (let [canvasrect (.getBoundingClientRect canvas-element)]
    (Coord. (- (.-clientX event) (.-left canvasrect))
            (- (.-clientY event) (.-top canvasrect)))))

(defn mousemove-handler [event]
  (when @dragging
    (let [from-coord (last-coord @drawn-strokes)
          to-coord (event->coord event)]
      (drawing/draw-line canvas-context from-coord to-coord)
      (swap! drawn-strokes extend-last-stroke to-coord))))

(defn mousedown-handler [event]
  (when (= 0 (.-button event))
    (let [coord (event->coord event)]
      (swap! drawn-strokes conj (Stroke. [coord] 1))
      (swap! dragging #(-> true)))))

(defn mouseup-handler [event]
  (swap! dragging #(-> false)))

(defn keyevent->char [event]
  (let [kc (.-keyCode event)]
    (char
      (if (and (> kc 64) (<= kc 90)
               (not (.-shiftKey event)))
        (+ kc 32) kc))))

(defn undo-stroke []
  (let [last-stroke (last @drawn-strokes)]
    (swap! drawn-strokes (comp vec drop-last))
    (swap! undone-strokes conj last-stroke))
  (drawing/clear-screen canvas-context)
  (doseq [stroke @drawn-strokes]
    (drawing/draw-stroke canvas-context stroke)))

(defn redo-stroke []
  (let [last-undone (first @undone-strokes)]
    (swap! drawn-strokes conj last-undone)
    (swap! undone-strokes rest)
    (drawing/draw-stroke canvas-context last-undone)))

(defn keydown-handler [event]
  (case (keyevent->char event)
    \u (undo-stroke)
    \r (redo-stroke)))

(defn resize-canvas [_]
  (set! (.-width canvas-element)
        (-> (.getBoundingClientRect canvas-element) (.-width)))
  (set! (.-height canvas-element)
        (-> (.getBoundingClientRect canvas-element) (.-height))))

(defn init []
  (resize-canvas nil)
  (events/listen document/body "keydown" keydown-handler)
  (add-canvas-handlers
    ["resize"    resize-canvas]
    ["mousemove" mousemove-handler]
    ["mousedown" mousedown-handler]
    ["mouseup"   mouseup-handler])
  (canvas/fill-style canvas-context "#000"))

(init)
