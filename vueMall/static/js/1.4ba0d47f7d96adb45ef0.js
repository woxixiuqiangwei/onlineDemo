webpackJsonp([1],{"+Tcy":function(t,n,e){var r=e("cfNE")("wks"),o=e("fifa"),i=e("2KLU").Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},"+WWO":function(t,n,e){var r=e("2uQd");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"+kaZ":function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},"/9y9":function(t,n,e){"use strict";var r=e("2KLU"),o=e("ZuHZ"),i=e("hHwa"),a=e("uoC7"),c=e("+Tcy")("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];a&&n&&!n[c]&&i.f(n,c,{configurable:!0,get:function(){return this}})}},"1W9W":function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"1j1a":function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},"2Chg":function(t,n,e){"use strict";var r=e("Wtcz"),o=e("yVB4"),i=e("uhD/");r(r.S,"Promise",{try:function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},"2KLU":function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},"2YYL":function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},"2gH+":function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},"2uQd":function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},"5qQX":function(t,n,e){var r=e("1j1a"),o=e("WXuS"),i=e("dfwl")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},"6sPN":function(t,n,e){var r=e("+Tcy")("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:e=!0}},i[r]=function(){return a},t(i)}catch(t){}return e}},"7ikt":function(t,n,e){var r=e("xgeF"),o=e("OeXM"),i=e("ULQ5"),a=e("dfwl")("IE_PROTO"),c=function(){},u=function(){var t,n=e("P/bz")("iframe"),r=i.length;for(n.style.display="none",e("9RDR").appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[i[r]];return u()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[a]=t):e=u(),void 0===n?e:o(e,n)}},"8XE2":function(t,n,e){var r,o,i,a=e("VfK5"),c=e("2YYL"),u=e("9RDR"),s=e("P/bz"),f=e("2KLU"),l=f.process,h=f.setImmediate,p=f.clearImmediate,v=f.MessageChannel,d=f.Dispatch,g=0,y={},m=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},x=function(t){m.call(t.data)};h&&p||(h=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return y[++g]=function(){c("function"==typeof t?t:Function(t),n)},r(g),g},p=function(t){delete y[t]},"process"==e("2uQd")(l)?r=function(t){l.nextTick(a(m,t,1))}:d&&d.now?r=function(t){d.now(a(m,t,1))}:v?(i=(o=new v).port2,o.port1.onmessage=x,r=a(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",x,!1)):r="onreadystatechange"in s("script")?function(t){u.appendChild(s("script")).onreadystatechange=function(){u.removeChild(this),m.call(t)}}:function(t){setTimeout(a(m,t,1),0)}),t.exports={set:h,clear:p}},"9Ntz":function(t,n,e){var r=e("nVyG"),o=e("+Tcy")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},"9RDR":function(t,n,e){var r=e("2KLU").document;t.exports=r&&r.documentElement},Dyqw:function(t,n,e){"use strict";var r=e("7ikt"),o=e("gwUl"),i=e("U91k"),a={};e("W4r7")(a,e("+Tcy")("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(a,{next:o(1,e)}),i(t,n+" Iterator")}},FHEs:function(t,n,e){var r=e("+kaZ");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},FftQ:function(t,n,e){var r=e("Jsc2"),o=e("HIIM");t.exports=function(t){return function(n,e){var i,a,c=String(o(n)),u=r(e),s=c.length;return u<0||u>=s?t?"":void 0:(i=c.charCodeAt(u))<55296||i>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):i:t?c.slice(u,u+2):a-56320+(i-55296<<10)+65536}}},GVcH:function(t,n,e){var r=e("VfK5"),o=e("f9MG"),i=e("9Ntz"),a=e("xgeF"),c=e("n/58"),u=e("PsHI"),s={},f={};(n=t.exports=function(t,n,e,l,h){var p,v,d,g,y=h?function(){return t}:u(t),m=r(e,l,n?2:1),x=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(p=c(t.length);p>x;x++)if((g=n?m(a(v=t[x])[0],v[1]):m(t[x]))===s||g===f)return g}else for(d=y.call(t);!(v=d.next()).done;)if((g=o(d,m,v.value,n))===s||g===f)return g}).BREAK=s,n.RETURN=f},H7IX:function(t,n,e){var r=e("1j1a"),o=e("KKnT"),i=e("v23f")(!1),a=e("dfwl")("IE_PROTO");t.exports=function(t,n){var e,c=o(t),u=0,s=[];for(e in c)e!=a&&r(c,e)&&s.push(e);for(;n.length>u;)r(c,e=n[u++])&&(~i(s,e)||s.push(e));return s}},HIIM:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},J0Oq:function(t,n,e){"use strict";n.__esModule=!0;var r,o=e("rVsN"),i=(r=o)&&r.__esModule?r:{default:r};n.default=function(t){return function(){var n=t.apply(this,arguments);return new i.default(function(t,e){return function r(o,a){try{var c=n[o](a),u=c.value}catch(t){return void e(t)}if(!c.done)return i.default.resolve(u).then(function(t){r("next",t)},function(t){r("throw",t)});t(u)}("next")})}}},JCgW:function(t,n,e){"use strict";var r=e("WpJA"),o=e("Wtcz"),i=e("shwb"),a=e("W4r7"),c=e("nVyG"),u=e("Dyqw"),s=e("U91k"),f=e("5qQX"),l=e("+Tcy")("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,n,e,v,d,g,y){u(e,n,v);var m,x,w,_=function(t){if(!h&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},L=n+" Iterator",b="values"==d,O=!1,S=t.prototype,P=S[l]||S["@@iterator"]||d&&S[d],T=P||_(d),j=d?b?_("entries"):T:void 0,k="Array"==n&&S.entries||P;if(k&&(w=f(k.call(new t)))!==Object.prototype&&w.next&&(s(w,L,!0),r||"function"==typeof w[l]||a(w,l,p)),b&&P&&"values"!==P.name&&(O=!0,T=function(){return P.call(this)}),r&&!y||!h&&!O&&S[l]||a(S,l,T),c[n]=T,c[L]=p,d)if(m={values:b?T:_("values"),keys:g?T:_("keys"),entries:j},y)for(x in m)x in S||i(S,x,m[x]);else o(o.P+o.F*(h||O),n,m);return m}},Jsc2:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},KKnT:function(t,n,e){var r=e("+WWO"),o=e("HIIM");t.exports=function(t){return r(o(t))}},MJJS:function(t,n,e){e("mWRU");for(var r=e("2KLU"),o=e("W4r7"),i=e("nVyG"),a=e("+Tcy")("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<c.length;u++){var s=c[u],f=r[s],l=f&&f.prototype;l&&!l[a]&&o(l,a,s),i[s]=i.Array}},Nlnz:function(t,n,e){var r=e("2uQd"),o=e("+Tcy")("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(a=r(n))&&"function"==typeof n.callee?"Arguments":a}},OeXM:function(t,n,e){var r=e("hHwa"),o=e("xgeF"),i=e("RY2v");t.exports=e("uoC7")?Object.defineProperties:function(t,n){o(t);for(var e,a=i(n),c=a.length,u=0;c>u;)r.f(t,e=a[u++],n[e]);return t}},"P/bz":function(t,n,e){var r=e("+kaZ"),o=e("2KLU").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},P0rZ:function(t,n,e){var r=e("xgeF"),o=e("+kaZ"),i=e("yVB4");t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},PsHI:function(t,n,e){var r=e("Nlnz"),o=e("+Tcy")("iterator"),i=e("nVyG");t.exports=e("ZuHZ").getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},Q7VZ:function(t,n,e){var r=e("2KLU"),o=e("8XE2").set,i=r.MutationObserver||r.WebKitMutationObserver,a=r.process,c=r.Promise,u="process"==e("2uQd")(a);t.exports=function(){var t,n,e,s=function(){var r,o;for(u&&(r=a.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(u)e=function(){a.nextTick(s)};else if(!i||r.navigator&&r.navigator.standalone)if(c&&c.resolve){var f=c.resolve(void 0);e=function(){f.then(s)}}else e=function(){o.call(r,s)};else{var l=!0,h=document.createTextNode("");new i(s).observe(h,{characterData:!0}),e=function(){h.data=l=!l}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},RY2v:function(t,n,e){var r=e("H7IX"),o=e("ULQ5");t.exports=Object.keys||function(t){return r(t,o)}},U91k:function(t,n,e){var r=e("hHwa").f,o=e("1j1a"),i=e("+Tcy")("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},ULQ5:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},Uket:function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},VbTO:function(t,n,e){var r=e("2KLU").navigator;t.exports=r&&r.userAgent||""},VfK5:function(t,n,e){var r=e("1W9W");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},W4r7:function(t,n,e){var r=e("hHwa"),o=e("gwUl");t.exports=e("uoC7")?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},WXuS:function(t,n,e){var r=e("HIIM");t.exports=function(t){return Object(r(t))}},WpJA:function(t,n){t.exports=!0},Wtcz:function(t,n,e){var r=e("2KLU"),o=e("ZuHZ"),i=e("VfK5"),a=e("W4r7"),c=e("1j1a"),u=function(t,n,e){var s,f,l,h=t&u.F,p=t&u.G,v=t&u.S,d=t&u.P,g=t&u.B,y=t&u.W,m=p?o:o[n]||(o[n]={}),x=m.prototype,w=p?r:v?r[n]:(r[n]||{}).prototype;for(s in p&&(e=n),e)(f=!h&&w&&void 0!==w[s])&&c(m,s)||(l=f?w[s]:e[s],m[s]=p&&"function"!=typeof w[s]?e[s]:g&&f?i(l,r):y&&w[s]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((m.virtual||(m.virtual={}))[s]=l,t&u.R&&x&&!x[s]&&a(x,s,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},XqSp:function(t,n,e){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=e("k9rz"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},ZUzi:function(t,n,e){var r=e("W4r7");t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},Zet5:function(t,n){t.exports=function(){}},at0p:function(t,n,e){"use strict";var r=e("FftQ")(!0);e("JCgW")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},"bBK/":function(t,n,e){t.exports=!e("uoC7")&&!e("2gH+")(function(){return 7!=Object.defineProperty(e("P/bz")("div"),"a",{get:function(){return 7}}).a})},buqO:function(t,n,e){e("d5xd"),e("at0p"),e("MJJS"),e("ouMr"),e("p/lT"),e("2Chg"),t.exports=e("ZuHZ").Promise},cfNE:function(t,n,e){var r=e("ZuHZ"),o=e("2KLU"),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e("WpJA")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},d5xd:function(t,n){},dfwl:function(t,n,e){var r=e("cfNE")("keys"),o=e("fifa");t.exports=function(t){return r[t]||(r[t]=o(t))}},f9MG:function(t,n,e){var r=e("xgeF");t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},fifa:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},gwUl:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},hHwa:function(t,n,e){var r=e("xgeF"),o=e("bBK/"),i=e("FHEs"),a=Object.defineProperty;n.f=e("uoC7")?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},iHDL:function(t,n){},iRyl:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("lC5x"),o=e.n(r),i=e("J0Oq"),a=e.n(i),c=e("z8+0"),u=e.n(c),s={data:function(){return{active:0,list:[],loading:!1,finished:!1,isLoading:!1,goodsName:"",goodsListId:"",cateList:"",vanLoad:!0,leaveGoodsList:!1}},methods:{onLoad:function(){var t=this;setTimeout(function(){u.a.data.forEach(function(n){t.list.push(n)}),t.loading=!1,t.finished=!0},1e3)},onRefresh:function(){var t=this;setTimeout(function(){t.$toast("刷新成功"),t.isLoading=!1},800)},changeType:function(t){this.finished=!1,this.loadData()},goGoods:function(t){sessionStorage.setItem("goodsTitle",t.name),sessionStorage.setItem("goodsPrice",t.price),sessionStorage.setItem("goodsId",t.goodsId),sessionStorage.setItem("goodsImg",t.img),this.$router.push({name:"goods"})},getData:function(){return this.$axios.get("https://api.myjson.com/bins/bxu6y")},loadData:function(){var t=this;return a()(o.a.mark(function n(){var e,r,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return null,t.vanLoad=!0,t.$toast.loading({message:"加载中..",forbidClick:!0,loadingType:"spinner"}),n.next=5,t.getData();case 5:e=n.sent,r=e.data.data,i=sessionStorage.getItem("goodsListId"),t.cateList=r[i].list,t.list=t.cateList[t.active].goodsList,setTimeout(function(){t.vanLoad=!1,t.$toast.clear()},260);case 11:case"end":return n.stop()}},n,t)}))()}},created:function(){this.loadData()},beforeRouteEnter:function(t,n,e){e(function(t){var n=sessionStorage.getItem("goodsName");document.title="商品列表— "+n,t.goodsName=n}),"goods"==n.name?e(function(t){t.finished=!0}):e(function(t){t.leaveGoodsList&&(t.list="",t.loadData()),t.finished=!1})},beforeRouteLeave:function(t,n,e){"goods"!==t.name?(sessionStorage.removeItem("goodsName"),this.goodsName="",this.active=0,this.leaveGoodsList=!0):this.leaveGoodsList=!1,e()}},f={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"goodsList"}},[e("header",[e("i",{staticClass:"icon iconfont icon-back",on:{click:function(n){return t.$router.go(-1)}}}),t._v(" "),e("p",{staticClass:"title"},[t._v(t._s(t.goodsName))])]),t._v(" "),e("div",{staticClass:"placeholder"}),t._v(" "),e("van-loading",{directives:[{name:"show",rawName:"v-show",value:t.vanLoad,expression:"vanLoad"}],attrs:{size:"24px"}},[t._v("加载中...")]),t._v(" "),e("van-tabs",{attrs:{animated:""},on:{click:t.changeType},model:{value:t.active,callback:function(n){t.active=n},expression:"active"}},t._l(t.cateList,function(n){return e("van-tab",{key:n.id,attrs:{title:n.type}},[e("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(n){t.isLoading=n},expression:"isLoading"}},[e("van-list",{directives:[{name:"show",rawName:"v-show",value:!t.vanLoad,expression:"!vanLoad"}],attrs:{finished:t.finished,"finished-text":"没有更多数据了","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},t._l(t.list,function(n){return e("div",{staticClass:"goodsItem",on:{click:function(e){return t.goGoods(n)}}},[e("div",{staticClass:"imgBox"},[e("img",{attrs:{src:n.img,alt:""}})]),t._v(" "),e("p",[t._v(t._s(n.name))]),t._v(" "),e("div",{staticClass:"desc"},[e("span",{staticClass:"price"},[t._v("¥"+t._s(n.price))]),t._v(" "),e("span",{staticClass:"slogan"},[t._v("共有"+t._s(n.slogan)+"人付款")])])])}),0)],1)],1)}),1)],1)},staticRenderFns:[]};var l=e("C7Lr")(s,f,!1,function(t){e("iHDL")},"data-v-6d026e7c",null);n.default=l.exports},jt4h:function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},k6Sx:function(t,n,e){var r=e("Jsc2"),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},k9rz:function(t,n){!function(n){"use strict";var e,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"==typeof t,f=n.regeneratorRuntime;if(f)s&&(t.exports=f);else{(f=n.regeneratorRuntime=s?t.exports:{}).wrap=w;var l="suspendedStart",h="suspendedYield",p="executing",v="completed",d={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(M([])));m&&m!==r&&o.call(m,a)&&(g=m);var x=O.prototype=L.prototype=Object.create(g);b.prototype=x.constructor=O,O.constructor=b,O[u]=b.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===b||"GeneratorFunction"===(n.displayName||n.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(x),t},f.awrap=function(t){return{__await:t}},S(P.prototype),P.prototype[c]=function(){return this},f.AsyncIterator=P,f.async=function(t,n,e,r){var o=new P(w(t,n,e,r));return f.isGeneratorFunction(n)?o:o.next().then(function(t){return t.done?t.value:o.next()})},S(x),x[u]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},f.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},f.values=M,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:M(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}}}function w(t,n,e,r){var o=n&&n.prototype instanceof L?n:L,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=function(t,n,e){var r=l;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return A()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=T(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===l)throw r=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=p;var u=_(t,n,e);if("normal"===u.type){if(r=e.done?v:h,u.arg===d)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r=v,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function _(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}function L(){}function b(){}function O(){}function S(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function P(t){var n;this._invoke=function(e,r){function i(){return new Promise(function(n,i){!function n(e,r,i,a){var c=_(t[e],t,r);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){n("next",t,i,a)},function(t){n("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},a)}a(c.arg)}(e,r,n,i)})}return n=n?n.then(i,i):i()}}function T(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,T(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=_(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function j(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function k(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function M(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(o.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:A}}function A(){return{value:e,done:!0}}}(function(){return this}()||Function("return this")())},lC5x:function(t,n,e){t.exports=e("XqSp")},mWRU:function(t,n,e){"use strict";var r=e("Zet5"),o=e("Uket"),i=e("nVyG"),a=e("KKnT");t.exports=e("JCgW")(Array,"Array",function(t,n){this._t=a(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},"n/58":function(t,n,e){var r=e("Jsc2"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},nVyG:function(t,n){t.exports={}},nf2A:function(t,n,e){var r=e("xgeF"),o=e("1W9W"),i=e("+Tcy")("species");t.exports=function(t,n){var e,a=r(t).constructor;return void 0===a||void 0==(e=r(a)[i])?n:o(e)}},ouMr:function(t,n,e){"use strict";var r,o,i,a,c=e("WpJA"),u=e("2KLU"),s=e("VfK5"),f=e("Nlnz"),l=e("Wtcz"),h=e("+kaZ"),p=e("1W9W"),v=e("jt4h"),d=e("GVcH"),g=e("nf2A"),y=e("8XE2").set,m=e("Q7VZ")(),x=e("yVB4"),w=e("uhD/"),_=e("VbTO"),L=e("P0rZ"),b=u.TypeError,O=u.process,S=O&&O.versions,P=S&&S.v8||"",T=u.Promise,j="process"==f(O),k=function(){},E=o=x.f,M=!!function(){try{var t=T.resolve(1),n=(t.constructor={})[e("+Tcy")("species")]=function(t){t(k,k)};return(j||"function"==typeof PromiseRejectionEvent)&&t.then(k)instanceof n&&0!==P.indexOf("6.6")&&-1===_.indexOf("Chrome/66")}catch(t){}}(),A=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},C=function(t,n){if(!t._n){t._n=!0;var e=t._c;m(function(){for(var r=t._v,o=1==t._s,i=0,a=function(n){var e,i,a,c=o?n.ok:n.fail,u=n.resolve,s=n.reject,f=n.domain;try{c?(o||(2==t._h&&R(t),t._h=1),!0===c?e=r:(f&&f.enter(),e=c(r),f&&(f.exit(),a=!0)),e===n.promise?s(b("Promise-chain cycle")):(i=A(e))?i.call(e,u,s):u(e)):s(r)}catch(t){f&&!a&&f.exit(),s(t)}};e.length>i;)a(e[i++]);t._c=[],t._n=!1,n&&!t._h&&I(t)})}},I=function(t){y.call(u,function(){var n,e,r,o=t._v,i=W(t);if(i&&(n=w(function(){j?O.emit("unhandledRejection",o,t):(e=u.onunhandledrejection)?e({promise:t,reason:o}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=j||W(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},W=function(t){return 1!==t._h&&0===(t._a||t._c).length},R=function(t){y.call(u,function(){var n;j?O.emit("rejectionHandled",t):(n=u.onrejectionhandled)&&n({promise:t,reason:t._v})})},F=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),C(n,!0))},N=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw b("Promise can't be resolved itself");(n=A(t))?m(function(){var r={_w:e,_d:!1};try{n.call(t,s(N,r,1),s(F,r,1))}catch(t){F.call(r,t)}}):(e._v=t,e._s=1,C(e,!1))}catch(t){F.call({_w:e,_d:!1},t)}}};M||(T=function(t){v(this,T,"Promise","_h"),p(t),r.call(this);try{t(s(N,this,1),s(F,this,1))}catch(t){F.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e("ZUzi")(T.prototype,{then:function(t,n){var e=E(g(this,T));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=j?O.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&C(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s(N,t,1),this.reject=s(F,t,1)},x.f=E=function(t){return t===T||t===a?new i(t):o(t)}),l(l.G+l.W+l.F*!M,{Promise:T}),e("U91k")(T,"Promise"),e("/9y9")("Promise"),a=e("ZuHZ").Promise,l(l.S+l.F*!M,"Promise",{reject:function(t){var n=E(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!M),"Promise",{resolve:function(t){return L(c&&this===a?T:this,t)}}),l(l.S+l.F*!(M&&e("6sPN")(function(t){T.all(t).catch(k)})),"Promise",{all:function(t){var n=this,e=E(n),r=e.resolve,o=e.reject,i=w(function(){var e=[],i=0,a=1;d(t,!1,function(t){var c=i++,u=!1;e.push(void 0),a++,n.resolve(t).then(function(t){u||(u=!0,e[c]=t,--a||r(e))},o)}),--a||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=E(n),r=e.reject,o=w(function(){d(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},"p/lT":function(t,n,e){"use strict";var r=e("Wtcz"),o=e("ZuHZ"),i=e("2KLU"),a=e("nf2A"),c=e("P0rZ");r(r.P+r.R,"Promise",{finally:function(t){var n=a(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return c(n,t()).then(function(){return e})}:t,e?function(e){return c(n,t()).then(function(){throw e})}:t)}})},rVsN:function(t,n,e){t.exports={default:e("buqO"),__esModule:!0}},shwb:function(t,n,e){t.exports=e("W4r7")},"uhD/":function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},uoC7:function(t,n,e){t.exports=!e("2gH+")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},v23f:function(t,n,e){var r=e("KKnT"),o=e("n/58"),i=e("k6Sx");t.exports=function(t){return function(n,e,a){var c,u=r(n),s=o(u.length),f=i(a,s);if(t&&e!=e){for(;s>f;)if((c=u[f++])!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===e)return t||f||0;return!t&&-1}}},xgeF:function(t,n,e){var r=e("+kaZ");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},yVB4:function(t,n,e){"use strict";var r=e("1W9W");t.exports.f=function(t){return new function(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=r(n),this.reject=r(e)}(t)}},"z8+0":function(t,n){t.exports={data:[{goodsId:1111,name:"新数据1",img:"https://cdn.u1.huluxia.com/g3/M01/F6/6C/wKgBOV4rtbWALEeGAARL8PhjGrQ514.jpg",price:"630",slogan:"1230",number:1},{goodsId:1112,name:"新数据2",img:"https://cdn.u1.huluxia.com/g3/M01/F6/6C/wKgBOV4rtbSANaiXAAMb7_N5Vlw911.jpg",price:"765",slogan:"4087",number:1},{goodsId:1113,name:"新数据3",img:"https://cdn.u1.huluxia.com/g3/M01/F6/6C/wKgBOV4rtbSAGAadAALLudP3H30471.jpg",price:"190",slogan:"6252",number:1},{goodsId:1114,name:"新数据4",img:"https://cdn.u1.huluxia.com/g3/M01/F6/6C/wKgBOV4rtbSAVRcPAAKsB9xeUmQ429.jpg",price:"360",slogan:"1200",number:1},{goodsId:1115,name:"新数据5",img:"https://cdn.u1.huluxia.com/g3/M01/F6/6C/wKgBOV4rtbOAVTHFAAF5ZHqoX8w618.jpg",price:"660",slogan:"230",number:1}]}}});
//# sourceMappingURL=1.4ba0d47f7d96adb45ef0.js.map