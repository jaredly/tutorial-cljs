// Compiled by ClojureScript 1.7.228 {}
goog.provide('tutorial_cljs.quil_sketch');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('quil.sketch');
goog.require('reagent.core');
tutorial_cljs.quil_sketch.parse_make_sketch = (function tutorial_cljs$quil_sketch$parse_make_sketch(form){
var _PERCENT_ = (function (){try{var name = cljs.core.second.call(null,form);
var opts = cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.drop.call(null,(2),form));
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"name","name",1843675177),name);
}catch (e21083){if((e21083 instanceof Error)){
var e = e21083;
throw (new Error("Invalid makesketch form"));
} else {
throw e21083;

}
}})();
if(cljs.core.every_QMARK_.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_),cljs.core.map.call(null,_PERCENT_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Keyword(null,"size","size",1098693007)], null)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Keyword(null,"size","size",1098693007)], null)))))].join('')));
}

return _PERCENT_;
});
if(typeof tutorial_cljs.quil_sketch.current_sketch !== 'undefined'){
} else {
tutorial_cljs.quil_sketch.current_sketch = cljs.core.atom.call(null,null);
}
if(typeof tutorial_cljs.quil_sketch.current_applet !== 'undefined'){
} else {
tutorial_cljs.quil_sketch.current_applet = cljs.core.atom.call(null,null);
}
if(typeof tutorial_cljs.quil_sketch.applets !== 'undefined'){
} else {
tutorial_cljs.quil_sketch.applets = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
tutorial_cljs.quil_sketch.styles = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(10000),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 5px #999",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(2),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"handle","handle",1538948854),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 10px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535)], null),new cljs.core.Keyword(null,"close-button","close-button",1885538121),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px 10px 8px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"10px",new cljs.core.Keyword(null,"color","color",1011675173),"#999"], null)], null);
tutorial_cljs.quil_sketch.canvas = (function tutorial_cljs$quil_sketch$canvas(p__21084,on_canvas){
var vec__21086 = p__21084;
var width = cljs.core.nth.call(null,vec__21086,(0),null);
var height = cljs.core.nth.call(null,vec__21086,(1),null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (vec__21086,width,height){
return (function (this$){
return on_canvas.call(null,reagent.core.dom_node.call(null,this$));
});})(vec__21086,width,height))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (vec__21086,width,height){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null);
});})(vec__21086,width,height))
], null));
});
tutorial_cljs.quil_sketch.mobile_sketch = (function tutorial_cljs$quil_sketch$mobile_sketch(name,title,size,pos_atom,on_canvas,on_close){
var map__21098 = cljs.core.deref.call(null,pos_atom);
var map__21098__$1 = ((((!((map__21098 == null)))?((((map__21098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21098):map__21098);
var left = cljs.core.get.call(null,map__21098__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__21098__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"top","top",-1856271961),top,new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"moving","moving",1760797240),false,new cljs.core.Keyword(null,"dx","dx",-381796732),(0),new cljs.core.Keyword(null,"dy","dy",1719547243),(0)], null));
var move_listener = ((function (map__21098,map__21098__$1,left,top,state){
return (function (evt){
evt.preventDefault();

return cljs.core.swap_BANG_.call(null,state,((function (map__21098,map__21098__$1,left,top,state){
return (function (p__21100){
var map__21101 = p__21100;
var map__21101__$1 = ((((!((map__21101 == null)))?((((map__21101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21101):map__21101);
var state__$1 = map__21101__$1;
var dx = cljs.core.get.call(null,map__21101__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var dy = cljs.core.get.call(null,map__21101__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
return cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"top","top",-1856271961),(evt.clientY - dy),new cljs.core.Keyword(null,"left","left",-399115937),(evt.clientX - dx));
});})(map__21098,map__21098__$1,left,top,state))
);
});})(map__21098,map__21098__$1,left,top,state))
;
var up_listener = ((function (map__21098,map__21098__$1,left,top,state,move_listener){
return (function tutorial_cljs$quil_sketch$mobile_sketch_$_up_listener(evt){
var map__21105_21109 = cljs.core.deref.call(null,state);
var map__21105_21110__$1 = ((((!((map__21105_21109 == null)))?((((map__21105_21109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21105_21109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21105_21109):map__21105_21109);
var top_21111__$1 = cljs.core.get.call(null,map__21105_21110__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var left_21112__$1 = cljs.core.get.call(null,map__21105_21110__$1,new cljs.core.Keyword(null,"left","left",-399115937));
cljs.core.swap_BANG_.call(null,pos_atom,cljs.core.assoc,new cljs.core.Keyword(null,"top","top",-1856271961),top_21111__$1,new cljs.core.Keyword(null,"left","left",-399115937),left_21112__$1);

evt.preventDefault();

window.removeEventListener("mouseup",tutorial_cljs$quil_sketch$mobile_sketch_$_up_listener);

window.removeEventListener("mousemove",move_listener);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"moving","moving",1760797240),false);
});})(map__21098,map__21098__$1,left,top,state,move_listener))
;
return ((function (map__21098,map__21098__$1,left,top,state,move_listener,up_listener){
return (function (){
var map__21107 = cljs.core.deref.call(null,state);
var map__21107__$1 = ((((!((map__21107 == null)))?((((map__21107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21107):map__21107);
var top__$1 = cljs.core.get.call(null,map__21107__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var left__$1 = cljs.core.get.call(null,map__21107__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var moving = cljs.core.get.call(null,map__21107__$1,new cljs.core.Keyword(null,"moving","moving",1760797240));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.quil_sketch.styles),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),top__$1,new cljs.core.Keyword(null,"left","left",-399115937),left__$1], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tutorial_cljs.quil_sketch.canvas,size,on_canvas], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"handle","handle",1538948854).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.quil_sketch.styles),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (map__21107,map__21107__$1,top__$1,left__$1,moving,map__21098,map__21098__$1,left,top,state,move_listener,up_listener){
return (function (evt){
evt.preventDefault();

window.addEventListener("mouseup",up_listener);

window.addEventListener("mousemove",move_listener);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dx","dx",-381796732),(evt.clientX - left__$1),new cljs.core.Keyword(null,"dy","dy",1719547243),(evt.clientY - top__$1),new cljs.core.Keyword(null,"moving","moving",1760797240),true);
});})(map__21107,map__21107__$1,top__$1,left__$1,moving,map__21098,map__21098__$1,left,top,state,move_listener,up_listener))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.quil_sketch.styles)], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_close,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"close-button","close-button",1885538121).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.quil_sketch.styles)], null),"\u00D7"], null)], null)], null);
});
;})(map__21098,map__21098__$1,left,top,state,move_listener,up_listener))
});
tutorial_cljs.quil_sketch.make_el = (function tutorial_cljs$quil_sketch$make_el(){
var el = document.createElement("canvas");
(el["style"]["position"] = "absolute");

(el["style"]["top"] = "0");

(el["style"]["right"] = "0");

return el;
});
tutorial_cljs.quil_sketch.get_in_ns = (function tutorial_cljs$quil_sketch$get_in_ns(ns,sym){
var parts = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.munge,[cljs.core.str(ns)].join('').split(".")));
return cljs.core.reduce.call(null,cljs.core.fnil.call(null,cljs.core.aget,{}),window,cljs.core.conj.call(null,parts,[cljs.core.str(sym)].join('')));
});
tutorial_cljs.quil_sketch.get_fn = (function tutorial_cljs$quil_sketch$get_fn(ns,sym){
return (function (state){
var f = tutorial_cljs.quil_sketch.get_in_ns.call(null,ns,sym);
var res = (cljs.core.truth_((function (){var and__6441__auto__ = f;
if(cljs.core.truth_(and__6441__auto__)){
return cljs.core._EQ_.call(null,Function,cljs.core.type.call(null,f));
} else {
return and__6441__auto__;
}
})())?f.call(null,state):null);
var or__6453__auto__ = res;
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return state;
}
});
});
tutorial_cljs.quil_sketch.handle_make_sketch = (function tutorial_cljs$quil_sketch$handle_make_sketch(ns,form){
console.log("make sketch",form);

var opts = tutorial_cljs.quil_sketch.parse_make_sketch.call(null,form);
var old_data = cljs.core.deref.call(null,tutorial_cljs.quil_sketch.applets).call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts));
var _ = console.log(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts),old_data,cljs.core.deref.call(null,tutorial_cljs.quil_sketch.applets));
var vec__21119 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);
var width = cljs.core.nth.call(null,vec__21119,(0),null);
var height = cljs.core.nth.call(null,vec__21119,(1),null);
var node = (function (){var or__6453__auto__ = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(old_data);
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return document.createElement("div");
}
})();
var pos_atom = (function (){var or__6453__auto__ = new cljs.core.Keyword(null,"pos-atom","pos-atom",-314213377).cljs$core$IFn$_invoke$arity$1(old_data);
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(20),new cljs.core.Keyword(null,"left","left",-399115937),((window.innerWidth - width) - (20))], null));
}
})();
var ___$1 = React.unmountComponentAtNode(node);
var sketch = quil.sketch.make_sketch.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"setup","setup",1987730512),((function (opts,old_data,_,vec__21119,width,height,node,pos_atom,___$1){
return (function (){
var new_applet = quil.sketch.current_applet.call(null);
cljs.core.swap_BANG_.call(null,tutorial_cljs.quil_sketch.applets,cljs.core.update,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts),((function (new_applet,opts,old_data,_,vec__21119,width,height,node,pos_atom,___$1){
return (function (old){
if(cljs.core.truth_(old)){
new cljs.core.Keyword(null,"applet","applet",434416644).cljs$core$IFn$_invoke$arity$1(old).exit();
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"pos-atom","pos-atom",-314213377),pos_atom,new cljs.core.Keyword(null,"applet","applet",434416644),new_applet], null);
});})(new_applet,opts,old_data,_,vec__21119,width,height,node,pos_atom,___$1))
);

cljs.core.reset_BANG_.call(null,tutorial_cljs.quil_sketch.current_applet,new_applet);

setTimeout(((function (new_applet,opts,old_data,_,vec__21119,width,height,node,pos_atom,___$1){
return (function (){
return quil.sketch._STAR_applet_STAR_ = new_applet;
});})(new_applet,opts,old_data,_,vec__21119,width,height,node,pos_atom,___$1))
,(5));

return tutorial_cljs.quil_sketch.get_fn.call(null,ns,new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts)).call(null);
});})(opts,old_data,_,vec__21119,width,height,node,pos_atom,___$1))
,new cljs.core.Keyword(null,"draw","draw",1358331674),tutorial_cljs.quil_sketch.get_fn.call(null,ns,new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(opts)),new cljs.core.Keyword(null,"update","update",1045576396),tutorial_cljs.quil_sketch.get_fn.call(null,ns,new cljs.core.Keyword(null,"update","update",1045576396).cljs$core$IFn$_invoke$arity$1(opts)),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts)], null));
document.body.appendChild(node);

