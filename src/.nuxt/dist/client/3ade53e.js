(window.webpackJsonp=window.webpackJsonp||[]).push([[36,32,33],{371:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n(60);t=n(20);var a=n(95),r=(t=n.n(a),n(2)),i=n(94),o=(n(92),function(){for(var e,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];(e=console).log.apply(e,["bit-activity-request:"].concat(n))}),s=t.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});s.interceptors.request.use((function(e){var t,n,a;return o("requestlog:",e),r.a.prototype.$store&&(n=(a=(t=r.a.prototype.$store.state).local).UA,a=a.locale,n.isBitKeep?Object.assign(e.headers,t.local.bitkeep,{language:a}):Object.assign(e.headers,{language:a})),e}),(function(e){return Promise.resolve({status:1})})),s.interceptors.response.use((function(e){return e.data}),(function(e){!function(){for(var e,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];(e=console).log.apply(e,["bit-activity-response:"].concat(n))}("responselog:",e);var t="网路开了小差";t=(e=Object(i.b)()||{}).t?e.t("base.networkErro"):t;return Promise.resolve({status:1,data:t})}));var c={mBoxList:function(e){return s.get("user/activity/mBoxList",{params:e,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(e){return s.get("user/activity/openMBox",{params:e})},helpMBox:function(e){return s.get("user/activity/helpMBox",{params:e})},userInviteList:function(e){return s.get("user/activity/inviteList",{params:e})},mBoxDetail:function(e){return s.get("user/activity/mBoxDetail",{params:e})},getCbkbSwapInfo:function(e){return s.get("user/cloudwallet/getCbkbSwapInfo",{params:e})},swapBkb:function(e){return s.get("user/cloudwallet/swapBkb",{params:e})},getAirDropCount:function(e){return s.post("user/cloudwallet/getAirDropCount",e)},getAirDrop:function(e){return s.post("user/cloudwallet/getAirDrop",e)},miningInfo:function(e){return s.post("swap/mining/info",e)},historyPhase:function(e){return s.post("swap/mining/historyPhase",e)},receiveAward:function(e){return s.post("swap/mining/receiveAward",e)},getInviteList:function(e){return s.post("user/friendship/getInviteList",e)},certifyFriendship:function(e){return s.post("user/friendship/certifyFriendship",e)},activityDoneRewardList:function(e){return s.post("swap/mining/activityDoneRewardList",e)},poolList:function(e){return s.post("/user/cloudstaking/poolList",e)},myPool:function(e){return s.post("/user/cloudstaking/myPool",e)},stakeHistory:function(e){return s.post("/user/cloudstaking/stakeHistory",e)},receiveStakingReward:function(e){return s.post("/user/cloudstaking/receiveStakingReward",e)},staking:function(e){return s.post("/user/cloudstaking/staking",e)},handleGetToken:function(e){return s.post("/user/cloudstaking/getToken",e)},tradingGetList:function(e){return s.post("swap/tradeCompetition/getList",e)},tradingWaitClaim:function(e){return s.post("swap/tradeCompetition/waitClaim",e)},tradingClaim:function(e){return s.post("swap/tradeCompetition/claim",e)},tradingSummary:function(e){return s.post("swap/tradeCompetition/summary",e)},tradingHistory:function(e){return s.post("swap/tradeCompetition/history",e)}}},381:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFaSURBVHgB7ZiNTcMwEIUvFQN0BI9QNggTMEJHgA0Im3QDYILSCdoNwgawQXiHbCm4ieNz7DiV/ElPTc9q9ck/pyREhULBn67rFPLd5aNFdn2njeXYIFvKh0Ke+oUNrZw7x9gJOdAy7JF6aMAl2FZVdaAFwL6rx8ZueokH0adMIRfM8BclxnsGdQs64vKMvCHcEl4oMZIlbuh6Izeu/RMDieDjSH1PCUl2SDCz2xizKxH8GKmf7II+SC1yxPWZZSkQieAzcrFqr3av1HJ8mIzU3/dQSe82A5EffNzrZVPIu6655MiSfLB/E02wJ/o5VHfIGYIkoxwSDzmDeLlnCwrkDCLJWYIBcgZvyWDBGXIGL8kgwQhyhsn/Cb2biSFn2OkMIprBBHKTSG63FpdjvARzyTGTgjnlGKdgbjnGJagosxzjajM1rYDVP3b+g/ecfoGTC35xpahQKPjzC6Ozn3JRmGUSAAAAAElFTkSuQmCC"},382:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFESURBVHgB7ZbRTQMxDIb/IAZgBSaADThGYAJgEsQITFBGYANggh4bsEG7QWpLeYjS5M6Ok1Mf8klWpF7sfk3qXIDBYKDHe/9GcfAydpn8G4q9V6IR1LAr1FBL5upcoRPOuSMNjxQzDFwL5nxS/C48/y89YElaGJb8prhHK5KVf4ER6XbncrttcUzY7idUsIkgryANX6igu2CQ+6G4QwVdBQtyfxS3sHR3iyYJjTEnteYgnW0cTXGT4JpcMm+/qaBULicJKbWCWrlUElJqBGvl4nxI0Qpa5ZZoeczE/yE+SqbwBjEhuSysklwKHBrJMU0EmUgSreSYZoKMVox+0ETDc5T/Kk1Ud3ENXDv+otycTW4zFoaglSFo5eIFJefgg1fchJRMaxNc7kPf0WgJOqjPfEpb3OxVZaUk+IFt4QV5x2Aw0HMCShN+nd/b/wkAAAAASUVORK5CYII="},389:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={created:function(){},methods:{showLoading:function(e){this.Toast=this.$toast.loading({duration:0,forbidClick:!0,message:e||""})},hideLoading:function(){this.Toast&&this.Toast.clear()}}}},532:function(e,t,n){var a=n(564);(a="string"==typeof(a=a.__esModule?a.default:a)?[[e.i,a,""]]:a).locals&&(e.exports=a.locals),(0,n(110).default)("7296052c",a,!0,{sourceMap:!1})},563:function(e,t,n){"use strict";n(532)},564:function(e,t,n){(n=n(109)(!1)).push([e.i,'.qcodeModalwarpper[data-v-6d3efd6b] {\n  width: 100vw;\n  z-index: 100;\n}\n.qcodeModalwarpper.hidden[data-v-6d3efd6b] {\n  z-index: -10 !important;\n  opacity: 0;\n}\n.qcodeModalwarpper .canvasTmp[data-v-6d3efd6b] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.qcodeModalwarpper .close[data-v-6d3efd6b] {\n  position: absolute;\n  z-index: 1;\n  top: 0.69rem;\n  right: 0.69rem;\n  width: 0.75rem;\n  height: 0.75rem;\n  background: url("https://cdn.bitkeep.vip/u_b_a1752190-5e77-11ec-b5be-b5b1720a6926.png") center center no-repeat;\n  background-size: 100% 100%;\n}\n.qcodeModalwarpper .postershow[data-v-6d3efd6b] {\n  width: 9.2rem;\n  height: 14.21rem;\n  max-height: calc(100vh - 3.07rem);\n  margin: 0.48rem auto 0;\n  position: relative;\n}\n.qcodeModalwarpper .postershow img[data-v-6d3efd6b] {\n  width: 100%;\n  height: 100%;\n}\n.qcodeModalwarpper .poster_wrapper[data-v-6d3efd6b] {\n  position: relative;\n  width: 9.2rem;\n  height: 14.24rem;\n  max-height: calc(100vh - 3.07rem);\n  margin: 0.48rem auto 0;\n  position: relative;\n}\n.qcodeModalwarpper .poster_wrapper .poster_bg[data-v-6d3efd6b] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.qcodeModalwarpper .poster_wrapper .imgText[data-v-6d3efd6b] {\n  position: absolute;\n  top: 0.53rem;\n  left: 0.53rem;\n  width: 7.33rem;\n  font-size: 0.69rem;\n  color: #080D21;\n  font-weight: bold;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title[data-v-6d3efd6b] {\n  left: 0.43rem;\n  bottom: 0.59rem;\n  position: absolute;\n  font-size: 0.32rem;\n  line-height: 0.48rem;\n  color: #080D21;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title .logo[data-v-6d3efd6b] {\n  width: 2.4rem;\n  height: 0.64rem;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title .title[data-v-6d3efd6b] {\n  margin-top: 0.27rem;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title .content[data-v-6d3efd6b] {\n  width: 4.4rem;\n  margin-left: 0.13rem;\n  word-wrap: break-word;\n  line-height: 0.37rem;\n}\n.qcodeModalwarpper .poster_wrapper .poster_qrcode[data-v-6d3efd6b] {\n  position: absolute;\n  right: 0.53rem;\n  bottom: 0.53rem;\n  width: 2.13rem;\n  height: 2.13rem;\n  box-shadow: inset 0 0.03rem 0 rgba(255,255,255,0.4),inset 0 -0.03rem 0 rgba(255,255,255,0.15);\n  border-radius: 0.21rem;\n}\n.qcodeModalwarpper .footer[data-v-6d3efd6b] {\n  margin-top: 0.4rem;\n  display: flex;\n  justify-content: center;\n}\n.qcodeModalwarpper .footer .left[data-v-6d3efd6b] {\n  margin-right: 0.51rem;\n}\n.qcodeModalwarpper .footer .btn[data-v-6d3efd6b] {\n  display: flex;\n  width: 4.32rem;\n  height: 1.33rem;\n  font-size: 0.43rem;\n  background: #495BFF;\n  border-radius: 2.67rem;\n  font-weight: 600;\n  color: #ffffff;\n  justify-content: center;\n  align-items: center;\n}\n.qcodeModalwarpper .footer .btn img[data-v-6d3efd6b] {\n  width: 0.53rem;\n  height: 0.53rem;\n  margin-right: 0.16rem;\n}',""]),e.exports=n},616:function(e,t,n){"use strict";n.r(t);var a=n(367);t.default={bind:function(e,t){t=t.value,e.$value=t,e.handler=function(){var t;e.$value?((t=document.createElement("textarea")).readOnly="readonly",t.style.position="absolute",t.style.left="-9999px",t.value=e.$value,document.body.appendChild(t),t.select(),t.setSelectionRange(0,t.value.length),document.execCommand("Copy")&&Object(a.a)("Copied"),document.body.removeChild(t)):a.a.fail("Some error occurred")},e.addEventListener("click",e.handler)},componentUpdated:function(e,t){t=t.value,e.$value=t},unbind:function(e){e.removeEventListener("click",e.handler)}}},617:function(e,t,n){var a=n(693);(a="string"==typeof(a=a.__esModule?a.default:a)?[[e.i,a,""]]:a).locals&&(e.exports=a.locals),(0,n(110).default)("51a71c76",a,!0,{sourceMap:!1})},653:function(e,t,a){"use strict";a.r(t);var n=a(14),r=(a(68),a(47),a(69),a(559)),i=a.n(r),o=a(389),c=(r=a(562),a.n(r)),s=a(165);r={name:"CrearePoster",mixins:[o.a],props:{locale:{default:"en"},zIndex:{default:100},isBitKeep:{default:!1},userInfo:{default:""},info:{default:function(){return{status:0,is_owner:0}}}},computed:{proxy_img:function(){return"/poster".concat("https://cdn.bitkeep.vip/u_b_792eb450-5e3e-11ec-bd49-b1b354a240c8.png".replace("https://cdn.bitkeep.vip","").replace("https://cdn.bitkeep.vip",""))},codeText:function(){return location.href+"/detail?token="+this.userInfo}},data:function(){return{showModal:!1,qrcodeUrl:"",poster:{url:""},pedding:!1}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.toDataURL(e.codeText,{errorCorrectionLevel:"H",quality:100}).catch((function(e){return""}));case 2:e.qrcodeUrl=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{init:function(){this.showModal=!0,this.pedding&&this.showLoading(this.$t("ActivityBlindbox.toast.Generating"))},createPoster:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.pedding)return t.abrupt("return",e.showLoading(e.$t("ActivityBlindbox.toast.Generating")));t.next=2;break;case 2:if(e.showModal&&e.showLoading(e.$t("ActivityBlindbox.toast.Generating")),e.pedding=!0,e.poster.url="",r=e.$refs.poster,e.qrcodeUrl){t.next=12;break}return t.next=9,i.a.toDataURL(e.codeText).catch((function(e){return""}));case 9:return e.qrcodeUrl=t.sent,t.next=12,e.$nextTick();case 12:c()(r,{dpi:Object(s.a)(),width:r.offsetWidth-1,height:r.offsetHeight-1,scale:3,async:!0,scrollY:0,scrollX:0,allowTaint:!1}).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.poster.url=n.toDataURL("image/jpeg"),t.next=3,e.$nextTick();case 3:e.pedding=!1,e.hideLoading();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.pedding=!1,e.$toast.fail(JSON.stringify(t))}));case 15:case"end":return t.stop()}}),t)})))()},shareImage:function(){BitKeepInvoke.shareUrl("",this.$t("ActivityBlindbox.shared.content"),location.href+"/detail?token="+this.userInfo,this.info.cover_image,console.log)},saveImage:function(){var e=this;this.poster.url?(this.showLoading(this.$t("ActivityBlindbox.toast.Saving")),BitKeepInvoke.saveImageFromBase64(this.poster.url,(function(t){e.hideLoading()}))):this.createPoster()}}},a(563),o=a(79),r=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-overlay",{class:{qcodeModalwarpper:!0,hidden:!e.showModal},attrs:{show:!0}},[n("canvas",{ref:"qrcode",staticClass:"canvasTmp"}),e._v(" "),n("div",{staticClass:"overlayBox",on:{click:function(e){e.stopPropagation()}}},[n("span",{staticClass:"close",attrs:{name:"close"},on:{click:function(t){e.showModal=!1}}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.poster.url,expression:"!poster.url"}],ref:"poster",staticClass:"poster_wrapper",attrs:{id:"poster"}},[n("img",{staticClass:"poster_bg",attrs:{src:e.proxy_img,alt:""},on:{load:e.createPoster}}),e._v(" "),n("div",{staticClass:"commany_title"},[n("div",{class:((t={content:!0})[e.locale]=!0,t)},[n("div",[e._v("\n            "+e._s(e.$t("blindboxInvite.Poster"))+"\n          ")]),e._v(" "),n("div",[e._v("\n            "+e._s(e.$t("blindboxInvite.downReward"))+"\n          ")])])]),e._v(" "),n("div",{staticClass:"imgText"},[e._v(e._s(e.$t("blindboxInvite.imgText")))]),e._v(" "),n("img",{staticClass:"poster_qrcode",attrs:{src:e.qrcodeUrl}})]),e._v(" "),e.poster.url?n("div",{staticClass:"postershow"},[n("img",{attrs:{src:e.poster.url}})]):e._e(),e._v(" "),n("div",{staticClass:"footer"},[e.isBitKeep||e.pedding?n("div",{staticClass:"btn left",on:{click:e.saveImage}},[n("img",{attrs:{src:a(381),alt:""}}),e._v(" "),n("span",[e._v(e._s(e.$t("blindboxInvite.savePicture")))])]):n("a",{staticClass:"btn left",attrs:{href:e.poster.url,download:(new Date).getTime()+".jpeg"}},[n("img",{attrs:{src:a(381),alt:""}}),e._v(" "),n("span",[e._v(e._s(e.$t("blindboxInvite.savePicture")))])]),e._v(" "),e.isBitKeep?n("div",{staticClass:"btn",on:{click:e.shareImage}},[n("img",{attrs:{src:a(382),alt:""}}),e._v(" "),n("span",[e._v(e._s(e.$t("blindboxInvite.ShareLink")))])]):n("div",{staticClass:"btn"},[n("img",{attrs:{src:a(382),alt:""}}),e._v(" "),n("span",[e._v(e._s(e.$t("blindboxInvite.ShareLink")))])])])])])}),[],!1,null,"6d3efd6b",null);t.default=r.exports},692:function(e,t,n){"use strict";n(617)},693:function(e,t,n){(n=n(109)(!1)).push([e.i,'.theme-light .textPrimary0[data-v-eaf55354] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-eaf55354] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-eaf55354] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-eaf55354] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-eaf55354] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-eaf55354] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-eaf55354] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-eaf55354] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-eaf55354] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-eaf55354] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-eaf55354] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-eaf55354] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-eaf55354] {\n  background-color: #495BFF;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-eaf55354] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-eaf55354] {\n  background-color: #1CBDB5;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-eaf55354] {\n  background-color: #080D21;\n}\n.theme-light .colorPrimary[data-v-eaf55354] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-eaf55354] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-eaf55354] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-eaf55354] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-eaf55354] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-eaf55354] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-eaf55354] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-eaf55354] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-eaf55354] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-eaf55354] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-eaf55354] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-eaf55354] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-eaf55354] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-eaf55354] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-eaf55354] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-eaf55354] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-eaf55354] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-eaf55354] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-eaf55354] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-eaf55354] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-eaf55354] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-eaf55354] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-eaf55354] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-eaf55354] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-eaf55354] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-eaf55354] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-eaf55354] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-eaf55354] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-eaf55354] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-eaf55354] {\n  background-color: #495BFF;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-eaf55354] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-eaf55354] {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-eaf55354] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-eaf55354] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-eaf55354] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-eaf55354] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-eaf55354] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-eaf55354] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-eaf55354] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-eaf55354] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-eaf55354] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-eaf55354] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-eaf55354] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-eaf55354] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-eaf55354] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-eaf55354] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-eaf55354] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-eaf55354] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-eaf55354] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-eaf55354] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-eaf55354] {\n  background-color: rgba(255,184,0,0.1);\n}\n.warp-invite[data-v-eaf55354] {\n  min-height: 100vh;\n}\n.warp-invite .loading[data-v-eaf55354] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.warp-invite .warp-invite-imgLink[data-v-eaf55354] {\n  padding: 0 0.43rem 0.27rem;\n}\n.warp-invite .warp-invite-imgLink .setBg[data-v-eaf55354] {\n  border-radius: 0.21rem;\n  margin-top: 0.27rem;\n}\n.warp-invite .warp-invite-imgLink img[data-v-eaf55354] {\n  width: 100%;\n}\n.warp-invite .warp-invite-banner[data-v-eaf55354] {\n  height: 4.27rem;\n  position: relative;\n}\n.warp-invite .warp-invite-banner img[data-v-eaf55354] {\n  width: 100%;\n}\n.warp-invite .warp-invite-banner .imgText[data-v-eaf55354] {\n  position: absolute;\n  top: 1.2rem;\n  left: 0.43rem;\n}\n.warp-invite .warp-invite-banner .imgText .imgTextTitle[data-v-eaf55354] {\n  font-size: 0.69rem;\n  font-weight: bold;\n  line-height: 0.75rem;\n  width: 5.33rem;\n  color: #080D21;\n}\n.warp-invite .warp-invite-banner .imgText .imgTextContent[data-v-eaf55354] {\n  font-size: 0.32rem;\n  width: 5.87rem;\n  color: #080D21;\n}\n.warp-invite .setTop[data-v-eaf55354] {\n  position: relative;\n  top: -1.2rem;\n}\n.warp-invite .warp-invite-one[data-v-eaf55354] {\n  margin: 0.27rem 0.43rem 0;\n  border-radius: 0.21rem;\n  font-size: 0.37rem;\n  line-height: 0.43rem;\n}\n.warp-invite .warp-invite-one .warp-invite-produced[data-v-eaf55354] {\n  display: flex;\n  height: 1.33rem;\n  line-height: 1.33rem;\n  justify-content: space-between;\n}\n.warp-invite .warp-invite-one .warp-invite-produced .setDisplay[data-v-eaf55354] {\n  display: flex;\n  align-items: center;\n}\n.warp-invite .warp-invite-one .warp-invite-produced span[data-v-eaf55354] {\n  font-size: 0.37rem;\n}\n.warp-invite .warp-invite-one .warp-invite-produced span img[data-v-eaf55354] {\n  width: 0.53rem;\n  height: 0.53rem;\n  margin-right: 0.13rem;\n  vertical-align: sub;\n}\n.warp-invite .warp-invite-one .warp-invite-produced span i[data-v-eaf55354] {\n  vertical-align: middle;\n  display: inline-block;\n  font-size: 0.37rem;\n}\n.warp-invite .warp-invite-one .warp-invite-produced span[data-v-eaf55354]:last-child {\n  font-size: 0.48rem;\n}\n.warp-invite .warp-invite-one .warp-invite-one-header[data-v-eaf55354] {\n  display: flex;\n  justify-content: space-between;\n  height: 0.93rem;\n  line-height: 0.93rem;\n  padding: 0 0.21rem 0 0.4rem;\n}\n.warp-invite .warp-invite-one .warp-invite-one-header .warp-invite-one-header-title span[data-v-eaf55354] {\n  font-size: 0.48rem;\n  font-family: "bitkeep DIN";\n}\n.warp-invite .warp-invite-one .warp-invite-one-header .warp-invite-one-header-right[data-v-eaf55354] {\n  padding-right: 0.19rem;\n}\n.warp-invite .warp-invite-one .borderBottom[data-v-eaf55354] {\n  height: 0.03rem;\n}\n.warp-invite .warp-invite-one .invite-setP[data-v-eaf55354] {\n  padding: 0 0.4rem 0.03rem;\n}\n.warp-invite .warp-invite-one .warp-invite-link[data-v-eaf55354] {\n  border-radius: 0.21rem;\n  margin: 0.27rem 0 0.27rem;\n}\n.warp-invite .warp-invite-one .warp-invite-link .warp-invite-link-box[data-v-eaf55354] {\n  padding: 0.27rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.warp-invite .warp-invite-one .warp-invite-link-btn[data-v-eaf55354] {\n  height: 1.33rem;\n  line-height: 1.33rem;\n  color: #fff;\n  text-align: center;\n  border-radius: 0.27rem;\n  margin-bottom: 0.53rem;\n  font-size: 0.43rem;\n}',""]),e.exports=n},774:function(e,t,n){"use strict";n.r(t),n(55),n(41),n(61),n(80),n(48),n(81);var a=n(14),r=n(36),i=(n(68),n(91)),o=n(653),c=n(616);function s(e,t){var n,a=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)),a}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(371),i={name:"blindboxInvite",data:function(){return{isLoading:!0,inviteLink:"",inviteLinkAll:""}},directives:{copy:c.default},components:{CreatePoster:o.default},computed:d(d({},Object(i.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep},userInfo:function(){return this.local.userInfo.token}}),created:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.isLoading=!1;case 1:case"end":return t.stop()}}),t)})))()},beforeMount:function(){var e=this;this.isBitKeep&&BitKeepInvoke.onLoadReady((function(){BitKeepInvoke.setTitle(e.$t("blindboxInvite.inviteTitle"));var t=location.href+"/detail?token=";e.inviteLink=t+e.userInfo,e.inviteLinkAll=t+e.userInfo,e.getSub(),e.$nextTick((function(){BitKeepInvoke.setIconAction(),BitKeepInvoke.appMode((function(e,t){var n=document.getElementsByTagName("body")[0];1==t?n.setAttribute("class","theme-dark"):n.setAttribute("class","theme-light")}))}))}))},methods:{getSub:function(){var e=JSON.parse(JSON.stringify(this.inviteLink)),t=e.substring(0,14);this.inviteLink=t+" .... "+e.substr(-15)},inviteFriendList:function(){this.$router.push("/activity/blindboxInvite/inviteList")},rewardsList:function(){this.$router.push("/activity/blindboxInvite/rewardList")},toReward:function(){this.$router.push("/activity/mining")},inviteFirends:function(){this.$refs.CreatePoster&&this.$refs.CreatePoster.init()}}},n(692),n=n(79),i=Object(n.a)(i,(function(){var e=this,t=e.$createElement;return(t=e._self._c||t)("div",{staticClass:"warp-invite colorBackground0"},[e.isLoading?t("div",{staticClass:"loading"},[t("van-loading",{attrs:{color:"#1989fa",vertical:""}},[e._v(e._s(e.$t("base.loading"))+"...")])],1):t("div",[t("div",{staticClass:"warp-invite colorBackground0"},[t("div",{staticClass:"warp-invite-banner"},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_d6f84c30-5e3f-11ec-bd49-b1b354a240c8.png"}}),e._v(" "),t("div",{staticClass:"imgText"},[t("div",{staticClass:"imgTextTitle"},[e._v(e._s(e.$t("blindboxInvite.toEarn")))]),e._v(" "),t("div",{staticClass:"imgTextContent"},[e._v(e._s(e.$t("blindboxInvite.rewardsMore")))])])]),e._v(" "),t("div",{staticClass:"warp-invite-one colorBackground1 setTop"},[t("div",{staticClass:"warp-invite-one-header",staticStyle:{"padding-right":"0"}},[t("div",{staticClass:"warp-invite-one-header-title textPrimary0"},[t("span",[e._v(e._s(e.$t("blindboxInvite.myRewards")))])])]),e._v(" "),t("div",{staticClass:"invite-setP"},[t("div",{staticClass:"warp-invite-produced",on:{click:e.inviteFriendList}},[t("span",{staticClass:"textSecond1"},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e7b661f0-5427-11ec-a16d-43771b230a03.png",alt:""}}),e._v(e._s(e.$t("blindboxInvite.invitedNumber")))]),e._v(" "),t("span",{staticClass:"setFontFamily setDisplay textPrimary0"},[t("van-icon",{attrs:{name:"arrow",color:"#999BA3"}})],1)]),e._v(" "),t("div",{staticClass:"warp-invite-produced",on:{click:e.rewardsList}},[t("span",{staticClass:"textSecond1"},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e7b6fe30-5427-11ec-a16d-43771b230a03.png",alt:""}}),e._v(e._s(e.$t("blindboxInvite.tokenRewards")))]),e._v(" "),t("span",{staticClass:"setFontFamily"},[t("van-icon",{attrs:{name:"arrow",color:"#999BA3"}})],1)])])]),e._v(" "),t("div",{staticClass:"warp-invite-one colorBackground1 setTop"},[t("div",{staticClass:"warp-invite-one-header",staticStyle:{"padding-right":"0"}},[t("div",{staticClass:"warp-invite-one-header-title"},[t("span",{staticClass:"textPrimary0"},[e._v(e._s(e.$t("blindboxInvite.inviteFriends")))])])]),e._v(" "),t("div",{staticClass:"invite-setP"},[t("div",{staticClass:"warp-invite-link colorBackground3"},[t("div",{directives:[{name:"copy",rawName:"v-copy",value:e.inviteLinkAll,expression:"inviteLinkAll"}],staticClass:"warp-invite-link-box"},[t("span",[t("span",{staticClass:"textSecond2"},[e._v(e._s(e.$t("blindboxInvite.inviteLink"))),t("br"),e._v(" "),t("span",{staticClass:"warp-invite-address textPrimary0"},[e._v(e._s(e.inviteLink))])])]),e._v(" "),t("span",{staticClass:"setFontFamily"},[t("van-icon",{attrs:{name:"https://cdn.bitkeep.vip/u_b_1a477b90-3579-11ec-8690-93c311cd0b88.png"}})],1)])]),e._v(" "),t("div",{staticClass:"warp-invite-link-btn colorBackgroundPrimary",on:{click:e.inviteFirends}},[e._v("\n                "+e._s(e.$t("blindboxInvite.inviteFriendsNow"))+"\n              ")])])]),e._v(" "),t("div",{staticClass:"warp-invite-imgLink setTop"},[t("div",{staticClass:"setBg",on:{click:e.toReward}},[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_c9755b00-6206-11ec-9638-bfd886e3565b.png",alt:""}})])])])]),e._v(" "),t("CreatePoster",{ref:"CreatePoster",attrs:{locale:e.locale,zIndex:100,isBitKeep:e.isBitKeep,userInfo:e.userInfo}})],1)}),[],!1,null,"eaf55354",null),t.default=i.exports}}]);