// Compiled by ClojureScript 0.0-2138
goog.provide('palimpsest.types');
goog.require('cljs.core');

/**
* @constructor
* @param {*} x
* @param {*} y
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
palimpsest.types.Coord = (function (x,y,__meta,__extmap){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
palimpsest.types.Coord.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3983__auto__){var self__ = this;
var this__3983__auto____$1 = this;var h__3819__auto__ = self__.__hash;if(!((h__3819__auto__ == null)))
{return h__3819__auto__;
} else
{var h__3819__auto____$1 = cljs.core.hash_imap.call(null,this__3983__auto____$1);self__.__hash = h__3819__auto____$1;
return h__3819__auto____$1;
}
});
palimpsest.types.Coord.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3988__auto__,k__3989__auto__){var self__ = this;
var this__3988__auto____$1 = this;return cljs.core._lookup.call(null,this__3988__auto____$1,k__3989__auto__,null);
});
palimpsest.types.Coord.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3990__auto__,k6283,else__3991__auto__){var self__ = this;
var this__3990__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k6283,new cljs.core.Keyword(null,"x","x",1013904362)))
{return self__.x;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k6283,new cljs.core.Keyword(null,"y","y",1013904363)))
{return self__.y;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k6283,else__3991__auto__);
} else
{return null;
}
}
}
});
palimpsest.types.Coord.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3995__auto__,k__3996__auto__,G__6282){var self__ = this;
var this__3995__auto____$1 = this;var pred__6285 = cljs.core.keyword_identical_QMARK_;var expr__6286 = k__3996__auto__;if(cljs.core.truth_(pred__6285.call(null,new cljs.core.Keyword(null,"x","x",1013904362),expr__6286)))
{return (new palimpsest.types.Coord(G__6282,self__.y,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6285.call(null,new cljs.core.Keyword(null,"y","y",1013904363),expr__6286)))
{return (new palimpsest.types.Coord(self__.x,G__6282,self__.__meta,self__.__extmap,null));
} else
{return (new palimpsest.types.Coord(self__.x,self__.y,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3996__auto__,G__6282),null));
}
}
});
palimpsest.types.Coord.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4002__auto__,writer__4003__auto__,opts__4004__auto__){var self__ = this;
var this__4002__auto____$1 = this;var pr_pair__4005__auto__ = (function (keyval__4006__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4003__auto__,cljs.core.pr_writer,""," ","",opts__4004__auto__,keyval__4006__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__4003__auto__,pr_pair__4005__auto__,"#palimpsest.types.Coord{",", ","}",opts__4004__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",1013904362),self__.x],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",1013904363),self__.y],null))], null),self__.__extmap));
});
palimpsest.types.Coord.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3993__auto__,entry__3994__auto__){var self__ = this;
var this__3993__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__3994__auto__))
{return cljs.core._assoc.call(null,this__3993__auto____$1,cljs.core._nth.call(null,entry__3994__auto__,0),cljs.core._nth.call(null,entry__3994__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3993__auto____$1,entry__3994__auto__);
}
});
palimpsest.types.Coord.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4000__auto__){var self__ = this;
var this__4000__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",1013904362),self__.x],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",1013904363),self__.y],null))], null),self__.__extmap));
});
palimpsest.types.Coord.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3992__auto__){var self__ = this;
var this__3992__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
palimpsest.types.Coord.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3984__auto__,other__3985__auto__){var self__ = this;
var this__3984__auto____$1 = this;if(cljs.core.truth_((function (){var and__3396__auto__ = other__3985__auto__;if(cljs.core.truth_(and__3396__auto__))
{return ((this__3984__auto____$1.constructor === other__3985__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__3984__auto____$1,other__3985__auto__));
} else
{return and__3396__auto__;
}
})()))
{return true;
} else
{return false;
}
});
palimpsest.types.Coord.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3987__auto__,G__6282){var self__ = this;
var this__3987__auto____$1 = this;return (new palimpsest.types.Coord(self__.x,self__.y,G__6282,self__.__extmap,self__.__hash));
});
palimpsest.types.Coord.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3986__auto__){var self__ = this;
var this__3986__auto____$1 = this;return self__.__meta;
});
palimpsest.types.Coord.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3997__auto__,k__3998__auto__){var self__ = this;
var this__3997__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",1013904363),null,new cljs.core.Keyword(null,"x","x",1013904362),null], null), null),k__3998__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3997__auto____$1),self__.__meta),k__3998__auto__);
} else
{return (new palimpsest.types.Coord(self__.x,self__.y,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3998__auto__)),null));
}
});
palimpsest.types.Coord.cljs$lang$type = true;
palimpsest.types.Coord.cljs$lang$ctorPrSeq = (function (this__4022__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"palimpsest.types/Coord");
});
palimpsest.types.Coord.cljs$lang$ctorPrWriter = (function (this__4022__auto__,writer__4023__auto__){return cljs.core._write.call(null,writer__4023__auto__,"palimpsest.types/Coord");
});
palimpsest.types.__GT_Coord = (function __GT_Coord(x,y){return (new palimpsest.types.Coord(x,y));
});
palimpsest.types.map__GT_Coord = (function map__GT_Coord(G__6284){return (new palimpsest.types.Coord(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(G__6284),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(G__6284),null,cljs.core.dissoc.call(null,G__6284,new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363))));
});
palimpsest.types.StrokeProtocol = (function (){var obj6289 = {};return obj6289;
})();
palimpsest.types.add_coord = (function add_coord(this$,p){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.palimpsest$types$StrokeProtocol$add_coord$arity$2;
} else
{return and__3396__auto__;
}
})())
{return this$.palimpsest$types$StrokeProtocol$add_coord$arity$2(this$,p);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (palimpsest.types.add_coord[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (palimpsest.types.add_coord["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"StrokeProtocol.add-coord",this$);
}
}
})().call(null,this$,p);
}
});
palimpsest.types.change_thickness = (function change_thickness(this$,t){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.palimpsest$types$StrokeProtocol$change_thickness$arity$2;
} else
{return and__3396__auto__;
}
})())
{return this$.palimpsest$types$StrokeProtocol$change_thickness$arity$2(this$,t);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (palimpsest.types.change_thickness[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (palimpsest.types.change_thickness["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"StrokeProtocol.change-thickness",this$);
}
}
})().call(null,this$,t);
}
});

/**
* @constructor
* @param {*} coords
* @param {*} thickness
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
palimpsest.types.Stroke = (function (coords,thickness,__meta,__extmap){
this.coords = coords;
this.thickness = thickness;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
palimpsest.types.Stroke.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3983__auto__){var self__ = this;
var this__3983__auto____$1 = this;var h__3819__auto__ = self__.__hash;if(!((h__3819__auto__ == null)))
{return h__3819__auto__;
} else
{var h__3819__auto____$1 = cljs.core.hash_imap.call(null,this__3983__auto____$1);self__.__hash = h__3819__auto____$1;
return h__3819__auto____$1;
}
});
palimpsest.types.Stroke.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3988__auto__,k__3989__auto__){var self__ = this;
var this__3988__auto____$1 = this;return cljs.core._lookup.call(null,this__3988__auto____$1,k__3989__auto__,null);
});
palimpsest.types.Stroke.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3990__auto__,k6291,else__3991__auto__){var self__ = this;
var this__3990__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k6291,new cljs.core.Keyword(null,"coords","coords",3954120592)))
{return self__.coords;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k6291,new cljs.core.Keyword(null,"thickness","thickness",4301318886)))
{return self__.thickness;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k6291,else__3991__auto__);
} else
{return null;
}
}
}
});
palimpsest.types.Stroke.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3995__auto__,k__3996__auto__,G__6290){var self__ = this;
var this__3995__auto____$1 = this;var pred__6293 = cljs.core.keyword_identical_QMARK_;var expr__6294 = k__3996__auto__;if(cljs.core.truth_(pred__6293.call(null,new cljs.core.Keyword(null,"coords","coords",3954120592),expr__6294)))
{return (new palimpsest.types.Stroke(G__6290,self__.thickness,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6293.call(null,new cljs.core.Keyword(null,"thickness","thickness",4301318886),expr__6294)))
{return (new palimpsest.types.Stroke(self__.coords,G__6290,self__.__meta,self__.__extmap,null));
} else
{return (new palimpsest.types.Stroke(self__.coords,self__.thickness,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3996__auto__,G__6290),null));
}
}
});
palimpsest.types.Stroke.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4002__auto__,writer__4003__auto__,opts__4004__auto__){var self__ = this;
var this__4002__auto____$1 = this;var pr_pair__4005__auto__ = (function (keyval__4006__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4003__auto__,cljs.core.pr_writer,""," ","",opts__4004__auto__,keyval__4006__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__4003__auto__,pr_pair__4005__auto__,"#palimpsest.types.Stroke{",", ","}",opts__4004__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coords","coords",3954120592),self__.coords],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"thickness","thickness",4301318886),self__.thickness],null))], null),self__.__extmap));
});
palimpsest.types.Stroke.prototype.palimpsest$types$StrokeProtocol$ = true;
palimpsest.types.Stroke.prototype.palimpsest$types$StrokeProtocol$add_coord$arity$2 = (function (this$,p){var self__ = this;
var this$__$1 = this;return (new palimpsest.types.Stroke(cljs.core.conj.call(null,new cljs.core.Keyword(null,"coords","coords",3954120592).cljs$core$IFn$_invoke$arity$1(this$__$1),p),new cljs.core.Keyword(null,"thickness","thickness",4301318886).cljs$core$IFn$_invoke$arity$1(this$__$1)));
});
palimpsest.types.Stroke.prototype.palimpsest$types$StrokeProtocol$change_thickness$arity$2 = (function (this$,t){var self__ = this;
var this$__$1 = this;return (new palimpsest.types.Stroke(new cljs.core.Keyword(null,"coords","coords",3954120592).cljs$core$IFn$_invoke$arity$1(this$__$1),t));
});
palimpsest.types.Stroke.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3993__auto__,entry__3994__auto__){var self__ = this;
var this__3993__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__3994__auto__))
{return cljs.core._assoc.call(null,this__3993__auto____$1,cljs.core._nth.call(null,entry__3994__auto__,0),cljs.core._nth.call(null,entry__3994__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3993__auto____$1,entry__3994__auto__);
}
});
palimpsest.types.Stroke.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4000__auto__){var self__ = this;
var this__4000__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coords","coords",3954120592),self__.coords],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"thickness","thickness",4301318886),self__.thickness],null))], null),self__.__extmap));
});
palimpsest.types.Stroke.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3992__auto__){var self__ = this;
var this__3992__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
palimpsest.types.Stroke.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3984__auto__,other__3985__auto__){var self__ = this;
var this__3984__auto____$1 = this;if(cljs.core.truth_((function (){var and__3396__auto__ = other__3985__auto__;if(cljs.core.truth_(and__3396__auto__))
{return ((this__3984__auto____$1.constructor === other__3985__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__3984__auto____$1,other__3985__auto__));
} else
{return and__3396__auto__;
}
})()))
{return true;
} else
{return false;
}
});
palimpsest.types.Stroke.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3987__auto__,G__6290){var self__ = this;
var this__3987__auto____$1 = this;return (new palimpsest.types.Stroke(self__.coords,self__.thickness,G__6290,self__.__extmap,self__.__hash));
});
palimpsest.types.Stroke.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3986__auto__){var self__ = this;
var this__3986__auto____$1 = this;return self__.__meta;
});
palimpsest.types.Stroke.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3997__auto__,k__3998__auto__){var self__ = this;
var this__3997__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coords","coords",3954120592),null,new cljs.core.Keyword(null,"thickness","thickness",4301318886),null], null), null),k__3998__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3997__auto____$1),self__.__meta),k__3998__auto__);
} else
{return (new palimpsest.types.Stroke(self__.coords,self__.thickness,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3998__auto__)),null));
}
});
palimpsest.types.Stroke.cljs$lang$type = true;
palimpsest.types.Stroke.cljs$lang$ctorPrSeq = (function (this__4022__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"palimpsest.types/Stroke");
});
palimpsest.types.Stroke.cljs$lang$ctorPrWriter = (function (this__4022__auto__,writer__4023__auto__){return cljs.core._write.call(null,writer__4023__auto__,"palimpsest.types/Stroke");
});
palimpsest.types.__GT_Stroke = (function __GT_Stroke(coords,thickness){return (new palimpsest.types.Stroke(coords,thickness));
});
palimpsest.types.map__GT_Stroke = (function map__GT_Stroke(G__6292){return (new palimpsest.types.Stroke(new cljs.core.Keyword(null,"coords","coords",3954120592).cljs$core$IFn$_invoke$arity$1(G__6292),new cljs.core.Keyword(null,"thickness","thickness",4301318886).cljs$core$IFn$_invoke$arity$1(G__6292),null,cljs.core.dissoc.call(null,G__6292,new cljs.core.Keyword(null,"coords","coords",3954120592),new cljs.core.Keyword(null,"thickness","thickness",4301318886))));
});
palimpsest.types.last_coord = (function last_coord(stroke_seq){return cljs.core.last.call(null,new cljs.core.Keyword(null,"coords","coords",3954120592).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,stroke_seq)));
});
palimpsest.types.extend_last_stroke = (function extend_last_stroke(stroke_seq,coord){var new_stroke = palimpsest.types.add_coord.call(null,cljs.core.last.call(null,stroke_seq),coord);return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.drop_last.call(null,stroke_seq)),new_stroke);
});
