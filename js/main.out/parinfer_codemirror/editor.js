// Compiled by ClojureScript 1.7.228 {}
goog.provide('parinfer_codemirror.editor');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('parinfer_codemirror.state');
goog.require('parinfer_codemirror.editor_support');
parinfer_codemirror.editor.frame_updates = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Called before any change is applied to the editor.
 */
parinfer_codemirror.editor.before_change = (function parinfer_codemirror$editor$before_change(cm,change){
if((cljs.core._EQ_.call(null,"setValue",change.origin)) && (cljs.core._EQ_.call(null,cm.getValue(),clojure.string.join.call(null,"\n",change.text)))){
return change.cancel();
} else {
return null;
}
});
/**
 * Called after any change is applied to the editor.
 */
parinfer_codemirror.editor.on_change = (function parinfer_codemirror$editor$on_change(cm,change){
if(cljs.core.not_EQ_.call(null,"setValue",change.origin)){
parinfer_codemirror.editor_support.fix_text_BANG_.call(null,cm,new cljs.core.Keyword(null,"change","change",-1163046502),change);

parinfer_codemirror.editor_support.update_cursor_BANG_.call(null,cm,change);

return parinfer_codemirror.editor_support.set_frame_updated_BANG_.call(null,cm,true);
} else {
return null;
}
});
/**
 * Called after the cursor moves in the editor.
 */
parinfer_codemirror.editor.on_cursor_activity = (function parinfer_codemirror$editor$on_cursor_activity(cm){
if(cljs.core.truth_(parinfer_codemirror.editor_support.frame_updated_QMARK_.call(null,cm))){
} else {
parinfer_codemirror.editor_support.fix_text_BANG_.call(null,cm);
}

return parinfer_codemirror.editor_support.set_frame_updated_BANG_.call(null,cm,false);
});
/**
 * Add parinfer goodness to a codemirror editor
 */
parinfer_codemirror.editor.parinferize_BANG_ = (function parinfer_codemirror$editor$parinferize_BANG_(cm,key_,parinfer_mode,initial_value){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state),key_))){
return null;
} else {
var initial_state = cljs.core.assoc.call(null,parinfer_codemirror.state.empty_editor_state,new cljs.core.Keyword(null,"mode","mode",654403691),parinfer_mode,new cljs.core.Keyword(null,"text","text",-1790561697),initial_value);
var prev_editor_state = cljs.core.atom.call(null,null);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state),key_))){
} else {
cljs.core.swap_BANG_.call(null,parinfer_codemirror.editor.frame_updates,cljs.core.assoc,key_,cljs.core.PersistentArrayMap.EMPTY);
}

cljs.core.swap_BANG_.call(null,parinfer_codemirror.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_], null),((function (initial_state,prev_editor_state){
return (function (p1__13260_SHARP_){
return cljs.core.assoc.call(null,(function (){var or__6453__auto__ = p1__13260_SHARP_;
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return initial_state;
}
})(),new cljs.core.Keyword(null,"cm","cm",540591536),cm);
});})(initial_state,prev_editor_state))
);

var x13262_13263 = cm;
x13262_13263.parinfer_codemirror$editor_support$IEditor$ = true;

x13262_13263.parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 = ((function (x13262_13263,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return prev_editor_state;
});})(x13262_13263,initial_state,prev_editor_state))
;

x13262_13263.parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 = ((function (x13262_13263,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return key_;
});})(x13262_13263,initial_state,prev_editor_state))
;

x13262_13263.parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 = ((function (x13262_13263,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,parinfer_codemirror.editor.frame_updates),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null));
});})(x13262_13263,initial_state,prev_editor_state))
;

x13262_13263.parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 = ((function (x13262_13263,initial_state,prev_editor_state){
return (function (this$,value){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,parinfer_codemirror.editor.frame_updates,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null),value);
});})(x13262_13263,initial_state,prev_editor_state))
;


cm.on("change",parinfer_codemirror.editor.on_change);

cm.on("beforeChange",parinfer_codemirror.editor.before_change);

cm.on("cursorActivity",parinfer_codemirror.editor.on_cursor_activity);

return cm;
}
});
/**
 * Called everytime the state changes to sync the code editor.
 */
