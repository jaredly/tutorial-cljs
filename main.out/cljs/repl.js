// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19244_19258 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19245_19259 = null;
var count__19246_19260 = (0);
var i__19247_19261 = (0);
while(true){
if((i__19247_19261 < count__19246_19260)){
var f_19262 = cljs.core._nth.call(null,chunk__19245_19259,i__19247_19261);
cljs.core.println.call(null,"  ",f_19262);

var G__19263 = seq__19244_19258;
var G__19264 = chunk__19245_19259;
var G__19265 = count__19246_19260;
var G__19266 = (i__19247_19261 + (1));
seq__19244_19258 = G__19263;
chunk__19245_19259 = G__19264;
count__19246_19260 = G__19265;
i__19247_19261 = G__19266;
continue;
} else {
var temp__4425__auto___19267 = cljs.core.seq.call(null,seq__19244_19258);
if(temp__4425__auto___19267){
var seq__19244_19268__$1 = temp__4425__auto___19267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19244_19268__$1)){
var c__7256__auto___19269 = cljs.core.chunk_first.call(null,seq__19244_19268__$1);
var G__19270 = cljs.core.chunk_rest.call(null,seq__19244_19268__$1);
var G__19271 = c__7256__auto___19269;
var G__19272 = cljs.core.count.call(null,c__7256__auto___19269);
var G__19273 = (0);
seq__19244_19258 = G__19270;
chunk__19245_19259 = G__19271;
count__19246_19260 = G__19272;
i__19247_19261 = G__19273;
continue;
} else {
var f_19274 = cljs.core.first.call(null,seq__19244_19268__$1);
cljs.core.println.call(null,"  ",f_19274);

var G__19275 = cljs.core.next.call(null,seq__19244_19268__$1);
var G__19276 = null;
var G__19277 = (0);
var G__19278 = (0);
seq__19244_19258 = G__19275;
chunk__19245_19259 = G__19276;
count__19246_19260 = G__19277;
i__19247_19261 = G__19278;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19279 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6453__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19279);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19279)))?cljs.core.second.call(null,arglists_19279):arglists_19279));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19248 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19249 = null;
var count__19250 = (0);
var i__19251 = (0);
while(true){
if((i__19251 < count__19250)){
var vec__19252 = cljs.core._nth.call(null,chunk__19249,i__19251);
var name = cljs.core.nth.call(null,vec__19252,(0),null);
var map__19253 = cljs.core.nth.call(null,vec__19252,(1),null);
var map__19253__$1 = ((((!((map__19253 == null)))?((((map__19253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19253):map__19253);
var doc = cljs.core.get.call(null,map__19253__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__19253__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__19280 = seq__19248;
var G__19281 = chunk__19249;
var G__19282 = count__19250;
var G__19283 = (i__19251 + (1));
seq__19248 = G__19280;
chunk__19249 = G__19281;
count__19250 = G__19282;
i__19251 = G__19283;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19248);
if(temp__4425__auto__){
var seq__19248__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19248__$1)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,seq__19248__$1);
var G__19284 = cljs.core.chunk_rest.call(null,seq__19248__$1);
var G__19285 = c__7256__auto__;
var G__19286 = cljs.core.count.call(null,c__7256__auto__);
var G__19287 = (0);
seq__19248 = G__19284;
chunk__19249 = G__19285;
count__19250 = G__19286;
i__19251 = G__19287;
continue;
} else {
var vec__19255 = cljs.core.first.call(null,seq__19248__$1);
var name = cljs.core.nth.call(null,vec__19255,(0),null);
var map__19256 = cljs.core.nth.call(null,vec__19255,(1),null);
var map__19256__$1 = ((((!((map__19256 == null)))?((((map__19256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19256):map__19256);
var doc = cljs.core.get.call(null,map__19256__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__19256__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__19288 = cljs.core.next.call(null,seq__19248__$1);
var G__19289 = null;
var G__19290 = (0);
var G__19291 = (0);
seq__19248 = G__19288;
chunk__19249 = G__19289;
count__19250 = G__19290;
i__19251 = G__19291;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
