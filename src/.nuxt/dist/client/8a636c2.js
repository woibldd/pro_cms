(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{370:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n(60);e=n(19);var a=n(95),r=(e=n.n(a),n(2)),o=n(94),i=(n(92),function(){for(var t,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];(t=console).log.apply(t,["bit-activity-request:"].concat(n))}),c=e.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});c.interceptors.request.use((function(t){var e,n,a;return i("requestlog:",t),r.a.prototype.$store&&(n=(a=(e=r.a.prototype.$store.state).local).UA,a=a.locale,n.isBitKeep?Object.assign(t.headers,e.local.bitkeep,{language:a}):Object.assign(t.headers,{language:a})),t}),(function(t){return Promise.resolve({status:1})})),c.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];(t=console).log.apply(t,["bit-activity-response:"].concat(n))}("responselog:",t);var e="网路开了小差";e=(t=Object(o.b)()||{}).t?t.t("base.networkErro"):e;return Promise.resolve({status:1,data:e})}));var l={mBoxList:function(t){return c.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return c.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return c.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return c.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return c.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return c.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return c.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return c.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return c.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return c.post("swap/mining/info",t)},historyPhase:function(t){return c.post("swap/mining/historyPhase",t)},receiveAward:function(t){return c.post("swap/mining/receiveAward",t)},getInviteList:function(t){return c.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return c.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return c.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return c.post("/user/cloudstaking/poolList",t)},myPool:function(t){return c.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return c.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return c.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return c.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return c.post("/user/cloudstaking/getToken",t)}}},523:function(t,e,n){"use strict";n.r(e),n.d(e,"transfer16",(function(){return h})),n.d(e,"wallet",(function(){return a}));e=n(524);var r=n(37),o=n(14),c=n(168),u=n(169),l=n(528),d=n(529),m=n(525);e=n(68),e=n(371),e=n(19),e=n(82),e=n(60),e=n(526);function g(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=Object(m.a)(t);return n=a?(e=Object(m.a)(this).constructor,Reflect.construct(n,arguments,e)):n.apply(this,arguments),Object(d.a)(this,n)}}function h(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"1";return"0x"+(t=isNaN(Number(t))?1:Number(t)).toString(16)}var a=new(function(t){Object(l.a)(s,t);var e,n,a,d,m,i=g(s);function s(){var t;return Object(c.a)(this,s),(t=i.call(this))._accounts=[],t._chainId=0,t._walletPlatform="bitkeep",t}return Object(u.a)(s,[{key:"isInstall",value:function(){return!!window.ethereum&&!!window.isBitKeep}},{key:"isConnected",value:function(){return window.ethereum&&window.ethereum.isConnected()}},{key:"connect",value:(m=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isInstall())return t.next=3,ethereum.request({method:"eth_requestAccounts"});t.next=8;break;case 3:return e=t.sent,this.initEvent(),t.abrupt("return",e[0]);case 8:return t.abrupt("return",{status:50001,message:"please download bitkeep chrome "});case 9:case"end":return t.stop()}}),t,this)}))),function(){return m.apply(this,arguments)})},{key:"selectedAddress",value:function(){return window.ethereum&&ethereum.selectedAddress}},{key:"getWalletInfo",value:function(){return{address:window.ethereum&&ethereum.selectedAddress,chainName:window.ethereum&&window.ethereum.chainName||"eth",chainId:window.ethereum&&window.ethereum.chainId||"1",walletId:"",walletPlatform:this.getWalletPlatform()}}},{key:"getChainId",value:(d=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",window.ethereum&&window.ethereum.request({method:"eth_chainId"}));case 1:case"end":return t.stop()}}),t)}))),function(){return d.apply(this,arguments)})},{key:"switchChainId",value:(a=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=7;break}return t.next=3,this.getAccounts();case 3:a=t.sent,a=(a=Object(r.a)(a,1))[0],n=a;case 7:return t.abrupt("return",window.ethereum&&window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:h(e)},n]}));case 8:case"end":return t.stop()}}),t,this)}))),function(t,e){return a.apply(this,arguments)})},{key:"getWalletPlatform",value:function(){return this._walletPlatform}},{key:"getAccounts",value:(n=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",window.ethereum?window.ethereum.request({method:"eth_accounts"}):[]);case 1:case"end":return t.stop()}}),t)}))),function(){return n.apply(this,arguments)})},{key:"LoginSign",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,window.ethereum.request({method:"personal_sign",params:[e,n],from:n});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(t,n){return e.apply(this,arguments)})},{key:"initEvent",value:function(){var t=this;ethereum.removeAllListeners&&ethereum.removeAllListeners(),ethereum.on("accountsChanged",Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,a,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=o.length,r=new Array(n),a=0;a<n;a++)r[a]=o[a];t.emit.apply(t,["accountsChanged"].concat(r));case 2:case"end":return e.stop()}}),e)})))),ethereum.on("chainChanged",Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,a,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=o.length,r=new Array(n),a=0;a<n;a++)r[a]=o[a];t.emit.apply(t,["chainChanged"].concat(r));case 2:case"end":return e.stop()}}),e)}))))}}]),s}(n.n(e).a))},572:function(t,e,n){var a={"./af":388,"./af.js":388,"./ar":389,"./ar-dz":390,"./ar-dz.js":390,"./ar-kw":391,"./ar-kw.js":391,"./ar-ly":392,"./ar-ly.js":392,"./ar-ma":393,"./ar-ma.js":393,"./ar-sa":394,"./ar-sa.js":394,"./ar-tn":395,"./ar-tn.js":395,"./ar.js":389,"./az":396,"./az.js":396,"./be":397,"./be.js":397,"./bg":398,"./bg.js":398,"./bm":399,"./bm.js":399,"./bn":400,"./bn-bd":401,"./bn-bd.js":401,"./bn.js":400,"./bo":402,"./bo.js":402,"./br":403,"./br.js":403,"./bs":404,"./bs.js":404,"./ca":405,"./ca.js":405,"./cs":406,"./cs.js":406,"./cv":407,"./cv.js":407,"./cy":408,"./cy.js":408,"./da":409,"./da.js":409,"./de":410,"./de-at":411,"./de-at.js":411,"./de-ch":412,"./de-ch.js":412,"./de.js":410,"./dv":413,"./dv.js":413,"./el":414,"./el.js":414,"./en-au":415,"./en-au.js":415,"./en-ca":416,"./en-ca.js":416,"./en-gb":417,"./en-gb.js":417,"./en-ie":418,"./en-ie.js":418,"./en-il":419,"./en-il.js":419,"./en-in":420,"./en-in.js":420,"./en-nz":421,"./en-nz.js":421,"./en-sg":422,"./en-sg.js":422,"./eo":423,"./eo.js":423,"./es":424,"./es-do":425,"./es-do.js":425,"./es-mx":426,"./es-mx.js":426,"./es-us":427,"./es-us.js":427,"./es.js":424,"./et":428,"./et.js":428,"./eu":429,"./eu.js":429,"./fa":430,"./fa.js":430,"./fi":431,"./fi.js":431,"./fil":432,"./fil.js":432,"./fo":433,"./fo.js":433,"./fr":434,"./fr-ca":435,"./fr-ca.js":435,"./fr-ch":436,"./fr-ch.js":436,"./fr.js":434,"./fy":437,"./fy.js":437,"./ga":438,"./ga.js":438,"./gd":439,"./gd.js":439,"./gl":440,"./gl.js":440,"./gom-deva":441,"./gom-deva.js":441,"./gom-latn":442,"./gom-latn.js":442,"./gu":443,"./gu.js":443,"./he":444,"./he.js":444,"./hi":445,"./hi.js":445,"./hr":446,"./hr.js":446,"./hu":447,"./hu.js":447,"./hy-am":448,"./hy-am.js":448,"./id":449,"./id.js":449,"./is":450,"./is.js":450,"./it":451,"./it-ch":452,"./it-ch.js":452,"./it.js":451,"./ja":453,"./ja.js":453,"./jv":454,"./jv.js":454,"./ka":455,"./ka.js":455,"./kk":456,"./kk.js":456,"./km":457,"./km.js":457,"./kn":458,"./kn.js":458,"./ko":459,"./ko.js":459,"./ku":460,"./ku.js":460,"./ky":461,"./ky.js":461,"./lb":462,"./lb.js":462,"./lo":463,"./lo.js":463,"./lt":464,"./lt.js":464,"./lv":465,"./lv.js":465,"./me":466,"./me.js":466,"./mi":467,"./mi.js":467,"./mk":468,"./mk.js":468,"./ml":469,"./ml.js":469,"./mn":470,"./mn.js":470,"./mr":471,"./mr.js":471,"./ms":472,"./ms-my":473,"./ms-my.js":473,"./ms.js":472,"./mt":474,"./mt.js":474,"./my":475,"./my.js":475,"./nb":476,"./nb.js":476,"./ne":477,"./ne.js":477,"./nl":478,"./nl-be":479,"./nl-be.js":479,"./nl.js":478,"./nn":480,"./nn.js":480,"./oc-lnc":481,"./oc-lnc.js":481,"./pa-in":482,"./pa-in.js":482,"./pl":483,"./pl.js":483,"./pt":484,"./pt-br":485,"./pt-br.js":485,"./pt.js":484,"./ro":486,"./ro.js":486,"./ru":487,"./ru.js":487,"./sd":488,"./sd.js":488,"./se":489,"./se.js":489,"./si":490,"./si.js":490,"./sk":491,"./sk.js":491,"./sl":492,"./sl.js":492,"./sq":493,"./sq.js":493,"./sr":494,"./sr-cyrl":495,"./sr-cyrl.js":495,"./sr.js":494,"./ss":496,"./ss.js":496,"./sv":497,"./sv.js":497,"./sw":498,"./sw.js":498,"./ta":499,"./ta.js":499,"./te":500,"./te.js":500,"./tet":501,"./tet.js":501,"./tg":502,"./tg.js":502,"./th":503,"./th.js":503,"./tk":504,"./tk.js":504,"./tl-ph":505,"./tl-ph.js":505,"./tlh":506,"./tlh.js":506,"./tr":507,"./tr.js":507,"./tzl":508,"./tzl.js":508,"./tzm":509,"./tzm-latn":510,"./tzm-latn.js":510,"./tzm.js":509,"./ug-cn":511,"./ug-cn.js":511,"./uk":512,"./uk.js":512,"./ur":513,"./ur.js":513,"./uz":514,"./uz-latn":515,"./uz-latn.js":515,"./uz.js":514,"./vi":516,"./vi.js":516,"./x-pseudo":517,"./x-pseudo.js":517,"./yo":518,"./yo.js":518,"./zh-cn":519,"./zh-cn.js":519,"./zh-hk":520,"./zh-hk.js":520,"./zh-mo":521,"./zh-mo.js":521,"./zh-tw":522,"./zh-tw.js":522};function r(t){return t=o(t),n(t)}function o(t){if(n.o(a,t))return a[t];throw(t=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",t}r.keys=function(){return Object.keys(a)},r.resolve=o,(t.exports=r).id=572},625:function(t,e,n){var a=n(720);(a="string"==typeof(a=a.__esModule?a.default:a)?[[t.i,a,""]]:a).locals&&(t.exports=a.locals),(0,n(110).default)("b03339f6",a,!0,{sourceMap:!1})},719:function(t,e,n){"use strict";n(625)},720:function(t,e,n){(n=n(109)(!1)).push([t.i,".theme-light .textPrimary0[data-v-c64aec70] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-c64aec70] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-c64aec70] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-c64aec70] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-c64aec70] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-c64aec70] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-c64aec70] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-c64aec70] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-c64aec70] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-c64aec70] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-c64aec70] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-c64aec70] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-c64aec70] {\n  background-color: #495BFF;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-c64aec70] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorPrimary[data-v-c64aec70] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-c64aec70] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-c64aec70] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-c64aec70] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-c64aec70] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-c64aec70] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-c64aec70] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-c64aec70] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-c64aec70] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-c64aec70] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-c64aec70] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-c64aec70] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-c64aec70] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-c64aec70] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-c64aec70] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-c64aec70] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-c64aec70] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-c64aec70] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-c64aec70] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-c64aec70] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-c64aec70] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-c64aec70] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-c64aec70] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-c64aec70] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-c64aec70] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-c64aec70] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-c64aec70] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-c64aec70] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-c64aec70] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-c64aec70] {\n  background-color: #495BFF;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-c64aec70] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorPrimary[data-v-c64aec70] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-c64aec70] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-c64aec70] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-c64aec70] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-c64aec70] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-c64aec70] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-c64aec70] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-c64aec70] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-c64aec70] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-c64aec70] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-c64aec70] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-c64aec70] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-c64aec70] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-c64aec70] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-c64aec70] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-c64aec70] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-c64aec70] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-c64aec70] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .staking-warp-amount-input[data-v-c64aec70] {\n  border: 0.03rem solid #F0F0F0;\n}\n.theme-light .staking-wrap-box-pool-duration-smallBox[data-v-c64aec70] {\n  border: 0.03rem solid #F0F0F0;\n}\n.theme-light .wrap-bottom[data-v-c64aec70] {\n  border-top: 0.03rem solid #F0F0F0;\n}\n.theme-dark .staking-warp-amount-input[data-v-c64aec70] {\n  border: 0.03rem solid #2A2D3D;\n}\n.theme-dark .staking-wrap-box-pool-duration-smallBox[data-v-c64aec70] {\n  border: 0.03rem solid #2A2D3D;\n}\n.theme-dark .wrap-bottom[data-v-c64aec70] {\n  border-top: 0.03rem solid #2A2D3D;\n}\n.loading[data-v-c64aec70] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.addPool[data-v-c64aec70] {\n  padding: 0 0.43rem;\n  min-height: 100vh;\n}\n.addPool .staking-wrap-box-pool-title[data-v-c64aec70] {\n  display: flex;\n  height: 1.44rem;\n  align-items: center;\n  position: relative;\n}\n.addPool .staking-wrap-box-pool-title img[data-v-c64aec70] {\n  width: 0.8rem;\n  height: 0.8rem;\n  display: inline-block;\n  vertical-align: middle;\n}\n.addPool .staking-wrap-box-pool-title-flex[data-v-c64aec70] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 0.27rem;\n  align-items: center;\n}\n.addPool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-left[data-v-c64aec70] :first-child {\n  font-weight: 600;\n  font-size: 0.43rem;\n}\n.addPool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-right[data-v-c64aec70] {\n  text-align: right;\n  position: absolute;\n  right: 0;\n}\n.addPool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-right[data-v-c64aec70] :first-child {\n  font-size: 0.43rem;\n}\n.addPool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-right[data-v-c64aec70] :last-child {\n  font-weight: 600;\n  font-size: 0.43rem;\n  margin-top: 0.05rem;\n}\n.addPool .staking-wrap-box-pool-duration[data-v-c64aec70] {\n  margin-top: 0.53rem;\n  font-size: 0.37rem;\n}\n.addPool .staking-wrap-box-pool-duration-box[data-v-c64aec70] {\n  margin-top: 0.27rem;\n}\n.addPool .staking-wrap-box-pool-duration-box .staking-wrap-box-pool-duration-smallBox[data-v-c64aec70] {\n  display: inline-block;\n  text-align: center;\n  height: 0.75rem;\n  width: 1.6rem;\n  line-height: 0.75rem;\n  border-radius: 0.11rem;\n  margin-right: 0.21rem;\n  font-size: 0.43rem;\n}\n.addPool .staking-wrap-box-pool-duration-box .setBorderColor[data-v-c64aec70] {\n  border: 0.03rem solid #495bff;\n}\n.addPool .staking-warp-amount[data-v-c64aec70] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 0.8rem;\n}\n.addPool .staking-warp-amount[data-v-c64aec70] :first-child {\n  font-size: 0.37rem;\n}\n.addPool .staking-warp-amount[data-v-c64aec70] :last-child {\n  font-size: 0.32rem;\n}\n.addPool .staking-warp-amount-input[data-v-c64aec70] {\n  width: 100%;\n  height: 1.33rem;\n  line-height: 1.33rem;\n  border-radius: 0.21rem;\n  margin-top: 0.27rem;\n  display: flex;\n  align-items: center;\n}\n.addPool .staking-warp-amount-input input[data-v-c64aec70] {\n  width: 60%;\n  height: 1.33rem;\n  float: left;\n  padding-left: 0.4rem;\n  font-size: 0.43rem;\n  display: block;\n  background: none;\n  outline: none;\n  border: none;\n}\n.addPool .staking-warp-amount-input .staking-warp-amount-input-right[data-v-c64aec70] {\n  float: right;\n  line-height: 1.33rem;\n}\n.addPool .staking-warp-amount-input .staking-warp-amount-input-right .right[data-v-c64aec70] {\n  float: left;\n  padding: 0 0.27rem;\n  font-size: 0.43rem;\n}\n.addPool .staking-warp-amount-input .staking-warp-amount-input-right .line[data-v-c64aec70] {\n  width: 0.03rem;\n  height: 0.48rem;\n  float: left;\n  margin-top: 0.45rem;\n}\n.addPool .staking-warp-amount-input .staking-warp-amount-input-right .max[data-v-c64aec70] {\n  float: left;\n  padding: 0 0.27rem;\n  font-size: 0.43rem;\n}\n.addPool .staking-limiation[data-v-c64aec70] {\n  margin-top: 0.8rem;\n  font-size: 0.37rem;\n}\n.addPool .staking-min[data-v-c64aec70] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.37rem;\n  margin-top: 0.27rem;\n}\n.addPool .setColorLine[data-v-c64aec70] {\n  width: 100%;\n  height: 0.03rem;\n  margin-top: 0.8rem;\n}\n.addPool .staking-summry[data-v-c64aec70] {\n  margin-top: 0.27rem;\n  padding-bottom: 2.67rem;\n}\n.addPool .staking-summry .Summary[data-v-c64aec70] {\n  font-weight: 600;\n  font-size: 0.43rem;\n}\n.addPool .staking-summry .staking-summary-box[data-v-c64aec70] {\n  width: 100%;\n  border-radius: 0.21rem;\n  margin-top: 0.27rem;\n}\n.addPool .staking-summry .staking-summary-box ul[data-v-c64aec70] {\n  padding: 0.4rem;\n}\n.addPool .staking-summry .staking-summary-box ul li[data-v-c64aec70] {\n  font-size: 0.37rem;\n  position: relative;\n}\n.addPool .staking-summry .staking-summary-box ul li .dian[data-v-c64aec70] {\n  width: 0.16rem;\n  height: 0.16rem;\n  border-radius: 50%;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 0.27rem;\n}\n.addPool .staking-summry .staking-summary-box ul li[data-v-c64aec70] :last-child {\n  position: absolute;\n  right: 0;\n}\n.addPool .staking-summry .staking-summary-box ul .setLeftLine[data-v-c64aec70] {\n  width: 0.05rem;\n  height: 0.75rem;\n  margin-left: 0.05rem;\n  margin-top: 0.03rem;\n}\n.addPool .staking-summry .staking-summary-box ul .setLeftColorLine[data-v-c64aec70] {\n  height: 2.16rem;\n  line-height: 2.16rem;\n  border-left: 0.05rem solid #1cbdb5;\n  margin-left: 0.05rem;\n}\n.addPool .staking-summry .staking-summary-box ul .setLeftColorLine[data-v-c64aec70] :first-child {\n  margin-left: 0.48rem;\n}\n.addPool .staking-summry .staking-summary-box .setColorLine1[data-v-c64aec70] {\n  width: 100%;\n  height: 0.03rem;\n  margin: 0.4rem 0;\n}\n.addPool .staking-summry .staking-summary-box .staking-warp-Interests[data-v-c64aec70] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 0.4rem 0.4rem;\n  font-size: 0.37rem;\n}\n.setBottomLine[data-v-c64aec70] {\n  width: 100%;\n  height: 0.03rem;\n}\n.wrap-bottom[data-v-c64aec70] {\n  width: 100%;\n  bottom: 0;\n  z-index: 99;\n  position: fixed;\n  padding: 0.29rem 0.96rem 0.91rem;\n}\n.wrap-bottom .staking-wrap-box-pool-stake-now[data-v-c64aec70] {\n  background: #495bff;\n  color: #fff;\n}\n.wrap-bottom .setOpacity[data-v-c64aec70] {\n  opacity: 0.3;\n}\n.wrap-bottom .swap-btn[data-v-c64aec70] {\n  z-index: 0;\n  color: #fff;\n  height: 1.33rem;\n  border-radius: 0.27rem;\n  text-align: center;\n  line-height: 1.17rem;\n  border: none;\n  font-weight: 500;\n  font-size: 0.43rem;\n  width: 8.08rem;\n}",""]),t.exports=n},765:function(t,e,n){"use strict";n.r(e),n(55),n(41),n(61),n(80),n(48),n(81);var a=n(52),r=n(14),o=n(35),i=(n(68),n(70),n(371),n(242),n(370)),s=n(91),c=n(369),l=n.n(c),d=n(523);function u(t,e){var n,a=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)),a}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}s={data:function(){return{setBorderColor:0,apy:"20",btn:"Stake now",inputNumber:0,isLoading:!0,title:"",day:"7",accounts:"",listInfo:{serverTime:"",list:[{allStakeAmount:0,bkbTotalSuperAmount:0,config:[]}]},token:"",poolContract:"0xbb85bfbbdcefca43e9de619a149c186506fd0ff6"}},computed:m(m({},Object(s.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep},userInfo:function(){return this.local.userInfo.token}}),mounted:function(){var t=this;this.setIcon(),setTimeout((function(){t.onClickConnect()}),400)},methods:{getInfo:function(){var a=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.poolList({userid:a.accounts});case 2:if(n=t.sent,e=n.data,1==n.status)return a.isLoading=!1,t.abrupt("return",a.$dialog.alert({message:e,confirmButtonText:a.$t("CbkbExchange.know"),confirmButtonColor:"$theme-light-colorPrimary"}));t.next=8;break;case 8:a.isLoading=!1,a.listInfo=e,a.listInfo.list=e.list,a.title=e.list[0].title,n=e.list&&e.list[0].config[0],a.handlePoolTimeTab(n,0);case 14:case"end":return t.stop()}}),t)})))()},setIcon:function(){var a=this;this.isBitKeep&&BitKeepInvoke.onLoadReady((function(){BitKeepInvoke.setIconAction(),a.$nextTick((function(){a.$store.commit("CHANGE_LANG",a.locale),BitKeepInvoke.setTitle(a.$t("staking.AddPoolTitle")),BitKeepInvoke.getAddress(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e)return t.abrupt("return",a.$toast(e));t.next=2;break;case 2:a.addresses=n,a.accounts=a.addresses.eth||"--";case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),BitKeepInvoke.appMode((function(t,e){var n=document.getElementsByTagName("body")[0];1==e?n.setAttribute("class","theme-dark"):n.setAttribute("class","theme-light")}))}))}))},Max:function(){this.inputNumber=this.listInfo.list[0].userAmount},timerFormatte:function(t){return l()(t).format("YYYY-MM-DD HH:mm")},endtimerFormatte:function(t){return l()(t).add(this.day,"d").format("YYYY-MM-DD HH:mm")},handleGetToken:function(){var a=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.handleGetToken({userid:a.accounts});case 2:if(e=t.sent,n=e.data,1==e.status)return a.isLoading=!1,t.abrupt("return",a.$dialog.alert({message:n,confirmButtonText:a.$t("CbkbExchange.know"),confirmButtonColor:"$theme-light-colorPrimary"}));t.next=8;break;case 8:a.token=n.token;case 9:case"end":return t.stop()}}),t)})))()},handleGetLoginSign:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.wallet.LoginSign(t.token,t.accounts);case 3:n=e.sent,t.handleStaking(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.$toast(t.$t("staking.authorization"));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},handleStaking:function(a){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.staking({userid:t.accounts,time:t.day,amount:Number(t.inputNumber),c_token:t.token,verifyToken:a});case 2:if(n=e.sent,r=n.data,1==n.status)return t.isLoading=!1,e.abrupt("return",t.$dialog.alert({message:r,confirmButtonText:t.$t("CbkbExchange.know"),confirmButtonColor:"$theme-light-colorPrimary"}));e.next=8;break;case 8:t.$router.push("/activity/staking/myPool");case 9:case"end":return e.stop()}}),e)})))()},isActiveSaleOut:function(t){return t.allStake>=t.limit||l()(t.lastStakeTime).isBefore(l()(this.listInfo.list[0].serverTime))},handlePoolTimeTab:function(t,e){this.setBorderColor=e,this.day=t.time,this.apy=(100*t.apy).toFixed(2),this.btn=this.isActiveSaleOut(t)?this.$t("staking.SoldOut"):this.$t("staking.StakeNow")},onClickConnect:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,e.t0=t.accounts,e.t0){e.next=6;break}return e.next=5,d.wallet.connect();case 5:e.t0=e.sent;case 6:return t.accounts=e.t0,e.next=9,d.wallet.getChainId();case 9:if(n=e.sent,1!==Number(n))return e.next=13,d.wallet.switchChainId(1,t.accounts);e.next=13;break;case 13:t.handleGetToken(),t.getInfo(),d.wallet.on("chainChanged",Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.wallet.getChainId();case 2:if(e=t.sent,t.t0=1!=Number(e),t.t0)return t.next=7,d.wallet.switchChainId(1);t.next=7;break;case 7:case"end":return t.stop()}}),t)})))),d.wallet.on("accountsChanged",t.onClickConnect),e.next=22;break;case 19:e.prev=19,e.t1=e.catch(0),t.$toast("object"==Object(a.a)(e.t1)?e.t1.message:e.t1);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})))()}}},n(719),n=n(79),s=Object(n.a)(s,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"colorBackground1"},[a.isLoading?e("div",{staticClass:"loading"},[e("van-loading",{attrs:{color:"#1989fa",vertical:""}},[a._v(a._s(a.$t("base.loading"))+"...")])],1):e("div",[e("div",{staticClass:"addPool"},[e("div",{staticClass:"staking-wrap-box-pool-title"},[e("img",{attrs:{src:"https://cdn.bitkeep.vip/u_b_a6bdfc60-5113-11ec-be10-ddc2856c6ac6.png",alt:""}}),a._v(" "),e("div",{staticClass:"staking-wrap-box-pool-title-flex"},[e("div",{staticClass:"staking-wrap-box-pool-title-left"},[e("div",{staticClass:"textPrimary0"},[a._v(a._s(a.title))])]),a._v(" "),e("div",{staticClass:"staking-wrap-box-pool-title-right"},[e("div",{staticClass:"textSecond2"},[a._v(a._s(a.$t("staking.APY")))]),a._v(" "),e("div",{staticClass:"colorSecond01 setFontFamily"},[a._v(a._s(a.apy+"%"))])])])]),a._v(" "),e("div",{staticClass:"staking-wrap-box-pool-duration textPrimary0"},[a._v("\n        "+a._s(a.$t("staking.Duration"))+"\n      ")]),a._v(" "),e("div",{staticClass:"staking-wrap-box-pool-duration-box"},a._l(a.listInfo.list[0].config,(function(t,n){return e("span",{key:n,staticClass:"staking-wrap-box-pool-duration-smallBox",class:[a.isActiveSaleOut(t)?"textSecond3":"textSecond1",n==a.setBorderColor?"setBorderColor":""],on:{click:function(e){return a.handlePoolTimeTab(t,n)}}},[a._v(a._s(t.time))])})),0),a._v(" "),e("div",{staticClass:"staking-warp-amount"},[e("div",{staticClass:"textPrimary0"},[a._v(a._s(a.$t("staking.StakeAmount")))]),a._v(" "),e("div",{staticClass:"textSecond3"},[a._v("\n          "+a._s(a.$t("staking.Available"))+":\n          "+a._s(a.listInfo.list[0].userAmount.toFixed(6))+" BKB\n        ")])]),a._v(" "),e("div",{staticClass:"staking-warp-amount-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.inputNumber,expression:"inputNumber"}],staticClass:"textPrimary0",attrs:{type:"number",placeholder:"Entry stake amount"},domProps:{value:a.inputNumber},on:{input:function(t){t.target.composing||(a.inputNumber=t.target.value)}}}),a._v(" "),e("div",{staticClass:"staking-warp-amount-input-right"},[e("div",{staticClass:"right textPrimary0 setFontFamily"},[a._v("BKB")]),a._v(" "),e("div",{staticClass:"line colorLine1"}),a._v(" "),e("div",{staticClass:"max colorPrimary",on:{click:a.Max}},[a._v("\n            "+a._s(a.$t("staking.MAX"))+"\n          ")])])]),a._v(" "),e("div",{staticClass:"staking-limiation textPrimary0"},[a._v("\n        "+a._s(a.$t("staking.StakeAmountLimiation"))+"\n      ")]),a._v(" "),e("div",{staticClass:"staking-min textSecond3"},[e("div",[a._v("\n          "+a._s(a.$t("staking.Minimum"))+":\n          "),e("span",{staticClass:"setFontFamily textPrimary0"},[a._v(" 1 BKB")])]),a._v(" "),e("div",[a._v("\n          "+a._s(a.$t("staking.Maximum"))+":\n          "),e("span",{staticClass:"setFontFamily textPrimary0"},[a._v("10,000,000 BKB")])])]),a._v(" "),e("div",{staticClass:"colorLine setColorLine"}),a._v(" "),e("div",{staticClass:"staking-summry"},[e("div",{staticClass:"textPrimary0 Summary"},[a._v(a._s(a.$t("staking.Summary")))]),a._v(" "),e("div",{staticClass:"staking-summary-box colorBackground3"},[e("ul",[e("li",[e("span",{staticClass:"dian colorBackgroundPrimary"}),a._v(" "),e("span",{staticClass:"textSecond3"},[a._v(a._s(a.$t("staking.StakeDate"))+" ")]),a._v(" "),e("span",{staticClass:"textPrimary0 setFontFamily"},[a._v(a._s(a.timerFormatte(a.listInfo.serverTime)))])]),a._v(" "),e("li",{staticClass:"setLeftLine colorDisable"}),a._v(" "),e("li",[e("span",{staticClass:"dian colorBackgroundPrimary"}),a._v(" "),e("span",{staticClass:"textSecond3"},[a._v(a._s(a.$t("staking.ValueDate"))+" ")]),a._v(" "),e("span",{staticClass:"textPrimary0 setFontFamily"},[a._v(a._s(a.timerFormatte(a.listInfo.serverTime)))])]),a._v(" "),e("li",{staticClass:"setLeftColorLine"},[e("span",{staticClass:"textSecond3"},[a._v(a._s(a.$t("staking.InterestPeriod"))+"\n              ")]),a._v(" "),e("span",{staticClass:"textPrimary0 setFontFamily"},[a._v(a._s(a.day)+" "+a._s(a.$t("staking.Days")))])]),a._v(" "),e("li",[e("span",{staticClass:"dian colorBackgroundPrimary"}),a._v(" "),e("span",{staticClass:"textSecond3"},[a._v(a._s(a.$t("staking.InterestEndDate"))+"\n              ")]),a._v(" "),e("span",{staticClass:"textPrimary0 setFontFamily"},[a._v(a._s(a.endtimerFormatte(a.listInfo.serverTime)))])]),a._v(" "),e("li",{staticClass:"setLeftLine colorDisable"}),a._v(" "),e("li",[e("span",{staticClass:"dian colorBackgroundPrimary"}),a._v(" "),e("span",{staticClass:"textSecond3"},[a._v(a._s(a.$t("staking.RedemptionDate"))+"\n              ")]),a._v(" "),e("span",{staticClass:"textPrimary0 setFontFamily"},[a._v(a._s(a.endtimerFormatte(a.listInfo.serverTime)))])])]),a._v(" "),e("div",{staticClass:"colorLine1 setColorLine1"}),a._v(" "),e("div",{staticClass:"staking-warp-Interests"},[e("div",{staticClass:"textSecond3"},[a._v("\n              "+a._s(a.$t("staking.EstimatedInterests"))+"\n            ")]),a._v(" "),e("div",{staticClass:"colorSecond01"},[a._v("\n              "+a._s(a.inputNumber?(this.apy/100/360*this.day*a.inputNumber).toFixed(6):0)+"\n              BKB\n            ")])])])])]),a._v(" "),e("div",{staticClass:"wrap-bottom colorBackground1"},[e("button",{staticClass:"swap-btn",class:[a.btn==""+a.$t("staking.StakeNow")&&1<=a.inputNumber?"staking-wrap-box-pool-stake-now":"staking-wrap-box-pool-stake-now setOpacity"],on:{click:a.handleGetLoginSign}},[a._v("\n        "+a._s(a.btn)+"\n      ")])])])])}),[],!1,null,"c64aec70",null),e.default=s.exports}}]);