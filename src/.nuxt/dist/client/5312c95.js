(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{367:function(n,e,a){"use strict";a.d(e,"a",(function(){return i}));e=a(18),e=a(93),e=a.n(e);var r=a(0),t=a(92),o=e.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"zh",currency:"",brand:"",os:"",package:"",clientversion:"",im:"",clientVersion:1}});o.interceptors.request.use((function(n){var e,a,t;return r.a.prototype.$store&&(a=(t=(e=r.a.prototype.$store.state).local).UA,t=t.locale,a.isBitKeep?Object.assign(n.headers,e.local.bitkeep,{language:t}):Object.assign(n.headers,{language:t})),n}),(function(n){return Promise.resolve({status:1})})),o.interceptors.response.use((function(n){return n.data}),(function(n){var e="网路开了小差",a=Object(t.b)()||{};e=a.t?a.t("base.networkErro"):e;return Promise.resolve({status:1,data:e})}));var i={mBoxList:function(n){return o.get("user/activity/mBoxList",{params:n,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(n){return o.get("user/activity/openMBox",{params:n})},helpMBox:function(n){return o.get("user/activity/helpMBox",{params:n})},mBoxDetail:function(n){return o.get("user/activity/mBoxDetail",{params:n})},getCbkbSwapInfo:function(n){return o.get("user/cloudwallet/getCbkbSwapInfo",{params:n})},swapBkb:function(n){return o.get("user/cloudwallet/swapBkb",{params:n})},getAirDropCount:function(n){return o.post("user/cloudwallet/getAirDropCount",n)},getAirDrop:function(n){return o.post("user/cloudwallet/getAirDrop",n)},miningInfo:function(n){return o.post("swap/mining/info",n)},historyPhase:function(n){return o.post("swap/mining/historyPhase",n)},receiveAward:function(n){return o.post("swap/mining/receiveAward",n)}}},436:function(n,e,a){var r=a(484);(r="string"==typeof(r=r.__esModule?r.default:r)?[[n.i,r,""]]:r).locals&&(n.exports=r.locals),(0,a(109).default)("53ff4e37",r,!0,{sourceMap:!1})},483:function(n,e,a){"use strict";a(436)},484:function(n,e,a){(a=a(108)(!1)).push([n.i,'.theme-light .textPrimary0[data-v-36214053] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-36214053] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-36214053] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-36214053] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-36214053] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-36214053] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorBackground0[data-v-36214053] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-36214053] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-36214053] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-36214053] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundPrimary[data-v-36214053] {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary[data-v-36214053] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-36214053] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-36214053] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-36214053] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-36214053] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-36214053] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-36214053] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-36214053] {\n  color: #F04E98;\n}\n.theme-light .colorBlack[data-v-36214053] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-36214053] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-36214053] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-36214053] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-36214053] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-36214053] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-36214053] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-36214053] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0[data-v-36214053] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-36214053] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-36214053] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-36214053] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-36214053] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-36214053] {\n  background-color: #1F212E;\n}\n.theme-dark .colorBackground0[data-v-36214053] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-36214053] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-36214053] {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3[data-v-36214053] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-36214053] {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary[data-v-36214053] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-36214053] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-36214053] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-36214053] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-36214053] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-36214053] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-36214053] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-36214053] {\n  color: #F04E98;\n}\n.theme-dark .colorBlack[data-v-36214053] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-36214053] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-36214053] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-36214053] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-36214053] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-36214053] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-36214053] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-36214053] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .hisory-wrap[data-v-36214053] {\n  background: #F8F9FA;\n}\n.theme-light .hisory-wrap .mining-wrap-one[data-v-36214053] {\n  background: #fff;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header[data-v-36214053] {\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title[data-v-36214053] {\n  color: #080D21;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title spam[data-v-36214053] {\n  color: #080D21;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-right[data-v-36214053] {\n  color: #495BFF;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-update[data-v-36214053] {\n  color: #9CA5B3;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-about[data-v-36214053] {\n  color: #9CA5B3;\n  background: #F3F5F6;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .inProgress[data-v-36214053] {\n  color: #1CBDB5;\n  background: rgba(28,189,181,0.1);\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .comingsoon[data-v-36214053] {\n  color: #FF8146;\n  background: rgba(255,129,70,0.1);\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .activityEnd[data-v-36214053] {\n  color: #9CA5B3;\n  background: #F3F5F6;\n}\n.theme-light .hisory-wrap .mining-wrap-one .produced[data-v-36214053] {\n  color: #7F828F;\n}\n.theme-light .hisory-wrap .line[data-v-36214053] {\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-dark .hisory-wrap[data-v-36214053] {\n  background: #0A0E1F;\n}\n.theme-dark .hisory-wrap .mining-wrap-one[data-v-36214053] {\n  background: #171A26;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header[data-v-36214053] {\n  border-bottom: 0.03rem solid #1F212E;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title[data-v-36214053] {\n  color: #DFE0E3;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title spam[data-v-36214053] {\n  color: #DFE0E3;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-right[data-v-36214053] {\n  color: #495BFF;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-update[data-v-36214053] {\n  color: #6D707D;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-about[data-v-36214053] {\n  color: #6D707D;\n  background: #131620;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .inProgress[data-v-36214053] {\n  color: #1CBDB5;\n  background: rgba(28,189,181,0.1);\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .comingsoon[data-v-36214053] {\n  color: #FF8146;\n  background: rgba(255,129,70,0.1);\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .activityEnd[data-v-36214053] {\n  color: #6D707D;\n  background: #131620;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .produced[data-v-36214053] {\n  color: #7F828F;\n}\n.theme-dark .hisory-wrap .line[data-v-36214053] {\n  border-bottom: 0.03rem solid #1F212E;\n}\n.hisory-wrap[data-v-36214053] {\n  min-height: 100vh;\n  padding: 0.4rem 0.43rem 1.07rem;\n}\n.hisory-wrap .mining-wrap-one[data-v-36214053]:not(:first-child) {\n  margin-top: 0.27rem;\n}\n.hisory-wrap .mining-wrap-one[data-v-36214053] {\n  border-radius: 0.21rem;\n  font-size: 0.37rem;\n  line-height: 0.43rem;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header[data-v-36214053] {\n  display: flex;\n  justify-content: space-between;\n  height: 0.96rem;\n  line-height: 0.96rem;\n  padding-left: 0.45rem;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title img[data-v-36214053] {\n  width: 0.4rem;\n  height: 0.4rem;\n  vertical-align: text-bottom;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title span[data-v-36214053] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  vertical-align: text-bottom;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-right[data-v-36214053] {\n  padding-right: 0.4rem;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-update[data-v-36214053] {\n  font-size: 0.27rem;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-about[data-v-36214053] {\n  height: 0.64rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 0.64rem;\n  text-align: center;\n  padding: 0.05rem 0.32rem;\n  border-top-right-radius: 0.21rem;\n  border-bottom-left-radius: 0.21rem;\n}\n.hisory-wrap .mining-wrap-one .produced[data-v-36214053] {\n  font-size: 0.37rem;\n  display: flex;\n  justify-content: space-between;\n}\n.hisory-wrap .mining-wrap-one .mining-setP[data-v-36214053] {\n  padding: 0 0.4rem 0.03rem;\n}\n.hisory-wrap .mining-wrap-one .line[data-v-36214053] {\n  border-bottom: 0.03rem solid #dadbde;\n}\n.hisory-wrap .mining-wrap-one .mining_trans[data-v-36214053] {\n  margin: 0.53rem 0 !important;\n}\n.hisory-wrap .mining-wrap-one .mbottom[data-v-36214053] {\n  margin-bottom: 0.4rem !important;\n}\n.hisory-wrap .mining-wrap-one .setFontFamily[data-v-36214053] {\n  font-family: "bitkeep DIN";\n}',""]),n.exports=a},536:function(n,e,a){"use strict";a.r(e);var r=a(13),t=(a(67),a(367)),o={data:function(){return{historyPhaseList:[]}},beforeMount:function(){var n=this;window.addEventListener("load",(function(){BitKeepInvoke.onLoadReady((function(){BitKeepInvoke.setTitle(n.$t("mining.historyTitle")),BitKeepInvoke.setIconAction(),n.$nextTick((function(){BitKeepInvoke.appMode((function(e,r){var a=document.getElementsByTagName("body")[0];1==r?(n.theme=1,a.setAttribute("class","theme-dark")):(n.theme=0,a.setAttribute("class","theme-light"))}))}))}))}))},mounted:function(){this.historyPhase()},methods:{historyPhase:function(){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.a.historyPhase();case 2:if(r=e.sent,a=r.data,1==r.status)return e.abrupt("return",n.$dialog.alert({message:a,confirmButtonText:n.$t("CbkbExchange.know"),confirmButtonColor:"#495BFF"}));e.next=7;break;case 7:n.historyPhaseList=a;case 8:case"end":return e.stop()}}),e)})))()}}};a(483),a=a(77),o=Object(a.a)(o,(function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("div",{staticClass:"hisory-wrap"},a._l(a.historyPhaseList,(function(n,r){return e("div",{key:r,staticClass:"mining-wrap-one"},[e("div",{staticClass:"mining-wrap-one-header"},[e("div",{staticClass:"mining-wrap-one-header-title"},[e("span",{staticClass:"setFontFamily"},[a._v(a._s(a.$t("mining.phase",{v:n.phase})))])]),a._v(" "),0==n.isActivity?e("div",{staticClass:"mining-wrap-one-header-about comingsoon"},[e("span",[a._v(a._s(a.$t("mining.comingsoon")))])]):a._e(),a._v(" "),1==n.isActivity?e("div",{staticClass:"mining-wrap-one-header-about inProgress"},[e("span",[a._v(a._s(a.$t("mining.inProgress")))])]):a._e(),a._v(" "),2==n.isActivity?e("div",{staticClass:"mining-wrap-one-header-about activityEnd"},[e("span",[a._v(a._s(a.$t("mining.activity")))])]):a._e()]),a._v(" "),e("div",{staticClass:"mining-setP"},[e("div",{staticClass:"produced mining_trans"},[e("span",[a._v(a._s(a.$t("mining.startTime")))]),a._v(" "),e("span",{staticClass:"setFontFamily textPrimary0"},[a._v(a._s(n.startTime)+"(UTC)")])]),a._v(" "),e("div",{staticClass:"produced"},[e("span",[a._v(a._s(a.$t("mining.overTime")))]),a._v(" "),e("span",{staticClass:"setFontFamily textPrimary0"},[a._v(a._s(n.endTime)+"(UTC)")])])]),a._v(" "),e("div",{staticClass:"mining-setP"},[e("div",{staticClass:"produced mining_trans"},[e("span",[a._v(a._s(a.$t("mining.tradeValue")))]),a._v(" "),e("span",{staticClass:"setFontFamily textPrimary0"},[a._v(a._s(n.tradeValue))])]),a._v(" "),e("div",{staticClass:"produced mining_trans"},[e("span",[a._v(a._s(a.$t("mining.tradeReward")))]),a._v(" "),e("span",{staticClass:"setFontFamily textPrimary0"},[a._v(a._s(n.tradeReward))])]),a._v(" "),e("div",{staticClass:"produced mining_trans"},[e("span",[a._v(a._s(a.$t("mining.tradeUser")))]),a._v(" "),e("span",{staticClass:"setFontFamily textPrimary0"},[a._v(a._s(n.tradeUser))])]),a._v(" "),e("div",{staticClass:"produced mining_trans mbottom"},[e("span",[a._v(a._s(a.$t("mining.myTraded")))]),a._v(" "),e("span",{staticClass:"setFontFamily textPrimary0"},[a._v(a._s(n.userReward))])])])])})),0)}),[],!1,null,"36214053",null);e.default=o.exports}}]);