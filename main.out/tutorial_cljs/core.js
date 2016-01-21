// Compiled by ClojureScript 1.7.228 {}
goog.provide('tutorial_cljs.core');
goog.require('cljs.core');
goog.require('reepl.show_devtools');
goog.require('parinfer_codemirror.editor');
goog.require('reepl.core');
goog.require('tutorial_cljs.text');
goog.require('reepl.replumb');
goog.require('reagent.core');
goog.require('reepl.show_value');
goog.require('reepl.show_function');
tutorial_cljs.core.to_pos = (function tutorial_cljs$core$to_pos(obj){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),obj.line,new cljs.core.Keyword(null,"ch","ch",-554717905),obj.ch], null);
});
/**
 * Returns [form-as-string end-pos]
 */
tutorial_cljs.core.get_form_at_cursor = (function tutorial_cljs$core$get_form_at_cursor(cm,cursor){
while(true){
var token = cm.getTokenAt(cursor);
console.log("token",token);

var G__20843 = token.type;
if(cljs.core._EQ_.call(null,"bracket",G__20843)){
var rr = cm.findMatchingBracket(cursor);
var vec__20844 = (cljs.core.truth_(rr.forward)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rr.from,rr.to], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rr.to,rr.from], null));
var from = cljs.core.nth.call(null,vec__20844,(0),null);
var to = cljs.core.nth.call(null,vec__20844,(1),null);
var to__$1 = {"line": to.line, "ch": (to.ch + (1))};
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cm.getRange(from,to__$1),to__$1], null);
} else {
if(cljs.core._EQ_.call(null,"comment",G__20843)){
if((cljs.core._EQ_.call(null,(0),token.start)) || (cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,token.string)))){
if(cljs.core._EQ_.call(null,(0),cursor.line)){
return null;
} else {
console.log(token);

var line = cm.getLine((cursor.line - (1)));
var G__20845 = cm;
var G__20846 = {"line": (cursor.line - (1)), "ch": cljs.core.count.call(null,line)};
cm = G__20845;
cursor = G__20846;
continue;
}
} else {
var G__20847 = cm;
var G__20848 = {"line": cursor.line, "ch": (cursor.ch - cljs.core.count.call(null,token.string))};
cm = G__20847;
cursor = G__20848;
continue;
}
} else {
if(cljs.core._EQ_.call(null,null,G__20843)){
if((cljs.core._EQ_.call(null,(0),token.start)) || (cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,token.string)))){
if(cljs.core._EQ_.call(null,(0),cursor.line)){
return null;
} else {
console.log(token);

var line = cm.getLine((cursor.line - (1)));
var G__20849 = cm;
var G__20850 = {"line": (cursor.line - (1)), "ch": cljs.core.count.call(null,line)};
cm = G__20849;
cursor = G__20850;
continue;
}
} else {
var G__20851 = cm;
var G__20852 = {"line": cursor.line, "ch": (cursor.ch - cljs.core.count.call(null,token.string))};
cm = G__20851;
cursor = G__20852;
continue;
}
} else {
if(cljs.core._EQ_.call(null,"string",G__20843)){
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
tutorial_cljs.core.get_active_form = (function tutorial_cljs$core$get_active_form(cm){
var selection = cljs.core.first.call(null,cm.listSelections());
var start = tutorial_cljs.core.to_pos.call(null,selection.anchor);
var end = tutorial_cljs.core.to_pos.call(null,selection.head);
if(cljs.core._EQ_.call(null,start,end)){
return tutorial_cljs.core.get_form_at_cursor.call(null,cm,cm.getCursor());
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cm.getSelection(),cljs.core.clj__GT_js.call(null,end)], null);
}
});
if(typeof tutorial_cljs.core.repl_state !== 'undefined'){
} else {
tutorial_cljs.core.repl_state = reagent.core.atom.call(null,reepl.core.initial_state);
}
if(typeof tutorial_cljs.core.complete_atom !== 'undefined'){
} else {
tutorial_cljs.core.complete_atom = reagent.core.atom.call(null,null);
}
tutorial_cljs.core.maybe_fn_docs = (function tutorial_cljs$core$maybe_fn_docs(fn){
var doc = reepl.replumb.doc_from_sym.call(null,fn);
if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(doc))){
var sb__7427__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_20855_20857 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_20856_20858 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_20855_20857,_STAR_print_fn_STAR_20856_20858,sb__7427__auto__,doc){
return (function (x__7428__auto__){
return sb__7427__auto__.append(x__7428__auto__);
});})(_STAR_print_newline_STAR_20855_20857,_STAR_print_fn_STAR_20856_20858,sb__7427__auto__,doc))
;

