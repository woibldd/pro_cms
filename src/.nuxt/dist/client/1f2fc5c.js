(window.webpackJsonp=window.webpackJsonp||[]).push([[37,31],{373:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n(60);t=n(20);var a=n(94),o=(t=n.n(a),n(2)),r=n(93),i=(n(92),function(){for(var e,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];(e=console).log.apply(e,["bit-activity-request:"].concat(n))}),c=t.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});c.interceptors.request.use((function(e){var t,n,a;return i("requestlog:",e),o.a.prototype.$store&&(n=(a=(t=o.a.prototype.$store.state).local).UA,a=a.locale,n.isBitKeep?Object.assign(e.headers,t.local.bitkeep,{language:a}):Object.assign(e.headers,{language:a})),e}),(function(e){return Promise.resolve({status:1})})),c.interceptors.response.use((function(e){return e.data}),(function(e){!function(){for(var e,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];(e=console).log.apply(e,["bit-activity-response:"].concat(n))}("responselog:",e);var t="网路开了小差";t=(e=Object(r.b)()||{}).t?e.t("base.networkErro"):t;return Promise.resolve({status:1,data:t})}));var l={mBoxList:function(e){return c.get("user/activity/mBoxList",{params:e,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(e){return c.get("user/activity/openMBox",{params:e})},helpMBox:function(e){return c.get("user/activity/helpMBox",{params:e})},userInviteList:function(e){return c.get("user/activity/inviteList",{params:e})},mBoxDetail:function(e){return c.get("user/activity/mBoxDetail",{params:e})},getCbkbSwapInfo:function(e){return c.get("user/cloudwallet/getCbkbSwapInfo",{params:e})},swapBkb:function(e){return c.get("user/cloudwallet/swapBkb",{params:e})},getAirDropCount:function(e){return c.post("user/cloudwallet/getAirDropCount",e)},getAirDrop:function(e){return c.post("user/cloudwallet/getAirDrop",e)},miningInfo:function(e){return c.post("swap/mining/info",e)},historyPhase:function(e){return c.post("swap/mining/historyPhase",e)},receiveAward:function(e){return c.post("swap/mining/receiveAward",e)},getInviteList:function(e){return c.post("user/friendship/getInviteList",e)},certifyFriendship:function(e){return c.post("user/friendship/certifyFriendship",e)},activityDoneRewardList:function(e){return c.post("swap/mining/activityDoneRewardList",e)},poolList:function(e){return c.post("/user/cloudstaking/poolList",e)},myPool:function(e){return c.post("/user/cloudstaking/myPool",e)},stakeHistory:function(e){return c.post("/user/cloudstaking/stakeHistory",e)},receiveStakingReward:function(e){return c.post("/user/cloudstaking/receiveStakingReward",e)},staking:function(e){return c.post("/user/cloudstaking/staking",e)},handleGetToken:function(e){return c.post("/user/cloudstaking/getToken",e)},tradingGetList:function(e){return c.post("swap/tradeCompetition/getList",e)},tradingWaitClaim:function(e){return c.post("swap/tradeCompetition/waitClaim",e)},tradingClaim:function(e){return c.post("swap/tradeCompetition/claim",e)},tradingSummary:function(e){return c.post("swap/tradeCompetition/summary",e)},tradingHistory:function(e){return c.post("swap/tradeCompetition/history",e)},welfareSignIn:function(e){return c.post("user/welfare/signIn",e)},getRewardDetail:function(e){return c.post("user/welfare/getRewardDetail",e)},getSignInDetailByUser:function(e){return c.post("user/welfare/getSignInDetailByUser",e)},getRewardResult:function(e){return c.post("user/welfare/getRewardResult",e)},pushPapersIn:function(e){return c.post("user/welfare/pushPapersIn",e)},getJoinTeleJob:function(e){return c.post("user/welfare/getJoinTeleJob",e)},getFirstSwapJob:function(e){return c.post("user/welfare/getFirstSwapJob",e)},getFirst50UJob:function(e){return c.post("user/welfare/getFirst50UJob",e)},newUserRewardJobs:function(e){return c.post("user/welfare/newUserRewardJobs",e)}}},380:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(131),o=n(166);function r(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},548:function(e,t,n){var a=n(588);(a="string"==typeof(a=a.__esModule?a.default:a)?[[e.i,a,""]]:a).locals&&(e.exports=a.locals),(0,n(110).default)("15abc333",a,!0,{sourceMap:!1})},549:function(e,t,n){var a=n(590);(a="string"==typeof(a=a.__esModule?a.default:a)?[[e.i,a,""]]:a).locals&&(e.exports=a.locals),(0,n(110).default)("67f87180",a,!0,{sourceMap:!1})},587:function(e,t,n){"use strict";n(548)},588:function(e,t,n){(n=n(109)(!1)).push([e.i,".van-popup__close-icon--top-right {\n  top: 0.27rem;\n  right: 0.24rem;\n}\n.van-popup__close-icon--top-right img {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.theme-dark .van-toast {\n  background-color: #DFE0E3;\n  color: #171A26;\n}",""]),e.exports=n},589:function(e,t,n){"use strict";n(549)},590:function(e,t,n){(n=n(109)(!1)).push([e.i,".theme-light .textPrimary0[data-v-3155a1e2] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-3155a1e2] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-3155a1e2] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-3155a1e2] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-3155a1e2] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-3155a1e2] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-3155a1e2] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-3155a1e2] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-3155a1e2] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-3155a1e2] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-3155a1e2] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-3155a1e2] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-3155a1e2] {\n  background-color: #495BFF;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-3155a1e2] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-3155a1e2] {\n  background-color: #1CBDB5;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-3155a1e2] {\n  background-color: #080D21;\n}\n.theme-light .colorPrimary[data-v-3155a1e2] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-3155a1e2] {\n  color: #1CBDB5;\n}\n.theme-light .backgroundSecond01[data-v-3155a1e2] {\n  background-color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-3155a1e2] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-3155a1e2] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-3155a1e2] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-3155a1e2] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-3155a1e2] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-3155a1e2] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-3155a1e2] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-3155a1e2] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-3155a1e2] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-3155a1e2] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-3155a1e2] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-3155a1e2] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-3155a1e2] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-3155a1e2] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-3155a1e2] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-3155a1e2] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-3155a1e2] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-3155a1e2] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-3155a1e2] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-3155a1e2] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-3155a1e2] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-3155a1e2] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-3155a1e2] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-3155a1e2] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-3155a1e2] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-3155a1e2] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-3155a1e2] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-3155a1e2] {\n  background-color: #495BFF;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-3155a1e2] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-3155a1e2] {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-3155a1e2] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-3155a1e2] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-3155a1e2] {\n  color: #1CBDB5;\n}\n.theme-dark .backgroundSecond01[data-v-3155a1e2] {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-3155a1e2] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-3155a1e2] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-3155a1e2] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-3155a1e2] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-3155a1e2] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-3155a1e2] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-3155a1e2] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-3155a1e2] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-3155a1e2] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-3155a1e2] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-3155a1e2] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-3155a1e2] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-3155a1e2] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-3155a1e2] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-3155a1e2] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-3155a1e2] {\n  background-color: rgba(255,184,0,0.1);\n}\n.title[data-v-3155a1e2] {\n  margin: 0.37rem 0.43rem;\n  text-align: center;\n  font-size: 0.43rem;\n  font-weight: 500;\n}\n.title p[data-v-3155a1e2] {\n  font-weight: 600;\n}\n.setOpactive[data-v-3155a1e2] {\n  opacity: 0.3;\n}\n.line[data-v-3155a1e2] {\n  width: 100%;\n  margin-top: 0;\n  height: 0.03rem;\n}\n.ruleDetailcontent[data-v-3155a1e2] {\n  height: 50vh;\n  overflow: auto;\n  padding: 0.53rem;\n}\n.ruleDetailcontent img[data-v-3155a1e2] {\n  width: 1.28rem;\n  height: 1.28rem;\n}\n.ruleDetailcontent .setF[data-v-3155a1e2] {\n  font-size: 0.43rem;\n}\n.ruleDetailcontent .setLineHeight[data-v-3155a1e2] {\n  line-height: 0.48rem;\n}\n.ruleDetailcontent p[data-v-3155a1e2] {\n  font-size: 0.37rem;\n  line-height: 0.48rem;\n  margin: 0.27rem;\n}\n.ruleDetailcontent li[data-v-3155a1e2] {\n  list-style: disc;\n  font-size: 0.37rem;\n  line-height: 0.48rem;\n  margin: 0.27rem;\n}\n.confirm-bottom[data-v-3155a1e2] {\n  height: 1.28rem;\n  width: 100%;\n  bottom: 0;\n  z-index: 99;\n  position: fixed;\n  padding: 0.29rem 0 0.91rem;\n}\n.confirm-bottom .swap-btn[data-v-3155a1e2] {\n  height: 1.33rem;\n  border-radius: 0.27rem;\n  text-align: center;\n  line-height: 1.17rem;\n  border: none;\n  font-weight: 500;\n  font-size: 0.43rem;\n  width: 8rem;\n  left: 50%;\n  color: #fff;\n  transform: translateX(-50%);\n  z-index: 0;\n}",""]),e.exports=n},638:function(e,t,n){var a=n(745);(a="string"==typeof(a=a.__esModule?a.default:a)?[[e.i,a,""]]:a).locals&&(e.exports=a.locals),(0,n(110).default)("eb1b144a",a,!0,{sourceMap:!1})},667:function(e,t,n){"use strict";n.r(t);var a={data:function(){return{visables:this.ruleDetailFlag,closeIcon:"https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},watch:{ruleDetailFlag:function(e){this.visables=e},theme:function(e){this.closeIcon=1==e?"https://cdn.bitkeep.vip/u_b_d71e28c0-4c2d-11ec-ad04-d1b66ed0d35e.png":"https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},props:["ruleDetailFlag","theme"],methods:{close:function(){this.$emit("close",!1)}}};n(587),n(589),n=n(79),a=Object(n.a)(a,(function(){var e=this,t=e.$createElement;return(t=e._self._c||t)("van-popup",{staticClass:"colorBackground1",style:{height:"50%",overflow:"hidden"},attrs:{closeable:"","close-icon":e.closeIcon,round:"",position:"bottom"},on:{"click-overlay":e.close,"click-close-icon":e.close},model:{value:e.visables,callback:function(t){e.visables=t},expression:"visables"}},[t("div",{staticClass:"title"},[t("p",{staticClass:"textPrimary0"},[e._v(e._s(e.$t("blindboxInvite.RuleTitle")))])]),e._v(" "),t("div",{staticClass:"line colorLine"}),e._v(" "),t("ul",{staticClass:"ruleDetailcontent"},[t("p",{staticClass:"textPrimary0 setF"},[e._v(e._s(e.$t("blindboxInvite.inviteRuleTitle")))]),e._v(" "),t("li",{staticClass:"textSecond1 setLineHeight",domProps:{innerHTML:e._s(e.$t("blindboxInvite.ruleDetail"))}}),e._v(" "),t("li",{staticClass:"textSecond1 setLineHeight",domProps:{innerHTML:e._s(e.$t("blindboxInvite.ruleDetail1"))}}),e._v(" "),t("li",{staticClass:"textSecond1"},[e._v(e._s(e.$t("blindboxInvite.ruleDetail2")))])])])}),[],!1,null,"3155a1e2",null);t.default=a.exports},744:function(e,t,n){"use strict";n(638)},745:function(e,t,n){(n=n(109)(!1)).push([e.i,'.theme-light .textPrimary0[data-v-ec637af8] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-ec637af8] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-ec637af8] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-ec637af8] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-ec637af8] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-ec637af8] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-ec637af8] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-ec637af8] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-ec637af8] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-ec637af8] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-ec637af8] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-ec637af8] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-ec637af8] {\n  background-color: #495BFF;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-ec637af8] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-ec637af8] {\n  background-color: #1CBDB5;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-ec637af8] {\n  background-color: #080D21;\n}\n.theme-light .colorPrimary[data-v-ec637af8] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-ec637af8] {\n  color: #1CBDB5;\n}\n.theme-light .backgroundSecond01[data-v-ec637af8] {\n  background-color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-ec637af8] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-ec637af8] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-ec637af8] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-ec637af8] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-ec637af8] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-ec637af8] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-ec637af8] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-ec637af8] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-ec637af8] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-ec637af8] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-ec637af8] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-ec637af8] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-ec637af8] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-ec637af8] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-ec637af8] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-ec637af8] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-ec637af8] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-ec637af8] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-ec637af8] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-ec637af8] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-ec637af8] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-ec637af8] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-ec637af8] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-ec637af8] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-ec637af8] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-ec637af8] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-ec637af8] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-ec637af8] {\n  background-color: #495BFF;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-ec637af8] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-ec637af8] {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-ec637af8] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-ec637af8] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-ec637af8] {\n  color: #1CBDB5;\n}\n.theme-dark .backgroundSecond01[data-v-ec637af8] {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-ec637af8] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-ec637af8] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-ec637af8] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-ec637af8] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-ec637af8] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-ec637af8] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-ec637af8] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-ec637af8] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-ec637af8] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-ec637af8] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-ec637af8] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-ec637af8] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-ec637af8] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-ec637af8] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-ec637af8] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-ec637af8] {\n  background-color: rgba(255,184,0,0.1);\n}\n.invite-list-box[data-v-ec637af8] {\n  padding-top: 0.27rem;\n  min-height: 100vh;\n}\n.invite-list-box .loading[data-v-ec637af8] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.invite-list-box .setHeight[data-v-ec637af8] {\n  min-height: 90vh;\n}\n.invite-list-box .invite-list-header[data-v-ec637af8] {\n  margin: 0 0.43rem;\n  border-radius: 0.21rem 0.21rem 0 0;\n  color: #495bff;\n  display: flex;\n  padding: 0.27rem 0.4rem 0.4rem;\n  line-height: 0.75rem;\n  background-color: rgba(73,91,255,0.1);\n}\n.invite-list-box .invite-list-header .color-line[data-v-ec637af8] {\n  width: 0.03rem;\n  height: 0.96rem;\n  opacity: 0.1;\n  margin-top: 0.37rem;\n  background: #495bff;\n}\n.invite-list-box .invite-list-header .invite-list-header-left[data-v-ec637af8] {\n  width: 50%;\n}\n.invite-list-box .invite-list-header .invite-list-header-left[data-v-ec637af8] :first-child {\n  font-size: 0.37rem;\n}\n.invite-list-box .invite-list-header .invite-list-header-left[data-v-ec637af8] :last-child {\n  font-size: 0.64rem;\n}\n.invite-list-box .invite-list-header .invite-list-header-right[data-v-ec637af8] {\n  width: 50%;\n  padding-left: 0.43rem;\n}\n.invite-list-box .invite-list-header .invite-list-header-right[data-v-ec637af8] :first-child {\n  font-size: 0.37rem;\n}\n.invite-list-box .invite-list-header .invite-list-header-right[data-v-ec637af8] :last-child {\n  font-size: 0.64rem;\n}\n.invite-list-box .invite-row[data-v-ec637af8] {\n  padding: 0 0.43rem;\n  height: 0.8rem;\n  line-height: 0.8rem;\n}\n.invite-list-box .invite-line[data-v-ec637af8] {\n  width: 100%;\n  height: 0.03rem;\n}\n.invite-list-box .invite-row-data[data-v-ec637af8] {\n  height: 1.33rem;\n  line-height: 1.33rem;\n  margin: 0 0.43rem;\n}\n.invite-list-box .invite-row-data .invite-row-data-row[data-v-ec637af8] {\n  font-family: "bitkeep DIN";\n}\n.invite-list-box .invite-row-data .invite-row-data-row .invite-row-data-col[data-v-ec637af8] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.invite-list-box .noData[data-v-ec637af8] {\n  min-height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.invite-list-box .noData img[data-v-ec637af8] {\n  width: 2.67rem;\n  height: 2.67rem;\n}\n.invite-list-box .noData p[data-v-ec637af8] {\n  font-size: 0.37rem;\n}',""]),e.exports=n},808:function(e,t,n){"use strict";n.r(t),n(55),n(41),n(61),n(80),n(48),n(81);var o=n(380),i=n(14),a=n(36),r=(n(68),n(91)),c=n(373);function l(e,t){var n,a=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)),a}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}r={data:function(){return{isLoading:!0,finished:!1,loading:!1,refreshing:!1,ruleDetailFlag:!1,inviteList:[],activeCount:0,unActiveCount:0,theme:0,start:0,limit:20,question:"https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png"}},components:{ruleDetail:n(667).default},filters:{address:function(e){return e&&e.substring(0,6)+" .... "+e.substr(-4)}},computed:d(d({},Object(r.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep}}),created:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.isLoading=!1;case 1:case"end":return t.stop()}}),t)})))()},beforeMount:function(){var a=this;this.isBitKeep&&BitKeepInvoke.onLoadReady((function(){BitKeepInvoke.setTitle(a.$t("blindboxInvite.inviteFriends")),a.$nextTick((function(){BitKeepInvoke.appMode((function(e,t){var n=document.getElementsByTagName("body")[0];1==t?(a.theme=1,a.question="https://cdn.bitkeep.vip/u_b_47485390-4f90-11ec-ace3-97579b99c357.png",n.setAttribute("class","theme-dark")):(a.theme=0,a.question="https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png",n.setAttribute("class","theme-light")),BitKeepInvoke.setIconAction(a.question,(function(){a.ruleDetailFlag=!0}))}))}))}))},mounted:function(){this.getInviteList()},methods:{getInviteList:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.getInviteList({start:e.start*e.limit,limit:e.limit});case 2:if(n=t.sent,r=n.data,1==n.status)return e.isLoading=!1,e.loading=!0,t.abrupt("return",e.$toast(r));t.next=9;break;case 9:e.activeCount=r.activeCount,e.unActiveCount=r.unActiveCount,(a=r.list)&&(n=e.inviteList).push.apply(n,Object(o.a)(a)),e.isLoading=!1,e.$toast.clear(),e.loading=!1,e.start++,e.inviteList.length>=r.total_count&&(e.finished=!0);case 18:case"end":return t.stop()}}),t)})))()},ruleDetailClose:function(){this.ruleDetailFlag=!1},onRefresh:function(){var a=this;return Object(i.a)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.getInviteList({start:0,limit:a.limit});case 2:t=e.sent,n=t.data,1==t.status&&(a.isLoading=!1,a.$toast(n)),a.rewardsList=n.data,a.refreshing=!1;case 8:case"end":return e.stop()}}),e)})))()},getSub:function(){var e=JSON.parse(JSON.stringify(this.inviteLink)),t=e.substring(0,14);this.inviteLink=t+" .... "+e.substr(-15)}}},n(744),n=n(79),r=Object(n.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"invite-list colorBackground0"},[e.isLoading?n("div",{staticClass:"loading"},[n("van-loading",{attrs:{color:"#1989fa",vertical:""}},[e._v(e._s(e.$t("base.loading"))+"...")])],1):n("div",{staticClass:"invite-list-box"},[n("div",{staticClass:"invite-list-header"},[n("div",{staticClass:"invite-list-header-left"},[n("div",[e._v(e._s(e.$t("blindboxInvite.inforce")))]),e._v(" "),n("div",{staticClass:"setFontFamily"},[e._v(e._s(e.activeCount||0))])]),e._v(" "),n("div",{staticClass:"color-line"}),e._v(" "),n("div",{staticClass:"invite-list-header-right"},[n("div",[e._v(e._s(e.$t("blindboxInvite.inactivated")))]),e._v(" "),n("div",{staticClass:"setFontFamily"},[e._v(e._s(e.unActiveCount||0))])])]),e._v(" "),0<e.inviteList.length?n("div",[n("van-pull-refresh",{attrs:{"success-text":e.$t("mining.success"),"loading-text":e.$t("mining.loading"),"loosing-text":e.$t("mining.loading")},on:{refresh:e.onRefresh},model:{value:e.refreshing,callback:function(t){e.refreshing=t},expression:"refreshing"}},[n("van-list",{staticClass:"setHeight",attrs:{finished:e.finished,"immediate-check":!1},on:{load:e.getInviteList},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[n("van-row",{staticClass:"invite-row"},[n("van-col",{staticClass:"invite-col textSecond3",attrs:{span:"8"}},[e._v(e._s(e.$t("blindboxInvite.Address")))]),e._v(" "),n("van-col",{staticClass:"invite-col textSecond3",attrs:{span:"7"}},[e._v(e._s(e.$t("blindboxInvite.State")))]),e._v(" "),n("van-col",{staticClass:"invite-col textSecond3",attrs:{span:"9"}},[e._v(e._s(e.$t("blindboxInvite.Time")))])],1),e._v(" "),n("div",{staticClass:"invite-line colorLine"}),e._v(" "),e._l(e.inviteList,(function(t){return n("div",{key:t.address,staticClass:"invite-row-data"},[n("van-row",{staticClass:"invite-row-data-row",class:1==t.status?"textPrimary0":"textSecond3"},[n("van-col",{staticClass:"invite-row-data-col",attrs:{span:"8"}},[e._v(e._s(e._f("address")(t.address_friend)))]),e._v(" "),n("van-col",{staticClass:"invite-row-data-col",attrs:{span:"7"}},[e._v(e._s(1==t.status?e.$t("blindboxInvite.inforce"):e.$t("blindboxInvite.inactivated")))]),e._v(" "),n("van-col",{staticClass:"invite-row-data-col",attrs:{span:"9"}},[e._v(e._s(t.create_time))])],1),e._v(" "),n("div",{staticClass:"invite-line colorLine"})],1)}))],2)],1)],1):n("div",{staticClass:"noData"},[n("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png",alt:""}}),e._v(" "),n("p",{staticClass:"textSecond3"},[e._v(e._s(e.$t("mining.noData")))])])]),e._v(" "),n("ruleDetail",{attrs:{ruleDetailFlag:e.ruleDetailFlag,theme:e.theme},on:{close:e.ruleDetailClose}})],1)}),[],!1,null,"ec637af8",null),t.default=r.exports}}]);