(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{370:function(t,n,e){"use strict";e.d(n,"a",(function(){return d})),e(60);n=e(19);var a=e(95),r=(n=e.n(a),e(2)),o=e(94),i=(e(92),function(){for(var t,n=arguments.length,e=new Array(n),a=0;a<n;a++)e[a]=arguments[a];(t=console).log.apply(t,["bit-activity-request:"].concat(e))}),c=n.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});c.interceptors.request.use((function(t){var n,e,a;return i("requestlog:",t),r.a.prototype.$store&&(e=(a=(n=r.a.prototype.$store.state).local).UA,a=a.locale,e.isBitKeep?Object.assign(t.headers,n.local.bitkeep,{language:a}):Object.assign(t.headers,{language:a})),t}),(function(t){return Promise.resolve({status:1})})),c.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,n=arguments.length,e=new Array(n),a=0;a<n;a++)e[a]=arguments[a];(t=console).log.apply(t,["bit-activity-response:"].concat(e))}("responselog:",t);var n="网路开了小差";n=(t=Object(o.b)()||{}).t?t.t("base.networkErro"):n;return Promise.resolve({status:1,data:n})}));var d={mBoxList:function(t){return c.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return c.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return c.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return c.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return c.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return c.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return c.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return c.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return c.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return c.post("swap/mining/info",t)},historyPhase:function(t){return c.post("swap/mining/historyPhase",t)},receiveAward:function(t){return c.post("swap/mining/receiveAward",t)},getInviteList:function(t){return c.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return c.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return c.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return c.post("/user/cloudstaking/poolList",t)},myPool:function(t){return c.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return c.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return c.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return c.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return c.post("/user/cloudstaking/getToken",t)}}},524:function(t,n,e){"use strict";e.r(n),e.d(n,"transfer16",(function(){return h})),e.d(n,"wallet",(function(){return a}));n=e(525);var r=e(37),o=e(14),c=e(168),u=e(169),d=e(529),l=e(530),m=e(526);n=e(68),n=e(371),n=e(19),n=e(82),n=e(60),n=e(527);function g(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,e=Object(m.a)(t);return e=a?(n=Object(m.a)(this).constructor,Reflect.construct(e,arguments,n)):e.apply(this,arguments),Object(l.a)(this,e)}}function h(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"1";return"0x"+(t=isNaN(Number(t))?1:Number(t)).toString(16)}var a=new(function(t){Object(d.a)(s,t);var n,e,a,l,m,i=g(s);function s(){var t;return Object(c.a)(this,s),(t=i.call(this))._accounts=[],t._chainId=0,t._walletPlatform="bitkeep",t}return Object(u.a)(s,[{key:"isInstall",value:function(){return!!window.ethereum&&!!window.isBitKeep}},{key:"isConnected",value:function(){return window.ethereum&&window.ethereum.isConnected()}},{key:"connect",value:(m=Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isInstall())return t.next=3,ethereum.request({method:"eth_requestAccounts"});t.next=8;break;case 3:return n=t.sent,this.initEvent(),t.abrupt("return",n[0]);case 8:return t.abrupt("return",{status:50001,message:"please download bitkeep chrome "});case 9:case"end":return t.stop()}}),t,this)}))),function(){return m.apply(this,arguments)})},{key:"selectedAddress",value:function(){return window.ethereum&&ethereum.selectedAddress}},{key:"getWalletInfo",value:function(){return{address:window.ethereum&&ethereum.selectedAddress,chainName:window.ethereum&&window.ethereum.chainName||"eth",chainId:window.ethereum&&window.ethereum.chainId||"1",walletId:"",walletPlatform:this.getWalletPlatform()}}},{key:"getChainId",value:(l=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",window.ethereum&&window.ethereum.request({method:"eth_chainId"}));case 1:case"end":return t.stop()}}),t)}))),function(){return l.apply(this,arguments)})},{key:"switchChainId",value:(a=Object(o.a)(regeneratorRuntime.mark((function t(n,e){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=7;break}return t.next=3,this.getAccounts();case 3:a=t.sent,a=(a=Object(r.a)(a,1))[0],e=a;case 7:return t.abrupt("return",window.ethereum&&window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:h(n)},e]}));case 8:case"end":return t.stop()}}),t,this)}))),function(t,n){return a.apply(this,arguments)})},{key:"getWalletPlatform",value:function(){return this._walletPlatform}},{key:"getAccounts",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",window.ethereum?window.ethereum.request({method:"eth_accounts"}):[]);case 1:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})},{key:"LoginSign",value:(n=Object(o.a)(regeneratorRuntime.mark((function t(n,e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,window.ethereum.request({method:"personal_sign",params:[n,e],from:e});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(t,e){return n.apply(this,arguments)})},{key:"initEvent",value:function(){var t=this;ethereum.removeAllListeners&&ethereum.removeAllListeners(),ethereum.on("accountsChanged",Object(o.a)(regeneratorRuntime.mark((function n(){var e,r,a,o=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(e=o.length,r=new Array(e),a=0;a<e;a++)r[a]=o[a];t.emit.apply(t,["accountsChanged"].concat(r));case 2:case"end":return n.stop()}}),n)})))),ethereum.on("chainChanged",Object(o.a)(regeneratorRuntime.mark((function n(){var e,r,a,o=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(e=o.length,r=new Array(e),a=0;a<e;a++)r[a]=o[a];t.emit.apply(t,["chainChanged"].concat(r));case 2:case"end":return n.stop()}}),n)}))))}}]),s}(e.n(n).a))},578:function(t,n,e){var a={"./af":389,"./af.js":389,"./ar":390,"./ar-dz":391,"./ar-dz.js":391,"./ar-kw":392,"./ar-kw.js":392,"./ar-ly":393,"./ar-ly.js":393,"./ar-ma":394,"./ar-ma.js":394,"./ar-sa":395,"./ar-sa.js":395,"./ar-tn":396,"./ar-tn.js":396,"./ar.js":390,"./az":397,"./az.js":397,"./be":398,"./be.js":398,"./bg":399,"./bg.js":399,"./bm":400,"./bm.js":400,"./bn":401,"./bn-bd":402,"./bn-bd.js":402,"./bn.js":401,"./bo":403,"./bo.js":403,"./br":404,"./br.js":404,"./bs":405,"./bs.js":405,"./ca":406,"./ca.js":406,"./cs":407,"./cs.js":407,"./cv":408,"./cv.js":408,"./cy":409,"./cy.js":409,"./da":410,"./da.js":410,"./de":411,"./de-at":412,"./de-at.js":412,"./de-ch":413,"./de-ch.js":413,"./de.js":411,"./dv":414,"./dv.js":414,"./el":415,"./el.js":415,"./en-au":416,"./en-au.js":416,"./en-ca":417,"./en-ca.js":417,"./en-gb":418,"./en-gb.js":418,"./en-ie":419,"./en-ie.js":419,"./en-il":420,"./en-il.js":420,"./en-in":421,"./en-in.js":421,"./en-nz":422,"./en-nz.js":422,"./en-sg":423,"./en-sg.js":423,"./eo":424,"./eo.js":424,"./es":425,"./es-do":426,"./es-do.js":426,"./es-mx":427,"./es-mx.js":427,"./es-us":428,"./es-us.js":428,"./es.js":425,"./et":429,"./et.js":429,"./eu":430,"./eu.js":430,"./fa":431,"./fa.js":431,"./fi":432,"./fi.js":432,"./fil":433,"./fil.js":433,"./fo":434,"./fo.js":434,"./fr":435,"./fr-ca":436,"./fr-ca.js":436,"./fr-ch":437,"./fr-ch.js":437,"./fr.js":435,"./fy":438,"./fy.js":438,"./ga":439,"./ga.js":439,"./gd":440,"./gd.js":440,"./gl":441,"./gl.js":441,"./gom-deva":442,"./gom-deva.js":442,"./gom-latn":443,"./gom-latn.js":443,"./gu":444,"./gu.js":444,"./he":445,"./he.js":445,"./hi":446,"./hi.js":446,"./hr":447,"./hr.js":447,"./hu":448,"./hu.js":448,"./hy-am":449,"./hy-am.js":449,"./id":450,"./id.js":450,"./is":451,"./is.js":451,"./it":452,"./it-ch":453,"./it-ch.js":453,"./it.js":452,"./ja":454,"./ja.js":454,"./jv":455,"./jv.js":455,"./ka":456,"./ka.js":456,"./kk":457,"./kk.js":457,"./km":458,"./km.js":458,"./kn":459,"./kn.js":459,"./ko":460,"./ko.js":460,"./ku":461,"./ku.js":461,"./ky":462,"./ky.js":462,"./lb":463,"./lb.js":463,"./lo":464,"./lo.js":464,"./lt":465,"./lt.js":465,"./lv":466,"./lv.js":466,"./me":467,"./me.js":467,"./mi":468,"./mi.js":468,"./mk":469,"./mk.js":469,"./ml":470,"./ml.js":470,"./mn":471,"./mn.js":471,"./mr":472,"./mr.js":472,"./ms":473,"./ms-my":474,"./ms-my.js":474,"./ms.js":473,"./mt":475,"./mt.js":475,"./my":476,"./my.js":476,"./nb":477,"./nb.js":477,"./ne":478,"./ne.js":478,"./nl":479,"./nl-be":480,"./nl-be.js":480,"./nl.js":479,"./nn":481,"./nn.js":481,"./oc-lnc":482,"./oc-lnc.js":482,"./pa-in":483,"./pa-in.js":483,"./pl":484,"./pl.js":484,"./pt":485,"./pt-br":486,"./pt-br.js":486,"./pt.js":485,"./ro":487,"./ro.js":487,"./ru":488,"./ru.js":488,"./sd":489,"./sd.js":489,"./se":490,"./se.js":490,"./si":491,"./si.js":491,"./sk":492,"./sk.js":492,"./sl":493,"./sl.js":493,"./sq":494,"./sq.js":494,"./sr":495,"./sr-cyrl":496,"./sr-cyrl.js":496,"./sr.js":495,"./ss":497,"./ss.js":497,"./sv":498,"./sv.js":498,"./sw":499,"./sw.js":499,"./ta":500,"./ta.js":500,"./te":501,"./te.js":501,"./tet":502,"./tet.js":502,"./tg":503,"./tg.js":503,"./th":504,"./th.js":504,"./tk":505,"./tk.js":505,"./tl-ph":506,"./tl-ph.js":506,"./tlh":507,"./tlh.js":507,"./tr":508,"./tr.js":508,"./tzl":509,"./tzl.js":509,"./tzm":510,"./tzm-latn":511,"./tzm-latn.js":511,"./tzm.js":510,"./ug-cn":512,"./ug-cn.js":512,"./uk":513,"./uk.js":513,"./ur":514,"./ur.js":514,"./uz":515,"./uz-latn":516,"./uz-latn.js":516,"./uz.js":515,"./vi":517,"./vi.js":517,"./x-pseudo":518,"./x-pseudo.js":518,"./yo":519,"./yo.js":519,"./zh-cn":520,"./zh-cn.js":520,"./zh-hk":521,"./zh-hk.js":521,"./zh-mo":522,"./zh-mo.js":522,"./zh-tw":523,"./zh-tw.js":523};function r(t){return t=o(t),e(t)}function o(t){if(e.o(a,t))return a[t];throw(t=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",t}r.keys=function(){return Object.keys(a)},r.resolve=o,(t.exports=r).id=578},637:function(t,n,e){var a=e(740);(a="string"==typeof(a=a.__esModule?a.default:a)?[[t.i,a,""]]:a).locals&&(t.exports=a.locals),(0,e(110).default)("ebb62b9c",a,!0,{sourceMap:!1})},739:function(t,n,e){"use strict";e(637)},740:function(t,n,e){(e=e(109)(!1)).push([t.i,".theme-light .textPrimary0[data-v-7d37297c] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-7d37297c] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-7d37297c] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-7d37297c] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-7d37297c] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-7d37297c] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-7d37297c] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-7d37297c] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-7d37297c] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-7d37297c] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-7d37297c] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-7d37297c] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-7d37297c] {\n  background-color: #495BFF;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-7d37297c] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-7d37297c] {\n  background-color: #1CBDB5;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-7d37297c] {\n  background-color: #080D21;\n}\n.theme-light .colorPrimary[data-v-7d37297c] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-7d37297c] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-7d37297c] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-7d37297c] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-7d37297c] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-7d37297c] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-7d37297c] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-7d37297c] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-7d37297c] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-7d37297c] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-7d37297c] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-7d37297c] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-7d37297c] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-7d37297c] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-7d37297c] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-7d37297c] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-7d37297c] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-7d37297c] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-7d37297c] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-7d37297c] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-7d37297c] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-7d37297c] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-7d37297c] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-7d37297c] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-7d37297c] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-7d37297c] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-7d37297c] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-7d37297c] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-7d37297c] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-7d37297c] {\n  background-color: #495BFF;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-7d37297c] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-7d37297c] {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-7d37297c] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-7d37297c] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-7d37297c] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-7d37297c] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-7d37297c] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-7d37297c] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-7d37297c] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-7d37297c] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-7d37297c] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-7d37297c] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-7d37297c] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-7d37297c] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-7d37297c] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-7d37297c] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-7d37297c] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-7d37297c] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-7d37297c] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-7d37297c] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-7d37297c] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .staking-warp-amount-input[data-v-7d37297c] {\n  border: 0.03rem solid #F0F0F0;\n}\n.theme-light .staking-wrap-box-pool-duration-smallBox[data-v-7d37297c] {\n  border: 0.03rem solid #F0F0F0;\n}\n.theme-light .wrap-bottom[data-v-7d37297c] {\n  border-top: 0.03rem solid #F0F0F0;\n}\n.theme-dark .staking-warp-amount-input[data-v-7d37297c] {\n  border: 0.03rem solid #2A2D3D;\n}\n.theme-dark .staking-wrap-box-pool-duration-smallBox[data-v-7d37297c] {\n  border: 0.03rem solid #2A2D3D;\n}\n.theme-dark .wrap-bottom[data-v-7d37297c] {\n  border-top: 0.03rem solid #2A2D3D;\n}\n.loading[data-v-7d37297c] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.addPool[data-v-7d37297c] {\n  padding: 0 0.43rem;\n  min-height: 100vh;\n}\n.addPool .staking-wrap-box-pool-title[data-v-7d37297c] {\n  display: flex;\n  height: 1.44rem;\n  align-items: center;\n  position: relative;\n}\n.addPool .staking-wrap-box-pool-title img[data-v-7d37297c] {\n  width: 0.8rem;\n  height: 0.8rem;\n  display: inline-block;\n  vertical-align: middle;\n}\n.addPool .staking-wrap-box-pool-title-flex[data-v-7d37297c] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 0.27rem;\n  align-items: center;\n}\n.addPool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-left[data-v-7d37297c] :first-child {\n  font-weight: 600;\n  font-size: 0.43rem;\n}\n.addPool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-right[data-v-7d37297c] {\n  text-align: right;\n  position: absolute;\n  right: 0;\n}\n.addPool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-right[data-v-7d37297c] :first-child {\n  font-size: 0.32rem;\n}\n.addPool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-right[data-v-7d37297c] :last-child {\n  font-size: 0.43rem;\n  margin-top: 0.05rem;\n}\n.addPool .staking-wrap-box-pool-duration[data-v-7d37297c] {\n  margin-top: 0.53rem;\n  font-size: 0.37rem;\n}\n.addPool .staking-wrap-box-pool-duration-box[data-v-7d37297c] {\n  margin-top: 0.27rem;\n}\n.addPool .staking-wrap-box-pool-duration-box .staking-wrap-box-pool-duration-smallBox[data-v-7d37297c] {\n  display: inline-block;\n  text-align: center;\n  height: 0.75rem;\n  width: 1.6rem;\n  line-height: 0.75rem;\n  border-radius: 0.11rem;\n  margin-right: 0.21rem;\n  font-size: 0.43rem;\n}\n.addPool .staking-wrap-box-pool-duration-box .setBorderColor[data-v-7d37297c] {\n  border: 0.03rem solid #495bff;\n  color: #495bff;\n}\n.addPool .staking-warp-amount[data-v-7d37297c] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 0.8rem;\n}\n.addPool .staking-warp-amount[data-v-7d37297c] :first-child {\n  font-size: 0.37rem;\n}\n.addPool .staking-warp-amount[data-v-7d37297c] :last-child {\n  font-size: 0.32rem;\n}\n.addPool .staking-warp-amount-input[data-v-7d37297c] {\n  width: 100%;\n  height: 1.33rem;\n  line-height: 1.33rem;\n  border-radius: 0.21rem;\n  margin-top: 0.27rem;\n  display: flex;\n  align-items: center;\n}\n.addPool .staking-warp-amount-input input[data-v-7d37297c] {\n  width: 55%;\n  height: 1.33rem;\n  float: left;\n  padding-left: 0.4rem;\n  font-size: 0.43rem;\n  display: block;\n  background: none;\n  outline: none;\n  border: none;\n}\n.addPool .staking-warp-amount-input .staking-warp-amount-input-right[data-v-7d37297c] {\n  float: right;\n  line-height: 1.33rem;\n}\n.addPool .staking-warp-amount-input .staking-warp-amount-input-right .right[data-v-7d37297c] {\n  float: left;\n  padding: 0 0.53rem 0 0.27rem;\n  font-size: 0.43rem;\n}\n.addPool .staking-warp-amount-input .staking-warp-amount-input-right .line[data-v-7d37297c] {\n  width: 0.03rem;\n  height: 0.48rem;\n  float: left;\n  margin-top: 0.45rem;\n}\n.addPool .staking-warp-amount-input .staking-warp-amount-input-right .max[data-v-7d37297c] {\n  float: left;\n  padding: 0 0.45rem 0 0.53rem;\n  font-size: 0.43rem;\n}\n.addPool .staking-limiation[data-v-7d37297c] {\n  margin-top: 0.8rem;\n  font-size: 0.37rem;\n}\n.addPool .staking-min[data-v-7d37297c] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.37rem;\n  margin-top: 0.27rem;\n}\n.addPool .setColorLine[data-v-7d37297c] {\n  width: 100%;\n  height: 0.03rem;\n  margin-top: 0.8rem;\n}\n.addPool .staking-summry[data-v-7d37297c] {\n  margin-top: 1.07rem;\n  padding-bottom: 2.67rem;\n}\n.addPool .staking-summry .Summary[data-v-7d37297c] {\n  font-weight: 600;\n  font-size: 0.43rem;\n}\n.addPool .staking-summry .staking-summary-box[data-v-7d37297c] {\n  width: 100%;\n  border-radius: 0.21rem;\n  margin-top: 0.27rem;\n}\n.addPool .staking-summry .staking-summary-box ul[data-v-7d37297c] {\n  padding: 0.4rem;\n}\n.addPool .staking-summry .staking-summary-box ul li[data-v-7d37297c] {\n  font-size: 0.37rem;\n  position: relative;\n}\n.addPool .staking-summry .staking-summary-box ul li .dian[data-v-7d37297c] {\n  width: 0.16rem;\n  height: 0.16rem;\n  border-radius: 50%;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 0.27rem;\n}\n.addPool .staking-summry .staking-summary-box ul li[data-v-7d37297c] :last-child {\n  position: absolute;\n  right: 0;\n}\n.addPool .staking-summry .staking-summary-box ul .setLeftLine[data-v-7d37297c] {\n  width: 0.05rem;\n  height: 0.75rem;\n  margin-left: 0.05rem;\n  margin-top: 0.03rem;\n}\n.addPool .staking-summry .staking-summary-box ul .setLeftColorLine[data-v-7d37297c] {\n  height: 2.16rem;\n  line-height: 2.16rem;\n  border-left: 0.05rem solid #1cbdb5;\n  margin-left: 0.05rem;\n}\n.addPool .staking-summry .staking-summary-box ul .setLeftColorLine[data-v-7d37297c] :first-child {\n  margin-left: 0.48rem;\n}\n.addPool .staking-summry .staking-summary-box .setColorLine1[data-v-7d37297c] {\n  height: 0.03rem;\n  margin: 0 0.43rem 0.4rem;\n  box-sizing: border-box;\n}\n.addPool .staking-summry .staking-summary-box .staking-warp-Interests[data-v-7d37297c] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 0.4rem 0.4rem;\n  font-size: 0.37rem;\n}\n.setBottomLine[data-v-7d37297c] {\n  width: 100%;\n  height: 0.03rem;\n}\n.wrap-bottom[data-v-7d37297c] {\n  width: 100%;\n  bottom: 0;\n  z-index: 99;\n  position: fixed;\n  padding: 0.29rem 0.96rem 0.91rem;\n  box-sizing: border-box;\n}\n.wrap-bottom .staking-wrap-box-pool-stake-now[data-v-7d37297c] {\n  background: #495bff;\n  color: #fff;\n}\n.wrap-bottom .setOpacity[data-v-7d37297c] {\n  opacity: 0.3;\n}\n.wrap-bottom .swap-btn[data-v-7d37297c] {\n  z-index: 0;\n  color: #fff;\n  height: 1.33rem;\n  border-radius: 0.27rem;\n  text-align: center;\n  line-height: 1.17rem;\n  border: none;\n  font-weight: 500;\n  font-size: 0.43rem;\n  width: 8.08rem;\n}",""]),t.exports=e},792:function(t,n,e){"use strict";e.r(n),e(55),e(41),e(61),e(80),e(48),e(81);var a=e(52),r=e(14),o=e(35),i=(e(68),e(47),e(132),e(371),e(242),e(370)),s=e(91),c=e(369),d=e.n(c),l=e(524);function u(t,n){var e,a=Object.keys(t);return Object.getOwnPropertySymbols&&(e=Object.getOwnPropertySymbols(t),n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)),a}function m(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){Object(o.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}s={data:function(){return{setBorderColor:0,apy:"20",btn:"Stake now",inputNumber:"",isLoading:!0,title:"",day:"7",accounts:"",listInfo:{serverTime:"",list:[{allStakeAmount:0,bkbTotalSuperAmount:0,config:[]}]},token:"",poolContract:"0xbb85bfbbdcefca43e9de619a149c186506fd0ff6"}},computed:m(m({},Object(s.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep},userInfo:function(){return this.local.userInfo.token}}),mounted:function(){this.setIcon(),this.onClickConnect()},methods:{handleInput:function(t){t.target.value<1&&(t.target.value=""),t.target.value=t.target.value.match(/^\d*(\.?\d{0,5})/g)[0]||null},getInfo:function(){var a=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.poolList({userid:a.accounts});case 2:if(e=t.sent,n=e.data,1==e.status)return a.isLoading=!1,t.abrupt("return",a.$dialog.alert({message:n,confirmButtonText:a.$t("CbkbExchange.know"),confirmButtonColor:"$theme-light-colorPrimary"}));t.next=8;break;case 8:a.isLoading=!1,a.listInfo=n,a.listInfo.list=n.list,a.title=n.list[0].title,e=n.list&&n.list[0].config[0],a.handlePoolTimeTab(e,0);case 14:case"end":return t.stop()}}),t)})))()},setIcon:function(){var a=this;this.isBitKeep&&BitKeepInvoke.onLoadReady((function(){BitKeepInvoke.setIconAction(),a.$nextTick((function(){a.$store.commit("CHANGE_LANG",a.locale),BitKeepInvoke.setTitle(a.$t("staking.AddPoolTitle")),BitKeepInvoke.getAddress(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n,e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n)return t.abrupt("return",a.$toast(n));t.next=2;break;case 2:return a.accounts=e.eth||"--",t.next=5,a.handleGetToken();case 5:return t.next=7,a.getInfo();case 7:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()),BitKeepInvoke.appMode((function(t,n){var e=document.getElementsByTagName("body")[0];1==n?e.setAttribute("class","theme-dark"):e.setAttribute("class","theme-light")}))}))}))},Max:function(){this.inputNumber=this.listInfo.list[0].userAmount},timerFormatte:function(t){return d()(t).format("YYYY-MM-DD HH:mm")},endtimerFormatte:function(t){return d()(t).add(this.day,"d").format("YYYY-MM-DD HH:mm")},handleGetToken:function(){var a=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.handleGetToken({userid:a.accounts});case 2:if(n=t.sent,e=n.data,1==n.status)return a.isLoading=!1,t.abrupt("return",a.$dialog.alert({message:e,confirmButtonText:a.$t("staking.know"),confirmButtonColor:"$theme-light-colorPrimary"}));t.next=8;break;case 8:a.token=e.token;case 9:case"end":return t.stop()}}),t)})))()},handleGetLoginSign:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""==t.inputNumber||t.inputNumber<1)return n.abrupt("return",t.$toast(t.$t("staking.stakeAmount")));n.next=2;break;case 2:if(t.listInfo.list&&t.inputNumber>t.listInfo.list[0].userAmount)return n.abrupt("return",t.$toast("insufficient balance"));n.next=4;break;case 4:if(t.btn==t.$t("staking.StakeNow")&&1<=t.inputNumber)return n.prev=5,n.next=8,l.wallet.LoginSign(t.token,t.accounts);n.next=15;break;case 8:e=n.sent,t.handleStaking(e),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(5),t.$toast(t.$t("staking.authorization"));case 15:case"end":return n.stop()}}),n,null,[[5,12]])})))()},handleStaking:function(a){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.staking({userid:t.accounts,time:t.day,amount:Number(t.inputNumber),c_token:t.token,verifyToken:a});case 2:if(e=n.sent,r=e.data,1==e.status)return t.isLoading=!1,t.handleGetToken(),n.abrupt("return",t.$dialog.alert({message:r,confirmButtonText:t.$t("staking.know"),confirmButtonColor:"$theme-light-colorPrimary"}));n.next=9;break;case 9:t.$router.push("/activity/staking/myPool");case 10:case"end":return n.stop()}}),n)})))()},isActiveSaleOut:function(t){return t.allStake>=t.limit||d()(t.lastStakeTime).isBefore(d()(this.listInfo.list[0].serverTime))},handlePoolTimeTab:function(t,n){this.setBorderColor=n,this.day=t.time,this.apy=(100*t.apy).toFixed(2),this.btn=this.isActiveSaleOut(t)?this.$t("staking.SoldOut"):this.$t("staking.StakeNow")},onClickConnect:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,n.t0=t.accounts,n.t0){n.next=6;break}return n.next=5,l.wallet.connect();case 5:n.t0=n.sent;case 6:if(t.accounts=n.t0,t.isBitKeep){n.next=12;break}return n.next=10,t.handleGetToken();case 10:return n.next=12,t.getInfo();case 12:l.wallet.on("chainChanged",Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.wallet.getChainId();case 2:if(n=t.sent,t.t0=1!=Number(n),t.t0)return t.next=7,l.wallet.switchChainId(1);t.next=7;break;case 7:case"end":return t.stop()}}),t)})))),l.wallet.on("accountsChanged",t.onClickConnect),n.next=19;break;case 16:n.prev=16,n.t1=n.catch(0),t.$toast("object"==Object(a.a)(n.t1)?n.t1.message:n.t1);case 19:case"end":return n.stop()}}),n,null,[[0,16]])})))()}}},e(739),e=e(79),s=Object(e.a)(s,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"colorBackground1"},[a.isLoading?n("div",{staticClass:"loading"},[n("van-loading",{attrs:{color:"#1989fa",vertical:""}},[a._v(a._s(a.$t("base.loading"))+"...")])],1):n("div",[n("div",{staticClass:"addPool"},[n("div",{staticClass:"staking-wrap-box-pool-title"},[n("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_a6bdfc60-5113-11ec-be10-ddc2856c6ac6.png",alt:""}}),a._v(" "),n("div",{staticClass:"staking-wrap-box-pool-title-flex"},[n("div",{staticClass:"staking-wrap-box-pool-title-left"},[n("div",{staticClass:"textPrimary0"},[a._v(a._s(a.title))])]),a._v(" "),n("div",{staticClass:"staking-wrap-box-pool-title-right"},[n("div",{staticClass:"textSecond2"},[a._v(a._s(a.$t("staking.APY")))]),a._v(" "),n("div",{staticClass:"colorSecond01 setFontFamily"},[a._v(a._s(a.apy+"%"))])])])]),a._v(" "),n("div",{staticClass:"staking-wrap-box-pool-duration textPrimary0"},[a._v("\n        "+a._s(a.$t("staking.Duration"))+"\n      ")]),a._v(" "),n("div",{staticClass:"staking-wrap-box-pool-duration-box"},a._l(a.listInfo.list[0].config,(function(t,e){return n("span",{key:e,staticClass:"staking-wrap-box-pool-duration-smallBox setFontFamily",class:[a.isActiveSaleOut(t)?"textSecond3":"textSecond1",e==a.setBorderColor?"setBorderColor":""],on:{click:function(n){return a.handlePoolTimeTab(t,e)}}},[a._v(a._s(t.time))])})),0),a._v(" "),n("div",{staticClass:"staking-warp-amount"},[n("div",{staticClass:"textPrimary0"},[a._v(a._s(a.$t("staking.StakeAmount")))]),a._v(" "),n("div",{staticClass:"textSecond3"},[a._v("\n          "+a._s(a.$t("staking.Available"))+":\n          "+a._s(a.listInfo.list[0].userAmount.toFixed(6))+" BKB\n        ")])]),a._v(" "),n("div",{staticClass:"staking-warp-amount-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.inputNumber,expression:"inputNumber"}],staticClass:"textPrimary0 setFontFamily",attrs:{type:"number",min:1,placeholder:"Entry stake amount"},domProps:{value:a.inputNumber},on:{keydown:a.handleInput,blur:a.handleInput,input:function(t){t.target.composing||(a.inputNumber=t.target.value)}}}),a._v(" "),n("div",{staticClass:"staking-warp-amount-input-right"},[n("div",{staticClass:"right textPrimary0 setFontFamily"},[a._v("BKB")]),a._v(" "),n("div",{staticClass:"line colorLine1"}),a._v(" "),n("div",{staticClass:"max colorPrimary",on:{click:a.Max}},[a._v("\n            "+a._s(a.$t("staking.MAX"))+"\n          ")])])]),a._v(" "),n("div",{staticClass:"staking-limiation textPrimary0"},[a._v("\n        "+a._s(a.$t("staking.StakeAmountLimiation"))+"\n      ")]),a._v(" "),n("div",{staticClass:"staking-min textSecond3"},[n("div",[a._v("\n          "+a._s(a.$t("staking.Minimum"))+":\n          "),n("span",{staticClass:"setFontFamily textPrimary0"},[a._v(" 1 BKB")])]),a._v(" "),n("div")]),a._v(" "),n("div",{staticClass:"staking-summry"},[n("div",{staticClass:"textPrimary0 Summary"},[a._v(a._s(a.$t("staking.Summary")))]),a._v(" "),n("div",{staticClass:"staking-summary-box colorBackground3"},[n("ul",[n("li",[n("span",{staticClass:"dian colorBackgroundPrimary"}),a._v(" "),n("span",{staticClass:"textSecond3"},[a._v(a._s(a.$t("staking.StakeDate"))+" ")]),a._v(" "),n("span",{staticClass:"textPrimary0 setFontFamily"},[a._v(a._s(a.timerFormatte(a.listInfo.serverTime)))])]),a._v(" "),n("li",{staticClass:"setLeftLine colorDisable"}),a._v(" "),n("li",[n("span",{staticClass:"dian colorBackgroundPrimary"}),a._v(" "),n("span",{staticClass:"textSecond3"},[a._v(a._s(a.$t("staking.ValueDate"))+" ")]),a._v(" "),n("span",{staticClass:"textPrimary0 setFontFamily"},[a._v(a._s(a.timerFormatte(a.listInfo.serverTime)))])]),a._v(" "),n("li",{staticClass:"setLeftColorLine"},[n("span",{staticClass:"textSecond3"},[a._v(a._s(a.$t("staking.InterestPeriod"))+"\n              ")]),a._v(" "),n("span",{staticClass:"textPrimary0 setFontFamily"},[a._v(a._s(a.day)+" "+a._s(a.$t("staking.Days")))])]),a._v(" "),n("li",[n("span",{staticClass:"dian colorBackgroundPrimary"}),a._v(" "),n("span",{staticClass:"textSecond3"},[a._v(a._s(a.$t("staking.InterestEndDate"))+"\n              ")]),a._v(" "),n("span",{staticClass:"textPrimary0 setFontFamily"},[a._v(a._s(a.endtimerFormatte(a.listInfo.serverTime)))])]),a._v(" "),n("li",{staticClass:"setLeftLine colorDisable"}),a._v(" "),n("li",[n("span",{staticClass:"dian colorBackgroundPrimary"}),a._v(" "),n("span",{staticClass:"textSecond3"},[a._v(a._s(a.$t("staking.RedemptionDate"))+"\n              ")]),a._v(" "),n("span",{staticClass:"textPrimary0 setFontFamily"},[a._v(a._s(a.endtimerFormatte(a.listInfo.serverTime)))])])]),a._v(" "),n("div",{staticClass:"colorLine1 setColorLine1"}),a._v(" "),n("div",{staticClass:"staking-warp-Interests"},[n("div",{staticClass:"textSecond3"},[a._v("\n              "+a._s(a.$t("staking.EstimatedInterests"))+"\n            ")]),a._v(" "),n("div",{staticClass:"colorSecond01 setFontFamily"},[a._v("\n              "+a._s(a.inputNumber?(this.apy/100/360*this.day*a.inputNumber).toFixed(6):0)+"\n              BKB\n            ")])])])])]),a._v(" "),n("div",{staticClass:"wrap-bottom colorBackground1"},[n("button",{staticClass:"swap-btn",class:[a.btn==""+a.$t("staking.StakeNow")&&1<=a.inputNumber?"staking-wrap-box-pool-stake-now":"staking-wrap-box-pool-stake-now setOpacity"],on:{click:a.handleGetLoginSign}},[a._v("\n        "+a._s(a.btn)+"\n      ")])])])])}),[],!1,null,"7d37297c",null),n.default=s.exports}}]);