(window.webpackJsonp=window.webpackJsonp||[]).push([[45,14,16],{361:function(t,e,n){},364:function(t,e,n){"use strict";n(361)},365:function(t,e,n){"use strict";n.r(e);var r=n(3),c=(n(41),{name:"Header",props:{fixed:{type:Boolean,default:function(){return!0}}},computed:{},data:function(){return{info:{}}},updated:function(){},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:case"end":return e.stop()}}),e)})))()},methods:{onChange:function(){},onclose:function(){}},filters:{}});n(364),n=n(27),c=Object(n.a)(c,(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("div",{class:{fixed:t.fixed,header:!0},attrs:{id:"Header"}},[e("div",{staticClass:"header_wapper"},[t._t("default")],2)])}),[],!1,null,"3521874b",null);e.default=c.exports},366:function(t,e,n){"use strict";n.r(e),n.d(e,"Header",(function(){return r}));var r=(n=n(365)).default;e.default={Header:n.default}},630:function(t,e,n){},716:function(t,e,n){"use strict";n(630)},761:function(t,e,n){"use strict";n.r(e),n(43),n(31),n(42),n(65),n(37),n(66);var r=n(28),c=n(366),o=n(75);function i(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)),r}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}o={name:"Download",components:{Header:c.Header},computed:a(a({},Object(o.b)(["local"])),{},{isBitKeep:function(){return this.local.UA.isBitKeep},locale:function(){return this.local.locale}}),mounted:function(){},methods:{back:function(){this.$router.back()}}},n(716),n=n(27),o=Object(n.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"download"}},[n("Header",[n("div",{staticClass:"blindbox_header"},[n("span",{staticClass:"logo"},[n("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_88287340-a021-11ec-b054-8b7edc051038.png"}})])])]),t._v(" "),n("div",{staticClass:"block_body"},[n("img",{class:((e={})[t.locale]=!0,e),attrs:{src:"https://cdn.bitkeep.vip/u_b_95224b10-596e-11ec-bdbc-7722494dfa58.png"}}),t._v(" "),n("div",{staticClass:"textBox textPrimary0"},[n("p",[t._v(t._s(t.$t("blindboxInvite.downText")))])]),t._v(" "),n("a",{staticClass:"btn",on:{click:t.back}},[t._v(t._s(t.$t("blindboxInvite.know")))])])],1)}),[],!1,null,null,null),e.default=o.exports}}]);