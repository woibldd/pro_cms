(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{373:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n(60);e=n(20);var a=n(94),i=(e=n.n(a),n(2)),r=n(93),s=(n(92),function(){for(var t,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];(t=console).log.apply(t,["bit-activity-request:"].concat(n))}),o=e.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});o.interceptors.request.use((function(t){var e,n,a;return s("requestlog:",t),i.a.prototype.$store&&(n=(a=(e=i.a.prototype.$store.state).local).UA,a=a.locale,n.isBitKeep?Object.assign(t.headers,e.local.bitkeep,{language:a}):Object.assign(t.headers,{language:a})),t}),(function(t){return Promise.resolve({status:1})})),o.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];(t=console).log.apply(t,["bit-activity-response:"].concat(n))}("responselog:",t);var e="网路开了小差";e=(t=Object(r.b)()||{}).t?t.t("base.networkErro"):e;return Promise.resolve({status:1,data:e})}));var c={mBoxList:function(t){return o.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return o.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return o.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return o.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return o.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return o.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return o.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return o.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return o.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return o.post("swap/mining/info",t)},historyPhase:function(t){return o.post("swap/mining/historyPhase",t)},receiveAward:function(t){return o.post("swap/mining/receiveAward",t)},getInviteList:function(t){return o.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return o.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return o.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return o.post("/user/cloudstaking/poolList",t)},myPool:function(t){return o.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return o.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return o.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return o.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return o.post("/user/cloudstaking/getToken",t)},tradingGetList:function(t){return o.post("swap/tradeCompetition/getList",t)},tradingWaitClaim:function(t){return o.post("swap/tradeCompetition/waitClaim",t)},tradingClaim:function(t){return o.post("swap/tradeCompetition/claim",t)},tradingSummary:function(t){return o.post("swap/tradeCompetition/summary",t)},tradingHistory:function(t){return o.post("swap/tradeCompetition/history",t)},welfareSignIn:function(t){return o.post("user/welfare/signIn",t)},getRewardDetail:function(t){return o.post("user/welfare/getRewardDetail",t)},getSignInDetailByUser:function(t){return o.post("user/welfare/getSignInDetailByUser",t)},getRewardResult:function(t){return o.post("user/welfare/getRewardResult",t)},pushPapersIn:function(t){return o.post("user/welfare/pushPapersIn",t)},getJoinTeleJob:function(t){return o.post("user/welfare/getJoinTeleJob",t)},getFirstSwapJob:function(t){return o.post("user/welfare/getFirstSwapJob",t)},getFirst50UJob:function(t){return o.post("user/welfare/getFirst50UJob",t)},newUserRewardJobs:function(t){return o.post("user/welfare/newUserRewardJobs",t)}}},619:function(t,e,n){var a=n(702);(a="string"==typeof(a=a.__esModule?a.default:a)?[[t.i,a,""]]:a).locals&&(t.exports=a.locals),(0,n(110).default)("e63b1c6e",a,!0,{sourceMap:!1})},620:function(t,e,n){var a=n(704);(a="string"==typeof(a=a.__esModule?a.default:a)?[[t.i,a,""]]:a).locals&&(t.exports=a.locals),(0,n(110).default)("e75c537c",a,!0,{sourceMap:!1})},701:function(t,e,n){"use strict";n(619)},702:function(t,e,n){(n=n(109)(!1)).push([t.i,".van-dialog__message {\n  font-size: 0.43rem !important;\n  padding: 0 0.64rem !important;\n  font-weight: 500;\n}\n.van-dialog__confirm {\n  font-weight: 500;\n  font-size: 0.45rem;\n}",""]),t.exports=n},703:function(t,e,n){"use strict";n(620)},704:function(t,e,n){(n=n(109)(!1)).push([t.i,'.loading[data-v-37784e65] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.img[data-v-37784e65] {\n  height: 3.73rem;\n}\n.img img[data-v-37784e65] {\n  width: 100%;\n}\n.text[data-v-37784e65] {\n  margin-top: 0.8rem;\n  text-align: center;\n}\n.text .balance[data-v-37784e65] {\n  font-size: 0.37rem;\n  line-height: 0.43rem;\n  text-align: center;\n  color: #4B5373;\n  font-family: "bitkeep DIN";\n}\n.text .text-t[data-v-37784e65] {\n  font-weight: 500;\n  font-size: 0.37rem;\n  margin: 0.27rem 0 0 0;\n  color: #080D21;\n}\n.text .text-n[data-v-37784e65] {\n  font-size: 0.8rem;\n  margin: 0.27rem 0 0;\n  line-height: 0.48rem;\n  font-family: "bitkeep DIN";\n  color: #080D21;\n  height: 0.48rem;\n}\n.text .text-n .setH[data-v-37784e65] {\n  height: 0.48rem;\n}\n.text .text-n .setFont[data-v-37784e65] {\n  font-size: 0.43rem;\n}\n.text .swap-btn[data-v-37784e65] {\n  width: 4.43rem;\n  height: 1.33rem;\n  color: #fff;\n  margin: 0.53rem auto;\n  background: #7524f9;\n  border-radius: 0.27rem;\n  font-weight: 500;\n  font-size: 0.43rem;\n  line-height: 1.33rem;\n  display: block;\n}\n.text .disabled[data-v-37784e65] {\n  opacity: .5;\n}\n.exchange[data-v-37784e65] {\n  margin: 0.8rem 0.43rem;\n  background: #F3F5F6;\n  border-radius: 0.21rem;\n  padding: 0.05rem 0.4rem;\n  font-size: 0.37rem;\n  line-height: 0.43rem;\n}\n.exchange[data-v-37784e65] :first-child {\n  font-size: 0.43rem;\n}\n.exchange .title[data-v-37784e65] {\n  color: #080D21;\n  font-weight: 600;\n}\n.exchange .content[data-v-37784e65] {\n  color: #4B5373;\n}\n.line[data-v-37784e65] {\n  width: 100%;\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.about[data-v-37784e65] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.about .about-title[data-v-37784e65] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  font-weight: 600;\n  color: #080D21;\n  vertical-align: middle;\n}\n.about .about-title img[data-v-37784e65] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: text-top;\n  margin-right: 0.13rem;\n}\n.about .about-con[data-v-37784e65] {\n  padding-top: 0.4rem;\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n  color: #4B5373;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.about .viewAll[data-v-37784e65] {\n  text-align: right;\n  font-size: 0.37rem;\n  line-height: 0.37rem;\n  color: #7524f9;\n  margin-top: 0.16rem;\n}\n.distribution[data-v-37784e65] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.distribution .distribution-title[data-v-37784e65] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  font-weight: 600;\n  color: #080D21;\n  vertical-align: middle;\n}\n.distribution .distribution-title img[data-v-37784e65] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: text-top;\n  margin-right: 0.13rem;\n}\n.distribution .charts-img[data-v-37784e65] {\n  text-align: center;\n  margin: 0.53rem;\n}\n.distribution .charts-img img[data-v-37784e65] {\n  width: 2.93rem;\n  height: 2.93rem;\n}\n.distribution .charts-img .exchangeTotal[data-v-37784e65] {\n  font-family: bitkeep DIN;\n  font-size: 0.37rem;\n  color: #4B5373;\n}\n.distribution .charts-img .total[data-v-37784e65] {\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n  color: #4B5373;\n}\n.distribution .charts-img .total span[data-v-37784e65] {\n  color: #080D21;\n}\n.distribution .distribution-man[data-v-37784e65] {\n  margin-bottom: 0.8rem;\n  background: #F3F5F6;\n  border-radius: 0.21rem;\n  padding: 0.27rem;\n}\n.distribution .distribution-man .data[data-v-37784e65] {\n  display: flex;\n  justify-content: space-between;\n}\n.distribution .distribution-man .data div[data-v-37784e65]:last-child {\n  font-family: bitkeep DIN;\n  font-size: 0.37rem;\n  color: #080D21;\n}\n.distribution .distribution-man .data>div[data-v-37784e65] {\n  font-size: 0.37rem;\n  line-height: 0.91rem;\n  color: #4B5373;\n  vertical-align: middle;\n}\n.distribution .distribution-man .data>div span[data-v-37784e65]:first-child {\n  display: inline-block;\n  width: 0.16rem;\n  height: 0.16rem;\n  border-radius: 50%;\n  vertical-align: middle;\n  margin-right: 0.11rem;\n}\n.distribution .distribution-man .data>div span[data-v-37784e65]:last-child {\n  color: #4B5373;\n  vertical-align: middle;\n}\n.hold[data-v-37784e65] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.hold .hold-title[data-v-37784e65] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  font-weight: 600;\n  color: #080D21;\n  vertical-align: middle;\n}\n.hold .hold-title img[data-v-37784e65] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: text-top;\n  margin-right: 0.13rem;\n}\n.hold .hold-content[data-v-37784e65] {\n  font-size: 0.37rem;\n  color: #4B5373;\n  text-indent: -0.37rem;\n  padding-left: 0.4rem;\n}\n.appreciation[data-v-37784e65] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.appreciation .appreciation-title[data-v-37784e65] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  font-weight: 600;\n  color: #080D21;\n  vertical-align: middle;\n}\n.appreciation .appreciation-grid[data-v-37784e65] {\n  width: 100%;\n  text-align: center;\n}\n.appreciation .appreciation-grid .appreciation-grid-flex[data-v-37784e65] {\n  display: flex;\n  flex-direction: row;\n  margin-top: 0.53rem;\n}\n.appreciation .appreciation-grid .appreciation-grid-flex div[data-v-37784e65] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 50%;\n  float: left;\n}\n.appreciation .appreciation-grid .appreciation-grid-flex div img[data-v-37784e65] {\n  margin-top: 0.13rem;\n  width: 0.64rem;\n  height: 0.64rem;\n}\n.appreciation .appreciation-grid .appreciation-grid-flex div span[data-v-37784e65] {\n  font-size: 0.37rem;\n  color: #7F828F;\n  width: 3.2rem;\n  margin-top: 0.13rem;\n}\n.more[data-v-37784e65] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.more .more-title[data-v-37784e65] {\n  font-size: 0.43rem;\n  line-height: 1.2rem;\n  font-weight: 600;\n  color: #080D21;\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.more .more-line[data-v-37784e65] {\n  font-size: 0.43rem;\n  line-height: 1.33rem;\n  height: 1.33rem;\n  border-bottom: 0.03rem solid #F4F5FA;\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.more .more-line .setIcon[data-v-37784e65] {\n  color: #999BA3;\n}\n.more .more-line a[data-v-37784e65] {\n  flex: 1;\n}\n.more .more-line img[data-v-37784e65] {\n  width: 0.64rem;\n  height: 0.64rem;\n  vertical-align: middle;\n}\n.more .more-line span[data-v-37784e65] {\n  color: #080D21;\n  display: inline-block;\n  margin-left: 0.27rem;\n}',""]),t.exports=n},795:function(t,e,n){"use strict";n.r(e),n(55),n(41),n(61),n(80),n(48),n(81);var r=n(14),a=n(36),s=(n(47),n(69),n(20),n(82),n(68),n(373)),i=n(165),o=n(91);function c(t,e){var n,a=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)),a}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}i={name:"cbkbexchange",data:function(){return{cbkbBalance:0,available:0,src:"https://cn.etherscan.com/address/0xa286035a1e60abf172524bdbfd224abeef6ce362",flag:!1,enable:null,isLoading:!0}},computed:l(l({},Object(o.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep}}),created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.addEventListener("load",(function(){t.getBalance()})),e.next=3,t.$nextTick();case 3:t.isLoading=!1;case 4:case"end":return e.stop()}}),e)})))()},beforeMount:function(){this.isBitKeep&&BitKeepInvoke.setTitle(this.$t("CbkbExchange.swapTitle"))},methods:{getBalance:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.ethereum){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,window.ethereum.request({method:"eth_requestAccounts"});case 6:t.getCbkbSwapInfo(window.ethereum.selectedAddress);case 7:case"end":return e.stop()}}),e)})))()},getCbkbSwapInfo:function(a){var i=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.getCbkbSwapInfo({userid:a});case 2:if(e=t.sent,n=e.data,1==e.status)return t.abrupt("return",i.$dialog.alert({message:n,confirmButtonText:i.$t("CbkbExchange.know"),confirmButtonColor:"#7524f9"}));t.next=7;break;case 7:i.cbkbBalance=i.milliFormat(n.cbkbBalance),i.available=i.milliFormat(n.available);case 10:case"end":return t.stop()}}),t)})))()},milliFormat:function(t){return t&&t.toString().replace(/^\d+/g,(function(t){return t.replace(/(?=(?!^)(\d{3})+$)/g,",")}))},swapBkb:Object(i.b)(Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,a=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.swapBkb({userid:window.ethereum.selectedAddress});case 2:if(e=t.sent,n=e.data,1==e.status)return t.abrupt("return",this.$dialog.alert({message:n,confirmButtonText:this.$t("CbkbExchange.know"),confirmButtonColor:"#7524f9"}));t.next=7;break;case 7:this.$dialog.alert({message:n,confirmButtonText:this.$t("CbkbExchange.know"),confirmButtonColor:"#7524f9"}).then((function(){a.getCbkbSwapInfo(window.ethereum.selectedAddress)}));case 8:case"end":return t.stop()}}),t,this)})))),viewAll:function(){this.flag=!this.flag;var t=document.getElementsByClassName("about-con")[0];this.flag?t.setAttribute("style","-webkit-line-clamp:10"):t.setAttribute("style","-webkit-line-clamp:2")}}},n(701),n(703),n=n(79),i=Object(n.a)(i,(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("div",{staticClass:"exchange_cbkb"},[t.isLoading?e("div",{staticClass:"loading"},[e("van-loading",{attrs:{color:"#7524f9",vertical:""}},[t._v("加载中...")])],1):e("div",[e("div",{staticClass:"img"},[e("img",{attrs:{src:"en"==t.locale?"https://cdn.bitkeep.vip/u_b_554fd460-2d88-11ec-8da1-c9fb76b24289.png":"https://cdn.bitkeep.vip/u_b_4c9f1920-2d88-11ec-8da1-c9fb76b24289.png",alt:""}})]),t._v(" "),e("div",{staticClass:"text"},[e("p",{staticClass:"balance"},[t._v(t._s(t.$t("CbkbExchange.balance"))+": "+t._s(t.cbkbBalance)+" cBKB")]),t._v(" "),e("p",{staticClass:"text-t"},[t._v(t._s(t.$t("CbkbExchange.get")))]),t._v(" "),e("p",{staticClass:"text-n"},[e("span",{staticClass:"setH"},[t._v(t._s(t.available))]),t._v(" "),e("span",{staticClass:"setFont"},[t._v("BKB")])]),t._v(" "),e("van-button",{staticClass:"swap-btn",on:{click:t.swapBkb}},[t._v(t._s(t.$t("CbkbExchange.swap")))])],1),t._v(" "),e("div",{staticClass:"exchange"},[e("p",{staticClass:"title"},[t._v(t._s(t.$t("CbkbExchange.exchange"))+" ")]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("CbkbExchange.exchangeTitle")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("CbkbExchange.exchangeTitleA")))]),t._v(" "),e("p",{staticClass:"title"},[t._v(t._s(t.$t("CbkbExchange.exchangeTime")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("CbkbExchange.time")))]),t._v(" "),e("p",{staticClass:"title"},[t._v(t._s(t.$t("CbkbExchange.condition")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("CbkbExchange.conditionText")))]),t._v(" "),e("p",{staticClass:"title"},[t._v(t._s(t.$t("CbkbExchange.proportion")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("CbkbExchange.proportionText")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("CbkbExchange.exchangeTitle2")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("CbkbExchange.exchangeTitle3")))])]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"about"},[e("div",{staticClass:"about-title"},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_27f9ea80-a03a-11ec-ad8b-9ff4f858e021.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.about")))])]),t._v(" "),e("div",{staticClass:"about-con"},[e("span",[t._v("\n          "+t._s(t.$t("CbkbExchange.aboutContent1"))+"\n          ")]),t._v(" "),e("span",[t._v("\n            "+t._s(t.$t("CbkbExchange.aboutContent2"))+"\n          ")])]),t._v(" "),e("div",{staticClass:"viewAll",on:{click:t.viewAll}},[t._v(" "+t._s(this.flag?t.$t("CbkbExchange.pickUp"):t.$t("CbkbExchange.viewAll")))])]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"distribution"},[e("div",{staticClass:"distribution-title"},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_82d62130-a111-11ec-8c7a-8d02428f9af4.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.distribution")))])]),t._v(" "),e("div",{staticClass:"charts-img"},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_c014c440-30d0-11ec-9e24-8d799844d18f.png",alt:""}}),t._v(" "),e("p",{staticClass:"total"},[t._v(t._s(t.$t("CbkbExchange.total"))),e("span",{staticClass:"exchangeTotal"},[t._v("600,000,000")])])]),t._v(" "),e("div",{staticClass:"distribution-man"},[e("div",{staticClass:"data"},[e("div",[e("span",{staticStyle:{background:"#7524f9"}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.mining")))])]),t._v(" "),e("div",[t._v("50%")])]),t._v(" "),e("div",{staticClass:"data"},[e("div",[e("span",{staticStyle:{background:"#2AC8DD"}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.eco")))])]),t._v(" "),e("div",[t._v("20%")])]),t._v(" "),e("div",{staticClass:"data"},[e("div",[e("span",{staticStyle:{background:"#FF8146"}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.community"))+" ")])]),t._v(" "),e("div",[t._v("15%")])]),t._v(" "),e("div",{staticClass:"data"},[e("div",[e("span",{staticStyle:{background:"#F04E98"}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.partner")))])]),t._v(" "),e("div",[t._v("10%")])]),t._v(" "),e("div",{staticClass:"data"},[e("div",[e("span",{staticStyle:{background:"#080D21"}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.tram")))])]),t._v(" "),e("div",[t._v("5%")])])])]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"hold"},[e("div",{staticClass:"hold-title"},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_1e351000-a112-11ec-b5cd-6f94e6599e38.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.hold")))])]),t._v(" "),e("div",{staticClass:"hold-content"},[e("p",[t._v(t._s(t.$t("CbkbExchange.hold1")))]),t._v(" "),e("p",[t._v(t._s(t.$t("CbkbExchange.hold2")))]),t._v(" "),e("p",[t._v(t._s(t.$t("CbkbExchange.hold3")))]),t._v(" "),e("p",[t._v(t._s(t.$t("CbkbExchange.hold4")))]),t._v(" "),e("p",[t._v(t._s(t.$t("CbkbExchange.hold5")))]),t._v(" "),e("p",[t._v(t._s(t.$t("CbkbExchange.hold6")))]),t._v(" "),e("p",[t._v(t._s(t.$t("CbkbExchange.hold7")))]),t._v(" "),e("p",[t._v(t._s(t.$t("CbkbExchange.hold8")))])])]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"appreciation"},[e("div",{staticClass:"appreciation-title"},[e("span",[t._v(t._s(t.$t("CbkbExchange.appreciation")))])]),t._v(" "),e("div",{staticClass:"appreciation-grid"},[e("div",{staticClass:"appreciation-grid-flex"},[e("div",[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_9722db50-a112-11ec-b5cd-6f94e6599e38.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.appreciationSwap")))])]),t._v(" "),e("div",[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_97232970-a112-11ec-b5cd-6f94e6599e38.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.appreciationCoin")))])])]),t._v(" "),e("div",{staticClass:"appreciation-grid-flex"},[e("div",[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_9721f0f0-a112-11ec-b5cd-6f94e6599e38.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.appreciationPool")))])]),t._v(" "),e("div",[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_97230260-a112-11ec-b5cd-6f94e6599e38.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.appreciationValut")))])])])])]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"more"},[e("div",{staticClass:"more-title"},[t._v(t._s(t.$t("CbkbExchange.more")))]),t._v(" "),e("div",{staticClass:"more-line"},[e("a",{attrs:{href:"https://www.bitkeep.com/",target:"_blank"}},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_ddcf2860-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),e("span",[t._v(t._s(t.$t("CbkbExchange.website")))])]),t._v(" "),e("van-icon",{staticClass:"setIcon",attrs:{name:"arrow"}})],1),t._v(" "),e("div",{staticClass:"more-line"},[e("a",{attrs:{href:"https://twitter.com/BitKeepOS",target:"_blank"}},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_ddcf4f71-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.twitter")))])]),t._v(" "),e("van-icon",{staticClass:"setIcon",attrs:{name:"arrow"}})],1),t._v(" "),e("div",{staticClass:"more-line"},[e("a",{attrs:{href:"https://t.me/bitkeep",target:"_blank"}},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_ddcf0150-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.telegram")))])]),t._v(" "),e("van-icon",{staticClass:"setIcon",attrs:{name:"arrow"}})],1),t._v(" "),e("div",{staticClass:"more-line"},[e("a",{attrs:{href:t.src,target:"_blank"}},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_ddceda40-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.explorer")))])]),t._v(" "),e("van-icon",{staticClass:"setIcon",attrs:{name:"arrow"}})],1)])])])}),[],!1,null,"37784e65",null),e.default=i.exports}}]);