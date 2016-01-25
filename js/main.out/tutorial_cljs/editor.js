// Compiled by ClojureScript 1.7.228 {}
goog.provide('tutorial_cljs.editor');
goog.require('cljs.core');
goog.require('reepl.core');
goog.require('tutorial_cljs.repl');
goog.require('tutorial_cljs.inline_eval');
tutorial_cljs.editor.render_text = (function tutorial_cljs$editor$render_text(initial_text,showers,special_forms,on_change){
var text_el = document.getElementById("text");
var complete_cmd = reepl.core.make_complete_cmd.call(null,tutorial_cljs.repl.auto_complete,tutorial_cljs.repl.complete_atom);
(text_el["innerHTML"] = "");

tutorial_cljs.editor.text_mirror = (new CodeMirror(text_el,{"lineNumbers": true, "matchBrackets": true, "cursorScrollMargin": (5), "value": initial_text, "keyMap": (cljs.core.truth_(new cljs.core.Keyword(null,"vim","vim",764723904).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tutorial_cljs.repl.settings)))?"vim":"default"), "extraKeys": {"Shift-Cmd-Enter": ((function (text_el,complete_cmd){
return (function (_){
return tutorial_cljs.inline_eval.hide_display.call(null);
});})(text_el,complete_cmd))
, "Shift-Ctrl-Enter": ((function (text_el,complete_cmd){
return (function (_){
return tutorial_cljs.inline_eval.hide_display.call(null);
});})(text_el,complete_cmd))
, "Ctrl-Enter": ((function (text_el,complete_cmd){
return (function (cm){
return tutorial_cljs.inline_eval.eval_current_form.call(null,cm,showers,special_forms);
});})(text_el,complete_cmd))
, "Cmd-Enter": ((function (text_el,complete_cmd){
return (function (cm){
return tutorial_cljs.inline_eval.eval_current_form.call(null,cm,showers,special_forms);
});})(text_el,complete_cmd))
}, "autoCloseBrackets": true, "mode": "clojure"}));

tutorial_cljs.editor.text_mirror.on("change",((function (text_el,complete_cmd){
return (function (){
return on_change.call(null,tutorial_cljs.editor.text_mirror.getValue());
});})(text_el,complete_cmd))
);

tutorial_cljs.editor.text_mirror.on("keydown",((function (text_el,complete_cmd){
return (function (inst,evt){
var G__21143 = evt.keyCode;
switch (G__21143) {
case (17):
case (18):
case (91):
case (93):
return complete_cmd.call(null,new cljs.core.Keyword(null,"show-all","show-all",715701051)).call(null);

break;
case (9):
return complete_cmd.call(null,new cljs.core.Keyword(null,"cycle","cycle",710365284)).call(null,evt.shiftKey,tutorial_cljs.editor.text_mirror,evt);

break;
default:
return new cljs.core.Keyword(null,"none","none",1333468478);

}
});})(text_el,complete_cmd))
);

tutorial_cljs.editor.text_mirror.on("keyup",((function (text_el,complete_cmd){
return (function (inst,evt){
return reepl.code_mirror.complete_keyup.call(null,complete_cmd,evt.keyCode,inst);
});})(text_el,complete_cmd))
);

return text_el.addEventListener("mouseup",((function (text_el,complete_cmd){
return (function (evt){
return complete_cmd.call(null,new cljs.core.Keyword(null,"set","set",304602554)).call(null,reepl.code_mirror.get_word_and_range.call(null,tutorial_cljs.editor.text_mirror));
});})(text_el,complete_cmd))
);
});
