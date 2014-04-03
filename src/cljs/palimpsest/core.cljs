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
            [palimpsest.drawing :as drawing :refer [redraw-all-strokes]]
            [palimpsest.control :refer [start-gesture finish-gesture
                                        move-gesture resize-canvas
                                        undo-stroke redo-stroke
                                        inc-thickness dec-thickness
                                        set-thickness init-canvas
                                        get-strokes set-strokes]]
            [palimpsest.storage :refer [save-strokes load-strokes]]
            [palimpsest.types :refer [Coord]]))

(def canvas-element (dom/getElement "canvas"))
(def current-touch-id (atom nil))

(defn add-canvas-handlers [& args]
  (doseq [[typ cb] args]
    (events/listen canvas-element typ cb)))

(def input-mode (atom :draw))

(defn event->coord [event]
  (let [canvasrect (.getBoundingClientRect canvas-element)]
    (Coord. (- (.-clientX event) (.-left canvasrect))
            (- (.-clientY event) (.-top canvasrect)))))

(defn mousedown-handler [event]
  (when (= 0 (.-button event))
    (start-gesture @input-mode (event->coord event))))

(defn mousemove-handler [event]
  (move-gesture @input-mode (event->coord event)))

(defn mouseup-handler [event]
  (when (= 0 (.-button event))
    (finish-gesture @input-mode)))

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
        (start-gesture @input-mode (event->coord touch))))))

(defn touchmove-handler [event]
  (let [touchlist (-> event .getBrowserEvent .-targetTouches)
        touch (identified-touch touchlist)]
    (pathfinder/log (.-identifier touch))
    (when-not (nil? touch)
      (move-gesture @input-mode (event->coord touch)))))

(defn touchend-handler [event]
  (let [touchlist (-> event .getBrowserEvent .-changedTouches)
        touch (identified-touch touchlist)]
    (pathfinder/log (.-identifier touch))
    (when-not (nil? touch)
      (finish-gesture @input-mode))))

(defn change-cssclass [id cssclass]
  (set! (-> (dom/getElement id) .-className) cssclass))

(defn set-input-mode [mode]
  (let [other-mode (case mode
          "draw" "pan"
          "pan"  "draw")]
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
      "save" (save-strokes (get-strokes))
      (pathfinder/log (str "unknown target " target-id)))))

(defn setup-click-handler [elem-ids]
  (doseq [id elem-ids]
    (events/listen (dom/getElement id) "click" click-handler)))

(defn input-handler [event]
  (let [target-id (-> event .-currentTarget .-id)
        value (.-value (dom/getElement target-id))]
    (case target-id
      "stroke-thickness" (set-thickness (int value))
      (pathfinder/log (str "Unknown target " target-id)))))

(defn setup-input-handler [elem-ids]
  (doseq [id elem-ids]
    (events/listen (dom/getElement id) "input" input-handler)))

(defn handle-open [event]
  (let [files (-> event .-target .-files)]
    (when (> (.-length files) 0)
      (load-strokes (.item files 0)
                    (fn [strokes] (set-strokes strokes))))))

(defn init []
  (init-canvas)
  (events/listen js/window "resize" resize-canvas)
  (events/listen (dom/getElement "open") "change" handle-open)
  (setup-click-handler ["increase-thickness" "decrease-thickness"
                        "undo" "redo" "draw-mode" "pan-mode" "save"])
  (setup-input-handler ["stroke-thickness"])
  (add-canvas-handlers
    ["touchmove"  touchmove-handler]
    ["touchstart" touchstart-handler]
    ["touchend"   touchend-handler]
    ["mousemove"  mousemove-handler]
    ["mousedown"  mousedown-handler]
    ["mouseup"    mouseup-handler]))

(init)
