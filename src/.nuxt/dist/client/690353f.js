(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{371:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(35),o=(t=(n(60),n(19)),n(94)),s=(t=n.n(o),n(2)),i=n(93),l=(n(92),function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];(e=console).log.apply(e,["bit-activity-request:"].concat(n))}),a=t.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});a.interceptors.request.use((function(e){var t,n,r;return l("requestlog:",e),s.a.prototype.$store&&(n=(r=(t=s.a.prototype.$store.state).local).UA,r=r.locale,n.isBitKeep?Object.assign(e.headers,t.local.bitkeep,{language:r}):Object.assign(e.headers,{language:r})),e}),(function(e){return Promise.resolve({status:1})})),a.interceptors.response.use((function(e){return e.data}),(function(e){!function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];(e=console).log.apply(e,["bit-activity-response:"].concat(n))}("responselog:",e);var t="网路开了小差";t=(e=Object(i.b)()||{}).t?e.t("base.networkErro"):t;return Promise.resolve({status:1,data:t})}));var u=(t={mBoxList:function(e){return a.get("user/activity/mBoxList",{params:e,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(e){return a.get("user/activity/openMBox",{params:e})},helpMBox:function(e){return a.get("user/activity/helpMBox",{params:e})},userInviteList:function(e){return a.get("user/activity/inviteList",{params:e})},mBoxDetail:function(e){return a.get("user/activity/mBoxDetail",{params:e})},getCbkbSwapInfo:function(e){return a.get("user/cloudwallet/getCbkbSwapInfo",{params:e})},swapBkb:function(e){return a.get("user/cloudwallet/swapBkb",{params:e})},getAirDropCount:function(e){return a.post("user/cloudwallet/getAirDropCount",e)},getAirDrop:function(e){return a.post("user/cloudwallet/getAirDrop",e)},miningInfo:function(e){return a.post("swap/mining/info",e)},historyPhase:function(e){return a.post("swap/mining/historyPhase",e)},receiveAward:function(e){return a.post("swap/mining/receiveAward",e)},getInviteList:function(e){return a.post("user/friendship/getInviteList",e)},certifyFriendship:function(e){return a.post("user/friendship/certifyFriendship",e)},activityDoneRewardList:function(e){return a.post("swap/mining/activityDoneRewardList",e)},welfareSignIn:function(e){return a.post("user/welfare/signIn",e)},getRewardDetail:function(e){return a.post("user/welfare/getRewardDetail",e)},getSignInDetailByUser:function(e){return a.post("user/welfare/getSignInDetailByUser",e)},getRewardResult:function(e){return a.post("user/welfare/getRewardResult",e)}},Object(r.a)(t,"getRewardDetail",(function(e){return a.post("user/welfare/getRewardDetail",e)})),Object(r.a)(t,"pushPapersIn",(function(e){return a.post("user/welfare/pushPapersIn",e)})),Object(r.a)(t,"getJoinTeleJob",(function(e){return a.post("user/welfare/getJoinTeleJob",e)})),Object(r.a)(t,"getFirstSwapJob",(function(e){return a.post("user/welfare/getFirstSwapJob",e)})),Object(r.a)(t,"getFirst50UJob",(function(e){return a.post("user/welfare/getFirst50UJob",e)})),Object(r.a)(t,"newUserRewardJobs",(function(e){return a.post("user/welfare/newUserRewardJobs",e)})),t)},486:function(e,t,n){var r=n(586);(r="string"==typeof(r=r.__esModule?r.default:r)?[[e.i,r,""]]:r).locals&&(e.exports=r.locals),(0,n(110).default)("23e3ae60",r,!0,{sourceMap:!1})},585:function(e,t,n){"use strict";n(486)},586:function(e,t,n){(n=n(109)(!1)).push([e.i,".theme-light .textPrimary0 {\n  color: #080D21;\n}\n.theme-light .textSecond1 {\n  color: #4B5373;\n}\n.theme-light .textSecond2 {\n  color: #7F828F;\n}\n.theme-light .textSecond3 {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine {\n  background-color: #F4F5FA;\n}\n.theme-light .colorBackground0 {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1 {\n  background-color: #fff;\n}\n.theme-light .colorBackground2 {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3 {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary {\n  color: #495BFF;\n}\n.theme-light .colorSecond01 {\n  color: #1CBDB5;\n}\n.theme-light .backgroundSecond01 {\n  background-color: #1CBDB5;\n}\n.theme-light .colorSecond02 {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03 {\n  color: #26BC80;\n}\n.theme-light .colorSecond04 {\n  color: #FF8146;\n}\n.theme-light .colorSecond05 {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06 {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07 {\n  color: #F04E98;\n}\n.theme-light .colorBlack {\n  color: #000;\n}\n.theme-light .colorwhite {\n  color: #fff;\n}\n.theme-light .colorSecond10 {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11 {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12 {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13 {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14 {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15 {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0 {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1 {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2 {\n  color: #7F828F;\n}\n.theme-dark .textSecond3 {\n  color: #6D707D;\n}\n.theme-dark .colorDisable {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine {\n  background-color: #1F212E;\n}\n.theme-dark .colorBackground0 {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1 {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2 {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3 {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01 {\n  color: #1CBDB5;\n}\n.theme-dark .backgroundSecond01 {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorSecond02 {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03 {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04 {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05 {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06 {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07 {\n  color: #F04E98;\n}\n.theme-dark .colorBlack {\n  color: #000;\n}\n.theme-dark .colorwhite {\n  color: #fff;\n}\n.theme-dark .colorSecond10 {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11 {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12 {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13 {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14 {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15 {\n  color: rgba(47,128,237,0.1);\n}\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n}\nbody::-webkit-scrollbar {\n  display: none;\n}\np {\n  margin: 0;\n  padding: 0;\n}\n.lotteryresults {\n  min-height: 100vh;\n}\n.lotteryresults-content {\n  height: 0.27rem;\n}\n.lotteryresults-summary {\n  height: 1.76rem;\n  border-radius: 0.21rem;\n  margin: 0 0.43rem 0.27rem 0.43rem;\n  display: flex;\n  justify-content: space-around;\n}\n.lotteryresults-summary-item p:nth-child(1) {\n  font-size: 0.32rem;\n  text-align: center;\n  margin-top: 0.4rem;\n}\n.lotteryresults-summary-item p:nth-child(2) {\n  font-size: 0.53rem;\n  text-align: center;\n}\n.lotteryresults-list-item {\n  height: 1.6rem;\n  padding: 0.4rem 0.43rem;\n  display: flex;\n  justify-content: space-between;\n}\n.lotteryresults-list-item .lotteryresults-list-itemNums {\n  font-size: 0.37rem;\n}\n.lotteryresults-list-item .lotteryresults-list-item-result {\n  font-size: 0.32rem;\n}\n.lotteryresults-list-item .lotteryresults-list-right {\n  line-height: 0.8rem;\n  font-size: 0.37rem;\n}\n.lotteryresults-nodata {\n  min-height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.lotteryresults-nodata img {\n  width: 2.67rem;\n  height: 2.67rem;\n}\n.lotteryresults-nodata p {\n  font-size: 0.37rem;\n}\n.colorBlue {\n  color: #495BFF !important;\n}",""]),e.exports=n},626:function(e,t,n){"use strict";n.r(t),n(55),n(41),n(61),n(80),n(48),n(81);var r=n(14),o=n(35),s=(n(70),n(68),n(371)),i=n(91);function l(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)),r}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}i={name:"Novicebenefits",data:function(){return{isLoading:!0,CouponsNums:"",resultList:{pushTimes:0,pushPapers:0,allReward:0,list:[]}}},computed:c(c({},Object(i.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep}}),components:{},mounted:function(){this.getInfo(),this.setIcon(),this.getRewardResult()},methods:{getRewardResult:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.getRewardResult();case 2:n=t.sent,r=n.data,n.status,r&&(e.resultList=r);case 6:case"end":return t.stop()}}),t)})))()},getInfo:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.miningInfo();case 2:if(n=t.sent,r=n.data,1==n.status)return e.isLoading=!1,t.abrupt("return",e.$dialog.alert({message:r,confirmButtonText:e.$t("CbkbExchange.know"),confirmButtonColor:"$theme-light-colorPrimary"}));t.next=8;break;case 8:e.isLoading=!1;case 9:case"end":return t.stop()}}),t)})))()},setIcon:function(){var e=this;this.isBitKeep&&BitKeepInvoke.onLoadReady((function(){BitKeepInvoke.setTitle(e.$t("noviceBenefits.Lotteryresults")),e.$nextTick((function(){BitKeepInvoke.appMode((function(t,n){var r=document.getElementsByTagName("body")[0];1==n?(e.theme=1,e.question="https://cdn.bitkeep.vip/u_b_47485390-4f90-11ec-ace3-97579b99c357.png",r.setAttribute("class","theme-dark")):(e.theme=0,e.question="https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png",r.setAttribute("class","theme-light")),setTimeout((function(){BitKeepInvoke.setIconAction("")}),500)}))}))}))}}},n(585),n=n(79),i=Object(n.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lotteryresults colorBackground1"},[n("div",{staticClass:"lotteryresults-content"}),e._v(" "),n("div",{staticClass:"lotteryresults-summary colorBackground3"},[n("div",{staticClass:"lotteryresults-summary-item"},[n("p",{staticClass:"textSecond2"},[e._v(e._s(e.$t("noviceBenefits.participationperiods")))]),e._v(" "),n("p",{staticClass:"textPrimary0 setFontFamily"},[e._v(e._s(e.resultList.pushTimes||0))])]),e._v(" "),n("div",{staticClass:"lotteryresults-summary-item"},[n("p",{staticClass:"textSecond2"},[e._v(e._s(e.$t("noviceBenefits.ticketsinvested")))]),e._v(" "),n("p",{staticClass:"textPrimary0 setFontFamily"},[e._v(e._s(e.resultList.pushPapers||0))])]),e._v(" "),n("div",{staticClass:"lotteryresults-summary-item"},[n("p",{staticClass:"textSecond2"},[e._v(e._s(e.$t("noviceBenefits.obtainBKB")))]),e._v(" "),n("p",{staticClass:"textPrimary0 setFontFamily"},[e._v(e._s(e.resultList.allReward||0))])])]),e._v(" "),e.resultList.list.length?n("ul",{staticClass:"lotteryresults-list"},e._l(e.resultList.list,(function(t,r){return n("li",{key:r,staticClass:"lotteryresults-list-item"},[n("div",{staticClass:"lotteryresults-list-left"},[n("p",{staticClass:"lotteryresults-list-itemNums textPrimary0"},[e._v(e._s(e.$t("noviceBenefits.investment"))+" "),n("span",{staticClass:"setFontFamily"},[e._v(e._s(t.pushPapers))]),e._v(" "+e._s(e.$t("noviceBenefits.araffleticket")))]),e._v(" "),n("p",{staticClass:"lotteryresults-list-item-result textSecond3"},[e._v(e._s(t.code))])]),e._v(" "),1==Number(t.isReward)?n("div",{staticClass:"lotteryresults-list-left"},[n("p",{staticClass:"lotteryresults-list-itemNums textPrimary0"},[e._v("🎉 "+e._s(e.$t("noviceBenefits.Congratulations")))]),e._v(" "),n("p",{staticClass:"lotteryresults-list-item-result colorPrimary",staticStyle:{"text-align":"right"}},[e._v("+ "),n("span",{staticClass:"setFontFamily"},[e._v(e._s(t.reward))]),e._v(" BKB")])]):e._e(),e._v(" "),0==Number(t.isReward)?n("div",{staticClass:"lotteryresults-list-item-result lotteryresults-list-right textSecond3"},[e._v("\n                 "+e._s(e.$t("noviceBenefits.Failedto"))+"\n             ")]):e._e(),e._v(" "),2==Number(t.isReward)?n("div",{staticClass:"lotteryresults-list-item-result lotteryresults-list-right textSecond3"},[e._v("\n                 "+e._s(e.$t("noviceBenefits.Tobewon"))+"\n             ")]):e._e()])})),0):e._e(),e._v(" "),e.resultList.list.length?e._e():n("div",{staticClass:"lotteryresults-nodata"},[n("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png",alt:""}}),e._v(" "),n("p",{staticClass:"textSecond3"},[e._v(e._s(e.$t("mining.noData")))])])])}),[],!1,null,null,null),t.default=i.exports}}]);