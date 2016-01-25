// Compiled by ClojureScript 1.7.228 {}
goog.provide('tutorial_cljs.repl');
goog.require('cljs.core');
goog.require('reepl.show_devtools');
goog.require('replumb.core');
goog.require('parinfer_codemirror.editor');
goog.require('reepl.core');
goog.require('reepl.replumb');
goog.require('reagent.core');
goog.require('tutorial_cljs.quil_complete');
goog.require('reepl.show_value');
goog.require('devtools.core');
goog.require('reepl.show_function');
tutorial_cljs.repl.styles = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"choose-container","choose-container",-656768187),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"chooser","chooser",269696971),new cljs.core.Keyword(null,"reset-button","reset-button",7908814),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"chooser-title","chooser-title",-2129928260)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(5),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(10)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"stretch","stretch",-1888837380),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(10),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(5),new cljs.core.Keyword(null,"color","color",1011675173),"#ddd"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(5),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".5em"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5em",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(5)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"color","color",1011675173),"#faa",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(20),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8em",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 5px"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#aaa",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"margin","margin",-995903681),"2px 10px 0"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 5px",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".5em",new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"stretch","stretch",-1888837380),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"stretch","stretch",-1888837380),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(10),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5em",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(10)], null)]);
tutorial_cljs.repl.replumb_opts = cljs.core.merge.call(null,replumb.core.browser_options.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/js/main.out"], null),reepl.replumb.fetch_file_BANG_));
if(typeof tutorial_cljs.repl.repl_state !== 'undefined'){
} else {
tutorial_cljs.repl.repl_state = reagent.core.atom.call(null,reepl.core.initial_state);
}
if(typeof tutorial_cljs.repl.complete_atom !== 'undefined'){
} else {
tutorial_cljs.repl.complete_atom = reagent.core.atom.call(null,null);
}
tutorial_cljs.repl.maybe_fn_docs = (function tutorial_cljs$repl$maybe_fn_docs(fn){
var doc = reepl.replumb.doc_from_sym.call(null,fn);
if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(doc))){
var sb__7427__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19868_19870 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19869_19871 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19868_19870,_STAR_print_fn_STAR_19869_19871,sb__7427__auto__,doc){
return (function (x__7428__auto__){
return sb__7427__auto__.append(x__7428__auto__);
});})(_STAR_print_newline_STAR_19868_19870,_STAR_print_fn_STAR_19869_19871,sb__7427__auto__,doc))
;

