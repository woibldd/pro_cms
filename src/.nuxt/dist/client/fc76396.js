(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{424:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n(57),n(15);e=n(95),e=n.n(e);var r=n(2),i=n(94),s=(n(93),function(){for(var t,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];(t=console).log.apply(t,["bit-activity-request:"].concat(n))}),a=e.a.create({baseURL:"https://b1.bitkeep.top",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}}),u=(a.interceptors.request.use((function(t){var e,n,i;return s("requestlog:",t),r.default.prototype.$store&&(n=(i=(e=r.default.prototype.$store.state).local).UA,i=i.locale,n.isBitKeep?Object.assign(t.headers,e.local.bitkeep,{language:i}):Object.assign(t.headers,{language:i})),t}),(function(t){return Promise.resolve({status:1})})),a.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];(t=console).log.apply(t,["bit-activity-response:"].concat(n))}("responselog:",t);t="网路开了小差";var e=Object(i.b)()||{};t=e.t?e.t("base.networkErro"):t;return Promise.resolve({status:1,data:t})})),{mBoxList:function(t){return a.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return a.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return a.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return a.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return a.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return a.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return a.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return a.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return a.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return a.post("swap/mining/info",t)},historyPhase:function(t){return a.post("swap/mining/historyPhase",t)},receiveAward:function(t){return a.post("swap/mining/receiveAward",t)},getInviteList:function(t){return a.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return a.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return a.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return a.post("/user/cloudstaking/poolList",t)},myPool:function(t){return a.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return a.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return a.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return a.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return a.post("/user/cloudstaking/getToken",t)},tradingGetList:function(t){return a.post("swap/tradeCompetition/getList",t)},tradingWaitClaim:function(t){return a.post("swap/tradeCompetition/waitClaim",t)},tradingClaim:function(t){return a.post("swap/tradeCompetition/claim",t)},tradingSummary:function(t){return a.post("swap/tradeCompetition/summary",t)},tradingHistory:function(t){return a.post("swap/tradeCompetition/history",t)},welfareSignIn:function(t){return a.post("user/welfare/signIn",t)},getRewardDetail:function(t){return a.post("user/welfare/getRewardDetail",t)},getSignInDetailByUser:function(t){return a.post("user/welfare/getSignInDetailByUser",t)},getRewardResult:function(t){return a.post("user/welfare/getRewardResult",t)},pushPapersIn:function(t){return a.post("user/welfare/pushPapersIn",t)},getJoinTeleJob:function(t){return a.post("user/welfare/getJoinTeleJob",t)},getFirstSwapJob:function(t){return a.post("user/welfare/getFirstSwapJob",t)},getFirst50UJob:function(t){return a.post("user/welfare/getFirst50UJob",t)},newUserRewardJobs:function(t){return a.post("user/welfare/newUserRewardJobs",t)},nftMintGetInfo:function(t){return a.post("/operationweb/nftmint/getInfo",t)},nftMintInvite:function(t){return a.post("/operationweb/nftmint/invite",t)},buildNftMintTxs:function(t){return a.post("/operationweb/nftmint/buildNftMintTxs",t)},nftMintGetToken:function(t){return a.post("/operationweb/nftmint/getToken",t)},nftMintLotteryList:function(t){return a.post("/operationweb/nftmint/LotteryList",t)},nftMintbuildNftMeltTxs:function(t){return a.post("/operationweb/nftmint/buildNftMeltTxs",t)},nftMintnftList:function(t){return a.post("/operationweb/nftmint/nftList",t)},nftMintcheckTransaction:function(t){return a.post("/operationweb/nftmint/checkTransaction",t)}})},585:function(t,e,n){},586:function(t,e,n){},620:function(t,e,n){"use strict";n(585)},621:function(t,e,n){"use strict";n(586)},717:function(t,e,n){"use strict";n.r(e);var i=n(7),r=(n(50),n(79),n(26),n(66),n(15),n(67),n(182)),s=n(424);r={data:function(){return{addAllContent:"",visables:this.show,btnStatus:!1,closeIcon:"https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},watch:{show:function(t){this.visables=t},theme:function(t){this.closeIcon=1==t?"https://cdn.bitkeep.vip/u_b_d71e28c0-4c2d-11ec-ad04-d1b66ed0d35e.png":"https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},props:["show","theme","unclaimReward","sumReward"],mounted:function(){},methods:{swapConfirm:Object(r.b)(Object(i.a)(regeneratorRuntime.mark((function t(){var e,n,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.unclaimReward+this.sumReward==0)return t.abrupt("return");t.next=2;break;case 2:return this.btnStatus=!0,t.next=5,s.a.receiveAward();case 5:if(e=t.sent,n=e.data,1==e.status)return this.close(),setTimeout((function(){i.btnStatus=!1}),1e3),t.abrupt("return",this.$toast(n));t.next=12;break;case 12:this.$toast(n),this.$emit("close",!0),setTimeout((function(){i.btnStatus=!1}),1e3);case 15:case"end":return t.stop()}}),t,this)})))),close:function(){this.$emit("close",!1)},milliFormat:function(t){return t&&t.toString().replace(/^\d+/g,(function(t){return t.replace(/(?=(?!^)(\d{3})+$)/g,",")}))}}},n(620),n(621),i=n(34),n=Object(i.a)(r,(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("van-popup",{staticClass:"colorBackground1",style:{height:"54%",overflow:"hidden"},attrs:{closeable:"","close-icon":t.closeIcon,round:"",position:"bottom"},on:{"click-overlay":t.close,"click-close-icon":t.close},model:{value:t.visables,callback:function(e){t.visables=e},expression:"visables"}},[e("div",{staticClass:"title"},[e("div",{staticClass:"textPrimary0"},[t._v(t._s(t.$t("mining.ClaimRewards")))]),t._v(" "),e("div",{staticClass:"textPrimary0 subTitle"},[t._v(t._s(t.$t("mining.ClaimRewardsub")))])]),t._v(" "),e("div",{staticClass:"line colorLine"}),t._v(" "),e("div",{staticClass:"content"},[e("img",{staticClass:"logo",attrs:{src:"https://cdn.bitkeep.vip/u_b_27f9ea80-a03a-11ec-ad8b-9ff4f858e021.png",alt:""}}),t._v(" "),e("p",{staticClass:"textPrimary0"},[t._v(t._s(t.milliFormat(t.unclaimReward+t.sumReward))+" BKB")]),t._v(" "),e("div",{staticClass:"content_invite"},[e("div",{staticClass:"content_invite_flex colorBackground3"},[e("div",{staticClass:"content_invite_flex_cont"},[e("div",[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e6523a60-a110-11ec-b65f-cd102ebe79d3.png",alt:""}}),t._v(" "),e("span",{staticClass:"textSecond1"},[t._v(t._s(t.$t("mining.tradingRewards")))])]),t._v(" "),e("div",{staticClass:"invite_number textPrimary0 setFontFamily"},[t._v(t._s(t.milliFormat(t.unclaimReward))+" BKB")])]),t._v(" "),e("div",{staticClass:"content_invite_flex_cont setMargin"},[e("div",[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e65101e0-a110-11ec-b65f-cd102ebe79d3.png",alt:""}}),t._v(" "),e("span",{staticClass:"textSecond1"},[t._v(t._s(t.$t("mining.invitationRewards")))])]),t._v(" "),e("div",{staticClass:"invite_number textPrimary0 setFontFamily"},[t._v(t._s(t.milliFormat(t.sumReward))+" BKB")])])])])]),t._v(" "),e("div",{staticClass:"confirm-bottom"},[e("van-button",{staticClass:"swap-btn colorBackgroundPrimary",class:t.unclaimReward+t.sumReward==0?"setOpactive":"",attrs:{disabled:t.btnStatus},on:{click:t.swapConfirm}},[t._v(t._s(t.$t("mining.confirm")))])],1)])}),[],!1,null,"c8495cfe",null);e.default=n.exports}}]);