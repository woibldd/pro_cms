(window.webpackJsonp=window.webpackJsonp||[]).push([[24,8,11,12,14],{371:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n(60);e=n(20);var i=n(95),a=(e=n.n(i),n(2)),r=n(94),o=(n(92),function(){for(var t,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];(t=console).log.apply(t,["bit-activity-request:"].concat(n))}),c=e.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});c.interceptors.request.use((function(t){var e,n,i;return o("requestlog:",t),a.a.prototype.$store&&(n=(i=(e=a.a.prototype.$store.state).local).UA,i=i.locale,n.isBitKeep?Object.assign(t.headers,e.local.bitkeep,{language:i}):Object.assign(t.headers,{language:i})),t}),(function(t){return Promise.resolve({status:1})})),c.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];(t=console).log.apply(t,["bit-activity-response:"].concat(n))}("responselog:",t);var e="网路开了小差";e=(t=Object(r.b)()||{}).t?t.t("base.networkErro"):e;return Promise.resolve({status:1,data:e})}));var d={mBoxList:function(t){return c.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return c.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return c.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return c.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return c.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return c.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return c.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return c.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return c.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return c.post("swap/mining/info",t)},historyPhase:function(t){return c.post("swap/mining/historyPhase",t)},receiveAward:function(t){return c.post("swap/mining/receiveAward",t)},getInviteList:function(t){return c.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return c.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return c.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return c.post("/user/cloudstaking/poolList",t)},myPool:function(t){return c.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return c.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return c.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return c.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return c.post("/user/cloudstaking/getToken",t)},tradingGetList:function(t){return c.post("/tradeCompetition/getList",t)},tradingWaitClaim:function(t){return c.post("/tradeCompetition/waitClaim",t)},tradingClaim:function(t){return c.post("/tradeCompetition/Claim",t)},tradingSummary:function(t){return c.post("/tradeCompetition/summary",t)},tradingHistory:function(t){return c.post("/tradeCompetition/history",t)}}},375:function(t,e,n){var i=n(377);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,n(110).default)("640c92ec",i,!0,{sourceMap:!1})},376:function(t,e,n){"use strict";n(375)},377:function(t,e,n){(n=n(109)(!1)).push([t.i,".header .header_wapper[data-v-3521874b] {\n  width: 100vw;\n}\n.fixed[data-v-3521874b] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99;\n}",""]),t.exports=n},379:function(t,e,n){"use strict";n.r(e);var i=n(14),a=(n(68),{name:"Header",props:{fixed:{type:Boolean,default:function(){return!0}}},computed:{},data:function(){return{info:{}}},updated:function(){},mounted:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:case"end":return e.stop()}}),e)})))()},methods:{onChange:function(){},onclose:function(){}},filters:{}});n(376),n=n(79),a=Object(n.a)(a,(function(){var t=this.$createElement;return(t=this._self._c||t)("div",{class:{fixed:this.fixed,header:!0},attrs:{id:"Header"}},[t("div",{staticClass:"header_wapper"},[this._t("default")],2)])}),[],!1,null,"3521874b",null);e.default=a.exports},380:function(t,e,n){"use strict";n.r(e),n.d(e,"Header",(function(){return i}));var i=(n=n(379)).default;e.default={Header:n.default}},551:function(t,e,n){t.exports=n.p+"img/rulesTextTitle@2.en.2e040b3.png"},552:function(t,e,n){var i=n(596);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,n(110).default)("5e8341c3",i,!0,{sourceMap:!1})},553:function(t,e,n){var i=n(598);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,n(110).default)("19736f5c",i,!0,{sourceMap:!1})},584:function(t,e,n){t.exports=n.p+"img/logo2@3.fb021ce.png"},592:function(t,e,n){t.exports=n.p+"img/openTextTitle@2.en.6afb738.png"},593:function(t,e,n){t.exports=n.p+"img/inviteTextTitle@2.en.5267b37.png"},594:function(t,e,n){t.exports=n.p+"img/helperTextTitle@2.en.6c9b040.png"},595:function(t,e,n){"use strict";n(552)},596:function(t,e,n){(n=n(109)(!1)).push([t.i,".titleImage .item[data-v-bd22fe4c] {\n  margin: 0 auto;\n  justify-content: center;\n  display: flex;\n}\n.openTextTitle_zh[data-v-bd22fe4c] {\n  width: 6.67rem;\n  height: 1.28rem;\n}\n.openTextTitle_en[data-v-bd22fe4c] {\n  width: 6.83rem;\n  height: 1.07rem;\n}\n.inviteTextTitle_zh[data-v-bd22fe4c] {\n  width: 6.67rem;\n  height: 1.28rem;\n}\n.inviteTextTitle_en[data-v-bd22fe4c] {\n  width: 6.64rem;\n  height: 1.07rem;\n}\n.helperTextTitle_zh[data-v-bd22fe4c] {\n  width: 5.71rem !important;\n  height: 1.28rem !important;\n}\n.helperTextTitle_en[data-v-bd22fe4c] {\n  width: 7.65rem;\n  height: 1.07rem;\n}\n.rulesTextTitle_zh[data-v-bd22fe4c] {\n  width: 4.75rem;\n  height: 0.64rem;\n}\n.rulesTextTitle_en[data-v-bd22fe4c] {\n  width: 2.93rem;\n  height: 0.53rem;\n}",""]),t.exports=n},597:function(t,e,n){"use strict";n(553)},598:function(t,e,n){var i=n(109),a=n(239),r=n(599);n=n(600),i=i(!1),r=a(r),n=a(n);i.push([t.i,".block_invite_button[data-v-3763a924] {\n  position: relative;\n  margin-top: 0.53rem;\n}\n.block_invite_button>div[data-v-3763a924]::after {\n  position: absolute;\n  width: 8.08rem;\n  height: 1.84rem;\n  background: url("+r+') center center no-repeat;\n  background-size: 100% 100%;\n  content: "";\n  left: 0;\n  top: 0;\n}\n.block_invite_button .heart[data-v-3763a924] {\n  animation: heartbeat 1s infinite ease;\n}\n.block_invite_button .invite_button[data-v-3763a924] {\n  z-index: 1;\n  position: relative;\n  margin: 0 auto;\n  min-width: 7.47rem;\n  padding: 0 0.27rem;\n  height: 1.33rem;\n  background: url('+n+") center center no-repeat;\n  background-size: 100% 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 0.45rem;\n}\n.block_invite_button .invite_button[data-v-3763a924]:hover {\n  opacity: 0.6 !important;\n}",""]),t.exports=i},599:function(t,e,n){t.exports=n.p+"img/BTN@3.6b9d6de.png"},600:function(t,e,n){t.exports=n.p+"img/shareBtn.adf14fd.png"},601:function(t,e,n){t.exports=n.p+"img/02@2.en.c24fa45.png"},646:function(t,e,n){var i=n(760);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,n(110).default)("486c8e74",i,!0,{sourceMap:!1})},647:function(t,e,n){var i=n(762);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,n(110).default)("4d379eb9",i,!0,{sourceMap:!1})},661:function(t,e,n){"use strict";n.r(e);var i=[function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"item"},[t("img",{staticClass:"rulesTextTitle_en",attrs:{src:n(551)}})])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"item"},[t("img",{staticClass:"strategyTextTitle_en",attrs:{src:n(551)}})])}],r=(n(595),n(79));i=Object(r.a)({name:"titleImag",props:{locale:{default:"en"},type:{default:"helper"},is_owner:{},status:{}},computed:{isOwner:function(){return 1==this.is_owner}}},(function(){var t=this,e=t.$createElement;e=t._self._c||e;return"helper"==t.type?e("div",{staticClass:"titleImage"},[2==t.status&&t.isOwner?e("div",{staticClass:"item"},[e("img",{staticClass:"openTextTitle_en",attrs:{src:n(592)}})]):t.isOwner?e("div",{staticClass:"item"},[e("img",{staticClass:"inviteTextTitle_en",attrs:{src:n(593)}})]):e("div",{staticClass:"item"},[e("img",{staticClass:"helperTextTitle_en",attrs:{src:n(594)}})])]):"footer"==t.type?e("div",{staticClass:"titleImage footer "},[t._m(0)]):"strategy"==t.type?e("div",{staticClass:"titleImage"},[t._m(1)]):t._e()}),i,!1,null,"bd22fe4c",null);e.default=i.exports},662:function(t,e,n){"use strict";n.r(e),n(60);var i={name:"titleImag",props:{isBitKeep:{type:Boolean},info:{default:function(){return{}}}},computed:{isOwner:function(){return 1==this.is_owner}},methods:{handerBotton:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.$emit.apply(this,["handerBotton"].concat(e))}}};n(597),n=n(79),i=Object(n.a)(i,(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("div",{staticClass:"block_invite_button"},[1==t.info.status&&1==t.info.is_owner?e("div",[e("div",{staticClass:"invite_button heart",on:{click:function(e){return t.handerBotton(0)}}},[t._v("\n      "+t._s(t.$t("ActivityBlindbox.button.OpenimmediatelyText"))+"\n    ")])]):t._e(),t._v(" "),0==t.info.status?e("div",[1==t.info.is_owner?e("div",{staticClass:"invite_button heart",on:{click:function(e){return t.handerBotton(1)}}},[t._v("\n      "+t._s(t.$t("ActivityBlindbox.button.InviteFriendsNow"))+"\n    ")]):e("div",{staticClass:"invite_button heart",on:{click:function(e){return t.handerBotton(3)}}},[t._v("\n      "+t._s(t.$t("ActivityBlindbox.button.OpenFriendsImmediately"))+"\n    ")])]):t._e(),t._v(" "),2==t.info.status&&1==t.info.is_owner?e("div",[e("div",{staticClass:"invite_button",on:{click:function(e){return t.handerBotton(2)}}},[t._v("\n      "+t._s(t.$t("ActivityBlindbox.button.ViewAssets"))+"\n    ")])]):t._e(),t._v(" "),2==t.info.status&&0==t.info.is_owner?e("div",[e("div",{staticClass:"invite_button",on:{click:function(e){return t.handerBotton(2)}}},[t._v("\n      "+t._s(t.$t("ActivityBlindbox.button.SuccessView"))+"\n    ")])]):t._e()])}),[],!1,null,"3763a924",null);e.default=i.exports},758:function(t,e,n){"use strict";(function(t){var n;"undefined"!=typeof document&&(n=document.head||document.getElementsByTagName("head")[0],(a=document.createElement("style")).type="text/css",a.styleSheet?a.styleSheet.cssText="":a.appendChild(document.createTextNode("")),n.appendChild(a));var r={render:function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("div",[e("div",[e("button",{class:t.dataBtnClass,attrs:{disabled:t.dataBtnDisabled},on:{click:t.submitData}},[t._t("default",[t._v("SUBMIT")])],2)])])},staticRenderFns:[],props:{dataSitekey:String,dataCallback:Function,dataValidate:Function,dataBadge:String,dataType:String,dataErrorcallback:Function,dataTabindex:String,dataSize:String,dataBtnClass:[String,Array,Object],dataBtnDisabled:Boolean,dataLanguage:String},data:function(){return{recaptchaId:0,vueRecaptchaInit:0}},created:function(){var t,e,n=this;"undefined"!=typeof window&&(window.vueRecaptchaInit=function(){n.vueRecaptchaInit++},t=document.createElement("script"),e=this.dataLanguage?"&hl="+this.dataLanguage:"",t.setAttribute("src","https://www.recaptcha.net/recaptcha/api.js?onload=vueRecaptchaInit&render=explicit"+e),t.setAttribute("async",""),t.setAttribute("defer",""),(document.body||document.head).appendChild(t))},watch:{vueRecaptchaInit:function(){try{var t={sitekey:this.dataSitekey};void 0!==this.dataBadge&&(t.badge=this.dataBadge),void 0!==this.dataType&&(t.type=this.dataType),void 0!==this.dataTabindex&&(t.tabindex=this.dataTabindex),void 0===this.dataSize&&(t.size="invisible",t.callback=this.getToken);var e=document.createElement("div");e.className="outside-badge",this.$el.insertBefore(e,this.$el.childNodes[0]),this.recaptchaId=window.grecaptcha.render(e,t)}catch(t){window.console.error(t)}}},methods:{submitData:function(t){t.preventDefault(),"undefined"!=typeof window&&(!0!==this.dataValidate()&&void 0!==this.dataValidate||(void 0===this.dataSize?window.grecaptcha.execute(this.recaptchaId):this.getToken(window.grecaptcha.getResponse(this.recaptchaId))))},getToken:function(t){"undefined"!=typeof window&&(window.grecaptcha.reset(this.recaptchaId),this.dataCallback(t))}}};var a=null;"undefined"!=typeof window?a=window.Vue:void 0!==t&&(a=t.Vue),a&&a.use({install:function i(t){i.installed||(i.installed=!0,t.component("Vue2RecaptchaInvisible",r))}}),e.a=r}).call(this,n(50))},759:function(t,e,n){"use strict";n(646)},760:function(t,e,n){(n=n(109)(!1)).push([t.i,".grecaptcha-badge {\n  display: none;\n}\n.btn {\n  border: none;\n  background: none;\n}",""]),t.exports=n},761:function(t,e,n){"use strict";n(647)},762:function(t,e,n){var i=n(109),a=n(239),r=n(763);n=n(601),i=i(!1),r=a(r),n=a(n);i.push([t.i,".loading[data-v-58a39d34] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#blindbox_invite[data-v-58a39d34] {\n  font-family: PingFang SC;\n  min-height: 100vh;\n  width: 100vw;\n  box-sizing: border-box;\n  font-style: normal;\n  font-weight: normal;\n  background: #3d0b88;\n  word-break: break-all;\n}\n#blindbox_invite .blindbox_invite_header[data-v-58a39d34] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.59rem 0 0.59rem 0.4rem;\n  width: 100%;\n  box-sizing: border-box;\n}\n#blindbox_invite .blindbox_invite_header .header_btn[data-v-58a39d34] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n  font-size: 0.32rem;\n  padding: 0 0.29rem;\n  color: #ffffff;\n  height: 0.85rem;\n  background: linear-gradient(122.71deg, #5aebff 3.38%, #6d39ff 92.57%),#c4c4c4;\n  border-radius: 2.67rem 0 0 2.67rem;\n}\n#blindbox_invite .blindbox_invite_header .header_back>img[data-v-58a39d34] {\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.block_invite[data-v-58a39d34],\n.block_acitve_strategy[data-v-58a39d34] {\n  padding: 0.4rem 0.43rem 0;\n  width: 100%;\n  box-sizing: border-box;\n}\n.block_invite .block_warpper[data-v-58a39d34],\n.block_acitve_strategy .block_warpper[data-v-58a39d34] {\n  border-radius: 0.43rem;\n  box-sizing: border-box;\n  padding: 0.27rem 0.53rem 0.53rem;\n}\n.block_invite .block_warpper .rules_item[data-v-58a39d34],\n.block_acitve_strategy .block_warpper .rules_item[data-v-58a39d34] {\n  display: flex;\n}\n.block_invite .block_warpper .rules_item .con[data-v-58a39d34],\n.block_acitve_strategy .block_warpper .rules_item .con[data-v-58a39d34] {\n  flex: 1;\n}\n.block_invite .block_warpper .block_invite_num[data-v-58a39d34] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 0.37rem;\n  text-align: center;\n  margin: 0.4rem 0;\n}\n.block_invite .block_warpper .block_invite_num .color_red[data-v-58a39d34] {\n  font-size: 0.53rem;\n}\n.block_invite .block_warpper .block_invite_progress[data-v-58a39d34] {\n  width: 7.47rem;\n  height: 0.13rem;\n  background: #ffffff;\n  margin: 0 auto;\n  border-radius: 2.67rem;\n}\n.block_invite .block_warpper .block_invite_progress .progress[data-v-58a39d34] {\n  border-radius: 2.67rem;\n  height: 0.13rem;\n  background: linear-gradient(90deg, #7067fd 0%, #4a2fd2 100%);\n}\n.block_invite .block_warpper .block_invite_ETH .invite_ETH_content[data-v-58a39d34] {\n  margin-top: 0.53rem;\n  width: 8.08rem;\n  height: 1.6rem;\n  background: #ffffff;\n  border-radius: 0.21rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.8;\n}\n.block_invite .block_warpper .block_invite_ETH .invite_ETH_content textarea[data-v-58a39d34] {\n  border-radius: 0.21rem;\n  border: none;\n  width: 7.23rem;\n  height: 0.85rem;\n  padding: 0.37rem;\n  text-align: center;\n  line-height: 0.85rem;\n  outline: none;\n  background: #ffffff;\n  resize: none;\n  font-size: 0.32rem;\n}\n.block_invite .block_warpper .block_invite_ETH .invite_ETH_content textarea[data-v-58a39d34]::placeholder {\n  color: #4b5373;\n}\n.block_invite .block_warpper .block_invite_ETH .invite_ETH_content textarea.focus[data-v-58a39d34] {\n  line-height: 0.43rem;\n  font-size: 0.32rem;\n  text-align: left;\n}\n.block_invite .block_warpper .block_invite_down[data-v-58a39d34] {\n  margin: 0.53rem auto 0;\n  width: 100%;\n  text-align: center;\n  font-weight: 500;\n  font-size: 0.43rem;\n  line-height: 0.53rem;\n  word-break: break-word;\n}\n.block_invite .block_warpper .block_invite_down a[data-v-58a39d34] {\n  color: #495bff;\n}\n.block_invite .block_warpper .block_invite_list[data-v-58a39d34] {\n  position: relative;\n  z-index: 10;\n  margin-top: 0.91rem;\n  font-size: 0.32rem;\n  line-height: 0.43rem;\n  padding: 0.53rem 0.43rem 0.53rem;\n  background: #ffffff;\n  border-radius: 0.21rem;\n  box-sizing: border-box;\n  opacity: 0.8;\n}\n.block_invite .block_warpper .block_invite_list.mt[data-v-58a39d34] {\n  margin-top: 0.27rem;\n}\n.block_invite .block_warpper .block_invite_list .title[data-v-58a39d34] {\n  margin-bottom: 0.13rem;\n}\n.block_invite .block_warpper .block_invite_list .block_invite_item[data-v-58a39d34] {\n  margin-top: 0.05rem;\n}\n.block_open_strategy[data-v-58a39d34] {\n  margin-top: 0.53rem;\n  padding: 0 0.43rem 0 0.29rem;\n  box-sizing: border-box;\n  width: 100%;\n}\n.block_open_strategy .block_open_is_owner[data-v-58a39d34] {\n  width: 100%;\n  background: url("+r+") center center no-repeat;\n  background-size: 100% 100%;\n  height: 9.81rem;\n}\n.block_open_strategy .block_open_is_owner.en[data-v-58a39d34] {\n  height: 12.03rem;\n  background: url("+r+") center center no-repeat;\n  background-size: 100% 100%;\n}\n.block_open_strategy .block_open_strategy_warpper[data-v-58a39d34] {\n  width: 100%;\n  height: 9.71rem;\n  background: url("+n+") center center no-repeat;\n  background-size: 100% 100%;\n}\n.block_open_strategy .block_open_strategy_warpper.en[data-v-58a39d34] {\n  height: 9.71rem;\n  background: url("+n+') center center no-repeat;\n  background-size: 100% 100%;\n}\n.block_acitve_strategy[data-v-58a39d34] {\n  padding-top: 0.53rem;\n  overflow: hidden;\n}\n.block_acitve_strategy .block_warpper .block_body[data-v-58a39d34] {\n  padding-top: 0.4rem;\n  font-size: 0.32rem;\n  line-height: 0.48rem;\n}\n.block_acitve_strategy .block_warpper .block_body>div[data-v-58a39d34] {\n  margin-bottom: 0.48rem;\n}\n.block_acitve_strategy .block_warpper .block_footer[data-v-58a39d34] {\n  color: #0c0998;\n  word-break: keep-all;\n}\n.block_invite_coin[data-v-58a39d34] {\n  margin-top: 0.4rem;\n  text-align: center;\n  font-family: Gilroy;\n  font-weight: bold;\n  font-size: 0.75rem;\n  line-height: 0.75rem;\n  font-family: "bitkeep EN BLOD";\n}\n.block_page_footer[data-v-58a39d34] {\n  padding: 1.07rem 0 0.72rem;\n  box-sizing: border-box;\n}\n.block_page_footer .block_header[data-v-58a39d34] {\n  margin: 0 auto;\n  width: 2.4rem;\n  height: 0.64rem;\n}\n.block_page_footer .block_header img[data-v-58a39d34] {\n  width: 100%;\n  height: 100%;\n}\n.block_detail_bg[data-v-58a39d34] {\n  width: 100%;\n  display: flex;\n  height: 11.73rem;\n  min-height: 11.73rem;\n}',""]),t.exports=i},763:function(t,e,n){t.exports=n.p+"img/own02@2.en.89f72b2.png"},797:function(t,e,n){"use strict";n.r(e);var i=[function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"block_page_footer"},[t("div",{staticClass:"block_warpper"},[t("div",{staticClass:"block_header"},[t("img",{attrs:{src:n(584)}})])])])}],a=(n(55),n(41),n(61),n(80),n(48),n(81),n(14)),r=n(36),o=(n(47),n(69),n(70),n(20),n(68),n(380)),s=n(555),c=n(607),d=n(661),l=n(662),u=n(772),p=n(371),f=n(758),b=n(91);function v(t,e){var n,i=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)),i}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}f={name:"mBoxDetail",mixins:[n(389).a],components:{Header:o.Header,Countdown:s.default,BlindTimeText:c.default,BlindTitleImage:d.default,CreatePoster:u.default,BlindButton:l.default,vue2RecaptchaInvisible:f.a},computed:_(_({},Object(b.b)(["local"])),{},{id:function(){return this.$route.query.id},progress:function(){return"width:".concat(this.info.already_number/this.info.invite*100,"%")},isCountdown:function(){return 0==this.info.status||1==this.info.status},isInvaild:function(){return 3==this.info.status},isBitKeep:function(){return this.local.UA.isBitKeep},locale:function(){return this.local.locale},format:function(){return"zh"==this.locale?"{dd}天{hh}时{mm}分{ss}秒":"{dd} d {hh} h {mm} m {ss} s"},heade_image:function(){return 2==this.info.status?this.info.prize_image:this.info.poster_image}}),asyncData:function(t){return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},data:function(){return{Toast:null,timer:null,startTime:0,endTime:0,isLoading:!0,poster:{url:"",poster_url:""},qrcodeUrl:"",info:{status:0,is_owner:1},invite_list:[],address:"",focus:!1,verifytoken:"",handerType:""}},created:function(){return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},beforeMount:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getDetails();case 1:case"end":return e.stop()}}),e)})))()},head:function(){return{script:[{src:"https://www.recaptcha.net/recaptcha/api.js?render=explicit"}]}},mounted:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.isLoading=!1,t.init();case 4:case"end":return e.stop()}}),e)})))()},methods:{init:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:case"end":return e.stop()}}),e)})))()},validate:function(){return!(1==this.handerType||(!this.address||!this.address.replace(/ /g,""))&&(this.$toast.fail(this.$t("ActivityBlindbox.toast.inputETH")),this.$refs.textarea&&this.$refs.textarea.focus(),1))},onSubmit:function(t){var i=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.helpMBox({address:i.address,id:i.info.id,scene:i.info.scene,verifytoken:t});case 2:if(n=e.sent,i.hideLoading(),0!=n.status)return i.$toast.fail(n.data),e.abrupt("return");e.next=7;break;case 7:i.getDetails(),i.$toast.success(i.$t("ActivityBlindbox.toast.ContributeSuccess")),i.isBitKeep||i.$router.push({path:"/activity/blindbox/download",query:{}});case 10:case"end":return e.stop()}}),e)})))()},handlerFocus:function(){this.focus=!0},handlerBlur:function(){this.focus=!1},openUrl:function(){this.$router.push("/activity/blindbox/stepDetail")},getDetails:function(t){var e=this;return Object(a.a)(regeneratorRuntime.mark((function n(){var r,o,i,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.$route.params.id||e.$route.query.id,o=e.$route.params.ownerIdentity||e.$route.query.ownerIdentity,r){n.next=4;break}return n.abrupt("return",!1);case 4:if(1<e.info.status)return n.abrupt("return");n.next=6;break;case 6:return t||e.showLoading(e.$t("ActivityBlindbox.toast.loading")),n.next=9,p.a.mBoxDetail({id:r,ownerIdentity:o});case 9:if(a=n.sent,i=a.data,a=a.status,t||e.hideLoading(),clearTimeout(e.timer),e.timer=setTimeout((function(){e.getDetails(!0)}),5e3),0!=a)return t||e.$toast.fail(i),n.abrupt("return",!1);n.next=18;break;case 18:if(JSON.stringify(e.info)==JSON.stringify(i))return n.abrupt("return",!1);n.next=20;break;case 20:return e.info=i,e.startTime=i.current_time,e.endTime=new Date(i.end_time).getTime(),e.invite_list=i.help_record||[],e.isBitKeep&&BitKeepInvoke.setTitle(e.info.title),n.abrupt("return",!0);case 26:case"end":return n.stop()}}),n)})))()},handerBotton:function(t){var i=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.handerType=t,i.info.is_owner,e.t0=String(t),e.next="0"===e.t0?5:"1"===e.t0?21:"2"===e.t0?23:"3"===e.t0?24:26;break;case 5:if(1!=i.info.isCloudWallet)return e.next=8,new Promise((function(t){return BitKeepInvoke.confirm(i.$t("ActivityBlindbox.dialog.isCreateWalletComfirm"),t)}));e.next=11;break;case 8:return e.sent&&BitKeepInvoke.openUrl("bitkeep://cloudCreateWallet"),e.abrupt("return");case 11:return i.showLoading(i.$t("ActivityBlindbox.toast.open")),e.next=14,p.a.openMBox({id:i.$route.params.id||i.$route.query.id});case 14:return n=e.sent,e.next=17,i.getDetails();case 17:if(i.hideLoading(),0!=n.status)return e.abrupt("return",i.$toast.fail(n.data));e.next=20;break;case 20:return e.abrupt("break",27);case 21:return 1==i.info.is_owner?i.$refs.CreatePoster&&i.$refs.CreatePoster.init():i.helperBtn(),e.abrupt("break",27);case 23:i.isBitKeep?1==i.info.isCloudWallet?BitKeepInvoke.openUrl("bitkeep://cloudWallet"):BitKeepInvoke.openUrl("bitkeep://cloudCreateWallet"):i.isBitKeep||i.$router.push({path:"/activity/blindbox/download",query:{}});case 24:return i.helperBtn(),e.abrupt("break",27);case 26:return e.abrupt("break",27);case 27:case"end":return e.stop()}}),e)})))()},helperBtn:function(t){var e=this;return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=3;break}n.next=7;break;case 3:if(e.address&&e.address.replace(/ /g,"")){n.next=7;break}return e.$toast.fail(e.$t("ActivityBlindbox.toast.inputETH")),e.$refs.textarea&&e.$refs.textarea.focus(),n.abrupt("return");case 7:case"end":return n.stop()}}),n)})))()},back:function(){this.$router.back()},beforeDestroy:function(){clearTimeout(this.timer)},chountChange:function(t){t.dd,t.hh,t.mm,t.ss,t.ms,t.yy},end:function(){},onChange:function(){},onclose:function(){}},filters:{}},n(759),n(761),b=n(79),i=Object(b.a)(f,(function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i("div",{attrs:{id:"blindbox_invite"}},[e.isLoading?i("div",{staticClass:"loading"},[i("van-loading",{attrs:{size:"1rem",vertical:"",color:"#1989fa"}},[e._v(e._s(e.$t("base.loading"))+"...")])],1):i("div",[i("Header",[i("div",{staticClass:"blindbox_invite_header"},[i("span",{staticClass:"header_back"}),e._v(" "),e.isBitKeep?i("span",{staticClass:"header_btn btn active",on:{click:function(t){return e.$router.replace({path:"/activity/blindbox/list",query:{}})}}},[e._v("\n          "+e._s(e.$t("ActivityBlindbox.title.myBlindboxText"))+"\n        ")]):e._e()])]),e._v(" "),i("div",{staticClass:"block_detail_bg"},[i("van-image",{attrs:{width:"100%",height:"100%",src:e.heade_image}})],1),e._v(" "),i("BlindTimeText",{staticClass:"block_time",attrs:{info:e.info,locale:e.locale,startTime:e.startTime,endTime:e.endTime,format:e.format},on:{change:e.chountChange,end:e.end}}),e._v(" "),i("div",{staticClass:"block_invite"},[i("div",{staticClass:"block_warpper radial-gradient"},[i("div",{staticClass:"block_header"},[i("BlindTitleImage",{attrs:{isBitKeep:e.isBitKeep,locale:e.locale,is_owner:e.info.is_owner,status:e.info.status}})],1),e._v(" "),2==e.info.status&&1==e.info.is_owner?i("div",{staticClass:"block_invite_coin color_red"},e._l(e.info.symbolList,(function(t,n){return i("div",{key:n},[i("span",[e._v("+"+e._s(t.amount))]),e._v(" "),i("span",[e._v(e._s(t.symbol))])])})),0):i("div",[i("div",{staticClass:"block_invite_num color_text",domProps:{innerHTML:e._s(e.$t("ActivityBlindbox.ActivityBlindboxDetail.blindBoxNumText",{surplus:this.info.already_number||0,invite:this.info.invite||0}))}}),e._v(" "),i("div",{staticClass:"block_invite_progress"},[i("div",{staticClass:"progress",style:e.progress})])]),e._v(" "),1!=e.info.is_owner&&0==e.info.status?i("div",{staticClass:"block_invite_ETH"},[i("div",{staticClass:"invite_ETH_content"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],ref:"textarea",class:{focus:e.focus||!!e.address},attrs:{type:"text",placeholder:e.focus?"":e.$t("ActivityBlindbox.ActivityBlindboxDetail.inputAddressPlaceholader")},domProps:{value:e.address},on:{focus:e.handlerFocus,blur:function(t){return e.handlerBlur()},input:function(t){t.target.composing||(e.address=t.target.value)}}}),e._v(" "),i("span")])]):e._e(),e._v(" "),i("vue2-recaptcha-invisible",{attrs:{"data-sitekey":"6LeNstsdAAAAAMR2UBwyqxUuL3CPgD4QT_yxVG26","data-validate":e.validate,"data-callback":e.onSubmit,"data-btn-class":"btn","data-type":"image","data-btn-disabled":!1}},[3!=e.info.status?i("BlindButton",{attrs:{isBitKeep:e.isBitKeep,info:e.info},on:{handerBotton:e.handerBotton}}):i("div")],1),e._v(" "),e.isBitKeep?e._e():i("div",{staticClass:"block_invite_down"},[i("a",{domProps:{innerHTML:e._s(e.$t("ActivityBlindbox.ActivityBlindboxDetail.NoAddressDownload"))},on:{click:e.openUrl}},[e._v(" "+e._s())])]),e._v(" "),e.invite_list&&0<e.invite_list.length?i("div",{staticClass:" ",class:{block_invite_list:!0,color_text:!0,mt:!e.isBitKeep}},[i("div",{staticClass:"title"},[e._v("\n            "+e._s(e.$t("ActivityBlindbox.ActivityBlindboxDetail.HelpSuccessETH"))+" （"+e._s(e.invite_list.length)+"）：\n          ")]),e._v(" "),e._l(e.invite_list,(function(t,n){return i("div",{key:t,staticClass:"block_invite_item"},[i("div",[e._v(e._s(n+1)+". "+e._s(t))])])}))],2):e._e()],1)]),e._v(" "),i("div",{staticClass:"block_open_strategy"},[1!=e.info.is_owner&&0==e.info.status?i("div",{class:((t={block_open_is_owner:!0})[e.locale]=!0,t),on:{click:e.openUrl}}):i("div",{class:((t={block_open_strategy_warpper:!0})[e.locale]=!0,t)})]),e._v(" "),i("div",{staticClass:"block_acitve_strategy"},[i("div",{staticClass:"block_warpper radial-gradient"},[i("div",{staticClass:"block_header"},[i("BlindTitleImage",{attrs:{type:"footer",isBitKeep:e.isBitKeep,locale:e.locale,is_owner:e.info.is_owner,status:e.info.status}})],1),e._v(" "),i("div",{staticClass:"block_body color_theme"},e._l(e.$t("ActivityBlindbox.ActivityBlindboxDetail.rules"),(function(t,n){return i("div",{key:t,staticClass:"rules_item"},[i("span",[e._v(e._s(n+1)+". ")]),e._v(" "),i("span",{staticClass:"con",domProps:{innerHTML:e._s(t)}})])})),0),e._v(" "),i("div",{staticClass:"block_footer"},[e._v("\n          "+e._s(e.$t("ActivityBlindbox.ActivityBlindboxDetail.FinalInterpretation"))+"\n        ")])])]),e._v(" "),e._m(0),e._v(" "),i("CreatePoster",{ref:"CreatePoster",attrs:{locale:e.locale,zIndex:100,isBitKeep:e.isBitKeep,info:e.info,startTime:e.startTime,endTime:e.endTime,format:e.format},on:{change:e.chountChange,end:e.end}})],1)])}),i,!1,null,"58a39d34",null),e.default=i.exports}}]);