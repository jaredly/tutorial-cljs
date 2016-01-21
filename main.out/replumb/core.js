// Compiled by ClojureScript 1.7.228 {}
goog.provide('replumb.core');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('replumb.repl');
goog.require('replumb.common');
/**
 * Reads, evaluates and calls back with the evaluation result.
 * 
 *   The first parameter is a map of configuration options, currently
 *   supporting:
 * 
 *   * `:verbose` will enable the the evaluation logging, defaults to false
 *   * `:warning-as-error` will consider a compiler warning as error
 *   * `:target` `:nodejs` and `:browser` supported, the latter is used if
 *   missing
 *   * `:init-fn!` user provided initialization function, it will be passed a
 *   map:
 * 
 *        :form   ;; the form to evaluate, as data
 *        :ns     ;; the current namespace, as symbol
 *        :target ;; the current target
 * 
 *   * `:load-fn!` will override replumb's default `cljs.js/*load-fn*`.
 *   It rules out `:read-file-fn!`, losing any perk of using `replumb.load`
 *   helpers. Use it if you know what you are doing and follow this
 *   protocol:
 * 
 *    ```
 *    Each runtime environment provides a different way to load a library.
 *    Whatever function `*load-fn*` is bound to will be passed two arguments
 *    - a map and a callback function: The map will have the following keys:
 * 
 *        :name   - the name of the library (a symbol)
 *        :macros - modifier signaling a macros namespace load
 *        :path   - munged relative library path (a string)
 * 
 *    The callback cb, upon resolution, will need to pass the same map:
 * 
 *        :lang       - the language, :clj or :js
 *        :source     - the source of the library (a string)
 *        :cache      - optional, if a :clj namespace has been precompiled to
 *                      :js, can give an analysis cache for faster loads.
 *        :source-map - optional, if a :clj namespace has been precompiled
 *                      to :js, can give a V3 source map JSON
 * 
 *    If the resource could not be resolved, the callback should be invoked with
 *    nil.
 *    ```
 * 
 *   * `:read-file-fn!` an asynchronous 2-arity function with signature
 *   `[file-path src-cb]` where src-cb is itself a function `(fn [source]
 *   ...)` that needs to be called with the file content as string (`nil`
 *   if no file is found). It is mutually exclusive with `:load-fn!` and
 *   will be ignored in case both are present
 * 
 *   * `:src-paths`  a vector of paths containing source files
 *   * `:no-pr-str-on-value`  in case of `:success?` avoid converting the
 *   result map `:value` to string
 * 
 *   The second parameter, `callback`, should be a 1-arity function which receives
 *   the result map, whose result keys will be:
 * 
 *   ```
 *   :success?  a boolean indicating if everything went alright
 *   :value     (if (:success? result)), this key contains the yielded value as
 *           string, unless :no-pr-str-on-value is true, in which case it
 *           returns the bare value.
 *   :error     (if-not (:success? result)) will contain a js/Error
 *   :warning   in case a warning was thrown and :warning-as-error is falsey
 *   :form      the evaluated form as data structure (not string)}
 *   ```
 * 
 *   The third parameter is the source string to be read and evaluated.
 * 
 *   It initializes the repl harness either on first execution or if an
 *   option in `#{:src-paths :init-fn!}` changes from the previous
 *   `read-eval-call`.
 */
replumb.core.read_eval_call = (function replumb$core$read_eval_call(var_args){
var args19621 = [];
var len__7511__auto___19624 = arguments.length;
var i__7512__auto___19625 = (0);
while(true){
if((i__7512__auto___19625 < len__7511__auto___19624)){
args19621.push((arguments[i__7512__auto___19625]));

var G__19626 = (i__7512__auto___19625 + (1));
i__7512__auto___19625 = G__19626;
continue;
} else {
}
break;
}

var G__19623 = args19621.length;
switch (G__19623) {
case 2:
return replumb.core.read_eval_call.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replumb.core.read_eval_call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19621.length)].join('')));

}
});
goog.exportSymbol('replumb.core.read_eval_call', replumb.core.read_eval_call);

