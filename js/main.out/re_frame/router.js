// Compiled by ClojureScript 1.7.228 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('reagent.impl.batching');
goog.require('re_frame.handlers');
goog.require('re_frame.utils');
goog.require('goog.async.nextTick');
re_frame.router.later_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816),reagent.impl.batching.do_later,new cljs.core.Keyword(null,"yield","yield",177875009),goog.async.nextTick], null);

/**
 * @interface
 */
re_frame.router.IEventQueue = function(){};

re_frame.router.enqueue = (function re_frame$router$enqueue(this$,event){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$enqueue$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$enqueue$arity$2(this$,event);
} else {
var x__7108__auto__ = (((this$ == null))?null:this$);
var m__7109__auto__ = (re_frame.router.enqueue[goog.typeOf(x__7108__auto__)]);
if(!((m__7109__auto__ == null))){
return m__7109__auto__.call(null,this$,event);
} else {
var m__7109__auto____$1 = (re_frame.router.enqueue["_"]);
if(!((m__7109__auto____$1 == null))){
return m__7109__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.enqueue",this$);
}
}
}
});

re_frame.router.add_post_event_callback = (function re_frame$router$add_post_event_callback(this$,f){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$add_post_event_callback$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$add_post_event_callback$arity$2(this$,f);
} else {
var x__7108__auto__ = (((this$ == null))?null:this$);
var m__7109__auto__ = (re_frame.router.add_post_event_callback[goog.typeOf(x__7108__auto__)]);
if(!((m__7109__auto__ == null))){
return m__7109__auto__.call(null,this$,f);
} else {
var m__7109__auto____$1 = (re_frame.router.add_post_event_callback["_"]);
if(!((m__7109__auto____$1 == null))){
return m__7109__auto____$1.call(null,this$,f);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.add-post-event-callback",this$);
}
}
}
});

re_frame.router._fsm_trigger = (function re_frame$router$_fsm_trigger(this$,trigger,arg){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3 == null)))){
return this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
var x__7108__auto__ = (((this$ == null))?null:this$);
var m__7109__auto__ = (re_frame.router._fsm_trigger[goog.typeOf(x__7108__auto__)]);
if(!((m__7109__auto__ == null))){
return m__7109__auto__.call(null,this$,trigger,arg);
} else {
var m__7109__auto____$1 = (re_frame.router._fsm_trigger["_"]);
if(!((m__7109__auto____$1 == null))){
return m__7109__auto____$1.call(null,this$,trigger,arg);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-fsm-trigger",this$);
}
}
}
});

re_frame.router._add_event = (function re_frame$router$_add_event(this$,event){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_add_event$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_add_event$arity$2(this$,event);
} else {
var x__7108__auto__ = (((this$ == null))?null:this$);
var m__7109__auto__ = (re_frame.router._add_event[goog.typeOf(x__7108__auto__)]);
if(!((m__7109__auto__ == null))){
return m__7109__auto__.call(null,this$,event);
} else {
var m__7109__auto____$1 = (re_frame.router._add_event["_"]);
if(!((m__7109__auto____$1 == null))){
return m__7109__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-add-event",this$);
}
}
}
});

re_frame.router._process_1st_event = (function re_frame$router$_process_1st_event(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_process_1st_event$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_process_1st_event$arity$1(this$);
} else {
var x__7108__auto__ = (((this$ == null))?null:this$);
var m__7109__auto__ = (re_frame.router._process_1st_event[goog.typeOf(x__7108__auto__)]);
if(!((m__7109__auto__ == null))){
return m__7109__auto__.call(null,this$);
} else {
var m__7109__auto____$1 = (re_frame.router._process_1st_event["_"]);
if(!((m__7109__auto____$1 == null))){
return m__7109__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-process-1st-event",this$);
}
}
}
});

re_frame.router._run_next_tick = (function re_frame$router$_run_next_tick(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_run_next_tick$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_run_next_tick$arity$1(this$);
} else {
var x__7108__auto__ = (((this$ == null))?null:this$);
var m__7109__auto__ = (re_frame.router._run_next_tick[goog.typeOf(x__7108__auto__)]);
if(!((m__7109__auto__ == null))){
return m__7109__auto__.call(null,this$);
} else {
var m__7109__auto____$1 = (re_frame.router._run_next_tick["_"]);
if(!((m__7109__auto____$1 == null))){
return m__7109__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-run-next-tick",this$);
}
}
}
});

