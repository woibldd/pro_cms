(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{373:function(n,e,t){"use strict";t.d(e,"a",(function(){return l})),t(60);e=t(20);var o=t(94),c=(e=t.n(o),t(2)),r=t(93),a=(t(92),function(){for(var n,e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];(n=console).log.apply(n,["bit-activity-request:"].concat(t))}),s=e.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});s.interceptors.request.use((function(n){var e,t,o;return a("requestlog:",n),c.a.prototype.$store&&(t=(o=(e=c.a.prototype.$store.state).local).UA,o=o.locale,t.isBitKeep?Object.assign(n.headers,e.local.bitkeep,{language:o}):Object.assign(n.headers,{language:o})),n}),(function(n){return Promise.resolve({status:1})})),s.interceptors.response.use((function(n){return n.data}),(function(n){!function(){for(var n,e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];(n=console).log.apply(n,["bit-activity-response:"].concat(t))}("responselog:",n);var e="网路开了小差";e=(n=Object(r.b)()||{}).t?n.t("base.networkErro"):e;return Promise.resolve({status:1,data:e})}));var l={mBoxList:function(n){return s.get("user/activity/mBoxList",{params:n,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(n){return s.get("user/activity/openMBox",{params:n})},helpMBox:function(n){return s.get("user/activity/helpMBox",{params:n})},userInviteList:function(n){return s.get("user/activity/inviteList",{params:n})},mBoxDetail:function(n){return s.get("user/activity/mBoxDetail",{params:n})},getCbkbSwapInfo:function(n){return s.get("user/cloudwallet/getCbkbSwapInfo",{params:n})},swapBkb:function(n){return s.get("user/cloudwallet/swapBkb",{params:n})},getAirDropCount:function(n){return s.post("user/cloudwallet/getAirDropCount",n)},getAirDrop:function(n){return s.post("user/cloudwallet/getAirDrop",n)},miningInfo:function(n){return s.post("swap/mining/info",n)},historyPhase:function(n){return s.post("swap/mining/historyPhase",n)},receiveAward:function(n){return s.post("swap/mining/receiveAward",n)},getInviteList:function(n){return s.post("user/friendship/getInviteList",n)},certifyFriendship:function(n){return s.post("user/friendship/certifyFriendship",n)},activityDoneRewardList:function(n){return s.post("swap/mining/activityDoneRewardList",n)},poolList:function(n){return s.post("/user/cloudstaking/poolList",n)},myPool:function(n){return s.post("/user/cloudstaking/myPool",n)},stakeHistory:function(n){return s.post("/user/cloudstaking/stakeHistory",n)},receiveStakingReward:function(n){return s.post("/user/cloudstaking/receiveStakingReward",n)},staking:function(n){return s.post("/user/cloudstaking/staking",n)},handleGetToken:function(n){return s.post("/user/cloudstaking/getToken",n)},tradingGetList:function(n){return s.post("swap/tradeCompetition/getList",n)},tradingWaitClaim:function(n){return s.post("swap/tradeCompetition/waitClaim",n)},tradingClaim:function(n){return s.post("swap/tradeCompetition/claim",n)},tradingSummary:function(n){return s.post("swap/tradeCompetition/summary",n)},tradingHistory:function(n){return s.post("swap/tradeCompetition/history",n)},welfareSignIn:function(n){return s.post("user/welfare/signIn",n)},getRewardDetail:function(n){return s.post("user/welfare/getRewardDetail",n)},getSignInDetailByUser:function(n){return s.post("user/welfare/getSignInDetailByUser",n)},getRewardResult:function(n){return s.post("user/welfare/getRewardResult",n)},pushPapersIn:function(n){return s.post("user/welfare/pushPapersIn",n)},getJoinTeleJob:function(n){return s.post("user/welfare/getJoinTeleJob",n)},getFirstSwapJob:function(n){return s.post("user/welfare/getFirstSwapJob",n)},getFirst50UJob:function(n){return s.post("user/welfare/getFirst50UJob",n)},newUserRewardJobs:function(n){return s.post("user/welfare/newUserRewardJobs",n)}}},535:function(n,e,t){var o=t(569);(o="string"==typeof(o=o.__esModule?o.default:o)?[[n.i,o,""]]:o).locals&&(n.exports=o.locals),(0,t(110).default)("cadfcc3c",o,!0,{sourceMap:!1})},536:function(n,e,t){var o=t(571);(o="string"==typeof(o=o.__esModule?o.default:o)?[[n.i,o,""]]:o).locals&&(n.exports=o.locals),(0,t(110).default)("444ed4db",o,!0,{sourceMap:!1})},568:function(n,e,t){"use strict";t(535)},569:function(n,e,t){(t=t(109)(!1)).push([n.i,".van-popup__close-icon--top-right {\n  top: 0.27rem;\n  right: 0.24rem;\n}\n.van-popup__close-icon--top-right img {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.theme-dark .van-toast {\n  background-color: #dfe0e3;\n  color: #171a26;\n}",""]),n.exports=t},570:function(n,e,t){"use strict";t(536)},571:function(n,e,t){(t=t(109)(!1)).push([n.i,".theme-light .textPrimary0[data-v-c8495cfe] {\n  color: #0E0E0E;\n}\n.theme-light .textSecond1[data-v-c8495cfe] {\n  color: #515556;\n}\n.theme-light .textSecond2[data-v-c8495cfe] {\n  color: #919899;\n}\n.theme-light .textSecond3[data-v-c8495cfe] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-c8495cfe] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-c8495cfe] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-c8495cfe] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-c8495cfe] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-c8495cfe] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-c8495cfe] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-c8495cfe] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-c8495cfe] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-c8495cfe] {\n  background-color: #7524f9;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-c8495cfe] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-c8495cfe] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-c8495cfe] {\n  background-color: #0E0E0E;\n}\n.theme-light .colorPrimary[data-v-c8495cfe] {\n  color: #7524f9;\n}\n.theme-light .colorSecond01[data-v-c8495cfe] {\n  color: #2AC8DD;\n}\n.theme-light .backgroundSecond01[data-v-c8495cfe] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorSecond02[data-v-c8495cfe] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-c8495cfe] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-c8495cfe] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-c8495cfe] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-c8495cfe] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-c8495cfe] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-c8495cfe] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-c8495cfe] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-c8495cfe] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-c8495cfe] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-c8495cfe] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-c8495cfe] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-c8495cfe] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-c8495cfe] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-c8495cfe] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-c8495cfe] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-c8495cfe] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-c8495cfe] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-c8495cfe] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-c8495cfe] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-c8495cfe] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-c8495cfe] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-c8495cfe] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-c8495cfe] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-c8495cfe] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-c8495cfe] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-c8495cfe] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-c8495cfe] {\n  background-color: #7524f9;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-c8495cfe] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-c8495cfe] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-c8495cfe] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-c8495cfe] {\n  color: #7524f9;\n}\n.theme-dark .colorSecond01[data-v-c8495cfe] {\n  color: #2AC8DD;\n}\n.theme-dark .backgroundSecond01[data-v-c8495cfe] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorSecond02[data-v-c8495cfe] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-c8495cfe] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-c8495cfe] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-c8495cfe] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-c8495cfe] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-c8495cfe] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-c8495cfe] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-c8495cfe] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-c8495cfe] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-c8495cfe] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-c8495cfe] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-c8495cfe] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-c8495cfe] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-c8495cfe] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-c8495cfe] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-c8495cfe] {\n  background-color: rgba(255,184,0,0.1);\n}\n.title[data-v-c8495cfe] {\n  margin: 0.37rem 0.43rem;\n  text-align: center;\n  font-size: 0.43rem;\n  font-weight: 500;\n}\n.subTitle[data-v-c8495cfe] {\n  margin-top: 0.27rem;\n  font-size: 0.37rem;\n  font-weight: normal;\n}\n.setOpactive[data-v-c8495cfe] {\n  opacity: 0.3;\n}\n.line[data-v-c8495cfe] {\n  width: 100%;\n  margin-top: 0;\n  height: 0.03rem;\n}\n.content[data-v-c8495cfe] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  overflow: auto;\n  padding-top: 0.53rem;\n}\n.content .content_invite[data-v-c8495cfe] {\n  width: 100%;\n}\n.content .content_invite .content_invite_flex[data-v-c8495cfe] {\n  border-radius: 0.16rem;\n  margin: 0.27rem 0.53rem 0.53rem;\n  padding: 0.27rem;\n}\n.content .content_invite .content_invite_flex .content_invite_flex_cont[data-v-c8495cfe] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.content .content_invite .content_invite_flex .setMargin[data-v-c8495cfe] {\n  margin-top: 0.37rem;\n}\n.content .content_invite .content_invite_flex img[data-v-c8495cfe] {\n  width: 0.43rem;\n  height: 0.43rem;\n  vertical-align: sub;\n}\n.content .content_invite .content_invite_flex span[data-v-c8495cfe] {\n  display: inline-block;\n  margin-left: 0.13rem;\n  font-size: 0.37rem;\n}\n.content .content_invite .content_invite_flex .invite_number[data-v-c8495cfe] {\n  font-size: 0.37rem;\n}\n.content img[data-v-c8495cfe] {\n  width: 1.28rem;\n  height: 1.28rem;\n}\n.content p[data-v-c8495cfe] {\n  font-family: bitkeep DIN;\n  font-size: 0.64rem;\n  margin: 0.27rem;\n}\n.confirm-bottom[data-v-c8495cfe] {\n  height: 1.28rem;\n  width: 100%;\n  bottom: 0;\n  z-index: 99;\n  position: fixed;\n  padding: 0.29rem 0 0.91rem;\n}\n.confirm-bottom .swap-btn[data-v-c8495cfe] {\n  height: 1.33rem;\n  border-radius: 0.27rem;\n  text-align: center;\n  line-height: 1.17rem;\n  border: none;\n  font-weight: 500;\n  font-size: 0.43rem;\n  width: 8rem;\n  left: 50%;\n  color: #fff;\n  transform: translateX(-50%);\n  z-index: 0;\n}",""]),n.exports=t},662:function(n,e,t){"use strict";t.r(e);var o=t(14),c=(t(68),t(70),t(47),t(69),t(20),t(82),t(165)),r=t(373);o={data:function(){return{addAllContent:"",visables:this.show,btnStatus:!1,closeIcon:"https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},watch:{show:function(n){this.visables=n},theme:function(n){this.closeIcon=1==n?"https://cdn.bitkeep.vip/u_b_d71e28c0-4c2d-11ec-ad04-d1b66ed0d35e.png":"https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},props:["show","theme","unclaimReward","sumReward"],mounted:function(){},methods:{swapConfirm:Object(c.b)(Object(o.a)(regeneratorRuntime.mark((function n(){var e,t,o=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(this.unclaimReward+this.sumReward==0)return n.abrupt("return");n.next=2;break;case 2:return this.btnStatus=!0,n.next=5,r.a.receiveAward();case 5:if(e=n.sent,t=e.data,1==e.status)return this.close(),setTimeout((function(){o.btnStatus=!1}),1e3),n.abrupt("return",this.$toast(t));n.next=12;break;case 12:this.$toast(t),this.$emit("close",!0),setTimeout((function(){o.btnStatus=!1}),1e3);case 15:case"end":return n.stop()}}),n,this)})))),close:function(){this.$emit("close",!1)},milliFormat:function(n){return n&&n.toString().replace(/^\d+/g,(function(n){return n.replace(/(?=(?!^)(\d{3})+$)/g,",")}))}}},t(568),t(570),t=t(79),o=Object(t.a)(o,(function(){var n=this,e=n.$createElement;return(e=n._self._c||e)("van-popup",{staticClass:"colorBackground1",style:{height:"54%",overflow:"hidden"},attrs:{closeable:"","close-icon":n.closeIcon,round:"",position:"bottom"},on:{"click-overlay":n.close,"click-close-icon":n.close},model:{value:n.visables,callback:function(e){n.visables=e},expression:"visables"}},[e("div",{staticClass:"title"},[e("div",{staticClass:"textPrimary0"},[n._v(n._s(n.$t("mining.ClaimRewards")))]),n._v(" "),e("div",{staticClass:"textPrimary0 subTitle"},[n._v(n._s(n.$t("mining.ClaimRewardsub")))])]),n._v(" "),e("div",{staticClass:"line colorLine"}),n._v(" "),e("div",{staticClass:"content"},[e("img",{staticClass:"logo",attrs:{src:"https://cdn.bitkeep.vip/u_b_27f9ea80-a03a-11ec-ad8b-9ff4f858e021.png",alt:""}}),n._v(" "),e("p",{staticClass:"textPrimary0"},[n._v(n._s(n.milliFormat(n.unclaimReward+n.sumReward))+" BKB")]),n._v(" "),e("div",{staticClass:"content_invite"},[e("div",{staticClass:"content_invite_flex colorBackground3"},[e("div",{staticClass:"content_invite_flex_cont"},[e("div",[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e6523a60-a110-11ec-b65f-cd102ebe79d3.png",alt:""}}),n._v(" "),e("span",{staticClass:"textSecond1"},[n._v(n._s(n.$t("mining.tradingRewards")))])]),n._v(" "),e("div",{staticClass:"invite_number textPrimary0 setFontFamily"},[n._v(n._s(n.milliFormat(n.unclaimReward))+" BKB")])]),n._v(" "),e("div",{staticClass:"content_invite_flex_cont setMargin"},[e("div",[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e65101e0-a110-11ec-b65f-cd102ebe79d3.png",alt:""}}),n._v(" "),e("span",{staticClass:"textSecond1"},[n._v(n._s(n.$t("mining.invitationRewards")))])]),n._v(" "),e("div",{staticClass:"invite_number textPrimary0 setFontFamily"},[n._v(n._s(n.milliFormat(n.sumReward))+" BKB")])])])])]),n._v(" "),e("div",{staticClass:"confirm-bottom"},[e("van-button",{staticClass:"swap-btn colorBackgroundPrimary",class:n.unclaimReward+n.sumReward==0?"setOpactive":"",attrs:{disabled:n.btnStatus},on:{click:n.swapConfirm}},[n._v(n._s(n.$t("mining.confirm")))])],1)])}),[],!1,null,"c8495cfe",null);e.default=o.exports}}]);