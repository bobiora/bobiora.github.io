(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shop"],{"06de":function(t,e,n){"use strict";n("d3c4")},"0fa5":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shop"},[n("MainShop")],1)},a=[],o=n("5530"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-shop"},[n("keep-alive",[n("router-view")],1),n("h1",{staticClass:"heading"},[t._v(t._s(t.title))]),n("Cats")],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cats"},[n("router-link",{staticClass:"cart-btn",attrs:{to:{name:"Cart",params:{cart_data:t.CART}}}},[t._v("Cart: "+t._s(t.CART.length))]),n("div",{staticClass:"shop-wrap"},[n("div",{staticClass:"filters"},[n("Select",{attrs:{options:t.categories,selected:t.selected,isExpanded:t.IS_DESKTOP},on:{select:t.sort}}),n("div",{staticClass:"range-slider"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.minPrice,expression:"minPrice",modifiers:{number:!0}}],attrs:{type:"range",min:"0",max:"100",step:"1"},domProps:{value:t.minPrice},on:{change:t.setRangePrice,__r:function(e){t.minPrice=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.maxPrice,expression:"maxPrice",modifiers:{number:!0}}],attrs:{type:"range",min:"0",max:"100",step:"1"},domProps:{value:t.maxPrice},on:{change:t.setRangePrice,__r:function(e){t.maxPrice=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}})]),n("div",{staticClass:"range-slider"},[n("span",[t._v("min: "+t._s(t.minPrice))]),n("span",[t._v("max: "+t._s(t.maxPrice))])])],1),n("div",{staticClass:"cats-list"},t._l(t.filtered,(function(e){return n("CatsItem",{key:e.id,attrs:{product_data:e},on:{addToCart:t.addToCart}})})),1)])],1)},l=[],d=n("6795"),u=n("e132"),f=n("a3f3"),m=n("5631");function p(t){return d(t)||u(t)||f(t)||m()}n("4de4"),n("b0c0");var _=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cats-item"},[n("img",{staticClass:"cats-item__img",attrs:{src:t.product_data.img,alt:""},on:{click:t.showInfo}}),n("h3",{staticClass:"cats-item__name"},[t._v(t._s(t.product_data.name))]),n("div",{staticClass:"cats-item__pice"},[t._v("$"+t._s(t.product_data.price))]),n("button",{staticClass:"cats-item__btn btn",on:{click:t.showInfo}},[t._v(" View ")]),n("button",{staticClass:"cats-item__btn btn",on:{click:t.addToCart}},[t._v("Add to cart")]),t.isInfoVisible?n("ModalView",{attrs:{modalTitle:t.product_data.name,btnModal:"Add to cart"},on:{closeModal:t.closeModalView,btnAction:t.addToCart}},[n("img",{staticClass:"cats-item__img",attrs:{src:t.product_data.img,alt:""}}),n("div",[n("h3",{staticClass:"cats-item__name"},[t._v(t._s(t.product_data.name))]),n("div",{staticClass:"cats-item__pice"},[t._v("$"+t._s(t.product_data.price))]),n("div",{staticClass:"cats-item__category"},[t._v(t._s(t.product_data.category))])])]):t._e()],1)},v=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"modal-wrap",staticClass:"modal-wrap"},[n("div",{staticClass:"modal-view"},[n("div",{staticClass:"modal-view__header"},[n("h2",{staticClass:"modal-view__heading"},[t._v(t._s(t.modalTitle))]),n("span",{staticClass:"modal-view__close",on:{click:t.closeModal}},[t._v(" ✕ ")])]),n("div",{staticClass:"modal-view__content"},[t._t("default")],2),n("div",{staticClass:"modal-view__footer"},[n("button",{staticClass:"btn",on:{click:t.btnAction}},[t._v(" "+t._s(t.btnModal)+" ")])])])])},b=[],C={name:"ModalView",props:{modalTitle:{type:String,default:"Modal Title"},btnModal:{type:String,default:"Done"}},data:function(){return{}},computed:{},methods:{closeModal:function(){this.$emit("closeModal")},btnAction:function(){this.$emit("btnAction")}},mounted:function(){var t=this;document.addEventListener("click",(function(e){e.target===t.$refs["modal-wrap"]&&t.closeModal()}))}},g=C,y=(n("8892"),n("2877")),O=Object(y["a"])(g,h,b,!1,null,null,null),x=O.exports,P={name:"CatsItem",components:{ModalView:x},props:{product_data:{type:Object,default:function(){return{}}}},data:function(){return{isInfoVisible:!1}},computed:{},methods:{showInfo:function(){this.isInfoVisible=!0},closeModalView:function(){this.isInfoVisible=!1},addToCart:function(){this.$emit("addToCart",this.product_data)}},mounted:function(){this.$set(this.product_data,"qty",1)}},S=P,w=(n("06de"),Object(y["a"])(S,_,v,!1,null,null,null)),T=w.exports,A=n("2f62"),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select"},[n("p",{staticClass:"select__title",on:{click:function(e){t.areOpVisible=!t.areOpVisible}}},[t._v(t._s(t.selected))]),t.isExpanded||t.areOpVisible?n("div",{staticClass:"select__options"},t._l(t.options,(function(e){return n("p",{key:e.value,staticClass:"select__option",on:{click:function(n){return t.selectOption(e)}}},[t._v(" "+t._s(e.name)+" ")])})),0):t._e()])},M=[],I={name:"Select",props:{options:{type:Array,default:function(){return[]}},selected:{type:String,default:""},isExpanded:{type:Boolean,default:!1}},data:function(){return{areOpVisible:!1}},methods:{selectOption:function(t){this.$emit("select",t),this.areOpVisible=!1},hideSelect:function(){this.areOpVisible=!1}},mounted:function(){document.addEventListener("click",this.hideSelect.bind(this),!0)},beforeDestroy:function(){document.removeEventListener("click",this.hideSelect)}},j=I,$=(n("7f0f"),Object(y["a"])(j,E,M,!1,null,null,null)),D=$.exports,k={name:"Cats",components:{CatsItem:T,Select:D},props:{},data:function(){return{title:"Cats",categories:[{name:"All Arts",value:"all"},{name:"Framed Prints",value:"framed"},{name:"Mini Art Prints",value:"mini"}],selected:"Filter",sortedProducts:[],minPrice:0,maxPrice:100}},computed:Object(o["a"])(Object(o["a"])({},Object(A["c"])(["PRODUCTS","CART","IS_MOBILE","IS_DESKTOP"])),{},{filtered:function(){return this.sortedProducts.length?this.sortedProducts:this.PRODUCTS}}),methods:Object(o["a"])(Object(o["a"])({},Object(A["b"])(["GET_PRODUCTS_FROM_API","ADD_TO_CART"])),{},{addToCart:function(t){this.ADD_TO_CART(t)},setRangePrice:function(){if(this.minPrice>this.maxPrice){var t=this.maxPrice;this.maxPrice=this.minPrice,this.minPrice=t}this.sort()},sort:function(t){var e=this;this.sortedProducts=p(this.PRODUCTS),this.sortedProducts=this.sortedProducts.filter((function(t){return t.price>=e.minPrice&&t.price<=e.maxPrice})),t&&(this.sortedProducts=this.sortedProducts.filter((function(n){return e.selected=t.name,n.category===t.value})))}}),watch:{},mounted:function(){var t=this;this.GET_PRODUCTS_FROM_API().then((function(e){e.data&&(console.log("data arrived"),t.sort())}))}},R=k,V=(n("fbed"),Object(y["a"])(R,c,l,!1,null,null,null)),L=V.exports,U={name:"mainShop",components:{Cats:L},props:{},data:function(){return{title:"Shop"}},computed:Object(o["a"])({},Object(A["c"])(["CART"])),methods:{},watch:{},mounted:function(){}},B=U,K=(n("27f7"),Object(y["a"])(B,r,s,!1,null,null,null)),F=K.exports,G={name:"Home",components:{MainShop:F},computed:Object(o["a"])({},Object(A["c"])(["IS_MOBILE","IS_DESKTOP"])),methods:Object(o["a"])({},Object(A["b"])(["SET_MOBILE","SET_DESKTOP"])),mounted:function(){var t=this;window.addEventListener("resize",(function(){window.innerWidth>767?(t.SET_DESKTOP(),console.log("d",t.IS_DESKTOP)):(t.SET_MOBILE(),console.log("m",t.IS_MOBILE))}))}},J=G,N=Object(y["a"])(J,i,a,!1,null,null,null);e["default"]=N.exports},2032:function(t,e){function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}t.exports=n,t.exports["default"]=t.exports,t.exports.__esModule=!0},"27f7":function(t,e,n){"use strict";n("e6ba")},"4df4":function(t,e,n){"use strict";var i=n("0366"),a=n("7b0b"),o=n("9bdd"),r=n("e95a"),s=n("50c4"),c=n("8418"),l=n("35a1");t.exports=function(t){var e,n,d,u,f,m,p=a(t),_="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,b=void 0!==h,C=l(p),g=0;if(b&&(h=i(h,v>2?arguments[2]:void 0,2)),void 0==C||_==Array&&r(C))for(e=s(p.length),n=new _(e);e>g;g++)m=b?h(p[g],g):p[g],c(n,g,m);else for(u=C.call(p),f=u.next,n=new _;!(d=f.call(u)).done;g++)m=b?o(u,h,[d.value,g],!0):d.value,c(n,g,m);return n.length=g,n}},5631:function(t,e){function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.exports=n,t.exports["default"]=t.exports,t.exports.__esModule=!0},6795:function(t,e,n){var i=n("2032");function a(t){if(Array.isArray(t))return i(t)}t.exports=a,t.exports["default"]=t.exports,t.exports.__esModule=!0},"7f0f":function(t,e,n){"use strict";n("80f3")},"80f3":function(t,e,n){},8892:function(t,e,n){"use strict";n("9dee")},"9bdd":function(t,e,n){var i=n("825a"),a=n("2a62");t.exports=function(t,e,n,o){try{return o?e(i(n)[0],n[1]):e(n)}catch(r){throw a(t),r}}},"9dee":function(t,e,n){},a3f3:function(t,e,n){n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3");var i=n("2032");function a(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}t.exports=a,t.exports["default"]=t.exports,t.exports.__esModule=!0},a630:function(t,e,n){var i=n("23e7"),a=n("4df4"),o=n("1c7e"),r=!o((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:r},{from:a})},b0c0:function(t,e,n){var i=n("83ab"),a=n("9bf2").f,o=Function.prototype,r=o.toString,s=/^\s*function ([^ (]*)/,c="name";i&&!(c in o)&&a(o,c,{configurable:!0,get:function(){try{return r.call(this).match(s)[1]}catch(t){return""}}})},d28b:function(t,e,n){var i=n("746f");i("iterator")},d3c4:function(t,e,n){},dd89:function(t,e,n){},e01a:function(t,e,n){"use strict";var i=n("23e7"),a=n("83ab"),o=n("da84"),r=n("5135"),s=n("861d"),c=n("9bf2").f,l=n("e893"),d=o.Symbol;if(a&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new d(t):void 0===t?d():d(t);return""===t&&(u[e]=!0),e};l(f,d);var m=f.prototype=d.prototype;m.constructor=f;var p=m.toString,_="Symbol(test)"==String(d("test")),v=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(r(u,t))return"";var n=_?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:f})}},e132:function(t,e,n){function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630"),t.exports=i,t.exports["default"]=t.exports,t.exports.__esModule=!0},e6ba:function(t,e,n){},fb6a:function(t,e,n){"use strict";var i=n("23e7"),a=n("861d"),o=n("e8b5"),r=n("23cb"),s=n("50c4"),c=n("fc6a"),l=n("8418"),d=n("b622"),u=n("1dde"),f=u("slice"),m=d("species"),p=[].slice,_=Math.max;i({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var n,i,d,u=c(this),f=s(u.length),v=r(t,f),h=r(void 0===e?f:e,f);if(o(u)&&(n=u.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?a(n)&&(n=n[m],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return p.call(u,v,h);for(i=new(void 0===n?Array:n)(_(h-v,0)),d=0;v<h;v++,d++)v in u&&l(i,d,u[v]);return i.length=d,i}})},fbed:function(t,e,n){"use strict";n("dd89")}}]);
//# sourceMappingURL=shop.cf2454fc.js.map