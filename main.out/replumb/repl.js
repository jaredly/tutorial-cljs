// Compiled by ClojureScript 1.7.228 {}
goog.provide('replumb.repl');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('replumb.load');
goog.require('cljs.tools.reader');
goog.require('cljs.tagged_literals');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('replumb.browser');
goog.require('replumb.doc_maps');
goog.require('cljs.pprint');
goog.require('replumb.ast');
goog.require('replumb.nodejs');
goog.require('clojure.string');
goog.require('replumb.common');
goog.require('cljs.repl');
if(typeof replumb.repl.st !== 'undefined'){
} else {
replumb.repl.st = cljs.js.empty_state.call(null);
}
if(typeof replumb.repl.app_env !== 'undefined'){
} else {
replumb.repl.app_env = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-ns","current-ns",1661653428),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.Keyword(null,"last-eval-warning","last-eval-warning",-478360530),null,new cljs.core.Keyword(null,"initializing?","initializing?",111659212),false,new cljs.core.Keyword(null,"needs-init?","needs-init?",1016438963),true,new cljs.core.Keyword(null,"previous-init-opts","previous-init-opts",974753543),cljs.core.PersistentArrayMap.EMPTY], null));
}
/**
 * The ex-info data for this file
 */
replumb.repl.ex_info_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("replumb.repl","error","replumb.repl/error",-144284746)], null);
/**
 * Return the current namespace, as a symbol.
 */
replumb.repl.current_ns = (function replumb$repl$current_ns(){
return new cljs.core.Keyword(null,"current-ns","current-ns",1661653428).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replumb.repl.app_env));
});
/**
 * Given a Google Closure provide / Clojure require (e.g. goog.string),
 *   returns the path to the actual file (without extension).
 */
replumb.repl.get_goog_path = (function replumb$repl$get_goog_path(provide){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,replumb.repl.app_env),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"goog-provide->path","goog-provide->path",-1147669071),provide], null));
});
replumb.repl.empty_analyzer_env = (function replumb$repl$empty_analyzer_env(){
return cljs.core.assoc.call(null,cljs.analyzer.empty_env.call(null),new cljs.core.Keyword(null,"ns","ns",441598760),replumb.ast.namespace.call(null,cljs.core.deref.call(null,replumb.repl.st),new cljs.core.Keyword(null,"current-ns","current-ns",1661653428).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replumb.repl.app_env))),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
});
replumb.repl.map_keys = (function replumb$repl$map_keys(f,m){
return cljs.core.reduce_kv.call(null,(function (r,k,v){
return cljs.core.assoc.call(null,r,f.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * Try to read a string binding all the standard data readers. This
 *   function throws if a valid form cannot be found.
 */
replumb.repl.repl_read_string = (function replumb$repl$repl_read_string(line){
var _STAR_data_readers_STAR_19303 = cljs.tools.reader._STAR_data_readers_STAR_;
cljs.tools.reader._STAR_data_readers_STAR_ = cljs.tagged_literals._STAR_cljs_data_readers_STAR_;

try{return cljs.tools.reader.read_string.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),line);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_19303;
}});
replumb.repl.ns_form_QMARK_ = (function replumb$repl$ns_form_QMARK_(form){
return (cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),cljs.core.first.call(null,form)));
});
/**
 * Is the input analyzer var (from either cljs.analyzer/resolve-var or
 *   cljs.analyzer/resolve-macro-var) a macro?
 */
replumb.repl.macro_QMARK_ = (function replumb$repl$macro_QMARK_(var$){
return new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(var$);
});
replumb.repl.extract_namespace = (function replumb$repl$extract_namespace(source){
var first_form = replumb.repl.repl_read_string.call(null,source);
if(cljs.core.truth_(replumb.repl.ns_form_QMARK_.call(null,first_form))){
return cljs.core.second.call(null,first_form);
} else {
return null;
}
});
/**
 * From cljs.analyzer.api.clj. Given an analysis environment resolve a
 *   var. Analogous to clojure.core/resolve
 */
replumb.repl.resolve = (function replumb$repl$resolve(opts,env,sym){
if(cljs.core.map_QMARK_.call(null,env)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"env","env",-175281708,null))))].join('')));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

var macro_var = cljs.analyzer.resolve_macro_var.call(null,env,sym);
var var$ = cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
replumb.common.debug_prn.call(null,"cljs.analyzer/resolve-macro-var returned",(function (){var sb__7427__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19308_19312 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19309_19313 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19308_19312,_STAR_print_fn_STAR_19309_19313,sb__7427__auto__,macro_var,var$){
return (function (x__7428__auto__){
return sb__7427__auto__.append(x__7428__auto__);
});})(_STAR_print_newline_STAR_19308_19312,_STAR_print_fn_STAR_19309_19313,sb__7427__auto__,macro_var,var$))
;

try{cljs.pprint.pprint.call(null,macro_var);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19309_19313;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19308_19312;
}
return [cljs.core.str(sb__7427__auto__)].join('');
})());

replumb.common.debug_prn.call(null,"cljs.analyzer/resolve-var returned",(function (){var sb__7427__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19310_19314 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19311_19315 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19310_19314,_STAR_print_fn_STAR_19311_19315,sb__7427__auto__,macro_var,var$){
return (function (x__7428__auto__){
return sb__7427__auto__.append(x__7428__auto__);
});})(_STAR_print_newline_STAR_19310_19314,_STAR_print_fn_STAR_19311_19315,sb__7427__auto__,macro_var,var$))
;

try{cljs.pprint.pprint.call(null,var$);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19311_19315;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19310_19314;
}
return [cljs.core.str(sb__7427__auto__)].join('');
})());
} else {
}

return cljs.core.merge.call(null,macro_var,var$);
});
replumb.repl.get_var = (function replumb$repl$get_var(opts,env,sym){
var var$ = (function (){var env__11940__auto__ = replumb.repl.st;
var env__11940__auto____$1 = ((cljs.core.map_QMARK_.call(null,env__11940__auto__))?cljs.core.atom.call(null,env__11940__auto__):((((env__11940__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,env__11940__auto__))))?env__11940__auto__:(function(){throw (new Error([cljs.core.str("Compiler environment must be a map or atom containing a map, not "),cljs.core.str(cljs.core.type.call(null,env__11940__auto__))].join('')))})()
));
var _STAR_compiler_STAR_19318 = cljs.env._STAR_compiler_STAR_;
cljs.env._STAR_compiler_STAR_ = env__11940__auto____$1;

try{return replumb.repl.resolve.call(null,opts,env,sym);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_19318;
}})();
if(cljs.core._EQ_.call(null,cljs.core.namespace.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)),[cljs.core.str(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$))].join(''))){
return cljs.core.update.call(null,var$,new cljs.core.Keyword(null,"name","name",1843675177),((function (var$){
return (function (p1__19316_SHARP_){
return cljs.core.symbol.call(null,cljs.core.name.call(null,p1__19316_SHARP_));
});})(var$))
);
} else {
return var$;
}
});
replumb.repl.replumb_repl_special_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"doc","doc",-741138878,null),null,new cljs.core.Symbol(null,"import","import",241030818,null),null,new cljs.core.Symbol(null,"find-doc","find-doc",-1096800949,null),null,new cljs.core.Symbol(null,"dir","dir",-919681108,null),null,new cljs.core.Symbol(null,"pst","pst",-1996688947,null),null,new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),null,new cljs.core.Symbol(null,"require","require",1172530194,null),null,new cljs.core.Symbol(null,"source","source",1206599988,null),null,new cljs.core.Symbol(null,"load-file","load-file",1215944857,null),null,new cljs.core.Symbol(null,"require-macros","require-macros",-1946488353,null),null,new cljs.core.Symbol(null,"apropos","apropos",-1511857537,null),null], null), null);
replumb.repl.repl_special_QMARK_ = (function replumb$repl$repl_special_QMARK_(form){
var and__6441__auto__ = cljs.core.seq_QMARK_.call(null,form);
if(and__6441__auto__){
return replumb.repl.replumb_repl_special_set.call(null,cljs.core.first.call(null,form));
} else {
return and__6441__auto__;
}
});
/**
 * Gets the base set of evaluation options. The 1-arity function
 *   specifies opts that override default. No check here if opts are
 *   valid.
 */
replumb.repl.base_eval_opts_BANG_ = (function replumb$repl$base_eval_opts_BANG_(var_args){
var args19319 = [];
var len__7511__auto___19322 = arguments.length;
var i__7512__auto___19323 = (0);
while(true){
if((i__7512__auto___19323 < len__7511__auto___19322)){
args19319.push((arguments[i__7512__auto___19323]));

var G__19324 = (i__7512__auto___19323 + (1));
i__7512__auto___19323 = G__19324;
continue;
} else {
}
break;
}

var G__19321 = args19319.length;
switch (G__19321) {
case 0:
return replumb.repl.base_eval_opts_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return replumb.repl.base_eval_opts_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19319.length)].join('')));

}
});

replumb.repl.base_eval_opts_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return replumb.repl.base_eval_opts_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

replumb.repl.base_eval_opts_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"current-ns","current-ns",1661653428).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replumb.repl.app_env)),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"source-map","source-map",1706252311),false,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"load-fn!","load-fn!",-896695751).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"verbose","verbose",1694226060),(function (){var or__6453__auto__ = new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return false;
}
})(),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false], null);
});

