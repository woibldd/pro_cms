(window.webpackJsonp=window.webpackJsonp||[]).push([[50,49],{371:function(e,t,n){"use strict";function r(e){var t,n,r,o,u,c,i,a=l(e,!1);if("string"==typeof a&&2<a.length)if(43===(t=(a=d(a)).charCodeAt(0))||45===t){if(88===(e=a.charCodeAt(2))||120===e)return NaN}else if(48===t){switch(a.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+a}for(u=(o=a.slice(2)).length,c=0;c<u;c++)if((i=o.charCodeAt(c))<48||r<i)return NaN;return parseInt(o,n)}return+a}var o=n(16),u=n(4),c=n(130),i=n(30),a=n(24),s=n(71),f=n(164),l=n(96),p=n(6),h=n(93),w=n(83).f,v=n(56).f,m=n(25).f,d=n(373).trim,y="Number",b=u[y],g=b.prototype,_=s(h(g))==y;if(c(y,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var x,O=function(e){e=arguments.length<1?0:e;var t=this;return t instanceof O&&(_?p((function(){g.valueOf.call(t)})):s(t)!=y)?f(new b(r(e)),t,O):r(e)},k=o?w(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;k.length>I;I++)a(b,x=k[I])&&!a(O,x)&&m(O,x,v(b,x));(O.prototype=g).constructor=O,i(u,y,O)}},372:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},373:function(e,t,n){var r=n(42),o=(n="["+n(372)+"]",RegExp("^"+n+n+"*")),u=RegExp(n+n+"*$");n=function(e){return function(t){return t=String(r(t)),1&e&&(t=t.replace(o,"")),2&e?t.replace(u,""):t}};e.exports={start:n(1),end:n(2),trim:n(3)}},523:function(e,t,n){"use strict";n.r(t),n.d(t,"transfer16",(function(){return l})),n.d(t,"wallet",(function(){return h}));t=n(524);var a=n(37),s=n(14),r=n(168),o=n(169),p=n(528),c=n(529),u=n(525);t=n(68),t=n(371),t=n(19),t=n(82),t=n(60),t=n(526);function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);return r=t?(n=Object(u.a)(this).constructor,Reflect.construct(r,arguments,n)):r.apply(this,arguments),Object(c.a)(this,r)}}function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"1";return"0x"+(e=isNaN(Number(e))?1:Number(e)).toString(16)}var h=new(function(e){Object(p.a)(i,e);var t,n,c,h,u,w=f(i);function i(){var e;return Object(r.a)(this,i),(e=w.call(this))._accounts=[],e._chainId=0,e._walletPlatform="bitkeep",e}return Object(o.a)(i,[{key:"isInstall",value:function(){return!!window.ethereum&&!!window.isBitKeep}},{key:"isConnected",value:function(){return window.ethereum&&window.ethereum.isConnected()}},{key:"connect",value:(u=Object(s.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isInstall())return e.next=3,ethereum.request({method:"eth_requestAccounts"});e.next=8;break;case 3:return t=e.sent,this.initEvent(),e.abrupt("return",t[0]);case 8:return e.abrupt("return",{status:50001,message:"please download bitkeep chrome "});case 9:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},{key:"selectedAddress",value:function(){return window.ethereum&&ethereum.selectedAddress}},{key:"getWalletInfo",value:function(){return{address:window.ethereum&&ethereum.selectedAddress,chainName:window.ethereum&&window.ethereum.chainName||"eth",chainId:window.ethereum&&window.ethereum.chainId||"1",walletId:"",walletPlatform:this.getWalletPlatform()}}},{key:"getChainId",value:(h=Object(s.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.ethereum&&window.ethereum.request({method:"eth_chainId"}));case 1:case"end":return e.stop()}}),e)}))),function(){return h.apply(this,arguments)})},{key:"switchChainId",value:(c=Object(s.a)(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=7;break}return e.next=3,this.getAccounts();case 3:r=e.sent,r=(r=Object(a.a)(r,1))[0],n=r;case 7:return e.abrupt("return",window.ethereum&&window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:l(t)},n]}));case 8:case"end":return e.stop()}}),e,this)}))),function(e,t){return c.apply(this,arguments)})},{key:"getWalletPlatform",value:function(){return this._walletPlatform}},{key:"getAccounts",value:(n=Object(s.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.ethereum?window.ethereum.request({method:"eth_accounts"}):[]);case 1:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})},{key:"LoginSign",value:(t=Object(s.a)(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,window.ethereum.request({method:"personal_sign",params:[t,n],from:n});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e,n){return t.apply(this,arguments)})},{key:"initEvent",value:function(){var u=this;ethereum.removeAllListeners&&ethereum.removeAllListeners(),ethereum.on("accountsChanged",Object(s.a)(regeneratorRuntime.mark((function e(){var t,n,r,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=o.length,n=new Array(t),r=0;r<t;r++)n[r]=o[r];u.emit.apply(u,["accountsChanged"].concat(n));case 2:case"end":return e.stop()}}),e)})))),ethereum.on("chainChanged",Object(s.a)(regeneratorRuntime.mark((function e(){var t,n,r,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=o.length,n=new Array(t),r=0;r<t;r++)n[r]=o[r];u.emit.apply(u,["chainChanged"].concat(n));case 2:case"end":return e.stop()}}),e)}))))}}]),i}(n.n(t).a))},524:function(e,t,n){var r=n(7),o=n(64),u=n(84),c=n(15),i=n(21),a=n(93),s=n(538),f=(n=n(6),o("Reflect","construct")),l=n((function(){function e(){}return!(f((function(){}),[],e)instanceof e)})),p=!n((function(){f((function(){}))}));r({target:"Reflect",stat:!0,forced:n=l||p,sham:n},{construct:function(e,t){u(e),c(t);var n=arguments.length<3?e:u(arguments[2]);if(p&&!l)return f(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(s.apply(e,r))}return r=n.prototype,n=a(i(r)?r:Object.prototype),r=Function.apply.call(e,n,t),i(r)?r:n}})},525:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},526:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,o="~";function c(){}function u(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function f(e,t,n,r,c){if("function"!=typeof n)throw new TypeError("The listener must be a function");return c=new u(n,r||e,c),t=o?o+t:t,e._events[t]?e._events[t].fn?e._events[t]=[e._events[t],c]:e._events[t].push(c):(e._events[t]=c,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new c:delete e._events[t]}function i(){this._events=new c,this._eventsCount=0}Object.create&&(c.prototype=Object.create(null),(new c).__proto__||(o=!1)),i.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)r.call(e,t)&&n.push(o?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},i.prototype.listeners=function(e){e=o?o+e:e;var t=this._events[e];if(!t)return[];if(t.fn)return[t.fn];for(var n=0,r=t.length,c=new Array(r);n<r;n++)c[n]=t[n].fn;return c},i.prototype.listenerCount=function(e){return e=o?o+e:e,(e=this._events[e])?e.fn?1:e.length:0},i.prototype.emit=function(e,t,n,r,c,u){var f=o?o+e:e;if(!this._events[f])return!1;var i,a=this._events[f],s=arguments.length;if(a.fn){switch(a.once&&this.removeListener(e,a.fn,void 0,!0),s){case 1:return a.fn.call(a.context),!0;case 2:return a.fn.call(a.context,t),!0;case 3:return a.fn.call(a.context,t,n),!0;case 4:return a.fn.call(a.context,t,n,r),!0;case 5:return a.fn.call(a.context,t,n,r,c),!0;case 6:return a.fn.call(a.context,t,n,r,c,u),!0}for(p=1,i=new Array(s-1);p<s;p++)i[p-1]=arguments[p];a.fn.apply(a.context,i)}else for(var l,h=a.length,p=0;p<h;p++)switch(a[p].once&&this.removeListener(e,a[p].fn,void 0,!0),s){case 1:a[p].fn.call(a[p].context);break;case 2:a[p].fn.call(a[p].context,t);break;case 3:a[p].fn.call(a[p].context,t,n);break;case 4:a[p].fn.call(a[p].context,t,n,r);break;default:if(!i)for(l=1,i=new Array(s-1);l<s;l++)i[l-1]=arguments[l];a[p].fn.apply(a[p].context,i)}return!0},i.prototype.on=function(e,t,n){return f(this,e,t,n,!1)},i.prototype.once=function(e,t,n){return f(this,e,t,n,!0)},i.prototype.removeListener=function(e,t,n,r){if(e=o?o+e:e,!this._events[e])return this;if(!t)return a(this,e),this;var c=this._events[e];if(c.fn)c.fn!==t||r&&!c.once||n&&c.context!==n||a(this,e);else{for(var u=0,f=[],i=c.length;u<i;u++)(c[u].fn!==t||r&&!c[u].once||n&&c[u].context!==n)&&f.push(c[u]);f.length?this._events[e]=1===f.length?f[0]:f:a(this,e)}return this},i.prototype.removeAllListeners=function(e){return e?(e=o?o+e:e,this._events[e]&&a(this,e)):(this._events=new c,this._eventsCount=0),this},i.prototype.off=i.prototype.removeListener,i.prototype.addListener=i.prototype.on,i.prefixed=o,e.exports=i.EventEmitter=i},528:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},529:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));t=n(539);var r=n.n(t);function o(e,t){return!t||"object"!==r()(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}},538:function(e,t,n){"use strict";var u=n(84),r=n(21),i=[].slice,a={};e.exports=Function.bind||function(e){var t=u(this),n=i.call(arguments,1),o=function(){var r=n.concat(i.call(arguments));return this instanceof o?function(e,t,n){if(!(t in a)){for(var r=[],o=0;o<t;o++)r[o]="a["+o+"]";a[t]=Function("C,a","return new C("+r.join(",")+")")}return a[t](e,n)}(t,r.length,r):t.apply(e,r)};return r(t.prototype)&&(o.prototype=t.prototype),o}},539:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0,n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0}}]);