(window.webpackJsonp=window.webpackJsonp||[]).push([[53,15],{371:function(t,n,o){"use strict";o.d(n,"a",(function(){return l})),o(60);n=o(20);var a=o(95),e=(n=o.n(a),o(2)),r=o(94),i=(o(92),function(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];(t=console).log.apply(t,["bit-activity-request:"].concat(o))}),c=n.a.create({baseURL:"/",timeout:6e4,headers:{token:"c8ff79c0aff1c702d3c73f0874add811",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});c.interceptors.request.use((function(t){var n,o,a;return i("requestlog:",t),e.a.prototype.$store&&(o=(a=(n=e.a.prototype.$store.state).local).UA,a=a.locale,o.isBitKeep?Object.assign(t.headers,n.local.bitkeep,{language:a}):Object.assign(t.headers,{language:a})),t}),(function(t){return Promise.resolve({status:1})})),c.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];(t=console).log.apply(t,["bit-activity-response:"].concat(o))}("responselog:",t);var n="网路开了小差";n=(t=Object(r.b)()||{}).t?t.t("base.networkErro"):n;return Promise.resolve({status:1,data:n})}));var l={mBoxList:function(t){return c.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return c.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return c.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return c.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return c.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return c.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return c.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return c.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return c.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return c.post("swap/mining/info",t)},historyPhase:function(t){return c.post("swap/mining/historyPhase",t)},receiveAward:function(t){return c.post("swap/mining/receiveAward",t)},getInviteList:function(t){return c.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return c.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return c.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return c.post("/user/cloudstaking/poolList",t)},myPool:function(t){return c.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return c.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return c.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return c.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return c.post("/user/cloudstaking/getToken",t)},tradingGetList:function(t){return c.post("/tradeCompetition/getList",t)},tradingWaitClaim:function(t){return c.post("/tradeCompetition/waitClaim",t)},tradingClaim:function(t){return c.post("/tradeCompetition/claim",t)},tradingSummary:function(t){return c.post("/tradeCompetition/summary",t)},tradingHistory:function(t){return c.post("/tradeCompetition/history",t)}}},372:function(t,n,o){"use strict";function a(t){var n,o,a,e,r,i,c,l=g(t,!1);if("string"==typeof l&&2<l.length)if(43===(n=(l=v(l)).charCodeAt(0))||45===n){if(88===(t=l.charCodeAt(2))||120===t)return NaN}else if(48===n){switch(l.charCodeAt(1)){case 66:case 98:o=2,a=49;break;case 79:case 111:o=8,a=55;break;default:return+l}for(r=(e=l.slice(2)).length,i=0;i<r;i++)if((c=e.charCodeAt(i))<48||a<c)return NaN;return parseInt(e,o)}return+l}var e=o(17),r=o(4),i=o(130),c=o(31),l=o(25),d=o(71),s=o(164),g=o(96),m=o(6),p=o(93),h=o(83).f,f=o(56).f,u=o(26).f,v=o(374).trim,b="Number",k=r[b],x=k.prototype,w=d(p(x))==b;if(i(b,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var y,S=function(t){t=arguments.length<1?0:t;var n=this;return n instanceof S&&(w?m((function(){x.valueOf.call(n)})):d(n)!=b)?s(new k(a(t)),n,S):a(t)},F=e?h(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),B=0;F.length>B;B++)l(k,y=F[B])&&!l(S,y)&&u(S,y,f(k,y));(S.prototype=x).constructor=S,c(r,b,S)}},373:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},374:function(t,n,o){var a=o(42),e=(o="["+o(373)+"]",RegExp("^"+o+o+"*")),r=RegExp(o+o+"*$");o=function(t){return function(n){return n=String(a(n)),1&t&&(n=n.replace(e,"")),2&t?n.replace(r,""):n}};t.exports={start:o(1),end:o(2),trim:o(3)}},378:function(t,n,o){"use strict";o.d(n,"a",(function(){return r}));var a=o(131),e=o(166);function r(t){return function(t){if(Array.isArray(t))return Object(a.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(e.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},383:function(t,n,o){var a=o(545);(a="string"==typeof(a=a.__esModule?a.default:a)?[[t.i,a,""]]:a).locals&&(t.exports=a.locals),(0,o(110).default)("1961c396",a,!0,{sourceMap:!1})},544:function(t,n,o){"use strict";o(383)},545:function(t,n,o){(o=o(109)(!1)).push([t.i,".theme-light .textPrimary0[data-v-e5620cf2] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-e5620cf2] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-e5620cf2] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-e5620cf2] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-e5620cf2] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-e5620cf2] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-e5620cf2] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-e5620cf2] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-e5620cf2] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-e5620cf2] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-e5620cf2] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-e5620cf2] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-e5620cf2] {\n  background-color: #495BFF;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-e5620cf2] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-e5620cf2] {\n  background-color: #1CBDB5;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-e5620cf2] {\n  background-color: #080D21;\n}\n.theme-light .colorPrimary[data-v-e5620cf2] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-e5620cf2] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-e5620cf2] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-e5620cf2] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-e5620cf2] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-e5620cf2] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-e5620cf2] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-e5620cf2] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-e5620cf2] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-e5620cf2] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-e5620cf2] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-e5620cf2] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-e5620cf2] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-e5620cf2] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-e5620cf2] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-e5620cf2] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-e5620cf2] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-e5620cf2] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-e5620cf2] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-e5620cf2] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-e5620cf2] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-e5620cf2] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-e5620cf2] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-e5620cf2] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-e5620cf2] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-e5620cf2] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-e5620cf2] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-e5620cf2] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-e5620cf2] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-e5620cf2] {\n  background-color: #495BFF;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-e5620cf2] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-e5620cf2] {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-e5620cf2] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-e5620cf2] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-e5620cf2] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-e5620cf2] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-e5620cf2] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-e5620cf2] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-e5620cf2] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-e5620cf2] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-e5620cf2] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-e5620cf2] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-e5620cf2] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-e5620cf2] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-e5620cf2] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-e5620cf2] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-e5620cf2] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-e5620cf2] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-e5620cf2] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-e5620cf2] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-e5620cf2] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .bigImg[data-v-e5620cf2] {\n  border: 0.03rem solid #fff;\n  border-radius: 50%;\n}\n.theme-light .noImg[data-v-e5620cf2] {\n  border: 0.03rem solid #fff;\n}\n.theme-light .smallImg[data-v-e5620cf2] {\n  border: 0.03rem solid #fff;\n  border-radius: 50%;\n}\n.theme-light .noImg[data-v-e5620cf2] {\n  border: 0.03rem solid #fff;\n}\n.theme-dark .bigImg[data-v-e5620cf2] {\n  border: 0.03rem solid #0A0E1F;\n  border-radius: 50%;\n}\n.theme-dark .smallImg[data-v-e5620cf2] {\n  border: 0.03rem solid #0A0E1F;\n  border-radius: 50%;\n}\n.noData[data-v-e5620cf2] {\n  min-height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.noData img[data-v-e5620cf2] {\n  width: 2.67rem;\n  height: 2.67rem;\n}\n.noData p[data-v-e5620cf2] {\n  font-size: 0.37rem;\n}\n.setMargin[data-v-e5620cf2] {\n  margin-top: 0.4rem;\n}\n.trading-wrap-box-pool[data-v-e5620cf2] {\n  border-radius: 0.21rem;\n  margin-top: 0.27rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title[data-v-e5620cf2] {\n  display: flex;\n  height: 1.44rem;\n  align-items: center;\n  position: relative;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .bigImg[data-v-e5620cf2] {\n  width: 0.85rem;\n  height: 0.85rem;\n  display: inline-block;\n  margin-left: 0.4rem;\n  vertical-align: middle;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .smallImg[data-v-e5620cf2] {\n  width: 0.85rem;\n  height: 0.85rem;\n  border-radius: 50%;\n  margin-left: -0.13rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .noImg[data-v-e5620cf2] {\n  display: inline-block;\n  width: 0.85rem;\n  height: 0.85rem;\n  line-height: 0.85rem;\n  border-radius: 50%;\n  font-size: 0.29rem;\n  font-weight: 700;\n  text-align: center;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .noImgOne[data-v-e5620cf2] {\n  margin-left: 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .noImgTwo[data-v-e5620cf2] {\n  margin-left: -0.13rem;\n}\n.trading-wrap-box-pool .trading-wrap-line[data-v-e5620cf2] {\n  width: 100%;\n  height: 0.03rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex[data-v-e5620cf2] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 0.27rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-left[data-v-e5620cf2] :first-child {\n  font-weight: 600;\n  font-size: 0.43rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-left[data-v-e5620cf2] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.11rem;\n  width: 3.33rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-one-header-about[data-v-e5620cf2] {\n  height: 0.64rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 0.64rem;\n  text-align: center;\n  padding: 0.05rem 0.32rem;\n  border-top-right-radius: 0.21rem;\n  border-bottom-left-radius: 0.21rem;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-right[data-v-e5620cf2] {\n  text-align: right;\n  position: absolute;\n  right: 0.4rem;\n  margin-top: 0.13rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-right[data-v-e5620cf2] :first-child {\n  font-size: 0.32rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-right[data-v-e5620cf2] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.05rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content[data-v-e5620cf2] {\n  padding: 0 0.4rem 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex[data-v-e5620cf2] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.4rem 0 0;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .setFont16[data-v-e5620cf2] {\n  font-size: 0.43rem !important;\n  margin-top: 0.13rem !important;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-left[data-v-e5620cf2] {\n  text-align: left;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-left[data-v-e5620cf2] :first-child {\n  font-size: 0.32rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-left[data-v-e5620cf2] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-right[data-v-e5620cf2] {\n  text-align: right;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-right[data-v-e5620cf2] :first-child {\n  font-size: 0.32rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-right[data-v-e5620cf2] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-stake[data-v-e5620cf2] {\n  width: 100%;\n  height: 1.33rem;\n  line-height: 1.33rem;\n  text-align: center;\n  border-radius: 0.27rem;\n  font-weight: 500;\n  font-size: 0.43rem;\n  margin-top: 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-stake-now[data-v-e5620cf2] {\n  background: #495bff;\n  color: #fff;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-stake-soon[data-v-e5620cf2] {\n  color: #9ca5b3;\n}",""]),t.exports=o},557:function(t,n,o){"use strict";o.r(n),o(372),o(47),o(69),o(20),o(82);var a={data:function(){return{formatEn:"DDd HHh mmm sss"}},props:{finished:{type:Boolean,default:!1},tradingList:{type:Array,default:function(){}},activeType:{type:Number,default:0}},methods:{swap:function(t){this.$emit("swap",t)},milliFormat:function(t){return t&&t.toString().replace(/^\d+/g,(function(t){return t.replace(/(?=(?!^)(\d{3})+$)/g,",")}))}}};o(544),o=o(79),a=Object(o.a)(a,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[t.tradingList&&0<t.tradingList.length?a("div",t._l(t.tradingList,(function(n,o){return a("div",{key:o,staticClass:"trading-wrap-box-pool colorBackground1"},[a("div",{staticClass:"trading-wrap-box-pool-title"},[n.fromIcon?a("img",{staticClass:"bigImg",attrs:{src:n.fromIcon,alt:""}}):a("div",{staticClass:"noImg colorBackground2 noImgOne textSecond3 setFontFamily"},[t._v("\n          "+t._s((4<n.fromSymbol.length?n.fromSymbol.substring(0,4):n.fromSymbol).toUpperCase())+"\n        ")]),t._v(" "),n.toIcon?a("img",{staticClass:"smallImg",attrs:{src:n.toIcon,alt:""}}):a("div",{staticClass:"noImg noImgTwo colorBackground2 textSecond3 setFontFamily"},[t._v("\n          "+t._s((4<n.toSymbol.length?n.toSymbol.substring(0,4):n.toSymbol).toUpperCase())+"\n          ")]),t._v(" "),a("div",{staticClass:"trading-wrap-box-pool-title-flex"},[a("div",{staticClass:"trading-wrap-box-pool-title-left"},[a("div",{staticClass:"textPrimary0"},[t._v(t._s(n.fromSymbol.toUpperCase())+"/"+t._s(n.toSymbol.toUpperCase()))]),t._v(" "),a("div",{staticClass:"textSecond3"},[t._v(t._s(t.$t("trading.Chain")))])]),t._v(" "),t.finished||2==t.activeType?t.finished?a("div",{staticClass:"trading-wrap-one-header-about colorSecond08 colorSecond18"},[a("span",[t._v(t._s(t.$t("trading.finished")))])]):a("div"):a("div",{staticClass:"trading-wrap-box-pool-title-right"},[0==t.activeType?a("div",{staticClass:"textSecond3"},[t._v(t._s(t.$t("trading.Ending")))]):t._e(),t._v(" "),1==t.activeType?a("div",{staticClass:"textSecond3"},[t._v(t._s(t.$t("trading.Start")))]):t._e(),t._v(" "),0<n.countdown?a("div",[a("van-count-down",{staticClass:"textPrimary0 setFontFamily",attrs:{time:n.countdown,format:t.formatEn}})],1):a("div",{staticClass:"textPrimary0"},[t._v("--")])])])]),t._v(" "),a("div",{staticClass:"trading-wrap-box-pool-content textSecond2"},[a("div",{staticClass:"trading-wrap-line colorLine"}),t._v(" "),a("div",{staticClass:"trading-wrap-box-pool-flex"},[a("div",{staticClass:"trading-wrap-box-pool-left"},[a("div",{staticClass:"textSecond3"},[t._v(t._s(t.$t("trading.Time")))]),t._v(" "),a("div",{staticClass:"textSecond3"},[t._v(t._s(t.$t("trading.Reward")))])]),t._v(" "),a("div",{staticClass:"trading-wrap-box-pool-right"},[a("div",{staticClass:"textSecond2 setFontFamily"},[t._v("\n              "+t._s(n.startTime)+" — "+t._s(n.endTime)+" (GMT+8)\n            ")]),t._v(" "),a("div",{staticClass:"setFontFamily textSecond2"},[a("span",{staticClass:"colorPrimary"},[t._v(t._s(n.rate)+"x")]),t._v(" "+t._s(t.$t("trading.in"))+" BKB\n            ")])])]),t._v(" "),a("div",{staticClass:"trading-wrap-line colorLine setMargin"}),t._v(" "),a("div",{staticClass:"trading-wrap-box-pool-flex"},[a("div",{staticClass:"trading-wrap-box-pool-left"},[a("div",{staticClass:"textSecond3"},[t._v(t._s(t.$t("trading.YourTrading")))]),t._v(" "),a("div",{staticClass:"textPrimary0 setFontFamily setFont16"},[t._v("\n              $"+t._s(t.milliFormat(n.allTradingVolume))+"\n            ")])]),t._v(" "),a("div",{staticClass:"trading-wrap-box-pool-right"},[a("div",{staticClass:"textSecond3"},[t._v(t._s(t.$t("trading.tradingTitle")))]),t._v(" "),a("div",{staticClass:"setFontFamily colorPrimary setFont16"},[t._v("\n              +"+t._s(t.milliFormat(n.reward))+" BKB\n            ")])])]),t._v(" "),t.finished||0!=t.activeType?t.finished||1!=t.activeType?t.finished||2!=t.activeType?t._e():a("div",{staticClass:"trading-wrap-box-pool-stake textSecond3 colorBackground2"},[t._v("\n          "+t._s(t.$t("trading.finished"))+"\n        ")]):a("div",{staticClass:"trading-wrap-box-pool-stake textSecond3 colorBackground2"},[t._v("\n          "+t._s(t.$t("trading.ComingSoon"))+"\n        ")]):a("div",{staticClass:"trading-wrap-box-pool-stake colorwhite colorBackgroundPrimary",on:{click:function(o){return t.swap(n.swapNow)}}},[t._v("\n          "+t._s(t.$t("trading.swapNow"))+"\n        ")])])])})),0):a("div",{staticClass:"noData"},[a("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png",alt:""}}),t._v(" "),a("p",{staticClass:"textSecond3"},[t._v(t._s(t.$t("mining.noData")))])])])}),[],!1,null,"e5620cf2",null);n.default=a.exports},642:function(t,n,o){var a=o(749);(a="string"==typeof(a=a.__esModule?a.default:a)?[[t.i,a,""]]:a).locals&&(t.exports=a.locals),(0,o(110).default)("3f7e5d3b",a,!0,{sourceMap:!1})},748:function(t,n,o){"use strict";o(642)},749:function(t,n,o){(o=o(109)(!1)).push([t.i,".theme-light .textPrimary0[data-v-2a99ae3c] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-2a99ae3c] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-2a99ae3c] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-2a99ae3c] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-2a99ae3c] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-2a99ae3c] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-2a99ae3c] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-2a99ae3c] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-2a99ae3c] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-2a99ae3c] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-2a99ae3c] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-2a99ae3c] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-2a99ae3c] {\n  background-color: #495BFF;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-2a99ae3c] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-2a99ae3c] {\n  background-color: #1CBDB5;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-2a99ae3c] {\n  background-color: #080D21;\n}\n.theme-light .colorPrimary[data-v-2a99ae3c] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-2a99ae3c] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-2a99ae3c] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-2a99ae3c] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-2a99ae3c] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-2a99ae3c] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-2a99ae3c] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-2a99ae3c] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-2a99ae3c] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-2a99ae3c] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-2a99ae3c] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-2a99ae3c] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-2a99ae3c] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-2a99ae3c] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-2a99ae3c] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-2a99ae3c] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-2a99ae3c] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-2a99ae3c] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-2a99ae3c] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-2a99ae3c] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-2a99ae3c] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-2a99ae3c] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-2a99ae3c] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-2a99ae3c] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-2a99ae3c] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-2a99ae3c] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-2a99ae3c] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-2a99ae3c] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-2a99ae3c] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-2a99ae3c] {\n  background-color: #495BFF;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-2a99ae3c] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-2a99ae3c] {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-2a99ae3c] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-2a99ae3c] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-2a99ae3c] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-2a99ae3c] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-2a99ae3c] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-2a99ae3c] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-2a99ae3c] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-2a99ae3c] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-2a99ae3c] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-2a99ae3c] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-2a99ae3c] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-2a99ae3c] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-2a99ae3c] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-2a99ae3c] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-2a99ae3c] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-2a99ae3c] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-2a99ae3c] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-2a99ae3c] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-2a99ae3c] {\n  background-color: rgba(255,184,0,0.1);\n}\n.hisory-wrap[data-v-2a99ae3c] {\n  min-height: 100vh;\n  padding: 0.27rem 0.43rem 0.4rem;\n}\n.hisory-wrap .hisory-wrap-box[data-v-2a99ae3c] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.4rem 0.91rem;\n  border-radius: 0.21rem;\n  text-align: center;\n}\n.hisory-wrap .hisory-wrap-box .hisory-wrap-box-text[data-v-2a99ae3c] :first-child {\n  font-size: 0.32rem;\n}\n.hisory-wrap .hisory-wrap-box .hisory-wrap-box-text[data-v-2a99ae3c] :last-child {\n  font-size: 0.43rem;\n}\n.loading[data-v-2a99ae3c] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",""]),t.exports=o},795:function(t,n,o){"use strict";o.r(n),o(55),o(41),o(61),o(80),o(48),o(81);var e=o(378),i=o(14),a=o(36),r=(o(47),o(69),o(20),o(82),o(68),o(371)),c=o(91);function l(t,n){var o,a=Object.keys(t);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(t),n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,o)),a}function d(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?l(Object(o),!0).forEach((function(n){Object(a.a)(t,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))}))}return t}c={data:function(){return{historyList:[],refreshLoading:!1,start:1,isLoading:!0,loading:!1,tradingSummarys:{totalReward:0,totalTradingVolume:0}}},components:{tradingCom:o(557).default},computed:d(d({},Object(c.b)(["local"])),{},{isBitKeep:function(){return this.local.UA.isBitKeep}}),mounted:function(){var t=this;this.isBitKeep&&BitKeepInvoke.onLoadReady((function(){BitKeepInvoke.setTitle(t.$t("mining.historyTitle")),BitKeepInvoke.setIconAction(""),BitKeepInvoke.appMode((function(t,n){var o=document.getElementsByTagName("body")[0];1==n?o.setAttribute("class","theme-dark"):o.setAttribute("class","theme-light")}))})),this.getHistoryList(),this.getTradingSummary()},methods:{getHistoryList:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function n(){var o,c,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.tradingHistory({start:t.start,limit:20});case 2:if(a=n.sent,o=a.data,1==a.status)return t.isLoading=!1,n.abrupt("return",t.$dialog.alert({message:o,confirmButtonText:t.$t("staking.know"),confirmButtonColor:"$theme-light-colorPrimary"}));n.next=8;break;case 8:c=o.list,t.finished=!1,1==t.start?(t.historyList=[],t.historyList=c):(a=t.historyList).push.apply(a,Object(e.a)(c)),t.refreshLoading=!1,t.loading=!1,t.isLoading=!1,t.$toast.clear(),t.historyList.length>=o.totalRows&&(t.finished=!0);case 16:case"end":return n.stop()}}),n)})))()},onLoadList:function(){this.start++,this.finished=!1,this.getHistoryList()},onDownRefresh:function(){this.start=1,this.getHistoryList()},getTradingSummary:function(){var a=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.tradingSummary();case 2:if(n=t.sent,o=n.data,1==n.status)return a.isLoading=!1,t.abrupt("return",a.$dialog.alert({message:o,confirmButtonText:a.$t("trading.know"),confirmButtonColor:"#495BFF"}));t.next=8;break;case 8:a.tradingSummarys=o;case 9:case"end":return t.stop()}}),t)})))()},milliFormat:function(t){return t&&t.toString().replace(/^\d+/g,(function(t){return t.replace(/(?=(?!^)(\d{3})+$)/g,",")}))}}},o(748),o=o(79),c=Object(o.a)(c,(function(){var t=this,n=t.$createElement;return(n=t._self._c||n)("div",{staticClass:"hisory-wrap colorBackground0"},[t.isLoading?n("div",{staticClass:"loading"},[n("van-loading",{attrs:{color:"#1989fa",vertical:""}},[t._v(t._s(t.$t("base.loading"))+"...")])],1):n("van-pull-refresh",{staticStyle:{"min-height":"100vh"},attrs:{"success-text":t.$t("mining.success"),"loading-text":t.$t("mining.loading"),"loosing-text":t.$t("mining.loading")},on:{refresh:t.onDownRefresh},model:{value:t.refreshLoading,callback:function(n){t.refreshLoading=n},expression:"refreshLoading"}},[n("van-list",{attrs:{finished:t.finished,"immediate-check":!1,"loading-text":t.$t("mining.loading"),"finished-text":0<t.historyList.length?t.$t("base.nomore"):""},on:{load:t.onLoadList},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},[n("div",{staticClass:"hisory-wrap-box colorBackground1"},[n("div",{staticClass:"hisory-wrap-box-text"},[n("div",{staticClass:"textSecond2"},[t._v(t._s(t.$t("trading.transaction")))]),t._v(" "),n("div",{staticClass:"textPrimary0 setFontFamily"},[t._v("$"+t._s(t.milliFormat(t.tradingSummarys.totalTradingVolume)))])]),t._v(" "),n("div",{staticClass:"hisory-wrap-box-text"},[n("div",{staticClass:"textSecond2"},[t._v(t._s(t.$t("trading.GetsBKB")))]),t._v(" "),n("div",{staticClass:"textPrimary0 setFontFamily"},[t._v(t._s(t.milliFormat(t.tradingSummarys.totalReward)))])])]),t._v(" "),n("div",{staticClass:"history-wrap-one"},[n("tradingCom",{attrs:{tradingList:t.historyList,finished:!0}})],1)])],1)],1)}),[],!1,null,"2a99ae3c",null),n.default=c.exports}}]);