replumb.core.read_eval_call.cljs$core$IFn$_invoke$arity$2 = (function (callback,source){
return replumb.repl.read_eval_call.call(null,cljs.core.PersistentArrayMap.EMPTY,callback,source);
});

replumb.core.read_eval_call.cljs$core$IFn$_invoke$arity$3 = (function (opts,callback,source){
return replumb.repl.read_eval_call.call(null,opts,callback,source);
});

replumb.core.read_eval_call.cljs$lang$maxFixedArity = 3;
/**
 * Retrieves the REPL prompt to display, according to the current
 *   namespace. Returns a string.
 */
replumb.core.get_prompt = (function replumb$core$get_prompt(){
return [cljs.core.str(replumb.repl.current_ns.call(null)),cljs.core.str("=> ")].join('');
});
goog.exportSymbol('replumb.core.get_prompt', replumb.core.get_prompt);
/**
 * Return the message string of the input `js/Error`.
 */
replumb.core.error__GT_str = (function replumb$core$error__GT_str(var_args){
var args19628 = [];
var len__7511__auto___19631 = arguments.length;
var i__7512__auto___19632 = (0);
while(true){
if((i__7512__auto___19632 < len__7511__auto___19631)){
args19628.push((arguments[i__7512__auto___19632]));

var G__19633 = (i__7512__auto___19632 + (1));
i__7512__auto___19632 = G__19633;
continue;
} else {
}
break;
}

var G__19630 = args19628.length;
switch (G__19630) {
case 1:
return replumb.core.error__GT_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replumb.core.error__GT_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19628.length)].join('')));

}
});
goog.exportSymbol('replumb.core.error__GT_str', replumb.core.error__GT_str);

replumb.core.error__GT_str.cljs$core$IFn$_invoke$arity$1 = (function (error){
return replumb.common.extract_message.call(null,error);
});

replumb.core.error__GT_str.cljs$core$IFn$_invoke$arity$2 = (function (error,print_stack_QMARK_){
return replumb.common.extract_message.call(null,error,print_stack_QMARK_);
});

replumb.core.error__GT_str.cljs$lang$maxFixedArity = 2;
/**
 * Unwraps the result of an evaluation.
 * 
 *   It returns the content of `:value` in case of success and the content
 *   of `:error` (a `js/Error`) in case of failure.
 * 
 *   When `include-warning?` is true, then the value yields from, in order,
 *   `:error`, then `:warning` and then eventually `:value`.
 */
replumb.core.unwrap_result = (function replumb$core$unwrap_result(var_args){
var args19635 = [];
var len__7511__auto___19640 = arguments.length;
var i__7512__auto___19641 = (0);
while(true){
if((i__7512__auto___19641 < len__7511__auto___19640)){
args19635.push((arguments[i__7512__auto___19641]));

var G__19642 = (i__7512__auto___19641 + (1));
i__7512__auto___19641 = G__19642;
continue;
} else {
}
break;
}

var G__19637 = args19635.length;
switch (G__19637) {
case 1:
return replumb.core.unwrap_result.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replumb.core.unwrap_result.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19635.length)].join('')));

}
});
goog.exportSymbol('replumb.core.unwrap_result', replumb.core.unwrap_result);

replumb.core.unwrap_result.cljs$core$IFn$_invoke$arity$1 = (function (result_map){
return replumb.core.unwrap_result.call(null,result_map,false);
});

