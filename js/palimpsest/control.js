// Compiled by ClojureScript 0.0-2138
goog.provide('palimpsest.control');
goog.require('cljs.core');
goog.require('palimpsest.drawing');
goog.require('palimpsest.types');
goog.require('palimpsest.types');
goog.require('palimpsest.drawing');
goog.require('palimpsest.drawing');
goog.require('palimpsest.pathfinder');
goog.require('palimpsest.pathfinder');
goog.require('monet.canvas');
goog.require('monet.canvas');
goog.require('goog.dom');
goog.require('goog.dom');
palimpsest.control.canvas_element = goog.dom.getElement("canvas");
palimpsest.control.canvas_context = monet.canvas.get_context.call(null,palimpsest.control.canvas_element,"2d");
palimpsest.control.dragging = cljs.core.atom.call(null,false);
palimpsest.control.last_pan_coord = cljs.core.atom.call(null,null);
palimpsest.control.canvas_origin = cljs.core.atom.call(null,(new palimpsest.types.Coord(0,0)));
palimpsest.control.drawn_strokes = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
palimpsest.control.undone_strokes = cljs.core.atom.call(null,cljs.core.List.EMPTY);
palimpsest.control.stroke_thickness = cljs.core.atom.call(null,1);
palimpsest.control.translate_coord = (function translate_coord(coord){return (new palimpsest.types.Coord((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(coord) - new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,palimpsest.control.canvas_origin))),(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(coord) - new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,palimpsest.control.canvas_origin)))));
});
palimpsest.control.start_stroke = (function start_stroke(coord){var coord__$1 = palimpsest.control.translate_coord.call(null,coord);return cljs.core.swap_BANG_.call(null,palimpsest.control.drawn_strokes,cljs.core.conj,(new palimpsest.types.Stroke(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord__$1], null),cljs.core.deref.call(null,palimpsest.control.stroke_thickness))));
});
palimpsest.control.finish_stroke = (function finish_stroke(){return cljs.core.swap_BANG_.call(null,palimpsest.control.undone_strokes,(function (){return cljs.core.List.EMPTY;
}));
});
palimpsest.control.start_pan = (function start_pan(coord){return cljs.core.swap_BANG_.call(null,palimpsest.control.last_pan_coord,(function (){return coord;
}));
});
palimpsest.control.finish_pan = (function finish_pan(){return cljs.core.swap_BANG_.call(null,palimpsest.control.last_pan_coord,(function (){return null;
}));
});
palimpsest.control.add_drawn_coord = (function add_drawn_coord(coord){var coord__$1 = palimpsest.control.translate_coord.call(null,coord);var from_coord = palimpsest.types.last_coord.call(null,cljs.core.deref.call(null,palimpsest.control.drawn_strokes));monet.canvas.stroke_width.call(null,palimpsest.control.canvas_context,cljs.core.deref.call(null,palimpsest.control.stroke_thickness));
cljs.core.swap_BANG_.call(null,palimpsest.control.drawn_strokes,palimpsest.types.extend_last_stroke,coord__$1);
return palimpsest.drawing.redraw_all_strokes.call(null,palimpsest.control.canvas_context,cljs.core.deref.call(null,palimpsest.control.drawn_strokes),cljs.core.deref.call(null,palimpsest.control.canvas_origin));
});
palimpsest.control.update_pan = (function update_pan(coord){var trans_x = (new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(coord) - new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,palimpsest.control.last_pan_coord)));var trans_y = (new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(coord) - new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,palimpsest.control.last_pan_coord)));cljs.core.swap_BANG_.call(null,palimpsest.control.canvas_origin,(function (p1__13794_SHARP_){return (new palimpsest.types.Coord((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__13794_SHARP_) + trans_x),(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__13794_SHARP_) + trans_y)));
}));
cljs.core.swap_BANG_.call(null,palimpsest.control.last_pan_coord,(function (){return coord;
}));
return palimpsest.drawing.redraw_all_strokes.call(null,palimpsest.control.canvas_context,cljs.core.deref.call(null,palimpsest.control.drawn_strokes),cljs.core.deref.call(null,palimpsest.control.canvas_origin));
});
palimpsest.control.start_gesture = (function start_gesture(mode,coord){cljs.core.swap_BANG_.call(null,palimpsest.control.dragging,(function (){return true;
}));
var G__13796 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pan","pan",1014014991),G__13796))
{return palimpsest.control.start_pan.call(null,coord);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"draw","draw",1016996022),G__13796))
{return palimpsest.control.start_stroke.call(null,coord);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(mode)].join('')));
} else
{return null;
}
}
}
});
palimpsest.control.finish_gesture = (function finish_gesture(mode){cljs.core.swap_BANG_.call(null,palimpsest.control.dragging,(function (){return false;
}));
var G__13798 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pan","pan",1014014991),G__13798))
{return palimpsest.control.finish_pan.call(null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"draw","draw",1016996022),G__13798))
{return palimpsest.control.finish_stroke.call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(mode)].join('')));
} else
{return null;
}
}
}
});
palimpsest.control.move_gesture = (function move_gesture(mode,coord){if(cljs.core.truth_(cljs.core.deref.call(null,palimpsest.control.dragging)))
{var G__13800 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pan","pan",1014014991),G__13800))
{return palimpsest.control.update_pan.call(null,coord);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"draw","draw",1016996022),G__13800))
{return palimpsest.control.add_drawn_coord.call(null,coord);
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
palimpsest.control.undo_stroke = (function undo_stroke(){if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,palimpsest.control.drawn_strokes)))
{return null;
} else
{var last_stroke_13801 = cljs.core.last.call(null,cljs.core.deref.call(null,palimpsest.control.drawn_strokes));cljs.core.swap_BANG_.call(null,palimpsest.control.drawn_strokes,cljs.core.comp.call(null,cljs.core.vec,cljs.core.drop_last));
cljs.core.swap_BANG_.call(null,palimpsest.control.undone_strokes,cljs.core.conj,last_stroke_13801);
return palimpsest.drawing.redraw_all_strokes.call(null,palimpsest.control.canvas_context,cljs.core.deref.call(null,palimpsest.control.drawn_strokes),cljs.core.deref.call(null,palimpsest.control.canvas_origin));
}
});
palimpsest.control.redo_stroke = (function redo_stroke(){if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,palimpsest.control.undone_strokes)))
{return null;
} else
{var last_undone = cljs.core.first.call(null,cljs.core.deref.call(null,palimpsest.control.undone_strokes));cljs.core.swap_BANG_.call(null,palimpsest.control.drawn_strokes,cljs.core.conj,last_undone);
cljs.core.swap_BANG_.call(null,palimpsest.control.undone_strokes,cljs.core.rest);
return palimpsest.drawing.draw_stroke.call(null,palimpsest.control.canvas_context,last_undone);
}
});
palimpsest.control.resize_canvas = (function resize_canvas(_){var title_rect = goog.dom.getElement("titlebar").getBoundingClientRect();var status_rect = goog.dom.getElement("statusbar").getBoundingClientRect();var desired_height = ((window.innerHeight - title_rect.height) - status_rect.height);palimpsest.control.canvas_element.style.width = [cljs.core.str(window.innerWidth),cljs.core.str("px")].join('');
palimpsest.control.canvas_element.style.height = [cljs.core.str(desired_height),cljs.core.str("px")].join('');
palimpsest.control.canvas_element.width = palimpsest.control.canvas_element.getBoundingClientRect().width;
palimpsest.control.canvas_element.height = palimpsest.control.canvas_element.getBoundingClientRect().height;
return palimpsest.drawing.redraw_all_strokes.call(null,palimpsest.control.canvas_context,cljs.core.deref.call(null,palimpsest.control.drawn_strokes),cljs.core.deref.call(null,palimpsest.control.canvas_origin));
});
palimpsest.control.update_statusbar = (function update_statusbar(){return goog.dom.getElement("stroke-thickness").value = cljs.core.deref.call(null,palimpsest.control.stroke_thickness);
});
palimpsest.control.inc_thickness = (function inc_thickness(){cljs.core.swap_BANG_.call(null,palimpsest.control.stroke_thickness,(function (p1__13802_SHARP_){if(cljs.core._EQ_.call(null,p1__13802_SHARP_,50))
{return p1__13802_SHARP_;
} else
{return (p1__13802_SHARP_ + 1);
}
}));
return palimpsest.control.update_statusbar.call(null);
});
palimpsest.control.dec_thickness = (function dec_thickness(){cljs.core.swap_BANG_.call(null,palimpsest.control.stroke_thickness,(function (p1__13803_SHARP_){if((p1__13803_SHARP_ === 0))
{return p1__13803_SHARP_;
} else
{return (p1__13803_SHARP_ - 1);
}
}));
return palimpsest.control.update_statusbar.call(null);
});
palimpsest.control.set_thickness = (function set_thickness(thickness){return cljs.core.swap_BANG_.call(null,palimpsest.control.stroke_thickness,(function (){return thickness;
}));
});
palimpsest.control.init_canvas = (function init_canvas(){palimpsest.control.resize_canvas.call(null,null);
return monet.canvas.fill_style.call(null,palimpsest.control.canvas_context,"#000");
});
palimpsest.control.get_strokes = (function get_strokes(){return cljs.core.deref.call(null,palimpsest.control.drawn_strokes);
});
palimpsest.control.set_strokes = (function set_strokes(strokes){cljs.core.swap_BANG_.call(null,palimpsest.control.drawn_strokes,(function (){return strokes;
}));
cljs.core.swap_BANG_.call(null,palimpsest.control.undone_strokes,(function (){return cljs.core.List.EMPTY;
}));
cljs.core.swap_BANG_.call(null,palimpsest.control.canvas_origin,(function (){return (new palimpsest.types.Coord(0,0));
}));
return palimpsest.drawing.redraw_all_strokes.call(null,palimpsest.control.canvas_context,cljs.core.deref.call(null,palimpsest.control.drawn_strokes),cljs.core.deref.call(null,palimpsest.control.canvas_origin));
});
