(function(t){function e(e){for(var n,o,u=e[0],i=e[1],s=e[2],l=0,p=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);f&&f(e);while(p.length)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a={app:0},c=[];function u(t){return i.p+"js/"+({Cart:"Cart",shop:"shop"}[t]||t)+"."+{Cart:"a6118a9a",shop:"e2868d8c"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r={Cart:1,shop:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise((function(e,r){for(var n="css/"+({Cart:"Cart",shop:"shop"}[t]||t)+"."+{Cart:"86684f95",shop:"979fa0cc"}[t]+".css",a=i.p+n,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===a))return e()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){s=p[u],l=s.getAttribute("data-href");if(l===n||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[t],f.parentNode.removeChild(f),r(c)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(t);var p=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(f);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var f=l;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"43c3":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",{staticClass:"header"},[n("img",{staticClass:"header__logo",class:t.isHomePage?"":"header__logo--dark",attrs:{src:r("9b19"),alt:""}}),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("router-link",{attrs:{to:"/Shop"}},[t._v("Shop")])],1)]),n("keep-alive",[n("router-view")],1)],1)},a=[],c={computed:{isHomePage:function(){return"/"==this.$route.path||"/home"==this.$route.path}}},u=c,i=(r("cf25"),r("2877")),s=Object(i["a"])(u,o,a,!1,null,null,null),l=s.exports,p=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},d=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero",style:{"background-image":"url("+r("9bd0")+")"}})},m=[],v={name:"HelloWorld",props:{msg:String},data:function(){return{hero:"Bofolio"}}},g=v,b=(r("ce90"),Object(i["a"])(g,h,m,!1,null,"f08a2006",null)),C=b.exports,_={name:"Home",components:{HelloWorld:C}},y=_,T=Object(i["a"])(y,f,d,!1,null,null,null),E=T.exports;n["a"].use(p["a"]);var O=[{path:"/",name:"Home",component:E},{path:"/shop",name:"Shop",component:function(){return r.e("shop").then(r.bind(null,"0fa5"))}},{path:"/shop/cart",name:"Cart",component:function(){return r.e("Cart").then(r.bind(null,"ee55"))},props:!0}],R=new p["a"]({mode:"history",base:"/",routes:O}),S=R,w=r("5530"),j=r("2f62"),M=(r("d81d"),r("a434"),{SET_PRODUCTS:function(t,e){t.products=e},SET_CART:function(t,e){if(t.cart.length){var r=!1;t.cart.map((function(t){t.id===e.id&&(r=!0,t.qty++)})),r||t.cart.push(e)}else t.cart.push(e)},REMOVE_FROM_CART:function(t,e){t.cart.splice(e,1)},INCRITEM:function(t,e){t.cart[e].qty++},DICRITEM:function(t,e){t.cart[e].qty>1&&t.cart[e].qty--}}),P={DICRITEM:function(t,e){var r=t.commit;r("DICRITEM",e)},INCRITEM:function(t,e){var r=t.commit;r("INCRITEM",e)},ADD_TO_CART:function(t,e){var r=t.commit;r("SET_CART",e)},REMOVE_FROM_CART:function(t,e){var r=t.commit;r("REMOVE_FROM_CART",e)}},A=r("bc3a"),I=r.n(A),k={GET_PRODUCTS_FROM_API:function(t){var e=t.commit;return I()("http://localhost:3000/products",{method:"GET"}).then((function(t){return e("SET_PRODUCTS",t.data),t})).catch((function(t){return console.log(t),t}))}},x={PRODUCTS:function(t){return t.products},CART:function(t){return t.cart}},D=Object(w["a"])(Object(w["a"])({},P),k);n["a"].use(j["a"]);var H=new j["a"].Store({state:{products:[],cart:[]},mutations:M,actions:D,getters:x}),N=H;n["a"].config.productionTip=!1,new n["a"]({router:S,store:N,render:function(t){return t(l)}}).$mount("#app")},"9b19":function(t,e,r){t.exports=r.p+"img/logo.91b753f7.svg"},"9bd0":function(t,e,r){t.exports=r.p+"img/bg-hero.e60ab4f0.jpg"},ce90:function(t,e,r){"use strict";r("43c3")},cf25:function(t,e,r){"use strict";r("fea6")},fea6:function(t,e,r){}});
//# sourceMappingURL=app.c619302e.js.map