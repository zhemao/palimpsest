// Compiled by ClojureScript 0.0-2138
goog.provide('palimpsest.keys');
goog.require('cljs.core');
palimpsest.keys.capital_map = cljs.core.PersistentHashMap.fromArrays(["`",",","-",".","/","0","1","2","3","4","5","6","7","8","9","[","\\","=","]"],["~","<","_",">","?",")","!","@","#","$","%","^","&","*","(","{","|","+","}"]);
palimpsest.keys.event__GT_char = (function event__GT_char(event){var kc = event.keyCode;if(cljs.core.not.call(null,event.shiftKey))
{return cljs.core.char$.call(null,kc);
} else
{if(((kc > 64)) && ((kc <= 90)))
{return cljs.core.char$.call(null,(kc + 32));
} else
{if(cljs.core.contains_QMARK_.call(null,palimpsest.keys.capital_map,cljs.core.char$.call(null,kc)))
{return palimpsest.keys.capital_map.call(null,cljs.core.char$.call(null,kc));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.char$.call(null,kc);
} else
{return null;
}
}
}
}
});