reagent.core.render.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [tutorial_cljs.quil_sketch.mobile_sketch,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts))].join(''),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts),pos_atom,((function (opts,old_data,_,vec__21119,width,height,node,pos_atom,___$1,sketch){
return (function (p1__21117_SHARP_){
return (new Processing(p1__21117_SHARP_,sketch));
});})(opts,old_data,_,vec__21119,width,height,node,pos_atom,___$1,sketch))
,((function (opts,old_data,_,vec__21119,width,height,node,pos_atom,___$1,sketch){
return (function (){
var temp__4425__auto__ = cljs.core.deref.call(null,tutorial_cljs.quil_sketch.applets).call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(temp__4425__auto__)){
var data = temp__4425__auto__;
new cljs.core.Keyword(null,"applet","applet",434416644).cljs$core$IFn$_invoke$arity$1(data).exit();

var temp__4425__auto___21120__$1 = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(data).parentNode;
if(cljs.core.truth_(temp__4425__auto___21120__$1)){
var parent_21121 = temp__4425__auto___21120__$1;
parent_21121.removeChild(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(data));
} else {
}

return cljs.core.swap_BANG_.call(null,tutorial_cljs.quil_sketch.applets,cljs.core.dissoc,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return null;
}
});})(opts,old_data,_,vec__21119,width,height,node,pos_atom,___$1,sketch))
], null),node);

return cljs.core.reset_BANG_.call(null,tutorial_cljs.quil_sketch.current_sketch,sketch);
});