replumb.repl.base_eval_opts_BANG_.cljs$lang$maxFixedArity = 1;
replumb.repl.load_eval_opts_BANG_ = (function replumb$repl$load_eval_opts_BANG_(opts,file_name){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,replumb.repl.base_eval_opts_BANG_.call(null,opts),new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file_name);
});
replumb.repl.self_require_QMARK_ = (function replumb$repl$self_require_QMARK_(specs){
return cljs.core.some.call(null,(function (quoted_spec_or_kw){
var and__6441__auto__ = !((quoted_spec_or_kw instanceof cljs.core.Keyword));
if(and__6441__auto__){
var spec = cljs.core.second.call(null,quoted_spec_or_kw);
var ns = ((cljs.core.sequential_QMARK_.call(null,spec))?cljs.core.first.call(null,spec):spec);
return cljs.core._EQ_.call(null,ns,cljs.core.deref.call(null,replumb.repl.current_ns));
} else {
return and__6441__auto__;
}
}),specs);
});
replumb.repl.canonicalize_specs = (function replumb$repl$canonicalize_specs(specs){
var canonicalize = (function replumb$repl$canonicalize_specs_$_canonicalize(quoted_spec_or_kw){
if((quoted_spec_or_kw instanceof cljs.core.Keyword)){
return quoted_spec_or_kw;
} else {
var spec = cljs.core.second.call(null,quoted_spec_or_kw);
var spec__$1 = ((cljs.core.vector_QMARK_.call(null,spec))?spec:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null));
return spec__$1;
}
});
return cljs.core.map.call(null,canonicalize,specs);
});
replumb.repl.purge_ns_BANG_ = (function replumb$repl$purge_ns_BANG_(st,ns){
cljs.core.swap_BANG_.call(null,st,replumb.ast.dissoc_ns,ns);

return cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.disj,ns);
});
replumb.repl.process_reloads_BANG_ = (function replumb$repl$process_reloads_BANG_(specs){
var temp__4423__auto__ = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),specs);
if(cljs.core.truth_(temp__4423__auto__)){
var k = temp__4423__auto__;
var specs__$1 = cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([k], true),specs);
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"reload-all","reload-all",761570200))){
var seq__19334_19342 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.js._STAR_loaded_STAR_));
var chunk__19335_19343 = null;
var count__19336_19344 = (0);
var i__19337_19345 = (0);
while(true){
if((i__19337_19345 < count__19336_19344)){
var ns_19346 = cljs.core._nth.call(null,chunk__19335_19343,i__19337_19345);
replumb.repl.purge_ns_BANG_.call(null,replumb.repl.st,ns_19346);

var G__19347 = seq__19334_19342;
var G__19348 = chunk__19335_19343;
var G__19349 = count__19336_19344;
var G__19350 = (i__19337_19345 + (1));
seq__19334_19342 = G__19347;
chunk__19335_19343 = G__19348;
count__19336_19344 = G__19349;
i__19337_19345 = G__19350;
continue;
} else {
var temp__4425__auto___19351 = cljs.core.seq.call(null,seq__19334_19342);
if(temp__4425__auto___19351){
var seq__19334_19352__$1 = temp__4425__auto___19351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19334_19352__$1)){
var c__7256__auto___19353 = cljs.core.chunk_first.call(null,seq__19334_19352__$1);
var G__19354 = cljs.core.chunk_rest.call(null,seq__19334_19352__$1);
var G__19355 = c__7256__auto___19353;
var G__19356 = cljs.core.count.call(null,c__7256__auto___19353);
var G__19357 = (0);
seq__19334_19342 = G__19354;
chunk__19335_19343 = G__19355;
count__19336_19344 = G__19356;
i__19337_19345 = G__19357;
continue;
} else {
var ns_19358 = cljs.core.first.call(null,seq__19334_19352__$1);
replumb.repl.purge_ns_BANG_.call(null,replumb.repl.st,ns_19358);

var G__19359 = cljs.core.next.call(null,seq__19334_19352__$1);
var G__19360 = null;
var G__19361 = (0);
var G__19362 = (0);
seq__19334_19342 = G__19359;
chunk__19335_19343 = G__19360;
count__19336_19344 = G__19361;
i__19337_19345 = G__19362;
continue;
}
} else {
}
}
break;
}
} else {
var seq__19338_19363 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,specs__$1));
var chunk__19339_19364 = null;
var count__19340_19365 = (0);
var i__19341_19366 = (0);
while(true){
if((i__19341_19366 < count__19340_19365)){
var ns_19367 = cljs.core._nth.call(null,chunk__19339_19364,i__19341_19366);
replumb.repl.purge_ns_BANG_.call(null,replumb.repl.st,ns_19367);

var G__19368 = seq__19338_19363;
var G__19369 = chunk__19339_19364;
var G__19370 = count__19340_19365;
var G__19371 = (i__19341_19366 + (1));
seq__19338_19363 = G__19368;
chunk__19339_19364 = G__19369;
count__19340_19365 = G__19370;
i__19341_19366 = G__19371;
continue;
} else {
var temp__4425__auto___19372 = cljs.core.seq.call(null,seq__19338_19363);
if(temp__4425__auto___19372){
var seq__19338_19373__$1 = temp__4425__auto___19372;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19338_19373__$1)){
var c__7256__auto___19374 = cljs.core.chunk_first.call(null,seq__19338_19373__$1);
var G__19375 = cljs.core.chunk_rest.call(null,seq__19338_19373__$1);
var G__19376 = c__7256__auto___19374;
var G__19377 = cljs.core.count.call(null,c__7256__auto___19374);
var G__19378 = (0);
seq__19338_19363 = G__19375;
chunk__19339_19364 = G__19376;
count__19340_19365 = G__19377;
i__19341_19366 = G__19378;
continue;
} else {
var ns_19379 = cljs.core.first.call(null,seq__19338_19373__$1);
replumb.repl.purge_ns_BANG_.call(null,replumb.repl.st,ns_19379);

var G__19380 = cljs.core.next.call(null,seq__19338_19373__$1);
var G__19381 = null;
var G__19382 = (0);
var G__19383 = (0);
seq__19338_19363 = G__19380;
chunk__19339_19364 = G__19381;
count__19340_19365 = G__19382;
i__19341_19366 = G__19383;
continue;
}
} else {
}
}
break;
}
}

return specs__$1;
} else {
return specs;
}
});
replumb.repl.make_ns_form = (function replumb$repl$make_ns_form(kind,specs,target_ns){
if(cljs.core._EQ_.call(null,kind,new cljs.core.Keyword(null,"import","import",-1399500709))){
return cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns","ns",2082130287,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,target_ns),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,kind),cljs.core.map.call(null,(function (quoted_spec_or_kw){
if((quoted_spec_or_kw instanceof cljs.core.Keyword)){
return quoted_spec_or_kw;
} else {
return cljs.core.second.call(null,quoted_spec_or_kw);
}
}),specs)))))))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"merge","merge",-1804319409),true,new cljs.core.Keyword(null,"line","line",212345235),(1),new cljs.core.Keyword(null,"column","column",2078222095),(1)], null));
} else {
return cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns","ns",2082130287,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,target_ns),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,kind),replumb.repl.process_reloads_BANG_.call(null,replumb.repl.canonicalize_specs.call(null,specs))))))))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"merge","merge",-1804319409),true,new cljs.core.Keyword(null,"line","line",212345235),(1),new cljs.core.Keyword(null,"column","column",2078222095),(1)], null));
}
});
/**
 * Given the content of goog/deps.js file, create a map
 *   provide->path (without extension) of Google dependencies.
 * 
 *   Adapted from planck:
 *   https://github.com/mfikes/planck/blob/master/planck-cljs/src/planck/repl.cljs#L438-L451
 */
replumb.repl.goog_deps_map = (function replumb$repl$goog_deps_map(deps_js_content){
var paths_to_provides = cljs.core.map.call(null,(function (p__19394){
var vec__19395 = p__19394;
var _ = cljs.core.nth.call(null,vec__19395,(0),null);
var path = cljs.core.nth.call(null,vec__19395,(1),null);
var provides = cljs.core.nth.call(null,vec__19395,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,/'(.*?)'/,provides))], null);
}),cljs.core.re_seq.call(null,/\ngoog\.addDependency\('(.*)', \[(.*?)\].*/,deps_js_content));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7225__auto__ = ((function (paths_to_provides){
return (function replumb$repl$goog_deps_map_$_iter__19396(s__19397){
return (new cljs.core.LazySeq(null,((function (paths_to_provides){
return (function (){
var s__19397__$1 = s__19397;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19397__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__19403 = cljs.core.first.call(null,xs__4977__auto__);
var path = cljs.core.nth.call(null,vec__19403,(0),null);
var provides = cljs.core.nth.call(null,vec__19403,(1),null);
var iterys__7221__auto__ = ((function (s__19397__$1,vec__19403,path,provides,xs__4977__auto__,temp__4425__auto__,paths_to_provides){
return (function replumb$repl$goog_deps_map_$_iter__19396_$_iter__19398(s__19399){
return (new cljs.core.LazySeq(null,((function (s__19397__$1,vec__19403,path,provides,xs__4977__auto__,temp__4425__auto__,paths_to_provides){
return (function (){
var s__19399__$1 = s__19399;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__19399__$1);
if(temp__4425__auto____$1){
var s__19399__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19399__$2)){
var c__7223__auto__ = cljs.core.chunk_first.call(null,s__19399__$2);
var size__7224__auto__ = cljs.core.count.call(null,c__7223__auto__);
var b__19401 = cljs.core.chunk_buffer.call(null,size__7224__auto__);
if((function (){var i__19400 = (0);
while(true){
if((i__19400 < size__7224__auto__)){
var provide = cljs.core._nth.call(null,c__7223__auto__,i__19400);
cljs.core.chunk_append.call(null,b__19401,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,provide),[cljs.core.str("goog/"),cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,/(.*)\.js$/,path)))].join('')], null));

var G__19404 = (i__19400 + (1));
i__19400 = G__19404;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19401),replumb$repl$goog_deps_map_$_iter__19396_$_iter__19398.call(null,cljs.core.chunk_rest.call(null,s__19399__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19401),null);
}
} else {
var provide = cljs.core.first.call(null,s__19399__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,provide),[cljs.core.str("goog/"),cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,/(.*)\.js$/,path)))].join('')], null),replumb$repl$goog_deps_map_$_iter__19396_$_iter__19398.call(null,cljs.core.rest.call(null,s__19399__$2)));
}
} else {
return null;
}
break;
}
});})(s__19397__$1,vec__19403,path,provides,xs__4977__auto__,temp__4425__auto__,paths_to_provides))
,null,null));
});})(s__19397__$1,vec__19403,path,provides,xs__4977__auto__,temp__4425__auto__,paths_to_provides))
;
var fs__7222__auto__ = cljs.core.seq.call(null,iterys__7221__auto__.call(null,provides));
if(fs__7222__auto__){
return cljs.core.concat.call(null,fs__7222__auto__,replumb$repl$goog_deps_map_$_iter__19396.call(null,cljs.core.rest.call(null,s__19397__$1)));
} else {
var G__19405 = cljs.core.rest.call(null,s__19397__$1);
s__19397__$1 = G__19405;
continue;
}
} else {
return null;
}
break;
}
});})(paths_to_provides))
,null,null));
});})(paths_to_provides))
;
return iter__7225__auto__.call(null,paths_to_provides);
})());
});
/**
 * Makes a load function that will read from a sequence of src-paths
 *   using a supplied read-file-fn!. It returns a cljs.js-compatible
 *   *load-fn*.
 * 
 *   Read-file-fn! is an async 2-arity function with signature [file-path
 *   src-cb] where src-cb is itself a function (fn [source] ...) that needs
 *   to be called with the full source of the library (as string).
 */
replumb.repl.make_load_fn = (function replumb$repl$make_load_fn(verbose_QMARK_,src_paths,read_file_fn_BANG_){
if(cljs.core.truth_((function (){var and__6441__auto__ = read_file_fn_BANG_;
if(cljs.core.truth_(and__6441__auto__)){
return (cljs.core.sequential_QMARK_.call(null,src_paths)) && (cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,src_paths));
} else {
return and__6441__auto__;
}
})())){
return (function (p__19409,cb){
var map__19410 = p__19409;
var map__19410__$1 = ((((!((map__19410 == null)))?((((map__19410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19410):map__19410);
var load_map = map__19410__$1;
var name = cljs.core.get.call(null,map__19410__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__19410__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__19410__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_(replumb.load.skip_load_QMARK_.call(null,load_map))){
return replumb.load.fake_load_fn_BANG_.call(null,load_map,cb);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^goog\/.*/,path))){
var temp__4423__auto__ = replumb.repl.get_goog_path.call(null,name);
if(cljs.core.truth_(temp__4423__auto__)){
var goog_path = temp__4423__auto__;
return replumb.load.read_files_and_callback_BANG_.call(null,verbose_QMARK_,replumb.load.file_paths_for_closure.call(null,src_paths,goog_path),read_file_fn_BANG_,cb);
} else {
return cb.call(null,null);
}
} else {
return replumb.load.read_files_and_callback_BANG_.call(null,verbose_QMARK_,replumb.load.file_paths_for_load_fn.call(null,src_paths,macros,path),read_file_fn_BANG_,cb);

}
}
});
} else {
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Invalid :read-file-fn! or :src-paths (is it sequential? Are all paths strings?). No *load-fn* will be passed to cljs.js.");
} else {
}

return null;
}
});
/**
 * Set of valid option used for external input validation.
 */
