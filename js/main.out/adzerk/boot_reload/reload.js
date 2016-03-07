// Compiled by ClojureScript 1.7.228 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__12818_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__12818_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__12823 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__12824 = null;
var count__12825 = (0);
var i__12826 = (0);
while(true){
if((i__12826 < count__12825)){
var s = cljs.core._nth.call(null,chunk__12824,i__12826);
var temp__4425__auto___12827 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___12827)){
var sheet_12828 = temp__4425__auto___12827;
var temp__4425__auto___12829__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_12828.href,changed);
if(cljs.core.truth_(temp__4425__auto___12829__$1)){
var href_uri_12830 = temp__4425__auto___12829__$1;
sheet_12828.ownerNode.href = href_uri_12830.makeUnique().toString();
} else {
}
} else {
}

var G__12831 = seq__12823;
var G__12832 = chunk__12824;
var G__12833 = count__12825;
var G__12834 = (i__12826 + (1));
seq__12823 = G__12831;
chunk__12824 = G__12832;
count__12825 = G__12833;
i__12826 = G__12834;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12823);
if(temp__4425__auto__){
var seq__12823__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12823__$1)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,seq__12823__$1);
var G__12835 = cljs.core.chunk_rest.call(null,seq__12823__$1);
var G__12836 = c__7256__auto__;
var G__12837 = cljs.core.count.call(null,c__7256__auto__);
var G__12838 = (0);
seq__12823 = G__12835;
chunk__12824 = G__12836;
count__12825 = G__12837;
i__12826 = G__12838;
continue;
} else {
var s = cljs.core.first.call(null,seq__12823__$1);
var temp__4425__auto___12839__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___12839__$1)){
var sheet_12840 = temp__4425__auto___12839__$1;
var temp__4425__auto___12841__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_12840.href,changed);
if(cljs.core.truth_(temp__4425__auto___12841__$2)){
var href_uri_12842 = temp__4425__auto___12841__$2;
sheet_12840.ownerNode.href = href_uri_12842.makeUnique().toString();
} else {
}
} else {
}

var G__12843 = cljs.core.next.call(null,seq__12823__$1);
var G__12844 = null;
var G__12845 = (0);
var G__12846 = (0);
seq__12823 = G__12843;
chunk__12824 = G__12844;
count__12825 = G__12845;
i__12826 = G__12846;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__12851 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__12852 = null;
var count__12853 = (0);
var i__12854 = (0);
while(true){
if((i__12854 < count__12853)){
var s = cljs.core._nth.call(null,chunk__12852,i__12854);
var temp__4425__auto___12855 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___12855)){
var image_12856 = temp__4425__auto___12855;
var temp__4425__auto___12857__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_12856.src,changed);
if(cljs.core.truth_(temp__4425__auto___12857__$1)){
var href_uri_12858 = temp__4425__auto___12857__$1;
image_12856.src = href_uri_12858.makeUnique().toString();
} else {
}
} else {
}

var G__12859 = seq__12851;
var G__12860 = chunk__12852;
var G__12861 = count__12853;
var G__12862 = (i__12854 + (1));
seq__12851 = G__12859;
chunk__12852 = G__12860;
count__12853 = G__12861;
i__12854 = G__12862;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12851);
if(temp__4425__auto__){
var seq__12851__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12851__$1)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,seq__12851__$1);
var G__12863 = cljs.core.chunk_rest.call(null,seq__12851__$1);
var G__12864 = c__7256__auto__;
var G__12865 = cljs.core.count.call(null,c__7256__auto__);
var G__12866 = (0);
seq__12851 = G__12863;
chunk__12852 = G__12864;
count__12853 = G__12865;
i__12854 = G__12866;
continue;
} else {
var s = cljs.core.first.call(null,seq__12851__$1);
var temp__4425__auto___12867__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___12867__$1)){
var image_12868 = temp__4425__auto___12867__$1;
var temp__4425__auto___12869__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_12868.src,changed);
if(cljs.core.truth_(temp__4425__auto___12869__$2)){
var href_uri_12870 = temp__4425__auto___12869__$2;
image_12868.src = href_uri_12870.makeUnique().toString();
} else {
}
} else {
}