try{reepl.replumb.print_doc.call(null,doc);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19869_19871;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19868_19870;
}
return [cljs.core.str(sb__7427__auto__)].join('');
} else {
return null;
}
});
tutorial_cljs.repl.default_settings = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vim","vim",764723904),false,new cljs.core.Keyword(null,"warning-as-error","warning-as-error",1347418166),true,new cljs.core.Keyword(null,"parinfer","parinfer",1893066885),true], null);
tutorial_cljs.repl.get_settings = (function tutorial_cljs$repl$get_settings(){
var val = localStorage.reeplSettings;
if(cljs.core.not.call(null,val)){
return tutorial_cljs.repl.default_settings;
} else {
try{return cljs.core.js__GT_clj.call(null,JSON.parse(val),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}catch (e19873){if((e19873 instanceof Error)){
var _ = e19873;
return tutorial_cljs.repl.default_settings;
} else {
throw e19873;

}
}}
});
tutorial_cljs.repl.save_settings = (function tutorial_cljs$repl$save_settings(settings){
var str = JSON.stringify(cljs.core.clj__GT_js.call(null,settings));
return (localStorage["reeplSettings"] = str);
});
if(typeof tutorial_cljs.repl.settings !== 'undefined'){
} else {
tutorial_cljs.repl.settings = reagent.core.atom.call(null,tutorial_cljs.repl.get_settings.call(null));
}
if(typeof tutorial_cljs.repl.pi_count !== 'undefined'){
} else {
tutorial_cljs.repl.pi_count = cljs.core.atom.call(null,(0));
}
tutorial_cljs.repl.checkbox = (function tutorial_cljs$repl$checkbox(keyword,title){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.repl.styles)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),keyword.call(null,cljs.core.deref.call(null,tutorial_cljs.repl.settings)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.repl.styles),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.call(null,tutorial_cljs.repl.settings,cljs.core.update,keyword,cljs.core.not);
})], null)], null),title], null);
});
tutorial_cljs.repl.auto_complete = (function tutorial_cljs$repl$auto_complete(sym){
var text = [cljs.core.str(sym)].join('');
var quil = tutorial_cljs.quil_complete.quil_prefix.call(null);
if(cljs.core.truth_((function (){var and__6441__auto__ = quil;
if(cljs.core.truth_(and__6441__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf([cljs.core.str(quil),cljs.core.str("/")].join('')));
} else {
return and__6441__auto__;
}
})())){
return tutorial_cljs.quil_complete.quil_complete.call(null,quil,text);
} else {
return reepl.replumb.process_apropos.call(null,sym);
}
});
tutorial_cljs.repl.get_docs = (function tutorial_cljs$repl$get_docs(sym){
var text = [cljs.core.str(sym)].join('');
var quil = tutorial_cljs.quil_complete.quil_prefix.call(null);
if(cljs.core.truth_((function (){var and__6441__auto__ = quil;
if(cljs.core.truth_(and__6441__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf([cljs.core.str(quil),cljs.core.str("/")].join('')));
} else {
return and__6441__auto__;
}
})())){
return tutorial_cljs.quil_complete.quil_doc.call(null,text);
} else {
return reepl.replumb.process_doc.call(null,sym);
}
});
tutorial_cljs.repl.repl_view = (function tutorial_cljs$repl$repl_view(current_tutorial,tutorials,on_tutorial,showers,reset_text){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.repl.styles)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tutorial_cljs.repl.styles.call(null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tutorial_cljs.repl.styles.call(null,new cljs.core.Keyword(null,"choose-container","choose-container",-656768187))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"chooser-title","chooser-title",-2129928260).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.repl.styles)], null),"Tutorial"], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"chooser","chooser",269696971).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.repl.styles),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name.call(null,current_tutorial),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__19874_SHARP_){
return on_tutorial.call(null,cljs.core.keyword.call(null,p1__19874_SHARP_.target.value));
})], null)], null),cljs.core.map.call(null,(function (p1__19875_SHARP_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__19875_SHARP_))], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__19875_SHARP_)], null);
}),tutorials)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"reset-button","reset-button",7908814).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.repl.styles),new cljs.core.Keyword(null,"on-click","on-click",1632826543),reset_text], null),"Revert Text"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tutorial_cljs.repl.checkbox,new cljs.core.Keyword(null,"vim","vim",764723904),"Vim"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tutorial_cljs.repl.checkbox,new cljs.core.Keyword(null,"parinfer","parinfer",1893066885),"Parinfer"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tutorial_cljs.repl.checkbox,new cljs.core.Keyword(null,"warning-as-error","warning-as-error",1347418166),"Warning as error"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/jaredly/tutorial-cljs",new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"_blank","_blank",1070304072),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.repl.styles)], null),"Github"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"repl","repl",-35398667).cljs$core$IFn$_invoke$arity$1(tutorial_cljs.repl.styles)], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [reepl.core.repl,new cljs.core.Keyword(null,"execute","execute",-129499188),(function (p1__19876_SHARP_,p2__19877_SHARP_){
return reepl.replumb.run_repl.call(null,p1__19876_SHARP_,cljs.core.merge.call(null,tutorial_cljs.repl.replumb_opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warning-as-error","warning-as-error",1347418166),new cljs.core.Keyword(null,"warning-as-error","warning-as-error",1347418166).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tutorial_cljs.repl.settings))], null)),p2__19877_SHARP_);
}),new cljs.core.Keyword(null,"complete-word","complete-word",1063206084),tutorial_cljs.repl.auto_complete,new cljs.core.Keyword(null,"get-docs","get-docs",-698720007),tutorial_cljs.repl.get_docs,new cljs.core.Keyword(null,"state","state",-1988618099),tutorial_cljs.repl.repl_state,new cljs.core.Keyword(null,"complete-atom","complete-atom",-243286874),tutorial_cljs.repl.complete_atom,new cljs.core.Keyword(null,"show-value-opts","show-value-opts",-412296519),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showers","showers",1548575441),showers], null),new cljs.core.Keyword(null,"js-cm-opts","js-cm-opts",1231776640),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mode","mode",654403691),"clojure-parinfer",new cljs.core.Keyword(null,"keyMap","keyMap",945500512),(cljs.core.truth_(new cljs.core.Keyword(null,"vim","vim",764723904).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tutorial_cljs.repl.settings)))?"vim":"default"),new cljs.core.Keyword(null,"showCursorWhenSelecting","showCursorWhenSelecting",169880137),true], null),new cljs.core.Keyword(null,"on-cm-init","on-cm-init",105207782),(function (p1__19878_SHARP_){
return parinfer_codemirror.editor.parinferize_BANG_.call(null,p1__19878_SHARP_,cljs.core.swap_BANG_.call(null,tutorial_cljs.repl.pi_count,cljs.core.inc),new cljs.core.Keyword(null,"indent-mode","indent-mode",1737814542),p1__19878_SHARP_.getValue());
})], null)], null)], null);
});
cljs.core.add_watch.call(null,tutorial_cljs.repl.settings,new cljs.core.Keyword(null,"settings","settings",1556144875),(function (p1__19880_SHARP_,p2__19881_SHARP_,p3__19882_SHARP_,p4__19879_SHARP_){
return tutorial_cljs.repl.save_settings.call(null,p4__19879_SHARP_);
}));
