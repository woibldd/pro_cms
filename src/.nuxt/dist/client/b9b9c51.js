(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{369:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n(60);e=n(19);var i=n(94),r=(e=n.n(i),n(2)),a=n(93),s=(n(92),function(){for(var t,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];(t=console).log.apply(t,["bit-activity-request:"].concat(n))}),o=e.a.create({baseURL:"/",timeout:6e4,headers:{token:"a59bea3932ee4cf9c8bb9aa2ddc5278f",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});o.interceptors.request.use((function(t){var e,n,i;return s("requestlog:",t),r.a.prototype.$store&&(n=(i=(e=r.a.prototype.$store.state).local).UA,i=i.locale,n.isBitKeep?Object.assign(t.headers,e.local.bitkeep,{language:i}):Object.assign(t.headers,{language:i})),t}),(function(t){return Promise.resolve({status:1})})),o.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];(t=console).log.apply(t,["bit-activity-response:"].concat(n))}("responselog:",t);var e="网路开了小差";e=(t=Object(a.b)()||{}).t?t.t("base.networkErro"):e;return Promise.resolve({status:1,data:e})}));var c={mBoxList:function(t){return o.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return o.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return o.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return o.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return o.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return o.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return o.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return o.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return o.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return o.post("swap/mining/info",t)},historyPhase:function(t){return o.post("swap/mining/historyPhase",t)},receiveAward:function(t){return o.post("swap/mining/receiveAward",t)},getInviteList:function(t){return o.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return o.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return o.post("swap/mining/activityDoneRewardList",t)}}},428:function(t,e,n){t.exports=n.p+"img/logo2@3.fb021ce.png"},469:function(t,e,n){var i=n(544);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,n(110).default)("62cae448",i,!0,{sourceMap:!1})},470:function(t,e,n){var i=n(546);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,n(110).default)("797f04b0",i,!0,{sourceMap:!1})},543:function(t,e,n){"use strict";n(469)},544:function(t,e,n){(n=n(109)(!1)).push([t.i,".firenddivst .van-tabs__nav {\n  background-color: #3d0b88;\n}\n.firenddivst .van-tab {\n  color: #9ca5b3;\n  font-size: 0.43rem;\n}\n.firenddivst .van-tabs__line {\n  display: none;\n  background-color: #3d0b88 !important;\n}\n.firenddivst .van-tab--active {\n  color: #fff;\n}",""]),t.exports=n},545:function(t,e,n){"use strict";n(470)},546:function(t,e,n){(n=n(109)(!1)).push([t.i,'.firenddivst[data-v-35b9e7a0] {\n  background: #3d0b88;\n  min-height: 100vh;\n}\n.firenddivst .loading[data-v-35b9e7a0] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.firenddivst .blindbox_list_content[data-v-35b9e7a0] {\n  min-height: 100vh;\n}\n.firenddivst .firenddivst-tab .firenddivst-tab-con[data-v-35b9e7a0] {\n  border-radius: 0.43rem;\n  margin: 0.43rem;\n  padding: 0.53rem;\n}\n.firenddivst .firenddivst-tab .firenddivst-tab-con .firenddivst-tab-divst[data-v-35b9e7a0] {\n  padding: 0.43rem;\n  background: #ffffff;\n  border-radius: 0.21rem;\n}\n.firenddivst .firenddivst-tab .firenddivst-tab-con .firenddivst-tab-divst span[data-v-35b9e7a0] {\n  font-size: 0.32rem;\n  color: #4b5373;\n  font-weight: 500;\n  line-height: 0.48rem;\n}\n.firenddivst .firenddivst-tab .firenddivst-tab-con .firenddivst-tab-divst .firenddivst-tab-address[data-v-35b9e7a0] {\n  word-break: break-all;\n  margin-top: 0.13rem;\n  line-height: 0.48rem;\n  color: #4b5373;\n  font-weight: 400;\n}\n.firenddivst .block_page_footer[data-v-35b9e7a0] {\n  padding: 1.07rem 0 0.72rem;\n  box-sizing: border-box;\n}\n.firenddivst .block_page_footer .block_header[data-v-35b9e7a0] {\n  margin: 0 auto;\n  width: 2.4rem;\n  height: 0.64rem;\n}\n.firenddivst .block_page_footer .block_header img[data-v-35b9e7a0] {\n  width: 100%;\n  height: 100%;\n}\n.firenddivst .noDataBox[data-v-35b9e7a0] {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.firenddivst .noData[data-v-35b9e7a0] {\n  background: url("http://cdn.bitkeep.vip/u_b_652ddc30-572a-11ec-9c68-896cd381f4ca.png") center center no-repeat;\n  background-size: 100% 100%;\n  height: 5.28rem;\n  width: 5.33rem;\n  position: relative;\n}\n.firenddivst .noData p[data-v-35b9e7a0] {\n  width: 3.63rem;\n  font-size: 0.48rem;\n  line-height: 0.64rem;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #0C0998;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 0;\n  font-weight: 600;\n  display: flex;\n  justify-content: center;\n}',""]),t.exports=n},589:function(t,e,n){"use strict";n.r(e),n(55),n(41),n(61),n(80),n(48),n(81);var r=n(14),i=n(35),a=(n(68),n(91)),s=n(369);function o(t,e){var n,i=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)),i}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={name:"firendList",data:function(){return{active:0,inviteNum:0,helpNum:0,isLoading:!0,refreshing:!1,inviteList:[]}},computed:c(c({},Object(a.b)(["local"])),{},{isBitKeep:function(){return this.local.UA.isBitKeep},locale:function(){return this.local.locale}}),mounted:function(){this.isBitKeep&&BitKeepInvoke.setTitle(this.$t("ActivityBlindbox.ActivityBlindboxList.friendList")),this.userInvite()},methods:{userInvite:function(){var i=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.userInviteList({type:i.active+1});case 2:if(e=t.sent,n=e.data,1==e.status)return t.abrupt("return",i.$toast(n));t.next=7;break;case 7:i.inviteList=n.list,i.inviteNum=n.invite_number,i.helpNum=n.help_number,i.isLoading=!1,i.refreshing=!1;case 12:case"end":return t.stop()}}),t)})))()}}};n(543),n(545),a=n(79),d=Object(a.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"firenddivst"},[t.isLoading?i("div",{staticClass:"loading"},[i("van-loading",{attrs:{color:"#1989fa"}})],1):i("div",{staticClass:"firenddivst-tab"},[i("van-pull-refresh",{staticClass:"blindbox_list_content",on:{refresh:t.userInvite},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[0<t.inviteList.length?i("div",{staticClass:"firenddivst-tab-con radial-gradient"},[i("div",{staticClass:"firenddivst-tab-divst"},[i("span",[t._v(t._s(t.$t("ActivityBlindbox.ActivityBlindboxDetail.HelpSuccessETH")+"（"+t.helpNum+"）:"))]),t._v(" "),i("div",{staticClass:"firenddivst-tab-address"},t._l(t.inviteList,(function(e,n){return i("div",{key:n},[t._v("\n                "+t._s(n+1)+". "+t._s(e)+"\n              ")])})),0)])]):i("div",{staticClass:"noDataBox"},[i("div",{staticClass:"noData"},[i("p",[t._v(t._s(t.$t("ActivityBlindbox.ActivityBlindboxList.noHelper")))])])]),t._v(" "),0<t.inviteList.length?i("div",{staticClass:"block_page_footer"},[i("div",{staticClass:"block_warpper"},[i("div",{staticClass:"block_header"},[i("img",{attrs:{src:n(428)}})])])]):t._e()])],1)])}),[],!1,null,"35b9e7a0",null);e.default=d.exports}}]);