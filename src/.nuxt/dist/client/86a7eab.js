(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{360:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n(50);e=n(14);var r=n(78),i=(e=n.n(r),n(1)),a=n(77),s=(r=n(44),Object(r.debug)("bit-activity-request")),o=Object(r.debug)("bit-activity-response"),u=e.a.create({baseURL:"https://b1.bitkeep.top",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});u.interceptors.request.use((function(t){var e,n,r;return s("requestlog:",t),i.default.prototype.$store&&(n=(r=(e=i.default.prototype.$store.state).local).UA,r=r.locale,n.isBitKeep?Object.assign(t.headers,e.local.bitkeep,{language:r}):Object.assign(t.headers,{language:r})),t}),(function(t){return Promise.resolve({status:1})})),u.interceptors.response.use((function(t){return t.data}),(function(t){o("responselog:",t);var e="网路开了小差";e=(t=Object(a.b)()||{}).t?t.t("base.networkErro"):e;return Promise.resolve({status:1,data:e})}));var c={mBoxList:function(t){return u.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return u.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return u.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return u.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return u.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return u.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return u.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return u.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return u.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return u.post("swap/mining/info",t)},historyPhase:function(t){return u.post("swap/mining/historyPhase",t)},receiveAward:function(t){return u.post("swap/mining/receiveAward",t)},getInviteList:function(t){return u.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return u.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return u.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return u.post("/user/cloudstaking/poolList",t)},myPool:function(t){return u.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return u.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return u.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return u.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return u.post("/user/cloudstaking/getToken",t)},tradingGetList:function(t){return u.post("swap/tradeCompetition/getList",t)},tradingWaitClaim:function(t){return u.post("swap/tradeCompetition/waitClaim",t)},tradingClaim:function(t){return u.post("swap/tradeCompetition/claim",t)},tradingSummary:function(t){return u.post("swap/tradeCompetition/summary",t)},tradingHistory:function(t){return u.post("swap/tradeCompetition/history",t)},welfareSignIn:function(t){return u.post("user/welfare/signIn",t)},getRewardDetail:function(t){return u.post("user/welfare/getRewardDetail",t)},getSignInDetailByUser:function(t){return u.post("user/welfare/getSignInDetailByUser",t)},getRewardResult:function(t){return u.post("user/welfare/getRewardResult",t)},pushPapersIn:function(t){return u.post("user/welfare/pushPapersIn",t)},getJoinTeleJob:function(t){return u.post("user/welfare/getJoinTeleJob",t)},getFirstSwapJob:function(t){return u.post("user/welfare/getFirstSwapJob",t)},getFirst50UJob:function(t){return u.post("user/welfare/getFirst50UJob",t)},newUserRewardJobs:function(t){return u.post("user/welfare/newUserRewardJobs",t)},nftMintGetInfo:function(t){return u.post("/operation/nftmint/getInfo",t)},nftMintInvite:function(t){return u.post("/operation/nftmint/invite",t)},buildNftMintTxs:function(t){return u.post("/operation/nftmint/buildNftMintTxs",t)},nftMintGetToken:function(t){return u.post("/operation/nftmint/getToken",t)},nftMintLotteryList:function(t){return u.post("/operation/nftmint/LotteryList",t)},nftMintbuildNftMeltTxs:function(t){return u.post("/operation/nftmint/buildNftMeltTxs",t)},nftMintnftList:function(t){return u.post("/operation/nftmint/nftList",t)},nftMintcheckTransaction:function(t){return u.post("/operation/nftmint/checkTransaction",t)}}},362:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(122),i=n(158);function a(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(i.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},632:function(t,e,n){},718:function(t,e,n){"use strict";n(632)},763:function(t,e,n){"use strict";n.r(e),n(43),n(31),n(42),n(66),n(37),n(67);var a=n(362),s=n(3),r=n(28),i=(n(41),n(76)),o=n(360);function u(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)),r}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}i={data:function(){return{isLoading:!0,finished:!1,loading:!1,refreshing:!1,rewardsList:[],start:0,limit:20}},computed:c(c({},Object(i.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep}}),created:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isLoading=!1;case 1:case"end":return e.stop()}}),e)})))()},beforeMount:function(){var t=this;this.isBitKeep&&BitKeepInvoke.onLoadReady((function(){BitKeepInvoke.setTitle(t.$t("blindboxInvite.rewardTitle")),BitKeepInvoke.setIconAction(),t.$nextTick((function(){BitKeepInvoke.appMode((function(t,e){var n=document.getElementsByTagName("body")[0];1==e?n.setAttribute("class","theme-dark"):n.setAttribute("class","theme-light")}))}))}))},mounted:function(){this.getRewardsList()},methods:{getRewardsList:function(){var i=this;return Object(s.a)(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.activityDoneRewardList({start:i.start*i.limit,limit:i.limit});case 2:if(e=t.sent,n=e.data,1==e.status)return i.isLoading=!1,i.loading=!0,t.abrupt("return",i.$toast(n));t.next=9;break;case 9:(r=n)&&(e=i.rewardsList).push.apply(e,Object(a.a)(r)),i.isLoading=!1,i.$toast.clear(),i.loading=!1,i.start++,i.rewardsList.length>=n.total_count&&(i.finished=!0);case 16:case"end":return t.stop()}}),t)})))()},onRefresh:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.activityDoneRewardList({start:0,limit:t.limit});case 2:if(n=e.sent,r=n.data,1==n.status)return t.refreshing=!1,e.abrupt("return",t.$toast(r));e.next=8;break;case 8:t.rewardsList=r.data,t.refreshing=!1;case 10:case"end":return e.stop()}}),e)})))()}}},n(718),n=n(27),i=Object(n.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rewards-list colorBackground0"},[t.isLoading?n("div",{staticClass:"loading"},[n("van-loading",{attrs:{color:"#7524f9",vertical:""}},[t._v(t._s(t.$t("base.loading"))+"...")])],1):n("div",{staticClass:"rewards-list-box"},[0<t.rewardsList.length?n("div",[n("van-pull-refresh",{staticClass:"setHeight",on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[n("van-list",{attrs:{finished:t.finished,"immediate-check":!1},on:{load:t.getRewardsList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.rewardsList,(function(e){return n("div",{key:e.number,staticClass:"rewards-row-data"},[n("div",{staticClass:"rewards-row-data-left"},[n("div",{staticClass:"rewards-row-data-left-title textPrimary0"},[t._v("\n                "+t._s(t.$t("mining.invitationRewards"))+"\n              ")]),t._v(" "),n("div",{staticClass:"rewards-row-data-left-time textSecond3"},[t._v("\n                "+t._s(e.create_time)+"\n              ")])]),t._v(" "),n("div",{staticClass:"rewards-row-data-right"},[n("div",{staticClass:"\n                  rewards-row-data-right-content\n                  textPrimary0\n                  setFontFamily\n                "},[n("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_27f9ea80-a03a-11ec-ad8b-9ff4f858e021.png",alt:""}}),t._v("\n                  +"+t._s(e.reward)+" BKB\n              ")])])])})),0)],1)],1):n("div",{staticClass:"noData"},[n("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png",alt:""}}),t._v(" "),n("p",{staticClass:"textSecond3"},[t._v(t._s(t.$t("mining.noData")))])])])])}),[],!1,null,"10515f4d",null),e.default=i.exports}}]);