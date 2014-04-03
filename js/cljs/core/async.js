// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10097 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10097 = (function (f,fn_handler,meta10098){
this.f = f;
this.fn_handler = fn_handler;
this.meta10098 = meta10098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10097.cljs$lang$type = true;
cljs.core.async.t10097.cljs$lang$ctorStr = "cljs.core.async/t10097";
cljs.core.async.t10097.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10097");
});
cljs.core.async.t10097.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10097.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10097.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10099){var self__ = this;
var _10099__$1 = this;return self__.meta10098;
});
cljs.core.async.t10097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10099,meta10098__$1){var self__ = this;
var _10099__$1 = this;return (new cljs.core.async.t10097(self__.f,self__.fn_handler,meta10098__$1));
});
cljs.core.async.__GT_t10097 = (function __GT_t10097(f__$1,fn_handler__$1,meta10098){return (new cljs.core.async.t10097(f__$1,fn_handler__$1,meta10098));
});
}
return (new cljs.core.async.t10097(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10101 = buff;if(G__10101)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__10101.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10101.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10101);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10101);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10102 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10102);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10102);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,ret);
}));
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4250__auto___10103 = n;var x_10104 = 0;while(true){
if((x_10104 < n__4250__auto___10103))
{(a[x_10104] = 0);
{
var G__10105 = (x_10104 + 1);
x_10104 = G__10105;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10106 = (i + 1);
i = G__10106;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10110 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10110 = (function (flag,alt_flag,meta10111){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10111 = meta10111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10110.cljs$lang$type = true;
cljs.core.async.t10110.cljs$lang$ctorStr = "cljs.core.async/t10110";
cljs.core.async.t10110.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10110");
});
cljs.core.async.t10110.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10112){var self__ = this;
var _10112__$1 = this;return self__.meta10111;
});
cljs.core.async.t10110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10112,meta10111__$1){var self__ = this;
var _10112__$1 = this;return (new cljs.core.async.t10110(self__.flag,self__.alt_flag,meta10111__$1));
});
cljs.core.async.__GT_t10110 = (function __GT_t10110(flag__$1,alt_flag__$1,meta10111){return (new cljs.core.async.t10110(flag__$1,alt_flag__$1,meta10111));
});
}
return (new cljs.core.async.t10110(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10116 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10116 = (function (cb,flag,alt_handler,meta10117){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10117 = meta10117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10116.cljs$lang$type = true;
cljs.core.async.t10116.cljs$lang$ctorStr = "cljs.core.async/t10116";
cljs.core.async.t10116.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10116");
});
cljs.core.async.t10116.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10118){var self__ = this;
var _10118__$1 = this;return self__.meta10117;
});
cljs.core.async.t10116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10118,meta10117__$1){var self__ = this;
var _10118__$1 = this;return (new cljs.core.async.t10116(self__.cb,self__.flag,self__.alt_handler,meta10117__$1));
});
cljs.core.async.__GT_t10116 = (function __GT_t10116(cb__$1,flag__$1,alt_handler__$1,meta10117){return (new cljs.core.async.t10116(cb__$1,flag__$1,alt_handler__$1,meta10117));
});
}
return (new cljs.core.async.t10116(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10119_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10119_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10120_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10120_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3408__auto__ = wport;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10121 = (i + 1);
i = G__10121;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3408__auto__ = ret;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3396__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3396__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10122){var map__10124 = p__10122;var map__10124__$1 = ((cljs.core.seq_QMARK_.call(null,map__10124))?cljs.core.apply.call(null,cljs.core.hash_map,map__10124):map__10124);var opts = map__10124__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10122 = null;if (arguments.length > 1) {
  p__10122 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10122);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10125){
var ports = cljs.core.first(arglist__10125);
var p__10122 = cljs.core.rest(arglist__10125);
return alts_BANG___delegate(ports,p__10122);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10133 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10133 = (function (ch,f,map_LT_,meta10134){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10134 = meta10134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10133.cljs$lang$type = true;
cljs.core.async.t10133.cljs$lang$ctorStr = "cljs.core.async/t10133";
cljs.core.async.t10133.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10133");
});
cljs.core.async.t10133.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10133.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t10133.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10133.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10136 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10136 = (function (fn1,_,meta10134,ch,f,map_LT_,meta10137){
this.fn1 = fn1;
this._ = _;
this.meta10134 = meta10134;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10137 = meta10137;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10136.cljs$lang$type = true;
cljs.core.async.t10136.cljs$lang$ctorStr = "cljs.core.async/t10136";
cljs.core.async.t10136.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10136");
});
cljs.core.async.t10136.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10136.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10136.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10136.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10126_SHARP_){return f1.call(null,(((p1__10126_SHARP_ == null))?null:self__.f.call(null,p1__10126_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10138){var self__ = this;
var _10138__$1 = this;return self__.meta10137;
});
cljs.core.async.t10136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10138,meta10137__$1){var self__ = this;
var _10138__$1 = this;return (new cljs.core.async.t10136(self__.fn1,self__._,self__.meta10134,self__.ch,self__.f,self__.map_LT_,meta10137__$1));
});
cljs.core.async.__GT_t10136 = (function __GT_t10136(fn1__$1,___$2,meta10134__$1,ch__$2,f__$2,map_LT___$2,meta10137){return (new cljs.core.async.t10136(fn1__$1,___$2,meta10134__$1,ch__$2,f__$2,map_LT___$2,meta10137));
});
}
return (new cljs.core.async.t10136(fn1,___$1,self__.meta10134,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3396__auto__ = ret;if(cljs.core.truth_(and__3396__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3396__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10133.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10133.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10133.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10135){var self__ = this;
var _10135__$1 = this;return self__.meta10134;
});
cljs.core.async.t10133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10135,meta10134__$1){var self__ = this;
var _10135__$1 = this;return (new cljs.core.async.t10133(self__.ch,self__.f,self__.map_LT_,meta10134__$1));
});
cljs.core.async.__GT_t10133 = (function __GT_t10133(ch__$1,f__$1,map_LT___$1,meta10134){return (new cljs.core.async.t10133(ch__$1,f__$1,map_LT___$1,meta10134));
});
}
return (new cljs.core.async.t10133(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10142 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10142 = (function (ch,f,map_GT_,meta10143){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10143 = meta10143;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10142.cljs$lang$type = true;
cljs.core.async.t10142.cljs$lang$ctorStr = "cljs.core.async/t10142";
cljs.core.async.t10142.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10142");
});
cljs.core.async.t10142.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10142.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t10142.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10142.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10142.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10142.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10144){var self__ = this;
var _10144__$1 = this;return self__.meta10143;
});
cljs.core.async.t10142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10144,meta10143__$1){var self__ = this;
var _10144__$1 = this;return (new cljs.core.async.t10142(self__.ch,self__.f,self__.map_GT_,meta10143__$1));
});
cljs.core.async.__GT_t10142 = (function __GT_t10142(ch__$1,f__$1,map_GT___$1,meta10143){return (new cljs.core.async.t10142(ch__$1,f__$1,map_GT___$1,meta10143));
});
}
return (new cljs.core.async.t10142(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10148 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10148 = (function (ch,p,filter_GT_,meta10149){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10149 = meta10149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10148.cljs$lang$type = true;
cljs.core.async.t10148.cljs$lang$ctorStr = "cljs.core.async/t10148";
cljs.core.async.t10148.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10148");
});
cljs.core.async.t10148.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10148.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t10148.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10148.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10148.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10148.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10148.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10150){var self__ = this;
var _10150__$1 = this;return self__.meta10149;
});
cljs.core.async.t10148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10150,meta10149__$1){var self__ = this;
var _10150__$1 = this;return (new cljs.core.async.t10148(self__.ch,self__.p,self__.filter_GT_,meta10149__$1));
});
cljs.core.async.__GT_t10148 = (function __GT_t10148(ch__$1,p__$1,filter_GT___$1,meta10149){return (new cljs.core.async.t10148(ch__$1,p__$1,filter_GT___$1,meta10149));
});
}
return (new cljs.core.async.t10148(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6072__auto___10233 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6073__auto__ = (function (){var switch__6057__auto__ = (function (state_10212){var state_val_10213 = (state_10212[1]);if((state_val_10213 === 1))
{var state_10212__$1 = state_10212;var statearr_10214_10234 = state_10212__$1;(statearr_10214_10234[2] = null);
(statearr_10214_10234[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10213 === 2))
{var state_10212__$1 = state_10212;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10212__$1,4,ch);
} else
{if((state_val_10213 === 3))
{var inst_10210 = (state_10212[2]);var state_10212__$1 = state_10212;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10212__$1,inst_10210);
} else
{if((state_val_10213 === 4))
{var inst_10194 = (state_10212[7]);var inst_10194__$1 = (state_10212[2]);var inst_10195 = (inst_10194__$1 == null);var state_10212__$1 = (function (){var statearr_10215 = state_10212;(statearr_10215[7] = inst_10194__$1);
return statearr_10215;
})();if(cljs.core.truth_(inst_10195))
{var statearr_10216_10235 = state_10212__$1;(statearr_10216_10235[1] = 5);
} else
{var statearr_10217_10236 = state_10212__$1;(statearr_10217_10236[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10213 === 5))
{var inst_10197 = cljs.core.async.close_BANG_.call(null,out);var state_10212__$1 = state_10212;var statearr_10218_10237 = state_10212__$1;(statearr_10218_10237[2] = inst_10197);
(statearr_10218_10237[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10213 === 6))
{var inst_10194 = (state_10212[7]);var inst_10199 = p.call(null,inst_10194);var state_10212__$1 = state_10212;if(cljs.core.truth_(inst_10199))
{var statearr_10219_10238 = state_10212__$1;(statearr_10219_10238[1] = 8);
} else
{var statearr_10220_10239 = state_10212__$1;(statearr_10220_10239[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10213 === 7))
{var inst_10208 = (state_10212[2]);var state_10212__$1 = state_10212;var statearr_10221_10240 = state_10212__$1;(statearr_10221_10240[2] = inst_10208);
(statearr_10221_10240[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10213 === 8))
{var inst_10194 = (state_10212[7]);var state_10212__$1 = state_10212;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10212__$1,11,out,inst_10194);
} else
{if((state_val_10213 === 9))
{var state_10212__$1 = state_10212;var statearr_10222_10241 = state_10212__$1;(statearr_10222_10241[2] = null);
(statearr_10222_10241[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10213 === 10))
{var inst_10205 = (state_10212[2]);var state_10212__$1 = (function (){var statearr_10223 = state_10212;(statearr_10223[8] = inst_10205);
return statearr_10223;
})();var statearr_10224_10242 = state_10212__$1;(statearr_10224_10242[2] = null);
(statearr_10224_10242[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10213 === 11))
{var inst_10202 = (state_10212[2]);var state_10212__$1 = state_10212;var statearr_10225_10243 = state_10212__$1;(statearr_10225_10243[2] = inst_10202);
(statearr_10225_10243[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
});return ((function (switch__6057__auto__){
return (function() {
var state_machine__6058__auto__ = null;
var state_machine__6058__auto____0 = (function (){var statearr_10229 = [null,null,null,null,null,null,null,null,null];(statearr_10229[0] = state_machine__6058__auto__);
(statearr_10229[1] = 1);
return statearr_10229;
});
var state_machine__6058__auto____1 = (function (state_10212){while(true){
var ret_value__6059__auto__ = (function (){try{while(true){
var result__6060__auto__ = switch__6057__auto__.call(null,state_10212);if(cljs.core.keyword_identical_QMARK_.call(null,result__6060__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6060__auto__;
}
break;
}
}catch (e10230){if((e10230 instanceof Object))
{var ex__6061__auto__ = e10230;var statearr_10231_10244 = state_10212;(statearr_10231_10244[5] = ex__6061__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10212);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10230;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6059__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10245 = state_10212;
state_10212 = G__10245;
continue;
}
} else
{return ret_value__6059__auto__;
}
break;
}
});
state_machine__6058__auto__ = function(state_10212){
switch(arguments.length){
case 0:
return state_machine__6058__auto____0.call(this);
case 1:
return state_machine__6058__auto____1.call(this,state_10212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6058__auto____0;
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6058__auto____1;
return state_machine__6058__auto__;
})()
;})(switch__6057__auto__))
})();var state__6074__auto__ = (function (){var statearr_10232 = f__6073__auto__.call(null);(statearr_10232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6072__auto___10233);
return statearr_10232;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6074__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6072__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6073__auto__ = (function (){var switch__6057__auto__ = (function (state_10411){var state_val_10412 = (state_10411[1]);if((state_val_10412 === 1))
{var state_10411__$1 = state_10411;var statearr_10413_10454 = state_10411__$1;(statearr_10413_10454[2] = null);
(statearr_10413_10454[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10412 === 2))
{var state_10411__$1 = state_10411;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10411__$1,4,in$);
} else
{if((state_val_10412 === 3))
{var inst_10409 = (state_10411[2]);var state_10411__$1 = state_10411;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10411__$1,inst_10409);
} else
{if((state_val_10412 === 4))
{var inst_10352 = (state_10411[7]);var inst_10352__$1 = (state_10411[2]);var inst_10353 = (inst_10352__$1 == null);var state_10411__$1 = (function (){var statearr_10414 = state_10411;(statearr_10414[7] = inst_10352__$1);
return statearr_10414;
})();if(cljs.core.truth_(inst_10353))
{var statearr_10415_10455 = state_10411__$1;(statearr_10415_10455[1] = 5);
} else
{var statearr_10416_10456 = state_10411__$1;(statearr_10416_10456[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10412 === 5))
{var inst_10355 = cljs.core.async.close_BANG_.call(null,out);var state_10411__$1 = state_10411;var statearr_10417_10457 = state_10411__$1;(statearr_10417_10457[2] = inst_10355);
(statearr_10417_10457[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10412 === 6))
{var inst_10352 = (state_10411[7]);var inst_10361 = f.call(null,inst_10352);var inst_10362 = cljs.core.seq.call(null,inst_10361);var inst_10363 = inst_10362;var inst_10364 = null;var inst_10365 = 0;var inst_10366 = 0;var state_10411__$1 = (function (){var statearr_10418 = state_10411;(statearr_10418[8] = inst_10366);
(statearr_10418[9] = inst_10365);
(statearr_10418[10] = inst_10364);
(statearr_10418[11] = inst_10363);
return statearr_10418;
})();var statearr_10419_10458 = state_10411__$1;(statearr_10419_10458[2] = null);
(statearr_10419_10458[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10412 === 7))
{var inst_10407 = (state_10411[2]);var state_10411__$1 = state_10411;var statearr_10420_10459 = state_10411__$1;(statearr_10420_10459[2] = inst_10407);
(statearr_10420_10459[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10412 === 8))
{var inst_10366 = (state_10411[8]);var inst_10365 = (state_10411[9]);var inst_10368 = (inst_10366 < inst_10365);var inst_10369 = inst_10368;var state_10411__$1 = state_10411;if(cljs.core.truth_(inst_10369))
{var statearr_10421_10460 = state_10411__$1;(statearr_10421_10460[1] = 10);
} else
{var statearr_10422_10461 = state_10411__$1;(statearr_10422_10461[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10412 === 9))
{var inst_10399 = (state_10411[2]);var inst_10400 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_10411__$1 = (function (){var statearr_10423 = state_10411;(statearr_10423[12] = inst_10399);
return statearr_10423;
})();if(cljs.core.truth_(inst_10400))
{var statearr_10424_10462 = state_10411__$1;(statearr_10424_10462[1] = 21);
} else
{var statearr_10425_10463 = state_10411__$1;(statearr_10425_10463[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10412 === 10))
{var inst_10366 = (state_10411[8]);var inst_10364 = (state_10411[10]);var inst_10371 = cljs.core._nth.call(null,inst_10364,inst_10366);var state_10411__$1 = state_10411;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10411__$1,13,out,inst_10371);
} else
{if((state_val_10412 === 11))
{var inst_10377 = (state_10411[13]);var inst_10363 = (state_10411[11]);var inst_10377__$1 = cljs.core.seq.call(null,inst_10363);var state_10411__$1 = (function (){var statearr_10429 = state_10411;(statearr_10429[13] = inst_10377__$1);
return statearr_10429;
})();if(inst_10377__$1)
{var statearr_10430_10464 = state_10411__$1;(statearr_10430_10464[1] = 14);
} else
{var statearr_10431_10465 = state_10411__$1;(statearr_10431_10465[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10412 === 12))
{var inst_10397 = (state_10411[2]);var state_10411__$1 = state_10411;var statearr_10432_10466 = state_10411__$1;(statearr_10432_10466[2] = inst_10397);
(statearr_10432_10466[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10412 === 13))
{var inst_10366 = (state_10411[8]);var inst_10365 = (state_10411[9]);var inst_10364 = (state_10411[10]);var inst_10363 = (state_10411[11]);var inst_10373 = (state_10411[2]);var inst_10374 = (inst_10366 + 1);var tmp10426 = inst_10365;var tmp10427 = inst_10364;var tmp10428 = inst_10363;var inst_10363__$1 = tmp10428;var inst_10364__$1 = tmp10427;var inst_10365__$1 = tmp10426;var inst_10366__$1 = inst_10374;var state_10411__$1 = (function (){var statearr_10433 = state_10411;(statearr_10433[14] = inst_10373);
(statearr_10433[8] = inst_10366__$1);
(statearr_10433[9] = inst_10365__$1);
(statearr_10433[10] = inst_10364__$1);
(statearr_10433[11] = inst_10363__$1);
return statearr_10433;
})();var statearr_10434_10467 = state_10411__$1;(statearr_10434_10467[2] = null);
(statearr_10434_10467[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10412 === 14))
{var inst_10377 = (state_10411[13]);var inst_10379 = cljs.core.chunked_seq_QMARK_.call(null,inst_10377);var state_10411__$1 = state_10411;if(inst_10379)
{var statearr_10435_10468 = state_10411__$1;(statearr_10435_10468[1] = 17);
} else
{var statearr_10436_10469 = state_10411__$1;(statearr_10436_10469[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10412 === 15))
{var state_10411__$1 = state_10411;var statearr_10437_10470 = state_10411__$1;(statearr_10437_10470[2] = null);
(statearr_10437_10470[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10412 === 16))
{var inst_10395 = (state_10411[2]);var state_10411__$1 = state_10411;var statearr_10438_10471 = state_10411__$1;(statearr_10438_10471[2] = inst_10395);
(statearr_10438_10471[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10412 === 17))
{var inst_10377 = (state_10411[13]);var inst_10381 = cljs.core.chunk_first.call(null,inst_10377);var inst_10382 = cljs.core.chunk_rest.call(null,inst_10377);var inst_10383 = cljs.core.count.call(null,inst_10381);var inst_10363 = inst_10382;var inst_10364 = inst_10381;var inst_10365 = inst_10383;var inst_10366 = 0;var state_10411__$1 = (function (){var statearr_10439 = state_10411;(statearr_10439[8] = inst_10366);
(statearr_10439[9] = inst_10365);
(statearr_10439[10] = inst_10364);
(statearr_10439[11] = inst_10363);
return statearr_10439;
})();var statearr_10440_10472 = state_10411__$1;(statearr_10440_10472[2] = null);
(statearr_10440_10472[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10412 === 18))
{var inst_10377 = (state_10411[13]);var inst_10386 = cljs.core.first.call(null,inst_10377);var state_10411__$1 = state_10411;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10411__$1,20,out,inst_10386);
} else
{if((state_val_10412 === 19))
{var inst_10392 = (state_10411[2]);var state_10411__$1 = state_10411;var statearr_10441_10473 = state_10411__$1;(statearr_10441_10473[2] = inst_10392);
(statearr_10441_10473[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10412 === 20))
{var inst_10377 = (state_10411[13]);var inst_10388 = (state_10411[2]);var inst_10389 = cljs.core.next.call(null,inst_10377);var inst_10363 = inst_10389;var inst_10364 = null;var inst_10365 = 0;var inst_10366 = 0;var state_10411__$1 = (function (){var statearr_10442 = state_10411;(statearr_10442[8] = inst_10366);
(statearr_10442[9] = inst_10365);
(statearr_10442[10] = inst_10364);
(statearr_10442[11] = inst_10363);
(statearr_10442[15] = inst_10388);
return statearr_10442;
})();var statearr_10443_10474 = state_10411__$1;(statearr_10443_10474[2] = null);
(statearr_10443_10474[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10412 === 21))
{var state_10411__$1 = state_10411;var statearr_10444_10475 = state_10411__$1;(statearr_10444_10475[2] = null);
(statearr_10444_10475[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10412 === 22))
{var state_10411__$1 = state_10411;var statearr_10445_10476 = state_10411__$1;(statearr_10445_10476[2] = null);
(statearr_10445_10476[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10412 === 23))
{var inst_10405 = (state_10411[2]);var state_10411__$1 = state_10411;var statearr_10446_10477 = state_10411__$1;(statearr_10446_10477[2] = inst_10405);
(statearr_10446_10477[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6057__auto__){
return (function() {
var state_machine__6058__auto__ = null;
var state_machine__6058__auto____0 = (function (){var statearr_10450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10450[0] = state_machine__6058__auto__);
(statearr_10450[1] = 1);
return statearr_10450;
});
var state_machine__6058__auto____1 = (function (state_10411){while(true){
var ret_value__6059__auto__ = (function (){try{while(true){
var result__6060__auto__ = switch__6057__auto__.call(null,state_10411);if(cljs.core.keyword_identical_QMARK_.call(null,result__6060__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6060__auto__;
}
break;
}
}catch (e10451){if((e10451 instanceof Object))
{var ex__6061__auto__ = e10451;var statearr_10452_10478 = state_10411;(statearr_10452_10478[5] = ex__6061__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10411);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10451;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6059__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10479 = state_10411;
state_10411 = G__10479;
continue;
}
} else
{return ret_value__6059__auto__;
}
break;
}
});
state_machine__6058__auto__ = function(state_10411){
switch(arguments.length){
case 0:
return state_machine__6058__auto____0.call(this);
case 1:
return state_machine__6058__auto____1.call(this,state_10411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6058__auto____0;
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6058__auto____1;
return state_machine__6058__auto__;
})()
;})(switch__6057__auto__))
})();var state__6074__auto__ = (function (){var statearr_10453 = f__6073__auto__.call(null);(statearr_10453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6072__auto__);
return statearr_10453;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6074__auto__);
}));
return c__6072__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6072__auto___10574 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6073__auto__ = (function (){var switch__6057__auto__ = (function (state_10550){var state_val_10551 = (state_10550[1]);if((state_val_10551 === 1))
{var state_10550__$1 = state_10550;var statearr_10552_10575 = state_10550__$1;(statearr_10552_10575[2] = null);
(statearr_10552_10575[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10551 === 2))
{var state_10550__$1 = state_10550;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10550__$1,4,from);
} else
{if((state_val_10551 === 3))
{var inst_10548 = (state_10550[2]);var state_10550__$1 = state_10550;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10550__$1,inst_10548);
} else
{if((state_val_10551 === 4))
{var inst_10529 = (state_10550[7]);var inst_10529__$1 = (state_10550[2]);var inst_10530 = (inst_10529__$1 == null);var state_10550__$1 = (function (){var statearr_10553 = state_10550;(statearr_10553[7] = inst_10529__$1);
return statearr_10553;
})();if(cljs.core.truth_(inst_10530))
{var statearr_10554_10576 = state_10550__$1;(statearr_10554_10576[1] = 5);
} else
{var statearr_10555_10577 = state_10550__$1;(statearr_10555_10577[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10551 === 5))
{var state_10550__$1 = state_10550;if(cljs.core.truth_(close_QMARK_))
{var statearr_10556_10578 = state_10550__$1;(statearr_10556_10578[1] = 8);
} else
{var statearr_10557_10579 = state_10550__$1;(statearr_10557_10579[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10551 === 6))
{var inst_10529 = (state_10550[7]);var state_10550__$1 = state_10550;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10550__$1,11,to,inst_10529);
} else
{if((state_val_10551 === 7))
{var inst_10546 = (state_10550[2]);var state_10550__$1 = state_10550;var statearr_10558_10580 = state_10550__$1;(statearr_10558_10580[2] = inst_10546);
(statearr_10558_10580[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10551 === 8))
{var inst_10533 = cljs.core.async.close_BANG_.call(null,to);var state_10550__$1 = state_10550;var statearr_10559_10581 = state_10550__$1;(statearr_10559_10581[2] = inst_10533);
(statearr_10559_10581[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10551 === 9))
{var state_10550__$1 = state_10550;var statearr_10560_10582 = state_10550__$1;(statearr_10560_10582[2] = null);
(statearr_10560_10582[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10551 === 10))
{var inst_10536 = (state_10550[2]);var state_10550__$1 = state_10550;var statearr_10561_10583 = state_10550__$1;(statearr_10561_10583[2] = inst_10536);
(statearr_10561_10583[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10551 === 11))
{var inst_10539 = (state_10550[2]);var state_10550__$1 = state_10550;if(cljs.core.truth_(inst_10539))
{var statearr_10562_10584 = state_10550__$1;(statearr_10562_10584[1] = 12);
} else
{var statearr_10563_10585 = state_10550__$1;(statearr_10563_10585[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10551 === 12))
{var state_10550__$1 = state_10550;var statearr_10564_10586 = state_10550__$1;(statearr_10564_10586[2] = null);
(statearr_10564_10586[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10551 === 13))
{var state_10550__$1 = state_10550;var statearr_10565_10587 = state_10550__$1;(statearr_10565_10587[2] = null);
(statearr_10565_10587[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10551 === 14))
{var inst_10544 = (state_10550[2]);var state_10550__$1 = state_10550;var statearr_10566_10588 = state_10550__$1;(statearr_10566_10588[2] = inst_10544);
(statearr_10566_10588[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
});return ((function (switch__6057__auto__){
return (function() {
var state_machine__6058__auto__ = null;
var state_machine__6058__auto____0 = (function (){var statearr_10570 = [null,null,null,null,null,null,null,null];(statearr_10570[0] = state_machine__6058__auto__);
(statearr_10570[1] = 1);
return statearr_10570;
});
var state_machine__6058__auto____1 = (function (state_10550){while(true){
var ret_value__6059__auto__ = (function (){try{while(true){
var result__6060__auto__ = switch__6057__auto__.call(null,state_10550);if(cljs.core.keyword_identical_QMARK_.call(null,result__6060__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6060__auto__;
}
break;
}
}catch (e10571){if((e10571 instanceof Object))
{var ex__6061__auto__ = e10571;var statearr_10572_10589 = state_10550;(statearr_10572_10589[5] = ex__6061__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10550);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10571;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6059__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10590 = state_10550;
state_10550 = G__10590;
continue;
}
} else
{return ret_value__6059__auto__;
}
break;
}
});
state_machine__6058__auto__ = function(state_10550){
switch(arguments.length){
case 0:
return state_machine__6058__auto____0.call(this);
case 1:
return state_machine__6058__auto____1.call(this,state_10550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6058__auto____0;
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6058__auto____1;
return state_machine__6058__auto__;
})()
;})(switch__6057__auto__))
})();var state__6074__auto__ = (function (){var statearr_10573 = f__6073__auto__.call(null);(statearr_10573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6072__auto___10574);
return statearr_10573;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6074__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6072__auto___10691 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6073__auto__ = (function (){var switch__6057__auto__ = (function (state_10666){var state_val_10667 = (state_10666[1]);if((state_val_10667 === 1))
{var state_10666__$1 = state_10666;var statearr_10668_10692 = state_10666__$1;(statearr_10668_10692[2] = null);
(statearr_10668_10692[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10667 === 2))
{var state_10666__$1 = state_10666;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10666__$1,4,ch);
} else
{if((state_val_10667 === 3))
{var inst_10664 = (state_10666[2]);var state_10666__$1 = state_10666;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10666__$1,inst_10664);
} else
{if((state_val_10667 === 4))
{var inst_10643 = (state_10666[7]);var inst_10643__$1 = (state_10666[2]);var inst_10644 = (inst_10643__$1 == null);var state_10666__$1 = (function (){var statearr_10669 = state_10666;(statearr_10669[7] = inst_10643__$1);
return statearr_10669;
})();if(cljs.core.truth_(inst_10644))
{var statearr_10670_10693 = state_10666__$1;(statearr_10670_10693[1] = 5);
} else
{var statearr_10671_10694 = state_10666__$1;(statearr_10671_10694[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10667 === 5))
{var inst_10646 = cljs.core.async.close_BANG_.call(null,tc);var inst_10647 = cljs.core.async.close_BANG_.call(null,fc);var state_10666__$1 = (function (){var statearr_10672 = state_10666;(statearr_10672[8] = inst_10646);
return statearr_10672;
})();var statearr_10673_10695 = state_10666__$1;(statearr_10673_10695[2] = inst_10647);
(statearr_10673_10695[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10667 === 6))
{var inst_10643 = (state_10666[7]);var inst_10649 = p.call(null,inst_10643);var state_10666__$1 = state_10666;if(cljs.core.truth_(inst_10649))
{var statearr_10674_10696 = state_10666__$1;(statearr_10674_10696[1] = 9);
} else
{var statearr_10675_10697 = state_10666__$1;(statearr_10675_10697[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10667 === 7))
{var inst_10662 = (state_10666[2]);var state_10666__$1 = state_10666;var statearr_10676_10698 = state_10666__$1;(statearr_10676_10698[2] = inst_10662);
(statearr_10676_10698[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10667 === 8))
{var inst_10655 = (state_10666[2]);var state_10666__$1 = state_10666;if(cljs.core.truth_(inst_10655))
{var statearr_10677_10699 = state_10666__$1;(statearr_10677_10699[1] = 12);
} else
{var statearr_10678_10700 = state_10666__$1;(statearr_10678_10700[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10667 === 9))
{var state_10666__$1 = state_10666;var statearr_10679_10701 = state_10666__$1;(statearr_10679_10701[2] = tc);
(statearr_10679_10701[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10667 === 10))
{var state_10666__$1 = state_10666;var statearr_10680_10702 = state_10666__$1;(statearr_10680_10702[2] = fc);
(statearr_10680_10702[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10667 === 11))
{var inst_10643 = (state_10666[7]);var inst_10653 = (state_10666[2]);var state_10666__$1 = state_10666;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10666__$1,8,inst_10653,inst_10643);
} else
{if((state_val_10667 === 12))
{var state_10666__$1 = state_10666;var statearr_10681_10703 = state_10666__$1;(statearr_10681_10703[2] = null);
(statearr_10681_10703[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10667 === 13))
{var state_10666__$1 = state_10666;var statearr_10682_10704 = state_10666__$1;(statearr_10682_10704[2] = null);
(statearr_10682_10704[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10667 === 14))
{var inst_10660 = (state_10666[2]);var state_10666__$1 = state_10666;var statearr_10683_10705 = state_10666__$1;(statearr_10683_10705[2] = inst_10660);
(statearr_10683_10705[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
});return ((function (switch__6057__auto__){
return (function() {
var state_machine__6058__auto__ = null;
var state_machine__6058__auto____0 = (function (){var statearr_10687 = [null,null,null,null,null,null,null,null,null];(statearr_10687[0] = state_machine__6058__auto__);
(statearr_10687[1] = 1);
return statearr_10687;
});
var state_machine__6058__auto____1 = (function (state_10666){while(true){
var ret_value__6059__auto__ = (function (){try{while(true){
var result__6060__auto__ = switch__6057__auto__.call(null,state_10666);if(cljs.core.keyword_identical_QMARK_.call(null,result__6060__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6060__auto__;
}
break;
}
}catch (e10688){if((e10688 instanceof Object))
{var ex__6061__auto__ = e10688;var statearr_10689_10706 = state_10666;(statearr_10689_10706[5] = ex__6061__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10666);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10688;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6059__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10707 = state_10666;
state_10666 = G__10707;
continue;
}
} else
{return ret_value__6059__auto__;
}
break;
}
});
state_machine__6058__auto__ = function(state_10666){
switch(arguments.length){
case 0:
return state_machine__6058__auto____0.call(this);
case 1:
return state_machine__6058__auto____1.call(this,state_10666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6058__auto____0;
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6058__auto____1;
return state_machine__6058__auto__;
})()
;})(switch__6057__auto__))
})();var state__6074__auto__ = (function (){var statearr_10690 = f__6073__auto__.call(null);(statearr_10690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6072__auto___10691);
return statearr_10690;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6074__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6072__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6073__auto__ = (function (){var switch__6057__auto__ = (function (state_10754){var state_val_10755 = (state_10754[1]);if((state_val_10755 === 7))
{var inst_10750 = (state_10754[2]);var state_10754__$1 = state_10754;var statearr_10756_10772 = state_10754__$1;(statearr_10756_10772[2] = inst_10750);
(statearr_10756_10772[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10755 === 6))
{var inst_10743 = (state_10754[7]);var inst_10740 = (state_10754[8]);var inst_10747 = f.call(null,inst_10740,inst_10743);var inst_10740__$1 = inst_10747;var state_10754__$1 = (function (){var statearr_10757 = state_10754;(statearr_10757[8] = inst_10740__$1);
return statearr_10757;
})();var statearr_10758_10773 = state_10754__$1;(statearr_10758_10773[2] = null);
(statearr_10758_10773[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10755 === 5))
{var inst_10740 = (state_10754[8]);var state_10754__$1 = state_10754;var statearr_10759_10774 = state_10754__$1;(statearr_10759_10774[2] = inst_10740);
(statearr_10759_10774[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10755 === 4))
{var inst_10743 = (state_10754[7]);var inst_10743__$1 = (state_10754[2]);var inst_10744 = (inst_10743__$1 == null);var state_10754__$1 = (function (){var statearr_10760 = state_10754;(statearr_10760[7] = inst_10743__$1);
return statearr_10760;
})();if(cljs.core.truth_(inst_10744))
{var statearr_10761_10775 = state_10754__$1;(statearr_10761_10775[1] = 5);
} else
{var statearr_10762_10776 = state_10754__$1;(statearr_10762_10776[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10755 === 3))
{var inst_10752 = (state_10754[2]);var state_10754__$1 = state_10754;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10754__$1,inst_10752);
} else
{if((state_val_10755 === 2))
{var state_10754__$1 = state_10754;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10754__$1,4,ch);
} else
{if((state_val_10755 === 1))
{var inst_10740 = init;var state_10754__$1 = (function (){var statearr_10763 = state_10754;(statearr_10763[8] = inst_10740);
return statearr_10763;
})();var statearr_10764_10777 = state_10754__$1;(statearr_10764_10777[2] = null);
(statearr_10764_10777[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6057__auto__){
return (function() {
var state_machine__6058__auto__ = null;
var state_machine__6058__auto____0 = (function (){var statearr_10768 = [null,null,null,null,null,null,null,null,null];(statearr_10768[0] = state_machine__6058__auto__);
(statearr_10768[1] = 1);
return statearr_10768;
});
var state_machine__6058__auto____1 = (function (state_10754){while(true){
var ret_value__6059__auto__ = (function (){try{while(true){
var result__6060__auto__ = switch__6057__auto__.call(null,state_10754);if(cljs.core.keyword_identical_QMARK_.call(null,result__6060__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6060__auto__;
}
break;
}
}catch (e10769){if((e10769 instanceof Object))
{var ex__6061__auto__ = e10769;var statearr_10770_10778 = state_10754;(statearr_10770_10778[5] = ex__6061__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10754);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10769;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6059__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10779 = state_10754;
state_10754 = G__10779;
continue;
}
} else
{return ret_value__6059__auto__;
}
break;
}
});
state_machine__6058__auto__ = function(state_10754){
switch(arguments.length){
case 0:
return state_machine__6058__auto____0.call(this);
case 1:
return state_machine__6058__auto____1.call(this,state_10754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6058__auto____0;
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6058__auto____1;
return state_machine__6058__auto__;
})()
;})(switch__6057__auto__))
})();var state__6074__auto__ = (function (){var statearr_10771 = f__6073__auto__.call(null);(statearr_10771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6072__auto__);
return statearr_10771;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6074__auto__);
}));
return c__6072__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6072__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6073__auto__ = (function (){var switch__6057__auto__ = (function (state_10853){var state_val_10854 = (state_10853[1]);if((state_val_10854 === 1))
{var inst_10829 = cljs.core.seq.call(null,coll);var inst_10830 = inst_10829;var state_10853__$1 = (function (){var statearr_10855 = state_10853;(statearr_10855[7] = inst_10830);
return statearr_10855;
})();var statearr_10856_10878 = state_10853__$1;(statearr_10856_10878[2] = null);
(statearr_10856_10878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10854 === 2))
{var inst_10830 = (state_10853[7]);var state_10853__$1 = state_10853;if(cljs.core.truth_(inst_10830))
{var statearr_10857_10879 = state_10853__$1;(statearr_10857_10879[1] = 4);
} else
{var statearr_10858_10880 = state_10853__$1;(statearr_10858_10880[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10854 === 3))
{var inst_10851 = (state_10853[2]);var state_10853__$1 = state_10853;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10853__$1,inst_10851);
} else
{if((state_val_10854 === 4))
{var inst_10830 = (state_10853[7]);var inst_10833 = cljs.core.first.call(null,inst_10830);var state_10853__$1 = state_10853;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10853__$1,7,ch,inst_10833);
} else
{if((state_val_10854 === 5))
{var inst_10830 = (state_10853[7]);var state_10853__$1 = state_10853;var statearr_10859_10881 = state_10853__$1;(statearr_10859_10881[2] = inst_10830);
(statearr_10859_10881[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10854 === 6))
{var inst_10838 = (state_10853[2]);var state_10853__$1 = state_10853;if(cljs.core.truth_(inst_10838))
{var statearr_10860_10882 = state_10853__$1;(statearr_10860_10882[1] = 8);
} else
{var statearr_10861_10883 = state_10853__$1;(statearr_10861_10883[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10854 === 7))
{var inst_10835 = (state_10853[2]);var state_10853__$1 = state_10853;var statearr_10862_10884 = state_10853__$1;(statearr_10862_10884[2] = inst_10835);
(statearr_10862_10884[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10854 === 8))
{var inst_10830 = (state_10853[7]);var inst_10840 = cljs.core.next.call(null,inst_10830);var inst_10830__$1 = inst_10840;var state_10853__$1 = (function (){var statearr_10863 = state_10853;(statearr_10863[7] = inst_10830__$1);
return statearr_10863;
})();var statearr_10864_10885 = state_10853__$1;(statearr_10864_10885[2] = null);
(statearr_10864_10885[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10854 === 9))
{var state_10853__$1 = state_10853;if(cljs.core.truth_(close_QMARK_))
{var statearr_10865_10886 = state_10853__$1;(statearr_10865_10886[1] = 11);
} else
{var statearr_10866_10887 = state_10853__$1;(statearr_10866_10887[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10854 === 10))
{var inst_10849 = (state_10853[2]);var state_10853__$1 = state_10853;var statearr_10867_10888 = state_10853__$1;(statearr_10867_10888[2] = inst_10849);
(statearr_10867_10888[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10854 === 11))
{var inst_10844 = cljs.core.async.close_BANG_.call(null,ch);var state_10853__$1 = state_10853;var statearr_10868_10889 = state_10853__$1;(statearr_10868_10889[2] = inst_10844);
(statearr_10868_10889[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10854 === 12))
{var state_10853__$1 = state_10853;var statearr_10869_10890 = state_10853__$1;(statearr_10869_10890[2] = null);
(statearr_10869_10890[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10854 === 13))
{var inst_10847 = (state_10853[2]);var state_10853__$1 = state_10853;var statearr_10870_10891 = state_10853__$1;(statearr_10870_10891[2] = inst_10847);
(statearr_10870_10891[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
});return ((function (switch__6057__auto__){
return (function() {
var state_machine__6058__auto__ = null;
var state_machine__6058__auto____0 = (function (){var statearr_10874 = [null,null,null,null,null,null,null,null];(statearr_10874[0] = state_machine__6058__auto__);
(statearr_10874[1] = 1);
return statearr_10874;
});
var state_machine__6058__auto____1 = (function (state_10853){while(true){
var ret_value__6059__auto__ = (function (){try{while(true){
var result__6060__auto__ = switch__6057__auto__.call(null,state_10853);if(cljs.core.keyword_identical_QMARK_.call(null,result__6060__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6060__auto__;
}
break;
}
}catch (e10875){if((e10875 instanceof Object))
{var ex__6061__auto__ = e10875;var statearr_10876_10892 = state_10853;(statearr_10876_10892[5] = ex__6061__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10853);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10875;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6059__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10893 = state_10853;
state_10853 = G__10893;
continue;
}
} else
{return ret_value__6059__auto__;
}
break;
}
});
state_machine__6058__auto__ = function(state_10853){
switch(arguments.length){
case 0:
return state_machine__6058__auto____0.call(this);
case 1:
return state_machine__6058__auto____1.call(this,state_10853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6058__auto____0;
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6058__auto____1;
return state_machine__6058__auto__;
})()
;})(switch__6057__auto__))
})();var state__6074__auto__ = (function (){var statearr_10877 = f__6073__auto__.call(null);(statearr_10877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6072__auto__);
return statearr_10877;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6074__auto__);
}));
return c__6072__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj10895 = {};return obj10895;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3396__auto__ = _;if(and__3396__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4029__auto__ = (((_ == null))?null:_);return (function (){var or__3408__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj10897 = {};return obj10897;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11119 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11119 = (function (cs,ch,mult,meta11120){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11120 = meta11120;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11119.cljs$lang$type = true;
cljs.core.async.t11119.cljs$lang$ctorStr = "cljs.core.async/t11119";
cljs.core.async.t11119.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11119");
});})(cs))
;
cljs.core.async.t11119.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11119.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11119.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11119.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11119.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11119.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11119.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11121){var self__ = this;
var _11121__$1 = this;return self__.meta11120;
});})(cs))
;
cljs.core.async.t11119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11121,meta11120__$1){var self__ = this;
var _11121__$1 = this;return (new cljs.core.async.t11119(self__.cs,self__.ch,self__.mult,meta11120__$1));
});})(cs))
;
cljs.core.async.__GT_t11119 = ((function (cs){
return (function __GT_t11119(cs__$1,ch__$1,mult__$1,meta11120){return (new cljs.core.async.t11119(cs__$1,ch__$1,mult__$1,meta11120));
});})(cs))
;
}
return (new cljs.core.async.t11119(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6072__auto___11340 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6073__auto__ = (function (){var switch__6057__auto__ = (function (state_11252){var state_val_11253 = (state_11252[1]);if((state_val_11253 === 32))
{var inst_11195 = (state_11252[7]);var inst_11192 = (state_11252[8]);var inst_11194 = (state_11252[9]);var inst_11193 = (state_11252[10]);var inst_11207 = (state_11252[2]);var inst_11208 = (inst_11195 + 1);var tmp11254 = inst_11192;var tmp11255 = inst_11194;var tmp11256 = inst_11193;var inst_11192__$1 = tmp11254;var inst_11193__$1 = tmp11256;var inst_11194__$1 = tmp11255;var inst_11195__$1 = inst_11208;var state_11252__$1 = (function (){var statearr_11257 = state_11252;(statearr_11257[11] = inst_11207);
(statearr_11257[7] = inst_11195__$1);
(statearr_11257[8] = inst_11192__$1);
(statearr_11257[9] = inst_11194__$1);
(statearr_11257[10] = inst_11193__$1);
return statearr_11257;
})();var statearr_11258_11341 = state_11252__$1;(statearr_11258_11341[2] = null);
(statearr_11258_11341[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 1))
{var state_11252__$1 = state_11252;var statearr_11259_11342 = state_11252__$1;(statearr_11259_11342[2] = null);
(statearr_11259_11342[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 33))
{var inst_11211 = (state_11252[12]);var inst_11213 = cljs.core.chunked_seq_QMARK_.call(null,inst_11211);var state_11252__$1 = state_11252;if(inst_11213)
{var statearr_11260_11343 = state_11252__$1;(statearr_11260_11343[1] = 36);
} else
{var statearr_11261_11344 = state_11252__$1;(statearr_11261_11344[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 2))
{var state_11252__$1 = state_11252;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11252__$1,4,ch);
} else
{if((state_val_11253 === 34))
{var state_11252__$1 = state_11252;var statearr_11262_11345 = state_11252__$1;(statearr_11262_11345[2] = null);
(statearr_11262_11345[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 3))
{var inst_11250 = (state_11252[2]);var state_11252__$1 = state_11252;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11252__$1,inst_11250);
} else
{if((state_val_11253 === 35))
{var inst_11234 = (state_11252[2]);var state_11252__$1 = state_11252;var statearr_11263_11346 = state_11252__$1;(statearr_11263_11346[2] = inst_11234);
(statearr_11263_11346[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 4))
{var inst_11124 = (state_11252[13]);var inst_11124__$1 = (state_11252[2]);var inst_11125 = (inst_11124__$1 == null);var state_11252__$1 = (function (){var statearr_11264 = state_11252;(statearr_11264[13] = inst_11124__$1);
return statearr_11264;
})();if(cljs.core.truth_(inst_11125))
{var statearr_11265_11347 = state_11252__$1;(statearr_11265_11347[1] = 5);
} else
{var statearr_11266_11348 = state_11252__$1;(statearr_11266_11348[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 36))
{var inst_11211 = (state_11252[12]);var inst_11215 = cljs.core.chunk_first.call(null,inst_11211);var inst_11216 = cljs.core.chunk_rest.call(null,inst_11211);var inst_11217 = cljs.core.count.call(null,inst_11215);var inst_11192 = inst_11216;var inst_11193 = inst_11215;var inst_11194 = inst_11217;var inst_11195 = 0;var state_11252__$1 = (function (){var statearr_11267 = state_11252;(statearr_11267[7] = inst_11195);
(statearr_11267[8] = inst_11192);
(statearr_11267[9] = inst_11194);
(statearr_11267[10] = inst_11193);
return statearr_11267;
})();var statearr_11268_11349 = state_11252__$1;(statearr_11268_11349[2] = null);
(statearr_11268_11349[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 5))
{var inst_11131 = cljs.core.deref.call(null,cs);var inst_11132 = cljs.core.seq.call(null,inst_11131);var inst_11133 = inst_11132;var inst_11134 = null;var inst_11135 = 0;var inst_11136 = 0;var state_11252__$1 = (function (){var statearr_11269 = state_11252;(statearr_11269[14] = inst_11136);
(statearr_11269[15] = inst_11135);
(statearr_11269[16] = inst_11134);
(statearr_11269[17] = inst_11133);
return statearr_11269;
})();var statearr_11270_11350 = state_11252__$1;(statearr_11270_11350[2] = null);
(statearr_11270_11350[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 37))
{var inst_11220 = (state_11252[18]);var inst_11211 = (state_11252[12]);var inst_11124 = (state_11252[13]);var inst_11220__$1 = cljs.core.first.call(null,inst_11211);var inst_11221 = cljs.core.async.put_BANG_.call(null,inst_11220__$1,inst_11124,done);var state_11252__$1 = (function (){var statearr_11271 = state_11252;(statearr_11271[18] = inst_11220__$1);
return statearr_11271;
})();if(cljs.core.truth_(inst_11221))
{var statearr_11272_11351 = state_11252__$1;(statearr_11272_11351[1] = 39);
} else
{var statearr_11273_11352 = state_11252__$1;(statearr_11273_11352[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 6))
{var inst_11184 = (state_11252[19]);var inst_11183 = cljs.core.deref.call(null,cs);var inst_11184__$1 = cljs.core.keys.call(null,inst_11183);var inst_11185 = cljs.core.count.call(null,inst_11184__$1);var inst_11186 = cljs.core.reset_BANG_.call(null,dctr,inst_11185);var inst_11191 = cljs.core.seq.call(null,inst_11184__$1);var inst_11192 = inst_11191;var inst_11193 = null;var inst_11194 = 0;var inst_11195 = 0;var state_11252__$1 = (function (){var statearr_11274 = state_11252;(statearr_11274[20] = inst_11186);
(statearr_11274[19] = inst_11184__$1);
(statearr_11274[7] = inst_11195);
(statearr_11274[8] = inst_11192);
(statearr_11274[9] = inst_11194);
(statearr_11274[10] = inst_11193);
return statearr_11274;
})();var statearr_11275_11353 = state_11252__$1;(statearr_11275_11353[2] = null);
(statearr_11275_11353[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 38))
{var inst_11231 = (state_11252[2]);var state_11252__$1 = state_11252;var statearr_11276_11354 = state_11252__$1;(statearr_11276_11354[2] = inst_11231);
(statearr_11276_11354[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 7))
{var inst_11248 = (state_11252[2]);var state_11252__$1 = state_11252;var statearr_11277_11355 = state_11252__$1;(statearr_11277_11355[2] = inst_11248);
(statearr_11277_11355[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 39))
{var state_11252__$1 = state_11252;var statearr_11278_11356 = state_11252__$1;(statearr_11278_11356[2] = null);
(statearr_11278_11356[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 8))
{var inst_11136 = (state_11252[14]);var inst_11135 = (state_11252[15]);var inst_11138 = (inst_11136 < inst_11135);var inst_11139 = inst_11138;var state_11252__$1 = state_11252;if(cljs.core.truth_(inst_11139))
{var statearr_11279_11357 = state_11252__$1;(statearr_11279_11357[1] = 10);
} else
{var statearr_11280_11358 = state_11252__$1;(statearr_11280_11358[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 40))
{var inst_11220 = (state_11252[18]);var inst_11224 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11225 = cljs.core.async.untap_STAR_.call(null,m,inst_11220);var state_11252__$1 = (function (){var statearr_11281 = state_11252;(statearr_11281[21] = inst_11224);
return statearr_11281;
})();var statearr_11282_11359 = state_11252__$1;(statearr_11282_11359[2] = inst_11225);
(statearr_11282_11359[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 9))
{var inst_11181 = (state_11252[2]);var state_11252__$1 = state_11252;var statearr_11283_11360 = state_11252__$1;(statearr_11283_11360[2] = inst_11181);
(statearr_11283_11360[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 41))
{var inst_11211 = (state_11252[12]);var inst_11227 = (state_11252[2]);var inst_11228 = cljs.core.next.call(null,inst_11211);var inst_11192 = inst_11228;var inst_11193 = null;var inst_11194 = 0;var inst_11195 = 0;var state_11252__$1 = (function (){var statearr_11284 = state_11252;(statearr_11284[7] = inst_11195);
(statearr_11284[8] = inst_11192);
(statearr_11284[9] = inst_11194);
(statearr_11284[10] = inst_11193);
(statearr_11284[22] = inst_11227);
return statearr_11284;
})();var statearr_11285_11361 = state_11252__$1;(statearr_11285_11361[2] = null);
(statearr_11285_11361[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 10))
{var inst_11136 = (state_11252[14]);var inst_11134 = (state_11252[16]);var inst_11142 = cljs.core._nth.call(null,inst_11134,inst_11136);var inst_11143 = cljs.core.nth.call(null,inst_11142,0,null);var inst_11144 = cljs.core.nth.call(null,inst_11142,1,null);var state_11252__$1 = (function (){var statearr_11286 = state_11252;(statearr_11286[23] = inst_11143);
return statearr_11286;
})();if(cljs.core.truth_(inst_11144))
{var statearr_11287_11362 = state_11252__$1;(statearr_11287_11362[1] = 13);
} else
{var statearr_11288_11363 = state_11252__$1;(statearr_11288_11363[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 42))
{var state_11252__$1 = state_11252;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11252__$1,45,dchan);
} else
{if((state_val_11253 === 11))
{var inst_11133 = (state_11252[17]);var inst_11153 = (state_11252[24]);var inst_11153__$1 = cljs.core.seq.call(null,inst_11133);var state_11252__$1 = (function (){var statearr_11289 = state_11252;(statearr_11289[24] = inst_11153__$1);
return statearr_11289;
})();if(inst_11153__$1)
{var statearr_11290_11364 = state_11252__$1;(statearr_11290_11364[1] = 16);
} else
{var statearr_11291_11365 = state_11252__$1;(statearr_11291_11365[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 43))
{var state_11252__$1 = state_11252;var statearr_11292_11366 = state_11252__$1;(statearr_11292_11366[2] = null);
(statearr_11292_11366[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 12))
{var inst_11179 = (state_11252[2]);var state_11252__$1 = state_11252;var statearr_11293_11367 = state_11252__$1;(statearr_11293_11367[2] = inst_11179);
(statearr_11293_11367[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 44))
{var inst_11245 = (state_11252[2]);var state_11252__$1 = (function (){var statearr_11294 = state_11252;(statearr_11294[25] = inst_11245);
return statearr_11294;
})();var statearr_11295_11368 = state_11252__$1;(statearr_11295_11368[2] = null);
(statearr_11295_11368[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 13))
{var inst_11143 = (state_11252[23]);var inst_11146 = cljs.core.async.close_BANG_.call(null,inst_11143);var state_11252__$1 = state_11252;var statearr_11296_11369 = state_11252__$1;(statearr_11296_11369[2] = inst_11146);
(statearr_11296_11369[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 45))
{var inst_11242 = (state_11252[2]);var state_11252__$1 = state_11252;var statearr_11300_11370 = state_11252__$1;(statearr_11300_11370[2] = inst_11242);
(statearr_11300_11370[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 14))
{var state_11252__$1 = state_11252;var statearr_11301_11371 = state_11252__$1;(statearr_11301_11371[2] = null);
(statearr_11301_11371[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 15))
{var inst_11136 = (state_11252[14]);var inst_11135 = (state_11252[15]);var inst_11134 = (state_11252[16]);var inst_11133 = (state_11252[17]);var inst_11149 = (state_11252[2]);var inst_11150 = (inst_11136 + 1);var tmp11297 = inst_11135;var tmp11298 = inst_11134;var tmp11299 = inst_11133;var inst_11133__$1 = tmp11299;var inst_11134__$1 = tmp11298;var inst_11135__$1 = tmp11297;var inst_11136__$1 = inst_11150;var state_11252__$1 = (function (){var statearr_11302 = state_11252;(statearr_11302[14] = inst_11136__$1);
(statearr_11302[15] = inst_11135__$1);
(statearr_11302[16] = inst_11134__$1);
(statearr_11302[17] = inst_11133__$1);
(statearr_11302[26] = inst_11149);
return statearr_11302;
})();var statearr_11303_11372 = state_11252__$1;(statearr_11303_11372[2] = null);
(statearr_11303_11372[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 16))
{var inst_11153 = (state_11252[24]);var inst_11155 = cljs.core.chunked_seq_QMARK_.call(null,inst_11153);var state_11252__$1 = state_11252;if(inst_11155)
{var statearr_11304_11373 = state_11252__$1;(statearr_11304_11373[1] = 19);
} else
{var statearr_11305_11374 = state_11252__$1;(statearr_11305_11374[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 17))
{var state_11252__$1 = state_11252;var statearr_11306_11375 = state_11252__$1;(statearr_11306_11375[2] = null);
(statearr_11306_11375[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 18))
{var inst_11177 = (state_11252[2]);var state_11252__$1 = state_11252;var statearr_11307_11376 = state_11252__$1;(statearr_11307_11376[2] = inst_11177);
(statearr_11307_11376[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 19))
{var inst_11153 = (state_11252[24]);var inst_11157 = cljs.core.chunk_first.call(null,inst_11153);var inst_11158 = cljs.core.chunk_rest.call(null,inst_11153);var inst_11159 = cljs.core.count.call(null,inst_11157);var inst_11133 = inst_11158;var inst_11134 = inst_11157;var inst_11135 = inst_11159;var inst_11136 = 0;var state_11252__$1 = (function (){var statearr_11308 = state_11252;(statearr_11308[14] = inst_11136);
(statearr_11308[15] = inst_11135);
(statearr_11308[16] = inst_11134);
(statearr_11308[17] = inst_11133);
return statearr_11308;
})();var statearr_11309_11377 = state_11252__$1;(statearr_11309_11377[2] = null);
(statearr_11309_11377[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 20))
{var inst_11153 = (state_11252[24]);var inst_11163 = cljs.core.first.call(null,inst_11153);var inst_11164 = cljs.core.nth.call(null,inst_11163,0,null);var inst_11165 = cljs.core.nth.call(null,inst_11163,1,null);var state_11252__$1 = (function (){var statearr_11310 = state_11252;(statearr_11310[27] = inst_11164);
return statearr_11310;
})();if(cljs.core.truth_(inst_11165))
{var statearr_11311_11378 = state_11252__$1;(statearr_11311_11378[1] = 22);
} else
{var statearr_11312_11379 = state_11252__$1;(statearr_11312_11379[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 21))
{var inst_11174 = (state_11252[2]);var state_11252__$1 = state_11252;var statearr_11313_11380 = state_11252__$1;(statearr_11313_11380[2] = inst_11174);
(statearr_11313_11380[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 22))
{var inst_11164 = (state_11252[27]);var inst_11167 = cljs.core.async.close_BANG_.call(null,inst_11164);var state_11252__$1 = state_11252;var statearr_11314_11381 = state_11252__$1;(statearr_11314_11381[2] = inst_11167);
(statearr_11314_11381[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 23))
{var state_11252__$1 = state_11252;var statearr_11315_11382 = state_11252__$1;(statearr_11315_11382[2] = null);
(statearr_11315_11382[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 24))
{var inst_11153 = (state_11252[24]);var inst_11170 = (state_11252[2]);var inst_11171 = cljs.core.next.call(null,inst_11153);var inst_11133 = inst_11171;var inst_11134 = null;var inst_11135 = 0;var inst_11136 = 0;var state_11252__$1 = (function (){var statearr_11316 = state_11252;(statearr_11316[28] = inst_11170);
(statearr_11316[14] = inst_11136);
(statearr_11316[15] = inst_11135);
(statearr_11316[16] = inst_11134);
(statearr_11316[17] = inst_11133);
return statearr_11316;
})();var statearr_11317_11383 = state_11252__$1;(statearr_11317_11383[2] = null);
(statearr_11317_11383[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 25))
{var inst_11195 = (state_11252[7]);var inst_11194 = (state_11252[9]);var inst_11197 = (inst_11195 < inst_11194);var inst_11198 = inst_11197;var state_11252__$1 = state_11252;if(cljs.core.truth_(inst_11198))
{var statearr_11318_11384 = state_11252__$1;(statearr_11318_11384[1] = 27);
} else
{var statearr_11319_11385 = state_11252__$1;(statearr_11319_11385[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 26))
{var inst_11184 = (state_11252[19]);var inst_11238 = (state_11252[2]);var inst_11239 = cljs.core.seq.call(null,inst_11184);var state_11252__$1 = (function (){var statearr_11320 = state_11252;(statearr_11320[29] = inst_11238);
return statearr_11320;
})();if(inst_11239)
{var statearr_11321_11386 = state_11252__$1;(statearr_11321_11386[1] = 42);
} else
{var statearr_11322_11387 = state_11252__$1;(statearr_11322_11387[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 27))
{var inst_11195 = (state_11252[7]);var inst_11124 = (state_11252[13]);var inst_11200 = (state_11252[30]);var inst_11193 = (state_11252[10]);var inst_11200__$1 = cljs.core._nth.call(null,inst_11193,inst_11195);var inst_11201 = cljs.core.async.put_BANG_.call(null,inst_11200__$1,inst_11124,done);var state_11252__$1 = (function (){var statearr_11323 = state_11252;(statearr_11323[30] = inst_11200__$1);
return statearr_11323;
})();if(cljs.core.truth_(inst_11201))
{var statearr_11324_11388 = state_11252__$1;(statearr_11324_11388[1] = 30);
} else
{var statearr_11325_11389 = state_11252__$1;(statearr_11325_11389[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 28))
{var inst_11211 = (state_11252[12]);var inst_11192 = (state_11252[8]);var inst_11211__$1 = cljs.core.seq.call(null,inst_11192);var state_11252__$1 = (function (){var statearr_11326 = state_11252;(statearr_11326[12] = inst_11211__$1);
return statearr_11326;
})();if(inst_11211__$1)
{var statearr_11327_11390 = state_11252__$1;(statearr_11327_11390[1] = 33);
} else
{var statearr_11328_11391 = state_11252__$1;(statearr_11328_11391[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 29))
{var inst_11236 = (state_11252[2]);var state_11252__$1 = state_11252;var statearr_11329_11392 = state_11252__$1;(statearr_11329_11392[2] = inst_11236);
(statearr_11329_11392[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 30))
{var state_11252__$1 = state_11252;var statearr_11330_11393 = state_11252__$1;(statearr_11330_11393[2] = null);
(statearr_11330_11393[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11253 === 31))
{var inst_11200 = (state_11252[30]);var inst_11204 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11205 = cljs.core.async.untap_STAR_.call(null,m,inst_11200);var state_11252__$1 = (function (){var statearr_11331 = state_11252;(statearr_11331[31] = inst_11204);
return statearr_11331;
})();var statearr_11332_11394 = state_11252__$1;(statearr_11332_11394[2] = inst_11205);
(statearr_11332_11394[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6057__auto__){
return (function() {
var state_machine__6058__auto__ = null;
var state_machine__6058__auto____0 = (function (){var statearr_11336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11336[0] = state_machine__6058__auto__);
(statearr_11336[1] = 1);
return statearr_11336;
});
var state_machine__6058__auto____1 = (function (state_11252){while(true){
var ret_value__6059__auto__ = (function (){try{while(true){
var result__6060__auto__ = switch__6057__auto__.call(null,state_11252);if(cljs.core.keyword_identical_QMARK_.call(null,result__6060__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6060__auto__;
}
break;
}
}catch (e11337){if((e11337 instanceof Object))
{var ex__6061__auto__ = e11337;var statearr_11338_11395 = state_11252;(statearr_11338_11395[5] = ex__6061__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11252);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11337;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6059__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11396 = state_11252;
state_11252 = G__11396;
continue;
}
} else
{return ret_value__6059__auto__;
}
break;
}
});
state_machine__6058__auto__ = function(state_11252){
switch(arguments.length){
case 0:
return state_machine__6058__auto____0.call(this);
case 1:
return state_machine__6058__auto____1.call(this,state_11252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6058__auto____0;
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6058__auto____1;
return state_machine__6058__auto__;
})()
;})(switch__6057__auto__))
})();var state__6074__auto__ = (function (){var statearr_11339 = f__6073__auto__.call(null);(statearr_11339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6072__auto___11340);
return statearr_11339;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6074__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj11398 = {};return obj11398;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11518 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11518 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11519){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta11519 = meta11519;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11518.cljs$lang$type = true;
cljs.core.async.t11518.cljs$lang$ctorStr = "cljs.core.async/t11518";
cljs.core.async.t11518.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11518");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11518.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11518.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11518.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11518.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11518.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11518.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11518.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11518.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11518.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11520){var self__ = this;
var _11520__$1 = this;return self__.meta11519;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11520,meta11519__$1){var self__ = this;
var _11520__$1 = this;return (new cljs.core.async.t11518(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11519__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11518 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11518(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11519){return (new cljs.core.async.t11518(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11519));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11518(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6072__auto___11637 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6073__auto__ = (function (){var switch__6057__auto__ = (function (state_11590){var state_val_11591 = (state_11590[1]);if((state_val_11591 === 1))
{var inst_11524 = (state_11590[7]);var inst_11524__$1 = calc_state.call(null);var inst_11525 = cljs.core.seq_QMARK_.call(null,inst_11524__$1);var state_11590__$1 = (function (){var statearr_11592 = state_11590;(statearr_11592[7] = inst_11524__$1);
return statearr_11592;
})();if(inst_11525)
{var statearr_11593_11638 = state_11590__$1;(statearr_11593_11638[1] = 2);
} else
{var statearr_11594_11639 = state_11590__$1;(statearr_11594_11639[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 2))
{var inst_11524 = (state_11590[7]);var inst_11527 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11524);var state_11590__$1 = state_11590;var statearr_11595_11640 = state_11590__$1;(statearr_11595_11640[2] = inst_11527);
(statearr_11595_11640[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 3))
{var inst_11524 = (state_11590[7]);var state_11590__$1 = state_11590;var statearr_11596_11641 = state_11590__$1;(statearr_11596_11641[2] = inst_11524);
(statearr_11596_11641[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 4))
{var inst_11524 = (state_11590[7]);var inst_11530 = (state_11590[2]);var inst_11531 = cljs.core.get.call(null,inst_11530,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11532 = cljs.core.get.call(null,inst_11530,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11533 = cljs.core.get.call(null,inst_11530,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11534 = inst_11524;var state_11590__$1 = (function (){var statearr_11597 = state_11590;(statearr_11597[8] = inst_11533);
(statearr_11597[9] = inst_11534);
(statearr_11597[10] = inst_11532);
(statearr_11597[11] = inst_11531);
return statearr_11597;
})();var statearr_11598_11642 = state_11590__$1;(statearr_11598_11642[2] = null);
(statearr_11598_11642[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 5))
{var inst_11534 = (state_11590[9]);var inst_11537 = cljs.core.seq_QMARK_.call(null,inst_11534);var state_11590__$1 = state_11590;if(inst_11537)
{var statearr_11599_11643 = state_11590__$1;(statearr_11599_11643[1] = 7);
} else
{var statearr_11600_11644 = state_11590__$1;(statearr_11600_11644[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 6))
{var inst_11588 = (state_11590[2]);var state_11590__$1 = state_11590;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11590__$1,inst_11588);
} else
{if((state_val_11591 === 7))
{var inst_11534 = (state_11590[9]);var inst_11539 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11534);var state_11590__$1 = state_11590;var statearr_11601_11645 = state_11590__$1;(statearr_11601_11645[2] = inst_11539);
(statearr_11601_11645[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 8))
{var inst_11534 = (state_11590[9]);var state_11590__$1 = state_11590;var statearr_11602_11646 = state_11590__$1;(statearr_11602_11646[2] = inst_11534);
(statearr_11602_11646[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 9))
{var inst_11542 = (state_11590[12]);var inst_11542__$1 = (state_11590[2]);var inst_11543 = cljs.core.get.call(null,inst_11542__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11544 = cljs.core.get.call(null,inst_11542__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11545 = cljs.core.get.call(null,inst_11542__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11590__$1 = (function (){var statearr_11603 = state_11590;(statearr_11603[12] = inst_11542__$1);
(statearr_11603[13] = inst_11544);
(statearr_11603[14] = inst_11545);
return statearr_11603;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11590__$1,10,inst_11543);
} else
{if((state_val_11591 === 10))
{var inst_11549 = (state_11590[15]);var inst_11550 = (state_11590[16]);var inst_11548 = (state_11590[2]);var inst_11549__$1 = cljs.core.nth.call(null,inst_11548,0,null);var inst_11550__$1 = cljs.core.nth.call(null,inst_11548,1,null);var inst_11551 = (inst_11549__$1 == null);var inst_11552 = cljs.core._EQ_.call(null,inst_11550__$1,change);var inst_11553 = (inst_11551) || (inst_11552);var state_11590__$1 = (function (){var statearr_11604 = state_11590;(statearr_11604[15] = inst_11549__$1);
(statearr_11604[16] = inst_11550__$1);
return statearr_11604;
})();if(cljs.core.truth_(inst_11553))
{var statearr_11605_11647 = state_11590__$1;(statearr_11605_11647[1] = 11);
} else
{var statearr_11606_11648 = state_11590__$1;(statearr_11606_11648[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 11))
{var inst_11549 = (state_11590[15]);var inst_11555 = (inst_11549 == null);var state_11590__$1 = state_11590;if(cljs.core.truth_(inst_11555))
{var statearr_11607_11649 = state_11590__$1;(statearr_11607_11649[1] = 14);
} else
{var statearr_11608_11650 = state_11590__$1;(statearr_11608_11650[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 12))
{var inst_11550 = (state_11590[16]);var inst_11564 = (state_11590[17]);var inst_11545 = (state_11590[14]);var inst_11564__$1 = inst_11545.call(null,inst_11550);var state_11590__$1 = (function (){var statearr_11609 = state_11590;(statearr_11609[17] = inst_11564__$1);
return statearr_11609;
})();if(cljs.core.truth_(inst_11564__$1))
{var statearr_11610_11651 = state_11590__$1;(statearr_11610_11651[1] = 17);
} else
{var statearr_11611_11652 = state_11590__$1;(statearr_11611_11652[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 13))
{var inst_11586 = (state_11590[2]);var state_11590__$1 = state_11590;var statearr_11612_11653 = state_11590__$1;(statearr_11612_11653[2] = inst_11586);
(statearr_11612_11653[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 14))
{var inst_11550 = (state_11590[16]);var inst_11557 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11550);var state_11590__$1 = state_11590;var statearr_11613_11654 = state_11590__$1;(statearr_11613_11654[2] = inst_11557);
(statearr_11613_11654[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 15))
{var state_11590__$1 = state_11590;var statearr_11614_11655 = state_11590__$1;(statearr_11614_11655[2] = null);
(statearr_11614_11655[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 16))
{var inst_11560 = (state_11590[2]);var inst_11561 = calc_state.call(null);var inst_11534 = inst_11561;var state_11590__$1 = (function (){var statearr_11615 = state_11590;(statearr_11615[9] = inst_11534);
(statearr_11615[18] = inst_11560);
return statearr_11615;
})();var statearr_11616_11656 = state_11590__$1;(statearr_11616_11656[2] = null);
(statearr_11616_11656[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 17))
{var inst_11564 = (state_11590[17]);var state_11590__$1 = state_11590;var statearr_11617_11657 = state_11590__$1;(statearr_11617_11657[2] = inst_11564);
(statearr_11617_11657[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 18))
{var inst_11550 = (state_11590[16]);var inst_11544 = (state_11590[13]);var inst_11545 = (state_11590[14]);var inst_11567 = cljs.core.empty_QMARK_.call(null,inst_11545);var inst_11568 = inst_11544.call(null,inst_11550);var inst_11569 = cljs.core.not.call(null,inst_11568);var inst_11570 = (inst_11567) && (inst_11569);var state_11590__$1 = state_11590;var statearr_11618_11658 = state_11590__$1;(statearr_11618_11658[2] = inst_11570);
(statearr_11618_11658[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 19))
{var inst_11572 = (state_11590[2]);var state_11590__$1 = state_11590;if(cljs.core.truth_(inst_11572))
{var statearr_11619_11659 = state_11590__$1;(statearr_11619_11659[1] = 20);
} else
{var statearr_11620_11660 = state_11590__$1;(statearr_11620_11660[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 20))
{var inst_11549 = (state_11590[15]);var state_11590__$1 = state_11590;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11590__$1,23,out,inst_11549);
} else
{if((state_val_11591 === 21))
{var inst_11542 = (state_11590[12]);var inst_11534 = inst_11542;var state_11590__$1 = (function (){var statearr_11621 = state_11590;(statearr_11621[9] = inst_11534);
return statearr_11621;
})();var statearr_11622_11661 = state_11590__$1;(statearr_11622_11661[2] = null);
(statearr_11622_11661[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 22))
{var inst_11584 = (state_11590[2]);var state_11590__$1 = state_11590;var statearr_11623_11662 = state_11590__$1;(statearr_11623_11662[2] = inst_11584);
(statearr_11623_11662[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 23))
{var inst_11575 = (state_11590[2]);var state_11590__$1 = state_11590;if(cljs.core.truth_(inst_11575))
{var statearr_11624_11663 = state_11590__$1;(statearr_11624_11663[1] = 24);
} else
{var statearr_11625_11664 = state_11590__$1;(statearr_11625_11664[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 24))
{var inst_11542 = (state_11590[12]);var inst_11534 = inst_11542;var state_11590__$1 = (function (){var statearr_11626 = state_11590;(statearr_11626[9] = inst_11534);
return statearr_11626;
})();var statearr_11627_11665 = state_11590__$1;(statearr_11627_11665[2] = null);
(statearr_11627_11665[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 25))
{var state_11590__$1 = state_11590;var statearr_11628_11666 = state_11590__$1;(statearr_11628_11666[2] = null);
(statearr_11628_11666[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 26))
{var inst_11580 = (state_11590[2]);var state_11590__$1 = state_11590;var statearr_11629_11667 = state_11590__$1;(statearr_11629_11667[2] = inst_11580);
(statearr_11629_11667[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6057__auto__){
return (function() {
var state_machine__6058__auto__ = null;
var state_machine__6058__auto____0 = (function (){var statearr_11633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11633[0] = state_machine__6058__auto__);
(statearr_11633[1] = 1);
return statearr_11633;
});
var state_machine__6058__auto____1 = (function (state_11590){while(true){
var ret_value__6059__auto__ = (function (){try{while(true){
var result__6060__auto__ = switch__6057__auto__.call(null,state_11590);if(cljs.core.keyword_identical_QMARK_.call(null,result__6060__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6060__auto__;
}
break;
}
}catch (e11634){if((e11634 instanceof Object))
{var ex__6061__auto__ = e11634;var statearr_11635_11668 = state_11590;(statearr_11635_11668[5] = ex__6061__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11590);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11634;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6059__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11669 = state_11590;
state_11590 = G__11669;
continue;
}
} else
{return ret_value__6059__auto__;
}
break;
}
});
state_machine__6058__auto__ = function(state_11590){
switch(arguments.length){
case 0:
return state_machine__6058__auto____0.call(this);
case 1:
return state_machine__6058__auto____1.call(this,state_11590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6058__auto____0;
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6058__auto____1;
return state_machine__6058__auto__;
})()
;})(switch__6057__auto__))
})();var state__6074__auto__ = (function (){var statearr_11636 = f__6073__auto__.call(null);(statearr_11636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6072__auto___11637);
return statearr_11636;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6074__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj11671 = {};return obj11671;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3408__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3408__auto__,mults){
return (function (p1__11672_SHARP_){if(cljs.core.truth_(p1__11672_SHARP_.call(null,topic)))
{return p1__11672_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11672_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3408__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11787 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11787 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11788){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11788 = meta11788;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11787.cljs$lang$type = true;
cljs.core.async.t11787.cljs$lang$ctorStr = "cljs.core.async/t11787";
cljs.core.async.t11787.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11787");
});})(mults,ensure_mult))
;
cljs.core.async.t11787.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11787.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11787.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11787.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11787.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11787.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11787.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11789){var self__ = this;
var _11789__$1 = this;return self__.meta11788;
});})(mults,ensure_mult))
;
cljs.core.async.t11787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11789,meta11788__$1){var self__ = this;
var _11789__$1 = this;return (new cljs.core.async.t11787(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11788__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11787 = ((function (mults,ensure_mult){
return (function __GT_t11787(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11788){return (new cljs.core.async.t11787(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11788));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11787(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6072__auto___11901 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6073__auto__ = (function (){var switch__6057__auto__ = (function (state_11857){var state_val_11858 = (state_11857[1]);if((state_val_11858 === 1))
{var state_11857__$1 = state_11857;var statearr_11859_11902 = state_11857__$1;(statearr_11859_11902[2] = null);
(statearr_11859_11902[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11858 === 2))
{var state_11857__$1 = state_11857;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11857__$1,4,ch);
} else
{if((state_val_11858 === 3))
{var inst_11855 = (state_11857[2]);var state_11857__$1 = state_11857;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11857__$1,inst_11855);
} else
{if((state_val_11858 === 4))
{var inst_11792 = (state_11857[7]);var inst_11792__$1 = (state_11857[2]);var inst_11793 = (inst_11792__$1 == null);var state_11857__$1 = (function (){var statearr_11860 = state_11857;(statearr_11860[7] = inst_11792__$1);
return statearr_11860;
})();if(cljs.core.truth_(inst_11793))
{var statearr_11861_11903 = state_11857__$1;(statearr_11861_11903[1] = 5);
} else
{var statearr_11862_11904 = state_11857__$1;(statearr_11862_11904[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11858 === 5))
{var inst_11799 = cljs.core.deref.call(null,mults);var inst_11800 = cljs.core.vals.call(null,inst_11799);var inst_11801 = cljs.core.seq.call(null,inst_11800);var inst_11802 = inst_11801;var inst_11803 = null;var inst_11804 = 0;var inst_11805 = 0;var state_11857__$1 = (function (){var statearr_11863 = state_11857;(statearr_11863[8] = inst_11802);
(statearr_11863[9] = inst_11804);
(statearr_11863[10] = inst_11803);
(statearr_11863[11] = inst_11805);
return statearr_11863;
})();var statearr_11864_11905 = state_11857__$1;(statearr_11864_11905[2] = null);
(statearr_11864_11905[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11858 === 6))
{var inst_11792 = (state_11857[7]);var inst_11840 = (state_11857[12]);var inst_11840__$1 = topic_fn.call(null,inst_11792);var inst_11841 = cljs.core.deref.call(null,mults);var inst_11842 = cljs.core.get.call(null,inst_11841,inst_11840__$1);var inst_11843 = cljs.core.async.muxch_STAR_.call(null,inst_11842);var state_11857__$1 = (function (){var statearr_11865 = state_11857;(statearr_11865[12] = inst_11840__$1);
return statearr_11865;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11857__$1,19,inst_11843,inst_11792);
} else
{if((state_val_11858 === 7))
{var inst_11853 = (state_11857[2]);var state_11857__$1 = state_11857;var statearr_11866_11906 = state_11857__$1;(statearr_11866_11906[2] = inst_11853);
(statearr_11866_11906[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11858 === 8))
{var inst_11804 = (state_11857[9]);var inst_11805 = (state_11857[11]);var inst_11807 = (inst_11805 < inst_11804);var inst_11808 = inst_11807;var state_11857__$1 = state_11857;if(cljs.core.truth_(inst_11808))
{var statearr_11870_11907 = state_11857__$1;(statearr_11870_11907[1] = 10);
} else
{var statearr_11871_11908 = state_11857__$1;(statearr_11871_11908[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11858 === 9))
{var inst_11838 = (state_11857[2]);var state_11857__$1 = state_11857;var statearr_11872_11909 = state_11857__$1;(statearr_11872_11909[2] = inst_11838);
(statearr_11872_11909[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11858 === 10))
{var inst_11802 = (state_11857[8]);var inst_11804 = (state_11857[9]);var inst_11803 = (state_11857[10]);var inst_11805 = (state_11857[11]);var inst_11810 = cljs.core._nth.call(null,inst_11803,inst_11805);var inst_11811 = cljs.core.async.muxch_STAR_.call(null,inst_11810);var inst_11812 = cljs.core.async.close_BANG_.call(null,inst_11811);var inst_11813 = (inst_11805 + 1);var tmp11867 = inst_11802;var tmp11868 = inst_11804;var tmp11869 = inst_11803;var inst_11802__$1 = tmp11867;var inst_11803__$1 = tmp11869;var inst_11804__$1 = tmp11868;var inst_11805__$1 = inst_11813;var state_11857__$1 = (function (){var statearr_11873 = state_11857;(statearr_11873[8] = inst_11802__$1);
(statearr_11873[9] = inst_11804__$1);
(statearr_11873[10] = inst_11803__$1);
(statearr_11873[11] = inst_11805__$1);
(statearr_11873[13] = inst_11812);
return statearr_11873;
})();var statearr_11874_11910 = state_11857__$1;(statearr_11874_11910[2] = null);
(statearr_11874_11910[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11858 === 11))
{var inst_11802 = (state_11857[8]);var inst_11816 = (state_11857[14]);var inst_11816__$1 = cljs.core.seq.call(null,inst_11802);var state_11857__$1 = (function (){var statearr_11875 = state_11857;(statearr_11875[14] = inst_11816__$1);
return statearr_11875;
})();if(inst_11816__$1)
{var statearr_11876_11911 = state_11857__$1;(statearr_11876_11911[1] = 13);
} else
{var statearr_11877_11912 = state_11857__$1;(statearr_11877_11912[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11858 === 12))
{var inst_11836 = (state_11857[2]);var state_11857__$1 = state_11857;var statearr_11878_11913 = state_11857__$1;(statearr_11878_11913[2] = inst_11836);
(statearr_11878_11913[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11858 === 13))
{var inst_11816 = (state_11857[14]);var inst_11818 = cljs.core.chunked_seq_QMARK_.call(null,inst_11816);var state_11857__$1 = state_11857;if(inst_11818)
{var statearr_11879_11914 = state_11857__$1;(statearr_11879_11914[1] = 16);
} else
{var statearr_11880_11915 = state_11857__$1;(statearr_11880_11915[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11858 === 14))
{var state_11857__$1 = state_11857;var statearr_11881_11916 = state_11857__$1;(statearr_11881_11916[2] = null);
(statearr_11881_11916[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11858 === 15))
{var inst_11834 = (state_11857[2]);var state_11857__$1 = state_11857;var statearr_11882_11917 = state_11857__$1;(statearr_11882_11917[2] = inst_11834);
(statearr_11882_11917[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11858 === 16))
{var inst_11816 = (state_11857[14]);var inst_11820 = cljs.core.chunk_first.call(null,inst_11816);var inst_11821 = cljs.core.chunk_rest.call(null,inst_11816);var inst_11822 = cljs.core.count.call(null,inst_11820);var inst_11802 = inst_11821;var inst_11803 = inst_11820;var inst_11804 = inst_11822;var inst_11805 = 0;var state_11857__$1 = (function (){var statearr_11883 = state_11857;(statearr_11883[8] = inst_11802);
(statearr_11883[9] = inst_11804);
(statearr_11883[10] = inst_11803);
(statearr_11883[11] = inst_11805);
return statearr_11883;
})();var statearr_11884_11918 = state_11857__$1;(statearr_11884_11918[2] = null);
(statearr_11884_11918[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11858 === 17))
{var inst_11816 = (state_11857[14]);var inst_11825 = cljs.core.first.call(null,inst_11816);var inst_11826 = cljs.core.async.muxch_STAR_.call(null,inst_11825);var inst_11827 = cljs.core.async.close_BANG_.call(null,inst_11826);var inst_11828 = cljs.core.next.call(null,inst_11816);var inst_11802 = inst_11828;var inst_11803 = null;var inst_11804 = 0;var inst_11805 = 0;var state_11857__$1 = (function (){var statearr_11885 = state_11857;(statearr_11885[15] = inst_11827);
(statearr_11885[8] = inst_11802);
(statearr_11885[9] = inst_11804);
(statearr_11885[10] = inst_11803);
(statearr_11885[11] = inst_11805);
return statearr_11885;
})();var statearr_11886_11919 = state_11857__$1;(statearr_11886_11919[2] = null);
(statearr_11886_11919[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11858 === 18))
{var inst_11831 = (state_11857[2]);var state_11857__$1 = state_11857;var statearr_11887_11920 = state_11857__$1;(statearr_11887_11920[2] = inst_11831);
(statearr_11887_11920[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11858 === 19))
{var inst_11845 = (state_11857[2]);var state_11857__$1 = state_11857;if(cljs.core.truth_(inst_11845))
{var statearr_11888_11921 = state_11857__$1;(statearr_11888_11921[1] = 20);
} else
{var statearr_11889_11922 = state_11857__$1;(statearr_11889_11922[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11858 === 20))
{var state_11857__$1 = state_11857;var statearr_11890_11923 = state_11857__$1;(statearr_11890_11923[2] = null);
(statearr_11890_11923[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11858 === 21))
{var inst_11840 = (state_11857[12]);var inst_11848 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11840);var state_11857__$1 = state_11857;var statearr_11891_11924 = state_11857__$1;(statearr_11891_11924[2] = inst_11848);
(statearr_11891_11924[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11858 === 22))
{var inst_11850 = (state_11857[2]);var state_11857__$1 = (function (){var statearr_11892 = state_11857;(statearr_11892[16] = inst_11850);
return statearr_11892;
})();var statearr_11893_11925 = state_11857__$1;(statearr_11893_11925[2] = null);
(statearr_11893_11925[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6057__auto__){
return (function() {
var state_machine__6058__auto__ = null;
var state_machine__6058__auto____0 = (function (){var statearr_11897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11897[0] = state_machine__6058__auto__);
(statearr_11897[1] = 1);
return statearr_11897;
});
var state_machine__6058__auto____1 = (function (state_11857){while(true){
var ret_value__6059__auto__ = (function (){try{while(true){
var result__6060__auto__ = switch__6057__auto__.call(null,state_11857);if(cljs.core.keyword_identical_QMARK_.call(null,result__6060__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6060__auto__;
}
break;
}
}catch (e11898){if((e11898 instanceof Object))
{var ex__6061__auto__ = e11898;var statearr_11899_11926 = state_11857;(statearr_11899_11926[5] = ex__6061__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11857);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11898;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6059__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11927 = state_11857;
state_11857 = G__11927;
continue;
}
} else
{return ret_value__6059__auto__;
}
break;
}
});
state_machine__6058__auto__ = function(state_11857){
switch(arguments.length){
case 0:
return state_machine__6058__auto____0.call(this);
case 1:
return state_machine__6058__auto____1.call(this,state_11857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6058__auto____0;
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6058__auto____1;
return state_machine__6058__auto__;
})()
;})(switch__6057__auto__))
})();var state__6074__auto__ = (function (){var statearr_11900 = f__6073__auto__.call(null);(statearr_11900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6072__auto___11901);
return statearr_11900;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6074__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6072__auto___12064 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6073__auto__ = (function (){var switch__6057__auto__ = (function (state_12034){var state_val_12035 = (state_12034[1]);if((state_val_12035 === 1))
{var state_12034__$1 = state_12034;var statearr_12036_12065 = state_12034__$1;(statearr_12036_12065[2] = null);
(statearr_12036_12065[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12035 === 2))
{var inst_11997 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11998 = 0;var state_12034__$1 = (function (){var statearr_12037 = state_12034;(statearr_12037[7] = inst_11997);
(statearr_12037[8] = inst_11998);
return statearr_12037;
})();var statearr_12038_12066 = state_12034__$1;(statearr_12038_12066[2] = null);
(statearr_12038_12066[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12035 === 3))
{var inst_12032 = (state_12034[2]);var state_12034__$1 = state_12034;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12034__$1,inst_12032);
} else
{if((state_val_12035 === 4))
{var inst_11998 = (state_12034[8]);var inst_12000 = (inst_11998 < cnt);var state_12034__$1 = state_12034;if(cljs.core.truth_(inst_12000))
{var statearr_12039_12067 = state_12034__$1;(statearr_12039_12067[1] = 6);
} else
{var statearr_12040_12068 = state_12034__$1;(statearr_12040_12068[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12035 === 5))
{var inst_12018 = (state_12034[2]);var state_12034__$1 = (function (){var statearr_12041 = state_12034;(statearr_12041[9] = inst_12018);
return statearr_12041;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12034__$1,12,dchan);
} else
{if((state_val_12035 === 6))
{var state_12034__$1 = state_12034;var statearr_12042_12069 = state_12034__$1;(statearr_12042_12069[2] = null);
(statearr_12042_12069[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12035 === 7))
{var state_12034__$1 = state_12034;var statearr_12043_12070 = state_12034__$1;(statearr_12043_12070[2] = null);
(statearr_12043_12070[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12035 === 8))
{var inst_12016 = (state_12034[2]);var state_12034__$1 = state_12034;var statearr_12044_12071 = state_12034__$1;(statearr_12044_12071[2] = inst_12016);
(statearr_12044_12071[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12035 === 9))
{var inst_11998 = (state_12034[8]);var inst_12011 = (state_12034[2]);var inst_12012 = (inst_11998 + 1);var inst_11998__$1 = inst_12012;var state_12034__$1 = (function (){var statearr_12045 = state_12034;(statearr_12045[8] = inst_11998__$1);
(statearr_12045[10] = inst_12011);
return statearr_12045;
})();var statearr_12046_12072 = state_12034__$1;(statearr_12046_12072[2] = null);
(statearr_12046_12072[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12035 === 10))
{var inst_12002 = (state_12034[2]);var inst_12003 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12034__$1 = (function (){var statearr_12047 = state_12034;(statearr_12047[11] = inst_12002);
return statearr_12047;
})();var statearr_12048_12073 = state_12034__$1;(statearr_12048_12073[2] = inst_12003);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12034__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12035 === 11))
{var inst_11998 = (state_12034[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12034,10,Object,null,9);var inst_12007 = chs__$1.call(null,inst_11998);var inst_12008 = done.call(null,inst_11998);var inst_12009 = cljs.core.async.take_BANG_.call(null,inst_12007,inst_12008);var state_12034__$1 = state_12034;var statearr_12049_12074 = state_12034__$1;(statearr_12049_12074[2] = inst_12009);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12034__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12035 === 12))
{var inst_12020 = (state_12034[12]);var inst_12020__$1 = (state_12034[2]);var inst_12021 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12020__$1);var state_12034__$1 = (function (){var statearr_12050 = state_12034;(statearr_12050[12] = inst_12020__$1);
return statearr_12050;
})();if(cljs.core.truth_(inst_12021))
{var statearr_12051_12075 = state_12034__$1;(statearr_12051_12075[1] = 13);
} else
{var statearr_12052_12076 = state_12034__$1;(statearr_12052_12076[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12035 === 13))
{var inst_12023 = cljs.core.async.close_BANG_.call(null,out);var state_12034__$1 = state_12034;var statearr_12053_12077 = state_12034__$1;(statearr_12053_12077[2] = inst_12023);
(statearr_12053_12077[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12035 === 14))
{var inst_12020 = (state_12034[12]);var inst_12025 = cljs.core.apply.call(null,f,inst_12020);var state_12034__$1 = state_12034;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12034__$1,16,out,inst_12025);
} else
{if((state_val_12035 === 15))
{var inst_12030 = (state_12034[2]);var state_12034__$1 = state_12034;var statearr_12054_12078 = state_12034__$1;(statearr_12054_12078[2] = inst_12030);
(statearr_12054_12078[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12035 === 16))
{var inst_12027 = (state_12034[2]);var state_12034__$1 = (function (){var statearr_12055 = state_12034;(statearr_12055[13] = inst_12027);
return statearr_12055;
})();var statearr_12056_12079 = state_12034__$1;(statearr_12056_12079[2] = null);
(statearr_12056_12079[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
}
});return ((function (switch__6057__auto__){
return (function() {
var state_machine__6058__auto__ = null;
var state_machine__6058__auto____0 = (function (){var statearr_12060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12060[0] = state_machine__6058__auto__);
(statearr_12060[1] = 1);
return statearr_12060;
});
var state_machine__6058__auto____1 = (function (state_12034){while(true){
var ret_value__6059__auto__ = (function (){try{while(true){
var result__6060__auto__ = switch__6057__auto__.call(null,state_12034);if(cljs.core.keyword_identical_QMARK_.call(null,result__6060__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6060__auto__;
}
break;
}
}catch (e12061){if((e12061 instanceof Object))
{var ex__6061__auto__ = e12061;var statearr_12062_12080 = state_12034;(statearr_12062_12080[5] = ex__6061__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12034);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12061;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6059__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12081 = state_12034;
state_12034 = G__12081;
continue;
}
} else
{return ret_value__6059__auto__;
}
break;
}
});
state_machine__6058__auto__ = function(state_12034){
switch(arguments.length){
case 0:
return state_machine__6058__auto____0.call(this);
case 1:
return state_machine__6058__auto____1.call(this,state_12034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6058__auto____0;
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6058__auto____1;
return state_machine__6058__auto__;
})()
;})(switch__6057__auto__))
})();var state__6074__auto__ = (function (){var statearr_12063 = f__6073__auto__.call(null);(statearr_12063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6072__auto___12064);
return statearr_12063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6074__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6072__auto___12189 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6073__auto__ = (function (){var switch__6057__auto__ = (function (state_12165){var state_val_12166 = (state_12165[1]);if((state_val_12166 === 1))
{var inst_12136 = cljs.core.vec.call(null,chs);var inst_12137 = inst_12136;var state_12165__$1 = (function (){var statearr_12167 = state_12165;(statearr_12167[7] = inst_12137);
return statearr_12167;
})();var statearr_12168_12190 = state_12165__$1;(statearr_12168_12190[2] = null);
(statearr_12168_12190[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 2))
{var inst_12137 = (state_12165[7]);var inst_12139 = cljs.core.count.call(null,inst_12137);var inst_12140 = (inst_12139 > 0);var state_12165__$1 = state_12165;if(cljs.core.truth_(inst_12140))
{var statearr_12169_12191 = state_12165__$1;(statearr_12169_12191[1] = 4);
} else
{var statearr_12170_12192 = state_12165__$1;(statearr_12170_12192[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 3))
{var inst_12163 = (state_12165[2]);var state_12165__$1 = state_12165;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12165__$1,inst_12163);
} else
{if((state_val_12166 === 4))
{var inst_12137 = (state_12165[7]);var state_12165__$1 = state_12165;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12165__$1,7,inst_12137);
} else
{if((state_val_12166 === 5))
{var inst_12159 = cljs.core.async.close_BANG_.call(null,out);var state_12165__$1 = state_12165;var statearr_12171_12193 = state_12165__$1;(statearr_12171_12193[2] = inst_12159);
(statearr_12171_12193[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 6))
{var inst_12161 = (state_12165[2]);var state_12165__$1 = state_12165;var statearr_12172_12194 = state_12165__$1;(statearr_12172_12194[2] = inst_12161);
(statearr_12172_12194[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 7))
{var inst_12144 = (state_12165[8]);var inst_12145 = (state_12165[9]);var inst_12144__$1 = (state_12165[2]);var inst_12145__$1 = cljs.core.nth.call(null,inst_12144__$1,0,null);var inst_12146 = cljs.core.nth.call(null,inst_12144__$1,1,null);var inst_12147 = (inst_12145__$1 == null);var state_12165__$1 = (function (){var statearr_12173 = state_12165;(statearr_12173[8] = inst_12144__$1);
(statearr_12173[10] = inst_12146);
(statearr_12173[9] = inst_12145__$1);
return statearr_12173;
})();if(cljs.core.truth_(inst_12147))
{var statearr_12174_12195 = state_12165__$1;(statearr_12174_12195[1] = 8);
} else
{var statearr_12175_12196 = state_12165__$1;(statearr_12175_12196[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 8))
{var inst_12144 = (state_12165[8]);var inst_12146 = (state_12165[10]);var inst_12145 = (state_12165[9]);var inst_12137 = (state_12165[7]);var inst_12149 = (function (){var c = inst_12146;var v = inst_12145;var vec__12142 = inst_12144;var cs = inst_12137;return ((function (c,v,vec__12142,cs,inst_12144,inst_12146,inst_12145,inst_12137,state_val_12166){
return (function (p1__12082_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12082_SHARP_);
});
;})(c,v,vec__12142,cs,inst_12144,inst_12146,inst_12145,inst_12137,state_val_12166))
})();var inst_12150 = cljs.core.filterv.call(null,inst_12149,inst_12137);var inst_12137__$1 = inst_12150;var state_12165__$1 = (function (){var statearr_12176 = state_12165;(statearr_12176[7] = inst_12137__$1);
return statearr_12176;
})();var statearr_12177_12197 = state_12165__$1;(statearr_12177_12197[2] = null);
(statearr_12177_12197[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 9))
{var inst_12145 = (state_12165[9]);var state_12165__$1 = state_12165;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12165__$1,11,out,inst_12145);
} else
{if((state_val_12166 === 10))
{var inst_12157 = (state_12165[2]);var state_12165__$1 = state_12165;var statearr_12179_12198 = state_12165__$1;(statearr_12179_12198[2] = inst_12157);
(statearr_12179_12198[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 11))
{var inst_12137 = (state_12165[7]);var inst_12154 = (state_12165[2]);var tmp12178 = inst_12137;var inst_12137__$1 = tmp12178;var state_12165__$1 = (function (){var statearr_12180 = state_12165;(statearr_12180[11] = inst_12154);
(statearr_12180[7] = inst_12137__$1);
return statearr_12180;
})();var statearr_12181_12199 = state_12165__$1;(statearr_12181_12199[2] = null);
(statearr_12181_12199[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
});return ((function (switch__6057__auto__){
return (function() {
var state_machine__6058__auto__ = null;
var state_machine__6058__auto____0 = (function (){var statearr_12185 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12185[0] = state_machine__6058__auto__);
(statearr_12185[1] = 1);
return statearr_12185;
});
var state_machine__6058__auto____1 = (function (state_12165){while(true){
var ret_value__6059__auto__ = (function (){try{while(true){
var result__6060__auto__ = switch__6057__auto__.call(null,state_12165);if(cljs.core.keyword_identical_QMARK_.call(null,result__6060__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6060__auto__;
}
break;
}
}catch (e12186){if((e12186 instanceof Object))
{var ex__6061__auto__ = e12186;var statearr_12187_12200 = state_12165;(statearr_12187_12200[5] = ex__6061__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12165);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12186;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6059__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12201 = state_12165;
state_12165 = G__12201;
continue;
}
} else
{return ret_value__6059__auto__;
}
break;
}
});
state_machine__6058__auto__ = function(state_12165){
switch(arguments.length){
case 0:
return state_machine__6058__auto____0.call(this);
case 1:
return state_machine__6058__auto____1.call(this,state_12165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6058__auto____0;
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6058__auto____1;
return state_machine__6058__auto__;
})()
;})(switch__6057__auto__))
})();var state__6074__auto__ = (function (){var statearr_12188 = f__6073__auto__.call(null);(statearr_12188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6072__auto___12189);
return statearr_12188;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6074__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6072__auto___12294 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6073__auto__ = (function (){var switch__6057__auto__ = (function (state_12271){var state_val_12272 = (state_12271[1]);if((state_val_12272 === 1))
{var inst_12248 = 0;var state_12271__$1 = (function (){var statearr_12273 = state_12271;(statearr_12273[7] = inst_12248);
return statearr_12273;
})();var statearr_12274_12295 = state_12271__$1;(statearr_12274_12295[2] = null);
(statearr_12274_12295[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 2))
{var inst_12248 = (state_12271[7]);var inst_12250 = (inst_12248 < n);var state_12271__$1 = state_12271;if(cljs.core.truth_(inst_12250))
{var statearr_12275_12296 = state_12271__$1;(statearr_12275_12296[1] = 4);
} else
{var statearr_12276_12297 = state_12271__$1;(statearr_12276_12297[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 3))
{var inst_12268 = (state_12271[2]);var inst_12269 = cljs.core.async.close_BANG_.call(null,out);var state_12271__$1 = (function (){var statearr_12277 = state_12271;(statearr_12277[8] = inst_12268);
return statearr_12277;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12271__$1,inst_12269);
} else
{if((state_val_12272 === 4))
{var state_12271__$1 = state_12271;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12271__$1,7,ch);
} else
{if((state_val_12272 === 5))
{var state_12271__$1 = state_12271;var statearr_12278_12298 = state_12271__$1;(statearr_12278_12298[2] = null);
(statearr_12278_12298[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 6))
{var inst_12266 = (state_12271[2]);var state_12271__$1 = state_12271;var statearr_12279_12299 = state_12271__$1;(statearr_12279_12299[2] = inst_12266);
(statearr_12279_12299[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 7))
{var inst_12253 = (state_12271[9]);var inst_12253__$1 = (state_12271[2]);var inst_12254 = (inst_12253__$1 == null);var inst_12255 = cljs.core.not.call(null,inst_12254);var state_12271__$1 = (function (){var statearr_12280 = state_12271;(statearr_12280[9] = inst_12253__$1);
return statearr_12280;
})();if(inst_12255)
{var statearr_12281_12300 = state_12271__$1;(statearr_12281_12300[1] = 8);
} else
{var statearr_12282_12301 = state_12271__$1;(statearr_12282_12301[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 8))
{var inst_12253 = (state_12271[9]);var state_12271__$1 = state_12271;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12271__$1,11,out,inst_12253);
} else
{if((state_val_12272 === 9))
{var state_12271__$1 = state_12271;var statearr_12283_12302 = state_12271__$1;(statearr_12283_12302[2] = null);
(statearr_12283_12302[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 10))
{var inst_12263 = (state_12271[2]);var state_12271__$1 = state_12271;var statearr_12284_12303 = state_12271__$1;(statearr_12284_12303[2] = inst_12263);
(statearr_12284_12303[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 11))
{var inst_12248 = (state_12271[7]);var inst_12258 = (state_12271[2]);var inst_12259 = (inst_12248 + 1);var inst_12248__$1 = inst_12259;var state_12271__$1 = (function (){var statearr_12285 = state_12271;(statearr_12285[7] = inst_12248__$1);
(statearr_12285[10] = inst_12258);
return statearr_12285;
})();var statearr_12286_12304 = state_12271__$1;(statearr_12286_12304[2] = null);
(statearr_12286_12304[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
});return ((function (switch__6057__auto__){
return (function() {
var state_machine__6058__auto__ = null;
var state_machine__6058__auto____0 = (function (){var statearr_12290 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12290[0] = state_machine__6058__auto__);
(statearr_12290[1] = 1);
return statearr_12290;
});
var state_machine__6058__auto____1 = (function (state_12271){while(true){
var ret_value__6059__auto__ = (function (){try{while(true){
var result__6060__auto__ = switch__6057__auto__.call(null,state_12271);if(cljs.core.keyword_identical_QMARK_.call(null,result__6060__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6060__auto__;
}
break;
}
}catch (e12291){if((e12291 instanceof Object))
{var ex__6061__auto__ = e12291;var statearr_12292_12305 = state_12271;(statearr_12292_12305[5] = ex__6061__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12271);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6059__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12306 = state_12271;
state_12271 = G__12306;
continue;
}
} else
{return ret_value__6059__auto__;
}
break;
}
});
state_machine__6058__auto__ = function(state_12271){
switch(arguments.length){
case 0:
return state_machine__6058__auto____0.call(this);
case 1:
return state_machine__6058__auto____1.call(this,state_12271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6058__auto____0;
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6058__auto____1;
return state_machine__6058__auto__;
})()
;})(switch__6057__auto__))
})();var state__6074__auto__ = (function (){var statearr_12293 = f__6073__auto__.call(null);(statearr_12293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6072__auto___12294);
return statearr_12293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6074__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6072__auto___12403 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6073__auto__ = (function (){var switch__6057__auto__ = (function (state_12378){var state_val_12379 = (state_12378[1]);if((state_val_12379 === 1))
{var inst_12355 = null;var state_12378__$1 = (function (){var statearr_12380 = state_12378;(statearr_12380[7] = inst_12355);
return statearr_12380;
})();var statearr_12381_12404 = state_12378__$1;(statearr_12381_12404[2] = null);
(statearr_12381_12404[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12379 === 2))
{var state_12378__$1 = state_12378;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12378__$1,4,ch);
} else
{if((state_val_12379 === 3))
{var inst_12375 = (state_12378[2]);var inst_12376 = cljs.core.async.close_BANG_.call(null,out);var state_12378__$1 = (function (){var statearr_12382 = state_12378;(statearr_12382[8] = inst_12375);
return statearr_12382;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12378__$1,inst_12376);
} else
{if((state_val_12379 === 4))
{var inst_12358 = (state_12378[9]);var inst_12358__$1 = (state_12378[2]);var inst_12359 = (inst_12358__$1 == null);var inst_12360 = cljs.core.not.call(null,inst_12359);var state_12378__$1 = (function (){var statearr_12383 = state_12378;(statearr_12383[9] = inst_12358__$1);
return statearr_12383;
})();if(inst_12360)
{var statearr_12384_12405 = state_12378__$1;(statearr_12384_12405[1] = 5);
} else
{var statearr_12385_12406 = state_12378__$1;(statearr_12385_12406[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12379 === 5))
{var inst_12355 = (state_12378[7]);var inst_12358 = (state_12378[9]);var inst_12362 = cljs.core._EQ_.call(null,inst_12358,inst_12355);var state_12378__$1 = state_12378;if(inst_12362)
{var statearr_12386_12407 = state_12378__$1;(statearr_12386_12407[1] = 8);
} else
{var statearr_12387_12408 = state_12378__$1;(statearr_12387_12408[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12379 === 6))
{var state_12378__$1 = state_12378;var statearr_12389_12409 = state_12378__$1;(statearr_12389_12409[2] = null);
(statearr_12389_12409[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12379 === 7))
{var inst_12373 = (state_12378[2]);var state_12378__$1 = state_12378;var statearr_12390_12410 = state_12378__$1;(statearr_12390_12410[2] = inst_12373);
(statearr_12390_12410[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12379 === 8))
{var inst_12355 = (state_12378[7]);var tmp12388 = inst_12355;var inst_12355__$1 = tmp12388;var state_12378__$1 = (function (){var statearr_12391 = state_12378;(statearr_12391[7] = inst_12355__$1);
return statearr_12391;
})();var statearr_12392_12411 = state_12378__$1;(statearr_12392_12411[2] = null);
(statearr_12392_12411[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12379 === 9))
{var inst_12358 = (state_12378[9]);var state_12378__$1 = state_12378;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12378__$1,11,out,inst_12358);
} else
{if((state_val_12379 === 10))
{var inst_12370 = (state_12378[2]);var state_12378__$1 = state_12378;var statearr_12393_12412 = state_12378__$1;(statearr_12393_12412[2] = inst_12370);
(statearr_12393_12412[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12379 === 11))
{var inst_12358 = (state_12378[9]);var inst_12367 = (state_12378[2]);var inst_12355 = inst_12358;var state_12378__$1 = (function (){var statearr_12394 = state_12378;(statearr_12394[7] = inst_12355);
(statearr_12394[10] = inst_12367);
return statearr_12394;
})();var statearr_12395_12413 = state_12378__$1;(statearr_12395_12413[2] = null);
(statearr_12395_12413[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
});return ((function (switch__6057__auto__){
return (function() {
var state_machine__6058__auto__ = null;
var state_machine__6058__auto____0 = (function (){var statearr_12399 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12399[0] = state_machine__6058__auto__);
(statearr_12399[1] = 1);
return statearr_12399;
});
var state_machine__6058__auto____1 = (function (state_12378){while(true){
var ret_value__6059__auto__ = (function (){try{while(true){
var result__6060__auto__ = switch__6057__auto__.call(null,state_12378);if(cljs.core.keyword_identical_QMARK_.call(null,result__6060__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6060__auto__;
}
break;
}
}catch (e12400){if((e12400 instanceof Object))
{var ex__6061__auto__ = e12400;var statearr_12401_12414 = state_12378;(statearr_12401_12414[5] = ex__6061__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12378);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12400;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6059__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12415 = state_12378;
state_12378 = G__12415;
continue;
}
} else
{return ret_value__6059__auto__;
}
break;
}
});
state_machine__6058__auto__ = function(state_12378){
switch(arguments.length){
case 0:
return state_machine__6058__auto____0.call(this);
case 1:
return state_machine__6058__auto____1.call(this,state_12378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6058__auto____0;
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6058__auto____1;
return state_machine__6058__auto__;
})()
;})(switch__6057__auto__))
})();var state__6074__auto__ = (function (){var statearr_12402 = f__6073__auto__.call(null);(statearr_12402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6072__auto___12403);
return statearr_12402;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6074__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6072__auto___12550 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6073__auto__ = (function (){var switch__6057__auto__ = (function (state_12520){var state_val_12521 = (state_12520[1]);if((state_val_12521 === 1))
{var inst_12483 = (new Array(n));var inst_12484 = inst_12483;var inst_12485 = 0;var state_12520__$1 = (function (){var statearr_12522 = state_12520;(statearr_12522[7] = inst_12484);
(statearr_12522[8] = inst_12485);
return statearr_12522;
})();var statearr_12523_12551 = state_12520__$1;(statearr_12523_12551[2] = null);
(statearr_12523_12551[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12521 === 2))
{var state_12520__$1 = state_12520;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12520__$1,4,ch);
} else
{if((state_val_12521 === 3))
{var inst_12518 = (state_12520[2]);var state_12520__$1 = state_12520;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12520__$1,inst_12518);
} else
{if((state_val_12521 === 4))
{var inst_12488 = (state_12520[9]);var inst_12488__$1 = (state_12520[2]);var inst_12489 = (inst_12488__$1 == null);var inst_12490 = cljs.core.not.call(null,inst_12489);var state_12520__$1 = (function (){var statearr_12524 = state_12520;(statearr_12524[9] = inst_12488__$1);
return statearr_12524;
})();if(inst_12490)
{var statearr_12525_12552 = state_12520__$1;(statearr_12525_12552[1] = 5);
} else
{var statearr_12526_12553 = state_12520__$1;(statearr_12526_12553[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12521 === 5))
{var inst_12484 = (state_12520[7]);var inst_12485 = (state_12520[8]);var inst_12493 = (state_12520[10]);var inst_12488 = (state_12520[9]);var inst_12492 = (inst_12484[inst_12485] = inst_12488);var inst_12493__$1 = (inst_12485 + 1);var inst_12494 = (inst_12493__$1 < n);var state_12520__$1 = (function (){var statearr_12527 = state_12520;(statearr_12527[10] = inst_12493__$1);
(statearr_12527[11] = inst_12492);
return statearr_12527;
})();if(cljs.core.truth_(inst_12494))
{var statearr_12528_12554 = state_12520__$1;(statearr_12528_12554[1] = 8);
} else
{var statearr_12529_12555 = state_12520__$1;(statearr_12529_12555[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12521 === 6))
{var inst_12485 = (state_12520[8]);var inst_12506 = (inst_12485 > 0);var state_12520__$1 = state_12520;if(cljs.core.truth_(inst_12506))
{var statearr_12531_12556 = state_12520__$1;(statearr_12531_12556[1] = 12);
} else
{var statearr_12532_12557 = state_12520__$1;(statearr_12532_12557[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12521 === 7))
{var inst_12516 = (state_12520[2]);var state_12520__$1 = state_12520;var statearr_12533_12558 = state_12520__$1;(statearr_12533_12558[2] = inst_12516);
(statearr_12533_12558[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12521 === 8))
{var inst_12484 = (state_12520[7]);var inst_12493 = (state_12520[10]);var tmp12530 = inst_12484;var inst_12484__$1 = tmp12530;var inst_12485 = inst_12493;var state_12520__$1 = (function (){var statearr_12534 = state_12520;(statearr_12534[7] = inst_12484__$1);
(statearr_12534[8] = inst_12485);
return statearr_12534;
})();var statearr_12535_12559 = state_12520__$1;(statearr_12535_12559[2] = null);
(statearr_12535_12559[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12521 === 9))
{var inst_12484 = (state_12520[7]);var inst_12498 = cljs.core.vec.call(null,inst_12484);var state_12520__$1 = state_12520;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12520__$1,11,out,inst_12498);
} else
{if((state_val_12521 === 10))
{var inst_12504 = (state_12520[2]);var state_12520__$1 = state_12520;var statearr_12536_12560 = state_12520__$1;(statearr_12536_12560[2] = inst_12504);
(statearr_12536_12560[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12521 === 11))
{var inst_12500 = (state_12520[2]);var inst_12501 = (new Array(n));var inst_12484 = inst_12501;var inst_12485 = 0;var state_12520__$1 = (function (){var statearr_12537 = state_12520;(statearr_12537[12] = inst_12500);
(statearr_12537[7] = inst_12484);
(statearr_12537[8] = inst_12485);
return statearr_12537;
})();var statearr_12538_12561 = state_12520__$1;(statearr_12538_12561[2] = null);
(statearr_12538_12561[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12521 === 12))
{var inst_12484 = (state_12520[7]);var inst_12508 = cljs.core.vec.call(null,inst_12484);var state_12520__$1 = state_12520;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12520__$1,15,out,inst_12508);
} else
{if((state_val_12521 === 13))
{var state_12520__$1 = state_12520;var statearr_12539_12562 = state_12520__$1;(statearr_12539_12562[2] = null);
(statearr_12539_12562[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12521 === 14))
{var inst_12513 = (state_12520[2]);var inst_12514 = cljs.core.async.close_BANG_.call(null,out);var state_12520__$1 = (function (){var statearr_12540 = state_12520;(statearr_12540[13] = inst_12513);
return statearr_12540;
})();var statearr_12541_12563 = state_12520__$1;(statearr_12541_12563[2] = inst_12514);
(statearr_12541_12563[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12521 === 15))
{var inst_12510 = (state_12520[2]);var state_12520__$1 = state_12520;var statearr_12542_12564 = state_12520__$1;(statearr_12542_12564[2] = inst_12510);
(statearr_12542_12564[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
});return ((function (switch__6057__auto__){
return (function() {
var state_machine__6058__auto__ = null;
var state_machine__6058__auto____0 = (function (){var statearr_12546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12546[0] = state_machine__6058__auto__);
(statearr_12546[1] = 1);
return statearr_12546;
});
var state_machine__6058__auto____1 = (function (state_12520){while(true){
var ret_value__6059__auto__ = (function (){try{while(true){
var result__6060__auto__ = switch__6057__auto__.call(null,state_12520);if(cljs.core.keyword_identical_QMARK_.call(null,result__6060__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6060__auto__;
}
break;
}
}catch (e12547){if((e12547 instanceof Object))
{var ex__6061__auto__ = e12547;var statearr_12548_12565 = state_12520;(statearr_12548_12565[5] = ex__6061__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12520);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12547;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6059__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12566 = state_12520;
state_12520 = G__12566;
continue;
}
} else
{return ret_value__6059__auto__;
}
break;
}
});
state_machine__6058__auto__ = function(state_12520){
switch(arguments.length){
case 0:
return state_machine__6058__auto____0.call(this);
case 1:
return state_machine__6058__auto____1.call(this,state_12520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6058__auto____0;
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6058__auto____1;
return state_machine__6058__auto__;
})()
;})(switch__6057__auto__))
})();var state__6074__auto__ = (function (){var statearr_12549 = f__6073__auto__.call(null);(statearr_12549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6072__auto___12550);
return statearr_12549;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6074__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6072__auto___12709 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6073__auto__ = (function (){var switch__6057__auto__ = (function (state_12679){var state_val_12680 = (state_12679[1]);if((state_val_12680 === 1))
{var inst_12638 = [];var inst_12639 = inst_12638;var inst_12640 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12679__$1 = (function (){var statearr_12681 = state_12679;(statearr_12681[7] = inst_12639);
(statearr_12681[8] = inst_12640);
return statearr_12681;
})();var statearr_12682_12710 = state_12679__$1;(statearr_12682_12710[2] = null);
(statearr_12682_12710[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12680 === 2))
{var state_12679__$1 = state_12679;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12679__$1,4,ch);
} else
{if((state_val_12680 === 3))
{var inst_12677 = (state_12679[2]);var state_12679__$1 = state_12679;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12679__$1,inst_12677);
} else
{if((state_val_12680 === 4))
{var inst_12643 = (state_12679[9]);var inst_12643__$1 = (state_12679[2]);var inst_12644 = (inst_12643__$1 == null);var inst_12645 = cljs.core.not.call(null,inst_12644);var state_12679__$1 = (function (){var statearr_12683 = state_12679;(statearr_12683[9] = inst_12643__$1);
return statearr_12683;
})();if(inst_12645)
{var statearr_12684_12711 = state_12679__$1;(statearr_12684_12711[1] = 5);
} else
{var statearr_12685_12712 = state_12679__$1;(statearr_12685_12712[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12680 === 5))
{var inst_12647 = (state_12679[10]);var inst_12643 = (state_12679[9]);var inst_12640 = (state_12679[8]);var inst_12647__$1 = f.call(null,inst_12643);var inst_12648 = cljs.core._EQ_.call(null,inst_12647__$1,inst_12640);var inst_12649 = cljs.core.keyword_identical_QMARK_.call(null,inst_12640,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12650 = (inst_12648) || (inst_12649);var state_12679__$1 = (function (){var statearr_12686 = state_12679;(statearr_12686[10] = inst_12647__$1);
return statearr_12686;
})();if(cljs.core.truth_(inst_12650))
{var statearr_12687_12713 = state_12679__$1;(statearr_12687_12713[1] = 8);
} else
{var statearr_12688_12714 = state_12679__$1;(statearr_12688_12714[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12680 === 6))
{var inst_12639 = (state_12679[7]);var inst_12664 = inst_12639.length;var inst_12665 = (inst_12664 > 0);var state_12679__$1 = state_12679;if(cljs.core.truth_(inst_12665))
{var statearr_12690_12715 = state_12679__$1;(statearr_12690_12715[1] = 12);
} else
{var statearr_12691_12716 = state_12679__$1;(statearr_12691_12716[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12680 === 7))
{var inst_12675 = (state_12679[2]);var state_12679__$1 = state_12679;var statearr_12692_12717 = state_12679__$1;(statearr_12692_12717[2] = inst_12675);
(statearr_12692_12717[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12680 === 8))
{var inst_12639 = (state_12679[7]);var inst_12647 = (state_12679[10]);var inst_12643 = (state_12679[9]);var inst_12652 = inst_12639.push(inst_12643);var tmp12689 = inst_12639;var inst_12639__$1 = tmp12689;var inst_12640 = inst_12647;var state_12679__$1 = (function (){var statearr_12693 = state_12679;(statearr_12693[7] = inst_12639__$1);
(statearr_12693[11] = inst_12652);
(statearr_12693[8] = inst_12640);
return statearr_12693;
})();var statearr_12694_12718 = state_12679__$1;(statearr_12694_12718[2] = null);
(statearr_12694_12718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12680 === 9))
{var inst_12639 = (state_12679[7]);var inst_12655 = cljs.core.vec.call(null,inst_12639);var state_12679__$1 = state_12679;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12679__$1,11,out,inst_12655);
} else
{if((state_val_12680 === 10))
{var inst_12662 = (state_12679[2]);var state_12679__$1 = state_12679;var statearr_12695_12719 = state_12679__$1;(statearr_12695_12719[2] = inst_12662);
(statearr_12695_12719[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12680 === 11))
{var inst_12647 = (state_12679[10]);var inst_12643 = (state_12679[9]);var inst_12657 = (state_12679[2]);var inst_12658 = [];var inst_12659 = inst_12658.push(inst_12643);var inst_12639 = inst_12658;var inst_12640 = inst_12647;var state_12679__$1 = (function (){var statearr_12696 = state_12679;(statearr_12696[7] = inst_12639);
(statearr_12696[12] = inst_12657);
(statearr_12696[13] = inst_12659);
(statearr_12696[8] = inst_12640);
return statearr_12696;
})();var statearr_12697_12720 = state_12679__$1;(statearr_12697_12720[2] = null);
(statearr_12697_12720[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12680 === 12))
{var inst_12639 = (state_12679[7]);var inst_12667 = cljs.core.vec.call(null,inst_12639);var state_12679__$1 = state_12679;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12679__$1,15,out,inst_12667);
} else
{if((state_val_12680 === 13))
{var state_12679__$1 = state_12679;var statearr_12698_12721 = state_12679__$1;(statearr_12698_12721[2] = null);
(statearr_12698_12721[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12680 === 14))
{var inst_12672 = (state_12679[2]);var inst_12673 = cljs.core.async.close_BANG_.call(null,out);var state_12679__$1 = (function (){var statearr_12699 = state_12679;(statearr_12699[14] = inst_12672);
return statearr_12699;
})();var statearr_12700_12722 = state_12679__$1;(statearr_12700_12722[2] = inst_12673);
(statearr_12700_12722[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12680 === 15))
{var inst_12669 = (state_12679[2]);var state_12679__$1 = state_12679;var statearr_12701_12723 = state_12679__$1;(statearr_12701_12723[2] = inst_12669);
(statearr_12701_12723[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
});return ((function (switch__6057__auto__){
return (function() {
var state_machine__6058__auto__ = null;
var state_machine__6058__auto____0 = (function (){var statearr_12705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12705[0] = state_machine__6058__auto__);
(statearr_12705[1] = 1);
return statearr_12705;
});
var state_machine__6058__auto____1 = (function (state_12679){while(true){
var ret_value__6059__auto__ = (function (){try{while(true){
var result__6060__auto__ = switch__6057__auto__.call(null,state_12679);if(cljs.core.keyword_identical_QMARK_.call(null,result__6060__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6060__auto__;
}
break;
}
}catch (e12706){if((e12706 instanceof Object))
{var ex__6061__auto__ = e12706;var statearr_12707_12724 = state_12679;(statearr_12707_12724[5] = ex__6061__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12679);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6059__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12725 = state_12679;
state_12679 = G__12725;
continue;
}
} else
{return ret_value__6059__auto__;
}
break;
}
});
state_machine__6058__auto__ = function(state_12679){
switch(arguments.length){
case 0:
return state_machine__6058__auto____0.call(this);
case 1:
return state_machine__6058__auto____1.call(this,state_12679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6058__auto____0;
state_machine__6058__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6058__auto____1;
return state_machine__6058__auto__;
})()
;})(switch__6057__auto__))
})();var state__6074__auto__ = (function (){var statearr_12708 = f__6073__auto__.call(null);(statearr_12708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6072__auto___12709);
return statearr_12708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6074__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
