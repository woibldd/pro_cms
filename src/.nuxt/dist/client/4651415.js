(window.webpackJsonp=window.webpackJsonp||[]).push([[16,5,6,7,9],{343:function(e,t,n){var i=n(348);(i="string"==typeof(i=i.__esModule?i.default:i)?[[e.i,i,""]]:i).locals&&(e.exports=i.locals),(0,n(101).default)("640c92ec",i,!0,{sourceMap:!1})},347:function(e,t,n){"use strict";n(343)},348:function(e,t,n){(n=n(100)(!1)).push([e.i,".header .header_wapper[data-v-3521874b] {\n  width: 100vw;\n}\n.fixed[data-v-3521874b] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99;\n}",""]),e.exports=n},349:function(e,t,n){var i=n(355);(i="string"==typeof(i=i.__esModule?i.default:i)?[[e.i,i,""]]:i).locals&&(e.exports=i.locals),(0,n(101).default)("365d89f2",i,!0,{sourceMap:!1})},350:function(e,t,n){"use strict";n.r(t);var i=n(12),r=(n(60),{name:"Header",props:{fixed:{type:Boolean,default:function(){return!0}}},computed:{},data:function(){return{info:{}}},updated:function(){},mounted:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:case"end":return t.stop()}}),t)})))()},methods:{onChange:function(){},onclose:function(){}},filters:{}});n(347),n=n(70),r=Object(n.a)(r,(function(){var e=this,t=e.$createElement;return(t=e._self._c||t)("div",{class:{fixed:e.fixed,header:!0},attrs:{id:"Header"}},[t("div",{staticClass:"header_wapper"},[e._t("default")],2)])}),[],!1,null,"3521874b",null);t.default=r.exports},351:function(e,t,n){"use strict";n.r(t),n.d(t,"Header",(function(){return i}));var i=(n=n(350)).default;t.default={Header:n.default}},353:function(e,t,n){var i=n(363);(i="string"==typeof(i=i.__esModule?i.default:i)?[[e.i,i,""]]:i).locals&&(e.exports=i.locals),(0,n(101).default)("111d9e82",i,!0,{sourceMap:!1})},354:function(e,t,n){"use strict";n(349)},355:function(e,t,n){(n=n(100)(!1)).push([e.i,".cuntdown[data-v-ce47b7d2] {\n  display: inline-block;\n}",""]),e.exports=n},359:function(e,t,n){"use strict";n.r(t),n(344),n(44),n(61),n(62),n(156),n(352);var i=1e3,r=6e4,a=36e5,o=864e5,s={all:/\{(dd|hh|mm|ss|ms){1}\}/gi,ms:/\{(ms){1}\}/gi,ss:/\{(ss){1}\}/gi,mm:/\{(mm){1}\}/gi,hh:/\{(hh){1}\}/gi,dd:/\{(dd){1}\}/gi,mn:/\{(mn){1}\}/gi,yy:/\{(yy){1}\}/gi},c={name:"cuntdown",props:{hidden:{type:Boolean,default:!1},format:{type:String,default:"{yy}年{mn}月{dd}天{hh}小时{mm}分钟{ss}秒{ms}毫秒"},startTime:{type:Number||String,default:(new Date).getTime()},endTime:{type:Number||String,default:(new Date).getTime()}},data:function(){return{timer:null,stepTime:0}},watch:{stepTime:function(e){var t={ms:this.ms,ss:this.ss,mm:this.mm,hh:this.hh,dd:this.dd};if(e<=0)return this.$emit("end",t);this.$emit("change",t)},startTime:function(){this.stepTime=0,this.init()},endTime:function(){this.stepTime=0,this.init()}},computed:{options_show:function(){return{ms:s.ms.test(this.format),ss:s.ss.test(this.format),mm:s.mm.test(this.format),hh:s.hh.test(this.format),dd:s.dd.test(this.format),mn:s.mn.test(this.format),yy:s.yy.test(this.format)}},ms:function(){return Math.floor(this.stepTime%i)},ss:function(){return this.options_show.mm?Math.floor(this.stepTime%r/i):Math.floor(this.stepTime/i)},mm:function(){return this.options_show.hh?Math.floor(this.stepTime%a/r):Math.floor(this.stepTime/r)},hh:function(){return this.options_show.dd?Math.floor(this.stepTime%o/a):Math.floor(this.stepTime/a)},dd:function(){return this.options_show.mn?this.diff.day:Math.floor(this.stepTime/o)},mn:function(){var e=0<this.diff.year?this.diff.year:0,t=0<this.diff.month?this.diff.month:0;return this.options_show.yy?t:12*e+t-1},yy:function(){return 0<this.diff.year?this.diff.year:0},step_times:function(){return this.options_show.ms?100:1e3},pareStr:function(){return this.format.replace(s.ms,this.zero(this.ms,4)).replace(s.ss,this.zero(this.ss)).replace(s.mm,this.zero(this.mm)).replace(s.hh,this.zero(this.hh)).replace(s.dd,this.zero(this.dd)).replace(s.mn,this.zero(this.mn)).replace(s.yy,this.zero(this.yy))},diff:function(){var e=new Date(this.endTime),t=new Date(this.startTime);isNaN(e)||isNaN(t);var n=t.getFullYear(),i=t.getMonth()+1,r=t.getDate(),a=e.getFullYear(),o=e.getMonth()+1,s=e.getDate();return{endDate:e,startDate:t,startYears:n,endYears:a,startMonth:i,endMonth:o,endDay:s,startDay:r,day:s-r,month:o-i,year:a-n}}},methods:{init:function(){var e=this,t=this.step_times;if(clearInterval(this.timer),!(this.startTime>=this.endTime)){if(this.stepTime=this.endTime-this.startTime,this.stepTime<=0)return this.stepTime=0;this.timer=setInterval((function(){e.stepTime=e.stepTime-t,e.stepTime<=0&&(e.stepTime=0,clearInterval(e.timer))}),t)}},zero:function(e){var t=0<(t=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:2)-String(e).length)?new Array(t).fill(0).join(""):"";return Number(e)<10?t+e:e}},filters:{filterZero:function(e){return Number(e)<10?"0"+e:e}},created:function(){this.init()}};n(354),n=n(70),c=Object(n.a)(c,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return e.hidden?e._e():t("div",{staticClass:"cuntdown",domProps:{innerHTML:e._s(e.pareStr)}})}),[],!1,null,"ce47b7d2",null);t.default=c.exports},361:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));t=n(19),t=n(97),t=n.n(t);var i=n(0),r=t.a.create({baseURL:"/",timeout:6e4,headers:{token:"5c4e30ffa048f856e01b7501e961229c",language:"zh",currency:"",brand:"",os:"",package:"",clientversion:"",im:""}});r.interceptors.request.use((function(e){var t;return!i.a.prototype.$store||(t=i.a.prototype.$store.state).local.UA.isBitKeep&&Object.assign(e.headers,t.local.bitkeep),e}),(function(e){return Promise.resolve({status:1})})),r.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.resolve({status:1,data:"网路开了小差"})}));var a={mBoxList:function(e){return r.get("user/activity/mBoxList",{params:e,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(e){return r.get("user/activity/openMBox",{params:e})},helpMBox:function(e){return r.get("user/activity/helpMBox",{params:e})},mBoxDetail:function(e){return r.get("user/activity/mBoxDetail",{params:e})}}},362:function(e,t,n){"use strict";n(353)},363:function(e,t,n){var i=n(100),r=n(356);n=n(364),i=i(!1),n=r(n);i.push([e.i,".block_time_content[data-v-e6436f42] {\n  font-family: PingFang SC;\n  font-style: normal;\n  position: relative;\n  width: 100%;\n  height: 0.85rem;\n  box-sizing: border-box;\n  background: url("+n+") center center no-repeat;\n  background-size: 100% 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.37rem;\n  color: #ffffff;\n}",""]),e.exports=i},364:function(e,t,n){e.exports=n.p+"img/time_bg.19e0770.png"},365:function(e,t,n){var i=n(380);(i="string"==typeof(i=i.__esModule?i.default:i)?[[e.i,i,""]]:i).locals&&(e.exports=i.locals),(0,n(101).default)("70781118",i,!0,{sourceMap:!1})},366:function(e,t,n){e.exports=n.p+"img/BTN1@2.b02d901.png"},367:function(e,t,n){e.exports=n.p+"img/BTN2@2.5be20b9.png"},368:function(e,t,n){var i=n(387);(i="string"==typeof(i=i.__esModule?i.default:i)?[[e.i,i,""]]:i).locals&&(e.exports=i.locals),(0,n(101).default)("ad6ee5bc",i,!0,{sourceMap:!1})},370:function(e,t,n){"use strict";n.r(t),n(344),n(82);var i={name:"blindTimeText",components:{Countdown:n(359).default},props:{info:{type:Object,default:function(){return{status:0,is_owner:0}}},startTime:{type:Number||String,default:0},endTime:{type:Number||String,default:0},format:{type:String,default:"{dd}天{hh}小时{mm}分钟{ss}秒"}},methods:{chountChange:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.$emit.apply(this,["change"].concat(t))},end:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.$emit.apply(this,["end"].concat(t))}}};n(362),n=n(70),i=Object(n.a)(i,(function(){var e=this,t=e.$createElement;return(t=e._self._c||t)("div",{staticClass:"block_time_content",attrs:{id:"blindTimeText"}},[0==e.info.status||1==e.info.status?t("span",{staticClass:"color_white"},[e._v("距离盲盒失效还有   ")]):e._e(),e._v(" "),2==e.info.status?t("span",{staticClass:"color_white"},[e._v("盲盒已成功开启！   ")]):e._e(),e._v(" "),3==e.info.status?t("span",{staticClass:"color_white"},[e._v("太遗憾了，这个盲盒已过期   ")]):e._e(),e._v(" "),0==e.info.status||1==e.info.status?t("Countdown",{staticClass:"color_red",attrs:{startTime:e.startTime,endTime:e.endTime,format:e.format}}):e._e()],1)}),[],!1,null,"e6436f42",null);t.default=i.exports},372:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i={created:function(){},methods:{showLoading:function(e){this.Toast=this.$toast.loading({duration:0,forbidClick:!0,message:e||""})},hideLoading:function(){this.Toast&&this.Toast.clear()}}}},375:function(e,t,n){e.exports=n.p+"img/openTextTitle@2.d05c52a.png"},376:function(e,t,n){e.exports=n.p+"img/inviteTextTitle@2.8194a3d.png"},377:function(e,t,n){e.exports=n.p+"img/helperTextTitle@2.7b54db7.png"},378:function(e,t,n){e.exports=n.p+"img/title03@2.ad26fe9.png"},379:function(e,t,n){"use strict";n(365)},380:function(e,t,n){(n=n(100)(!1)).push([e.i,".titleImage[data-v-f308423a] {\n  margin: 0 auto;\n  overflow: hidden;\n  width: 6.67rem;\n  height: 1.28rem;\n  justify-content: center;\n  display: flex;\n}\n.titleImage img[data-v-f308423a] {\n  width: 100%;\n  height: 100%;\n}\n.noOwner[data-v-f308423a] {\n  width: 5.71rem !important;\n  height: 1.28rem !important;\n}\n.footer[data-v-f308423a] {\n  width: 4.75rem;\n  height: 0.64rem;\n}",""]),e.exports=n},381:function(e,t,n){e.exports=n.p+"img/poster_logo@2.53db9a6.png"},386:function(e,t,n){"use strict";n(368)},387:function(e,t,n){(n=n(100)(!1)).push([e.i,".qcodeModalwarpper {\n  width: 100vw;\n  z-index: 100;\n}\n.qcodeModalwarpper.hidden {\n  z-index: -10 !important;\n}\n.qcodeModalwarpper .canvasTmp {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.qcodeModalwarpper .close {\n  position: absolute;\n  top: 0.8rem;\n  right: 0.27rem;\n  font-size: 0.53rem;\n  color: #ffffff;\n}\n.qcodeModalwarpper .block_time {\n  opacity: 0.6;\n}\n.qcodeModalwarpper .postershow {\n  width: 9.2rem;\n  height: 14.21rem;\n  max-height: calc(100vh - 3.07rem);\n  margin: 0.48rem auto 0;\n  position: relative;\n}\n.qcodeModalwarpper .postershow img {\n  width: 100%;\n  height: 100%;\n}\n.qcodeModalwarpper .poster_wrapper {\n  position: relative;\n  width: 9.2rem;\n  height: 14.24rem;\n  max-height: calc(100vh - 3.07rem);\n  margin: 0.48rem auto 0;\n  position: relative;\n}\n.qcodeModalwarpper .poster_wrapper .poster_bg {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title {\n  left: 0.43rem;\n  bottom: 0.59rem;\n  position: absolute;\n  font-weight: 500;\n  font-size: 0.32rem;\n  line-height: 0.48rem;\n  color: #ffffff;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title .logo {\n  width: 2.4rem;\n  height: 0.64rem;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title .title {\n  margin-top: 0.27rem;\n}\n.qcodeModalwarpper .poster_wrapper .poster_qrcode {\n  position: absolute;\n  right: 0.48rem;\n  bottom: 0.53rem;\n  width: 1.6rem;\n  height: 1.6rem;\n  border-radius: 0.21rem;\n}\n.qcodeModalwarpper .footer {\n  margin-top: 0.4rem;\n  display: flex;\n  justify-content: center;\n}\n.qcodeModalwarpper .footer .left {\n  margin-right: 0.51rem;\n}\n.qcodeModalwarpper .footer .btn {\n  display: flex;\n  width: 4.32rem;\n  height: 1.33rem;\n  background: linear-gradient(122.71deg, #5aebff 3.38%, #6d39ff 92.57%),#c4c4c4;\n  border-radius: 2.67rem;\n}\n.qcodeModalwarpper .footer .btn img {\n  width: 100%;\n  height: 100%;\n}",""]),e.exports=n},398:function(e,t,n){var i=n(436);(i="string"==typeof(i=i.__esModule?i.default:i)?[[e.i,i,""]]:i).locals&&(e.exports=i.locals),(0,n(101).default)("7a45f730",i,!0,{sourceMap:!1})},405:function(e,t,n){"use strict";n.r(t);var i={name:"titleImag",props:{type:{default:"helper"},is_owner:{},status:{}},computed:{isOwner:function(){return 1==this.is_owner}}},r=(n(379),n(70));i=Object(r.a)(i,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return"helper"==e.type?t("div",{class:{titleImage:!0}},[2==e.status?t("img",{attrs:{src:n(375)}}):e.isOwner?t("img",{attrs:{src:n(376)}}):t("img",{class:{noOwner:!e.isOwner},attrs:{src:n(377)}})]):"footer"==e.type?t("div",{staticClass:"titleImage footer"},[t("img",{attrs:{src:n(378)}})]):t("div")}),[],!1,null,"f308423a",null);t.default=i.exports},406:function(e,t,n){"use strict";n.r(t);var i=n(12),r=(n(60),n(44),n(61),n(382)),a=n.n(r),o=n(372),s=(r=n(385),n.n(r)),c=(r=n(370),n(160));o={name:"CrearePoster",mixins:[o.a],components:{BlindTimeText:r.default},props:{zIndex:{default:100},isBitKeep:{default:!1},qrcodeText:{default:""},info:{default:function(){return{status:0,is_owner:0}}},format:{default:function(){return"{dd}天{hh}小时{mm}分钟{ss}秒"}},startTime:{default:function(){return 0}},endTime:{default:function(){return 0}}},computed:{poster_img:function(){return"/poster".concat((this.info.invite_image1||"").replace("http://cdn.bitkeep.vip","").replace("https://cdn.bitkeep.vip",""))},codeText:function(){return this.qrcodeText||location.href}},data:function(){return{showModal:!1,qrcodeUrl:"",poster:{url:""},pedding:!1}},mounted:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.toDataURL(e.codeText).catch((function(e){return""}));case 2:e.qrcodeUrl=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{init:function(){this.showModal=!0,this.pedding&&this.showLoading("生成中...")},createPoster:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.pedding)return t.abrupt("return",e.showLoading("生成中..."));t.next=2;break;case 2:if(e.showModal&&e.showLoading("生成中..."),e.pedding=e.poster.url="",n=e.$refs.poster,e.qrcodeUrl){t.next=11;break}return t.next=8,a.a.toDataURL(e.codeText).catch((function(e){return""}));case 8:return e.qrcodeUrl=t.sent,t.next=11,e.$nextTick();case 11:s()(n,{dpi:Object(c.a)(),width:n.offsetWidth-1,height:n.offsetHeight-1,scale:2,async:!0,scrollY:0,scrollX:0,allowTaint:!1}).then(function(){var t=Object(i.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.poster.url=n.toDataURL("image/jpeg"),t.next=3,e.$nextTick();case 3:e.pedding=!1,e.hideLoading();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.pedding=!1,e.$toast.fail(JSON.stringify(t))}));case 14:case"end":return t.stop()}}),t)})))()},shareImage:function(){BitKeepInvoke.shareUrl(this.info.title,this.info.title,location.href,this.info.invite_image1,console.log)},saveImage:function(){var e=this;this.poster.url?(this.showLoading("保存中..."),BitKeepInvoke.saveImageFromBase64(this.poster.url,(function(t){e.hideLoading()}))):this.createPoster()}}},n(386),r=n(70),o=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(t=e._self._c||t)("van-overlay",{class:{qcodeModalwarpper:!0,hidden:!e.showModal},attrs:{show:!0}},[t("canvas",{ref:"qrcode",staticClass:"canvasTmp"}),e._v(" "),t("div",{on:{click:function(e){e.stopPropagation()}}},[t("BlindTimeText",{staticClass:"block_time",attrs:{info:e.info,startTime:e.startTime,endTime:e.endTime,format:e.format}}),e._v(" "),t("van-icon",{staticClass:"close",attrs:{name:"close"},on:{click:function(t){e.showModal=!1}}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.poster.url,expression:"!poster.url"}],ref:"poster",staticClass:"poster_wrapper",attrs:{id:"poster"}},[t("img",{staticClass:"poster_bg",attrs:{src:e.poster_img,alt:""},on:{load:e.createPoster}}),e._v(" "),t("div",{staticClass:"commany_title"},[t("img",{staticClass:"logo",attrs:{src:n(381),alt:""}}),e._v(" "),t("div",{staticClass:"content"},[t("div",[e._v("扫描领取数字盲盒")]),e._v(" "),t("div",[e._v("下载 Bitkeep，瓜分盲盒中数字资产")])])]),e._v(" "),t("img",{staticClass:"poster_qrcode",attrs:{src:e.qrcodeUrl}})]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.poster.url,expression:"poster.url"}],staticClass:"postershow"},[t("img",{attrs:{src:e.poster.url}})]),e._v(" "),t("div",{staticClass:"footer"},[e.isBitKeep||e.pedding?t("div",{staticClass:"btn left",on:{click:e.saveImage}},[t("img",{attrs:{src:n(366),alt:""}})]):t("a",{staticClass:"btn left",attrs:{href:e.poster.url,download:(new Date).getTime()+".jpeg"}},[t("img",{attrs:{src:n(366),alt:""}})]),e._v(" "),e.isBitKeep?t("div",{staticClass:"btn",on:{click:e.shareImage}},[t("img",{attrs:{src:n(367),alt:""}})]):t("div",{staticClass:"btn"},[t("img",{attrs:{src:n(367),alt:""}})])])],1)])}),[],!1,null,null,null);t.default=o.exports},409:function(e,t,n){e.exports=n.p+"img/nav_back_black@3.b656962.png"},410:function(e,t,n){e.exports=n.p+"img/logo2@3.fb021ce.png"},435:function(e,t,n){"use strict";n(398)},436:function(e,t,n){var i=n(100),r=n(356),a=n(437),o=n(438);n=n(439),i=i(!1),a=r(a),o=r(o),n=r(n);i.push([e.i,".mb[data-v-fedfaf1e] {\n  margin-bottom: -0.64rem !important;\n}\n.loading[data-v-fedfaf1e] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#blindbox_invite[data-v-fedfaf1e] {\n  font-family: PingFang SC;\n  min-height: 100vh;\n  width: 100vw;\n  box-sizing: border-box;\n  font-style: normal;\n  font-weight: normal;\n  background: #3d0b88;\n  word-break: break-all;\n}\n#blindbox_invite .blindbox_invite_header[data-v-fedfaf1e] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.59rem 0 0.59rem 0.4rem;\n  width: 100%;\n  box-sizing: border-box;\n}\n#blindbox_invite .blindbox_invite_header .header_btn[data-v-fedfaf1e] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n  font-size: 0.32rem;\n  padding: 0 0.29rem;\n  color: #ffffff;\n  height: 0.85rem;\n  background: linear-gradient(122.71deg, #5aebff 3.38%, #6d39ff 92.57%),#c4c4c4;\n  border-radius: 2.67rem 0 0 2.67rem;\n}\n#blindbox_invite .blindbox_invite_header .header_back>img[data-v-fedfaf1e] {\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.block_invite[data-v-fedfaf1e],\n.block_acitve_strategy[data-v-fedfaf1e] {\n  padding: 0.4rem 0.43rem 0;\n  width: 100%;\n  box-sizing: border-box;\n}\n.block_invite .block_warpper[data-v-fedfaf1e],\n.block_acitve_strategy .block_warpper[data-v-fedfaf1e] {\n  background: #ffffff;\n  border-radius: 0.43rem;\n  box-sizing: border-box;\n  padding: 0.27rem 0.53rem 0.53rem;\n}\n.block_invite .block_warpper .block_header[data-v-fedfaf1e],\n.block_acitve_strategy .block_warpper .block_header[data-v-fedfaf1e] {\n  overflow: hidden;\n  width: 6.67rem;\n  height: 1.28rem;\n  margin: 0 auto;\n  display: flex;\n}\n.block_invite .block_warpper .block_header img[data-v-fedfaf1e],\n.block_acitve_strategy .block_warpper .block_header img[data-v-fedfaf1e] {\n  width: 100%;\n  height: 100%;\n}\n.block_invite .block_warpper .block_invite_num[data-v-fedfaf1e] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 0.37rem;\n  text-align: center;\n  margin: 0.4rem 0;\n}\n.block_invite .block_warpper .block_invite_num .color_red[data-v-fedfaf1e] {\n  font-size: 0.43rem;\n}\n.block_invite .block_warpper .block_invite_progress[data-v-fedfaf1e] {\n  width: 7.47rem;\n  height: 0.13rem;\n  background: #f2f1fa;\n  margin: 0 auto;\n  border-radius: 2.67rem;\n}\n.block_invite .block_warpper .block_invite_progress .progress[data-v-fedfaf1e] {\n  border-radius: 2.67rem;\n  height: 0.13rem;\n  background: linear-gradient(90deg, #7067fd 0%, #4a2fd2 100%);\n}\n.block_invite .block_warpper .block_invite_ETH .invite_ETH_content[data-v-fedfaf1e] {\n  margin-top: 0.53rem;\n  width: 8.08rem;\n  height: 1.6rem;\n  background: #f2f1fa;\n  border-radius: 0.21rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.block_invite .block_warpper .block_invite_ETH .invite_ETH_content input[data-v-fedfaf1e] {\n  border: none;\n  width: 80%;\n  text-align: center;\n  outline: none;\n  background: #f2f1fa;\n  font-size: 0.32rem;\n  line-height: 0.43rem;\n}\n.block_invite .block_warpper .block_invite_ETH .invite_ETH_content input[data-v-fedfaf1e]::placeholder {\n  color: #4b5373;\n}\n.block_invite .block_warpper .block_invite_button[data-v-fedfaf1e] {\n  margin-top: 0.53rem;\n  background: url("+a+") center center no-repeat;\n  width: 8.08rem;\n  background-size: 100% 100%;\n}\n.block_invite .block_warpper .block_invite_button .heart[data-v-fedfaf1e] {\n  animation: heartbeat 1s infinite ease;\n}\n.block_invite .block_warpper .block_invite_button .invite_button[data-v-fedfaf1e] {\n  margin: 0 auto;\n  width: 7.47rem;\n  height: 1.33rem;\n  background: url("+o+") center center no-repeat;\n  background-size: 100% 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 0.45rem;\n}\n.block_invite .block_warpper .block_invite_button .invite_button[data-v-fedfaf1e]:hover {\n  opacity: 0.6 !important;\n}\n.block_invite .block_warpper .block_invite_down[data-v-fedfaf1e] {\n  margin: 0.53rem auto 0;\n  width: 5.6rem;\n  height: 0.43rem;\n  font-weight: 500;\n  font-size: 0.32rem;\n  line-height: 0.43rem;\n}\n.block_invite .block_warpper .block_invite_down a[data-v-fedfaf1e] {\n  color: #495bff;\n}\n.block_invite .block_warpper .block_invite_list[data-v-fedfaf1e] {\n  margin-top: 0.91rem;\n  font-size: 0.32rem;\n  line-height: 0.43rem;\n  padding: 0.53rem 0.43rem 0.53rem;\n  overflow: hidden;\n  background: #f2f1fa;\n  border-radius: 0.21rem;\n  box-sizing: border-box;\n}\n.block_invite .block_warpper .block_invite_list .title[data-v-fedfaf1e] {\n  margin-bottom: 0.13rem;\n}\n.block_invite .block_warpper .block_invite_list .block_invite_item[data-v-fedfaf1e] {\n  margin-top: 0.05rem;\n}\n.block_open_strategy[data-v-fedfaf1e] {\n  margin-top: 0.53rem;\n  padding: 0 0.43rem 0 0.29rem;\n  box-sizing: border-box;\n  width: 100%;\n  height: 11.36rem;\n}\n.block_open_strategy .block_open_strategy_warpper[data-v-fedfaf1e] {\n  width: 100%;\n  height: 100%;\n  background: url("+n+") center center no-repeat;\n  background-size: 100% 100%;\n}\n.block_acitve_strategy[data-v-fedfaf1e] {\n  padding-top: 0.53rem;\n  overflow: hidden;\n}\n.block_acitve_strategy .block_warpper .block_body[data-v-fedfaf1e] {\n  padding-top: 0.4rem;\n  font-size: 0.32rem;\n  line-height: 0.48rem;\n}\n.block_acitve_strategy .block_warpper .block_body>div[data-v-fedfaf1e] {\n  margin-bottom: 0.48rem;\n}\n.block_acitve_strategy .block_warpper .block_footer[data-v-fedfaf1e] {\n  color: #999;\n}\n.block_invite_coin[data-v-fedfaf1e] {\n  margin-top: 0.4rem;\n  height: 0.75rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Gilroy;\n  font-weight: bold;\n  font-size: 0.75rem;\n  line-height: 0.75rem;\n}\n.block_page_footer[data-v-fedfaf1e] {\n  padding: 1.07rem 0 0.72rem;\n  box-sizing: border-box;\n}\n.block_page_footer .block_header[data-v-fedfaf1e] {\n  margin: 0 auto;\n  width: 2.4rem;\n  height: 0.64rem;\n}\n.block_page_footer .block_header img[data-v-fedfaf1e] {\n  width: 100%;\n  height: 100%;\n}\n.block_detail_bg[data-v-fedfaf1e] {\n  width: 100%;\n  display: flex;\n  height: 11.73rem;\n  min-height: 11.73rem;\n}",""]),e.exports=i},437:function(e,t,n){e.exports=n.p+"img/BTN@3.6b9d6de.png"},438:function(e,t,n){e.exports=n.p+"img/shareBtn.adf14fd.png"},439:function(e,t,n){e.exports=n.p+"img/min02@3.dbaae6a.png"},455:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this.$createElement;return(e=this._self._c||e)("div",{staticClass:"block_open_strategy"},[e("div",{staticClass:"block_open_strategy_warpper"})])},function(){var e=this.$createElement;return(e=this._self._c||e)("div",{staticClass:"block_page_footer"},[e("div",{staticClass:"block_warpper"},[e("div",{staticClass:"block_header"},[e("img",{attrs:{src:n(410)}})])])])}],a=(n(45),n(30),n(54),n(73),n(36),n(74),n(12)),i=n(27),o=(n(62),n(44),n(61),n(60),n(351)),s=n(359),c=n(370),d=n(405),f=n(406),l=n(361),u=(n(385),n(382),n(85));function p(e,t){var n,i=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)),i}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}f={name:"mBoxDetail",mixins:[n(372).a],components:{Header:o.Header,Countdown:s.default,BlindTimeText:c.default,BlindTitleImage:d.default,CreatePoster:f.default},computed:m(m({},Object(u.b)(["local"])),{},{id:function(){return this.$route.query.id},progress:function(){return"width:".concat(this.info.already_number/this.info.invite*100,"%")},isCountdown:function(){return 0==this.info.status||1==this.info.status},isInvaild:function(){return 3==this.info.status},isBitKeep:function(){return this.local.UA.isBitKeep}}),asyncData:function(e){return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},data:function(){return{Toast:null,timer:null,format:"{dd}天{hh}小时{mm}分钟{ss}秒",startTime:(new Date).getTime(),endTime:(new Date).getTime()+2592e6,isLoading:!0,poster:{url:"",poster_url:""},qrcodeUrl:"",info:{status:0,is_owner:1},invite_list:[],address:""}},created:function(){return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},beforeMount:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.getDetails();case 1:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:e.isLoading=!1,e.init();case 4:case"end":return t.stop()}}),t)})))()},methods:{init:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:case"end":return t.stop()}}),t)})))()},shareImage:function(){BitKeepInvoke&&BitKeepInvoke.shareUrl(this.info.title,this.info.title,location.href,this.info.invite_image1,console.log)},getDetails:function(i){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$route.query.id){t.next=3;break}return e.$toast.fail("params id is not found"),t.abrupt("return",!1);case 3:if(1<e.info.status)return t.abrupt("return");t.next=5;break;case 5:return i||e.showLoading("加载中..."),t.next=8,l.a.mBoxDetail({id:e.$route.query.id});case 8:if(r=t.sent,n=r.data,r=r.status,i||e.hideLoading(),clearTimeout(e.timer),e.timer=setTimeout((function(){e.getDetails(!0)}),5e3),0!=r)return i||e.$toast.fail(n),t.abrupt("return",!1);t.next=17;break;case 17:if(JSON.stringify(e.info)==JSON.stringify(n))return t.abrupt("return",!1);t.next=19;break;case 19:return e.info=n,e.startTime=new Date(n.start_time).getTime(),e.endTime=new Date(n.end_time).getTime(),e.invite_list=n.help_record||[],t.abrupt("return",!0);case 24:case"end":return t.stop()}}),t)})))()},handerBotton:function(e){var i=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i.info.is_owner,t.t0=String(e),t.next="0"===t.t0?4:"1"===t.t0?14:"2"===t.t0?16:17;break;case 4:return i.showLoading("开启中..."),t.next=7,l.a.openMBox({id:i.$route.query.id});case 7:return n=t.sent,t.next=10,i.getDetails();case 10:if(i.hideLoading(),0!=n.status)return t.abrupt("return",i.$toast.fail(JSON.stringify(n.data)));t.next=13;break;case 13:return t.abrupt("break",18);case 14:return 1==i.info.is_owner?i.$refs.CreatePoster&&i.$refs.CreatePoster.init():i.helperBtn(),t.abrupt("break",18);case 16:case 17:return t.abrupt("break",18);case 18:case"end":return t.stop()}}),t)})))()},helperBtn:function(e){var i=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=3;break}t.next=17;break;case 3:if(i.address&&i.address.replace(/ /g,"")){t.next=5;break}return t.abrupt("return",i.$toast.fail("助力请输入ETH地址"));case 5:return i.showLoading(),t.next=8,l.a.helpMBox({address:i.address,id:i.$route.query.id});case 8:if(n=t.sent,i.hideLoading(),0!=n.status)return i.$toast.fail(JSON.stringify(n.data)),t.abrupt("return");t.next=13;break;case 13:return i.getDetails(),t.next=16,i.$dialog.alert({message:"助力成功"});case 16:i.$router.push({path:"/activity/blindbox/download",query:{}});case 17:case"end":return t.stop()}}),t)})))()},back:function(){this.$router.back()},chountChange:function(e){e.dd,e.hh,e.mm,e.ss,e.ms,e.yy},end:function(){},onChange:function(){},onclose:function(){}},filters:{}},n(435),u=n(70),r=Object(u.a)(f,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"blindbox_invite"}},[e.isLoading?i("div",{staticClass:"loading"},[i("van-loading",{attrs:{size:"1rem",vertical:"",color:"#1989fa"}},[e._v(e._s(e.$t("base.loading"))+"...")])],1):i("div",[e.isBitKeep?e._e():i("Header",[i("div",{staticClass:"blindbox_invite_header"},[i("span",{staticClass:"header_back",on:{click:e.back}},[i("img",{attrs:{src:n(409)}})]),e._v(" "),i("span",{staticClass:"header_btn btn"},[e._v("\n          我的盲盒\n        ")])])]),e._v(" "),i("div",{staticClass:"block_detail_bg"},[i("van-image",{attrs:{width:"100%",height:"100%",src:e.info.cover_image}})],1),e._v(" "),i("BlindTimeText",{staticClass:"block_time",attrs:{info:e.info,startTime:e.startTime,endTime:e.endTime,format:e.format},on:{change:e.chountChange,end:e.end}}),e._v(" "),i("div",{staticClass:"block_invite"},[i("div",{staticClass:"block_warpper"},[i("div",{staticClass:"block_header"},[i("BlindTitleImage",{attrs:{is_owner:e.info.is_owner,status:e.info.status}})],1),e._v(" "),2==e.info.status?i("div",{staticClass:"block_invite_coin color_red"},[i("span",[e._v("+"+e._s(e.info.amount))]),e._v("\n           \n          "),i("span",[e._v(e._s(e.info.symbol))])]):i("div",[i("div",{staticClass:"block_invite_num color_text"},[e._v("\n            距离开启盲盒仅差\n            "),i("span",{staticClass:"color_red"},[e._v(e._s(e.info.surplus))]),e._v("/"+e._s(e.info.invite)+" 人助力\n          ")]),e._v(" "),i("div",{staticClass:"block_invite_progress"},[i("div",{staticClass:"progress",style:e.progress})])]),e._v(" "),1!=e.info.is_owner&&0==e.info.status?i("div",{staticClass:"block_invite_ETH"},[i("div",{staticClass:"invite_ETH_content"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{type:"text",placeholder:"点即此处输入 ETH 地址即可助力"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}})])]):e._e(),e._v(" "),3!=e.info.status?i("div",{staticClass:"block_invite_button"},[1==e.info.status&&1==e.info.is_owner?i("div",{staticClass:"invite_button heart",on:{click:function(t){return e.handerBotton(0)}}},[e._v("\n            立即开启盲盒\n          ")]):e._e(),e._v(" "),0==e.info.status?i("div",{staticClass:"invite_button heart",on:{click:function(t){return e.handerBotton(1)}}},[e._v("\n            "+e._s(1==e.info.is_owner?"立即邀请好友助力":"立即助力开启盲盒")+"\n          ")]):e._e(),e._v(" "),2==e.info.status?i("div",{staticClass:"invite_button heart",on:{click:function(t){return e.handerBotton(2)}}},[e._v("\n            查看资产\n          ")]):e._e()]):e._e(),e._v(" "),1!=e.info.is_owner?i("div",{class:{block_invite_down:!0,mb:e.invite_list&&0<e.invite_list.length}},[i("a",{attrs:{href:"https://bitkeep.org"}},[e._v("没有地址？点击下载 BitKeep 创建地址")])]):e._e(),e._v(" "),e.invite_list&&0<e.invite_list.length?i("div",{staticClass:"block_invite_list color_text"},[i("div",{staticClass:"title"},[e._v("助力成功 ETH 地址：")]),e._v(" "),e._l(e.invite_list,(function(t,n){return i("div",{key:t,staticClass:"block_invite_item"},[i("div",[e._v(e._s(n+1)+". "+e._s(t))])])}))],2):e._e()])]),e._v(" "),e._m(0),e._v(" "),i("div",{staticClass:"block_acitve_strategy"},[i("div",{staticClass:"block_warpper"},[i("div",{staticClass:"block_header"},[i("BlindTitleImage",{attrs:{type:"footer",is_owner:e.info.is_owner,status:e.info.status}})],1),e._v(" "),i("div",{staticClass:"block_body color_text"},e._l(e.$t("ActivityBlindbox.ActivityBlindboxDetail.rules"),(function(t,n){return i("div",{key:t},[e._v("\n            "+e._s(n+1)+". "+e._s(t)+"\n          ")])})),0),e._v(" "),i("div",{staticClass:"block_footer"},[e._v("本活动最终解释权归 BitKeep 所有")])])]),e._v(" "),e._m(1),e._v(" "),i("CreatePoster",{ref:"CreatePoster",attrs:{zIndex:100,isBitKeep:e.isBitKeep,info:e.info,startTime:e.startTime,endTime:e.endTime,format:e.format},on:{change:e.chountChange,end:e.end}})],1)])}),r,!1,null,"fedfaf1e",null),t.default=r.exports}}]);