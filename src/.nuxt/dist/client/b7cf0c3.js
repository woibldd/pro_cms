(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{371:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n(35),r=(t=(n(60),n(19)),n(94)),a=(t=n.n(r),n(2)),s=n(93),o=(n(92),function(){for(var e,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];(e=console).log.apply(e,["bit-activity-request:"].concat(n))}),c=t.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});c.interceptors.request.use((function(e){var t,n,i;return o("requestlog:",e),a.a.prototype.$store&&(n=(i=(t=a.a.prototype.$store.state).local).UA,i=i.locale,n.isBitKeep?Object.assign(e.headers,t.local.bitkeep,{language:i}):Object.assign(e.headers,{language:i})),e}),(function(e){return Promise.resolve({status:1})})),c.interceptors.response.use((function(e){return e.data}),(function(e){!function(){for(var e,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];(e=console).log.apply(e,["bit-activity-response:"].concat(n))}("responselog:",e);var t="网路开了小差";t=(e=Object(s.b)()||{}).t?e.t("base.networkErro"):t;return Promise.resolve({status:1,data:t})}));var u=(t={mBoxList:function(e){return c.get("user/activity/mBoxList",{params:e,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(e){return c.get("user/activity/openMBox",{params:e})},helpMBox:function(e){return c.get("user/activity/helpMBox",{params:e})},userInviteList:function(e){return c.get("user/activity/inviteList",{params:e})},mBoxDetail:function(e){return c.get("user/activity/mBoxDetail",{params:e})},getCbkbSwapInfo:function(e){return c.get("user/cloudwallet/getCbkbSwapInfo",{params:e})},swapBkb:function(e){return c.get("user/cloudwallet/swapBkb",{params:e})},getAirDropCount:function(e){return c.post("user/cloudwallet/getAirDropCount",e)},getAirDrop:function(e){return c.post("user/cloudwallet/getAirDrop",e)},miningInfo:function(e){return c.post("swap/mining/info",e)},historyPhase:function(e){return c.post("swap/mining/historyPhase",e)},receiveAward:function(e){return c.post("swap/mining/receiveAward",e)},getInviteList:function(e){return c.post("user/friendship/getInviteList",e)},certifyFriendship:function(e){return c.post("user/friendship/certifyFriendship",e)},activityDoneRewardList:function(e){return c.post("swap/mining/activityDoneRewardList",e)},welfareSignIn:function(e){return c.post("user/welfare/signIn",e)},getRewardDetail:function(e){return c.post("user/welfare/getRewardDetail",e)},getSignInDetailByUser:function(e){return c.post("user/welfare/getSignInDetailByUser",e)},getRewardResult:function(e){return c.post("user/welfare/getRewardResult",e)}},Object(i.a)(t,"getRewardDetail",(function(e){return c.post("user/welfare/getRewardDetail",e)})),Object(i.a)(t,"pushPapersIn",(function(e){return c.post("user/welfare/pushPapersIn",e)})),Object(i.a)(t,"getJoinTeleJob",(function(e){return c.post("user/welfare/getJoinTeleJob",e)})),Object(i.a)(t,"getFirstSwapJob",(function(e){return c.post("user/welfare/getFirstSwapJob",e)})),Object(i.a)(t,"getFirst50UJob",(function(e){return c.post("user/welfare/getFirst50UJob",e)})),Object(i.a)(t,"newUserRewardJobs",(function(e){return c.post("user/welfare/newUserRewardJobs",e)})),t)},430:function(e,t,n){e.exports=n.p+"img/logo2@3.fb021ce.png"},473:function(e,t,n){var i=n(558);(i="string"==typeof(i=i.__esModule?i.default:i)?[[e.i,i,""]]:i).locals&&(e.exports=i.locals),(0,n(110).default)("62cae448",i,!0,{sourceMap:!1})},474:function(e,t,n){var i=n(560);(i="string"==typeof(i=i.__esModule?i.default:i)?[[e.i,i,""]]:i).locals&&(e.exports=i.locals),(0,n(110).default)("f55006da",i,!0,{sourceMap:!1})},557:function(e,t,n){"use strict";n(473)},558:function(e,t,n){(n=n(109)(!1)).push([e.i,".firenddivst .van-tabs__nav {\n  background-color: #3d0b88;\n}\n.firenddivst .van-tab {\n  color: #9ca5b3;\n  font-size: 0.43rem;\n}\n.firenddivst .van-tabs__line {\n  display: none;\n  background-color: #3d0b88 !important;\n}\n.firenddivst .van-tab--active {\n  color: #fff;\n}",""]),e.exports=n},559:function(e,t,n){"use strict";n(474)},560:function(e,t,n){(n=n(109)(!1)).push([e.i,'.firenddivst[data-v-277116de] {\n  background: #3d0b88;\n  min-height: 100vh;\n}\n.firenddivst .loading[data-v-277116de] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.firenddivst .blindbox_list_content[data-v-277116de] {\n  min-height: 100vh;\n}\n.firenddivst .firenddivst-tab .firenddivst-tab-con[data-v-277116de] {\n  border-radius: 0.43rem;\n  margin: 0.43rem;\n  padding: 0.53rem;\n}\n.firenddivst .firenddivst-tab .firenddivst-tab-con .firenddivst-tab-divst[data-v-277116de] {\n  padding: 0.43rem;\n  background: #ffffff;\n  border-radius: 0.21rem;\n}\n.firenddivst .firenddivst-tab .firenddivst-tab-con .firenddivst-tab-divst span[data-v-277116de] {\n  font-size: 0.32rem;\n  color: #4b5373;\n  font-weight: 500;\n  line-height: 0.48rem;\n}\n.firenddivst .firenddivst-tab .firenddivst-tab-con .firenddivst-tab-divst .firenddivst-tab-address[data-v-277116de] {\n  word-break: break-all;\n  margin-top: 0.13rem;\n  line-height: 0.48rem;\n  color: #4b5373;\n  font-weight: 400;\n}\n.firenddivst .block_page_footer[data-v-277116de] {\n  padding: 1.07rem 0 0.72rem;\n  box-sizing: border-box;\n}\n.firenddivst .block_page_footer .block_header[data-v-277116de] {\n  margin: 0 auto;\n  width: 2.4rem;\n  height: 0.64rem;\n}\n.firenddivst .block_page_footer .block_header img[data-v-277116de] {\n  width: 100%;\n  height: 100%;\n}\n.firenddivst .noDataBox[data-v-277116de] {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.firenddivst .noData[data-v-277116de] {\n  background: url("https://cdn.bitkeep.vip/u_b_652ddc30-572a-11ec-9c68-896cd381f4ca.png") center center no-repeat;\n  background-size: 100% 100%;\n  height: 5.28rem;\n  width: 5.33rem;\n  position: relative;\n}\n.firenddivst .noData p[data-v-277116de] {\n  width: 3.63rem;\n  font-size: 0.48rem;\n  line-height: 0.64rem;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #0C0998;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 0;\n  font-weight: 600;\n  display: flex;\n  justify-content: center;\n}',""]),e.exports=n},615:function(e,t,n){"use strict";n.r(t),n(55),n(41),n(61),n(80),n(48),n(81);var r=n(14),i=n(35),a=(n(68),n(91)),s=n(371);function o(e,t){var n,i=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)),i}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={name:"firendList",data:function(){return{active:0,inviteNum:0,helpNum:0,isLoading:!0,refreshing:!1,inviteList:[]}},computed:c(c({},Object(a.b)(["local"])),{},{isBitKeep:function(){return this.local.UA.isBitKeep},locale:function(){return this.local.locale}}),mounted:function(){this.isBitKeep&&BitKeepInvoke.setTitle(this.$t("ActivityBlindbox.ActivityBlindboxList.friendList")),this.userInvite()},methods:{userInvite:function(){var i=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.userInviteList({type:i.active+1});case 2:if(t=e.sent,n=t.data,1==t.status)return e.abrupt("return",i.$toast(n));e.next=7;break;case 7:i.inviteList=n.list,i.inviteNum=n.invite_number,i.helpNum=n.help_number,i.isLoading=!1,i.refreshing=!1;case 12:case"end":return e.stop()}}),e)})))()}}};n(557),n(559),a=n(79),d=Object(a.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"firenddivst"},[e.isLoading?i("div",{staticClass:"loading"},[i("van-loading",{attrs:{color:"#1989fa"}})],1):i("div",{staticClass:"firenddivst-tab"},[i("van-pull-refresh",{staticClass:"blindbox_list_content",on:{refresh:e.userInvite},model:{value:e.refreshing,callback:function(t){e.refreshing=t},expression:"refreshing"}},[0<e.inviteList.length?i("div",{staticClass:"firenddivst-tab-con radial-gradient"},[i("div",{staticClass:"firenddivst-tab-divst"},[i("span",[e._v(e._s(e.$t("ActivityBlindbox.ActivityBlindboxDetail.HelpSuccessETH")+"（"+e.helpNum+"）:"))]),e._v(" "),i("div",{staticClass:"firenddivst-tab-address"},e._l(e.inviteList,(function(t,n){return i("div",{key:n},[e._v("\n                "+e._s(n+1)+". "+e._s(t)+"\n              ")])})),0)])]):i("div",{staticClass:"noDataBox"},[i("div",{staticClass:"noData"},[i("p",[e._v(e._s(e.$t("ActivityBlindbox.ActivityBlindboxList.noHelper")))])])]),e._v(" "),0<e.inviteList.length?i("div",{staticClass:"block_page_footer"},[i("div",{staticClass:"block_warpper"},[i("div",{staticClass:"block_header"},[i("img",{attrs:{src:n(430)}})])])]):e._e()])],1)])}),[],!1,null,"277116de",null);t.default=d.exports}}]);