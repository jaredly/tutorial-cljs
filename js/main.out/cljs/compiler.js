// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__13381 = s;
var map__13381__$1 = ((((!((map__13381 == null)))?((((map__13381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13381):map__13381);
var name = cljs.core.get.call(null,map__13381__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__13381__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__13384 = info;
var map__13385 = G__13384;
var map__13385__$1 = ((((!((map__13385 == null)))?((((map__13385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13385):map__13385);
var shadow = cljs.core.get.call(null,map__13385__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__13384__$1 = G__13384;
while(true){
var d__$2 = d__$1;
var map__13387 = G__13384__$1;
var map__13387__$1 = ((((!((map__13387 == null)))?((((map__13387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13387):map__13387);
var shadow__$1 = cljs.core.get.call(null,map__13387__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__13389 = (d__$2 + (1));
var G__13390 = shadow__$1;
d__$1 = G__13389;
G__13384__$1 = G__13390;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__13391){
var map__13396 = p__13391;
var map__13396__$1 = ((((!((map__13396 == null)))?((((map__13396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13396):map__13396);
var name_var = map__13396__$1;
var name = cljs.core.get.call(null,map__13396__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__13396__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__13398 = info;
var map__13398__$1 = ((((!((map__13398 == null)))?((((map__13398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13398):map__13398);
var ns = cljs.core.get.call(null,map__13398__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__13398__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args13400 = [];
var len__7511__auto___13403 = arguments.length;
var i__7512__auto___13404 = (0);
while(true){
if((i__7512__auto___13404 < len__7511__auto___13403)){
args13400.push((arguments[i__7512__auto___13404]));

var G__13405 = (i__7512__auto___13404 + (1));
i__7512__auto___13404 = G__13405;
continue;
} else {
}
break;
}

var G__13402 = args13400.length;
switch (G__13402) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13400.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;
cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__13408 = cp;
switch (G__13408) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
return [cljs.core.str("\\u"),cljs.core.str(cp.toString((16)))].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__13414_13418 = cljs.core.seq.call(null,s);
var chunk__13415_13419 = null;
var count__13416_13420 = (0);
var i__13417_13421 = (0);
while(true){
if((i__13417_13421 < count__13416_13420)){
var c_13422 = cljs.core._nth.call(null,chunk__13415_13419,i__13417_13421);
sb.append(cljs.compiler.escape_char.call(null,c_13422));

var G__13423 = seq__13414_13418;
var G__13424 = chunk__13415_13419;
var G__13425 = count__13416_13420;
var G__13426 = (i__13417_13421 + (1));
seq__13414_13418 = G__13423;
chunk__13415_13419 = G__13424;
count__13416_13420 = G__13425;
i__13417_13421 = G__13426;
continue;
} else {
var temp__4425__auto___13427 = cljs.core.seq.call(null,seq__13414_13418);
if(temp__4425__auto___13427){
var seq__13414_13428__$1 = temp__4425__auto___13427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13414_13428__$1)){
var c__7256__auto___13429 = cljs.core.chunk_first.call(null,seq__13414_13428__$1);
var G__13430 = cljs.core.chunk_rest.call(null,seq__13414_13428__$1);
var G__13431 = c__7256__auto___13429;
var G__13432 = cljs.core.count.call(null,c__7256__auto___13429);
var G__13433 = (0);
seq__13414_13418 = G__13430;
chunk__13415_13419 = G__13431;
count__13416_13420 = G__13432;
i__13417_13421 = G__13433;
continue;
} else {
var c_13434 = cljs.core.first.call(null,seq__13414_13428__$1);
sb.append(cljs.compiler.escape_char.call(null,c_13434));

var G__13435 = cljs.core.next.call(null,seq__13414_13428__$1);
var G__13436 = null;
var G__13437 = (0);
var G__13438 = (0);
seq__13414_13418 = G__13435;
chunk__13415_13419 = G__13436;
count__13416_13420 = G__13437;
i__13417_13421 = G__13438;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__7366__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7367__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7368__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7369__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7370__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7370__auto__,method_table__7366__auto__,prefer_table__7367__auto__,method_cache__7368__auto__,cached_hierarchy__7369__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__11948__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__11948__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__13444_13449 = ast;
var map__13444_13450__$1 = ((((!((map__13444_13449 == null)))?((((map__13444_13449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13444_13449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13444_13449):map__13444_13449);
var env_13451 = cljs.core.get.call(null,map__13444_13450__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_13451))){
var map__13446_13452 = env_13451;
var map__13446_13453__$1 = ((((!((map__13446_13452 == null)))?((((map__13446_13452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13446_13452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13446_13452):map__13446_13452);
var line_13454 = cljs.core.get.call(null,map__13446_13453__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_13455 = cljs.core.get.call(null,map__13446_13453__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__13446_13452,map__13446_13453__$1,line_13454,column_13455,map__13444_13449,map__13444_13450__$1,env_13451,val__11948__auto__){
return (function (m){
var minfo = (function (){var G__13448 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__13448__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__13448,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__13448);
return G__13448__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_13454 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__13446_13452,map__13446_13453__$1,line_13454,column_13455,map__13444_13449,map__13444_13450__$1,env_13451,val__11948__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_13455)?(column_13455 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__13446_13452,map__13446_13453__$1,line_13454,column_13455,map__13444_13449,map__13444_13450__$1,env_13451,val__11948__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__13446_13452,map__13446_13453__$1,line_13454,column_13455,map__13444_13449,map__13444_13450__$1,env_13451,val__11948__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__13446_13452,map__13446_13453__$1,line_13454,column_13455,map__13444_13449,map__13444_13450__$1,env_13451,val__11948__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__13446_13452,map__13446_13453__$1,line_13454,column_13455,map__13444_13449,map__13444_13450__$1,env_13451,val__11948__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__11948__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__7518__auto__ = [];
var len__7511__auto___13462 = arguments.length;
var i__7512__auto___13463 = (0);
while(true){
if((i__7512__auto___13463 < len__7511__auto___13462)){
args__7518__auto__.push((arguments[i__7512__auto___13463]));

var G__13464 = (i__7512__auto___13463 + (1));
i__7512__auto___13463 = G__13464;
continue;
} else {
}
break;
}

var argseq__7519__auto__ = ((((0) < args__7518__auto__.length))?(new cljs.core.IndexedSeq(args__7518__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__7519__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__13458_13465 = cljs.core.seq.call(null,xs);
var chunk__13459_13466 = null;
var count__13460_13467 = (0);
var i__13461_13468 = (0);
while(true){
if((i__13461_13468 < count__13460_13467)){
var x_13469 = cljs.core._nth.call(null,chunk__13459_13466,i__13461_13468);
if((x_13469 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_13469)){
cljs.compiler.emit.call(null,x_13469);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_13469)){
cljs.core.apply.call(null,cljs.compiler.emits,x_13469);
} else {
if(goog.isFunction(x_13469)){
x_13469.call(null);
} else {
var s_13470 = cljs.core.print_str.call(null,x_13469);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__13458_13465,chunk__13459_13466,count__13460_13467,i__13461_13468,s_13470,x_13469){
return (function (p1__13456_SHARP_){
return (p1__13456_SHARP_ + cljs.core.count.call(null,s_13470));
});})(seq__13458_13465,chunk__13459_13466,count__13460_13467,i__13461_13468,s_13470,x_13469))
);
}

cljs.core.print.call(null,s_13470);

}
}
}
}

var G__13471 = seq__13458_13465;
var G__13472 = chunk__13459_13466;
var G__13473 = count__13460_13467;
var G__13474 = (i__13461_13468 + (1));
seq__13458_13465 = G__13471;
chunk__13459_13466 = G__13472;
count__13460_13467 = G__13473;
i__13461_13468 = G__13474;
continue;
} else {
var temp__4425__auto___13475 = cljs.core.seq.call(null,seq__13458_13465);
if(temp__4425__auto___13475){
var seq__13458_13476__$1 = temp__4425__auto___13475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13458_13476__$1)){
var c__7256__auto___13477 = cljs.core.chunk_first.call(null,seq__13458_13476__$1);
var G__13478 = cljs.core.chunk_rest.call(null,seq__13458_13476__$1);
var G__13479 = c__7256__auto___13477;
var G__13480 = cljs.core.count.call(null,c__7256__auto___13477);
var G__13481 = (0);
seq__13458_13465 = G__13478;
chunk__13459_13466 = G__13479;
count__13460_13467 = G__13480;
i__13461_13468 = G__13481;
continue;
} else {
var x_13482 = cljs.core.first.call(null,seq__13458_13476__$1);
if((x_13482 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_13482)){
cljs.compiler.emit.call(null,x_13482);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_13482)){
cljs.core.apply.call(null,cljs.compiler.emits,x_13482);
} else {
if(goog.isFunction(x_13482)){
x_13482.call(null);
} else {
var s_13483 = cljs.core.print_str.call(null,x_13482);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__13458_13465,chunk__13459_13466,count__13460_13467,i__13461_13468,s_13483,x_13482,seq__13458_13476__$1,temp__4425__auto___13475){
return (function (p1__13456_SHARP_){
return (p1__13456_SHARP_ + cljs.core.count.call(null,s_13483));
});})(seq__13458_13465,chunk__13459_13466,count__13460_13467,i__13461_13468,s_13483,x_13482,seq__13458_13476__$1,temp__4425__auto___13475))
);
}

cljs.core.print.call(null,s_13483);

}
}
}
}

var G__13484 = cljs.core.next.call(null,seq__13458_13476__$1);
var G__13485 = null;
var G__13486 = (0);
var G__13487 = (0);
seq__13458_13465 = G__13484;
chunk__13459_13466 = G__13485;
count__13460_13467 = G__13486;
i__13461_13468 = G__13487;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq13457){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13457));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__7518__auto__ = [];
var len__7511__auto___13492 = arguments.length;
var i__7512__auto___13493 = (0);
while(true){
if((i__7512__auto___13493 < len__7511__auto___13492)){
args__7518__auto__.push((arguments[i__7512__auto___13493]));

var G__13494 = (i__7512__auto___13493 + (1));
i__7512__auto___13493 = G__13494;
continue;
} else {
}
break;
}

var argseq__7519__auto__ = ((((0) < args__7518__auto__.length))?(new cljs.core.IndexedSeq(args__7518__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__7519__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__13489){
var map__13490 = p__13489;
var map__13490__$1 = ((((!((map__13490 == null)))?((((map__13490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13490):map__13490);
var m = map__13490__$1;
var gen_line = cljs.core.get.call(null,map__13490__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq13488){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13488));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__7427__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13497_13499 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13498_13500 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13497_13499,_STAR_print_fn_STAR_13498_13500,sb__7427__auto__){
return (function (x__7428__auto__){
return sb__7427__auto__.append(x__7428__auto__);
});})(_STAR_print_newline_STAR_13497_13499,_STAR_print_fn_STAR_13498_13500,sb__7427__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13498_13500;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13497_13499;
}
return [cljs.core.str(sb__7427__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__7366__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7367__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7368__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7369__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7370__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7370__auto__,method_table__7366__auto__,prefer_table__7367__auto__,method_cache__7368__auto__,cached_hierarchy__7369__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,"(",x,")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__13501 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__13501,(0),null);
var flags = cljs.core.nth.call(null,vec__13501,(1),null);
var pattern = cljs.core.nth.call(null,vec__13501,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__13503){
var map__13504 = p__13503;
var map__13504__$1 = ((((!((map__13504 == null)))?((((map__13504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13504):map__13504);
var arg = map__13504__$1;
var info = cljs.core.get.call(null,map__13504__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__13504__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__13504__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__6453__auto__ = js_module_name;
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__13365__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__13506 = info__$1;
var G__13506__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__13506):G__13506);
return G__13506__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__13507){
var map__13508 = p__13507;
var map__13508__$1 = ((((!((map__13508 == null)))?((((map__13508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13508):map__13508);
var arg = map__13508__$1;
var env = cljs.core.get.call(null,map__13508__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__13508__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__13508__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__13508__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__13510 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__13510__$1 = ((((!((map__13510 == null)))?((((map__13510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13510):map__13510);
var name = cljs.core.get.call(null,map__13510__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__13365__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__13512){
var map__13513 = p__13512;
var map__13513__$1 = ((((!((map__13513 == null)))?((((map__13513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13513):map__13513);
var expr = cljs.core.get.call(null,map__13513__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__13513__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__13513__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13365__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__13515_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__13515_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__13516){
var map__13517 = p__13516;
var map__13517__$1 = ((((!((map__13517 == null)))?((((map__13517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13517):map__13517);
var env = cljs.core.get.call(null,map__13517__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__13517__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__13517__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__13365__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__13519){
var map__13520 = p__13519;
var map__13520__$1 = ((((!((map__13520 == null)))?((((map__13520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13520):map__13520);
var items = cljs.core.get.call(null,map__13520__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__13520__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13365__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__13522){
var map__13523 = p__13522;
var map__13523__$1 = ((((!((map__13523 == null)))?((((map__13523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13523):map__13523);
var items = cljs.core.get.call(null,map__13523__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__13523__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13365__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_13525 = cljs.core.count.call(null,items);
if((cnt_13525 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_13525,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__13526_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__13526_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__13527){
var map__13528 = p__13527;
var map__13528__$1 = ((((!((map__13528 == null)))?((((map__13528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13528):map__13528);
var items = cljs.core.get.call(null,map__13528__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__13528__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13365__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__13530){
var map__13531 = p__13530;
var map__13531__$1 = ((((!((map__13531 == null)))?((((map__13531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13531):map__13531);
var items = cljs.core.get.call(null,map__13531__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__13531__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__13531__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13365__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___13541 = cljs.core.seq.call(null,items);
if(temp__4425__auto___13541){
var items_13542__$1 = temp__4425__auto___13541;
var vec__13533_13543 = items_13542__$1;
var vec__13534_13544 = cljs.core.nth.call(null,vec__13533_13543,(0),null);
var k_13545 = cljs.core.nth.call(null,vec__13534_13544,(0),null);
var v_13546 = cljs.core.nth.call(null,vec__13534_13544,(1),null);
var r_13547 = cljs.core.nthnext.call(null,vec__13533_13543,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_13545),"\": ",v_13546);

var seq__13535_13548 = cljs.core.seq.call(null,r_13547);
var chunk__13536_13549 = null;
var count__13537_13550 = (0);
var i__13538_13551 = (0);
while(true){
if((i__13538_13551 < count__13537_13550)){
var vec__13539_13552 = cljs.core._nth.call(null,chunk__13536_13549,i__13538_13551);
var k_13553__$1 = cljs.core.nth.call(null,vec__13539_13552,(0),null);
var v_13554__$1 = cljs.core.nth.call(null,vec__13539_13552,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_13553__$1),"\": ",v_13554__$1);

var G__13555 = seq__13535_13548;
var G__13556 = chunk__13536_13549;
var G__13557 = count__13537_13550;
var G__13558 = (i__13538_13551 + (1));
seq__13535_13548 = G__13555;
chunk__13536_13549 = G__13556;
count__13537_13550 = G__13557;
i__13538_13551 = G__13558;
continue;
} else {
var temp__4425__auto___13559__$1 = cljs.core.seq.call(null,seq__13535_13548);
if(temp__4425__auto___13559__$1){
var seq__13535_13560__$1 = temp__4425__auto___13559__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13535_13560__$1)){
var c__7256__auto___13561 = cljs.core.chunk_first.call(null,seq__13535_13560__$1);
var G__13562 = cljs.core.chunk_rest.call(null,seq__13535_13560__$1);
var G__13563 = c__7256__auto___13561;
var G__13564 = cljs.core.count.call(null,c__7256__auto___13561);
var G__13565 = (0);
seq__13535_13548 = G__13562;
chunk__13536_13549 = G__13563;
count__13537_13550 = G__13564;
i__13538_13551 = G__13565;
continue;
} else {
var vec__13540_13566 = cljs.core.first.call(null,seq__13535_13560__$1);
var k_13567__$1 = cljs.core.nth.call(null,vec__13540_13566,(0),null);
var v_13568__$1 = cljs.core.nth.call(null,vec__13540_13566,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_13567__$1),"\": ",v_13568__$1);

var G__13569 = cljs.core.next.call(null,seq__13535_13560__$1);
var G__13570 = null;
var G__13571 = (0);
var G__13572 = (0);
seq__13535_13548 = G__13569;
chunk__13536_13549 = G__13570;
count__13537_13550 = G__13571;
i__13538_13551 = G__13572;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"}");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__13573){
var map__13574 = p__13573;
var map__13574__$1 = ((((!((map__13574 == null)))?((((map__13574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13574):map__13574);
var form = cljs.core.get.call(null,map__13574__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__13574__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__13365__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__13576){
var map__13579 = p__13576;
var map__13579__$1 = ((((!((map__13579 == null)))?((((map__13579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13579):map__13579);
var op = cljs.core.get.call(null,map__13579__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__13579__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__6441__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__6441__auto__){
var and__6441__auto____$1 = form;
if(cljs.core.truth_(and__6441__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__6441__auto____$1;
}
} else {
return and__6441__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__13581){
var map__13584 = p__13581;
var map__13584__$1 = ((((!((map__13584 == null)))?((((map__13584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13584):map__13584);
var op = cljs.core.get.call(null,map__13584__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__13584__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__6453__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__13586){
var map__13587 = p__13586;
var map__13587__$1 = ((((!((map__13587 == null)))?((((map__13587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13587):map__13587);
var test = cljs.core.get.call(null,map__13587__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__13587__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__13587__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__13587__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__13587__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__6453__auto__ = unchecked;
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__13589){
var map__13590 = p__13589;
var map__13590__$1 = ((((!((map__13590 == null)))?((((map__13590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13590):map__13590);
var v = cljs.core.get.call(null,map__13590__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__13590__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__13590__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__13590__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__13590__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__13592_13606 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__13593_13607 = null;
var count__13594_13608 = (0);
var i__13595_13609 = (0);
while(true){
if((i__13595_13609 < count__13594_13608)){
var vec__13596_13610 = cljs.core._nth.call(null,chunk__13593_13607,i__13595_13609);
var ts_13611 = cljs.core.nth.call(null,vec__13596_13610,(0),null);
var then_13612 = cljs.core.nth.call(null,vec__13596_13610,(1),null);
var seq__13597_13613 = cljs.core.seq.call(null,ts_13611);
var chunk__13598_13614 = null;
var count__13599_13615 = (0);
var i__13600_13616 = (0);
while(true){
if((i__13600_13616 < count__13599_13615)){
var test_13617 = cljs.core._nth.call(null,chunk__13598_13614,i__13600_13616);
cljs.compiler.emitln.call(null,"case ",test_13617,":");

var G__13618 = seq__13597_13613;
var G__13619 = chunk__13598_13614;
var G__13620 = count__13599_13615;
var G__13621 = (i__13600_13616 + (1));
seq__13597_13613 = G__13618;
chunk__13598_13614 = G__13619;
count__13599_13615 = G__13620;
i__13600_13616 = G__13621;
continue;
} else {
var temp__4425__auto___13622 = cljs.core.seq.call(null,seq__13597_13613);
if(temp__4425__auto___13622){
var seq__13597_13623__$1 = temp__4425__auto___13622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13597_13623__$1)){
var c__7256__auto___13624 = cljs.core.chunk_first.call(null,seq__13597_13623__$1);
var G__13625 = cljs.core.chunk_rest.call(null,seq__13597_13623__$1);
var G__13626 = c__7256__auto___13624;
var G__13627 = cljs.core.count.call(null,c__7256__auto___13624);
var G__13628 = (0);
seq__13597_13613 = G__13625;
chunk__13598_13614 = G__13626;
count__13599_13615 = G__13627;
i__13600_13616 = G__13628;
continue;
} else {
var test_13629 = cljs.core.first.call(null,seq__13597_13623__$1);
cljs.compiler.emitln.call(null,"case ",test_13629,":");

var G__13630 = cljs.core.next.call(null,seq__13597_13623__$1);
var G__13631 = null;
var G__13632 = (0);
var G__13633 = (0);
seq__13597_13613 = G__13630;
chunk__13598_13614 = G__13631;
count__13599_13615 = G__13632;
i__13600_13616 = G__13633;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_13612);
} else {
cljs.compiler.emitln.call(null,then_13612);
}

cljs.compiler.emitln.call(null,"break;");

var G__13634 = seq__13592_13606;
var G__13635 = chunk__13593_13607;
var G__13636 = count__13594_13608;
var G__13637 = (i__13595_13609 + (1));
seq__13592_13606 = G__13634;
chunk__13593_13607 = G__13635;
count__13594_13608 = G__13636;
i__13595_13609 = G__13637;
continue;
} else {
var temp__4425__auto___13638 = cljs.core.seq.call(null,seq__13592_13606);
if(temp__4425__auto___13638){
var seq__13592_13639__$1 = temp__4425__auto___13638;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13592_13639__$1)){
var c__7256__auto___13640 = cljs.core.chunk_first.call(null,seq__13592_13639__$1);
var G__13641 = cljs.core.chunk_rest.call(null,seq__13592_13639__$1);
var G__13642 = c__7256__auto___13640;
var G__13643 = cljs.core.count.call(null,c__7256__auto___13640);
var G__13644 = (0);
seq__13592_13606 = G__13641;
chunk__13593_13607 = G__13642;
count__13594_13608 = G__13643;
i__13595_13609 = G__13644;
continue;
} else {
var vec__13601_13645 = cljs.core.first.call(null,seq__13592_13639__$1);
var ts_13646 = cljs.core.nth.call(null,vec__13601_13645,(0),null);
var then_13647 = cljs.core.nth.call(null,vec__13601_13645,(1),null);
var seq__13602_13648 = cljs.core.seq.call(null,ts_13646);
var chunk__13603_13649 = null;
var count__13604_13650 = (0);
var i__13605_13651 = (0);
while(true){
if((i__13605_13651 < count__13604_13650)){
var test_13652 = cljs.core._nth.call(null,chunk__13603_13649,i__13605_13651);
cljs.compiler.emitln.call(null,"case ",test_13652,":");

var G__13653 = seq__13602_13648;
var G__13654 = chunk__13603_13649;
var G__13655 = count__13604_13650;
var G__13656 = (i__13605_13651 + (1));
seq__13602_13648 = G__13653;
chunk__13603_13649 = G__13654;
count__13604_13650 = G__13655;
i__13605_13651 = G__13656;
continue;
} else {
var temp__4425__auto___13657__$1 = cljs.core.seq.call(null,seq__13602_13648);
if(temp__4425__auto___13657__$1){
var seq__13602_13658__$1 = temp__4425__auto___13657__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13602_13658__$1)){
var c__7256__auto___13659 = cljs.core.chunk_first.call(null,seq__13602_13658__$1);
var G__13660 = cljs.core.chunk_rest.call(null,seq__13602_13658__$1);
var G__13661 = c__7256__auto___13659;
var G__13662 = cljs.core.count.call(null,c__7256__auto___13659);
var G__13663 = (0);
seq__13602_13648 = G__13660;
chunk__13603_13649 = G__13661;
count__13604_13650 = G__13662;
i__13605_13651 = G__13663;
continue;
} else {
var test_13664 = cljs.core.first.call(null,seq__13602_13658__$1);
cljs.compiler.emitln.call(null,"case ",test_13664,":");

var G__13665 = cljs.core.next.call(null,seq__13602_13658__$1);
var G__13666 = null;
var G__13667 = (0);
var G__13668 = (0);
seq__13602_13648 = G__13665;
chunk__13603_13649 = G__13666;
count__13604_13650 = G__13667;
i__13605_13651 = G__13668;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_13647);
} else {
cljs.compiler.emitln.call(null,then_13647);
}

cljs.compiler.emitln.call(null,"break;");

var G__13669 = cljs.core.next.call(null,seq__13592_13639__$1);
var G__13670 = null;
var G__13671 = (0);
var G__13672 = (0);
seq__13592_13606 = G__13669;
chunk__13593_13607 = G__13670;
count__13594_13608 = G__13671;
i__13595_13609 = G__13672;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__13673){
var map__13674 = p__13673;
var map__13674__$1 = ((((!((map__13674 == null)))?((((map__13674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13674):map__13674);
var throw$ = cljs.core.get.call(null,map__13674__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__13674__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__13679 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__13679,(0),null);
var rstr = cljs.core.nth.call(null,vec__13679,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__13679,fstr,rstr,ret_t,axstr){
return (function (p1__13676_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__13676_SHARP_);
});})(idx,vec__13679,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__13680 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
var G__13680__$1 = (cljs.core.truth_(ret_t)?[cljs.core.str(G__13680),cljs.core.str(":"),cljs.core.str(ret_t)].join(''):G__13680);
return G__13680__$1;
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__13681_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__13681_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__13684 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__13684,(0),null);
var ts = cljs.core.nth.call(null,vec__13684,(1),null);
var n = cljs.core.nth.call(null,vec__13684,(2),null);
var xs = cljs.core.nthnext.call(null,vec__13684,(3));
if(cljs.core.truth_((function (){var and__6441__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__6441__auto__){
var and__6441__auto____$1 = ts;
if(cljs.core.truth_(and__6441__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6441__auto____$1;
}
} else {
return and__6441__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__13685 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__13685,(0),null);
var ts = cljs.core.nth.call(null,vec__13685,(1),null);
var xs = cljs.core.nthnext.call(null,vec__13685,(2));
if(cljs.core.truth_((function (){var and__6441__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__6441__auto__){
var and__6441__auto____$1 = ts;
if(cljs.core.truth_(and__6441__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6441__auto____$1;
}
} else {
return and__6441__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args13687 = [];
var len__7511__auto___13714 = arguments.length;
var i__7512__auto___13715 = (0);
while(true){
if((i__7512__auto___13715 < len__7511__auto___13714)){
args13687.push((arguments[i__7512__auto___13715]));

var G__13716 = (i__7512__auto___13715 + (1));
i__7512__auto___13715 = G__13716;
continue;
} else {
}
break;
}

var G__13689 = args13687.length;
switch (G__13689) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13687.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__13705 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__13686_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__13686_SHARP_);
} else {
return p1__13686_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var x = cljs.core.nth.call(null,vec__13705,(0),null);
var ys = cljs.core.nthnext.call(null,vec__13705,(1));
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__13706 = cljs.core.seq.call(null,ys);
var chunk__13707 = null;
var count__13708 = (0);
var i__13709 = (0);
while(true){
if((i__13709 < count__13708)){
var next_line = cljs.core._nth.call(null,chunk__13707,i__13709);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__13718 = seq__13706;
var G__13719 = chunk__13707;
var G__13720 = count__13708;
var G__13721 = (i__13709 + (1));
seq__13706 = G__13718;
chunk__13707 = G__13719;
count__13708 = G__13720;
i__13709 = G__13721;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__13706);
if(temp__4425__auto__){
var seq__13706__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13706__$1)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,seq__13706__$1);
var G__13722 = cljs.core.chunk_rest.call(null,seq__13706__$1);
var G__13723 = c__7256__auto__;
var G__13724 = cljs.core.count.call(null,c__7256__auto__);
var G__13725 = (0);
seq__13706 = G__13722;
chunk__13707 = G__13723;
count__13708 = G__13724;
i__13709 = G__13725;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__13706__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__13726 = cljs.core.next.call(null,seq__13706__$1);
var G__13727 = null;
var G__13728 = (0);
var G__13729 = (0);
seq__13706 = G__13726;
chunk__13707 = G__13727;
count__13708 = G__13728;
i__13709 = G__13729;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__13710_13730 = cljs.core.seq.call(null,docs__$2);
var chunk__13711_13731 = null;
var count__13712_13732 = (0);
var i__13713_13733 = (0);
while(true){
if((i__13713_13733 < count__13712_13732)){
var e_13734 = cljs.core._nth.call(null,chunk__13711_13731,i__13713_13733);
if(cljs.core.truth_(e_13734)){
print_comment_lines.call(null,e_13734);
} else {
}

var G__13735 = seq__13710_13730;
var G__13736 = chunk__13711_13731;
var G__13737 = count__13712_13732;
var G__13738 = (i__13713_13733 + (1));
seq__13710_13730 = G__13735;
chunk__13711_13731 = G__13736;
count__13712_13732 = G__13737;
i__13713_13733 = G__13738;
continue;
} else {
var temp__4425__auto___13739 = cljs.core.seq.call(null,seq__13710_13730);
if(temp__4425__auto___13739){
var seq__13710_13740__$1 = temp__4425__auto___13739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13710_13740__$1)){
var c__7256__auto___13741 = cljs.core.chunk_first.call(null,seq__13710_13740__$1);
var G__13742 = cljs.core.chunk_rest.call(null,seq__13710_13740__$1);
var G__13743 = c__7256__auto___13741;
var G__13744 = cljs.core.count.call(null,c__7256__auto___13741);
var G__13745 = (0);
seq__13710_13730 = G__13742;
chunk__13711_13731 = G__13743;
count__13712_13732 = G__13744;
i__13713_13733 = G__13745;
continue;
} else {
var e_13746 = cljs.core.first.call(null,seq__13710_13740__$1);
if(cljs.core.truth_(e_13746)){
print_comment_lines.call(null,e_13746);
} else {
}

var G__13747 = cljs.core.next.call(null,seq__13710_13740__$1);
var G__13748 = null;
var G__13749 = (0);
var G__13750 = (0);
seq__13710_13730 = G__13747;
chunk__13711_13731 = G__13748;
count__13712_13732 = G__13749;
i__13713_13733 = G__13750;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;
cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__6441__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__13752_SHARP_){
return goog.string.startsWith(p1__13752_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__6441__auto__)){
var and__6441__auto____$1 = opts;
if(cljs.core.truth_(and__6441__auto____$1)){
var and__6441__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__6441__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__6441__auto____$2;
}
} else {
return and__6441__auto____$1;
}
} else {
return and__6441__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__13753){
var map__13754 = p__13753;
var map__13754__$1 = ((((!((map__13754 == null)))?((((map__13754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13754):map__13754);
var name = cljs.core.get.call(null,map__13754__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__13754__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__13754__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__13754__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__13754__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__13754__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__13754__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__13754__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__13754__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__6453__auto__ = init;
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4423__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4423__auto__)){
var define = temp__4423__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__6441__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__6441__auto__)){
return test;
} else {
return and__6441__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__13756){
var map__13773 = p__13756;
var map__13773__$1 = ((((!((map__13773 == null)))?((((map__13773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13773):map__13773);
var name = cljs.core.get.call(null,map__13773__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__13773__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__13773__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__13775_13789 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__13776_13790 = null;
var count__13777_13791 = (0);
var i__13778_13792 = (0);
while(true){
if((i__13778_13792 < count__13777_13791)){
var vec__13779_13793 = cljs.core._nth.call(null,chunk__13776_13790,i__13778_13792);
var i_13794 = cljs.core.nth.call(null,vec__13779_13793,(0),null);
var param_13795 = cljs.core.nth.call(null,vec__13779_13793,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_13795);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__13796 = seq__13775_13789;
var G__13797 = chunk__13776_13790;
var G__13798 = count__13777_13791;
var G__13799 = (i__13778_13792 + (1));
seq__13775_13789 = G__13796;
chunk__13776_13790 = G__13797;
count__13777_13791 = G__13798;
i__13778_13792 = G__13799;
continue;
} else {
var temp__4425__auto___13800 = cljs.core.seq.call(null,seq__13775_13789);
if(temp__4425__auto___13800){
var seq__13775_13801__$1 = temp__4425__auto___13800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13775_13801__$1)){
var c__7256__auto___13802 = cljs.core.chunk_first.call(null,seq__13775_13801__$1);
var G__13803 = cljs.core.chunk_rest.call(null,seq__13775_13801__$1);
var G__13804 = c__7256__auto___13802;
var G__13805 = cljs.core.count.call(null,c__7256__auto___13802);
var G__13806 = (0);
seq__13775_13789 = G__13803;
chunk__13776_13790 = G__13804;
count__13777_13791 = G__13805;
i__13778_13792 = G__13806;
continue;
} else {
var vec__13780_13807 = cljs.core.first.call(null,seq__13775_13801__$1);
var i_13808 = cljs.core.nth.call(null,vec__13780_13807,(0),null);
var param_13809 = cljs.core.nth.call(null,vec__13780_13807,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_13809);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__13810 = cljs.core.next.call(null,seq__13775_13801__$1);
var G__13811 = null;
var G__13812 = (0);
var G__13813 = (0);
seq__13775_13789 = G__13810;
chunk__13776_13790 = G__13811;
count__13777_13791 = G__13812;
i__13778_13792 = G__13813;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__13781_13814 = cljs.core.seq.call(null,params);
var chunk__13782_13815 = null;
var count__13783_13816 = (0);
var i__13784_13817 = (0);
while(true){
if((i__13784_13817 < count__13783_13816)){
var param_13818 = cljs.core._nth.call(null,chunk__13782_13815,i__13784_13817);
cljs.compiler.emit.call(null,param_13818);

if(cljs.core._EQ_.call(null,param_13818,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13819 = seq__13781_13814;
var G__13820 = chunk__13782_13815;
var G__13821 = count__13783_13816;
var G__13822 = (i__13784_13817 + (1));
seq__13781_13814 = G__13819;
chunk__13782_13815 = G__13820;
count__13783_13816 = G__13821;
i__13784_13817 = G__13822;
continue;
} else {
var temp__4425__auto___13823 = cljs.core.seq.call(null,seq__13781_13814);
if(temp__4425__auto___13823){
var seq__13781_13824__$1 = temp__4425__auto___13823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13781_13824__$1)){
var c__7256__auto___13825 = cljs.core.chunk_first.call(null,seq__13781_13824__$1);
var G__13826 = cljs.core.chunk_rest.call(null,seq__13781_13824__$1);
var G__13827 = c__7256__auto___13825;
var G__13828 = cljs.core.count.call(null,c__7256__auto___13825);
var G__13829 = (0);
seq__13781_13814 = G__13826;
chunk__13782_13815 = G__13827;
count__13783_13816 = G__13828;
i__13784_13817 = G__13829;
continue;
} else {
var param_13830 = cljs.core.first.call(null,seq__13781_13824__$1);
cljs.compiler.emit.call(null,param_13830);

if(cljs.core._EQ_.call(null,param_13830,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13831 = cljs.core.next.call(null,seq__13781_13824__$1);
var G__13832 = null;
var G__13833 = (0);
var G__13834 = (0);
seq__13781_13814 = G__13831;
chunk__13782_13815 = G__13832;
count__13783_13816 = G__13833;
i__13784_13817 = G__13834;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__13785_13835 = cljs.core.seq.call(null,params);
var chunk__13786_13836 = null;
var count__13787_13837 = (0);
var i__13788_13838 = (0);
while(true){
if((i__13788_13838 < count__13787_13837)){
var param_13839 = cljs.core._nth.call(null,chunk__13786_13836,i__13788_13838);
cljs.compiler.emit.call(null,param_13839);

if(cljs.core._EQ_.call(null,param_13839,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13840 = seq__13785_13835;
var G__13841 = chunk__13786_13836;
var G__13842 = count__13787_13837;
var G__13843 = (i__13788_13838 + (1));
seq__13785_13835 = G__13840;
chunk__13786_13836 = G__13841;
count__13787_13837 = G__13842;
i__13788_13838 = G__13843;
continue;
} else {
var temp__4425__auto___13844 = cljs.core.seq.call(null,seq__13785_13835);
if(temp__4425__auto___13844){
var seq__13785_13845__$1 = temp__4425__auto___13844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13785_13845__$1)){
var c__7256__auto___13846 = cljs.core.chunk_first.call(null,seq__13785_13845__$1);
var G__13847 = cljs.core.chunk_rest.call(null,seq__13785_13845__$1);
var G__13848 = c__7256__auto___13846;
var G__13849 = cljs.core.count.call(null,c__7256__auto___13846);
var G__13850 = (0);
seq__13785_13835 = G__13847;
chunk__13786_13836 = G__13848;
count__13787_13837 = G__13849;
i__13788_13838 = G__13850;
continue;
} else {
var param_13851 = cljs.core.first.call(null,seq__13785_13845__$1);
cljs.compiler.emit.call(null,param_13851);

if(cljs.core._EQ_.call(null,param_13851,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13852 = cljs.core.next.call(null,seq__13785_13845__$1);
var G__13853 = null;
var G__13854 = (0);
var G__13855 = (0);
seq__13785_13835 = G__13852;
chunk__13786_13836 = G__13853;
count__13787_13837 = G__13854;
i__13788_13838 = G__13855;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__13860 = cljs.core.seq.call(null,params);
var chunk__13861 = null;
var count__13862 = (0);
var i__13863 = (0);
while(true){
if((i__13863 < count__13862)){
var param = cljs.core._nth.call(null,chunk__13861,i__13863);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13864 = seq__13860;
var G__13865 = chunk__13861;
var G__13866 = count__13862;
var G__13867 = (i__13863 + (1));
seq__13860 = G__13864;
chunk__13861 = G__13865;
count__13862 = G__13866;
i__13863 = G__13867;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__13860);
if(temp__4425__auto__){
var seq__13860__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13860__$1)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,seq__13860__$1);
var G__13868 = cljs.core.chunk_rest.call(null,seq__13860__$1);
var G__13869 = c__7256__auto__;
var G__13870 = cljs.core.count.call(null,c__7256__auto__);
var G__13871 = (0);
seq__13860 = G__13868;
chunk__13861 = G__13869;
count__13862 = G__13870;
i__13863 = G__13871;
continue;
} else {
var param = cljs.core.first.call(null,seq__13860__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13872 = cljs.core.next.call(null,seq__13860__$1);
var G__13873 = null;
var G__13874 = (0);
var G__13875 = (0);
seq__13860 = G__13872;
chunk__13861 = G__13873;
count__13862 = G__13874;
i__13863 = G__13875;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__13876){
var map__13879 = p__13876;
var map__13879__$1 = ((((!((map__13879 == null)))?((((map__13879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13879):map__13879);
var type = cljs.core.get.call(null,map__13879__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__13879__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__13879__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__13879__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__13879__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13879__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__13879__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__13879__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__13365__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null)))))].join('')));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__13881){
var map__13892 = p__13881;
var map__13892__$1 = ((((!((map__13892 == null)))?((((map__13892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13892):map__13892);
var f = map__13892__$1;
var type = cljs.core.get.call(null,map__13892__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__13892__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__13892__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__13892__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__13892__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13892__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__13892__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__13892__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__13365__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_13902__$1 = (function (){var or__6453__auto__ = name;
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_13903 = cljs.compiler.munge.call(null,name_13902__$1);
var delegate_name_13904 = [cljs.core.str(mname_13903),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_13904," = function (");

var seq__13894_13905 = cljs.core.seq.call(null,params);
var chunk__13895_13906 = null;
var count__13896_13907 = (0);
var i__13897_13908 = (0);
while(true){
if((i__13897_13908 < count__13896_13907)){
var param_13909 = cljs.core._nth.call(null,chunk__13895_13906,i__13897_13908);
cljs.compiler.emit.call(null,param_13909);

if(cljs.core._EQ_.call(null,param_13909,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13910 = seq__13894_13905;
var G__13911 = chunk__13895_13906;
var G__13912 = count__13896_13907;
var G__13913 = (i__13897_13908 + (1));
seq__13894_13905 = G__13910;
chunk__13895_13906 = G__13911;
count__13896_13907 = G__13912;
i__13897_13908 = G__13913;
continue;
} else {
var temp__4425__auto___13914 = cljs.core.seq.call(null,seq__13894_13905);
if(temp__4425__auto___13914){
var seq__13894_13915__$1 = temp__4425__auto___13914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13894_13915__$1)){
var c__7256__auto___13916 = cljs.core.chunk_first.call(null,seq__13894_13915__$1);
var G__13917 = cljs.core.chunk_rest.call(null,seq__13894_13915__$1);
var G__13918 = c__7256__auto___13916;
var G__13919 = cljs.core.count.call(null,c__7256__auto___13916);
var G__13920 = (0);
seq__13894_13905 = G__13917;
chunk__13895_13906 = G__13918;
count__13896_13907 = G__13919;
i__13897_13908 = G__13920;
continue;
} else {
var param_13921 = cljs.core.first.call(null,seq__13894_13915__$1);
cljs.compiler.emit.call(null,param_13921);

if(cljs.core._EQ_.call(null,param_13921,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13922 = cljs.core.next.call(null,seq__13894_13915__$1);
var G__13923 = null;
var G__13924 = (0);
var G__13925 = (0);
seq__13894_13905 = G__13922;
chunk__13895_13906 = G__13923;
count__13896_13907 = G__13924;
i__13897_13908 = G__13925;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_13903," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_13926 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_13926,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_13904,".call(this,");

var seq__13898_13927 = cljs.core.seq.call(null,params);
var chunk__13899_13928 = null;
var count__13900_13929 = (0);
var i__13901_13930 = (0);
while(true){
if((i__13901_13930 < count__13900_13929)){
var param_13931 = cljs.core._nth.call(null,chunk__13899_13928,i__13901_13930);
cljs.compiler.emit.call(null,param_13931);

if(cljs.core._EQ_.call(null,param_13931,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13932 = seq__13898_13927;
var G__13933 = chunk__13899_13928;
var G__13934 = count__13900_13929;
var G__13935 = (i__13901_13930 + (1));
seq__13898_13927 = G__13932;
chunk__13899_13928 = G__13933;
count__13900_13929 = G__13934;
i__13901_13930 = G__13935;
continue;
} else {
var temp__4425__auto___13936 = cljs.core.seq.call(null,seq__13898_13927);
if(temp__4425__auto___13936){
var seq__13898_13937__$1 = temp__4425__auto___13936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13898_13937__$1)){
var c__7256__auto___13938 = cljs.core.chunk_first.call(null,seq__13898_13937__$1);
var G__13939 = cljs.core.chunk_rest.call(null,seq__13898_13937__$1);
var G__13940 = c__7256__auto___13938;
var G__13941 = cljs.core.count.call(null,c__7256__auto___13938);
var G__13942 = (0);
seq__13898_13927 = G__13939;
chunk__13899_13928 = G__13940;
count__13900_13929 = G__13941;
i__13901_13930 = G__13942;
continue;
} else {
var param_13943 = cljs.core.first.call(null,seq__13898_13937__$1);
cljs.compiler.emit.call(null,param_13943);

if(cljs.core._EQ_.call(null,param_13943,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13944 = cljs.core.next.call(null,seq__13898_13937__$1);
var G__13945 = null;
var G__13946 = (0);
var G__13947 = (0);
seq__13898_13927 = G__13944;
chunk__13899_13928 = G__13945;
count__13900_13929 = G__13946;
i__13901_13930 = G__13947;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_13903,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_13903,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_13902__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_13903,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_13904,";");

cljs.compiler.emitln.call(null,"return ",mname_13903,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__13951){
var map__13952 = p__13951;
var map__13952__$1 = ((((!((map__13952 == null)))?((((map__13952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13952):map__13952);
var name = cljs.core.get.call(null,map__13952__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__13952__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__13952__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__13952__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__13952__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__13952__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__13952__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__13952,map__13952__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13948_SHARP_){
var and__6441__auto__ = p1__13948_SHARP_;
if(cljs.core.truth_(and__6441__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__13948_SHARP_));
} else {
return and__6441__auto__;
}
});})(map__13952,map__13952__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_13973__$1 = (function (){var or__6453__auto__ = name;
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_13974 = cljs.compiler.munge.call(null,name_13973__$1);
var maxparams_13975 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_13976 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_13973__$1,mname_13974,maxparams_13975,loop_locals,map__13952,map__13952__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_13974),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_13973__$1,mname_13974,maxparams_13975,loop_locals,map__13952,map__13952__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_13977 = cljs.core.sort_by.call(null,((function (name_13973__$1,mname_13974,maxparams_13975,mmap_13976,loop_locals,map__13952,map__13952__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13949_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__13949_SHARP_)));
});})(name_13973__$1,mname_13974,maxparams_13975,mmap_13976,loop_locals,map__13952,map__13952__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_13976));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_13974," = null;");

var seq__13954_13978 = cljs.core.seq.call(null,ms_13977);
var chunk__13955_13979 = null;
var count__13956_13980 = (0);
var i__13957_13981 = (0);
while(true){
if((i__13957_13981 < count__13956_13980)){
var vec__13958_13982 = cljs.core._nth.call(null,chunk__13955_13979,i__13957_13981);
var n_13983 = cljs.core.nth.call(null,vec__13958_13982,(0),null);
var meth_13984 = cljs.core.nth.call(null,vec__13958_13982,(1),null);
cljs.compiler.emits.call(null,"var ",n_13983," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13984))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_13984);
} else {
cljs.compiler.emit_fn_method.call(null,meth_13984);
}

cljs.compiler.emitln.call(null,";");

var G__13985 = seq__13954_13978;
var G__13986 = chunk__13955_13979;
var G__13987 = count__13956_13980;
var G__13988 = (i__13957_13981 + (1));
seq__13954_13978 = G__13985;
chunk__13955_13979 = G__13986;
count__13956_13980 = G__13987;
i__13957_13981 = G__13988;
continue;
} else {
var temp__4425__auto___13989 = cljs.core.seq.call(null,seq__13954_13978);
if(temp__4425__auto___13989){
var seq__13954_13990__$1 = temp__4425__auto___13989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13954_13990__$1)){
var c__7256__auto___13991 = cljs.core.chunk_first.call(null,seq__13954_13990__$1);
var G__13992 = cljs.core.chunk_rest.call(null,seq__13954_13990__$1);
var G__13993 = c__7256__auto___13991;
var G__13994 = cljs.core.count.call(null,c__7256__auto___13991);
var G__13995 = (0);
seq__13954_13978 = G__13992;
chunk__13955_13979 = G__13993;
count__13956_13980 = G__13994;
i__13957_13981 = G__13995;
continue;
} else {
var vec__13959_13996 = cljs.core.first.call(null,seq__13954_13990__$1);
var n_13997 = cljs.core.nth.call(null,vec__13959_13996,(0),null);
var meth_13998 = cljs.core.nth.call(null,vec__13959_13996,(1),null);
cljs.compiler.emits.call(null,"var ",n_13997," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13998))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_13998);
} else {
cljs.compiler.emit_fn_method.call(null,meth_13998);
}

cljs.compiler.emitln.call(null,";");

var G__13999 = cljs.core.next.call(null,seq__13954_13990__$1);
var G__14000 = null;
var G__14001 = (0);
var G__14002 = (0);
seq__13954_13978 = G__13999;
chunk__13955_13979 = G__14000;
count__13956_13980 = G__14001;
i__13957_13981 = G__14002;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_13974," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_13975),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_13975)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_13975));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__13960_14003 = cljs.core.seq.call(null,ms_13977);
var chunk__13961_14004 = null;
var count__13962_14005 = (0);
var i__13963_14006 = (0);
while(true){
if((i__13963_14006 < count__13962_14005)){
var vec__13964_14007 = cljs.core._nth.call(null,chunk__13961_14004,i__13963_14006);
var n_14008 = cljs.core.nth.call(null,vec__13964_14007,(0),null);
var meth_14009 = cljs.core.nth.call(null,vec__13964_14007,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14009))){
cljs.compiler.emitln.call(null,"default:");

var restarg_14010 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_14010," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_14011 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_14010," = new cljs.core.IndexedSeq(",a_14011,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_14008,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_13975)),(((cljs.core.count.call(null,maxparams_13975) > (1)))?", ":null),restarg_14010,");");
} else {
var pcnt_14012 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14009));
cljs.compiler.emitln.call(null,"case ",pcnt_14012,":");

cljs.compiler.emitln.call(null,"return ",n_14008,".call(this",(((pcnt_14012 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_14012,maxparams_13975))),",")),");");
}

var G__14013 = seq__13960_14003;
var G__14014 = chunk__13961_14004;
var G__14015 = count__13962_14005;
var G__14016 = (i__13963_14006 + (1));
seq__13960_14003 = G__14013;
chunk__13961_14004 = G__14014;
count__13962_14005 = G__14015;
i__13963_14006 = G__14016;
continue;
} else {
var temp__4425__auto___14017 = cljs.core.seq.call(null,seq__13960_14003);
if(temp__4425__auto___14017){
var seq__13960_14018__$1 = temp__4425__auto___14017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13960_14018__$1)){
var c__7256__auto___14019 = cljs.core.chunk_first.call(null,seq__13960_14018__$1);
var G__14020 = cljs.core.chunk_rest.call(null,seq__13960_14018__$1);
var G__14021 = c__7256__auto___14019;
var G__14022 = cljs.core.count.call(null,c__7256__auto___14019);
var G__14023 = (0);
seq__13960_14003 = G__14020;
chunk__13961_14004 = G__14021;
count__13962_14005 = G__14022;
i__13963_14006 = G__14023;
continue;
} else {
var vec__13965_14024 = cljs.core.first.call(null,seq__13960_14018__$1);
var n_14025 = cljs.core.nth.call(null,vec__13965_14024,(0),null);
var meth_14026 = cljs.core.nth.call(null,vec__13965_14024,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14026))){
cljs.compiler.emitln.call(null,"default:");

var restarg_14027 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_14027," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_14028 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_14027," = new cljs.core.IndexedSeq(",a_14028,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_14025,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_13975)),(((cljs.core.count.call(null,maxparams_13975) > (1)))?", ":null),restarg_14027,");");
} else {
var pcnt_14029 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14026));
cljs.compiler.emitln.call(null,"case ",pcnt_14029,":");

cljs.compiler.emitln.call(null,"return ",n_14025,".call(this",(((pcnt_14029 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_14029,maxparams_13975))),",")),");");
}

var G__14030 = cljs.core.next.call(null,seq__13960_14018__$1);
var G__14031 = null;
var G__14032 = (0);
var G__14033 = (0);
seq__13960_14003 = G__14030;
chunk__13961_14004 = G__14031;
count__13962_14005 = G__14032;
i__13963_14006 = G__14033;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_13974,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_13974,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_13973__$1,mname_13974,maxparams_13975,mmap_13976,ms_13977,loop_locals,map__13952,map__13952__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13950_SHARP_){
var vec__13966 = p1__13950_SHARP_;
var n = cljs.core.nth.call(null,vec__13966,(0),null);
var m = cljs.core.nth.call(null,vec__13966,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_13973__$1,mname_13974,maxparams_13975,mmap_13976,ms_13977,loop_locals,map__13952,map__13952__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_13977),".cljs$lang$applyTo;");
} else {
}

var seq__13967_14034 = cljs.core.seq.call(null,ms_13977);
var chunk__13968_14035 = null;
var count__13969_14036 = (0);
var i__13970_14037 = (0);
while(true){
if((i__13970_14037 < count__13969_14036)){
var vec__13971_14038 = cljs.core._nth.call(null,chunk__13968_14035,i__13970_14037);
var n_14039 = cljs.core.nth.call(null,vec__13971_14038,(0),null);
var meth_14040 = cljs.core.nth.call(null,vec__13971_14038,(1),null);
var c_14041 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14040));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14040))){
cljs.compiler.emitln.call(null,mname_13974,".cljs$core$IFn$_invoke$arity$variadic = ",n_14039,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_13974,".cljs$core$IFn$_invoke$arity$",c_14041," = ",n_14039,";");
}

var G__14042 = seq__13967_14034;
var G__14043 = chunk__13968_14035;
var G__14044 = count__13969_14036;
var G__14045 = (i__13970_14037 + (1));
seq__13967_14034 = G__14042;
chunk__13968_14035 = G__14043;
count__13969_14036 = G__14044;
i__13970_14037 = G__14045;
continue;
} else {
var temp__4425__auto___14046 = cljs.core.seq.call(null,seq__13967_14034);
if(temp__4425__auto___14046){
var seq__13967_14047__$1 = temp__4425__auto___14046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13967_14047__$1)){
var c__7256__auto___14048 = cljs.core.chunk_first.call(null,seq__13967_14047__$1);
var G__14049 = cljs.core.chunk_rest.call(null,seq__13967_14047__$1);
var G__14050 = c__7256__auto___14048;
var G__14051 = cljs.core.count.call(null,c__7256__auto___14048);
var G__14052 = (0);
seq__13967_14034 = G__14049;
chunk__13968_14035 = G__14050;
count__13969_14036 = G__14051;
i__13970_14037 = G__14052;
continue;
} else {
var vec__13972_14053 = cljs.core.first.call(null,seq__13967_14047__$1);
var n_14054 = cljs.core.nth.call(null,vec__13972_14053,(0),null);
var meth_14055 = cljs.core.nth.call(null,vec__13972_14053,(1),null);
var c_14056 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14055));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14055))){
cljs.compiler.emitln.call(null,mname_13974,".cljs$core$IFn$_invoke$arity$variadic = ",n_14054,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_13974,".cljs$core$IFn$_invoke$arity$",c_14056," = ",n_14054,";");
}

var G__14057 = cljs.core.next.call(null,seq__13967_14047__$1);
var G__14058 = null;
var G__14059 = (0);
var G__14060 = (0);
seq__13967_14034 = G__14057;
chunk__13968_14035 = G__14058;
count__13969_14036 = G__14059;
i__13970_14037 = G__14060;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_13974,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__14061){
var map__14062 = p__14061;
var map__14062__$1 = ((((!((map__14062 == null)))?((((map__14062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14062):map__14062);
var statements = cljs.core.get.call(null,map__14062__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__14062__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__14062__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__6441__auto__ = statements;
if(cljs.core.truth_(and__6441__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__6441__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__14064_14068 = cljs.core.seq.call(null,statements);
var chunk__14065_14069 = null;
var count__14066_14070 = (0);
var i__14067_14071 = (0);
while(true){
if((i__14067_14071 < count__14066_14070)){
var s_14072 = cljs.core._nth.call(null,chunk__14065_14069,i__14067_14071);
cljs.compiler.emitln.call(null,s_14072);

var G__14073 = seq__14064_14068;
var G__14074 = chunk__14065_14069;
var G__14075 = count__14066_14070;
var G__14076 = (i__14067_14071 + (1));
seq__14064_14068 = G__14073;
chunk__14065_14069 = G__14074;
count__14066_14070 = G__14075;
i__14067_14071 = G__14076;
continue;
} else {
var temp__4425__auto___14077 = cljs.core.seq.call(null,seq__14064_14068);
if(temp__4425__auto___14077){
var seq__14064_14078__$1 = temp__4425__auto___14077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14064_14078__$1)){
var c__7256__auto___14079 = cljs.core.chunk_first.call(null,seq__14064_14078__$1);
var G__14080 = cljs.core.chunk_rest.call(null,seq__14064_14078__$1);
var G__14081 = c__7256__auto___14079;
var G__14082 = cljs.core.count.call(null,c__7256__auto___14079);
var G__14083 = (0);
seq__14064_14068 = G__14080;
chunk__14065_14069 = G__14081;
count__14066_14070 = G__14082;
i__14067_14071 = G__14083;
continue;
} else {
var s_14084 = cljs.core.first.call(null,seq__14064_14078__$1);
cljs.compiler.emitln.call(null,s_14084);

var G__14085 = cljs.core.next.call(null,seq__14064_14078__$1);
var G__14086 = null;
var G__14087 = (0);
var G__14088 = (0);
seq__14064_14068 = G__14085;
chunk__14065_14069 = G__14086;
count__14066_14070 = G__14087;
i__14067_14071 = G__14088;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__6441__auto__ = statements;
if(cljs.core.truth_(and__6441__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__6441__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__14089){
var map__14090 = p__14089;
var map__14090__$1 = ((((!((map__14090 == null)))?((((map__14090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14090):map__14090);
var env = cljs.core.get.call(null,map__14090__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__14090__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__14090__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__14090__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__14090__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__6453__auto__ = name;
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.list(new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"finally","finally",-1065347064,null)))))].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__14092,is_loop){
var map__14104 = p__14092;
var map__14104__$1 = ((((!((map__14104 == null)))?((((map__14104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14104):map__14104);
var bindings = cljs.core.get.call(null,map__14104__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__14104__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__14104__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_14106_14115 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_14106_14115,context,map__14104,map__14104__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_14106_14115,context,map__14104,map__14104__$1,bindings,expr,env))
,bindings):null));

try{var seq__14107_14116 = cljs.core.seq.call(null,bindings);
var chunk__14108_14117 = null;
var count__14109_14118 = (0);
var i__14110_14119 = (0);
while(true){
if((i__14110_14119 < count__14109_14118)){
var map__14111_14120 = cljs.core._nth.call(null,chunk__14108_14117,i__14110_14119);
var map__14111_14121__$1 = ((((!((map__14111_14120 == null)))?((((map__14111_14120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14111_14120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14111_14120):map__14111_14120);
var binding_14122 = map__14111_14121__$1;
var init_14123 = cljs.core.get.call(null,map__14111_14121__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_14122);

cljs.compiler.emitln.call(null," = ",init_14123,";");

var G__14124 = seq__14107_14116;
var G__14125 = chunk__14108_14117;
var G__14126 = count__14109_14118;
var G__14127 = (i__14110_14119 + (1));
seq__14107_14116 = G__14124;
chunk__14108_14117 = G__14125;
count__14109_14118 = G__14126;
i__14110_14119 = G__14127;
continue;
} else {
var temp__4425__auto___14128 = cljs.core.seq.call(null,seq__14107_14116);
if(temp__4425__auto___14128){
var seq__14107_14129__$1 = temp__4425__auto___14128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14107_14129__$1)){
var c__7256__auto___14130 = cljs.core.chunk_first.call(null,seq__14107_14129__$1);
var G__14131 = cljs.core.chunk_rest.call(null,seq__14107_14129__$1);
var G__14132 = c__7256__auto___14130;
var G__14133 = cljs.core.count.call(null,c__7256__auto___14130);
var G__14134 = (0);
seq__14107_14116 = G__14131;
chunk__14108_14117 = G__14132;
count__14109_14118 = G__14133;
i__14110_14119 = G__14134;
continue;
} else {
var map__14113_14135 = cljs.core.first.call(null,seq__14107_14129__$1);
var map__14113_14136__$1 = ((((!((map__14113_14135 == null)))?((((map__14113_14135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14113_14135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14113_14135):map__14113_14135);
var binding_14137 = map__14113_14136__$1;
var init_14138 = cljs.core.get.call(null,map__14113_14136__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_14137);

cljs.compiler.emitln.call(null," = ",init_14138,";");

var G__14139 = cljs.core.next.call(null,seq__14107_14129__$1);
var G__14140 = null;
var G__14141 = (0);
var G__14142 = (0);
seq__14107_14116 = G__14139;
chunk__14108_14117 = G__14140;
count__14109_14118 = G__14141;
i__14110_14119 = G__14142;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_14106_14115;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__14143){
var map__14144 = p__14143;
var map__14144__$1 = ((((!((map__14144 == null)))?((((map__14144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14144):map__14144);
var frame = cljs.core.get.call(null,map__14144__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__14144__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__14144__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__7356__auto___14146 = cljs.core.count.call(null,exprs);
var i_14147 = (0);
while(true){
if((i_14147 < n__7356__auto___14146)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_14147)," = ",exprs.call(null,i_14147),";");

var G__14148 = (i_14147 + (1));
i_14147 = G__14148;
continue;
} else {
}
break;
}

var n__7356__auto___14149 = cljs.core.count.call(null,exprs);
var i_14150 = (0);
while(true){
if((i_14150 < n__7356__auto___14149)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_14150))," = ",temps.call(null,i_14150),";");

var G__14151 = (i_14150 + (1));
i_14150 = G__14151;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__14152){
var map__14153 = p__14152;
var map__14153__$1 = ((((!((map__14153 == null)))?((((map__14153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14153):map__14153);
var bindings = cljs.core.get.call(null,map__14153__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__14153__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__14153__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__14155_14163 = cljs.core.seq.call(null,bindings);
var chunk__14156_14164 = null;
var count__14157_14165 = (0);
var i__14158_14166 = (0);
while(true){
if((i__14158_14166 < count__14157_14165)){
var map__14159_14167 = cljs.core._nth.call(null,chunk__14156_14164,i__14158_14166);
var map__14159_14168__$1 = ((((!((map__14159_14167 == null)))?((((map__14159_14167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14159_14167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14159_14167):map__14159_14167);
var binding_14169 = map__14159_14168__$1;
var init_14170 = cljs.core.get.call(null,map__14159_14168__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_14169)," = ",init_14170,";");

var G__14171 = seq__14155_14163;
var G__14172 = chunk__14156_14164;
var G__14173 = count__14157_14165;
var G__14174 = (i__14158_14166 + (1));
seq__14155_14163 = G__14171;
chunk__14156_14164 = G__14172;
count__14157_14165 = G__14173;
i__14158_14166 = G__14174;
continue;
} else {
var temp__4425__auto___14175 = cljs.core.seq.call(null,seq__14155_14163);
if(temp__4425__auto___14175){
var seq__14155_14176__$1 = temp__4425__auto___14175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14155_14176__$1)){
var c__7256__auto___14177 = cljs.core.chunk_first.call(null,seq__14155_14176__$1);
var G__14178 = cljs.core.chunk_rest.call(null,seq__14155_14176__$1);
var G__14179 = c__7256__auto___14177;
var G__14180 = cljs.core.count.call(null,c__7256__auto___14177);
var G__14181 = (0);
seq__14155_14163 = G__14178;
chunk__14156_14164 = G__14179;
count__14157_14165 = G__14180;
i__14158_14166 = G__14181;
continue;
} else {
var map__14161_14182 = cljs.core.first.call(null,seq__14155_14176__$1);
var map__14161_14183__$1 = ((((!((map__14161_14182 == null)))?((((map__14161_14182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14161_14182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14161_14182):map__14161_14182);
var binding_14184 = map__14161_14183__$1;
var init_14185 = cljs.core.get.call(null,map__14161_14183__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_14184)," = ",init_14185,";");

var G__14186 = cljs.core.next.call(null,seq__14155_14176__$1);
var G__14187 = null;
var G__14188 = (0);
var G__14189 = (0);
seq__14155_14163 = G__14186;
chunk__14156_14164 = G__14187;
count__14157_14165 = G__14188;
i__14158_14166 = G__14189;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__14192){
var map__14193 = p__14192;
var map__14193__$1 = ((((!((map__14193 == null)))?((((map__14193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14193):map__14193);
var expr = map__14193__$1;
var f = cljs.core.get.call(null,map__14193__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__14193__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__14193__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__6441__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6441__auto__)){
var and__6441__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__6441__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__6441__auto____$1;
}
} else {
return and__6441__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__6441__auto__ = protocol;
if(cljs.core.truth_(and__6441__auto__)){
var and__6441__auto____$1 = tag;
if(cljs.core.truth_(and__6441__auto____$1)){
var or__6453__auto__ = (function (){var and__6441__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6441__auto____$2)){
var and__6441__auto____$3 = protocol;
if(cljs.core.truth_(and__6441__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__6441__auto____$3;
}
} else {
return and__6441__auto____$2;
}
})();
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
var and__6441__auto____$2 = (function (){var or__6453__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__6453__auto____$1)){
return or__6453__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__6441__auto____$2)){
var or__6453__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__6453__auto____$1){
return or__6453__auto____$1;
} else {
var and__6441__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__6441__auto____$3){
var and__6441__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__6441__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__6441__auto____$4;
}
} else {
return and__6441__auto____$3;
}
}
} else {
return and__6441__auto____$2;
}
}
} else {
return and__6441__auto____$1;
}
} else {
return and__6441__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__6453__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__6453__auto__){
return or__6453__auto__;
} else {
var temp__4425__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4425__auto__)){
var ns_str = temp__4425__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__14195 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__6441__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__6441__auto__)){
return (arity > mfa);
} else {
return and__6441__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14193,map__14193__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14193,map__14193__$1,expr,f,args,env){
return (function (p1__14190_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__14190_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14193,map__14193__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14193,map__14193__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14193,map__14193__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14193,map__14193__$1,expr,f,args,env){
return (function (p1__14191_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__14191_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14193,map__14193__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14193,map__14193__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__14195,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__14195,(1),null);
var env__13365__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_14196 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_14196,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_14197 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_14197,args)),(((mfa_14197 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_14197,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__6453__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
var or__6453__auto____$1 = js_QMARK_;
if(or__6453__auto____$1){
return or__6453__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__6441__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6441__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__6441__auto__;
}
})())){
var fprop_14198 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_14198," ? ",f__$1,fprop_14198,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__14199){
var map__14200 = p__14199;
var map__14200__$1 = ((((!((map__14200 == null)))?((((map__14200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14200):map__14200);
var ctor = cljs.core.get.call(null,map__14200__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__14200__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__14200__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13365__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__14202){
var map__14203 = p__14202;
var map__14203__$1 = ((((!((map__14203 == null)))?((((map__14203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14203):map__14203);
var target = cljs.core.get.call(null,map__14203__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__14203__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__14203__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13365__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__14209_14213 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__14210_14214 = null;
var count__14211_14215 = (0);
var i__14212_14216 = (0);
while(true){
if((i__14212_14216 < count__14211_14215)){
var lib_14217 = cljs.core._nth.call(null,chunk__14210_14214,i__14212_14216);
if(cljs.core.truth_((function (){var or__6453__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14217),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14217),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__6453__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14217),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14217),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14217),"');");

}
}

var G__14218 = seq__14209_14213;
var G__14219 = chunk__14210_14214;
var G__14220 = count__14211_14215;
var G__14221 = (i__14212_14216 + (1));
seq__14209_14213 = G__14218;
chunk__14210_14214 = G__14219;
count__14211_14215 = G__14220;
i__14212_14216 = G__14221;
continue;
} else {
var temp__4425__auto___14222 = cljs.core.seq.call(null,seq__14209_14213);
if(temp__4425__auto___14222){
var seq__14209_14223__$1 = temp__4425__auto___14222;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14209_14223__$1)){
var c__7256__auto___14224 = cljs.core.chunk_first.call(null,seq__14209_14223__$1);
var G__14225 = cljs.core.chunk_rest.call(null,seq__14209_14223__$1);
var G__14226 = c__7256__auto___14224;
var G__14227 = cljs.core.count.call(null,c__7256__auto___14224);
var G__14228 = (0);
seq__14209_14213 = G__14225;
chunk__14210_14214 = G__14226;
count__14211_14215 = G__14227;
i__14212_14216 = G__14228;
continue;
} else {
var lib_14229 = cljs.core.first.call(null,seq__14209_14223__$1);
if(cljs.core.truth_((function (){var or__6453__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14229),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14229),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__6453__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14229),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14229),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14229),"');");

}
}

var G__14230 = cljs.core.next.call(null,seq__14209_14223__$1);
var G__14231 = null;
var G__14232 = (0);
var G__14233 = (0);
seq__14209_14213 = G__14230;
chunk__14210_14214 = G__14231;
count__14211_14215 = G__14232;
i__14212_14216 = G__14233;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__14234){
var map__14235 = p__14234;
var map__14235__$1 = ((((!((map__14235 == null)))?((((map__14235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14235):map__14235);
var name = cljs.core.get.call(null,map__14235__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__14235__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__14235__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__14235__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__14235__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__14235__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__14237){
var map__14238 = p__14237;
var map__14238__$1 = ((((!((map__14238 == null)))?((((map__14238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14238):map__14238);
var t = cljs.core.get.call(null,map__14238__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__14238__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__14238__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__14238__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__14238__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__14240_14254 = cljs.core.seq.call(null,protocols);
var chunk__14241_14255 = null;
var count__14242_14256 = (0);
var i__14243_14257 = (0);
while(true){
if((i__14243_14257 < count__14242_14256)){
var protocol_14258 = cljs.core._nth.call(null,chunk__14241_14255,i__14243_14257);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_14258)].join('')),"}");

var G__14259 = seq__14240_14254;
var G__14260 = chunk__14241_14255;
var G__14261 = count__14242_14256;
var G__14262 = (i__14243_14257 + (1));
seq__14240_14254 = G__14259;
chunk__14241_14255 = G__14260;
count__14242_14256 = G__14261;
i__14243_14257 = G__14262;
continue;
} else {
var temp__4425__auto___14263 = cljs.core.seq.call(null,seq__14240_14254);
if(temp__4425__auto___14263){
var seq__14240_14264__$1 = temp__4425__auto___14263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14240_14264__$1)){
var c__7256__auto___14265 = cljs.core.chunk_first.call(null,seq__14240_14264__$1);
var G__14266 = cljs.core.chunk_rest.call(null,seq__14240_14264__$1);
var G__14267 = c__7256__auto___14265;
var G__14268 = cljs.core.count.call(null,c__7256__auto___14265);
var G__14269 = (0);
seq__14240_14254 = G__14266;
chunk__14241_14255 = G__14267;
count__14242_14256 = G__14268;
i__14243_14257 = G__14269;
continue;
} else {
var protocol_14270 = cljs.core.first.call(null,seq__14240_14264__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_14270)].join('')),"}");

var G__14271 = cljs.core.next.call(null,seq__14240_14264__$1);
var G__14272 = null;
var G__14273 = (0);
var G__14274 = (0);
seq__14240_14254 = G__14271;
chunk__14241_14255 = G__14272;
count__14242_14256 = G__14273;
i__14243_14257 = G__14274;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__14244_14275 = cljs.core.seq.call(null,fields__$1);
var chunk__14245_14276 = null;
var count__14246_14277 = (0);
var i__14247_14278 = (0);
while(true){
if((i__14247_14278 < count__14246_14277)){
var fld_14279 = cljs.core._nth.call(null,chunk__14245_14276,i__14247_14278);
cljs.compiler.emitln.call(null,"this.",fld_14279," = ",fld_14279,";");

var G__14280 = seq__14244_14275;
var G__14281 = chunk__14245_14276;
var G__14282 = count__14246_14277;
var G__14283 = (i__14247_14278 + (1));
seq__14244_14275 = G__14280;
chunk__14245_14276 = G__14281;
count__14246_14277 = G__14282;
i__14247_14278 = G__14283;
continue;
} else {
var temp__4425__auto___14284 = cljs.core.seq.call(null,seq__14244_14275);
if(temp__4425__auto___14284){
var seq__14244_14285__$1 = temp__4425__auto___14284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14244_14285__$1)){
var c__7256__auto___14286 = cljs.core.chunk_first.call(null,seq__14244_14285__$1);
var G__14287 = cljs.core.chunk_rest.call(null,seq__14244_14285__$1);
var G__14288 = c__7256__auto___14286;
var G__14289 = cljs.core.count.call(null,c__7256__auto___14286);
var G__14290 = (0);
seq__14244_14275 = G__14287;
chunk__14245_14276 = G__14288;
count__14246_14277 = G__14289;
i__14247_14278 = G__14290;
continue;
} else {
var fld_14291 = cljs.core.first.call(null,seq__14244_14285__$1);
cljs.compiler.emitln.call(null,"this.",fld_14291," = ",fld_14291,";");

var G__14292 = cljs.core.next.call(null,seq__14244_14285__$1);
var G__14293 = null;
var G__14294 = (0);
var G__14295 = (0);
seq__14244_14275 = G__14292;
chunk__14245_14276 = G__14293;
count__14246_14277 = G__14294;
i__14247_14278 = G__14295;
continue;
}
} else {
}
}
break;
}

var seq__14248_14296 = cljs.core.seq.call(null,pmasks);
var chunk__14249_14297 = null;
var count__14250_14298 = (0);
var i__14251_14299 = (0);
while(true){
if((i__14251_14299 < count__14250_14298)){
var vec__14252_14300 = cljs.core._nth.call(null,chunk__14249_14297,i__14251_14299);
var pno_14301 = cljs.core.nth.call(null,vec__14252_14300,(0),null);
var pmask_14302 = cljs.core.nth.call(null,vec__14252_14300,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_14301,"$ = ",pmask_14302,";");

var G__14303 = seq__14248_14296;
var G__14304 = chunk__14249_14297;
var G__14305 = count__14250_14298;
var G__14306 = (i__14251_14299 + (1));
seq__14248_14296 = G__14303;
chunk__14249_14297 = G__14304;
count__14250_14298 = G__14305;
i__14251_14299 = G__14306;
continue;
} else {
var temp__4425__auto___14307 = cljs.core.seq.call(null,seq__14248_14296);
if(temp__4425__auto___14307){
var seq__14248_14308__$1 = temp__4425__auto___14307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14248_14308__$1)){
var c__7256__auto___14309 = cljs.core.chunk_first.call(null,seq__14248_14308__$1);
var G__14310 = cljs.core.chunk_rest.call(null,seq__14248_14308__$1);
var G__14311 = c__7256__auto___14309;
var G__14312 = cljs.core.count.call(null,c__7256__auto___14309);
var G__14313 = (0);
seq__14248_14296 = G__14310;
chunk__14249_14297 = G__14311;
count__14250_14298 = G__14312;
i__14251_14299 = G__14313;
continue;
} else {
var vec__14253_14314 = cljs.core.first.call(null,seq__14248_14308__$1);
var pno_14315 = cljs.core.nth.call(null,vec__14253_14314,(0),null);
var pmask_14316 = cljs.core.nth.call(null,vec__14253_14314,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_14315,"$ = ",pmask_14316,";");

var G__14317 = cljs.core.next.call(null,seq__14248_14308__$1);
var G__14318 = null;
var G__14319 = (0);
var G__14320 = (0);
seq__14248_14296 = G__14317;
chunk__14249_14297 = G__14318;
count__14250_14298 = G__14319;
i__14251_14299 = G__14320;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__14321){
var map__14322 = p__14321;
var map__14322__$1 = ((((!((map__14322 == null)))?((((map__14322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14322):map__14322);
var t = cljs.core.get.call(null,map__14322__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__14322__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__14322__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__14322__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__14322__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__14324_14338 = cljs.core.seq.call(null,protocols);
var chunk__14325_14339 = null;
var count__14326_14340 = (0);
var i__14327_14341 = (0);
while(true){
if((i__14327_14341 < count__14326_14340)){
var protocol_14342 = cljs.core._nth.call(null,chunk__14325_14339,i__14327_14341);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_14342)].join('')),"}");

var G__14343 = seq__14324_14338;
var G__14344 = chunk__14325_14339;
var G__14345 = count__14326_14340;
var G__14346 = (i__14327_14341 + (1));
seq__14324_14338 = G__14343;
chunk__14325_14339 = G__14344;
count__14326_14340 = G__14345;
i__14327_14341 = G__14346;
continue;
} else {
var temp__4425__auto___14347 = cljs.core.seq.call(null,seq__14324_14338);
if(temp__4425__auto___14347){
var seq__14324_14348__$1 = temp__4425__auto___14347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14324_14348__$1)){
var c__7256__auto___14349 = cljs.core.chunk_first.call(null,seq__14324_14348__$1);
var G__14350 = cljs.core.chunk_rest.call(null,seq__14324_14348__$1);
var G__14351 = c__7256__auto___14349;
var G__14352 = cljs.core.count.call(null,c__7256__auto___14349);
var G__14353 = (0);
seq__14324_14338 = G__14350;
chunk__14325_14339 = G__14351;
count__14326_14340 = G__14352;
i__14327_14341 = G__14353;
continue;
} else {
var protocol_14354 = cljs.core.first.call(null,seq__14324_14348__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_14354)].join('')),"}");

var G__14355 = cljs.core.next.call(null,seq__14324_14348__$1);
var G__14356 = null;
var G__14357 = (0);
var G__14358 = (0);
seq__14324_14338 = G__14355;
chunk__14325_14339 = G__14356;
count__14326_14340 = G__14357;
i__14327_14341 = G__14358;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__14328_14359 = cljs.core.seq.call(null,fields__$1);
var chunk__14329_14360 = null;
var count__14330_14361 = (0);
var i__14331_14362 = (0);
while(true){
if((i__14331_14362 < count__14330_14361)){
var fld_14363 = cljs.core._nth.call(null,chunk__14329_14360,i__14331_14362);
cljs.compiler.emitln.call(null,"this.",fld_14363," = ",fld_14363,";");

var G__14364 = seq__14328_14359;
var G__14365 = chunk__14329_14360;
var G__14366 = count__14330_14361;
var G__14367 = (i__14331_14362 + (1));
seq__14328_14359 = G__14364;
chunk__14329_14360 = G__14365;
count__14330_14361 = G__14366;
i__14331_14362 = G__14367;
continue;
} else {
var temp__4425__auto___14368 = cljs.core.seq.call(null,seq__14328_14359);
if(temp__4425__auto___14368){
var seq__14328_14369__$1 = temp__4425__auto___14368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14328_14369__$1)){
var c__7256__auto___14370 = cljs.core.chunk_first.call(null,seq__14328_14369__$1);
var G__14371 = cljs.core.chunk_rest.call(null,seq__14328_14369__$1);
var G__14372 = c__7256__auto___14370;
var G__14373 = cljs.core.count.call(null,c__7256__auto___14370);
var G__14374 = (0);
seq__14328_14359 = G__14371;
chunk__14329_14360 = G__14372;
count__14330_14361 = G__14373;
i__14331_14362 = G__14374;
continue;
} else {
var fld_14375 = cljs.core.first.call(null,seq__14328_14369__$1);
cljs.compiler.emitln.call(null,"this.",fld_14375," = ",fld_14375,";");

var G__14376 = cljs.core.next.call(null,seq__14328_14369__$1);
var G__14377 = null;
var G__14378 = (0);
var G__14379 = (0);
seq__14328_14359 = G__14376;
chunk__14329_14360 = G__14377;
count__14330_14361 = G__14378;
i__14331_14362 = G__14379;
continue;
}
} else {
}
}
break;
}

var seq__14332_14380 = cljs.core.seq.call(null,pmasks);
var chunk__14333_14381 = null;
var count__14334_14382 = (0);
var i__14335_14383 = (0);
while(true){
if((i__14335_14383 < count__14334_14382)){
var vec__14336_14384 = cljs.core._nth.call(null,chunk__14333_14381,i__14335_14383);
var pno_14385 = cljs.core.nth.call(null,vec__14336_14384,(0),null);
var pmask_14386 = cljs.core.nth.call(null,vec__14336_14384,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_14385,"$ = ",pmask_14386,";");

var G__14387 = seq__14332_14380;
var G__14388 = chunk__14333_14381;
var G__14389 = count__14334_14382;
var G__14390 = (i__14335_14383 + (1));
seq__14332_14380 = G__14387;
chunk__14333_14381 = G__14388;
count__14334_14382 = G__14389;
i__14335_14383 = G__14390;
continue;
} else {
var temp__4425__auto___14391 = cljs.core.seq.call(null,seq__14332_14380);
if(temp__4425__auto___14391){
var seq__14332_14392__$1 = temp__4425__auto___14391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14332_14392__$1)){
var c__7256__auto___14393 = cljs.core.chunk_first.call(null,seq__14332_14392__$1);
var G__14394 = cljs.core.chunk_rest.call(null,seq__14332_14392__$1);
var G__14395 = c__7256__auto___14393;
var G__14396 = cljs.core.count.call(null,c__7256__auto___14393);
var G__14397 = (0);
seq__14332_14380 = G__14394;
chunk__14333_14381 = G__14395;
count__14334_14382 = G__14396;
i__14335_14383 = G__14397;
continue;
} else {
var vec__14337_14398 = cljs.core.first.call(null,seq__14332_14392__$1);
var pno_14399 = cljs.core.nth.call(null,vec__14337_14398,(0),null);
var pmask_14400 = cljs.core.nth.call(null,vec__14337_14398,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_14399,"$ = ",pmask_14400,";");

var G__14401 = cljs.core.next.call(null,seq__14332_14392__$1);
var G__14402 = null;
var G__14403 = (0);
var G__14404 = (0);
seq__14332_14380 = G__14401;
chunk__14333_14381 = G__14402;
count__14334_14382 = G__14403;
i__14335_14383 = G__14404;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__14405){
var map__14406 = p__14405;
var map__14406__$1 = ((((!((map__14406 == null)))?((((map__14406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14406):map__14406);
var target = cljs.core.get.call(null,map__14406__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__14406__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__14406__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__14406__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__14406__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13365__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__14408){
var map__14409 = p__14408;
var map__14409__$1 = ((((!((map__14409 == null)))?((((map__14409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14409):map__14409);
var op = cljs.core.get.call(null,map__14409__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__14409__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__14409__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__14409__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__14409__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__6441__auto__ = code;
if(cljs.core.truth_(and__6441__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__6441__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__13365__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13365__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__14419 = cljs.core.seq.call(null,table);
var chunk__14420 = null;
var count__14421 = (0);
var i__14422 = (0);
while(true){
if((i__14422 < count__14421)){
var vec__14423 = cljs.core._nth.call(null,chunk__14420,i__14422);
var sym = cljs.core.nth.call(null,vec__14423,(0),null);
var value = cljs.core.nth.call(null,vec__14423,(1),null);
var ns_14425 = cljs.core.namespace.call(null,sym);
var name_14426 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__14427 = seq__14419;
var G__14428 = chunk__14420;
var G__14429 = count__14421;
var G__14430 = (i__14422 + (1));
seq__14419 = G__14427;
chunk__14420 = G__14428;
count__14421 = G__14429;
i__14422 = G__14430;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14419);
if(temp__4425__auto__){
var seq__14419__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14419__$1)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,seq__14419__$1);
var G__14431 = cljs.core.chunk_rest.call(null,seq__14419__$1);
var G__14432 = c__7256__auto__;
var G__14433 = cljs.core.count.call(null,c__7256__auto__);
var G__14434 = (0);
seq__14419 = G__14431;
chunk__14420 = G__14432;
count__14421 = G__14433;
i__14422 = G__14434;
continue;
} else {
var vec__14424 = cljs.core.first.call(null,seq__14419__$1);
var sym = cljs.core.nth.call(null,vec__14424,(0),null);
var value = cljs.core.nth.call(null,vec__14424,(1),null);
var ns_14435 = cljs.core.namespace.call(null,sym);
var name_14436 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__14437 = cljs.core.next.call(null,seq__14419__$1);
var G__14438 = null;
var G__14439 = (0);
var G__14440 = (0);
seq__14419 = G__14437;
chunk__14420 = G__14438;
count__14421 = G__14439;
i__14422 = G__14440;
continue;
}
} else {
return null;
}
}
break;
}
});
