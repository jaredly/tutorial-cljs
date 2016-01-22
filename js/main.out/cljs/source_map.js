// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__12691){
var vec__12692 = p__12691;
var i = cljs.core.nth.call(null,vec__12692,(0),null);
var v = cljs.core.nth.call(null,vec__12692,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__12694 = seg;
var gcol = cljs.core.nth.call(null,vec__12694,(0),null);
var source = cljs.core.nth.call(null,vec__12694,(1),null);
var line = cljs.core.nth.call(null,vec__12694,(2),null);
var col = cljs.core.nth.call(null,vec__12694,(3),null);
var name = cljs.core.nth.call(null,vec__12694,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4425__auto__)){
var name__$1 = temp__4425__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__12697 = seg;
var gcol = cljs.core.nth.call(null,vec__12697,(0),null);
var source = cljs.core.nth.call(null,vec__12697,(1),null);
var line = cljs.core.nth.call(null,vec__12697,(2),null);
var col = cljs.core.nth.call(null,vec__12697,(3),null);
var name = cljs.core.nth.call(null,vec__12697,(4),null);
var vec__12698 = relseg;
var rgcol = cljs.core.nth.call(null,vec__12698,(0),null);
var rsource = cljs.core.nth.call(null,vec__12698,(1),null);
var rline = cljs.core.nth.call(null,vec__12698,(2),null);
var rcol = cljs.core.nth.call(null,vec__12698,(3),null);
var rname = cljs.core.nth.call(null,vec__12698,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__6453__auto__ = source;
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__6453__auto__ = line;
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__6453__auto__ = col;
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__6453__auto__ = name;
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__12701 = segmap;
var map__12701__$1 = ((((!((map__12701 == null)))?((((map__12701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12701):map__12701);
var gcol = cljs.core.get.call(null,map__12701__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__12701__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__12701__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__12701__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__12701__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__12701,map__12701__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__12701,map__12701__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__12701,map__12701__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__12701,map__12701__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__12701,map__12701__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__12701,map__12701__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args12703 = [];
var len__7511__auto___12707 = arguments.length;
var i__7512__auto___12708 = (0);
while(true){
if((i__7512__auto___12708 < len__7511__auto___12707)){
args12703.push((arguments[i__7512__auto___12708]));

var G__12709 = (i__7512__auto___12708 + (1));
i__7512__auto___12708 = G__12709;
continue;
} else {
}
break;
}

var G__12705 = args12703.length;
switch (G__12705) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12703.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__12706 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__12711 = cljs.core.next.call(null,segs__$1);
var G__12712 = nrelseg;
var G__12713 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__12711;
relseg__$1 = G__12712;
result__$1 = G__12713;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__12706,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__12706,(1),null);
var G__12714 = (gline + (1));
var G__12715 = cljs.core.next.call(null,lines__$1);
var G__12716 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__12717 = result__$1;
gline = G__12714;
lines__$1 = G__12715;
relseg = G__12716;
result = G__12717;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__12721 = segmap;
var map__12721__$1 = ((((!((map__12721 == null)))?((((map__12721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12721):map__12721);
var gcol = cljs.core.get.call(null,map__12721__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__12721__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__12721__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__12721__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__12721__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__12721,map__12721__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__12721,map__12721__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__12718_SHARP_){
return cljs.core.conj.call(null,p1__12718_SHARP_,d__$1);
});})(map__12721,map__12721__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__12721,map__12721__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args12723 = [];
var len__7511__auto___12727 = arguments.length;
var i__7512__auto___12728 = (0);
while(true){
if((i__7512__auto___12728 < len__7511__auto___12727)){
args12723.push((arguments[i__7512__auto___12728]));

var G__12729 = (i__7512__auto___12728 + (1));
i__7512__auto___12728 = G__12729;
continue;
} else {
}
break;
}

var G__12725 = args12723.length;
switch (G__12725) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12723.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__12726 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__12731 = cljs.core.next.call(null,segs__$1);
var G__12732 = nrelseg;
var G__12733 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__12731;
relseg__$1 = G__12732;
result__$1 = G__12733;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__12726,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__12726,(1),null);
var G__12734 = (gline + (1));
var G__12735 = cljs.core.next.call(null,lines__$1);
var G__12736 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__12737 = result__$1;
gline = G__12734;
lines__$1 = G__12735;
relseg = G__12736;
result = G__12737;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__12744){
var vec__12745 = p__12744;
var _ = cljs.core.nth.call(null,vec__12745,(0),null);
var source = cljs.core.nth.call(null,vec__12745,(1),null);
var line = cljs.core.nth.call(null,vec__12745,(2),null);
var col = cljs.core.nth.call(null,vec__12745,(3),null);
var name = cljs.core.nth.call(null,vec__12745,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__12746){
var vec__12747 = p__12746;
var gcol = cljs.core.nth.call(null,vec__12747,(0),null);
var sidx = cljs.core.nth.call(null,vec__12747,(1),null);
var line = cljs.core.nth.call(null,vec__12747,(2),null);
var col = cljs.core.nth.call(null,vec__12747,(3),null);
var name = cljs.core.nth.call(null,vec__12747,(4),null);
var seg = vec__12747;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__12747,gcol,sidx,line,col,name,seg,relseg){
return (function (p__12748){
var vec__12749 = p__12748;
var _ = cljs.core.nth.call(null,vec__12749,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__12749,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__12749,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__12749,(3),null);
var lname = cljs.core.nth.call(null,vec__12749,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__6453__auto__ = name;
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__12747,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__6453__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
var idx = (function (){var temp__4423__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__12803 = cljs.core.seq.call(null,infos);
var chunk__12804 = null;
var count__12805 = (0);
var i__12806 = (0);
while(true){
if((i__12806 < count__12805)){
var info = cljs.core._nth.call(null,chunk__12804,i__12806);
var segv_12853 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_12854 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12855 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_12854 > (lc_12855 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__12803,chunk__12804,count__12805,i__12806,segv_12853,gline_12854,lc_12855,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_12854 - (lc_12855 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12853], null));
});})(seq__12803,chunk__12804,count__12805,i__12806,segv_12853,gline_12854,lc_12855,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__12803,chunk__12804,count__12805,i__12806,segv_12853,gline_12854,lc_12855,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12854], null),cljs.core.conj,segv_12853);
});})(seq__12803,chunk__12804,count__12805,i__12806,segv_12853,gline_12854,lc_12855,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__12856 = seq__12803;
var G__12857 = chunk__12804;
var G__12858 = count__12805;
var G__12859 = (i__12806 + (1));
seq__12803 = G__12856;
chunk__12804 = G__12857;
count__12805 = G__12858;
i__12806 = G__12859;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12803);
if(temp__4425__auto__){
var seq__12803__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12803__$1)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,seq__12803__$1);
var G__12860 = cljs.core.chunk_rest.call(null,seq__12803__$1);
var G__12861 = c__7256__auto__;
var G__12862 = cljs.core.count.call(null,c__7256__auto__);
var G__12863 = (0);
seq__12803 = G__12860;
chunk__12804 = G__12861;
count__12805 = G__12862;
i__12806 = G__12863;
continue;
} else {
var info = cljs.core.first.call(null,seq__12803__$1);
var segv_12864 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_12865 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12866 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_12865 > (lc_12866 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__12803,chunk__12804,count__12805,i__12806,segv_12864,gline_12865,lc_12866,info,seq__12803__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_12865 - (lc_12866 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12864], null));
});})(seq__12803,chunk__12804,count__12805,i__12806,segv_12864,gline_12865,lc_12866,info,seq__12803__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__12803,chunk__12804,count__12805,i__12806,segv_12864,gline_12865,lc_12866,info,seq__12803__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12865], null),cljs.core.conj,segv_12864);
});})(seq__12803,chunk__12804,count__12805,i__12806,segv_12864,gline_12865,lc_12866,info,seq__12803__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__12867 = cljs.core.next.call(null,seq__12803__$1);
var G__12868 = null;
var G__12869 = (0);
var G__12870 = (0);
seq__12803 = G__12867;
chunk__12804 = G__12868;
count__12805 = G__12869;
i__12806 = G__12870;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__12807_12871 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__12808_12872 = null;
var count__12809_12873 = (0);
var i__12810_12874 = (0);
while(true){
if((i__12810_12874 < count__12809_12873)){
var vec__12811_12875 = cljs.core._nth.call(null,chunk__12808_12872,i__12810_12874);
var source_idx_12876 = cljs.core.nth.call(null,vec__12811_12875,(0),null);
var vec__12812_12877 = cljs.core.nth.call(null,vec__12811_12875,(1),null);
var __12878 = cljs.core.nth.call(null,vec__12812_12877,(0),null);
var lines_12879__$1 = cljs.core.nth.call(null,vec__12812_12877,(1),null);
var seq__12813_12880 = cljs.core.seq.call(null,lines_12879__$1);
var chunk__12814_12881 = null;
var count__12815_12882 = (0);
var i__12816_12883 = (0);
while(true){
if((i__12816_12883 < count__12815_12882)){
var vec__12817_12884 = cljs.core._nth.call(null,chunk__12814_12881,i__12816_12883);
var line_12885 = cljs.core.nth.call(null,vec__12817_12884,(0),null);
var cols_12886 = cljs.core.nth.call(null,vec__12817_12884,(1),null);
var seq__12818_12887 = cljs.core.seq.call(null,cols_12886);
var chunk__12819_12888 = null;
var count__12820_12889 = (0);
var i__12821_12890 = (0);
while(true){
if((i__12821_12890 < count__12820_12889)){
var vec__12822_12891 = cljs.core._nth.call(null,chunk__12819_12888,i__12821_12890);
var col_12892 = cljs.core.nth.call(null,vec__12822_12891,(0),null);
var infos_12893 = cljs.core.nth.call(null,vec__12822_12891,(1),null);
encode_cols.call(null,infos_12893,source_idx_12876,line_12885,col_12892);

var G__12894 = seq__12818_12887;
var G__12895 = chunk__12819_12888;
var G__12896 = count__12820_12889;
var G__12897 = (i__12821_12890 + (1));
seq__12818_12887 = G__12894;
chunk__12819_12888 = G__12895;
count__12820_12889 = G__12896;
i__12821_12890 = G__12897;
continue;
} else {
var temp__4425__auto___12898 = cljs.core.seq.call(null,seq__12818_12887);
if(temp__4425__auto___12898){
var seq__12818_12899__$1 = temp__4425__auto___12898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12818_12899__$1)){
var c__7256__auto___12900 = cljs.core.chunk_first.call(null,seq__12818_12899__$1);
var G__12901 = cljs.core.chunk_rest.call(null,seq__12818_12899__$1);
var G__12902 = c__7256__auto___12900;
var G__12903 = cljs.core.count.call(null,c__7256__auto___12900);
var G__12904 = (0);
seq__12818_12887 = G__12901;
chunk__12819_12888 = G__12902;
count__12820_12889 = G__12903;
i__12821_12890 = G__12904;
continue;
} else {
var vec__12823_12905 = cljs.core.first.call(null,seq__12818_12899__$1);
var col_12906 = cljs.core.nth.call(null,vec__12823_12905,(0),null);
var infos_12907 = cljs.core.nth.call(null,vec__12823_12905,(1),null);
encode_cols.call(null,infos_12907,source_idx_12876,line_12885,col_12906);

var G__12908 = cljs.core.next.call(null,seq__12818_12899__$1);
var G__12909 = null;
var G__12910 = (0);
var G__12911 = (0);
seq__12818_12887 = G__12908;
chunk__12819_12888 = G__12909;
count__12820_12889 = G__12910;
i__12821_12890 = G__12911;
continue;
}
} else {
}
}
break;
}

var G__12912 = seq__12813_12880;
var G__12913 = chunk__12814_12881;
var G__12914 = count__12815_12882;
var G__12915 = (i__12816_12883 + (1));
seq__12813_12880 = G__12912;
chunk__12814_12881 = G__12913;
count__12815_12882 = G__12914;
i__12816_12883 = G__12915;
continue;
} else {
var temp__4425__auto___12916 = cljs.core.seq.call(null,seq__12813_12880);
if(temp__4425__auto___12916){
var seq__12813_12917__$1 = temp__4425__auto___12916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12813_12917__$1)){
var c__7256__auto___12918 = cljs.core.chunk_first.call(null,seq__12813_12917__$1);
var G__12919 = cljs.core.chunk_rest.call(null,seq__12813_12917__$1);
var G__12920 = c__7256__auto___12918;
var G__12921 = cljs.core.count.call(null,c__7256__auto___12918);
var G__12922 = (0);
seq__12813_12880 = G__12919;
chunk__12814_12881 = G__12920;
count__12815_12882 = G__12921;
i__12816_12883 = G__12922;
continue;
} else {
var vec__12824_12923 = cljs.core.first.call(null,seq__12813_12917__$1);
var line_12924 = cljs.core.nth.call(null,vec__12824_12923,(0),null);
var cols_12925 = cljs.core.nth.call(null,vec__12824_12923,(1),null);
var seq__12825_12926 = cljs.core.seq.call(null,cols_12925);
var chunk__12826_12927 = null;
var count__12827_12928 = (0);
var i__12828_12929 = (0);
while(true){
if((i__12828_12929 < count__12827_12928)){
var vec__12829_12930 = cljs.core._nth.call(null,chunk__12826_12927,i__12828_12929);
var col_12931 = cljs.core.nth.call(null,vec__12829_12930,(0),null);
var infos_12932 = cljs.core.nth.call(null,vec__12829_12930,(1),null);
encode_cols.call(null,infos_12932,source_idx_12876,line_12924,col_12931);

var G__12933 = seq__12825_12926;
var G__12934 = chunk__12826_12927;
var G__12935 = count__12827_12928;
var G__12936 = (i__12828_12929 + (1));
seq__12825_12926 = G__12933;
chunk__12826_12927 = G__12934;
count__12827_12928 = G__12935;
i__12828_12929 = G__12936;
continue;
} else {
var temp__4425__auto___12937__$1 = cljs.core.seq.call(null,seq__12825_12926);
if(temp__4425__auto___12937__$1){
var seq__12825_12938__$1 = temp__4425__auto___12937__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12825_12938__$1)){
var c__7256__auto___12939 = cljs.core.chunk_first.call(null,seq__12825_12938__$1);
var G__12940 = cljs.core.chunk_rest.call(null,seq__12825_12938__$1);
var G__12941 = c__7256__auto___12939;
var G__12942 = cljs.core.count.call(null,c__7256__auto___12939);
var G__12943 = (0);
seq__12825_12926 = G__12940;
chunk__12826_12927 = G__12941;
count__12827_12928 = G__12942;
i__12828_12929 = G__12943;
continue;
} else {
var vec__12830_12944 = cljs.core.first.call(null,seq__12825_12938__$1);
var col_12945 = cljs.core.nth.call(null,vec__12830_12944,(0),null);
var infos_12946 = cljs.core.nth.call(null,vec__12830_12944,(1),null);
encode_cols.call(null,infos_12946,source_idx_12876,line_12924,col_12945);

var G__12947 = cljs.core.next.call(null,seq__12825_12938__$1);
var G__12948 = null;
var G__12949 = (0);
var G__12950 = (0);
seq__12825_12926 = G__12947;
chunk__12826_12927 = G__12948;
count__12827_12928 = G__12949;
i__12828_12929 = G__12950;
continue;
}
} else {
}
}
break;
}

var G__12951 = cljs.core.next.call(null,seq__12813_12917__$1);
var G__12952 = null;
var G__12953 = (0);
var G__12954 = (0);
seq__12813_12880 = G__12951;
chunk__12814_12881 = G__12952;
count__12815_12882 = G__12953;
i__12816_12883 = G__12954;
continue;
}
} else {
}
}
break;
}