parinfer_codemirror.editor.on_state_change = (function parinfer_codemirror$editor$on_state_change(_,___$1,old_state,new_state){
var seq__13274 = cljs.core.seq.call(null,new_state);
var chunk__13275 = null;
var count__13276 = (0);
var i__13277 = (0);
while(true){
if((i__13277 < count__13276)){
var vec__13278 = cljs.core._nth.call(null,chunk__13275,i__13277);
var k = cljs.core.nth.call(null,vec__13278,(0),null);
var map__13279 = cljs.core.nth.call(null,vec__13278,(1),null);
var map__13279__$1 = ((((!((map__13279 == null)))?((((map__13279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13279):map__13279);
var cm = cljs.core.get.call(null,map__13279__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__13279__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__13284 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__13284){
cm.setValue(text);
} else {
}

var G__13285 = seq__13274;
var G__13286 = chunk__13275;
var G__13287 = count__13276;
var G__13288 = (i__13277 + (1));
seq__13274 = G__13285;
chunk__13275 = G__13286;
count__13276 = G__13287;
i__13277 = G__13288;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__13274);
if(temp__4425__auto__){
var seq__13274__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13274__$1)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,seq__13274__$1);
var G__13289 = cljs.core.chunk_rest.call(null,seq__13274__$1);
var G__13290 = c__7256__auto__;
var G__13291 = cljs.core.count.call(null,c__7256__auto__);
var G__13292 = (0);
seq__13274 = G__13289;
chunk__13275 = G__13290;
count__13276 = G__13291;
i__13277 = G__13292;
continue;
} else {
var vec__13281 = cljs.core.first.call(null,seq__13274__$1);
var k = cljs.core.nth.call(null,vec__13281,(0),null);
var map__13282 = cljs.core.nth.call(null,vec__13281,(1),null);
var map__13282__$1 = ((((!((map__13282 == null)))?((((map__13282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13282):map__13282);
var cm = cljs.core.get.call(null,map__13282__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__13282__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__13293 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__13293){
cm.setValue(text);
} else {
}

var G__13294 = cljs.core.next.call(null,seq__13274__$1);
var G__13295 = null;
var G__13296 = (0);
var G__13297 = (0);
seq__13274 = G__13294;
chunk__13275 = G__13295;
count__13276 = G__13296;
i__13277 = G__13297;
continue;
}
} else {
return null;
}
}
break;
}
});
parinfer_codemirror.editor.force_editor_sync_BANG_ = (function parinfer_codemirror$editor$force_editor_sync_BANG_(){
var seq__13308 = cljs.core.seq.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state));
var chunk__13309 = null;
var count__13310 = (0);
var i__13311 = (0);
while(true){
if((i__13311 < count__13310)){
var vec__13312 = cljs.core._nth.call(null,chunk__13309,i__13311);
var k = cljs.core.nth.call(null,vec__13312,(0),null);
var map__13313 = cljs.core.nth.call(null,vec__13312,(1),null);
var map__13313__$1 = ((((!((map__13313 == null)))?((((map__13313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13313):map__13313);
var cm = cljs.core.get.call(null,map__13313__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__13313__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);

var G__13318 = seq__13308;
var G__13319 = chunk__13309;
var G__13320 = count__13310;
var G__13321 = (i__13311 + (1));
seq__13308 = G__13318;
chunk__13309 = G__13319;
count__13310 = G__13320;
i__13311 = G__13321;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__13308);
if(temp__4425__auto__){
var seq__13308__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13308__$1)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,seq__13308__$1);
var G__13322 = cljs.core.chunk_rest.call(null,seq__13308__$1);
var G__13323 = c__7256__auto__;
var G__13324 = cljs.core.count.call(null,c__7256__auto__);
var G__13325 = (0);
seq__13308 = G__13322;
chunk__13309 = G__13323;
count__13310 = G__13324;
i__13311 = G__13325;
continue;
} else {
var vec__13315 = cljs.core.first.call(null,seq__13308__$1);
var k = cljs.core.nth.call(null,vec__13315,(0),null);
var map__13316 = cljs.core.nth.call(null,vec__13315,(1),null);
var map__13316__$1 = ((((!((map__13316 == null)))?((((map__13316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13316):map__13316);
var cm = cljs.core.get.call(null,map__13316__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__13316__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);

var G__13326 = cljs.core.next.call(null,seq__13308__$1);
var G__13327 = null;
var G__13328 = (0);
var G__13329 = (0);
seq__13308 = G__13326;
chunk__13309 = G__13327;
count__13310 = G__13328;
i__13311 = G__13329;
continue;
}
} else {
return null;
}
}
break;
}
});
parinfer_codemirror.editor.start_editor_sync_BANG_ = (function parinfer_codemirror$editor$start_editor_sync_BANG_(){
cljs.core.add_watch.call(null,parinfer_codemirror.state.state,new cljs.core.Keyword(null,"editor-updater","editor-updater",-323951652),parinfer_codemirror.editor.on_state_change);

return parinfer_codemirror.editor.force_editor_sync_BANG_.call(null);
});

//# sourceMappingURL=editor.js.map