replumb.repl.valid_opts_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"read-file-fn!","read-file-fn!",-492428191),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546),null,new cljs.core.Keyword(null,"warning-as-error","warning-as-error",1347418166),null,new cljs.core.Keyword(null,"load-fn!","load-fn!",-896695751),null,new cljs.core.Keyword(null,"target","target",253001721),null,new cljs.core.Keyword(null,"src-paths","src-paths",-1052057603),null,new cljs.core.Keyword(null,"init-fn!","init-fn!",-986163042),null], null), null);
/**
 * Validate the input user options. Returns a new map without invalid
 *   ones according to valid-opts-set.
 */
replumb.repl.valid_opts = (function replumb$repl$valid_opts(user_opts){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,replumb.repl.valid_opts_set,cljs.core.first),user_opts));
});
/**
 * Given user provided options, conjoins the default option map for
 *   its :target (string or keyword). Defaults to conjoining :default (browser,
 *   aka :js target).
 */
replumb.repl.add_default_opts = (function replumb$repl$add_default_opts(opts,user_opts){
return cljs.core.merge.call(null,opts,(function (){var pred__19415 = cljs.core._EQ_;
var expr__19416 = cljs.core.keyword.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(user_opts));
if(cljs.core.truth_(pred__19415.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),expr__19416))){
return replumb.nodejs.default_opts;
} else {
return replumb.browser.default_opts;
}
})());
});
/**
 * Given current and user options, if :load-fn! is present in user-opts,
 *   conjoins it. Try to create and conjoin one from :src-paths
 *   and :read-file-fn! otherwise. Conjoins nil if it cannot.
 */
replumb.repl.add_load_fn = (function replumb$repl$add_load_fn(opts,user_opts){
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"load-fn!","load-fn!",-896695751),(function (){var or__6453__auto__ = new cljs.core.Keyword(null,"load-fn!","load-fn!",-896695751).cljs$core$IFn$_invoke$arity$1(user_opts);
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return replumb.repl.make_load_fn.call(null,new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(user_opts),new cljs.core.Keyword(null,"src-paths","src-paths",-1052057603).cljs$core$IFn$_invoke$arity$1(user_opts),new cljs.core.Keyword(null,"read-file-fn!","read-file-fn!",-492428191).cljs$core$IFn$_invoke$arity$1(user_opts));
}
})());
});
/**
 * Given current and user options, returns a map containing a
 *   valid :init-fns,conjoining with the one in current if necessary.
 */
replumb.repl.add_init_fns = (function replumb$repl$add_init_fns(opts,user_opts){
return cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-fns","init-fns",1169633539)], null),(function (init_fns){
var temp__4423__auto__ = new cljs.core.Keyword(null,"init-fn!","init-fn!",-986163042).cljs$core$IFn$_invoke$arity$1(user_opts);
if(cljs.core.truth_(temp__4423__auto__)){
var fn = temp__4423__auto__;
return cljs.core.conj.call(null,init_fns,fn);
} else {
return init_fns;
}
}));
});
/**
 * Process the user options. Returns the map that can be fed to
 *   read-eval-call.
 */
replumb.repl.normalize_opts = (function replumb$repl$normalize_opts(user_opts){
var vld_opts = replumb.repl.valid_opts.call(null,user_opts);
return replumb.repl.add_init_fns.call(null,replumb.repl.add_load_fn.call(null,replumb.repl.add_default_opts.call(null,vld_opts,vld_opts),vld_opts),vld_opts);
});
/**
 * Builds the map to return when the evaluation returned success.
 *   Supports the following options:
 * 
 *   * :no-pr-str-on-value avoids wrapping value in pr-str.
 */
replumb.repl.success_map = (function replumb$repl$success_map(opts,form,warning,value){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"warning","warning",-1685650671),warning,new cljs.core.Keyword(null,"value","value",305978217),((cljs.core.not.call(null,new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546).cljs$core$IFn$_invoke$arity$1(opts)))?cljs.core.pr_str.call(null,value):value)], null);
});
/**
 * Builds the map to return when the evaluation returned error.
 */
replumb.repl.error_map = (function replumb$repl$error_map(opts,form,warning,error){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"warning","warning",-1685650671),warning,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
});
replumb.repl.reset_last_warning_BANG_ = (function replumb$repl$reset_last_warning_BANG_(){
return cljs.core.swap_BANG_.call(null,replumb.repl.app_env,cljs.core.assoc,new cljs.core.Keyword(null,"last-eval-warning","last-eval-warning",-478360530),null);
});
/**
 * Handles the case when the evaluation returns a warning and can be
 *   passed as a warning handler when partially applied. At the moment it
 *   treats warnings as errors.
 */
replumb.repl.custom_warning_handler = (function replumb$repl$custom_warning_handler(opts,cb,warning_type,env,extra){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
replumb.common.debug_prn.call(null,[cljs.core.str("Handling warning:\n"),cljs.core.str((function (){var sb__7427__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19420_19422 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19421_19423 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19420_19422,_STAR_print_fn_STAR_19421_19423,sb__7427__auto__){
return (function (x__7428__auto__){
return sb__7427__auto__.append(x__7428__auto__);
});})(_STAR_print_newline_STAR_19420_19422,_STAR_print_fn_STAR_19421_19423,sb__7427__auto__))
;

try{cljs.pprint.pprint.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"warning-type","warning-type",1711103595),warning_type,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"extra","extra",1612569067),extra], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19421_19423;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19420_19422;
}
return [cljs.core.str(sb__7427__auto__)].join('');
})())].join(''));
} else {
}

if(cljs.core.truth_(warning_type.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_))){
var temp__4425__auto__ = cljs.analyzer.error_message.call(null,warning_type,extra);
if(cljs.core.truth_(temp__4425__auto__)){
var s = temp__4425__auto__;
return cljs.core.swap_BANG_.call(null,replumb.repl.app_env,cljs.core.assoc,new cljs.core.Keyword(null,"last-eval-warning","last-eval-warning",-478360530),cljs.analyzer.message.call(null,env,s));
} else {
return null;
}
} else {
return null;
}
});
replumb.repl.validated_call_back_BANG_ = (function replumb$repl$validated_call_back_BANG_(opts,cb,res){
if(cljs.core.map_QMARK_.call(null,res)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"res","res",245523648,null))))].join('')));
}

if(cljs.core.truth_(cljs.core.find.call(null,res,new cljs.core.Keyword(null,"form","form",-1624062471)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Keyword(null,"form","form",-1624062471))))].join('')));
}

if(cljs.core.truth_((function (){var or__6453__auto__ = cljs.core.find.call(null,res,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return cljs.core.find.call(null,res,new cljs.core.Keyword(null,"value","value",305978217));
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core.list(new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Keyword(null,"value","value",305978217)))))].join('')));
}

if(cljs.core.truth_((function (){var or__6453__auto__ = (function (){var and__6441__auto__ = cljs.core.find.call(null,res,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(and__6441__auto__)){
return cljs.core.get.call(null,res,new cljs.core.Keyword(null,"success?","success?",-122854052));
} else {
return and__6441__auto__;
}
})();
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
var and__6441__auto__ = cljs.core.find.call(null,res,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(and__6441__auto__)){
return cljs.core.not.call(null,cljs.core.get.call(null,res,new cljs.core.Keyword(null,"success?","success?",-122854052)));
} else {
return and__6441__auto__;
}
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Keyword(null,"value","value",305978217)),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Keyword(null,"success?","success?",-122854052))),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Keyword(null,"success?","success?",-122854052)))))))].join('')));
}

if(cljs.core.truth_((function (){var or__6453__auto__ = (function (){var and__6441__auto__ = cljs.core.find.call(null,res,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(and__6441__auto__)){
var or__6453__auto__ = (cljs.core.not.call(null,new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546).cljs$core$IFn$_invoke$arity$1(opts))) && (typeof cljs.core.get.call(null,res,new cljs.core.Keyword(null,"value","value",305978217)) === 'string');
if(or__6453__auto__){
return or__6453__auto__;
} else {
var and__6441__auto____$1 = new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__6441__auto____$1)){
return !((res == null));
} else {
return and__6441__auto____$1;
}
}
} else {
return and__6441__auto__;
}
})();
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
var and__6441__auto__ = cljs.core.find.call(null,res,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(and__6441__auto__)){
return (cljs.core.get.call(null,res,new cljs.core.Keyword(null,"error","error",-978969032)) instanceof Error);
} else {
return and__6441__auto__;
}
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Keyword(null,"value","value",305978217)),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546),new cljs.core.Symbol(null,"opts","opts",1795607228,null))),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Keyword(null,"value","value",305978217)))),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546),new cljs.core.Symbol(null,"opts","opts",1795607228,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"res","res",245523648,null)))))),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Keyword(null,"error","error",-978969032)))))))].join('')));
}

if(cljs.core.truth_((function (){var or__6453__auto__ = cljs.core.not.call(null,cljs.core.find.call(null,res,new cljs.core.Keyword(null,"warning","warning",-1685650671)));
if(or__6453__auto__){
return or__6453__auto__;
} else {
var or__6453__auto____$1 = cljs.core.find.call(null,res,new cljs.core.Keyword(null,"warning","warning",-1685650671));
if(cljs.core.truth_(or__6453__auto____$1)){
return or__6453__auto____$1;
} else {
return typeof cljs.core.get.call(null,res,new cljs.core.Keyword(null,"warning","warning",-1685650671)) === 'string';
}
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Keyword(null,"warning","warning",-1685650671))),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Keyword(null,"warning","warning",-1685650671))),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Keyword(null,"warning","warning",-1685650671))))))].join('')));
}

return cb.call(null,res);
});
replumb.repl.validated_init_fn_BANG_ = (function replumb$repl$validated_init_fn_BANG_(init_fn_BANG_,res){
if(cljs.core.map_QMARK_.call(null,res)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"res","res",245523648,null))))].join('')));
}

if(cljs.core.truth_(cljs.core.find.call(null,res,new cljs.core.Keyword(null,"form","form",-1624062471)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Keyword(null,"form","form",-1624062471))))].join('')));
}

if(cljs.core.truth_(cljs.core.find.call(null,res,new cljs.core.Keyword(null,"ns","ns",441598760)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Keyword(null,"ns","ns",441598760))))].join('')));
}

if(cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,cljs.core.get.call(null,res,new cljs.core.Keyword(null,"target","target",253001721)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"*target*","*target*",-1336537940,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Keyword(null,"target","target",253001721)))))].join('')));
}

return init_fn_BANG_.call(null,res);
});
/**
 * Execute the correct side effecting function from data.
 *   Handles :side-effect-fn!, :on-error-fn! and on-success-fn!.
 */
