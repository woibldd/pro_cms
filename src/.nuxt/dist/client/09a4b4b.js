(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{593:function(e,t,r){"use strict";r.r(t),r.d(t,"transfer16",(function(){return m})),r.d(t,"wallet",(function(){return f}));t=r(278);var n=r(33),s=r(4),c=r(116),o=r(117),h=r(186),a=r(187),u=r(144);t=r(52),t=r(274),t=r(18),t=r(68),t=r(61),t=r(185);function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(u.a)(e);return n=t?(r=Object(u.a)(this).constructor,Reflect.construct(n,arguments,r)):n.apply(this,arguments),Object(a.a)(this,n)}}function m(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"1";return"0x"+(e=isNaN(Number(e))?1:Number(e)).toString(16)}var f=new(function(e){Object(h.a)(i,e);var t,r,f,a,u,w=l(i);function i(){var e;return Object(c.a)(this,i),(e=w.call(this))._accounts=[],e._chainId=0,e._walletPlatform="bitkeep",e}return Object(o.a)(i,[{key:"isInstall",value:function(){return!!window.ethereum&&!!window.isBitKeep}},{key:"isConnected",value:function(){return window.ethereum&&window.ethereum.isConnected()}},{key:"connect",value:(u=Object(s.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isInstall())return e.next=3,ethereum.request({method:"eth_requestAccounts"});e.next=8;break;case 3:return t=e.sent,this.initEvent(),e.abrupt("return",t[0]);case 8:return e.abrupt("return",{status:50001,message:"please download bitkeep chrome "});case 9:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},{key:"selectedAddress",value:function(){return window.ethereum&&ethereum.selectedAddress}},{key:"getWalletInfo",value:function(){return{address:window.ethereum&&ethereum.selectedAddress,chainName:window.ethereum&&window.ethereum.chainName||"eth",chainId:window.ethereum&&window.ethereum.chainId||"1",walletId:"",walletPlatform:this.getWalletPlatform()}}},{key:"getChainId",value:(a=Object(s.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.ethereum&&window.ethereum.request({method:"eth_chainId"}));case 1:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)})},{key:"switchChainId",value:(f=Object(s.a)(regeneratorRuntime.mark((function e(t,r){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=7;break}return e.next=3,this.getAccounts();case 3:c=e.sent,c=(c=Object(n.a)(c,1))[0],r=c;case 7:return e.abrupt("return",window.ethereum&&window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:m(t)},r]}));case 8:case"end":return e.stop()}}),e,this)}))),function(e,t){return f.apply(this,arguments)})},{key:"getWalletPlatform",value:function(){return this._walletPlatform}},{key:"getAccounts",value:(r=Object(s.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.ethereum?window.ethereum.request({method:"eth_accounts"}):[]);case 1:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)})},{key:"LoginSign",value:(t=Object(s.a)(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,window.ethereum.request({method:"personal_sign",params:[t,r],from:r});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e,r){return t.apply(this,arguments)})},{key:"initEvent",value:function(){var u=this;ethereum.removeAllListeners&&ethereum.removeAllListeners(),ethereum.on("accountsChanged",Object(s.a)(regeneratorRuntime.mark((function e(){var t,r,n,a=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=a.length,r=new Array(t),n=0;n<t;n++)r[n]=a[n];u.emit.apply(u,["accountsChanged"].concat(r));case 2:case"end":return e.stop()}}),e)})))),ethereum.on("chainChanged",Object(s.a)(regeneratorRuntime.mark((function e(){var t,r,n,a=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=a.length,r=new Array(t),n=0;n<t;n++)r[n]=a[n];u.emit.apply(u,["chainChanged"].concat(r));case 2:case"end":return e.stop()}}),e)}))))}}]),i}(r.n(t).a))}}]);