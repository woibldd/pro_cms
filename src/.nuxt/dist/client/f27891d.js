(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{360:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n(49);e=n(14);var a=n(78),s=(e=n.n(a),n(1)),i=n(77),r=(n(76),function(){for(var t,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];(t=console).log.apply(t,["bit-activity-request:"].concat(n))}),c=e.a.create({baseURL:"https://b1.bitkeep.top",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"web",os:"",package:"",clientVersion:1,im:""}});c.interceptors.request.use((function(t){var e,n,a;return r("requestlog:",t),s.default.prototype.$store&&(n=(a=(e=s.default.prototype.$store.state).local).UA,a=a.locale,n.isBitKeep?Object.assign(t.headers,e.local.bitkeep,{language:a}):Object.assign(t.headers,{language:a})),t}),(function(t){return Promise.resolve({status:1})})),c.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];(t=console).log.apply(t,["bit-activity-response:"].concat(n))}("responselog:",t);var e="网路开了小差";e=(t=Object(i.b)()||{}).t?t.t("base.networkErro"):e;return Promise.resolve({status:1,data:e})}));var p={mBoxList:function(t){return c.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return c.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return c.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return c.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return c.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return c.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return c.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return c.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return c.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return c.post("swap/mining/info",t)},historyPhase:function(t){return c.post("swap/mining/historyPhase",t)},receiveAward:function(t){return c.post("swap/mining/receiveAward",t)},getInviteList:function(t){return c.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return c.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return c.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return c.post("/user/cloudstaking/poolList",t)},myPool:function(t){return c.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return c.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return c.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return c.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return c.post("/user/cloudstaking/getToken",t)},tradingGetList:function(t){return c.post("swap/tradeCompetition/getList",t)},tradingWaitClaim:function(t){return c.post("swap/tradeCompetition/waitClaim",t)},tradingClaim:function(t){return c.post("swap/tradeCompetition/claim",t)},tradingSummary:function(t){return c.post("swap/tradeCompetition/summary",t)},tradingHistory:function(t){return c.post("swap/tradeCompetition/history",t)},welfareSignIn:function(t){return c.post("user/welfare/signIn",t)},getRewardDetail:function(t){return c.post("user/welfare/getRewardDetail",t)},getSignInDetailByUser:function(t){return c.post("user/welfare/getSignInDetailByUser",t)},getRewardResult:function(t){return c.post("user/welfare/getRewardResult",t)},pushPapersIn:function(t){return c.post("user/welfare/pushPapersIn",t)},getJoinTeleJob:function(t){return c.post("user/welfare/getJoinTeleJob",t)},getFirstSwapJob:function(t){return c.post("user/welfare/getFirstSwapJob",t)},getFirst50UJob:function(t){return c.post("user/welfare/getFirst50UJob",t)},newUserRewardJobs:function(t){return c.post("user/welfare/newUserRewardJobs",t)},nftMintGetInfo:function(t){return c.post("/operationweb/nftmint/getInfo",t)},nftMintInvite:function(t){return c.post("/operationweb/nftmint/invite",t)},buildNftMintTxs:function(t){return c.post("/operationweb/nftmint/buildNftMintTxs",t)},nftMintGetToken:function(t){return c.post("/operationweb/nftmint/getToken",t)},nftMintLotteryList:function(t){return c.post("/operationweb/nftmint/LotteryList",t)},nftMintbuildNftMeltTxs:function(t){return c.post("/operationweb/nftmint/buildNftMeltTxs",t)},nftMintnftList:function(t){return c.post("/operationweb/nftmint/nftList",t)},nftMintcheckTransaction:function(t){return c.post("/operationweb/nftmint/checkTransaction",t)}}},603:function(t,e,n){},604:function(t,e,n){},665:function(t,e,n){"use strict";n(603)},666:function(t,e,n){"use strict";n(604)},746:function(t,e,n){"use strict";n.r(e),n(43),n(31),n(42),n(65),n(37),n(66);var i=n(3),a=n(28),r=(n(36),n(55),n(14),n(56),n(41),n(360)),s=n(156),c=n(75);function o(t,e){var n,a=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)),a}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}s={name:"cbkbexchange",data:function(){return{airDropCount:0,src:"https://cn.etherscan.com/address/0xa286035a1e60abf172524bdbfd224abeef6ce362",flag:!1,isLoading:!0,status:!1}},computed:p(p({},Object(c.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep}}),created:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.addEventListener("load",(function(){t.getBalance()})),e.next=3,t.$nextTick();case 3:t.isLoading=!1;case 4:case"end":return e.stop()}}),e)})))()},beforeMount:function(){this.isBitKeep&&BitKeepInvoke.setTitle(this.$t("airdrop.airdropTitle"))},methods:{getBalance:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.ethereum){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,window.ethereum.request({method:"eth_requestAccounts"});case 6:t.getAirDropCount(window.ethereum.selectedAddress);case 7:case"end":return e.stop()}}),e)})))()},getAirDropCount:function(a){var s=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.getAirDropCount({address:a,lang:s.local.locale});case 2:if(e=t.sent,n=e.data,1==e.status)return t.abrupt("return",s.$dialog.alert({message:n,confirmButtonText:s.$t("CbkbExchange.know"),confirmButtonColor:"#7524f9"}));t.next=7;break;case 7:s.airDropCount=s.milliFormat(n.amount),s.status=n.status;case 9:case"end":return t.stop()}}),t)})))()},milliFormat:function(t){return t&&t.toString().replace(/^\d+/g,(function(t){return t.replace(/(?=(?!^)(\d{3})+$)/g,",")}))},receive:Object(s.b)(Object(i.a)(regeneratorRuntime.mark((function t(){var e,n,a=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.status){t.next=2;break}return t.abrupt("return",this.$toast(this.$t("airdrop.notStart")));case 2:return t.next=4,r.a.getAirDrop({address:window.ethereum.selectedAddress,lang:this.local.locale});case 4:if(e=t.sent,n=e.data,1==e.status)return t.abrupt("return",this.$dialog.alert({message:n,confirmButtonText:this.$t("CbkbExchange.know"),confirmButtonColor:"#7524f9"}));t.next=9;break;case 9:this.$dialog.alert({message:n,confirmButtonText:this.$t("CbkbExchange.know"),confirmButtonColor:"#7524f9"}).then((function(){a.getAirDropCount(window.ethereum.selectedAddress)}));case 10:case"end":return t.stop()}}),t,this)})))),viewAll:function(){this.flag=!this.flag;var t=document.getElementsByClassName("about-con")[0];this.flag?t.setAttribute("style","-webkit-line-clamp:10"):t.setAttribute("style","-webkit-line-clamp:2")}}},n(665),n(666),n=n(27),s=Object(n.a)(s,(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("div",[t.isLoading?e("div",{staticClass:"loading"},[e("van-loading",{attrs:{color:"#7524f9",vertical:""}},[t._v("加载中...")])],1):e("div",[e("div",{staticClass:"img"},[e("img",{attrs:{src:"en"==t.locale?"https://cdn.bitkeep.vip/u_b_3f5bfbf0-2fe2-11ec-877b-ddcbdd675082.png":"https://cdn.bitkeep.vip/u_b_3f5d5b80-2fe2-11ec-877b-ddcbdd675082.png",alt:""}})]),t._v(" "),e("div",{staticClass:"text"},[e("p",{staticClass:"text-t"},[t._v(t._s(t.$t("airdrop.get")))]),t._v(" "),e("p",{staticClass:"text-n"},[e("span",{staticClass:"setH"},[t._v(t._s(t.airDropCount))]),t._v(" "),e("span",{staticClass:"setFont"},[t._v("BKB")])]),t._v(" "),e("van-button",{staticClass:"swap-btn",class:[t.status?"":"disabled"],on:{click:t.receive}},[t._v(t._s(t.$t("airdrop.receive")))])],1),t._v(" "),e("div",{staticClass:"airdrop"},[e("p",{staticClass:"title",staticStyle:{"font-size":"16px"}},[t._v(t._s(t.$t("airdrop.airdrop"))+" ")]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("airdrop.airdropContent")))]),t._v(" "),e("p",{staticClass:"title"},[t._v(t._s(t.$t("airdrop.time")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("airdrop.timeContent")))]),t._v(" "),e("p",{staticClass:"title"},[t._v(t._s(t.$t("airdrop.particlpation")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("airdrop.particlpation1")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("airdrop.particlpation2")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("airdrop.particlpation3")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("airdrop.particlpation4")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("airdrop.particlpation5")))]),t._v(" "),e("p",{staticClass:"title"},[t._v(t._s(t.$t("airdrop.rules")))]),t._v(" "),e("div",{staticClass:"ruleContent"},[e("p",{staticClass:"content"},[t._v(t._s(t.$t("airdrop.rules1")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("airdrop.rules2")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("airdrop.rules3")))])]),t._v(" "),e("p",{staticClass:"content note",staticStyle:{"line-height":"18px"}},[t._v(t._s(t.$t("airdrop.note")))])]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"about"},[e("div",{staticClass:"about-title"},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_0978f140-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.about")))])]),t._v(" "),e("div",{staticClass:"about-con"},[e("span",[t._v("\n        "+t._s(t.$t("CbkbExchange.aboutContent1"))+"\n        ")]),t._v(" "),e("span",[t._v("\n          "+t._s(t.$t("CbkbExchange.aboutContent2"))+"\n        ")])]),t._v(" "),e("div",{staticClass:"viewAll",on:{click:t.viewAll}},[t._v(" "+t._s(this.flag?t.$t("CbkbExchange.pickUp"):t.$t("CbkbExchange.viewAll")))])]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"distribution"},[e("div",{staticClass:"distribution-title"},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_244b3eb0-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.distribution")))])]),t._v(" "),e("div",{staticClass:"charts-img"},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_c014c440-30d0-11ec-9e24-8d799844d18f.png",alt:""}}),t._v(" "),e("p",{staticClass:"total"},[t._v(t._s(t.$t("CbkbExchange.total"))),e("span",{staticClass:"exchangeTotal"},[t._v("600,000,000")])])]),t._v(" "),e("div",{staticClass:"distribution-man"},[e("div",{staticClass:"data"},[e("div",[e("span",{staticStyle:{background:"#7524f9"}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.mining")))])]),t._v(" "),e("div",[t._v("50%")])]),t._v(" "),e("div",{staticClass:"data"},[e("div",[e("span",{staticStyle:{background:"#2AC8DD"}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.eco")))])]),t._v(" "),e("div",[t._v("20%")])]),t._v(" "),e("div",{staticClass:"data"},[e("div",[e("span",{staticStyle:{background:"#FF8146"}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.community"))+" ")])]),t._v(" "),e("div",[t._v("15%")])]),t._v(" "),e("div",{staticClass:"data"},[e("div",[e("span",{staticStyle:{background:"#F04E98"}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.partner")))])]),t._v(" "),e("div",[t._v("10%")])]),t._v(" "),e("div",{staticClass:"data"},[e("div",[e("span",{staticStyle:{background:"#0E0E0E"}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.tram")))])]),t._v(" "),e("div",[t._v("5%")])])])]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"hold"},[e("div",{staticClass:"hold-title"},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_5930f660-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.hold")))])]),t._v(" "),e("div",{staticClass:"hold-content"},[e("p",[t._v(t._s(t.$t("CbkbExchange.hold1")))]),t._v(" "),e("p",[t._v(t._s(t.$t("CbkbExchange.hold2")))]),t._v(" "),e("p",[t._v(t._s(t.$t("CbkbExchange.hold3")))]),t._v(" "),e("p",[t._v(t._s(t.$t("CbkbExchange.hold4")))]),t._v(" "),e("p",[t._v(t._s(t.$t("CbkbExchange.hold5")))]),t._v(" "),e("p",[t._v(t._s(t.$t("CbkbExchange.hold6")))]),t._v(" "),e("p",[t._v(t._s(t.$t("CbkbExchange.hold7")))]),t._v(" "),e("p",[t._v(t._s(t.$t("CbkbExchange.hold8")))])])]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"appreciation"},[e("div",{staticClass:"appreciation-title"},[e("span",[t._v(t._s(t.$t("CbkbExchange.appreciation")))])]),t._v(" "),e("div",{staticClass:"appreciation-grid"},[e("div",{staticClass:"appreciation-grid-flex"},[e("div",[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_adf789c0-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.appreciationSwap")))])]),t._v(" "),e("div",[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_adf71490-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.appreciationCoin")))])])]),t._v(" "),e("div",{staticClass:"appreciation-grid-flex"},[e("div",[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_adf789c1-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.appreciationPool")))])]),t._v(" "),e("div",[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_adf7b0d0-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.appreciationValut")))])])])])]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"more"},[e("div",{staticClass:"more-title"},[t._v(t._s(t.$t("CbkbExchange.more")))]),t._v(" "),e("div",{staticClass:"more-line"},[e("a",{attrs:{href:"https://www.bitkeep.com/",target:"_blank"}},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_ddcf2860-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),e("span",[t._v(t._s(t.$t("CbkbExchange.website")))])]),t._v(" "),e("van-icon",{staticClass:"setIcon",attrs:{name:"arrow"}})],1),t._v(" "),e("div",{staticClass:"more-line"},[e("a",{attrs:{href:"https://twitter.com/BitKeepOS",target:"_blank"}},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_ddcf4f71-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.twitter")))])]),t._v(" "),e("van-icon",{staticClass:"setIcon",attrs:{name:"arrow"}})],1),t._v(" "),e("div",{staticClass:"more-line"},[e("a",{attrs:{href:"https://t.me/bitkeep",target:"_blank"}},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_ddcf0150-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.telegram")))])]),t._v(" "),e("van-icon",{staticClass:"setIcon",attrs:{name:"arrow"}})],1),t._v(" "),e("div",{staticClass:"more-line"},[e("a",{attrs:{href:t.src,target:"_blank"}},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_ddceda40-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.explorer")))])]),t._v(" "),e("van-icon",{staticClass:"setIcon",attrs:{name:"arrow"}})],1)])])])}),[],!1,null,"6d840ef1",null),e.default=s.exports}}]);