replumb.repl.call_side_effect_BANG_ = (function replumb$repl$call_side_effect_BANG_(data,p__19424){
var map__19427 = p__19424;
var map__19427__$1 = ((((!((map__19427 == null)))?((((map__19427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19427):map__19427);
var value = cljs.core.get.call(null,map__19427__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__19427__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var temp__4423__auto__ = new cljs.core.Keyword(null,"side-effect-fn!","side-effect-fn!",-1977898773).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__4423__auto__)){
var f_BANG_ = temp__4423__auto__;
return f_BANG_.call(null);
} else {
if(cljs.core.not.call(null,error)){
var temp__4425__auto__ = new cljs.core.Keyword(null,"on-success-fn!","on-success-fn!",461991357).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__4425__auto__)){
var s_BANG_ = temp__4425__auto__;
return s_BANG_.call(null);
} else {
return null;
}
} else {
var temp__4425__auto__ = new cljs.core.Keyword(null,"on-error-fn!","on-error-fn!",-1787514690).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__4425__auto__)){
var e_BANG_ = temp__4425__auto__;
return e_BANG_.call(null);
} else {
return null;
}
}
}
});
/**
 * Checks if there has been a warning and if so will return a new result
 *   map instead of the input one, potentially with a :warning key
 *   containing the warning message in it.
 * 
 *   The code paths are the following:
 * 
 *   - if the input map was already an :error, there will be no warning,
 *   the original :error is returned.
 *   - if the input map was a :value:
 *  - if (:warning-as-error opts) is truey, the new map will always
 *    contain it as :error, overriding the original.
 *  - if (:warning-as-error opts) is falsey, the new map will contain
 *    the warning as :warning along with the original :value
 */
replumb.repl.warning_error_map_BANG_ = (function replumb$repl$warning_error_map_BANG_(opts,p__19429){
var map__19432 = p__19429;
var map__19432__$1 = ((((!((map__19432 == null)))?((((map__19432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19432):map__19432);
var orig = map__19432__$1;
var error = cljs.core.get.call(null,map__19432__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var temp__4423__auto__ = new cljs.core.Keyword(null,"last-eval-warning","last-eval-warning",-478360530).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replumb.repl.app_env));
if(cljs.core.truth_(temp__4423__auto__)){
var warning_msg = temp__4423__auto__;
if(cljs.core.not.call(null,error)){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"warning-as-error","warning-as-error",1347418166).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,orig,new cljs.core.Keyword(null,"warning","warning",-1685650671),warning_msg);
} else {
var warning_error = cljs.core.ex_info.call(null,warning_msg,replumb.repl.ex_info_data);
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
replumb.common.debug_prn.call(null,"Erroring on last warning: ",warning_msg);
} else {
}

return replumb.common.wrap_error.call(null,warning_error);
}
} else {
return orig;
}
} else {
return orig;
}
});
/**
 * Handles the evaluation result, calling the callback in the right way,
 *   based on the success or error of the evaluation. The res parameter
 *   expects the same map as ClojureScript's cljs.js callback,
 *   :value if success and :error if not. The data parameter might contain
 *   additional stuff:
 * 
 *   * :form the source form that has been eval-ed
 *   * :on-success-fn! 0-arity function that will be executed on success
 *   * :on-error-fn! 0-arity function that will be executed on error
 *   * :side-effect-fn! 0-arity function that if present will be executed
 *   for both success and error, effectively disabling the individual
 *   on-success-fn! and on-error-fn!
 * 
 *   Call-back! supports the following opts:
 * 
 *   * :verbose will enable the the evaluation logging, defaults to false.
 *   * :no-pr-str-on-value avoids wrapping successful value in a pr-str
 *   * :warning-as-error will consider a warning like an error
 * 
 *   Notes:
 *   1. The opts map passed here overrides the environment options.
 *   2. This function will also clear the :last-eval-warning flag in
 *   app-env.
 *   3. It will execute (:side-effect-fn!) or (on-success-fn!)
 *   and (on-error-fn!)  *before* the callback is called.
 * 
 *   ** Every function in this namespace should call call-back! as
 *   single point of exit. **
 */
replumb.repl.call_back_BANG_ = (function replumb$repl$call_back_BANG_(var_args){
var args19434 = [];
var len__7511__auto___19441 = arguments.length;
var i__7512__auto___19442 = (0);
while(true){
if((i__7512__auto___19442 < len__7511__auto___19441)){
args19434.push((arguments[i__7512__auto___19442]));

var G__19443 = (i__7512__auto___19442 + (1));
i__7512__auto___19442 = G__19443;
continue;
} else {
}
break;
}

var G__19436 = args19434.length;
switch (G__19436) {
case 3:
return replumb.repl.call_back_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return replumb.repl.call_back_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19434.length)].join('')));

}
});

replumb.repl.call_back_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (opts,cb,res){
return replumb.repl.call_back_BANG_.call(null,opts,cb,cljs.core.PersistentArrayMap.EMPTY,res);
});

replumb.repl.call_back_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (opts,cb,data,res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
replumb.common.debug_prn.call(null,"Calling back!\n",(function (){var sb__7427__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19437_19445 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19438_19446 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19437_19445,_STAR_print_fn_STAR_19438_19446,sb__7427__auto__){
return (function (x__7428__auto__){
return sb__7427__auto__.append(x__7428__auto__);
});})(_STAR_print_newline_STAR_19437_19445,_STAR_print_fn_STAR_19438_19446,sb__7427__auto__))
;

try{cljs.pprint.pprint.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),replumb.common.filter_fn_keys.call(null,opts),new cljs.core.Keyword(null,"data","data",-232669377),replumb.common.filter_fn_keys.call(null,data),new cljs.core.Keyword(null,"res","res",-1395007879),res], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19438_19446;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19437_19445;
}
return [cljs.core.str(sb__7427__auto__)].join('');
})());
} else {
}

var new_map = replumb.repl.warning_error_map_BANG_.call(null,opts,res);
var map__19439 = new_map;
var map__19439__$1 = ((((!((map__19439 == null)))?((((map__19439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19439):map__19439);
var value = cljs.core.get.call(null,map__19439__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__19439__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var warning = cljs.core.get.call(null,map__19439__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
replumb.repl.call_side_effect_BANG_.call(null,data,new_map);

replumb.repl.reset_last_warning_BANG_.call(null);

if(cljs.core.not.call(null,error)){
cljs.core._STAR_e = null;

return cb.call(null,replumb.repl.success_map.call(null,opts,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(data),warning,value));
} else {
cljs.core._STAR_e = error;

return cb.call(null,replumb.repl.error_map.call(null,opts,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(data),warning,error));
}
});

replumb.repl.call_back_BANG_.cljs$lang$maxFixedArity = 4;
replumb.repl.process_1_2_3 = (function replumb$repl$process_1_2_3(data,expression_form,value){
if(cljs.core.truth_((function (){var or__6453__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"*2","*2",1728229926,null),null,new cljs.core.Symbol(null,"*1","*1",2110258092,null),null,new cljs.core.Symbol(null,"*e","*e",329170866,null),null,new cljs.core.Symbol(null,"*3","*3",105062009,null),null], null), null).call(null,expression_form);
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return replumb.repl.ns_form_QMARK_.call(null,expression_form);
}
})())){
return null;
} else {
cljs.core._STAR_3 = cljs.core._STAR_2;

cljs.core._STAR_2 = cljs.core._STAR_1;

return cljs.core._STAR_1 = value;
}
});
/**
 * Custom version of cljs.js/eval-str. The only difference is in the
 *   spitting of eval-opts, which is the map which the actual
 *   cljs.js/eval-str needs and usually built by base-eval-opts!, and
 *   user-opts, passed through read-eval-call (same keys supported).
 * 
 *   Additionally, eval-opts might contain:
 * 
 *   * :file-name In case of file loading, indicates its name
 *   * :on-success-fn! 1-arity function that will be executed on success,
 *   the input is the evaluation result
 *   * :on-error-fn! 1-arity function that will be executed on error, the
 *   input is the evaluation result
 *   * :side-effect-fn! 1-arity function that if present will be executed
 *   for both success and error, effectively disabling the individual
 *   on-success-fn! and on-error-fn!. The input is the evaluation result
 */
