(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{623:function(t,e,n){},624:function(t,e,n){},705:function(t,e,n){"use strict";n(623)},706:function(t,e,n){"use strict";n(624)},759:function(t,e,n){"use strict";n.r(e),n(43),n(31),n(42),n(66),n(37),n(67);var i=n(3),s=n(28),a=(n(36),n(97),n(56),n(41),n(77));function o(t,e){var n,i=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)),i}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(s.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}a={name:"nftLottery",data:function(){return{isLoading:!0,formatEn:"DDd HHh mmm ss",fixdStartTime:"2021/11/12 12:00 - 2021/11/12 12:00",fixdEndTime:"2021/11/12 12:00 - 2021/11/13 12:00",startTime:null,endTime:null,status:!1}},computed:r(r({},Object(a.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep}}),created:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.isLoading=!1,t.startTime=t.countDown(t.fixdStartTime),t.endTime=t.countDown(t.fixdEndTime),t.startTime<0&&(t.status=!0,t.startTime=t.endTime);case 6:case"end":return e.stop()}}),e)})))()},beforeMount:function(){var t=this;this.isBitKeep&&BitKeepInvoke.onLoadReady((function(){BitKeepInvoke.setTitle(t.$t("nft.nftTitle")),t.$nextTick((function(){BitKeepInvoke.appMode((function(t,e){var n=document.getElementsByTagName("body")[0];1==e?n.setAttribute("class","theme-dark"):n.setAttribute("class","theme-light")}))}))}))},methods:{getEligibility:function(){this.getDialog()},getDialog:function(){this.$dialog.alert({title:this.$t("nft.dialogTitle"),message:"<img src='https://cdn.bitkeep.vip/u_b_817d2120-413b-11ec-84b4-35a471e98238.png'/><div class='content'>BoredNessApeClubBoredNessApeClubBoredNessApeClub</div>",confirmButtonText:this.$t("nft.btn"),getContainer:function(){return document.querySelector("body")}})},countDown:function(t){var e=t.split("-")[1];t=Date.now();return new Date(e.replace(/-/g,"/")).getTime()-t}}},n(705),n(706),n=n(27),a=Object(n.a)(a,(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("div",{staticClass:"warp-nft"},[t.isLoading?e("div",{staticClass:"loading"},[e("van-loading",{attrs:{color:"#7524f9",vertical:""}},[t._v(t._s(t.$t("base.loading"))+"...")])],1):e("div",[e("div",{staticClass:"warp"},[e("div",{staticClass:"banner"},[e("img",{attrs:{src:(t.locale,"https://cdn.bitkeep.vip/u_b_6ab42f50-412d-11ec-84b4-35a471e98238.png")}})]),t._v(" "),e("div",{staticClass:"countdown"},[e("div",{staticClass:"countdown-con textSecond2"},[t._v("\n          "+t._s(t.$t("nft.endCountdown"))+"\n        ")]),t._v(" "),e("div",{staticClass:"countdown-time"},[e("van-count-down",{staticClass:"mining-wrap-one-body-time textPrimary0",attrs:{time:t.startTime,format:t.formatEn}}),e("span",{staticClass:"time textPrimary0"},[t._v("S")])],1)]),t._v(" "),e("div",{staticClass:"text"},[t.status?t._e():e("van-button",{staticClass:"swap-btn colorwhite colorBackgroundPrimary",on:{click:t.getEligibility}},[t._v(t._s(t.$t("nft.getEligibility")))]),t._v(" "),t.status?e("van-button",{staticClass:"swap-btn colorwhite colorBackgroundPrimary",on:{click:t.getEligibility}},[t._v(t._s(t.$t("nft.drawNow")))]):t._e()],1),t._v(" "),e("div",{staticClass:"warp-content colorBackground3"},[e("div",{staticClass:"warp-content-con"},[e("p",{staticClass:"warp-content-title textPrimary0"},[t._v("\n            "+t._s(t.$t("nft.qualificationTime"))+"\n          ")]),t._v(" "),e("p",{staticClass:"textSecond1"},[t._v(t._s(t.fixdStartTime))])]),t._v(" "),e("div",{staticClass:"warp-content-con"},[e("p",{staticClass:"warp-content-title textPrimary0"},[t._v("\n            "+t._s(t.$t("nft.lotteryTime"))+"\n          ")]),t._v(" "),e("p",{staticClass:"textSecond1"},[t._v(t._s(t.fixdEndTime))])])]),t._v(" "),e("div",{staticClass:"warp-content colorBackground3"},[e("p",{staticClass:"warp-content-title textPrimary0"},[t._v(t._s(t.$t("nft.rules")))]),t._v(" "),e("div",{staticClass:"ruleContent"},[e("p",{staticClass:"textSecond1"},[t._v(t._s(t.$t("nft.rule1")))]),t._v(" "),e("div",{staticClass:"ruleContent-list"},[e("p",{staticClass:"textSecond1"},[t._v(t._s(t.$t("nft.rule2")))]),t._v(" "),e("p",{staticClass:"textSecond1"},[t._v(t._s(t.$t("nft.rule3")))])]),t._v(" "),e("p",{staticClass:"textSecond1"},[t._v(t._s(t.$t("nft.rule4")))])]),t._v(" "),e("p",{staticClass:"textSecond3",staticStyle:{"line-height":"18px"}},[t._v("\n          "+t._s(t.$t("nft.note"))+"\n        ")])])])])])}),[],!1,null,"4654b932",null),e.default=a.exports}}]);