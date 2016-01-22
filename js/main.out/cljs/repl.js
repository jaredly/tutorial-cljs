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
var seq__19140_19154 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19141_19155 = null;
var count__19142_19156 = (0);
var i__19143_19157 = (0);
while(true){
if((i__19143_19157 < count__19142_19156)){
var f_19158 = cljs.core._nth.call(null,chunk__19141_19155,i__19143_19157);
cljs.core.println.call(null,"  ",f_19158);

var G__19159 = seq__19140_19154;
var G__19160 = chunk__19141_19155;
var G__19161 = count__19142_19156;
var G__19162 = (i__19143_19157 + (1));
seq__19140_19154 = G__19159;
chunk__19141_19155 = G__19160;
count__19142_19156 = G__19161;
i__19143_19157 = G__19162;
continue;
} else {
var temp__4425__auto___19163 = cljs.core.seq.call(null,seq__19140_19154);
if(temp__4425__auto___19163){
var seq__19140_19164__$1 = temp__4425__auto___19163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19140_19164__$1)){
var c__7256__auto___19165 = cljs.core.chunk_first.call(null,seq__19140_19164__$1);
var G__19166 = cljs.core.chunk_rest.call(null,seq__19140_19164__$1);
var G__19167 = c__7256__auto___19165;
var G__19168 = cljs.core.count.call(null,c__7256__auto___19165);
var G__19169 = (0);
seq__19140_19154 = G__19166;
chunk__19141_19155 = G__19167;
count__19142_19156 = G__19168;
i__19143_19157 = G__19169;
continue;
} else {
var f_19170 = cljs.core.first.call(null,seq__19140_19164__$1);
cljs.core.println.call(null,"  ",f_19170);

var G__19171 = cljs.core.next.call(null,seq__19140_19164__$1);
var G__19172 = null;
var G__19173 = (0);
var G__19174 = (0);
seq__19140_19154 = G__19171;
chunk__19141_19155 = G__19172;
count__19142_19156 = G__19173;
i__19143_19157 = G__19174;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19175 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6453__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19175);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19175)))?cljs.core.second.call(null,arglists_19175):arglists_19175));
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
var seq__19144 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19145 = null;
var count__19146 = (0);
var i__19147 = (0);
while(true){
if((i__19147 < count__19146)){
var vec__19148 = cljs.core._nth.call(null,chunk__19145,i__19147);
var name = cljs.core.nth.call(null,vec__19148,(0),null);
var map__19149 = cljs.core.nth.call(null,vec__19148,(1),null);
var map__19149__$1 = ((((!((map__19149 == null)))?((((map__19149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19149):map__19149);
var doc = cljs.core.get.call(null,map__19149__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__19149__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__19176 = seq__19144;
var G__19177 = chunk__19145;
var G__19178 = count__19146;
var G__19179 = (i__19147 + (1));
seq__19144 = G__19176;
chunk__19145 = G__19177;
count__19146 = G__19178;
i__19147 = G__19179;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19144);
if(temp__4425__auto__){
var seq__19144__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19144__$1)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,seq__19144__$1);
var G__19180 = cljs.core.chunk_rest.call(null,seq__19144__$1);
var G__19181 = c__7256__auto__;
var G__19182 = cljs.core.count.call(null,c__7256__auto__);
var G__19183 = (0);
seq__19144 = G__19180;
chunk__19145 = G__19181;
count__19146 = G__19182;
i__19147 = G__19183;
continue;
} else {
var vec__19151 = cljs.core.first.call(null,seq__19144__$1);
var name = cljs.core.nth.call(null,vec__19151,(0),null);
var map__19152 = cljs.core.nth.call(null,vec__19151,(1),null);
var map__19152__$1 = ((((!((map__19152 == null)))?((((map__19152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19152):map__19152);
var doc = cljs.core.get.call(null,map__19152__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__19152__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__19184 = cljs.core.next.call(null,seq__19144__$1);
var G__19185 = null;
var G__19186 = (0);
var G__19187 = (0);
seq__19144 = G__19184;
chunk__19145 = G__19185;
count__19146 = G__19186;
i__19147 = G__19187;
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