replumb.repl.eval_str_STAR_ = (function replumb$repl$eval_str_STAR_(eval_opts,user_opts,cb,data,source){
var map__19450 = eval_opts;
var map__19450__$1 = ((((!((map__19450 == null)))?((((map__19450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19450):map__19450);
var file_name = cljs.core.get.call(null,map__19450__$1,new cljs.core.Keyword(null,"file-name","file-name",-1654217259));
var on_success_fn_BANG_ = cljs.core.get.call(null,map__19450__$1,new cljs.core.Keyword(null,"on-success-fn!","on-success-fn!",461991357));
var on_error_fn_BANG_ = cljs.core.get.call(null,map__19450__$1,new cljs.core.Keyword(null,"on-error-fn!","on-error-fn!",-1787514690));
var side_effect_fn_BANG_ = cljs.core.get.call(null,map__19450__$1,new cljs.core.Keyword(null,"side-effect-fn!","side-effect-fn!",-1977898773));
return cljs.js.eval_str.call(null,replumb.repl.st,source,(cljs.core.truth_(file_name)?file_name:source),eval_opts,((function (map__19450,map__19450__$1,file_name,on_success_fn_BANG_,on_error_fn_BANG_,side_effect_fn_BANG_){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(user_opts))){
replumb.common.debug_prn.call(null,"Evaluation returned: ",res);
} else {
}

return replumb.repl.call_back_BANG_.call(null,user_opts,cb,(function (){var G__19452 = data;
var G__19452__$1 = (cljs.core.truth_(on_success_fn_BANG_)?cljs.core.assoc.call(null,G__19452,new cljs.core.Keyword(null,"on-success-fn!","on-success-fn!",461991357),((function (G__19452,map__19450,map__19450__$1,file_name,on_success_fn_BANG_,on_error_fn_BANG_,side_effect_fn_BANG_){
return (function (){
return on_success_fn_BANG_.call(null,res);
});})(G__19452,map__19450,map__19450__$1,file_name,on_success_fn_BANG_,on_error_fn_BANG_,side_effect_fn_BANG_))
):G__19452);
var G__19452__$2 = (cljs.core.truth_(on_error_fn_BANG_)?cljs.core.assoc.call(null,G__19452__$1,new cljs.core.Keyword(null,"on-error-fn!","on-error-fn!",-1787514690),((function (G__19452,G__19452__$1,map__19450,map__19450__$1,file_name,on_success_fn_BANG_,on_error_fn_BANG_,side_effect_fn_BANG_){
return (function (){
return on_error_fn_BANG_.call(null,res);
});})(G__19452,G__19452__$1,map__19450,map__19450__$1,file_name,on_success_fn_BANG_,on_error_fn_BANG_,side_effect_fn_BANG_))
):G__19452__$1);
var G__19452__$3 = (cljs.core.truth_(side_effect_fn_BANG_)?cljs.core.assoc.call(null,G__19452__$2,new cljs.core.Keyword(null,"side-effect-fn!","side-effect-fn!",-1977898773),((function (G__19452,G__19452__$1,G__19452__$2,map__19450,map__19450__$1,file_name,on_success_fn_BANG_,on_error_fn_BANG_,side_effect_fn_BANG_){
return (function (){
return side_effect_fn_BANG_.call(null,res);
});})(G__19452,G__19452__$1,G__19452__$2,map__19450,map__19450__$1,file_name,on_success_fn_BANG_,on_error_fn_BANG_,side_effect_fn_BANG_))
):G__19452__$2);
return G__19452__$3;
})(),res);
});})(map__19450,map__19450__$1,file_name,on_success_fn_BANG_,on_error_fn_BANG_,side_effect_fn_BANG_))
);
});
replumb.repl.process_require = (function replumb$repl$process_require(opts,cb,data,kind,specs){
if(!(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.ffirst.call(null,specs)))){
return replumb.repl.call_back_BANG_.call(null,opts,cb,data,replumb.common.error_argument_must_be_symbol.call(null,"require",replumb.repl.ex_info_data));
} else {
var is_self_require_QMARK_ = (function (){var and__6441__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"require","require",-468001333));
if(and__6441__auto__){
return replumb.repl.self_require_QMARK_.call(null,specs);
} else {
return and__6441__auto__;
}
})();
var vec__19457 = ((cljs.core.not.call(null,is_self_require_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-ns","current-ns",1661653428).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replumb.repl.app_env)),null], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.Keyword(null,"current-ns","current-ns",1661653428).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replumb.repl.app_env))], null));
var target_ns = cljs.core.nth.call(null,vec__19457,(0),null);
var restore_ns = cljs.core.nth.call(null,vec__19457,(1),null);
var ns_form = replumb.repl.make_ns_form.call(null,kind,specs,target_ns);
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
replumb.common.debug_prn.call(null,"Processing",kind,"via",cljs.core.pr_str.call(null,ns_form));
} else {
}

return cljs.js.eval.call(null,replumb.repl.st,ns_form,replumb.repl.base_eval_opts_BANG_.call(null,opts),((function (is_self_require_QMARK_,vec__19457,target_ns,restore_ns,ns_form){
return (function (p__19458){
var map__19459 = p__19458;
var map__19459__$1 = ((((!((map__19459 == null)))?((((map__19459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19459):map__19459);
var error = cljs.core.get.call(null,map__19459__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return replumb.repl.call_back_BANG_.call(null,opts,cb,cljs.core.merge.call(null,data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"side-effect-fn!","side-effect-fn!",-1977898773),((function (map__19459,map__19459__$1,error,is_self_require_QMARK_,vec__19457,target_ns,restore_ns,ns_form){
return (function (){
if(cljs.core.truth_(is_self_require_QMARK_)){
return cljs.core.swap_BANG_.call(null,replumb.repl.app_env,cljs.core.assoc,new cljs.core.Keyword(null,"current-ns","current-ns",1661653428),restore_ns);
} else {
return null;
}
});})(map__19459,map__19459__$1,error,is_self_require_QMARK_,vec__19457,target_ns,restore_ns,ns_form))
], null)),(cljs.core.truth_(error)?replumb.common.wrap_error.call(null,error):replumb.common.wrap_success.call(null,null)));
});})(is_self_require_QMARK_,vec__19457,target_ns,restore_ns,ns_form))
);
}
});
replumb.repl.process_doc = (function replumb$repl$process_doc(opts,cb,data,sym){
return replumb.repl.call_back_BANG_.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546),true], null)),cb,data,replumb.common.wrap_success.call(null,(function (){var sb__7427__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19463_19465 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19464_19466 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19463_19465,_STAR_print_fn_STAR_19464_19466,sb__7427__auto__){
return (function (x__7428__auto__){
return sb__7427__auto__.append(x__7428__auto__);
});})(_STAR_print_newline_STAR_19463_19465,_STAR_print_fn_STAR_19464_19466,sb__7427__auto__))
;

try{if(cljs.core.truth_(replumb.doc_maps.special_doc_map.call(null,sym))){
cljs.repl.print_doc.call(null,replumb.doc_maps.special_doc.call(null,sym));
} else {
if(cljs.core.truth_(replumb.doc_maps.repl_special_doc_map.call(null,sym))){
cljs.repl.print_doc.call(null,replumb.doc_maps.repl_special_doc.call(null,sym));
} else {
if(cljs.core.truth_(replumb.ast.namespace.call(null,cljs.core.deref.call(null,replumb.repl.st),sym))){
cljs.repl.print_doc.call(null,cljs.core.select_keys.call(null,replumb.ast.namespace.call(null,cljs.core.deref.call(null,replumb.repl.st),sym),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"doc","doc",1913296891)], null)));
} else {
cljs.repl.print_doc.call(null,replumb.repl.get_var.call(null,opts,replumb.repl.empty_analyzer_env.call(null),sym));

}
}
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19464_19466;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19463_19465;
}
return [cljs.core.str(sb__7427__auto__)].join('');
})()));
});
replumb.repl.process_pst = (function replumb$repl$process_pst(opts,cb,data,expr){
var temp__4423__auto__ = (function (){var or__6453__auto__ = expr;
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return new cljs.core.Symbol(null,"*e","*e",329170866,null);
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var expr__$1 = temp__4423__auto__;
return cljs.js.eval.call(null,replumb.repl.st,expr__$1,replumb.repl.base_eval_opts_BANG_.call(null,opts),((function (expr__$1,temp__4423__auto__){
return (function (p__19470){
var map__19471 = p__19470;
var map__19471__$1 = ((((!((map__19471 == null)))?((((map__19471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19471):map__19471);
var value = cljs.core.get.call(null,map__19471__$1,new cljs.core.Keyword(null,"value","value",305978217));
var msg = (cljs.core.truth_(value)?replumb.common.extract_message.call(null,value,true,true):"nil");
return replumb.repl.call_back_BANG_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546),true),cb,data,replumb.common.wrap_success.call(null,msg));
});})(expr__$1,temp__4423__auto__))
);
} else {
return replumb.repl.call_back_BANG_.call(null,opts,cb,data,replumb.common.wrap_success.call(null,null));
}
});
replumb.repl.process_in_ns = (function replumb$repl$process_in_ns(opts,cb,data,ns_string){
return cljs.js.eval.call(null,replumb.repl.st,ns_string,replumb.repl.base_eval_opts_BANG_.call(null,opts),(function (p__19476){
var map__19477 = p__19476;
var map__19477__$1 = ((((!((map__19477 == null)))?((((map__19477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19477):map__19477);
var result = map__19477__$1;
var error = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(error)){
return replumb.repl.call_back_BANG_.call(null,opts,cb,data,result);
} else {
var ns_symbol = value;
if(!((ns_symbol instanceof cljs.core.Symbol))){
return replumb.repl.call_back_BANG_.call(null,opts,cb,data,replumb.common.error_argument_must_be_symbol.call(null,"in-ns",replumb.repl.ex_info_data));
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,ns_symbol),replumb.ast.known_namespaces.call(null,cljs.core.deref.call(null,replumb.repl.st))))){
return replumb.repl.call_back_BANG_.call(null,opts,cb,cljs.core.merge.call(null,data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"side-effect-fn!","side-effect-fn!",-1977898773),((function (ns_symbol,map__19477,map__19477__$1,result,error,value){
return (function (){
return cljs.core.swap_BANG_.call(null,replumb.repl.app_env,cljs.core.assoc,new cljs.core.Keyword(null,"current-ns","current-ns",1661653428),ns_symbol);
});})(ns_symbol,map__19477,map__19477__$1,result,error,value))
], null)),replumb.common.wrap_success.call(null,null));
} else {
var ns_form = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns","ns",2082130287,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,ns_symbol))));
return cljs.js.eval.call(null,replumb.repl.st,ns_form,replumb.repl.base_eval_opts_BANG_.call(null,opts),cljs.core.partial.call(null,replumb.repl.call_back_BANG_,opts,cb,cljs.core.merge.call(null,data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-success-fn!","on-success-fn!",461991357),((function (ns_form,ns_symbol,map__19477,map__19477__$1,result,error,value){
return (function (){
return cljs.core.swap_BANG_.call(null,replumb.repl.app_env,cljs.core.assoc,new cljs.core.Keyword(null,"current-ns","current-ns",1661653428),ns_symbol);
});})(ns_form,ns_symbol,map__19477,map__19477__$1,result,error,value))
], null))));
}
}
}
}));
});
replumb.repl.fetch_source = (function replumb$repl$fetch_source(p__19479,var$,paths_to_try,cb){
var map__19482 = p__19479;
var map__19482__$1 = ((((!((map__19482 == null)))?((((map__19482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19482):map__19482);
var verbose = cljs.core.get.call(null,map__19482__$1,new cljs.core.Keyword(null,"verbose","verbose",1694226060));
var read_file_fn_BANG_ = cljs.core.get.call(null,map__19482__$1,new cljs.core.Keyword(null,"read-file-fn!","read-file-fn!",-492428191));
if(cljs.core.truth_(read_file_fn_BANG_)){
return replumb.load.read_files_and_callback_BANG_.call(null,verbose,paths_to_try,read_file_fn_BANG_,((function (map__19482,map__19482__$1,verbose,read_file_fn_BANG_){
return (function (result){
if(cljs.core.truth_(result)){
var source = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(result);
var rdr = cljs.tools.reader.reader_types.source_logging_push_back_reader.call(null,source);
var n__7356__auto___19484 = (new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(var$) - (1));
var __19485 = (0);
while(true){
if((__19485 < n__7356__auto___19484)){
cljs.tools.reader.reader_types.read_line.call(null,rdr);

var G__19486 = (__19485 + (1));
__19485 = G__19486;
continue;
} else {
}
break;
}

return cb.call(null,replumb.common.wrap_success.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.tools.reader.read.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),rdr)))));
} else {
return cb.call(null,replumb.common.wrap_success.call(null,"nil"));
}
});})(map__19482,map__19482__$1,verbose,read_file_fn_BANG_))
);
} else {
if(cljs.core.truth_(verbose)){
replumb.common.debug_prn.call(null,"No :read-file-fn! provided, skipping source fetching...");
} else {
}

return cb.call(null,replumb.common.wrap_success.call(null,"nil"));
}
});
replumb.repl.process_source = (function replumb$repl$process_source(opts,cb,data,sym){
var var$ = replumb.repl.get_var.call(null,opts,replumb.repl.empty_analyzer_env.call(null),sym);
var call_back = cljs.core.partial.call(null,replumb.repl.call_back_BANG_,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546),true], null)),cb,data);
var temp__4423__auto__ = (function (){var or__6453__auto__ = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(var$));
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var full_path_or_ns = temp__4423__auto__;
var paths_to_try = ((!((full_path_or_ns instanceof cljs.core.Symbol)))?replumb.load.file_paths.call(null,new cljs.core.Keyword(null,"src-paths","src-paths",-1052057603).cljs$core$IFn$_invoke$arity$1(opts),full_path_or_ns):replumb.load.file_paths_for_load_fn.call(null,new cljs.core.Keyword(null,"src-paths","src-paths",-1052057603).cljs$core$IFn$_invoke$arity$1(opts),replumb.repl.macro_QMARK_.call(null,var$),cljs.js.ns__GT_relpath.call(null,full_path_or_ns)));
return replumb.repl.fetch_source.call(null,opts,var$,paths_to_try,call_back);
} else {
return call_back.call(null,replumb.common.wrap_success.call(null,"nil"));
}
});
replumb.repl.process_dir = (function replumb$repl$process_dir(opts,cb,data,sym){
var vars = cljs.core.sort.call(null,cljs.core.keys.call(null,replumb.ast.ns_publics.call(null,cljs.core.deref.call(null,replumb.repl.st),sym)));
var call_back = cljs.core.partial.call(null,replumb.repl.call_back_BANG_,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546),true], null)),cb,data);
if(cljs.core.seq.call(null,vars)){
return call_back.call(null,replumb.common.wrap_success.call(null,clojure.string.join.call(null,"\n",vars)));
} else {
return call_back.call(null,replumb.common.wrap_success.call(null,"nil"));
}
});
replumb.repl.process_apropos = (function replumb$repl$process_apropos(opts,cb,data,str_or_pattern){
var matches_QMARK_ = (((str_or_pattern instanceof RegExp))?(function (p1__19487_SHARP_){
return cljs.core.re_find.call(null,str_or_pattern,[cljs.core.str(p1__19487_SHARP_)].join(''));
}):(function (p1__19488_SHARP_){
return ((-1) < [cljs.core.str(p1__19488_SHARP_)].join('').indexOf([cljs.core.str(str_or_pattern)].join('')));
}));
var defs = cljs.core.sort.call(null,cljs.core.mapcat.call(null,((function (matches_QMARK_){
return (function (ns){
var ns_name = [cljs.core.str(ns)].join('');
return cljs.core.map.call(null,((function (ns_name,matches_QMARK_){
return (function (p1__19489_SHARP_){
return cljs.core.symbol.call(null,ns_name,[cljs.core.str(p1__19489_SHARP_)].join(''));
});})(ns_name,matches_QMARK_))
,cljs.core.filter.call(null,matches_QMARK_,cljs.core.keys.call(null,replumb.ast.ns_publics.call(null,cljs.core.deref.call(null,replumb.repl.st),ns))));
});})(matches_QMARK_))
,replumb.ast.known_namespaces.call(null,cljs.core.deref.call(null,replumb.repl.st))));
return replumb.repl.call_back_BANG_.call(null,opts,cb,data,replumb.common.wrap_success.call(null,cljs.core.seq.call(null,defs)));
});
replumb.repl.process_find_doc = (function replumb$repl$process_find_doc(opts,cb,data,re_string_or_pattern){
var re = cljs.core.re_pattern.call(null,re_string_or_pattern);
var ms = cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (re){
return (function (ns){
return cljs.core.map.call(null,((function (re){
return (function (m){
return cljs.core.update_in.call(null,cljs.core.select_keys.call(null,m,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"url","url",276297046)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),((function (re){
return (function (p1__19490_SHARP_){
if(!((p1__19490_SHARP_ == null))){
return cljs.core.name.call(null,p1__19490_SHARP_);
} else {
return p1__19490_SHARP_;
}
});})(re))
);
});})(re))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.vals.call(null,replumb.ast.ns_interns.call(null,cljs.core.deref.call(null,replumb.repl.st),ns))));
});})(re))
,replumb.ast.known_namespaces.call(null,cljs.core.deref.call(null,replumb.repl.st))),cljs.core.map.call(null,((function (re){
return (function (p1__19491_SHARP_){
return cljs.core.select_keys.call(null,replumb.ast.namespace.call(null,cljs.core.deref.call(null,replumb.repl.st),p1__19491_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"doc","doc",1913296891)], null));
});})(re))
,replumb.ast.known_namespaces.call(null,cljs.core.deref.call(null,replumb.repl.st))),cljs.core.map.call(null,replumb.doc_maps.special_doc,cljs.core.keys.call(null,replumb.doc_maps.special_doc_map)));
var ms__$1 = (function (){var iter__7225__auto__ = ((function (re,ms){
return (function replumb$repl$process_find_doc_$_iter__19499(s__19500){
return (new cljs.core.LazySeq(null,((function (re,ms){
return (function (){
var s__19500__$1 = s__19500;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19500__$1);
if(temp__4425__auto__){
var s__19500__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19500__$2)){
var c__7223__auto__ = cljs.core.chunk_first.call(null,s__19500__$2);
var size__7224__auto__ = cljs.core.count.call(null,c__7223__auto__);
var b__19502 = cljs.core.chunk_buffer.call(null,size__7224__auto__);
if((function (){var i__19501 = (0);
while(true){
if((i__19501 < size__7224__auto__)){
var m = cljs.core._nth.call(null,c__7223__auto__,i__19501);
if(cljs.core.truth_((function (){var and__6441__auto__ = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(and__6441__auto__)){
var or__6453__auto__ = cljs.core.re_find.call(null,re,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return cljs.core.re_find.call(null,re,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
return and__6441__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__19502,m);

var G__19505 = (i__19501 + (1));
i__19501 = G__19505;
continue;
} else {
var G__19506 = (i__19501 + (1));
i__19501 = G__19506;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19502),replumb$repl$process_find_doc_$_iter__19499.call(null,cljs.core.chunk_rest.call(null,s__19500__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19502),null);
}
} else {
var m = cljs.core.first.call(null,s__19500__$2);
if(cljs.core.truth_((function (){var and__6441__auto__ = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(and__6441__auto__)){
var or__6453__auto__ = cljs.core.re_find.call(null,re,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
if(cljs.core.truth_(or__6453__auto__)){
return or__6453__auto__;
} else {
return cljs.core.re_find.call(null,re,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
return and__6441__auto__;
}
})())){
return cljs.core.cons.call(null,m,replumb$repl$process_find_doc_$_iter__19499.call(null,cljs.core.rest.call(null,s__19500__$2)));
} else {
var G__19507 = cljs.core.rest.call(null,s__19500__$2);
s__19500__$1 = G__19507;
continue;
}
}
} else {
return null;
}
break;
}
});})(re,ms))
,null,null));
});})(re,ms))
;
return iter__7225__auto__.call(null,ms);
})();
var call_back = cljs.core.partial.call(null,replumb.repl.call_back_BANG_,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546),true], null)),cb,data);
if(cljs.core.seq.call(null,ms__$1)){
return call_back.call(null,replumb.common.wrap_success.call(null,clojure.string.join.call(null,cljs.core.map.call(null,((function (re,ms,ms__$1,call_back){
return (function (p1__19492_SHARP_){
var sb__7427__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19503_19508 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19504_19509 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19503_19508,_STAR_print_fn_STAR_19504_19509,sb__7427__auto__,re,ms,ms__$1,call_back){
return (function (x__7428__auto__){
return sb__7427__auto__.append(x__7428__auto__);
});})(_STAR_print_newline_STAR_19503_19508,_STAR_print_fn_STAR_19504_19509,sb__7427__auto__,re,ms,ms__$1,call_back))
;

try{cljs.repl.print_doc.call(null,p1__19492_SHARP_);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19504_19509;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19503_19508;
}
return [cljs.core.str(sb__7427__auto__)].join('');
});})(re,ms,ms__$1,call_back))
,ms__$1))));
} else {
return call_back.call(null,replumb.common.wrap_success.call(null,"nil"));
}
});
replumb.repl.last_form = (function replumb$repl$last_form(source){
var rdr = cljs.tools.reader.reader_types.string_push_back_reader.call(null,source);
var eof = {};
var read = ((function (rdr,eof){
return (function (){
return cljs.tools.reader.read.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof], null),rdr);
});})(rdr,eof))
;
var first_form = read.call(null);
var second_form = read.call(null);
while(true){
if((eof === second_form)){
return first_form;
} else {
var G__19514 = second_form;
var G__19515 = read.call(null);
first_form = G__19514;
second_form = G__19515;
continue;
}
break;
}
});
replumb.repl.process_load_file = (function replumb$repl$process_load_file(p__19516,cb,data,file_name){
var map__19522 = p__19516;
var map__19522__$1 = ((((!((map__19522 == null)))?((((map__19522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19522):map__19522);
var opts = map__19522__$1;
var verbose = cljs.core.get.call(null,map__19522__$1,new cljs.core.Keyword(null,"verbose","verbose",1694226060));
var read_file_fn_BANG_ = cljs.core.get.call(null,map__19522__$1,new cljs.core.Keyword(null,"read-file-fn!","read-file-fn!",-492428191));
var src_paths = cljs.core.get.call(null,map__19522__$1,new cljs.core.Keyword(null,"src-paths","src-paths",-1052057603));
var call_back = cljs.core.partial.call(null,replumb.repl.call_back_BANG_,opts,cb,data);
if(cljs.core.truth_(read_file_fn_BANG_)){
return replumb.load.read_files_and_callback_BANG_.call(null,verbose,replumb.load.file_paths.call(null,src_paths,file_name),read_file_fn_BANG_,((function (call_back,map__19522,map__19522__$1,opts,verbose,read_file_fn_BANG_,src_paths){
return (function (p__19524){
var map__19525 = p__19524;
var map__19525__$1 = ((((!((map__19525 == null)))?((((map__19525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19525):map__19525);
var result = map__19525__$1;
var source = cljs.core.get.call(null,map__19525__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if(cljs.core.truth_(result)){
return replumb.repl.eval_str_STAR_.call(null,cljs.core.assoc.call(null,replumb.repl.load_eval_opts_BANG_.call(null,opts,file_name),new cljs.core.Keyword(null,"on-success-fn!","on-success-fn!",461991357),((function (map__19525,map__19525__$1,result,source,call_back,map__19522,map__19522__$1,opts,verbose,read_file_fn_BANG_,src_paths){
return (function (eval_res){
return replumb.repl.process_1_2_3.call(null,data,replumb.repl.last_form.call(null,source),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(eval_res));
});})(map__19525,map__19525__$1,result,source,call_back,map__19522,map__19522__$1,opts,verbose,read_file_fn_BANG_,src_paths))
),opts,cb,data,source);
} else {
return call_back.call(null,replumb.common.wrap_error.call(null,cljs.core.ex_info.call(null,[cljs.core.str("Could not load file "),cljs.core.str(file_name)].join(''),replumb.repl.ex_info_data)));
}
});})(call_back,map__19522,map__19522__$1,opts,verbose,read_file_fn_BANG_,src_paths))
);
} else {
if(cljs.core.truth_(verbose)){
replumb.common.debug_prn.call(null,"No :read-file-fn! provided, skipping file loading...");
} else {
}

return call_back.call(null,replumb.common.wrap_success.call(null,null));
}
});
replumb.repl.process_repl_special = (function replumb$repl$process_repl_special(opts,cb,data,expression_form){
var argument = cljs.core.second.call(null,expression_form);
var G__19528 = cljs.core.first.call(null,expression_form);
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"find-doc","find-doc",-1096800949,null),G__19528)){
return replumb.repl.process_find_doc.call(null,opts,cb,data,argument);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"dir","dir",-919681108,null),G__19528)){
return replumb.repl.process_dir.call(null,opts,cb,data,argument);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"import","import",241030818,null),G__19528)){
return replumb.repl.process_require.call(null,opts,cb,data,new cljs.core.Keyword(null,"import","import",-1399500709),cljs.core.rest.call(null,expression_form));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"require-macros","require-macros",-1946488353,null),G__19528)){
return replumb.repl.process_require.call(null,opts,cb,data,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),cljs.core.rest.call(null,expression_form));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"pst","pst",-1996688947,null),G__19528)){
return replumb.repl.process_pst.call(null,opts,cb,data,argument);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"load-file","load-file",1215944857,null),G__19528)){
return replumb.repl.process_load_file.call(null,opts,cb,data,argument);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"source","source",1206599988,null),G__19528)){
return replumb.repl.process_source.call(null,opts,cb,data,argument);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"doc","doc",-741138878,null),G__19528)){
return replumb.repl.process_doc.call(null,opts,cb,data,argument);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__19528)){
return replumb.repl.process_in_ns.call(null,opts,cb,data,argument);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"require","require",1172530194,null),G__19528)){
return replumb.repl.process_require.call(null,opts,cb,data,new cljs.core.Keyword(null,"require","require",-468001333),cljs.core.rest.call(null,expression_form));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"apropos","apropos",-1511857537,null),G__19528)){
return replumb.repl.process_apropos.call(null,opts,cb,data,argument);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.first.call(null,expression_form))].join('')));

}
}
}
}
}
}
}
}
}
}
}
});
replumb.repl.init_option_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src-paths","src-paths",-1052057603),null,new cljs.core.Keyword(null,"init-fn!","init-fn!",-986163042),null], null), null);
/**
 * If we are not already :initializing? and :needs-init? is true, then
 *   move to the "Initializing" state, signaling that the init is in
 *   progress.
 */
