(ns palimpsest.smoothing
  (:require [palimpsest.types :refer [Coord Stroke Bezier]]))

; |a|
(defn v2-mag [a]
  (Math/sqrt (+ (* (:x a) (:x a))
                (* (:y a) (:y a)))))

; returns the unit vector corresponding to vector a
(defn v2-normalize [a]
  (when (and (= 0 (:x a)) (= 0 (:y a)))
    (.log js/console "Warning! Can't normalize zero vector"))
  (let [mag (v2-mag a)]
    (Coord. (/ (:x a) mag)
            (/ (:y a) mag))))

(defn v2-sub [a b]
  (Coord. (- (:x a) (:x b))
          (- (:y a) (:y b))))

(defn v2-add [a b]
  (Coord. (+ (:x a) (:x b))
          (+ (:y a) (:y b))))

; computes the normalized tangent vector btw two points
; the vector will point "towards" point a
(defn v2-tangent [a b]
  (v2-normalize (v2-sub a b)))

; computes the tangent of the center point b
; the direction is in the "rightwards" direction
(defn v2-center-tangent [a b c]
  (let [left-tan (v2-sub b a)
        right-tan (v2-sub c b)
        avg-tan (v2-add left-tan right-tan)]
    (v2-normalize avg-tan)))

(defn v2-dist [a b]
  (v2-mag (v2-sub a b)))

(defn v2-scale [s v]
  (Coord. (* s (:x v)) (* s (:y v))))

(defn v2-reverse [v]
  (v2-scale -1.0 v))

(defn v2-dot [a b]
  (+ (* (:x a) (:x b))
     (* (:y a) (:y b))))


