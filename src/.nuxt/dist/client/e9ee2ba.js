(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{369:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n(60);e=n(19);var a=n(94),i=(e=n.n(a),n(2)),r=n(93),s=(n(92),function(){for(var t,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];(t=console).log.apply(t,["bit-activity-request:"].concat(n))}),o=e.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});o.interceptors.request.use((function(t){var e,n,a;return s("requestlog:",t),i.a.prototype.$store&&(n=(a=(e=i.a.prototype.$store.state).local).UA,a=a.locale,n.isBitKeep?Object.assign(t.headers,e.local.bitkeep,{language:a}):Object.assign(t.headers,{language:a})),t}),(function(t){return Promise.resolve({status:1})})),o.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];(t=console).log.apply(t,["bit-activity-response:"].concat(n))}("responselog:",t);var e="网路开了小差";e=(t=Object(r.b)()||{}).t?t.t("base.networkErro"):e;return Promise.resolve({status:1,data:e})}));var c={mBoxList:function(t){return o.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return o.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return o.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return o.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return o.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return o.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return o.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return o.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return o.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return o.post("swap/mining/info",t)},historyPhase:function(t){return o.post("swap/mining/historyPhase",t)},receiveAward:function(t){return o.post("swap/mining/receiveAward",t)},getInviteList:function(t){return o.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return o.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return o.post("swap/mining/activityDoneRewardList",t)}}},453:function(t,e,n){var a=n(496);(a="string"==typeof(a=a.__esModule?a.default:a)?[[t.i,a,""]]:a).locals&&(t.exports=a.locals),(0,n(110).default)("9a0693c2",a,!0,{sourceMap:!1})},454:function(t,e,n){var a=n(498);(a="string"==typeof(a=a.__esModule?a.default:a)?[[t.i,a,""]]:a).locals&&(t.exports=a.locals),(0,n(110).default)("35a97e3d",a,!0,{sourceMap:!1})},495:function(t,e,n){"use strict";n(453)},496:function(t,e,n){(n=n(109)(!1)).push([t.i,".van-dialog__message {\n  font-size: 0.43rem !important;\n  padding: 0 0.64rem !important;\n  font-weight: 500;\n}\n.van-dialog__confirm {\n  font-weight: 500;\n  font-size: 0.45rem;\n}",""]),t.exports=n},497:function(t,e,n){"use strict";n(454)},498:function(t,e,n){(n=n(109)(!1)).push([t.i,'.loading[data-v-449a1423] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.img[data-v-449a1423] {\n  height: 3.73rem;\n}\n.img img[data-v-449a1423] {\n  width: 100%;\n}\n.text[data-v-449a1423] {\n  margin-top: 0.8rem;\n  text-align: center;\n}\n.text .text-t[data-v-449a1423] {\n  font-weight: 500;\n  font-size: 0.37rem;\n  margin: 0.27rem 0 0 0;\n  color: #080D21;\n}\n.text .text-n[data-v-449a1423] {\n  font-size: 0.8rem;\n  margin: 0.27rem 0 0;\n  line-height: 0.53rem;\n  font-family: "bitkeep DIN";\n  color: #080D21;\n  height: 0.53rem;\n}\n.text .text-n .setH[data-v-449a1423] {\n  height: 0.53rem;\n}\n.text .text-n .setFont[data-v-449a1423] {\n  font-size: 0.43rem;\n}\n.text .swap-btn[data-v-449a1423] {\n  width: 4.43rem;\n  height: 1.33rem;\n  color: #fff;\n  margin: 0.53rem auto;\n  background: #495BFF;\n  border-radius: 0.27rem;\n  font-weight: 500;\n  font-size: 0.43rem;\n  line-height: 1.33rem;\n  display: block;\n}\n.disabled[data-v-449a1423] {\n  opacity: .3;\n}\n.airdrop[data-v-449a1423] {\n  margin: 0.8rem 0.43rem;\n  background: #F3F5F6;\n  border-radius: 0.21rem;\n  padding: 0.05rem 0.4rem;\n  font-size: 0.37rem;\n  line-height: 0.43rem;\n}\n.airdrop .title[data-v-449a1423] {\n  color: #080D21;\n  font-weight: 600;\n}\n.airdrop .content[data-v-449a1423] {\n  color: #4B5373;\n}\n.airdrop .ruleContent[data-v-449a1423] {\n  text-indent: -0.35rem;\n  padding-left: 0.35rem;\n  line-height: 0.48rem;\n}\n.airdrop .note[data-v-449a1423] {\n  color: #97a0ad;\n}\n.line[data-v-449a1423] {\n  width: 100%;\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.about[data-v-449a1423] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.about .about-title[data-v-449a1423] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  font-weight: 600;\n  color: #080D21;\n  vertical-align: middle;\n}\n.about .about-title img[data-v-449a1423] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: text-top;\n  margin-right: 0.13rem;\n}\n.about .about-con[data-v-449a1423] {\n  padding-top: 0.4rem;\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n  color: #4B5373;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.about .viewAll[data-v-449a1423] {\n  text-align: right;\n  font-size: 0.37rem;\n  line-height: 0.37rem;\n  color: #495BFF;\n  margin-top: 0.16rem;\n}\n.distribution[data-v-449a1423] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.distribution .distribution-title[data-v-449a1423] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  font-weight: 600;\n  color: #080D21;\n  vertical-align: middle;\n}\n.distribution .distribution-title img[data-v-449a1423] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: text-top;\n  margin-right: 0.13rem;\n}\n.distribution .charts-img[data-v-449a1423] {\n  text-align: center;\n  margin: 0.53rem;\n}\n.distribution .charts-img img[data-v-449a1423] {\n  width: 2.93rem;\n  height: 2.93rem;\n}\n.distribution .charts-img .exchangeTotal[data-v-449a1423] {\n  font-family: bitkeep DIN;\n  font-size: 0.37rem;\n  color: #4B5373;\n}\n.distribution .charts-img .total[data-v-449a1423] {\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n  color: #4B5373;\n}\n.distribution .charts-img .total span[data-v-449a1423] {\n  color: #080D21;\n}\n.distribution .distribution-man[data-v-449a1423] {\n  margin-bottom: 0.8rem;\n  background: #F3F5F6;\n  border-radius: 0.21rem;\n  padding: 0.27rem;\n}\n.distribution .distribution-man .data[data-v-449a1423] {\n  display: flex;\n  justify-content: space-between;\n}\n.distribution .distribution-man .data div[data-v-449a1423]:last-child {\n  font-family: bitkeep DIN;\n  font-size: 0.37rem;\n  color: #080D21;\n}\n.distribution .distribution-man .data>div[data-v-449a1423] {\n  font-size: 0.37rem;\n  line-height: 0.91rem;\n  color: #4B5373;\n  vertical-align: middle;\n}\n.distribution .distribution-man .data>div span[data-v-449a1423]:first-child {\n  display: inline-block;\n  width: 0.16rem;\n  height: 0.16rem;\n  border-radius: 50%;\n  vertical-align: middle;\n  margin-right: 0.11rem;\n}\n.distribution .distribution-man .data>div span[data-v-449a1423]:last-child {\n  color: #4B5373;\n  vertical-align: middle;\n}\n.hold[data-v-449a1423] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.hold .hold-title[data-v-449a1423] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  font-weight: 600;\n  color: #080D21;\n  vertical-align: middle;\n}\n.hold .hold-title img[data-v-449a1423] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: text-top;\n  margin-right: 0.13rem;\n}\n.hold .hold-content[data-v-449a1423] {\n  font-size: 0.37rem;\n  color: #4B5373;\n  text-indent: -0.37rem;\n  padding-left: 0.4rem;\n}\n.appreciation[data-v-449a1423] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.appreciation .appreciation-title[data-v-449a1423] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  font-weight: 600;\n  color: #080D21;\n  vertical-align: middle;\n}\n.appreciation .appreciation-grid[data-v-449a1423] {\n  width: 100%;\n  text-align: center;\n}\n.appreciation .appreciation-grid .appreciation-grid-flex[data-v-449a1423] {\n  display: flex;\n  flex-direction: row;\n  margin-top: 0.53rem;\n}\n.appreciation .appreciation-grid .appreciation-grid-flex div[data-v-449a1423] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 50%;\n  float: left;\n}\n.appreciation .appreciation-grid .appreciation-grid-flex div img[data-v-449a1423] {\n  margin-top: 0.13rem;\n  width: 0.64rem;\n  height: 0.64rem;\n}\n.appreciation .appreciation-grid .appreciation-grid-flex div span[data-v-449a1423] {\n  font-size: 0.37rem;\n  color: #7F828F;\n  width: 3.2rem;\n  margin-top: 0.13rem;\n}\n.more[data-v-449a1423] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.more .more-title[data-v-449a1423] {\n  font-size: 0.43rem;\n  line-height: 1.2rem;\n  font-weight: 600;\n  color: #080D21;\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.more .more-line[data-v-449a1423] {\n  font-size: 0.43rem;\n  line-height: 1.33rem;\n  height: 1.33rem;\n  border-bottom: 0.03rem solid #F4F5FA;\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.more .more-line .setIcon[data-v-449a1423] {\n  color: #999BA3;\n}\n.more .more-line a[data-v-449a1423] {\n  flex: 1;\n}\n.more .more-line img[data-v-449a1423] {\n  width: 0.64rem;\n  height: 0.64rem;\n  vertical-align: middle;\n}\n.more .more-line span[data-v-449a1423] {\n  color: #080D21;\n  display: inline-block;\n  margin-left: 0.27rem;\n}',""]),t.exports=n},582:function(t,e,n){"use strict";n.r(e),n(55),n(41),n(61),n(80),n(48),n(81);var r=n(14),a=n(35),s=(n(47),n(69),n(19),n(82),n(68),n(369)),i=n(165),o=n(91);function c(t,e){var n,a=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)),a}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}i={name:"cbkbexchange",data:function(){return{airDropCount:0,src:"https://cn.etherscan.com/address/0xa286035a1e60abf172524bdbfd224abeef6ce362",flag:!1,isLoading:!0,status:!1}},computed:l(l({},Object(o.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep}}),created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.addEventListener("load",(function(){t.getBalance()})),e.next=3,t.$nextTick();case 3:t.isLoading=!1;case 4:case"end":return e.stop()}}),e)})))()},beforeMount:function(){this.isBitKeep&&BitKeepInvoke.setTitle(this.$t("airdrop.airdropTitle"))},methods:{getBalance:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.ethereum){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,window.ethereum.request({method:"eth_requestAccounts"});case 6:t.getAirDropCount(window.ethereum.selectedAddress);case 7:case"end":return e.stop()}}),e)})))()},getAirDropCount:function(a){var i=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.getAirDropCount({address:a,lang:i.local.locale});case 2:if(e=t.sent,n=e.data,1==e.status)return t.abrupt("return",i.$dialog.alert({message:n,confirmButtonText:i.$t("CbkbExchange.know"),confirmButtonColor:"#495BFF"}));t.next=7;break;case 7:i.airDropCount=i.milliFormat(n.amount),i.status=n.status;case 9:case"end":return t.stop()}}),t)})))()},milliFormat:function(t){return t&&t.toString().replace(/^\d+/g,(function(t){return t.replace(/(?=(?!^)(\d{3})+$)/g,",")}))},receive:Object(i.b)(Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,a=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.status){t.next=2;break}return t.abrupt("return",this.$toast(this.$t("airdrop.notStart")));case 2:return t.next=4,s.a.getAirDrop({address:window.ethereum.selectedAddress,lang:this.local.locale});case 4:if(e=t.sent,n=e.data,1==e.status)return t.abrupt("return",this.$dialog.alert({message:n,confirmButtonText:this.$t("CbkbExchange.know"),confirmButtonColor:"#495BFF"}));t.next=9;break;case 9:this.$dialog.alert({message:n,confirmButtonText:this.$t("CbkbExchange.know"),confirmButtonColor:"#495BFF"}).then((function(){a.getAirDropCount(window.ethereum.selectedAddress)}));case 10:case"end":return t.stop()}}),t,this)})))),viewAll:function(){this.flag=!this.flag;var t=document.getElementsByClassName("about-con")[0];this.flag?t.setAttribute("style","-webkit-line-clamp:10"):t.setAttribute("style","-webkit-line-clamp:2")}}},n(495),n(497),n=n(79),i=Object(n.a)(i,(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("div",[t.isLoading?e("div",{staticClass:"loading"},[e("van-loading",{attrs:{color:"#1989fa",vertical:""}},[t._v("加载中...")])],1):e("div",[e("div",{staticClass:"img"},[e("img",{attrs:{src:"en"==t.locale?"https://cdn.bitkeep.vip/u_b_3f5bfbf0-2fe2-11ec-877b-ddcbdd675082.png":"https://cdn.bitkeep.vip/u_b_3f5d5b80-2fe2-11ec-877b-ddcbdd675082.png",alt:""}})]),t._v(" "),e("div",{staticClass:"text"},[e("p",{staticClass:"text-t"},[t._v(t._s(t.$t("airdrop.get")))]),t._v(" "),e("p",{staticClass:"text-n"},[e("span",{staticClass:"setH"},[t._v(t._s(t.airDropCount))]),t._v(" "),e("span",{staticClass:"setFont"},[t._v("BKB")])]),t._v(" "),e("van-button",{staticClass:"swap-btn",class:[t.status?"":"disabled"],on:{click:t.receive}},[t._v(t._s(t.$t("airdrop.receive")))])],1),t._v(" "),e("div",{staticClass:"airdrop"},[e("p",{staticClass:"title",staticStyle:{"font-size":"16px"}},[t._v(t._s(t.$t("airdrop.airdrop"))+" ")]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("airdrop.airdropContent")))]),t._v(" "),e("p",{staticClass:"title"},[t._v(t._s(t.$t("airdrop.time")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("airdrop.timeContent")))]),t._v(" "),e("p",{staticClass:"title"},[t._v(t._s(t.$t("airdrop.particlpation")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("airdrop.particlpation1")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("airdrop.particlpation2")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("airdrop.particlpation3")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("airdrop.particlpation4")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("airdrop.particlpation5")))]),t._v(" "),e("p",{staticClass:"title"},[t._v(t._s(t.$t("airdrop.rules")))]),t._v(" "),e("div",{staticClass:"ruleContent"},[e("p",{staticClass:"content"},[t._v(t._s(t.$t("airdrop.rules1")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("airdrop.rules2")))]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(t.$t("airdrop.rules3")))])]),t._v(" "),e("p",{staticClass:"content note",staticStyle:{"line-height":"18px"}},[t._v(t._s(t.$t("airdrop.note")))])]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"about"},[e("div",{staticClass:"about-title"},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_0978f140-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.about")))])]),t._v(" "),e("div",{staticClass:"about-con"},[e("span",[t._v("\n        "+t._s(t.$t("CbkbExchange.aboutContent1"))+"\n        ")]),t._v(" "),e("span",[t._v("\n          "+t._s(t.$t("CbkbExchange.aboutContent2"))+"\n        ")])]),t._v(" "),e("div",{staticClass:"viewAll",on:{click:t.viewAll}},[t._v(" "+t._s(this.flag?t.$t("CbkbExchange.pickUp"):t.$t("CbkbExchange.viewAll")))])]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"distribution"},[e("div",{staticClass:"distribution-title"},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_244b3eb0-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.distribution")))])]),t._v(" "),e("div",{staticClass:"charts-img"},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_c014c440-30d0-11ec-9e24-8d799844d18f.png",alt:""}}),t._v(" "),e("p",{staticClass:"total"},[t._v(t._s(t.$t("CbkbExchange.total"))),e("span",{staticClass:"exchangeTotal"},[t._v("600,000,000")])])]),t._v(" "),e("div",{staticClass:"distribution-man"},[e("div",{staticClass:"data"},[e("div",[e("span",{staticStyle:{background:"#495BFF"}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.mining")))])]),t._v(" "),e("div",[t._v("50%")])]),t._v(" "),e("div",{staticClass:"data"},[e("div",[e("span",{staticStyle:{background:"#1CBDB5"}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.eco")))])]),t._v(" "),e("div",[t._v("20%")])]),t._v(" "),e("div",{staticClass:"data"},[e("div",[e("span",{staticStyle:{background:"#FF8146"}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.community"))+" ")])]),t._v(" "),e("div",[t._v("15%")])]),t._v(" "),e("div",{staticClass:"data"},[e("div",[e("span",{staticStyle:{background:"#F04E98"}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.partner")))])]),t._v(" "),e("div",[t._v("10%")])]),t._v(" "),e("div",{staticClass:"data"},[e("div",[e("span",{staticStyle:{background:"#080D21"}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.tram")))])]),t._v(" "),e("div",[t._v("5%")])])])]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"hold"},[e("div",{staticClass:"hold-title"},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_5930f660-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.hold")))])]),t._v(" "),e("div",{staticClass:"hold-content"},[e("p",[t._v(t._s(t.$t("CbkbExchange.hold1")))]),t._v(" "),e("p",[t._v(t._s(t.$t("CbkbExchange.hold2")))]),t._v(" "),e("p",[t._v(t._s(t.$t("CbkbExchange.hold3")))]),t._v(" "),e("p",[t._v(t._s(t.$t("CbkbExchange.hold4")))]),t._v(" "),e("p",[t._v(t._s(t.$t("CbkbExchange.hold5")))]),t._v(" "),e("p",[t._v(t._s(t.$t("CbkbExchange.hold6")))]),t._v(" "),e("p",[t._v(t._s(t.$t("CbkbExchange.hold7")))]),t._v(" "),e("p",[t._v(t._s(t.$t("CbkbExchange.hold8")))])])]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"appreciation"},[e("div",{staticClass:"appreciation-title"},[e("span",[t._v(t._s(t.$t("CbkbExchange.appreciation")))])]),t._v(" "),e("div",{staticClass:"appreciation-grid"},[e("div",{staticClass:"appreciation-grid-flex"},[e("div",[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_adf789c0-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.appreciationSwap")))])]),t._v(" "),e("div",[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_adf71490-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.appreciationCoin")))])])]),t._v(" "),e("div",{staticClass:"appreciation-grid-flex"},[e("div",[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_adf789c1-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.appreciationPool")))])]),t._v(" "),e("div",[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_adf7b0d0-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.appreciationValut")))])])])])]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"more"},[e("div",{staticClass:"more-title"},[t._v(t._s(t.$t("CbkbExchange.more")))]),t._v(" "),e("div",{staticClass:"more-line"},[e("a",{attrs:{href:"https://www.bitkeep.com/",target:"_blank"}},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_ddcf2860-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),e("span",[t._v(t._s(t.$t("CbkbExchange.website")))])]),t._v(" "),e("van-icon",{staticClass:"setIcon",attrs:{name:"arrow"}})],1),t._v(" "),e("div",{staticClass:"more-line"},[e("a",{attrs:{href:"https://twitter.com/BitKeepOS",target:"_blank"}},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_ddcf4f71-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.twitter")))])]),t._v(" "),e("van-icon",{staticClass:"setIcon",attrs:{name:"arrow"}})],1),t._v(" "),e("div",{staticClass:"more-line"},[e("a",{attrs:{href:"https://t.me/bitkeep",target:"_blank"}},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_ddcf0150-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.telegram")))])]),t._v(" "),e("van-icon",{staticClass:"setIcon",attrs:{name:"arrow"}})],1),t._v(" "),e("div",{staticClass:"more-line"},[e("a",{attrs:{href:t.src,target:"_blank"}},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_ddceda40-2bec-11ec-b5c0-c1ce5b0a2535.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CbkbExchange.explorer")))])]),t._v(" "),e("van-icon",{staticClass:"setIcon",attrs:{name:"arrow"}})],1)])])])}),[],!1,null,"449a1423",null),e.default=i.exports}}]);