replumb.repl.initializing_state = (function replumb$repl$initializing_state(old_app_env){
if(cljs.core.truth_((function (){var and__6441__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"initializing?","initializing?",111659212).cljs$core$IFn$_invoke$arity$1(old_app_env));
if(and__6441__auto__){
return new cljs.core.Keyword(null,"needs-init?","needs-init?",1016438963).cljs$core$IFn$_invoke$arity$1(old_app_env);
} else {
return and__6441__auto__;
}
})())){
return cljs.core.assoc.call(null,old_app_env,new cljs.core.Keyword(null,"initializing?","initializing?",111659212),true);
} else {
return cljs.core.assoc.call(null,old_app_env,new cljs.core.Keyword(null,"needs-init?","needs-init?",1016438963),false);
}
});
/**
 * Move the state to "Initialized", signaling that the init is not in
 *   progress and done.
 */
replumb.repl.initialized_state = (function replumb$repl$initialized_state(old_app_env){
if(cljs.core.truth_(new cljs.core.Keyword(null,"needs-init?","needs-init?",1016438963).cljs$core$IFn$_invoke$arity$1(old_app_env))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Keyword(null,"needs-init?","needs-init?",1016438963),new cljs.core.Symbol(null,"old-app-env","old-app-env",-1736369236,null))))].join('')));
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"initializing?","initializing?",111659212).cljs$core$IFn$_invoke$arity$1(old_app_env))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Keyword(null,"initializing?","initializing?",111659212),new cljs.core.Symbol(null,"old-app-env","old-app-env",-1736369236,null))))].join('')));
}

