(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{437:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n(61);e=n(18);var r=n(100),o=(e=n.n(r),n(2)),i=n(99),s=(r=n(64),Object(r.debug)("bit-activity-request")),c=Object(r.debug)("bit-activity-response"),a=e.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});a.interceptors.request.use((function(t){var e,n,r;return s("requestlog:",t),o.default.prototype.$store&&(n=(r=(e=o.default.prototype.$store.state).local).UA,r=r.locale,n.isBitKeep?Object.assign(t.headers,e.local.bitkeep,{language:r}):Object.assign(t.headers,{language:r})),t}),(function(t){return Promise.resolve({status:1})})),a.interceptors.response.use((function(t){return t.data}),(function(t){c("responselog:",t);var e="网路开了小差";e=(t=Object(i.b)()||{}).t?t.t("base.networkErro"):e;return Promise.resolve({status:1,data:e})}));var l={mBoxList:function(t){return a.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return a.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return a.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return a.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return a.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return a.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return a.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return a.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return a.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return a.post("swap/mining/info",t)},historyPhase:function(t){return a.post("swap/mining/historyPhase",t)},receiveAward:function(t){return a.post("swap/mining/receiveAward",t)},getInviteList:function(t){return a.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return a.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return a.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return a.post("/user/cloudstaking/poolList",t)},myPool:function(t){return a.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return a.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return a.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return a.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return a.post("/user/cloudstaking/getToken",t)},tradingGetList:function(t){return a.post("swap/tradeCompetition/getList",t)},tradingWaitClaim:function(t){return a.post("swap/tradeCompetition/waitClaim",t)},tradingClaim:function(t){return a.post("swap/tradeCompetition/claim",t)},tradingSummary:function(t){return a.post("swap/tradeCompetition/summary",t)},tradingHistory:function(t){return a.post("swap/tradeCompetition/history",t)},welfareSignIn:function(t){return a.post("user/welfare/signIn",t)},getRewardDetail:function(t){return a.post("user/welfare/getRewardDetail",t)},getSignInDetailByUser:function(t){return a.post("user/welfare/getSignInDetailByUser",t)},getRewardResult:function(t){return a.post("user/welfare/getRewardResult",t)},pushPapersIn:function(t){return a.post("user/welfare/pushPapersIn",t)},getJoinTeleJob:function(t){return a.post("user/welfare/getJoinTeleJob",t)},getFirstSwapJob:function(t){return a.post("user/welfare/getFirstSwapJob",t)},getFirst50UJob:function(t){return a.post("user/welfare/getFirst50UJob",t)},newUserRewardJobs:function(t){return a.post("user/welfare/newUserRewardJobs",t)},nftMintGetInfo:function(t){return a.post("/operation/nftmint/getInfo",t)},nftMintInvite:function(t){return a.post("/operation/nftmint/invite",t)},buildNftMintTxs:function(t){return a.post("/operation/nftmint/buildNftMintTxs",t)},nftMintGetToken:function(t){return a.post("/operation/nftmint/getToken",t)},nftMintLotteryList:function(t){return a.post("/operation/nftmint/LotteryList",t)},nftMintbuildNftMeltTxs:function(t){return a.post("/operation/nftmint/buildNftMeltTxs",t)},nftMintnftList:function(t){return a.post("/operation/nftmint/nftList",t)},nftMintcheckTransaction:function(t){return a.post("/operation/nftmint/checkTransaction",t)}}},741:function(t,e,n){var r=n(869);(r="string"==typeof(r=r.__esModule?r.default:r)?[[t.i,r,""]]:r).locals&&(t.exports=r.locals),(0,n(51).default)("23e3ae60",r,!0,{sourceMap:!1})},868:function(t,e,n){"use strict";n(741)},869:function(t,e,n){(n=n(50)(!1)).push([t.i,".theme-light .textPrimary0 {\n  color: #0E0E0E;\n}\n.theme-light .textSecond1 {\n  color: #515556;\n}\n.theme-light .textSecond2 {\n  color: #919899;\n}\n.theme-light .textSecond3 {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1 {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0 {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1 {\n  background-color: #fff;\n}\n.theme-light .colorBackground2 {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3 {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary {\n  background-color: #7524f9;\n}\n.theme-light .colorBackgroundColorSecond11 {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01 {\n  background-color: #2AC8DD;\n}\n.theme-light .colorBackgroundTextPrimary0 {\n  background-color: #0E0E0E;\n}\n.theme-light .colorPrimary {\n  color: #7524f9;\n}\n.theme-light .colorSecond01 {\n  color: #2AC8DD;\n}\n.theme-light .backgroundSecond01 {\n  background-color: #2AC8DD;\n}\n.theme-light .colorSecond02 {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03 {\n  color: #26BC80;\n}\n.theme-light .colorSecond04 {\n  color: #FF8146;\n}\n.theme-light .colorSecond05 {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06 {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07 {\n  color: #F04E98;\n}\n.theme-light .colorSecond08 {\n  color: #FFB800;\n}\n.theme-light .colorBlack {\n  color: #000;\n}\n.theme-light .colorwhite {\n  color: #fff;\n}\n.theme-light .colorSecond10 {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11 {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12 {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13 {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14 {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15 {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18 {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0 {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1 {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2 {\n  color: #7F828F;\n}\n.theme-dark .textSecond3 {\n  color: #6D707D;\n}\n.theme-dark .colorDisable {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1 {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0 {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1 {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2 {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3 {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary {\n  background-color: #7524f9;\n}\n.theme-dark .colorBackgroundColorSecond11 {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01 {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorBackgroundTextPrimary0 {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary {\n  color: #7524f9;\n}\n.theme-dark .colorSecond01 {\n  color: #2AC8DD;\n}\n.theme-dark .backgroundSecond01 {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorSecond02 {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03 {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04 {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05 {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06 {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07 {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08 {\n  color: #FFB800;\n}\n.theme-dark .colorBlack {\n  color: #000;\n}\n.theme-dark .colorwhite {\n  color: #fff;\n}\n.theme-dark .colorSecond10 {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11 {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12 {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13 {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14 {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15 {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18 {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .Background0 {\n  background-color: #fafafa;\n}\n.theme-light .Background0 {\n  background-color: #F8F8F9;\n}\n.theme-dark .Background0 {\n  background-color: #17171A;\n}\n.theme-dark .Background1 {\n  background-color: #202024;\n}\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n}\nbody::-webkit-scrollbar {\n  display: none;\n}\np {\n  margin: 0;\n  padding: 0;\n}\n.lotteryresults {\n  min-height: 100vh;\n}\n.lotteryresults-content {\n  height: 0.27rem;\n}\n.lotteryresults-summary {\n  height: 1.76rem;\n  border-radius: 0.21rem;\n  margin: 0 0.43rem 0.27rem 0.43rem;\n  display: flex;\n  justify-content: space-around;\n}\n.lotteryresults-summary-item p:nth-child(1) {\n  font-size: 0.32rem;\n  text-align: center;\n  margin-top: 0.4rem;\n}\n.lotteryresults-summary-item p:nth-child(2) {\n  font-size: 0.53rem;\n  text-align: center;\n}\n.lotteryresults-list-item {\n  height: 1.6rem;\n  padding: 0.4rem 0.43rem;\n  display: flex;\n  justify-content: space-between;\n}\n.lotteryresults-list-item .lotteryresults-list-itemNums {\n  font-size: 0.37rem;\n}\n.lotteryresults-list-item .lotteryresults-list-item-result {\n  font-size: 0.32rem;\n}\n.lotteryresults-list-item .lotteryresults-list-right {\n  line-height: 0.8rem;\n  font-size: 0.37rem;\n}\n.lotteryresults-nodata {\n  min-height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.lotteryresults-nodata img {\n  width: 2.67rem;\n  height: 2.67rem;\n}\n.lotteryresults-nodata p {\n  font-size: 0.37rem;\n}\n.colorBlue {\n  color: #7524f9 !important;\n}",""]),t.exports=n},931:function(t,e,n){"use strict";n.r(e),n(63),n(43),n(62),n(88),n(54),n(89);var r=n(4),o=n(38),i=(n(52),n(437)),s=n(98);function c(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)),r}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}s={name:"Novicebenefits",data:function(){return{isLoading:!0,CouponsNums:"",resultList:{pushTimes:0,pushPapers:0,allReward:0,list:[]}}},computed:a(a({},Object(s.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep}}),components:{},mounted:function(){this.getInfo(),this.setIcon(),this.getRewardResult()},methods:{getRewardResult:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.getRewardResult();case 2:n=e.sent,r=n.data,n.status,r&&(t.resultList=r);case 6:case"end":return e.stop()}}),e)})))()},getInfo:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.miningInfo();case 2:if(n=e.sent,r=n.data,1==n.status)return t.isLoading=!1,e.abrupt("return",t.$dialog.alert({message:r,confirmButtonText:t.$t("CbkbExchange.know"),confirmButtonColor:"$theme-light-colorPrimary"}));e.next=8;break;case 8:t.isLoading=!1;case 9:case"end":return e.stop()}}),e)})))()},setIcon:function(){var t=this;this.isBitKeep&&BitKeepInvoke.onLoadReady((function(){BitKeepInvoke.setTitle(t.$t("noviceBenefits.Lotteryresults")),t.$nextTick((function(){BitKeepInvoke.appMode((function(e,n){var r=document.getElementsByTagName("body")[0];1==n?(t.theme=1,t.question="https://cdn.bitkeep.vip/u_b_47485390-4f90-11ec-ace3-97579b99c357.png",r.setAttribute("class","theme-dark")):(t.theme=0,t.question="https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png",r.setAttribute("class","theme-light"))}))}))}))}}},n(868),n=n(29),s=Object(n.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lotteryresults colorBackground1"},[n("div",{staticClass:"lotteryresults-content"}),t._v(" "),n("div",{staticClass:"lotteryresults-summary colorBackground3"},[n("div",{staticClass:"lotteryresults-summary-item"},[n("p",{staticClass:"textSecond2"},[t._v(t._s(t.$t("noviceBenefits.participationperiods")))]),t._v(" "),n("p",{staticClass:"textPrimary0 setFontFamily"},[t._v(t._s(t.resultList.pushTimes||0))])]),t._v(" "),n("div",{staticClass:"lotteryresults-summary-item"},[n("p",{staticClass:"textSecond2"},[t._v(t._s(t.$t("noviceBenefits.ticketsinvested")))]),t._v(" "),n("p",{staticClass:"textPrimary0 setFontFamily"},[t._v(t._s(t.resultList.pushPapers||0))])]),t._v(" "),n("div",{staticClass:"lotteryresults-summary-item"},[n("p",{staticClass:"textSecond2"},[t._v(t._s(t.$t("noviceBenefits.obtainBKB")))]),t._v(" "),n("p",{staticClass:"textPrimary0 setFontFamily"},[t._v(t._s(t.resultList.allReward||0))])])]),t._v(" "),t.resultList.list.length?n("ul",{staticClass:"lotteryresults-list"},t._l(t.resultList.list,(function(e,r){return n("li",{key:r,staticClass:"lotteryresults-list-item"},[n("div",{staticClass:"lotteryresults-list-left"},[n("p",{staticClass:"lotteryresults-list-itemNums textPrimary0"},[t._v(t._s(t.$t("noviceBenefits.investment"))+" "),n("span",{staticClass:"setFontFamily"},[t._v(t._s(e.pushPapers))]),t._v(" "+t._s(t.$t("noviceBenefits.araffleticket")))]),t._v(" "),n("p",{staticClass:"lotteryresults-list-item-result textSecond3"},[t._v(t._s(e.code))])]),t._v(" "),1==Number(e.isReward)?n("div",{staticClass:"lotteryresults-list-left"},[n("p",{staticClass:"lotteryresults-list-itemNums textPrimary0"},[t._v("🎉 "+t._s(t.$t("noviceBenefits.Congratulations")))]),t._v(" "),n("p",{staticClass:"lotteryresults-list-item-result colorPrimary",staticStyle:{"text-align":"right"}},[t._v("+ "),n("span",{staticClass:"setFontFamily"},[t._v(t._s(e.reward))]),t._v(" BKB")])]):t._e(),t._v(" "),0==Number(e.isReward)?n("div",{staticClass:"lotteryresults-list-item-result lotteryresults-list-right textSecond3"},[t._v("\r\n                 "+t._s(t.$t("noviceBenefits.Failedto"))+"\r\n             ")]):t._e(),t._v(" "),2==Number(e.isReward)?n("div",{staticClass:"lotteryresults-list-item-result lotteryresults-list-right textSecond3"},[t._v("\r\n                 "+t._s(t.$t("noviceBenefits.Tobewon"))+"\r\n             ")]):t._e()])})),0):t._e(),t._v(" "),t.resultList.list.length?t._e():n("div",{staticClass:"lotteryresults-nodata"},[n("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png",alt:""}}),t._v(" "),n("p",{staticClass:"textSecond3"},[t._v(t._s(t.$t("mining.noData")))])])])}),[],!1,null,null,null),e.default=s.exports}}]);