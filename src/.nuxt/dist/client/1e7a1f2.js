(window.webpackJsonp=window.webpackJsonp||[]).push([[52,9,50,53,55],{360:function(t,i,e){"use strict";e.d(i,"a",(function(){return c})),e(49);i=e(14);var n=e(78),a=(i=e.n(n),e(1)),s=e(77),r=(e(76),function(){for(var t,i=arguments.length,e=new Array(i),n=0;n<i;n++)e[n]=arguments[n];(t=console).log.apply(t,["bit-activity-request:"].concat(e))}),o=i.a.create({baseURL:"https://b1.bitkeep.top",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"web",os:"",package:"",clientVersion:"",im:""}});o.interceptors.request.use((function(t){var i,e,n;return r("requestlog:",t),a.default.prototype.$store&&(e=(n=(i=a.default.prototype.$store.state).local).UA,n=n.locale,e.isBitKeep?Object.assign(t.headers,i.local.bitkeep,{language:n}):Object.assign(t.headers,{language:n})),t}),(function(t){return Promise.resolve({status:1})})),o.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,i=arguments.length,e=new Array(i),n=0;n<i;n++)e[n]=arguments[n];(t=console).log.apply(t,["bit-activity-response:"].concat(e))}("responselog:",t);var i="网路开了小差";i=(t=Object(s.b)()||{}).t?t.t("base.networkErro"):i;return Promise.resolve({status:1,data:i})}));var c={mBoxList:function(t){return o.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return o.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return o.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return o.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return o.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return o.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return o.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return o.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return o.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return o.post("swap/mining/info",t)},historyPhase:function(t){return o.post("swap/mining/historyPhase",t)},receiveAward:function(t){return o.post("swap/mining/receiveAward",t)},getInviteList:function(t){return o.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return o.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return o.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return o.post("/user/cloudstaking/poolList",t)},myPool:function(t){return o.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return o.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return o.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return o.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return o.post("/user/cloudstaking/getToken",t)},tradingGetList:function(t){return o.post("swap/tradeCompetition/getList",t)},tradingWaitClaim:function(t){return o.post("swap/tradeCompetition/waitClaim",t)},tradingClaim:function(t){return o.post("swap/tradeCompetition/claim",t)},tradingSummary:function(t){return o.post("swap/tradeCompetition/summary",t)},tradingHistory:function(t){return o.post("swap/tradeCompetition/history",t)},welfareSignIn:function(t){return o.post("user/welfare/signIn",t)},getRewardDetail:function(t){return o.post("user/welfare/getRewardDetail",t)},getSignInDetailByUser:function(t){return o.post("user/welfare/getSignInDetailByUser",t)},getRewardResult:function(t){return o.post("user/welfare/getRewardResult",t)},pushPapersIn:function(t){return o.post("user/welfare/pushPapersIn",t)},getJoinTeleJob:function(t){return o.post("user/welfare/getJoinTeleJob",t)},getFirstSwapJob:function(t){return o.post("user/welfare/getFirstSwapJob",t)},getFirst50UJob:function(t){return o.post("user/welfare/getFirst50UJob",t)},newUserRewardJobs:function(t){return o.post("user/welfare/newUserRewardJobs",t)},nftMintGetInfo:function(t){return o.post("/operationweb/nftmint/getInfo",t)},nftMintInvite:function(t){return o.post("/operationweb/nftmint/invite",t)},buildNftMintTxs:function(t){return o.post("/operationweb/nftmint/buildNftMintTxs",t)},nftMintGetToken:function(t){return o.post("/operationweb/nftmint/getToken",t)},nftMintLotteryList:function(t){return o.post("/operationweb/nftmint/LotteryList",t)},nftMintbuildNftMeltTxs:function(t){return o.post("/operationweb/nftmint/buildNftMeltTxs",t)},nftMintnftList:function(t){return o.post("/operationweb/nftmint/nftList",t)},nftMintcheckTransaction:function(t){return o.post("/operationweb/nftmint/checkTransaction",t)}}},521:function(t,i,e){},522:function(t,i,e){},523:function(t,i,e){},524:function(t,i,e){},525:function(t,i,e){},526:function(t,i,e){},527:function(t,i,e){},557:function(t,i,e){"use strict";e(521)},558:function(t,i,e){"use strict";e(522)},559:function(t,i,e){"use strict";e(523)},560:function(t,i,e){"use strict";e(524)},561:function(t,i,e){"use strict";e(525)},562:function(t,i,e){"use strict";e(526)},563:function(t,i,e){"use strict";e(527)},614:function(t,i,e){},615:function(t,i,e){},655:function(t,i,e){"use strict";e.r(i);var n={data:function(){return{src:"https://cn.etherscan.com/token/0xcadd468f1bca4b0d637d6051cbc576a830f00000",flag:!1}},methods:{viewAll:function(){this.flag=!this.flag;var t=document.getElementsByClassName("about-con")[0];this.flag?t.setAttribute("style","-webkit-line-clamp:10"):t.setAttribute("style","-webkit-line-clamp:2")}}};e(557),e=e(27),n=Object(e.a)(n,(function(){var t=this,i=t.$createElement;return(i=t._self._c||i)("div",{staticClass:"wrap-min statusM"},[i("div",{staticClass:"about"},[i("div",{staticClass:"about-wrap"},[i("div",{staticClass:"about-wrap-pos"},[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_27f9ea80-a03a-11ec-ad8b-9ff4f858e021.png",alt:""}}),t._v(" "),i("p",[t._v(t._s(t.$t("mining.about")))])])]),t._v(" "),i("div",{staticClass:"about-content"},[i("div",{staticClass:"about-title"},[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_82d5d310-a111-11ec-8c7a-8d02428f9af4.png"}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.Introduce")))])]),t._v(" "),i("div",{staticClass:"about-con"},[i("span",[t._v("\n          "+t._s(t.$t("mining.aboutContent1"))+"\n        ")]),t._v(" "),i("span",[t._v("\n          "+t._s(t.$t("mining.aboutContent2"))+"\n        ")])]),t._v(" "),i("div",{staticClass:"viewAll",on:{click:t.viewAll}},[t._v("\n        "+t._s(this.flag?t.$t("mining.pickUp"):t.$t("mining.viewAll"))+"\n      ")])])]),t._v(" "),i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"distribution"},[i("div",{staticClass:"distribution-title"},[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_82d62130-a111-11ec-8c7a-8d02428f9af4.png",alt:""}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.distribution")))])]),t._v(" "),i("div",{staticClass:"charts-img"},[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_82d2c5d0-a111-11ec-8c7a-8d02428f9af4.png",alt:""}}),t._v(" "),i("p",{staticClass:"total"},[t._v("\n        "+t._s(t.$t("mining.total"))),i("span",{staticClass:"exchangeTotal"},[t._v("600,000,000")])])]),t._v(" "),i("div",{staticClass:"distribution-man"},[i("div",{staticClass:"data"},[i("div",[i("span",{staticStyle:{background:"#7524f9"}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.mining")))])]),t._v(" "),i("div",{staticClass:"textPrimary0"},[t._v("50%")])]),t._v(" "),i("div",{staticClass:"data"},[i("div",[i("span",{staticStyle:{background:"#2AC8DD"}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.eco")))])]),t._v(" "),i("div",{staticClass:"textPrimary0"},[t._v("20%")])]),t._v(" "),i("div",{staticClass:"data"},[i("div",[i("span",{staticStyle:{background:"#ff8146"}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.community"))+" ")])]),t._v(" "),i("div",{staticClass:"textPrimary0"},[t._v("15%")])]),t._v(" "),i("div",{staticClass:"data"},[i("div",[i("span",{staticStyle:{background:"#f04e98"}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.partner")))])]),t._v(" "),i("div",{staticClass:"textPrimary0"},[t._v("10%")])]),t._v(" "),i("div",{staticClass:"data"},[i("div",[i("span",{staticStyle:{background:"rgba(191, 203, 224, 0.7)"}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.tram")))])]),t._v(" "),i("div",{staticClass:"textPrimary0"},[t._v("5%")])])])]),t._v(" "),i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"hold"},[i("div",{staticClass:"hold-title"},[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_1e351000-a112-11ec-b5cd-6f94e6599e38.png",alt:""}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.hold")))])]),t._v(" "),i("div",{staticClass:"appreciation-grid hold-content"},[i("div",{staticClass:"appreciation-grid-flex"},[i("div",[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_22c6f430-a112-11ec-b5cd-6f94e6599e38.png",alt:""}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.hold1")))])]),t._v(" "),i("div",[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_22c82cb0-a112-11ec-b5cd-6f94e6599e38.png",alt:""}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.hold2")))])])]),t._v(" "),i("div",{staticClass:"appreciation-grid-flex"},[i("div",[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_22c6a610-a112-11ec-b5cd-6f94e6599e38.png",alt:""}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.hold3")))])]),t._v(" "),i("div",[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_22c8c8f0-a112-11ec-b5cd-6f94e6599e38.png",alt:""}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.hold4")))])])]),t._v(" "),i("div",{staticClass:"appreciation-grid-flex"},[i("div",[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_22c657f0-a112-11ec-b5cd-6f94e6599e38.png",alt:""}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.hold5")))])]),t._v(" "),i("div",[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_22c79070-a112-11ec-b5cd-6f94e6599e38.png",alt:""}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.hold6")))])])]),t._v(" "),i("div",{staticClass:"appreciation-grid-flex"},[i("div",[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_22e355d0-a112-11ec-b5cd-6f94e6599e38.png",alt:""}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.hold7")))])]),t._v(" "),i("div",[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_22e5c6d0-a112-11ec-b5cd-6f94e6599e38.png",alt:""}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.hold8")))])])])])]),t._v(" "),i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"appreciation"},[i("div",{staticClass:"appreciation-title"},[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_9b0a9cd0-a112-11ec-b5cd-6f94e6599e38.png"}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.appreciation")))])]),t._v(" "),i("div",{staticClass:"appreciation-grid"},[i("div",{staticClass:"appreciation-grid-flex"},[i("div",[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_9722db50-a112-11ec-b5cd-6f94e6599e38.png",alt:""}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.appreciationSwap")))])]),t._v(" "),i("div",[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_97232970-a112-11ec-b5cd-6f94e6599e38.png",alt:""}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.appreciationCoin")))])])]),t._v(" "),i("div",{staticClass:"appreciation-grid-flex"},[i("div",[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_9721f0f0-a112-11ec-b5cd-6f94e6599e38.png",alt:""}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.appreciationPool")))])]),t._v(" "),i("div",[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_97230260-a112-11ec-b5cd-6f94e6599e38.png",alt:""}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.appreciationValut")))])])])])]),t._v(" "),i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"more"},[i("div",{staticClass:"more-title"},[t._v(t._s(t.$t("mining.more")))]),t._v(" "),i("div",{staticClass:"more-line"},[i("a",{attrs:{href:"https://www.bitkeep.com/",target:"_blank"}},[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_ddcf2860-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),i("span",[t._v(t._s(t.$t("mining.website")))])]),t._v(" "),i("van-icon",{staticClass:"setIcon",attrs:{name:"arrow"}})],1),t._v(" "),i("div",{staticClass:"more-line"},[i("a",{attrs:{href:"https://twitter.com/BitKeepOS",target:"_blank"}},[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_ddcf4f71-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.twitter")))])]),t._v(" "),i("van-icon",{staticClass:"setIcon",attrs:{name:"arrow"}})],1),t._v(" "),i("div",{staticClass:"more-line"},[i("a",{attrs:{href:"https://t.me/bitkeep",target:"_blank"}},[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_ddcf0150-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.telegram")))])]),t._v(" "),i("van-icon",{staticClass:"setIcon",attrs:{name:"arrow"}})],1),t._v(" "),i("div",{staticClass:"more-line"},[i("a",{attrs:{href:t.src,target:"_blank"}},[i("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_ddceda40-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),i("span",[t._v(t._s(t.$t("mining.explorer")))])]),t._v(" "),i("van-icon",{staticClass:"setIcon",attrs:{name:"arrow"}})],1)])])}),[],!1,null,"41f07a04",null);i.default=n.exports},656:function(t,i,e){"use strict";e.r(i);var n=e(3),a=(e(41),e(67),e(36),e(55),e(14),e(56),e(156)),s=e(360);n={data:function(){return{addAllContent:"",visables:this.show,btnStatus:!1,closeIcon:"https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},watch:{show:function(t){this.visables=t},theme:function(t){this.closeIcon=1==t?"https://cdn.bitkeep.vip/u_b_d71e28c0-4c2d-11ec-ad04-d1b66ed0d35e.png":"https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},props:["show","theme","unclaimReward","sumReward"],mounted:function(){},methods:{swapConfirm:Object(a.b)(Object(n.a)(regeneratorRuntime.mark((function t(){var i,e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.unclaimReward+this.sumReward==0)return t.abrupt("return");t.next=2;break;case 2:return this.btnStatus=!0,t.next=5,s.a.receiveAward();case 5:if(i=t.sent,e=i.data,1==i.status)return this.close(),setTimeout((function(){n.btnStatus=!1}),1e3),t.abrupt("return",this.$toast(e));t.next=12;break;case 12:this.$toast(e),this.$emit("close",!0),setTimeout((function(){n.btnStatus=!1}),1e3);case 15:case"end":return t.stop()}}),t,this)})))),close:function(){this.$emit("close",!1)},milliFormat:function(t){return t&&t.toString().replace(/^\d+/g,(function(t){return t.replace(/(?=(?!^)(\d{3})+$)/g,",")}))}}},e(558),e(559),e=e(27),n=Object(e.a)(n,(function(){var i=this,t=i.$createElement;return(t=i._self._c||t)("van-popup",{staticClass:"colorBackground1",style:{height:"54%",overflow:"hidden"},attrs:{closeable:"","close-icon":i.closeIcon,round:"",position:"bottom"},on:{"click-overlay":i.close,"click-close-icon":i.close},model:{value:i.visables,callback:function(t){i.visables=t},expression:"visables"}},[t("div",{staticClass:"title"},[t("div",{staticClass:"textPrimary0"},[i._v(i._s(i.$t("mining.ClaimRewards")))]),i._v(" "),t("div",{staticClass:"textPrimary0 subTitle"},[i._v(i._s(i.$t("mining.ClaimRewardsub")))])]),i._v(" "),t("div",{staticClass:"line colorLine"}),i._v(" "),t("div",{staticClass:"content"},[t("img",{staticClass:"logo",attrs:{src:"https://cdn.bitkeep.vip/u_b_27f9ea80-a03a-11ec-ad8b-9ff4f858e021.png",alt:""}}),i._v(" "),t("p",{staticClass:"textPrimary0"},[i._v(i._s(i.milliFormat(i.unclaimReward+i.sumReward))+" BKB")]),i._v(" "),t("div",{staticClass:"content_invite"},[t("div",{staticClass:"content_invite_flex colorBackground3"},[t("div",{staticClass:"content_invite_flex_cont"},[t("div",[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e6523a60-a110-11ec-b65f-cd102ebe79d3.png",alt:""}}),i._v(" "),t("span",{staticClass:"textSecond1"},[i._v(i._s(i.$t("mining.tradingRewards")))])]),i._v(" "),t("div",{staticClass:"invite_number textPrimary0 setFontFamily"},[i._v(i._s(i.milliFormat(i.unclaimReward))+" BKB")])]),i._v(" "),t("div",{staticClass:"content_invite_flex_cont setMargin"},[t("div",[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e65101e0-a110-11ec-b65f-cd102ebe79d3.png",alt:""}}),i._v(" "),t("span",{staticClass:"textSecond1"},[i._v(i._s(i.$t("mining.invitationRewards")))])]),i._v(" "),t("div",{staticClass:"invite_number textPrimary0 setFontFamily"},[i._v(i._s(i.milliFormat(i.sumReward))+" BKB")])])])])]),i._v(" "),t("div",{staticClass:"confirm-bottom"},[t("van-button",{staticClass:"swap-btn colorBackgroundPrimary",class:i.unclaimReward+i.sumReward==0?"setOpactive":"",attrs:{disabled:i.btnStatus},on:{click:i.swapConfirm}},[i._v(i._s(i.$t("mining.confirm")))])],1)])}),[],!1,null,"c8495cfe",null);i.default=n.exports},657:function(t,i,e){"use strict";e.r(i);var n={data:function(){return{visables:this.ruleDetailFlag,closeIcon:"https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},watch:{ruleDetailFlag:function(t){this.visables=t},theme:function(t){this.closeIcon=1==t?"https://cdn.bitkeep.vip/u_b_d71e28c0-4c2d-11ec-ad04-d1b66ed0d35e.png":"https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},props:["ruleDetailFlag","theme"],methods:{close:function(){this.$emit("ruleDetailClose",!1)}}};e(560),e(561),e=e(27),n=Object(e.a)(n,(function(){var i=this,t=i.$createElement;return(t=i._self._c||t)("van-popup",{staticClass:"colorBackground1",style:{height:"60%",overflow:"hidden"},attrs:{closeable:"","close-icon":i.closeIcon,round:"",position:"bottom"},on:{"click-overlay":i.close,"click-close-icon":i.close},model:{value:i.visables,callback:function(t){i.visables=t},expression:"visables"}},[t("div",{staticClass:"title"},[t("p",{staticClass:"textPrimary0"},[i._v(i._s(i.$t("mining.miningRuleTitle")))])]),i._v(" "),t("div",{staticClass:"line colorLine"}),i._v(" "),t("div",{staticClass:"ruleDetailcontent"},[t("p",{staticClass:"textPrimary0 setF"},[i._v(i._s(i.$t("mining.ruleDetail")))]),i._v(" "),t("p",{staticClass:"textSecond1 setLineHeight",domProps:{innerHTML:i._s(i.$t("mining.ruleDetail1"))}}),i._v(" "),t("p",{staticClass:"textSecond1"},[i._v(i._s(i.$t("mining.ruleDetail2")))])])])}),[],!1,null,"75fc548f",null);i.default=n.exports},658:function(t,i,e){"use strict";e.r(i);var n={data:function(){return{visables:this.inviteRuleDetailFlag,closeIcon:"https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},watch:{inviteRuleDetailFlag:function(t){this.visables=t},theme:function(t){this.closeIcon=1==t?"https://cdn.bitkeep.vip/u_b_d71e28c0-4c2d-11ec-ad04-d1b66ed0d35e.png":"https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},props:["inviteRuleDetailFlag","theme"],methods:{close:function(){this.$emit("closeInvite",!1)}}};e(562),e(563),e=e(27),n=Object(e.a)(n,(function(){var i=this,t=i.$createElement;return(t=i._self._c||t)("van-popup",{staticClass:"colorBackground1",style:{height:"50%",overflow:"hidden"},attrs:{closeable:"","close-icon":i.closeIcon,round:"",position:"bottom"},on:{"click-overlay":i.close,"click-close-icon":i.close},model:{value:i.visables,callback:function(t){i.visables=t},expression:"visables"}},[t("div",{staticClass:"title"},[t("p",{staticClass:"textPrimary0"},[i._v(i._s(i.$t("blindboxInvite.RuleTitle")))])]),i._v(" "),t("div",{staticClass:"line colorLine"}),i._v(" "),t("ul",{staticClass:"ruleDetailcontent"},[t("p",{staticClass:"textPrimary0 setF"},[i._v(i._s(i.$t("blindboxInvite.myInviteRuleTitle")))]),i._v(" "),t("li",{staticClass:"textSecond1 setLineHeight",domProps:{innerHTML:i._s(i.$t("blindboxInvite.myRuleDetail"))}}),i._v(" "),t("li",{staticClass:"textSecond1 setLineHeight",domProps:{innerHTML:i._s(i.$t("blindboxInvite.myRuleDetail1"))}}),i._v(" "),t("li",{staticClass:"textSecond1"},[i._v(i._s(i.$t("blindboxInvite.myRuleDetail2")))]),i._v(" "),t("li",{staticClass:"textSecond1"},[i._v(i._s(i.$t("blindboxInvite.myRuleDetail3")))]),i._v(" "),t("li",{staticClass:"textSecond1"},[i._v(i._s(i.$t("blindboxInvite.myRuleDetail4")))]),i._v(" "),t("li",{staticClass:"textSecond1"},[i._v(i._s(i.$t("blindboxInvite.myRuleDetail5")))])])])}),[],!1,null,"6fc736eb",null);i.default=n.exports},695:function(t,i,e){"use strict";e(614)},696:function(t,i,e){"use strict";e(615)},750:function(t,i,e){"use strict";e.r(i),e(43),e(31),e(42),e(65),e(37),e(66);var a=e(3),n=e(28),s=(e(67),e(36),e(55),e(14),e(56),e(41),e(360)),r=e(75),o=e(655),c=e(656),l=e(657),d=e(658);function v(i,t){var e,n=Object.keys(i);return Object.getOwnPropertySymbols&&(e=Object.getOwnPropertySymbols(i),t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.push.apply(n,e)),n}function u(i){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?v(Object(e),!0).forEach((function(t){Object(n.a)(i,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(e,t))}))}return i}l={name:"mining",data:function(){return{currencyPool:0,yesCurrencyPool:0,rewardPooln:336e5,allTodayTrading:0,userTodayTrading:0,userTodayValue:0,userTotalBkbReward:0,userTodayDayBkbReward:0,unclaimReward:0,activityTradingBkbReward:0,activityDoneTradingBkbReward:0,activity_rewardPool:0,activityInviteReward:0,activityInviteDonereward:0,sum_activity_today_reward:0,status:!1,show:!1,ruleDetailFlag:!1,inviteRuleDetailFlag:!1,isLoading:!0,refreshLoading:!1,startTime:null,endTime:null,fixdStartTime:"--",fixdEndTime:"--",formatEn:"DDd HHh mmm sss",phase:"1",countDown:0,activityStatus:0,theme:0,question:"https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png"}},computed:u(u({},Object(r.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep}}),components:{activityCom:o.default,pupProtocol:c.default,inviteRuleDetail:d.default,ruleDetail:l.default},mounted:function(){this.getInfo(),this.setIcon()},methods:{getInfo:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.miningInfo();case 2:if(i=e.sent,n=i.data,1==i.status)return t.isLoading=!1,e.abrupt("return",t.$dialog.alert({message:n,confirmButtonText:t.$t("CbkbExchange.know"),confirmButtonColor:"$theme-light-colorPrimary"}));e.next=8;break;case 8:t.fixdStartTime=n.miningStartTime,t.fixdEndTime=n.miningEndTime,t.unclaimReward=n.unclaimReward,t.currencyPool=t.milliFormat(n.currencyPool),t.yesCurrencyPool=t.milliFormat(n.yesCurrencyPool),t.allTodayTrading=t.milliFormat(n.AllTodayTrading),t.userTodayTrading=t.milliFormat(n.userTodayTrading),t.userTodayValue=t.milliFormat(n.userTodayValue),t.userTotalBkbReward=t.milliFormat(n.userTotalBkbReward),t.userTodayDayBkbReward=t.milliFormat(n.userTodayDayBkbReward),t.activityTradingBkbReward=t.milliFormat(n.activity_TradingBkbReward),t.activityInviteReward=t.milliFormat(n.activity_invite_reward),t.activityDoneTradingBkbReward=t.milliFormat(n.activity_DoneTradingBkbReward),t.activityInviteDonereward=t.milliFormat(n.activity_invite_Donereward),t.sum_activity_today_reward=n.sum_activity_today_reward,t.activity_rewardPool=t.milliFormat(n.activity_rewardPool),t.countDown=n.countdown,t.activityStatus=n.activityStatus,t.isLoading=!1,t.refreshLoading=!1;case 28:case"end":return e.stop()}}),e)})))()},ruleDetail:function(){this.ruleDetailFlag=!0},ruleDetailClose:function(){this.ruleDetailFlag=!1},inviteRuleDetail:function(){this.inviteRuleDetailFlag=!0},closeInvite:function(){this.inviteRuleDetailFlag=!1},inviteRewards:function(){this.$router.push("/activity/blindboxInvite/rewardList")},inviteFirends:function(){this.$router.push("/activity/blindboxInvite")},setIcon:function(){var t=this;BitKeepInvoke.setTitle(this.$t("mining.miningTitle")),this.isBitKeep&&BitKeepInvoke.onLoadReady((function(){BitKeepInvoke.setTitle(t.$t("mining.miningTitle")),t.$nextTick((function(){BitKeepInvoke.appMode((function(e,i){var n=document.getElementsByTagName("body")[0];1==i?(t.theme=1,t.question="https://cdn.bitkeep.vip/u_b_47485390-4f90-11ec-ace3-97579b99c357.png",n.setAttribute("class","theme-dark"),setTimeout((function(){BitKeepInvoke.setIconAction("https://cdn.bitkeep.vip/u_b_09035ca0-4dd9-11ec-a555-07d5354e6fab.png",(function(){t.$router.push("/activity/mining/history")}))}),500)):(t.theme=0,t.question="https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png",n.setAttribute("class","theme-light"),setTimeout((function(){BitKeepInvoke.setIconAction("https://cdn.bitkeep.vip/u_b_2bb4fa20-3b86-11ec-8e63-1db435df936c.png",(function(){t.$router.push("/activity/mining/history")}))}),500))}))}))}))},milliFormat:function(t){return t&&t.toString().replace(/^\d+/g,(function(t){return t.replace(/(?=(?!^)(\d{3})+$)/g,",")}))},claim:function(){this.show=!0},close:function(t){var i=this;t&&setTimeout((function(){i.getInfo()}),500),this.show=!1},swap:function(){BitKeepInvoke.nativeApp()},learnMore:function(){this.$router.push("/activity/mining/miningRule")}}},e(695),e(696),e=e(27),l=Object(e.a)(l,(function(){var i=this,t=i.$createElement;return(t=i._self._c||t)("div",{staticClass:"mining"},[i.isLoading?t("div",{staticClass:"loading"},[t("van-loading",{attrs:{color:"#7524f9",vertical:""}},[i._v(i._s(i.$t("base.loading"))+"...")])],1):t("van-pull-refresh",{attrs:{"success-text":i.$t("mining.success"),"loading-text":i.$t("mining.loading"),"loosing-text":i.$t("mining.loading")},on:{refresh:i.getInfo},model:{value:i.refreshLoading,callback:function(t){i.refreshLoading=t},expression:"refreshLoading"}},[t("div",{staticClass:"mining-wrap"},[t("div",{staticClass:"img"},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_377ba750-a4d6-11ec-a2df-753bd9da2557.png",alt:""}})]),i._v(" "),t("div",{staticClass:"mining-wrap-one"},[t("div",{staticClass:"mining-wrap-one-header",staticStyle:{"padding-right":"0"}},[t("div",{staticClass:"mining-wrap-one-header-title"},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e64f7b40-a110-11ec-b65f-cd102ebe79d3.png",alt:""}}),i._v(" "),t("span",{staticClass:"setFontWeight"},[i._v(i._s(i.$t("mining.coundown")))])]),i._v(" "),1==i.activityStatus?t("div",{staticClass:"mining-wrap-one-header-about inProgress"},[t("span",[i._v(i._s(i.$t("mining.inProgress")))])]):0==i.activityStatus?t("div",{staticClass:"mining-wrap-one-header-about comingsoon"},[t("span",[i._v(i._s(i.$t("mining.comingsoon")))])]):t("div",{staticClass:"mining-wrap-one-header-about activityEnd"},[t("span",[i._v(i._s(i.$t("mining.activity")))])])]),i._v(" "),t("div",{staticClass:"mining-wrap-one-body"},[t("p",{staticClass:"mining-wrap-one-body-startCountdown"},[0==i.activityStatus?t("span",[i._v(i._s(i.$t("mining.startCountdown")))]):t("span",[i._v(i._s(i.$t("mining.endCountdown")))])]),i._v(" "),0<i.countDown?t("div",[t("span",[t("van-count-down",{staticClass:"mining-wrap-one-body-time setFontFamily",attrs:{time:i.countDown,format:i.formatEn}})],1)]):t("div",{staticClass:"textPrimary0"},[i._v("--")])]),i._v(" "),t("div",{staticClass:"mining-setP"},[t("div",{staticClass:"produced mining_trans"},[t("span",[i._v(i._s(i.$t("mining.startTime")))]),i._v(" "),t("span",{staticClass:"setFontFamily"},[i._v(i._s(i.fixdStartTime)+"(GMT+8)")])]),i._v(" "),t("div",{staticClass:"produced mining_trans mbottom"},[t("span",[i._v(i._s(i.$t("mining.overTime")))]),i._v(" "),t("span",{staticClass:"setFontFamily"},[i._v(i._s(i.fixdEndTime)+"(GMT+8)")])])])]),i._v(" "),t("div",{staticClass:"mining-wrap-one"},[t("div",{staticClass:"mining-wrap-one-header"},[t("div",{staticClass:"mining-wrap-one-header-title"},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e650dad0-a110-11ec-b65f-cd102ebe79d3.png",alt:""}}),i._v(" "),t("span",{staticClass:"setFontWeight"},[i._v(i._s(i.$t("mining.rewardPool")))])]),i._v(" "),t("div",{staticClass:"mining-wrap-one-header-update"})]),i._v(" "),t("div",{staticClass:"mining-wrap-one-body"},[t("div",{staticClass:"mining-wrap-one-body-trading mbottom"},[t("div",[t("p",{staticClass:"mining-wrap-one-body-vol",staticStyle:{"text-align":"left"}},[i._v("\n                "+i._s(i.$t("mining.totalDistributed"))+"\n              ")]),i._v(" "),t("div",{staticClass:"mining-wrap-one-body-vol-number setFontFamily"},[t("span",{staticClass:"setW"},[i._v(i._s(i.currencyPool))]),i._v(" BKB\n              ")])]),i._v(" "),t("div",[t("p",{staticClass:"mining-wrap-one-body-vol"},[i._v("\n                "+i._s(i.$t("mining.yesterday"))+"\n              ")]),i._v(" "),t("div",{staticClass:"mining-wrap-one-body-vol-number-todyVolue\n                  setFontFamily"},[t("span",{staticClass:"setW"},[i._v(i._s(i.yesCurrencyPool))]),i._v(" BKB\n              ")])])])])]),i._v(" "),t("div",{staticClass:"mining-wrap-one"},[t("div",{staticClass:"mining-wrap-one-header"},[t("div",{staticClass:"mining-wrap-one-header-title"},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e651ec40-a110-11ec-b65f-cd102ebe79d3.png",alt:""}}),i._v(" "),t("span",{staticClass:"setFontWeight"},[i._v(i._s(i.$t("mining.tradingVolume")))])]),i._v(" "),t("div",{staticClass:"mining-wrap-one-header-update"})]),i._v(" "),t("div",{staticClass:"mining-wrap-one-body"},[t("p",{staticClass:"mining-wrap-one-body-day"},[i._v(i._s(i.$t("mining.tradingIn")))]),i._v(" "),t("div",{staticClass:"mining-wrap-one-body-number"},[t("span",{staticClass:"setFontFamily"},[i._v(i._s(0!=i.activityStatus?"$"+i.allTodayTrading:"--"))])])])]),i._v(" "),t("div",{staticClass:"mining-wrap-one"},[t("div",{staticClass:"mining-wrap-one-header"},[t("div",{staticClass:"mining-wrap-one-header-title"},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e6523a60-a110-11ec-b65f-cd102ebe79d3.png",alt:""}}),i._v(" "),t("span",{staticClass:"setFontWeight"},[i._v(i._s(i.$t("mining.myRewards")))]),i._v(" "),t("img",{staticClass:"setImg",attrs:{src:i.question,alt:""},on:{click:i.ruleDetail}})]),i._v(" "),t("div",{staticClass:"mining-wrap-one-header-update"})]),i._v(" "),t("div",{staticClass:"mining-wrap-one-body"},[t("div",{staticClass:"mining-wrap-one-body-trading"},[t("div",[t("p",{staticClass:"mining-wrap-one-body-vol",staticStyle:{"text-align":"left"}},[i._v("\n                "+i._s(i.$t("mining.totalTrading"))+"\n              ")]),i._v(" "),t("div",{staticClass:"mining-wrap-one-body-vol-number setFontFamily"},[t("span",{staticClass:"setW"},[i._v("$"+i._s(i.userTodayTrading))])])]),i._v(" "),t("div",[t("p",{staticClass:"mining-wrap-one-body-vol"},[i._v("\n                "+i._s(i.$t("mining.userTodayValue"))+"\n              ")]),i._v(" "),t("div",{staticClass:"\n                  mining-wrap-one-body-vol-number-todyVolue\n                  setFontFamily"},[i._v(i._s(0!=i.activityStatus?"$"+i.userTodayValue:"--")+"\n              ")])])]),i._v(" "),t("div",{staticClass:"line mining-wrap-one-body-line"}),i._v(" "),t("div",{staticClass:"mining-wrap-one-body-rewards"},[t("div",[t("p",{staticClass:"mining-wrap-one-body-vol"},[i._v("\n                "+i._s(i.$t("mining.totalRewards"))+"\n              ")]),i._v(" "),t("div",{staticClass:"mining-wrap-one-body-vol-number setFontFamily"},[t("span",{staticClass:"setW"},[i._v(i._s(i.userTotalBkbReward))]),i._v(" BKB\n              ")])]),i._v(" "),t("div",[t("p",{staticClass:"mining-wrap-one-body-vol",staticStyle:{"text-align":"right"}},[i._v("\n                "+i._s(i.$t("mining.yesterdayRewards"))+"\n              ")]),i._v(" "),t("div",{staticClass:"mining-wrap-one-body-vol-number-last setFontFamily"},[i._v("\n                "+i._s(0!=i.activityStatus?"+"+i.userTodayDayBkbReward+" BKB":"0 BKB")+"\n              ")])])])])]),i._v(" "),t("div",{staticClass:"mining-wrap-one"},[t("div",{staticClass:"mining-wrap-one-header"},[t("div",{staticClass:"mining-wrap-one-header-title"},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e650dad0-a110-11ec-b65f-cd102ebe79d3.png",alt:""}}),i._v(" "),t("span",{staticClass:"setFontWeight"},[i._v(i._s(i.$t("mining.invitationPool")))]),i._v(" "),t("img",{staticClass:"setImg",attrs:{src:i.question,alt:""},on:{click:i.inviteRuleDetail}})])]),i._v(" "),t("div",{staticClass:"mining-wrap-one-body"},[t("div",{staticClass:"setMingMargin"},[t("span",{staticClass:"setFontFamily textPrimary0"},[i._v(i._s(i.activity_rewardPool+" BKB"))])]),i._v(" "),t("p",{staticClass:"mining-wrap-one-body-day textPrimary0"},[i._v(i._s(i.$t("mining.invitationPoolContent")))])])]),i._v(" "),t("div",{staticClass:"mining-wrap-one invitation"},[t("div",{staticClass:"mining-wrap-one-header"},[t("div",{staticClass:"mining-wrap-one-header-title"},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e65101e0-a110-11ec-b65f-cd102ebe79d3.png",alt:""}}),i._v(" "),t("span",{staticClass:"setFontWeight"},[i._v(i._s(i.$t("mining.invitationReward")))])]),i._v(" "),t("div",{staticClass:"colorPrimary",on:{click:i.inviteRewards}},[t("span",[i._v(i._s(i.$t("mining.viewDetails")))])])]),i._v(" "),t("div",{staticClass:"mining-wrap-one-body"},[t("div",{staticClass:"mining-wrap-one-body-trading"},[t("div",[t("p",{staticClass:"mining-wrap-one-body-vol",staticStyle:{"text-align":"left"}},[i._v("\n                "+i._s(i.$t("mining.inviteNumber1"))+"\n              ")]),i._v(" "),t("div",{staticClass:"mining-wrap-one-body-vol-number setFontFamily"},[t("span",{staticClass:"setW",staticStyle:{color:"#7524f9"}},[i._v(i._s(i.activityInviteDonereward)+" BKB")])])]),i._v(" "),t("div",[t("p",{staticClass:"mining-wrap-one-body-vol"},[i._v("\n                "+i._s(i.$t("mining.inviteNumber2"))+"\n              ")]),i._v(" "),t("div",{staticClass:"\n                  mining-wrap-one-body-vol-number-todyVolue\n                  setFontFamily",staticStyle:{color:"#7524f9"}},[i._v(i._s(0!=i.activityStatus?"+"+i.activityTradingBkbReward+" BKB":"0 BKB")+"\n              ")])])]),i._v(" "),t("div",{staticClass:"line mining-wrap-one-body-line"}),i._v(" "),t("div",{staticClass:"mining-wrap-one-body-rewards"},[t("div",[t("p",{staticClass:"mining-wrap-one-body-vol"},[i._v("\n                "+i._s(i.$t("mining.inviteNumber3"))+"\n              ")]),i._v(" "),t("div",{staticClass:"mining-wrap-one-body-vol-number setFontFamily"},[t("span",{staticClass:"setW"},[i._v(i._s(i.activityDoneTradingBkbReward))]),i._v(" BKB\n              ")])]),i._v(" "),t("div",[t("p",{staticClass:"mining-wrap-one-body-vol",staticStyle:{"text-align":"right"}},[i._v("\n                "+i._s(i.$t("mining.inviteNumber4"))+"\n              ")]),i._v(" "),t("div",{staticClass:"mining-wrap-one-body-vol-number-last setFontFamily"},[i._v("\n                "+i._s(0!=i.activityStatus?"+"+i.activityInviteReward+" BKB":"0 BKB")+"\n              ")])])])]),i._v(" "),t("div",{staticClass:"warp-invite-link-btn colorBackgroundPrimary",on:{click:i.inviteFirends}},[i._v("\n          "+i._s(i.$t("mining.inviteFriendsNow"))+"\n        ")])]),i._v(" "),t("div",{staticClass:"mining-wrap-one"},[t("div",{staticClass:"mining-wrap-one-header"},[t("div",{staticClass:"mining-wrap-one-header-title"},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_82d44c70-a111-11ec-8c7a-8d02428f9af4.png",alt:""}}),i._v(" "),t("span",{staticClass:"setFontWeight"},[i._v(i._s(i.$t("mining.miningRuleTitle")))])]),i._v(" "),t("div",[t("span",{staticClass:"mining-wrap-one-header-right",on:{click:i.learnMore}},[i._v(i._s(i.$t("mining.learnMore")))])])]),i._v(" "),t("div",{staticClass:"mining-wrap-one-body",on:{click:i.learnMore}},[t("p",{staticClass:"mining-wrap-one-body-text"},[i._v("\n            "+i._s(i.$t("mining.miningRule"))+"\n          ")])])]),i._v(" "),t("activity-com"),i._v(" "),t("div",{staticClass:"wrap-bottom"},[t("van-button",{staticClass:"swap-btn setColorClaim",on:{click:i.claim}},[i._v(i._s(i.$t("mining.claim")))]),i._v(" "),t("van-button",{staticClass:"swap-btn setColorSwap",on:{click:i.swap}},[i._v(i._s(i.$t("mining.swapNow")))])],1)],1)]),i._v(" "),t("pup-protocol",{key:(new Date).getTime(),attrs:{show:i.show,unclaimReward:i.unclaimReward,sumReward:i.sum_activity_today_reward,theme:i.theme},on:{close:i.close}}),i._v(" "),t("ruleDetail",{attrs:{ruleDetailFlag:i.ruleDetailFlag,theme:i.theme},on:{ruleDetailClose:i.ruleDetailClose}}),i._v(" "),t("inviteRuleDetail",{attrs:{inviteRuleDetailFlag:i.inviteRuleDetailFlag,theme:i.theme},on:{closeInvite:i.closeInvite}})],1)}),[],!1,null,"472b1f82",null),i.default=l.exports}}]);