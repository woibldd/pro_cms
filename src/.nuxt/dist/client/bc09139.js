(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{371:function(n,t,e){"use strict";e.d(t,"a",(function(){return s})),e(60);t=e(20);var o=e(95),r=(t=e.n(o),e(2)),a=e(94),i=(e(92),function(){for(var n,t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];(n=console).log.apply(n,["bit-activity-request:"].concat(e))}),c=t.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});c.interceptors.request.use((function(n){var t,e,o;return i("requestlog:",n),r.a.prototype.$store&&(e=(o=(t=r.a.prototype.$store.state).local).UA,o=o.locale,e.isBitKeep?Object.assign(n.headers,t.local.bitkeep,{language:o}):Object.assign(n.headers,{language:o})),n}),(function(n){return Promise.resolve({status:1})})),c.interceptors.response.use((function(n){return n.data}),(function(n){!function(){for(var n,t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];(n=console).log.apply(n,["bit-activity-response:"].concat(e))}("responselog:",n);var t="网路开了小差";t=(n=Object(a.b)()||{}).t?n.t("base.networkErro"):t;return Promise.resolve({status:1,data:t})}));var s={mBoxList:function(n){return c.get("user/activity/mBoxList",{params:n,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(n){return c.get("user/activity/openMBox",{params:n})},helpMBox:function(n){return c.get("user/activity/helpMBox",{params:n})},userInviteList:function(n){return c.get("user/activity/inviteList",{params:n})},mBoxDetail:function(n){return c.get("user/activity/mBoxDetail",{params:n})},getCbkbSwapInfo:function(n){return c.get("user/cloudwallet/getCbkbSwapInfo",{params:n})},swapBkb:function(n){return c.get("user/cloudwallet/swapBkb",{params:n})},getAirDropCount:function(n){return c.post("user/cloudwallet/getAirDropCount",n)},getAirDrop:function(n){return c.post("user/cloudwallet/getAirDrop",n)},miningInfo:function(n){return c.post("swap/mining/info",n)},historyPhase:function(n){return c.post("swap/mining/historyPhase",n)},receiveAward:function(n){return c.post("swap/mining/receiveAward",n)},getInviteList:function(n){return c.post("user/friendship/getInviteList",n)},certifyFriendship:function(n){return c.post("user/friendship/certifyFriendship",n)},activityDoneRewardList:function(n){return c.post("swap/mining/activityDoneRewardList",n)},poolList:function(n){return c.post("/user/cloudstaking/poolList",n)},myPool:function(n){return c.post("/user/cloudstaking/myPool",n)},stakeHistory:function(n){return c.post("/user/cloudstaking/stakeHistory",n)},receiveStakingReward:function(n){return c.post("/user/cloudstaking/receiveStakingReward",n)},staking:function(n){return c.post("/user/cloudstaking/staking",n)},handleGetToken:function(n){return c.post("/user/cloudstaking/getToken",n)},tradingGetList:function(n){return c.post("/tradeCompetition/getList",n)},tradingWaitClaim:function(n){return c.post("/tradeCompetition/waitClaim",n)},tradingClaim:function(n){return c.post("/tradeCompetition/Claim",n)},tradingSummary:function(n){return c.post("/tradeCompetition/summary",n)},tradingHistory:function(n){return c.post("/tradeCompetition/history",n)}}},534:function(n,t,e){var o=e(568);(o="string"==typeof(o=o.__esModule?o.default:o)?[[n.i,o,""]]:o).locals&&(n.exports=o.locals),(0,e(110).default)("cadfcc3c",o,!0,{sourceMap:!1})},535:function(n,t,e){var o=e(570);(o="string"==typeof(o=o.__esModule?o.default:o)?[[n.i,o,""]]:o).locals&&(n.exports=o.locals),(0,e(110).default)("16886ce6",o,!0,{sourceMap:!1})},567:function(n,t,e){"use strict";e(534)},568:function(n,t,e){(e=e(109)(!1)).push([n.i,".van-popup__close-icon--top-right {\n  top: 0.27rem;\n  right: 0.24rem;\n}\n.van-popup__close-icon--top-right img {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.theme-dark .van-toast {\n  background-color: #dfe0e3;\n  color: #171a26;\n}",""]),n.exports=e},569:function(n,t,e){"use strict";e(535)},570:function(n,t,e){(e=e(109)(!1)).push([n.i,".theme-light .textPrimary0[data-v-22b03018] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-22b03018] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-22b03018] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-22b03018] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-22b03018] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-22b03018] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-22b03018] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-22b03018] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-22b03018] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-22b03018] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-22b03018] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-22b03018] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-22b03018] {\n  background-color: #495BFF;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-22b03018] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-22b03018] {\n  background-color: #1CBDB5;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-22b03018] {\n  background-color: #080D21;\n}\n.theme-light .colorPrimary[data-v-22b03018] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-22b03018] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-22b03018] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-22b03018] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-22b03018] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-22b03018] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-22b03018] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-22b03018] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-22b03018] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-22b03018] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-22b03018] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-22b03018] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-22b03018] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-22b03018] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-22b03018] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-22b03018] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-22b03018] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-22b03018] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-22b03018] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-22b03018] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-22b03018] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-22b03018] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-22b03018] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-22b03018] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-22b03018] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-22b03018] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-22b03018] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-22b03018] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-22b03018] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-22b03018] {\n  background-color: #495BFF;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-22b03018] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-22b03018] {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-22b03018] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-22b03018] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-22b03018] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-22b03018] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-22b03018] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-22b03018] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-22b03018] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-22b03018] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-22b03018] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-22b03018] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-22b03018] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-22b03018] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-22b03018] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-22b03018] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-22b03018] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-22b03018] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-22b03018] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-22b03018] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-22b03018] {\n  background-color: rgba(255,184,0,0.1);\n}\n.title[data-v-22b03018] {\n  margin: 0.37rem 0.43rem;\n  text-align: center;\n  font-size: 0.43rem;\n  font-weight: 500;\n}\n.subTitle[data-v-22b03018] {\n  margin-top: 0.27rem;\n  font-size: 0.37rem;\n  font-weight: normal;\n}\n.setOpactive[data-v-22b03018] {\n  opacity: 0.3;\n}\n.line[data-v-22b03018] {\n  width: 100%;\n  margin-top: 0;\n  height: 0.03rem;\n}\n.content[data-v-22b03018] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  overflow: auto;\n  padding-top: 0.53rem;\n}\n.content .content_invite[data-v-22b03018] {\n  width: 100%;\n}\n.content .content_invite .content_invite_flex[data-v-22b03018] {\n  border-radius: 0.16rem;\n  margin: 0.27rem 0.53rem 0.53rem;\n  padding: 0.27rem;\n}\n.content .content_invite .content_invite_flex .content_invite_flex_cont[data-v-22b03018] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.content .content_invite .content_invite_flex .setMargin[data-v-22b03018] {\n  margin-top: 0.37rem;\n}\n.content .content_invite .content_invite_flex img[data-v-22b03018] {\n  width: 0.43rem;\n  height: 0.43rem;\n  vertical-align: sub;\n}\n.content .content_invite .content_invite_flex span[data-v-22b03018] {\n  display: inline-block;\n  margin-left: 0.13rem;\n  font-size: 0.37rem;\n}\n.content .content_invite .content_invite_flex .invite_number[data-v-22b03018] {\n  font-size: 0.37rem;\n}\n.content img[data-v-22b03018] {\n  width: 1.28rem;\n  height: 1.28rem;\n}\n.content p[data-v-22b03018] {\n  font-family: bitkeep DIN;\n  font-size: 0.64rem;\n  margin: 0.27rem;\n}\n.confirm-bottom[data-v-22b03018] {\n  height: 1.28rem;\n  width: 100%;\n  bottom: 0;\n  z-index: 99;\n  position: fixed;\n  padding: 0.29rem 0 0.91rem;\n}\n.confirm-bottom .swap-btn[data-v-22b03018] {\n  height: 1.33rem;\n  border-radius: 0.27rem;\n  text-align: center;\n  line-height: 1.17rem;\n  border: none;\n  font-weight: 500;\n  font-size: 0.43rem;\n  width: 8rem;\n  left: 50%;\n  color: #fff;\n  transform: translateX(-50%);\n  z-index: 0;\n}",""]),n.exports=e},656:function(n,t,e){"use strict";e.r(t);var o=e(14),r=(e(68),e(70),e(47),e(69),e(20),e(82),e(165)),a=e(371);o={data:function(){return{addAllContent:"",visables:this.show,btnStatus:!1,closeIcon:"https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},watch:{show:function(n){this.visables=n},theme:function(n){this.closeIcon=1==n?"https://cdn.bitkeep.vip/u_b_d71e28c0-4c2d-11ec-ad04-d1b66ed0d35e.png":"https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},props:["show","theme","unclaimReward","sumReward"],mounted:function(){},methods:{swapConfirm:Object(r.b)(Object(o.a)(regeneratorRuntime.mark((function n(){var t,e,o=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(this.unclaimReward+this.sumReward==0)return n.abrupt("return");n.next=2;break;case 2:return this.btnStatus=!0,n.next=5,a.a.receiveAward();case 5:if(t=n.sent,e=t.data,1==t.status)return this.close(),setTimeout((function(){o.btnStatus=!1}),1e3),n.abrupt("return",this.$toast(e));n.next=12;break;case 12:this.$toast(e),this.$emit("close",!0),setTimeout((function(){o.btnStatus=!1}),1e3);case 15:case"end":return n.stop()}}),n,this)})))),close:function(){this.$emit("close",!1)},milliFormat:function(n){return n&&n.toString().replace(/^\d+/g,(function(n){return n.replace(/(?=(?!^)(\d{3})+$)/g,",")}))}}},e(567),e(569),e=e(79),o=Object(e.a)(o,(function(){var n=this,t=n.$createElement;return(t=n._self._c||t)("van-popup",{staticClass:"colorBackground1",style:{height:"54%",overflow:"hidden"},attrs:{closeable:"","close-icon":n.closeIcon,round:"",position:"bottom"},on:{"click-overlay":n.close,"click-close-icon":n.close},model:{value:n.visables,callback:function(t){n.visables=t},expression:"visables"}},[t("div",{staticClass:"title"},[t("div",{staticClass:"textPrimary0"},[n._v(n._s(n.$t("mining.ClaimRewards")))]),n._v(" "),t("div",{staticClass:"textPrimary0 subTitle"},[n._v(n._s(n.$t("mining.ClaimRewardsub")))])]),n._v(" "),t("div",{staticClass:"line colorLine"}),n._v(" "),t("div",{staticClass:"content"},[t("img",{staticClass:"logo",attrs:{src:"https://cdn.bitkeep.vip/u_b_7d8ec4f0-4b78-11ec-9826-e3fc5958ff1e.png",alt:""}}),n._v(" "),t("p",{staticClass:"textPrimary0"},[n._v(n._s(n.milliFormat(n.unclaimReward+n.sumReward))+" BKB")]),n._v(" "),t("div",{staticClass:"content_invite"},[t("div",{staticClass:"content_invite_flex colorBackground3"},[t("div",{staticClass:"content_invite_flex_cont"},[t("div",[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e7b6fe30-5427-11ec-a16d-43771b230a03.png",alt:""}}),n._v(" "),t("span",{staticClass:"textSecond1"},[n._v(n._s(n.$t("mining.tradingRewards")))])]),n._v(" "),t("div",{staticClass:"invite_number textPrimary0 setFontFamily"},[n._v(n._s(n.milliFormat(n.unclaimReward))+" BKB")])]),n._v(" "),t("div",{staticClass:"content_invite_flex_cont setMargin"},[t("div",[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e7b661f0-5427-11ec-a16d-43771b230a03.png",alt:""}}),n._v(" "),t("span",{staticClass:"textSecond1"},[n._v(n._s(n.$t("mining.invitationRewards")))])]),n._v(" "),t("div",{staticClass:"invite_number textPrimary0 setFontFamily"},[n._v(n._s(n.milliFormat(n.sumReward))+" BKB")])])])])]),n._v(" "),t("div",{staticClass:"confirm-bottom"},[t("van-button",{staticClass:"swap-btn colorBackgroundPrimary",class:n.unclaimReward+n.sumReward==0?"setOpactive":"",attrs:{disabled:n.btnStatus},on:{click:n.swapConfirm}},[n._v(n._s(n.$t("mining.confirm")))])],1)])}),[],!1,null,"22b03018",null);t.default=o.exports}}]);