// Compiled by ClojureScript 1.7.228 {}
goog.provide('replumb.load');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('replumb.cache');
goog.require('clojure.string');
goog.require('replumb.common');
goog.require('cljs.reader');
/**
 * This load function just calls:
 *   (cb {:lang   :js
 *     :source ""})
 */
replumb.load.fake_load_fn_BANG_ = (function replumb$load$fake_load_fn_BANG_(_,cb){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
});
/**
 * Mimics "Resource not found" as it just calls: (cb nil)
 */
replumb.load.no_resource_load_fn_BANG_ = (function replumb$load$no_resource_load_fn_BANG_(_,cb){
return cb.call(null,null);
});
/**
 * Converts a filename to a lang keyword by inspecting the file
 *   extension.
 */
replumb.load.filename__GT_lang = (function replumb$load$filename__GT_lang(file_name){
if(clojure.string.ends_with_QMARK_.call(null,file_name,".js")){
return new cljs.core.Keyword(null,"js","js",1768080579);
} else {
return new cljs.core.Keyword(null,"clj","clj",-660495428);
}
});
/**
 * Read the cache source depending on whether is a edn or json file
 */
replumb.load.read_cache_source = (function replumb$load$read_cache_source(cache_path,cache_source){
if(clojure.string.ends_with_QMARK_.call(null,cache_path,".edn")){
return cljs.reader.read_string.call(null,cache_source);
} else {
return replumb.cache.transit_json__GT_cljs.call(null,cache_source);
}
});
/**
 * Returns the correct file extensions to try (no dot prefix), following
 *   the cljs.js/*load-fn* docstring.
 */
replumb.load.extensions = (function replumb$load$extensions(var_args){
var args18451 = [];
var len__7511__auto___18454 = arguments.length;
var i__7512__auto___18455 = (0);
while(true){
if((i__7512__auto___18455 < len__7511__auto___18454)){
args18451.push((arguments[i__7512__auto___18455]));

var G__18456 = (i__7512__auto___18455 + (1));
i__7512__auto___18455 = G__18456;
continue;
} else {
}
break;
}

var G__18453 = args18451.length;
switch (G__18453) {
case 0:
return replumb.load.extensions.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return replumb.load.extensions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18451.length)].join('')));

}
});

replumb.load.extensions.cljs$core$IFn$_invoke$arity$0 = (function (){
return replumb.load.extensions.call(null,false);
});

replumb.load.extensions.cljs$core$IFn$_invoke$arity$1 = (function (macros){
if(cljs.core.truth_(macros)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clj","cljc"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs","cljc","js"], null);
}
});

replumb.load.extensions.cljs$lang$maxFixedArity = 1;
/**
 * Loop on the file-names using a supplied read-file-fn (fn [file-name
 *   src-cb] ...), calling back cb upon first successful read, otherwise
 *   calling back with nil.
 *   This function does not check whether parameters are nil, please do it
 *   in the caller.
 */
replumb.load.read_files_and_callback_BANG_ = (function replumb$load$read_files_and_callback_BANG_(verbose_QMARK_,file_names,read_file_fn_BANG_,load_fn_cb){
var temp__4423__auto__ = cljs.core.first.call(null,file_names);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Reading",name,"...");
} else {
}

return read_file_fn_BANG_.call(null,name,((function (name,temp__4423__auto__){
return (function (source){
if(cljs.core.truth_(source)){
return load_fn_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),replumb.load.filename__GT_lang.call(null,name),new cljs.core.Keyword(null,"source","source",-433931539),source], null));
} else {
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"No source found...");
} else {
}

return replumb$load$read_files_and_callback_BANG_.call(null,verbose_QMARK_,cljs.core.rest.call(null,file_names),read_file_fn_BANG_,load_fn_cb);
}
});})(name,temp__4423__auto__))
);
} else {
return load_fn_cb.call(null,null);
}
});
/**
 * Loops over cached-file-names in order to retrieve them. It needs to find
 *   both the related .js file and .cache.json file, otherwise keeps looping.
 *   If it does not find the cached files calls read-files-and-callback! and
 *   tries to load the unevaluated ones.
 *   This function does not check whether parameters are nil, please do it in
 *   the caller.
 */
