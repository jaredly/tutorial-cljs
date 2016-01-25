// Compiled by ClojureScript 1.7.228 {}
goog.provide('tutorial_cljs.inline_eval');
goog.require('cljs.core');
goog.require('cljs.tools.reader');
goog.require('reepl.replumb');
goog.require('reagent.core');
goog.require('tutorial_cljs.quil_sketch');
goog.require('tutorial_cljs.repl');
tutorial_cljs.inline_eval.styles = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output-wrapper","output-wrapper",-497970156),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"top","top",-1856271961),"-1.5em",new cljs.core.Keyword(null,"left","left",-399115937),"2em",new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 5px #aaa",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(10000),new cljs.core.Keyword(null,"padding","padding",1660304693),(5),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(5)], null),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204)], null),new cljs.core.Keyword(null,"error-cause","error-cause",1658990138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(10)], null)], null);
tutorial_cljs.inline_eval.to_pos = (function tutorial_cljs$inline_eval$to_pos(obj){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),obj.line,new cljs.core.Keyword(null,"ch","ch",-554717905),obj.ch], null);
});
/**
 * Returns [form-as-string end-pos]
 */
tutorial_cljs.inline_eval.get_form_at_cursor = (function tutorial_cljs$inline_eval$get_form_at_cursor(cm,cursor){
while(true){
var token = cm.getTokenAt(cursor);
console.log("token",token);

var G__21128 = token.type;
if(cljs.core._EQ_.call(null,"bracket",G__21128)){
var rr = cm.findMatchingBracket(cursor);
var vec__21129 = (cljs.core.truth_(rr.forward)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rr.from,rr.to], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rr.to,rr.from], null));
var from = cljs.core.nth.call(null,vec__21129,(0),null);
var to = cljs.core.nth.call(null,vec__21129,(1),null);
var to__$1 = {"line": to.line, "ch": (to.ch + (1))};
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cm.getRange(from,to__$1),to__$1], null);
} else {
if(cljs.core._EQ_.call(null,"comment",G__21128)){
if((cljs.core._EQ_.call(null,(0),token.start)) || (cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,token.string)))){
if(cljs.core._EQ_.call(null,(0),cursor.line)){
return null;
} else {
console.log(token);

var line = cm.getLine((cursor.line - (1)));
var G__21130 = cm;
var G__21131 = {"line": (cursor.line - (1)), "ch": cljs.core.count.call(null,line)};
cm = G__21130;
cursor = G__21131;
continue;
}
} else {
var G__21132 = cm;
var G__21133 = {"line": cursor.line, "ch": token.start};
cm = G__21132;
cursor = G__21133;
continue;
}
} else {
if(cljs.core._EQ_.call(null,null,G__21128)){
if((cljs.core._EQ_.call(null,(0),token.start)) || (cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,token.string)))){
if(cljs.core._EQ_.call(null,(0),cursor.line)){
return null;
} else {
console.log(token);

var line = cm.getLine((cursor.line - (1)));
var G__21134 = cm;
var G__21135 = {"line": (cursor.line - (1)), "ch": cljs.core.count.call(null,line)};
cm = G__21134;
cursor = G__21135;
continue;
}
} else {
var G__21136 = cm;
var G__21137 = {"line": cursor.line, "ch": token.start};
cm = G__21136;
cursor = G__21137;
continue;
}
} else {
if(cljs.core._EQ_.call(null,"string",G__21128)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("\""),cljs.core.str(token.string)].join(''),{"line": cursor.line, "ch": token.end}], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token.string,{"line": cursor.line, "ch": token.end}], null);

}
}
}
}
break;
}
});
/**
 * Returns [form-as-string end-pos]
 */
tutorial_cljs.inline_eval.get_active_form = (function tutorial_cljs$inline_eval$get_active_form(cm){
var selection = cljs.core.first.call(null,cm.listSelections());
var start = tutorial_cljs.inline_eval.to_pos.call(null,selection.anchor);
var end = tutorial_cljs.inline_eval.to_pos.call(null,selection.head);
if(cljs.core._EQ_.call(null,start,end)){
return tutorial_cljs.inline_eval.get_form_at_cursor.call(null,cm,cm.getCursor());
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cm.getSelection(),cljs.core.clj__GT_js.call(null,end)], null);
}
});
tutorial_cljs.inline_eval.display_el = document.createElement("div");
tutorial_cljs.inline_eval.hide_display = (function tutorial_cljs$inline_eval$hide_display(){
if(cljs.core.truth_(tutorial_cljs.inline_eval.display_el.parentNode)){
return tutorial_cljs.inline_eval.display_el.parentNode.removeChild(tutorial_cljs.inline_eval.display_el);
} else {
return null;
}
});
tutorial_cljs.inline_eval.show_error = (function tutorial_cljs$inline_eval$show_error(error){
var cause = error.cause;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.inline_eval.styles)], null),error.message,(cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"error-cause","error-cause",1658990138).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.inline_eval.styles)], null),cause.message], null):null)], null);
});
tutorial_cljs.inline_eval.show_output_view = (function tutorial_cljs$inline_eval$show_output_view(showers,success_QMARK_,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"output-wrapper","output-wrapper",-497970156).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.inline_eval.styles)], null),((cljs.core.not.call(null,success_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tutorial_cljs.inline_eval.show_error,value], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reepl.show_value.show_value,value,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showers","showers",1548575441),showers], null)], null))], null);
});
tutorial_cljs.inline_eval.show_output = (function tutorial_cljs$inline_eval$show_output(cm,showers,pos,success_QMARK_,value){
reagent.core.render.call(null,tutorial_cljs.inline_eval.show_output_view.call(null,showers,success_QMARK_,value),tutorial_cljs.inline_eval.display_el);

return cm.addWidget(pos,tutorial_cljs.inline_eval.display_el,true);
});
tutorial_cljs.inline_eval.eval_current_form = (function tutorial_cljs$inline_eval$eval_current_form(cm,showers,special_forms){
var temp__4425__auto__ = tutorial_cljs.inline_eval.get_active_form.call(null,cm);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__21139 = temp__4425__auto__;
var form = cljs.core.nth.call(null,vec__21139,(0),null);
var pos = cljs.core.nth.call(null,vec__21139,(1),null);
var form__$1 = form.trim();
var is_list = cljs.core._EQ_.call(null,"(",cljs.core.first.call(null,form__$1));
var first_item = (function (){var and__6441__auto__ = is_list;
if(and__6441__auto__){
return cljs.tools.reader.read_string.call(null,form__$1.slice((1)));
} else {
return and__6441__auto__;
}
})();
var special_handle = (function (){var and__6441__auto__ = special_forms;
if(cljs.core.truth_(and__6441__auto__)){
return special_forms.call(null,first_item);
} else {
return and__6441__auto__;
}
})();
if(cljs.core.truth_(special_handle)){
return special_handle.call(null,form__$1);
} else {
return reepl.replumb.run_repl.call(null,form__$1,tutorial_cljs.repl.replumb_opts,cljs.core.partial.call(null,tutorial_cljs.inline_eval.show_output,cm,showers,pos));
}
} else {
return null;
}
});
