(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{370:function(t,n,a){"use strict";a.d(n,"a",(function(){return l})),a(60);n=a(19);var e=a(95),o=(n=a.n(e),a(2)),r=a(94),i=(a(92),function(){for(var t,n=arguments.length,a=new Array(n),e=0;e<n;e++)a[e]=arguments[e];(t=console).log.apply(t,["bit-activity-request:"].concat(a))}),c=n.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});c.interceptors.request.use((function(t){var n,a,e;return i("requestlog:",t),o.a.prototype.$store&&(a=(e=(n=o.a.prototype.$store.state).local).UA,e=e.locale,a.isBitKeep?Object.assign(t.headers,n.local.bitkeep,{language:e}):Object.assign(t.headers,{language:e})),t}),(function(t){return Promise.resolve({status:1})})),c.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,n=arguments.length,a=new Array(n),e=0;e<n;e++)a[e]=arguments[e];(t=console).log.apply(t,["bit-activity-response:"].concat(a))}("responselog:",t);var n="网路开了小差";n=(t=Object(r.b)()||{}).t?t.t("base.networkErro"):n;return Promise.resolve({status:1,data:n})}));var l={mBoxList:function(t){return c.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return c.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return c.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return c.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return c.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return c.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return c.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return c.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return c.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return c.post("swap/mining/info",t)},historyPhase:function(t){return c.post("swap/mining/historyPhase",t)},receiveAward:function(t){return c.post("swap/mining/receiveAward",t)},getInviteList:function(t){return c.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return c.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return c.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return c.post("/user/cloudstaking/poolList",t)},myPool:function(t){return c.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return c.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return c.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return c.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return c.post("/user/cloudstaking/getToken",t)}}},523:function(t,n,a){"use strict";a.r(n),a.d(n,"transfer16",(function(){return f})),a.d(n,"wallet",(function(){return k}));n=a(524);var e=a(37),o=a(14),r=a(168),g=a(169),p=a(528),c=a(529),l=a(525);n=a(68),n=a(371),n=a(19),n=a(82),n=a(60),n=a(526);function d(a){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,e=Object(l.a)(a);return e=t?(n=Object(l.a)(this).constructor,Reflect.construct(e,arguments,n)):e.apply(this,arguments),Object(c.a)(this,e)}}function f(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"1";return"0x"+(t=isNaN(Number(t))?1:Number(t)).toString(16)}var k=new(function(t){Object(p.a)(s,t);var a,n,c,l,k,i=d(s);function s(){var t;return Object(r.a)(this,s),(t=i.call(this))._accounts=[],t._chainId=0,t._walletPlatform="bitkeep",t}return Object(g.a)(s,[{key:"isInstall",value:function(){return!!window.ethereum&&!!window.isBitKeep}},{key:"isConnected",value:function(){return window.ethereum&&window.ethereum.isConnected()}},{key:"connect",value:(k=Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isInstall())return t.next=3,ethereum.request({method:"eth_requestAccounts"});t.next=8;break;case 3:return n=t.sent,this.initEvent(),t.abrupt("return",n[0]);case 8:return t.abrupt("return",{status:50001,message:"please download bitkeep chrome "});case 9:case"end":return t.stop()}}),t,this)}))),function(){return k.apply(this,arguments)})},{key:"selectedAddress",value:function(){return window.ethereum&&ethereum.selectedAddress}},{key:"getWalletInfo",value:function(){return{address:window.ethereum&&ethereum.selectedAddress,chainName:window.ethereum&&window.ethereum.chainName||"eth",chainId:window.ethereum&&window.ethereum.chainId||"1",walletId:"",walletPlatform:this.getWalletPlatform()}}},{key:"getChainId",value:(l=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",window.ethereum&&window.ethereum.request({method:"eth_chainId"}));case 1:case"end":return t.stop()}}),t)}))),function(){return l.apply(this,arguments)})},{key:"switchChainId",value:(c=Object(o.a)(regeneratorRuntime.mark((function t(n,a){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=7;break}return t.next=3,this.getAccounts();case 3:o=t.sent,o=(o=Object(e.a)(o,1))[0],a=o;case 7:return t.abrupt("return",window.ethereum&&window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:f(n)},a]}));case 8:case"end":return t.stop()}}),t,this)}))),function(t,n){return c.apply(this,arguments)})},{key:"getWalletPlatform",value:function(){return this._walletPlatform}},{key:"getAccounts",value:(n=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",window.ethereum?window.ethereum.request({method:"eth_accounts"}):[]);case 1:case"end":return t.stop()}}),t)}))),function(){return n.apply(this,arguments)})},{key:"LoginSign",value:(a=Object(o.a)(regeneratorRuntime.mark((function t(n,a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,window.ethereum.request({method:"personal_sign",params:[n,a],from:a});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(t,n){return a.apply(this,arguments)})},{key:"initEvent",value:function(){var t=this;ethereum.removeAllListeners&&ethereum.removeAllListeners(),ethereum.on("accountsChanged",Object(o.a)(regeneratorRuntime.mark((function n(){var e,a,o,r=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(e=r.length,a=new Array(e),o=0;o<e;o++)a[o]=r[o];t.emit.apply(t,["accountsChanged"].concat(a));case 2:case"end":return n.stop()}}),n)})))),ethereum.on("chainChanged",Object(o.a)(regeneratorRuntime.mark((function n(){var e,a,o,r=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(e=r.length,a=new Array(e),o=0;o<e;o++)a[o]=r[o];t.emit.apply(t,["chainChanged"].concat(a));case 2:case"end":return n.stop()}}),n)}))))}}]),s}(a.n(n).a))},572:function(t,n,a){var e={"./af":388,"./af.js":388,"./ar":389,"./ar-dz":390,"./ar-dz.js":390,"./ar-kw":391,"./ar-kw.js":391,"./ar-ly":392,"./ar-ly.js":392,"./ar-ma":393,"./ar-ma.js":393,"./ar-sa":394,"./ar-sa.js":394,"./ar-tn":395,"./ar-tn.js":395,"./ar.js":389,"./az":396,"./az.js":396,"./be":397,"./be.js":397,"./bg":398,"./bg.js":398,"./bm":399,"./bm.js":399,"./bn":400,"./bn-bd":401,"./bn-bd.js":401,"./bn.js":400,"./bo":402,"./bo.js":402,"./br":403,"./br.js":403,"./bs":404,"./bs.js":404,"./ca":405,"./ca.js":405,"./cs":406,"./cs.js":406,"./cv":407,"./cv.js":407,"./cy":408,"./cy.js":408,"./da":409,"./da.js":409,"./de":410,"./de-at":411,"./de-at.js":411,"./de-ch":412,"./de-ch.js":412,"./de.js":410,"./dv":413,"./dv.js":413,"./el":414,"./el.js":414,"./en-au":415,"./en-au.js":415,"./en-ca":416,"./en-ca.js":416,"./en-gb":417,"./en-gb.js":417,"./en-ie":418,"./en-ie.js":418,"./en-il":419,"./en-il.js":419,"./en-in":420,"./en-in.js":420,"./en-nz":421,"./en-nz.js":421,"./en-sg":422,"./en-sg.js":422,"./eo":423,"./eo.js":423,"./es":424,"./es-do":425,"./es-do.js":425,"./es-mx":426,"./es-mx.js":426,"./es-us":427,"./es-us.js":427,"./es.js":424,"./et":428,"./et.js":428,"./eu":429,"./eu.js":429,"./fa":430,"./fa.js":430,"./fi":431,"./fi.js":431,"./fil":432,"./fil.js":432,"./fo":433,"./fo.js":433,"./fr":434,"./fr-ca":435,"./fr-ca.js":435,"./fr-ch":436,"./fr-ch.js":436,"./fr.js":434,"./fy":437,"./fy.js":437,"./ga":438,"./ga.js":438,"./gd":439,"./gd.js":439,"./gl":440,"./gl.js":440,"./gom-deva":441,"./gom-deva.js":441,"./gom-latn":442,"./gom-latn.js":442,"./gu":443,"./gu.js":443,"./he":444,"./he.js":444,"./hi":445,"./hi.js":445,"./hr":446,"./hr.js":446,"./hu":447,"./hu.js":447,"./hy-am":448,"./hy-am.js":448,"./id":449,"./id.js":449,"./is":450,"./is.js":450,"./it":451,"./it-ch":452,"./it-ch.js":452,"./it.js":451,"./ja":453,"./ja.js":453,"./jv":454,"./jv.js":454,"./ka":455,"./ka.js":455,"./kk":456,"./kk.js":456,"./km":457,"./km.js":457,"./kn":458,"./kn.js":458,"./ko":459,"./ko.js":459,"./ku":460,"./ku.js":460,"./ky":461,"./ky.js":461,"./lb":462,"./lb.js":462,"./lo":463,"./lo.js":463,"./lt":464,"./lt.js":464,"./lv":465,"./lv.js":465,"./me":466,"./me.js":466,"./mi":467,"./mi.js":467,"./mk":468,"./mk.js":468,"./ml":469,"./ml.js":469,"./mn":470,"./mn.js":470,"./mr":471,"./mr.js":471,"./ms":472,"./ms-my":473,"./ms-my.js":473,"./ms.js":472,"./mt":474,"./mt.js":474,"./my":475,"./my.js":475,"./nb":476,"./nb.js":476,"./ne":477,"./ne.js":477,"./nl":478,"./nl-be":479,"./nl-be.js":479,"./nl.js":478,"./nn":480,"./nn.js":480,"./oc-lnc":481,"./oc-lnc.js":481,"./pa-in":482,"./pa-in.js":482,"./pl":483,"./pl.js":483,"./pt":484,"./pt-br":485,"./pt-br.js":485,"./pt.js":484,"./ro":486,"./ro.js":486,"./ru":487,"./ru.js":487,"./sd":488,"./sd.js":488,"./se":489,"./se.js":489,"./si":490,"./si.js":490,"./sk":491,"./sk.js":491,"./sl":492,"./sl.js":492,"./sq":493,"./sq.js":493,"./sr":494,"./sr-cyrl":495,"./sr-cyrl.js":495,"./sr.js":494,"./ss":496,"./ss.js":496,"./sv":497,"./sv.js":497,"./sw":498,"./sw.js":498,"./ta":499,"./ta.js":499,"./te":500,"./te.js":500,"./tet":501,"./tet.js":501,"./tg":502,"./tg.js":502,"./th":503,"./th.js":503,"./tk":504,"./tk.js":504,"./tl-ph":505,"./tl-ph.js":505,"./tlh":506,"./tlh.js":506,"./tr":507,"./tr.js":507,"./tzl":508,"./tzl.js":508,"./tzm":509,"./tzm-latn":510,"./tzm-latn.js":510,"./tzm.js":509,"./ug-cn":511,"./ug-cn.js":511,"./uk":512,"./uk.js":512,"./ur":513,"./ur.js":513,"./uz":514,"./uz-latn":515,"./uz-latn.js":515,"./uz.js":514,"./vi":516,"./vi.js":516,"./x-pseudo":517,"./x-pseudo.js":517,"./yo":518,"./yo.js":518,"./zh-cn":519,"./zh-cn.js":519,"./zh-hk":520,"./zh-hk.js":520,"./zh-mo":521,"./zh-mo.js":521,"./zh-tw":522,"./zh-tw.js":522};function o(t){return t=r(t),a(t)}function r(t){if(a.o(e,t))return e[t];throw(t=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",t}o.keys=function(){return Object.keys(e)},o.resolve=r,(t.exports=o).id=572},613:function(t,n,a){var e=a(692);(e="string"==typeof(e=e.__esModule?e.default:e)?[[t.i,e,""]]:e).locals&&(t.exports=e.locals),(0,a(110).default)("b277fc40",e,!0,{sourceMap:!1})},691:function(t,n,a){"use strict";a(613)},692:function(t,n,a){(a=a(109)(!1)).push([t.i,".theme-light .textPrimary0[data-v-3fcc5d7f] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-3fcc5d7f] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-3fcc5d7f] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-3fcc5d7f] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-3fcc5d7f] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-3fcc5d7f] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-3fcc5d7f] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-3fcc5d7f] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-3fcc5d7f] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-3fcc5d7f] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-3fcc5d7f] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-3fcc5d7f] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-3fcc5d7f] {\n  background-color: #495BFF;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-3fcc5d7f] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorPrimary[data-v-3fcc5d7f] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-3fcc5d7f] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-3fcc5d7f] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-3fcc5d7f] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-3fcc5d7f] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-3fcc5d7f] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-3fcc5d7f] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-3fcc5d7f] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-3fcc5d7f] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-3fcc5d7f] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-3fcc5d7f] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-3fcc5d7f] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-3fcc5d7f] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-3fcc5d7f] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-3fcc5d7f] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-3fcc5d7f] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-3fcc5d7f] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-3fcc5d7f] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-3fcc5d7f] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-3fcc5d7f] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-3fcc5d7f] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-3fcc5d7f] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-3fcc5d7f] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-3fcc5d7f] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-3fcc5d7f] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-3fcc5d7f] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-3fcc5d7f] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-3fcc5d7f] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-3fcc5d7f] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-3fcc5d7f] {\n  background-color: #495BFF;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-3fcc5d7f] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorPrimary[data-v-3fcc5d7f] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-3fcc5d7f] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-3fcc5d7f] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-3fcc5d7f] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-3fcc5d7f] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-3fcc5d7f] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-3fcc5d7f] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-3fcc5d7f] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-3fcc5d7f] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-3fcc5d7f] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-3fcc5d7f] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-3fcc5d7f] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-3fcc5d7f] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-3fcc5d7f] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-3fcc5d7f] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-3fcc5d7f] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-3fcc5d7f] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-3fcc5d7f] {\n  background-color: rgba(255,184,0,0.1);\n}\n.staking-wrap[data-v-3fcc5d7f] {\n  min-height: 100vh;\n}\n.staking-wrap .loading[data-v-3fcc5d7f] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.staking-wrap .staking-wrap-line[data-v-3fcc5d7f] {\n  width: 100%;\n  height: 0.03rem;\n}\n.staking-wrap .staking-wrap-banner[data-v-3fcc5d7f] {\n  position: relative;\n}\n.staking-wrap .staking-wrap-banner img[data-v-3fcc5d7f] {\n  width: 100%;\n}\n.staking-wrap .staking-wrap-banner .staking-wrap-imgText[data-v-3fcc5d7f] {\n  position: absolute;\n  bottom: 0.43rem;\n  left: 0.43rem;\n}\n.staking-wrap .staking-wrap-banner .staking-wrap-imgText .imgTextTitle[data-v-3fcc5d7f] {\n  font-size: 0.69rem;\n  font-weight: bold;\n  line-height: 0.75rem;\n  width: 3.73rem;\n  color: #080d21;\n}\n.staking-wrap .staking-wrap-box[data-v-3fcc5d7f] {\n  padding: 0.43rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Introduce[data-v-3fcc5d7f] {\n  border-radius: 0.21rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Introduce .staking-wrap-box-Introduce-title[data-v-3fcc5d7f] {\n  height: 0.96rem;\n  line-height: 0.96rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Introduce .staking-wrap-box-Introduce-title img[data-v-3fcc5d7f] {\n  width: 0.53rem;\n  height: 0.53rem;\n  display: inline-block;\n  margin-left: 0.4rem;\n  vertical-align: sub;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Introduce .staking-wrap-box-Introduce-title span[data-v-3fcc5d7f] {\n  font-weight: 600;\n  font-size: 0.43rem;\n  margin-left: 0.13rem;\n  display: inline-block;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Introduce .staking-wrap-box-Introduce-content[data-v-3fcc5d7f] {\n  padding: 0.27rem 0.4rem 0;\n  font-size: 0.32rem;\n  line-height: 0.53rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Introduce .viewAll[data-v-3fcc5d7f] {\n  text-align: right;\n  font-size: 0.37rem;\n  line-height: 0.32rem;\n  margin: 0.16rem 0.4rem 0;\n  padding-bottom: 0.27rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data[data-v-3fcc5d7f] {\n  border-radius: 0.21rem;\n  margin-top: 0.27rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-title[data-v-3fcc5d7f] {\n  height: 0.96rem;\n  line-height: 0.96rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-title img[data-v-3fcc5d7f] {\n  width: 0.53rem;\n  height: 0.53rem;\n  display: inline-block;\n  margin-left: 0.4rem;\n  vertical-align: sub;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-title span[data-v-3fcc5d7f] {\n  font-weight: 600;\n  font-size: 0.43rem;\n  margin-left: 0.13rem;\n  display: inline-block;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-content[data-v-3fcc5d7f] {\n  padding: 0.27rem 0.4rem 0.53rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-content .staking-wrap-box-Data-flex[data-v-3fcc5d7f] {\n  display: flex;\n  justify-content: space-between;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-content .staking-wrap-box-Data-flex .staking-wrap-box-Data-left[data-v-3fcc5d7f] {\n  text-align: left;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-content .staking-wrap-box-Data-flex .staking-wrap-box-Data-left[data-v-3fcc5d7f] :first-child {\n  font-size: 0.32rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-content .staking-wrap-box-Data-flex .staking-wrap-box-Data-left[data-v-3fcc5d7f] :last-child {\n  font-size: 0.43rem;\n  margin-top: 0.13rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-content .staking-wrap-box-Data-flex .staking-wrap-box-Data-right[data-v-3fcc5d7f] {\n  text-align: right;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-content .staking-wrap-box-Data-flex .staking-wrap-box-Data-right[data-v-3fcc5d7f] :first-child {\n  font-size: 0.32rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-content .staking-wrap-box-Data-flex .staking-wrap-box-Data-right[data-v-3fcc5d7f] :last-child {\n  font-size: 0.43rem;\n  margin-top: 0.13rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool[data-v-3fcc5d7f] {\n  border-radius: 0.21rem;\n  margin-top: 0.27rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-title[data-v-3fcc5d7f] {\n  display: flex;\n  height: 1.44rem;\n  align-items: center;\n  position: relative;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-title .bigImg[data-v-3fcc5d7f] {\n  width: 0.8rem;\n  height: 0.8rem;\n  display: inline-block;\n  margin-left: 0.4rem;\n  vertical-align: middle;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-title .smallImg[data-v-3fcc5d7f] {\n  position: absolute;\n  bottom: 0.27rem;\n  width: 0.37rem;\n  height: 0.37rem;\n  border-radius: 50%;\n  left: 0.91rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-title-flex[data-v-3fcc5d7f] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 0.27rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-left[data-v-3fcc5d7f] :first-child {\n  font-weight: 600;\n  font-size: 0.43rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-left[data-v-3fcc5d7f] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.05rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-right[data-v-3fcc5d7f] {\n  text-align: right;\n  position: absolute;\n  right: 0.4rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-right[data-v-3fcc5d7f] :first-child {\n  font-size: 0.32rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-right[data-v-3fcc5d7f] :last-child {\n  font-weight: 600;\n  font-size: 0.32rem;\n  margin-top: 0.05rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content[data-v-3fcc5d7f] {\n  padding: 0.27rem 0.4rem 0.53rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-flex[data-v-3fcc5d7f] {\n  display: flex;\n  justify-content: space-between;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-flex .staking-wrap-box-pool-left[data-v-3fcc5d7f] {\n  text-align: left;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-flex .staking-wrap-box-pool-left[data-v-3fcc5d7f] :first-child {\n  font-size: 0.32rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-flex .staking-wrap-box-pool-left[data-v-3fcc5d7f] :last-child {\n  font-size: 0.43rem;\n  margin-top: 0.13rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-flex .staking-wrap-box-pool-right[data-v-3fcc5d7f] {\n  text-align: right;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-flex .staking-wrap-box-pool-right[data-v-3fcc5d7f] :first-child {\n  font-size: 0.32rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-flex .staking-wrap-box-pool-right[data-v-3fcc5d7f] :last-child {\n  font-size: 0.43rem;\n  margin-top: 0.13rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-duration[data-v-3fcc5d7f] {\n  margin-top: 0.53rem;\n  font-size: 0.32rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-duration-box[data-v-3fcc5d7f] {\n  margin-top: 0.27rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-duration-box .staking-wrap-box-pool-duration-smallBox[data-v-3fcc5d7f] {\n  display: inline-block;\n  text-align: center;\n  height: 0.75rem;\n  width: 1.6rem;\n  line-height: 0.75rem;\n  border-radius: 0.11rem;\n  margin-right: 0.21rem;\n  font-size: 0.43rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-duration-box .setBorderColor[data-v-3fcc5d7f] {\n  border: 0.03rem solid #495BFF;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-stake[data-v-3fcc5d7f] {\n  margin-top: 0.53rem;\n  width: 100%;\n  height: 1.33rem;\n  line-height: 1.33rem;\n  text-align: center;\n  border-radius: 0.27rem;\n  font-weight: 500;\n  font-size: 0.43rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-stake-now[data-v-3fcc5d7f] {\n  background: #495BFF;\n  color: #fff;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-stake-soon[data-v-3fcc5d7f] {\n  color: #9CA5B3;\n}\n.theme-light .staking-wrap-box-pool-duration-smallBox[data-v-3fcc5d7f] {\n  border: 0.03rem solid #F0F0F0;\n}\n.theme-dark .staking-wrap-box-pool-duration-smallBox[data-v-3fcc5d7f] {\n  border: 0.03rem solid #2A2D3D;\n}",""]),t.exports=a},754:function(t,n,a){"use strict";a.r(n),a(55),a(41),a(61),a(80),a(48),a(81);var e=a(14),o=a(35),r=(a(242),a(70),a(47),a(69),a(19),a(82),a(68),a(370)),i=a(91),s=a(369),c=a.n(s),l=a(523);function d(t,n){var a,e=Object.keys(t);return Object.getOwnPropertySymbols&&(a=Object.getOwnPropertySymbols(t),n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)),e}function g(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?d(Object(a),!0).forEach((function(n){Object(o.a)(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}i={name:"staking",data:function(){return{isLoading:!0,refreshLoading:!1,flag:!1,theme:0,setBorderColor:0,apy:"20%",ends:"--",btn:"Stake now",address:"",listInfo:{list:[{allStakeAmount:0,bkbTotalSuperAmount:0,config:[]}]},question:"https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png"}},computed:g(g({},Object(i.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep}}),mounted:function(){this.setIcon(),this.isBitKeep||this.getInfo()},methods:{getInfo:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function n(){var e,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.isBitKeep){n.next=4;break}return n.next=3,l.wallet.connect();case 3:t.address=n.sent;case 4:return n.next=6,r.a.poolList({userid:t.address});case 6:if(a=n.sent,e=a.data,1==a.status)return t.isLoading=!1,n.abrupt("return",t.$dialog.alert({message:e,confirmButtonText:t.$t("CbkbExchange.know"),confirmButtonColor:"$theme-light-colorPrimary"}));n.next=12;break;case 12:t.isLoading=!1,t.listInfo=e,t.listInfo.list=e.list,a=e.list&&e.list[0].config[0],t.refreshLoading=!1,t.handlePoolTimeTab(a,0);case 18:case"end":return n.stop()}}),n)})))()},isActiveSaleOut:function(t){return t.allStake>=t.limit||c()(t.lastStakeTime).isBefore(c()(this.listInfo.list[0].serverTime))},stakeNow:function(){this.btn!=this.$t("staking.SoldOut")&&this.$router.push("/activity/staking/addPool")},handlePoolTimeTab:function(t,n){this.setBorderColor=n,this.apy=(100*t.apy).toFixed(2)+"%",this.ends=c()(t.lastStakeTime).format("YYYY-MM-DD HH:mm"),this.btn=this.isActiveSaleOut(t)?this.$t("staking.SoldOut"):this.$t("staking.StakeNow")},setIcon:function(){var t=this;this.isBitKeep&&BitKeepInvoke.onLoadReady((function(){BitKeepInvoke.setTitle(t.$t("staking.stakingTitle")),BitKeepInvoke.getAddress(function(){var a=Object(e.a)(regeneratorRuntime.mark((function n(e,a){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e)return n.abrupt("return",t.$toast(e));n.next=2;break;case 2:t.addresses=a,t.address=t.addresses.eth||"--",t.getInfo();case 5:case"end":return n.stop()}}),n)})));return function(t,n){return a.apply(this,arguments)}}()),t.$nextTick((function(){BitKeepInvoke.appMode((function(n,e){var a=document.getElementsByTagName("body")[0];1==e?(t.theme=1,t.question="https://cdn.bitkeep.vip/u_b_47485390-4f90-11ec-ace3-97579b99c357.png",a.setAttribute("class","theme-dark"),setTimeout((function(){BitKeepInvoke.setIconAction("https://cdn.bitkeep.vip/u_b_09035ca0-4dd9-11ec-a555-07d5354e6fab.png",(function(){t.$router.push("/activity/staking/myPool")}))}),500)):(t.theme=0,t.question="https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png",a.setAttribute("class","theme-light"),setTimeout((function(){BitKeepInvoke.setIconAction("https://cdn.bitkeep.vip/u_b_2bb4fa20-3b86-11ec-8e63-1db435df936c.png",(function(){t.$router.push("/activity/staking/myPool")}))}),500))}))}))}))},viewAll:function(){this.flag=!this.flag;var t=document.getElementsByClassName("staking-wrap-box-Introduce-content")[0];this.flag?t.setAttribute("style","-webkit-line-clamp:20"):t.setAttribute("style","-webkit-line-clamp:3")},milliFormat:function(t){return t&&t.toString().replace(/^\d+/g,(function(t){return t.replace(/(?=(?!^)(\d{3})+$)/g,",")}))}}},a(691),a=a(79),i=Object(a.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"staking-wrap colorBackground0"},[t.isLoading?e("div",{staticClass:"loading"},[e("van-loading",{attrs:{color:"#1989fa",vertical:""}},[t._v(t._s(t.$t("base.loading"))+"...")])],1):e("van-pull-refresh",{attrs:{"success-text":t.$t("mining.success"),"loading-text":t.$t("mining.loading"),"loosing-text":t.$t("mining.loading")},on:{refresh:t.getInfo},model:{value:t.refreshLoading,callback:function(n){t.refreshLoading=n},expression:"refreshLoading"}},[e("div",{staticClass:"staking-wrap colorBackground0"},[e("div",{staticClass:"staking-wrap-banner"},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_e5be40b0-6468-11ec-a2a9-47db2a9d25c4.png",alt:""}}),t._v(" "),e("div",{staticClass:"staking-wrap-imgText"},[e("div",{staticClass:"imgTextTitle"},[t._v(t._s(t.$t("staking.stakingImg")))])])]),t._v(" "),e("div",{staticClass:"staking-wrap-box"},[e("div",{staticClass:"staking-wrap-box-Introduce colorBackground1"},[e("div",{staticClass:"staking-wrap-box-Introduce-title"},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_9976a830-647e-11ec-8dc3-6956fa76f0cf.png",alt:""}}),t._v(" "),e("span",{staticClass:"textPrimary0"},[t._v(t._s(t.$t("staking.Introduce")))])]),t._v(" "),e("div",{staticClass:"staking-wrap-line colorLine"}),t._v(" "),e("div",{staticClass:"staking-wrap-box-Introduce-content textSecond2"},[t._v("\n            "+t._s(t.$t("staking.content"))+"\n          ")]),t._v(" "),e("div",{staticClass:"viewAll colorPrimary",on:{click:t.viewAll}},[t._v("\n            "+t._s(this.flag?t.$t("mining.pickUp"):t.$t("mining.viewAll"))+"\n          ")])]),t._v(" "),e("div",{staticClass:"staking-wrap-box-Data colorBackground1"},[e("div",{staticClass:"staking-wrap-box-Data-title"},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_554d2280-6481-11ec-8561-09279f51a681.png",alt:""}}),t._v(" "),e("span",{staticClass:"textPrimary0"},[t._v(t._s(t.$t("staking.Data")))])]),t._v(" "),e("div",{staticClass:"staking-wrap-line colorLine"}),t._v(" "),e("div",{staticClass:"staking-wrap-box-Data-content textSecond2"},[e("div",{staticClass:"staking-wrap-box-Data-flex"},[e("div",{staticClass:"staking-wrap-box-Data-left"},[e("div",{staticClass:"textSecond2"},[t._v(t._s(t.$t("staking.StakedBKB")))]),t._v(" "),e("div",{staticClass:"textPrimary0 setFontFamily"},[t._v("\n                  "+t._s(t.milliFormat(0<t.listInfo.list.length?t.listInfo.list[0].allStakeAmount.toFixed(0):0))+"BKB\n                ")])]),t._v(" "),e("div",{staticClass:"staking-wrap-box-Data-right"},[e("div",{staticClass:"textSecond2"},[t._v(t._s(t.$t("staking.totalSupply")))]),t._v(" "),e("div",{staticClass:"textPrimary0 setFontFamily"},[t._v("\n                  "+t._s(t.milliFormat(0<t.listInfo.list.length?t.listInfo.list[0].bkbTotalSuperAmount:0))+"\n                  BKB\n                ")])])])])]),t._v(" "),t._l(t.listInfo.list,(function(n,o){return e("div",{key:o,staticClass:"staking-wrap-box-pool colorBackground1"},[e("div",{staticClass:"staking-wrap-box-pool-title"},[e("img",{staticClass:"bigImg",attrs:{src:"https://cdn.bitkeep.vip/u_b_a6bdfc60-5113-11ec-be10-ddc2856c6ac6.png",alt:""}}),t._v(" "),e("div",{staticClass:"staking-wrap-box-pool-title-flex"},[e("div",{staticClass:"staking-wrap-box-pool-title-left"},[e("div",{staticClass:"textPrimary0"},[t._v(t._s(n.title))]),t._v(" "),e("div",{staticClass:"textSecond2"},[t._v(t._s(t.$t("staking.stakingImg")))])]),t._v(" "),e("div",{staticClass:"staking-wrap-box-pool-title-right"},[e("div",{staticClass:"textSecond2"},[t._v(t._s(t.$t("staking.EndsIn")))]),t._v(" "),e("div",{staticClass:"textPrimary0 setFontFamily"},[t._v(t._s(t.ends))])])])]),t._v(" "),e("div",{staticClass:"staking-wrap-line colorLine"}),t._v(" "),e("div",{staticClass:"staking-wrap-box-pool-content textSecond2"},[e("div",{staticClass:"staking-wrap-box-pool-flex"},[e("div",{staticClass:"staking-wrap-box-pool-left"},[e("div",{staticClass:"textSecond2"},[t._v(t._s(t.$t("staking.APY")))]),t._v(" "),e("div",{staticClass:"colorSecond01 setFontFamily"},[t._v(t._s(t.apy))])]),t._v(" "),e("div",{staticClass:"staking-wrap-box-pool-right"},[e("div",{staticClass:"textSecond2"},[t._v(t._s(t.$t("staking.YourStakeAmount")))]),t._v(" "),e("div",{staticClass:"textPrimary0 setFontFamily"},[t._v("\n                  "+t._s(n.myAllStaking.toFixed(2))+" BKB\n                ")])])]),t._v(" "),e("div",{staticClass:"staking-wrap-box-pool-duration textSecond2"},[t._v("\n              "+t._s(t.$t("staking.Duration"))+"\n            ")]),t._v(" "),e("div",{staticClass:"staking-wrap-box-pool-duration-box"},t._l(n.config,(function(n,a){return e("span",{key:a,staticClass:"staking-wrap-box-pool-duration-smallBox",class:[t.isActiveSaleOut(n)?"textSecond3":"textSecond1",a==t.setBorderColor?"setBorderColor":""],on:{click:function(e){return t.handlePoolTimeTab(n,a)}}},[t._v(t._s(n.time))])})),0),t._v(" "),e("div",{staticClass:"\n                staking-wrap-box-pool-stake\n              ",class:t.btn==""+t.$t("staking.StakeNow")?"staking-wrap-box-pool-stake-now":"textSecond3 colorBackground2",on:{click:t.stakeNow}},[t._v("\n              "+t._s(t.btn)+"\n            ")])])])})),t._v(" "),e("div",{staticClass:"staking-wrap-box-pool colorBackground1"},[e("div",{staticClass:"staking-wrap-box-pool-title"},[e("img",{staticClass:"bigImg",attrs:{src:"https://cdn.bitkeep.vip/u_b_a6bdfc60-5113-11ec-be10-ddc2856c6ac6.png",alt:""}}),t._v(" "),e("img",{staticClass:"smallImg",attrs:{src:"https://cdn.bitkeep.vip/u_b_090033d0-5104-11ec-be10-ddc2856c6ac6.png",alt:""}}),t._v(" "),e("div",{staticClass:"staking-wrap-box-pool-title-flex"},[e("div",{staticClass:"staking-wrap-box-pool-title-left"},[e("div",{staticClass:"textPrimary0"},[t._v(t._s(t.$t("staking.EthereumChainPool")))]),t._v(" "),e("div",{staticClass:"textSecond2"},[t._v(t._s(t.$t("staking.stakingImg")))])]),t._v(" "),e("div",{staticClass:"staking-wrap-box-pool-title-right"},[e("div",{staticClass:"textSecond2"},[t._v(t._s(t.$t("staking.EndsIn")))]),t._v(" "),e("div",{staticClass:"textPrimary0 setFontFamily"},[t._v("--")])])])]),t._v(" "),e("div",{staticClass:"staking-wrap-line colorLine"}),t._v(" "),e("div",{staticClass:"staking-wrap-box-pool-content textSecond2"},[e("div",{staticClass:"staking-wrap-box-pool-flex"},[e("div",{staticClass:"staking-wrap-box-pool-left"},[e("div",{staticClass:"textSecond2"},[t._v(t._s(t.$t("staking.APY")))]),t._v(" "),e("div",{staticClass:"colorSecond01 setFontFamily"},[t._v("15.48%")])]),t._v(" "),e("div",{staticClass:"staking-wrap-box-pool-right"},[e("div",{staticClass:"textSecond2"},[t._v(t._s(t.$t("staking.YourStakeAmount")))]),t._v(" "),e("div",{staticClass:"textPrimary0 setFontFamily"},[t._v("0 BKB")])])]),t._v(" "),e("div",{staticClass:"staking-wrap-box-pool-duration textSecond2"},[t._v("\n              "+t._s(t.$t("staking.Duration"))+"\n            ")]),t._v(" "),e("div",{staticClass:"staking-wrap-box-pool-duration-box"},[e("span",{staticClass:"\n                  staking-wrap-box-pool-duration-smallBox\n                  textSecond1\n                  setBorderColor\n                "},[t._v("7")])]),t._v(" "),e("div",{staticClass:"\n                staking-wrap-box-pool-stake textSecond3 colorBackground2\n              "},[t._v("\n              "+t._s(t.$t("staking.ComingSoon"))+"\n            ")])])]),t._v(" "),e("div",{staticClass:"staking-wrap-box-pool colorBackground1"},[e("div",{staticClass:"staking-wrap-box-pool-title"},[e("img",{staticClass:"bigImg",attrs:{src:"https://cdn.bitkeep.vip/u_b_a6bdfc60-5113-11ec-be10-ddc2856c6ac6.png",alt:""}}),t._v(" "),e("img",{staticClass:"smallImg",attrs:{src:"https://cdn.bitkeep.vip/u_b_bc5504d0-567a-11ec-a2f6-c30da61fc62b.png",alt:""}}),t._v(" "),e("div",{staticClass:"staking-wrap-box-pool-title-flex"},[e("div",{staticClass:"staking-wrap-box-pool-title-left"},[e("div",{staticClass:"textPrimary0"},[t._v(t._s(t.$t("staking.BSCChainPool")))]),t._v(" "),e("div",{staticClass:"textSecond2"},[t._v(t._s(t.$t("staking.stakingImg")))])]),t._v(" "),e("div",{staticClass:"staking-wrap-box-pool-title-right"},[e("div",{staticClass:"textSecond2"},[t._v(t._s(t.$t("staking.EndsIn")))]),t._v(" "),e("div",{staticClass:"textPrimary0 setFontFamily"},[t._v("--")])])])]),t._v(" "),e("div",{staticClass:"staking-wrap-line colorLine"}),t._v(" "),e("div",{staticClass:"staking-wrap-box-pool-content textSecond2"},[e("div",{staticClass:"staking-wrap-box-pool-flex"},[e("div",{staticClass:"staking-wrap-box-pool-left"},[e("div",{staticClass:"textSecond2"},[t._v(t._s(t.$t("staking.APY")))]),t._v(" "),e("div",{staticClass:"colorSecond01 setFontFamily"},[t._v("17.85%")])]),t._v(" "),e("div",{staticClass:"staking-wrap-box-pool-right"},[e("div",{staticClass:"textSecond2"},[t._v(t._s(t.$t("staking.YourStakeAmount")))]),t._v(" "),e("div",{staticClass:"textPrimary0 setFontFamily"},[t._v("0 BKB")])])]),t._v(" "),e("div",{staticClass:"staking-wrap-box-pool-duration textSecond2"},[t._v("\n              "+t._s(t.$t("staking.Duration"))+"\n            ")]),t._v(" "),e("div",{staticClass:"staking-wrap-box-pool-duration-box"},[e("span",{staticClass:"\n                  staking-wrap-box-pool-duration-smallBox\n                  textSecond1\n                  setBorderColor\n                "},[t._v("7")])]),t._v(" "),e("div",{staticClass:"\n                staking-wrap-box-pool-stake textSecond3 colorBackground2\n              "},[t._v("\n              "+t._s(t.$t("staking.ComingSoon"))+"\n            ")])])])],2)])])],1)}),[],!1,null,"3fcc5d7f",null),n.default=i.exports}}]);