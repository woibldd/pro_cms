(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{369:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t(60);n=t(19);var a=t(94),r=(n=t.n(a),t(2)),o=t(93),i=(t(92),function(){for(var e,n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];(e=console).log.apply(e,["bit-activity-request:"].concat(t))}),d=n.a.create({baseURL:"/",timeout:6e4,headers:{token:"1a5b1cbcc613d8b52860262109d247a3",language:"zh",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});d.interceptors.request.use((function(e){var n,t,a;return i("requestlog:",e),r.a.prototype.$store&&(t=(a=(n=r.a.prototype.$store.state).local).UA,a=a.locale,t.isBitKeep?Object.assign(e.headers,n.local.bitkeep,{language:a}):Object.assign(e.headers,{language:a})),e}),(function(e){return Promise.resolve({status:1})})),d.interceptors.response.use((function(e){return e.data}),(function(e){!function(){for(var e,n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];(e=console).log.apply(e,["bit-activity-response:"].concat(t))}("responselog:",e);var n="网路开了小差";n=(e=Object(o.b)()||{}).t?e.t("base.networkErro"):n;return Promise.resolve({status:1,data:n})}));var s={mBoxList:function(e){return d.get("user/activity/mBoxList",{params:e,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(e){return d.get("user/activity/openMBox",{params:e})},helpMBox:function(e){return d.get("user/activity/helpMBox",{params:e})},userInviteList:function(e){return d.get("user/activity/inviteList",{params:e})},mBoxDetail:function(e){return d.get("user/activity/mBoxDetail",{params:e})},getCbkbSwapInfo:function(e){return d.get("user/cloudwallet/getCbkbSwapInfo",{params:e})},swapBkb:function(e){return d.get("user/cloudwallet/swapBkb",{params:e})},getAirDropCount:function(e){return d.post("user/cloudwallet/getAirDropCount",e)},getAirDrop:function(e){return d.post("user/cloudwallet/getAirDrop",e)},miningInfo:function(e){return d.post("swap/mining/info",e)},historyPhase:function(e){return d.post("swap/mining/historyPhase",e)},receiveAward:function(e){return d.post("swap/mining/receiveAward",e)},getInviteList:function(e){return d.post("user/friendship/getInviteList",e)},certifyFriendship:function(e){return d.post("user/friendship/certifyFriendship",e)},activityDoneRewardList:function(e){return d.post("swap/mining/activityDoneRewardList",e)}}},478:function(e,n,t){var a=t(563);(a="string"==typeof(a=a.__esModule?a.default:a)?[[e.i,a,""]]:a).locals&&(e.exports=a.locals),(0,t(110).default)("310f67e8",a,!0,{sourceMap:!1})},562:function(e,n,t){"use strict";t(478)},563:function(e,n,t){(t=t(109)(!1)).push([e.i,'.theme-light .textPrimary0[data-v-08e6fee8] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-08e6fee8] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-08e6fee8] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-08e6fee8] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-08e6fee8] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-08e6fee8] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorBackground0[data-v-08e6fee8] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-08e6fee8] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-08e6fee8] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-08e6fee8] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-08e6fee8] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-08e6fee8] {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary[data-v-08e6fee8] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-08e6fee8] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-08e6fee8] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-08e6fee8] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-08e6fee8] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-08e6fee8] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-08e6fee8] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-08e6fee8] {\n  color: #F04E98;\n}\n.theme-light .colorBlack[data-v-08e6fee8] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-08e6fee8] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-08e6fee8] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-08e6fee8] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-08e6fee8] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-08e6fee8] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-08e6fee8] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-08e6fee8] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0[data-v-08e6fee8] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-08e6fee8] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-08e6fee8] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-08e6fee8] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-08e6fee8] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-08e6fee8] {\n  background-color: #1F212E;\n}\n.theme-dark .colorBackground0[data-v-08e6fee8] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-08e6fee8] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-08e6fee8] {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3[data-v-08e6fee8] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-08e6fee8] {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary[data-v-08e6fee8] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-08e6fee8] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-08e6fee8] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-08e6fee8] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-08e6fee8] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-08e6fee8] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-08e6fee8] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-08e6fee8] {\n  color: #F04E98;\n}\n.theme-dark .colorBlack[data-v-08e6fee8] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-08e6fee8] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-08e6fee8] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-08e6fee8] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-08e6fee8] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-08e6fee8] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-08e6fee8] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-08e6fee8] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .hisory-wrap[data-v-08e6fee8] {\n  background: #F8F9FA;\n}\n.theme-light .hisory-wrap .mining-wrap-one[data-v-08e6fee8] {\n  background: #fff;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header[data-v-08e6fee8] {\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title[data-v-08e6fee8] {\n  color: #080D21;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title spam[data-v-08e6fee8] {\n  color: #080D21;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-right[data-v-08e6fee8] {\n  color: #495BFF;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-update[data-v-08e6fee8] {\n  color: #9CA5B3;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-about[data-v-08e6fee8] {\n  color: #9CA5B3;\n  background: #F3F5F6;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .inProgress[data-v-08e6fee8] {\n  color: #1CBDB5;\n  background: rgba(28,189,181,0.1);\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .comingsoon[data-v-08e6fee8] {\n  color: #FF8146;\n  background: rgba(255,129,70,0.1);\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .activityEnd[data-v-08e6fee8] {\n  color: #9CA5B3;\n  background: #F3F5F6;\n}\n.theme-light .hisory-wrap .mining-wrap-one .produced[data-v-08e6fee8] {\n  color: #7F828F;\n}\n.theme-light .hisory-wrap .line[data-v-08e6fee8] {\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-dark .hisory-wrap[data-v-08e6fee8] {\n  background: #0A0E1F;\n}\n.theme-dark .hisory-wrap .mining-wrap-one[data-v-08e6fee8] {\n  background: #171A26;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header[data-v-08e6fee8] {\n  border-bottom: 0.03rem solid #1F212E;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title[data-v-08e6fee8] {\n  color: #DFE0E3;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title spam[data-v-08e6fee8] {\n  color: #DFE0E3;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-right[data-v-08e6fee8] {\n  color: #495BFF;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-update[data-v-08e6fee8] {\n  color: #6D707D;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-about[data-v-08e6fee8] {\n  color: #6D707D;\n  background: #131620;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .inProgress[data-v-08e6fee8] {\n  color: #1CBDB5;\n  background: rgba(28,189,181,0.1);\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .comingsoon[data-v-08e6fee8] {\n  color: #FF8146;\n  background: rgba(255,129,70,0.1);\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .activityEnd[data-v-08e6fee8] {\n  color: #6D707D;\n  background: #131620;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .produced[data-v-08e6fee8] {\n  color: #7F828F;\n}\n.theme-dark .hisory-wrap .line[data-v-08e6fee8] {\n  border-bottom: 0.03rem solid #1F212E;\n}\n.hisory-wrap[data-v-08e6fee8] {\n  min-height: 100vh;\n  padding: 0.4rem 0.43rem 1.07rem;\n}\n.hisory-wrap .mining-wrap-one[data-v-08e6fee8]:not(:first-child) {\n  margin-top: 0.27rem;\n}\n.hisory-wrap .mining-wrap-one[data-v-08e6fee8] {\n  border-radius: 0.21rem;\n  font-size: 0.37rem;\n  line-height: 0.43rem;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header[data-v-08e6fee8] {\n  display: flex;\n  justify-content: space-between;\n  height: 0.96rem;\n  line-height: 0.96rem;\n  padding-left: 0.45rem;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title img[data-v-08e6fee8] {\n  width: 0.4rem;\n  height: 0.4rem;\n  vertical-align: text-bottom;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title span[data-v-08e6fee8] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  vertical-align: text-bottom;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-right[data-v-08e6fee8] {\n  padding-right: 0.4rem;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-update[data-v-08e6fee8] {\n  font-size: 0.27rem;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-about[data-v-08e6fee8] {\n  height: 0.64rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 0.64rem;\n  text-align: center;\n  padding: 0.05rem 0.32rem;\n  border-top-right-radius: 0.21rem;\n  border-bottom-left-radius: 0.21rem;\n}\n.hisory-wrap .mining-wrap-one .produced[data-v-08e6fee8] {\n  font-size: 0.37rem;\n  display: flex;\n  justify-content: space-between;\n}\n.hisory-wrap .mining-wrap-one .mining-setP[data-v-08e6fee8] {\n  padding: 0 0.4rem 0.03rem;\n}\n.hisory-wrap .mining-wrap-one .line[data-v-08e6fee8] {\n  border-bottom: 0.03rem solid #dadbde;\n}\n.hisory-wrap .mining-wrap-one .mining_trans[data-v-08e6fee8] {\n  margin: 0.53rem 0 !important;\n}\n.hisory-wrap .mining-wrap-one .mbottom[data-v-08e6fee8] {\n  margin-bottom: 0.4rem !important;\n}\n.hisory-wrap .mining-wrap-one .setFontFamily[data-v-08e6fee8] {\n  font-family: "bitkeep DIN";\n}\n.loading[data-v-08e6fee8] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.noData[data-v-08e6fee8] {\n  min-height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.noData img[data-v-08e6fee8] {\n  width: 2.67rem;\n  height: 2.67rem;\n}\n.noData p[data-v-08e6fee8] {\n  font-size: 0.37rem;\n}',""]),e.exports=t},596:function(e,n,t){"use strict";t.r(n),t(55),t(41),t(61),t(80),t(48),t(81);var r=t(14),a=t(35),o=(t(68),t(369)),i=t(91);function d(e,n){var t,a=Object.keys(e);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(e),n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)),a}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}i={data:function(){return{historyPhaseList:[],isLoading:!0}},computed:c(c({},Object(i.b)(["local"])),{},{isBitKeep:function(){return this.local.UA.isBitKeep}}),beforeMount:function(){var a=this;this.isBitKeep&&BitKeepInvoke.onLoadReady((function(){BitKeepInvoke.setTitle(a.$t("mining.historyTitle")),BitKeepInvoke.setIconAction(),BitKeepInvoke.appMode((function(e,n){var t=document.getElementsByTagName("body")[0];1==n?(a.theme=1,t.setAttribute("class","theme-dark")):(a.theme=0,t.setAttribute("class","theme-light"))}))}))},mounted:function(){this.historyPhase()},methods:{historyPhase:function(){var a=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.historyPhase();case 2:if(n=e.sent,t=n.data,1==n.status)return a.isLoading=!1,e.abrupt("return",a.$dialog.alert({message:t,confirmButtonText:a.$t("CbkbExchange.know"),confirmButtonColor:"#495BFF"}));e.next=8;break;case 8:a.historyPhaseList=t,a.isLoading=!1;case 10:case"end":return e.stop()}}),e)})))()}}},t(562),t=t(79),i=Object(t.a)(i,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"hisory-wrap"},[e.isLoading?a("div",{staticClass:"loading"},[a("van-loading",{attrs:{color:"#1989fa",vertical:""}},[e._v(e._s(e.$t("base.loading"))+"...")])],1):0<e.historyPhaseList.length?a("div",e._l(e.historyPhaseList,(function(n,t){return a("div",{key:t,staticClass:"mining-wrap-one"},[a("div",{staticClass:"mining-wrap-one-header"},[a("div",{staticClass:"mining-wrap-one-header-title"},[a("span",{staticClass:"setFontFamily"},[e._v(e._s(e.$t("mining.phase",{v:n.phase})))])]),e._v(" "),0==n.isActivity?a("div",{staticClass:"mining-wrap-one-header-about comingsoon"},[a("span",[e._v(e._s(e.$t("mining.comingsoon")))])]):e._e(),e._v(" "),1==n.isActivity?a("div",{staticClass:"mining-wrap-one-header-about inProgress"},[a("span",[e._v(e._s(e.$t("mining.inProgress")))])]):e._e(),e._v(" "),2==n.isActivity?a("div",{staticClass:"mining-wrap-one-header-about activityEnd"},[a("span",[e._v(e._s(e.$t("mining.activity")))])]):e._e()]),e._v(" "),a("div",{staticClass:"mining-setP"},[a("div",{staticClass:"produced mining_trans"},[a("span",[e._v(e._s(e.$t("mining.startTime")))]),e._v(" "),a("span",{staticClass:"setFontFamily textPrimary0"},[e._v(e._s(n.startTime)+"(UTC)")])]),e._v(" "),a("div",{staticClass:"produced"},[a("span",[e._v(e._s(e.$t("mining.overTime")))]),e._v(" "),a("span",{staticClass:"setFontFamily textPrimary0"},[e._v(e._s(n.endTime)+"(UTC)")])])]),e._v(" "),a("div",{staticClass:"mining-setP"},[a("div",{staticClass:"produced mining_trans"},[a("span",[e._v(e._s(e.$t("mining.tradeValue")))]),e._v(" "),a("span",{staticClass:"setFontFamily textPrimary0"},[e._v(e._s(n.tradeValue))])]),e._v(" "),a("div",{staticClass:"produced mining_trans"},[a("span",[e._v(e._s(e.$t("mining.tradeReward")))]),e._v(" "),a("span",{staticClass:"setFontFamily textPrimary0"},[e._v(e._s(n.tradeReward))])]),e._v(" "),a("div",{staticClass:"produced mining_trans"},[a("span",[e._v(e._s(e.$t("mining.tradeUser")))]),e._v(" "),a("span",{staticClass:"setFontFamily textPrimary0"},[e._v(e._s(n.tradeUser))])])])])})),0):a("div",{staticClass:"noData"},[a("img",{attrs:{src:"http://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png",alt:""}}),e._v(" "),a("p",{staticClass:"textSecond3"},[e._v(e._s(e.$t("mining.noData")))])])])}),[],!1,null,"08e6fee8",null),n.default=i.exports}}]);