(window.webpackJsonp=window.webpackJsonp||[]).push([[17,5,7,8,10],{345:function(t,e,n){var i=n(350);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,n(101).default)("640c92ec",i,!0,{sourceMap:!1})},349:function(t,e,n){"use strict";n(345)},350:function(t,e,n){(n=n(100)(!1)).push([t.i,".header .header_wapper[data-v-3521874b] {\n  width: 100vw;\n}\n.fixed[data-v-3521874b] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99;\n}",""]),t.exports=n},351:function(t,e,n){"use strict";n.r(e);var i=n(12),r=(n(61),{name:"Header",props:{fixed:{type:Boolean,default:function(){return!0}}},computed:{},data:function(){return{info:{}}},updated:function(){},mounted:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:case"end":return e.stop()}}),e)})))()},methods:{onChange:function(){},onclose:function(){}},filters:{}});n(349),n=n(71),r=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("div",{class:{fixed:t.fixed,header:!0},attrs:{id:"Header"}},[e("div",{staticClass:"header_wapper"},[t._t("default")],2)])}),[],!1,null,"3521874b",null);e.default=r.exports},352:function(t,e,n){"use strict";n.r(e),n.d(e,"Header",(function(){return i}));var i=(n=n(351)).default;e.default={Header:n.default}},358:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));e=n(16),e=n(97),e=n.n(e);var r=n(0),i=e.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"zh",currency:"",brand:"",os:"",package:"",clientversion:"",im:""}});i.interceptors.request.use((function(t){var e,n,i;return r.a.prototype.$store&&(n=(i=(e=r.a.prototype.$store.state).local).UA,i=i.locale,n.isBitKeep?Object.assign(t.headers,e.local.bitkeep,{language:i}):Object.assign(t.headers,{language:i})),t}),(function(t){return Promise.resolve({status:1})})),i.interceptors.response.use((function(t){return t.data}),(function(t){var e="网路开了小差";return r.a.prototype.$t&&(e=r.a.prototype.$t("base.networkErro")),Promise.resolve({status:1,data:e})}));var a={mBoxList:function(t){return i.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return i.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return i.get("user/activity/helpMBox",{params:t})},mBoxDetail:function(t){return i.get("user/activity/mBoxDetail",{params:t})}}},362:function(t,e,n){var i=n(381);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,n(101).default)("6182b66f",i,!0,{sourceMap:!1})},363:function(t,e,n){var i=n(383);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,n(101).default)("1a09c5c0",i,!0,{sourceMap:!1})},372:function(t,e,n){t.exports=n.p+"img/openTextTitle@2.eea2ac4.png"},373:function(t,e,n){t.exports=n.p+"img/openTextTitle@2.en.6afb738.png"},374:function(t,e,n){t.exports=n.p+"img/inviteTextTitle@2.1a70c3e.png"},375:function(t,e,n){t.exports=n.p+"img/inviteTextTitle@2.en.5267b37.png"},376:function(t,e,n){t.exports=n.p+"img/helperTextTitle@2.42f4cc9.png"},377:function(t,e,n){t.exports=n.p+"img/helperTextTitle@2.en.6c9b040.png"},378:function(t,e,n){t.exports=n.p+"img/rulesTextTitle@2.b3952e7.png"},379:function(t,e,n){t.exports=n.p+"img/rulesTextTitle@2.en.7822552.png"},380:function(t,e,n){"use strict";n(362)},381:function(t,e,n){(n=n(100)(!1)).push([t.i,".titleImage .item[data-v-4aa1c2b2] {\n  margin: 0 auto;\n  justify-content: center;\n  display: flex;\n}\n.openTextTitle_zh[data-v-4aa1c2b2] {\n  width: 6.67rem;\n  height: 1.28rem;\n}\n.openTextTitle_en[data-v-4aa1c2b2] {\n  width: 6.83rem;\n  height: 1.07rem;\n}\n.inviteTextTitle_zh[data-v-4aa1c2b2] {\n  width: 6.67rem;\n  height: 1.28rem;\n}\n.inviteTextTitle_en[data-v-4aa1c2b2] {\n  width: 6.64rem;\n  height: 1.07rem;\n}\n.helperTextTitle_zh[data-v-4aa1c2b2] {\n  width: 5.71rem !important;\n  height: 1.28rem !important;\n}\n.helperTextTitle_en[data-v-4aa1c2b2] {\n  width: 7.65rem;\n  height: 1.07rem;\n}\n.rulesTextTitle_zh[data-v-4aa1c2b2] {\n  width: 4.75rem;\n  height: 0.64rem;\n}\n.rulesTextTitle_en[data-v-4aa1c2b2] {\n  width: 4.99rem;\n  height: 0.53rem;\n}",""]),t.exports=n},382:function(t,e,n){"use strict";n(363)},383:function(t,e,n){var i=n(100),r=n(226),a=n(384);n=n(385),i=i(!1),a=r(a),n=r(n);i.push([t.i,".block_invite_button[data-v-016bf94a] {\n  position: relative;\n  margin-top: 0.53rem;\n}\n.block_invite_button>div[data-v-016bf94a]::after {\n  position: absolute;\n  width: 8.08rem;\n  height: 2.24rem;\n  background: url("+a+') center center no-repeat;\n  background-size: 100% 100%;\n  content: "";\n  left: 0;\n  top: 0;\n}\n.block_invite_button .heart[data-v-016bf94a] {\n  animation: heartbeat 1s infinite ease;\n}\n.block_invite_button .invite_button[data-v-016bf94a] {\n  z-index: 1;\n  position: relative;\n  margin: 0 auto;\n  min-width: 7.47rem;\n  padding: 0 0.27rem;\n  height: 1.33rem;\n  background: url('+n+") center center no-repeat;\n  background-size: 100% 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 0.45rem;\n}\n.block_invite_button .invite_button[data-v-016bf94a]:hover {\n  opacity: 0.6 !important;\n}",""]),t.exports=i},384:function(t,e,n){t.exports=n.p+"img/BTN@3.6b9d6de.png"},385:function(t,e,n){t.exports=n.p+"img/shareBtn.adf14fd.png"},403:function(t,e,n){var i=n(446);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,n(101).default)("777e30bc",i,!0,{sourceMap:!1})},410:function(t,e,n){"use strict";n.r(e);var i={name:"titleImag",props:{locale:{default:"en"},type:{default:"helper"},is_owner:{},status:{}},computed:{isOwner:function(){return 1==this.is_owner}}},r=(n(380),n(71));i=Object(r.a)(i,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return"helper"==t.type?e("div",{staticClass:"titleImage"},[2==t.status&&t.isOwner?e("div",{staticClass:"item"},["zh"==t.locale?e("img",{staticClass:"openTextTitle_zh",attrs:{src:n(372)}}):e("img",{staticClass:"openTextTitle_en",attrs:{src:n(373)}})]):t.isOwner?e("div",{staticClass:"item"},["zh"==t.locale?e("img",{staticClass:"inviteTextTitle_zh",attrs:{src:n(374)}}):e("img",{staticClass:"inviteTextTitle_en",attrs:{src:n(375)}})]):e("div",{staticClass:"item"},["zh"==t.locale?e("img",{staticClass:"helperTextTitle_zh",attrs:{src:n(376)}}):e("img",{staticClass:"helperTextTitle_en",attrs:{src:n(377)}})])]):"footer"==t.type?e("div",{staticClass:"titleImage footer "},[e("div",{staticClass:"item"},["zh"==t.locale?e("img",{staticClass:"rulesTextTitle_zh",attrs:{src:n(378)}}):e("img",{staticClass:"rulesTextTitle_en",attrs:{src:n(379)}})])]):e("div")}),[],!1,null,"4aa1c2b2",null);e.default=i.exports},411:function(t,e,n){"use strict";n.r(e),n(52);var i={name:"titleImag",props:{isBitKeep:{type:Boolean},info:{default:function(){return{}}}},computed:{isOwner:function(){return 1==this.is_owner}},methods:{handerBotton:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.$emit.apply(this,["handerBotton"].concat(e))}}};n(382),n=n(71),i=Object(n.a)(i,(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("div",{staticClass:"block_invite_button"},[1==t.info.status&&1==t.info.is_owner?e("div",[e("div",{staticClass:"invite_button heart",on:{click:function(e){return t.handerBotton(0)}}},[t._v("\n      "+t._s(t.$t("ActivityBlindbox.button.OpenimmediatelyText"))+"\n    ")])]):t._e(),t._v(" "),0==t.info.status?e("div",[e("div",{staticClass:"invite_button heart",on:{click:function(e){return t.handerBotton(1)}}},[t._v("\n      "+t._s(1==t.info.is_owner?t.$t("ActivityBlindbox.button.InviteFriendsNow"):t.$t("ActivityBlindbox.button.OpenFriendsImmediately"))+"\n    ")])]):t._e(),t._v(" "),2==t.info.status&&1==t.info.is_owner?e("div",[e("div",{staticClass:"invite_button",on:{click:function(e){return t.handerBotton(2)}}},[t._v("\n      "+t._s(t.$t("ActivityBlindbox.button.ViewAssets"))+"\n    ")])]):t._e(),t._v(" "),2==t.info.status&&0==t.info.is_owner?e("div",[e("div",{staticClass:"invite_button heart",on:{click:function(e){return t.handerBotton(2)}}},[t._v("\n      "+t._s(t.$t("ActivityBlindbox.button.SuccessView"))+"\n    ")])]):t._e()])}),[],!1,null,"016bf94a",null);e.default=i.exports},414:function(t,e,n){t.exports=n.p+"img/logo2@3.fb021ce.png"},445:function(t,e,n){"use strict";n(403)},446:function(t,e,n){var i=n(100),r=n(226),a=n(447);n=n(448),i=i(!1),a=r(a),n=r(n);i.push([t.i,".loading[data-v-788139a5] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#blindbox_invite[data-v-788139a5] {\n  font-family: PingFang SC;\n  min-height: 100vh;\n  width: 100vw;\n  box-sizing: border-box;\n  font-style: normal;\n  font-weight: normal;\n  background: #3d0b88;\n  word-break: break-all;\n}\n#blindbox_invite .blindbox_invite_header[data-v-788139a5] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.59rem 0 0.59rem 0.4rem;\n  width: 100%;\n  box-sizing: border-box;\n}\n#blindbox_invite .blindbox_invite_header .header_btn[data-v-788139a5] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n  font-size: 0.32rem;\n  padding: 0 0.29rem;\n  color: #ffffff;\n  height: 0.85rem;\n  background: linear-gradient(122.71deg, #5aebff 3.38%, #6d39ff 92.57%),#c4c4c4;\n  border-radius: 2.67rem 0 0 2.67rem;\n}\n#blindbox_invite .blindbox_invite_header .header_back>img[data-v-788139a5] {\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.block_invite[data-v-788139a5],\n.block_acitve_strategy[data-v-788139a5] {\n  padding: 0.4rem 0.43rem 0;\n  width: 100%;\n  box-sizing: border-box;\n}\n.block_invite .block_warpper[data-v-788139a5],\n.block_acitve_strategy .block_warpper[data-v-788139a5] {\n  border-radius: 0.43rem;\n  box-sizing: border-box;\n  padding: 0.27rem 0.53rem 0.53rem;\n}\n.block_invite .block_warpper .rules_item[data-v-788139a5],\n.block_acitve_strategy .block_warpper .rules_item[data-v-788139a5] {\n  display: flex;\n}\n.block_invite .block_warpper .block_invite_num[data-v-788139a5] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 0.37rem;\n  text-align: center;\n  margin: 0.4rem 0;\n}\n.block_invite .block_warpper .block_invite_num .color_red[data-v-788139a5] {\n  font-size: 0.53rem;\n}\n.block_invite .block_warpper .block_invite_progress[data-v-788139a5] {\n  width: 7.47rem;\n  height: 0.13rem;\n  background: #ffffff;\n  margin: 0 auto;\n  border-radius: 2.67rem;\n}\n.block_invite .block_warpper .block_invite_progress .progress[data-v-788139a5] {\n  border-radius: 2.67rem;\n  height: 0.13rem;\n  background: linear-gradient(90deg, #7067fd 0%, #4a2fd2 100%);\n}\n.block_invite .block_warpper .block_invite_ETH .invite_ETH_content[data-v-788139a5] {\n  margin-top: 0.53rem;\n  width: 8.08rem;\n  height: 1.6rem;\n  background: #ffffff;\n  border-radius: 0.21rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.8;\n}\n.block_invite .block_warpper .block_invite_ETH .invite_ETH_content textarea[data-v-788139a5] {\n  border-radius: 0.21rem;\n  border: none;\n  width: 7.23rem;\n  height: 0.85rem;\n  padding: 0.37rem;\n  text-align: center;\n  line-height: 0.85rem;\n  outline: none;\n  background: #ffffff;\n  resize: none;\n  font-size: 0.32rem;\n}\n.block_invite .block_warpper .block_invite_ETH .invite_ETH_content textarea[data-v-788139a5]::placeholder {\n  color: #4b5373;\n}\n.block_invite .block_warpper .block_invite_ETH .invite_ETH_content textarea.focus[data-v-788139a5] {\n  line-height: 0.43rem;\n  font-size: 0.32rem;\n  text-align: left;\n}\n.block_invite .block_warpper .block_invite_down[data-v-788139a5] {\n  margin: 0.53rem auto 0;\n  width: 100%;\n  text-align: center;\n  height: 0.43rem;\n  font-weight: 500;\n  font-size: 0.32rem;\n  line-height: 0.43rem;\n}\n.block_invite .block_warpper .block_invite_down a[data-v-788139a5] {\n  color: #495bff;\n}\n.block_invite .block_warpper .block_invite_list[data-v-788139a5] {\n  position: relative;\n  z-index: 10;\n  margin-top: 0.91rem;\n  font-size: 0.32rem;\n  line-height: 0.43rem;\n  padding: 0.53rem 0.43rem 0.53rem;\n  background: #ffffff;\n  border-radius: 0.21rem;\n  box-sizing: border-box;\n  opacity: 0.8;\n}\n.block_invite .block_warpper .block_invite_list.mt[data-v-788139a5] {\n  margin-top: 0.27rem;\n}\n.block_invite .block_warpper .block_invite_list .title[data-v-788139a5] {\n  margin-bottom: 0.13rem;\n}\n.block_invite .block_warpper .block_invite_list .block_invite_item[data-v-788139a5] {\n  margin-top: 0.05rem;\n}\n.block_open_strategy[data-v-788139a5] {\n  margin-top: 0.53rem;\n  padding: 0 0.43rem 0 0.29rem;\n  box-sizing: border-box;\n  width: 100%;\n  height: 11.36rem;\n}\n.block_open_strategy .block_open_strategy_warpper[data-v-788139a5] {\n  width: 100%;\n  height: 100%;\n  background: url("+a+") center center no-repeat;\n  background-size: 100% 100%;\n}\n.block_open_strategy .block_open_strategy_warpper.en[data-v-788139a5] {\n  background: url("+n+') center center no-repeat;\n  background-size: 100% 100%;\n}\n.block_acitve_strategy[data-v-788139a5] {\n  padding-top: 0.53rem;\n  overflow: hidden;\n}\n.block_acitve_strategy .block_warpper .block_body[data-v-788139a5] {\n  padding-top: 0.4rem;\n  font-size: 0.32rem;\n  line-height: 0.48rem;\n}\n.block_acitve_strategy .block_warpper .block_body>div[data-v-788139a5] {\n  margin-bottom: 0.48rem;\n}\n.block_acitve_strategy .block_warpper .block_footer[data-v-788139a5] {\n  color: #0c099899;\n}\n.block_invite_coin[data-v-788139a5] {\n  margin-top: 0.4rem;\n  height: 0.75rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Gilroy;\n  font-weight: bold;\n  font-size: 0.75rem;\n  line-height: 0.75rem;\n  font-family: "bitkeep EN BLOD";\n}\n.block_page_footer[data-v-788139a5] {\n  padding: 1.07rem 0 0.72rem;\n  box-sizing: border-box;\n}\n.block_page_footer .block_header[data-v-788139a5] {\n  margin: 0 auto;\n  width: 2.4rem;\n  height: 0.64rem;\n}\n.block_page_footer .block_header img[data-v-788139a5] {\n  width: 100%;\n  height: 100%;\n}\n.block_detail_bg[data-v-788139a5] {\n  width: 100%;\n  display: flex;\n  height: 11.73rem;\n  min-height: 11.73rem;\n}',""]),t.exports=i},447:function(t,e,n){t.exports=n.p+"img/02@2.6807d2f.png"},448:function(t,e,n){t.exports=n.p+"img/02@2.en.e3d5b05.png"},465:function(t,e,n){"use strict";n.r(e);var i=[function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"block_page_footer"},[t("div",{staticClass:"block_warpper"},[t("div",{staticClass:"block_header"},[t("img",{attrs:{src:n(414)}})])])])}],a=(n(45),n(30),n(55),n(73),n(36),n(74),n(12)),r=n(27),o=(n(63),n(16),n(44),n(64),n(61),n(352)),s=n(365),c=n(392),l=n(410),d=n(411),u=n(461),p=n(358),f=n(85);function b(t,e){var n,i=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)),i}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}d={name:"mBoxDetail",mixins:[n(401).a],components:{Header:o.Header,Countdown:s.default,BlindTimeText:c.default,BlindTitleImage:l.default,CreatePoster:u.default,BlindButton:d.default},computed:v(v({},Object(f.b)(["local"])),{},{id:function(){return this.$route.query.id},progress:function(){return"width:".concat(this.info.already_number/this.info.invite*100,"%")},isCountdown:function(){return 0==this.info.status||1==this.info.status},isInvaild:function(){return 3==this.info.status},isBitKeep:function(){return this.local.UA.isBitKeep},locale:function(){return this.local.locale},format:function(){return"zh"==this.locale?"{dd}天{hh}时{mm}分{ss}秒":"{dd} D {hh} H {mm} M {ss} S"},heade_image:function(){return 2==this.info.status?this.info.prize_image:this.info.poster_image}}),asyncData:function(t){return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},data:function(){return{Toast:null,timer:null,startTime:0,endTime:0,isLoading:!0,poster:{url:"",poster_url:""},qrcodeUrl:"",info:{status:0,is_owner:1},invite_list:[],address:"",focus:!1}},created:function(){return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},beforeMount:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getDetails();case 1:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.isLoading=!1,t.init();case 4:case"end":return e.stop()}}),e)})))()},methods:{init:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:case"end":return e.stop()}}),e)})))()},handlerFocus:function(){this.focus=!0},handlerBlur:function(){this.focus=!1},getDetails:function(i){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$route.query.id){e.next=2;break}return e.abrupt("return",!1);case 2:if(1<t.info.status)return e.abrupt("return");e.next=4;break;case 4:return i||t.showLoading(t.$t("ActivityBlindbox.toast.loading")),e.next=7,p.a.mBoxDetail({id:t.$route.query.id});case 7:if(r=e.sent,n=r.data,r=r.status,i||t.hideLoading(),clearTimeout(t.timer),t.timer=setTimeout((function(){t.getDetails(!0)}),5e3),0!=r)return i||t.$toast.fail(n),e.abrupt("return",!1);e.next=16;break;case 16:if(JSON.stringify(t.info)==JSON.stringify(n))return e.abrupt("return",!1);e.next=18;break;case 18:return t.info=n,t.startTime=n.current_time,t.endTime=new Date(n.end_time).getTime(),t.invite_list=n.help_record||[],t.isBitKeep&&BitKeepInvoke.setTitle(t.info.title),e.abrupt("return",!0);case 24:case"end":return e.stop()}}),e)})))()},handerBotton:function(t){var i=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.info.is_owner,e.t0=String(t),e.next="0"===e.t0?4:"1"===e.t0?20:"2"===e.t0?22:24;break;case 4:if(1!=i.info.isCloudWallet)return e.next=7,new Promise((function(t){return BitKeepInvoke.confirm(i.$t("ActivityBlindbox.dialog.isCreateWalletComfirm"),t)}));e.next=10;break;case 7:return e.sent&&BitKeepInvoke.openUrl("bitkeep://cloudCreateWallet"),e.abrupt("return");case 10:return i.showLoading(i.$t("ActivityBlindbox.toast.open")),e.next=13,p.a.openMBox({id:i.$route.query.id});case 13:return n=e.sent,e.next=16,i.getDetails();case 16:if(i.hideLoading(),0!=n.status)return e.abrupt("return",i.$toast.fail(n.data));e.next=19;break;case 19:return e.abrupt("break",25);case 20:return 1==i.info.is_owner?i.$refs.CreatePoster&&i.$refs.CreatePoster.init():i.helperBtn(),e.abrupt("break",25);case 22:return i.isBitKeep?1==i.info.isCloudWallet?BitKeepInvoke.openUrl("bitkeep://cloudWallet"):BitKeepInvoke.openUrl("bitkeep://cloudCreateWallet"):i.isBitKeep||i.$router.push({path:"/activity/blindbox/download",query:{}}),e.abrupt("break",25);case 24:return e.abrupt("break",25);case 25:case"end":return e.stop()}}),e)})))()},helperBtn:function(t){var i=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}e.next=18;break;case 3:if(i.address&&i.address.replace(/ /g,"")){e.next=7;break}return i.$toast.fail(i.$t("ActivityBlindbox.toast.inputETH")),i.$refs.textarea&&i.$refs.textarea.focus(),e.abrupt("return");case 7:return i.showLoading(),e.next=10,p.a.helpMBox({address:i.address,id:i.$route.query.id});case 10:if(n=e.sent,i.hideLoading(),0!=n.status)return i.$toast.fail(n.data),e.abrupt("return");e.next=15;break;case 15:i.getDetails(),i.$toast.success(i.$t("ActivityBlindbox.toast.ContributeSuccess")),i.isBitKeep||i.$router.push({path:"/activity/blindbox/download",query:{}});case 18:case"end":return e.stop()}}),e)})))()},back:function(){this.$router.back()},beforeDestroy:function(){clearTimeout(this.timer)},chountChange:function(t){t.dd,t.hh,t.mm,t.ss,t.ms,t.yy},end:function(){},onChange:function(){},onclose:function(){}},filters:{}},n(445),f=n(71),i=Object(f.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"blindbox_invite"}},[t.isLoading?i("div",{staticClass:"loading"},[i("van-loading",{attrs:{size:"1rem",vertical:"",color:"#1989fa"}},[t._v(t._s(t.$t("base.loading"))+"...")])],1):i("div",[i("Header",[i("div",{staticClass:"blindbox_invite_header"},[i("span",{staticClass:"header_back"}),t._v(" "),t.isBitKeep?i("span",{staticClass:"header_btn btn",on:{click:function(e){return t.$router.replace({path:"/activity/blindbox/list",query:{}})}}},[t._v("\n          "+t._s(t.$t("ActivityBlindbox.title.myBlindboxText"))+"\n        ")]):t._e()])]),t._v(" "),i("div",{staticClass:"block_detail_bg"},[i("van-image",{attrs:{width:"100%",height:"100%",src:t.heade_image}})],1),t._v(" "),i("BlindTimeText",{staticClass:"block_time",attrs:{info:t.info,locale:t.locale,startTime:t.startTime,endTime:t.endTime,format:t.format},on:{change:t.chountChange,end:t.end}}),t._v(" "),i("div",{staticClass:"block_invite"},[i("div",{staticClass:"block_warpper radial-gradient"},[i("div",{staticClass:"block_header"},[i("BlindTitleImage",{attrs:{isBitKeep:t.isBitKeep,locale:t.locale,is_owner:t.info.is_owner,status:t.info.status}})],1),t._v(" "),2==t.info.status&&1==t.info.is_owner?i("div",{staticClass:"block_invite_coin color_red"},[i("span",[t._v("+"+t._s(t.info.amount))]),t._v("\n           \n          "),i("span",[t._v(t._s(t.info.symbol))])]):i("div",[i("div",{staticClass:"block_invite_num color_text",domProps:{innerHTML:t._s(t.$t("ActivityBlindbox.ActivityBlindboxDetail.blindBoxNumText",{surplus:this.info.surplus||0,invite:this.info.invite||0}))}}),t._v(" "),i("div",{staticClass:"block_invite_progress"},[i("div",{staticClass:"progress",style:t.progress})])]),t._v(" "),1!=t.info.is_owner&&0==t.info.status?i("div",{staticClass:"block_invite_ETH"},[i("div",{staticClass:"invite_ETH_content"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],ref:"textarea",class:{focus:t.focus||!!t.address},attrs:{type:"text",placeholder:t.focus?"":t.$t("ActivityBlindbox.ActivityBlindboxDetail.inputAddressPlaceholader")},domProps:{value:t.address},on:{focus:t.handlerFocus,blur:function(e){return t.handlerBlur()},input:function(e){e.target.composing||(t.address=e.target.value)}}}),t._v(" "),i("span")])]):t._e(),t._v(" "),3!=t.info.status?i("BlindButton",{attrs:{isBitKeep:t.isBitKeep,info:t.info},on:{handerBotton:t.handerBotton}}):t._e(),t._v(" "),t.isBitKeep?t._e():i("div",{staticClass:"block_invite_down"},[i("a",{attrs:{href:"https://bitkeep.org"}},[t._v(t._s(t.$t("ActivityBlindbox.ActivityBlindboxDetail.NoAddressDownload")))])]),t._v(" "),t.invite_list&&0<t.invite_list.length?i("div",{staticClass:" ",class:{block_invite_list:!0,color_text:!0,mt:!t.isBitKeep}},[i("div",{staticClass:"title"},[t._v("\n            "+t._s(t.$t("ActivityBlindbox.ActivityBlindboxDetail.HelpSuccessETH"))+"：\n          ")]),t._v(" "),t._l(t.invite_list,(function(e,n){return i("div",{key:e,staticClass:"block_invite_item"},[i("div",[t._v(t._s(n+1)+". "+t._s(e))])])}))],2):t._e()],1)]),t._v(" "),i("div",{staticClass:"block_open_strategy"},[i("div",{class:((e={block_open_strategy_warpper:!0})[t.locale]=!0,e)})]),t._v(" "),i("div",{staticClass:"block_acitve_strategy"},[i("div",{staticClass:"block_warpper radial-gradient"},[i("div",{staticClass:"block_header"},[i("BlindTitleImage",{attrs:{type:"footer",isBitKeep:t.isBitKeep,locale:t.locale,is_owner:t.info.is_owner,status:t.info.status}})],1),t._v(" "),i("div",{staticClass:"block_body color_theme"},t._l(t.$t("ActivityBlindbox.ActivityBlindboxDetail.rules"),(function(e,n){return i("div",{key:e,staticClass:"rules_item"},[i("span",[t._v(t._s(n+1)+". ")]),t._v(" "),i("span",[t._v(t._s(e))])])})),0),t._v(" "),i("div",{staticClass:"block_footer"},[t._v(t._s(t.$t("ActivityBlindbox.ActivityBlindboxDetail.FinalInterpretation")))])])]),t._v(" "),t._m(0),t._v(" "),i("CreatePoster",{ref:"CreatePoster",attrs:{locale:t.locale,zIndex:100,isBitKeep:t.isBitKeep,info:t.info,startTime:t.startTime,endTime:t.endTime,format:t.format},on:{change:t.chountChange,end:t.end}})],1)])}),i,!1,null,"788139a5",null),e.default=i.exports}}]);