replumb.core.unwrap_result.cljs$core$IFn$_invoke$arity$2 = (function (result_map,include_warning_QMARK_){
var map__19638 = result_map;
var map__19638__$1 = ((((!((map__19638 == null)))?((((map__19638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19638):map__19638);
var error = cljs.core.get.call(null,map__19638__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__19638__$1,new cljs.core.Keyword(null,"value","value",305978217));
var warning = cljs.core.get.call(null,map__19638__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
if(cljs.core.truth_(error)){
return error;
} else {
if(cljs.core.truth_((function (){var and__6441__auto__ = include_warning_QMARK_;
if(cljs.core.truth_(and__6441__auto__)){
return warning;
} else {
return and__6441__auto__;
}
})())){
return warning;
} else {
return value;
}
}
});

replumb.core.unwrap_result.cljs$lang$maxFixedArity = 2;
/**
 * Given a `result-map`, tells whether the evaluation was successful.
 */
replumb.core.success_QMARK_ = (function replumb$core$success_QMARK_(result_map){
return new cljs.core.Keyword(null,"success?","success?",-122854052).cljs$core$IFn$_invoke$arity$1(result_map);
});
goog.exportSymbol('replumb.core.success_QMARK_', replumb.core.success_QMARK_);
/**
 * Given a `result-map`, returns the result of the evaluation as string.
 * 
 *   - When `include-warning?` is true, then the string yields from, in
 *   order, `:error`, then `:warning` and then eventually `:value`.
 *   - When `print-stack?` is true, the error string will include the stack
 *   trace.
 */
replumb.core.result__GT_string = (function replumb$core$result__GT_string(var_args){
var args19644 = [];
var len__7511__auto___19649 = arguments.length;
var i__7512__auto___19650 = (0);
while(true){
if((i__7512__auto___19650 < len__7511__auto___19649)){
args19644.push((arguments[i__7512__auto___19650]));

var G__19651 = (i__7512__auto___19650 + (1));
i__7512__auto___19650 = G__19651;
continue;
} else {
}
break;
}

var G__19646 = args19644.length;
switch (G__19646) {
case 1:
return replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19644.length)].join('')));

}
});
goog.exportSymbol('replumb.core.result__GT_string', replumb.core.result__GT_string);

replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$1 = (function (result_map){
return replumb.core.result__GT_string.call(null,result_map,false,false);
});

replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$2 = (function (result_map,print_stack_QMARK_){
return replumb.core.result__GT_string.call(null,result_map,print_stack_QMARK_,false);
});

replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$3 = (function (result_map,print_stack_QMARK_,include_warning_QMARK_){
var map__19647 = result_map;
var map__19647__$1 = ((((!((map__19647 == null)))?((((map__19647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19647):map__19647);
var error = cljs.core.get.call(null,map__19647__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__19647__$1,new cljs.core.Keyword(null,"value","value",305978217));
var warning = cljs.core.get.call(null,map__19647__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
if(cljs.core.truth_(error)){
return replumb.common.extract_message.call(null,error,false,print_stack_QMARK_);
} else {
if(cljs.core.truth_((function (){var and__6441__auto__ = include_warning_QMARK_;
if(cljs.core.truth_(and__6441__auto__)){
return warning;
} else {
return and__6441__auto__;
}
})())){
return warning;
} else {
return value;
}
}
});

replumb.core.result__GT_string.cljs$lang$maxFixedArity = 3;
/**
 * Creates the browser option map for read-eval-call.
 * 
 *   The 1-arity function requires a `load-fn!` compatible with
 *   ClojureScript `cljs.js/*load-fn*`. Use it if you know what you are
 *   doing and follow this protocol:
 * 
 *    Each runtime environment provides a different way to load a library.
 *    Whatever function `*load-fn*` is bound to will be passed two arguments
 *    - a map and a callback function: The map will have the following keys:
 * 
 *        :name   - the name of the library (a symbol)
 *        :macros - modifier signaling a macros namespace load
 *        :path   - munged relative library path (a string)
 * 
 *    The callback cb, upon resolution, will need to pass the same map:
 * 
 *        :lang       - the language, :clj or :js
 *        :source     - the source of the library (a string)
 *        :cache      - optional, if a :clj namespace has been precompiled to
 *                      :js, can give an analysis cache for faster loads.
 *        :source-map - optional, if a :clj namespace has been precompiled
 *                      to :js, can give a V3 source map JSON
 * 
 *    If the resource could not be resolved, the callback should be invoked with
 *    nil.
 * 
 *   The 2-arity function accepts a sequence of source path strings and
 *   `read-file-fn!`, an asynchronous 2-arity function with signature
 *   `[file-path src-cb]` where src-cb is itself a function `(fn [source]
 *   ...)` that needs to be called with the file content as string (`nil`
 *   if no file is found).
 */
replumb.core.browser_options = (function replumb$core$browser_options(var_args){
var args19653 = [];
var len__7511__auto___19656 = arguments.length;
var i__7512__auto___19657 = (0);
while(true){
if((i__7512__auto___19657 < len__7511__auto___19656)){
args19653.push((arguments[i__7512__auto___19657]));

var G__19658 = (i__7512__auto___19657 + (1));
i__7512__auto___19657 = G__19658;
continue;
} else {
}
break;
}

var G__19655 = args19653.length;
switch (G__19655) {
case 1:
return replumb.core.browser_options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replumb.core.browser_options.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19653.length)].join('')));

}
});
goog.exportSymbol('replumb.core.browser_options', replumb.core.browser_options);

replumb.core.browser_options.cljs$core$IFn$_invoke$arity$1 = (function (load_fn_BANG_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"load-fn!","load-fn!",-896695751),load_fn_BANG_], null);
});

replumb.core.browser_options.cljs$core$IFn$_invoke$arity$2 = (function (src_paths,read_file_fn_BANG_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"read-file-fn!","read-file-fn!",-492428191),read_file_fn_BANG_,new cljs.core.Keyword(null,"src-paths","src-paths",-1052057603),src_paths], null);
});

