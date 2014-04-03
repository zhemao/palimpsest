// Compiled by ClojureScript 0.0-2138
goog.provide('palimpsest.panning');
goog.require('cljs.core');
palimpsest.panning.last_pan_coord = cljs.core.atom.call(null,null);
palimpsest.panning.canvas_origin = cljs.core.atom.call(null,(new palimpsest.panning.Coord(0,0)));
