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
            [palimpsest.keyevent :refer [event->char]]
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

(defn event->coord [event]
  (let [canvasrect (.getBoundingClientRect canvas-element)]
    (Coord. (- (.-clientX event) (.-left canvasrect))
            (- (.-clientY event) (.-top canvasrect)))))

(defn mousemove-handler [event]
  (when @dragging
    (let [from-coord (last-coord @drawn-strokes)
          to-coord (event->coord event)]
      (canvas/stroke-width canvas-context @stroke-thickness)
      (drawing/draw-line canvas-context from-coord to-coord)
      (swap! drawn-strokes extend-last-stroke to-coord))))

(defn mousedown-handler [event]
  (when (= 0 (.-button event))
    (let [coord (event->coord event)]
      (swap! drawn-strokes conj (Stroke. [coord] @stroke-thickness))
      (swap! dragging #(-> true)))))

(defn mouseup-handler [event]
  (when (= 0 (.-button event))
    (swap! undone-strokes #())
    (swap! dragging #(-> false))))

(defn undo-stroke []
  (when-not (empty? @drawn-strokes)
    (let [last-stroke (last @drawn-strokes)]
      (swap! drawn-strokes (comp vec drop-last))
      (swap! undone-strokes conj last-stroke))
    (drawing/clear-screen canvas-context)
    (doseq [stroke @drawn-strokes]
      (drawing/draw-stroke canvas-context stroke))))

(defn redo-stroke []
  (when-not (empty? @undone-strokes)
    (let [last-undone (first @undone-strokes)]
      (swap! drawn-strokes conj last-undone)
      (swap! undone-strokes rest)
      (drawing/draw-stroke canvas-context last-undone))))

(defn update-statusbar []
  (set! (.-innerHTML (dom/getElement "stroke-thickness")) @stroke-thickness))

(defn inc-thickness []
  (swap! stroke-thickness #(if (= % 50) % (inc %)))
  (update-statusbar))

(defn dec-thickness []
  (swap! stroke-thickness #(if (zero? %) % (dec %)))
  (update-statusbar))

(defn keydown-handler [event]
  (let [keychar (event->char event)]
    (case keychar
      \u (undo-stroke)
      \r (redo-stroke)
      \+ (inc-thickness)
      \- (dec-thickness)
      (.log js/console (str "Unused key " keychar)))))

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
