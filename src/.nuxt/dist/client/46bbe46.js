(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{401:function(t,e,i){"use strict";i.d(e,"a",(function(){return c})),i(59);e=i(18);var n=i(97),s=(e=i.n(n),i(2)),a=i(96),r=(n=i(62),Object(n.debug)("bit-activity-request")),o=Object(n.debug)("bit-activity-response"),l=e.a.create({baseURL:"https://b1.bitkeep.top",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});l.interceptors.request.use((function(t){var e,i,n;return r("requestlog:",t),s.default.prototype.$store&&(i=(n=(e=s.default.prototype.$store.state).local).UA,n=n.locale,i.isBitKeep?Object.assign(t.headers,e.local.bitkeep,{language:n}):Object.assign(t.headers,{language:n})),t}),(function(t){return Promise.resolve({status:1})})),l.interceptors.response.use((function(t){return t.data}),(function(t){o("responselog:",t);var e="网路开了小差";e=(t=Object(a.b)()||{}).t?t.t("base.networkErro"):e;return Promise.resolve({status:1,data:e})}));var c={mBoxList:function(t){return l.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return l.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return l.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return l.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return l.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return l.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return l.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return l.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return l.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return l.post("swap/mining/info",t)},historyPhase:function(t){return l.post("swap/mining/historyPhase",t)},receiveAward:function(t){return l.post("swap/mining/receiveAward",t)},getInviteList:function(t){return l.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return l.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return l.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return l.post("/user/cloudstaking/poolList",t)},myPool:function(t){return l.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return l.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return l.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return l.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return l.post("/user/cloudstaking/getToken",t)},tradingGetList:function(t){return l.post("swap/tradeCompetition/getList",t)},tradingWaitClaim:function(t){return l.post("swap/tradeCompetition/waitClaim",t)},tradingClaim:function(t){return l.post("swap/tradeCompetition/claim",t)},tradingSummary:function(t){return l.post("swap/tradeCompetition/summary",t)},tradingHistory:function(t){return l.post("swap/tradeCompetition/history",t)},welfareSignIn:function(t){return l.post("user/welfare/signIn",t)},getRewardDetail:function(t){return l.post("user/welfare/getRewardDetail",t)},getSignInDetailByUser:function(t){return l.post("user/welfare/getSignInDetailByUser",t)},getRewardResult:function(t){return l.post("user/welfare/getRewardResult",t)},pushPapersIn:function(t){return l.post("user/welfare/pushPapersIn",t)},getJoinTeleJob:function(t){return l.post("user/welfare/getJoinTeleJob",t)},getFirstSwapJob:function(t){return l.post("user/welfare/getFirstSwapJob",t)},getFirst50UJob:function(t){return l.post("user/welfare/getFirst50UJob",t)},newUserRewardJobs:function(t){return l.post("user/welfare/newUserRewardJobs",t)},nftMintGetInfo:function(t){return l.post("/operation/nftmint/getInfo",t)},nftMintInvite:function(t){return l.post("/operation/nftmint/invite",t)},buildNftMintTxs:function(t){return l.post("/operation/nftmint/buildNftMintTxs",t)},nftMintGetToken:function(t){return l.post("/operation/nftmint/getToken",t)},nftMintLotteryList:function(t){return l.post("/operation/nftmint/LotteryList",t)},nftMintbuildNftMeltTxs:function(t){return l.post("/operation/nftmint/buildNftMeltTxs",t)},nftMintnftList:function(t){return l.post("/operation/nftmint/nftList",t)},nftMintcheckTransaction:function(t){return l.post("/operation/nftmint/checkTransaction",t)}}},651:function(t,e,i){},753:function(t,e,i){"use strict";i(651)},797:function(t,e,i){"use strict";i.r(e),i(61),i(43),i(60),i(85),i(51),i(86);var n=i(4),s=i(38),a=(i(58),i(95)),r=i(401),o=i(172);function l(t,e){var i,n=Object.keys(t);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(t),e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)),n}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){Object(s.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}n={name:"Detail",head:function(){return{title:this.$t("blindboxInvite.inviteTitle"),meta:[{hid:"description",name:"description",content:this.$t("ActivityBlindbox.shared.content")},{hid:"og:title",name:"og:title",content:this.$t("blindboxInvite.inviteTitle")},{hid:"twitter:description",name:"description",content:this.$t("ActivityBlindbox.shared.content")},{hid:"twitter:title",name:"description",content:this.$t("blindboxInvite.inviteTitle")}]}},data:function(){return{isLoading:!0,address:"",focus:!1,langShow:!1,langText:"English"}},computed:c(c({},Object(a.b)(["local"])),{},{locale:function(){return this.local.locale},isIos:function(){return this.local.UA.ios}}),mounted:function(){var t=this;this.$nextTick((function(){t.isLoading=!1,window.addEventListener("load",(function(){t.langText={en:"English",zh:"English",ja:"日本語",ko:"한국어",vi:"Tiếng Việt"}[t.locale],t.$store.commit("CHANGE_LANG",t.locale)}))}))},methods:{handlerFocus:function(){this.focus=!0},handlerBlur:function(){this.focus=!1},submitAddress:Object(o.b)(Object(n.a)(regeneratorRuntime.mark((function t(){var e,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""==this.address)return t.abrupt("return",this.$toast(this.$t("blindboxInvite.emptyToast")));t.next=2;break;case 2:return t.next=4,r.a.certifyFriendship({address:this.address,token:this.$route.query.token});case 4:if(e=t.sent,i=e.data,1==e.status)return this.isLoading=!1,t.abrupt("return",this.$toast(i));t.next=10;break;case 10:this.address="",0==i?this.$toast(this.$t("blindboxInvite.toast0")):1==i?this.$router.push("/activity/blindboxInvite/download"):this.$toast(this.$t("blindboxInvite.toast2"));case 12:case"end":return t.stop()}}),t,this)})))),changeLang:function(){var i=this;this.langShow=!0;for(var t=document.getElementsByClassName("langItem"),e=0;e<t.length;e++)!function(e){var n=t[e];n.addEventListener("click",(function(){var t=n.getAttribute("data-val");i.langShow=!1,i.langText=n.getAttribute("data"),i.$store.commit("CHANGE_LANG",t)}))}(e)}}},i(753),i=i(37),n=Object(i.a)(n,(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("div",[t.isLoading?e("div",{staticClass:"loading"},[e("van-loading",{attrs:{color:"#7524f9",vertical:""}},[t._v(t._s(t.$t("base.loading"))+"...")])],1):e("div",{staticClass:"detail_box"},[e("div",{staticClass:"detail_box_back"},[e("div",{staticClass:"detail_box_header"},[t._m(0),t._v(" "),e("div",{staticClass:"detail_box_lang"},[e("div",{staticClass:"langBox",attrs:{id:"showLang"},on:{click:t.changeLang}},[e("span",{staticClass:"curLang"},[t._v(t._s(t.langText))]),t._v(" "),e("van-icon",{staticClass:"icon setFont",attrs:{name:"play"}})],1),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.langShow,expression:"langShow"}],staticClass:"langList",attrs:{id:"langList"}},[e("li",{staticClass:"langItem",attrs:{"data-val":"en",data:"English"}},[t._v("English")]),t._v(" "),e("li",{staticClass:"langItem",attrs:{"data-val":"ko",data:"한국어"}},[t._v("한국어")]),t._v(" "),e("li",{staticClass:"langItem",attrs:{"data-val":"ja",data:"日本語"}},[t._v("日本語")]),t._v(" "),e("li",{staticClass:"langItem",attrs:{"data-val":"vi",data:"Tiếng Việt"}},[t._v("Tiếng Việt")])])])]),t._v(" "),e("div",{staticClass:"detail_box_text"},[e("p",{staticClass:"textPrimary0"},[t._v(t._s(t.$t("blindboxInvite.detailWallet")))])]),t._v(" "),e("div",{staticClass:"detail_box_flex"},[e("div",{staticClass:"detail_box_flex_content"},[e("div",[t._m(1),t._v(" "),e("div",{staticClass:"detail_box_flex_content_first"},[t._v("\n            "+t._s(t.$t("blindboxInvite.detailWallet1"))+"\n          ")])]),t._v(" "),e("div",{staticClass:"detail_box_flex_content_right"},[t._m(2),t._v(" "),e("div",{staticClass:"detail_box_flex_content_last"},[t._v("\n            "+t._s(t.$t("blindboxInvite.detailWallet2"))+"\n          ")])])]),t._v(" "),e("div",{staticClass:"detail_box_flex_content"},[e("div",[t._m(3),t._v(" "),e("div",{staticClass:"detail_box_flex_content_first"},[t._v(t._s(t.$t("blindboxInvite.detailWallet3")))])]),t._v(" "),e("div",{staticClass:"detail_box_flex_content_right"},[t._m(4),t._v(" "),e("div",{staticClass:"detail_box_flex_font"},[t._v(t._s(t.$t("blindboxInvite.detailWallet4")))])])])]),t._v(" "),e("div",{staticClass:"detail_box_address colorBackgroundWhite"},[e("div",{staticClass:"detail_box_address_header textPrimary0"},[t._v("\n        "+t._s(t.$t("blindboxInvite.yourFrinedInvite"))+"\n      ")]),t._v(" "),e("div",{staticClass:"detail_box_address_desc textSecond1"},[t._v("\n                "+t._s(t.$t("blindboxInvite.friendsText"))+"\n      ")]),t._v(" "),e("div",{staticClass:"detail_box_address_textarea colorBackground2"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],ref:"textarea",class:{focus:t.focus||!!t.address},attrs:{type:"text",placeholder:t.focus?"":t.$t("blindboxInvite.detailInput")},domProps:{value:t.address},on:{focus:t.handlerFocus,blur:function(e){return t.handlerBlur()},input:function(e){e.target.composing||(t.address=e.target.value)}}}),t._v(" "),e("div",{staticClass:"detail_box_address_textarea_btn",on:{click:t.submitAddress}},[t._v(t._s(t.$t("blindboxInvite.detailBtn")))]),t._v(" "),e("div",{staticClass:"detail_box_address_textarea_link"},[e("a",{staticClass:"colorPrimary",attrs:{href:"https://www.bitkeep.org/"}},[t._v("\n          "+t._s(t.$t("blindboxInvite.detailJust"))+"\n          ")])])])])]),t._v(" "),e("div",{staticClass:"detail_box_wallet setMargin"},[e("h1",[t._v(t._s(t.$t("blindboxInvite.detailWhy")))]),t._v(" "),e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_5ebca2c0-a03e-11ec-ad3b-53d19082ce6a.png",alt:""}}),t._v(" "),e("div",{staticClass:"detail_box_wallet_title_content"},[e("h1",{staticClass:"detail_box_wallet_title"},[t._v(t._s(t.$t("blindboxInvite.detailContro")))]),t._v(" "),e("ul",{staticClass:"detail_box_wallet_ul"},[e("li",[t._v(t._s(t.$t("blindboxInvite.detailUl1")))]),t._v(" "),e("li",[t._v(t._s(t.$t("blindboxInvite.detailUl2")))]),t._v(" "),e("li",[t._v(t._s(t.$t("blindboxInvite.detailUl3")))])])])]),t._v(" "),e("div",{staticClass:"detail_box_wallet setBackground"},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_9c3b6f00-a03e-11ec-ad3b-53d19082ce6a.png",alt:""}}),t._v(" "),e("div",{staticClass:"detail_box_wallet_title_content setBottom"},[e("h1",{staticClass:"detail_box_wallet_title"},[t._v(t._s(t.$t("blindboxInvite.detailCrypto")))]),t._v(" "),e("ul",{staticClass:"detail_box_wallet_ul"},[e("li",[t._v(t._s(t.$t("blindboxInvite.detailAny")))]),t._v(" "),e("li",[t._v(t._s(t.$t("blindboxInvite.detailAggregate")))])])])]),t._v(" "),e("div",{staticClass:"detail_box_nft"},[e("h1",{staticClass:"textPrimary0"},[t._v(t._s(t.$t("blindboxInvite.detailNFT")))]),t._v(" "),e("div",{staticClass:"detail_box_nft_desc"},[t._v("\n        "+t._s(t.$t("blindboxInvite.detailNFTCon"))+"\n      ")]),t._v(" "),e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_f6689bb0-a03e-11ec-ad3b-53d19082ce6a.png",alt:""}})]),t._v(" "),e("div",{staticClass:"detail_box_bitkeep"},[e("h1",{attrs:{bklang:"five_1"}},[t._v(t._s(t.$t("blindboxInvite.foot1")))]),t._v(" "),e("p",{attrs:{bklang:"five_2"}},[t._v("\n        "+t._s(t.$t("blindboxInvite.foot2"))+"\n      ")]),t._v(" "),e("ul",[e("li",[e("p",{attrs:{bklang:"five_3"}},[t._v(t._s(t.$t("blindboxInvite.foot3")))]),t._v(" "),t._m(5)]),t._v(" "),e("li",[e("p",{attrs:{bklang:"five_4"}},[t._v(t._s(t.$t("blindboxInvite.foot4")))]),t._v(" "),t._m(6)]),t._v(" "),e("li",[e("p",[t._v(t._s(t.$t("blindboxInvite.foot5")))]),t._v(" "),t._m(7)])]),t._v(" "),t._m(8)]),t._v(" "),t._m(9),t._v(" "),t.isIos?e("div",{staticClass:"download",attrs:{id:"IosBtnen"}},[t._m(10),t._v(" "),t._m(11)]):e("div",{staticClass:"download",attrs:{id:"AndroidBtnen"}},[t._m(12),t._v(" "),t._m(13)])])])}),[function(){var t=this.$createElement;return(t=this._self._c||t)("div",[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_88287340-a021-11ec-b054-8b7edc051038.png"}})])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_7fa557b0-a021-11ec-b054-8b7edc051038.png",alt:""}})])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_7fa5cce0-a021-11ec-b054-8b7edc051038.png",alt:""}})])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_7fa57ec0-a021-11ec-b054-8b7edc051038.png",alt:""}})])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_7fa4e280-a021-11ec-b054-8b7edc051038.png",alt:""}})])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"num GB"},[this._v("4,000,000"),t("span",[this._v("+")])])},function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("div",{staticClass:"num"},[e("span",[t._v("$")]),t._v("5,000"),e("span",[t._v("+ 亿")])])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"num"},[this._v("168"),t("span",[this._v("+")])])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"people"},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_4005d2b0-a03f-11ec-ad3b-53d19082ce6a.png",alt:"people"}})])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"blindbox_logo"},[t("span",{staticClass:"logo"},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_88287340-a021-11ec-b054-8b7edc051038.png"}})])])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"left"},[t("a",{attrs:{href:"https://itunes.apple.com/app/bitkeep/id1395301115",target:"_blank"}},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_333f4110-d0ba-11eb-a1fd-1b9796c35a14.png",alt:"btn1"}})])])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"right"},[t("a",{attrs:{href:"https://www.bitkeep.com/testFlight.html"}},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_33418b00-d0ba-11eb-a1fd-1b9796c35a14.png",alt:"btn2"}})])])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"left"},[t("a",{attrs:{href:"https://www.bitkeep.com/",target:"_blank"}},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_33740cb0-d0ba-11eb-a1fd-1b9796c35a14.png",alt:"btn1"}})])])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"right"},[t("a",{staticClass:"btnDwonload",attrs:{href:"https://www.bitkeep.com/"}},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_337433c0-d0ba-11eb-a1fd-1b9796c35a14.png",alt:"btn2"}})])])}],!1,null,"8c24b9be",null),e.default=n.exports}}]);