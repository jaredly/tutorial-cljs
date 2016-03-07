// Compiled by ClojureScript 1.7.228 {}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"java2d","java2d",166099237),(Processing.prototype.PConstants["JAVA2D"]),new cljs.core.Keyword(null,"p2d","p2d",-2106175755),(Processing.prototype.PConstants["P2D"]),new cljs.core.Keyword(null,"p3d","p3d",-850380194),(Processing.prototype.PConstants["P3D"]),new cljs.core.Keyword(null,"opengl","opengl",-614998103),(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes);
});
quil.sketch.size = (function quil$sketch$size(var_args){
var args15186 = [];
var len__7511__auto___15189 = arguments.length;
var i__7512__auto___15190 = (0);
while(true){
if((i__7512__auto___15190 < len__7511__auto___15189)){
args15186.push((arguments[i__7512__auto___15190]));

var G__15191 = (i__7512__auto___15190 + (1));
i__7512__auto___15190 = G__15191;
continue;
} else {
}
break;
}

var G__15188 = args15186.length;
switch (G__15188) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15186.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)),quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;
quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__15201 = cljs.core.seq.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseScrolled","mouseScrolled",31878252),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));
var chunk__15202 = null;
var count__15203 = (0);
var i__15204 = (0);
while(true){
if((i__15204 < count__15203)){
var vec__15205 = cljs.core._nth.call(null,chunk__15202,i__15204);
var processing_name = cljs.core.nth.call(null,vec__15205,(0),null);
var quil_name = cljs.core.nth.call(null,vec__15205,(1),null);
var temp__4425__auto___15209 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__4425__auto___15209)){
var handler_15210 = temp__4425__auto___15209;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__15201,chunk__15202,count__15203,i__15204,handler_15210,temp__4425__auto___15209,vec__15205,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_15206 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_15210.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_15206;
}});})(seq__15201,chunk__15202,count__15203,i__15204,handler_15210,temp__4425__auto___15209,vec__15205,processing_name,quil_name))
);
} else {
}

var G__15211 = seq__15201;
var G__15212 = chunk__15202;
var G__15213 = count__15203;
var G__15214 = (i__15204 + (1));
seq__15201 = G__15211;
chunk__15202 = G__15212;
count__15203 = G__15213;
i__15204 = G__15214;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15201);
if(temp__4425__auto__){
var seq__15201__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15201__$1)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,seq__15201__$1);
var G__15215 = cljs.core.chunk_rest.call(null,seq__15201__$1);
var G__15216 = c__7256__auto__;
var G__15217 = cljs.core.count.call(null,c__7256__auto__);
var G__15218 = (0);
seq__15201 = G__15215;
chunk__15202 = G__15216;
count__15203 = G__15217;
i__15204 = G__15218;
continue;
} else {
var vec__15207 = cljs.core.first.call(null,seq__15201__$1);
var processing_name = cljs.core.nth.call(null,vec__15207,(0),null);
var quil_name = cljs.core.nth.call(null,vec__15207,(1),null);
var temp__4425__auto___15219__$1 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__4425__auto___15219__$1)){
var handler_15220 = temp__4425__auto___15219__$1;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__15201,chunk__15202,count__15203,i__15204,handler_15220,temp__4425__auto___15219__$1,vec__15207,processing_name,quil_name,seq__15201__$1,temp__4425__auto__){
return (function (){
var _STAR_applet_STAR_15208 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_15220.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_15208;
}});})(seq__15201,chunk__15202,count__15203,i__15204,handler_15220,temp__4425__auto___15219__$1,vec__15207,processing_name,quil_name,seq__15201__$1,temp__4425__auto__))
);
} else {
}

