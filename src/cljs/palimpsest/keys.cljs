(ns palimpsest.keyevent)

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

(def keycode-map
  {186 \;
   187 \=
   188 \,
   189 \-
   190 \.
   191 \/
   192 \`
   219 \[
   220 \\
   221 \]})

(defn event->char [event]
  (let [kc (.-keyCode event)]
    (cond 
      ; alphabetical
      (and (> kc 64) (<= kc 90))
        (char (if (.-shiftKey event) kc (+ kc 32)))
      ; numeric
      (and (>= kc 48) (< kc 58))
        (if (.-shiftKey event)
          (capital-map (char kc)) (char kc))
      ; not alphanumeric
      (contains? keycode-map kc)
        (let [lc (keycode-map kc)]
          (if (.-shiftKey event)
            (capital-map lc) lc))
      ; unknown
      :else (char 0))))
