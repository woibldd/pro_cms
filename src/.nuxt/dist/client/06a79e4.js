(window.webpackJsonp=window.webpackJsonp||[]).push([[39,16,18],{438:function(e,n,t){var o=t(441);(o="string"==typeof(o=o.__esModule?o.default:o)?[[e.i,o,""]]:o).locals&&(e.exports=o.locals),(0,t(51).default)("640c92ec",o,!0,{sourceMap:!1})},440:function(e,n,t){"use strict";t(438)},441:function(e,n,t){(t=t(50)(!1)).push([e.i,".header .header_wapper[data-v-3521874b] {\n  width: 100vw;\n}\n.fixed[data-v-3521874b] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99;\n}",""]),e.exports=t},443:function(e,n,t){"use strict";t.r(n);var o=t(4),r=(t(52),{name:"Header",props:{fixed:{type:Boolean,default:function(){return!0}}},computed:{},data:function(){return{info:{}}},updated:function(){},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$nextTick();case 2:case"end":return n.stop()}}),n)})))()},methods:{onChange:function(){},onclose:function(){}},filters:{}});t(440),t=t(29),r=Object(t.a)(r,(function(){var e=this,n=e.$createElement;return(n=e._self._c||n)("div",{class:{fixed:e.fixed,header:!0},attrs:{id:"Header"}},[n("div",{staticClass:"header_wapper"},[e._t("default")],2)])}),[],!1,null,"3521874b",null);n.default=r.exports},445:function(e,n,t){"use strict";t.r(n),t.d(n,"Header",(function(){return o}));var o=(t=t(443)).default;n.default={Header:t.default}},727:function(e,n,t){var o=t(840);(o="string"==typeof(o=o.__esModule?o.default:o)?[[e.i,o,""]]:o).locals&&(e.exports=o.locals),(0,t(51).default)("ca68d248",o,!0,{sourceMap:!1})},836:function(e,n,t){e.exports=t.p+"img/logo@2.ca1f304.png"},837:function(e,n,t){e.exports=t.p+"img/download@2.e06d33c.png"},838:function(e,n,t){e.exports=t.p+"img/download@2.en.1036ffc.png"},839:function(e,n,t){"use strict";t(727)},840:function(e,n,t){(t=t(50)(!1)).push([e.i,"#download {\n  font-family: PingFang SC;\n  font-style: normal;\n  min-height: 100vh;\n  background: #ffffff;\n}\n#download .blindbox_header {\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  padding: 0.4rem;\n  box-sizing: border-box;\n  align-items: center;\n}\n#download .blindbox_header .logo {\n  width: 2.4rem;\n  height: 0.64rem;\n  display: flex;\n}\n#download .blindbox_header .logo img {\n  width: 100%;\n  height: 100%;\n}\n#download .blindbox_header .header_back {\n  position: absolute;\n  left: 0.4rem;\n}\n#download .blindbox_header .header_back>div {\n  display: flex;\n  justify-items: center;\n}\n#download .blindbox_header .header_back>div img {\n  width: 0.85rem;\n  height: 0.85rem;\n}\n#download .block_body {\n  padding-top: 2.56rem;\n  text-align: center;\n}\n#download .block_body img {\n  width: 6rem;\n  height: 5.79rem;\n}\n#download .block_body img.en {\n  width: 8.37rem;\n  height: 6.19rem;\n}\n#download .btn {\n  margin: 3.12rem auto 0;\n  background: linear-gradient(122.71deg, #5aebff 3.38%, #6d39ff 92.57%),#c4c4c4;\n  border-radius: 2.67rem;\n  width: 6rem;\n  height: 1.33rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 2.67rem;\n  font-weight: 600;\n  font-size: 0.48rem;\n  line-height: 0.48rem;\n  color: #ffffff;\n}\n#download .btn:active {\n  opacity: 0.8;\n}",""]),e.exports=t},919:function(e,n,t){"use strict";t.r(n),t(63),t(43),t(62),t(87),t(54),t(88);var o=t(38),r=t(445),i=t(97);function a(e,n){var t,o=Object.keys(e);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(e),n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)),o}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){Object(o.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}r={name:"Download",components:{Header:r.Header},computed:d(d({},Object(i.b)(["local"])),{},{isBitKeep:function(){return this.local.UA.isBitKeep},locale:function(){return this.local.locale}}),mounted:function(){this.isBitKeep&&BitKeepInvoke.setTitle("zh"==locale?"下载 bitKeep":"Download bitKeep")},methods:{back:function(){this.$router.back()}}},t(839),i=t(29),r=Object(i.a)(r,(function(){var e,n=this,o=n.$createElement;return(o=n._self._c||o)("div",{attrs:{id:"download"}},[o("Header",[o("div",{staticClass:"blindbox_header"},[o("span",{staticClass:"logo"},[o("img",{attrs:{src:t(836)}})])])]),n._v(" "),o("div",{staticClass:"block_body"},["zh"==n.locale?o("img",{class:((e={})[n.locale]=!0,e),attrs:{src:t(837)}}):o("img",{class:((e={})[n.locale]=!0,e),attrs:{src:t(838)}}),n._v(" "),o("a",{staticClass:"btn",attrs:{href:"https://bitkeep.org"}},[n._v(n._s(n.$t("ActivityBlindbox.button.Downloadnow")))])])],1)}),[],!1,null,null,null),n.default=r.exports}}]);