(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{371:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n(60);e=n(20);var a=n(95),r=(e=n.n(a),n(2)),o=n(94),i=(n(92),function(){for(var t,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];(t=console).log.apply(t,["bit-activity-request:"].concat(n))}),c=e.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});c.interceptors.request.use((function(t){var e,n,a;return i("requestlog:",t),r.a.prototype.$store&&(n=(a=(e=r.a.prototype.$store.state).local).UA,a=a.locale,n.isBitKeep?Object.assign(t.headers,e.local.bitkeep,{language:a}):Object.assign(t.headers,{language:a})),t}),(function(t){return Promise.resolve({status:1})})),c.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];(t=console).log.apply(t,["bit-activity-response:"].concat(n))}("responselog:",t);var e="网路开了小差";e=(t=Object(o.b)()||{}).t?t.t("base.networkErro"):e;return Promise.resolve({status:1,data:e})}));var s={mBoxList:function(t){return c.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return c.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return c.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return c.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return c.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return c.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return c.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return c.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return c.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return c.post("swap/mining/info",t)},historyPhase:function(t){return c.post("swap/mining/historyPhase",t)},receiveAward:function(t){return c.post("swap/mining/receiveAward",t)},getInviteList:function(t){return c.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return c.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return c.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return c.post("/user/cloudstaking/poolList",t)},myPool:function(t){return c.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return c.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return c.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return c.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return c.post("/user/cloudstaking/getToken",t)},tradingGetList:function(t){return c.post("/tradeCompetition/getList",t)},tradingWaitClaim:function(t){return c.post("/tradeCompetition/waitClaim",t)},tradingClaim:function(t){return c.post("/tradeCompetition/Claim",t)},tradingSummary:function(t){return c.post("/tradeCompetition/summary",t)},tradingHistory:function(t){return c.post("/tradeCompetition/history",t)}}},378:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(131),r=n(166);function o(t){return function(t){if(Array.isArray(t))return Object(a.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},635:function(t,e,n){var a=n(735);(a="string"==typeof(a=a.__esModule?a.default:a)?[[t.i,a,""]]:a).locals&&(t.exports=a.locals),(0,n(110).default)("5959f59c",a,!0,{sourceMap:!1})},734:function(t,e,n){"use strict";n(635)},735:function(t,e,n){(n=n(109)(!1)).push([t.i,".theme-light .textPrimary0[data-v-5b18508a] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-5b18508a] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-5b18508a] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-5b18508a] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-5b18508a] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-5b18508a] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-5b18508a] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-5b18508a] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-5b18508a] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-5b18508a] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-5b18508a] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-5b18508a] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-5b18508a] {\n  background-color: #495BFF;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-5b18508a] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-5b18508a] {\n  background-color: #1CBDB5;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-5b18508a] {\n  background-color: #080D21;\n}\n.theme-light .colorPrimary[data-v-5b18508a] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-5b18508a] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-5b18508a] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-5b18508a] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-5b18508a] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-5b18508a] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-5b18508a] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-5b18508a] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-5b18508a] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-5b18508a] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-5b18508a] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-5b18508a] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-5b18508a] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-5b18508a] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-5b18508a] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-5b18508a] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-5b18508a] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-5b18508a] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-5b18508a] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-5b18508a] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-5b18508a] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-5b18508a] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-5b18508a] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-5b18508a] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-5b18508a] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-5b18508a] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-5b18508a] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-5b18508a] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-5b18508a] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-5b18508a] {\n  background-color: #495BFF;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-5b18508a] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-5b18508a] {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-5b18508a] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-5b18508a] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-5b18508a] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-5b18508a] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-5b18508a] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-5b18508a] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-5b18508a] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-5b18508a] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-5b18508a] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-5b18508a] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-5b18508a] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-5b18508a] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-5b18508a] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-5b18508a] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-5b18508a] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-5b18508a] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-5b18508a] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-5b18508a] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-5b18508a] {\n  background-color: rgba(255,184,0,0.1);\n}\n.rewards-list[data-v-5b18508a] {\n  min-height: 100vh;\n}\n.rewards-list-box .loading[data-v-5b18508a] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.rewards-list-box .setHeight[data-v-5b18508a] {\n  min-height: 100vh;\n}\n.rewards-list-box .rewards-row-data[data-v-5b18508a] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0.43rem;\n  height: 1.6rem;\n  align-items: center;\n}\n.rewards-list-box .rewards-row-data .rewards-row-data-left .rewards-row-data-left-title[data-v-5b18508a] {\n  font-size: 0.37rem;\n  font-weight: 500;\n}\n.rewards-list-box .rewards-row-data .rewards-row-data-left .rewards-row-data-left-time[data-v-5b18508a] {\n  font-size: 0.32rem;\n}\n.rewards-list-box .rewards-row-data .rewards-row-data-right .rewards-row-data-right-content[data-v-5b18508a] {\n  display: flex;\n  align-items: center;\n  font-size: 0.37rem;\n}\n.rewards-list-box .rewards-row-data .rewards-row-data-right .rewards-row-data-right-content img[data-v-5b18508a] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: sub;\n}\n.rewards-list-box .noData[data-v-5b18508a] {\n  min-height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.rewards-list-box .noData img[data-v-5b18508a] {\n  width: 2.67rem;\n  height: 2.67rem;\n}\n.rewards-list-box .noData p[data-v-5b18508a] {\n  font-size: 0.37rem;\n}",""]),t.exports=n},790:function(t,e,n){"use strict";n.r(e),n(55),n(41),n(61),n(80),n(48),n(81);var r=n(378),i=n(14),a=n(36),o=(n(68),n(91)),c=n(371);function d(t,e){var n,a=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)),a}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}o={data:function(){return{isLoading:!0,finished:!1,loading:!1,refreshing:!1,rewardsList:[],start:0,limit:20}},computed:s(s({},Object(o.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep}}),created:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isLoading=!1;case 1:case"end":return e.stop()}}),e)})))()},beforeMount:function(){var t=this;this.isBitKeep&&BitKeepInvoke.onLoadReady((function(){BitKeepInvoke.setTitle(t.$t("blindboxInvite.rewardTitle")),BitKeepInvoke.setIconAction(),t.$nextTick((function(){BitKeepInvoke.appMode((function(t,e){var n=document.getElementsByTagName("body")[0];1==e?n.setAttribute("class","theme-dark"):n.setAttribute("class","theme-light")}))}))}))},mounted:function(){this.getRewardsList()},methods:{getRewardsList:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){var n,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.activityDoneRewardList({start:t.start*t.limit,limit:t.limit});case 2:if(n=e.sent,o=n.data,1==n.status)return t.isLoading=!1,t.loading=!0,e.abrupt("return",t.$toast(o));e.next=9;break;case 9:(a=o)&&(n=t.rewardsList).push.apply(n,Object(r.a)(a)),t.isLoading=!1,t.$toast.clear(),t.loading=!1,t.start++,t.rewardsList.length>=o.total_count&&(t.finished=!0);case 16:case"end":return e.stop()}}),e)})))()},onRefresh:function(){var a=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.activityDoneRewardList({start:0,limit:a.limit});case 2:if(e=t.sent,n=e.data,1==e.status)return a.refreshing=!1,t.abrupt("return",a.$toast(n));t.next=8;break;case 8:a.rewardsList=n.data,a.refreshing=!1;case 10:case"end":return t.stop()}}),t)})))()}}},n(734),n=n(79),o=Object(n.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rewards-list colorBackground0"},[t.isLoading?n("div",{staticClass:"loading"},[n("van-loading",{attrs:{color:"#1989fa",vertical:""}},[t._v(t._s(t.$t("base.loading"))+"...")])],1):n("div",{staticClass:"rewards-list-box"},[0<t.rewardsList.length?n("div",[n("van-pull-refresh",{staticClass:"setHeight",on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[n("van-list",{attrs:{finished:t.finished,"immediate-check":!1},on:{load:t.getRewardsList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.rewardsList,(function(e){return n("div",{key:e.number,staticClass:"rewards-row-data"},[n("div",{staticClass:"rewards-row-data-left"},[n("div",{staticClass:"rewards-row-data-left-title textPrimary0"},[t._v("\n                "+t._s(t.$t("mining.invitationRewards"))+"\n              ")]),t._v(" "),n("div",{staticClass:"rewards-row-data-left-time textSecond3"},[t._v("\n                "+t._s(e.create_time)+"\n              ")])]),t._v(" "),n("div",{staticClass:"rewards-row-data-right"},[n("div",{staticClass:"\n                  rewards-row-data-right-content\n                  textPrimary0\n                  setFontFamily\n                "},[n("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_04e2ea10-596d-11ec-bdbc-7722494dfa58.png",alt:""}}),t._v("\n                  +"+t._s(e.reward)+" BKB\n              ")])])])})),0)],1)],1):n("div",{staticClass:"noData"},[n("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png",alt:""}}),t._v(" "),n("p",{staticClass:"textSecond3"},[t._v(t._s(t.$t("mining.noData")))])])])])}),[],!1,null,"5b18508a",null),e.default=o.exports}}]);