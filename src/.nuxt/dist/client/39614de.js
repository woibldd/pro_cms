(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{367:function(e,n,a){"use strict";a.d(n,"a",(function(){return s})),a(58);n=a(18);var r=a(94),t=(n=a.n(r),a(0)),o=a(93),i=(a(91),function(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];(e=console).log.apply(e,["bit-activity-request:"].concat(a))}),d=n.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"zh",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});d.interceptors.request.use((function(e){var n,a,r;return i("requestlog:",e),t.a.prototype.$store&&(a=(r=(n=t.a.prototype.$store.state).local).UA,r=r.locale,a.isBitKeep?Object.assign(e.headers,n.local.bitkeep,{language:r}):Object.assign(e.headers,{language:r})),e}),(function(e){return Promise.resolve({status:1})})),d.interceptors.response.use((function(e){return e.data}),(function(e){!function(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];(e=console).log.apply(e,["bit-activity-response:"].concat(a))}("responselog:",e);var n="网路开了小差";n=(e=Object(o.b)()||{}).t?e.t("base.networkErro"):n;return Promise.resolve({status:1,data:n})}));var s={mBoxList:function(e){return d.get("user/activity/mBoxList",{params:e,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(e){return d.get("user/activity/openMBox",{params:e})},helpMBox:function(e){return d.get("user/activity/helpMBox",{params:e})},mBoxDetail:function(e){return d.get("user/activity/mBoxDetail",{params:e})},getCbkbSwapInfo:function(e){return d.get("user/cloudwallet/getCbkbSwapInfo",{params:e})},swapBkb:function(e){return d.get("user/cloudwallet/swapBkb",{params:e})},getAirDropCount:function(e){return d.post("user/cloudwallet/getAirDropCount",e)},getAirDrop:function(e){return d.post("user/cloudwallet/getAirDrop",e)},miningInfo:function(e){return d.post("swap/mining/info",e)},historyPhase:function(e){return d.post("swap/mining/historyPhase",e)},receiveAward:function(e){return d.post("swap/mining/receiveAward",e)}}},442:function(e,n,a){var r=a(491);(r="string"==typeof(r=r.__esModule?r.default:r)?[[e.i,r,""]]:r).locals&&(e.exports=r.locals),(0,a(109).default)("310f67e8",r,!0,{sourceMap:!1})},490:function(e,n,a){"use strict";a(442)},491:function(e,n,a){(a=a(108)(!1)).push([e.i,'.theme-light .textPrimary0[data-v-08e6fee8] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-08e6fee8] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-08e6fee8] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-08e6fee8] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-08e6fee8] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-08e6fee8] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorBackground0[data-v-08e6fee8] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-08e6fee8] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-08e6fee8] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-08e6fee8] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundPrimary[data-v-08e6fee8] {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary[data-v-08e6fee8] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-08e6fee8] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-08e6fee8] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-08e6fee8] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-08e6fee8] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-08e6fee8] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-08e6fee8] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-08e6fee8] {\n  color: #F04E98;\n}\n.theme-light .colorBlack[data-v-08e6fee8] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-08e6fee8] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-08e6fee8] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-08e6fee8] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-08e6fee8] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-08e6fee8] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-08e6fee8] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-08e6fee8] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0[data-v-08e6fee8] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-08e6fee8] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-08e6fee8] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-08e6fee8] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-08e6fee8] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-08e6fee8] {\n  background-color: #1F212E;\n}\n.theme-dark .colorBackground0[data-v-08e6fee8] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-08e6fee8] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-08e6fee8] {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3[data-v-08e6fee8] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-08e6fee8] {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary[data-v-08e6fee8] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-08e6fee8] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-08e6fee8] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-08e6fee8] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-08e6fee8] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-08e6fee8] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-08e6fee8] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-08e6fee8] {\n  color: #F04E98;\n}\n.theme-dark .colorBlack[data-v-08e6fee8] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-08e6fee8] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-08e6fee8] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-08e6fee8] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-08e6fee8] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-08e6fee8] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-08e6fee8] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-08e6fee8] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .hisory-wrap[data-v-08e6fee8] {\n  background: #F8F9FA;\n}\n.theme-light .hisory-wrap .mining-wrap-one[data-v-08e6fee8] {\n  background: #fff;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header[data-v-08e6fee8] {\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title[data-v-08e6fee8] {\n  color: #080D21;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title spam[data-v-08e6fee8] {\n  color: #080D21;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-right[data-v-08e6fee8] {\n  color: #495BFF;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-update[data-v-08e6fee8] {\n  color: #9CA5B3;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-about[data-v-08e6fee8] {\n  color: #9CA5B3;\n  background: #F3F5F6;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .inProgress[data-v-08e6fee8] {\n  color: #1CBDB5;\n  background: rgba(28,189,181,0.1);\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .comingsoon[data-v-08e6fee8] {\n  color: #FF8146;\n  background: rgba(255,129,70,0.1);\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .activityEnd[data-v-08e6fee8] {\n  color: #9CA5B3;\n  background: #F3F5F6;\n}\n.theme-light .hisory-wrap .mining-wrap-one .produced[data-v-08e6fee8] {\n  color: #7F828F;\n}\n.theme-light .hisory-wrap .line[data-v-08e6fee8] {\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-dark .hisory-wrap[data-v-08e6fee8] {\n  background: #0A0E1F;\n}\n.theme-dark .hisory-wrap .mining-wrap-one[data-v-08e6fee8] {\n  background: #171A26;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header[data-v-08e6fee8] {\n  border-bottom: 0.03rem solid #1F212E;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title[data-v-08e6fee8] {\n  color: #DFE0E3;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title spam[data-v-08e6fee8] {\n  color: #DFE0E3;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-right[data-v-08e6fee8] {\n  color: #495BFF;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-update[data-v-08e6fee8] {\n  color: #6D707D;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-about[data-v-08e6fee8] {\n  color: #6D707D;\n  background: #131620;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .inProgress[data-v-08e6fee8] {\n  color: #1CBDB5;\n  background: rgba(28,189,181,0.1);\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .comingsoon[data-v-08e6fee8] {\n  color: #FF8146;\n  background: rgba(255,129,70,0.1);\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .activityEnd[data-v-08e6fee8] {\n  color: #6D707D;\n  background: #131620;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .produced[data-v-08e6fee8] {\n  color: #7F828F;\n}\n.theme-dark .hisory-wrap .line[data-v-08e6fee8] {\n  border-bottom: 0.03rem solid #1F212E;\n}\n.hisory-wrap[data-v-08e6fee8] {\n  min-height: 100vh;\n  padding: 0.4rem 0.43rem 1.07rem;\n}\n.hisory-wrap .mining-wrap-one[data-v-08e6fee8]:not(:first-child) {\n  margin-top: 0.27rem;\n}\n.hisory-wrap .mining-wrap-one[data-v-08e6fee8] {\n  border-radius: 0.21rem;\n  font-size: 0.37rem;\n  line-height: 0.43rem;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header[data-v-08e6fee8] {\n  display: flex;\n  justify-content: space-between;\n  height: 0.96rem;\n  line-height: 0.96rem;\n  padding-left: 0.45rem;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title img[data-v-08e6fee8] {\n  width: 0.4rem;\n  height: 0.4rem;\n  vertical-align: text-bottom;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title span[data-v-08e6fee8] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  vertical-align: text-bottom;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-right[data-v-08e6fee8] {\n  padding-right: 0.4rem;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-update[data-v-08e6fee8] {\n  font-size: 0.27rem;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-about[data-v-08e6fee8] {\n  height: 0.64rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 0.64rem;\n  text-align: center;\n  padding: 0.05rem 0.32rem;\n  border-top-right-radius: 0.21rem;\n  border-bottom-left-radius: 0.21rem;\n}\n.hisory-wrap .mining-wrap-one .produced[data-v-08e6fee8] {\n  font-size: 0.37rem;\n  display: flex;\n  justify-content: space-between;\n}\n.hisory-wrap .mining-wrap-one .mining-setP[data-v-08e6fee8] {\n  padding: 0 0.4rem 0.03rem;\n}\n.hisory-wrap .mining-wrap-one .line[data-v-08e6fee8] {\n  border-bottom: 0.03rem solid #dadbde;\n}\n.hisory-wrap .mining-wrap-one .mining_trans[data-v-08e6fee8] {\n  margin: 0.53rem 0 !important;\n}\n.hisory-wrap .mining-wrap-one .mbottom[data-v-08e6fee8] {\n  margin-bottom: 0.4rem !important;\n}\n.hisory-wrap .mining-wrap-one .setFontFamily[data-v-08e6fee8] {\n  font-family: "bitkeep DIN";\n}\n.loading[data-v-08e6fee8] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.noData[data-v-08e6fee8] {\n  min-height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.noData img[data-v-08e6fee8] {\n  width: 2.67rem;\n  height: 2.67rem;\n}\n.noData p[data-v-08e6fee8] {\n  font-size: 0.37rem;\n}',""]),e.exports=a},543:function(e,n,a){"use strict";a.r(n),a(51),a(34),a(59),a(78),a(42),a(79);var r=a(13),t=a(29),o=(a(67),a(367)),i=a(92);function d(e,n){var a,r=Object.keys(e);return Object.getOwnPropertySymbols&&(a=Object.getOwnPropertySymbols(e),n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)),r}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?d(Object(a),!0).forEach((function(n){Object(t.a)(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}i={data:function(){return{historyPhaseList:[],isLoading:!0}},computed:c(c({},Object(i.b)(["local"])),{},{isBitKeep:function(){return this.local.UA.isBitKeep}}),beforeMount:function(){var e=this;this.isBitKeep&&BitKeepInvoke.onLoadReady((function(){BitKeepInvoke.setTitle(e.$t("mining.historyTitle")),BitKeepInvoke.setIconAction(),BitKeepInvoke.appMode((function(n,r){var a=document.getElementsByTagName("body")[0];1==r?(e.theme=1,a.setAttribute("class","theme-dark")):(e.theme=0,a.setAttribute("class","theme-light"))}))}))},mounted:function(){this.historyPhase()},methods:{historyPhase:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.historyPhase();case 2:if(r=n.sent,a=r.data,1==r.status)return e.isLoading=!1,n.abrupt("return",e.$dialog.alert({message:a,confirmButtonText:e.$t("CbkbExchange.know"),confirmButtonColor:"#495BFF"}));n.next=8;break;case 8:e.historyPhaseList=a,e.isLoading=!1;case 10:case"end":return n.stop()}}),n)})))()}}},a(490),a=a(77),i=Object(a.a)(i,(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"hisory-wrap"},[a.isLoading?n("div",{staticClass:"loading"},[n("van-loading",{attrs:{color:"#1989fa",vertical:""}},[a._v(a._s(a.$t("base.loading"))+"...")])],1):0<a.historyPhaseList.length?n("div",a._l(a.historyPhaseList,(function(e,r){return n("div",{key:r,staticClass:"mining-wrap-one"},[n("div",{staticClass:"mining-wrap-one-header"},[n("div",{staticClass:"mining-wrap-one-header-title"},[n("span",{staticClass:"setFontFamily"},[a._v(a._s(a.$t("mining.phase",{v:e.phase})))])]),a._v(" "),0==e.isActivity?n("div",{staticClass:"mining-wrap-one-header-about comingsoon"},[n("span",[a._v(a._s(a.$t("mining.comingsoon")))])]):a._e(),a._v(" "),1==e.isActivity?n("div",{staticClass:"mining-wrap-one-header-about inProgress"},[n("span",[a._v(a._s(a.$t("mining.inProgress")))])]):a._e(),a._v(" "),2==e.isActivity?n("div",{staticClass:"mining-wrap-one-header-about activityEnd"},[n("span",[a._v(a._s(a.$t("mining.activity")))])]):a._e()]),a._v(" "),n("div",{staticClass:"mining-setP"},[n("div",{staticClass:"produced mining_trans"},[n("span",[a._v(a._s(a.$t("mining.startTime")))]),a._v(" "),n("span",{staticClass:"setFontFamily textPrimary0"},[a._v(a._s(e.startTime)+"(UTC)")])]),a._v(" "),n("div",{staticClass:"produced"},[n("span",[a._v(a._s(a.$t("mining.overTime")))]),a._v(" "),n("span",{staticClass:"setFontFamily textPrimary0"},[a._v(a._s(e.endTime)+"(UTC)")])])]),a._v(" "),n("div",{staticClass:"mining-setP"},[n("div",{staticClass:"produced mining_trans"},[n("span",[a._v(a._s(a.$t("mining.tradeValue")))]),a._v(" "),n("span",{staticClass:"setFontFamily textPrimary0"},[a._v(a._s(e.tradeValue))])]),a._v(" "),n("div",{staticClass:"produced mining_trans"},[n("span",[a._v(a._s(a.$t("mining.tradeReward")))]),a._v(" "),n("span",{staticClass:"setFontFamily textPrimary0"},[a._v(a._s(e.tradeReward))])]),a._v(" "),n("div",{staticClass:"produced mining_trans"},[n("span",[a._v(a._s(a.$t("mining.tradeUser")))]),a._v(" "),n("span",{staticClass:"setFontFamily textPrimary0"},[a._v(a._s(e.tradeUser))])])])])})),0):n("div",{staticClass:"noData"},[n("img",{attrs:{src:"http://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png",alt:""}}),a._v(" "),n("p",{staticClass:"textSecond3"},[a._v(a._s(a.$t("mining.noData")))])])])}),[],!1,null,"08e6fee8",null),n.default=i.exports}}]);