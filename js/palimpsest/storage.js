// Compiled by ClojureScript 0.0-2138
goog.provide('palimpsest.storage');
goog.require('cljs.core');
goog.require('palimpsest.types');
goog.require('palimpsest.types');
goog.require('goog.dom');
goog.require('goog.dom');
palimpsest.storage.hashmap__GT_stroke = (function hashmap__GT_stroke(hashmap){return (new palimpsest.types.Stroke(cljs.core.vec.call(null,(function (){var iter__4119__auto__ = (function iter__13465(s__13466){return (new cljs.core.LazySeq(null,(function (){var s__13466__$1 = s__13466;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13466__$1);if(temp__4092__auto__)
{var s__13466__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13466__$2))
{var c__4117__auto__ = cljs.core.chunk_first.call(null,s__13466__$2);var size__4118__auto__ = cljs.core.count.call(null,c__4117__auto__);var b__13468 = cljs.core.chunk_buffer.call(null,size__4118__auto__);if((function (){var i__13467 = 0;while(true){
if((i__13467 < size__4118__auto__))
{var coord = cljs.core._nth.call(null,c__4117__auto__,i__13467);cljs.core.chunk_append.call(null,b__13468,(new palimpsest.types.Coord(coord.call(null,"x"),coord.call(null,"y"))));
{
var G__13469 = (i__13467 + 1);
i__13467 = G__13469;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13468),iter__13465.call(null,cljs.core.chunk_rest.call(null,s__13466__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13468),null);
}
} else
{var coord = cljs.core.first.call(null,s__13466__$2);return cljs.core.cons.call(null,(new palimpsest.types.Coord(coord.call(null,"x"),coord.call(null,"y"))),iter__13465.call(null,cljs.core.rest.call(null,s__13466__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__.call(null,hashmap.call(null,"coords"));
})()),new cljs.core.Keyword(null,"thickness","thickness",4301318886).cljs$core$IFn$_invoke$arity$1(hashmap)));
});
palimpsest.storage.strokes__GT_json = (function strokes__GT_json(strokes){return JSON.stringify.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strokes","strokes",3427288237),strokes], null)));
});
palimpsest.storage.json__GT_strokes = (function json__GT_strokes(jsontext){var raw_strokes = cljs.core.js__GT_clj.call(null,JSON.parse.call(null,jsontext)).call(null,"strokes");return cljs.core.vec.call(null,(function (){var iter__4119__auto__ = (function iter__13474(s__13475){return (new cljs.core.LazySeq(null,(function (){var s__13475__$1 = s__13475;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13475__$1);if(temp__4092__auto__)
{var s__13475__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13475__$2))
{var c__4117__auto__ = cljs.core.chunk_first.call(null,s__13475__$2);var size__4118__auto__ = cljs.core.count.call(null,c__4117__auto__);var b__13477 = cljs.core.chunk_buffer.call(null,size__4118__auto__);if((function (){var i__13476 = 0;while(true){
if((i__13476 < size__4118__auto__))
{var hashmap = cljs.core._nth.call(null,c__4117__auto__,i__13476);cljs.core.chunk_append.call(null,b__13477,palimpsest.storage.hashmap__GT_stroke.call(null,hashmap));
{
var G__13478 = (i__13476 + 1);
i__13476 = G__13478;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13477),iter__13474.call(null,cljs.core.chunk_rest.call(null,s__13475__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13477),null);
}
} else
{var hashmap = cljs.core.first.call(null,s__13475__$2);return cljs.core.cons.call(null,palimpsest.storage.hashmap__GT_stroke.call(null,hashmap),iter__13474.call(null,cljs.core.rest.call(null,s__13475__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__.call(null,raw_strokes);
})());
});
palimpsest.storage.load_strokes = (function load_strokes(file,callback){var reader = (new FileReader());reader.onload = (function (evt){return callback.call(null,palimpsest.storage.json__GT_strokes.call(null,evt.target.result));
});
return reader.readAsText(file);
});
palimpsest.storage.save_strokes = (function save_strokes(strokes){var jsondata = palimpsest.storage.strokes__GT_json.call(null,strokes);var data_url = [cljs.core.str("data:application/json;charset=utf-8,"),cljs.core.str(encodeURIComponent(jsondata))].join('');var download_link = goog.dom.getElement("download-link");download_link.href = data_url;
return download_link.click();
});
