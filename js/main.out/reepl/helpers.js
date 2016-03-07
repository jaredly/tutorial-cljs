// Compiled by ClojureScript 1.7.228 {}
goog.provide('reepl.helpers');
goog.require('cljs.core');
goog.require('reagent.core');
reepl.helpers.text_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0),new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null);
reepl.helpers.view_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"min-height","min-height",398480837),(0),new cljs.core.Keyword(null,"min-width","min-width",1926193728),(0),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0),new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null);
reepl.helpers.button_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0),new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"background-color","background-color",570434026),"transparent",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(5)], null);
reepl.helpers.get_styles = (function reepl$helpers$get_styles(styles,style_prop){
if(cljs.core.not.call(null,style_prop)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if((style_prop instanceof cljs.core.Keyword)){
return styles.call(null,style_prop);
} else {
if(cljs.core.sequential_QMARK_.call(null,style_prop)){
return cljs.core.reduce.call(null,(function (a,b){
return cljs.core.merge.call(null,a,reepl$helpers$get_styles.call(null,styles,b));
}),cljs.core.PersistentArrayMap.EMPTY,style_prop);
} else {
return style_prop;

}
}
}
});
reepl.helpers.parse_props = (function reepl$helpers$parse_props(styles,default_style,props){
if((props instanceof cljs.core.Keyword)){
return reepl$helpers$parse_props.call(null,styles,default_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),props], null));
} else {
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,default_style,reepl.helpers.get_styles.call(null,styles,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(props)))], null),cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"style","style",-496642736)));
}
});
reepl.helpers.better_el = (function reepl$helpers$better_el(var_args){
var args__7518__auto__ = [];
var len__7511__auto___11379 = arguments.length;
var i__7512__auto___11380 = (0);
while(true){
if((i__7512__auto___11380 < len__7511__auto___11379)){
args__7518__auto__.push((arguments[i__7512__auto___11380]));

var G__11381 = (i__7512__auto___11380 + (1));
i__7512__auto___11380 = G__11381;
continue;
} else {
}
break;
}

var argseq__7519__auto__ = ((((4) < args__7518__auto__.length))?(new cljs.core.IndexedSeq(args__7518__auto__.slice((4)),(0))):null);
return reepl.helpers.better_el.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7519__auto__);
});

reepl.helpers.better_el.cljs$core$IFn$_invoke$arity$variadic = (function (dom_el,default_style,styles,props,children){
var vec__11378 = ((((props instanceof cljs.core.Keyword)) || (cljs.core.map_QMARK_.call(null,props)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [props,children], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [props], null),children)], null));
var props__$1 = cljs.core.nth.call(null,vec__11378,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__11378,(1),null);
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_el,reepl.helpers.parse_props.call(null,styles,default_style,props__$1)], null),children__$1));
});

reepl.helpers.better_el.cljs$lang$maxFixedArity = (4);

