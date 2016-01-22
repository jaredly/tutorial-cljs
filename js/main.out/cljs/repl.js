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
var seq__19138_19152 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19139_19153 = null;
var count__19140_19154 = (0);
var i__19141_19155 = (0);
while(true){
if((i__19141_19155 < count__19140_19154)){
var f_19156 = cljs.core._nth.call(null,chunk__19139_19153,i__19141_19155);
cljs.core.println.call(null,"  ",f_19156);

var G__19157 = seq__19138_19152;
var G__19158 = chunk__19139_19153;
var G__19159 = count__19140_19154;
var G__19160 = (i__19141_19155 + (1));
seq__19138_19152 = G__19157;
chunk__19139_19153 = G__19158;
count__19140_19154 = G__19159;
i__19141_19155 = G__19160;
continue;
} else {
var temp__4425__auto___19161 = cljs.core.seq.call(null,seq__19138_19152);
if(temp__4425__auto___19161){
var seq__19138_19162__$1 = temp__4425__auto___19161;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19138_19162__$1)){
var c__7256__auto___19163 = cljs.core.chunk_first.call(null,seq__19138_19162__$1);
var G__19164 = cljs.core.chunk_rest.call(null,seq__19138_19162__$1);
var G__19165 = c__7256__auto___19163;
var G__19166 = cljs.core.count.call(null,c__7256__auto___19163);
var G__19167 = (0);
seq__19138_19152 = G__19164;
chunk__19139_19153 = G__19165;
count__19140_19154 = G__19166;
i__19141_19155 = G__19167;
continue;
} else {
var f_19168 = cljs.core.first.call(null,seq__19138_19162__$1);
cljs.core.println.call(null,"  ",f_19168);

var G__19169 = cljs.core.next.call(null,seq__19138_19162__$1);
var G__19170 = null;
var G__19171 = (0);
var G__19172 = (0);
seq__19138_19152 = G__19169;
chunk__19139_19153 = G__19170;
count__19140_19154 = G__19171;
i__19141_19155 = G__19172;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19173 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6453__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19173);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19173)))?cljs.core.second.call(null,arglists_19173):arglists_19173));
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
var seq__19142 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19143 = null;
var count__19144 = (0);
var i__19145 = (0);
while(true){
if((i__19145 < count__19144)){
var vec__19146 = cljs.core._nth.call(null,chunk__19143,i__19145);
var name = cljs.core.nth.call(null,vec__19146,(0),null);
var map__19147 = cljs.core.nth.call(null,vec__19146,(1),null);
var map__19147__$1 = ((((!((map__19147 == null)))?((((map__19147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19147):map__19147);
var doc = cljs.core.get.call(null,map__19147__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__19147__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__19174 = seq__19142;
var G__19175 = chunk__19143;
var G__19176 = count__19144;
var G__19177 = (i__19145 + (1));
seq__19142 = G__19174;
chunk__19143 = G__19175;
count__19144 = G__19176;
i__19145 = G__19177;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19142);
if(temp__4425__auto__){
var seq__19142__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19142__$1)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,seq__19142__$1);
var G__19178 = cljs.core.chunk_rest.call(null,seq__19142__$1);
var G__19179 = c__7256__auto__;
var G__19180 = cljs.core.count.call(null,c__7256__auto__);
var G__19181 = (0);
seq__19142 = G__19178;
chunk__19143 = G__19179;
count__19144 = G__19180;
i__19145 = G__19181;
continue;
} else {
var vec__19149 = cljs.core.first.call(null,seq__19142__$1);
var name = cljs.core.nth.call(null,vec__19149,(0),null);
var map__19150 = cljs.core.nth.call(null,vec__19149,(1),null);
var map__19150__$1 = ((((!((map__19150 == null)))?((((map__19150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19150):map__19150);
var doc = cljs.core.get.call(null,map__19150__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__19150__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__19182 = cljs.core.next.call(null,seq__19142__$1);
var G__19183 = null;
var G__19184 = (0);
var G__19185 = (0);
seq__19142 = G__19182;
chunk__19143 = G__19183;
count__19144 = G__19184;
i__19145 = G__19185;
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
