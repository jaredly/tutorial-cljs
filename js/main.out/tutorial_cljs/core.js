// Compiled by ClojureScript 1.7.228 {}
goog.provide('tutorial_cljs.core');
goog.require('cljs.core');
goog.require('reepl.show_devtools');
goog.require('replumb.core');
goog.require('parinfer_codemirror.editor');
goog.require('tutorial_cljs.inline_eval');
goog.require('tutorial_cljs.editor');
goog.require('reepl.core');
goog.require('cljs.tools.reader');
goog.require('reepl.replumb');
goog.require('reagent.core');
goog.require('cljs.js');
goog.require('reepl.show_value');
goog.require('devtools.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('reepl.show_function');
goog.require('tutorial_cljs.repl');
if(typeof tutorial_cljs.core._setup_text !== 'undefined'){
} else {
tutorial_cljs.core._setup_text = (function (){
parinfer_codemirror.editor.start_editor_sync_BANG_.call(null);

return tutorial_cljs.editor.render_text.call(null);
})()
;
}
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.conj,new cljs.core.Symbol(null,"org.processingjs.Processing","org.processingjs.Processing",-1428171003,null),new cljs.core.Symbol(null,"quil.core","quil.core",1790300883,null),new cljs.core.Symbol(null,"quil.middleware","quil.middleware",-361218028,null),new cljs.core.Symbol(null,"quil.util","quil.util",-757045409,null),new cljs.core.Symbol(null,"quil.sketch","quil.sketch",1112053512,null));
tutorial_cljs.core.main = (function tutorial_cljs$core$main(){
return null;
});
devtools.core.install_BANG_.call(null);
var repl_el_21149 = document.getElementById("repl");
console.log(repl_el_21149);

reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tutorial_cljs.repl.repl_view], null),repl_el_21149);
reepl.replumb.run_repl.call(null,"(ns tutorial.quil (:require [clojure.string :as str] [quil.core :as q]))",tutorial_cljs.repl.replumb_opts,cljs.core.identity);
