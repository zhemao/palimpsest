// Compiled by ClojureScript 0.0-2138
goog.provide('palimpsest.gestures');
goog.require('cljs.core');
goog.require('palimpsest.drawing');
goog.require('palimpsest.types');
goog.require('palimpsest.types');
goog.require('palimpsest.drawing');
goog.require('palimpsest.drawing');
palimpsest.gestures.dragging = cljs.core.atom.call(null,false);
palimpsest.gestures.last_pan_coord = cljs.core.atom.call(null,null);
palimpsest.gestures.canvas_origin = cljs.core.atom.call(null,(new palimpsest.types.Coord(0,0)));
palimpsest.gestures.drawn_strokes = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
palimpsest.gestures.undone_strokes = cljs.core.atom.call(null,cljs.core.List.EMPTY);
palimpsest.gestures.stroke_thickness = cljs.core.atom.call(null,1);
palimpsest.gestures.current_touch_id = cljs.core.atom.call(null,null);
palimpsest.gestures.translate_coord = (function translate_coord(coord){return (new palimpsest.types.Coord((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(coord) - new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,palimpsest.gestures.canvas_origin))),(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(coord) - new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,palimpsest.gestures.canvas_origin)))));
});
palimpsest.gestures.start_stroke = (function start_stroke(coord){var coord__$1 = palimpsest.gestures.translate_coord.call(null,coord);return cljs.core.swap_BANG_.call(null,palimpsest.gestures.drawn_strokes,cljs.core.conj,(new palimpsest.types.Stroke(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord__$1], null),cljs.core.deref.call(null,palimpsest.gestures.stroke_thickness))));
});
palimpsest.gestures.finish_stroke = (function finish_stroke(){return cljs.core.swap_BANG_.call(null,palimpsest.gestures.undone_strokes,(function (){return cljs.core.List.EMPTY;
}));
});
palimpsest.gestures.start_pan = (function start_pan(coord){return cljs.core.swap_BANG_.call(null,palimpsest.gestures.last_pan_coord,(function (){return coord;
}));
});
palimpsest.gestures.finish_pan = (function finish_pan(){return cljs.core.swap_BANG_.call(null,palimpsest.gestures.last_pan_coord,(function (){return null;
}));
});
palimpsest.gestures.add_drawn_coord = (function add_drawn_coord(coord){var coord__$1 = palimpsest.gestures.translate_coord.call(null,coord);var from_coord = palimpsest.types.last_coord.call(null,cljs.core.deref.call(null,palimpsest.gestures.drawn_strokes));canvas.stroke_width.call(null,palimpsest.gestures.canvas_context,cljs.core.deref.call(null,palimpsest.gestures.stroke_thickness));
palimpsest.drawing.draw_line.call(null,palimpsest.gestures.canvas_context,from_coord,coord__$1);
return cljs.core.swap_BANG_.call(null,palimpsest.gestures.drawn_strokes,palimpsest.types.extend_last_stroke,coord__$1);
});
palimpsest.gestures.update_pan = (function update_pan(coord){var trans_x = (new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(coord) - new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,palimpsest.gestures.last_pan_coord)));var trans_y = (new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(coord) - new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,palimpsest.gestures.last_pan_coord)));pathfinder.log.call(null,[cljs.core.str("translating origin by ("),cljs.core.str(trans_x),cljs.core.str(", "),cljs.core.str(trans_y),cljs.core.str(")")].join(''));
cljs.core.swap_BANG_.call(null,palimpsest.gestures.canvas_origin,(function (p1__12950_SHARP_){return (new palimpsest.types.Coord((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__12950_SHARP_) + trans_x),(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__12950_SHARP_) + trans_y)));
}));
cljs.core.swap_BANG_.call(null,palimpsest.gestures.last_pan_coord,(function (){return coord;
}));
return palimpsest.drawing.redraw_all_strokes.call(null,palimpsest.gestures.canvas_context,cljs.core.deref.call(null,palimpsest.gestures.drawn_strokes),cljs.core.deref.call(null,palimpsest.gestures.canvas_origin));
});
palimpsest.gestures.start_gesture = (function start_gesture(mode,coord){cljs.core.swap_BANG_.call(null,palimpsest.gestures.dragging,(function (){return true;
}));
var G__12952 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pan","pan",1014014991),G__12952))
{return palimpsest.gestures.start_pan.call(null,coord);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"draw","draw",1016996022),G__12952))
{return palimpsest.gestures.start_stroke.call(null,coord);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(mode)].join('')));
} else
{return null;
}
}
}
});
palimpsest.gestures.finish_gesture = (function finish_gesture(mode){cljs.core.swap_BANG_.call(null,palimpsest.gestures.dragging,(function (){return false;
}));
var G__12954 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pan","pan",1014014991),G__12954))
{return palimpsest.gestures.finish_pan.call(null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"draw","draw",1016996022),G__12954))
{return palimpsest.gestures.finish_stroke.call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(mode)].join('')));
} else
{return null;
}
}
}
});
palimpsest.gestures.move_gesture = (function move_gesture(mode,coord){if(cljs.core.truth_(cljs.core.deref.call(null,palimpsest.gestures.dragging)))
{var G__12956 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pan","pan",1014014991),G__12956))
{return palimpsest.gestures.update_pan.call(null,coord);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"draw","draw",1016996022),G__12956))
{return palimpsest.gestures.add_drawn_coord.call(null,coord);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(mode)].join('')));
} else
{return null;
}
}
}
} else
{return null;
}
});
