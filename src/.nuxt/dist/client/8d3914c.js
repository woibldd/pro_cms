(window.webpackJsonp=window.webpackJsonp||[]).push([[34,28],{369:function(t,n,e){"use strict";e.d(n,"a",(function(){return l})),e(60);n=e(19);var o=e(94),a=(n=e.n(o),e(2)),r=e(93),i=(e(92),function(){for(var t,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];(t=console).log.apply(t,["bit-activity-request:"].concat(e))}),c=n.a.create({baseURL:"/",timeout:6e4,headers:{token:"1a5b1cbcc613d8b52860262109d247a3",language:"zh",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});c.interceptors.request.use((function(t){var n,e,o;return i("requestlog:",t),a.a.prototype.$store&&(e=(o=(n=a.a.prototype.$store.state).local).UA,o=o.locale,e.isBitKeep?Object.assign(t.headers,n.local.bitkeep,{language:o}):Object.assign(t.headers,{language:o})),t}),(function(t){return Promise.resolve({status:1})})),c.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];(t=console).log.apply(t,["bit-activity-response:"].concat(e))}("responselog:",t);var n="网路开了小差";n=(t=Object(r.b)()||{}).t?t.t("base.networkErro"):n;return Promise.resolve({status:1,data:n})}));var l={mBoxList:function(t){return c.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return c.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return c.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return c.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return c.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return c.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return c.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return c.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return c.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return c.post("swap/mining/info",t)},historyPhase:function(t){return c.post("swap/mining/historyPhase",t)},receiveAward:function(t){return c.post("swap/mining/receiveAward",t)},getInviteList:function(t){return c.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return c.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return c.post("swap/mining/activityDoneRewardList",t)}}},378:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var o=e(131),a=e(167);function r(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},397:function(t,n,e){var o=e(431);(o="string"==typeof(o=o.__esModule?o.default:o)?[[t.i,o,""]]:o).locals&&(t.exports=o.locals),(0,e(110).default)("15abc333",o,!0,{sourceMap:!1})},398:function(t,n,e){var o=e(433);(o="string"==typeof(o=o.__esModule?o.default:o)?[[t.i,o,""]]:o).locals&&(t.exports=o.locals),(0,e(110).default)("ec15064c",o,!0,{sourceMap:!1})},430:function(t,n,e){"use strict";e(397)},431:function(t,n,e){(e=e(109)(!1)).push([t.i,".van-popup__close-icon--top-right {\n  top: 0.27rem;\n  right: 0.24rem;\n}\n.van-popup__close-icon--top-right img {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.theme-dark .van-toast {\n  background-color: #DFE0E3;\n  color: #171A26;\n}",""]),t.exports=e},432:function(t,n,e){"use strict";e(398)},433:function(t,n,e){(e=e(109)(!1)).push([t.i,".theme-light .textPrimary0[data-v-21c6ff47] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-21c6ff47] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-21c6ff47] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-21c6ff47] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-21c6ff47] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-21c6ff47] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorBackground0[data-v-21c6ff47] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-21c6ff47] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-21c6ff47] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-21c6ff47] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-21c6ff47] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-21c6ff47] {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary[data-v-21c6ff47] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-21c6ff47] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-21c6ff47] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-21c6ff47] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-21c6ff47] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-21c6ff47] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-21c6ff47] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-21c6ff47] {\n  color: #F04E98;\n}\n.theme-light .colorBlack[data-v-21c6ff47] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-21c6ff47] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-21c6ff47] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-21c6ff47] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-21c6ff47] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-21c6ff47] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-21c6ff47] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-21c6ff47] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0[data-v-21c6ff47] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-21c6ff47] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-21c6ff47] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-21c6ff47] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-21c6ff47] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-21c6ff47] {\n  background-color: #1F212E;\n}\n.theme-dark .colorBackground0[data-v-21c6ff47] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-21c6ff47] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-21c6ff47] {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3[data-v-21c6ff47] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-21c6ff47] {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary[data-v-21c6ff47] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-21c6ff47] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-21c6ff47] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-21c6ff47] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-21c6ff47] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-21c6ff47] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-21c6ff47] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-21c6ff47] {\n  color: #F04E98;\n}\n.theme-dark .colorBlack[data-v-21c6ff47] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-21c6ff47] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-21c6ff47] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-21c6ff47] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-21c6ff47] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-21c6ff47] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-21c6ff47] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-21c6ff47] {\n  color: rgba(47,128,237,0.1);\n}\n.title[data-v-21c6ff47] {\n  margin: 0.37rem 0.43rem;\n  text-align: center;\n  font-size: 0.43rem;\n  font-weight: 500;\n}\n.title p[data-v-21c6ff47] {\n  font-weight: 600;\n}\n.setOpactive[data-v-21c6ff47] {\n  opacity: 0.3;\n}\n.line[data-v-21c6ff47] {\n  width: 100%;\n  margin-top: 0;\n  height: 0.03rem;\n}\n.ruleDetailcontent[data-v-21c6ff47] {\n  height: 50vh;\n  overflow: auto;\n  padding: 0.53rem;\n}\n.ruleDetailcontent img[data-v-21c6ff47] {\n  width: 1.28rem;\n  height: 1.28rem;\n}\n.ruleDetailcontent .setF[data-v-21c6ff47] {\n  font-size: 0.43rem;\n}\n.ruleDetailcontent .setLineHeight[data-v-21c6ff47] {\n  line-height: 0.48rem;\n}\n.ruleDetailcontent p[data-v-21c6ff47] {\n  font-size: 0.37rem;\n  line-height: 0.48rem;\n  margin: 0.27rem;\n}\n.ruleDetailcontent li[data-v-21c6ff47] {\n  list-style: disc;\n  font-size: 0.37rem;\n  line-height: 0.48rem;\n  margin: 0.27rem;\n}\n.confirm-bottom[data-v-21c6ff47] {\n  height: 1.28rem;\n  width: 100%;\n  bottom: 0;\n  z-index: 99;\n  position: fixed;\n  padding: 0.29rem 0 0.91rem;\n}\n.confirm-bottom .swap-btn[data-v-21c6ff47] {\n  height: 1.33rem;\n  border-radius: 0.27rem;\n  text-align: center;\n  line-height: 1.17rem;\n  border: none;\n  font-weight: 500;\n  font-size: 0.43rem;\n  width: 8rem;\n  left: 50%;\n  color: #fff;\n  transform: translateX(-50%);\n  z-index: 0;\n}",""]),t.exports=e},476:function(t,n,e){var o=e(559);(o="string"==typeof(o=o.__esModule?o.default:o)?[[t.i,o,""]]:o).locals&&(t.exports=o.locals),(0,e(110).default)("38ca766f",o,!0,{sourceMap:!1})},493:function(t,n,e){"use strict";e.r(n);var o={data:function(){return{visables:this.ruleDetailFlag,closeIcon:"http://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},watch:{ruleDetailFlag:function(t){this.visables=t},theme:function(t){this.closeIcon=1==t?"http://cdn.bitkeep.vip/u_b_d71e28c0-4c2d-11ec-ad04-d1b66ed0d35e.png":"http://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},props:["ruleDetailFlag","theme"],methods:{close:function(){this.$emit("close",!1)}}};e(430),e(432),e=e(79),o=Object(e.a)(o,(function(){var t=this,n=t.$createElement;return(n=t._self._c||n)("van-popup",{staticClass:"colorBackground1",style:{height:"50%",overflow:"hidden"},attrs:{closeable:"","close-icon":t.closeIcon,round:"",position:"bottom"},on:{"click-overlay":t.close,"click-close-icon":t.close},model:{value:t.visables,callback:function(n){t.visables=n},expression:"visables"}},[n("div",{staticClass:"title"},[n("p",{staticClass:"textPrimary0"},[t._v(t._s(t.$t("blindboxInvite.RuleTitle")))])]),t._v(" "),n("div",{staticClass:"line colorLine"}),t._v(" "),n("ul",{staticClass:"ruleDetailcontent"},[n("li",{staticClass:"textPrimary0 setF"},[t._v(t._s(t.$t("blindboxInvite.inviteRuleTitle")))]),t._v(" "),n("li",{staticClass:"textSecond1 setLineHeight",domProps:{innerHTML:t._s(t.$t("blindboxInvite.ruleDetail"))}}),t._v(" "),n("li",{staticClass:"textSecond1 setLineHeight",domProps:{innerHTML:t._s(t.$t("blindboxInvite.ruleDetail1"))}}),t._v(" "),n("li",{staticClass:"textSecond1"},[t._v(t._s(t.$t("blindboxInvite.ruleDetail2")))])])])}),[],!1,null,"21c6ff47",null);n.default=o.exports},558:function(t,n,e){"use strict";e(476)},559:function(t,n,e){(e=e(109)(!1)).push([t.i,'.theme-light .textPrimary0[data-v-4b4d36f0] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-4b4d36f0] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-4b4d36f0] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-4b4d36f0] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-4b4d36f0] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-4b4d36f0] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorBackground0[data-v-4b4d36f0] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-4b4d36f0] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-4b4d36f0] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-4b4d36f0] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-4b4d36f0] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-4b4d36f0] {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary[data-v-4b4d36f0] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-4b4d36f0] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-4b4d36f0] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-4b4d36f0] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-4b4d36f0] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-4b4d36f0] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-4b4d36f0] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-4b4d36f0] {\n  color: #F04E98;\n}\n.theme-light .colorBlack[data-v-4b4d36f0] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-4b4d36f0] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-4b4d36f0] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-4b4d36f0] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-4b4d36f0] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-4b4d36f0] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-4b4d36f0] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-4b4d36f0] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0[data-v-4b4d36f0] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-4b4d36f0] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-4b4d36f0] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-4b4d36f0] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-4b4d36f0] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-4b4d36f0] {\n  background-color: #1F212E;\n}\n.theme-dark .colorBackground0[data-v-4b4d36f0] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-4b4d36f0] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-4b4d36f0] {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3[data-v-4b4d36f0] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-4b4d36f0] {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary[data-v-4b4d36f0] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-4b4d36f0] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-4b4d36f0] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-4b4d36f0] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-4b4d36f0] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-4b4d36f0] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-4b4d36f0] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-4b4d36f0] {\n  color: #F04E98;\n}\n.theme-dark .colorBlack[data-v-4b4d36f0] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-4b4d36f0] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-4b4d36f0] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-4b4d36f0] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-4b4d36f0] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-4b4d36f0] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-4b4d36f0] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-4b4d36f0] {\n  color: rgba(47,128,237,0.1);\n}\n.invite-list-box[data-v-4b4d36f0] {\n  padding-top: 0.27rem;\n}\n.invite-list-box .loading[data-v-4b4d36f0] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.invite-list-box .setHeight[data-v-4b4d36f0] {\n  min-height: 90vh;\n}\n.invite-list-box .invite-list-header[data-v-4b4d36f0] {\n  margin: 0 0.43rem;\n  border-radius: 0.21rem 0.21rem 0 0;\n  color: #495bff;\n  display: flex;\n  padding: 0.27rem 0.4rem 0.4rem;\n  line-height: 0.75rem;\n  background-color: rgba(73,91,255,0.1);\n}\n.invite-list-box .invite-list-header .color-line[data-v-4b4d36f0] {\n  width: 0.03rem;\n  height: 0.96rem;\n  opacity: 0.1;\n  margin-top: 0.37rem;\n  background: #495bff;\n}\n.invite-list-box .invite-list-header .invite-list-header-left[data-v-4b4d36f0] {\n  width: 50%;\n}\n.invite-list-box .invite-list-header .invite-list-header-left[data-v-4b4d36f0] :first-child {\n  font-size: 0.37rem;\n}\n.invite-list-box .invite-list-header .invite-list-header-left[data-v-4b4d36f0] :last-child {\n  font-size: 0.64rem;\n}\n.invite-list-box .invite-list-header .invite-list-header-right[data-v-4b4d36f0] {\n  width: 50%;\n  padding-left: 0.43rem;\n}\n.invite-list-box .invite-list-header .invite-list-header-right[data-v-4b4d36f0] :first-child {\n  font-size: 0.37rem;\n}\n.invite-list-box .invite-list-header .invite-list-header-right[data-v-4b4d36f0] :last-child {\n  font-size: 0.64rem;\n}\n.invite-list-box .invite-row[data-v-4b4d36f0] {\n  padding: 0 0.43rem;\n  height: 0.8rem;\n  line-height: 0.8rem;\n}\n.invite-list-box .invite-line[data-v-4b4d36f0] {\n  width: 100%;\n  height: 0.03rem;\n}\n.invite-list-box .invite-row-data[data-v-4b4d36f0] {\n  height: 1.33rem;\n  line-height: 1.33rem;\n  margin: 0 0.43rem;\n}\n.invite-list-box .invite-row-data .invite-row-data-row[data-v-4b4d36f0] {\n  font-family: "bitkeep DIN";\n}\n.invite-list-box .noData[data-v-4b4d36f0] {\n  min-height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.invite-list-box .noData img[data-v-4b4d36f0] {\n  width: 2.67rem;\n  height: 2.67rem;\n}\n.invite-list-box .noData p[data-v-4b4d36f0] {\n  font-size: 0.37rem;\n}',""]),t.exports=e},594:function(t,n,e){"use strict";e.r(n),e(55),e(41),e(61),e(80),e(48),e(81);var o=e(378),i=e(14),r=e(35),a=(e(68),e(91)),c=e(369);function l(t,n){var e,o=Object.keys(t);return Object.getOwnPropertySymbols&&(e=Object.getOwnPropertySymbols(t),n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.push.apply(o,e)),o}function d(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){Object(r.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}a={data:function(){return{isLoading:!0,finished:!1,loading:!1,refreshing:!1,ruleDetailFlag:!1,inviteList:[],activeCount:0,unActiveCount:0,theme:0,start:0,limit:20,question:"http://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png"}},components:{ruleDetail:e(493).default},filters:{address:function(t){return t&&t.substring(0,6)+" .... "+t.substr(-4)},filterTime:function(t){return(t=new Date(t)).getFullYear()+"-"+t.getMonth()+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}},computed:d(d({},Object(a.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep}}),created:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.isLoading=!1;case 1:case"end":return n.stop()}}),n)})))()},beforeMount:function(){var t=this;this.isBitKeep&&BitKeepInvoke.onLoadReady((function(){BitKeepInvoke.setTitle(t.$t("blindboxInvite.inviteFriends")),t.$nextTick((function(){BitKeepInvoke.appMode((function(n,e){var o=document.getElementsByTagName("body")[0];1==e?(t.theme=1,t.question="http://cdn.bitkeep.vip/u_b_47485390-4f90-11ec-ace3-97579b99c357.png",o.setAttribute("class","theme-dark")):(t.theme=0,t.question="http://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png",o.setAttribute("class","theme-light")),BitKeepInvoke.setIconAction(t.question,(function(){t.ruleDetailFlag=!0}))}))}))}))},mounted:function(){this.getInviteList()},methods:{getInviteList:function(){var a=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var n,e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.getInviteList({start:a.start*a.limit,limit:a.limit});case 2:if(n=t.sent,e=n.data,1==n.status)return a.isLoading=!1,a.loading=!0,t.abrupt("return",a.$toast(e));t.next=9;break;case 9:a.activeCount=e.activeCount,a.unActiveCount=e.unActiveCount,(r=e.list)&&(n=a.inviteList).push.apply(n,Object(o.a)(r)),a.isLoading=!1,a.$toast.clear(),a.loading=!1,a.start++,a.inviteList.length>=e.total_count&&(a.finished=!0);case 18:case"end":return t.stop()}}),t)})))()},ruleDetailClose:function(){this.ruleDetailFlag=!1},onRefresh:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function n(){var e,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.getInviteList({start:0,limit:t.limit});case 2:e=n.sent,o=e.data,1==e.status&&(t.isLoading=!1,t.$toast(o)),t.rewardsList=o.data,t.refreshing=!1;case 8:case"end":return n.stop()}}),n)})))()},getSub:function(){var t=JSON.parse(JSON.stringify(this.inviteLink)),n=t.substring(0,14);this.inviteLink=n+" .... "+t.substr(-15)}}},e(558),e=e(79),a=Object(e.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"invite-list colorBackground3"},[t.isLoading?e("div",{staticClass:"loading"},[e("van-loading",{attrs:{color:"#1989fa",vertical:""}},[t._v(t._s(t.$t("base.loading"))+"...")])],1):e("div",{staticClass:"invite-list-box"},[e("div",{staticClass:"invite-list-header"},[e("div",{staticClass:"invite-list-header-left"},[e("div",[t._v(t._s(t.$t("blindboxInvite.inforce")))]),t._v(" "),e("div",{staticClass:"setFontFamily"},[t._v(t._s(t.activeCount||0))])]),t._v(" "),e("div",{staticClass:"color-line"}),t._v(" "),e("div",{staticClass:"invite-list-header-right"},[e("div",[t._v(t._s(t.$t("blindboxInvite.inactivated")))]),t._v(" "),e("div",{staticClass:"setFontFamily"},[t._v(t._s(t.unActiveCount||0))])])]),t._v(" "),0<t.inviteList.length?e("div",[e("van-pull-refresh",{attrs:{"success-text":t.$t("mining.success"),"loading-text":t.$t("mining.loading"),"loosing-text":t.$t("mining.loading")},on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(n){t.refreshing=n},expression:"refreshing"}},[e("van-list",{staticClass:"setHeight",attrs:{finished:t.finished,"immediate-check":!1},on:{load:t.getInviteList},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},[e("van-row",{staticClass:"invite-row"},[e("van-col",{staticClass:"invite-col textSecond3",attrs:{span:"8"}},[t._v(t._s(t.$t("blindboxInvite.Address")))]),t._v(" "),e("van-col",{staticClass:"invite-col textSecond3",attrs:{span:"7"}},[t._v(t._s(t.$t("blindboxInvite.State")))]),t._v(" "),e("van-col",{staticClass:"invite-col textSecond3",attrs:{span:"9"}},[t._v(t._s(t.$t("blindboxInvite.Time")))])],1),t._v(" "),e("div",{staticClass:"invite-line colorLine"}),t._v(" "),t._l(t.inviteList,(function(n){return e("div",{key:n.address,staticClass:"invite-row-data"},[e("van-row",{staticClass:"invite-row-data-row",class:1==n.state?"textPrimary0":"textSecond3"},[e("van-col",{staticClass:"invite-row-data-col",attrs:{span:"8"}},[t._v(t._s(t._f("address")(n.address_friend)))]),t._v(" "),e("van-col",{staticClass:"invite-row-data-col",attrs:{span:"7"}},[t._v(t._s(1==n.state?"In force":"Inactivated"))]),t._v(" "),e("van-col",{staticClass:"invite-row-data-col",attrs:{span:"9"}},[t._v(t._s(t._f("filterTime")(n.create_time)))])],1),t._v(" "),e("div",{staticClass:"invite-line colorLine"})],1)}))],2)],1)],1):e("div",{staticClass:"noData"},[e("img",{attrs:{src:"http://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png",alt:""}}),t._v(" "),e("p",{staticClass:"textSecond3"},[t._v(t._s(t.$t("mining.noData")))])])]),t._v(" "),e("ruleDetail",{attrs:{ruleDetailFlag:t.ruleDetailFlag,theme:t.theme},on:{close:t.ruleDetailClose}})],1)}),[],!1,null,"4b4d36f0",null),n.default=a.exports}}]);