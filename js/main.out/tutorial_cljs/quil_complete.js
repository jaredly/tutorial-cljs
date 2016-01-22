// Compiled by ClojureScript 1.7.228 {}
goog.provide('tutorial_cljs.quil_complete');
goog.require('cljs.core');
goog.require('tutorial_cljs.quil_docs');
goog.require('reepl.replumb');
goog.require('replumb.repl');
goog.require('replumb.ast');
tutorial_cljs.quil_complete.quil_names = cljs.core.sort.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),tutorial_cljs.quil_docs.docs));
tutorial_cljs.quil_complete.quil_map = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__19845_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__19845_SHARP_),cljs.core.assoc.call(null,p1__19845_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,new cljs.core.Symbol(null,"quil.core","quil.core",1790300883,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__19845_SHARP_)))], null);
}),tutorial_cljs.quil_docs.docs));
tutorial_cljs.quil_complete.quil_prefix = (function tutorial_cljs$quil_complete$quil_prefix(){
var nss = new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(replumb.ast.namespace.call(null,cljs.core.deref.call(null,replumb.repl.st),replumb.repl.current_ns.call(null)));
var qss = cljs.core.filter.call(null,((function (nss){
return (function (p1__19846_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quil.core","quil.core",1790300883,null),cljs.core.second.call(null,p1__19846_SHARP_));
});})(nss))
,nss);
var name = cljs.core.first.call(null,cljs.core.first.call(null,qss));
return name;
});
tutorial_cljs.quil_complete.quil_complete = (function tutorial_cljs$quil_complete$quil_complete(prefix,text){
var name = cljs.core.second.call(null,text.split("/"));
return cljs.core.map.call(null,((function (name){
return (function (p1__19848_SHARP_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,prefix,p1__19848_SHARP_),[cljs.core.str(cljs.core.symbol.call(null,prefix,p1__19848_SHARP_))].join(''),[cljs.core.str(cljs.core.symbol.call(null,prefix,p1__19848_SHARP_))].join(''),p1__19848_SHARP_], null);
});})(name))
,cljs.core.sort.call(null,cljs.core.partial.call(null,reepl.replumb.compare_completion,name),cljs.core.map.call(null,cljs.core.str,cljs.core.filter.call(null,((function (name){
return (function (p1__19847_SHARP_){
return !(cljs.core._EQ_.call(null,(-1),[cljs.core.str(p1__19847_SHARP_)].join('').indexOf(name)));
});})(name))
,tutorial_cljs.quil_complete.quil_names))));
});
tutorial_cljs.quil_complete.quil_doc = (function tutorial_cljs$quil_complete$quil_doc(text){
var name = cljs.core.second.call(null,text.split("/"));
var sb__7427__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19851_19853 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19852_19854 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19851_19853,_STAR_print_fn_STAR_19852_19854,sb__7427__auto__,name){
return (function (x__7428__auto__){
return sb__7427__auto__.append(x__7428__auto__);
});})(_STAR_print_newline_STAR_19851_19853,_STAR_print_fn_STAR_19852_19854,sb__7427__auto__,name))
;

try{reepl.replumb.print_doc.call(null,tutorial_cljs.quil_complete.quil_map.call(null,cljs.core.symbol.call(null,name)));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19852_19854;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19851_19853;
}
return [cljs.core.str(sb__7427__auto__)].join('');
});
