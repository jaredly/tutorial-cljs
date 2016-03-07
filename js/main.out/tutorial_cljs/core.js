// Compiled by ClojureScript 1.7.228 {}
goog.provide('tutorial_cljs.core');
goog.require('cljs.core');
goog.require('reepl.show_devtools');
goog.require('replumb.core');
goog.require('parinfer_codemirror.editor');
goog.require('clojure.zip');
goog.require('tutorial_cljs.inline_eval');
goog.require('tutorial_cljs.editor');
goog.require('tutorial_cljs.text.webgl');
goog.require('reepl.core');
goog.require('tutorial_cljs.text.reagent');
goog.require('cljs.tools.reader');
goog.require('reepl.replumb');
goog.require('reagent.core');
goog.require('tutorial_cljs.text.cljs');
goog.require('cljs.js');
goog.require('tutorial_cljs.quil_sketch');
goog.require('tutorial_cljs.text.quil');
goog.require('reepl.show_value');
goog.require('devtools.core');
goog.require('cljsjs.codemirror');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('reepl.show_function');
goog.require('tutorial_cljs.repl');
tutorial_cljs.core.reagent_tag = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"table","table",-564943036),null,new cljs.core.Keyword(null,"ul","ul",-1349521403),null,new cljs.core.Keyword(null,"button","button",1456579943),null,new cljs.core.Keyword(null,"td","td",1479933353),null,new cljs.core.Keyword(null,"li","li",723558921),null,new cljs.core.Keyword(null,"tr","tr",-1424774646),null,new cljs.core.Keyword(null,"textarea","textarea",-650375824),null,new cljs.core.Keyword(null,"div","div",1057191632),null,new cljs.core.Keyword(null,"ol","ol",932524051),null,new cljs.core.Keyword(null,"input","input",556931961),null,new cljs.core.Keyword(null,"a","a",-2123407586),null,new cljs.core.Keyword(null,"span","span",1394872991),null], null), null);
tutorial_cljs.core.valid_reagent_start = (function tutorial_cljs$core$valid_reagent_start(val){
var or__6453__auto__ = tutorial_cljs.core.reagent_tag.call(null,val);
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return cljs.core._EQ_.call(null,Function,cljs.core.type.call(null,val));
}
});
tutorial_cljs.core.reagent_shower = (function tutorial_cljs$core$reagent_shower(val){
if(cljs.core.truth_((function (){var and__6441__auto__ = cljs.core.vector_QMARK_.call(null,val);
if(and__6441__auto__){
return tutorial_cljs.core.valid_reagent_start.call(null,cljs.core.first.call(null,val));
} else {
return and__6441__auto__;
}
})())){
return val;
} else {
return null;
}
});
tutorial_cljs.core.tutorials = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),tutorial_cljs.text.cljs.text,new cljs.core.Keyword(null,"title","title",636505583),"ClojureScript",new cljs.core.Keyword(null,"prelude","prelude",-138977836),"(ns tutorial.cljs (:require [clojure.string :as str]))"], null),new cljs.core.Keyword(null,"quil","quil",-2129832017),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),tutorial_cljs.text.quil.text,new cljs.core.Keyword(null,"title","title",636505583),"Quil",new cljs.core.Keyword(null,"special-forms","special-forms",2132846301),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"makesketch","makesketch",471599374,null),(function (p1__16376_SHARP_){
return tutorial_cljs.quil_sketch.handle_make_sketch.call(null,replumb.repl.current_ns.call(null),cljs.tools.reader.read_string.call(null,p1__16376_SHARP_));
})], null),new cljs.core.Keyword(null,"prelude","prelude",-138977836),"(ns tutorial.quil (:require [quil.core :as q]))"], null),new cljs.core.Keyword(null,"reagent","reagent",2131627322),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),tutorial_cljs.text.reagent.text,new cljs.core.Keyword(null,"title","title",636505583),"Reagent",new cljs.core.Keyword(null,"showers","showers",1548575441),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tutorial_cljs.core.reagent_shower], null),new cljs.core.Keyword(null,"prelude","prelude",-138977836),"(ns tutorial.reagent (:require [reagent.core :as r]))"], null)], null);
tutorial_cljs.core.main = (function tutorial_cljs$core$main(){
return null;
});
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.conj,new cljs.core.Symbol(null,"org.processingjs.Processing","org.processingjs.Processing",-1428171003,null),new cljs.core.Symbol(null,"quil.core","quil.core",1790300883,null),new cljs.core.Symbol(null,"quil.middleware","quil.middleware",-361218028,null),new cljs.core.Symbol(null,"quil.util","quil.util",-757045409,null),new cljs.core.Symbol(null,"quil.sketch","quil.sketch",1112053512,null),new cljs.core.Symbol(null,"reagent.core","reagent.core",1841519592,null),new cljs.core.Symbol(null,"gamma.api","gamma.api",1148023474,null),new cljs.core.Symbol(null,"gamma.program","gamma.program",348022875,null));
if(typeof tutorial_cljs.core._general_setup !== 'undefined'){
} else {
tutorial_cljs.core._general_setup = (function (){
devtools.core.install_BANG_.call(null);

return parinfer_codemirror.editor.start_editor_sync_BANG_.call(null);
})()
;
}
tutorial_cljs.core.maybe_fn_docs = (function tutorial_cljs$core$maybe_fn_docs(fn){
var doc = reepl.replumb.doc_from_sym.call(null,fn);
if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(doc))){
var sb__7427__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16379_16381 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16380_16382 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16379_16381,_STAR_print_fn_STAR_16380_16382,sb__7427__auto__,doc){
return (function (x__7428__auto__){
return sb__7427__auto__.append(x__7428__auto__);
});})(_STAR_print_newline_STAR_16379_16381,_STAR_print_fn_STAR_16380_16382,sb__7427__auto__,doc))
;

