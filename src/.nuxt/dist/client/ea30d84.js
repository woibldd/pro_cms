(window.webpackJsonp=window.webpackJsonp||[]).push([[61,64],{364:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n(49);e=n(11);var r=n(78),s=(e=n.n(r),n(1)),a=n(77),i=(n(76),function(){for(var t,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];(t=console).log.apply(t,["bit-activity-request:"].concat(n))}),u=e.a.create({baseURL:"https://b1.bitkeep.top",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});u.interceptors.request.use((function(t){var e,n,r;return i("requestlog:",t),s.default.prototype.$store&&(n=(r=(e=s.default.prototype.$store.state).local).UA,r=r.locale,n.isBitKeep?Object.assign(t.headers,e.local.bitkeep,{language:r}):Object.assign(t.headers,{language:r})),t}),(function(t){return Promise.resolve({status:1})})),u.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];(t=console).log.apply(t,["bit-activity-response:"].concat(n))}("responselog:",t);var e="网路开了小差";e=(t=Object(a.b)()||{}).t?t.t("base.networkErro"):e;return Promise.resolve({status:1,data:e})}));var o={mBoxList:function(t){return u.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return u.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return u.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return u.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return u.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return u.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return u.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return u.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return u.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return u.post("swap/mining/info",t)},historyPhase:function(t){return u.post("swap/mining/historyPhase",t)},receiveAward:function(t){return u.post("swap/mining/receiveAward",t)},getInviteList:function(t){return u.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return u.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return u.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return u.post("/user/cloudstaking/poolList",t)},myPool:function(t){return u.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return u.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return u.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return u.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return u.post("/user/cloudstaking/getToken",t)},tradingGetList:function(t){return u.post("swap/tradeCompetition/getList",t)},tradingWaitClaim:function(t){return u.post("swap/tradeCompetition/waitClaim",t)},tradingClaim:function(t){return u.post("swap/tradeCompetition/claim",t)},tradingSummary:function(t){return u.post("swap/tradeCompetition/summary",t)},tradingHistory:function(t){return u.post("swap/tradeCompetition/history",t)},welfareSignIn:function(t){return u.post("user/welfare/signIn",t)},getRewardDetail:function(t){return u.post("user/welfare/getRewardDetail",t)},getSignInDetailByUser:function(t){return u.post("user/welfare/getSignInDetailByUser",t)},getRewardResult:function(t){return u.post("user/welfare/getRewardResult",t)},pushPapersIn:function(t){return u.post("user/welfare/pushPapersIn",t)},getJoinTeleJob:function(t){return u.post("user/welfare/getJoinTeleJob",t)},getFirstSwapJob:function(t){return u.post("user/welfare/getFirstSwapJob",t)},getFirst50UJob:function(t){return u.post("user/welfare/getFirst50UJob",t)},newUserRewardJobs:function(t){return u.post("user/welfare/newUserRewardJobs",t)},nftMintGetInfo:function(t){return u.post("/operation/nftmint/getInfo",t)},nftMintInvite:function(t){return u.post("/operation/nftmint/invite",t)},buildNftMintTxs:function(t){return u.post("/operation/nftmint/buildNftMintTxs",t)},nftMintGetToken:function(t){return u.post("/operation/nftmint/getToken",t)},nftMintLotteryList:function(t){return u.post("/operation/nftmint/LotteryList",t)},nftMintbuildNftMeltTxs:function(t){return u.post("/operation/nftmint/buildNftMeltTxs",t)},nftMintnftList:function(t){return u.post("/operation/nftmint/nftList",t)},nftMintcheckTransaction:function(t){return u.post("/operation/nftmint/checkTransaction",t)}}},514:function(t,e,n){"use strict";n.r(e),n.d(e,"transfer16",(function(){return m})),n.d(e,"wallet",(function(){return f}));e=n(240);var u=n(23),r=n(3),o=n(97),c=n(98),p=n(168),s=n(169),a=n(127);e=n(41),e=n(237),e=n(11),e=n(56),e=n(49),e=n(167);function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(a.a)(t);return r=e?(n=Object(a.a)(this).constructor,Reflect.construct(r,arguments,n)):r.apply(this,arguments),Object(s.a)(this,r)}}function m(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"1";return"0x"+(t=isNaN(Number(t))?1:Number(t)).toString(16)}var f=new(function(t){Object(p.a)(d,t);var e,n,f,s,a,i=l(d);function d(){var t;return Object(o.a)(this,d),(t=i.call(this))._accounts=[],t._chainId=0,t._walletPlatform="bitkeep",t}return Object(c.a)(d,[{key:"isInstall",value:function(){return!!window.ethereum&&!!window.isBitKeep}},{key:"isConnected",value:function(){return window.ethereum&&window.ethereum.isConnected()}},{key:"connect",value:(a=Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isInstall())return t.next=3,ethereum.request({method:"eth_requestAccounts"});t.next=8;break;case 3:return e=t.sent,this.initEvent(),t.abrupt("return",e[0]);case 8:return t.abrupt("return",{status:50001,message:"please download bitkeep chrome "});case 9:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"selectedAddress",value:function(){return window.ethereum&&ethereum.selectedAddress}},{key:"getWalletInfo",value:function(){return{address:window.ethereum&&ethereum.selectedAddress,chainName:window.ethereum&&window.ethereum.chainName||"eth",chainId:window.ethereum&&window.ethereum.chainId||"1",walletId:"",walletPlatform:this.getWalletPlatform()}}},{key:"getChainId",value:(s=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",window.ethereum&&window.ethereum.request({method:"eth_chainId"}));case 1:case"end":return t.stop()}}),t)}))),function(){return s.apply(this,arguments)})},{key:"switchChainId",value:(f=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=7;break}return t.next=3,this.getAccounts();case 3:r=t.sent,r=(r=Object(u.a)(r,1))[0],n=r;case 7:return t.abrupt("return",window.ethereum&&window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:m(e)},n]}));case 8:case"end":return t.stop()}}),t,this)}))),function(t,e){return f.apply(this,arguments)})},{key:"getWalletPlatform",value:function(){return this._walletPlatform}},{key:"getAccounts",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",window.ethereum?window.ethereum.request({method:"eth_accounts"}):[]);case 1:case"end":return t.stop()}}),t)}))),function(){return n.apply(this,arguments)})},{key:"LoginSign",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,window.ethereum.request({method:"personal_sign",params:[e,n],from:n});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(t,n){return e.apply(this,arguments)})},{key:"initEvent",value:function(){var a=this;ethereum.removeAllListeners&&ethereum.removeAllListeners(),ethereum.on("accountsChanged",Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,s=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e=s.length,n=new Array(e),r=0;r<e;r++)n[r]=s[r];a.emit.apply(a,["accountsChanged"].concat(n));case 2:case"end":return t.stop()}}),t)})))),ethereum.on("chainChanged",Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,s=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e=s.length,n=new Array(e),r=0;r<e;r++)n[r]=s[r];a.emit.apply(a,["chainChanged"].concat(n));case 2:case"end":return t.stop()}}),t)}))))}}]),d}(n.n(e).a))},568:function(t,e,n){var r={"./af":379,"./af.js":379,"./ar":380,"./ar-dz":381,"./ar-dz.js":381,"./ar-kw":382,"./ar-kw.js":382,"./ar-ly":383,"./ar-ly.js":383,"./ar-ma":384,"./ar-ma.js":384,"./ar-sa":385,"./ar-sa.js":385,"./ar-tn":386,"./ar-tn.js":386,"./ar.js":380,"./az":387,"./az.js":387,"./be":388,"./be.js":388,"./bg":389,"./bg.js":389,"./bm":390,"./bm.js":390,"./bn":391,"./bn-bd":392,"./bn-bd.js":392,"./bn.js":391,"./bo":393,"./bo.js":393,"./br":394,"./br.js":394,"./bs":395,"./bs.js":395,"./ca":396,"./ca.js":396,"./cs":397,"./cs.js":397,"./cv":398,"./cv.js":398,"./cy":399,"./cy.js":399,"./da":400,"./da.js":400,"./de":401,"./de-at":402,"./de-at.js":402,"./de-ch":403,"./de-ch.js":403,"./de.js":401,"./dv":404,"./dv.js":404,"./el":405,"./el.js":405,"./en-au":406,"./en-au.js":406,"./en-ca":407,"./en-ca.js":407,"./en-gb":408,"./en-gb.js":408,"./en-ie":409,"./en-ie.js":409,"./en-il":410,"./en-il.js":410,"./en-in":411,"./en-in.js":411,"./en-nz":412,"./en-nz.js":412,"./en-sg":413,"./en-sg.js":413,"./eo":414,"./eo.js":414,"./es":415,"./es-do":416,"./es-do.js":416,"./es-mx":417,"./es-mx.js":417,"./es-us":418,"./es-us.js":418,"./es.js":415,"./et":419,"./et.js":419,"./eu":420,"./eu.js":420,"./fa":421,"./fa.js":421,"./fi":422,"./fi.js":422,"./fil":423,"./fil.js":423,"./fo":424,"./fo.js":424,"./fr":425,"./fr-ca":426,"./fr-ca.js":426,"./fr-ch":427,"./fr-ch.js":427,"./fr.js":425,"./fy":428,"./fy.js":428,"./ga":429,"./ga.js":429,"./gd":430,"./gd.js":430,"./gl":431,"./gl.js":431,"./gom-deva":432,"./gom-deva.js":432,"./gom-latn":433,"./gom-latn.js":433,"./gu":434,"./gu.js":434,"./he":435,"./he.js":435,"./hi":436,"./hi.js":436,"./hr":437,"./hr.js":437,"./hu":438,"./hu.js":438,"./hy-am":439,"./hy-am.js":439,"./id":440,"./id.js":440,"./is":441,"./is.js":441,"./it":442,"./it-ch":443,"./it-ch.js":443,"./it.js":442,"./ja":444,"./ja.js":444,"./jv":445,"./jv.js":445,"./ka":446,"./ka.js":446,"./kk":447,"./kk.js":447,"./km":448,"./km.js":448,"./kn":449,"./kn.js":449,"./ko":450,"./ko.js":450,"./ku":451,"./ku.js":451,"./ky":452,"./ky.js":452,"./lb":453,"./lb.js":453,"./lo":454,"./lo.js":454,"./lt":455,"./lt.js":455,"./lv":456,"./lv.js":456,"./me":457,"./me.js":457,"./mi":458,"./mi.js":458,"./mk":459,"./mk.js":459,"./ml":460,"./ml.js":460,"./mn":461,"./mn.js":461,"./mr":462,"./mr.js":462,"./ms":463,"./ms-my":464,"./ms-my.js":464,"./ms.js":463,"./mt":465,"./mt.js":465,"./my":466,"./my.js":466,"./nb":467,"./nb.js":467,"./ne":468,"./ne.js":468,"./nl":469,"./nl-be":470,"./nl-be.js":470,"./nl.js":469,"./nn":471,"./nn.js":471,"./oc-lnc":472,"./oc-lnc.js":472,"./pa-in":473,"./pa-in.js":473,"./pl":474,"./pl.js":474,"./pt":475,"./pt-br":476,"./pt-br.js":476,"./pt.js":475,"./ro":477,"./ro.js":477,"./ru":478,"./ru.js":478,"./sd":479,"./sd.js":479,"./se":480,"./se.js":480,"./si":481,"./si.js":481,"./sk":482,"./sk.js":482,"./sl":483,"./sl.js":483,"./sq":484,"./sq.js":484,"./sr":485,"./sr-cyrl":486,"./sr-cyrl.js":486,"./sr.js":485,"./ss":487,"./ss.js":487,"./sv":488,"./sv.js":488,"./sw":489,"./sw.js":489,"./ta":490,"./ta.js":490,"./te":491,"./te.js":491,"./tet":492,"./tet.js":492,"./tg":493,"./tg.js":493,"./th":494,"./th.js":494,"./tk":495,"./tk.js":495,"./tl-ph":496,"./tl-ph.js":496,"./tlh":497,"./tlh.js":497,"./tr":498,"./tr.js":498,"./tzl":499,"./tzl.js":499,"./tzm":500,"./tzm-latn":501,"./tzm-latn.js":501,"./tzm.js":500,"./ug-cn":502,"./ug-cn.js":502,"./uk":503,"./uk.js":503,"./ur":504,"./ur.js":504,"./uz":505,"./uz-latn":506,"./uz-latn.js":506,"./uz.js":505,"./vi":507,"./vi.js":507,"./x-pseudo":508,"./x-pseudo.js":508,"./yo":509,"./yo.js":509,"./zh-cn":510,"./zh-cn.js":510,"./zh-hk":511,"./zh-hk.js":511,"./zh-mo":512,"./zh-mo.js":512,"./zh-tw":513,"./zh-tw.js":513};function s(t){return t=a(t),n(t)}function a(t){if(n.o(r,t))return r[t];throw(t=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",t}s.keys=function(){return Object.keys(r)},s.resolve=a,(t.exports=s).id=568},643:function(t,e,n){},729:function(t,e,n){"use strict";n(643)},773:function(t,e,n){"use strict";n.r(e),n(43),n(32),n(42),n(11),n(65),n(37),n(66);var r=n(40),a=n(3),s=n(29),i=(n(41),n(21),n(126),n(237),n(243),n(364)),o=n(75),u=n(363),c=n.n(u),l=n(514);function m(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)),r}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){Object(s.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}o={data:function(){return{setBorderColor:0,apy:"20",btn:"Stake now",inputNumber:"",isLoading:!0,title:"",day:"7",accounts:"",listInfo:{serverTime:"",list:[{allStakeAmount:0,bkbTotalSuperAmount:0,config:[]}]},token:"",poolContract:"0xbb85bfbbdcefca43e9de619a149c186506fd0ff6"}},computed:p(p({},Object(o.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep},userInfo:function(){return this.local.userInfo.token}}),mounted:function(){this.setIcon(),this.onClickConnect()},methods:{handleInput:function(t){t.target.value<1&&(t.target.value=""),t.target.value=t.target.value.match(/^\d*(\.?\d{0,5})/g)[0]||null},getInfo:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.poolList({userid:t.accounts});case 2:if(r=e.sent,n=r.data,1==r.status)return t.isLoading=!1,e.abrupt("return",t.$dialog.alert({message:n,confirmButtonText:t.$t("CbkbExchange.know"),confirmButtonColor:"$theme-light-colorPrimary"}));e.next=8;break;case 8:t.isLoading=!1,t.listInfo=n,t.listInfo.list=n.list,t.title=n.list[0].title,r=n.list&&n.list[0].config[0],t.handlePoolTimeTab(r,0);case 14:case"end":return e.stop()}}),e)})))()},setIcon:function(){var t=this;this.isBitKeep&&BitKeepInvoke.onLoadReady((function(){BitKeepInvoke.setIconAction(),t.$nextTick((function(){t.$store.commit("CHANGE_LANG",t.locale),BitKeepInvoke.setTitle(t.$t("staking.AddPoolTitle")),BitKeepInvoke.getAddress(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(n,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n)return e.abrupt("return",t.$toast(n));e.next=2;break;case 2:return t.accounts=r.eth||"--",e.next=5,t.handleGetToken();case 5:return e.next=7,t.getInfo();case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),BitKeepInvoke.appMode((function(t,e){var n=document.getElementsByTagName("body")[0];1==e?n.setAttribute("class","theme-dark"):n.setAttribute("class","theme-light")}))}))}))},Max:function(){this.inputNumber=this.listInfo.list[0].userAmount},timerFormatte:function(t){return c()(t).format("YYYY-MM-DD HH:mm")},endtimerFormatte:function(t){return c()(t).add(this.day,"d").format("YYYY-MM-DD HH:mm")},handleGetToken:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.handleGetToken({userid:t.accounts});case 2:if(n=e.sent,r=n.data,1==n.status)return t.isLoading=!1,e.abrupt("return",t.$dialog.alert({message:r,confirmButtonText:t.$t("staking.know"),confirmButtonColor:"$theme-light-colorPrimary"}));e.next=8;break;case 8:t.token=r.token;case 9:case"end":return e.stop()}}),e)})))()},handleGetLoginSign:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==t.inputNumber||t.inputNumber<1)return e.abrupt("return",t.$toast(t.$t("staking.stakeAmount")));e.next=2;break;case 2:if(t.listInfo.list&&t.inputNumber>t.listInfo.list[0].userAmount)return e.abrupt("return",t.$toast("insufficient balance"));e.next=4;break;case 4:if(t.btn==t.$t("staking.StakeNow")&&1<=t.inputNumber)return e.prev=5,e.next=8,l.wallet.LoginSign(t.token,t.accounts);e.next=15;break;case 8:n=e.sent,t.handleStaking(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),t.$toast(t.$t("staking.authorization"));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})))()},handleStaking:function(t){var s=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.staking({userid:s.accounts,time:s.day,amount:Number(s.inputNumber),c_token:s.token,verifyToken:t});case 2:if(n=e.sent,r=n.data,1==n.status)return s.isLoading=!1,s.handleGetToken(),e.abrupt("return",s.$dialog.alert({message:r,confirmButtonText:s.$t("staking.know"),confirmButtonColor:"$theme-light-colorPrimary"}));e.next=9;break;case 9:s.$router.push("/activity/staking/myPool");case 10:case"end":return e.stop()}}),e)})))()},isActiveSaleOut:function(t){return t.allStake>=t.limit||c()(t.lastStakeTime).isBefore(c()(this.listInfo.list[0].serverTime))},handlePoolTimeTab:function(t,e){this.setBorderColor=e,this.day=t.time,this.apy=(100*t.apy).toFixed(2),this.btn=this.isActiveSaleOut(t)?this.$t("staking.SoldOut"):this.$t("staking.StakeNow")},onClickConnect:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,e.t0=t.accounts,e.t0){e.next=6;break}return e.next=5,l.wallet.connect();case 5:e.t0=e.sent;case 6:if(t.accounts=e.t0,t.isBitKeep){e.next=12;break}return e.next=10,t.handleGetToken();case 10:return e.next=12,t.getInfo();case 12:l.wallet.on("chainChanged",Object(a.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.wallet.getChainId();case 2:if(e=t.sent,t.t0=1!=Number(e),t.t0)return t.next=7,l.wallet.switchChainId(1);t.next=7;break;case 7:case"end":return t.stop()}}),t)})))),l.wallet.on("accountsChanged",t.onClickConnect),e.next=19;break;case 16:e.prev=16,e.t1=e.catch(0),t.$toast("object"==Object(r.a)(e.t1)?e.t1.message:e.t1);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))()}}},n(729),n=n(28),o=Object(n.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"colorBackground1"},[t.isLoading?s("div",{staticClass:"loading"},[s("van-loading",{attrs:{color:"#7524f9",vertical:""}},[t._v(t._s(t.$t("base.loading"))+"...")])],1):s("div",[s("div",{staticClass:"addPool"},[s("div",{staticClass:"staking-wrap-box-pool-title"},[s("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_27f9ea80-a03a-11ec-ad8b-9ff4f858e021.png",alt:""}}),t._v(" "),s("div",{staticClass:"staking-wrap-box-pool-title-flex"},[s("div",{staticClass:"staking-wrap-box-pool-title-left"},[s("div",{staticClass:"textPrimary0"},[t._v(t._s(t.title))])]),t._v(" "),s("div",{staticClass:"staking-wrap-box-pool-title-right"},[s("div",{staticClass:"textSecond2"},[t._v(t._s(t.$t("staking.APY")))]),t._v(" "),s("div",{staticClass:"colorSecond01 setFontFamily"},[t._v(t._s(t.apy+"%"))])])])]),t._v(" "),s("div",{staticClass:"staking-wrap-box-pool-duration textPrimary0"},[t._v("\n        "+t._s(t.$t("staking.Duration"))+"\n      ")]),t._v(" "),s("div",{staticClass:"staking-wrap-box-pool-duration-box"},t._l(t.listInfo.list[0].config,(function(e,n){return s("span",{key:n,staticClass:"staking-wrap-box-pool-duration-smallBox setFontFamily",class:[t.isActiveSaleOut(e)?"textSecond3":"textSecond1",n==t.setBorderColor?"setBorderColor":""],on:{click:function(r){return t.handlePoolTimeTab(e,n)}}},[t._v(t._s(e.time))])})),0),t._v(" "),s("div",{staticClass:"staking-warp-amount"},[s("div",{staticClass:"textPrimary0"},[t._v(t._s(t.$t("staking.StakeAmount")))]),t._v(" "),s("div",{staticClass:"textSecond3"},[t._v("\n          "+t._s(t.$t("staking.Available"))+":\n          "+t._s(t.listInfo.list[0].userAmount.toFixed(6))+" BKB\n        ")])]),t._v(" "),s("div",{staticClass:"staking-warp-amount-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputNumber,expression:"inputNumber"}],staticClass:"textPrimary0 setFontFamily",attrs:{type:"number",min:1,placeholder:"Entry stake amount"},domProps:{value:t.inputNumber},on:{keydown:t.handleInput,blur:t.handleInput,input:function(e){e.target.composing||(t.inputNumber=e.target.value)}}}),t._v(" "),s("div",{staticClass:"staking-warp-amount-input-right"},[s("div",{staticClass:"right textPrimary0 setFontFamily"},[t._v("BKB")]),t._v(" "),s("div",{staticClass:"line colorLine1"}),t._v(" "),s("div",{staticClass:"max colorPrimary",on:{click:t.Max}},[t._v("\n            "+t._s(t.$t("staking.MAX"))+"\n          ")])])]),t._v(" "),s("div",{staticClass:"staking-limiation textPrimary0"},[t._v("\n        "+t._s(t.$t("staking.StakeAmountLimiation"))+"\n      ")]),t._v(" "),s("div",{staticClass:"staking-min textSecond3"},[s("div",[t._v("\n          "+t._s(t.$t("staking.Minimum"))+":\n          "),s("span",{staticClass:"setFontFamily textPrimary0"},[t._v(" 1 BKB")])]),t._v(" "),s("div")]),t._v(" "),s("div",{staticClass:"staking-summry"},[s("div",{staticClass:"textPrimary0 Summary"},[t._v(t._s(t.$t("staking.Summary")))]),t._v(" "),s("div",{staticClass:"staking-summary-box colorBackground3"},[s("ul",[s("li",[s("span",{staticClass:"dian colorBackgroundPrimary"}),t._v(" "),s("span",{staticClass:"textSecond3"},[t._v(t._s(t.$t("staking.StakeDate"))+" ")]),t._v(" "),s("span",{staticClass:"textPrimary0 setFontFamily"},[t._v(t._s(t.timerFormatte(t.listInfo.serverTime)))])]),t._v(" "),s("li",{staticClass:"setLeftLine colorDisable"}),t._v(" "),s("li",[s("span",{staticClass:"dian colorBackgroundPrimary"}),t._v(" "),s("span",{staticClass:"textSecond3"},[t._v(t._s(t.$t("staking.ValueDate"))+" ")]),t._v(" "),s("span",{staticClass:"textPrimary0 setFontFamily"},[t._v(t._s(t.timerFormatte(t.listInfo.serverTime)))])]),t._v(" "),s("li",{staticClass:"setLeftColorLine"},[s("span",{staticClass:"textSecond3"},[t._v(t._s(t.$t("staking.InterestPeriod"))+"\n              ")]),t._v(" "),s("span",{staticClass:"textPrimary0 setFontFamily"},[t._v(t._s(t.day)+" "+t._s(t.$t("staking.Days")))])]),t._v(" "),s("li",[s("span",{staticClass:"dian colorBackgroundPrimary"}),t._v(" "),s("span",{staticClass:"textSecond3"},[t._v(t._s(t.$t("staking.InterestEndDate"))+"\n              ")]),t._v(" "),s("span",{staticClass:"textPrimary0 setFontFamily"},[t._v(t._s(t.endtimerFormatte(t.listInfo.serverTime)))])]),t._v(" "),s("li",{staticClass:"setLeftLine colorDisable"}),t._v(" "),s("li",[s("span",{staticClass:"dian colorBackgroundPrimary"}),t._v(" "),s("span",{staticClass:"textSecond3"},[t._v(t._s(t.$t("staking.RedemptionDate"))+"\n              ")]),t._v(" "),s("span",{staticClass:"textPrimary0 setFontFamily"},[t._v(t._s(t.endtimerFormatte(t.listInfo.serverTime)))])])]),t._v(" "),s("div",{staticClass:"colorLine1 setColorLine1"}),t._v(" "),s("div",{staticClass:"staking-warp-Interests"},[s("div",{staticClass:"textSecond3"},[t._v("\n              "+t._s(t.$t("staking.EstimatedInterests"))+"\n            ")]),t._v(" "),s("div",{staticClass:"colorSecond01 setFontFamily"},[t._v("\n              "+t._s(t.inputNumber?(this.apy/100/360*this.day*t.inputNumber).toFixed(6):0)+"\n              BKB\n            ")])])])])]),t._v(" "),s("div",{staticClass:"wrap-bottom colorBackground1"},[s("button",{staticClass:"swap-btn",class:[t.btn==""+t.$t("staking.StakeNow")&&1<=t.inputNumber?"staking-wrap-box-pool-stake-now":"staking-wrap-box-pool-stake-now setOpacity"],on:{click:t.handleGetLoginSign}},[t._v("\n        "+t._s(t.btn)+"\n      ")])])])])}),[],!1,null,"02132f64",null),e.default=o.exports}}]);