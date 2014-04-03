// Compiled by ClojureScript 0.0-2138
goog.provide('palimpsest.core_test');
goog.require('cljs.core');
goog.require('palimpsest.core');
goog.require('palimpsest.core');
goog.require('cemerick.cljs.test');
goog.require('cemerick.cljs.test');
palimpsest.core_test.foo_test = (function foo_test(){return cemerick.cljs.test.test_function.call(null,palimpsest.core_test.foo_test);
});
palimpsest.core_test.foo_test = cljs.core.vary_meta.call(null,palimpsest.core_test.foo_test,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"foo-test","foo-test",-1310892302,null),new cljs.core.Keyword(null,"test","test",1017460740),(function foo_test_test(){var _STAR_testing_contexts_STAR_6459 = cemerick.cljs.test._STAR_testing_contexts_STAR_;try{cemerick.cljs.test._STAR_testing_contexts_STAR_ = cljs.core.conj.call(null,cemerick.cljs.test._STAR_testing_contexts_STAR_,"I don't do a lot\n");
var _STAR_testing_contexts_STAR_6460 = cemerick.cljs.test._STAR_testing_contexts_STAR_;try{cemerick.cljs.test._STAR_testing_contexts_STAR_ = cljs.core.conj.call(null,cemerick.cljs.test._STAR_testing_contexts_STAR_,"Edge cases\n");
var _STAR_testing_contexts_STAR_6461 = cemerick.cljs.test._STAR_testing_contexts_STAR_;try{cemerick.cljs.test._STAR_testing_contexts_STAR_ = cljs.core.conj.call(null,cemerick.cljs.test._STAR_testing_contexts_STAR_,"(foo str)");
try{var values__6317__auto___6464 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,palimpsest.core.foo.call(null,"")),"ClojureScript!");var result__6318__auto___6465 = cljs.core.apply.call(null,cljs.core._EQ_,values__6317__auto___6464);if(cljs.core.truth_(result__6318__auto___6465))
{cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6317__auto___6464),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"ClojureScript!",cljs.core.list(new cljs.core.Symbol(null,"foo","foo",-1640429953,null),""))], null));
} else
{cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6317__auto___6464)),new cljs.core.Symbol(null,"not","not",-1640422260,null)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"ClojureScript!",cljs.core.list(new cljs.core.Symbol(null,"foo","foo",-1640429953,null),""))], null));
}
}catch (e6462){if((e6462 instanceof Error))
{var t__6354__auto___6466 = e6462;cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),t__6354__auto___6466,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"ClojureScript!",cljs.core.list(new cljs.core.Symbol(null,"foo","foo",-1640429953,null),""))], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6462;
} else
{}
}
}try{var values__6317__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,palimpsest.core.foo.call(null,null)),"Hello, ClojureScript!");var result__6318__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__6317__auto__);if(cljs.core.truth_(result__6318__auto__))
{cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6317__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"Hello, ClojureScript!",cljs.core.list(new cljs.core.Symbol(null,"foo","foo",-1640429953,null),null))], null));
} else
{cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6317__auto__)),new cljs.core.Symbol(null,"not","not",-1640422260,null)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"Hello, ClojureScript!",cljs.core.list(new cljs.core.Symbol(null,"foo","foo",-1640429953,null),null))], null));
}
return result__6318__auto__;
}catch (e6463){if((e6463 instanceof Error))
{var t__6354__auto__ = e6463;return cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),t__6354__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"Hello, ClojureScript!",cljs.core.list(new cljs.core.Symbol(null,"foo","foo",-1640429953,null),null))], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6463;
} else
{return null;
}
}
}}finally {cemerick.cljs.test._STAR_testing_contexts_STAR_ = _STAR_testing_contexts_STAR_6461;
}}finally {cemerick.cljs.test._STAR_testing_contexts_STAR_ = _STAR_testing_contexts_STAR_6460;
}}finally {cemerick.cljs.test._STAR_testing_contexts_STAR_ = _STAR_testing_contexts_STAR_6459;
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"palimpsest.core-test","palimpsest.core-test",1099110223,null),palimpsest.core_test.foo_test);
