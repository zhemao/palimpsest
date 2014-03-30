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
            [cljs.core.async :refer [put! chan <!]]))

(def container-element (dom/getElement "container"))
(def canvas-element (dom/getElement "canvas"))
(def canvas-context (canvas/get-context canvas-element "2d"))

(defn add-canvas-handlers [& args]
  (doseq [[typ cb] args]
    (events/listen canvas-element typ cb)))

(def dragging (atom false))
(def last-coords (atom [0 0]))

(defn get-coords [event]
  (let [canvasrect (.getBoundingClientRect canvas-element)]
    [(- (.-clientX event) (.-left canvasrect))
     (- (.-clientY event) (.-top canvasrect))]))

(defn draw-line [ctx [from-x from-y] [to-x to-y]]
  (canvas/begin-path ctx)
  (canvas/move-to ctx from-x from-y)
  (canvas/line-to ctx to-x to-y)
  (canvas/stroke ctx)
  (canvas/close-path ctx))

(defn mousemove-handler [event]
  (when @dragging
    (let [coords (get-coords event)]
      (draw-line canvas-context @last-coords coords)
      (swap! last-coords (fn [_] coords)))))

(defn mousedown-handler [event]
  (swap! last-coords (fn [_] (get-coords event)))
  (swap! dragging (fn [_] true)))

(defn mouseup-handler [event]
  (swap! dragging (fn [_] false)))

(defn init []
  (set! (.-width canvas-element)
        (-> (.getBoundingClientRect canvas-element) (.-width)))
  (set! (.-height canvas-element)
        (-> (.getBoundingClientRect canvas-element) (.-height)))
  (add-canvas-handlers
    ["mousemove" mousemove-handler]
    ["mousedown" mousedown-handler]
    ["mouseup"   mouseup-handler])
  (canvas/fill-style canvas-context "#000"))

(init)
