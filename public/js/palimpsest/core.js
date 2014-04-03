// Compiled by ClojureScript 0.0-2138
goog.provide('palimpsest.core');
goog.require('cljs.core');
goog.require('palimpsest.drawing');
goog.require('palimpsest.types');
goog.require('palimpsest.storage');
goog.require('palimpsest.control');
goog.require('palimpsest.control');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('palimpsest.storage');
goog.require('palimpsest.pathfinder');
goog.require('palimpsest.drawing');
goog.require('palimpsest.pathfinder');
goog.require('palimpsest.types');
goog.require('monet.canvas');
goog.require('monet.canvas');
goog.require('goog.events');
goog.require('palimpsest.drawing');
palimpsest.core.canvas_element = goog.dom.getElement("canvas");
palimpsest.core.current_touch_id = cljs.core.atom.call(null,null);
/**
* @param {...*} var_args
*/
palimpsest.core.add_canvas_handlers = (function() { 
var add_canvas_handlers__delegate = function (args){var seq__14341 = cljs.core.seq.call(null,args);var chunk__14342 = null;var count__14343 = 0;var i__14344 = 0;while(true){
if((i__14344 < count__14343))
{var vec__14345 = cljs.core._nth.call(null,chunk__14342,i__14344);var typ = cljs.core.nth.call(null,vec__14345,0,null);var cb = cljs.core.nth.call(null,vec__14345,1,null);goog.events.listen(palimpsest.core.canvas_element,typ,cb);
{
var G__14347 = seq__14341;
var G__14348 = chunk__14342;
var G__14349 = count__14343;
var G__14350 = (i__14344 + 1);
seq__14341 = G__14347;
chunk__14342 = G__14348;
count__14343 = G__14349;
i__14344 = G__14350;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14341);if(temp__4092__auto__)
{var seq__14341__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14341__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__14341__$1);{
var G__14351 = cljs.core.chunk_rest.call(null,seq__14341__$1);
var G__14352 = c__4150__auto__;
var G__14353 = cljs.core.count.call(null,c__4150__auto__);
var G__14354 = 0;
seq__14341 = G__14351;
chunk__14342 = G__14352;
count__14343 = G__14353;
i__14344 = G__14354;
continue;
}
} else
{var vec__14346 = cljs.core.first.call(null,seq__14341__$1);var typ = cljs.core.nth.call(null,vec__14346,0,null);var cb = cljs.core.nth.call(null,vec__14346,1,null);goog.events.listen(palimpsest.core.canvas_element,typ,cb);
{
var G__14355 = cljs.core.next.call(null,seq__14341__$1);
var G__14356 = null;
var G__14357 = 0;
var G__14358 = 0;
seq__14341 = G__14355;
chunk__14342 = G__14356;
count__14343 = G__14357;
i__14344 = G__14358;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var add_canvas_handlers = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return add_canvas_handlers__delegate.call(this,args);};
add_canvas_handlers.cljs$lang$maxFixedArity = 0;
add_canvas_handlers.cljs$lang$applyTo = (function (arglist__14359){
var args = cljs.core.seq(arglist__14359);
return add_canvas_handlers__delegate(args);
});
add_canvas_handlers.cljs$core$IFn$_invoke$arity$variadic = add_canvas_handlers__delegate;
return add_canvas_handlers;
})()
;
palimpsest.core.input_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"draw","draw",1016996022));
palimpsest.core.event__GT_coord = (function event__GT_coord(event){var canvasrect = palimpsest.core.canvas_element.getBoundingClientRect();return (new palimpsest.types.Coord((event.clientX - canvasrect.left),(event.clientY - canvasrect.top)));
});
palimpsest.core.mousedown_handler = (function mousedown_handler(event){if(cljs.core._EQ_.call(null,0,event.button))
{return palimpsest.control.start_gesture.call(null,cljs.core.deref.call(null,palimpsest.core.input_mode),palimpsest.core.event__GT_coord.call(null,event));
} else
{return null;
}
});
palimpsest.core.mousemove_handler = (function mousemove_handler(event){return palimpsest.control.move_gesture.call(null,cljs.core.deref.call(null,palimpsest.core.input_mode),palimpsest.core.event__GT_coord.call(null,event));
});
palimpsest.core.mouseup_handler = (function mouseup_handler(event){if(cljs.core._EQ_.call(null,0,event.button))
{return palimpsest.control.finish_gesture.call(null,cljs.core.deref.call(null,palimpsest.core.input_mode));
} else
{return null;
}
});
palimpsest.core.identified_touch = (function identified_touch(touchlist){var target_id = cljs.core.deref.call(null,palimpsest.core.current_touch_id);var touchseq = (function (){var iter__4119__auto__ = ((function (target_id){
return (function iter__14365(s__14366){return (new cljs.core.LazySeq(null,((function (target_id){
return (function (){var s__14366__$1 = s__14366;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14366__$1);if(temp__4092__auto__)
{var s__14366__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14366__$2))
{var c__4117__auto__ = cljs.core.chunk_first.call(null,s__14366__$2);var size__4118__auto__ = cljs.core.count.call(null,c__4117__auto__);var b__14368 = cljs.core.chunk_buffer.call(null,size__4118__auto__);if((function (){var i__14367 = 0;while(true){
if((i__14367 < size__4118__auto__))
{var i = cljs.core._nth.call(null,c__4117__auto__,i__14367);cljs.core.chunk_append.call(null,b__14368,touchlist.item(i));
{
var G__14369 = (i__14367 + 1);
i__14367 = G__14369;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14368),iter__14365.call(null,cljs.core.chunk_rest.call(null,s__14366__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14368),null);
}
} else
{var i = cljs.core.first.call(null,s__14366__$2);return cljs.core.cons.call(null,touchlist.item(i),iter__14365.call(null,cljs.core.rest.call(null,s__14366__$2)));
}
} else
{return null;
}
break;
}
});})(target_id))
,null,null));
});})(target_id))
;return iter__4119__auto__.call(null,cljs.core.range.call(null,touchlist.length));
})();var matching = cljs.core.filter.call(null,((function (target_id,touchseq){
return (function (p1__14360_SHARP_){return cljs.core._EQ_.call(null,target_id,p1__14360_SHARP_.identifier);
});})(target_id,touchseq))
,touchseq);if(!(cljs.core.empty_QMARK_.call(null,matching)))
{return cljs.core.first.call(null,matching);
} else
{return null;
}
});
palimpsest.core.first_touch = (function first_touch(touchlist){return touchlist.item(0);
});
palimpsest.core.touchstart_handler = (function touchstart_handler(event){var touchlist = event.getBrowserEvent().targetTouches;if(cljs.core.not_EQ_.call(null,touchlist.length,0))
{var touch = palimpsest.core.first_touch.call(null,touchlist);palimpsest.pathfinder.log.call(null,touch.identifier);
cljs.core.swap_BANG_.call(null,palimpsest.core.current_touch_id,(function (){return touch.identifier;
}));
return palimpsest.control.start_gesture.call(null,cljs.core.deref.call(null,palimpsest.core.input_mode),palimpsest.core.event__GT_coord.call(null,touch));
} else
{return null;
}
});
palimpsest.core.touchmove_handler = (function touchmove_handler(event){var touchlist = event.getBrowserEvent().targetTouches;var touch = palimpsest.core.identified_touch.call(null,touchlist);palimpsest.pathfinder.log.call(null,touch.identifier);
if((touch == null))
{return null;
} else
{return palimpsest.control.move_gesture.call(null,cljs.core.deref.call(null,palimpsest.core.input_mode),palimpsest.core.event__GT_coord.call(null,touch));
}
});
palimpsest.core.touchend_handler = (function touchend_handler(event){var touchlist = event.getBrowserEvent().changedTouches;var touch = palimpsest.core.identified_touch.call(null,touchlist);palimpsest.pathfinder.log.call(null,touch.identifier);
if((touch == null))
{return null;
} else
{return palimpsest.control.finish_gesture.call(null,cljs.core.deref.call(null,palimpsest.core.input_mode));
}
});
palimpsest.core.change_cssclass = (function change_cssclass(id,cssclass){return goog.dom.getElement(id).className = cssclass;
});
palimpsest.core.set_input_mode = (function set_input_mode(mode){var other_mode = (function (){var G__14371 = mode;if(cljs.core._EQ_.call(null,"pan",G__14371))
{return "draw";
} else
{if(cljs.core._EQ_.call(null,"draw",G__14371))
{return "pan";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(mode)].join('')));
} else
{return null;
}
}
}
})();palimpsest.core.change_cssclass.call(null,[cljs.core.str(mode),cljs.core.str("-mode")].join(''),"toggle-selected");
palimpsest.core.change_cssclass.call(null,[cljs.core.str(other_mode),cljs.core.str("-mode")].join(''),"toggle-unselected");
return cljs.core.swap_BANG_.call(null,palimpsest.core.input_mode,(function (){return cljs.core.keyword.call(null,mode);
}));
});
palimpsest.core.click_handler = (function click_handler(event){var target_id = event.currentTarget.id;var G__14373 = target_id;if(cljs.core._EQ_.call(null,"new",G__14373))
{return palimpsest.control.set_strokes.call(null,cljs.core.PersistentVector.EMPTY);
} else
{if(cljs.core._EQ_.call(null,"save",G__14373))
{return palimpsest.storage.save_strokes.call(null,palimpsest.control.get_strokes.call(null));
} else
{if(cljs.core._EQ_.call(null,"pan-mode",G__14373))
{return palimpsest.core.set_input_mode.call(null,"pan");
} else
{if(cljs.core._EQ_.call(null,"draw-mode",G__14373))
{return palimpsest.core.set_input_mode.call(null,"draw");
} else
{if(cljs.core._EQ_.call(null,"redo",G__14373))
{return palimpsest.control.redo_stroke.call(null);
} else
{if(cljs.core._EQ_.call(null,"undo",G__14373))
{return palimpsest.control.undo_stroke.call(null);
} else
{if(cljs.core._EQ_.call(null,"decrease-thickness",G__14373))
{return palimpsest.control.dec_thickness.call(null);
} else
{if(cljs.core._EQ_.call(null,"increase-thickness",G__14373))
{return palimpsest.control.inc_thickness.call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return palimpsest.pathfinder.log.call(null,[cljs.core.str("unknown target "),cljs.core.str(target_id)].join(''));
} else
{return null;
}
}
}
}
}
}
}
}
}
});
palimpsest.core.setup_click_handler = (function setup_click_handler(elem_ids){var seq__14378 = cljs.core.seq.call(null,elem_ids);var chunk__14379 = null;var count__14380 = 0;var i__14381 = 0;while(true){
if((i__14381 < count__14380))
{var id = cljs.core._nth.call(null,chunk__14379,i__14381);goog.events.listen(goog.dom.getElement(id),"click",palimpsest.core.click_handler);
{
var G__14382 = seq__14378;
var G__14383 = chunk__14379;
var G__14384 = count__14380;
var G__14385 = (i__14381 + 1);
seq__14378 = G__14382;
chunk__14379 = G__14383;
count__14380 = G__14384;
i__14381 = G__14385;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14378);if(temp__4092__auto__)
{var seq__14378__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14378__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__14378__$1);{
var G__14386 = cljs.core.chunk_rest.call(null,seq__14378__$1);
var G__14387 = c__4150__auto__;
var G__14388 = cljs.core.count.call(null,c__4150__auto__);
var G__14389 = 0;
seq__14378 = G__14386;
chunk__14379 = G__14387;
count__14380 = G__14388;
i__14381 = G__14389;
continue;
}
} else
{var id = cljs.core.first.call(null,seq__14378__$1);goog.events.listen(goog.dom.getElement(id),"click",palimpsest.core.click_handler);
{
var G__14390 = cljs.core.next.call(null,seq__14378__$1);
var G__14391 = null;
var G__14392 = 0;
var G__14393 = 0;
seq__14378 = G__14390;
chunk__14379 = G__14391;
count__14380 = G__14392;
i__14381 = G__14393;
continue;
}
}
} else
{return null;
}
}
break;
}
});
palimpsest.core.input_handler = (function input_handler(event){var target_id = event.currentTarget.id;var value = goog.dom.getElement(target_id).value;var G__14395 = target_id;if(cljs.core._EQ_.call(null,"stroke-thickness",G__14395))
{return palimpsest.control.set_thickness.call(null,(value | 0));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return palimpsest.pathfinder.log.call(null,[cljs.core.str("Unknown target "),cljs.core.str(target_id)].join(''));
} else
{return null;
}
}
});
palimpsest.core.setup_input_handler = (function setup_input_handler(elem_ids){var seq__14400 = cljs.core.seq.call(null,elem_ids);var chunk__14401 = null;var count__14402 = 0;var i__14403 = 0;while(true){
if((i__14403 < count__14402))
{var id = cljs.core._nth.call(null,chunk__14401,i__14403);goog.events.listen(goog.dom.getElement(id),"input",palimpsest.core.input_handler);
{
var G__14404 = seq__14400;
var G__14405 = chunk__14401;
var G__14406 = count__14402;
var G__14407 = (i__14403 + 1);
seq__14400 = G__14404;
chunk__14401 = G__14405;
count__14402 = G__14406;
i__14403 = G__14407;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14400);if(temp__4092__auto__)
{var seq__14400__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14400__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__14400__$1);{
var G__14408 = cljs.core.chunk_rest.call(null,seq__14400__$1);
var G__14409 = c__4150__auto__;
var G__14410 = cljs.core.count.call(null,c__4150__auto__);
var G__14411 = 0;
seq__14400 = G__14408;
chunk__14401 = G__14409;
count__14402 = G__14410;
i__14403 = G__14411;
continue;
}
} else
{var id = cljs.core.first.call(null,seq__14400__$1);goog.events.listen(goog.dom.getElement(id),"input",palimpsest.core.input_handler);
{
var G__14412 = cljs.core.next.call(null,seq__14400__$1);
var G__14413 = null;
var G__14414 = 0;
var G__14415 = 0;
seq__14400 = G__14412;
chunk__14401 = G__14413;
count__14402 = G__14414;
i__14403 = G__14415;
continue;
}
}
} else
{return null;
}
}
break;
}
});
palimpsest.core.handle_open = (function handle_open(event){var files = event.target.files;if((files.length > 0))
{return palimpsest.storage.load_strokes.call(null,files.item(0),(function (strokes){return palimpsest.control.set_strokes.call(null,strokes);
}));
} else
{return null;
}
});
palimpsest.core.init = (function init(){palimpsest.control.init_canvas.call(null);
goog.events.listen(window,"resize",palimpsest.control.resize_canvas);
goog.events.listen(goog.dom.getElement("open"),"change",palimpsest.core.handle_open);
palimpsest.core.setup_click_handler.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["increase-thickness","decrease-thickness","undo","redo","draw-mode","pan-mode","save","new"], null));
palimpsest.core.setup_input_handler.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stroke-thickness"], null));
return palimpsest.core.add_canvas_handlers.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["touchmove",palimpsest.core.touchmove_handler], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["touchstart",palimpsest.core.touchstart_handler], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["touchend",palimpsest.core.touchend_handler], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mousemove",palimpsest.core.mousemove_handler], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mousedown",palimpsest.core.mousedown_handler], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mouseup",palimpsest.core.mouseup_handler], null));
});
palimpsest.core.init.call(null);
