(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{365:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n(49);e=n(14);var i=n(80),r=(e=n.n(i),n(1)),s=n(79),o=(n(78),function(){for(var t,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];(t=console).log.apply(t,["bit-activity-request:"].concat(n))}),u=e.a.create({baseURL:"https://b1.bitkeep.top",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});u.interceptors.request.use((function(t){var e,n,i;return o("requestlog:",t),r.default.prototype.$store&&(n=(i=(e=r.default.prototype.$store.state).local).UA,i=i.locale,n.isBitKeep?Object.assign(t.headers,e.local.bitkeep,{language:i}):Object.assign(t.headers,{language:i})),t}),(function(t){return Promise.resolve({status:1})})),u.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];(t=console).log.apply(t,["bit-activity-response:"].concat(n))}("responselog:",t);var e="网路开了小差";e=(t=Object(s.b)()||{}).t?t.t("base.networkErro"):e;return Promise.resolve({status:1,data:e})}));var c={mBoxList:function(t){return u.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return u.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return u.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return u.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return u.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return u.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return u.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return u.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return u.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return u.post("swap/mining/info",t)},historyPhase:function(t){return u.post("swap/mining/historyPhase",t)},receiveAward:function(t){return u.post("swap/mining/receiveAward",t)},getInviteList:function(t){return u.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return u.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return u.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return u.post("/user/cloudstaking/poolList",t)},myPool:function(t){return u.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return u.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return u.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return u.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return u.post("/user/cloudstaking/getToken",t)},tradingGetList:function(t){return u.post("swap/tradeCompetition/getList",t)},tradingWaitClaim:function(t){return u.post("swap/tradeCompetition/waitClaim",t)},tradingClaim:function(t){return u.post("swap/tradeCompetition/claim",t)},tradingSummary:function(t){return u.post("swap/tradeCompetition/summary",t)},tradingHistory:function(t){return u.post("swap/tradeCompetition/history",t)},welfareSignIn:function(t){return u.post("user/welfare/signIn",t)},getRewardDetail:function(t){return u.post("user/welfare/getRewardDetail",t)},getSignInDetailByUser:function(t){return u.post("user/welfare/getSignInDetailByUser",t)},getRewardResult:function(t){return u.post("user/welfare/getRewardResult",t)},pushPapersIn:function(t){return u.post("user/welfare/pushPapersIn",t)},getJoinTeleJob:function(t){return u.post("user/welfare/getJoinTeleJob",t)},getFirstSwapJob:function(t){return u.post("user/welfare/getFirstSwapJob",t)},getFirst50UJob:function(t){return u.post("user/welfare/getFirst50UJob",t)},newUserRewardJobs:function(t){return u.post("user/welfare/newUserRewardJobs",t)},nftMintGetInfo:function(t){return u.post("/operationweb/nftmint/getInfo",t)},nftMintInvite:function(t){return u.post("/operationweb/nftmint/invite",t)},buildNftMintTxs:function(t){return u.post("/operationweb/nftmint/buildNftMintTxs",t)},nftMintGetToken:function(t){return u.post("/operationweb/nftmint/getToken",t)},nftMintLotteryList:function(t){return u.post("/operationweb/nftmint/LotteryList",t)},nftMintbuildNftMeltTxs:function(t){return u.post("/operationweb/nftmint/buildNftMeltTxs",t)},nftMintnftList:function(t){return u.post("/operationweb/nftmint/nftList",t)},nftMintcheckTransaction:function(t){return u.post("/operationweb/nftmint/checkTransaction",t)}}},572:function(t,e,n){t.exports=n.p+"img/logo2@3.fb021ce.png"},630:function(t,e,n){},631:function(t,e,n){},716:function(t,e,n){"use strict";n(630)},717:function(t,e,n){"use strict";n(631)},762:function(t,e,n){"use strict";n.r(e),n(43),n(31),n(42),n(66),n(37),n(67);var r=n(3),i=n(28),s=(n(41),n(77)),o=n(365);function a(t,e){var n,i=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)),i}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c={name:"firendList",data:function(){return{active:0,inviteNum:0,helpNum:0,isLoading:!0,refreshing:!1,inviteList:[]}},computed:u(u({},Object(s.b)(["local"])),{},{isBitKeep:function(){return this.local.UA.isBitKeep},locale:function(){return this.local.locale}}),mounted:function(){this.isBitKeep&&BitKeepInvoke.setTitle(this.$t("ActivityBlindbox.ActivityBlindboxList.friendList")),this.userInvite()},methods:{userInvite:function(){var i=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.userInviteList({type:i.active+1});case 2:if(e=t.sent,n=e.data,1==e.status)return t.abrupt("return",i.$toast(n));t.next=7;break;case 7:i.inviteList=n.list,i.inviteNum=n.invite_number,i.helpNum=n.help_number,i.isLoading=!1,i.refreshing=!1;case 12:case"end":return t.stop()}}),t)})))()}}};n(716),n(717),s=n(27),c=Object(s.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"firenddivst"},[t.isLoading?i("div",{staticClass:"loading"},[i("van-loading",{attrs:{color:"#7524f9"}})],1):i("div",{staticClass:"firenddivst-tab"},[i("van-pull-refresh",{staticClass:"blindbox_list_content",on:{refresh:t.userInvite},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[0<t.inviteList.length?i("div",{staticClass:"firenddivst-tab-con radial-gradient"},[i("div",{staticClass:"firenddivst-tab-divst"},[i("span",[t._v(t._s(t.$t("ActivityBlindbox.ActivityBlindboxDetail.HelpSuccessETH")+"（"+t.helpNum+"）:"))]),t._v(" "),i("div",{staticClass:"firenddivst-tab-address"},t._l(t.inviteList,(function(e,n){return i("div",{key:n},[t._v("\n                "+t._s(n+1)+". "+t._s(e)+"\n              ")])})),0)])]):i("div",{staticClass:"noDataBox"},[i("div",{staticClass:"noData"},[i("p",[t._v(t._s(t.$t("ActivityBlindbox.ActivityBlindboxList.noHelper")))])])]),t._v(" "),0<t.inviteList.length?i("div",{staticClass:"block_page_footer"},[i("div",{staticClass:"block_warpper"},[i("div",{staticClass:"block_header"},[i("img",{attrs:{src:n(572)}})])])]):t._e()])],1)])}),[],!1,null,"2368e260",null);e.default=c.exports}}]);