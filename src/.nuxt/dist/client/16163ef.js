(window.webpackJsonp=window.webpackJsonp||[]).push([[66,26],{427:function(t,a,n){"use strict";n.d(a,"a",(function(){return l})),n(59);a=n(18);var o=n(99),r=(a=n.n(o),n(2)),e=n(98),i=(n(97),function(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];(t=console).log.apply(t,["bit-activity-request:"].concat(n))}),d=a.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});d.interceptors.request.use((function(t){var a,n,o;return i("requestlog:",t),r.default.prototype.$store&&(n=(o=(a=r.default.prototype.$store.state).local).UA,o=o.locale,n.isBitKeep?Object.assign(t.headers,a.local.bitkeep,{language:o}):Object.assign(t.headers,{language:o})),t}),(function(t){return Promise.resolve({status:1})})),d.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];(t=console).log.apply(t,["bit-activity-response:"].concat(n))}("responselog:",t);var a="网路开了小差";a=(t=Object(e.b)()||{}).t?t.t("base.networkErro"):a;return Promise.resolve({status:1,data:a})}));var l={mBoxList:function(t){return d.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return d.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return d.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return d.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return d.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return d.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return d.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return d.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return d.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return d.post("swap/mining/info",t)},historyPhase:function(t){return d.post("swap/mining/historyPhase",t)},receiveAward:function(t){return d.post("swap/mining/receiveAward",t)},getInviteList:function(t){return d.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return d.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return d.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return d.post("/user/cloudstaking/poolList",t)},myPool:function(t){return d.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return d.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return d.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return d.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return d.post("/user/cloudstaking/getToken",t)},tradingGetList:function(t){return d.post("swap/tradeCompetition/getList",t)},tradingWaitClaim:function(t){return d.post("swap/tradeCompetition/waitClaim",t)},tradingClaim:function(t){return d.post("swap/tradeCompetition/claim",t)},tradingSummary:function(t){return d.post("swap/tradeCompetition/summary",t)},tradingHistory:function(t){return d.post("swap/tradeCompetition/history",t)},welfareSignIn:function(t){return d.post("user/welfare/signIn",t)},getRewardDetail:function(t){return d.post("user/welfare/getRewardDetail",t)},getSignInDetailByUser:function(t){return d.post("user/welfare/getSignInDetailByUser",t)},getRewardResult:function(t){return d.post("user/welfare/getRewardResult",t)},pushPapersIn:function(t){return d.post("user/welfare/pushPapersIn",t)},getJoinTeleJob:function(t){return d.post("user/welfare/getJoinTeleJob",t)},getFirstSwapJob:function(t){return d.post("user/welfare/getFirstSwapJob",t)},getFirst50UJob:function(t){return d.post("user/welfare/getFirst50UJob",t)},newUserRewardJobs:function(t){return d.post("user/welfare/newUserRewardJobs",t)},nftMintGetInfo:function(t){return d.post("/operation/nftmint/getInfo",t)},nftMintInvite:function(t){return d.post("/operation/nftmint/invite",t)},buildNftMintTxs:function(t){return d.post("/operation/nftmint/buildNftMintTxs",t)},nftMintGetToken:function(t){return d.post("/operation/nftmint/getToken",t)},nftMintLotteryList:function(t){return d.post("/operation/nftmint/LotteryList",t)},nftMintbuildNftMeltTxs:function(t){return d.post("/operation/nftmint/buildNftMeltTxs",t)},nftMintnftList:function(t){return d.post("/operation/nftmint/nftList",t)},nftMintcheckTransaction:function(t){return d.post("/operation/nftmint/checkTransaction",t)}}},431:function(t,a,n){"use strict";n.d(a,"a",(function(){return e}));var o=n(138),r=n(176);function e(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},438:function(t,a,n){var o=n(596);(o="string"==typeof(o=o.__esModule?o.default:o)?[[t.i,o,""]]:o).locals&&(t.exports=o.locals),(0,n(67).default)("22ea11dc",o,!0,{sourceMap:!1})},595:function(t,a,n){"use strict";n(438)},596:function(t,a,n){(n=n(66)(!1)).push([t.i,".theme-light .textPrimary0[data-v-adb65f7a] {\n  color: #0E0E0E;\n}\n.theme-light .textSecond1[data-v-adb65f7a] {\n  color: #515556;\n}\n.theme-light .textSecond2[data-v-adb65f7a] {\n  color: #919899;\n}\n.theme-light .textSecond3[data-v-adb65f7a] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-adb65f7a] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-adb65f7a] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-adb65f7a] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-adb65f7a] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-adb65f7a] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-adb65f7a] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-adb65f7a] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-adb65f7a] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-adb65f7a] {\n  background-color: #7524f9;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-adb65f7a] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-adb65f7a] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-adb65f7a] {\n  background-color: #0E0E0E;\n}\n.theme-light .colorPrimary[data-v-adb65f7a] {\n  color: #7524f9;\n}\n.theme-light .colorSecond01[data-v-adb65f7a] {\n  color: #2AC8DD;\n}\n.theme-light .backgroundSecond01[data-v-adb65f7a] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorSecond02[data-v-adb65f7a] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-adb65f7a] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-adb65f7a] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-adb65f7a] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-adb65f7a] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-adb65f7a] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-adb65f7a] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-adb65f7a] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-adb65f7a] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-adb65f7a] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-adb65f7a] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-adb65f7a] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-adb65f7a] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-adb65f7a] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-adb65f7a] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-adb65f7a] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-adb65f7a] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-adb65f7a] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-adb65f7a] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-adb65f7a] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-adb65f7a] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-adb65f7a] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-adb65f7a] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-adb65f7a] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-adb65f7a] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-adb65f7a] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-adb65f7a] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-adb65f7a] {\n  background-color: #7524f9;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-adb65f7a] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-adb65f7a] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-adb65f7a] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-adb65f7a] {\n  color: #7524f9;\n}\n.theme-dark .colorSecond01[data-v-adb65f7a] {\n  color: #2AC8DD;\n}\n.theme-dark .backgroundSecond01[data-v-adb65f7a] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorSecond02[data-v-adb65f7a] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-adb65f7a] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-adb65f7a] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-adb65f7a] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-adb65f7a] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-adb65f7a] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-adb65f7a] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-adb65f7a] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-adb65f7a] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-adb65f7a] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-adb65f7a] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-adb65f7a] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-adb65f7a] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-adb65f7a] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-adb65f7a] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-adb65f7a] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .Background0[data-v-adb65f7a] {\n  background-color: #fafafa;\n}\n.theme-light .Background0[data-v-adb65f7a] {\n  background-color: #F8F8F9;\n}\n.theme-dark .Background0[data-v-adb65f7a] {\n  background-color: #17171A;\n}\n.theme-dark .Background1[data-v-adb65f7a] {\n  background-color: #202024;\n}\n.theme-light .bigImg[data-v-adb65f7a] {\n  border: 0.03rem solid #fff;\n  border-radius: 50%;\n}\n.theme-light .noImg[data-v-adb65f7a] {\n  border: 0.03rem solid #fff;\n}\n.theme-light .smallImg[data-v-adb65f7a] {\n  border: 0.03rem solid #fff;\n  border-radius: 50%;\n}\n.theme-light .noImg[data-v-adb65f7a] {\n  border: 0.03rem solid #fff;\n}\n.theme-dark .bigImg[data-v-adb65f7a] {\n  border: 0.03rem solid #0A0E1F;\n  border-radius: 50%;\n}\n.theme-dark .smallImg[data-v-adb65f7a] {\n  border: 0.03rem solid #0A0E1F;\n  border-radius: 50%;\n}\n.setHeight[data-v-adb65f7a] {\n  min-height: 32vh !important;\n}\n.noData[data-v-adb65f7a] {\n  min-height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.noData img[data-v-adb65f7a] {\n  width: 2.67rem;\n  height: 2.67rem;\n}\n.noData p[data-v-adb65f7a] {\n  font-size: 0.37rem;\n}\n.setMargin[data-v-adb65f7a] {\n  margin-top: 0.4rem;\n}\n.trading-wrap-box-pool[data-v-adb65f7a] {\n  border-radius: 0.21rem;\n  margin-top: 0.27rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title[data-v-adb65f7a] {\n  display: flex;\n  height: 1.44rem;\n  align-items: center;\n  position: relative;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .bigImg[data-v-adb65f7a] {\n  width: 0.85rem;\n  height: 0.85rem;\n  display: inline-block;\n  margin-left: 0.4rem;\n  vertical-align: middle;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .smallImg[data-v-adb65f7a] {\n  width: 0.85rem;\n  height: 0.85rem;\n  border-radius: 50%;\n  margin-left: -0.13rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .noImg[data-v-adb65f7a] {\n  display: inline-block;\n  width: 0.85rem;\n  height: 0.85rem;\n  line-height: 0.85rem;\n  border-radius: 50%;\n  font-size: 0.29rem;\n  font-weight: 700;\n  text-align: center;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .noImgOne[data-v-adb65f7a] {\n  margin-left: 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .noImgTwo[data-v-adb65f7a] {\n  margin-left: -0.13rem;\n}\n.trading-wrap-box-pool .trading-wrap-line[data-v-adb65f7a] {\n  width: 100%;\n  height: 0.03rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex[data-v-adb65f7a] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 0.27rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-left[data-v-adb65f7a] :first-child {\n  font-weight: 600;\n  font-size: 0.43rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-left[data-v-adb65f7a] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.11rem;\n  width: 3.33rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-one-header-about[data-v-adb65f7a] {\n  height: 0.64rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 0.64rem;\n  text-align: center;\n  padding: 0.05rem 0.32rem;\n  border-top-right-radius: 0.21rem;\n  border-bottom-left-radius: 0.21rem;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-right[data-v-adb65f7a] {\n  text-align: right;\n  position: absolute;\n  right: 0.4rem;\n  margin-top: 0.13rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-right[data-v-adb65f7a] :first-child {\n  font-size: 0.32rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-right[data-v-adb65f7a] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.05rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content[data-v-adb65f7a] {\n  padding: 0 0.4rem 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex[data-v-adb65f7a] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.4rem 0 0;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .setFont16[data-v-adb65f7a] {\n  font-size: 0.43rem !important;\n  margin-top: 0.13rem !important;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-left[data-v-adb65f7a] {\n  text-align: left;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-left[data-v-adb65f7a] :first-child {\n  font-size: 0.32rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-left[data-v-adb65f7a] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-right[data-v-adb65f7a] {\n  text-align: right;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-right[data-v-adb65f7a] :first-child {\n  font-size: 0.32rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-right[data-v-adb65f7a] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-stake[data-v-adb65f7a] {\n  width: 100%;\n  height: 1.33rem;\n  line-height: 1.33rem;\n  text-align: center;\n  border-radius: 0.27rem;\n  font-weight: 500;\n  font-size: 0.43rem;\n  margin-top: 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-stake-now[data-v-adb65f7a] {\n  background: #7524f9;\n  color: #fff;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-stake-soon[data-v-adb65f7a] {\n  color: #9ca5b3;\n}",""]),t.exports=n},608:function(t,a,n){"use strict";n.r(a),n(257),n(50),n(76),n(18),n(68);var o={data:function(){return{formatEn:"DDd HHh mmm sss"}},props:{finished:{type:Boolean,default:!1},tradingList:{type:Array,default:function(){}},activeType:{type:Number,default:0}},methods:{swap:function(t){this.$emit("swap",t)},milliFormat:function(t){return t&&t.toString().replace(/^\d+/g,(function(t){return t.replace(/(?=(?!^)(\d{3})+$)/g,",")}))}}};n(595),n=n(37),o=Object(n.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[t.tradingList&&0<t.tradingList.length?o("div",t._l(t.tradingList,(function(a,n){return o("div",{key:n,staticClass:"trading-wrap-box-pool colorBackground1"},[o("div",{staticClass:"trading-wrap-box-pool-title"},[a.fromIcon?o("img",{staticClass:"bigImg colorBackground0",attrs:{src:a.fromIcon,alt:""}}):o("div",{staticClass:"noImg colorBackground2 noImgOne textSecond3 setFontFamily"},[t._v("\n          "+t._s((4<a.fromSymbol.length?a.fromSymbol.substring(0,4):a.fromSymbol).toUpperCase())+"\n        ")]),t._v(" "),a.toIcon?o("img",{staticClass:"smallImg colorBackground0",attrs:{src:a.toIcon,alt:""}}):o("div",{staticClass:"noImg noImgTwo colorBackground2 textSecond3 setFontFamily"},[t._v("\n          "+t._s((4<a.toSymbol.length?a.toSymbol.substring(0,4):a.toSymbol).toUpperCase())+"\n          ")]),t._v(" "),o("div",{staticClass:"trading-wrap-box-pool-title-flex"},[o("div",{staticClass:"trading-wrap-box-pool-title-left"},[o("div",{staticClass:"textPrimary0"},[t._v(t._s(a.fromSymbol.toUpperCase())+"/"+t._s(a.toSymbol.toUpperCase()))]),t._v(" "),o("div",{staticClass:"textSecond3"},[t._v(t._s(a.chainName))])]),t._v(" "),t.finished||2==t.activeType?t.finished?o("div",{staticClass:"trading-wrap-one-header-about colorSecond08 colorSecond18"},[o("span",[t._v(t._s(t.$t("trading.finished")))])]):o("div"):o("div",{staticClass:"trading-wrap-box-pool-title-right"},[0==t.activeType?o("div",{staticClass:"textSecond3"},[t._v(t._s(t.$t("trading.Ending")))]):t._e(),t._v(" "),1==t.activeType?o("div",{staticClass:"textSecond3"},[t._v(t._s(t.$t("trading.Start")))]):t._e(),t._v(" "),0<a.countdown?o("div",[o("van-count-down",{staticClass:"textPrimary0 setFontFamily",attrs:{time:a.countdown,format:t.formatEn}})],1):o("div",{staticClass:"textPrimary0"},[t._v("--")])])])]),t._v(" "),o("div",{staticClass:"trading-wrap-box-pool-content textSecond2"},[o("div",{staticClass:"trading-wrap-line colorLine"}),t._v(" "),o("div",{staticClass:"trading-wrap-box-pool-flex"},[o("div",{staticClass:"trading-wrap-box-pool-left"},[o("div",{staticClass:"textSecond3"},[t._v(t._s(t.$t("trading.Time")))]),t._v(" "),o("div",{staticClass:"textSecond3"},[t._v(t._s(t.$t("trading.Reward")))])]),t._v(" "),o("div",{staticClass:"trading-wrap-box-pool-right"},[o("div",{staticClass:"textSecond2 setFontFamily"},[t._v("\n              "+t._s(a.startTime)+" — "+t._s(a.endTime)+" (GMT+8)\n            ")]),t._v(" "),o("div",{staticClass:"setFontFamily textSecond2"},[o("span",{staticClass:"colorPrimary"},[t._v(t._s(a.rate)+"x")]),t._v(" "+t._s(t.$t("trading.in"))+" BKB\n            ")])])]),t._v(" "),o("div",{staticClass:"trading-wrap-line colorLine setMargin"}),t._v(" "),t.finished||0!=t.activeType?t._e():o("div",{staticClass:"trading-wrap-box-pool-flex"},[o("div",{staticClass:"trading-wrap-box-pool-left"},[o("div",{staticClass:"textSecond3"},[t._v(t._s(t.$t("trading.TodayTradingValue")))]),t._v(" "),o("div",{staticClass:"textPrimary0 setFontFamily setFont16"},[t._v("\n              $"+t._s(t.milliFormat(a.allTradingVolumeToday))+"\n            ")])]),t._v(" "),o("div",{staticClass:"trading-wrap-box-pool-right"},[o("div",{staticClass:"textSecond3"},[t._v(t._s(t.$t("trading.TodayTradingReward")))]),t._v(" "),o("div",{staticClass:"setFontFamily colorPrimary setFont16"},[t._v("\n              +"+t._s(t.milliFormat(a.rewardToday))+" BKB\n            ")])])]),t._v(" "),1!=t.activeType?o("div",{staticClass:"trading-wrap-box-pool-flex"},[o("div",{staticClass:"trading-wrap-box-pool-left"},[o("div",{staticClass:"textSecond3"},[t._v(t._s(t.$t("trading.YourTradingValue")))]),t._v(" "),o("div",{staticClass:"textPrimary0 setFontFamily setFont16"},[t._v("\n              $"+t._s(t.milliFormat(a.allTradingVolume))+"\n            ")])]),t._v(" "),o("div",{staticClass:"trading-wrap-box-pool-right"},[o("div",{staticClass:"textSecond3"},[t._v(t._s(t.$t("trading.YourTradingReward")))]),t._v(" "),o("div",{staticClass:"setFontFamily colorPrimary setFont16"},[t._v("\n              +"+t._s(t.milliFormat(a.reward))+" BKB\n            ")])])]):t._e(),t._v(" "),t.finished||0!=t.activeType?t.finished||1!=t.activeType?t.finished||2!=t.activeType?t._e():o("div",{staticClass:"trading-wrap-box-pool-stake textSecond3 colorBackground2"},[t._v("\n          "+t._s(t.$t("trading.finished"))+"\n        ")]):o("div",{staticClass:"trading-wrap-box-pool-stake textSecond3 colorBackground2"},[t._v("\n          "+t._s(t.$t("trading.ComingSoon"))+"\n        ")]):o("div",{staticClass:"trading-wrap-box-pool-stake colorwhite colorBackgroundPrimary",on:{click:function(n){return t.swap(a.swapNow)}}},[t._v("\n          "+t._s(t.$t("trading.swapNow"))+"\n        ")])])])})),0):o("div",{staticClass:"noData",class:t.finished?"":"setHeight"},[o("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png",alt:""}}),t._v(" "),o("p",{staticClass:"textSecond3"},[t._v(t._s(t.$t("mining.noData")))])])])}),[],!1,null,"adb65f7a",null);a.default=o.exports},714:function(t,a,n){var o=n(862);(o="string"==typeof(o=o.__esModule?o.default:o)?[[t.i,o,""]]:o).locals&&(t.exports=o.locals),(0,n(67).default)("178dd24f",o,!0,{sourceMap:!1})},861:function(t,a,n){"use strict";n(714)},862:function(t,a,n){(n=n(66)(!1)).push([t.i,".theme-light .textPrimary0[data-v-ff84e56a] {\n  color: #0E0E0E;\n}\n.theme-light .textSecond1[data-v-ff84e56a] {\n  color: #515556;\n}\n.theme-light .textSecond2[data-v-ff84e56a] {\n  color: #919899;\n}\n.theme-light .textSecond3[data-v-ff84e56a] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-ff84e56a] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-ff84e56a] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-ff84e56a] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-ff84e56a] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-ff84e56a] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-ff84e56a] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-ff84e56a] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-ff84e56a] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-ff84e56a] {\n  background-color: #7524f9;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-ff84e56a] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-ff84e56a] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-ff84e56a] {\n  background-color: #0E0E0E;\n}\n.theme-light .colorPrimary[data-v-ff84e56a] {\n  color: #7524f9;\n}\n.theme-light .colorSecond01[data-v-ff84e56a] {\n  color: #2AC8DD;\n}\n.theme-light .backgroundSecond01[data-v-ff84e56a] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorSecond02[data-v-ff84e56a] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-ff84e56a] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-ff84e56a] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-ff84e56a] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-ff84e56a] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-ff84e56a] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-ff84e56a] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-ff84e56a] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-ff84e56a] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-ff84e56a] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-ff84e56a] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-ff84e56a] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-ff84e56a] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-ff84e56a] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-ff84e56a] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-ff84e56a] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-ff84e56a] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-ff84e56a] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-ff84e56a] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-ff84e56a] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-ff84e56a] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-ff84e56a] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-ff84e56a] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-ff84e56a] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-ff84e56a] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-ff84e56a] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-ff84e56a] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-ff84e56a] {\n  background-color: #7524f9;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-ff84e56a] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-ff84e56a] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-ff84e56a] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-ff84e56a] {\n  color: #7524f9;\n}\n.theme-dark .colorSecond01[data-v-ff84e56a] {\n  color: #2AC8DD;\n}\n.theme-dark .backgroundSecond01[data-v-ff84e56a] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorSecond02[data-v-ff84e56a] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-ff84e56a] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-ff84e56a] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-ff84e56a] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-ff84e56a] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-ff84e56a] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-ff84e56a] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-ff84e56a] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-ff84e56a] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-ff84e56a] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-ff84e56a] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-ff84e56a] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-ff84e56a] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-ff84e56a] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-ff84e56a] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-ff84e56a] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .Background0[data-v-ff84e56a] {\n  background-color: #fafafa;\n}\n.theme-light .Background0[data-v-ff84e56a] {\n  background-color: #F8F8F9;\n}\n.theme-dark .Background0[data-v-ff84e56a] {\n  background-color: #17171A;\n}\n.theme-dark .Background1[data-v-ff84e56a] {\n  background-color: #202024;\n}\n.hisory-wrap[data-v-ff84e56a] {\n  min-height: 100vh;\n  padding: 0.27rem 0.43rem 0.4rem;\n}\n.hisory-wrap .hisory-wrap-box[data-v-ff84e56a] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.4rem 0.91rem;\n  border-radius: 0.21rem;\n  text-align: center;\n}\n.hisory-wrap .hisory-wrap-box .hisory-wrap-box-text[data-v-ff84e56a] :first-child {\n  font-size: 0.32rem;\n}\n.hisory-wrap .hisory-wrap-box .hisory-wrap-box-text[data-v-ff84e56a] :last-child {\n  font-size: 0.43rem;\n}\n.loading[data-v-ff84e56a] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",""]),t.exports=n},914:function(t,a,n){"use strict";n.r(a),n(61),n(43),n(60),n(86),n(51),n(87);var o=n(431),i=n(4),r=n(38),e=(n(50),n(76),n(18),n(68),n(58),n(427)),d=n(96);function l(a,t){var n,o=Object.keys(a);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(a),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),o.push.apply(o,n)),o}function c(a){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r.a)(a,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(n,t))}))}return a}d={data:function(){return{historyList:[],refreshLoading:!1,start:1,isLoading:!0,loading:!1,tradingSummarys:{totalReward:0,totalTradingVolume:0}}},components:{tradingCom:n(608).default},computed:c(c({},Object(d.b)(["local"])),{},{isBitKeep:function(){return this.local.UA.isBitKeep}}),mounted:function(){var t=this;this.isBitKeep&&BitKeepInvoke.onLoadReady((function(){BitKeepInvoke.setTitle(t.$t("trading.historyData")),BitKeepInvoke.setIconAction(""),BitKeepInvoke.appMode((function(t,a){var n=document.getElementsByTagName("body")[0];1==a?n.setAttribute("class","theme-dark"):n.setAttribute("class","theme-light")}))})),this.getHistoryList(),this.getTradingSummary()},methods:{getHistoryList:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function n(){var a,r,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.a.tradingHistory({start:t.start,limit:20});case 2:if(d=n.sent,a=d.data,1==d.status)return t.isLoading=!1,n.abrupt("return",t.$dialog.alert({message:a,confirmButtonText:t.$t("staking.know"),confirmButtonColor:"$theme-light-colorPrimary"}));n.next=8;break;case 8:r=a.list,t.finished=!1,1==t.start?(t.historyList=[],t.historyList=r):(d=t.historyList).push.apply(d,Object(o.a)(r)),t.refreshLoading=!1,t.loading=!1,t.isLoading=!1,t.$toast.clear(),t.historyList.length>=a.totalRows&&(t.finished=!0);case 16:case"end":return n.stop()}}),n)})))()},onLoadList:function(){this.start++,this.finished=!1,this.getHistoryList()},onDownRefresh:function(){this.start=1,this.getHistoryList()},getTradingSummary:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.a.tradingSummary();case 2:if(a=n.sent,o=a.data,1==a.status)return t.isLoading=!1,n.abrupt("return",t.$dialog.alert({message:o,confirmButtonText:t.$t("trading.know"),confirmButtonColor:"#7524f9"}));n.next=8;break;case 8:t.tradingSummarys=o;case 9:case"end":return n.stop()}}),n)})))()},milliFormat:function(t){return t&&t.toString().replace(/^\d+/g,(function(t){return t.replace(/(?=(?!^)(\d{3})+$)/g,",")}))}}},n(861),n=n(37),d=Object(n.a)(d,(function(){var a=this,t=a.$createElement;return(t=a._self._c||t)("div",{staticClass:"hisory-wrap colorBackground0"},[a.isLoading?t("div",{staticClass:"loading"},[t("van-loading",{attrs:{color:"#7524f9",vertical:""}},[a._v(a._s(a.$t("base.loading"))+"...")])],1):t("van-pull-refresh",{staticStyle:{"min-height":"100vh"},attrs:{"success-text":a.$t("mining.success"),"loading-text":a.$t("mining.loading"),"loosing-text":a.$t("mining.loading")},on:{refresh:a.onDownRefresh},model:{value:a.refreshLoading,callback:function(t){a.refreshLoading=t},expression:"refreshLoading"}},[t("van-list",{attrs:{finished:a.finished,"immediate-check":!1,"loading-text":a.$t("mining.loading"),"finished-text":20<a.historyList.length?a.$t("base.nomore"):""},on:{load:a.onLoadList},model:{value:a.loading,callback:function(t){a.loading=t},expression:"loading"}},[t("div",{staticClass:"hisory-wrap-box colorBackground1"},[t("div",{staticClass:"hisory-wrap-box-text"},[t("div",{staticClass:"textSecond2"},[a._v(a._s(a.$t("trading.transaction")))]),a._v(" "),t("div",{staticClass:"textPrimary0 setFontFamily"},[a._v("$"+a._s(a.milliFormat(a.tradingSummarys.totalTradingVolume)))])]),a._v(" "),t("div",{staticClass:"hisory-wrap-box-text"},[t("div",{staticClass:"textSecond2"},[a._v(a._s(a.$t("trading.GetsBKB")))]),a._v(" "),t("div",{staticClass:"textPrimary0 setFontFamily"},[a._v(a._s(a.milliFormat(a.tradingSummarys.totalReward)))])])]),a._v(" "),t("div",{staticClass:"history-wrap-one"},[t("tradingCom",{attrs:{tradingList:a.historyList,finished:!0}})],1)])],1)],1)}),[],!1,null,"ff84e56a",null),a.default=d.exports}}]);