(window.webpackJsonp=window.webpackJsonp||[]).push([[36,14,16],{365:function(t,e,n){},368:function(t,e,n){"use strict";n(365)},369:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(41),{name:"Header",props:{fixed:{type:Boolean,default:function(){return!0}}},computed:{},data:function(){return{info:{}}},updated:function(){},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:case"end":return e.stop()}}),e)})))()},methods:{onChange:function(){},onclose:function(){}},filters:{}});n(368),n=n(28),o=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("div",{class:{fixed:t.fixed,header:!0},attrs:{id:"Header"}},[e("div",{staticClass:"header_wapper"},[t._t("default")],2)])}),[],!1,null,"3521874b",null);e.default=o.exports},370:function(t,e,n){"use strict";n.r(e),n.d(e,"Header",(function(){return r}));var r=(n=n(369)).default;e.default={Header:n.default}},628:function(t,e,n){},711:function(t,e,n){t.exports=n.p+"img/logo@2.ca1f304.png"},712:function(t,e,n){t.exports=n.p+"img/download@2.e06d33c.png"},713:function(t,e,n){t.exports=n.p+"img/download@2.en.1036ffc.png"},714:function(t,e,n){"use strict";n(628)},760:function(t,e,n){"use strict";n.r(e),n(43),n(32),n(42),n(11),n(65),n(37),n(66);var r=n(29),o=n(370),c=n(75);function i(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)),r}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}o={name:"Download",components:{Header:o.Header},computed:a(a({},Object(c.b)(["local"])),{},{isBitKeep:function(){return this.local.UA.isBitKeep},locale:function(){return this.local.locale}}),mounted:function(){this.isBitKeep&&BitKeepInvoke.setTitle("zh"==locale?"下载 bitKeep":"Download bitKeep")},methods:{back:function(){this.$router.back()}}},n(714),c=n(28),o=Object(c.a)(o,(function(){var t,e=this,r=e.$createElement;return(r=e._self._c||r)("div",{attrs:{id:"download"}},[r("Header",[r("div",{staticClass:"blindbox_header"},[r("span",{staticClass:"logo"},[r("img",{attrs:{src:n(711)}})])])]),e._v(" "),r("div",{staticClass:"block_body"},["zh"==e.locale?r("img",{class:((t={})[e.locale]=!0,t),attrs:{src:n(712)}}):r("img",{class:((t={})[e.locale]=!0,t),attrs:{src:n(713)}}),e._v(" "),r("a",{staticClass:"btn",attrs:{href:"https://bitkeep.org"}},[e._v(e._s(e.$t("ActivityBlindbox.button.Downloadnow")))])])],1)}),[],!1,null,null,null),e.default=o.exports}}]);