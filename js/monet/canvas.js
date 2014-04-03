// Compiled by ClojureScript 0.0-2138
goog.provide('monet.canvas');
goog.require('cljs.core');
goog.require('monet.core');
goog.require('monet.core');
monet.canvas.get_context = (function get_context(canvas,type){return canvas.getContext(cljs.core.name.call(null,type));
});
monet.canvas.begin_path = (function begin_path(ctx){ctx.beginPath();
return ctx;
});
monet.canvas.close_path = (function close_path(ctx){ctx.closePath();
return ctx;
});
monet.canvas.fill = (function fill(ctx){ctx.fill();
return ctx;
});
monet.canvas.stroke = (function stroke(ctx){ctx.stroke();
return ctx;
});
monet.canvas.clear_rect = (function clear_rect(ctx,p__7513){var map__7515 = p__7513;var map__7515__$1 = ((cljs.core.seq_QMARK_.call(null,map__7515))?cljs.core.apply.call(null,cljs.core.hash_map,map__7515):map__7515);var h = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"h","h",1013904346));var w = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"w","w",1013904361));var y = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"x","x",1013904362));ctx.clearRect(x,y,w,h);
return ctx;
});
/**
* DEPRECATED. Prefer fill-rect
*/
monet.canvas.rect = (function rect(ctx,p__7516){var map__7518 = p__7516;var map__7518__$1 = ((cljs.core.seq_QMARK_.call(null,map__7518))?cljs.core.apply.call(null,cljs.core.hash_map,map__7518):map__7518);var h = cljs.core.get.call(null,map__7518__$1,new cljs.core.Keyword(null,"h","h",1013904346));var w = cljs.core.get.call(null,map__7518__$1,new cljs.core.Keyword(null,"w","w",1013904361));var y = cljs.core.get.call(null,map__7518__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__7518__$1,new cljs.core.Keyword(null,"x","x",1013904362));monet.canvas.begin_path.call(null,ctx);
ctx.rect(x,y,w,h);
monet.canvas.close_path.call(null,ctx);
monet.canvas.fill.call(null,ctx);
return ctx;
});
monet.canvas.stroke_rect = (function stroke_rect(ctx,p__7519){var map__7521 = p__7519;var map__7521__$1 = ((cljs.core.seq_QMARK_.call(null,map__7521))?cljs.core.apply.call(null,cljs.core.hash_map,map__7521):map__7521);var h = cljs.core.get.call(null,map__7521__$1,new cljs.core.Keyword(null,"h","h",1013904346));var w = cljs.core.get.call(null,map__7521__$1,new cljs.core.Keyword(null,"w","w",1013904361));var y = cljs.core.get.call(null,map__7521__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__7521__$1,new cljs.core.Keyword(null,"x","x",1013904362));ctx.strokeRect(x,y,w,h);
return ctx;
});
monet.canvas.fill_rect = (function fill_rect(ctx,p__7522){var map__7524 = p__7522;var map__7524__$1 = ((cljs.core.seq_QMARK_.call(null,map__7524))?cljs.core.apply.call(null,cljs.core.hash_map,map__7524):map__7524);var h = cljs.core.get.call(null,map__7524__$1,new cljs.core.Keyword(null,"h","h",1013904346));var w = cljs.core.get.call(null,map__7524__$1,new cljs.core.Keyword(null,"w","w",1013904361));var y = cljs.core.get.call(null,map__7524__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__7524__$1,new cljs.core.Keyword(null,"x","x",1013904362));ctx.fillRect(x,y,w,h);
return ctx;
});
monet.canvas.circle = (function circle(ctx,p__7525){var map__7527 = p__7525;var map__7527__$1 = ((cljs.core.seq_QMARK_.call(null,map__7527))?cljs.core.apply.call(null,cljs.core.hash_map,map__7527):map__7527);var r = cljs.core.get.call(null,map__7527__$1,new cljs.core.Keyword(null,"r","r",1013904356));var y = cljs.core.get.call(null,map__7527__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__7527__$1,new cljs.core.Keyword(null,"x","x",1013904362));monet.canvas.begin_path.call(null,ctx);
ctx.arc(x,y,r,0,(Math.PI * 2),true);
monet.canvas.close_path.call(null,ctx);
monet.canvas.fill.call(null,ctx);
return ctx;
});
monet.canvas.text = (function text(ctx,p__7528){var map__7530 = p__7528;var map__7530__$1 = ((cljs.core.seq_QMARK_.call(null,map__7530))?cljs.core.apply.call(null,cljs.core.hash_map,map__7530):map__7530);var y = cljs.core.get.call(null,map__7530__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__7530__$1,new cljs.core.Keyword(null,"x","x",1013904362));var text__$1 = cljs.core.get.call(null,map__7530__$1,new cljs.core.Keyword(null,"text","text",1017460895));ctx.fillText(text__$1,x,y);
return ctx;
});
monet.canvas.font_style = (function font_style(ctx,font){ctx.font = font;
return ctx;
});
monet.canvas.fill_style = (function fill_style(ctx,color){ctx.fillStyle = cljs.core.name.call(null,color);
return ctx;
});
monet.canvas.stroke_style = (function stroke_style(ctx,color){ctx.strokeStyle = cljs.core.name.call(null,color);
return ctx;
});
monet.canvas.stroke_width = (function stroke_width(ctx,w){ctx.lineWidth = w;
return ctx;
});
monet.canvas.stroke_cap = (function stroke_cap(ctx,cap){ctx.lineCap = cljs.core.name.call(null,cap);
return ctx;
});
monet.canvas.move_to = (function move_to(ctx,x,y){ctx.moveTo(x,y);
return ctx;
});
monet.canvas.line_to = (function line_to(ctx,x,y){ctx.lineTo(x,y);
return ctx;
});
monet.canvas.alpha = (function alpha(ctx,a){ctx.globalAlpha = a;
return ctx;
});
monet.canvas.composition_operation = (function composition_operation(ctx,operation){ctx.globalCompositionOperation = cljs.core.name.call(null,operation);
return ctx;
});
monet.canvas.text_align = (function text_align(ctx,alignment){ctx.textAlign = cljs.core.name.call(null,alignment);
return ctx;
});
monet.canvas.text_baseline = (function text_baseline(ctx,alignment){ctx.textBaseline = cljs.core.name.call(null,alignment);
return ctx;
});
/**
* Gets the pixel value as a hash map of RGBA values
*/
monet.canvas.get_pixel = (function get_pixel(ctx,x,y){var imgd = ctx.getImageData(x,y,1,1).data;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",1014017027),(imgd[0]),new cljs.core.Keyword(null,"green","green",1112523381),(imgd[1]),new cljs.core.Keyword(null,"blue","blue",1016931276),(imgd[2]),new cljs.core.Keyword(null,"alpha","alpha",1106814160),(imgd[3])], null);
});
monet.canvas.save = (function save(ctx){ctx.save();
return ctx;
});
monet.canvas.restore = (function restore(ctx){ctx.restore();
return ctx;
});
monet.canvas.rotate = (function rotate(ctx,angle){ctx.rotate(angle);
return ctx;
});
monet.canvas.scale = (function scale(ctx,x,y){ctx.scale(x,y);
return ctx;
});
monet.canvas.translate = (function translate(ctx,x,y){ctx.translate(x,y);
return ctx;
});
/**
* Multiplies a custom transformation matrix to the existing
* HTML5 canvas transformation according to the follow convention:
* 
* [ x']   [ m11 m21 dx ] [ x ]
* [ y'] = [ m12 m22 dy ] [ y ]
* [ 1 ]   [ 0   0   1  ] [ 1 ]
*/
monet.canvas.transform = (function() {
var transform = null;
var transform__2 = (function (ctx,p__7531){var map__7533 = p__7531;var map__7533__$1 = ((cljs.core.seq_QMARK_.call(null,map__7533))?cljs.core.apply.call(null,cljs.core.hash_map,map__7533):map__7533);var dy = cljs.core.get.call(null,map__7533__$1,new cljs.core.Keyword(null,"dy","dy",1013907463));var dx = cljs.core.get.call(null,map__7533__$1,new cljs.core.Keyword(null,"dx","dx",1013907462));var m22 = cljs.core.get.call(null,map__7533__$1,new cljs.core.Keyword(null,"m22","m22",1014010591));var m21 = cljs.core.get.call(null,map__7533__$1,new cljs.core.Keyword(null,"m21","m21",1014010590));var m12 = cljs.core.get.call(null,map__7533__$1,new cljs.core.Keyword(null,"m12","m12",1014010560));var m11 = cljs.core.get.call(null,map__7533__$1,new cljs.core.Keyword(null,"m11","m11",1014010559));ctx.transform(m11,m12,m21,m22,dx,dy);
return ctx;
});
var transform__7 = (function (ctx,m11,m12,m21,m22,dx,dy){ctx.transform(m11,m12,m21,m22,dx,dy);
return ctx;
});
transform = function(ctx,m11,m12,m21,m22,dx,dy){
switch(arguments.length){
case 2:
return transform__2.call(this,ctx,m11);
case 7:
return transform__7.call(this,ctx,m11,m12,m21,m22,dx,dy);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transform.cljs$core$IFn$_invoke$arity$2 = transform__2;
transform.cljs$core$IFn$_invoke$arity$7 = transform__7;
return transform;
})()
;
/**
* Draws the image onto the canvas at the given position.
* If a map of params is given, the number of entries is used to
* determine the underlying call to make.
*/
monet.canvas.draw_image = (function() {
var draw_image = null;
var draw_image__3 = (function (ctx,img,p__7534){var map__7539 = p__7534;var map__7539__$1 = ((cljs.core.seq_QMARK_.call(null,map__7539))?cljs.core.apply.call(null,cljs.core.hash_map,map__7539):map__7539);var params = map__7539__$1;var w = cljs.core.get.call(null,map__7539__$1,new cljs.core.Keyword(null,"w","w",1013904361));var dx = cljs.core.get.call(null,map__7539__$1,new cljs.core.Keyword(null,"dx","dx",1013907462));var dy = cljs.core.get.call(null,map__7539__$1,new cljs.core.Keyword(null,"dy","dy",1013907463));var y = cljs.core.get.call(null,map__7539__$1,new cljs.core.Keyword(null,"y","y",1013904363));var dw = cljs.core.get.call(null,map__7539__$1,new cljs.core.Keyword(null,"dw","dw",1013907461));var x = cljs.core.get.call(null,map__7539__$1,new cljs.core.Keyword(null,"x","x",1013904362));var sy = cljs.core.get.call(null,map__7539__$1,new cljs.core.Keyword(null,"sy","sy",1013907928));var sw = cljs.core.get.call(null,map__7539__$1,new cljs.core.Keyword(null,"sw","sw",1013907926));var sx = cljs.core.get.call(null,map__7539__$1,new cljs.core.Keyword(null,"sx","sx",1013907927));var sh = cljs.core.get.call(null,map__7539__$1,new cljs.core.Keyword(null,"sh","sh",1013907911));var h = cljs.core.get.call(null,map__7539__$1,new cljs.core.Keyword(null,"h","h",1013904346));var dh = cljs.core.get.call(null,map__7539__$1,new cljs.core.Keyword(null,"dh","dh",1013907446));var pred__7540_7543 = cljs.core._EQ_;var expr__7541_7544 = cljs.core.count.call(null,params);if(cljs.core.truth_(pred__7540_7543.call(null,2,expr__7541_7544)))
{ctx.drawImage(img,x,y);
} else
{if(cljs.core.truth_(pred__7540_7543.call(null,4,expr__7541_7544)))
{ctx.drawImage(img,x,y,w,h);
} else
{if(cljs.core.truth_(pred__7540_7543.call(null,8,expr__7541_7544)))
{ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7541_7544)].join('')));
}
}
}
return ctx;
});
var draw_image__4 = (function (ctx,img,x,y){ctx.drawImage(img,x,y);
return ctx;
});
draw_image = function(ctx,img,x,y){
switch(arguments.length){
case 3:
return draw_image__3.call(this,ctx,img,x);
case 4:
return draw_image__4.call(this,ctx,img,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_image.cljs$core$IFn$_invoke$arity$3 = draw_image__3;
draw_image.cljs$core$IFn$_invoke$arity$4 = draw_image__4;
return draw_image;
})()
;
monet.canvas.quadratic_curve_to = (function() {
var quadratic_curve_to = null;
var quadratic_curve_to__2 = (function (ctx,p__7545){var map__7547 = p__7545;var map__7547__$1 = ((cljs.core.seq_QMARK_.call(null,map__7547))?cljs.core.apply.call(null,cljs.core.hash_map,map__7547):map__7547);var y = cljs.core.get.call(null,map__7547__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__7547__$1,new cljs.core.Keyword(null,"x","x",1013904362));var cpy = cljs.core.get.call(null,map__7547__$1,new cljs.core.Keyword(null,"cpy","cpy",1014002974));var cpx = cljs.core.get.call(null,map__7547__$1,new cljs.core.Keyword(null,"cpx","cpx",1014002973));ctx.quadraticCurveTo(cpx,cpy,x,y);
return ctx;
});
var quadratic_curve_to__5 = (function (ctx,cpx,cpy,x,y){ctx.quadraticCurveTo(cpx,cpy,x,y);
return ctx;
});
quadratic_curve_to = function(ctx,cpx,cpy,x,y){
switch(arguments.length){
case 2:
return quadratic_curve_to__2.call(this,ctx,cpx);
case 5:
return quadratic_curve_to__5.call(this,ctx,cpx,cpy,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
quadratic_curve_to.cljs$core$IFn$_invoke$arity$2 = quadratic_curve_to__2;
quadratic_curve_to.cljs$core$IFn$_invoke$arity$5 = quadratic_curve_to__5;
return quadratic_curve_to;
})()
;
monet.canvas.bezier_curve_to = (function() {
var bezier_curve_to = null;
var bezier_curve_to__2 = (function (ctx,p__7548){var map__7550 = p__7548;var map__7550__$1 = ((cljs.core.seq_QMARK_.call(null,map__7550))?cljs.core.apply.call(null,cljs.core.hash_map,map__7550):map__7550);var y = cljs.core.get.call(null,map__7550__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__7550__$1,new cljs.core.Keyword(null,"x","x",1013904362));var cp2y = cljs.core.get.call(null,map__7550__$1,new cljs.core.Keyword(null,"cp2y","cp2y",1016962854));var cp2x = cljs.core.get.call(null,map__7550__$1,new cljs.core.Keyword(null,"cp2x","cp2x",1016962853));var cp1y = cljs.core.get.call(null,map__7550__$1,new cljs.core.Keyword(null,"cp1y","cp1y",1016962823));var cp1x = cljs.core.get.call(null,map__7550__$1,new cljs.core.Keyword(null,"cp1x","cp1x",1016962822));ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
return ctx;
});
var bezier_curve_to__7 = (function (ctx,cp1x,cp1y,cp2x,cp2y,x,y){ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
return ctx;
});
bezier_curve_to = function(ctx,cp1x,cp1y,cp2x,cp2y,x,y){
switch(arguments.length){
case 2:
return bezier_curve_to__2.call(this,ctx,cp1x);
case 7:
return bezier_curve_to__7.call(this,ctx,cp1x,cp1y,cp2x,cp2y,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bezier_curve_to.cljs$core$IFn$_invoke$arity$2 = bezier_curve_to__2;
bezier_curve_to.cljs$core$IFn$_invoke$arity$7 = bezier_curve_to__7;
return bezier_curve_to;
})()
;
monet.canvas.rounded_rect = (function rounded_rect(ctx,p__7551){var map__7553 = p__7551;var map__7553__$1 = ((cljs.core.seq_QMARK_.call(null,map__7553))?cljs.core.apply.call(null,cljs.core.hash_map,map__7553):map__7553);var r = cljs.core.get.call(null,map__7553__$1,new cljs.core.Keyword(null,"r","r",1013904356));var h = cljs.core.get.call(null,map__7553__$1,new cljs.core.Keyword(null,"h","h",1013904346));var w = cljs.core.get.call(null,map__7553__$1,new cljs.core.Keyword(null,"w","w",1013904361));var y = cljs.core.get.call(null,map__7553__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__7553__$1,new cljs.core.Keyword(null,"x","x",1013904362));monet.canvas.stroke.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.move_to.call(null,monet.canvas.begin_path.call(null,ctx),x,(y + r)),x,((y + h) - r)),x,(y + h),(x + r),(y + h)),((x + w) - r),(y + h)),(x + w),(y + h),(x + w),((y + h) - r)),(x + w),(y + r)),(x + w),y,((x + w) - r),y),(x + r),y),x,y,x,(y + r)));
return ctx;
});
monet.canvas.add_entity = (function add_entity(mc,k,ent){return (new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(mc)[k] = ent);
});
monet.canvas.remove_entity = (function remove_entity(mc,k){return delete new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(mc)[k];
});
monet.canvas.get_entity = (function get_entity(mc,k){return new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(mc)[k]));
});
/**
* @param {...*} var_args
*/
monet.canvas.update_entity = (function() { 
var update_entity__delegate = function (mc,k,func,extra){var cur = (new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(mc)[k]);var res = cljs.core.apply.call(null,func,cur,extra);return (new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(mc)[k] = res);
};
var update_entity = function (mc,k,func,var_args){
var extra = null;if (arguments.length > 3) {
  extra = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_entity__delegate.call(this,mc,k,func,extra);};
update_entity.cljs$lang$maxFixedArity = 3;
update_entity.cljs$lang$applyTo = (function (arglist__7554){
var mc = cljs.core.first(arglist__7554);
arglist__7554 = cljs.core.next(arglist__7554);
var k = cljs.core.first(arglist__7554);
arglist__7554 = cljs.core.next(arglist__7554);
var func = cljs.core.first(arglist__7554);
var extra = cljs.core.rest(arglist__7554);
return update_entity__delegate(mc,k,func,extra);
});
update_entity.cljs$core$IFn$_invoke$arity$variadic = update_entity__delegate;
return update_entity;
})()
;
monet.canvas.clear_BANG_ = (function clear_BANG_(mc){var ks = cljs.core.js_keys.call(null,new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(mc));var seq__7559 = cljs.core.seq.call(null,ks);var chunk__7560 = null;var count__7561 = 0;var i__7562 = 0;while(true){
if((i__7562 < count__7561))
{var k = cljs.core._nth.call(null,chunk__7560,i__7562);monet.canvas.remove_entity.call(null,mc,k);
{
var G__7563 = seq__7559;
var G__7564 = chunk__7560;
var G__7565 = count__7561;
var G__7566 = (i__7562 + 1);
seq__7559 = G__7563;
chunk__7560 = G__7564;
count__7561 = G__7565;
i__7562 = G__7566;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7559);if(temp__4092__auto__)
{var seq__7559__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7559__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7559__$1);{
var G__7567 = cljs.core.chunk_rest.call(null,seq__7559__$1);
var G__7568 = c__4150__auto__;
var G__7569 = cljs.core.count.call(null,c__4150__auto__);
var G__7570 = 0;
seq__7559 = G__7567;
chunk__7560 = G__7568;
count__7561 = G__7569;
i__7562 = G__7570;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__7559__$1);monet.canvas.remove_entity.call(null,mc,k);
{
var G__7571 = cljs.core.next.call(null,seq__7559__$1);
var G__7572 = null;
var G__7573 = 0;
var G__7574 = 0;
seq__7559 = G__7571;
chunk__7560 = G__7572;
count__7561 = G__7573;
i__7562 = G__7574;
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
monet.canvas.entity = (function entity(v,update,draw){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),v,new cljs.core.Keyword(null,"draw","draw",1016996022),draw,new cljs.core.Keyword(null,"update","update",4470025275),update], null);
});
monet.canvas.attr = (function attr(e,a){return e.getAttribute(a);
});
monet.canvas.draw_loop = (function draw_loop(p__7575){var map__7581 = p__7575;var map__7581__$1 = ((cljs.core.seq_QMARK_.call(null,map__7581))?cljs.core.apply.call(null,cljs.core.hash_map,map__7581):map__7581);var mc = map__7581__$1;var entities = cljs.core.get.call(null,map__7581__$1,new cljs.core.Keyword(null,"entities","entities",3206757171));var active = cljs.core.get.call(null,map__7581__$1,new cljs.core.Keyword(null,"active","active",3885920888));var ctx = cljs.core.get.call(null,map__7581__$1,new cljs.core.Keyword(null,"ctx","ctx",1014003097));var updating_QMARK_ = cljs.core.get.call(null,map__7581__$1,new cljs.core.Keyword(null,"updating?","updating?",3359806763));var canvas = cljs.core.get.call(null,map__7581__$1,new cljs.core.Keyword(null,"canvas","canvas",3941165258));monet.canvas.clear_rect.call(null,ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",1013904362),0,new cljs.core.Keyword(null,"y","y",1013904363),0,new cljs.core.Keyword(null,"w","w",1013904361),monet.canvas.attr.call(null,canvas,"width"),new cljs.core.Keyword(null,"h","h",1013904346),monet.canvas.attr.call(null,canvas,"height")], null));
if(cljs.core.truth_(cljs.core.deref.call(null,active)))
{var ks_7586 = cljs.core.js_keys.call(null,entities);var cnt_7587 = ks_7586.length;var i_7588 = 0;while(true){
if((i_7588 < cnt_7587))
{var k_7589 = (ks_7586[i_7588]);var map__7582_7590 = (entities[k_7589]);var map__7582_7591__$1 = ((cljs.core.seq_QMARK_.call(null,map__7582_7590))?cljs.core.apply.call(null,cljs.core.hash_map,map__7582_7590):map__7582_7590);var ent_7592 = map__7582_7591__$1;var value_7593 = cljs.core.get.call(null,map__7582_7591__$1,new cljs.core.Keyword(null,"value","value",1125876963));var update_7594 = cljs.core.get.call(null,map__7582_7591__$1,new cljs.core.Keyword(null,"update","update",4470025275));var draw_7595 = cljs.core.get.call(null,map__7582_7591__$1,new cljs.core.Keyword(null,"draw","draw",1016996022));if(cljs.core.truth_((function (){var and__3396__auto__ = update_7594;if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.deref.call(null,updating_QMARK_);
} else
{return and__3396__auto__;
}
})()))
{var updated_7596 = (function (){var or__3408__auto__ = (function (){try{return update_7594.call(null,value_7593);
}catch (e7584){if((e7584 instanceof Error))
{var e = e7584;console.log(e);
return value_7593;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7584;
} else
{return null;
}
}
}})();if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return value_7593;
}
})();if(cljs.core.truth_((entities[k_7589])))
{(entities[k_7589] = cljs.core.assoc.call(null,ent_7592,new cljs.core.Keyword(null,"value","value",1125876963),updated_7596));
} else
{}
} else
{}
if(cljs.core.truth_(draw_7595))
{try{draw_7595.call(null,ctx,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1((entities[k_7589])));
}catch (e7585){if((e7585 instanceof Error))
{var e_7597 = e7585;console.log(e_7597);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7585;
} else
{}
}
}} else
{}
{
var G__7598 = (i_7588 + 1);
i_7588 = G__7598;
continue;
}
} else
{}
break;
}
return monet.core.animation_frame.call(null,(function (){return draw_loop.call(null,mc);
}));
} else
{return null;
}
});
monet.canvas.monet_canvas = (function monet_canvas(elem,context_type){var ct = (function (){var or__3408__auto__ = context_type;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return "2d";
}
})();var ctx = monet.canvas.get_context.call(null,elem,ct);return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"canvas","canvas",3941165258),elem,new cljs.core.Keyword(null,"ctx","ctx",1014003097),ctx,new cljs.core.Keyword(null,"entities","entities",3206757171),(function (){var obj7602 = {};return obj7602;
})(),new cljs.core.Keyword(null,"updating?","updating?",3359806763),cljs.core.atom.call(null,true),new cljs.core.Keyword(null,"active","active",3885920888),cljs.core.atom.call(null,true)], null);
});
/**
* @param {...*} var_args
*/
monet.canvas.init = (function() { 
var init__delegate = function (canvas,p__7603){var vec__7605 = p__7603;var context_type = cljs.core.nth.call(null,vec__7605,0,null);var mc = monet.canvas.monet_canvas.call(null,canvas,context_type);monet.canvas.draw_loop.call(null,mc);
return mc;
};
var init = function (canvas,var_args){
var p__7603 = null;if (arguments.length > 1) {
  p__7603 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return init__delegate.call(this,canvas,p__7603);};
init.cljs$lang$maxFixedArity = 1;
init.cljs$lang$applyTo = (function (arglist__7606){
var canvas = cljs.core.first(arglist__7606);
var p__7603 = cljs.core.rest(arglist__7606);
return init__delegate(canvas,p__7603);
});
init.cljs$core$IFn$_invoke$arity$variadic = init__delegate;
return init;
})()
;
monet.canvas.stop = (function stop(mc){return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(mc),false);
});
monet.canvas.stop_updating = (function stop_updating(mc){return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"updating?","updating?",3359806763).cljs$core$IFn$_invoke$arity$1(mc),false);
});
monet.canvas.start_updating = (function start_updating(mc){return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"updating?","updating?",3359806763).cljs$core$IFn$_invoke$arity$1(mc),true);
});
monet.canvas.restart = (function restart(mc){cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(mc),true);
return monet.canvas.draw_loop.call(null,mc);
});
