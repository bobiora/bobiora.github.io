(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shop"],{"06de":function(t,e,n){"use strict";n("d3c4")},"0fa5":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shop"},[n("MainShop")],1)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-shop"},[n("keep-alive",[n("router-view")],1),n("h1",{staticClass:"heading"},[t._v(t._s(t.title))]),n("Cats")],1)},i=[],o=n("5530"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cats"},[n("router-link",{staticClass:"cart-btn",attrs:{to:{name:"Cart",params:{cart_data:t.CART}}}},[t._v("Cart: "+t._s(t.CART.length))]),n("Select",{attrs:{options:t.categories,selected:t.selected},on:{select:t.sort}}),n("div",{staticClass:"cats-list"},t._l(t.filtered,(function(e){return n("CatsItem",{key:e.id,attrs:{product_data:e},on:{addToCart:t.addToCart}})})),1)],1)},l=[],u=(n("d81d"),n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cats-item"},[n("img",{staticClass:"cats-item__img",attrs:{src:t.product_data.img,alt:""}}),n("h3",{staticClass:"cats-item__name"},[t._v(t._s(t.product_data.name))]),n("div",{staticClass:"cats-item__pice"},[t._v("$"+t._s(t.product_data.price))]),n("button",{staticClass:"cats-item__btn btn",on:{click:t.addToCart}},[t._v("Add to cart")])])}),d=[],f={name:"CatsItem",components:{},props:{product_data:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{},methods:{addToCart:function(){this.$emit("addToCart",this.product_data)}},mounted:function(){this.$set(this.product_data,"qty",1)}},p=f,m=(n("06de"),n("2877")),_=Object(m["a"])(p,u,d,!1,null,null,null),h=_.exports,C=n("2f62"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select"},[n("p",{staticClass:"select__title",on:{click:function(e){t.areOpVisible=!t.areOpVisible}}},[t._v(t._s(t.selected))]),t.areOpVisible?n("div",{staticClass:"select__options"},t._l(t.options,(function(e){return n("p",{key:e.value,staticClass:"select__option",on:{click:function(n){return t.selectOption(e)}}},[t._v(" "+t._s(e.name)+" ")])})),0):t._e()])},v=[],O={name:"Select",props:{options:{type:Array,default:function(){return[]}},selected:{type:String,default:""}},data:function(){return{areOpVisible:!1}},methods:{selectOption:function(t){this.$emit("select",t),this.areOpVisible=!1},hideSelect:function(){this.areOpVisible=!1}},mounted:function(){document.addEventListener("click",this.hideSelect.bind(this),!0)},beforeDestroy:function(){document.removeEventListener("click",this.hideSelect)}},T=O,S=(n("7f0f"),Object(m["a"])(T,b,v,!1,null,null,null)),A=S.exports,g={name:"Cats",components:{CatsItem:h,Select:A},props:{},data:function(){return{title:"Cats",categories:[{name:"All Arts",value:"all"},{name:"Framed Prints",value:"framed"},{name:"Mini Art Prints",value:"mini"}],selected:"Filter",sortedProducts:[]}},computed:Object(o["a"])(Object(o["a"])({},Object(C["c"])(["PRODUCTS","CART"])),{},{filtered:function(){return this.sortedProducts.length?this.sortedProducts:this.PRODUCTS}}),methods:Object(o["a"])(Object(o["a"])({},Object(C["b"])(["GET_PRODUCTS_FROM_API","ADD_TO_CART"])),{},{addToCart:function(t){this.ADD_TO_CART(t)},sort:function(t){this.sortedProducts=[];var e=this;this.PRODUCTS.map((function(n){n.category===t.value&&e.sortedProducts.push(n)})),this.selected=t.name}}),watch:{},mounted:function(){this.GET_PRODUCTS_FROM_API().then((function(t){t.data&&console.log("data arrived")}))}},j=g,P=(n("fbed"),Object(m["a"])(j,r,l,!1,null,null,null)),R=P.exports,k={name:"mainShop",components:{Cats:R},props:{},data:function(){return{title:"Shop"}},computed:Object(o["a"])({},Object(C["c"])(["CART"])),methods:{},watch:{},mounted:function(){}},y=k,D=(n("27f7"),Object(m["a"])(y,c,i,!1,null,null,null)),w=D.exports,E={name:"Home",components:{MainShop:w}},$=E,V=Object(m["a"])($,s,a,!1,null,null,null);e["default"]=V.exports},"27f7":function(t,e,n){"use strict";n("e6ba")},"7f0f":function(t,e,n){"use strict";n("80f3")},"80f3":function(t,e,n){},b0c0:function(t,e,n){var s=n("83ab"),a=n("9bf2").f,c=Function.prototype,i=c.toString,o=/^\s*function ([^ (]*)/,r="name";s&&!(r in c)&&a(c,r,{configurable:!0,get:function(){try{return i.call(this).match(o)[1]}catch(t){return""}}})},d3c4:function(t,e,n){},dd89:function(t,e,n){},e6ba:function(t,e,n){},fbed:function(t,e,n){"use strict";n("dd89")}}]);
//# sourceMappingURL=shop.aca08949.js.map