var G__12955 = seq__12807_12871;
var G__12956 = chunk__12808_12872;
var G__12957 = count__12809_12873;
var G__12958 = (i__12810_12874 + (1));
seq__12807_12871 = G__12955;
chunk__12808_12872 = G__12956;
count__12809_12873 = G__12957;
i__12810_12874 = G__12958;
continue;
} else {
var temp__4425__auto___12959 = cljs.core.seq.call(null,seq__12807_12871);
if(temp__4425__auto___12959){
var seq__12807_12960__$1 = temp__4425__auto___12959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12807_12960__$1)){
var c__7256__auto___12961 = cljs.core.chunk_first.call(null,seq__12807_12960__$1);
var G__12962 = cljs.core.chunk_rest.call(null,seq__12807_12960__$1);
var G__12963 = c__7256__auto___12961;
var G__12964 = cljs.core.count.call(null,c__7256__auto___12961);
var G__12965 = (0);
seq__12807_12871 = G__12962;
chunk__12808_12872 = G__12963;
count__12809_12873 = G__12964;
i__12810_12874 = G__12965;
continue;
} else {
var vec__12831_12966 = cljs.core.first.call(null,seq__12807_12960__$1);
var source_idx_12967 = cljs.core.nth.call(null,vec__12831_12966,(0),null);
var vec__12832_12968 = cljs.core.nth.call(null,vec__12831_12966,(1),null);
var __12969 = cljs.core.nth.call(null,vec__12832_12968,(0),null);
var lines_12970__$1 = cljs.core.nth.call(null,vec__12832_12968,(1),null);
var seq__12833_12971 = cljs.core.seq.call(null,lines_12970__$1);
var chunk__12834_12972 = null;
var count__12835_12973 = (0);
var i__12836_12974 = (0);
while(true){
if((i__12836_12974 < count__12835_12973)){
var vec__12837_12975 = cljs.core._nth.call(null,chunk__12834_12972,i__12836_12974);
var line_12976 = cljs.core.nth.call(null,vec__12837_12975,(0),null);
var cols_12977 = cljs.core.nth.call(null,vec__12837_12975,(1),null);
var seq__12838_12978 = cljs.core.seq.call(null,cols_12977);
var chunk__12839_12979 = null;
var count__12840_12980 = (0);
var i__12841_12981 = (0);
while(true){
if((i__12841_12981 < count__12840_12980)){
var vec__12842_12982 = cljs.core._nth.call(null,chunk__12839_12979,i__12841_12981);
var col_12983 = cljs.core.nth.call(null,vec__12842_12982,(0),null);
var infos_12984 = cljs.core.nth.call(null,vec__12842_12982,(1),null);
encode_cols.call(null,infos_12984,source_idx_12967,line_12976,col_12983);

var G__12985 = seq__12838_12978;
var G__12986 = chunk__12839_12979;
var G__12987 = count__12840_12980;
var G__12988 = (i__12841_12981 + (1));
seq__12838_12978 = G__12985;
chunk__12839_12979 = G__12986;
count__12840_12980 = G__12987;
i__12841_12981 = G__12988;
continue;
} else {
var temp__4425__auto___12989__$1 = cljs.core.seq.call(null,seq__12838_12978);
if(temp__4425__auto___12989__$1){
var seq__12838_12990__$1 = temp__4425__auto___12989__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12838_12990__$1)){
var c__7256__auto___12991 = cljs.core.chunk_first.call(null,seq__12838_12990__$1);
var G__12992 = cljs.core.chunk_rest.call(null,seq__12838_12990__$1);
var G__12993 = c__7256__auto___12991;
var G__12994 = cljs.core.count.call(null,c__7256__auto___12991);
var G__12995 = (0);
seq__12838_12978 = G__12992;
chunk__12839_12979 = G__12993;
count__12840_12980 = G__12994;
i__12841_12981 = G__12995;
continue;
} else {
var vec__12843_12996 = cljs.core.first.call(null,seq__12838_12990__$1);
var col_12997 = cljs.core.nth.call(null,vec__12843_12996,(0),null);
var infos_12998 = cljs.core.nth.call(null,vec__12843_12996,(1),null);
encode_cols.call(null,infos_12998,source_idx_12967,line_12976,col_12997);

var G__12999 = cljs.core.next.call(null,seq__12838_12990__$1);
var G__13000 = null;
var G__13001 = (0);
var G__13002 = (0);
seq__12838_12978 = G__12999;
chunk__12839_12979 = G__13000;
count__12840_12980 = G__13001;
i__12841_12981 = G__13002;
continue;
}
} else {
}
}
break;
}

var G__13003 = seq__12833_12971;
var G__13004 = chunk__12834_12972;
var G__13005 = count__12835_12973;
var G__13006 = (i__12836_12974 + (1));
seq__12833_12971 = G__13003;
chunk__12834_12972 = G__13004;
count__12835_12973 = G__13005;
i__12836_12974 = G__13006;
continue;
} else {
var temp__4425__auto___13007__$1 = cljs.core.seq.call(null,seq__12833_12971);
if(temp__4425__auto___13007__$1){
var seq__12833_13008__$1 = temp__4425__auto___13007__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12833_13008__$1)){
var c__7256__auto___13009 = cljs.core.chunk_first.call(null,seq__12833_13008__$1);
var G__13010 = cljs.core.chunk_rest.call(null,seq__12833_13008__$1);
var G__13011 = c__7256__auto___13009;
var G__13012 = cljs.core.count.call(null,c__7256__auto___13009);
var G__13013 = (0);
seq__12833_12971 = G__13010;
chunk__12834_12972 = G__13011;
count__12835_12973 = G__13012;
i__12836_12974 = G__13013;
continue;
} else {
var vec__12844_13014 = cljs.core.first.call(null,seq__12833_13008__$1);
var line_13015 = cljs.core.nth.call(null,vec__12844_13014,(0),null);
var cols_13016 = cljs.core.nth.call(null,vec__12844_13014,(1),null);
var seq__12845_13017 = cljs.core.seq.call(null,cols_13016);
var chunk__12846_13018 = null;
var count__12847_13019 = (0);
var i__12848_13020 = (0);
while(true){
if((i__12848_13020 < count__12847_13019)){
var vec__12849_13021 = cljs.core._nth.call(null,chunk__12846_13018,i__12848_13020);
var col_13022 = cljs.core.nth.call(null,vec__12849_13021,(0),null);
var infos_13023 = cljs.core.nth.call(null,vec__12849_13021,(1),null);
encode_cols.call(null,infos_13023,source_idx_12967,line_13015,col_13022);

var G__13024 = seq__12845_13017;
var G__13025 = chunk__12846_13018;
var G__13026 = count__12847_13019;
var G__13027 = (i__12848_13020 + (1));
seq__12845_13017 = G__13024;
chunk__12846_13018 = G__13025;
count__12847_13019 = G__13026;
i__12848_13020 = G__13027;
continue;
} else {
var temp__4425__auto___13028__$2 = cljs.core.seq.call(null,seq__12845_13017);
if(temp__4425__auto___13028__$2){
var seq__12845_13029__$1 = temp__4425__auto___13028__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12845_13029__$1)){
var c__7256__auto___13030 = cljs.core.chunk_first.call(null,seq__12845_13029__$1);
var G__13031 = cljs.core.chunk_rest.call(null,seq__12845_13029__$1);
var G__13032 = c__7256__auto___13030;
var G__13033 = cljs.core.count.call(null,c__7256__auto___13030);
var G__13034 = (0);
seq__12845_13017 = G__13031;
chunk__12846_13018 = G__13032;
count__12847_13019 = G__13033;
i__12848_13020 = G__13034;
continue;
} else {
var vec__12850_13035 = cljs.core.first.call(null,seq__12845_13029__$1);
var col_13036 = cljs.core.nth.call(null,vec__12850_13035,(0),null);
var infos_13037 = cljs.core.nth.call(null,vec__12850_13035,(1),null);
encode_cols.call(null,infos_13037,source_idx_12967,line_13015,col_13036);

var G__13038 = cljs.core.next.call(null,seq__12845_13029__$1);
var G__13039 = null;
var G__13040 = (0);
var G__13041 = (0);
seq__12845_13017 = G__13038;
chunk__12846_13018 = G__13039;
count__12847_13019 = G__13040;
i__12848_13020 = G__13041;
continue;
}
} else {
}
}
break;
}

