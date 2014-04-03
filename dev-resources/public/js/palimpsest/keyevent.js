// Compiled by ClojureScript 0.0-2138
goog.provide('palimpsest.keyevent');
goog.require('cljs.core');
palimpsest.keyevent.capital_map = cljs.core.PersistentHashMap.fromArrays(["`",",","-",".","/","0","1","2","3","4","5","6","7","8","9","[","\\","=","]"],["~","<","_",">","?",")","!","@","#","$","%","^","&","*","(","{","|","+","}"]);
palimpsest.keyevent.keycode_map = cljs.core.PersistentHashMap.fromArrays([192,186,187,219,188,220,189,221,190,191],["`",";","=","[",",","\\","-","]",".","/"]);
palimpsest.keyevent.event__GT_char = (function event__GT_char(event){var kc = event.keyCode;if(((kc > 64)) && ((kc <= 90)))
{return cljs.core.char$.call(null,(cljs.core.truth_(event.shiftKey)?kc:(kc + 32)));
} else
{if(((kc >= 48)) && ((kc < 58)))
{if(cljs.core.truth_(event.shiftKey))
{return palimpsest.keyevent.capital_map.call(null,cljs.core.char$.call(null,kc));
} else
{return cljs.core.char$.call(null,kc);
}
} else
{if(cljs.core.contains_QMARK_.call(null,palimpsest.keyevent.keycode_map,kc))
{var lc = palimpsest.keyevent.keycode_map.call(null,kc);if(cljs.core.truth_(event.shiftKey))
{return palimpsest.keyevent.capital_map.call(null,lc);
} else
{return lc;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.char$.call(null,0);
} else
{return null;
}
}
}
}
});
