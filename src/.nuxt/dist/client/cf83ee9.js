(window.webpackJsonp=window.webpackJsonp||[]).push([[6,17,18,19,21,22,23,24,25],{360:function(t,e,i){"use strict";i.d(e,"a",(function(){return l})),i(49);e=i(14);var n=i(78),s=(e=i.n(n),i(1)),o=i(77),a=(i(76),function(){for(var t,e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];(t=console).log.apply(t,["bit-activity-request:"].concat(i))}),r=e.a.create({baseURL:"https://b1.bitkeep.top",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});r.interceptors.request.use((function(t){var e,i,n;return a("requestlog:",t),s.default.prototype.$store&&(i=(n=(e=s.default.prototype.$store.state).local).UA,n=n.locale,i.isBitKeep?Object.assign(t.headers,e.local.bitkeep,{language:n}):Object.assign(t.headers,{language:n})),t}),(function(t){return Promise.resolve({status:1})})),r.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];(t=console).log.apply(t,["bit-activity-response:"].concat(i))}("responselog:",t);var e="网路开了小差";e=(t=Object(o.b)()||{}).t?t.t("base.networkErro"):e;return Promise.resolve({status:1,data:e})}));var l={mBoxList:function(t){return r.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return r.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return r.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return r.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return r.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return r.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return r.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return r.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return r.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return r.post("swap/mining/info",t)},historyPhase:function(t){return r.post("swap/mining/historyPhase",t)},receiveAward:function(t){return r.post("swap/mining/receiveAward",t)},getInviteList:function(t){return r.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return r.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return r.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return r.post("/user/cloudstaking/poolList",t)},myPool:function(t){return r.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return r.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return r.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return r.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return r.post("/user/cloudstaking/getToken",t)},tradingGetList:function(t){return r.post("swap/tradeCompetition/getList",t)},tradingWaitClaim:function(t){return r.post("swap/tradeCompetition/waitClaim",t)},tradingClaim:function(t){return r.post("swap/tradeCompetition/claim",t)},tradingSummary:function(t){return r.post("swap/tradeCompetition/summary",t)},tradingHistory:function(t){return r.post("swap/tradeCompetition/history",t)},welfareSignIn:function(t){return r.post("user/welfare/signIn",t)},getRewardDetail:function(t){return r.post("user/welfare/getRewardDetail",t)},getSignInDetailByUser:function(t){return r.post("user/welfare/getSignInDetailByUser",t)},getRewardResult:function(t){return r.post("user/welfare/getRewardResult",t)},pushPapersIn:function(t){return r.post("user/welfare/pushPapersIn",t)},getJoinTeleJob:function(t){return r.post("user/welfare/getJoinTeleJob",t)},getFirstSwapJob:function(t){return r.post("user/welfare/getFirstSwapJob",t)},getFirst50UJob:function(t){return r.post("user/welfare/getFirst50UJob",t)},newUserRewardJobs:function(t){return r.post("user/welfare/newUserRewardJobs",t)},nftMintGetInfo:function(t){return r.post("/operation/nftmint/getInfo",t)},nftMintInvite:function(t){return r.post("/operation/nftmint/invite",t)},buildNftMintTxs:function(t){return r.post("/operation/nftmint/buildNftMintTxs",t)},nftMintGetToken:function(t){return r.post("/operation/nftmint/getToken",t)},nftMintLotteryList:function(t){return r.post("/operation/nftmint/LotteryList",t)},nftMintbuildNftMeltTxs:function(t){return r.post("/operation/nftmint/buildNftMeltTxs",t)},nftMintnftList:function(t){return r.post("/operation/nftmint/nftList",t)},nftMintcheckTransaction:function(t){return r.post("/operation/nftmint/checkTransaction",t)}}},362:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i(122),s=i(158);function o(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(s.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},363:function(t,e,i){var n=i(5),s=i(159);i=i(94);n({target:"Array",proto:!0},{fill:s}),i("fill")},367:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));e=i(43),e=i(31),e=i(42),e=i(65),e=i(37),e=i(66);var n=i(3),o=i(28);e=i(14),e=i(234),e=i(49),e=i(41),i=i(75);function s(t,e){var i,n=Object.keys(t);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(t),e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)),n}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){Object(o.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function r(t){return((0<arguments.length&&void 0!==t?t:"")||"").toLowerCase()}var l={computed:a(a({},Object(i.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep}}),created:function(){},methods:{addCoin:function(t,i,e){var s=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s.isBitKeep){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,s._addCoin(t,i,e);case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2);case 10:case"end":return n.stop()}}),n,null,[[2,7]])})))()},_addCoin:function(t,e,n){return new Promise((function(i){window.BitKeepInvoke.addCoin(t,e,n,(function(t,e){return t?i(!1):e?i(!0):void i(!1)}))}))},_isCoinHas:function(t,s){return new Promise((function(i){window.BitKeepInvoke.getCoins((function(e,n){return e?i(!1):n?(n=n.find((function(e){return"".concat(r(e.chain),"_").concat(r(e.contract))=="".concat(r(t),"_").concat(r(s))})),i(n)):void i(!1)}))}))},showLoading:function(t){this.Toast=this.$toast.loading({duration:0,forbidClick:!0,message:t||""})},hideLoading:function(){this.Toast&&this.Toast.clear()}}}},511:function(t,e,i){t.exports=i.p+"img/Py_bg.9a6006a.png"},512:function(t,e,i){},513:function(t,e,i){},514:function(t,e,i){},515:function(t,e,i){},516:function(t,e,i){},517:function(t,e,i){},518:function(t,e,i){},519:function(t,e,i){},543:function(t,e,i){"use strict";i(512)},544:function(t,e,i){"use strict";i(513)},545:function(t,e,i){"use strict";i(514)},546:function(t,e,i){"use strict";i(515)},547:function(t,e,i){"use strict";i(516)},548:function(t,e,i){"use strict";i(517)},549:function(t,e,i){"use strict";i(518)},550:function(t,e,i){"use strict";i(519)},580:function(t,e,i){"use strict";i.r(e),i(233),i(36),i(55),i(67),i(157),i(363);var n=1e3,s=6e4,o=36e5,a=864e5,r={all:/\{(dd|hh|mm|ss|ms){1}\}/gi,ms:/\{(ms){1}\}/gi,ss:/\{(ss){1}\}/gi,mm:/\{(mm){1}\}/gi,hh:/\{(hh){1}\}/gi,dd:/\{(dd){1}\}/gi,mn:/\{(mn){1}\}/gi,yy:/\{(yy){1}\}/gi},l={name:"cuntdown",props:{hidden:{type:Boolean,default:!1},format:{type:String,default:"{dd}天{hh}小时{mm}分钟{ss}秒"},startTime:{type:Number||String,default:(new Date).getTime()},endTime:{type:Number||String,default:(new Date).getTime()}},data:function(){return{timer:null,stepTime:0}},watch:{stepTime:function(t){var e={ms:this.ms,ss:this.ss,mm:this.mm,hh:this.hh,dd:this.dd};if(t<=0)return this.$emit("end",e);this.$emit("change",e)},startTime:function(){this.stepTime=0,this.init()},endTime:function(){this.stepTime=0,this.init()}},computed:{options_show:function(){return{ms:r.ms.test(this.format),ss:r.ss.test(this.format),mm:r.mm.test(this.format),hh:r.hh.test(this.format),dd:r.dd.test(this.format),mn:r.mn.test(this.format),yy:r.yy.test(this.format)}},ms:function(){return Math.floor(this.stepTime%n)},ss:function(){return this.options_show.mm?Math.floor(this.stepTime%s/n):Math.floor(this.stepTime/n)},mm:function(){return this.options_show.hh?Math.floor(this.stepTime%o/s):Math.floor(this.stepTime/s)},hh:function(){return this.options_show.dd?Math.floor(this.stepTime%a/o):Math.floor(this.stepTime/o)},dd:function(){return this.options_show.mn?this.diff.day:Math.floor(this.stepTime/a)},mn:function(){var t=0<this.diff.year?this.diff.year:0,e=0<this.diff.month?this.diff.month:0;return this.options_show.yy?e:12*t+e-1},yy:function(){return 0<this.diff.year?this.diff.year:0},step_times:function(){return this.options_show.ms?100:1e3},pareStr:function(){return this.format.replace(r.ms,this.zero(this.ms,4)).replace(r.ss,this.zero(this.ss)).replace(r.mm,this.zero(this.mm)).replace(r.hh,this.zero(this.hh)).replace(r.dd,this.zero(this.dd)).replace(r.mn,this.zero(this.mn)).replace(r.yy,this.zero(this.yy))},diff:function(){var t=new Date(this.endTime),e=new Date(this.startTime);isNaN(t)||isNaN(e);var i=e.getFullYear(),n=e.getMonth()+1,s=e.getDate(),o=t.getFullYear(),a=t.getMonth()+1,r=t.getDate();return{endDate:t,startDate:e,startYears:i,endYears:o,startMonth:n,endMonth:a,endDay:r,startDay:s,day:r-s,month:a-n,year:o-i}}},methods:{init:function(){var t=this,e=this.step_times;if(clearInterval(this.timer),!(this.startTime>=this.endTime)){if(this.stepTime=this.endTime-this.startTime,this.stepTime<=0)return this.stepTime=0;this.timer=setInterval((function(){t.stepTime=t.stepTime-e,t.stepTime<=0&&(t.stepTime=0,clearInterval(t.timer))}),e)}},zero:function(t){var e=0<(e=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:2)-String(t).length)?new Array(e).fill(0).join(""):"";return Number(t)<10?e+t:t}},filters:{filterZero:function(t){return Number(t)<10?"0"+t:t}},created:function(){this.init()}};i(543),i=i(27),l=Object(i.a)(l,(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("div",{staticClass:"cuntdown"},[e("div",{staticClass:"item Background0"},[e("span",{staticClass:"TTOMedium"},[t._v("\n      "+t._s(t.zero(t.dd))+"\n    ")]),t._v(" "),e("span",{staticClass:"TTORegular"},[t._v("Days")])]),t._v(" "),e("div",{staticClass:"item Background0"},[e("span",{staticClass:"TTOMedium"},[t._v(t._s(t.zero(t.hh)))]),t._v(" "),e("span",{staticClass:"TTORegular"},[t._v("Hours")])]),t._v(" "),e("div",{staticClass:"item Background0"},[e("span",{staticClass:"TTOMedium"},[t._v(t._s(t.zero(t.mm)))]),t._v(" "),e("span",{staticClass:"TTORegular"},[t._v("Minutes")])]),t._v(" "),e("div",{staticClass:"item Background0"},[e("span",{staticClass:"TTOMedium"},[t._v(t._s(t.zero(t.ss)))]),t._v(" "),e("span",{staticClass:"TTORegular"},[t._v("Seconds")])])])}),[],!1,null,"7d697754",null);e.default=l.exports},581:function(t,e,i){"use strict";i.r(e);var n={name:"Mint",props:{showMint:{type:Boolean,default:!1},MentList:{type:Array,default:function(){return[]}},isWhite:{type:Boolean,default:!1}},data:function(){return{MintNum:1,visables:this.showMint}},watch:{showMint:function(t){this.visables=t}},methods:{subtraction:function(){1<this.MintNum?this.MintNum--:this.$toast(this.$t("polygon.mintAlert"))},Addition:function(){var t=5;this.isWhite&&(t=10),this.MintNum<t-this.MentList.length?this.MintNum++:this.$toast(this.isWhite?this.$t("polygon.whiteAlert1"):this.$t("polygon.whiteAlert2"))},close:function(){this.visables=!1,this.$emit("closeMint",!1),this.MintNum=1},MintToken:function(t){1<=t?this.$emit("closeMint",t):this.$toast.fail(this.$t("polygon.mintAlert"))}},computed:{MATIC:function(){return 100*this.MintNum}}},s=(i(544),i(27));n=Object(s.a)(n,(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("van-popup",{attrs:{"close-icon-position":"top-right",closeable:"","close-on-click-overlay":!1},on:{"click-close-icon":t.close},model:{value:t.visables,callback:function(e){t.visables=e},expression:"visables"}},[e("div",{staticClass:"Mintpopup"},[e("div",{staticClass:"Mintlogo"},[e("img",{attrs:{src:i(511),alt:""}})]),t._v(" "),e("div",{staticClass:"PaymentBox"},[e("div",{staticClass:"TTORegular title"},[t._v(t._s(t.$t("polygon.mintAmount")))]),t._v(" "),e("div",{staticClass:"PaymentNum"},[e("van-icon",{staticClass:"subtraction",attrs:{name:"minus",size:"18"},on:{click:t.subtraction}}),t._v(" "),e("span",{staticClass:"TTOMedium number"},[t._v(t._s(t.MintNum))]),t._v(" "),e("van-icon",{staticClass:"Addition",attrs:{name:"plus",size:"18"},on:{click:t.Addition}})],1),t._v(" "),e("div",{staticClass:"PaymentInfo"},[e("div",{staticClass:"title TTORegular"},[t._v(t._s(t.$t("polygon.mintPayment")))]),t._v(" "),e("div",{staticClass:"PaymentContent"},[e("span",{staticClass:"TTOMedium"},[t._v(t._s(t.MATIC)+" MATIC")])])]),t._v(" "),e("div",{staticClass:"mintSubmit TTOMedium",on:{click:function(e){return t.MintToken(t.MintNum)}}},[t._v("MINT")])])])])}),[],!1,null,"26f07a4b",null);e.default=n.exports},582:function(t,e,i){"use strict";i.r(e),i(68),i(42);var n={name:"Ment",components:{Swiper:(n=i(540)).Swiper,SwiperSlide:n.SwiperSlide},props:{showMent:{type:Boolean,default:!1},MentList:{type:Array,default:function(){return[]}}},data:function(){return{visables:this.showMent,list:this.MentList.map((function(t){return t.selected=!1,t})),selectedList:[],swiperOption:{initialSlide:0,slidesPerView:2.4,direction:"horizontal",loop:!1}}},watch:{showMent:function(t){this.visables=t}},methods:{selected:function(t){this.list=this.list.map((function(e){return e.tokenId==t.tokenId&&(e.selected=!e.selected),e})),this.selectedList=this.list.filter((function(t){return 1==t.selected})).map((function(t){return t.tokenId}))},close:function(){this.$emit("closeMent",!1)},MentToken:function(t){1==this.list.length?(this.selected(this.list[0]),this.$emit("closeMent",this.selectedList)):0<t.length?this.$emit("closeMent",t):this.$toast.fail(this.$t("polygon.mentAlert"))}},computed:{MATIC:function(){return 100*this.selectedList.length}}};i(545),i=i(27),n=Object(i.a)(n,(function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("van-popup",{attrs:{"close-icon-position":"top-right",closeable:"","close-on-click-overlay":!1},on:{"click-close-icon":i.close},model:{value:i.visables,callback:function(t){i.visables=t},expression:"visables"}},[e("div",{staticClass:"Mentpopup"},[e("div",{staticClass:"TTORegular title"},[1<i.list.length?e("div",{staticClass:"title1"},[i._v("\n        "+i._s(i.$t("polygon.meltTitle1"))+"\n        ("+i._s(i.list.filter((function(t){return 1==t.selected})).length)+"/"+i._s(i.list.length)+") \n      ")]):e("div",{staticClass:"title2"},[i._v("\n        "+i._s(i.$t("polygon.meltTitle2"))+"\n      ")])]),i._v(" "),1<i.list.length?e("div",{staticClass:"MentList"},[e("swiper",{staticClass:"swiper-wrapper",attrs:{options:i.swiperOption},on:{mousemove:function(t){return t}}},i._l(i.list,(function(t){return e("swiper-slide",{key:t.tokenId},[e("div",{staticClass:"Mentlogo",class:1==t.selected?"MentlogoActive":"",on:{click:function(e){return i.selected(t)}}},[e("img",{attrs:{src:t.picUrl,alt:""}}),i._v(" "),e("div",{staticClass:"TTORegular tokenId"},[i._v("Token ID: #"+i._s(t.tokenId))])])])})),1)],1):1==i.list.length?e("div",{staticClass:"Mintlogo"},[e("img",{attrs:{src:i.list[0].picUrl,alt:""}}),i._v(" "),e("div",{staticClass:"TTORegular tokenId"},[i._v("Token ID: #"+i._s(i.list[0].tokenId))])]):i._e(),i._v(" "),e("div",{staticClass:"PaymentBox"},[e("div",{staticClass:"PaymentInfo"},[e("div",{staticClass:"title TTORegular"},[i._v(i._s(i.$t("polygon.meltValue")))]),i._v(" "),e("div",{staticClass:"PaymentContent"},[1<i.list.length?e("span",{staticClass:"TTOMedium"},[i._v(i._s(i.MATIC)+" MATIC")]):e("span",{staticClass:"TTOMedium"},[i._v("100 MATIC")])]),i._v(" "),e("div",{staticClass:"PaymentValue"})]),i._v(" "),e("div",{staticClass:"MentSubmit TTOMedium",on:{click:function(t){return i.MentToken(i.selectedList)}}},[i._v("Melt")])])])])}),[],!1,null,"1e41ab22",null);e.default=n.exports},583:function(t,e,i){"use strict";i.r(e);var n=i(3),s=(i(41),{name:"AirdropAddressCard",props:{showAirdropAddress:{type:Boolean,default:!1},LotteryList:{type:Array,default:function(){return[]}}},data:function(){return{MintNum:0,visables:this.showAirdropAddress}},computed:{showList:function(){for(var t=[],e=[],i=0;i<this.LotteryList.length;i++)e.length<3&&e.push(this.LotteryList[i]),i%3==2&&(t.push(e),e=[]);return t}},watch:{showAirdropAddress:function(t){this.visables=t}},methods:{close:function(){this.$emit("closeAirdropAddressCard",!1)},touchmove:function(t){}},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}});i(546),i=i(27),s=Object(i.a)(s,(function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("van-popup",{attrs:{"close-icon-position":"top-right","close-on-click-overlay":!1,closeable:""},on:{"click-close-icon":i.close},model:{value:i.visables,callback:function(t){i.visables=t},expression:"visables"}},[e("div",{staticClass:"AirdropAddressBox"},[e("div",{staticClass:"content"},[e("div",{staticClass:"title TTORegular"},[i._v(i._s(i.$t("polygon.airdropTips1"))+" "),e("span",{staticClass:"TTOMedium"},[i._v("BKB"+i._s(i.$t("polygon.airdropTips2")))])]),i._v(" "),e("div",{staticClass:"getTime TTORegular"},[i._v(i._s(i._f("timeFilter")((new Date).getTime()-864e5)))]),i._v(" "),e("div",{staticClass:"list"},[e("div",{staticClass:"Addresslist",on:{touchmove:function(t){return t.stopPropagation(),i.touchmove.apply(null,arguments)}}},i._l(i.LotteryList,(function(t,n){return e("div",{key:n,staticClass:"item TTORegular"},[i._v(" \n            "+i._s(t)+" \n          ")])})),0)])])])])}),[],!1,null,"15a011ee",null);e.default=s.exports},584:function(t,e,i){"use strict";i.r(e),i(233);var n={name:"AirdropAwardCard",props:{showAirdropAward:{type:Boolean,default:!1},currentAddress:{type:String,default:""},luckNum:{type:Number,default:0}},data:function(){return{MintNum:0,visables:this.showAirdropAward}},watch:{showAirdropAward:function(t){this.visables=t}},methods:{close:function(){this.$emit("closeAirdropAwardCard",!1)}}};i(547),i=i(27),n=Object(i.a)(n,(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("van-popup",{attrs:{"close-icon-position":"top-right",closeable:"","close-on-click-overlay":!1},on:{"click-close-icon":t.close},model:{value:t.visables,callback:function(e){t.visables=e},expression:"visables"}},[e("div",{staticClass:"AirdropAwardBox"},[e("div",{staticClass:"content"},[e("div",{staticClass:"title TTORegular"},[t._v("\n        "+t._s(t.$t("polygon.awardTitle"))+"\n      ")]),t._v(" "),e("div",{staticClass:"Walletaddress"},[e("div",{staticClass:"title TTORegular"},[t._v("\n          "+t._s(t.$t("polygon.awardAddress"))+"\n        ")]),t._v(" "),e("div",{staticClass:"address TTORegular"},[t._v("\n          "+t._s(t.currentAddress)+"\n        ")])])])])])}),[],!1,null,"2886ac3a",null);e.default=n.exports},585:function(t,e,i){"use strict";i.r(e),i(233);var n={name:"InvitedCard",props:{showInvitedlist:{type:Boolean,default:!1},inviteAddress:{type:Array,default:function(){return[]}},inviteNum:{type:Number,default:0},luckRate:{type:Number,default:0}},data:function(){return{visables:this.showInvitedlist}},watch:{showInvitedlist:function(t){this.visables=t}},methods:{close:function(){this.$emit("closeInvitedCard",!1)}}};i(548),i=i(27),n=Object(i.a)(n,(function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("van-popup",{attrs:{"close-icon-position":"top-right","close-on-click-overlay":!1,closeable:""},on:{"click-close-icon":i.close},model:{value:i.visables,callback:function(t){i.visables=t},expression:"visables"}},[e("div",{staticClass:"InvitedBox"},[e("div",{staticClass:"content"},[e("div",{staticClass:"title TTORegular"},[i._v(i._s(i.$t("polygon.inviteCount"))+" "),e("span",{staticClass:"TTOMedium"},[i._v(i._s(i.inviteNum))])]),i._v(" "),e("div",{staticClass:"title TTORegular"},[i._v(i._s(i.$t("polygon.inviteTips2"))),e("span",{staticClass:"TTOMedium "},[i._v(i._s(i.luckRate)+"%")])]),i._v(" "),e("div",{staticClass:"Invitedlist TTORegular"},i._l(i.inviteAddress,(function(t,n){return e("div",{key:n,staticClass:"item TTORegular"},[e("div",{staticClass:"TTORegular Invitedlabel"},[i._v("\n            "+i._s(i.$t("polygon.inviteAddress"))+"\n          ")]),i._v(" "),e("div",{staticClass:"address TTORegular"},[i._v("\n            "+i._s(t)+"\n          ")])])})),0)])])])}),[],!1,null,"0a4149d6",null);e.default=n.exports},586:function(t,e,i){"use strict";i.r(e);var n={name:"WhitelistCard",props:{showWhitelist:{type:Boolean,default:!1}},data:function(){return{MintNum:0,visables:this.showWhitelist}},watch:{showWhitelist:function(t){this.visables=t}},methods:{close:function(){this.$emit("closeWhitelistcard",!1)}}};i(549),i=i(27),n=Object(i.a)(n,(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("van-popup",{attrs:{"close-icon-position":"top-right",closeable:"","close-on-click-overlay":!1},on:{"click-close-icon":t.close},model:{value:t.visables,callback:function(e){t.visables=e},expression:"visables"}},[e("div",{staticClass:"WhitelistBox"},[e("div",{staticClass:"content TTORegular"},[e("h1",{staticClass:"TTORegular title1"},[t._v(t._s(t.$t("polygon.whiteTitle")))]),t._v(" "),e("div",{staticClass:"TTORegular"},[t._v(t._s(t.$t("polygon.whiteTips1")))]),t._v(" "),e("div",{staticClass:"TTORegular"},[t._v(t._s(t.$t("polygon.whiteTips2")))]),t._v(" "),e("div",{staticClass:"TTORegular"},[t._v(t._s(t.$t("polygon.whiteTips3")))]),t._v(" "),e("div",{staticClass:"TTORegular"},[t._v(t._s(t.$t("polygon.whiteTips4")))]),t._v(" "),e("h1",{staticClass:"TTORegular title2"},[t._v(t._s(t.$t("polygon.whiteTips9")))]),t._v(" "),e("div",{staticClass:"TTORegular"},[t._v(t._s(t.$t("polygon.whiteTips5")))]),t._v(" "),e("div",{staticClass:"TTORegular"},[t._v(t._s(t.$t("polygon.whiteTips6")))])])])])}),[],!1,null,"f9426a7a",null);e.default=n.exports},587:function(t,e,i){"use strict";i.r(e);var n={name:"MintSuccess",components:{Swiper:(n=i(540)).Swiper,SwiperSlide:n.SwiperSlide},props:{showMintSuccess:{type:Boolean,default:!1},MintData:{type:Array,default:function(){return[]}},sendhash:{type:String,default:""}},data:function(){return{MintNum:1,visables:this.showMintSuccess,swiperOption:{loop:!1,pagination:{el:".swiper-pagination",clickable:!0},prevButton:".swiper-button-prev",nextButton:".swiper-button-next",slidesPerView:4,observer:!0,observeParents:!0,preventClicks:!1,slideToClickedSlide:!1,slidesPerColumn:1,slidesOffsetAfter:150,swiperOption:{initialSlide:0,slidesPerView:2.4,direction:"horizontal",loop:!1}}}},watch:{showMintSuccess:function(t){this.visables=t}},methods:{close:function(){this.$emit("closeMintSuccess",!1)}}};i(550),i=i(27),n=Object(i.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("van-popup",{attrs:{"close-icon-position":"top-right",closeable:"","close-on-click-overlay":!1},on:{"click-close-icon":t.close},model:{value:t.visables,callback:function(e){t.visables=e},expression:"visables"}},[i("div",{staticClass:"Mintpopup"},[i("div",{staticClass:"TTORegular title"},[t._v("\n      "+t._s(t.$t("polygon.mintTitle1"))+"\n      "),i("span",{staticClass:"TTOMedium"},[t._v("("+t._s(t.MintData.length)+")")])]),t._v(" "),1<t.MintData.length?i("div",{staticClass:"MentList"},[i("swiper",{staticClass:"swiper-wrapper",attrs:{options:t.swiperOption},on:{mousemove:function(t){return t}}},t._l(t.MintData,(function(e){return i("swiper-slide",{key:e.tokenId},[i("div",{staticClass:"Mentlogo",class:1==e.selected?"MentlogoActive":""},[i("img",{attrs:{src:e.picUrl,alt:""}}),t._v(" "),i("div",{staticClass:"TTORegular tokenId"},[t._v("Token ID: #"+t._s(e.tokenId))])])])})),1)],1):1==t.MintData.length?i("div",{staticClass:"Mintlogo"},[i("img",{attrs:{src:t.MintData[0].picUrl,alt:""}}),t._v(" "),i("div",{staticClass:"TTORegular tokenId"},[t._v("Token ID: #"+t._s(t.MintData[0].tokenId))])]):t._e()])])}),[],!1,null,"7582815d",null);e.default=n.exports},590:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB2wAAACSCAMAAAC+G8oVAAAAV1BMVEUAAABJSE1JSUuNO+4A9bmPO+xKSkwA9L4A8ryPOu+OOe2MPOyNOvRISEmIPvCROOuJPfhGRkeBRt+HQudSRkSNQtxYQVNMTE48TztHRmBPQF99S8pORGLd2d2hAAAAAXRSTlMAQObYZgAAAiRJREFUeNrs1bENwzAMADBVKJwsGjz5/0/zhSDA5BOM/3ABcIWsH60yz44msgUYYcu22crqy/YZLgCuUJW0qrVOdHmHC4Ar7JP02lUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8LEHBwIAAAAAQP6vjaCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqKuzXUQqCQABFUTMYmGTMUTE197/OLOivj2D8knPeIi4PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4T/0IIaRLoXlelnFs2xjvuxivhbquAoCzSCnlEA6I7Sa2APDT+9eGVBdK47ZOUz8MTdO0u1iof1YAcBY5pH11oZzXb2w/ub0VGsQWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABe7MGBAAAAAACQ/2sjqKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpKe3WQgjAMBFA0VhRChhgivf9VbU8guGid8t4J/u4DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXM/so8dmXSMeJ6u1tTH6LEAaz4QKHG2+e5gt8KsloQJHe9WIttlHdz/d3lBrAdJYlls6Bb4xW+CfZJztB46+OEKL6P/TAAAAAElFTkSuQmCC"},591:function(t,e,i){t.exports=i.p+"img/InvitationCodeBg.64d5921.png"},592:function(t,e,i){t.exports=i.p+"img/question.1528a29.png"},593:function(t,e,i){t.exports=i.p+"img/Py_bottom.0303eae.png"},594:function(t,e,i){t.exports=i.p+"img/Py_bg1.96ccbad.png"},595:function(t,e,i){t.exports=i.p+"img/Py_bg8.414b8a3.png"},596:function(t,e,i){t.exports=i.p+"img/Py_bg7.b0fd28c.png"},597:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAABQCAMAAADMfVahAAAAP1BMVEUAAABJSU1JSU0A9LoA9LqMO+6MO+7///////+KPOlSSGIA9Lr///+MO+6EPtr///9JSU2MO+4A9Lr///+EPtqCfm7pAAAAEHRSTlMAIN8f398g3yAd78Mcw9/D+ij3GwAAALlJREFUeNrt11kSgjAARMGobGERUe9/Vo8AFSpArO4zvI+ZABl07SdZ2wXYTLwgXoo3zm2yeQxworFLpl0AAAAAAAAAAAAAAAAAAAAAAAAAAAAA4EpunCI2u8WQ4JFZONKdM/TPercpJrQ7VFkNh9b74gz9d9mtbhLird5ZVeL9f+I1G4plNjhs5XLYAAAAAAAAAAAAAAAAAAAAAAAAAAAAsonNugAXFKd6XYALauplXYALEi/F2hTvD5rJc11EJOTPAAAAAElFTkSuQmCC"},598:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiwAAABQCAMAAAAN1t5IAAAAP1BMVEUAAABJSU1JSU0A9LoA9LqMO+6MO+7///////8A9Lr///+MO+6EPtpSSGL///9JSU2MO+4A9Lr///+EPtpSSGL1h9CeAAAAD3RSTlMAIN8f3x/f3yDDHMPf38Nfb3TIAAAAqUlEQVR42u3WCQ6CQBREwa+yo4DL/c9qOAFmWEKcqjO8pDv4C039SlY3QU7EgljYXjfUyYYuyErXJNMKAAAAAAAAAAAAAAAAAAAAAADA+VwyUW4gEtx2Fke65uFxr1bry4RW2mJX7aG1jHn4vKfVqpRYiueuCrGMYjllLNc8mCEH18ENAAAAAAAAAAAAAAAAAAAAACBF+YOAuZW+WhYwx1JNywLEwuaxfAH8FVm0DE1usQAAAABJRU5ErkJggg=="},599:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i(96),s=i(97),o=(e=i(50),e=i(14),new(function(){function t(e){Object(n.a)(this,t),this.name="storage"}return Object(s.a)(t,[{key:"setItem",value:function(t){var e={name:"",value:"",expires:"",startTime:(new Date).getTime()},i={};Object.assign(i,e,t),i.expires?localStorage.setItem(i.name,JSON.stringify(i)):(Object.prototype.toString.call(i.value),"[object Object]"==Object.prototype.toString.call(i.value)&&(i.value=JSON.stringify(i.value)),"[object Array]"==Object.prototype.toString.call(i.value)&&(i.value=JSON.stringify(i.value)),localStorage.setItem(i.name,i.value))}},{key:"getItem",value:function(t){var e=localStorage.getItem(t);if(!e)return null;try{e=JSON.parse(e)}catch(t){}return e.startTime?(new Date).getTime()-e.startTime>e.expires?(localStorage.removeItem(t),!1):e.value:e}},{key:"removeItem",value:function(t){localStorage.removeItem(t)}},{key:"clear",value:function(){localStorage.clear()}}]),t}()))},600:function(t,e,i){"use strict";var n=i(358);i(1).default.directive("copy",{bind:function(t,e){e=e.value,t.$value=e,t.handler=function(){var e;t.$value?((e=document.createElement("textarea")).readOnly="readonly",e.style.position="absolute",e.style.left="-9999px",e.value=t.$value,document.body.appendChild(e),e.select(),e.setSelectionRange(0,e.value.length),document.execCommand("Copy")&&-1==t.className.indexOf("congratulations_deposit_span")&&n.a.success("Copy Success"),document.body.removeChild(e)):n.a.fail("无复制内容")},t.addEventListener("click",t.handler)},componentUpdated:function(t,e){e=e.value,t.$value=e},unbind:function(t){t.removeEventListener("click",t.handler)}})},601:function(t,e,i){"use strict";var u=i(663),p={"text/plain":"Text","text/html":"Url",default:"Text"};t.exports=function(i,t){var e,n,s,o,a=!1;t=t||{};try{var r=u(),l=document.createRange(),c=document.getSelection();if((n=document.createElement("span")).textContent=i,n.style.all="unset",n.style.position="fixed",n.style.top=0,n.style.clip="rect(0, 0, 0, 0)",n.style.whiteSpace="pre",n.style.webkitUserSelect="text",n.style.MozUserSelect="text",n.style.msUserSelect="text",n.style.userSelect="text",n.addEventListener("copy",(function(e){var n;e.stopPropagation(),t.format&&(e.preventDefault(),void 0===e.clipboardData?(window.clipboardData.clearData(),n=p[t.format]||p.default,window.clipboardData.setData(n,i)):(e.clipboardData.clearData(),e.clipboardData.setData(t.format,i))),t.onCopy&&(e.preventDefault(),t.onCopy(e.clipboardData))})),document.body.appendChild(n),l.selectNodeContents(n),c.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");a=!0}catch(n){try{window.clipboardData.setData(t.format||"text",i),t.onCopy&&t.onCopy(window.clipboardData),a=!0}catch(n){s="message"in t?t.message:"Copy to clipboard: #{key}, Enter",o=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",e=s.replace(/#{\s*key\s*}/g,o),window.prompt(e,i)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(l):c.removeAllRanges()),n&&document.body.removeChild(n),r()}return a}},663:function(t,e){t.exports=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,i=[],n=0;n<t.rangeCount;n++)i.push(t.getRangeAt(n));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null}return t.removeAllRanges(),function(){"Caret"===t.type&&t.removeAllRanges(),t.rangeCount||i.forEach((function(e){t.addRange(e)})),e&&e.focus()}}}}]);