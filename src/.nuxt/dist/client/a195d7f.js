(window.webpackJsonp=window.webpackJsonp||[]).push([[36,32,33],{373:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n(60);t=n(20);var r=n(94),a=(t=n.n(r),n(2)),o=n(93),i=(n(92),function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];(e=console).log.apply(e,["bit-activity-request:"].concat(n))}),c=t.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});c.interceptors.request.use((function(e){var t,n,r;return i("requestlog:",e),a.a.prototype.$store&&(n=(r=(t=a.a.prototype.$store.state).local).UA,r=r.locale,n.isBitKeep?Object.assign(e.headers,t.local.bitkeep,{language:r}):Object.assign(e.headers,{language:r})),e}),(function(e){return Promise.resolve({status:1})})),c.interceptors.response.use((function(e){return e.data}),(function(e){!function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];(e=console).log.apply(e,["bit-activity-response:"].concat(n))}("responselog:",e);var t="网路开了小差";t=(e=Object(o.b)()||{}).t?e.t("base.networkErro"):t;return Promise.resolve({status:1,data:t})}));var s={mBoxList:function(e){return c.get("user/activity/mBoxList",{params:e,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(e){return c.get("user/activity/openMBox",{params:e})},helpMBox:function(e){return c.get("user/activity/helpMBox",{params:e})},userInviteList:function(e){return c.get("user/activity/inviteList",{params:e})},mBoxDetail:function(e){return c.get("user/activity/mBoxDetail",{params:e})},getCbkbSwapInfo:function(e){return c.get("user/cloudwallet/getCbkbSwapInfo",{params:e})},swapBkb:function(e){return c.get("user/cloudwallet/swapBkb",{params:e})},getAirDropCount:function(e){return c.post("user/cloudwallet/getAirDropCount",e)},getAirDrop:function(e){return c.post("user/cloudwallet/getAirDrop",e)},miningInfo:function(e){return c.post("swap/mining/info",e)},historyPhase:function(e){return c.post("swap/mining/historyPhase",e)},receiveAward:function(e){return c.post("swap/mining/receiveAward",e)},getInviteList:function(e){return c.post("user/friendship/getInviteList",e)},certifyFriendship:function(e){return c.post("user/friendship/certifyFriendship",e)},activityDoneRewardList:function(e){return c.post("swap/mining/activityDoneRewardList",e)},poolList:function(e){return c.post("/user/cloudstaking/poolList",e)},myPool:function(e){return c.post("/user/cloudstaking/myPool",e)},stakeHistory:function(e){return c.post("/user/cloudstaking/stakeHistory",e)},receiveStakingReward:function(e){return c.post("/user/cloudstaking/receiveStakingReward",e)},staking:function(e){return c.post("/user/cloudstaking/staking",e)},handleGetToken:function(e){return c.post("/user/cloudstaking/getToken",e)},tradingGetList:function(e){return c.post("swap/tradeCompetition/getList",e)},tradingWaitClaim:function(e){return c.post("swap/tradeCompetition/waitClaim",e)},tradingClaim:function(e){return c.post("swap/tradeCompetition/claim",e)},tradingSummary:function(e){return c.post("swap/tradeCompetition/summary",e)},tradingHistory:function(e){return c.post("swap/tradeCompetition/history",e)},welfareSignIn:function(e){return c.post("user/welfare/signIn",e)},getRewardDetail:function(e){return c.post("user/welfare/getRewardDetail",e)},getSignInDetailByUser:function(e){return c.post("user/welfare/getSignInDetailByUser",e)},getRewardResult:function(e){return c.post("user/welfare/getRewardResult",e)},pushPapersIn:function(e){return c.post("user/welfare/pushPapersIn",e)},getJoinTeleJob:function(e){return c.post("user/welfare/getJoinTeleJob",e)},getFirstSwapJob:function(e){return c.post("user/welfare/getFirstSwapJob",e)},getFirst50UJob:function(e){return c.post("user/welfare/getFirst50UJob",e)},newUserRewardJobs:function(e){return c.post("user/welfare/newUserRewardJobs",e)}}},383:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFaSURBVHgB7ZiNTcMwEIUvFQN0BI9QNggTMEJHgA0Im3QDYILSCdoNwgawQXiHbCm4ieNz7DiV/ElPTc9q9ck/pyREhULBn67rFPLd5aNFdn2njeXYIFvKh0Ke+oUNrZw7x9gJOdAy7JF6aMAl2FZVdaAFwL6rx8ZueokH0adMIRfM8BclxnsGdQs64vKMvCHcEl4oMZIlbuh6Izeu/RMDieDjSH1PCUl2SDCz2xizKxH8GKmf7II+SC1yxPWZZSkQieAzcrFqr3av1HJ8mIzU3/dQSe82A5EffNzrZVPIu6655MiSfLB/E02wJ/o5VHfIGYIkoxwSDzmDeLlnCwrkDCLJWYIBcgZvyWDBGXIGL8kgwQhyhsn/Cb2biSFn2OkMIprBBHKTSG63FpdjvARzyTGTgjnlGKdgbjnGJagosxzjajM1rYDVP3b+g/ecfoGTC35xpahQKPjzC6Ozn3JRmGUSAAAAAElFTkSuQmCC"},384:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFESURBVHgB7ZbRTQMxDIb/IAZgBSaADThGYAJgEsQITFBGYANggh4bsEG7QWpLeYjS5M6Ok1Mf8klWpF7sfk3qXIDBYKDHe/9GcfAydpn8G4q9V6IR1LAr1FBL5upcoRPOuSMNjxQzDFwL5nxS/C48/y89YElaGJb8prhHK5KVf4ER6XbncrttcUzY7idUsIkgryANX6igu2CQ+6G4QwVdBQtyfxS3sHR3iyYJjTEnteYgnW0cTXGT4JpcMm+/qaBULicJKbWCWrlUElJqBGvl4nxI0Qpa5ZZoeczE/yE+SqbwBjEhuSysklwKHBrJMU0EmUgSreSYZoKMVox+0ETDc5T/Kk1Ud3ENXDv+otycTW4zFoaglSFo5eIFJefgg1fchJRMaxNc7kPf0WgJOqjPfEpb3OxVZaUk+IFt4QV5x2Aw0HMCShN+nd/b/wkAAAAASUVORK5CYII="},391:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={created:function(){},methods:{showLoading:function(e){this.Toast=this.$toast.loading({duration:0,forbidClick:!0,message:e||""})},hideLoading:function(){this.Toast&&this.Toast.clear()}}}},534:function(e,t,n){var r=n(566);(r="string"==typeof(r=r.__esModule?r.default:r)?[[e.i,r,""]]:r).locals&&(e.exports=r.locals),(0,n(110).default)("7296052c",r,!0,{sourceMap:!1})},565:function(e,t,n){"use strict";n(534)},566:function(e,t,n){(n=n(109)(!1)).push([e.i,'.qcodeModalwarpper[data-v-6d3efd6b] {\n  width: 100vw;\n  z-index: 100;\n}\n.qcodeModalwarpper.hidden[data-v-6d3efd6b] {\n  z-index: -10 !important;\n  opacity: 0;\n}\n.qcodeModalwarpper .canvasTmp[data-v-6d3efd6b] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.qcodeModalwarpper .close[data-v-6d3efd6b] {\n  position: absolute;\n  z-index: 1;\n  top: 0.69rem;\n  right: 0.69rem;\n  width: 0.75rem;\n  height: 0.75rem;\n  background: url("https://cdn.bitkeep.vip/u_b_a1752190-5e77-11ec-b5be-b5b1720a6926.png") center center no-repeat;\n  background-size: 100% 100%;\n}\n.qcodeModalwarpper .postershow[data-v-6d3efd6b] {\n  width: 9.2rem;\n  height: 14.21rem;\n  max-height: calc(100vh - 3.07rem);\n  margin: 0.48rem auto 0;\n  position: relative;\n}\n.qcodeModalwarpper .postershow img[data-v-6d3efd6b] {\n  width: 100%;\n  height: 100%;\n}\n.qcodeModalwarpper .poster_wrapper[data-v-6d3efd6b] {\n  position: relative;\n  width: 9.2rem;\n  height: 14.24rem;\n  max-height: calc(100vh - 3.07rem);\n  margin: 0.48rem auto 0;\n  position: relative;\n}\n.qcodeModalwarpper .poster_wrapper .poster_bg[data-v-6d3efd6b] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.qcodeModalwarpper .poster_wrapper .imgText[data-v-6d3efd6b] {\n  position: absolute;\n  top: 0.53rem;\n  left: 0.53rem;\n  width: 7.33rem;\n  font-size: 0.69rem;\n  color: #080D21;\n  font-weight: bold;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title[data-v-6d3efd6b] {\n  left: 0.43rem;\n  bottom: 0.59rem;\n  position: absolute;\n  font-size: 0.32rem;\n  line-height: 0.48rem;\n  color: #080D21;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title .logo[data-v-6d3efd6b] {\n  width: 2.4rem;\n  height: 0.64rem;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title .title[data-v-6d3efd6b] {\n  margin-top: 0.27rem;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title .content[data-v-6d3efd6b] {\n  width: 4.4rem;\n  margin-left: 0.13rem;\n  word-wrap: break-word;\n  line-height: 0.37rem;\n}\n.qcodeModalwarpper .poster_wrapper .poster_qrcode[data-v-6d3efd6b] {\n  position: absolute;\n  right: 0.53rem;\n  bottom: 0.53rem;\n  width: 2.13rem;\n  height: 2.13rem;\n  box-shadow: inset 0 0.03rem 0 rgba(255,255,255,0.4),inset 0 -0.03rem 0 rgba(255,255,255,0.15);\n  border-radius: 0.21rem;\n}\n.qcodeModalwarpper .footer[data-v-6d3efd6b] {\n  margin-top: 0.4rem;\n  display: flex;\n  justify-content: center;\n}\n.qcodeModalwarpper .footer .left[data-v-6d3efd6b] {\n  margin-right: 0.51rem;\n}\n.qcodeModalwarpper .footer .btn[data-v-6d3efd6b] {\n  display: flex;\n  width: 4.32rem;\n  height: 1.33rem;\n  font-size: 0.43rem;\n  background: #495BFF;\n  border-radius: 2.67rem;\n  font-weight: 600;\n  color: #ffffff;\n  justify-content: center;\n  align-items: center;\n}\n.qcodeModalwarpper .footer .btn img[data-v-6d3efd6b] {\n  width: 0.53rem;\n  height: 0.53rem;\n  margin-right: 0.16rem;\n}',""]),e.exports=n},618:function(e,t,n){"use strict";n.r(t);var r=n(369);t.default={bind:function(e,t){t=t.value,e.$value=t,e.handler=function(){var t;e.$value?((t=document.createElement("textarea")).readOnly="readonly",t.style.position="absolute",t.style.left="-9999px",t.value=e.$value,document.body.appendChild(t),t.select(),t.setSelectionRange(0,t.value.length),document.execCommand("Copy")&&Object(r.a)("Copied"),document.body.removeChild(t)):r.a.fail("Some error occurred")},e.addEventListener("click",e.handler)},componentUpdated:function(e,t){t=t.value,e.$value=t},unbind:function(e){e.removeEventListener("click",e.handler)}}},619:function(e,t,n){var r=n(701);(r="string"==typeof(r=r.__esModule?r.default:r)?[[e.i,r,""]]:r).locals&&(e.exports=r.locals),(0,n(110).default)("7b01e552",r,!0,{sourceMap:!1})},661:function(e,t,n){"use strict";n.r(t);var a=n(14),r=(n(68),n(47),n(69),n(561)),o=n.n(r),i=n(391),c=(r=n(564),n.n(r)),d=n(165);r={name:"CrearePoster",mixins:[i.a],props:{locale:{default:"en"},zIndex:{default:100},isBitKeep:{default:!1},userInfo:{default:""},info:{default:function(){return{status:0,is_owner:0}}}},computed:{proxy_img:function(){return"/poster".concat("https://cdn.bitkeep.vip/u_b_792eb450-5e3e-11ec-bd49-b1b354a240c8.png".replace("https://cdn.bitkeep.vip","").replace("https://cdn.bitkeep.vip",""))},codeText:function(){return location.href+"/detail?token="+this.userInfo}},data:function(){return{showModal:!1,qrcodeUrl:"",poster:{url:""},pedding:!1}},mounted:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.toDataURL(e.codeText,{errorCorrectionLevel:"H",quality:100}).catch((function(e){return""}));case 2:e.qrcodeUrl=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{init:function(){this.showModal=!0,this.pedding&&this.showLoading(this.$t("ActivityBlindbox.toast.Generating"))},createPoster:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.pedding)return t.abrupt("return",e.showLoading(e.$t("ActivityBlindbox.toast.Generating")));t.next=2;break;case 2:if(e.showModal&&e.showLoading(e.$t("ActivityBlindbox.toast.Generating")),e.pedding=!0,e.poster.url="",n=e.$refs.poster,e.qrcodeUrl){t.next=12;break}return t.next=9,o.a.toDataURL(e.codeText).catch((function(e){return""}));case 9:return e.qrcodeUrl=t.sent,t.next=12,e.$nextTick();case 12:c()(n,{dpi:Object(d.a)(),width:n.offsetWidth-1,height:n.offsetHeight-1,scale:3,async:!0,scrollY:0,scrollX:0,allowTaint:!1}).then(function(){var t=Object(a.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.poster.url=n.toDataURL("image/jpeg"),t.next=3,e.$nextTick();case 3:e.pedding=!1,e.hideLoading();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.pedding=!1,e.$toast.fail(JSON.stringify(t))}));case 15:case"end":return t.stop()}}),t)})))()},shareImage:function(){BitKeepInvoke.shareUrl("",this.$t("ActivityBlindbox.shared.content"),location.href+"/detail?token="+this.userInfo,this.info.cover_image,console.log)},saveImage:function(){var e=this;this.poster.url?(this.showLoading(this.$t("ActivityBlindbox.toast.Saving")),BitKeepInvoke.saveImageFromBase64(this.poster.url,(function(t){e.hideLoading()}))):this.createPoster()}}},n(565),i=n(79),r=Object(i.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("van-overlay",{class:{qcodeModalwarpper:!0,hidden:!e.showModal},attrs:{show:!0}},[r("canvas",{ref:"qrcode",staticClass:"canvasTmp"}),e._v(" "),r("div",{staticClass:"overlayBox",on:{click:function(e){e.stopPropagation()}}},[r("span",{staticClass:"close",attrs:{name:"close"},on:{click:function(t){e.showModal=!1}}}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.poster.url,expression:"!poster.url"}],ref:"poster",staticClass:"poster_wrapper",attrs:{id:"poster"}},[r("img",{staticClass:"poster_bg",attrs:{src:e.proxy_img,alt:""},on:{load:e.createPoster}}),e._v(" "),r("div",{staticClass:"commany_title"},[r("div",{class:((t={content:!0})[e.locale]=!0,t)},[r("div",[e._v("\n            "+e._s(e.$t("blindboxInvite.Poster"))+"\n          ")]),e._v(" "),r("div",[e._v("\n            "+e._s(e.$t("blindboxInvite.downReward"))+"\n          ")])])]),e._v(" "),r("div",{staticClass:"imgText"},[e._v(e._s(e.$t("blindboxInvite.imgText")))]),e._v(" "),r("img",{staticClass:"poster_qrcode",attrs:{src:e.qrcodeUrl}})]),e._v(" "),e.poster.url?r("div",{staticClass:"postershow"},[r("img",{attrs:{src:e.poster.url}})]):e._e(),e._v(" "),r("div",{staticClass:"footer"},[e.isBitKeep||e.pedding?r("div",{staticClass:"btn left",on:{click:e.saveImage}},[r("img",{attrs:{src:n(383),alt:""}}),e._v(" "),r("span",[e._v(e._s(e.$t("blindboxInvite.savePicture")))])]):r("a",{staticClass:"btn left",attrs:{href:e.poster.url,download:(new Date).getTime()+".jpeg"}},[r("img",{attrs:{src:n(383),alt:""}}),e._v(" "),r("span",[e._v(e._s(e.$t("blindboxInvite.savePicture")))])]),e._v(" "),e.isBitKeep?r("div",{staticClass:"btn",on:{click:e.shareImage}},[r("img",{attrs:{src:n(384),alt:""}}),e._v(" "),r("span",[e._v(e._s(e.$t("blindboxInvite.ShareLink")))])]):r("div",{staticClass:"btn"},[r("img",{attrs:{src:n(384),alt:""}}),e._v(" "),r("span",[e._v(e._s(e.$t("blindboxInvite.ShareLink")))])])])])])}),[],!1,null,"6d3efd6b",null);t.default=r.exports},700:function(e,t,n){"use strict";n(619)},701:function(e,t,n){(n=n(109)(!1)).push([e.i,'.theme-light .textPrimary0[data-v-45d79c4b] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-45d79c4b] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-45d79c4b] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-45d79c4b] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-45d79c4b] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-45d79c4b] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-45d79c4b] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-45d79c4b] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-45d79c4b] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-45d79c4b] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-45d79c4b] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-45d79c4b] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-45d79c4b] {\n  background-color: #495BFF;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-45d79c4b] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-45d79c4b] {\n  background-color: #1CBDB5;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-45d79c4b] {\n  background-color: #080D21;\n}\n.theme-light .colorPrimary[data-v-45d79c4b] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-45d79c4b] {\n  color: #1CBDB5;\n}\n.theme-light .backgroundSecond01[data-v-45d79c4b] {\n  background-color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-45d79c4b] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-45d79c4b] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-45d79c4b] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-45d79c4b] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-45d79c4b] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-45d79c4b] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-45d79c4b] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-45d79c4b] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-45d79c4b] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-45d79c4b] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-45d79c4b] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-45d79c4b] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-45d79c4b] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-45d79c4b] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-45d79c4b] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-45d79c4b] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-45d79c4b] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-45d79c4b] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-45d79c4b] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-45d79c4b] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-45d79c4b] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-45d79c4b] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-45d79c4b] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-45d79c4b] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-45d79c4b] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-45d79c4b] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-45d79c4b] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-45d79c4b] {\n  background-color: #495BFF;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-45d79c4b] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-45d79c4b] {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-45d79c4b] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-45d79c4b] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-45d79c4b] {\n  color: #1CBDB5;\n}\n.theme-dark .backgroundSecond01[data-v-45d79c4b] {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-45d79c4b] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-45d79c4b] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-45d79c4b] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-45d79c4b] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-45d79c4b] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-45d79c4b] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-45d79c4b] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-45d79c4b] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-45d79c4b] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-45d79c4b] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-45d79c4b] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-45d79c4b] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-45d79c4b] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-45d79c4b] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-45d79c4b] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-45d79c4b] {\n  background-color: rgba(255,184,0,0.1);\n}\n.warp-invite[data-v-45d79c4b] {\n  min-height: 100vh;\n}\n.warp-invite .loading[data-v-45d79c4b] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.warp-invite .warp-invite-imgLink[data-v-45d79c4b] {\n  padding: 0 0.43rem 0.27rem;\n}\n.warp-invite .warp-invite-imgLink .setBg[data-v-45d79c4b] {\n  border-radius: 0.21rem;\n  margin-top: 0.27rem;\n}\n.warp-invite .warp-invite-imgLink img[data-v-45d79c4b] {\n  width: 100%;\n}\n.warp-invite .warp-invite-banner[data-v-45d79c4b] {\n  height: 4.27rem;\n  position: relative;\n}\n.warp-invite .warp-invite-banner img[data-v-45d79c4b] {\n  width: 100%;\n}\n.warp-invite .warp-invite-banner .imgText[data-v-45d79c4b] {\n  position: absolute;\n  top: 1.2rem;\n  left: 0.43rem;\n}\n.warp-invite .warp-invite-banner .imgText .imgTextTitle[data-v-45d79c4b] {\n  font-size: 0.69rem;\n  font-weight: bold;\n  line-height: 0.75rem;\n  width: 5.33rem;\n  color: #080D21;\n}\n.warp-invite .warp-invite-banner .imgText .imgTextContent[data-v-45d79c4b] {\n  font-size: 0.32rem;\n  width: 5.87rem;\n  color: #080D21;\n}\n.warp-invite .setTop[data-v-45d79c4b] {\n  position: relative;\n  top: -1.2rem;\n}\n.warp-invite .warp-invite-one[data-v-45d79c4b] {\n  margin: 0.27rem 0.43rem 0;\n  border-radius: 0.21rem;\n  font-size: 0.37rem;\n  line-height: 0.43rem;\n}\n.warp-invite .warp-invite-one .warp-invite-produced[data-v-45d79c4b] {\n  display: flex;\n  height: 1.33rem;\n  line-height: 1.33rem;\n  justify-content: space-between;\n}\n.warp-invite .warp-invite-one .warp-invite-produced .setDisplay[data-v-45d79c4b] {\n  display: flex;\n  align-items: center;\n}\n.warp-invite .warp-invite-one .warp-invite-produced span[data-v-45d79c4b] {\n  font-size: 0.37rem;\n}\n.warp-invite .warp-invite-one .warp-invite-produced span img[data-v-45d79c4b] {\n  width: 0.53rem;\n  height: 0.53rem;\n  margin-right: 0.13rem;\n  vertical-align: sub;\n}\n.warp-invite .warp-invite-one .warp-invite-produced span i[data-v-45d79c4b] {\n  vertical-align: middle;\n  display: inline-block;\n  font-size: 0.37rem;\n}\n.warp-invite .warp-invite-one .warp-invite-produced span[data-v-45d79c4b]:last-child {\n  font-size: 0.48rem;\n}\n.warp-invite .warp-invite-one .warp-invite-one-header[data-v-45d79c4b] {\n  display: flex;\n  justify-content: space-between;\n  height: 0.93rem;\n  line-height: 0.93rem;\n  padding: 0 0.21rem 0 0.4rem;\n}\n.warp-invite .warp-invite-one .warp-invite-one-header .warp-invite-one-header-title span[data-v-45d79c4b] {\n  font-size: 0.48rem;\n  font-family: "bitkeep DIN";\n}\n.warp-invite .warp-invite-one .warp-invite-one-header .warp-invite-one-header-right[data-v-45d79c4b] {\n  padding-right: 0.19rem;\n}\n.warp-invite .warp-invite-one .borderBottom[data-v-45d79c4b] {\n  height: 0.03rem;\n}\n.warp-invite .warp-invite-one .invite-setP[data-v-45d79c4b] {\n  padding: 0 0.4rem 0.03rem;\n}\n.warp-invite .warp-invite-one .warp-invite-link[data-v-45d79c4b] {\n  border-radius: 0.21rem;\n  margin: 0.27rem 0 0.27rem;\n}\n.warp-invite .warp-invite-one .warp-invite-link .warp-invite-link-box[data-v-45d79c4b] {\n  padding: 0.27rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.warp-invite .warp-invite-one .warp-invite-link-btn[data-v-45d79c4b] {\n  height: 1.33rem;\n  line-height: 1.33rem;\n  color: #fff;\n  text-align: center;\n  border-radius: 0.27rem;\n  margin-bottom: 0.53rem;\n  font-size: 0.43rem;\n}',""]),e.exports=n},795:function(e,t,n){"use strict";n.r(t),n(55),n(41),n(61),n(80),n(48),n(81);var r=n(14),a=n(36),o=(n(68),n(91)),i=n(661),c=n(618);function d(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)),r}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(373),o={name:"blindboxInvite",data:function(){return{isLoading:!0,inviteLink:"",inviteLinkAll:""}},directives:{copy:c.default},components:{CreatePoster:i.default},computed:s(s({},Object(o.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep},userInfo:function(){return this.local.userInfo.token}}),created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.isLoading=!1;case 1:case"end":return t.stop()}}),t)})))()},beforeMount:function(){var e=this;this.isBitKeep&&BitKeepInvoke.onLoadReady((function(){BitKeepInvoke.setTitle(e.$t("blindboxInvite.inviteTitle"));var t=location.href+"/detail?token=";e.inviteLink=t+e.userInfo,e.inviteLinkAll=t+e.userInfo,e.getSub(),e.$nextTick((function(){BitKeepInvoke.setIconAction(),BitKeepInvoke.appMode((function(e,t){var n=document.getElementsByTagName("body")[0];1==t?n.setAttribute("class","theme-dark"):n.setAttribute("class","theme-light")}))}))}))},methods:{getSub:function(){var e=JSON.parse(JSON.stringify(this.inviteLink)),t=e.substring(0,14);this.inviteLink=t+" .... "+e.substr(-15)},inviteFriendList:function(){this.$router.push("/activity/blindboxInvite/inviteList")},rewardsList:function(){this.$router.push("/activity/blindboxInvite/rewardList")},toReward:function(){this.$router.push("/activity/mining")},inviteFirends:function(){this.$refs.CreatePoster&&this.$refs.CreatePoster.init()}}},n(700),n=n(79),o=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(t=e._self._c||t)("div",{staticClass:"warp-invite colorBackground0"},[e.isLoading?t("div",{staticClass:"loading"},[t("van-loading",{attrs:{color:"#1989fa",vertical:""}},[e._v(e._s(e.$t("base.loading"))+"...")])],1):t("div",[t("div",{staticClass:"warp-invite colorBackground0"},[t("div",{staticClass:"warp-invite-banner"},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_d6f84c30-5e3f-11ec-bd49-b1b354a240c8.png"}}),e._v(" "),t("div",{staticClass:"imgText"},[t("div",{staticClass:"imgTextTitle"},[e._v(e._s(e.$t("blindboxInvite.toEarn")))]),e._v(" "),t("div",{staticClass:"imgTextContent"},[e._v(e._s(e.$t("blindboxInvite.rewardsMore")))])])]),e._v(" "),t("div",{staticClass:"warp-invite-one colorBackground1 setTop"},[t("div",{staticClass:"warp-invite-one-header",staticStyle:{"padding-right":"0"}},[t("div",{staticClass:"warp-invite-one-header-title textPrimary0"},[t("span",[e._v(e._s(e.$t("blindboxInvite.myRewards")))])])]),e._v(" "),t("div",{staticClass:"invite-setP"},[t("div",{staticClass:"warp-invite-produced",on:{click:e.inviteFriendList}},[t("span",{staticClass:"textSecond1"},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e7b661f0-5427-11ec-a16d-43771b230a03.png",alt:""}}),e._v(e._s(e.$t("blindboxInvite.invitedNumber")))]),e._v(" "),t("span",{staticClass:"setFontFamily setDisplay textPrimary0"},[t("van-icon",{attrs:{name:"arrow",color:"#999BA3"}})],1)]),e._v(" "),t("div",{staticClass:"warp-invite-produced",on:{click:e.rewardsList}},[t("span",{staticClass:"textSecond1"},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e7b6fe30-5427-11ec-a16d-43771b230a03.png",alt:""}}),e._v(e._s(e.$t("blindboxInvite.tokenRewards")))]),e._v(" "),t("span",{staticClass:"setFontFamily"},[t("van-icon",{attrs:{name:"arrow",color:"#999BA3"}})],1)])])]),e._v(" "),t("div",{staticClass:"warp-invite-one colorBackground1 setTop"},[t("div",{staticClass:"warp-invite-one-header",staticStyle:{"padding-right":"0"}},[t("div",{staticClass:"warp-invite-one-header-title"},[t("span",{staticClass:"textPrimary0"},[e._v(e._s(e.$t("blindboxInvite.inviteFriends")))])])]),e._v(" "),t("div",{staticClass:"invite-setP"},[t("div",{staticClass:"warp-invite-link colorBackground3"},[t("div",{directives:[{name:"copy",rawName:"v-copy",value:e.inviteLinkAll,expression:"inviteLinkAll"}],staticClass:"warp-invite-link-box"},[t("span",[t("span",{staticClass:"textSecond2"},[e._v(e._s(e.$t("blindboxInvite.inviteLink"))),t("br"),e._v(" "),t("span",{staticClass:"warp-invite-address textPrimary0"},[e._v(e._s(e.inviteLink))])])]),e._v(" "),t("span",{staticClass:"setFontFamily"},[t("van-icon",{attrs:{name:"https://cdn.bitkeep.vip/u_b_1a477b90-3579-11ec-8690-93c311cd0b88.png"}})],1)])]),e._v(" "),t("div",{staticClass:"warp-invite-link-btn colorBackgroundPrimary",on:{click:e.inviteFirends}},[e._v("\n                "+e._s(e.$t("blindboxInvite.inviteFriendsNow"))+"\n              ")])])]),e._v(" "),t("div",{staticClass:"warp-invite-imgLink setTop"})])]),e._v(" "),t("CreatePoster",{ref:"CreatePoster",attrs:{locale:e.locale,zIndex:100,isBitKeep:e.isBitKeep,userInfo:e.userInfo}})],1)}),[],!1,null,"45d79c4b",null),t.default=o.exports}}]);