replumb.core.browser_options.cljs$lang$maxFixedArity = 2;
/**
 * Creates the Node.js option map for read-eval-call.
 * 
 *   The 1-arity function requires a `load-fn!` compatible with
 *   ClojureScript `cljs.js/*load-fn*`. Use it if you know what you are
 *   doing and follow this protocol:
 * 
 *    Each runtime environment provides a different way to load a library.
 *    Whatever function `*load-fn*` is bound to will be passed two arguments
 *    - a map and a callback function: The map will have the following keys:
 * 
 *        :name   - the name of the library (a symbol)
 *        :macros - modifier signaling a macros namespace load
 *        :path   - munged relative library path (a string)
 * 
 *    The callback cb, upon resolution, will need to pass the same map:
 * 
 *        :lang       - the language, :clj or :js
 *        :source     - the source of the library (a string)
 *        :cache      - optional, if a :clj namespace has been precompiled to
 *                      :js, can give an analysis cache for faster loads.
 *        :source-map - optional, if a :clj namespace has been precompiled
 *                      to :js, can give a V3 source map JSON
 * 
 *    If the resource could not be resolved, the callback should be invoked with
 *    nil.
 * 
 *   The 2-arity function accepts a sequence of source path strings and
 *   `read-file-fn!`, an asynchronous 2-arity function with signature
 *   `[file-path src-cb]` where src-cb is itself a function `(fn [source]
 *   ...)` that needs to be called with the file content as string (`nil`
 *   if no file is found).
 */
replumb.core.nodejs_options = (function replumb$core$nodejs_options(var_args){
var args19660 = [];
var len__7511__auto___19663 = arguments.length;
var i__7512__auto___19664 = (0);
while(true){
if((i__7512__auto___19664 < len__7511__auto___19663)){
args19660.push((arguments[i__7512__auto___19664]));

var G__19665 = (i__7512__auto___19664 + (1));
i__7512__auto___19664 = G__19665;
continue;
} else {
}
break;
}

var G__19662 = args19660.length;
switch (G__19662) {
case 1:
return replumb.core.nodejs_options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replumb.core.nodejs_options.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19660.length)].join('')));

}
});
goog.exportSymbol('replumb.core.nodejs_options', replumb.core.nodejs_options);

replumb.core.nodejs_options.cljs$core$IFn$_invoke$arity$1 = (function (load_fn_BANG_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"nodejs","nodejs",321212524),new cljs.core.Keyword(null,"load-fn!","load-fn!",-896695751),load_fn_BANG_], null);
});

replumb.core.nodejs_options.cljs$core$IFn$_invoke$arity$2 = (function (src_paths,read_file_fn_BANG_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"nodejs","nodejs",321212524),new cljs.core.Keyword(null,"read-file-fn!","read-file-fn!",-492428191),read_file_fn_BANG_,new cljs.core.Keyword(null,"src-paths","src-paths",-1052057603),src_paths], null);
});

replumb.core.nodejs_options.cljs$lang$maxFixedArity = 2;