(defn parameter-normalize [params]
  (let [last-t (last params)]
    (vec (map #(/ % last-t) params))))

(defn calc-distances [coords]
  (let [npts (count coords)]
    (for [i (range 1 npts)]
      (v2-dist (nth coords i)
                  (nth coords (dec i))))))

(defn vec-scan [values]
  (reduce (fn [result v] (conj result (+ (last result) v)))
          [0.0] values))

(defn chord-parameterize [coords]
  (let [npts (count coords)]
    (-> (calc-distances coords) vec-scan parameter-normalize)))

(defn B0 [t]
  (let [tmp (- 1.0 t)]
    (* tmp tmp tmp)))

(defn B1 [t]
  (let [tmp (- 1.0 t)]
    (* 3 t tmp tmp)))

(defn B2 [t]
  (let [tmp (- 1.0 t)]
    (* 3 t t tmp)))

(defn B3 [t]
  (* t t t))

(defn calcVecX [coords params A]
  (let [V0 (first coords)
        V3 (last coords)]
    (->>
      (map (fn [d u]
             (v2-sub d (v2-add
                         (v2-scale (+ (B0 u) (B1 u)) V0)
                         (v2-scale (+ (B2 u) (B3 u)) V3))))
           coords params)
      (map (fn [[a0 a1] tmp] [(v2-dot a0 tmp) (v2-dot a1 tmp)]) A)
      (reduce (fn [[x0 x1] [t0 t1]] [(+ x0 t0) (+ x1 t1)]) [0.0 0.0]))))

(def smallest-alpha 1.0e-6)

(defn coord->str [coord]
  (str "(" (:x coord) ", " (:y coord) ")"))

(defn bezier->str [bezier]
  (str
    "V0: " (coord->str (:v0 bezier)) ", "
    "V1: " (coord->str (:v1 bezier)) ", "
    "V2: " (coord->str (:v2 bezier)) ", "
    "V3: " (coord->str (:v3 bezier))))

(defn bezier3-calc [bezier t]
  (v2-add
    (v2-add (v2-scale (B0 t) (:v0 bezier))
            (v2-scale (B1 t) (:v1 bezier)))
    (v2-add (v2-scale (B2 t) (:v2 bezier))
            (v2-scale (B3 t) (:v3 bezier)))))

(defn bezier3-deriv [bezier3]
  [(v2-scale 3 (v2-sub (:v1 bezier3) (:v0 bezier3)))
   (v2-scale 3 (v2-sub (:v2 bezier3) (:v1 bezier3)))
   (v2-scale 3 (v2-sub (:v3 bezier3) (:v2 bezier3)))])

(defn bezier2-calc [[v0 v1 v2] t]
  (let [tmp (- 1.0 t)
        b0 (* tmp tmp)
        b1 (* 2 tmp t)
        b2 (* t t)]
    (v2-add (v2-scale b0 v0)
            (v2-add
              (v2-scale b1 v1)
              (v2-scale b2 v2)))))

(defn bezier2-deriv [[v0 v1 v2]]
  [(v2-scale 2 (v2-sub v1 v0))
   (v2-scale 2 (v2-sub v2 v1))])

(defn bezier1-calc [[v0 v1] t]
  (v2-add (v2-scale (- 1.0 t) v0)
          (v2-scale t v1)))

(defn wu-barsky-heuristic [bez0 bez3 tan1 tan2]
  (let [dist (/ (v2-dist bez0 bez3) 3.0)]
    (Bezier. bez0
             (v2-add bez0 (v2-scale dist tan1))
             (v2-add bez3 (v2-scale dist tan2))
             bez3)))

(defn gen-bezier [coords params tan1 tan2]
  (let [npts (count coords)
        A (for [u params] [(v2-scale (B1 u) tan1) (v2-scale (B2 u) tan2)])
        C00 (apply + (for [[a0 _] A] (v2-dot a0 a0)))
        C01 (apply + (for [[a0 a1] A] (v2-dot a0 a1)))
        C10 C01
        C11 (apply + (for [[_ a1] A] (v2-dot a1 a1)))
        [X0 X1] (calcVecX coords params A)
        det_C0_C1 (- (* C00 C11) (* C10 C01))
        det_C0_X  (- (* C00 X1) (* C01 X0))
        det_X_C1 (- (* X0 C11) (* X1 C01))
        alpha1 (/ det_X_C1 det_C0_C1)
        alpha2 (/ det_C0_X det_C0_C1)
        bez0 (first coords)
        bez3 (last coords)]
    (if (or (< alpha1 smallest-alpha) (< alpha2 smallest-alpha))
      ; if alpha is too small, we must use the heuristic
      (wu-barsky-heuristic bez0 bez3 tan1 tan2)
      (Bezier. bez0
               (v2-add bez0 (v2-scale alpha1 tan1))
               (v2-add bez3 (v2-scale alpha2 tan2))
               bez3))))

(def fit-error 16.0)
(def adjust-error 4.0)
(def max-adjust-iter 4)

(defn compute-max-error [coords bezier params]
  (->>
    ; calc distances and join with index
    (map (fn [d u i]
           [i (v2-dist d (bezier3-calc bezier u))])
         coords params (range (count coords)))
    ; collect max and split-point
    (reduce (fn [[max-dist split-point :as res-pair] [i dist]]
              (if (>= dist max-dist) [dist i] res-pair))
            [0.0 (/ (count coords) 2)])))

(defn newton-raphson-iter [bezier3 P u]
  (let [bezier2 (bezier3-deriv bezier3)
        bezier1 (bezier2-deriv bezier2)
        Qu (bezier3-calc bezier3 u)
        Q1u (bezier2-calc bezier2 u)
        Q2u (bezier1-calc bezier1 u)
        numer (v2-dot (v2-sub Qu P) Q1u)
        denom (+ (v2-dot (v2-sub Qu P) Q2u) (v2-dot Q1u Q1u))]
    (- u (/ numer denom))))

(defn reparameterize [bezier coords params]
  (vec (map #(newton-raphson-iter bezier %1 %2) coords params)))

(defn adjust-bezier [bezier coords params tan1 tan2 iter-error max-iter]
  (loop [bezier bezier
         params params
         i 0]
    (let [error (compute-max-error coords bezier params)]
      (if (or (<= error iter-error) (>= i max-iter))
        bezier
        (let [newparams (reparameterize bezier coords params)
              newbezier (gen-bezier coords newparams tan1 tan2)]
          (recur newbezier newparams (inc i)))))))

(defn fit-cubic
  ([coords]
    (fit-cubic coords
               (v2-tangent
                 (second coords)
                 (first coords))
               (v2-tangent
                 (nth coords (- (count coords) 2))
                 (last coords))))
  ([coords tan1 tan2]
    (if (= (count coords) 2)
      ; use the heuristic if there are no intermediate points
      [(wu-barsky-heuristic (first coords) (last coords) tan1 tan2)]
      (let [params (chord-parameterize coords)
            bezier (gen-bezier coords params tan1 tan2)
            [max-error split-point] (compute-max-error coords bezier params)]
        (if (< max-error fit-error)
          [(adjust-bezier bezier coords params tan1 tan2
                          adjust-error max-adjust-iter)]
          (let [center-tan (v2-center-tangent
                             (nth coords (dec split-point))
                             (nth coords split-point)
                             (nth coords (inc split-point)))]
            (vec (concat
                   (fit-cubic
                     (subvec coords 0 (inc split-point)) tan1
                     (v2-reverse center-tan))
                   (fit-cubic
                      (subvec coords split-point) center-tan tan2)))))))))

(defn path-length [coords]
  (first (reduce
           (fn [[seg-len last-coord] next-coord]
             [(+ seg-len (v2-dist last-coord next-coord)) next-coord])
           [0.0 (first coords)] (rest coords))))

(defn bezier3-pw-calc [beziers t]
  (let [i (int t)]
    (bezier3-calc (nth beziers i) (- t i))))

; having duplicate adjacent points screws up the distance
; calculations, so we need to remove them before doing the fitting
(defn dedup-points [coords]
  (reduce (fn [result c]
            (if (= 0 (v2-dist (last result) c))
              result
              (conj result c)))
          [] coords))

(defn interpolate-points [coords desired-seg-len]
  (let [path-len (path-length coords)]
    (if (< path-len desired-seg-len)
      coords
      (let [npts (/ path-len desired-seg-len)
            beziers (fit-cubic coords)
            step (/ (count beziers) npts)]
        (->
          ; returns a lazy sequence containing the middle points
          (map #(bezier3-pw-calc beziers %) (range step (count beziers) step))
          ; add first point to the front, convert to a vector,
          ; then add last point to end
          (conj (first coords)) vec (conj (last coords)))))))

(defn smooth-stroke [stroke]
  (let [old-coords (dedup-points (:coords stroke))]
    (if (= (count old-coords) 2)
      stroke
      (Stroke.
        (interpolate-points old-coords 10.0)
        (:thickness stroke)))))