var G__13042 = cljs.core.next.call(null,seq__12833_13008__$1);
var G__13043 = null;
var G__13044 = (0);
var G__13045 = (0);
seq__12833_12971 = G__13042;
chunk__12834_12972 = G__13043;
count__12835_12973 = G__13044;
i__12836_12974 = G__13045;
continue;
}
} else {
}
}
break;
}

var G__13046 = cljs.core.next.call(null,seq__12807_12960__$1);
var G__13047 = null;
var G__13048 = (0);
var G__13049 = (0);
seq__12807_12871 = G__13046;
chunk__12808_12872 = G__13047;
count__12809_12873 = G__13048;
i__12810_12874 = G__13049;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__12851 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12750_SHARP_){
return [cljs.core.str(p1__12750_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12751_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__12751_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12752_SHARP_){
return clojure.string.join.call(null,",",p1__12752_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__12851__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__12852 = G__12851;
goog.object.set(G__12852,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__12852;
})():G__12851);
return G__12851__$1;
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__13055 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__13055,(0),null);
var col_map = cljs.core.nth.call(null,vec__13055,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__13056 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__13056,(0),null);
var infos = cljs.core.nth.call(null,vec__13056,(1),null);
var G__13060 = cljs.core.next.call(null,col_map_seq);
var G__13061 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__13056,col,infos,vec__13055,line,col_map){
return (function (v,p__13057){
var map__13058 = p__13057;
var map__13058__$1 = ((((!((map__13058 == null)))?((((map__13058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13058):map__13058);
var gline = cljs.core.get.call(null,map__13058__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__13058__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__13056,col,infos,vec__13055,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__13060;
new_cols = G__13061;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__13062 = cljs.core.next.call(null,line_map_seq);
var G__13063 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__13062;
new_lines = G__13063;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__13114_13164 = cljs.core.seq.call(null,reverse_map);
var chunk__13115_13165 = null;
var count__13116_13166 = (0);
var i__13117_13167 = (0);
while(true){
if((i__13117_13167 < count__13116_13166)){
var vec__13118_13168 = cljs.core._nth.call(null,chunk__13115_13165,i__13117_13167);
var line_13169 = cljs.core.nth.call(null,vec__13118_13168,(0),null);
var columns_13170 = cljs.core.nth.call(null,vec__13118_13168,(1),null);
var seq__13119_13171 = cljs.core.seq.call(null,columns_13170);
var chunk__13120_13172 = null;
var count__13121_13173 = (0);
var i__13122_13174 = (0);
while(true){
if((i__13122_13174 < count__13121_13173)){
var vec__13123_13175 = cljs.core._nth.call(null,chunk__13120_13172,i__13122_13174);
var column_13176 = cljs.core.nth.call(null,vec__13123_13175,(0),null);
var column_info_13177 = cljs.core.nth.call(null,vec__13123_13175,(1),null);
var seq__13124_13178 = cljs.core.seq.call(null,column_info_13177);
var chunk__13125_13179 = null;
var count__13126_13180 = (0);
var i__13127_13181 = (0);
while(true){
if((i__13127_13181 < count__13126_13180)){
var map__13128_13182 = cljs.core._nth.call(null,chunk__13125_13179,i__13127_13181);
var map__13128_13183__$1 = ((((!((map__13128_13182 == null)))?((((map__13128_13182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13128_13182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13128_13182):map__13128_13182);
var gline_13184 = cljs.core.get.call(null,map__13128_13183__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13185 = cljs.core.get.call(null,map__13128_13183__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13186 = cljs.core.get.call(null,map__13128_13183__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13184], null),cljs.core.fnil.call(null,((function (seq__13124_13178,chunk__13125_13179,count__13126_13180,i__13127_13181,seq__13119_13171,chunk__13120_13172,count__13121_13173,i__13122_13174,seq__13114_13164,chunk__13115_13165,count__13116_13166,i__13117_13167,map__13128_13182,map__13128_13183__$1,gline_13184,gcol_13185,name_13186,vec__13123_13175,column_13176,column_info_13177,vec__13118_13168,line_13169,columns_13170,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_13176], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13169,new cljs.core.Keyword(null,"col","col",-1959363084),column_13176,new cljs.core.Keyword(null,"name","name",1843675177),name_13186], null));
});})(seq__13124_13178,chunk__13125_13179,count__13126_13180,i__13127_13181,seq__13119_13171,chunk__13120_13172,count__13121_13173,i__13122_13174,seq__13114_13164,chunk__13115_13165,count__13116_13166,i__13117_13167,map__13128_13182,map__13128_13183__$1,gline_13184,gcol_13185,name_13186,vec__13123_13175,column_13176,column_info_13177,vec__13118_13168,line_13169,columns_13170,inverted))
,cljs.core.sorted_map.call(null)));

var G__13187 = seq__13124_13178;
var G__13188 = chunk__13125_13179;
var G__13189 = count__13126_13180;
var G__13190 = (i__13127_13181 + (1));
seq__13124_13178 = G__13187;
chunk__13125_13179 = G__13188;
count__13126_13180 = G__13189;
i__13127_13181 = G__13190;
continue;
} else {
var temp__4425__auto___13191 = cljs.core.seq.call(null,seq__13124_13178);
if(temp__4425__auto___13191){
var seq__13124_13192__$1 = temp__4425__auto___13191;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13124_13192__$1)){
var c__7256__auto___13193 = cljs.core.chunk_first.call(null,seq__13124_13192__$1);
var G__13194 = cljs.core.chunk_rest.call(null,seq__13124_13192__$1);
var G__13195 = c__7256__auto___13193;
var G__13196 = cljs.core.count.call(null,c__7256__auto___13193);
var G__13197 = (0);
seq__13124_13178 = G__13194;
chunk__13125_13179 = G__13195;
count__13126_13180 = G__13196;
i__13127_13181 = G__13197;
continue;
} else {
var map__13130_13198 = cljs.core.first.call(null,seq__13124_13192__$1);
var map__13130_13199__$1 = ((((!((map__13130_13198 == null)))?((((map__13130_13198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13130_13198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13130_13198):map__13130_13198);
var gline_13200 = cljs.core.get.call(null,map__13130_13199__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13201 = cljs.core.get.call(null,map__13130_13199__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13202 = cljs.core.get.call(null,map__13130_13199__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13200], null),cljs.core.fnil.call(null,((function (seq__13124_13178,chunk__13125_13179,count__13126_13180,i__13127_13181,seq__13119_13171,chunk__13120_13172,count__13121_13173,i__13122_13174,seq__13114_13164,chunk__13115_13165,count__13116_13166,i__13117_13167,map__13130_13198,map__13130_13199__$1,gline_13200,gcol_13201,name_13202,seq__13124_13192__$1,temp__4425__auto___13191,vec__13123_13175,column_13176,column_info_13177,vec__13118_13168,line_13169,columns_13170,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_13176], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13169,new cljs.core.Keyword(null,"col","col",-1959363084),column_13176,new cljs.core.Keyword(null,"name","name",1843675177),name_13202], null));
});})(seq__13124_13178,chunk__13125_13179,count__13126_13180,i__13127_13181,seq__13119_13171,chunk__13120_13172,count__13121_13173,i__13122_13174,seq__13114_13164,chunk__13115_13165,count__13116_13166,i__13117_13167,map__13130_13198,map__13130_13199__$1,gline_13200,gcol_13201,name_13202,seq__13124_13192__$1,temp__4425__auto___13191,vec__13123_13175,column_13176,column_info_13177,vec__13118_13168,line_13169,columns_13170,inverted))
,cljs.core.sorted_map.call(null)));

var G__13203 = cljs.core.next.call(null,seq__13124_13192__$1);
var G__13204 = null;
var G__13205 = (0);
var G__13206 = (0);
seq__13124_13178 = G__13203;
chunk__13125_13179 = G__13204;
count__13126_13180 = G__13205;
i__13127_13181 = G__13206;
continue;
}
} else {
}
}
break;
}

var G__13207 = seq__13119_13171;
var G__13208 = chunk__13120_13172;
var G__13209 = count__13121_13173;
var G__13210 = (i__13122_13174 + (1));
seq__13119_13171 = G__13207;
chunk__13120_13172 = G__13208;
count__13121_13173 = G__13209;
i__13122_13174 = G__13210;
continue;
} else {
var temp__4425__auto___13211 = cljs.core.seq.call(null,seq__13119_13171);
if(temp__4425__auto___13211){
var seq__13119_13212__$1 = temp__4425__auto___13211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13119_13212__$1)){
var c__7256__auto___13213 = cljs.core.chunk_first.call(null,seq__13119_13212__$1);
var G__13214 = cljs.core.chunk_rest.call(null,seq__13119_13212__$1);
var G__13215 = c__7256__auto___13213;
var G__13216 = cljs.core.count.call(null,c__7256__auto___13213);
var G__13217 = (0);
seq__13119_13171 = G__13214;
chunk__13120_13172 = G__13215;
count__13121_13173 = G__13216;
i__13122_13174 = G__13217;
continue;
} else {
var vec__13132_13218 = cljs.core.first.call(null,seq__13119_13212__$1);
var column_13219 = cljs.core.nth.call(null,vec__13132_13218,(0),null);
var column_info_13220 = cljs.core.nth.call(null,vec__13132_13218,(1),null);
var seq__13133_13221 = cljs.core.seq.call(null,column_info_13220);
var chunk__13134_13222 = null;
var count__13135_13223 = (0);
var i__13136_13224 = (0);
while(true){
if((i__13136_13224 < count__13135_13223)){
var map__13137_13225 = cljs.core._nth.call(null,chunk__13134_13222,i__13136_13224);
var map__13137_13226__$1 = ((((!((map__13137_13225 == null)))?((((map__13137_13225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13137_13225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13137_13225):map__13137_13225);
var gline_13227 = cljs.core.get.call(null,map__13137_13226__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13228 = cljs.core.get.call(null,map__13137_13226__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13229 = cljs.core.get.call(null,map__13137_13226__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13227], null),cljs.core.fnil.call(null,((function (seq__13133_13221,chunk__13134_13222,count__13135_13223,i__13136_13224,seq__13119_13171,chunk__13120_13172,count__13121_13173,i__13122_13174,seq__13114_13164,chunk__13115_13165,count__13116_13166,i__13117_13167,map__13137_13225,map__13137_13226__$1,gline_13227,gcol_13228,name_13229,vec__13132_13218,column_13219,column_info_13220,seq__13119_13212__$1,temp__4425__auto___13211,vec__13118_13168,line_13169,columns_13170,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_13219], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13169,new cljs.core.Keyword(null,"col","col",-1959363084),column_13219,new cljs.core.Keyword(null,"name","name",1843675177),name_13229], null));
});})(seq__13133_13221,chunk__13134_13222,count__13135_13223,i__13136_13224,seq__13119_13171,chunk__13120_13172,count__13121_13173,i__13122_13174,seq__13114_13164,chunk__13115_13165,count__13116_13166,i__13117_13167,map__13137_13225,map__13137_13226__$1,gline_13227,gcol_13228,name_13229,vec__13132_13218,column_13219,column_info_13220,seq__13119_13212__$1,temp__4425__auto___13211,vec__13118_13168,line_13169,columns_13170,inverted))
,cljs.core.sorted_map.call(null)));

var G__13230 = seq__13133_13221;
var G__13231 = chunk__13134_13222;
var G__13232 = count__13135_13223;
var G__13233 = (i__13136_13224 + (1));
seq__13133_13221 = G__13230;
chunk__13134_13222 = G__13231;
count__13135_13223 = G__13232;
i__13136_13224 = G__13233;
continue;
} else {
var temp__4425__auto___13234__$1 = cljs.core.seq.call(null,seq__13133_13221);
if(temp__4425__auto___13234__$1){
var seq__13133_13235__$1 = temp__4425__auto___13234__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13133_13235__$1)){
var c__7256__auto___13236 = cljs.core.chunk_first.call(null,seq__13133_13235__$1);
var G__13237 = cljs.core.chunk_rest.call(null,seq__13133_13235__$1);
var G__13238 = c__7256__auto___13236;
var G__13239 = cljs.core.count.call(null,c__7256__auto___13236);
var G__13240 = (0);
seq__13133_13221 = G__13237;
chunk__13134_13222 = G__13238;
count__13135_13223 = G__13239;
i__13136_13224 = G__13240;
continue;
} else {
var map__13139_13241 = cljs.core.first.call(null,seq__13133_13235__$1);
var map__13139_13242__$1 = ((((!((map__13139_13241 == null)))?((((map__13139_13241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13139_13241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13139_13241):map__13139_13241);
var gline_13243 = cljs.core.get.call(null,map__13139_13242__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13244 = cljs.core.get.call(null,map__13139_13242__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13245 = cljs.core.get.call(null,map__13139_13242__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13243], null),cljs.core.fnil.call(null,((function (seq__13133_13221,chunk__13134_13222,count__13135_13223,i__13136_13224,seq__13119_13171,chunk__13120_13172,count__13121_13173,i__13122_13174,seq__13114_13164,chunk__13115_13165,count__13116_13166,i__13117_13167,map__13139_13241,map__13139_13242__$1,gline_13243,gcol_13244,name_13245,seq__13133_13235__$1,temp__4425__auto___13234__$1,vec__13132_13218,column_13219,column_info_13220,seq__13119_13212__$1,temp__4425__auto___13211,vec__13118_13168,line_13169,columns_13170,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_13219], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13169,new cljs.core.Keyword(null,"col","col",-1959363084),column_13219,new cljs.core.Keyword(null,"name","name",1843675177),name_13245], null));
});})(seq__13133_13221,chunk__13134_13222,count__13135_13223,i__13136_13224,seq__13119_13171,chunk__13120_13172,count__13121_13173,i__13122_13174,seq__13114_13164,chunk__13115_13165,count__13116_13166,i__13117_13167,map__13139_13241,map__13139_13242__$1,gline_13243,gcol_13244,name_13245,seq__13133_13235__$1,temp__4425__auto___13234__$1,vec__13132_13218,column_13219,column_info_13220,seq__13119_13212__$1,temp__4425__auto___13211,vec__13118_13168,line_13169,columns_13170,inverted))
,cljs.core.sorted_map.call(null)));

var G__13246 = cljs.core.next.call(null,seq__13133_13235__$1);
var G__13247 = null;
var G__13248 = (0);
var G__13249 = (0);
seq__13133_13221 = G__13246;
chunk__13134_13222 = G__13247;
count__13135_13223 = G__13248;
i__13136_13224 = G__13249;
continue;
}
} else {
}
}
break;
}

var G__13250 = cljs.core.next.call(null,seq__13119_13212__$1);
var G__13251 = null;
var G__13252 = (0);
var G__13253 = (0);
seq__13119_13171 = G__13250;
chunk__13120_13172 = G__13251;
count__13121_13173 = G__13252;
i__13122_13174 = G__13253;
continue;
}
} else {
}
}
break;
}

var G__13254 = seq__13114_13164;
var G__13255 = chunk__13115_13165;
var G__13256 = count__13116_13166;
var G__13257 = (i__13117_13167 + (1));
seq__13114_13164 = G__13254;
chunk__13115_13165 = G__13255;
count__13116_13166 = G__13256;
i__13117_13167 = G__13257;
continue;
} else {
var temp__4425__auto___13258 = cljs.core.seq.call(null,seq__13114_13164);
if(temp__4425__auto___13258){
var seq__13114_13259__$1 = temp__4425__auto___13258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13114_13259__$1)){
var c__7256__auto___13260 = cljs.core.chunk_first.call(null,seq__13114_13259__$1);
var G__13261 = cljs.core.chunk_rest.call(null,seq__13114_13259__$1);
var G__13262 = c__7256__auto___13260;
var G__13263 = cljs.core.count.call(null,c__7256__auto___13260);
var G__13264 = (0);
seq__13114_13164 = G__13261;
chunk__13115_13165 = G__13262;
count__13116_13166 = G__13263;
i__13117_13167 = G__13264;
continue;
} else {
var vec__13141_13265 = cljs.core.first.call(null,seq__13114_13259__$1);
var line_13266 = cljs.core.nth.call(null,vec__13141_13265,(0),null);
var columns_13267 = cljs.core.nth.call(null,vec__13141_13265,(1),null);
var seq__13142_13268 = cljs.core.seq.call(null,columns_13267);
var chunk__13143_13269 = null;
var count__13144_13270 = (0);
var i__13145_13271 = (0);
while(true){
if((i__13145_13271 < count__13144_13270)){
var vec__13146_13272 = cljs.core._nth.call(null,chunk__13143_13269,i__13145_13271);
var column_13273 = cljs.core.nth.call(null,vec__13146_13272,(0),null);
var column_info_13274 = cljs.core.nth.call(null,vec__13146_13272,(1),null);
var seq__13147_13275 = cljs.core.seq.call(null,column_info_13274);
var chunk__13148_13276 = null;
var count__13149_13277 = (0);
var i__13150_13278 = (0);
while(true){
if((i__13150_13278 < count__13149_13277)){
var map__13151_13279 = cljs.core._nth.call(null,chunk__13148_13276,i__13150_13278);
var map__13151_13280__$1 = ((((!((map__13151_13279 == null)))?((((map__13151_13279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13151_13279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13151_13279):map__13151_13279);
var gline_13281 = cljs.core.get.call(null,map__13151_13280__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13282 = cljs.core.get.call(null,map__13151_13280__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13283 = cljs.core.get.call(null,map__13151_13280__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13281], null),cljs.core.fnil.call(null,((function (seq__13147_13275,chunk__13148_13276,count__13149_13277,i__13150_13278,seq__13142_13268,chunk__13143_13269,count__13144_13270,i__13145_13271,seq__13114_13164,chunk__13115_13165,count__13116_13166,i__13117_13167,map__13151_13279,map__13151_13280__$1,gline_13281,gcol_13282,name_13283,vec__13146_13272,column_13273,column_info_13274,vec__13141_13265,line_13266,columns_13267,seq__13114_13259__$1,temp__4425__auto___13258,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_13273], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13266,new cljs.core.Keyword(null,"col","col",-1959363084),column_13273,new cljs.core.Keyword(null,"name","name",1843675177),name_13283], null));
});})(seq__13147_13275,chunk__13148_13276,count__13149_13277,i__13150_13278,seq__13142_13268,chunk__13143_13269,count__13144_13270,i__13145_13271,seq__13114_13164,chunk__13115_13165,count__13116_13166,i__13117_13167,map__13151_13279,map__13151_13280__$1,gline_13281,gcol_13282,name_13283,vec__13146_13272,column_13273,column_info_13274,vec__13141_13265,line_13266,columns_13267,seq__13114_13259__$1,temp__4425__auto___13258,inverted))
,cljs.core.sorted_map.call(null)));

var G__13284 = seq__13147_13275;
var G__13285 = chunk__13148_13276;
var G__13286 = count__13149_13277;
var G__13287 = (i__13150_13278 + (1));
seq__13147_13275 = G__13284;
chunk__13148_13276 = G__13285;
count__13149_13277 = G__13286;
i__13150_13278 = G__13287;
continue;
} else {
var temp__4425__auto___13288__$1 = cljs.core.seq.call(null,seq__13147_13275);
if(temp__4425__auto___13288__$1){
var seq__13147_13289__$1 = temp__4425__auto___13288__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13147_13289__$1)){
var c__7256__auto___13290 = cljs.core.chunk_first.call(null,seq__13147_13289__$1);
var G__13291 = cljs.core.chunk_rest.call(null,seq__13147_13289__$1);
var G__13292 = c__7256__auto___13290;
var G__13293 = cljs.core.count.call(null,c__7256__auto___13290);
var G__13294 = (0);
seq__13147_13275 = G__13291;
chunk__13148_13276 = G__13292;
count__13149_13277 = G__13293;
i__13150_13278 = G__13294;
continue;
} else {
var map__13153_13295 = cljs.core.first.call(null,seq__13147_13289__$1);
var map__13153_13296__$1 = ((((!((map__13153_13295 == null)))?((((map__13153_13295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13153_13295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13153_13295):map__13153_13295);
var gline_13297 = cljs.core.get.call(null,map__13153_13296__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13298 = cljs.core.get.call(null,map__13153_13296__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13299 = cljs.core.get.call(null,map__13153_13296__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13297], null),cljs.core.fnil.call(null,((function (seq__13147_13275,chunk__13148_13276,count__13149_13277,i__13150_13278,seq__13142_13268,chunk__13143_13269,count__13144_13270,i__13145_13271,seq__13114_13164,chunk__13115_13165,count__13116_13166,i__13117_13167,map__13153_13295,map__13153_13296__$1,gline_13297,gcol_13298,name_13299,seq__13147_13289__$1,temp__4425__auto___13288__$1,vec__13146_13272,column_13273,column_info_13274,vec__13141_13265,line_13266,columns_13267,seq__13114_13259__$1,temp__4425__auto___13258,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_13273], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13266,new cljs.core.Keyword(null,"col","col",-1959363084),column_13273,new cljs.core.Keyword(null,"name","name",1843675177),name_13299], null));
});})(seq__13147_13275,chunk__13148_13276,count__13149_13277,i__13150_13278,seq__13142_13268,chunk__13143_13269,count__13144_13270,i__13145_13271,seq__13114_13164,chunk__13115_13165,count__13116_13166,i__13117_13167,map__13153_13295,map__13153_13296__$1,gline_13297,gcol_13298,name_13299,seq__13147_13289__$1,temp__4425__auto___13288__$1,vec__13146_13272,column_13273,column_info_13274,vec__13141_13265,line_13266,columns_13267,seq__13114_13259__$1,temp__4425__auto___13258,inverted))
,cljs.core.sorted_map.call(null)));

var G__13300 = cljs.core.next.call(null,seq__13147_13289__$1);
var G__13301 = null;
var G__13302 = (0);
var G__13303 = (0);
seq__13147_13275 = G__13300;
chunk__13148_13276 = G__13301;
count__13149_13277 = G__13302;
i__13150_13278 = G__13303;
continue;
}
} else {
}
}
break;
}

