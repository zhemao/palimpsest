// Compiled by ClojureScript 0.0-2138
goog.provide('palimpsest.drawing');
goog.require('cljs.core');
goog.require('monet.canvas');
goog.require('monet.canvas');
palimpsest.drawing.move_to_coord = (function move_to_coord(ctx,coord){return monet.canvas.move_to.call(null,ctx,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(coord),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(coord));
});
palimpsest.drawing.line_to_coord = (function line_to_coord(ctx,coord){return monet.canvas.line_to.call(null,ctx,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(coord),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(coord));
});
palimpsest.drawing.draw_line = (function draw_line(ctx,from,to){monet.canvas.begin_path.call(null,ctx);
palimpsest.drawing.move_to_coord.call(null,ctx,from);
palimpsest.drawing.line_to_coord.call(null,ctx,to);
monet.canvas.stroke.call(null,ctx);
return monet.canvas.close_path.call(null,ctx);
});
palimpsest.drawing.draw_stroke = (function draw_stroke(ctx,stroke){monet.canvas.begin_path.call(null,ctx);
monet.canvas.stroke_width.call(null,ctx,new cljs.core.Keyword(null,"thickness","thickness",4301318886).cljs$core$IFn$_invoke$arity$1(stroke));
var coords_14284 = new cljs.core.Keyword(null,"coords","coords",3954120592).cljs$core$IFn$_invoke$arity$1(stroke);palimpsest.drawing.move_to_coord.call(null,ctx,cljs.core.first.call(null,coords_14284));
var seq__14280_14285 = cljs.core.seq.call(null,cljs.core.rest.call(null,coords_14284));var chunk__14281_14286 = null;var count__14282_14287 = 0;var i__14283_14288 = 0;while(true){
if((i__14283_14288 < count__14282_14287))
{var c_14289 = cljs.core._nth.call(null,chunk__14281_14286,i__14283_14288);palimpsest.drawing.line_to_coord.call(null,ctx,c_14289);
{
var G__14290 = seq__14280_14285;
var G__14291 = chunk__14281_14286;
var G__14292 = count__14282_14287;
var G__14293 = (i__14283_14288 + 1);
seq__14280_14285 = G__14290;
chunk__14281_14286 = G__14291;
count__14282_14287 = G__14292;
i__14283_14288 = G__14293;
continue;
}
} else
{var temp__4092__auto___14294 = cljs.core.seq.call(null,seq__14280_14285);if(temp__4092__auto___14294)
{var seq__14280_14295__$1 = temp__4092__auto___14294;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14280_14295__$1))
{var c__4150__auto___14296 = cljs.core.chunk_first.call(null,seq__14280_14295__$1);{
var G__14297 = cljs.core.chunk_rest.call(null,seq__14280_14295__$1);
var G__14298 = c__4150__auto___14296;
var G__14299 = cljs.core.count.call(null,c__4150__auto___14296);
var G__14300 = 0;
seq__14280_14285 = G__14297;
chunk__14281_14286 = G__14298;
count__14282_14287 = G__14299;
i__14283_14288 = G__14300;
continue;
}
} else
{var c_14301 = cljs.core.first.call(null,seq__14280_14295__$1);palimpsest.drawing.line_to_coord.call(null,ctx,c_14301);
{
var G__14302 = cljs.core.next.call(null,seq__14280_14295__$1);
var G__14303 = null;
var G__14304 = 0;
var G__14305 = 0;
seq__14280_14285 = G__14302;
chunk__14281_14286 = G__14303;
count__14282_14287 = G__14304;
i__14283_14288 = G__14305;
continue;
}
}
} else
{}
}
break;
}
monet.canvas.stroke.call(null,ctx);
return monet.canvas.close_path.call(null,ctx);
});
palimpsest.drawing.clear_screen = (function clear_screen(ctx){var canvas = ctx.canvas;var w = canvas.width;var h = canvas.height;return monet.canvas.clear_rect.call(null,ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",1013904362),0,new cljs.core.Keyword(null,"y","y",1013904363),0,new cljs.core.Keyword(null,"w","w",1013904361),w,new cljs.core.Keyword(null,"h","h",1013904346),h], null));
});
palimpsest.drawing.calc_buffer_dim = (function calc_buffer_dim(normal_dim,offset_dim){if((offset_dim < 0))
{return (normal_dim - offset_dim);
} else
{return normal_dim;
}
});
palimpsest.drawing.redraw_all_strokes = (function redraw_all_strokes(ctx,strokes,origin){palimpsest.drawing.clear_screen.call(null,ctx);
var buffer_canvas = document.createElement("canvas");var buffer_ctx = buffer_canvas.getContext("2d");var canvas_width = ctx.canvas.width;var canvas_height = ctx.canvas.height;var trans_x = new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(origin);var trans_y = new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(origin);var buffer_width = palimpsest.drawing.calc_buffer_dim.call(null,canvas_width,trans_x);var buffer_height = palimpsest.drawing.calc_buffer_dim.call(null,canvas_height,trans_y);buffer_canvas.width = buffer_width;
buffer_canvas.height = buffer_height;
var seq__14310_14314 = cljs.core.seq.call(null,strokes);var chunk__14311_14315 = null;var count__14312_14316 = 0;var i__14313_14317 = 0;while(true){
if((i__14313_14317 < count__14312_14316))
{var stroke_14318 = cljs.core._nth.call(null,chunk__14311_14315,i__14313_14317);palimpsest.drawing.draw_stroke.call(null,buffer_ctx,stroke_14318);
{
var G__14319 = seq__14310_14314;
var G__14320 = chunk__14311_14315;
var G__14321 = count__14312_14316;
var G__14322 = (i__14313_14317 + 1);
seq__14310_14314 = G__14319;
chunk__14311_14315 = G__14320;
count__14312_14316 = G__14321;
i__14313_14317 = G__14322;
continue;
}
} else
{var temp__4092__auto___14323 = cljs.core.seq.call(null,seq__14310_14314);if(temp__4092__auto___14323)
{var seq__14310_14324__$1 = temp__4092__auto___14323;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14310_14324__$1))
{var c__4150__auto___14325 = cljs.core.chunk_first.call(null,seq__14310_14324__$1);{
var G__14326 = cljs.core.chunk_rest.call(null,seq__14310_14324__$1);
var G__14327 = c__4150__auto___14325;
var G__14328 = cljs.core.count.call(null,c__4150__auto___14325);
var G__14329 = 0;
seq__14310_14314 = G__14326;
chunk__14311_14315 = G__14327;
count__14312_14316 = G__14328;
i__14313_14317 = G__14329;
continue;
}
} else
{var stroke_14330 = cljs.core.first.call(null,seq__14310_14324__$1);palimpsest.drawing.draw_stroke.call(null,buffer_ctx,stroke_14330);
{
var G__14331 = cljs.core.next.call(null,seq__14310_14324__$1);
var G__14332 = null;
var G__14333 = 0;
var G__14334 = 0;
seq__14310_14314 = G__14331;
chunk__14311_14315 = G__14332;
count__14312_14316 = G__14333;
i__14313_14317 = G__14334;
continue;
}
}
} else
{}
}
break;
}
return monet.canvas.draw_image.call(null,ctx,buffer_canvas,trans_x,trans_y);
});
