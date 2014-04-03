(ns palimpsest.keys)

(def capital-map
  {\- \_
   \= \+
   \1 \!
   \2 \@
   \3 \#
   \4 \$
   \5 \%
   \6 \^
   \7 \&
   \8 \*
   \9 \(
   \0 \)
   \, \<
   \. \>
   \/ \?
   \` \~
   \[ \{
   \] \}
   \\ \|})

(defn event->char [event]
  (let [kc (.-keyCode event)]
    (cond
      (not (.-shiftKey event)) (char kc)
      (and (> kc 64) (<= kc 90)) (char (+ kc 32))
      (contains? capital-map (char kc)) (capital-map (char kc))
      :else (char kc))))
