(window.webpackJsonp=window.webpackJsonp||[]).push([[2,8,11],{371:function(t,e,n){"use strict";function i(t){var e,n,i,r,a,o,s,c=h(t,!1);if("string"==typeof c&&2<c.length)if(43===(e=(c=v(c)).charCodeAt(0))||45===e){if(88===(t=c.charCodeAt(2))||120===t)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+c}for(a=(r=c.slice(2)).length,o=0;o<a;o++)if((s=r.charCodeAt(o))<48||i<s)return NaN;return parseInt(r,n)}return+c}var r=n(16),a=n(4),o=n(129),s=n(30),c=n(24),d=n(71),l=n(163),h=n(94),p=n(6),f=n(95),u=n(82).f,m=n(56).f,g=n(25).f,v=n(373).trim,A="Number",w=a[A],b=w.prototype,_=d(f(b))==A;if(o(A,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var y,x=function(t){t=arguments.length<1?0:t;var e=this;return e instanceof x&&(_?p((function(){b.valueOf.call(e)})):d(e)!=A)?l(new w(i(t)),e,x):i(t)},T=r?u(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;T.length>M;M++)c(w,y=T[M])&&!c(x,y)&&g(x,y,m(w,y));(x.prototype=b).constructor=x,s(a,A,x)}},372:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},373:function(t,e,n){var i=n(42),r=(n="["+n(372)+"]",RegExp("^"+n+n+"*")),a=RegExp(n+n+"*$");n=function(t){return function(e){return e=String(i(e)),1&t&&(e=e.replace(r,"")),2&t?e.replace(a,""):e}};t.exports={start:n(1),end:n(2),trim:n(3)}},379:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFaSURBVHgB7ZiNTcMwEIUvFQN0BI9QNggTMEJHgA0Im3QDYILSCdoNwgawQXiHbCm4ieNz7DiV/ElPTc9q9ck/pyREhULBn67rFPLd5aNFdn2njeXYIFvKh0Ke+oUNrZw7x9gJOdAy7JF6aMAl2FZVdaAFwL6rx8ZueokH0adMIRfM8BclxnsGdQs64vKMvCHcEl4oMZIlbuh6Izeu/RMDieDjSH1PCUl2SDCz2xizKxH8GKmf7II+SC1yxPWZZSkQieAzcrFqr3av1HJ8mIzU3/dQSe82A5EffNzrZVPIu6655MiSfLB/E02wJ/o5VHfIGYIkoxwSDzmDeLlnCwrkDCLJWYIBcgZvyWDBGXIGL8kgwQhyhsn/Cb2biSFn2OkMIprBBHKTSG63FpdjvARzyTGTgjnlGKdgbjnGJagosxzjajM1rYDVP3b+g/ecfoGTC35xpahQKPjzC6Ozn3JRmGUSAAAAAElFTkSuQmCC"},380:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFESURBVHgB7ZbRTQMxDIb/IAZgBSaADThGYAJgEsQITFBGYANggh4bsEG7QWpLeYjS5M6Ok1Mf8klWpF7sfk3qXIDBYKDHe/9GcfAydpn8G4q9V6IR1LAr1FBL5upcoRPOuSMNjxQzDFwL5nxS/C48/y89YElaGJb8prhHK5KVf4ER6XbncrttcUzY7idUsIkgryANX6igu2CQ+6G4QwVdBQtyfxS3sHR3iyYJjTEnteYgnW0cTXGT4JpcMm+/qaBULicJKbWCWrlUElJqBGvl4nxI0Qpa5ZZoeczE/yE+SqbwBjEhuSysklwKHBrJMU0EmUgSreSYZoKMVox+0ETDc5T/Kk1Ud3ENXDv+otycTW4zFoaglSFo5eIFJefgg1fchJRMaxNc7kPf0WgJOqjPfEpb3OxVZaUk+IFt4QV5x2Aw0HMCShN+nd/b/wkAAAAASUVORK5CYII="},381:function(t,e,n){var i=n(397);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,n(110).default)("365d89f2",i,!0,{sourceMap:!1})},384:function(t,e,n){var i=n(7),r=n(167);n=n(111);i({target:"Array",proto:!0},{fill:r}),n("fill")},386:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={created:function(){},methods:{showLoading:function(t){this.Toast=this.$toast.loading({duration:0,forbidClick:!0,message:t||""})},hideLoading:function(){this.Toast&&this.Toast.clear()}}}},387:function(t,e,n){t.exports=n.p+"img/poster_logo@2.53db9a6.png"},389:function(t,e,n){t.exports=n.p+"img/icon_close@2.730c7dc.png"},396:function(t,e,n){"use strict";n(381)},397:function(t,e,n){(n=n(109)(!1)).push([t.i,".cuntdown[data-v-ce47b7d2] {\n  display: inline-block;\n}",""]),t.exports=n},398:function(t,e,n){var i=n(425);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,n(110).default)("e9bff79e",i,!0,{sourceMap:!1})},404:function(t,e,n){"use strict";n.r(e),n(371),n(47),n(69),n(70),n(169),n(384);var i=1e3,r=6e4,a=36e5,o=864e5,s={all:/\{(dd|hh|mm|ss|ms){1}\}/gi,ms:/\{(ms){1}\}/gi,ss:/\{(ss){1}\}/gi,mm:/\{(mm){1}\}/gi,hh:/\{(hh){1}\}/gi,dd:/\{(dd){1}\}/gi,mn:/\{(mn){1}\}/gi,yy:/\{(yy){1}\}/gi},c={name:"cuntdown",props:{hidden:{type:Boolean,default:!1},format:{type:String,default:"{yy}年{mn}月{dd}天{hh}小时{mm}分钟{ss}秒{ms}毫秒"},startTime:{type:Number||String,default:(new Date).getTime()},endTime:{type:Number||String,default:(new Date).getTime()}},data:function(){return{timer:null,stepTime:0}},watch:{stepTime:function(t){var e={ms:this.ms,ss:this.ss,mm:this.mm,hh:this.hh,dd:this.dd};if(t<=0)return this.$emit("end",e);this.$emit("change",e)},startTime:function(){this.stepTime=0,this.init()},endTime:function(){this.stepTime=0,this.init()}},computed:{options_show:function(){return{ms:s.ms.test(this.format),ss:s.ss.test(this.format),mm:s.mm.test(this.format),hh:s.hh.test(this.format),dd:s.dd.test(this.format),mn:s.mn.test(this.format),yy:s.yy.test(this.format)}},ms:function(){return Math.floor(this.stepTime%i)},ss:function(){return this.options_show.mm?Math.floor(this.stepTime%r/i):Math.floor(this.stepTime/i)},mm:function(){return this.options_show.hh?Math.floor(this.stepTime%a/r):Math.floor(this.stepTime/r)},hh:function(){return this.options_show.dd?Math.floor(this.stepTime%o/a):Math.floor(this.stepTime/a)},dd:function(){return this.options_show.mn?this.diff.day:Math.floor(this.stepTime/o)},mn:function(){var t=0<this.diff.year?this.diff.year:0,e=0<this.diff.month?this.diff.month:0;return this.options_show.yy?e:12*t+e-1},yy:function(){return 0<this.diff.year?this.diff.year:0},step_times:function(){return this.options_show.ms?100:1e3},pareStr:function(){return this.format.replace(s.ms,this.zero(this.ms,4)).replace(s.ss,this.zero(this.ss)).replace(s.mm,this.zero(this.mm)).replace(s.hh,this.zero(this.hh)).replace(s.dd,this.zero(this.dd)).replace(s.mn,this.zero(this.mn)).replace(s.yy,this.zero(this.yy))},diff:function(){var t=new Date(this.endTime),e=new Date(this.startTime);isNaN(t)||isNaN(e);var n=e.getFullYear(),i=e.getMonth()+1,r=e.getDate(),a=t.getFullYear(),o=t.getMonth()+1,s=t.getDate();return{endDate:t,startDate:e,startYears:n,endYears:a,startMonth:i,endMonth:o,endDay:s,startDay:r,day:s-r,month:o-i,year:a-n}}},methods:{init:function(){var t=this,e=this.step_times;if(clearInterval(this.timer),!(this.startTime>=this.endTime)){if(this.stepTime=this.endTime-this.startTime,this.stepTime<=0)return this.stepTime=0;this.timer=setInterval((function(){t.stepTime=t.stepTime-e,t.stepTime<=0&&(t.stepTime=0,clearInterval(t.timer))}),e)}},zero:function(t){var e=0<(e=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:2)-String(t).length)?new Array(e).fill(0).join(""):"";return Number(t)<10?e+t:t}},filters:{filterZero:function(t){return Number(t)<10?"0"+t:t}},created:function(){this.init()}};n(396),n=n(79),c=Object(n.a)(c,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return t.hidden?t._e():e("div",{staticClass:"cuntdown",domProps:{innerHTML:t._s(t.pareStr)}})}),[],!1,null,"ce47b7d2",null);e.default=c.exports},424:function(t,e,n){"use strict";n(398)},425:function(t,e,n){var i=n(109),r=n(239);n=n(426),i=i(!1),n=r(n);i.push([t.i,".block_time_content[data-v-0becdc74] {\n  font-family: PingFang SC;\n  font-style: normal;\n  position: relative;\n  width: 100%;\n  height: 0.85rem;\n  box-sizing: border-box;\n  background: url("+n+") center center no-repeat;\n  background-size: 100% 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.37rem;\n  color: #ffffff;\n}",""]),t.exports=i},426:function(t,e,n){t.exports=n.p+"img/time_bg.19e0770.png"},446:function(t,e,n){"use strict";n.r(e),n(371),n(60);var i={name:"blindTimeText",components:{Countdown:n(404).default},props:{locale:{type:String,default:function(){return"en"}},info:{type:Object,default:function(){return{status:0,is_owner:0}}},startTime:{type:Number||String,default:0},endTime:{type:Number||String,default:0},format:{type:String,default:"{dd}天{hh}小时{mm}分钟{ss}秒"}},methods:{chountChange:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.$emit.apply(this,["change"].concat(e))},end:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.$emit.apply(this,["end"].concat(e))}}};n(424),n=n(79),i=Object(n.a)(i,(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("div",{staticClass:"block_time_content",attrs:{id:"blindTimeText"}},[0==t.info.status||1==t.info.status?e("span",{staticClass:"color_white"},[t._v(t._s(t.$t("ActivityBlindbox.ActivityBlindboxDetail.invalidTimeText"))+"   ")]):t._e(),t._v(" "),2==t.info.status?e("span",{staticClass:"color_white"},[t._v(t._s(t.$t("ActivityBlindbox.ActivityBlindboxDetail.successfullyTimeText"))+"   ")]):t._e(),t._v(" "),3==t.info.status?e("span",{staticClass:"color_white"},[t._v(t._s(t.$t("ActivityBlindbox.ActivityBlindboxDetail.expiredTimeText"))+"   ")]):t._e(),t._v(" "),0==t.info.status||1==t.info.status?e("Countdown",{staticClass:"color_red",attrs:{startTime:t.startTime,endTime:t.endTime,format:t.format}}):t._e()],1)}),[],!1,null,"0becdc74",null);e.default=i.exports},474:function(t,e,n){var i=n(558);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,n(110).default)("3a2ef04c",i,!0,{sourceMap:!1})},557:function(t,e,n){"use strict";n(474)},558:function(t,e,n){var i=n(109),r=n(239);n=n(389),i=i(!1),n=r(n);i.push([t.i,".qcodeModalwarpper[data-v-77ca09a3] {\n  width: 100vw;\n  z-index: 100;\n}\n.qcodeModalwarpper.hidden[data-v-77ca09a3] {\n  z-index: -10 !important;\n  opacity: 0;\n}\n.qcodeModalwarpper .canvasTmp[data-v-77ca09a3] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.qcodeModalwarpper .close[data-v-77ca09a3] {\n  position: absolute;\n  z-index: 1;\n  top: 1.6rem;\n  right: 0.69rem;\n  width: 0.75rem;\n  height: 0.75rem;\n  background: url("+n+") center center no-repeat;\n  background-size: 100% 100%;\n}\n.qcodeModalwarpper .postershow[data-v-77ca09a3] {\n  width: 9.2rem;\n  height: 14.21rem;\n  max-height: calc(100vh - 3.07rem);\n  margin: 0.48rem auto 0;\n  position: relative;\n}\n.qcodeModalwarpper .postershow img[data-v-77ca09a3] {\n  width: 100%;\n  height: 100%;\n}\n.qcodeModalwarpper .poster_wrapper[data-v-77ca09a3] {\n  position: relative;\n  width: 9.2rem;\n  height: 14.24rem;\n  max-height: calc(100vh - 3.07rem);\n  margin: 0.48rem auto 0;\n  position: relative;\n}\n.qcodeModalwarpper .poster_wrapper .poster_bg[data-v-77ca09a3] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title[data-v-77ca09a3] {\n  left: 0.43rem;\n  bottom: 0.59rem;\n  position: absolute;\n  font-weight: 500;\n  font-size: 0.32rem;\n  line-height: 0.48rem;\n  color: #ffffff;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title .logo[data-v-77ca09a3] {\n  width: 2.4rem;\n  height: 0.64rem;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title .title[data-v-77ca09a3] {\n  margin-top: 0.27rem;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title .content[data-v-77ca09a3] {\n  width: 5.84rem;\n  word-break: break-all;\n  word-wrap: break-word;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title .content.en[data-v-77ca09a3] {\n  line-height: 0.35rem;\n}\n.qcodeModalwarpper .poster_wrapper .poster_qrcode[data-v-77ca09a3] {\n  position: absolute;\n  right: 0.48rem;\n  bottom: 0.53rem;\n  width: 1.6rem;\n  height: 1.6rem;\n  box-shadow: inset 0 0.03rem 0 rgba(255,255,255,0.4),inset 0 -0.03rem 0 rgba(255,255,255,0.15);\n  border-radius: 0.21rem;\n}\n.qcodeModalwarpper .footer[data-v-77ca09a3] {\n  margin-top: 0.4rem;\n  display: flex;\n  justify-content: center;\n}\n.qcodeModalwarpper .footer .left[data-v-77ca09a3] {\n  margin-right: 0.51rem;\n}\n.qcodeModalwarpper .footer .btn[data-v-77ca09a3] {\n  display: flex;\n  width: 4.32rem;\n  height: 1.33rem;\n  font-size: 0.43rem;\n  background: linear-gradient(122.71deg, #5aebff 3.38%, #6d39ff 92.57%),#c4c4c4;\n  border-radius: 2.67rem;\n  font-weight: 600;\n  color: #ffffff;\n  justify-content: center;\n  align-items: center;\n}\n.qcodeModalwarpper .footer .btn img[data-v-77ca09a3] {\n  width: 0.53rem;\n  height: 0.53rem;\n  margin-right: 0.16rem;\n}",""]),t.exports=i},569:function(t,e,i){"use strict";i.r(e);var n=i(14),r=(i(68),i(47),i(69),i(407)),a=i.n(r),o=i(386),s=(r=i(410),i.n(r)),c=(r=i(446),i(164));o={name:"CrearePoster",mixins:[o.a],components:{BlindTimeText:r.default},props:{locale:{default:"en"},zIndex:{default:100},isBitKeep:{default:!1},qrcodeText:{default:""},info:{default:function(){return{status:0,is_owner:0}}},format:{default:function(){return"{dd}天{hh}小时{mm}分钟{ss}秒"}},startTime:{default:function(){return 0}},endTime:{default:function(){return 0}}},computed:{proxy_img:function(){var t=this.info.invite_image1||"";return t?"/poster".concat(t.replace("http://cdn.bitkeep.vip","").replace("https://cdn.bitkeep.vip","")):""},codeText:function(){return this.qrcodeText||location.href}},data:function(){return{showModal:!1,qrcodeUrl:"",poster:{url:""},pedding:!1}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.toDataURL(t.codeText,{errorCorrectionLevel:"H",quality:100,color:{}}).catch((function(t){return""}));case 2:t.qrcodeUrl=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{init:function(){this.showModal=!0,this.pedding&&this.showLoading(this.$t("ActivityBlindbox.toast.Generating"))},createPoster:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.pedding)return e.abrupt("return",t.showLoading(t.$t("ActivityBlindbox.toast.Generating")));e.next=2;break;case 2:if(t.showModal&&t.showLoading(t.$t("ActivityBlindbox.toast.Generating")),t.pedding=!0,t.poster.url="",r=t.$refs.poster,t.qrcodeUrl){e.next=12;break}return e.next=9,a.a.toDataURL(t.codeText).catch((function(t){return""}));case 9:return t.qrcodeUrl=e.sent,e.next=12,t.$nextTick();case 12:s()(r,{dpi:Object(c.a)(),width:r.offsetWidth-1,height:r.offsetHeight-1,scale:3,async:!0,scrollY:0,scrollX:0,allowTaint:!1}).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.poster.url=n.toDataURL("image/jpeg"),e.next=3,t.$nextTick();case 3:t.pedding=!1,t.hideLoading();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.pedding=!1,t.$toast.fail(JSON.stringify(e))}));case 15:case"end":return e.stop()}}),e)})))()},shareImage:function(){BitKeepInvoke.shareUrl("",this.$t("ActivityBlindbox.shared.content"),location.href,this.info.cover_image,console.log)},saveImage:function(){var t=this;this.poster.url?(this.showLoading(this.$t("ActivityBlindbox.toast.Saving")),BitKeepInvoke.saveImageFromBase64(this.poster.url,(function(e){t.hideLoading()}))):this.createPoster()}}},i(557),r=i(79),o=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-overlay",{class:{qcodeModalwarpper:!0,hidden:!t.showModal},attrs:{show:!0}},[n("canvas",{ref:"qrcode",staticClass:"canvasTmp"}),t._v(" "),n("div",{on:{click:function(t){t.stopPropagation()}}},[n("BlindTimeText",{staticClass:"block_time",attrs:{info:t.info,startTime:t.startTime,endTime:t.endTime,format:t.format}}),t._v(" "),n("span",{staticClass:"close",attrs:{name:"close"},on:{click:function(e){t.showModal=!1}}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.poster.url,expression:"!poster.url"}],ref:"poster",staticClass:"poster_wrapper",attrs:{id:"poster"}},[n("img",{staticClass:"poster_bg",attrs:{src:t.proxy_img,alt:""},on:{load:t.createPoster}}),t._v(" "),n("div",{staticClass:"commany_title"},[n("img",{staticClass:"logo",attrs:{src:i(387),alt:""}}),t._v(" "),n("div",{class:((e={content:!0})[t.locale]=!0,e)},[n("div",[t._v("\n            "+t._s(t.$t("ActivityBlindbox.ActivityBlindboxDetail.ScanBlindBox"))+"\n          ")]),t._v(" "),n("div",[t._v("\n            "+t._s(t.$t("ActivityBlindbox.ActivityBlindboxDetail.DownloadBitkeep"))+"\n          ")])])]),t._v(" "),n("img",{staticClass:"poster_qrcode",attrs:{src:t.qrcodeUrl}})]),t._v(" "),t.poster.url?n("div",{staticClass:"postershow"},[n("img",{attrs:{src:t.poster.url}})]):t._e(),t._v(" "),n("div",{staticClass:"footer"},[t.isBitKeep||t.pedding?n("div",{staticClass:"btn left",on:{click:t.saveImage}},[n("img",{attrs:{src:i(379),alt:""}}),t._v(" "),n("span",[t._v(t._s(t.$t("ActivityBlindbox.button.savePicture")))])]):n("a",{staticClass:"btn left",attrs:{href:t.poster.url,download:(new Date).getTime()+".jpeg"}},[n("img",{attrs:{src:i(379),alt:""}}),t._v(" "),n("span",[t._v(t._s(t.$t("ActivityBlindbox.button.savePicture")))])]),t._v(" "),t.isBitKeep?n("div",{staticClass:"btn",on:{click:t.shareImage}},[n("img",{attrs:{src:i(380),alt:""}}),t._v(" "),n("span",[t._v(t._s(t.$t("ActivityBlindbox.button.ShareLink")))])]):n("div",{staticClass:"btn"},[n("img",{attrs:{src:i(380),alt:""}}),t._v(" "),n("span",[t._v(t._s(t.$t("ActivityBlindbox.button.ShareLink")))])])])],1)])}),[],!1,null,"77ca09a3",null);e.default=o.exports}}]);