re_frame.router._run_queue = (function re_frame$router$_run_queue(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_run_queue$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_run_queue$arity$1(this$);
} else {
var x__7108__auto__ = (((this$ == null))?null:this$);
var m__7109__auto__ = (re_frame.router._run_queue[goog.typeOf(x__7108__auto__)]);
if(!((m__7109__auto__ == null))){
return m__7109__auto__.call(null,this$);
} else {
var m__7109__auto____$1 = (re_frame.router._run_queue["_"]);
if(!((m__7109__auto____$1 == null))){
return m__7109__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-run-queue",this$);
}
}
}
});

re_frame.router._exception = (function re_frame$router$_exception(this$,ex){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_exception$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_exception$arity$2(this$,ex);
} else {
var x__7108__auto__ = (((this$ == null))?null:this$);
var m__7109__auto__ = (re_frame.router._exception[goog.typeOf(x__7108__auto__)]);
if(!((m__7109__auto__ == null))){
return m__7109__auto__.call(null,this$,ex);
} else {
var m__7109__auto____$1 = (re_frame.router._exception["_"]);
if(!((m__7109__auto____$1 == null))){
return m__7109__auto____$1.call(null,this$,ex);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-exception",this$);
}
}
}
});

re_frame.router._pause = (function re_frame$router$_pause(this$,later_fn){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_pause$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_pause$arity$2(this$,later_fn);
} else {
var x__7108__auto__ = (((this$ == null))?null:this$);
var m__7109__auto__ = (re_frame.router._pause[goog.typeOf(x__7108__auto__)]);
if(!((m__7109__auto__ == null))){
return m__7109__auto__.call(null,this$,later_fn);
} else {
var m__7109__auto____$1 = (re_frame.router._pause["_"]);
if(!((m__7109__auto____$1 == null))){
return m__7109__auto____$1.call(null,this$,later_fn);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-pause",this$);
}
}
}
});

re_frame.router._resume = (function re_frame$router$_resume(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_resume$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_resume$arity$1(this$);
} else {
var x__7108__auto__ = (((this$ == null))?null:this$);
var m__7109__auto__ = (re_frame.router._resume[goog.typeOf(x__7108__auto__)]);
if(!((m__7109__auto__ == null))){
return m__7109__auto__.call(null,this$);
} else {
var m__7109__auto____$1 = (re_frame.router._resume["_"]);
if(!((m__7109__auto____$1 == null))){
return m__7109__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-resume",this$);
}
}
}
});


/**
* @constructor
 * @implements {re_frame.router.IEventQueue}
*/
re_frame.router.EventQueue = (function (fsm_state,queue,post_event_callback_fns){
this.fsm_state = fsm_state;
this.queue = queue;
this.post_event_callback_fns = post_event_callback_fns;
})
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$ = true;

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count.call(null,self__.queue);
while(true){
if((n === (0))){
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"finish-run","finish-run",753148477),null);
} else {
var temp__4423__auto__ = cljs.core.some.call(null,re_frame.router.later_fns,cljs.core.keys.call(null,cljs.core.meta.call(null,cljs.core.peek.call(null,self__.queue))));
if(cljs.core.truth_(temp__4423__auto__)){
var later_fn = temp__4423__auto__;
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"pause","pause",-2095325672),later_fn);
} else {
re_frame.router._process_1st_event.call(null,this$__$1);

var G__12704 = (n - (1));
n = G__12704;
continue;
}
}
break;
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_add_event$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return self__.queue = cljs.core.conj.call(null,self__.queue,event);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
re_frame.router._process_1st_event.call(null,this$__$1);

return re_frame.router._run_queue.call(null,this$__$1);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.async.nextTick(((function (this$__$1){
return (function (){
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027),null);
});})(this$__$1))
);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_process_1st_event$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek.call(null,self__.queue);
try{re_frame.handlers.handle.call(null,event_v);
}catch (e12697){var ex_12705 = e12697;
re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"exception","exception",-335277064),ex_12705);
}
self__.queue = cljs.core.pop.call(null,self__.queue);