replumb.load.read_files_from_cache_and_callback_BANG_ = (function replumb$load$read_files_from_cache_and_callback_BANG_(verbose_QMARK_,file_names,read_file_fn_BANG_,load_fn_cb,cached_file_names){
var temp__4423__auto__ = cljs.core.first.call(null,cached_file_names);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__18459 = temp__4423__auto__;
var js_path = cljs.core.nth.call(null,vec__18459,(0),null);
var cache_path = cljs.core.nth.call(null,vec__18459,(1),null);
var try_next_files_pair = ((function (vec__18459,js_path,cache_path,temp__4423__auto__){
return (function (){
return replumb$load$read_files_from_cache_and_callback_BANG_.call(null,verbose_QMARK_,file_names,read_file_fn_BANG_,load_fn_cb,cljs.core.rest.call(null,cached_file_names));
});})(vec__18459,js_path,cache_path,temp__4423__auto__))
;
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Reading",js_path,"...");
} else {
}

return read_file_fn_BANG_.call(null,js_path,((function (try_next_files_pair,vec__18459,js_path,cache_path,temp__4423__auto__){
return (function (js_source){
if(cljs.core.truth_((function (){var and__6441__auto__ = js_source;
if(cljs.core.truth_(and__6441__auto__)){
return replumb.cache.cached_js_valid_QMARK_.call(null,js_source);
} else {
return and__6441__auto__;
}
})())){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Reading",cache_path,"...");
} else {
}

return read_file_fn_BANG_.call(null,cache_path,((function (try_next_files_pair,vec__18459,js_path,cache_path,temp__4423__auto__){
return (function (cache_source){
if(cljs.core.truth_(cache_source)){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,[cljs.core.str("Retrieved from cache "),cljs.core.str(js_path),cljs.core.str(" and "),cljs.core.str(cache_path)].join(''));
} else {
}

return load_fn_cb.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lang","lang",-1819677104),replumb.load.filename__GT_lang.call(null,js_path),new cljs.core.Keyword(null,"source","source",-433931539),js_source,new cljs.core.Keyword(null,"cache","cache",-1237023054),replumb.load.read_cache_source.call(null,cache_path,cache_source)], null));
} else {
return try_next_files_pair.call(null);
}
});})(try_next_files_pair,vec__18459,js_path,cache_path,temp__4423__auto__))
);
} else {
return try_next_files_pair.call(null);
}
});})(try_next_files_pair,vec__18459,js_path,cache_path,temp__4423__auto__))
);
} else {
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Cannot load cache files...");
} else {
}

return replumb.load.read_files_and_callback_BANG_.call(null,verbose_QMARK_,file_names,read_file_fn_BANG_,load_fn_cb);
}
});
/**
 * Produces a sequence of file paths based on src-paths and file-path (a
 *   path already including one or more "/" and an extension).
 */
