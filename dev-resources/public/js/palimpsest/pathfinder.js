// Compiled by ClojureScript 0.0-2138
goog.provide('palimpsest.pathfinder');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('goog.events');
palimpsest.pathfinder.log = (function log(message){console.log(message);
var request = (new goog.net.XhrIo());return request.send("/debug","POST",[cljs.core.str(message)].join(''));
});
