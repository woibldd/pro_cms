(window.webpackJsonp=window.webpackJsonp||[]).push([[5,63],{401:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n(59);e=n(18);var r=n(97),i=(e=n.n(r),n(2)),a=n(96),s=(n(95),function(){for(var t,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];(t=console).log.apply(t,["bit-activity-request:"].concat(n))}),u=e.a.create({baseURL:"https://b1.bitkeep.top",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});u.interceptors.request.use((function(t){var e,n,r;return s("requestlog:",t),i.default.prototype.$store&&(n=(r=(e=i.default.prototype.$store.state).local).UA,r=r.locale,n.isBitKeep?Object.assign(t.headers,e.local.bitkeep,{language:r}):Object.assign(t.headers,{language:r})),t}),(function(t){return Promise.resolve({status:1})})),u.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];(t=console).log.apply(t,["bit-activity-response:"].concat(n))}("responselog:",t);var e="网路开了小差";e=(t=Object(a.b)()||{}).t?t.t("base.networkErro"):e;return Promise.resolve({status:1,data:e})}));var o={mBoxList:function(t){return u.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return u.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return u.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return u.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return u.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return u.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return u.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return u.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return u.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return u.post("swap/mining/info",t)},historyPhase:function(t){return u.post("swap/mining/historyPhase",t)},receiveAward:function(t){return u.post("swap/mining/receiveAward",t)},getInviteList:function(t){return u.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return u.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return u.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return u.post("/user/cloudstaking/poolList",t)},myPool:function(t){return u.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return u.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return u.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return u.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return u.post("/user/cloudstaking/getToken",t)},tradingGetList:function(t){return u.post("swap/tradeCompetition/getList",t)},tradingWaitClaim:function(t){return u.post("swap/tradeCompetition/waitClaim",t)},tradingClaim:function(t){return u.post("swap/tradeCompetition/claim",t)},tradingSummary:function(t){return u.post("swap/tradeCompetition/summary",t)},tradingHistory:function(t){return u.post("swap/tradeCompetition/history",t)},welfareSignIn:function(t){return u.post("user/welfare/signIn",t)},getRewardDetail:function(t){return u.post("user/welfare/getRewardDetail",t)},getSignInDetailByUser:function(t){return u.post("user/welfare/getSignInDetailByUser",t)},getRewardResult:function(t){return u.post("user/welfare/getRewardResult",t)},pushPapersIn:function(t){return u.post("user/welfare/pushPapersIn",t)},getJoinTeleJob:function(t){return u.post("user/welfare/getJoinTeleJob",t)},getFirstSwapJob:function(t){return u.post("user/welfare/getFirstSwapJob",t)},getFirst50UJob:function(t){return u.post("user/welfare/getFirst50UJob",t)},newUserRewardJobs:function(t){return u.post("user/welfare/newUserRewardJobs",t)},nftMintGetInfo:function(t){return u.post("/operation/nftmint/getInfo",t)},nftMintInvite:function(t){return u.post("/operation/nftmint/invite",t)},buildNftMintTxs:function(t){return u.post("/operation/nftmint/buildNftMintTxs",t)},nftMintGetToken:function(t){return u.post("/operation/nftmint/getToken",t)},nftMintLotteryList:function(t){return u.post("/operation/nftmint/LotteryList",t)},nftMintbuildNftMeltTxs:function(t){return u.post("/operation/nftmint/buildNftMeltTxs",t)},nftMintnftList:function(t){return u.post("/operation/nftmint/nftList",t)},nftMintcheckTransaction:function(t){return u.post("/operation/nftmint/checkTransaction",t)}}},551:function(t,e,n){"use strict";n.r(e),n.d(e,"transfer16",(function(){return f})),n.d(e,"wallet",(function(){return d}));e=n(257);var u=n(32),r=n(4),o=n(113),p=n(114),c=n(179),i=n(180),a=n(138);e=n(58),e=n(254),e=n(18),e=n(66),e=n(59),e=n(178);function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(a.a)(t);return r=e?(n=Object(a.a)(this).constructor,Reflect.construct(r,arguments,n)):r.apply(this,arguments),Object(i.a)(this,r)}}function f(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"1";return"0x"+(t=isNaN(Number(t))?1:Number(t)).toString(16)}var d=new(function(t){Object(c.a)(m,t);var e,n,d,i,a,s=l(m);function m(){var t;return Object(o.a)(this,m),(t=s.call(this))._accounts=[],t._chainId=0,t._walletPlatform="bitkeep",t}return Object(p.a)(m,[{key:"isInstall",value:function(){return!!window.ethereum&&!!window.isBitKeep}},{key:"isConnected",value:function(){return window.ethereum&&window.ethereum.isConnected()}},{key:"connect",value:(a=Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isInstall())return t.next=3,ethereum.request({method:"eth_requestAccounts"});t.next=8;break;case 3:return e=t.sent,this.initEvent(),t.abrupt("return",e[0]);case 8:return t.abrupt("return",{status:50001,message:"please download bitkeep chrome "});case 9:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"selectedAddress",value:function(){return window.ethereum&&ethereum.selectedAddress}},{key:"getWalletInfo",value:function(){return{address:window.ethereum&&ethereum.selectedAddress,chainName:window.ethereum&&window.ethereum.chainName||"eth",chainId:window.ethereum&&window.ethereum.chainId||"1",walletId:"",walletPlatform:this.getWalletPlatform()}}},{key:"getChainId",value:(i=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",window.ethereum&&window.ethereum.request({method:"eth_chainId"}));case 1:case"end":return t.stop()}}),t)}))),function(){return i.apply(this,arguments)})},{key:"switchChainId",value:(d=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=7;break}return t.next=3,this.getAccounts();case 3:r=t.sent,r=(r=Object(u.a)(r,1))[0],n=r;case 7:return t.abrupt("return",window.ethereum&&window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:f(e)},n]}));case 8:case"end":return t.stop()}}),t,this)}))),function(t,e){return d.apply(this,arguments)})},{key:"getWalletPlatform",value:function(){return this._walletPlatform}},{key:"getAccounts",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",window.ethereum?window.ethereum.request({method:"eth_accounts"}):[]);case 1:case"end":return t.stop()}}),t)}))),function(){return n.apply(this,arguments)})},{key:"LoginSign",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,window.ethereum.request({method:"personal_sign",params:[e,n],from:n});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(t,n){return e.apply(this,arguments)})},{key:"initEvent",value:function(){var a=this;ethereum.removeAllListeners&&ethereum.removeAllListeners(),ethereum.on("accountsChanged",Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,i=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e=i.length,n=new Array(e),r=0;r<e;r++)n[r]=i[r];a.emit.apply(a,["accountsChanged"].concat(n));case 2:case"end":return t.stop()}}),t)})))),ethereum.on("chainChanged",Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,i=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e=i.length,n=new Array(e),r=0;r<e;r++)n[r]=i[r];a.emit.apply(a,["chainChanged"].concat(n));case 2:case"end":return t.stop()}}),t)}))))}}]),m}(n.n(e).a))},662:function(t,e,n){},663:function(t,e,n){},766:function(t,e,n){"use strict";n(662)},767:function(t,e,n){"use strict";n(663)},779:function(t,e,n){"use strict";n.r(e);var r=n(4),i=(n(58),n(75),n(50),n(74),n(18),n(66),n(172)),a=n(401),s=n(551);i={data:function(){return{addAllContent:"",visables:this.showPool,btnStatus:!1,closeIcon:"https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},watch:{showPool:function(t){this.visables=t}},props:["token","stakeId","address","showPool","theme","currencyReward","stakeAmount","stakingStatus"],mounted:function(){1==this.theme?this.closeIcon="https://cdn.bitkeep.vip/u_b_d71e28c0-4c2d-11ec-ad04-d1b66ed0d35e.png":this.closeIcon="https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"},methods:{swapConfirm:Object(i.b)(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.currencyReward+this.stakeAmount==0)return t.abrupt("return");t.next=2;break;case 2:return this.btnStatus=!0,t.next=5,a.a.receiveStakingReward({userid:this.address,stakeId:this.stakeId,c_token:this.token,verifyToken:e});case 5:if(n=t.sent,r=n.data,1==n.status)return this.close(),setTimeout((function(){i.btnStatus=!1}),1e3),t.abrupt("return",this.$toast(r));t.next=12;break;case 12:this.$toast(r),this.$emit("Cancel",!0),setTimeout((function(){i.btnStatus=!1}),1e3);case 15:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()),sign:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.wallet.LoginSign(t.token,t.address);case 3:n=e.sent,t.swapConfirm(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.$toast("You canceled signature authorization!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},close:function(){this.$emit("Cancel",!1)},Cancel:function(){this.$emit("Cancel")},milliFormat:function(t){return t&&t.toString().replace(/^\d+/g,(function(t){return t.replace(/(?=(?!^)(\d{3})+$)/g,",")}))}}},n(766),n(767),n=n(37),i=Object(n.a)(i,(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("van-popup",{staticClass:"colorBackground1 setHeight",style:{overflow:"hidden"},attrs:{closeable:"","close-icon":t.closeIcon,round:"",position:"bottom"},on:{"click-overlay":t.close,"click-close-icon":t.close},model:{value:t.visables,callback:function(e){t.visables=e},expression:"visables"}},[e("div",{staticClass:"title"},[e("div",{staticClass:"textPrimary0"},[t._v(t._s(t.$t("staking.RemovePool")))])]),t._v(" "),e("div",{staticClass:"line colorLine"}),t._v(" "),e("div",{staticClass:"content"},[t.stakingStatus?e("img",{staticClass:"logo",attrs:{src:"https://cdn.bitkeep.vip/u_b_27f9ea80-a03a-11ec-ad8b-9ff4f858e021.png",alt:""}}):e("img",{staticClass:"logo",attrs:{src:"https://cdn.bitkeep.vip/u_b_eaa1a130-6792-11ec-ae16-9772e16dd24c.png",alt:""}}),t._v(" "),t.stakingStatus?e("p",{staticClass:"colorPrimary"},[e("span",{staticClass:"textPrimary0"},[t._v(t._s(t.$t("staking.getBKB")))]),e("br"),t._v(" "),e("span",{staticClass:"setFontFamily setFontSize24"},[t._v(t._s(t.milliFormat(+t.currencyReward+t.stakeAmount))+" BKB")])]):e("p",{staticClass:"textPrimary0 setFontSize",domProps:{innerHTML:t._s(t.$t("staking.removeBefore"))}}),t._v(" "),e("div",{staticClass:"content_invite"},[e("div",{staticClass:"content_invite_flex colorBackground3"},[e("div",{staticClass:"content_invite_flex_cont"},[e("div",[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_789923d0-a115-11ec-9053-8f11a0709c2b.png",alt:""}}),t._v(" "),e("span",{staticClass:"textSecond1"},[t._v(t._s(t.$t("staking.YourStakeAmount")))])]),t._v(" "),e("div",{staticClass:"invite_number textPrimary0 setFontFamily"},[t._v(t._s(t.milliFormat(t.stakeAmount))+" BKB")])]),t._v(" "),e("div",{staticClass:"content_invite_flex_cont setMargin"},[e("div",[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e6523a60-a110-11ec-b65f-cd102ebe79d3.png",alt:""}}),t._v(" "),e("span",{staticClass:"textSecond1"},[t._v(t._s(t.$t("staking.Interests")))])]),t._v(" "),e("div",{staticClass:"invite_number colorSecond01 setFontFamily"},[t._v(t._s(t.milliFormat(t.currencyReward))+" BKB")])])])])]),t._v(" "),e("div",{staticClass:"confirm-bottom"},[e("van-button",{staticClass:"swap-btn colorBackground2",class:t.stakingStatus?"colorBackground2 textPrimary0":"colorBackgroundPrimary colorwhite",attrs:{disabled:t.btnStatus},on:{click:t.Cancel}},[t._v(t._s(t.$t("staking.Cancel")))]),t._v(" "),e("van-button",{staticClass:"swap-btn",class:t.stakingStatus?"colorBackgroundPrimary colorwhite":"colorBackground2 textPrimary0",attrs:{disabled:t.btnStatus},on:{click:t.sign}},[t._v(t._s(t.$t("staking.Remove")))])],1)])}),[],!1,null,"49c56fde",null);e.default=i.exports}}]);