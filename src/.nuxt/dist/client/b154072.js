(window.webpackJsonp=window.webpackJsonp||[]).push([[21,6,9,10,12],{369:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(35),a=(t=(n(61),n(19)),n(94)),r=(t=n.n(a),n(2)),o=n(93),s=(a=n(56),Object(a.debug)("bit-activity-request")),c=Object(a.debug)("bit-activity-response"),d=t.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});d.interceptors.request.use((function(e){var t,n,i;return s("requestlog:",e),r.a.prototype.$store&&(n=(i=(t=r.a.prototype.$store.state).local).UA,i=i.locale,n.isBitKeep?Object.assign(e.headers,t.local.bitkeep,{language:i}):Object.assign(e.headers,{language:i})),e}),(function(e){return Promise.resolve({status:1})})),d.interceptors.response.use((function(e){return e.data}),(function(e){c("responselog:",e);var t="网路开了小差";t=(e=Object(o.b)()||{}).t?e.t("base.networkErro"):t;return Promise.resolve({status:1,data:t})}));var l=(t={mBoxList:function(e){return d.get("user/activity/mBoxList",{params:e,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(e){return d.get("user/activity/openMBox",{params:e})},helpMBox:function(e){return d.get("user/activity/helpMBox",{params:e})},userInviteList:function(e){return d.get("user/activity/inviteList",{params:e})},mBoxDetail:function(e){return d.get("user/activity/mBoxDetail",{params:e})},getCbkbSwapInfo:function(e){return d.get("user/cloudwallet/getCbkbSwapInfo",{params:e})},swapBkb:function(e){return d.get("user/cloudwallet/swapBkb",{params:e})},getAirDropCount:function(e){return d.post("user/cloudwallet/getAirDropCount",e)},getAirDrop:function(e){return d.post("user/cloudwallet/getAirDrop",e)},miningInfo:function(e){return d.post("swap/mining/info",e)},historyPhase:function(e){return d.post("swap/mining/historyPhase",e)},receiveAward:function(e){return d.post("swap/mining/receiveAward",e)},getInviteList:function(e){return d.post("user/friendship/getInviteList",e)},certifyFriendship:function(e){return d.post("user/friendship/certifyFriendship",e)},activityDoneRewardList:function(e){return d.post("swap/mining/activityDoneRewardList",e)},welfareSignIn:function(e){return d.post("welfare/signIn",e)},getRewardDetail:function(e){return d.post("welfare/getRewardDetail",e)},getSignInDetailByUser:function(e){return d.post("welfare/getSignInDetailByUser",e)},getRewardResult:function(e){return d.post("welfare/getRewardResult",e)}},Object(i.a)(t,"getRewardDetail",(function(e){return d.post("welfare/getRewardDetail",e)})),Object(i.a)(t,"pushPapersIn",(function(e){return d.post("welfare/pushPapersIn",e)})),Object(i.a)(t,"getJoinTeleJob",(function(e){return d.post("welfare/getJoinTeleJob",e)})),Object(i.a)(t,"getFirstSwapJob",(function(e){return d.post("welfare/getFirstSwapJob",e)})),Object(i.a)(t,"getFirst50UJob",(function(e){return d.post("welfare/getFirst50UJob",e)})),Object(i.a)(t,"newUserRewardJobs",(function(e){return d.post("welfare/newUserRewardJobs",e)})),t)},370:function(e,t,n){var i=n(375);(i="string"==typeof(i=i.__esModule?i.default:i)?[[e.i,i,""]]:i).locals&&(e.exports=i.locals),(0,n(110).default)("640c92ec",i,!0,{sourceMap:!1})},374:function(e,t,n){"use strict";n(370)},375:function(e,t,n){(n=n(109)(!1)).push([e.i,".header .header_wapper[data-v-3521874b] {\n  width: 100vw;\n}\n.fixed[data-v-3521874b] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99;\n}",""]),e.exports=n},376:function(e,t,n){"use strict";n.r(t);var i=n(14),a=(n(69),{name:"Header",props:{fixed:{type:Boolean,default:function(){return!0}}},computed:{},data:function(){return{info:{}}},updated:function(){console.log(11111)},mounted:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:case"end":return t.stop()}}),t)})))()},methods:{onChange:function(){},onclose:function(){console.log(arguments)}},filters:{}});n(374),n=n(80),a=Object(n.a)(a,(function(){var e=this.$createElement;return(e=this._self._c||e)("div",{class:{fixed:this.fixed,header:!0},attrs:{id:"Header"}},[e("div",{staticClass:"header_wapper"},[this._t("default")],2)])}),[],!1,null,"3521874b",null);t.default=a.exports},377:function(e,t,n){"use strict";n.r(t),n.d(t,"Header",(function(){return i}));var i=(n=n(376)).default;t.default={Header:n.default}},401:function(e,t,n){e.exports=n.p+"img/rulesTextTitle@2.en.2e040b3.png"},402:function(e,t,n){var i=n(440);(i="string"==typeof(i=i.__esModule?i.default:i)?[[e.i,i,""]]:i).locals&&(e.exports=i.locals),(0,n(110).default)("5e8341c3",i,!0,{sourceMap:!1})},403:function(e,t,n){var i=n(442);(i="string"==typeof(i=i.__esModule?i.default:i)?[[e.i,i,""]]:i).locals&&(e.exports=i.locals),(0,n(110).default)("19736f5c",i,!0,{sourceMap:!1})},428:function(e,t,n){e.exports=n.p+"img/logo2@3.fb021ce.png"},436:function(e,t,n){e.exports=n.p+"img/openTextTitle@2.en.6afb738.png"},437:function(e,t,n){e.exports=n.p+"img/inviteTextTitle@2.en.5267b37.png"},438:function(e,t,n){e.exports=n.p+"img/helperTextTitle@2.en.6c9b040.png"},439:function(e,t,n){"use strict";n(402)},440:function(e,t,n){(n=n(109)(!1)).push([e.i,".titleImage .item[data-v-bd22fe4c] {\n  margin: 0 auto;\n  justify-content: center;\n  display: flex;\n}\n.openTextTitle_zh[data-v-bd22fe4c] {\n  width: 6.67rem;\n  height: 1.28rem;\n}\n.openTextTitle_en[data-v-bd22fe4c] {\n  width: 6.83rem;\n  height: 1.07rem;\n}\n.inviteTextTitle_zh[data-v-bd22fe4c] {\n  width: 6.67rem;\n  height: 1.28rem;\n}\n.inviteTextTitle_en[data-v-bd22fe4c] {\n  width: 6.64rem;\n  height: 1.07rem;\n}\n.helperTextTitle_zh[data-v-bd22fe4c] {\n  width: 5.71rem !important;\n  height: 1.28rem !important;\n}\n.helperTextTitle_en[data-v-bd22fe4c] {\n  width: 7.65rem;\n  height: 1.07rem;\n}\n.rulesTextTitle_zh[data-v-bd22fe4c] {\n  width: 4.75rem;\n  height: 0.64rem;\n}\n.rulesTextTitle_en[data-v-bd22fe4c] {\n  width: 2.93rem;\n  height: 0.53rem;\n}",""]),e.exports=n},441:function(e,t,n){"use strict";n(403)},442:function(e,t,n){var i=n(109),a=n(239),r=n(443);n=n(444),i=i(!1),r=a(r),n=a(n);i.push([e.i,".block_invite_button[data-v-3763a924] {\n  position: relative;\n  margin-top: 0.53rem;\n}\n.block_invite_button>div[data-v-3763a924]::after {\n  position: absolute;\n  width: 8.08rem;\n  height: 1.84rem;\n  background: url("+r+') center center no-repeat;\n  background-size: 100% 100%;\n  content: "";\n  left: 0;\n  top: 0;\n}\n.block_invite_button .heart[data-v-3763a924] {\n  animation: heartbeat 1s infinite ease;\n}\n.block_invite_button .invite_button[data-v-3763a924] {\n  z-index: 1;\n  position: relative;\n  margin: 0 auto;\n  min-width: 7.47rem;\n  padding: 0 0.27rem;\n  height: 1.33rem;\n  background: url('+n+") center center no-repeat;\n  background-size: 100% 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 0.45rem;\n}\n.block_invite_button .invite_button[data-v-3763a924]:hover {\n  opacity: 0.6 !important;\n}",""]),e.exports=i},443:function(e,t,n){e.exports=n.p+"img/BTN@3.6b9d6de.png"},444:function(e,t,n){e.exports=n.p+"img/shareBtn.adf14fd.png"},445:function(e,t,n){e.exports=n.p+"img/02@2.en.c24fa45.png"},483:function(e,t,n){var i=n(582);(i="string"==typeof(i=i.__esModule?i.default:i)?[[e.i,i,""]]:i).locals&&(e.exports=i.locals),(0,n(110).default)("486c8e74",i,!0,{sourceMap:!1})},484:function(e,t,n){var i=n(584);(i="string"==typeof(i=i.__esModule?i.default:i)?[[e.i,i,""]]:i).locals&&(e.exports=i.locals),(0,n(110).default)("4d379eb9",i,!0,{sourceMap:!1})},497:function(e,t,n){"use strict";n.r(t);var i=[function(){var e=this.$createElement;return(e=this._self._c||e)("div",{staticClass:"item"},[e("img",{staticClass:"rulesTextTitle_en",attrs:{src:n(401)}})])},function(){var e=this.$createElement;return(e=this._self._c||e)("div",{staticClass:"item"},[e("img",{staticClass:"strategyTextTitle_en",attrs:{src:n(401)}})])}],r=(n(439),n(80));i=Object(r.a)({name:"titleImag",props:{locale:{default:"en"},type:{default:"helper"},is_owner:{},status:{}},computed:{isOwner:function(){return 1==this.is_owner}}},(function(){var e=this,t=e.$createElement;t=e._self._c||t;return"helper"==e.type?t("div",{staticClass:"titleImage"},[2==e.status&&e.isOwner?t("div",{staticClass:"item"},[t("img",{staticClass:"openTextTitle_en",attrs:{src:n(436)}})]):e.isOwner?t("div",{staticClass:"item"},[t("img",{staticClass:"inviteTextTitle_en",attrs:{src:n(437)}})]):t("div",{staticClass:"item"},[t("img",{staticClass:"helperTextTitle_en",attrs:{src:n(438)}})])]):"footer"==e.type?t("div",{staticClass:"titleImage footer "},[e._m(0)]):"strategy"==e.type?t("div",{staticClass:"titleImage"},[e._m(1)]):e._e()}),i,!1,null,"bd22fe4c",null);t.default=i.exports},498:function(e,t,n){"use strict";n.r(t),n(61);var i={name:"titleImag",props:{isBitKeep:{type:Boolean},info:{default:function(){return{}}}},computed:{isOwner:function(){return 1==this.is_owner}},methods:{handerBotton:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.$emit.apply(this,["handerBotton"].concat(t))}}};n(441),n=n(80),i=Object(n.a)(i,(function(){var e=this,t=e.$createElement;return(t=e._self._c||t)("div",{staticClass:"block_invite_button"},[1==e.info.status&&1==e.info.is_owner?t("div",[t("div",{staticClass:"invite_button heart",on:{click:function(t){return e.handerBotton(0)}}},[e._v("\n      "+e._s(e.$t("ActivityBlindbox.button.OpenimmediatelyText"))+"\n    ")])]):e._e(),e._v(" "),0==e.info.status?t("div",[1==e.info.is_owner?t("div",{staticClass:"invite_button heart",on:{click:function(t){return e.handerBotton(1)}}},[e._v("\n      "+e._s(e.$t("ActivityBlindbox.button.InviteFriendsNow"))+"\n    ")]):t("div",{staticClass:"invite_button heart",on:{click:function(t){return e.handerBotton(3)}}},[e._v("\n      "+e._s(e.$t("ActivityBlindbox.button.OpenFriendsImmediately"))+"\n    ")])]):e._e(),e._v(" "),2==e.info.status&&1==e.info.is_owner?t("div",[t("div",{staticClass:"invite_button",on:{click:function(t){return e.handerBotton(2)}}},[e._v("\n      "+e._s(e.$t("ActivityBlindbox.button.ViewAssets"))+"\n    ")])]):e._e(),e._v(" "),2==e.info.status&&0==e.info.is_owner?t("div",[t("div",{staticClass:"invite_button",on:{click:function(t){return e.handerBotton(2)}}},[e._v("\n      "+e._s(e.$t("ActivityBlindbox.button.SuccessView"))+"\n    ")])]):e._e()])}),[],!1,null,"3763a924",null);t.default=i.exports},580:function(e,t,n){"use strict";(function(e){var n;"undefined"!=typeof document&&(n=document.head||document.getElementsByTagName("head")[0],(a=document.createElement("style")).type="text/css",a.styleSheet?a.styleSheet.cssText="":a.appendChild(document.createTextNode("")),n.appendChild(a));var r={render:function(){var e=this,t=e.$createElement;return(t=e._self._c||t)("div",[t("div",[t("button",{class:e.dataBtnClass,attrs:{disabled:e.dataBtnDisabled},on:{click:e.submitData}},[e._t("default",[e._v("SUBMIT")])],2)])])},staticRenderFns:[],props:{dataSitekey:String,dataCallback:Function,dataValidate:Function,dataBadge:String,dataType:String,dataErrorcallback:Function,dataTabindex:String,dataSize:String,dataBtnClass:[String,Array,Object],dataBtnDisabled:Boolean,dataLanguage:String},data:function(){return{recaptchaId:0,vueRecaptchaInit:0}},created:function(){var e,t,n=this;"undefined"!=typeof window&&(window.vueRecaptchaInit=function(){n.vueRecaptchaInit++},e=document.createElement("script"),t=this.dataLanguage?"&hl="+this.dataLanguage:"",e.setAttribute("src","https://www.google.com/recaptcha/api.js?onload=vueRecaptchaInit&render=explicit"+t),e.setAttribute("async",""),e.setAttribute("defer",""),(document.body||document.head).appendChild(e))},watch:{vueRecaptchaInit:function(){try{var e={sitekey:this.dataSitekey};void 0!==this.dataBadge&&(e.badge=this.dataBadge),void 0!==this.dataType&&(e.type=this.dataType),void 0!==this.dataTabindex&&(e.tabindex=this.dataTabindex),void 0===this.dataSize&&(e.size="invisible",e.callback=this.getToken);var t=document.createElement("div");t.className="outside-badge",this.$el.insertBefore(t,this.$el.childNodes[0]),this.recaptchaId=window.grecaptcha.render(t,e)}catch(e){window.console.error(e)}}},methods:{submitData:function(e){e.preventDefault(),"undefined"!=typeof window&&(!0!==this.dataValidate()&&void 0!==this.dataValidate||(void 0===this.dataSize?window.grecaptcha.execute(this.recaptchaId):this.getToken(window.grecaptcha.getResponse(this.recaptchaId))))},getToken:function(e){"undefined"!=typeof window&&(window.grecaptcha.reset(this.recaptchaId),this.dataCallback(e))}}};var a=null;"undefined"!=typeof window?a=window.Vue:void 0!==e&&(a=e.Vue),a&&a.use({install:function i(e){i.installed||(i.installed=!0,e.component("Vue2RecaptchaInvisible",r))}}),t.a=r}).call(this,n(50))},581:function(e,t,n){"use strict";n(483)},582:function(e,t,n){(n=n(109)(!1)).push([e.i,".grecaptcha-badge {\n  display: none;\n}\n.btn {\n  border: none;\n  background: none;\n}",""]),e.exports=n},583:function(e,t,n){"use strict";n(484)},584:function(e,t,n){var i=n(109),a=n(239),r=n(585);n=n(445),i=i(!1),r=a(r),n=a(n);i.push([e.i,".loading[data-v-58a39d34] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#blindbox_invite[data-v-58a39d34] {\n  font-family: PingFang SC;\n  min-height: 100vh;\n  width: 100vw;\n  box-sizing: border-box;\n  font-style: normal;\n  font-weight: normal;\n  background: #3d0b88;\n  word-break: break-all;\n}\n#blindbox_invite .blindbox_invite_header[data-v-58a39d34] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.59rem 0 0.59rem 0.4rem;\n  width: 100%;\n  box-sizing: border-box;\n}\n#blindbox_invite .blindbox_invite_header .header_btn[data-v-58a39d34] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n  font-size: 0.32rem;\n  padding: 0 0.29rem;\n  color: #ffffff;\n  height: 0.85rem;\n  background: linear-gradient(122.71deg, #5aebff 3.38%, #6d39ff 92.57%),#c4c4c4;\n  border-radius: 2.67rem 0 0 2.67rem;\n}\n#blindbox_invite .blindbox_invite_header .header_back>img[data-v-58a39d34] {\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.block_invite[data-v-58a39d34],\n.block_acitve_strategy[data-v-58a39d34] {\n  padding: 0.4rem 0.43rem 0;\n  width: 100%;\n  box-sizing: border-box;\n}\n.block_invite .block_warpper[data-v-58a39d34],\n.block_acitve_strategy .block_warpper[data-v-58a39d34] {\n  border-radius: 0.43rem;\n  box-sizing: border-box;\n  padding: 0.27rem 0.53rem 0.53rem;\n}\n.block_invite .block_warpper .rules_item[data-v-58a39d34],\n.block_acitve_strategy .block_warpper .rules_item[data-v-58a39d34] {\n  display: flex;\n}\n.block_invite .block_warpper .rules_item .con[data-v-58a39d34],\n.block_acitve_strategy .block_warpper .rules_item .con[data-v-58a39d34] {\n  flex: 1;\n}\n.block_invite .block_warpper .block_invite_num[data-v-58a39d34] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 0.37rem;\n  text-align: center;\n  margin: 0.4rem 0;\n}\n.block_invite .block_warpper .block_invite_num .color_red[data-v-58a39d34] {\n  font-size: 0.53rem;\n}\n.block_invite .block_warpper .block_invite_progress[data-v-58a39d34] {\n  width: 7.47rem;\n  height: 0.13rem;\n  background: #ffffff;\n  margin: 0 auto;\n  border-radius: 2.67rem;\n}\n.block_invite .block_warpper .block_invite_progress .progress[data-v-58a39d34] {\n  border-radius: 2.67rem;\n  height: 0.13rem;\n  background: linear-gradient(90deg, #7067fd 0%, #4a2fd2 100%);\n}\n.block_invite .block_warpper .block_invite_ETH .invite_ETH_content[data-v-58a39d34] {\n  margin-top: 0.53rem;\n  width: 8.08rem;\n  height: 1.6rem;\n  background: #ffffff;\n  border-radius: 0.21rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.8;\n}\n.block_invite .block_warpper .block_invite_ETH .invite_ETH_content textarea[data-v-58a39d34] {\n  border-radius: 0.21rem;\n  border: none;\n  width: 7.23rem;\n  height: 0.85rem;\n  padding: 0.37rem;\n  text-align: center;\n  line-height: 0.85rem;\n  outline: none;\n  background: #ffffff;\n  resize: none;\n  font-size: 0.32rem;\n}\n.block_invite .block_warpper .block_invite_ETH .invite_ETH_content textarea[data-v-58a39d34]::placeholder {\n  color: #4b5373;\n}\n.block_invite .block_warpper .block_invite_ETH .invite_ETH_content textarea.focus[data-v-58a39d34] {\n  line-height: 0.43rem;\n  font-size: 0.32rem;\n  text-align: left;\n}\n.block_invite .block_warpper .block_invite_down[data-v-58a39d34] {\n  margin: 0.53rem auto 0;\n  width: 100%;\n  text-align: center;\n  font-weight: 500;\n  font-size: 0.43rem;\n  line-height: 0.53rem;\n  word-break: break-word;\n}\n.block_invite .block_warpper .block_invite_down a[data-v-58a39d34] {\n  color: #495bff;\n}\n.block_invite .block_warpper .block_invite_list[data-v-58a39d34] {\n  position: relative;\n  z-index: 10;\n  margin-top: 0.91rem;\n  font-size: 0.32rem;\n  line-height: 0.43rem;\n  padding: 0.53rem 0.43rem 0.53rem;\n  background: #ffffff;\n  border-radius: 0.21rem;\n  box-sizing: border-box;\n  opacity: 0.8;\n}\n.block_invite .block_warpper .block_invite_list.mt[data-v-58a39d34] {\n  margin-top: 0.27rem;\n}\n.block_invite .block_warpper .block_invite_list .title[data-v-58a39d34] {\n  margin-bottom: 0.13rem;\n}\n.block_invite .block_warpper .block_invite_list .block_invite_item[data-v-58a39d34] {\n  margin-top: 0.05rem;\n}\n.block_open_strategy[data-v-58a39d34] {\n  margin-top: 0.53rem;\n  padding: 0 0.43rem 0 0.29rem;\n  box-sizing: border-box;\n  width: 100%;\n}\n.block_open_strategy .block_open_is_owner[data-v-58a39d34] {\n  width: 100%;\n  background: url("+r+") center center no-repeat;\n  background-size: 100% 100%;\n  height: 9.81rem;\n}\n.block_open_strategy .block_open_is_owner.en[data-v-58a39d34] {\n  height: 12.03rem;\n  background: url("+r+") center center no-repeat;\n  background-size: 100% 100%;\n}\n.block_open_strategy .block_open_strategy_warpper[data-v-58a39d34] {\n  width: 100%;\n  height: 9.71rem;\n  background: url("+n+") center center no-repeat;\n  background-size: 100% 100%;\n}\n.block_open_strategy .block_open_strategy_warpper.en[data-v-58a39d34] {\n  height: 9.71rem;\n  background: url("+n+') center center no-repeat;\n  background-size: 100% 100%;\n}\n.block_acitve_strategy[data-v-58a39d34] {\n  padding-top: 0.53rem;\n  overflow: hidden;\n}\n.block_acitve_strategy .block_warpper .block_body[data-v-58a39d34] {\n  padding-top: 0.4rem;\n  font-size: 0.32rem;\n  line-height: 0.48rem;\n}\n.block_acitve_strategy .block_warpper .block_body>div[data-v-58a39d34] {\n  margin-bottom: 0.48rem;\n}\n.block_acitve_strategy .block_warpper .block_footer[data-v-58a39d34] {\n  color: #0c0998;\n  word-break: keep-all;\n}\n.block_invite_coin[data-v-58a39d34] {\n  margin-top: 0.4rem;\n  text-align: center;\n  font-family: Gilroy;\n  font-weight: bold;\n  font-size: 0.75rem;\n  line-height: 0.75rem;\n  font-family: "bitkeep EN BLOD";\n}\n.block_page_footer[data-v-58a39d34] {\n  padding: 1.07rem 0 0.72rem;\n  box-sizing: border-box;\n}\n.block_page_footer .block_header[data-v-58a39d34] {\n  margin: 0 auto;\n  width: 2.4rem;\n  height: 0.64rem;\n}\n.block_page_footer .block_header img[data-v-58a39d34] {\n  width: 100%;\n  height: 100%;\n}\n.block_detail_bg[data-v-58a39d34] {\n  width: 100%;\n  display: flex;\n  height: 11.73rem;\n  min-height: 11.73rem;\n}',""]),e.exports=i},585:function(e,t,n){e.exports=n.p+"img/own02@2.en.89f72b2.png"},615:function(e,t,n){"use strict";n.r(t);var i=[function(){var e=this.$createElement;return(e=this._self._c||e)("div",{staticClass:"block_page_footer"},[e("div",{staticClass:"block_warpper"},[e("div",{staticClass:"block_header"},[e("img",{attrs:{src:n(428)}})])])])}],a=(n(55),n(41),n(62),n(81),n(48),n(82),n(14)),r=n(35),o=(n(47),n(70),n(71),n(19),n(69),n(377)),s=n(405),c=n(451),d=n(497),l=n(498),u=n(593),p=n(369),f=n(580),b=n(92);function v(e,t){var n,i=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)),i}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}f={name:"mBoxDetail",mixins:[n(386).a],components:{Header:o.Header,Countdown:s.default,BlindTimeText:c.default,BlindTitleImage:d.default,CreatePoster:u.default,BlindButton:l.default,vue2RecaptchaInvisible:f.a},computed:_(_({},Object(b.b)(["local"])),{},{id:function(){return this.$route.query.id},progress:function(){return"width:".concat(this.info.already_number/this.info.invite*100,"%")},isCountdown:function(){return 0==this.info.status||1==this.info.status},isInvaild:function(){return 3==this.info.status},isBitKeep:function(){return this.local.UA.isBitKeep},locale:function(){return this.local.locale},format:function(){return"zh"==this.locale?"{dd}天{hh}时{mm}分{ss}秒":"{dd} d {hh} h {mm} m {ss} s"},heade_image:function(){return 2==this.info.status?this.info.prize_image:this.info.poster_image}}),asyncData:function(e){return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},data:function(){return{Toast:null,timer:null,startTime:0,endTime:0,isLoading:!0,poster:{url:"",poster_url:""},qrcodeUrl:"",info:{status:0,is_owner:1},invite_list:[],address:"",focus:!1,verifytoken:"",handerType:""}},created:function(){return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},beforeMount:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.getDetails();case 1:case"end":return t.stop()}}),t)})))()},head:function(){return{script:[{src:"https://www.recaptcha.net/recaptcha/api.js?render=explicit"}]}},mounted:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:e.isLoading=!1,e.init();case 4:case"end":return t.stop()}}),t)})))()},methods:{init:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:case"end":return t.stop()}}),t)})))()},validate:function(){return!(1==this.handerType||(!this.address||!this.address.replace(/ /g,""))&&(this.$toast.fail(this.$t("ActivityBlindbox.toast.inputETH")),this.$refs.textarea&&this.$refs.textarea.focus(),1))},onSubmit:function(e){var i=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.helpMBox({address:i.address,id:i.info.id,scene:i.info.scene,verifytoken:e});case 2:if(n=t.sent,i.hideLoading(),0!=n.status)return i.$toast.fail(n.data),t.abrupt("return");t.next=7;break;case 7:i.getDetails(),i.$toast.success(i.$t("ActivityBlindbox.toast.ContributeSuccess")),i.isBitKeep||i.$router.push({path:"/activity/blindbox/download",query:{}});case 10:case"end":return t.stop()}}),t)})))()},handlerFocus:function(){this.focus=!0},handlerBlur:function(){this.focus=!1},openUrl:function(){this.$router.push("/activity/blindbox/stepDetail")},getDetails:function(e){var t=this;return Object(a.a)(regeneratorRuntime.mark((function n(){var r,o,i,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.$route.params.id||t.$route.query.id,o=t.$route.params.ownerIdentity||t.$route.query.ownerIdentity,r){n.next=4;break}return n.abrupt("return",!1);case 4:if(1<t.info.status)return n.abrupt("return");n.next=6;break;case 6:return e||t.showLoading(t.$t("ActivityBlindbox.toast.loading")),n.next=9,p.a.mBoxDetail({id:r,ownerIdentity:o});case 9:if(a=n.sent,i=a.data,a=a.status,e||t.hideLoading(),clearTimeout(t.timer),t.timer=setTimeout((function(){t.getDetails(!0)}),5e3),0!=a)return e||t.$toast.fail(i),n.abrupt("return",!1);n.next=18;break;case 18:if(JSON.stringify(t.info)==JSON.stringify(i))return n.abrupt("return",!1);n.next=20;break;case 20:return t.info=i,t.startTime=i.current_time,t.endTime=new Date(i.end_time).getTime(),t.invite_list=i.help_record||[],t.isBitKeep&&BitKeepInvoke.setTitle(t.info.title),n.abrupt("return",!0);case 26:case"end":return n.stop()}}),n)})))()},handerBotton:function(e){var i=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i.handerType=e,i.info.is_owner,t.t0=String(e),t.next="0"===t.t0?5:"1"===t.t0?21:"2"===t.t0?23:"3"===t.t0?24:26;break;case 5:if(1!=i.info.isCloudWallet)return t.next=8,new Promise((function(e){return BitKeepInvoke.confirm(i.$t("ActivityBlindbox.dialog.isCreateWalletComfirm"),e)}));t.next=11;break;case 8:return t.sent&&BitKeepInvoke.openUrl("bitkeep://cloudCreateWallet"),t.abrupt("return");case 11:return i.showLoading(i.$t("ActivityBlindbox.toast.open")),t.next=14,p.a.openMBox({id:i.$route.params.id||i.$route.query.id});case 14:return n=t.sent,t.next=17,i.getDetails();case 17:if(i.hideLoading(),0!=n.status)return t.abrupt("return",i.$toast.fail(n.data));t.next=20;break;case 20:return t.abrupt("break",27);case 21:return 1==i.info.is_owner?i.$refs.CreatePoster&&i.$refs.CreatePoster.init():i.helperBtn(),t.abrupt("break",27);case 23:i.isBitKeep?1==i.info.isCloudWallet?BitKeepInvoke.openUrl("bitkeep://cloudWallet"):BitKeepInvoke.openUrl("bitkeep://cloudCreateWallet"):i.isBitKeep||i.$router.push({path:"/activity/blindbox/download",query:{}});case 24:return i.helperBtn(),t.abrupt("break",27);case 26:return t.abrupt("break",27);case 27:case"end":return t.stop()}}),t)})))()},helperBtn:function(e){var t=this;return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=3;break}n.next=7;break;case 3:if(t.address&&t.address.replace(/ /g,"")){n.next=7;break}return t.$toast.fail(t.$t("ActivityBlindbox.toast.inputETH")),t.$refs.textarea&&t.$refs.textarea.focus(),n.abrupt("return");case 7:case"end":return n.stop()}}),n)})))()},back:function(){this.$router.back()},beforeDestroy:function(){console.log(111),clearTimeout(this.timer)},chountChange:function(e){e.dd,e.hh,e.mm,e.ss,e.ms,e.yy},end:function(){},onChange:function(){},onclose:function(){console.log(arguments)}},filters:{}},n(581),n(583),b=n(80),i=Object(b.a)(f,(function(){var e,t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"blindbox_invite"}},[t.isLoading?i("div",{staticClass:"loading"},[i("van-loading",{attrs:{size:"1rem",vertical:"",color:"#1989fa"}},[t._v(t._s(t.$t("base.loading"))+"...")])],1):i("div",[i("Header",[i("div",{staticClass:"blindbox_invite_header"},[i("span",{staticClass:"header_back"}),t._v(" "),t.isBitKeep?i("span",{staticClass:"header_btn btn active",on:{click:function(e){return t.$router.replace({path:"/activity/blindbox/list",query:{}})}}},[t._v("\n          "+t._s(t.$t("ActivityBlindbox.title.myBlindboxText"))+"\n        ")]):t._e()])]),t._v(" "),i("div",{staticClass:"block_detail_bg"},[i("van-image",{attrs:{width:"100%",height:"100%",src:t.heade_image}})],1),t._v(" "),i("BlindTimeText",{staticClass:"block_time",attrs:{info:t.info,locale:t.locale,startTime:t.startTime,endTime:t.endTime,format:t.format},on:{change:t.chountChange,end:t.end}}),t._v(" "),i("div",{staticClass:"block_invite"},[i("div",{staticClass:"block_warpper radial-gradient"},[i("div",{staticClass:"block_header"},[i("BlindTitleImage",{attrs:{isBitKeep:t.isBitKeep,locale:t.locale,is_owner:t.info.is_owner,status:t.info.status}})],1),t._v(" "),2==t.info.status&&1==t.info.is_owner?i("div",{staticClass:"block_invite_coin color_red"},t._l(t.info.symbolList,(function(e,n){return i("div",{key:n},[i("span",[t._v("+"+t._s(e.amount))]),t._v(" "),i("span",[t._v(t._s(e.symbol))])])})),0):i("div",[i("div",{staticClass:"block_invite_num color_text",domProps:{innerHTML:t._s(t.$t("ActivityBlindbox.ActivityBlindboxDetail.blindBoxNumText",{surplus:this.info.already_number||0,invite:this.info.invite||0}))}}),t._v(" "),i("div",{staticClass:"block_invite_progress"},[i("div",{staticClass:"progress",style:t.progress})])]),t._v(" "),1!=t.info.is_owner&&0==t.info.status?i("div",{staticClass:"block_invite_ETH"},[i("div",{staticClass:"invite_ETH_content"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],ref:"textarea",class:{focus:t.focus||!!t.address},attrs:{type:"text",placeholder:t.focus?"":t.$t("ActivityBlindbox.ActivityBlindboxDetail.inputAddressPlaceholader")},domProps:{value:t.address},on:{focus:t.handlerFocus,blur:function(e){return t.handlerBlur()},input:function(e){e.target.composing||(t.address=e.target.value)}}}),t._v(" "),i("span")])]):t._e(),t._v(" "),i("vue2-recaptcha-invisible",{attrs:{"data-sitekey":"6LeNstsdAAAAAMR2UBwyqxUuL3CPgD4QT_yxVG26","data-validate":t.validate,"data-callback":t.onSubmit,"data-btn-class":"btn","data-type":"image","data-btn-disabled":!1}},[3!=t.info.status?i("BlindButton",{attrs:{isBitKeep:t.isBitKeep,info:t.info},on:{handerBotton:t.handerBotton}}):i("div")],1),t._v(" "),t.isBitKeep?t._e():i("div",{staticClass:"block_invite_down"},[i("a",{domProps:{innerHTML:t._s(t.$t("ActivityBlindbox.ActivityBlindboxDetail.NoAddressDownload"))},on:{click:t.openUrl}},[t._v(" "+t._s())])]),t._v(" "),t.invite_list&&0<t.invite_list.length?i("div",{staticClass:" ",class:{block_invite_list:!0,color_text:!0,mt:!t.isBitKeep}},[i("div",{staticClass:"title"},[t._v("\n            "+t._s(t.$t("ActivityBlindbox.ActivityBlindboxDetail.HelpSuccessETH"))+" （"+t._s(t.invite_list.length)+"）：\n          ")]),t._v(" "),t._l(t.invite_list,(function(e,n){return i("div",{key:e,staticClass:"block_invite_item"},[i("div",[t._v(t._s(n+1)+". "+t._s(e))])])}))],2):t._e()],1)]),t._v(" "),i("div",{staticClass:"block_open_strategy"},[1!=t.info.is_owner&&0==t.info.status?i("div",{class:((e={block_open_is_owner:!0})[t.locale]=!0,e),on:{click:t.openUrl}}):i("div",{class:((e={block_open_strategy_warpper:!0})[t.locale]=!0,e)})]),t._v(" "),i("div",{staticClass:"block_acitve_strategy"},[i("div",{staticClass:"block_warpper radial-gradient"},[i("div",{staticClass:"block_header"},[i("BlindTitleImage",{attrs:{type:"footer",isBitKeep:t.isBitKeep,locale:t.locale,is_owner:t.info.is_owner,status:t.info.status}})],1),t._v(" "),i("div",{staticClass:"block_body color_theme"},t._l(t.$t("ActivityBlindbox.ActivityBlindboxDetail.rules"),(function(e,n){return i("div",{key:e,staticClass:"rules_item"},[i("span",[t._v(t._s(n+1)+". ")]),t._v(" "),i("span",{staticClass:"con",domProps:{innerHTML:t._s(e)}})])})),0),t._v(" "),i("div",{staticClass:"block_footer"},[t._v("\n          "+t._s(t.$t("ActivityBlindbox.ActivityBlindboxDetail.FinalInterpretation"))+"\n        ")])])]),t._v(" "),t._m(0),t._v(" "),i("CreatePoster",{ref:"CreatePoster",attrs:{locale:t.locale,zIndex:100,isBitKeep:t.isBitKeep,info:t.info,startTime:t.startTime,endTime:t.endTime,format:t.format},on:{change:t.chountChange,end:t.end}})],1)])}),i,!1,null,"58a39d34",null),t.default=i.exports}}]);