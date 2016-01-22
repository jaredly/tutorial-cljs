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
return (function (p1__16600_SHARP_){
return cljs.core.assoc.call(null,(function (){var or__6453__auto__ = p1__16600_SHARP_;
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return initial_state;
}
})(),new cljs.core.Keyword(null,"cm","cm",540591536),cm);
});})(initial_state,prev_editor_state))
);

var x16602_16603 = cm;
x16602_16603.parinfer_codemirror$editor_support$IEditor$ = true;

x16602_16603.parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 = ((function (x16602_16603,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return prev_editor_state;
});})(x16602_16603,initial_state,prev_editor_state))
;

x16602_16603.parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 = ((function (x16602_16603,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return key_;
});})(x16602_16603,initial_state,prev_editor_state))
;

x16602_16603.parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 = ((function (x16602_16603,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,parinfer_codemirror.editor.frame_updates),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null));
});})(x16602_16603,initial_state,prev_editor_state))
;

x16602_16603.parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 = ((function (x16602_16603,initial_state,prev_editor_state){
return (function (this$,value){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,parinfer_codemirror.editor.frame_updates,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null),value);
});})(x16602_16603,initial_state,prev_editor_state))
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
var seq__16614 = cljs.core.seq.call(null,new_state);
var chunk__16615 = null;
var count__16616 = (0);
var i__16617 = (0);
while(true){
if((i__16617 < count__16616)){
var vec__16618 = cljs.core._nth.call(null,chunk__16615,i__16617);
var k = cljs.core.nth.call(null,vec__16618,(0),null);
var map__16619 = cljs.core.nth.call(null,vec__16618,(1),null);
var map__16619__$1 = ((((!((map__16619 == null)))?((((map__16619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16619):map__16619);
var cm = cljs.core.get.call(null,map__16619__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__16619__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__16624 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__16624){
cm.setValue(text);
} else {
}

var G__16625 = seq__16614;
var G__16626 = chunk__16615;
var G__16627 = count__16616;
var G__16628 = (i__16617 + (1));
seq__16614 = G__16625;
chunk__16615 = G__16626;
count__16616 = G__16627;
i__16617 = G__16628;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16614);
if(temp__4425__auto__){
var seq__16614__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16614__$1)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,seq__16614__$1);
var G__16629 = cljs.core.chunk_rest.call(null,seq__16614__$1);
var G__16630 = c__7256__auto__;
var G__16631 = cljs.core.count.call(null,c__7256__auto__);
var G__16632 = (0);
seq__16614 = G__16629;
chunk__16615 = G__16630;
count__16616 = G__16631;
i__16617 = G__16632;
continue;
} else {
var vec__16621 = cljs.core.first.call(null,seq__16614__$1);
var k = cljs.core.nth.call(null,vec__16621,(0),null);
var map__16622 = cljs.core.nth.call(null,vec__16621,(1),null);
var map__16622__$1 = ((((!((map__16622 == null)))?((((map__16622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16622):map__16622);
var cm = cljs.core.get.call(null,map__16622__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__16622__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__16633 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__16633){
cm.setValue(text);
} else {
}

var G__16634 = cljs.core.next.call(null,seq__16614__$1);
var G__16635 = null;
var G__16636 = (0);
var G__16637 = (0);
seq__16614 = G__16634;
chunk__16615 = G__16635;
count__16616 = G__16636;
i__16617 = G__16637;
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
var seq__16648 = cljs.core.seq.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state));
var chunk__16649 = null;
var count__16650 = (0);
var i__16651 = (0);
while(true){
if((i__16651 < count__16650)){
var vec__16652 = cljs.core._nth.call(null,chunk__16649,i__16651);
var k = cljs.core.nth.call(null,vec__16652,(0),null);
var map__16653 = cljs.core.nth.call(null,vec__16652,(1),null);
var map__16653__$1 = ((((!((map__16653 == null)))?((((map__16653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16653):map__16653);
var cm = cljs.core.get.call(null,map__16653__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__16653__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);

var G__16658 = seq__16648;
var G__16659 = chunk__16649;
var G__16660 = count__16650;
var G__16661 = (i__16651 + (1));
seq__16648 = G__16658;
chunk__16649 = G__16659;
count__16650 = G__16660;
i__16651 = G__16661;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16648);
if(temp__4425__auto__){
var seq__16648__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16648__$1)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,seq__16648__$1);
var G__16662 = cljs.core.chunk_rest.call(null,seq__16648__$1);
var G__16663 = c__7256__auto__;
var G__16664 = cljs.core.count.call(null,c__7256__auto__);
var G__16665 = (0);
seq__16648 = G__16662;
chunk__16649 = G__16663;
count__16650 = G__16664;
i__16651 = G__16665;
continue;
} else {
var vec__16655 = cljs.core.first.call(null,seq__16648__$1);
var k = cljs.core.nth.call(null,vec__16655,(0),null);
var map__16656 = cljs.core.nth.call(null,vec__16655,(1),null);
var map__16656__$1 = ((((!((map__16656 == null)))?((((map__16656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16656):map__16656);
var cm = cljs.core.get.call(null,map__16656__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__16656__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);

var G__16666 = cljs.core.next.call(null,seq__16648__$1);
var G__16667 = null;
var G__16668 = (0);
var G__16669 = (0);
seq__16648 = G__16666;
chunk__16649 = G__16667;
count__16650 = G__16668;
i__16651 = G__16669;
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
