(ns palimpsest.pathfinder
  (:require [goog.events :as events])
  (:import [goog.net XhrIo]))

(defn log [message]
  (.log js/console message)
  (let [request (XhrIo.)]
    (.send request "/debug" "POST" (str message))))