var G__15221 = cljs.core.next.call(null,seq__15201__$1);
var G__15222 = null;
var G__15223 = (0);
var G__15224 = (0);
seq__15201 = G__15221;
chunk__15202 = G__15222;
count__15203 = G__15223;
i__15204 = G__15224;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__15225_SHARP_){
return p1__15225_SHARP_.call(null,options);
}).call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.cons.call(null,quil.middlewares.deprecated_options.deprecated_options,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)))));
var sketch_size = (function (){var or__6453__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set.call(null,new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(opts));
var opts__$1 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setup","setup",1987730512)], null),((function (opts,sketch_size,renderer,features){
return (function (p1__15226_SHARP_){
return ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.call(null,quil.sketch.size,cljs.core.concat.call(null,sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(p1__15226_SHARP_)){
return p1__15226_SHARP_.call(null);
} else {
return null;
}
});
;})(opts,sketch_size,renderer,features))
});})(opts,sketch_size,renderer,features))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439)], null),((function (opts,sketch_size,renderer,features){
return (function (p1__15227_SHARP_){
if(cljs.core.truth_(p1__15227_SHARP_)){
return ((function (opts,sketch_size,renderer,features){
return (function (){
return p1__15227_SHARP_.call(null,((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll));
});
;})(opts,sketch_size,renderer,features))
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
);
var attach_function = ((function (opts,sketch_size,renderer,features,opts__$1){
return (function (prc){
quil.sketch.bind_handlers.call(null,prc,opts__$1);

prc.quil = cljs.core.atom.call(null,null);

return prc.target_frame_rate = cljs.core.atom.call(null,(60));
});})(opts,sketch_size,renderer,features,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_.call(null,features,new cljs.core.Keyword(null,"global-key-events","global-key-events",335064944))){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__7518__auto__ = [];
var len__7511__auto___15229 = arguments.length;
var i__7512__auto___15230 = (0);
while(true){
if((i__7512__auto___15230 < len__7511__auto___15229)){
args__7518__auto__.push((arguments[i__7512__auto___15230]));

var G__15231 = (i__7512__auto___15230 + (1));
i__7512__auto___15230 = G__15231;
continue;
} else {
}
break;
}

var argseq__7519__auto__ = ((((0) < args__7518__auto__.length))?(new cljs.core.IndexedSeq(args__7518__auto__.slice((0)),(0))):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__7519__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var host_elem = goog.dom.getElement(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map));
var renderer = (function (){var or__6453__auto__ = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return new cljs.core.Keyword(null,"p2d","p2d",-2106175755);
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.call(null,renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

return (new Processing(host_elem,quil.sketch.make_sketch.call(null,opts_map)));
} else {
return console.warn("WARNING: Cannot create sketch. :host is not specified.");
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

quil.sketch.sketch.cljs$lang$applyTo = (function (seq15228){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15228));
});
quil.sketch.sketch_init_list = cljs.core.atom.call(null,cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK_ = quil.sketch.empty_body_QMARK_.call(null);
var seq__15236 = cljs.core.seq.call(null,cljs.core.deref.call(null,quil.sketch.sketch_init_list));
var chunk__15237 = null;
var count__15238 = (0);
var i__15239 = (0);
while(true){
if((i__15239 < count__15238)){
var sk = cljs.core._nth.call(null,chunk__15237,i__15239);
if(cljs.core.truth_(add_elem_QMARK_)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk).call(null);

var G__15240 = seq__15236;
var G__15241 = chunk__15237;
var G__15242 = count__15238;
var G__15243 = (i__15239 + (1));
seq__15236 = G__15240;
chunk__15237 = G__15241;
count__15238 = G__15242;
i__15239 = G__15243;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15236);
if(temp__4425__auto__){
var seq__15236__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15236__$1)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,seq__15236__$1);
var G__15244 = cljs.core.chunk_rest.call(null,seq__15236__$1);
var G__15245 = c__7256__auto__;
var G__15246 = cljs.core.count.call(null,c__7256__auto__);
var G__15247 = (0);
seq__15236 = G__15244;
chunk__15237 = G__15245;
count__15238 = G__15246;
i__15239 = G__15247;
continue;
} else {
var sk = cljs.core.first.call(null,seq__15236__$1);
if(cljs.core.truth_(add_elem_QMARK_)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk).call(null);

var G__15248 = cljs.core.next.call(null,seq__15236__$1);
var G__15249 = null;
var G__15250 = (0);
var G__15251 = (0);
seq__15236 = G__15248;
chunk__15237 = G__15249;
count__15238 = G__15250;
i__15239 = G__15251;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
return cljs.core.swap_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.conj,sk);
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);

//# sourceMappingURL=sketch.js.map