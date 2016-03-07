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
var seq__14357_14371 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14358_14372 = null;
var count__14359_14373 = (0);
var i__14360_14374 = (0);
while(true){
if((i__14360_14374 < count__14359_14373)){
var f_14375 = cljs.core._nth.call(null,chunk__14358_14372,i__14360_14374);
cljs.core.println.call(null,"  ",f_14375);

var G__14376 = seq__14357_14371;
var G__14377 = chunk__14358_14372;
var G__14378 = count__14359_14373;
var G__14379 = (i__14360_14374 + (1));
seq__14357_14371 = G__14376;
chunk__14358_14372 = G__14377;
count__14359_14373 = G__14378;
i__14360_14374 = G__14379;
continue;
} else {
var temp__4425__auto___14380 = cljs.core.seq.call(null,seq__14357_14371);
if(temp__4425__auto___14380){
var seq__14357_14381__$1 = temp__4425__auto___14380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14357_14381__$1)){
var c__7256__auto___14382 = cljs.core.chunk_first.call(null,seq__14357_14381__$1);
var G__14383 = cljs.core.chunk_rest.call(null,seq__14357_14381__$1);
var G__14384 = c__7256__auto___14382;
var G__14385 = cljs.core.count.call(null,c__7256__auto___14382);
var G__14386 = (0);
seq__14357_14371 = G__14383;
chunk__14358_14372 = G__14384;
count__14359_14373 = G__14385;
i__14360_14374 = G__14386;
continue;
} else {
var f_14387 = cljs.core.first.call(null,seq__14357_14381__$1);
cljs.core.println.call(null,"  ",f_14387);

var G__14388 = cljs.core.next.call(null,seq__14357_14381__$1);
var G__14389 = null;
var G__14390 = (0);
var G__14391 = (0);
seq__14357_14371 = G__14388;
chunk__14358_14372 = G__14389;
count__14359_14373 = G__14390;
i__14360_14374 = G__14391;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14392 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6453__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14392);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14392)))?cljs.core.second.call(null,arglists_14392):arglists_14392));
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
var seq__14361 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14362 = null;
var count__14363 = (0);
var i__14364 = (0);
while(true){
if((i__14364 < count__14363)){
var vec__14365 = cljs.core._nth.call(null,chunk__14362,i__14364);
var name = cljs.core.nth.call(null,vec__14365,(0),null);
var map__14366 = cljs.core.nth.call(null,vec__14365,(1),null);
var map__14366__$1 = ((((!((map__14366 == null)))?((((map__14366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14366):map__14366);
var doc = cljs.core.get.call(null,map__14366__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__14366__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__14393 = seq__14361;
var G__14394 = chunk__14362;
var G__14395 = count__14363;
var G__14396 = (i__14364 + (1));
seq__14361 = G__14393;
chunk__14362 = G__14394;
count__14363 = G__14395;
i__14364 = G__14396;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14361);
if(temp__4425__auto__){
var seq__14361__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14361__$1)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,seq__14361__$1);
var G__14397 = cljs.core.chunk_rest.call(null,seq__14361__$1);
var G__14398 = c__7256__auto__;
var G__14399 = cljs.core.count.call(null,c__7256__auto__);
var G__14400 = (0);
seq__14361 = G__14397;
chunk__14362 = G__14398;
count__14363 = G__14399;
i__14364 = G__14400;
continue;
} else {
var vec__14368 = cljs.core.first.call(null,seq__14361__$1);
var name = cljs.core.nth.call(null,vec__14368,(0),null);
var map__14369 = cljs.core.nth.call(null,vec__14368,(1),null);
var map__14369__$1 = ((((!((map__14369 == null)))?((((map__14369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14369):map__14369);
var doc = cljs.core.get.call(null,map__14369__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__14369__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__14401 = cljs.core.next.call(null,seq__14361__$1);
var G__14402 = null;
var G__14403 = (0);
var G__14404 = (0);
seq__14361 = G__14401;
chunk__14362 = G__14402;
count__14363 = G__14403;
i__14364 = G__14404;
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

//# sourceMappingURL=repl.js.map