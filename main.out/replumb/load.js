// Compiled by ClojureScript 1.7.228 {}
goog.provide('replumb.load');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('clojure.string');
goog.require('replumb.common');
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
 * Returns the correct file extensions to try (no dot prefix), following
 *   the cljs.js/*load-fn* docstring.
 */
replumb.load.extensions = (function replumb$load$extensions(var_args){
var args18232 = [];
var len__7511__auto___18235 = arguments.length;
var i__7512__auto___18236 = (0);
while(true){
if((i__7512__auto___18236 < len__7511__auto___18235)){
args18232.push((arguments[i__7512__auto___18236]));

var G__18237 = (i__7512__auto___18236 + (1));
i__7512__auto___18236 = G__18237;
continue;
} else {
}
break;
}

var G__18234 = args18232.length;
switch (G__18234) {
case 0:
return replumb.load.extensions.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return replumb.load.extensions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18232.length)].join('')));

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
 * Produces a sequence of file paths based on src-paths and file-path (a
 *   path already including one or more "/" and an extension).
 */
replumb.load.file_paths = (function replumb$load$file_paths(src_paths,file_path){
var iter__7225__auto__ = (function replumb$load$file_paths_$_iter__18243(s__18244){
return (new cljs.core.LazySeq(null,(function (){
var s__18244__$1 = s__18244;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18244__$1);
if(temp__4425__auto__){
var s__18244__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18244__$2)){
var c__7223__auto__ = cljs.core.chunk_first.call(null,s__18244__$2);
var size__7224__auto__ = cljs.core.count.call(null,c__7223__auto__);
var b__18246 = cljs.core.chunk_buffer.call(null,size__7224__auto__);
if((function (){var i__18245 = (0);
while(true){
if((i__18245 < size__7224__auto__)){
var src_path = cljs.core._nth.call(null,c__7223__auto__,i__18245);
cljs.core.chunk_append.call(null,b__18246,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(file_path)].join(''));

var G__18247 = (i__18245 + (1));
i__18245 = G__18247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18246),replumb$load$file_paths_$_iter__18243.call(null,cljs.core.chunk_rest.call(null,s__18244__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18246),null);
}
} else {
var src_path = cljs.core.first.call(null,s__18244__$2);
return cljs.core.cons.call(null,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(file_path)].join(''),replumb$load$file_paths_$_iter__18243.call(null,cljs.core.rest.call(null,s__18244__$2)));
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
var iter__7225__auto__ = (function replumb$load$file_paths_for_load_fn_$_iter__18254(s__18255){
return (new cljs.core.LazySeq(null,(function (){
var s__18255__$1 = s__18255;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18255__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var extension = cljs.core.first.call(null,xs__4977__auto__);
var iterys__7221__auto__ = ((function (s__18255__$1,extension,xs__4977__auto__,temp__4425__auto__){
return (function replumb$load$file_paths_for_load_fn_$_iter__18254_$_iter__18256(s__18257){
return (new cljs.core.LazySeq(null,((function (s__18255__$1,extension,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__18257__$1 = s__18257;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__18257__$1);
if(temp__4425__auto____$1){
var s__18257__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18257__$2)){
var c__7223__auto__ = cljs.core.chunk_first.call(null,s__18257__$2);
var size__7224__auto__ = cljs.core.count.call(null,c__7223__auto__);
var b__18259 = cljs.core.chunk_buffer.call(null,size__7224__auto__);
if((function (){var i__18258 = (0);
while(true){
if((i__18258 < size__7224__auto__)){
var src_path = cljs.core._nth.call(null,c__7223__auto__,i__18258);
cljs.core.chunk_append.call(null,b__18259,[cljs.core.str(src_path),cljs.core.str("."),cljs.core.str(extension)].join(''));

var G__18260 = (i__18258 + (1));
i__18258 = G__18260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18259),replumb$load$file_paths_for_load_fn_$_iter__18254_$_iter__18256.call(null,cljs.core.chunk_rest.call(null,s__18257__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18259),null);
}
} else {
var src_path = cljs.core.first.call(null,s__18257__$2);
return cljs.core.cons.call(null,[cljs.core.str(src_path),cljs.core.str("."),cljs.core.str(extension)].join(''),replumb$load$file_paths_for_load_fn_$_iter__18254_$_iter__18256.call(null,cljs.core.rest.call(null,s__18257__$2)));
}
} else {
return null;
}
break;
}
});})(s__18255__$1,extension,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__18255__$1,extension,xs__4977__auto__,temp__4425__auto__))
;
var fs__7222__auto__ = cljs.core.seq.call(null,iterys__7221__auto__.call(null,replumb.load.file_paths.call(null,src_paths,file_path_without_ext)));
if(fs__7222__auto__){
return cljs.core.concat.call(null,fs__7222__auto__,replumb$load$file_paths_for_load_fn_$_iter__18254.call(null,cljs.core.rest.call(null,s__18255__$1)));
} else {
var G__18261 = cljs.core.rest.call(null,s__18255__$1);
s__18255__$1 = G__18261;
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
 * Produces a sequence of filenames to try reading crafted for goog
 *   libraries, in the order they should be tried.
 */
replumb.load.file_paths_for_closure = (function replumb$load$file_paths_for_closure(src_paths,goog_path){
var iter__7225__auto__ = (function replumb$load$file_paths_for_closure_$_iter__18266(s__18267){
return (new cljs.core.LazySeq(null,(function (){
var s__18267__$1 = s__18267;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18267__$1);
if(temp__4425__auto__){
var s__18267__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18267__$2)){
var c__7223__auto__ = cljs.core.chunk_first.call(null,s__18267__$2);
var size__7224__auto__ = cljs.core.count.call(null,c__7223__auto__);
var b__18269 = cljs.core.chunk_buffer.call(null,size__7224__auto__);
if((function (){var i__18268 = (0);
while(true){
if((i__18268 < size__7224__auto__)){
var src_path = cljs.core._nth.call(null,c__7223__auto__,i__18268);
cljs.core.chunk_append.call(null,b__18269,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(goog_path),cljs.core.str(".js")].join(''));

var G__18270 = (i__18268 + (1));
i__18268 = G__18270;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18269),replumb$load$file_paths_for_closure_$_iter__18266.call(null,cljs.core.chunk_rest.call(null,s__18267__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18269),null);
}
} else {
var src_path = cljs.core.first.call(null,s__18267__$2);
return cljs.core.cons.call(null,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(goog_path),cljs.core.str(".js")].join(''),replumb$load$file_paths_for_closure_$_iter__18266.call(null,cljs.core.rest.call(null,s__18267__$2)));
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
replumb.load.skip_load_QMARK_ = (function replumb$load$skip_load_QMARK_(p__18271){
var map__18274 = p__18271;
var map__18274__$1 = ((((!((map__18274 == null)))?((((map__18274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18274):map__18274);
var name = cljs.core.get.call(null,map__18274__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__18274__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
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