return cljs.core.merge.call(null,old_app_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initializing?","initializing?",111659212),false,new cljs.core.Keyword(null,"needs-init?","needs-init?",1016438963),false], null));
});
/**
 * Just assoc the options to persist to the input map.
 */
replumb.repl.auto_init_opts = (function replumb$repl$auto_init_opts(opts){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__19529_SHARP_){
return replumb.repl.init_option_set.call(null,cljs.core.first.call(null,p1__19529_SHARP_));
}),opts));
});
/**
 * Reset the initialization state, moving to "Needs Init", signaling
 *   that the we need to initialize the app.
 */
replumb.repl.needs_init_state = (function replumb$repl$needs_init_state(old_app_env){
return cljs.core.merge.call(null,old_app_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initializing?","initializing?",111659212),false,new cljs.core.Keyword(null,"needs-init?","needs-init?",1016438963),true], null));
});
/**
 * Update the :previous-auto-init-opts and, if necessary, also
 *   turns :needs-init? to true, concretely deciding whether when need to
 *   initialise again. Move the state to "Needs Init".
 */
replumb.repl.needs_init_from_opts_state = (function replumb$repl$needs_init_from_opts_state(old_app_env,new_opts){
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"previous-init-opts","previous-init-opts",974753543).cljs$core$IFn$_invoke$arity$1(old_app_env),replumb.repl.auto_init_opts.call(null,new_opts)))){
return replumb.repl.needs_init_state.call(null,old_app_env);
} else {
return old_app_env;
}
});
/**
 * Force the initialization at the next read-eval-call. Use this every
 *   time an option that needs to be read at initialization time changes,
 *   e.g. :source-path. In the future this will be automated.
 */
replumb.repl.force_init_BANG_ = (function replumb$repl$force_init_BANG_(){
return cljs.core.swap_BANG_.call(null,replumb.repl.app_env,replumb.repl.needs_init_state);
});
/**
 * Persist the options necessary to the initialization FSM to work.
 */
replumb.repl.persist_init_opts_BANG_ = (function replumb$repl$persist_init_opts_BANG_(opts){
return cljs.core.swap_BANG_.call(null,replumb.repl.app_env,cljs.core.assoc,new cljs.core.Keyword(null,"previous-init-opts","previous-init-opts",974753543),replumb.repl.auto_init_opts.call(null,opts));
});
/**
 * Reset the initialization persisted options.
 */
replumb.repl.reset_init_opts_BANG_ = (function replumb$repl$reset_init_opts_BANG_(){
return cljs.core.swap_BANG_.call(null,replumb.repl.app_env,cljs.core.assoc,new cljs.core.Keyword(null,"previous-init-opts","previous-init-opts",974753543),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Create and swap in app-env a map from Google Closure provide string
 *   to their respective path (without extension).  It merges with the
 *   current map if many deps.js are on the source path, precedence to the
 *   last (as per merge).
 */
replumb.repl.init_closure_index_BANG_ = (function replumb$repl$init_closure_index_BANG_(opts){
var verbose_QMARK_ = new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts);
var read_file_BANG_ = new cljs.core.Keyword(null,"read-file-fn!","read-file-fn!",-492428191).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(read_file_BANG_)){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Discovering goog/deps.js in",new cljs.core.Keyword(null,"src-paths","src-paths",-1052057603).cljs$core$IFn$_invoke$arity$1(opts));
} else {
}

var seq__19534 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"src-paths","src-paths",-1052057603).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__19535 = null;
var count__19536 = (0);
var i__19537 = (0);
while(true){
if((i__19537 < count__19536)){
var path = cljs.core._nth.call(null,chunk__19535,i__19537);
var goog_deps_path_19538 = [cljs.core.str(replumb.common.normalize_path.call(null,path)),cljs.core.str("goog/deps.js")].join('');
read_file_BANG_.call(null,goog_deps_path_19538,((function (seq__19534,chunk__19535,count__19536,i__19537,goog_deps_path_19538,path,verbose_QMARK_,read_file_BANG_){
return (function (content){
if(cljs.core.truth_(content)){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Found valid",goog_deps_path_19538);
} else {
}

return cljs.core.swap_BANG_.call(null,replumb.repl.app_env,cljs.core.update,new cljs.core.Keyword(null,"goog-provide->path","goog-provide->path",-1147669071),cljs.core.merge,replumb.repl.goog_deps_map.call(null,content));
} else {
return null;
}
});})(seq__19534,chunk__19535,count__19536,i__19537,goog_deps_path_19538,path,verbose_QMARK_,read_file_BANG_))
);

var G__19539 = seq__19534;
var G__19540 = chunk__19535;
var G__19541 = count__19536;
var G__19542 = (i__19537 + (1));
seq__19534 = G__19539;
chunk__19535 = G__19540;
count__19536 = G__19541;
i__19537 = G__19542;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19534);
if(temp__4425__auto__){
var seq__19534__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19534__$1)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,seq__19534__$1);
var G__19543 = cljs.core.chunk_rest.call(null,seq__19534__$1);
var G__19544 = c__7256__auto__;
var G__19545 = cljs.core.count.call(null,c__7256__auto__);
var G__19546 = (0);
seq__19534 = G__19543;
chunk__19535 = G__19544;
count__19536 = G__19545;
i__19537 = G__19546;
continue;
} else {
var path = cljs.core.first.call(null,seq__19534__$1);
var goog_deps_path_19547 = [cljs.core.str(replumb.common.normalize_path.call(null,path)),cljs.core.str("goog/deps.js")].join('');
read_file_BANG_.call(null,goog_deps_path_19547,((function (seq__19534,chunk__19535,count__19536,i__19537,goog_deps_path_19547,path,seq__19534__$1,temp__4425__auto__,verbose_QMARK_,read_file_BANG_){
return (function (content){
if(cljs.core.truth_(content)){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Found valid",goog_deps_path_19547);
} else {
}

return cljs.core.swap_BANG_.call(null,replumb.repl.app_env,cljs.core.update,new cljs.core.Keyword(null,"goog-provide->path","goog-provide->path",-1147669071),cljs.core.merge,replumb.repl.goog_deps_map.call(null,content));
} else {
return null;
}
});})(seq__19534,chunk__19535,count__19536,i__19537,goog_deps_path_19547,path,seq__19534__$1,temp__4425__auto__,verbose_QMARK_,read_file_BANG_))
);

var G__19548 = cljs.core.next.call(null,seq__19534__$1);
var G__19549 = null;
var G__19550 = (0);
var G__19551 = (0);
seq__19534 = G__19548;
chunk__19535 = G__19549;
count__19536 = G__19550;
i__19537 = G__19551;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.truth_(verbose_QMARK_)){
return replumb.common.debug_prn.call(null,"No :read-file-fn! provided, skipping goog/deps.js discovering...");
} else {
return null;
}
}
});
/**
 * The init-repl function. It uses the following opts keys:
 * 
 *   * :init-fns initialization function vector, it will be executed in
 *   order
 * 
 *   Data is passed from outside and will be forwarded to :init-fn!.
 */
replumb.repl.init_repl_BANG_ = (function replumb$repl$init_repl_BANG_(opts,data){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
replumb.common.debug_prn.call(null,"Initializing REPL environment with data",cljs.core.println.call(null,data));
} else {
}

var init_fns_19560 = new cljs.core.Keyword(null,"init-fns","init-fns",1169633539).cljs$core$IFn$_invoke$arity$1(opts);
if((cljs.core.count.call(null,init_fns_19560) > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"init-fns","init-fns",-1484802230,null)),(0))))].join('')));
}