replumb.load.file_paths = (function replumb$load$file_paths(src_paths,file_path){
var iter__7225__auto__ = (function replumb$load$file_paths_$_iter__18464(s__18465){
return (new cljs.core.LazySeq(null,(function (){
var s__18465__$1 = s__18465;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18465__$1);
if(temp__4425__auto__){
var s__18465__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18465__$2)){
var c__7223__auto__ = cljs.core.chunk_first.call(null,s__18465__$2);
var size__7224__auto__ = cljs.core.count.call(null,c__7223__auto__);
var b__18467 = cljs.core.chunk_buffer.call(null,size__7224__auto__);
if((function (){var i__18466 = (0);
while(true){
if((i__18466 < size__7224__auto__)){
var src_path = cljs.core._nth.call(null,c__7223__auto__,i__18466);
cljs.core.chunk_append.call(null,b__18467,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(file_path)].join(''));

var G__18468 = (i__18466 + (1));
i__18466 = G__18468;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18467),replumb$load$file_paths_$_iter__18464.call(null,cljs.core.chunk_rest.call(null,s__18465__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18467),null);
}
} else {
var src_path = cljs.core.first.call(null,s__18465__$2);
return cljs.core.cons.call(null,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(file_path)].join(''),replumb$load$file_paths_$_iter__18464.call(null,cljs.core.rest.call(null,s__18465__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7225__auto__.call(null,src_paths);
});
/**
 * Produces a sequence of file names to try reading from src-paths and
 *   file-path-without-ext (it should already include one or more
 *   "/"). The right order and extension is taken from cljs.js/*load-fn*
 *   docstring and takes into consideration the macros parameter.
 */
replumb.load.file_paths_for_load_fn = (function replumb$load$file_paths_for_load_fn(src_paths,macros,file_path_without_ext){
var iter__7225__auto__ = (function replumb$load$file_paths_for_load_fn_$_iter__18475(s__18476){
return (new cljs.core.LazySeq(null,(function (){
var s__18476__$1 = s__18476;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18476__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var extension = cljs.core.first.call(null,xs__4977__auto__);
var iterys__7221__auto__ = ((function (s__18476__$1,extension,xs__4977__auto__,temp__4425__auto__){
return (function replumb$load$file_paths_for_load_fn_$_iter__18475_$_iter__18477(s__18478){
return (new cljs.core.LazySeq(null,((function (s__18476__$1,extension,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__18478__$1 = s__18478;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__18478__$1);
if(temp__4425__auto____$1){
var s__18478__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18478__$2)){
var c__7223__auto__ = cljs.core.chunk_first.call(null,s__18478__$2);
var size__7224__auto__ = cljs.core.count.call(null,c__7223__auto__);
var b__18480 = cljs.core.chunk_buffer.call(null,size__7224__auto__);
if((function (){var i__18479 = (0);
while(true){
if((i__18479 < size__7224__auto__)){
var src_path = cljs.core._nth.call(null,c__7223__auto__,i__18479);
cljs.core.chunk_append.call(null,b__18480,[cljs.core.str(src_path),cljs.core.str("."),cljs.core.str(extension)].join(''));

var G__18481 = (i__18479 + (1));
i__18479 = G__18481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18480),replumb$load$file_paths_for_load_fn_$_iter__18475_$_iter__18477.call(null,cljs.core.chunk_rest.call(null,s__18478__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18480),null);
}
} else {
var src_path = cljs.core.first.call(null,s__18478__$2);
return cljs.core.cons.call(null,[cljs.core.str(src_path),cljs.core.str("."),cljs.core.str(extension)].join(''),replumb$load$file_paths_for_load_fn_$_iter__18475_$_iter__18477.call(null,cljs.core.rest.call(null,s__18478__$2)));
}
} else {
return null;
}
break;
}
});})(s__18476__$1,extension,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__18476__$1,extension,xs__4977__auto__,temp__4425__auto__))
;
var fs__7222__auto__ = cljs.core.seq.call(null,iterys__7221__auto__.call(null,replumb.load.file_paths.call(null,src_paths,file_path_without_ext)));
if(fs__7222__auto__){
return cljs.core.concat.call(null,fs__7222__auto__,replumb$load$file_paths_for_load_fn_$_iter__18475.call(null,cljs.core.rest.call(null,s__18476__$1)));
} else {
var G__18482 = cljs.core.rest.call(null,s__18476__$1);
s__18476__$1 = G__18482;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7225__auto__.call(null,replumb.load.extensions.call(null,macros));
});
/**
 * Produces a sequence of pairs containing the file paths to try reading for
 *   evaluation caching.
 *   The first file is always a ".js" file while the second is the cache file
 *   and can be a ".json" or ".edn" file.
 */
replumb.load.cache_file_paths_for_load_fn = (function replumb$load$cache_file_paths_for_load_fn(cache_paths,macros,file_path_without_ext){
var iter__7225__auto__ = (function replumb$load$cache_file_paths_for_load_fn_$_iter__18492(s__18493){
return (new cljs.core.LazySeq(null,(function (){
var s__18493__$1 = s__18493;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18493__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var extension = cljs.core.first.call(null,xs__4977__auto__);
var iterys__7221__auto__ = ((function (s__18493__$1,extension,xs__4977__auto__,temp__4425__auto__){
return (function replumb$load$cache_file_paths_for_load_fn_$_iter__18492_$_iter__18494(s__18495){
return (new cljs.core.LazySeq(null,((function (s__18493__$1,extension,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__18495__$1 = s__18495;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__18495__$1);
if(temp__4425__auto____$1){
var xs__4977__auto____$1 = temp__4425__auto____$1;
var cache_extension = cljs.core.first.call(null,xs__4977__auto____$1);
var iterys__7221__auto__ = ((function (s__18495__$1,s__18493__$1,cache_extension,xs__4977__auto____$1,temp__4425__auto____$1,extension,xs__4977__auto__,temp__4425__auto__){
return (function replumb$load$cache_file_paths_for_load_fn_$_iter__18492_$_iter__18494_$_iter__18496(s__18497){
return (new cljs.core.LazySeq(null,((function (s__18495__$1,s__18493__$1,cache_extension,xs__4977__auto____$1,temp__4425__auto____$1,extension,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__18497__$1 = s__18497;
while(true){
var temp__4425__auto____$2 = cljs.core.seq.call(null,s__18497__$1);
if(temp__4425__auto____$2){
var s__18497__$2 = temp__4425__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18497__$2)){
var c__7223__auto__ = cljs.core.chunk_first.call(null,s__18497__$2);
var size__7224__auto__ = cljs.core.count.call(null,c__7223__auto__);
var b__18499 = cljs.core.chunk_buffer.call(null,size__7224__auto__);
if((function (){var i__18498 = (0);
while(true){
if((i__18498 < size__7224__auto__)){
var src_path = cljs.core._nth.call(null,c__7223__auto__,i__18498);
cljs.core.chunk_append.call(null,b__18499,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(src_path),cljs.core.str(".js")].join(''),[cljs.core.str(src_path),cljs.core.str(extension),cljs.core.str(cache_extension)].join('')], null));

var G__18500 = (i__18498 + (1));
i__18498 = G__18500;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18499),replumb$load$cache_file_paths_for_load_fn_$_iter__18492_$_iter__18494_$_iter__18496.call(null,cljs.core.chunk_rest.call(null,s__18497__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18499),null);
}
} else {
var src_path = cljs.core.first.call(null,s__18497__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(src_path),cljs.core.str(".js")].join(''),[cljs.core.str(src_path),cljs.core.str(extension),cljs.core.str(cache_extension)].join('')], null),replumb$load$cache_file_paths_for_load_fn_$_iter__18492_$_iter__18494_$_iter__18496.call(null,cljs.core.rest.call(null,s__18497__$2)));
}
} else {
return null;
}
break;
}
});})(s__18495__$1,s__18493__$1,cache_extension,xs__4977__auto____$1,temp__4425__auto____$1,extension,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__18495__$1,s__18493__$1,cache_extension,xs__4977__auto____$1,temp__4425__auto____$1,extension,xs__4977__auto__,temp__4425__auto__))
;
var fs__7222__auto__ = cljs.core.seq.call(null,iterys__7221__auto__.call(null,cljs.core.into.call(null,replumb.load.file_paths.call(null,cache_paths,file_path_without_ext),replumb.load.file_paths.call(null,cache_paths,replumb.cache.cache_prefix_for_path.call(null,file_path_without_ext,macros)))));
if(fs__7222__auto__){
return cljs.core.concat.call(null,fs__7222__auto__,replumb$load$cache_file_paths_for_load_fn_$_iter__18492_$_iter__18494.call(null,cljs.core.rest.call(null,s__18495__$1)));
} else {
var G__18501 = cljs.core.rest.call(null,s__18495__$1);
s__18495__$1 = G__18501;
continue;
}
} else {
return null;
}
break;
}
});})(s__18493__$1,extension,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__18493__$1,extension,xs__4977__auto__,temp__4425__auto__))
;
var fs__7222__auto__ = cljs.core.seq.call(null,iterys__7221__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cache.json",".cache.edn"], null)));
if(fs__7222__auto__){
return cljs.core.concat.call(null,fs__7222__auto__,replumb$load$cache_file_paths_for_load_fn_$_iter__18492.call(null,cljs.core.rest.call(null,s__18493__$1)));
} else {
var G__18502 = cljs.core.rest.call(null,s__18493__$1);
s__18493__$1 = G__18502;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7225__auto__.call(null,cljs.core.cons.call(null,"",cljs.core.map.call(null,((function (iter__7225__auto__){
return (function (p1__18483_SHARP_){
return [cljs.core.str("."),cljs.core.str(p1__18483_SHARP_)].join('');
});})(iter__7225__auto__))
,replumb.load.extensions.call(null,macros))));
});
/**
 * Produces a sequence of filenames to try reading crafted for goog
 *   libraries, in the order they should be tried.
 */
replumb.load.file_paths_for_closure = (function replumb$load$file_paths_for_closure(src_paths,goog_path){
var iter__7225__auto__ = (function replumb$load$file_paths_for_closure_$_iter__18507(s__18508){
return (new cljs.core.LazySeq(null,(function (){
var s__18508__$1 = s__18508;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18508__$1);
if(temp__4425__auto__){
var s__18508__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18508__$2)){
var c__7223__auto__ = cljs.core.chunk_first.call(null,s__18508__$2);
var size__7224__auto__ = cljs.core.count.call(null,c__7223__auto__);
var b__18510 = cljs.core.chunk_buffer.call(null,size__7224__auto__);
if((function (){var i__18509 = (0);
while(true){
if((i__18509 < size__7224__auto__)){
var src_path = cljs.core._nth.call(null,c__7223__auto__,i__18509);
cljs.core.chunk_append.call(null,b__18510,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(goog_path),cljs.core.str(".js")].join(''));

var G__18511 = (i__18509 + (1));
i__18509 = G__18511;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18510),replumb$load$file_paths_for_closure_$_iter__18507.call(null,cljs.core.chunk_rest.call(null,s__18508__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18510),null);
}
} else {
var src_path = cljs.core.first.call(null,s__18508__$2);
return cljs.core.cons.call(null,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(goog_path),cljs.core.str(".js")].join(''),replumb$load$file_paths_for_closure_$_iter__18507.call(null,cljs.core.rest.call(null,s__18508__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7225__auto__.call(null,src_paths);
});
replumb.load.skip_load_QMARK_ = (function replumb$load$skip_load_QMARK_(p__18512){
var map__18515 = p__18512;
var map__18515__$1 = ((((!((map__18515 == null)))?((((map__18515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18515):map__18515);
var name = cljs.core.get.call(null,map__18515__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__18515__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var or__6453__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null));
if(or__6453__auto__){
return or__6453__auto__;
} else {
var or__6453__auto____$1 = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.analyzer","cljs.analyzer",1897881911,null));
if(or__6453__auto____$1){
return or__6453__auto____$1;
} else {
var or__6453__auto____$2 = (function (){var and__6441__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null));
if(and__6441__auto__){
return macros;
} else {
return and__6441__auto__;
}
})();
if(cljs.core.truth_(or__6453__auto____$2)){
return or__6453__auto____$2;
} else {
var or__6453__auto____$3 = (function (){var and__6441__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.test","cljs.test",884805483,null));
if(and__6441__auto__){
return macros;
} else {
return and__6441__auto__;
}
})();
if(cljs.core.truth_(or__6453__auto____$3)){
return or__6453__auto____$3;
} else {
var and__6441__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null));
if(and__6441__auto__){
return macros;
} else {
return and__6441__auto__;
}
}
}
}
}
});