try{reepl.replumb.print_doc.call(null,doc);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16380_16382;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16379_16381;
}
return [cljs.core.str(sb__7427__auto__)].join('');
} else {
return null;
}
});
tutorial_cljs.core.keyname = (function tutorial_cljs$core$keyname(name){
return [cljs.core.str("text-"),cljs.core.str(name)].join('');
});
tutorial_cljs.core.get_saved = (function tutorial_cljs$core$get_saved(name){
return (localStorage[tutorial_cljs.core.keyname.call(null,name)]);
});
tutorial_cljs.core.save_text = (function tutorial_cljs$core$save_text(name,text){
return (localStorage[tutorial_cljs.core.keyname.call(null,name)] = text);
});
tutorial_cljs.core.default_showers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reepl.show_devtools.show_devtools,cljs.core.partial.call(null,reepl.show_function.show_fn_with_docs,tutorial_cljs.core.maybe_fn_docs)], null);
tutorial_cljs.core.go_to_tutorial = (function tutorial_cljs$core$go_to_tutorial(tutorial){
return (location["hash"] = cljs.core.name.call(null,tutorial));
});
tutorial_cljs.core.go_from_hash = (function tutorial_cljs$core$go_from_hash(){
var name = location.hash.slice((1));
var kwd = ((!(cljs.core.empty_QMARK_.call(null,name)))?cljs.core.keyword.call(null,name):null);
return tutorial_cljs.core.setup_tutorial.call(null,(cljs.core.truth_((function (){var and__6441__auto__ = tutorial_cljs.core.tutorials.call(null,kwd);
if(cljs.core.truth_(and__6441__auto__)){
return kwd;
} else {
return and__6441__auto__;
}
})())?kwd:new cljs.core.Keyword(null,"quil","quil",-2129832017)));
});
window.addEventListener("hashchange",tutorial_cljs.core.go_from_hash);
tutorial_cljs.core.setup_tutorial = (function tutorial_cljs$core$setup_tutorial(name){
console.log("setup",name);

var map__16387 = tutorial_cljs.core.tutorials.call(null,name);
var map__16387__$1 = ((((!((map__16387 == null)))?((((map__16387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16387):map__16387);
var tutorial = map__16387__$1;
var title = cljs.core.get.call(null,map__16387__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.call(null,map__16387__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var prelude = cljs.core.get.call(null,map__16387__$1,new cljs.core.Keyword(null,"prelude","prelude",-138977836));
var special_forms = cljs.core.get.call(null,map__16387__$1,new cljs.core.Keyword(null,"special-forms","special-forms",2132846301));
var showers = cljs.core.get.call(null,map__16387__$1,new cljs.core.Keyword(null,"showers","showers",1548575441));
tutorial_cljs.editor.render_text.call(null,(function (){var or__6453__auto__ = tutorial_cljs.core.get_saved.call(null,name);
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return text;
}
})(),cljs.core.concat.call(null,showers,tutorial_cljs.core.default_showers),special_forms,cljs.core.partial.call(null,tutorial_cljs.core.save_text,name));

var repl_el_16389 = document.getElementById("repl");
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [tutorial_cljs.repl.repl_view,name,cljs.core.map.call(null,((function (repl_el_16389,map__16387,map__16387__$1,tutorial,title,text,prelude,special_forms,showers){
return (function (p1__16383_SHARP_){
return cljs.core.assoc.call(null,cljs.core.second.call(null,p1__16383_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.first.call(null,p1__16383_SHARP_));
});})(repl_el_16389,map__16387,map__16387__$1,tutorial,title,text,prelude,special_forms,showers))
,tutorial_cljs.core.tutorials),((function (repl_el_16389,map__16387,map__16387__$1,tutorial,title,text,prelude,special_forms,showers){
return (function (p1__16384_SHARP_){
return tutorial_cljs.core.go_to_tutorial.call(null,p1__16384_SHARP_);
});})(repl_el_16389,map__16387,map__16387__$1,tutorial,title,text,prelude,special_forms,showers))
,cljs.core.concat.call(null,showers,tutorial_cljs.core.default_showers),((function (repl_el_16389,map__16387,map__16387__$1,tutorial,title,text,prelude,special_forms,showers){
return (function (){
tutorial_cljs.core.save_text.call(null,name,text);

return tutorial_cljs$core$setup_tutorial.call(null,name);
});})(repl_el_16389,map__16387,map__16387__$1,tutorial,title,text,prelude,special_forms,showers))
], null),repl_el_16389);

return reepl.replumb.run_repl.call(null,prelude,tutorial_cljs.repl.replumb_opts,cljs.core.identity);
});
tutorial_cljs.core.go_from_hash.call(null);

//# sourceMappingURL=core.js.map