var seq__12698 = cljs.core.seq.call(null,self__.post_event_callback_fns);
var chunk__12699 = null;
var count__12700 = (0);
var i__12701 = (0);
while(true){
if((i__12701 < count__12700)){
var f = cljs.core._nth.call(null,chunk__12699,i__12701);
f.call(null,event_v,self__.queue);

var G__12706 = seq__12698;
var G__12707 = chunk__12699;
var G__12708 = count__12700;
var G__12709 = (i__12701 + (1));
seq__12698 = G__12706;
chunk__12699 = G__12707;
count__12700 = G__12708;
i__12701 = G__12709;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12698);
if(temp__4425__auto__){
var seq__12698__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12698__$1)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,seq__12698__$1);
var G__12710 = cljs.core.chunk_rest.call(null,seq__12698__$1);
var G__12711 = c__7256__auto__;
var G__12712 = cljs.core.count.call(null,c__7256__auto__);
var G__12713 = (0);
seq__12698 = G__12710;
chunk__12699 = G__12711;
count__12700 = G__12712;
i__12701 = G__12713;
continue;
} else {
var f = cljs.core.first.call(null,seq__12698__$1);
f.call(null,event_v,self__.queue);

var G__12714 = cljs.core.next.call(null,seq__12698__$1);
var G__12715 = null;
var G__12716 = (0);
var G__12717 = (0);
seq__12698 = G__12714;
chunk__12699 = G__12715;
count__12700 = G__12716;
i__12701 = G__12717;
continue;
}
} else {
return null;
}
}
break;
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$enqueue$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"add-event","add-event",938429088),event);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
var vec__12702 = (function (){var G__12703 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__12703)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__12703,this$__$1){
return (function (){
re_frame.router._add_event.call(null,this$__$1,arg);

return re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__12703,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__12703)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__12703,this$__$1){
return (function (){
return re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__12703,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__12703)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__12703,this$__$1){
return (function (){
return re_frame.router._run_queue.call(null,this$__$1);
});})(G__12703,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__12703)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__12703,this$__$1){
return (function (){
return re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__12703,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__12703)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__12703,this$__$1){
return (function (){
return re_frame.router._pause.call(null,this$__$1,arg);
});})(G__12703,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__12703)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),((function (G__12703,this$__$1){
return (function (){
return re_frame.router._exception.call(null,this$__$1,arg);
});})(G__12703,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__12703)){
if(cljs.core.empty_QMARK_.call(null,self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__12703,this$__$1){
return (function (){
return re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__12703,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__12703)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__12703,this$__$1){
return (function (){
return re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__12703,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__12703)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__12703,this$__$1){
return (function (){
return re_frame.router._resume.call(null,this$__$1);
});})(G__12703,this$__$1))
], null);
} else {
throw [cljs.core.str("re-frame: state transition not found. "),cljs.core.str(self__.fsm_state),cljs.core.str(" "),cljs.core.str(trigger)].join('');

}
}
}
}
}
}
}
}
}
})();
var new_state = cljs.core.nth.call(null,vec__12702,(0),null);
var action_fn = cljs.core.nth.call(null,vec__12702,(1),null);
self__.fsm_state = new_state;

if(cljs.core.truth_(action_fn)){
return action_fn.call(null);
} else {
return null;
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_pause$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
return later_fn.call(null,((function (this$__$1){
return (function (){
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"resume","resume",-118572261),null);
});})(this$__$1))
);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$add_post_event_callback$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return self__.post_event_callback_fns = cljs.core.conj.call(null,self__.post_event_callback_fns,f);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_exception$arity$2 = (function (_,ex){
var self__ = this;
var ___$1 = this;
self__.queue = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY);

throw ex;
});

re_frame.router.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fsm-state","fsm-state",-998125236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"queue","queue",-1198599890,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"post-event-callback-fns","post-event-callback-fns",-297038335,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

re_frame.router.EventQueue.cljs$lang$type = true;

re_frame.router.EventQueue.cljs$lang$ctorStr = "re-frame.router/EventQueue";

re_frame.router.EventQueue.cljs$lang$ctorPrWriter = (function (this__7051__auto__,writer__7052__auto__,opt__7053__auto__){
return cljs.core._write.call(null,writer__7052__auto__,"re-frame.router/EventQueue");
});

re_frame.router.__GT_EventQueue = (function re_frame$router$__GT_EventQueue(fsm_state,queue,post_event_callback_fns){
return (new re_frame.router.EventQueue(fsm_state,queue,post_event_callback_fns));
});

re_frame.router.event_queue = re_frame.router.__GT_EventQueue.call(null,new cljs.core.Keyword(null,"idle","idle",-2007156861),cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentVector.EMPTY);
/**
 * Queue an event to be processed by the registered handler.
 * 
 *   Usage example:
 *   (dispatch [:delete-item 42])
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
re_frame.router.enqueue.call(null,re_frame.router.event_queue,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler
 *   immediately. Note: dispatch-sync may not be called while another
 *   event is being handled.
 * 
 *   Usage example:
 *   (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map