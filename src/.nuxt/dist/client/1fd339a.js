(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{367:function(n,a,t){"use strict";t.d(a,"a",(function(){return c}));a=t(18),a=t(93),a=t.n(a);var o=t(0),e=t(92),r=a.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"zh",currency:"",brand:"",os:"",package:"",clientversion:"",im:""}});r.interceptors.request.use((function(n){var a,t,e;return o.a.prototype.$store&&(t=(e=(a=o.a.prototype.$store.state).local).UA,e=e.locale,t.isBitKeep?Object.assign(n.headers,a.local.bitkeep,{language:e}):Object.assign(n.headers,{language:e})),n}),(function(n){return Promise.resolve({status:1})})),r.interceptors.response.use((function(n){return n.data}),(function(n){var a="网路开了小差",t=Object(e.b)()||{};a=t.t?t.t("base.networkErro"):a;return Promise.resolve({status:1,data:a})}));var c={mBoxList:function(n){return r.get("user/activity/mBoxList",{params:n,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(n){return r.get("user/activity/openMBox",{params:n})},helpMBox:function(n){return r.get("user/activity/helpMBox",{params:n})},mBoxDetail:function(n){return r.get("user/activity/mBoxDetail",{params:n})},getCbkbSwapInfo:function(n){return r.get("user/cloudwallet/getCbkbSwapInfo",{params:n})},swapBkb:function(n){return r.get("user/cloudwallet/swapBkb",{params:n})},getAirDropCount:function(n){return r.post("user/cloudwallet/getAirDropCount",n)},getAirDrop:function(n){return r.post("user/cloudwallet/getAirDrop",n)},miningInfo:function(n){return r.post("mining/info",n)},historyPhase:function(n){return r.post("/mining/historyPhase",n)},receiveAward:function(n){return r.post("/mining/receiveAward",n)}}},379:function(n,a,t){var o=t(396);(o="string"==typeof(o=o.__esModule?o.default:o)?[[n.i,o,""]]:o).locals&&(n.exports=o.locals),(0,t(109).default)("cadfcc3c",o,!0,{sourceMap:!1})},380:function(n,a,t){var o=t(398);(o="string"==typeof(o=o.__esModule?o.default:o)?[[n.i,o,""]]:o).locals&&(n.exports=o.locals),(0,t(109).default)("8940f716",o,!0,{sourceMap:!1})},395:function(n,a,t){"use strict";t(379)},396:function(n,a,t){(t=t(108)(!1)).push([n.i,".van-popup__close-icon--top-right {\n  top: 0.27rem;\n  right: 0.24rem;\n}\n.van-popup__close-icon--top-right img {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.theme-dark .van-toast {\n  background-color: #DFE0E3;\n  color: #171A26;\n}",""]),n.exports=t},397:function(n,a,t){"use strict";t(380)},398:function(n,a,t){(t=t(108)(!1)).push([n.i,".theme-light .textPrimary0[data-v-cf5aa762] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-cf5aa762] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-cf5aa762] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-cf5aa762] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-cf5aa762] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-cf5aa762] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorBackground0[data-v-cf5aa762] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-cf5aa762] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-cf5aa762] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-cf5aa762] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundPrimary[data-v-cf5aa762] {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary[data-v-cf5aa762] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-cf5aa762] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-cf5aa762] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-cf5aa762] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-cf5aa762] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-cf5aa762] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-cf5aa762] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-cf5aa762] {\n  color: #F04E98;\n}\n.theme-light .colorBlack[data-v-cf5aa762] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-cf5aa762] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-cf5aa762] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-cf5aa762] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-cf5aa762] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-cf5aa762] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-cf5aa762] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-cf5aa762] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0[data-v-cf5aa762] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-cf5aa762] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-cf5aa762] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-cf5aa762] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-cf5aa762] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-cf5aa762] {\n  background-color: #1F212E;\n}\n.theme-dark .colorBackground0[data-v-cf5aa762] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-cf5aa762] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-cf5aa762] {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3[data-v-cf5aa762] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-cf5aa762] {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary[data-v-cf5aa762] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-cf5aa762] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-cf5aa762] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-cf5aa762] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-cf5aa762] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-cf5aa762] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-cf5aa762] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-cf5aa762] {\n  color: #F04E98;\n}\n.theme-dark .colorBlack[data-v-cf5aa762] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-cf5aa762] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-cf5aa762] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-cf5aa762] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-cf5aa762] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-cf5aa762] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-cf5aa762] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-cf5aa762] {\n  color: rgba(47,128,237,0.1);\n}\n.title[data-v-cf5aa762] {\n  margin: 0.37rem 0.43rem;\n  text-align: center;\n  font-size: 0.43rem;\n  font-weight: 500;\n}\n.line[data-v-cf5aa762] {\n  width: 100%;\n  margin-top: 0;\n  height: 0.03rem;\n}\n.content[data-v-cf5aa762] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 60%;\n  overflow: auto;\n}\n.content img[data-v-cf5aa762] {\n  width: 1.28rem;\n  height: 1.28rem;\n}\n.content p[data-v-cf5aa762] {\n  font-family: bitkeep DIN;\n  font-size: 0.64rem;\n  margin: 0.27rem;\n}\n.confirm-bottom[data-v-cf5aa762] {\n  height: 1.28rem;\n  width: 100%;\n  bottom: 0;\n  z-index: 99;\n  position: fixed;\n  padding: 0.29rem 0 0.91rem;\n}\n.confirm-bottom .swap-btn[data-v-cf5aa762] {\n  height: 1.33rem;\n  border-radius: 0.27rem;\n  text-align: center;\n  line-height: 1.17rem;\n  border: none;\n  font-weight: 500;\n  font-size: 0.43rem;\n  width: 8rem;\n  left: 50%;\n  color: #fff;\n  transform: translateX(-50%);\n  z-index: 0;\n}",""]),n.exports=t},454:function(n,a,t){"use strict";t.r(a);var o=t(13),e=(t(67),t(164)),r=t(367);o={data:function(){return{addAllContent:"",visables:this.show,closeIcon:"http://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},watch:{show:function(n){this.visables=n},theme:function(n){this.closeIcon=1==n?"http://cdn.bitkeep.vip/u_b_d71e28c0-4c2d-11ec-ad04-d1b66ed0d35e.png":"http://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},props:["show","theme","unclaimReward"],methods:{swapConfirm:Object(e.b)(Object(o.a)(regeneratorRuntime.mark((function n(){var a,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.receiveAward();case 2:if(a=n.sent,t=a.data,1==a.status)return this.$emit("close",!1),n.abrupt("return",this.$toast(t));n.next=8;break;case 8:this.$toast(t),this.$emit("close",!0);case 10:case"end":return n.stop()}}),n,this)})))),close:function(){this.$emit("close",!1)}}},t(395),t(397),t=t(77),o=Object(t.a)(o,(function(){var a=this,n=a.$createElement;return(n=a._self._c||n)("van-popup",{staticClass:"colorBackground1",style:{height:"45%",overflow:"hidden"},attrs:{closeable:"","close-icon":a.closeIcon,round:"",position:"bottom"},on:{"click-overlay":a.close,"click-close-icon":a.close},model:{value:a.visables,callback:function(n){a.visables=n},expression:"visables"}},[n("div",{staticClass:"title"},[n("p",{staticClass:"textPrimary0"},[a._v(a._s(a.$t("mining.ClaimRewards")))])]),a._v(" "),n("div",{staticClass:"line colorLine"}),a._v(" "),n("div",{staticClass:"content"},[n("img",{staticClass:"logo",attrs:{src:"http://cdn.bitkeep.vip/u_b_7d8ec4f0-4b78-11ec-9826-e3fc5958ff1e.png",alt:""}}),a._v(" "),n("p",{staticClass:"textPrimary0"},[a._v(a._s(a.unclaimReward)+" BKB")])]),a._v(" "),n("div",{staticClass:"confirm-bottom"},[n("van-button",{staticClass:"swap-btn colorBackgroundPrimary",on:{click:a.swapConfirm}},[a._v(a._s(a.$t("mining.confirm")))])],1)])}),[],!1,null,"cf5aa762",null);a.default=o.exports}}]);