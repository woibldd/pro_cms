(window.webpackJsonp=window.webpackJsonp||[]).push([[46,40],{424:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n(57),n(15);e=n(95),e=n.n(e);var s=n(2),i=n(94),r=(n(93),function(){for(var t,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];(t=console).log.apply(t,["bit-activity-request:"].concat(n))}),o=e.a.create({baseURL:"https://b1.bitkeep.top",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}}),c=(o.interceptors.request.use((function(t){var e,n,i;return r("requestlog:",t),s.default.prototype.$store&&(n=(i=(e=s.default.prototype.$store.state).local).UA,i=i.locale,n.isBitKeep?Object.assign(t.headers,e.local.bitkeep,{language:i}):Object.assign(t.headers,{language:i})),t}),(function(t){return Promise.resolve({status:1})})),o.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];(t=console).log.apply(t,["bit-activity-response:"].concat(n))}("responselog:",t);t="网路开了小差";var e=Object(i.b)()||{};t=e.t?e.t("base.networkErro"):t;return Promise.resolve({status:1,data:t})})),{mBoxList:function(t){return o.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return o.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return o.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return o.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return o.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return o.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return o.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return o.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return o.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return o.post("swap/mining/info",t)},historyPhase:function(t){return o.post("swap/mining/historyPhase",t)},receiveAward:function(t){return o.post("swap/mining/receiveAward",t)},getInviteList:function(t){return o.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return o.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return o.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return o.post("/user/cloudstaking/poolList",t)},myPool:function(t){return o.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return o.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return o.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return o.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return o.post("/user/cloudstaking/getToken",t)},tradingGetList:function(t){return o.post("swap/tradeCompetition/getList",t)},tradingWaitClaim:function(t){return o.post("swap/tradeCompetition/waitClaim",t)},tradingClaim:function(t){return o.post("swap/tradeCompetition/claim",t)},tradingSummary:function(t){return o.post("swap/tradeCompetition/summary",t)},tradingHistory:function(t){return o.post("swap/tradeCompetition/history",t)},welfareSignIn:function(t){return o.post("user/welfare/signIn",t)},getRewardDetail:function(t){return o.post("user/welfare/getRewardDetail",t)},getSignInDetailByUser:function(t){return o.post("user/welfare/getSignInDetailByUser",t)},getRewardResult:function(t){return o.post("user/welfare/getRewardResult",t)},pushPapersIn:function(t){return o.post("user/welfare/pushPapersIn",t)},getJoinTeleJob:function(t){return o.post("user/welfare/getJoinTeleJob",t)},getFirstSwapJob:function(t){return o.post("user/welfare/getFirstSwapJob",t)},getFirst50UJob:function(t){return o.post("user/welfare/getFirst50UJob",t)},newUserRewardJobs:function(t){return o.post("user/welfare/newUserRewardJobs",t)},nftMintGetInfo:function(t){return o.post("/operationweb/nftmint/getInfo",t)},nftMintInvite:function(t){return o.post("/operationweb/nftmint/invite",t)},buildNftMintTxs:function(t){return o.post("/operationweb/nftmint/buildNftMintTxs",t)},nftMintGetToken:function(t){return o.post("/operationweb/nftmint/getToken",t)},nftMintLotteryList:function(t){return o.post("/operationweb/nftmint/LotteryList",t)},nftMintbuildNftMeltTxs:function(t){return o.post("/operationweb/nftmint/buildNftMeltTxs",t)},nftMintnftList:function(t){return o.post("/operationweb/nftmint/nftList",t)},nftMintcheckTransaction:function(t){return o.post("/operationweb/nftmint/checkTransaction",t)}})},426:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(150),s=n(184),r=n(116);function a(t){return function(t){if(Array.isArray(t))return Object(i.a)(t)}(t)||Object(s.a)(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},594:function(t,e,n){},595:function(t,e,n){},630:function(t,e,n){"use strict";n(594)},631:function(t,e,n){"use strict";n(595)},693:function(t,e,n){},721:function(t,e,n){"use strict";n.r(e);n(630),n(631),n=n(34),n=Object(n.a)({data:function(){return{visables:this.ruleDetailFlag,closeIcon:"https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},watch:{ruleDetailFlag:function(t){this.visables=t},theme:function(t){this.closeIcon=1==t?"https://cdn.bitkeep.vip/u_b_d71e28c0-4c2d-11ec-ad04-d1b66ed0d35e.png":"https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},props:["ruleDetailFlag","theme"],methods:{close:function(){this.$emit("close",!1)}}},(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("van-popup",{staticClass:"colorBackground1",style:{height:"50%",overflow:"hidden"},attrs:{closeable:"","close-icon":t.closeIcon,round:"",position:"bottom"},on:{"click-overlay":t.close,"click-close-icon":t.close},model:{value:t.visables,callback:function(e){t.visables=e},expression:"visables"}},[e("div",{staticClass:"title"},[e("p",{staticClass:"textPrimary0"},[t._v(t._s(t.$t("blindboxInvite.RuleTitle")))])]),t._v(" "),e("div",{staticClass:"line colorLine"}),t._v(" "),e("ul",{staticClass:"ruleDetailcontent"},[e("p",{staticClass:"textPrimary0 setF"},[t._v(t._s(t.$t("blindboxInvite.inviteRuleTitle")))]),t._v(" "),e("li",{staticClass:"textSecond1 setLineHeight",domProps:{innerHTML:t._s(t.$t("blindboxInvite.ruleDetail"))}}),t._v(" "),e("li",{staticClass:"textSecond1 setLineHeight",domProps:{innerHTML:t._s(t.$t("blindboxInvite.ruleDetail1"))}}),t._v(" "),e("li",{staticClass:"textSecond1"},[t._v(t._s(t.$t("blindboxInvite.ruleDetail2")))])])])}),[],!1,null,"3155a1e2",null);e.default=n.exports},776:function(t,e,n){"use strict";n(693)},821:function(t,e,n){"use strict";n.r(e),n(52),n(38),n(51),n(15),n(77),n(46),n(78);var r=n(426),a=n(7),i=n(35),s=(n(50),n(92)),o=n(424);function c(t,e){var n,i=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)),i}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}s={data:function(){return{isLoading:!0,finished:!1,loading:!1,refreshing:!1,ruleDetailFlag:!1,inviteList:[],activeCount:0,unActiveCount:0,theme:0,start:0,limit:20,question:"https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png"}},components:{ruleDetail:n(721).default},filters:{address:function(t){return t&&t.substring(0,6)+" .... "+t.substr(-4)}},computed:u(u({},Object(s.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep}}),created:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isLoading=!1;case 1:case"end":return e.stop()}}),e)})))()},beforeMount:function(){var i=this;this.isBitKeep&&BitKeepInvoke.onLoadReady((function(){BitKeepInvoke.setTitle(i.$t("blindboxInvite.inviteFriends")),i.$nextTick((function(){BitKeepInvoke.appMode((function(t,e){var n=document.getElementsByTagName("body")[0];1==e?(i.theme=1,i.question="https://cdn.bitkeep.vip/u_b_47485390-4f90-11ec-ace3-97579b99c357.png",n.setAttribute("class","theme-dark")):(i.theme=0,i.question="https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png",n.setAttribute("class","theme-light")),BitKeepInvoke.setIconAction(i.question,(function(){i.ruleDetailFlag=!0}))}))}))}))},mounted:function(){this.getInviteList()},methods:{getInviteList:function(){var s=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var e,n,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.getInviteList({start:s.start*s.limit,limit:s.limit});case 2:if(i=t.sent,n=i.data,1==i.status)return s.isLoading=!1,s.loading=!0,t.abrupt("return",s.$toast(n));t.next=9;break;case 9:s.activeCount=n.activeCount,s.unActiveCount=n.unActiveCount,(i=n.list)&&(e=s.inviteList).push.apply(e,Object(r.a)(i)),s.isLoading=!1,s.$toast.clear(),s.loading=!1,s.start++,s.inviteList.length>=n.total_count&&(s.finished=!0);case 18:case"end":return t.stop()}}),t)})))()},ruleDetailClose:function(){this.ruleDetailFlag=!1},onRefresh:function(){var i=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.getInviteList({start:0,limit:i.limit});case 2:e=t.sent,n=e.data,1==e.status&&(i.isLoading=!1,i.$toast(n)),i.rewardsList=n.data,i.refreshing=!1;case 8:case"end":return t.stop()}}),t)})))()},getSub:function(){var t=JSON.parse(JSON.stringify(this.inviteLink)),e=t.substring(0,14);this.inviteLink=e+" .... "+t.substr(-15)}}},n(776),n=n(34),n=Object(n.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"invite-list colorBackground0"},[t.isLoading?n("div",{staticClass:"loading"},[n("van-loading",{attrs:{color:"#7524f9",vertical:""}},[t._v(t._s(t.$t("base.loading"))+"...")])],1):n("div",{staticClass:"invite-list-box"},[n("div",{staticClass:"invite-list-header"},[n("div",{staticClass:"invite-list-header-left"},[n("div",[t._v(t._s(t.$t("blindboxInvite.inforce")))]),t._v(" "),n("div",{staticClass:"setFontFamily"},[t._v(t._s(t.activeCount||0))])]),t._v(" "),n("div",{staticClass:"color-line"}),t._v(" "),n("div",{staticClass:"invite-list-header-right"},[n("div",[t._v(t._s(t.$t("blindboxInvite.inactivated")))]),t._v(" "),n("div",{staticClass:"setFontFamily"},[t._v(t._s(t.unActiveCount||0))])])]),t._v(" "),0<t.inviteList.length?n("div",[n("van-pull-refresh",{attrs:{"success-text":t.$t("mining.success"),"loading-text":t.$t("mining.loading"),"loosing-text":t.$t("mining.loading")},on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[n("van-list",{staticClass:"setHeight",attrs:{finished:t.finished,"immediate-check":!1},on:{load:t.getInviteList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("van-row",{staticClass:"invite-row"},[n("van-col",{staticClass:"invite-col textSecond3",attrs:{span:"8"}},[t._v(t._s(t.$t("blindboxInvite.Address")))]),t._v(" "),n("van-col",{staticClass:"invite-col textSecond3",attrs:{span:"7"}},[t._v(t._s(t.$t("blindboxInvite.State")))]),t._v(" "),n("van-col",{staticClass:"invite-col textSecond3",attrs:{span:"9"}},[t._v(t._s(t.$t("blindboxInvite.Time")))])],1),t._v(" "),n("div",{staticClass:"invite-line colorLine"}),t._v(" "),t._l(t.inviteList,(function(e){return n("div",{key:e.address,staticClass:"invite-row-data"},[n("van-row",{staticClass:"invite-row-data-row",class:1==e.status?"textPrimary0":"textSecond3"},[n("van-col",{staticClass:"invite-row-data-col",attrs:{span:"8"}},[t._v(t._s(t._f("address")(e.address_friend)))]),t._v(" "),n("van-col",{staticClass:"invite-row-data-col",attrs:{span:"7"}},[t._v(t._s(1==e.status?t.$t("blindboxInvite.inforce"):t.$t("blindboxInvite.inactivated")))]),t._v(" "),n("van-col",{staticClass:"invite-row-data-col",attrs:{span:"9"}},[t._v(t._s(e.create_time))])],1),t._v(" "),n("div",{staticClass:"invite-line colorLine"})],1)}))],2)],1)],1):n("div",{staticClass:"noData"},[n("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png",alt:""}}),t._v(" "),n("p",{staticClass:"textSecond3"},[t._v(t._s(t.$t("mining.noData")))])])]),t._v(" "),n("ruleDetail",{attrs:{ruleDetailFlag:t.ruleDetailFlag,theme:t.theme},on:{close:t.ruleDetailClose}})],1)}),[],!1,null,"699a2a9b",null),e.default=n.exports}}]);