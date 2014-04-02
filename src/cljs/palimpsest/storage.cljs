(ns palimpsest.storage
  (:require [goog.dom :as dom]
            [palimpsest.types :refer [Coord Stroke]]))

(defn hashmap->stroke [hashmap]
  (Stroke.
    (vec (for [coord (hashmap "coords")]
           (Coord. (coord "x") (coord "y"))))
    (:thickness hashmap)))

(defn strokes->json [strokes]
  (JSON/stringify (clj->js {:strokes strokes})))

(defn json->strokes [strokes]
  (let [raw-strokes ((-> strokes JSON/stringify js->clj) "strokes")]
    (vec (for [hashmap raw-strokes]
           (hashmap->stroke hashmap)))))

(defn save-strokes [strokes]
  (let [jsondata (strokes->json strokes)
        data-url (str "data:application/json;charset=utf-8,"
                      (js/encodeURIComponent jsondata))
        download-link (dom/getElement "download-link")]
    (set! (.-href download-link) data-url)
    (.click download-link)))
