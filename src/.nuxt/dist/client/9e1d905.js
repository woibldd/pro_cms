(window.webpackJsonp=window.webpackJsonp||[]).push([[7,67],{437:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n(61);t=n(18);var r=n(100),o=(t=n.n(r),n(2)),a=n(99),c=(r=n(64),Object(r.debug)("bit-activity-request")),i=Object(r.debug)("bit-activity-response"),s=t.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});s.interceptors.request.use((function(e){var t,n,r;return c("requestlog:",e),o.default.prototype.$store&&(n=(r=(t=o.default.prototype.$store.state).local).UA,r=r.locale,n.isBitKeep?Object.assign(e.headers,t.local.bitkeep,{language:r}):Object.assign(e.headers,{language:r})),e}),(function(e){return Promise.resolve({status:1})})),s.interceptors.response.use((function(e){return e.data}),(function(e){i("responselog:",e);var t="网路开了小差";t=(e=Object(a.b)()||{}).t?e.t("base.networkErro"):t;return Promise.resolve({status:1,data:t})}));var d={mBoxList:function(e){return s.get("user/activity/mBoxList",{params:e,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(e){return s.get("user/activity/openMBox",{params:e})},helpMBox:function(e){return s.get("user/activity/helpMBox",{params:e})},userInviteList:function(e){return s.get("user/activity/inviteList",{params:e})},mBoxDetail:function(e){return s.get("user/activity/mBoxDetail",{params:e})},getCbkbSwapInfo:function(e){return s.get("user/cloudwallet/getCbkbSwapInfo",{params:e})},swapBkb:function(e){return s.get("user/cloudwallet/swapBkb",{params:e})},getAirDropCount:function(e){return s.post("user/cloudwallet/getAirDropCount",e)},getAirDrop:function(e){return s.post("user/cloudwallet/getAirDrop",e)},miningInfo:function(e){return s.post("swap/mining/info",e)},historyPhase:function(e){return s.post("swap/mining/historyPhase",e)},receiveAward:function(e){return s.post("swap/mining/receiveAward",e)},getInviteList:function(e){return s.post("user/friendship/getInviteList",e)},certifyFriendship:function(e){return s.post("user/friendship/certifyFriendship",e)},activityDoneRewardList:function(e){return s.post("swap/mining/activityDoneRewardList",e)},poolList:function(e){return s.post("/user/cloudstaking/poolList",e)},myPool:function(e){return s.post("/user/cloudstaking/myPool",e)},stakeHistory:function(e){return s.post("/user/cloudstaking/stakeHistory",e)},receiveStakingReward:function(e){return s.post("/user/cloudstaking/receiveStakingReward",e)},staking:function(e){return s.post("/user/cloudstaking/staking",e)},handleGetToken:function(e){return s.post("/user/cloudstaking/getToken",e)},tradingGetList:function(e){return s.post("swap/tradeCompetition/getList",e)},tradingWaitClaim:function(e){return s.post("swap/tradeCompetition/waitClaim",e)},tradingClaim:function(e){return s.post("swap/tradeCompetition/claim",e)},tradingSummary:function(e){return s.post("swap/tradeCompetition/summary",e)},tradingHistory:function(e){return s.post("swap/tradeCompetition/history",e)},welfareSignIn:function(e){return s.post("user/welfare/signIn",e)},getRewardDetail:function(e){return s.post("user/welfare/getRewardDetail",e)},getSignInDetailByUser:function(e){return s.post("user/welfare/getSignInDetailByUser",e)},getRewardResult:function(e){return s.post("user/welfare/getRewardResult",e)},pushPapersIn:function(e){return s.post("user/welfare/pushPapersIn",e)},getJoinTeleJob:function(e){return s.post("user/welfare/getJoinTeleJob",e)},getFirstSwapJob:function(e){return s.post("user/welfare/getFirstSwapJob",e)},getFirst50UJob:function(e){return s.post("user/welfare/getFirst50UJob",e)},newUserRewardJobs:function(e){return s.post("user/welfare/newUserRewardJobs",e)},nftMintGetInfo:function(e){return s.post("/operation/nftmint/getInfo",e)},nftMintInvite:function(e){return s.post("/operation/nftmint/invite",e)},buildNftMintTxs:function(e){return s.post("/operation/nftmint/buildNftMintTxs",e)},nftMintGetToken:function(e){return s.post("/operation/nftmint/getToken",e)},nftMintLotteryList:function(e){return s.post("/operation/nftmint/LotteryList",e)},nftMintbuildNftMeltTxs:function(e){return s.post("/operation/nftmint/buildNftMeltTxs",e)},nftMintnftList:function(e){return s.post("/operation/nftmint/nftList",e)},nftMintcheckTransaction:function(e){return s.post("/operation/nftmint/checkTransaction",e)}}},593:function(e,t,n){"use strict";n.r(t),n.d(t,"transfer16",(function(){return g})),n.d(t,"wallet",(function(){return f}));t=n(278);var s=n(33),r=n(4),u=n(116),o=n(117),c=n(186),d=n(187),a=n(144);t=n(52),t=n(274),t=n(18),t=n(69),t=n(61),t=n(185);function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(a.a)(e);return r=t?(n=Object(a.a)(this).constructor,Reflect.construct(r,arguments,n)):r.apply(this,arguments),Object(d.a)(this,r)}}function g(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"1";return"0x"+(e=isNaN(Number(e))?1:Number(e)).toString(16)}var f=new(function(e){Object(c.a)(i,e);var t,n,d,f,a,m=l(i);function i(){var e;return Object(u.a)(this,i),(e=m.call(this))._accounts=[],e._chainId=0,e._walletPlatform="bitkeep",e}return Object(o.a)(i,[{key:"isInstall",value:function(){var e=!!window.ethereum&&!!window.isBitKeep;return e||console.warn("no installed bitkeep"),e}},{key:"isConnected",value:function(){return window.ethereum&&window.ethereum.isConnected()}},{key:"connect",value:(a=Object(r.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isInstall())return e.next=3,ethereum.request({method:"eth_requestAccounts"});e.next=8;break;case 3:return t=e.sent,this.initEvent(),e.abrupt("return",t[0]);case 8:return e.abrupt("return",{status:50001,message:"please download bitkeep chrome "});case 9:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"selectedAddress",value:function(){return window.ethereum&&ethereum.selectedAddress}},{key:"getWalletInfo",value:function(){return{address:window.ethereum&&ethereum.selectedAddress,chainName:window.ethereum&&window.ethereum.chainName||"eth",chainId:window.ethereum&&window.ethereum.chainId||"1",walletId:"",walletPlatform:this.getWalletPlatform()}}},{key:"getChainId",value:(f=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.ethereum&&window.ethereum.request({method:"eth_chainId"}));case 1:case"end":return e.stop()}}),e)}))),function(){return f.apply(this,arguments)})},{key:"switchChainId",value:(d=Object(r.a)(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=7;break}return e.next=3,this.getAccounts();case 3:r=e.sent,r=(r=Object(s.a)(r,1))[0],n=r;case 7:return e.abrupt("return",window.ethereum&&window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:g(t)},n]}));case 8:case"end":return e.stop()}}),e,this)}))),function(e,t){return d.apply(this,arguments)})},{key:"getWalletPlatform",value:function(){return this._walletPlatform}},{key:"getAccounts",value:(n=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.ethereum?window.ethereum.request({method:"eth_accounts"}):[]);case 1:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})},{key:"LoginSign",value:(t=Object(r.a)(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,n,"dataToSign, addressdataToSign, addressdataToSign, address"),e.next=3,window.ethereum.request({method:"personal_sign",params:[t,n],from:n});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e,n){return t.apply(this,arguments)})},{key:"initEvent",value:function(){var a=this;ethereum.removeAllListeners&&ethereum.removeAllListeners(),ethereum.on("accountsChanged",Object(r.a)(regeneratorRuntime.mark((function e(){var t,n,r,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=o.length,n=new Array(t),r=0;r<t;r++)n[r]=o[r];a.emit.apply(a,["accountsChanged"].concat(n));case 2:case"end":return e.stop()}}),e)})))),ethereum.on("chainChanged",Object(r.a)(regeneratorRuntime.mark((function e(){var t,n,r,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=o.length,n=new Array(t),r=0;r<t;r++)n[r]=o[r];a.emit.apply(a,["chainChanged"].concat(n));case 2:case"end":return e.stop()}}),e)}))))}}]),i}(n.n(t).a))},743:function(e,t,n){var r=n(873);(r="string"==typeof(r=r.__esModule?r.default:r)?[[e.i,r,""]]:r).locals&&(e.exports=r.locals),(0,n(51).default)("798380d6",r,!0,{sourceMap:!1})},744:function(e,t,n){var r=n(875);(r="string"==typeof(r=r.__esModule?r.default:r)?[[e.i,r,""]]:r).locals&&(e.exports=r.locals),(0,n(51).default)("290f22fb",r,!0,{sourceMap:!1})},872:function(e,t,n){"use strict";n(743)},873:function(e,t,n){(n=n(50)(!1)).push([e.i,".van-popup__close-icon--top-right {\n  top: 0.27rem;\n  right: 0.24rem;\n}\n.van-popup__close-icon--top-right img {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.theme-dark .van-toast {\n  background-color: #dfe0e3;\n  color: #171a26;\n}",""]),e.exports=n},874:function(e,t,n){"use strict";n(744)},875:function(e,t,n){(n=n(50)(!1)).push([e.i,".theme-light .textPrimary0[data-v-49c56fde] {\n  color: #0E0E0E;\n}\n.theme-light .textSecond1[data-v-49c56fde] {\n  color: #515556;\n}\n.theme-light .textSecond2[data-v-49c56fde] {\n  color: #919899;\n}\n.theme-light .textSecond3[data-v-49c56fde] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-49c56fde] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-49c56fde] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-49c56fde] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-49c56fde] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-49c56fde] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-49c56fde] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-49c56fde] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-49c56fde] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-49c56fde] {\n  background-color: #7524f9;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-49c56fde] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-49c56fde] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-49c56fde] {\n  background-color: #0E0E0E;\n}\n.theme-light .colorPrimary[data-v-49c56fde] {\n  color: #7524f9;\n}\n.theme-light .colorSecond01[data-v-49c56fde] {\n  color: #2AC8DD;\n}\n.theme-light .backgroundSecond01[data-v-49c56fde] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorSecond02[data-v-49c56fde] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-49c56fde] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-49c56fde] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-49c56fde] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-49c56fde] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-49c56fde] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-49c56fde] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-49c56fde] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-49c56fde] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-49c56fde] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-49c56fde] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-49c56fde] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-49c56fde] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-49c56fde] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-49c56fde] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-49c56fde] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-49c56fde] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-49c56fde] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-49c56fde] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-49c56fde] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-49c56fde] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-49c56fde] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-49c56fde] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-49c56fde] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-49c56fde] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-49c56fde] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-49c56fde] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-49c56fde] {\n  background-color: #7524f9;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-49c56fde] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-49c56fde] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-49c56fde] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-49c56fde] {\n  color: #7524f9;\n}\n.theme-dark .colorSecond01[data-v-49c56fde] {\n  color: #2AC8DD;\n}\n.theme-dark .backgroundSecond01[data-v-49c56fde] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorSecond02[data-v-49c56fde] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-49c56fde] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-49c56fde] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-49c56fde] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-49c56fde] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-49c56fde] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-49c56fde] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-49c56fde] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-49c56fde] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-49c56fde] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-49c56fde] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-49c56fde] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-49c56fde] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-49c56fde] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-49c56fde] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-49c56fde] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .Background0[data-v-49c56fde] {\n  background-color: #fafafa;\n}\n.theme-light .Background0[data-v-49c56fde] {\n  background-color: #F8F8F9;\n}\n.theme-dark .Background0[data-v-49c56fde] {\n  background-color: #17171A;\n}\n.theme-dark .Background1[data-v-49c56fde] {\n  background-color: #202024;\n}\n.setHeight[data-v-49c56fde] {\n  height: 10.67rem;\n}\n.title[data-v-49c56fde] {\n  margin: 0.37rem 0.43rem;\n  text-align: center;\n  font-size: 0.43rem;\n  font-weight: 500;\n}\n.setOpactive[data-v-49c56fde] {\n  opacity: 0.3;\n}\n.line[data-v-49c56fde] {\n  width: 100%;\n  margin-top: 0;\n  height: 0.03rem;\n}\n.content[data-v-49c56fde] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  overflow: auto;\n  padding-top: 0.53rem;\n}\n.content .content_invite[data-v-49c56fde] {\n  width: 100%;\n}\n.content .content_invite .content_invite_flex[data-v-49c56fde] {\n  border-radius: 0.16rem;\n  margin: 0.27rem 0.53rem 0.53rem;\n  padding: 0.27rem;\n}\n.content .content_invite .content_invite_flex .content_invite_flex_cont[data-v-49c56fde] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.content .content_invite .content_invite_flex .setMargin[data-v-49c56fde] {\n  margin-top: 0.37rem;\n}\n.content .content_invite .content_invite_flex img[data-v-49c56fde] {\n  width: 0.43rem;\n  height: 0.43rem;\n  vertical-align: sub;\n}\n.content .content_invite .content_invite_flex span[data-v-49c56fde] {\n  display: inline-block;\n  margin-left: 0.13rem;\n  font-size: 0.37rem;\n}\n.content .content_invite .content_invite_flex .invite_number[data-v-49c56fde] {\n  font-size: 0.37rem;\n}\n.content img[data-v-49c56fde] {\n  width: 1.28rem;\n  height: 1.28rem;\n}\n.content p[data-v-49c56fde] {\n  font-size: 0.64rem;\n  margin: 0.27rem;\n  text-align: center;\n}\n.content p span[data-v-49c56fde] {\n  font-size: 0.48rem;\n}\n.content .setFontSize[data-v-49c56fde] {\n  font-size: 0.48rem;\n  font-weight: 600;\n}\n.content .setFontSize24[data-v-49c56fde] {\n  font-size: 0.64rem;\n}\n.confirm-bottom[data-v-49c56fde] {\n  height: 1.28rem;\n  width: 100%;\n  bottom: 0;\n  z-index: 99;\n  position: fixed;\n  padding: 0.29rem 0 0.91rem;\n  left: 50%;\n  transform: translateX(-50%);\n  text-align: center;\n}\n.confirm-bottom .swap-btn[data-v-49c56fde] {\n  font-weight: 500;\n  height: 1.33rem;\n  border-radius: 0.27rem;\n  text-align: center;\n  line-height: 1.17rem;\n  border: none;\n  font-size: 0.43rem;\n  width: 4.45rem;\n  z-index: 0;\n  margin-left: 0.27rem;\n}",""]),e.exports=n},903:function(e,t,n){"use strict";n.r(t);var r=n(4),o=(n(52),n(79),n(53),n(78),n(18),n(69),n(180)),a=n(437),c=n(593);o={data:function(){return{addAllContent:"",visables:this.showPool,btnStatus:!1,closeIcon:"https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"}},watch:{showPool:function(e){this.visables=e}},props:["token","stakeId","address","showPool","theme","currencyReward","stakeAmount","stakingStatus"],mounted:function(){1==this.theme?this.closeIcon="https://cdn.bitkeep.vip/u_b_d71e28c0-4c2d-11ec-ad04-d1b66ed0d35e.png":this.closeIcon="https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"},methods:{swapConfirm:Object(o.b)(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t){var n,r,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.currencyReward+this.stakeAmount==0)return e.abrupt("return");e.next=2;break;case 2:return this.btnStatus=!0,e.next=5,a.a.receiveStakingReward({userid:this.address,stakeId:this.stakeId,c_token:this.token,verifyToken:t});case 5:if(n=e.sent,r=n.data,1==n.status)return this.close(),setTimeout((function(){o.btnStatus=!1}),1e3),e.abrupt("return",this.$toast(r));e.next=12;break;case 12:this.$toast(r),this.$emit("Cancel",!0),setTimeout((function(){o.btnStatus=!1}),1e3);case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()),sign:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.wallet.LoginSign(e.token,e.address);case 3:n=t.sent,e.swapConfirm(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.$toast("You canceled signature authorization!");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},close:function(){this.$emit("Cancel",!1)},Cancel:function(){this.$emit("Cancel")},milliFormat:function(e){return e&&e.toString().replace(/^\d+/g,(function(e){return e.replace(/(?=(?!^)(\d{3})+$)/g,",")}))}}},n(872),n(874),n=n(29),o=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(t=e._self._c||t)("van-popup",{staticClass:"colorBackground1 setHeight",style:{overflow:"hidden"},attrs:{closeable:"","close-icon":e.closeIcon,round:"",position:"bottom"},on:{"click-overlay":e.close,"click-close-icon":e.close},model:{value:e.visables,callback:function(t){e.visables=t},expression:"visables"}},[t("div",{staticClass:"title"},[t("div",{staticClass:"textPrimary0"},[e._v(e._s(e.$t("staking.RemovePool")))])]),e._v(" "),t("div",{staticClass:"line colorLine"}),e._v(" "),t("div",{staticClass:"content"},[e.stakingStatus?t("img",{staticClass:"logo",attrs:{src:"https://cdn.bitkeep.vip/u_b_27f9ea80-a03a-11ec-ad8b-9ff4f858e021.png",alt:""}}):t("img",{staticClass:"logo",attrs:{src:"https://cdn.bitkeep.vip/u_b_eaa1a130-6792-11ec-ae16-9772e16dd24c.png",alt:""}}),e._v(" "),e.stakingStatus?t("p",{staticClass:"colorPrimary"},[t("span",{staticClass:"textPrimary0"},[e._v(e._s(e.$t("staking.getBKB")))]),t("br"),e._v(" "),t("span",{staticClass:"setFontFamily setFontSize24"},[e._v(e._s(e.milliFormat(+e.currencyReward+e.stakeAmount))+" BKB")])]):t("p",{staticClass:"textPrimary0 setFontSize",domProps:{innerHTML:e._s(e.$t("staking.removeBefore"))}}),e._v(" "),t("div",{staticClass:"content_invite"},[t("div",{staticClass:"content_invite_flex colorBackground3"},[t("div",{staticClass:"content_invite_flex_cont"},[t("div",[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_789923d0-a115-11ec-9053-8f11a0709c2b.png",alt:""}}),e._v(" "),t("span",{staticClass:"textSecond1"},[e._v(e._s(e.$t("staking.YourStakeAmount")))])]),e._v(" "),t("div",{staticClass:"invite_number textPrimary0 setFontFamily"},[e._v(e._s(e.milliFormat(e.stakeAmount))+" BKB")])]),e._v(" "),t("div",{staticClass:"content_invite_flex_cont setMargin"},[t("div",[t("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e6523a60-a110-11ec-b65f-cd102ebe79d3.png",alt:""}}),e._v(" "),t("span",{staticClass:"textSecond1"},[e._v(e._s(e.$t("staking.Interests")))])]),e._v(" "),t("div",{staticClass:"invite_number colorSecond01 setFontFamily"},[e._v(e._s(e.milliFormat(e.currencyReward))+" BKB")])])])])]),e._v(" "),t("div",{staticClass:"confirm-bottom"},[t("van-button",{staticClass:"swap-btn colorBackground2",class:e.stakingStatus?"colorBackground2 textPrimary0":"colorBackgroundPrimary colorwhite",attrs:{disabled:e.btnStatus},on:{click:e.Cancel}},[e._v(e._s(e.$t("staking.Cancel")))]),e._v(" "),t("van-button",{staticClass:"swap-btn",class:e.stakingStatus?"colorBackgroundPrimary colorwhite":"colorBackground2 textPrimary0",attrs:{disabled:e.btnStatus},on:{click:e.sign}},[e._v(e._s(e.$t("staking.Remove")))])],1)])}),[],!1,null,"49c56fde",null);t.default=o.exports}}]);