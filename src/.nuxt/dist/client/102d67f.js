(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{349:function(t,e,n){var i=n(355);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,n(101).default)("365d89f2",i,!0,{sourceMap:!1})},353:function(t,e,n){var i=n(363);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,n(101).default)("111d9e82",i,!0,{sourceMap:!1})},354:function(t,e,n){"use strict";n(349)},355:function(t,e,n){(n=n(100)(!1)).push([t.i,".cuntdown[data-v-ce47b7d2] {\n  display: inline-block;\n}",""]),t.exports=n},359:function(t,e,n){"use strict";n.r(e),n(344),n(44),n(61),n(62),n(156),n(352);var i=1e3,r=6e4,s=36e5,o=864e5,a={all:/\{(dd|hh|mm|ss|ms){1}\}/gi,ms:/\{(ms){1}\}/gi,ss:/\{(ss){1}\}/gi,mm:/\{(mm){1}\}/gi,hh:/\{(hh){1}\}/gi,dd:/\{(dd){1}\}/gi,mn:/\{(mn){1}\}/gi,yy:/\{(yy){1}\}/gi},c={name:"cuntdown",props:{hidden:{type:Boolean,default:!1},format:{type:String,default:"{yy}年{mn}月{dd}天{hh}小时{mm}分钟{ss}秒{ms}毫秒"},startTime:{type:Number||String,default:(new Date).getTime()},endTime:{type:Number||String,default:(new Date).getTime()}},data:function(){return{timer:null,stepTime:0}},watch:{stepTime:function(t){var e={ms:this.ms,ss:this.ss,mm:this.mm,hh:this.hh,dd:this.dd};if(t<=0)return this.$emit("end",e);this.$emit("change",e)},startTime:function(){this.stepTime=0,this.init()},endTime:function(){this.stepTime=0,this.init()}},computed:{options_show:function(){return{ms:a.ms.test(this.format),ss:a.ss.test(this.format),mm:a.mm.test(this.format),hh:a.hh.test(this.format),dd:a.dd.test(this.format),mn:a.mn.test(this.format),yy:a.yy.test(this.format)}},ms:function(){return Math.floor(this.stepTime%i)},ss:function(){return this.options_show.mm?Math.floor(this.stepTime%r/i):Math.floor(this.stepTime/i)},mm:function(){return this.options_show.hh?Math.floor(this.stepTime%s/r):Math.floor(this.stepTime/r)},hh:function(){return this.options_show.dd?Math.floor(this.stepTime%o/s):Math.floor(this.stepTime/s)},dd:function(){return this.options_show.mn?this.diff.day:Math.floor(this.stepTime/o)},mn:function(){var t=0<this.diff.year?this.diff.year:0,e=0<this.diff.month?this.diff.month:0;return this.options_show.yy?e:12*t+e-1},yy:function(){return 0<this.diff.year?this.diff.year:0},step_times:function(){return this.options_show.ms?100:1e3},pareStr:function(){return this.format.replace(a.ms,this.zero(this.ms,4)).replace(a.ss,this.zero(this.ss)).replace(a.mm,this.zero(this.mm)).replace(a.hh,this.zero(this.hh)).replace(a.dd,this.zero(this.dd)).replace(a.mn,this.zero(this.mn)).replace(a.yy,this.zero(this.yy))},diff:function(){var t=new Date(this.endTime),e=new Date(this.startTime);isNaN(t)||isNaN(e);var n=e.getFullYear(),i=e.getMonth()+1,r=e.getDate(),s=t.getFullYear(),o=t.getMonth()+1,a=t.getDate();return{endDate:t,startDate:e,startYears:n,endYears:s,startMonth:i,endMonth:o,endDay:a,startDay:r,day:a-r,month:o-i,year:s-n}}},methods:{init:function(){var t=this,e=this.step_times;if(clearInterval(this.timer),!(this.startTime>=this.endTime)){if(this.stepTime=this.endTime-this.startTime,this.stepTime<=0)return this.stepTime=0;this.timer=setInterval((function(){t.stepTime=t.stepTime-e,t.stepTime<=0&&(t.stepTime=0,clearInterval(t.timer))}),e)}},zero:function(t){var e=0<(e=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:2)-String(t).length)?new Array(e).fill(0).join(""):"";return Number(t)<10?e+t:t}},filters:{filterZero:function(t){return Number(t)<10?"0"+t:t}},created:function(){this.init()}};n(354),n=n(70),c=Object(n.a)(c,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return t.hidden?t._e():e("div",{staticClass:"cuntdown",domProps:{innerHTML:t._s(t.pareStr)}})}),[],!1,null,"ce47b7d2",null);e.default=c.exports},362:function(t,e,n){"use strict";n(353)},363:function(t,e,n){var i=n(100),r=n(356);n=n(364),i=i(!1),n=r(n);i.push([t.i,".block_time_content[data-v-e6436f42] {\n  font-family: PingFang SC;\n  font-style: normal;\n  position: relative;\n  width: 100%;\n  height: 0.85rem;\n  box-sizing: border-box;\n  background: url("+n+") center center no-repeat;\n  background-size: 100% 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.37rem;\n  color: #ffffff;\n}",""]),t.exports=i},364:function(t,e,n){t.exports=n.p+"img/time_bg.19e0770.png"},366:function(t,e,n){t.exports=n.p+"img/BTN1@2.b02d901.png"},367:function(t,e,n){t.exports=n.p+"img/BTN2@2.5be20b9.png"},368:function(t,e,n){var i=n(387);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,n(101).default)("ad6ee5bc",i,!0,{sourceMap:!1})},370:function(t,e,n){"use strict";n.r(e),n(344),n(82);var i={name:"blindTimeText",components:{Countdown:n(359).default},props:{info:{type:Object,default:function(){return{status:0,is_owner:0}}},startTime:{type:Number||String,default:0},endTime:{type:Number||String,default:0},format:{type:String,default:"{dd}天{hh}小时{mm}分钟{ss}秒"}},methods:{chountChange:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.$emit.apply(this,["change"].concat(e))},end:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.$emit.apply(this,["end"].concat(e))}}};n(362),n=n(70),i=Object(n.a)(i,(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("div",{staticClass:"block_time_content",attrs:{id:"blindTimeText"}},[0==t.info.status||1==t.info.status?e("span",{staticClass:"color_white"},[t._v("距离盲盒失效还有   ")]):t._e(),t._v(" "),2==t.info.status?e("span",{staticClass:"color_white"},[t._v("盲盒已成功开启！   ")]):t._e(),t._v(" "),3==t.info.status?e("span",{staticClass:"color_white"},[t._v("太遗憾了，这个盲盒已过期   ")]):t._e(),t._v(" "),0==t.info.status||1==t.info.status?e("Countdown",{staticClass:"color_red",attrs:{startTime:t.startTime,endTime:t.endTime,format:t.format}}):t._e()],1)}),[],!1,null,"e6436f42",null);e.default=i.exports},372:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={created:function(){},methods:{showLoading:function(t){this.Toast=this.$toast.loading({duration:0,forbidClick:!0,message:t||""})},hideLoading:function(){this.Toast&&this.Toast.clear()}}}},381:function(t,e,n){t.exports=n.p+"img/poster_logo@2.53db9a6.png"},386:function(t,e,n){"use strict";n(368)},387:function(t,e,n){(n=n(100)(!1)).push([t.i,".qcodeModalwarpper {\n  width: 100vw;\n  z-index: 100;\n}\n.qcodeModalwarpper.hidden {\n  z-index: -10 !important;\n}\n.qcodeModalwarpper .canvasTmp {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.qcodeModalwarpper .close {\n  position: absolute;\n  top: 0.8rem;\n  right: 0.27rem;\n  font-size: 0.53rem;\n  color: #ffffff;\n}\n.qcodeModalwarpper .block_time {\n  opacity: 0.6;\n}\n.qcodeModalwarpper .postershow {\n  width: 9.2rem;\n  height: 14.21rem;\n  max-height: calc(100vh - 3.07rem);\n  margin: 0.48rem auto 0;\n  position: relative;\n}\n.qcodeModalwarpper .postershow img {\n  width: 100%;\n  height: 100%;\n}\n.qcodeModalwarpper .poster_wrapper {\n  position: relative;\n  width: 9.2rem;\n  height: 14.24rem;\n  max-height: calc(100vh - 3.07rem);\n  margin: 0.48rem auto 0;\n  position: relative;\n}\n.qcodeModalwarpper .poster_wrapper .poster_bg {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title {\n  left: 0.43rem;\n  bottom: 0.59rem;\n  position: absolute;\n  font-weight: 500;\n  font-size: 0.32rem;\n  line-height: 0.48rem;\n  color: #ffffff;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title .logo {\n  width: 2.4rem;\n  height: 0.64rem;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title .title {\n  margin-top: 0.27rem;\n}\n.qcodeModalwarpper .poster_wrapper .poster_qrcode {\n  position: absolute;\n  right: 0.48rem;\n  bottom: 0.53rem;\n  width: 1.6rem;\n  height: 1.6rem;\n  border-radius: 0.21rem;\n}\n.qcodeModalwarpper .footer {\n  margin-top: 0.4rem;\n  display: flex;\n  justify-content: center;\n}\n.qcodeModalwarpper .footer .left {\n  margin-right: 0.51rem;\n}\n.qcodeModalwarpper .footer .btn {\n  display: flex;\n  width: 4.32rem;\n  height: 1.33rem;\n  background: linear-gradient(122.71deg, #5aebff 3.38%, #6d39ff 92.57%),#c4c4c4;\n  border-radius: 2.67rem;\n}\n.qcodeModalwarpper .footer .btn img {\n  width: 100%;\n  height: 100%;\n}",""]),t.exports=n},406:function(t,e,n){"use strict";n.r(e);var i=n(12),r=(n(60),n(44),n(61),n(382)),s=n.n(r),o=n(372),a=(r=n(385),n.n(r)),c=(r=n(370),n(160));o={name:"CrearePoster",mixins:[o.a],components:{BlindTimeText:r.default},props:{zIndex:{default:100},isBitKeep:{default:!1},qrcodeText:{default:""},info:{default:function(){return{status:0,is_owner:0}}},format:{default:function(){return"{dd}天{hh}小时{mm}分钟{ss}秒"}},startTime:{default:function(){return 0}},endTime:{default:function(){return 0}}},computed:{poster_img:function(){return"/poster".concat((this.info.invite_image1||"").replace("http://cdn.bitkeep.vip","").replace("https://cdn.bitkeep.vip",""))},codeText:function(){return this.qrcodeText||location.href}},data:function(){return{showModal:!1,qrcodeUrl:"",poster:{url:""},pedding:!1}},mounted:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.toDataURL(t.codeText).catch((function(t){return""}));case 2:t.qrcodeUrl=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{init:function(){this.showModal=!0,this.pedding&&this.showLoading("生成中...")},createPoster:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.pedding)return e.abrupt("return",t.showLoading("生成中..."));e.next=2;break;case 2:if(t.showModal&&t.showLoading("生成中..."),t.pedding=t.poster.url="",n=t.$refs.poster,t.qrcodeUrl){e.next=11;break}return e.next=8,s.a.toDataURL(t.codeText).catch((function(t){return""}));case 8:return t.qrcodeUrl=e.sent,e.next=11,t.$nextTick();case 11:a()(n,{dpi:Object(c.a)(),width:n.offsetWidth-1,height:n.offsetHeight-1,scale:2,async:!0,scrollY:0,scrollX:0,allowTaint:!1}).then(function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.poster.url=n.toDataURL("image/jpeg"),e.next=3,t.$nextTick();case 3:t.pedding=!1,t.hideLoading();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.pedding=!1,t.$toast.fail(JSON.stringify(e))}));case 14:case"end":return e.stop()}}),e)})))()},shareImage:function(){BitKeepInvoke.shareUrl(this.info.title,this.info.title,location.href,this.info.invite_image1,console.log)},saveImage:function(){var t=this;this.poster.url?(this.showLoading("保存中..."),BitKeepInvoke.saveImageFromBase64(this.poster.url,(function(e){t.hideLoading()}))):this.createPoster()}}},n(386),r=n(70),o=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("van-overlay",{class:{qcodeModalwarpper:!0,hidden:!t.showModal},attrs:{show:!0}},[e("canvas",{ref:"qrcode",staticClass:"canvasTmp"}),t._v(" "),e("div",{on:{click:function(t){t.stopPropagation()}}},[e("BlindTimeText",{staticClass:"block_time",attrs:{info:t.info,startTime:t.startTime,endTime:t.endTime,format:t.format}}),t._v(" "),e("van-icon",{staticClass:"close",attrs:{name:"close"},on:{click:function(e){t.showModal=!1}}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.poster.url,expression:"!poster.url"}],ref:"poster",staticClass:"poster_wrapper",attrs:{id:"poster"}},[e("img",{staticClass:"poster_bg",attrs:{src:t.poster_img,alt:""},on:{load:t.createPoster}}),t._v(" "),e("div",{staticClass:"commany_title"},[e("img",{staticClass:"logo",attrs:{src:n(381),alt:""}}),t._v(" "),e("div",{staticClass:"content"},[e("div",[t._v("扫描领取数字盲盒")]),t._v(" "),e("div",[t._v("下载 Bitkeep，瓜分盲盒中数字资产")])])]),t._v(" "),e("img",{staticClass:"poster_qrcode",attrs:{src:t.qrcodeUrl}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.poster.url,expression:"poster.url"}],staticClass:"postershow"},[e("img",{attrs:{src:t.poster.url}})]),t._v(" "),e("div",{staticClass:"footer"},[t.isBitKeep||t.pedding?e("div",{staticClass:"btn left",on:{click:t.saveImage}},[e("img",{attrs:{src:n(366),alt:""}})]):e("a",{staticClass:"btn left",attrs:{href:t.poster.url,download:(new Date).getTime()+".jpeg"}},[e("img",{attrs:{src:n(366),alt:""}})]),t._v(" "),t.isBitKeep?e("div",{staticClass:"btn",on:{click:t.shareImage}},[e("img",{attrs:{src:n(367),alt:""}})]):e("div",{staticClass:"btn"},[e("img",{attrs:{src:n(367),alt:""}})])])],1)])}),[],!1,null,null,null);e.default=o.exports}}]);