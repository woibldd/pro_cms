/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{360:function(t,e,i){"use strict";i.d(e,"a",(function(){return c})),i(49);e=i(14);var n=i(78),s=(e=i.n(n),i(1)),o=i(77),a=(i(76),function(){for(var t,e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];(t=console).log.apply(t,["bit-activity-request:"].concat(i))}),r=e.a.create({baseURL:"https://b1.bitkeep.top",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"web",os:"",package:"",clientVersion:"",im:""}});r.interceptors.request.use((function(t){var e,i,n;return a("requestlog:",t),s.default.prototype.$store&&(i=(n=(e=s.default.prototype.$store.state).local).UA,n=n.locale,i.isBitKeep?Object.assign(t.headers,e.local.bitkeep,{language:n}):Object.assign(t.headers,{language:n})),t}),(function(t){return Promise.resolve({status:1})})),r.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];(t=console).log.apply(t,["bit-activity-response:"].concat(i))}("responselog:",t);var e="网路开了小差";e=(t=Object(o.b)()||{}).t?t.t("base.networkErro"):e;return Promise.resolve({status:1,data:e})}));var c={mBoxList:function(t){return r.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return r.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return r.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return r.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return r.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return r.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return r.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return r.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return r.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return r.post("swap/mining/info",t)},historyPhase:function(t){return r.post("swap/mining/historyPhase",t)},receiveAward:function(t){return r.post("swap/mining/receiveAward",t)},getInviteList:function(t){return r.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return r.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return r.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return r.post("/user/cloudstaking/poolList",t)},myPool:function(t){return r.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return r.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return r.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return r.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return r.post("/user/cloudstaking/getToken",t)},tradingGetList:function(t){return r.post("swap/tradeCompetition/getList",t)},tradingWaitClaim:function(t){return r.post("swap/tradeCompetition/waitClaim",t)},tradingClaim:function(t){return r.post("swap/tradeCompetition/claim",t)},tradingSummary:function(t){return r.post("swap/tradeCompetition/summary",t)},tradingHistory:function(t){return r.post("swap/tradeCompetition/history",t)},welfareSignIn:function(t){return r.post("user/welfare/signIn",t)},getRewardDetail:function(t){return r.post("user/welfare/getRewardDetail",t)},getSignInDetailByUser:function(t){return r.post("user/welfare/getSignInDetailByUser",t)},getRewardResult:function(t){return r.post("user/welfare/getRewardResult",t)},pushPapersIn:function(t){return r.post("user/welfare/pushPapersIn",t)},getJoinTeleJob:function(t){return r.post("user/welfare/getJoinTeleJob",t)},getFirstSwapJob:function(t){return r.post("user/welfare/getFirstSwapJob",t)},getFirst50UJob:function(t){return r.post("user/welfare/getFirst50UJob",t)},newUserRewardJobs:function(t){return r.post("user/welfare/newUserRewardJobs",t)},nftMintGetInfo:function(t){return r.post("/operationweb/nftmint/getInfo",t)},nftMintInvite:function(t){return r.post("/operationweb/nftmint/invite",t)},buildNftMintTxs:function(t){return r.post("/operationweb/nftmint/buildNftMintTxs",t)},nftMintGetToken:function(t){return r.post("/operationweb/nftmint/getToken",t)},nftMintLotteryList:function(t){return r.post("/operationweb/nftmint/LotteryList",t)},nftMintbuildNftMeltTxs:function(t){return r.post("/operationweb/nftmint/buildNftMeltTxs",t)},nftMintnftList:function(t){return r.post("/operationweb/nftmint/nftList",t)},nftMintcheckTransaction:function(t){return r.post("/operationweb/nftmint/checkTransaction",t)}}},618:function(t,e,i){},619:function(t,e,i){},699:function(t,e,i){"use strict";e.parse=function(t,e){if("string"!=typeof t)throw new TypeError("argument str must be a string");for(var i={},o=(e=e||{},t.split(u)),s=e.decode||n,r=0;r<o.length;r++){var a,c=o[r],f=c.indexOf("=");f<0||(a=c.substr(0,f).trim(),'"'==(c=c.substr(++f,c.length).trim())[0]&&(c=c.slice(1,-1)),null==i[a]&&(i[a]=function(t,e){try{return e(t)}catch(e){return t}}(c,s)))}return i},e.serialize=function(t,e,i){var n=i||{};if("function"!=typeof(i=n.encode||o))throw new TypeError("option encode is invalid");if(!a.test(t))throw new TypeError("argument name is invalid");if((e=i(e))&&!a.test(e))throw new TypeError("argument val is invalid");var s=t+"="+e;if(null!=n.maxAge){if(e=+n.maxAge,isNaN(e))throw new Error("maxAge should be a Number");s+="; Max-Age="+Math.floor(e)}if(n.domain){if(!a.test(n.domain))throw new TypeError("option domain is invalid");s+="; Domain="+n.domain}if(n.path){if(!a.test(n.path))throw new TypeError("option path is invalid");s+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");s+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.sameSite)switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;default:throw new TypeError("option sameSite is invalid")}return s};var n=decodeURIComponent,o=encodeURIComponent,u=/; */,a=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},700:function(t,e,i){"use strict";i(618)},701:function(t,e,i){"use strict";i(619)},752:function(t,e,i){"use strict";i.r(e),i(43),i(31),i(65),i(37),i(66);var n=i(3),o=i(28),a=(i(41),i(42),i(360)),s=i(75);function r(t,e){var i,n=Object.keys(t);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(t),e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)),n}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){Object(o.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}i(699),s={name:"Novicebenefits",data:function(){return{isLoading:!0,question:"https://cdn.bitkeep.vip/u_b_af43f280-78f1-11ec-9d29-f144d09ca5ed.png",signList:{reward_pool:0,lottery:0,todayIsSgin:!1,list:[{day:1,isSignin:!1},{day:2,isSignin:!1},{day:3,isSignin:!1},{day:4,isSignin:!1},{day:5,isSignin:!1},{day:6,isSignin:!1},{day:7,isSignin:!1}]},signNums:1,joinTelegramflag:!1,SwapTransactionflag:!1,newUser:{isNewUser:!1,isDoneTelJob:!1,isDoneSwap:!1,isUpToSwap:!1,isUpTo50U:!1,isDone50U:!1,isAlterReward:!1,yestdaycode:"",yestdayRewardPool:0},telegramUrl:""}},computed:c(c({},Object(s.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep},signDay:function(){return this.signList.list.filter((function(t){return t.isSignin})).length},signimg:function(t,e){return 4!==t.day&&7!==t.day||e!==this.signDay?e===this.signDay?"https://cdn.bitkeep.vip/u_b_2e5e5380-a034-11ec-b054-8b7edc051038.png":4===t.day||7===t.day?"https://cdn.bitkeep.vip/u_b_65c04710-7448-11ec-a3df-456c694c3f18.png":"https://cdn.bitkeep.vip/u_b_5457fe50-743e-11ec-a3df-456c694c3f18.png":"https://cdn.bitkeep.vip/u_b_e4fd4180-a03b-11ec-ad8b-9ff4f858e021.png"},userInfo:function(){return this.local.userInfo.token}}),components:{},mounted:function(){this.joinTelegramflag=localStorage.getItem("joinTelegram")||!1,this.SwapTransactionflag=localStorage.getItem("SwapTransaction")||!1,this.getInfo(),this.setIcon(),this.info(),this.islanguage()},methods:{firstEnter:function(t,e,i){var n=this;this.$dialog.alert({title:t||"",message:"<div class='popBox'><p>"+e+"</p></div>",confirmButtonText:this.$t("CbkbExchange.know"),confirmButtonColor:"#7524f9"}).then((function(){i&&"prize"===i&&n.$router.push("/activity/noviceBenefits/lotteryresults")}))},info:function(){this.newUserRewardJobs(),this.getSignInDetailByUser()},islanguage:function(){"zh"==this.locale?this.telegramUrl="https://t.me/BitKeep_Official":"en"===this.locale||"ko"===this.locale||"ja"==this.locale?this.telegramUrl="https://t.me/bitkeep":"vi"==this.locale?this.telegramUrl="https://t.me/BitKeep_Vietnam":"id"==this.locale?this.telegramUrl="https://t.me/bitkeepng":this.telegramUrl="https://t.me/bitkeep"},viewblindbox:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$router.push("/activity/blindbox/list");case 1:case"end":return e.stop()}}),e)})))()},viewairdrop:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.location.href="https://h5.bitkeep.biz/airdropClaim.html#/?_needChain=all&lang=en";case 1:case"end":return t.stop()}}),t)})))()},viewblindboxInvite:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$router.push("/activity/blindboxInvite");case 1:case"end":return e.stop()}}),e)})))()},newUserRewardJobs:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.newUserRewardJobs();case 2:n=e.sent,i=n.data,n.status,i&&(t.newUser=i).isAlterReward&&t.firstEnter("",t.$t("noviceBenefits.congratulations")+i.yestdaycode+t.$t("noviceBenefits.winningthelottery")+i.yestdayRewardPool+"BKB!",prize);case 6:case"end":return e.stop()}}),e)})))()},UpTo50U:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.getFirst50UJob();case 2:n=e.sent,i=n.data,n.status,!0===i.success&&i.isActivate?(t.firstEnter("",t.$t("noviceBenefits.receiveSuccess")),t.info()):i.isActivate?t.firstEnter("",t.$t("noviceBenefits.receiveError")):t.firstEnter("",t.$t("noviceBenefits.Cloudwallet"));case 6:case"end":return e.stop()}}),e)})))()},SwapTransaction:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.newUser.isUpToSwap){e.next=5;break}BitKeepInvoke.nativeApp(),localStorage.setItem("SwapTransaction",!0),e.next=15;break;case 5:if(t.newUser.isUpTo50U)return e.next=8,a.a.getFirstSwapJob();e.next=14;break;case 8:n=e.sent,i=n.data,n.status,!0===i.success&&i.isActivate?(t.firstEnter("",t.$t("noviceBenefits.receiveSuccess")),t.info()):i.isActivate?t.firstEnter("",t.$t("noviceBenefits.receiveError")):t.firstEnter("",t.$t("noviceBenefits.Cloudwallet")),e.next=15;break;case 14:t.firstEnter("",t.$t("noviceBenefits.50u"));case 15:case"end":return e.stop()}}),e)})))()},joinTelegram:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.joinTelegramflag){e.next=6;break}window.location.href=t.telegramUrl,t.joinTelegramflag=!0,localStorage.setItem("joinTelegram",!0),e.next=16;break;case 6:if(t.newUser.isUpTo50U)return e.next=9,a.a.getJoinTeleJob();e.next=15;break;case 9:n=e.sent,i=n.data,n.status,!0===i.success&&i.isActivate?(t.firstEnter("",t.$t("noviceBenefits.receiveSuccess")),t.info()):i.isActivate?t.firstEnter("",t.$t("noviceBenefits.receiveError")):t.firstEnter("",t.$t("noviceBenefits.Cloudwallet")),e.next=16;break;case 15:t.firstEnter("",t.$t("noviceBenefits.50u"));case 16:case"end":return e.stop()}}),e)})))()},welfareSignInfunc:function(t){var s=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==s.signDay&&t<s.signDay||s.signList.todayIsSgin)return e.abrupt("return");e.next=2;break;case 2:return e.next=4,a.a.welfareSignIn();case 4:n=e.sent,i=n.data,n.status,!0===i?(s.getSignInDetailByUser(),s.firstEnter("",s.$t("noviceBenefits.signSuccess"))):(s.getSignInDetailByUser(),s.firstEnter("",s.$t("noviceBenefits.signError")));case 8:case"end":return e.stop()}}),e)})))()},getSignInDetailByUser:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.getSignInDetailByUser();case 2:n=e.sent,i=n.data,n.status,i.list&&(t.signList=i);case 6:case"end":return e.stop()}}),e)})))()},drawClick:function(){this.$router.push("/activity/noviceBenefits/drawluckly")},getInfo:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.miningInfo();case 2:if(n=e.sent,i=n.data,1==n.status)return t.isLoading=!1,e.abrupt("return",t.$dialog.alert({message:i,confirmButtonText:t.$t("CbkbExchange.know"),confirmButtonColor:"$theme-light-colorPrimary"}));e.next=8;break;case 8:t.isLoading=!1;case 9:case"end":return e.stop()}}),e)})))()},setIcon:function(){var t=this;this.isBitKeep&&BitKeepInvoke.onLoadReady((function(){BitKeepInvoke.setTitle(t.$t("noviceBenefits.WelfareCenter")),t.$nextTick((function(){BitKeepInvoke.setIconAction(),BitKeepInvoke.appMode((function(e,n){var i=document.getElementsByTagName("body")[0];1==n?(t.theme=1,t.question="https://cdn.bitkeep.vip/u_b_cac9ff90-78f1-11ec-9d29-f144d09ca5ed.png",i.setAttribute("class","theme-dark")):(t.theme=0,t.question="https://cdn.bitkeep.vip/u_b_af43f280-78f1-11ec-9d29-f144d09ca5ed.png",i.setAttribute("class","theme-light"))}))}))}))}}},i(700),i(701),i=i(27),s=Object(i.a)(s,(function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"Novicebenefits colorBackground0"},[e("div",{staticClass:"Novicebenefits-topbanner"},[e("van-image",{attrs:{width:"100%",height:"100%",src:"https://cdn.bitkeep.vip/u_b_980f2ee0-7fdb-11ec-a9c3-37af95cd2c04.jpeg"}})],1),i._v(" "),e("div",{staticClass:"Novicebenefits-box"},[e("div",{staticClass:"Novicebenefits-title textPrimary0"},[i._v("\n              "+i._s(i.$t("noviceBenefits.sign"))+"\n              "),e("van-image",{attrs:{src:i.question},on:{click:function(t){i.firstEnter(i.$t("noviceBenefits.Tips"),i.$t("noviceBenefits.Cumulative"))}}})],1),i._v(" "),e("div",{staticClass:"Novicebenefits-sign colorBackground1"},[e("div",{staticClass:"Novicebenefits-sign-top"},[e("div",{staticClass:"Novicebenefits-sign-title textPrimary0"},[i._v(i._s(i.$t("noviceBenefits.alreadySignedin"))),e("span",{staticClass:"setFontFamily colorPrimary Novicebenefits-sign-top-bottom-content-span"},[i._v(i._s(i.signDay))]),i._v(i._s(i.$t("noviceBenefits.day")))]),i._v(" "),e("div",{staticClass:"Novicebenefits-sign-top-signlist"},i._l(i.signList.list,(function(t,n){return e("div",{key:n,staticClass:"Novicebenefits-sign-item"},[e("div",{on:{click:function(t){return i.welfareSignInfunc(n)}}},[e("div",{staticClass:"Novicebenefits-sign-item-img"},[4===t.day||7===t.day?e("span",{staticClass:"Novicebenefits-sign-item-img-obtain backgroundSecond01"},[e("i",{staticClass:"colorwhite",staticStyle:{"font-style":"normal"}},[i._v(i._s(i.$t("noviceBenefits.obtain")))])]):i._e(),i._v(" "),t.isSignin?e("van-image",{attrs:{src:4===t.day||7===t.day?"https://cdn.bitkeep.vip/u_b_e4fd6890-a03b-11ec-ad8b-9ff4f858e021.png":"https://cdn.bitkeep.vip/u_b_2e5e0560-a034-11ec-b054-8b7edc051038.png"}}):e("van-image",{attrs:{src:4!==t.day&&7!==t.day||n!==i.signDay||i.signList.todayIsSgin?n!==i.signDay||i.signList.todayIsSgin?4===t.day||7===t.day?"https://cdn.bitkeep.vip/u_b_65c04710-7448-11ec-a3df-456c694c3f18.png":"https://cdn.bitkeep.vip/u_b_5457fe50-743e-11ec-a3df-456c694c3f18.png":"https://cdn.bitkeep.vip/u_b_2e5e5380-a034-11ec-b054-8b7edc051038.png":"https://cdn.bitkeep.vip/u_b_e4fd4180-a03b-11ec-ad8b-9ff4f858e021.png"}})],1),i._v(" "),n!==i.signDay||i.signList.todayIsSgin?e("p",{class:n<i.signDay?"Novicebenefits-sign-item-result Novicebenefits-sign-item-day colorPrimary":"Novicebenefits-sign-item-result Novicebenefits-sign-item-day textSecond2 setFontFamily"},[i._v(" "+i._s("en"===i.locale?t.day:t.day+i.$t("noviceBenefits.day")))]):e("p",{staticClass:"Novicebenefits-sign-item-result colorPrimary"},[i._v(i._s(i.$t("noviceBenefits.Signedin")))])])])})),0)]),i._v(" "),e("div",{staticClass:"Novicebenefits-sign-top-bottom"},[e("div",{staticClass:"Novicebenefits-sign-top-bottom-img"},[e("van-image",{staticClass:"Novicebenefits-sign-top-bottom-img-left",attrs:{src:"https://cdn.bitkeep.vip/u_b_6b97a060-a036-11ec-b054-8b7edc051038.png"}})],1),i._v(" "),e("div",{staticClass:"Novicebenefits-sign-top-bottom-content"},[e("p",{staticClass:"textPrimary0 Novicebenefits-sign-top-bottom-content-top"},[i._v("\n                      "+i._s(i.$t("noviceBenefits.Currently"))+" \n                      "),e("span",{staticClass:"colorPrimary Novicebenefits-sign-top-bottom-content-span setFontFamily"},[i._v(" "+i._s(i.signList.lottery)+" ")]),i._v(" "+i._s(i.$t("noviceBenefits.zhang"))+"\n                  "),e("img",{staticClass:"Novicebenefits-sign-top-bottom-img-right",attrs:{src:i.question},on:{click:function(t){i.firstEnter(i.$t("noviceBenefits.Whatisaraffleticket"),i.$t("noviceBenefits.Usethelotteryticket"))}}})]),i._v(" "),e("p",{staticClass:"textSecond2"},[i._v(i._s(i.$t("noviceBenefits.Participate"))),e("span",{staticClass:"setFontFamily"},[i._v(i._s(i.signList.reward_pool))]),i._v("  BKB?")])]),i._v(" "),e("div",{staticClass:"Novicebenefits-sign-top-bottom-btn"},[e("van-button",{staticClass:"draw-btn colorBackgroundPrimary",on:{click:function(t){return i.drawClick()}}},[e("span",{staticClass:"colorwhite Novicebenefits-sign-top-bottom-btn-span"},[i._v(i._s(i.$t("noviceBenefits.Draw")))])])],1)])]),i._v(" "),e("div",{staticClass:"Novicebenefits-title Novicebenefits-title-not textPrimary0"},[i._v(i._s(i.$t("noviceBenefits.Novice")))]),i._v(" "),e("ul",{staticClass:"Novicebenefits-reward Novicebenefits-sign-top-bottom colorBackground1"},[e("li",{staticClass:"Novicebenefits-reward-item Novicebenefits-sign-top-bottom"},[e("div",{staticClass:"Novicebenefits-sign-top-bottom-img"},[e("van-image",{attrs:{src:"https://cdn.bitkeep.vip/u_b_801ad180-a692-11ec-a2a5-1f9c619ac9fc.png"}})],1),i._v(" "),e("div",{staticClass:"Novicebenefits-sign-top-bottom-content"},[e("p",{staticClass:"textPrimary0"},[i._v(i._s(i.$t("noviceBenefits.Telegram")))]),i._v(" "),e("p",{staticClass:"textSecond2"},[i._v(i._s(i.$t("noviceBenefits.Reward")))])]),i._v(" "),i.newUser.isNewUser?e("div",{staticClass:"Novicebenefits-sign-top-bottom-btn"},[i.newUser.isDoneTelJob?e("span",{staticClass:"alreadydraw-btn textSecond3"},[i._v(i._s(i.$t("noviceBenefits.alreadyReceived")))]):e("van-button",{staticClass:"draw-btn colorBackgroundPrimary",on:{click:function(t){return i.joinTelegram()}}},[e("span",{staticClass:"colorwhite Novicebenefits-sign-top-bottom-btn-span"},[e("span",{staticClass:"colorwhite"},[i._v(" "+i._s(i.joinTelegramflag?i.$t("noviceBenefits.Getitnow"):i.$t("noviceBenefits.Join")))])])])],1):e("div",{staticClass:"Novicebenefits-sign-top-bottom-btn"},[e("span",{staticClass:"alreadydraw-btn textSecond3"},[i._v("  "+i._s(i.$t("noviceBenefits.incompatible")))])])]),i._v(" "),e("li",{staticClass:"Novicebenefits-reward-item Novicebenefits-sign-top-bottom "},[e("div",{staticClass:"Novicebenefits-sign-top-bottom-img"},[e("van-image",{attrs:{src:"https://cdn.bitkeep.vip/u_b_801af890-a692-11ec-a2a5-1f9c619ac9fc.png"}})],1),i._v(" "),e("div",{staticClass:"Novicebenefits-sign-top-bottom-content"},[e("p",{staticClass:"textPrimary0"},[i._v(i._s(i.$t("noviceBenefits.swap")))]),i._v(" "),e("p",{staticClass:"textSecond2"},[i._v(i._s(i.$t("noviceBenefits.raffle")))])]),i._v(" "),i.newUser.isNewUser?e("div",{staticClass:"Novicebenefits-sign-top-bottom-btn"},[i.newUser.isDoneSwap?e("span",{staticClass:"alreadydraw-btn textSecond3"},[i._v(i._s(i.$t("noviceBenefits.alreadyReceived")))]):e("van-button",{staticClass:"draw-btn colorBackgroundPrimary",on:{click:function(t){return i.SwapTransaction()}}},[e("span",{staticClass:"colorwhite Novicebenefits-sign-top-bottom-btn-span"},[i._v(" "+i._s(i.newUser.isUpToSwap?i.$t("noviceBenefits.Getitnow"):i.$t("noviceBenefits.Immediate")))])])],1):e("div",{staticClass:"Novicebenefits-sign-top-bottom-btn"},[e("span",{staticClass:"alreadydraw-btn textSecond3"},[i._v(" "+i._s(i.$t("noviceBenefits.incompatible")))])])]),i._v(" "),e("li",{staticClass:"Novicebenefits-reward-item Novicebenefits-sign-top-bottom"},[e("div",{staticClass:"Novicebenefits-sign-top-bottom-img"},[e("van-image",{attrs:{src:"https://cdn.bitkeep.vip/u_b_801a3540-a692-11ec-a2a5-1f9c619ac9fc.png"}})],1),i._v(" "),e("div",{staticClass:"Novicebenefits-sign-top-bottom-content"},[e("p",{staticClass:"textPrimary0"},[i._v(i._s(i.$t("noviceBenefits.USDT")))]),i._v(" "),e("p",{staticClass:"textSecond2"},[i._v(i._s(i.$t("noviceBenefits.Reward"))+" ")])]),i._v(" "),i.newUser.isNewUser?e("div",{staticClass:"Novicebenefits-sign-top-bottom-btn"},[i.newUser.isDone50U?e("span",{staticClass:"alreadydraw-btn textSecond3"},[i._v(i._s(i.$t("noviceBenefits.alreadyReceived")))]):i.newUser.isUpTo50U?i.newUser.isUpTo50U?e("van-button",{staticClass:"draw-btn colorBackgroundPrimary",on:{click:function(t){return i.UpTo50U()}}},[e("span",{staticClass:"colorwhite Novicebenefits-sign-top-bottom-btn-span"},[i._v(" "+i._s(i.$t("noviceBenefits.Getitnow")))])]):i._e():e("span",{staticClass:" alreadydraw-btn textbtn textSecond3 standard"},[i._v(" "+i._s(i.$t("noviceBenefits.standard")))])],1):e("div",{staticClass:"Novicebenefits-sign-top-bottom-btn"},[e("span",{staticClass:"alreadydraw-btn textSecond3"},[i._v(" "+i._s(i.$t("noviceBenefits.incompatible")))])])])]),i._v(" "),e("div",{staticClass:"Novicebenefits-title Novicebenefits-title-not textPrimary0"},[i._v(i._s(i.$t("noviceBenefits.Morebenefits")))]),i._v(" "),e("ul",{staticClass:"Novicebenefits-reward Novicebenefits-sign-top-bottom colorBackground1"},[e("li",{staticClass:"Novicebenefits-reward-item Novicebenefits-sign-top-bottom"},[e("div",{staticClass:"Novicebenefits-sign-top-bottom-img"},[e("van-image",{attrs:{src:"https://cdn.bitkeep.vip/u_b_b21ebdc0-a036-11ec-b054-8b7edc051038.png"}})],1),i._v(" "),e("div",{staticClass:"Novicebenefits-sign-top-bottom-content"},[e("p",{staticClass:"textPrimary0"},[i._v(i._s(i.$t("noviceBenefits.Airdropactivity")))]),i._v(" "),e("p",{staticClass:"textSecond2"},[i._v(i._s(i.$t("noviceBenefits.Access")))])]),i._v(" "),e("div",{staticClass:"Novicebenefits-sign-top-bottom-btn"},[e("van-button",{staticClass:"draw-btn colorBackgroundPrimary",on:{click:function(t){return i.viewairdrop()}}},[e("span",{staticClass:"colorwhite Novicebenefits-sign-top-bottom-btn-span"},[i._v(" "+i._s(i.$t("noviceBenefits.Viewnow")))])])],1)]),i._v(" "),e("li",{staticClass:"Novicebenefits-reward-item Novicebenefits-sign-top-bottom"},[e("div",{staticClass:"Novicebenefits-sign-top-bottom-img"},[e("van-image",{attrs:{src:"https://cdn.bitkeep.vip/u_b_b21e96b0-a036-11ec-b054-8b7edc051038.png"}})],1),i._v(" "),e("div",{staticClass:"Novicebenefits-sign-top-bottom-content"},[e("p",{staticClass:"textPrimary0"},[i._v(i._s(i.$t("noviceBenefits.Blindboxactivity")))]),i._v(" "),e("p",{staticClass:"textSecond2"},[i._v(i._s(i.$t("noviceBenefits.AccessNFT")))])]),i._v(" "),e("div",{staticClass:"Novicebenefits-sign-top-bottom-btn"},[e("van-button",{staticClass:"draw-btn colorBackgroundPrimary",on:{click:function(t){return i.viewblindbox()}}},[e("span",{staticClass:"colorwhite Novicebenefits-sign-top-bottom-btn-span"},[i._v(" "+i._s(i.$t("noviceBenefits.Viewnow")))])])],1)]),i._v(" "),e("li",{staticClass:"Novicebenefits-reward-item Novicebenefits-sign-top-bottom"},[e("div",{staticClass:"Novicebenefits-sign-top-bottom-img"},[e("van-image",{attrs:{src:"https://cdn.bitkeep.vip/u_b_b21e4890-a036-11ec-b054-8b7edc051038.png"}})],1),i._v(" "),e("div",{staticClass:"Novicebenefits-sign-top-bottom-content"},[e("p",{staticClass:"textPrimary0"},[i._v(i._s(i.$t("noviceBenefits.Invitation")))]),i._v(" "),e("p",{staticClass:"textSecond2"},[i._v(i._s(i.$t("noviceBenefits.Invitefriends")))])]),i._v(" "),e("div",{staticClass:"Novicebenefits-sign-top-bottom-btn"},[e("van-button",{staticClass:"draw-btn colorBackgroundPrimary Novicebenefits-sign-top-bottom-btn-span",on:{click:function(t){return i.viewblindboxInvite()}}},[e("span",{staticClass:"colorwhite"},[i._v(" "+i._s(i.$t("noviceBenefits.Viewnow")))])])],1)])])])])}),[],!1,null,null,null),e.default=s.exports}}]);
//# sourceMappingURL=a321d44.js.map