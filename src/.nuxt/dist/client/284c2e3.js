(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{408:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFaSURBVHgB7ZiNTcMwEIUvFQN0BI9QNggTMEJHgA0Im3QDYILSCdoNwgawQXiHbCm4ieNz7DiV/ElPTc9q9ck/pyREhULBn67rFPLd5aNFdn2njeXYIFvKh0Ke+oUNrZw7x9gJOdAy7JF6aMAl2FZVdaAFwL6rx8ZueokH0adMIRfM8BclxnsGdQs64vKMvCHcEl4oMZIlbuh6Izeu/RMDieDjSH1PCUl2SDCz2xizKxH8GKmf7II+SC1yxPWZZSkQieAzcrFqr3av1HJ8mIzU3/dQSe82A5EffNzrZVPIu6655MiSfLB/E02wJ/o5VHfIGYIkoxwSDzmDeLlnCwrkDCLJWYIBcgZvyWDBGXIGL8kgwQhyhsn/Cb2biSFn2OkMIprBBHKTSG63FpdjvARzyTGTgjnlGKdgbjnGJagosxzjajM1rYDVP3b+g/ecfoGTC35xpahQKPjzC6Ozn3JRmGUSAAAAAElFTkSuQmCC"},409:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFESURBVHgB7ZbRTQMxDIb/IAZgBSaADThGYAJgEsQITFBGYANggh4bsEG7QWpLeYjS5M6Ok1Mf8klWpF7sfk3qXIDBYKDHe/9GcfAydpn8G4q9V6IR1LAr1FBL5upcoRPOuSMNjxQzDFwL5nxS/C48/y89YElaGJb8prhHK5KVf4ER6XbncrttcUzY7idUsIkgryANX6igu2CQ+6G4QwVdBQtyfxS3sHR3iyYJjTEnteYgnW0cTXGT4JpcMm+/qaBULicJKbWCWrlUElJqBGvl4nxI0Qpa5ZZoeczE/yE+SqbwBjEhuSysklwKHBrJMU0EmUgSreSYZoKMVox+0ETDc5T/Kk1Ud3ENXDv+otycTW4zFoaglSFo5eIFJefgg1fchJRMaxNc7kPf0WgJOqjPfEpb3OxVZaUk+IFt4QV5x2Aw0HMCShN+nd/b/wkAAAAASUVORK5CYII="},410:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));e=n(61),e=n(43),e=n(60),e=n(84),e=n(51),e=n(85);var r=n(4),o=n(38);e=n(18),e=n(255),e=n(59),e=n(58),n=n(94);function i(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)),r}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t){return((0<arguments.length&&void 0!==t?t:"")||"").toLowerCase()}var c={computed:a(a({},Object(n.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep}}),created:function(){},methods:{addCoin:function(t,e,n){var i=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i.isBitKeep){r.next=2;break}return r.abrupt("return");case 2:return r.prev=2,r.next=5,i._addCoin(t,e,n);case 5:r.next=10;break;case 7:r.prev=7,r.t0=r.catch(2);case 10:case"end":return r.stop()}}),r,null,[[2,7]])})))()},_addCoin:function(t,e,n){return new Promise((function(r){window.BitKeepInvoke.addCoin(t,e,n,(function(t,e){return t?r(!1):e?r(!0):void r(!1)}))}))},_isCoinHas:function(t,i){return new Promise((function(e){window.BitKeepInvoke.getCoins((function(n,r){return n?e(!1):r?(r=r.find((function(e){return"".concat(s(e.chain),"_").concat(s(e.contract))=="".concat(s(t),"_").concat(s(i))})),e(r)):void e(!1)}))}))},showLoading:function(t){this.Toast=this.$toast.loading({duration:0,forbidClick:!0,message:t||""})},hideLoading:function(){this.Toast&&this.Toast.clear()}}}},553:function(t,e,n){},589:function(t,e,n){"use strict";n(553)},676:function(t,e,n){"use strict";n.r(e);var i=n(4),r=(n(58),n(50),n(74),n(585)),o=n.n(r),a=n(410),s=(r=n(588),n.n(r)),c=n(172);r={name:"CrearePoster",mixins:[a.a],props:{locale:{default:"en"},zIndex:{default:100},isBitKeep:{default:!1},userInfo:{default:""},info:{default:function(){return{status:0,is_owner:0}}}},computed:{proxy_img:function(){return"/poster".concat("https://cdn.bitkeep.vip/u_b_c474a860-a020-11ec-b054-8b7edc051038.jpeg".replace("https://cdn.bitkeep.vip","").replace("https://cdn.bitkeep.vip",""))},codeText:function(){return location.href+"/detail?token="+this.userInfo}},data:function(){return{showModal:!1,qrcodeUrl:"",poster:{url:""},pedding:!1}},mounted:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.toDataURL(t.codeText,{errorCorrectionLevel:"H",quality:100}).catch((function(t){return""}));case 2:t.qrcodeUrl=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{init:function(){this.showModal=!0,this.pedding&&this.showLoading(this.$t("ActivityBlindbox.toast.Generating"))},createPoster:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.pedding)return e.abrupt("return",t.showLoading(t.$t("ActivityBlindbox.toast.Generating")));e.next=2;break;case 2:if(t.showModal&&t.showLoading(t.$t("ActivityBlindbox.toast.Generating")),t.pedding=!0,t.poster.url="",n=t.$refs.poster,t.qrcodeUrl){e.next=12;break}return e.next=9,o.a.toDataURL(t.codeText).catch((function(t){return""}));case 9:return t.qrcodeUrl=e.sent,e.next=12,t.$nextTick();case 12:s()(n,{dpi:Object(c.a)(),width:n.offsetWidth-1,height:n.offsetHeight-1,scale:3,async:!0,scrollY:0,scrollX:0,allowTaint:!1}).then(function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.poster.url=n.toDataURL("image/jpeg"),e.next=3,t.$nextTick();case 3:t.pedding=!1,t.hideLoading();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.pedding=!1,t.$toast.fail(JSON.stringify(e))}));case 15:case"end":return e.stop()}}),e)})))()},shareImage:function(){BitKeepInvoke.shareUrl(this.$t("blindboxInvite.inviteTitle"),this.$t("ActivityBlindbox.shared.content"),location.href+"/detail?token="+this.userInfo,this.info.cover_image,console.log)},saveImage:function(){var t=this;this.poster.url?(this.showLoading(this.$t("ActivityBlindbox.toast.Saving")),BitKeepInvoke.saveImageFromBase64(this.poster.url,(function(e){t.hideLoading()}))):this.createPoster()}}},n(589),a=n(37),r=Object(a.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("van-overlay",{class:{qcodeModalwarpper:!0,hidden:!t.showModal},attrs:{show:!0}},[r("canvas",{ref:"qrcode",staticClass:"canvasTmp"}),t._v(" "),r("div",{staticClass:"overlayBox",on:{click:function(t){t.stopPropagation()}}},[r("span",{staticClass:"close",attrs:{name:"close"},on:{click:function(e){t.showModal=!1}}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.poster.url,expression:"!poster.url"}],ref:"poster",staticClass:"poster_wrapper",attrs:{id:"poster"}},[r("img",{staticClass:"poster_bg",attrs:{src:t.proxy_img,alt:""},on:{load:t.createPoster}}),t._v(" "),r("div",{staticClass:"commany_title"},[r("div",{class:((e={content:!0})[t.locale]=!0,e)},[r("div",[t._v("\n            "+t._s(t.$t("blindboxInvite.Poster"))+"\n          ")]),t._v(" "),r("div",[t._v("\n            "+t._s(t.$t("blindboxInvite.downReward"))+"\n          ")])])]),t._v(" "),r("div",{staticClass:"imgText"},[t._v(t._s(t.$t("blindboxInvite.imgText")))]),t._v(" "),r("img",{staticClass:"poster_qrcode",attrs:{src:t.qrcodeUrl}})]),t._v(" "),t.poster.url?r("div",{staticClass:"postershow"},[r("img",{attrs:{src:t.poster.url}})]):t._e(),t._v(" "),r("div",{staticClass:"footer"},[t.isBitKeep||t.pedding?r("div",{staticClass:"btn left",on:{click:t.saveImage}},[r("img",{attrs:{src:n(408),alt:""}}),t._v(" "),r("span",[t._v(t._s(t.$t("blindboxInvite.savePicture")))])]):r("a",{staticClass:"btn left",attrs:{href:t.poster.url,download:(new Date).getTime()+".jpeg"}},[r("img",{attrs:{src:n(408),alt:""}}),t._v(" "),r("span",[t._v(t._s(t.$t("blindboxInvite.savePicture")))])]),t._v(" "),t.isBitKeep?r("div",{staticClass:"btn",on:{click:t.shareImage}},[r("img",{attrs:{src:n(409),alt:""}}),t._v(" "),r("span",[t._v(t._s(t.$t("blindboxInvite.ShareLink")))])]):r("div",{staticClass:"btn"},[r("img",{attrs:{src:n(409),alt:""}}),t._v(" "),r("span",[t._v(t._s(t.$t("blindboxInvite.ShareLink")))])])])])])}),[],!1,null,"2ad7cb24",null);e.default=r.exports}}]);