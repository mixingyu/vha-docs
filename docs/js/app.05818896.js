(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],v=0,_=[];v<s.length;v++)i=s[v],o[i]&&_.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(_.length)_.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vha-docs/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0af1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i={name:"App",beforeCreate:function(){},props:{},data:function(){return{}},components:{},computed:{},methods:{},watch:{},created:function(){},mounted:function(){},activated:function(){},deactivated:function(){},beforeDestroy:function(){},destroyed:function(){}},s=i,c=(n("7faf"),n("2877")),l=Object(c["a"])(s,o,a,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,v=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_PG-index _df"},[n("div",{staticClass:"_UI-menu _df _fdc"},[n("div",{staticClass:"ui-l-title _df _aic _cl-fff",on:{click:function(e){t.$router.push("/")}}},[n("i",{staticClass:"fa fa-mobile-phone fa-2x"}),n("span",{staticClass:"_di"},[t._v("Native docs")])]),t._m(0),n("div",{staticClass:"ui-l-menu _flexYauto"},[n("UImenu",{attrs:{pData:t.$store.state.menus,getContainer:t.getContainer,getContainerNode:t.getContainerNode}})],1),n("div",{staticClass:"ui-l-color _df _jssa"},[n("div",{staticStyle:{"background-color":"#03a6ff"},on:{click:function(e){t.onColor("mainCl","#03a6ff")}}}),n("div",{staticStyle:{"background-color":"#f1404b"},on:{click:function(e){t.onColor("mainCl","#f1404b")}}}),n("div",{staticStyle:{"background-color":"#3ac569"},on:{click:function(e){t.onColor("mainCl","#3ac569")}}}),n("div",{staticStyle:{"background-color":"#35d69b"},on:{click:function(e){t.onColor("mainCl","#35d69b")}}})])]),n("div",{staticClass:"_UI-content _flexYauto"},[n("router-view")],1),t.$store.state.showSidebar?n("div",{staticClass:"_UI-sidebar"},[n("div",{staticClass:"ui-s-phone"},[n("iframe",{attrs:{src:t.iframeSrc,frameborder:"0"}})])]):t._e()])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-l-search"},[n("input",{staticClass:"_reInput",attrs:{placeholder:"Search"}})])}],f=(n("28a5"),n("3b2b"),n("a481"),n("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_UI-menu"},t._l(this.pData,function(e,r){return n("section",{key:r},[n("p",{staticClass:"ui-l-i-title"},[t._v(t._s(e.title))]),n("ul",t._l(e.list,function(e,o){return n("li",{key:o,class:e.select?"ui-l-i-avtive":""},[n("a",{attrs:{href:t.procURL(e.href)},on:{click:function(e){t.onItemshow(r,o)}}},[t._v("\n          "+t._s(e.text)+"\n          "),n("span",{class:e.noteClass},[t._v(t._s(e.note))])]),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.showItem,expression:"menuList.showItem"}]},t._l(e.item,function(e,r){return n("li",{key:r,class:e.select?"ui-l-i-avtive":""},[n("a",{on:{click:function(n){t.onToscroll(e.href)}}},[t._v("\n              "+t._s(e.subText)+"\n              "),n("span",{class:e.noteClass},[t._v(t._s(e.subNote))])])])}))])}))])}))}),p=[],h=(n("ac4d"),n("8a81"),{name:"UImenu",props:{pData:{type:Array,default:function(){return[]}},getContainer:{type:Function,default:function(){}},getContainerNode:{type:Function,default:function(){}}},data:function(){return{observer:null,nowElement:null}},methods:{procURL:function(t){return this.$router.history.base+t},procMenu:function(){var t=this;this.pData.forEach(function(e){e.list.forEach(function(e){var n=t.$router.history.current.path;"/"+n.replace(/\//g,"")===e.href&&(e.showItem=!0,e.select=!0),e.item.forEach(function(e){"#"+t.nowElement.id===e.href?e.select=!0:e.select=!1})})}),window.history.replaceState({},null,"#"+this.nowElement.id)},handleScroll:function(){var t=0,e=0,n=0;if(this.getContainer()?(t=this.getContainer().scrollTop,e=this.getContainer().scrollHeight,n=this.getContainer().clientHeight):(t=document.body.scrollTop,e=document.body.scrollHeight,n=document.body.clientHeight),t>=e-n-50)this.nowElement=this.getContainerNode()[this.getContainerNode().length-2],this.procMenu();else{var r=0,o=!0,a=!1,i=void 0;try{for(var s,c=this.getContainerNode()[Symbol.iterator]();!(o=(s=c.next()).done);o=!0){var l=s.value;if(r+=l.clientHeight,t<r){l!=this.nowElement&&(this.nowElement=l,this.procMenu());break}}}catch(t){a=!0,i=t}finally{try{o||null==c.return||c.return()}finally{if(a)throw i}}}},onToscroll:function(t){var e=!0,n=!1,r=void 0;try{for(var o,a=this.getContainerNode()[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var i=o.value;if("#"+i.id===t){this.$scrollTo(i);break}}}catch(t){n=!0,r=t}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}}},watch:{},mounted:function(){this.getContainer()?this.getContainer().addEventListener("scroll",this.handleScroll):window.addEventListener("scroll",this.handleScroll),this.handleScroll();var t=!0,e=!1,n=void 0;try{for(var r,o=this.getContainerNode()[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var a=r.value;if("#"+a.id===this.$router.history.current.hash){a.scrollIntoView();break}}}catch(t){e=!0,n=t}finally{try{t||null==o.return||o.return()}finally{if(e)throw n}}},destroyed:function(){this.getContainer()?this.getContainer().removeEventListener("scroll",this.handleScroll):window.removeEventListener("scroll",this.handleScroll)}}),m=h,b=(n("ef2c"),Object(c["a"])(m,f,p,!1,null,"54fdf769",null));b.options.__file="menu.vue";var g=b.exports,y=n("1487"),C=n.n(y),w=(n("efe0"),{name:"PGindex",data:function(){return{}},components:{UImenu:g},methods:{getContainer:function(){return document.querySelector("._UI-content")},getContainerNode:function(){return document.querySelectorAll("._UI-content>div>*")},onColor:function(t,e){var n=document.querySelectorAll("head style"),r=function(t,e,n){var r=t.indexOf(e)+e.length,o=t.indexOf(n,r);return t.substring(r,o)};n.forEach(function(n){if(-1!=n.innerHTML.indexOf("/*Tstart-")){var o=r(n.innerHTML,"/*Tstart-".concat(t,"*/"),"/*Tend-".concat(t,"*/")),a=n.innerHTML;n.innerHTML=a.replace(new RegExp("(/".concat(o,"/)"),"g"),"/".concat(e,"/"))}})}},watch:{},created:function(){},mounted:function(){var t=this,e=function(t){var e=document.createElement("style");e.type="text/css",e.rel="stylesheet",e.appendChild(document.createTextNode(t));var n=document.getElementsByTagName("head")[0];n.appendChild(e)};e("\n      ._PG-index ._UI-menu .ui-l-title {\n        background-color: /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/;\n      }\n      ._PG-index ._UI-menu .ui-l-search input:focus {\n        border-left: 5px solid /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/;\n      }\n      ._PG-index ._UI-menu .ui-l-menu .ui-l-i-avtive >a {\n        color: /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/ !important;\n      }\n      ._PG-index ._UI-menu .ui-l-menu .ui-l-i-avtive >a:hover {\n        color: /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/ !important;\n      }\n    "),this.$nextTick(function(){var t=document.querySelectorAll("pre code");t.forEach(function(t){C.a.highlightBlock(t)})});var n=document.querySelectorAll("._PG-index ._UI-content h1 strong a");n.forEach(function(e){e.addEventListener("click",function(e){t.$scrollTo(document.querySelector("._PG-index ._UI-content "+e.target.hash)),e.preventDefault()})});var r=document.querySelectorAll("._PG-index ._UI-content h2 strong a");if(r.forEach(function(e){e.addEventListener("click",function(e){t.$scrollTo(document.querySelector("._PG-index ._UI-content "+e.target.hash)),e.preventDefault()})}),this.$store.state.showSidebar){var o=this.$store.state.showSideOutrouter.split(",");o.forEach(function(e){var n=t.$router.history.current.path.replace(/\//g,"");e===n&&(t.$store.state.showSidebar=!1)}),this.iframeSrc+=this.$store.state.showSidebarSrc+this.$router.history.current.path.replace(/\//g,"")}},beforeDestroy:function(){}}),S=w,E=(n("a6d5"),Object(c["a"])(S,_,d,!1,null,null,null));E.options.__file="index.vue";var x=E.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index_PG-Getting-Started"},[n("section",{attrs:{id:"Getting-Started"}},[t._m(0),n("br"),t._m(1),t._m(2),n("p",[n("router-link",{attrs:{to:"/aaa"}},[t._v("router-link-aaa")])],1),n("p",[t._v("Welcome to our API.")]),n("p",[t._v("This API document is designed for those interested in developing for our platform.")]),n("p",[t._v("This API is still under development anll under development anll under development anll under development anll under development anll under development anll under development anll under development and will evolve.")]),n("p",[t._v("This API is still under development and will evolve.")]),n("p",{staticClass:"_cl-aaaaaa"},[t._v("You’ll succeed if you do this.")]),n("p",{staticClass:"ui-r-note _bdc-success"},[t._v("You’ll succeed if you do this.")]),n("p",{staticClass:"ui-r-note _bdc-info"},[t._v("Here’s some useful information.")]),n("p",{staticClass:"ui-r-note _bdc-warning"},[t._v("Something may not happen if you try and do this.")]),n("p",{staticClass:"ui-r-note _bdc-error"},[t._v("Something bad will happen if you do this.")]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12)]),t._m(13),t._m(14),t._m(15)])},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("a",{attrs:{href:"#Getting-Started"}},[t._v("Getting Started")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("a",{staticClass:"ui-r-npm",attrs:{href:"https://www.npmjs.com/package/cordova-plugin-chrome-apps-sockets-tcp",target:"_blank"}},[t._v("cordova-plugin-chrome-apps-sockets-tcp")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("blockquote",[n("p",[t._v("cordova plugin add cordova-plugin-chrome")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[n("strong",[t._v("事件 (Event)")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"ui-r-return"},[n("span",[t._v("↪ 返回值：Promise(any)")]),t._v(" 复制后返回一个Promise对象")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"ui-r-return"},[n("span",[t._v("↪ 返回值：Function(any)")]),t._v(" 回调函数。参数为result")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"ui-r-return"},[n("span",[t._v("↪ 返回值：String(any)")]),t._v(" 回调函数。参数为result")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"ui-r-return"},[n("span",[t._v("↪ 返回值：Object(any)")]),t._v(" 对象")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"ui-r-return"},[n("span",[t._v("↪ 返回值：Boolean")]),t._v(" 布尔型")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",[n("dt",[t._v("title")]),n("dd",[t._v("The title for the book")]),n("dt",[t._v("score")]),n("dd",[t._v("The book's score between 0 and 5")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("类型")]),n("th",[t._v("说明")])])]),n("tbody",[n("tr",[n("td",[t._v("networkState")]),n("td",[t._v("String")]),n("td",[t._v("网络连接类型")])]),n("tr",[n("td",[t._v("networkState")]),n("td",[t._v("String")]),n("td",[t._v("网络连接类型")])]),n("tr",[n("td",[t._v("networkState")]),n("td",[t._v("String")]),n("td",[t._v("网络连接类型")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("Code")]),n("th",[t._v("Name")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("200")]),n("td",[t._v("OK")]),n("td",[t._v("Success")])]),n("tr",[n("td",[t._v("201")]),n("td",[t._v("Created")]),n("td",[t._v("Creation Successful")])]),n("tr",[n("td",[t._v("400")]),n("td",[t._v("Bad Request")]),n("td",[t._v("We could not process that action")])]),n("tr",[n("td",[t._v("403")]),n("td",[t._v("Forbidden")]),n("td",[t._v("We couldn’t authenticate you")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-javascript"},[t._v('StatusBaroverlaysWebView: function () {\n  this.$vha.statusbar.overlaysWebView(this.overlaysWebViewtruefalse)\n  if(this.overlaysWebViewtruefalse){\n    this.logText += "设置 overlaysWebView = false" + "\\n"\n    this.overlaysWebViewtruefalse = false\n    this.$vha.statusbar.overlaysWebView(this.overlaysWebViewtruefalse)\n  }else{\n    this.logText += "设置 overlaysWebView = true" + "\\n"\n    this.overlaysWebViewtruefalse = true\n    this.$vha.statusbar.overlaysWebView(this.overlaysWebViewtruefalse)\n  }\n}')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"Authentication"}},[n("h1",[n("a",{attrs:{href:"#Authentication"}},[t._v("Authentication")])]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"Errors"}},[n("h1",[n("a",{attrs:{href:"#Errors"}},[t._v("Errors")])]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"_df _jcsb",attrs:{id:"lastSection"}},[n("a",{staticClass:"ui-r-a",attrs:{href:"https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Getting-Started.md",target:"_blank"}},[t._v("在 GitHub 上编辑此页")]),n("span",[t._v("上次更新：2018-10-17 16:33:09")])])}],T={},G=Object(c["a"])(T,k,$,!1,null,null,null);G.options.__file="Getting-Started.vue";var I=G.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index_PG-Authentication"},[n("section",{attrs:{id:"documentationgetting_started"}},[n("h1",[n("a",{attrs:{href:"#documentationgetting_started"}},[t._v("Getting Started")])]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")]),n("p",[t._v("222222222")])]),n("section",{staticClass:"_df _jcsb",attrs:{id:"lastSection"}},[n("a",{staticClass:"ui-r-a",attrs:{href:"https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Authentication.md",target:"_blank"}},[t._v("在 GitHub 上编辑此页")]),n("span",[t._v("上次更新：2018-10-17 16:33:09")])])])}],O={},j=Object(c["a"])(O,A,P,!1,null,null,null);j.options.__file="Authentication.vue";var N=j.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index_PG-Errors"},[n("section",{attrs:{id:"documentationgetting_started"}},[n("h1",[n("a",{attrs:{href:"#documentationgetting_started"}},[t._v("Getting Started")])]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")]),n("p",[t._v("333333333")])]),n("section",{staticClass:"_df _jcsb",attrs:{id:"lastSection"}},[n("a",{staticClass:"ui-r-a",attrs:{href:"https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Errors.md",target:"_blank"}},[t._v("在 GitHub 上编辑此页")]),n("span",[t._v("上次更新：2018-10-17 16:33:09")])])])}],L={},D=Object(c["a"])(L,U,W,!1,null,null,null);D.options.__file="Errors.vue";var H=D.exports;r["a"].use(v["a"]);var V=new v["a"]({mode:"history",base:"/vha-docs/",routes:[{path:"/",component:x,redirect:"/GettingStarted",children:[{path:"/GettingStarted",name:"GettingStarted",component:I},{path:"/Authentication",name:"Authentication",component:N},{path:"/Errors",name:"Errors",component:H}]}]}),q=n("2f62");r["a"].use(q["a"]),r["a"].mixin({components:{},created:function(){},methods:{}});var M=new q["a"].Store({state:{showSidebar:!0,showSideOutrouter:"GettingStarted,Authentication",showSidebarSrc:"https://neostudiogroup.github.io/vha-appDemo/",menus:[{title:"Documentation",list:[{text:"Getting Started",note:"",noteClass:"",href:"/GettingStarted",select:!1,showItem:!1,item:[{subText:"Getting Started",subNote:"Splashscreen",noteClass:"",href:"#Getting-Started",select:!1},{subText:"Authentication",subNote:"StatusBar",noteClass:"",href:"#Authentication",select:!1},{subText:"Errors",subNote:"Network",noteClass:"",href:"#Errors",select:!1}]},{text:"Authentication",note:"",noteClass:"",href:"/Authentication",select:!1,showItem:!1,item:[]},{text:"Errors",note:"",noteClass:"",href:"/Errors",select:!1,showItem:!1,item:[]}]},{title:"Apis",list:[{text:"/books",note:"POST",noteClass:"_cl-66bb6a",href:"#",select:!1,showItem:!1,item:[]},{text:"/books",note:"POST",noteClass:"_cl-42a5f5",href:"#",select:!1,showItem:!1,item:[]},{text:"/books/:id",note:"PUT",noteClass:"_cl-7e57c2",href:"#",select:!1,showItem:!1,item:[]},{text:"/books/:id",note:"DELETE",noteClass:"_cl-ff7043",href:"#",select:!1,showItem:!1,item:[]}]}]},mutations:{},actions:{}}),B=n("9483");Object(B["a"])("".concat("/vha-docs/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var F=n("323e"),R=n.n(F);n("a5d8");V.beforeEach(function(t,e,n){""===t.hash&&R.a.start(),n()}),V.afterEach(function(){R.a.done()});var Y=n("f13c");r["a"].use(Y,{container:"._UI-content",duration:200,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),r["a"].config.productionTip=!1,new r["a"]({router:V,store:M,render:function(t){return t(u)}}).$mount("#app")},"6f96":function(t,e,n){},"7faf":function(t,e,n){"use strict";var r=n("0af1"),o=n.n(r);o.a},a6d5:function(t,e,n){"use strict";var r=n("cb4b"),o=n.n(r);o.a},cb4b:function(t,e,n){},ef2c:function(t,e,n){"use strict";var r=n("6f96"),o=n.n(r);o.a}});