reepl.helpers.better_el.cljs$lang$applyTo = (function (seq11373){
var G__11374 = cljs.core.first.call(null,seq11373);
var seq11373__$1 = cljs.core.next.call(null,seq11373);
var G__11375 = cljs.core.first.call(null,seq11373__$1);
var seq11373__$2 = cljs.core.next.call(null,seq11373__$1);
var G__11376 = cljs.core.first.call(null,seq11373__$2);
var seq11373__$3 = cljs.core.next.call(null,seq11373__$2);
var G__11377 = cljs.core.first.call(null,seq11373__$3);
var seq11373__$4 = cljs.core.next.call(null,seq11373__$3);
return reepl.helpers.better_el.cljs$core$IFn$_invoke$arity$variadic(G__11374,G__11375,G__11376,G__11377,seq11373__$4);
});
reepl.helpers.view = cljs.core.partial.call(null,reepl.helpers.better_el,new cljs.core.Keyword(null,"div","div",1057191632),reepl.helpers.view_style);
reepl.helpers.text = cljs.core.partial.call(null,reepl.helpers.better_el,new cljs.core.Keyword(null,"span","span",1394872991),reepl.helpers.text_style);
reepl.helpers.button = cljs.core.partial.call(null,reepl.helpers.better_el,new cljs.core.Keyword(null,"button","button",1456579943),reepl.helpers.button_style);
reepl.helpers.hoverable = (function reepl$helpers$hoverable(var_args){
var args__7518__auto__ = [];
var len__7511__auto___11387 = arguments.length;
var i__7512__auto___11388 = (0);
while(true){
if((i__7512__auto___11388 < len__7511__auto___11387)){
args__7518__auto__.push((arguments[i__7512__auto___11388]));

var G__11389 = (i__7512__auto___11388 + (1));
i__7512__auto___11388 = G__11389;
continue;
} else {
}
break;
}

var argseq__7519__auto__ = ((((1) < args__7518__auto__.length))?(new cljs.core.IndexedSeq(args__7518__auto__.slice((1)),(0))):null);
return reepl.helpers.hoverable.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7519__auto__);
});

reepl.helpers.hoverable.cljs$core$IFn$_invoke$arity$variadic = (function (config,children){
var hovered = reagent.core.atom.call(null,false);
return ((function (hovered){
return (function() { 
var G__11390__delegate = function (p__11384,children__$1){
var map__11385 = p__11384;
var map__11385__$1 = ((((!((map__11385 == null)))?((((map__11385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11385):map__11385);
var style = cljs.core.get.call(null,map__11385__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var hover_style = cljs.core.get.call(null,map__11385__$1,new cljs.core.Keyword(null,"hover-style","hover-style",976094077));
var el = cljs.core.get.call(null,map__11385__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var props = cljs.core.get.call(null,map__11385__$1,new cljs.core.Keyword(null,"props","props",453281727));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(cljs.core.deref.call(null,hovered))?cljs.core.merge.call(null,style,hover_style):style),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (map__11385,map__11385__$1,style,hover_style,el,props,hovered){
return (function (){
cljs.core.reset_BANG_.call(null,hovered,true);

return null;
});})(map__11385,map__11385__$1,style,hover_style,el,props,hovered))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (map__11385,map__11385__$1,style,hover_style,el,props,hovered){
return (function (){
cljs.core.reset_BANG_.call(null,hovered,false);

return null;
});})(map__11385,map__11385__$1,style,hover_style,el,props,hovered))
)], null),children__$1);
};
var G__11390 = function (p__11384,var_args){
var children__$1 = null;
if (arguments.length > 1) {
var G__11391__i = 0, G__11391__a = new Array(arguments.length -  1);
while (G__11391__i < G__11391__a.length) {G__11391__a[G__11391__i] = arguments[G__11391__i + 1]; ++G__11391__i;}
  children__$1 = new cljs.core.IndexedSeq(G__11391__a,0);
} 
return G__11390__delegate.call(this,p__11384,children__$1);};
G__11390.cljs$lang$maxFixedArity = 1;
G__11390.cljs$lang$applyTo = (function (arglist__11392){
var p__11384 = cljs.core.first(arglist__11392);
var children__$1 = cljs.core.rest(arglist__11392);
return G__11390__delegate(p__11384,children__$1);
});
G__11390.cljs$core$IFn$_invoke$arity$variadic = G__11390__delegate;
return G__11390;
})()
;
;})(hovered))
});

reepl.helpers.hoverable.cljs$lang$maxFixedArity = (1);

reepl.helpers.hoverable.cljs$lang$applyTo = (function (seq11382){
var G__11383 = cljs.core.first.call(null,seq11382);
var seq11382__$1 = cljs.core.next.call(null,seq11382);
return reepl.helpers.hoverable.cljs$core$IFn$_invoke$arity$variadic(G__11383,seq11382__$1);
});

//# sourceMappingURL=helpers.js.map