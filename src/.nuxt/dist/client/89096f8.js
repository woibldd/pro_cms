(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{369:function(e,n,a){"use strict";a.d(n,"a",(function(){return d})),a(60);n=a(19);var t=a(96),o=(n=a.n(t),a(1)),r=a(95),c=(a(92),function(){for(var e,n=arguments.length,a=new Array(n),t=0;t<n;t++)a[t]=arguments[t];(e=console).log.apply(e,["bit-activity-request:"].concat(a))}),i=n.a.create({baseURL:"/",timeout:6e4,headers:{token:"0xddb42C195d0e1670AeC3f085131364e6681B9e3C",language:"zh",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});i.interceptors.request.use((function(e){var n,a,t;return c("requestlog:",e),o.a.prototype.$store&&(a=(t=(n=o.a.prototype.$store.state).local).UA,t=t.locale,a.isBitKeep?Object.assign(e.headers,n.local.bitkeep,{language:t}):Object.assign(e.headers,{language:t})),e}),(function(e){return Promise.resolve({status:1})})),i.interceptors.response.use((function(e){return e.data}),(function(e){!function(){for(var e,n=arguments.length,a=new Array(n),t=0;t<n;t++)a[t]=arguments[t];(e=console).log.apply(e,["bit-activity-response:"].concat(a))}("responselog:",e);var n="网路开了小差";n=(e=Object(r.b)()||{}).t?e.t("base.networkErro"):n;return Promise.resolve({status:1,data:n})}));var d={mBoxList:function(e){return i.get("user/activity/mBoxList",{params:e,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(e){return i.get("user/activity/openMBox",{params:e})},helpMBox:function(e){return i.get("user/activity/helpMBox",{params:e})},userInviteList:function(e){return i.get("user/activity/inviteList",{params:e})},mBoxDetail:function(e){return i.get("user/activity/mBoxDetail",{params:e})},getCbkbSwapInfo:function(e){return i.get("user/cloudwallet/getCbkbSwapInfo",{params:e})},swapBkb:function(e){return i.get("user/cloudwallet/swapBkb",{params:e})},getAirDropCount:function(e){return i.post("user/cloudwallet/getAirDropCount",e)},getAirDrop:function(e){return i.post("user/cloudwallet/getAirDrop",e)},miningInfo:function(e){return i.post("swap/mining/info",e)},historyPhase:function(e){return i.post("swap/mining/historyPhase",e)},receiveAward:function(e){return i.post("swap/mining/receiveAward",e)},getInviteList:function(e){return i.post("friendship/getInviteList",e)},certifyFriendship:function(e){return i.post("friendship/certifyFriendship",e)}}},385:function(e,n,a){var t=a(403);(t="string"==typeof(t=t.__esModule?t.default:t)?[[e.i,t,""]]:t).locals&&(e.exports=t.locals),(0,a(110).default)("cadfcc3c",t,!0,{sourceMap:!1})},386:function(e,n,a){var t=a(405);(t="string"==typeof(t=t.__esModule?t.default:t)?[[e.i,t,""]]:t).locals&&(e.exports=t.locals),(0,a(110).default)("b2f45440",t,!0,{sourceMap:!1})},402:function(e,n,a){"use strict";a(385)},403:function(e,n,a){(a=a(109)(!1)).push([e.i,".van-popup__close-icon--top-right {\n  top: 0.27rem;\n  right: 0.24rem;\n}\n.van-popup__close-icon--top-right img {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.theme-dark .van-toast {\n  background-color: #DFE0E3;\n  color: #171A26;\n}",""]),e.exports=a},404:function(e,n,a){"use strict";a(386)},405:function(e,n,a){(a=a(109)(!1)).push([e.i,".theme-light .textPrimary0[data-v-3a3c4eda] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-3a3c4eda] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-3a3c4eda] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-3a3c4eda] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-3a3c4eda] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-3a3c4eda] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorBackground0[data-v-3a3c4eda] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-3a3c4eda] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-3a3c4eda] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-3a3c4eda] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-3a3c4eda] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-3a3c4eda] {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary[data-v-3a3c4eda] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-3a3c4eda] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-3a3c4eda] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-3a3c4eda] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-3a3c4eda] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-3a3c4eda] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-3a3c4eda] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-3a3c4eda] {\n  color: #F04E98;\n}\n.theme-light .colorBlack[data-v-3a3c4eda] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-3a3c4eda] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-3a3c4eda] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-3a3c4eda] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-3a3c4eda] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-3a3c4eda] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-3a3c4eda] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-3a3c4eda] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0[data-v-3a3c4eda] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-3a3c4eda] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-3a3c4eda] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-3a3c4eda] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-3a3c4eda] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-3a3c4eda] {\n  background-color: #1F212E;\n}\n.theme-dark .colorBackground0[data-v-3a3c4eda] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-3a3c4eda] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-3a3c4eda] {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3[data-v-3a3c4eda] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-3a3c4eda] {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary[data-v-3a3c4eda] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-3a3c4eda] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-3a3c4eda] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-3a3c4eda] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-3a3c4eda] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-3a3c4eda] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-3a3c4eda] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-3a3c4eda] {\n  color: #F04E98;\n}\n.theme-dark .colorBlack[data-v-3a3c4eda] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-3a3c4eda] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-3a3c4eda] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-3a3c4eda] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-3a3c4eda] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-3a3c4eda] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-3a3c4eda] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-3a3c4eda] {\n  color: rgba(47,128,237,0.1);\n}\n.title[data-v-3a3c4eda] {\n  margin: 0.37rem 0.43rem;\n  text-align: center;\n  font-size: 0.43rem;\n  font-weight: 500;\n}\n.setOpactive[data-v-3a3c4eda] {\n  opacity: 0.3;\n}\n.line[data-v-3a3c4eda] {\n  width: 100%;\n  margin-top: 0;\n  height: 0.03rem;\n}\n.content[data-v-3a3c4eda] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 60%;\n  overflow: auto;\n}\n.content img[data-v-3a3c4eda] {\n  width: 1.28rem;\n  height: 1.28rem;\n}\n.content p[data-v-3a3c4eda] {\n  font-family: bitkeep DIN;\n  font-size: 0.64rem;\n  margin: 0.27rem;\n}\n.confirm-bottom[data-v-3a3c4eda] {\n  height: 1.28rem;\n  width: 100%;\n  bottom: 0;\n  z-index: 99;\n  position: fixed;\n  padding: 0.29rem 0 0.91rem;\n}\n.confirm-bottom .swap-btn[data-v-3a3c4eda] {\n  height: 1.33rem;\n  border-radius: 0.27rem;\n  text-align: center;\n  line-height: 1.17rem;\n  border: none;\n  font-weight: 500;\n  font-size: 0.43rem;\n  width: 8rem;\n  left: 50%;\n  color: #fff;\n  transform: translateX(-50%);\n  z-index: 0;\n}",""]),e.exports=a},471:function(e,n,a){"use strict";a.r(n);var t=a(14),o=(a(68),a(70),a(165)),r=a(369);t={data:function(){return{addAllContent:"",visables:this.show,btnStatus:!1,closeIcon:"http://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},watch:{show:function(e){this.visables=e},theme:function(e){this.closeIcon=1==e?"http://cdn.bitkeep.vip/u_b_d71e28c0-4c2d-11ec-ad04-d1b66ed0d35e.png":"http://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},props:["show","theme","unclaimReward"],methods:{swapConfirm:Object(o.b)(Object(t.a)(regeneratorRuntime.mark((function e(){var n,a,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0==this.unclaimReward)return e.abrupt("return");e.next=2;break;case 2:return this.btnStatus=!0,e.next=5,r.a.receiveAward();case 5:if(n=e.sent,a=n.data,1==n.status)return this.close(),e.abrupt("return",this.$toast(a));e.next=11;break;case 11:this.$toast(a),this.$emit("close",!0),setTimeout((function(){t.btnStatus=!1}),1e3);case 14:case"end":return e.stop()}}),e,this)})))),close:function(){this.$emit("close",!1)}}},a(402),a(404),a=a(79),t=Object(a.a)(t,(function(){var e=this,n=e.$createElement;return(n=e._self._c||n)("van-popup",{staticClass:"colorBackground1",style:{height:"45%",overflow:"hidden"},attrs:{closeable:"","close-icon":e.closeIcon,round:"",position:"bottom"},on:{"click-overlay":e.close,"click-close-icon":e.close},model:{value:e.visables,callback:function(n){e.visables=n},expression:"visables"}},[n("div",{staticClass:"title"},[n("p",{staticClass:"textPrimary0"},[e._v(e._s(e.$t("mining.ClaimRewards")))])]),e._v(" "),n("div",{staticClass:"line colorLine"}),e._v(" "),n("div",{staticClass:"content"},[n("img",{staticClass:"logo",attrs:{src:"http://cdn.bitkeep.vip/u_b_7d8ec4f0-4b78-11ec-9826-e3fc5958ff1e.png",alt:""}}),e._v(" "),n("p",{staticClass:"textPrimary0"},[e._v(e._s(e.unclaimReward)+" BKB")])]),e._v(" "),n("div",{staticClass:"confirm-bottom"},[n("van-button",{staticClass:"swap-btn colorBackgroundPrimary",class:0==e.unclaimReward?"setOpactive":"",attrs:{disabled:e.btnStatus},on:{click:e.swapConfirm}},[e._v(e._s(e.$t("mining.confirm")))])],1)])}),[],!1,null,"3a3c4eda",null);n.default=t.exports}}]);