var G__13304 = seq__13142_13268;
var G__13305 = chunk__13143_13269;
var G__13306 = count__13144_13270;
var G__13307 = (i__13145_13271 + (1));
seq__13142_13268 = G__13304;
chunk__13143_13269 = G__13305;
count__13144_13270 = G__13306;
i__13145_13271 = G__13307;
continue;
} else {
var temp__4425__auto___13308__$1 = cljs.core.seq.call(null,seq__13142_13268);
if(temp__4425__auto___13308__$1){
var seq__13142_13309__$1 = temp__4425__auto___13308__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13142_13309__$1)){
var c__7256__auto___13310 = cljs.core.chunk_first.call(null,seq__13142_13309__$1);
var G__13311 = cljs.core.chunk_rest.call(null,seq__13142_13309__$1);
var G__13312 = c__7256__auto___13310;
var G__13313 = cljs.core.count.call(null,c__7256__auto___13310);
var G__13314 = (0);
seq__13142_13268 = G__13311;
chunk__13143_13269 = G__13312;
count__13144_13270 = G__13313;
i__13145_13271 = G__13314;
continue;
} else {
var vec__13155_13315 = cljs.core.first.call(null,seq__13142_13309__$1);
var column_13316 = cljs.core.nth.call(null,vec__13155_13315,(0),null);
var column_info_13317 = cljs.core.nth.call(null,vec__13155_13315,(1),null);
var seq__13156_13318 = cljs.core.seq.call(null,column_info_13317);
var chunk__13157_13319 = null;
var count__13158_13320 = (0);
var i__13159_13321 = (0);
while(true){
if((i__13159_13321 < count__13158_13320)){
var map__13160_13322 = cljs.core._nth.call(null,chunk__13157_13319,i__13159_13321);
var map__13160_13323__$1 = ((((!((map__13160_13322 == null)))?((((map__13160_13322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13160_13322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13160_13322):map__13160_13322);
var gline_13324 = cljs.core.get.call(null,map__13160_13323__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13325 = cljs.core.get.call(null,map__13160_13323__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13326 = cljs.core.get.call(null,map__13160_13323__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13324], null),cljs.core.fnil.call(null,((function (seq__13156_13318,chunk__13157_13319,count__13158_13320,i__13159_13321,seq__13142_13268,chunk__13143_13269,count__13144_13270,i__13145_13271,seq__13114_13164,chunk__13115_13165,count__13116_13166,i__13117_13167,map__13160_13322,map__13160_13323__$1,gline_13324,gcol_13325,name_13326,vec__13155_13315,column_13316,column_info_13317,seq__13142_13309__$1,temp__4425__auto___13308__$1,vec__13141_13265,line_13266,columns_13267,seq__13114_13259__$1,temp__4425__auto___13258,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_13316], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13266,new cljs.core.Keyword(null,"col","col",-1959363084),column_13316,new cljs.core.Keyword(null,"name","name",1843675177),name_13326], null));
});})(seq__13156_13318,chunk__13157_13319,count__13158_13320,i__13159_13321,seq__13142_13268,chunk__13143_13269,count__13144_13270,i__13145_13271,seq__13114_13164,chunk__13115_13165,count__13116_13166,i__13117_13167,map__13160_13322,map__13160_13323__$1,gline_13324,gcol_13325,name_13326,vec__13155_13315,column_13316,column_info_13317,seq__13142_13309__$1,temp__4425__auto___13308__$1,vec__13141_13265,line_13266,columns_13267,seq__13114_13259__$1,temp__4425__auto___13258,inverted))
,cljs.core.sorted_map.call(null)));

var G__13327 = seq__13156_13318;
var G__13328 = chunk__13157_13319;
var G__13329 = count__13158_13320;
var G__13330 = (i__13159_13321 + (1));
seq__13156_13318 = G__13327;
chunk__13157_13319 = G__13328;
count__13158_13320 = G__13329;
i__13159_13321 = G__13330;
continue;
} else {
var temp__4425__auto___13331__$2 = cljs.core.seq.call(null,seq__13156_13318);
if(temp__4425__auto___13331__$2){
var seq__13156_13332__$1 = temp__4425__auto___13331__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13156_13332__$1)){
var c__7256__auto___13333 = cljs.core.chunk_first.call(null,seq__13156_13332__$1);
var G__13334 = cljs.core.chunk_rest.call(null,seq__13156_13332__$1);
var G__13335 = c__7256__auto___13333;
var G__13336 = cljs.core.count.call(null,c__7256__auto___13333);
var G__13337 = (0);
seq__13156_13318 = G__13334;
chunk__13157_13319 = G__13335;
count__13158_13320 = G__13336;
i__13159_13321 = G__13337;
continue;
} else {
var map__13162_13338 = cljs.core.first.call(null,seq__13156_13332__$1);
var map__13162_13339__$1 = ((((!((map__13162_13338 == null)))?((((map__13162_13338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13162_13338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13162_13338):map__13162_13338);
var gline_13340 = cljs.core.get.call(null,map__13162_13339__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13341 = cljs.core.get.call(null,map__13162_13339__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13342 = cljs.core.get.call(null,map__13162_13339__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13340], null),cljs.core.fnil.call(null,((function (seq__13156_13318,chunk__13157_13319,count__13158_13320,i__13159_13321,seq__13142_13268,chunk__13143_13269,count__13144_13270,i__13145_13271,seq__13114_13164,chunk__13115_13165,count__13116_13166,i__13117_13167,map__13162_13338,map__13162_13339__$1,gline_13340,gcol_13341,name_13342,seq__13156_13332__$1,temp__4425__auto___13331__$2,vec__13155_13315,column_13316,column_info_13317,seq__13142_13309__$1,temp__4425__auto___13308__$1,vec__13141_13265,line_13266,columns_13267,seq__13114_13259__$1,temp__4425__auto___13258,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_13316], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13266,new cljs.core.Keyword(null,"col","col",-1959363084),column_13316,new cljs.core.Keyword(null,"name","name",1843675177),name_13342], null));
});})(seq__13156_13318,chunk__13157_13319,count__13158_13320,i__13159_13321,seq__13142_13268,chunk__13143_13269,count__13144_13270,i__13145_13271,seq__13114_13164,chunk__13115_13165,count__13116_13166,i__13117_13167,map__13162_13338,map__13162_13339__$1,gline_13340,gcol_13341,name_13342,seq__13156_13332__$1,temp__4425__auto___13331__$2,vec__13155_13315,column_13316,column_info_13317,seq__13142_13309__$1,temp__4425__auto___13308__$1,vec__13141_13265,line_13266,columns_13267,seq__13114_13259__$1,temp__4425__auto___13258,inverted))
,cljs.core.sorted_map.call(null)));

var G__13343 = cljs.core.next.call(null,seq__13156_13332__$1);
var G__13344 = null;
var G__13345 = (0);
var G__13346 = (0);
seq__13156_13318 = G__13343;
chunk__13157_13319 = G__13344;
count__13158_13320 = G__13345;
i__13159_13321 = G__13346;
continue;
}
} else {
}
}
break;
}

var G__13347 = cljs.core.next.call(null,seq__13142_13309__$1);
var G__13348 = null;
var G__13349 = (0);
var G__13350 = (0);
seq__13142_13268 = G__13347;
chunk__13143_13269 = G__13348;
count__13144_13270 = G__13349;
i__13145_13271 = G__13350;
continue;
}
} else {
}
}
break;
}

var G__13351 = cljs.core.next.call(null,seq__13114_13259__$1);
var G__13352 = null;
var G__13353 = (0);
var G__13354 = (0);
seq__13114_13164 = G__13351;
chunk__13115_13165 = G__13352;
count__13116_13166 = G__13353;
i__13117_13167 = G__13354;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});