try{reepl.replumb.print_doc.call(null,doc);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20856_20858;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_20855_20857;
}
return [cljs.core.str(sb__7427__auto__)].join('');
} else {
return null;
}
});
tutorial_cljs.core.default_settings = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vim","vim",764723904),false,new cljs.core.Keyword(null,"warning-as-error","warning-as-error",1347418166),true,new cljs.core.Keyword(null,"parinfer","parinfer",1893066885),true], null);
tutorial_cljs.core.get_settings = (function tutorial_cljs$core$get_settings(){
var val = localStorage.reeplSettings;
if(cljs.core.not.call(null,val)){
return tutorial_cljs.core.default_settings;
} else {
try{return cljs.core.js__GT_clj.call(null,JSON.parse(val),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}catch (e20860){if((e20860 instanceof Error)){
var _ = e20860;
return tutorial_cljs.core.default_settings;
} else {
throw e20860;

}
}}
});
tutorial_cljs.core.save_settings = (function tutorial_cljs$core$save_settings(settings){
var str = JSON.stringify(cljs.core.clj__GT_js.call(null,settings));
return (localStorage["reeplSettings"] = str);
});
if(typeof tutorial_cljs.core.settings !== 'undefined'){
} else {
tutorial_cljs.core.settings = reagent.core.atom.call(null,tutorial_cljs.core.get_settings.call(null));
}
if(typeof tutorial_cljs.core.pi_count !== 'undefined'){
} else {
tutorial_cljs.core.pi_count = cljs.core.atom.call(null,(0));
}
tutorial_cljs.core.display_el = document.createElement("div");
tutorial_cljs.core.hide_display = (function tutorial_cljs$core$hide_display(){
return tutorial_cljs.core.display_el.parentNode.removeChild(tutorial_cljs.core.display_el);
});
tutorial_cljs.core.styles = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"output-wrapper","output-wrapper",-497970156),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error-cause","error-cause",1658990138)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5),new cljs.core.Keyword(null,"color","color",1011675173),"#ddd"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(5)], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"top","top",-1856271961),"-1.5em",new cljs.core.Keyword(null,"left","left",-399115937),"2em",new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 5px #aaa",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(10000),new cljs.core.Keyword(null,"padding","padding",1660304693),(5),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(5)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#aaa",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"margin","margin",-995903681),"2px 20px 0"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 5px",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8em",new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"stretch","stretch",-1888837380),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"stretch","stretch",-1888837380),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(10),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(10)], null)]);
tutorial_cljs.core.show_error = (function tutorial_cljs$core$show_error(error){
var cause = error.cause;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.core.styles)], null),error.message,(cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"error-cause","error-cause",1658990138).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.core.styles)], null),cause.message], null):null)], null);
});
tutorial_cljs.core.show_output_view = (function tutorial_cljs$core$show_output_view(success_QMARK_,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"output-wrapper","output-wrapper",-497970156).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.core.styles)], null),((cljs.core.not.call(null,success_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tutorial_cljs.core.show_error,value], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reepl.show_value.show_value,value,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showers","showers",1548575441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reepl.show_devtools.show_devtools,reepl.show_function.show_fn], null)], null)], null))], null);
});
tutorial_cljs.core.show_output = (function tutorial_cljs$core$show_output(cm,pos,success_QMARK_,value){
reagent.core.render.call(null,tutorial_cljs.core.show_output_view.call(null,success_QMARK_,value),tutorial_cljs.core.display_el);

return cm.addWidget(pos,tutorial_cljs.core.display_el,true);
});
tutorial_cljs.core.eval_current_form = (function tutorial_cljs$core$eval_current_form(cm){
var temp__4425__auto__ = tutorial_cljs.core.get_active_form.call(null,cm);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__20863 = temp__4425__auto__;
var form = cljs.core.nth.call(null,vec__20863,(0),null);
var pos = cljs.core.nth.call(null,vec__20863,(1),null);
console.log("things",form);

return reepl.replumb.run_repl.call(null,form,cljs.core.partial.call(null,tutorial_cljs.core.show_output,cm,pos));
} else {
return null;
}
});
tutorial_cljs.core.checkbox = (function tutorial_cljs$core$checkbox(keyword,title){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.core.styles)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),keyword.call(null,cljs.core.deref.call(null,tutorial_cljs.core.settings)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.core.styles),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.call(null,tutorial_cljs.core.settings,cljs.core.update,keyword,cljs.core.not);
})], null)], null),title], null);
});
tutorial_cljs.core.complete_cmd = reepl.core.make_complete_cmd.call(null,reepl.replumb.process_apropos,tutorial_cljs.core.complete_atom);
tutorial_cljs.core.main_view = (function tutorial_cljs$core$main_view(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.core.styles)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"repl","repl",-35398667).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.core.styles)], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [reepl.core.repl,new cljs.core.Keyword(null,"execute","execute",-129499188),(function (p1__20864_SHARP_,p2__20865_SHARP_){
return reepl.replumb.run_repl.call(null,p1__20864_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warning-as-error","warning-as-error",1347418166),new cljs.core.Keyword(null,"warning-as-error","warning-as-error",1347418166).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tutorial_cljs.core.settings))], null),p2__20865_SHARP_);
}),new cljs.core.Keyword(null,"complete-word","complete-word",1063206084),reepl.replumb.process_apropos,new cljs.core.Keyword(null,"get-docs","get-docs",-698720007),reepl.replumb.process_doc,new cljs.core.Keyword(null,"state","state",-1988618099),tutorial_cljs.core.repl_state,new cljs.core.Keyword(null,"complete-atom","complete-atom",-243286874),tutorial_cljs.core.complete_atom,new cljs.core.Keyword(null,"show-value-opts","show-value-opts",-412296519),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showers","showers",1548575441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reepl.show_devtools.show_devtools,cljs.core.partial.call(null,reepl.show_function.show_fn_with_docs,tutorial_cljs.core.maybe_fn_docs)], null)], null),new cljs.core.Keyword(null,"js-cm-opts","js-cm-opts",1231776640),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mode","mode",654403691),"clojure-parinfer",new cljs.core.Keyword(null,"keyMap","keyMap",945500512),(cljs.core.truth_(new cljs.core.Keyword(null,"vim","vim",764723904).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tutorial_cljs.core.settings)))?"vim":"default"),new cljs.core.Keyword(null,"showCursorWhenSelecting","showCursorWhenSelecting",169880137),true], null),new cljs.core.Keyword(null,"on-cm-init","on-cm-init",105207782),(function (p1__20866_SHARP_){
return parinfer_codemirror.editor.parinferize_BANG_.call(null,p1__20866_SHARP_,cljs.core.swap_BANG_.call(null,tutorial_cljs.core.pi_count,cljs.core.inc),new cljs.core.Keyword(null,"indent-mode","indent-mode",1737814542),p1__20866_SHARP_.getValue());
})], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tutorial_cljs.core.styles.call(null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tutorial_cljs.core.checkbox,new cljs.core.Keyword(null,"vim","vim",764723904),"Vim"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tutorial_cljs.core.checkbox,new cljs.core.Keyword(null,"parinfer","parinfer",1893066885),"Parinfer"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tutorial_cljs.core.checkbox,new cljs.core.Keyword(null,"warning-as-error","warning-as-error",1347418166),"Warning as error"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/jaredly/tutorial-cljs",new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"_blank","_blank",1070304072),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.core.styles)], null),"Github"], null)], null)], null);
});
var repl_el_20867 = document.getElementById("repl");
console.log(repl_el_20867);

reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tutorial_cljs.core.main_view], null),repl_el_20867);
reepl.replumb.run_repl.call(null,"(ns lt-cljs-tutorial.main (:require [clojure.string :as str]))",cljs.core.identity);
tutorial_cljs.core.render_text = (function tutorial_cljs$core$render_text(){
var text_el = document.getElementById("text");
(text_el["innerHTML"] = "");

tutorial_cljs.core.text_mirror = (new CodeMirror(text_el,{"lineNumbers": true, "matchBrackets": true, "cursorScrollMargin": (5), "value": tutorial_cljs.text.text, "keyMap": (cljs.core.truth_(new cljs.core.Keyword(null,"vim","vim",764723904).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tutorial_cljs.core.settings)))?"vim":"default"), "extraKeys": {"Shift-Cmd-Enter": ((function (text_el){
return (function (_){
return tutorial_cljs.core.hide_display.call(null);
});})(text_el))
, "Cmd-Enter": ((function (text_el){
return (function (cm){
return tutorial_cljs.core.eval_current_form.call(null,cm);
});})(text_el))
}, "autoCloseBrackets": true, "mode": "clojure"}));

tutorial_cljs.core.text_mirror.on("keydown",((function (text_el){
return (function (inst,evt){
var G__20869 = evt.keyCode;
switch (G__20869) {
case (17):
case (18):
case (91):
case (93):
return tutorial_cljs.core.complete_cmd.call(null,new cljs.core.Keyword(null,"show-all","show-all",715701051)).call(null);

break;
case (9):
return tutorial_cljs.core.complete_cmd.call(null,new cljs.core.Keyword(null,"cycle","cycle",710365284)).call(null,evt.shiftKey,tutorial_cljs.core.text_mirror,evt);

break;
default:
return new cljs.core.Keyword(null,"none","none",1333468478);

}
});})(text_el))
);

tutorial_cljs.core.text_mirror.on("keyup",((function (text_el){
return (function (inst,evt){
return reepl.code_mirror.complete_keyup.call(null,tutorial_cljs.core.complete_cmd,evt.keyCode,inst);
});})(text_el))
);

return text_el.addEventListener("mouseup",((function (text_el){
return (function (evt){
return tutorial_cljs.core.complete_cmd.call(null,new cljs.core.Keyword(null,"set","set",304602554)).call(null,reepl.code_mirror.get_word_and_range.call(null,tutorial_cljs.core.text_mirror));
});})(text_el))
);
});
cljs.core.add_watch.call(null,tutorial_cljs.core.settings,new cljs.core.Keyword(null,"settings","settings",1556144875),(function (p1__20872_SHARP_,p2__20873_SHARP_,p3__20874_SHARP_,p4__20871_SHARP_){
return tutorial_cljs.core.save_settings.call(null,p4__20871_SHARP_);
}));
if(typeof tutorial_cljs.core._setup_text !== 'undefined'){
} else {
tutorial_cljs.core._setup_text = tutorial_cljs.core.render_text.call(null);
}