var G__12871 = cljs.core.next.call(null,seq__12851__$1);
var G__12872 = null;
var G__12873 = (0);
var G__12874 = (0);
seq__12851 = G__12871;
chunk__12852 = G__12872;
count__12853 = G__12873;
i__12854 = G__12874;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__12877){
var map__12880 = p__12877;
var map__12880__$1 = ((((!((map__12880 == null)))?((((map__12880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12880):map__12880);
var on_jsload = cljs.core.get.call(null,map__12880__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__12880,map__12880__$1,on_jsload){
return (function (p1__12875_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__12875_SHARP_,".js");
});})(map__12880,map__12880__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__12880,map__12880__$1,on_jsload){
return (function (p1__12876_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__12876_SHARP_).makeUnique());
});})(js_files,map__12880,map__12880__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__12880,map__12880__$1,on_jsload){
return (function() { 
var G__12882__delegate = function (_){
return on_jsload.call(null);
};
var G__12882 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__12883__i = 0, G__12883__a = new Array(arguments.length -  0);
while (G__12883__i < G__12883__a.length) {G__12883__a[G__12883__i] = arguments[G__12883__i + 0]; ++G__12883__i;}
  _ = new cljs.core.IndexedSeq(G__12883__a,0);
} 
return G__12882__delegate.call(this,_);};
G__12882.cljs$lang$maxFixedArity = 0;
G__12882.cljs$lang$applyTo = (function (arglist__12884){
var _ = cljs.core.seq(arglist__12884);
return G__12882__delegate(_);
});
G__12882.cljs$core$IFn$_invoke$arity$variadic = G__12882__delegate;
return G__12882;
})()
;})(js_files,map__12880,map__12880__$1,on_jsload))
,((function (js_files,map__12880,map__12880__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__12880,map__12880__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__12889_12893 = cljs.core.seq.call(null,things_to_log);
var chunk__12890_12894 = null;
var count__12891_12895 = (0);
var i__12892_12896 = (0);
while(true){
if((i__12892_12896 < count__12891_12895)){
var t_12897 = cljs.core._nth.call(null,chunk__12890_12894,i__12892_12896);
console.log(t_12897);

var G__12898 = seq__12889_12893;
var G__12899 = chunk__12890_12894;
var G__12900 = count__12891_12895;
var G__12901 = (i__12892_12896 + (1));
seq__12889_12893 = G__12898;
chunk__12890_12894 = G__12899;
count__12891_12895 = G__12900;
i__12892_12896 = G__12901;
continue;
} else {
var temp__4425__auto___12902 = cljs.core.seq.call(null,seq__12889_12893);
if(temp__4425__auto___12902){
var seq__12889_12903__$1 = temp__4425__auto___12902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12889_12903__$1)){
var c__7256__auto___12904 = cljs.core.chunk_first.call(null,seq__12889_12903__$1);
var G__12905 = cljs.core.chunk_rest.call(null,seq__12889_12903__$1);
var G__12906 = c__7256__auto___12904;
var G__12907 = cljs.core.count.call(null,c__7256__auto___12904);
var G__12908 = (0);
seq__12889_12893 = G__12905;
chunk__12890_12894 = G__12906;
count__12891_12895 = G__12907;
i__12892_12896 = G__12908;
continue;
} else {
var t_12909 = cljs.core.first.call(null,seq__12889_12903__$1);
console.log(t_12909);

var G__12910 = cljs.core.next.call(null,seq__12889_12903__$1);
var G__12911 = null;
var G__12912 = (0);
var G__12913 = (0);
seq__12889_12893 = G__12910;
chunk__12890_12894 = G__12911;
count__12891_12895 = G__12912;
i__12892_12896 = G__12913;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__12914_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__12914_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

var G__12916 = changed_STAR_;
adzerk.boot_reload.reload.reload_js.call(null,G__12916,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__12916);

adzerk.boot_reload.reload.reload_css.call(null,G__12916);

adzerk.boot_reload.reload.reload_img.call(null,G__12916);

return G__12916;
});

//# sourceMappingURL=reload.js.map