var seq__19556_19561 = cljs.core.seq.call(null,init_fns_19560);
var chunk__19557_19562 = null;
var count__19558_19563 = (0);
var i__19559_19564 = (0);
while(true){
if((i__19559_19564 < count__19558_19563)){
var init_fn_BANG__19565 = cljs.core._nth.call(null,chunk__19557_19562,i__19559_19564);
init_fn_BANG__19565.call(null,data);

var G__19566 = seq__19556_19561;
var G__19567 = chunk__19557_19562;
var G__19568 = count__19558_19563;
var G__19569 = (i__19559_19564 + (1));
seq__19556_19561 = G__19566;
chunk__19557_19562 = G__19567;
count__19558_19563 = G__19568;
i__19559_19564 = G__19569;
continue;
} else {
var temp__4425__auto___19570 = cljs.core.seq.call(null,seq__19556_19561);
if(temp__4425__auto___19570){
var seq__19556_19571__$1 = temp__4425__auto___19570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19556_19571__$1)){
var c__7256__auto___19572 = cljs.core.chunk_first.call(null,seq__19556_19571__$1);
var G__19573 = cljs.core.chunk_rest.call(null,seq__19556_19571__$1);
var G__19574 = c__7256__auto___19572;
var G__19575 = cljs.core.count.call(null,c__7256__auto___19572);
var G__19576 = (0);
seq__19556_19561 = G__19573;
chunk__19557_19562 = G__19574;
count__19558_19563 = G__19575;
i__19559_19564 = G__19576;
continue;
} else {
var init_fn_BANG__19577 = cljs.core.first.call(null,seq__19556_19571__$1);
init_fn_BANG__19577.call(null,data);

var G__19578 = cljs.core.next.call(null,seq__19556_19571__$1);
var G__19579 = null;
var G__19580 = (0);
var G__19581 = (0);
seq__19556_19561 = G__19578;
chunk__19557_19562 = G__19579;
count__19558_19563 = G__19580;
i__19559_19564 = G__19581;
continue;
}
} else {
}
}
break;
}

replumb.repl.init_closure_index_BANG_.call(null,opts);

return replumb.repl.persist_init_opts_BANG_.call(null,opts);
});
replumb.repl.init_repl_if_necessary_BANG_ = (function replumb$repl$init_repl_if_necessary_BANG_(opts,data){
if(cljs.core.truth_(new cljs.core.Keyword(null,"needs-init?","needs-init?",1016438963).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,replumb.repl.app_env,(function (p1__19582_SHARP_){
return replumb.repl.initializing_state.call(null,replumb.repl.needs_init_from_opts_state.call(null,p1__19582_SHARP_,opts));
}))))){
replumb.repl.init_repl_BANG_.call(null,opts,data);

return cljs.core.swap_BANG_.call(null,replumb.repl.app_env,replumb.repl.initialized_state);
} else {
return null;
}
});
/**
 * Reads, evaluates and calls back with the evaluation result.
 * 
 *   The first parameter is a map of configuration options, currently
 *   supporting:
 * 
 *   * :verbose - will enable the the evaluation logging, defaults to false
 *   * :warning-as-error - will consider a compiler warning as error
 *   * :target - :nodejs and :browser supported, the latter is used if
 *   missing
 *   * :init-fn! - user provided initialization function, it will be passed
 *   a map of data currently containing:
 * 
 *    :form   ;; the form to evaluate, as data, past the reader step
 *    :ns     ;; the current namespace, as symbol
 *    :target ;; *target* as keyword, :default is the default
 * 
 *   * :load-fn! - will override replumb's default cljs.js/*load-fn*.
 *   It rules out :read-file-fn!, losing any perk of using replumb.load
 *   helpers. Use it if you know what you are doing.
 * 
 *   * :read-file-fn! an asynchronous 2-arity function with signature
 *   [file-path src-cb] where src-cb is itself a function (fn [source] ...)
 *   that needs to be called with the file content as string (nil if no
 *   file is found). It is mutually exclusive with :load-fn! and will be
 *   ignored in case both are present
 * 
 *   * :src-paths - a vector of paths containing source files
 *   * :no-pr-str-on-value - in case of :success? avoid converting the
 *   result map :value to string
 * 
 *   The second parameter cb, is a 1-arity function which receives the
 *   result map.
 * 
 *   Therefore, given cb (fn [result-map] ...), the main map keys are:
 * 
 *   :success? - a boolean indicating if everything went right
 *   :value    - (if (:success? result)), this key contains the yielded value as
 *            string, unless :no-pr-str-on-value is true, in which case it
 *            returns the bare value.
 *   :error    - (if-not (:success? result)) will contain a js/Error
 *   :warning  - in case a warning was thrown and :warning-as-error is falsey
 *   :form     - the evaluated form as data structure (not a string)
 * 
 *   The third parameter is the source string to be read and evaluated.
 * 
 *   It initializes the repl harness either on first execution or if an
 *   option in #{:src-paths :init-fn!} changes from the previous
 *   `read-eval-call`.
 */
replumb.repl.read_eval_call = (function replumb$repl$read_eval_call(opts,cb,source){
try{var expression_form = replumb.repl.repl_read_string.call(null,source);
var opts__$1 = replumb.repl.normalize_opts.call(null,opts);
var data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),expression_form,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"current-ns","current-ns",1661653428).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replumb.repl.app_env)),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.keyword.call(null,cljs.core._STAR_target_STAR_)], null);
replumb.repl.init_repl_if_necessary_BANG_.call(null,opts__$1,data);

if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts__$1))){
replumb.common.debug_prn.call(null,"Calling eval-str on",expression_form,"with options",replumb.common.filter_fn_keys.call(null,opts__$1));
} else {
}

var _STAR_cljs_warning_handlers_STAR_19586 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,replumb.repl.custom_warning_handler,opts__$1,cb)], null);

try{if(cljs.core.truth_(replumb.repl.repl_special_QMARK_.call(null,expression_form))){
return replumb.repl.process_repl_special.call(null,opts__$1,cb,data,expression_form);
} else {
return replumb.repl.eval_str_STAR_.call(null,cljs.core.assoc.call(null,replumb.repl.base_eval_opts_BANG_.call(null,opts__$1),new cljs.core.Keyword(null,"on-success-fn!","on-success-fn!",461991357),((function (_STAR_cljs_warning_handlers_STAR_19586,expression_form,opts__$1,data){
return (function (eval_res){
replumb.repl.process_1_2_3.call(null,data,expression_form,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(eval_res));

return cljs.core.swap_BANG_.call(null,replumb.repl.app_env,cljs.core.assoc,new cljs.core.Keyword(null,"current-ns","current-ns",1661653428),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(eval_res));
});})(_STAR_cljs_warning_handlers_STAR_19586,expression_form,opts__$1,data))
),opts__$1,cb,data,source);
}
}finally {cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR_19586;
}}catch (e19585){var e = e19585;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
replumb.common.debug_prn.call(null,"Exception caught in read-eval-call: ",e.stack);
} else {
}

return replumb.repl.call_back_BANG_.call(null,opts,cb,cljs.core.PersistentArrayMap.EMPTY,replumb.common.wrap_error.call(null,e));
}});
/**
 * It does the following (in order):
 * 
 *   1. in-ns to cljs.user
 *   2. remove the input namespaces from the compiler environment
 *   3. reset the last warning
 *   4. set *e to nil
 * 
 *   It accepts a sequence of symbols or strings.
 */
replumb.repl.reset_env_BANG_ = (function replumb$repl$reset_env_BANG_(var_args){
var args19587 = [];
var len__7511__auto___19594 = arguments.length;
var i__7512__auto___19595 = (0);
while(true){
if((i__7512__auto___19595 < len__7511__auto___19594)){
args19587.push((arguments[i__7512__auto___19595]));

var G__19596 = (i__7512__auto___19595 + (1));
i__7512__auto___19595 = G__19596;
continue;
} else {
}
break;
}

var G__19589 = args19587.length;
switch (G__19589) {
case 0:
return replumb.repl.reset_env_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return replumb.repl.reset_env_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replumb.repl.reset_env_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19587.length)].join('')));

}
});

replumb.repl.reset_env_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return replumb.repl.reset_env_BANG_.call(null,null);
});

replumb.repl.reset_env_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return replumb.repl.reset_env_BANG_.call(null,opts,null);
});

replumb.repl.reset_env_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (opts,namespaces){
replumb.repl.read_eval_call.call(null,opts,cljs.core.identity,"(in-ns 'cljs.user)");

var seq__19590_19598 = cljs.core.seq.call(null,namespaces);
var chunk__19591_19599 = null;
var count__19592_19600 = (0);
var i__19593_19601 = (0);
while(true){
if((i__19593_19601 < count__19592_19600)){
var ns_19602 = cljs.core._nth.call(null,chunk__19591_19599,i__19593_19601);
replumb.repl.purge_ns_BANG_.call(null,replumb.repl.st,cljs.core.symbol.call(null,ns_19602));

replumb.repl.purge_ns_BANG_.call(null,replumb.repl.st,cljs.core.symbol.call(null,[cljs.core.str(ns_19602),cljs.core.str("$macros")].join('')));

var G__19603 = seq__19590_19598;
var G__19604 = chunk__19591_19599;
var G__19605 = count__19592_19600;
var G__19606 = (i__19593_19601 + (1));
seq__19590_19598 = G__19603;
chunk__19591_19599 = G__19604;
count__19592_19600 = G__19605;
i__19593_19601 = G__19606;
continue;
} else {
var temp__4425__auto___19607 = cljs.core.seq.call(null,seq__19590_19598);
if(temp__4425__auto___19607){
var seq__19590_19608__$1 = temp__4425__auto___19607;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19590_19608__$1)){
var c__7256__auto___19609 = cljs.core.chunk_first.call(null,seq__19590_19608__$1);
var G__19610 = cljs.core.chunk_rest.call(null,seq__19590_19608__$1);
var G__19611 = c__7256__auto___19609;
var G__19612 = cljs.core.count.call(null,c__7256__auto___19609);
var G__19613 = (0);
seq__19590_19598 = G__19610;
chunk__19591_19599 = G__19611;
count__19592_19600 = G__19612;
i__19593_19601 = G__19613;
continue;
} else {
var ns_19614 = cljs.core.first.call(null,seq__19590_19608__$1);
replumb.repl.purge_ns_BANG_.call(null,replumb.repl.st,cljs.core.symbol.call(null,ns_19614));

replumb.repl.purge_ns_BANG_.call(null,replumb.repl.st,cljs.core.symbol.call(null,[cljs.core.str(ns_19614),cljs.core.str("$macros")].join('')));

var G__19615 = cljs.core.next.call(null,seq__19590_19608__$1);
var G__19616 = null;
var G__19617 = (0);
var G__19618 = (0);
seq__19590_19598 = G__19615;
chunk__19591_19599 = G__19616;
count__19592_19600 = G__19617;
i__19593_19601 = G__19618;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.js._STAR_loaded_STAR_))){
throw cljs.core.ex_info.call(null,[cljs.core.str("The cljs.js/*loaded* atom still contains "),cljs.core.str(cljs.core.deref.call(null,cljs.js._STAR_loaded_STAR_)),cljs.core.str(" - make sure you purge dependent namespaces.")].join(''),replumb.repl.ex_info_data);
} else {
}

replumb.repl.reset_last_warning_BANG_.call(null);

replumb.repl.read_eval_call.call(null,opts,cljs.core.identity,"(set! *e nil)");

return replumb.repl.reset_init_opts_BANG_.call(null);
});

replumb.repl.reset_env_BANG_.cljs$lang$maxFixedArity = 2;
