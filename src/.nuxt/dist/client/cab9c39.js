(window.webpackJsonp=window.webpackJsonp||[]).push([[26,27,31],{578:function(t,n,e){},582:function(t,n,e){"use strict";e.r(n),e.d(n,"isValidUrl",(function(){return r})),e.d(n,"equal",(function(){return i}));var s=e(55),r=(n=e(177),n=e(50),n=e(67),n=e(18),n=e(61),function(t){return/(ht|f)tp(s?):\/\/([^ \\/]*\.)+[^ \\/]*(:[0-9]+)?\/?/.test(t)}),i=function t(n,e){if(n===e)return!0;if(n&&e&&"object"==Object(s.a)(n)&&"object"==Object(s.a)(e)){var r,i,a=Array.isArray(n),o=Array.isArray(e);if(a&&o){if((u=n.length)!=e.length)return!1;for(r=u;0!=r--;)if(!t(n[r],e[r]))return!1;return!0}if(a!=o)return!1;if((a=n instanceof Date)!=(o=e instanceof Date))return!1;if(a&&o)return n.getTime()==e.getTime();if((a=n instanceof RegExp)!=(o=e instanceof RegExp))return!1;if(a&&o)return n.toString()==e.toString();var u,c=Object.keys(n);if((u=c.length)!==Object.keys(e).length)return!1;for(r=u;0!=r--;)if(!Object.prototype.hasOwnProperty.call(e,c[r]))return!1;for(r=u;0!=r--;)if(!t(n[i=c[r]],e[i]))return!1;return!0}return n!=n&&e!=e}},621:function(t,n,e){"use strict";e(578)},623:function(t,n,e){"use strict";e.r(n),e(254),e(59),e(18),e(176),e(76),e(50),e(44),e(68),e(77),e(45),e(43),e(69),e(78),e(46);var a=e(673),r=e(582);function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function c(i){String.prototype.toPx=function(t,n){if("0"===this)return 0;var e=(r=t?/^-?[0-9]+([.]{1}[0-9]+){0,1}(px|%)$/g:/^[0-9]+([.]{1}[0-9]+){0,1}(px|%)$/g).exec(this)[2],r=(t=parseFloat(this),0);return"px"===e?r=Math.round(t*(i||1)):"%"===e&&(r=Math.round(t*n/100)),r}}var i={name:"VueCanvasPoster",props:{painting:{type:Object,default:function(){return{}}},dirty:{type:Boolean,default:!1},widthPixels:{type:Number,default:750}},watch:{painting:{handler:function(t,n){this.isNeedRefresh(t,n)&&(this.paintCount=0,this.startPaint())},deep:!0,immediate:!0}},data:function(){return{paintCount:0,painterStyle:"",canvasWidthInPx:375,canvasHeightInPx:375,width:100,height:100,canvas:null,ctx:null}},render:function(t){return t("div",[t("canvas",{ref:"canvas",class:"canvas",style:this.painterStyle})])},mounted:function(){var t=this;this.$nextTick((function(){t.canvas=t.$refs.canvas,t.ctx=t.canvas.getContext("2d")}))},methods:{isEmpty:function(t){for(var n in t)return!1;return!0},isNeedRefresh:function(t,n){return!(!t||this.isEmpty(t)||this.dirty&&Object(r.equal)(t,n))},startPaint:function(){var i=this;this.isEmpty(this.painting)||(c(1),this.downloadImages().then((function(t){var n,e=t.width,r=t.height;e&&r?(i.canvasWidthInPx=e.toPx(),i.widthPixels&&(c(i.widthPixels/i.canvasWidthInPx),i.canvasWidthInPx=i.widthPixels),i.canvasHeightInPx=r.toPx(),i.painterStyle="width:".concat(i.canvasWidthInPx,"px;height:").concat(i.canvasHeightInPx,"px;"),i.canvas=i.$refs.canvas,i.canvas.width=i.canvasWidthInPx,i.canvas.height=i.canvasHeightInPx,n=i.canvas.getContext("2d"),new a.default(n,t).paint((function(){var t=i.canvas.toDataURL("image/png");i.$emit("success",t)}))):console.error("You should set width and height correctly for painter, width: ".concat(e,", height: ").concat(r))})).catch((function(t){i.$emit("fail",t)})))},downloadImages:function(){var t=this;return new Promise((function(n){var e=0,i=0,a=JSON.parse(JSON.stringify(t.painting));if(a.background&&(e++,t.loadImage(a.background).then((function(t){a.background=t,e===++i&&n(a)}),(function(t){e===++i&&n(a),console.log(t)}))),a.views){var r,c=function(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(e="Object"===e&&t.constructor?t.constructor.name:e)||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0;return{s:n=function(){},n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==e.return||e.return()}finally{if(c)throw i}}}}(a.views);try{for(c.s();!(r=c.n()).done;)!function(){var o=r.value;o&&"image"===o.type&&o.url&&(e++,t.loadImage(o.url).then((function(t){i++,o.url=t,o.sWidth=t.width,o.sHeight=t.height,e===i&&n(a)}),(function(t){e===++i&&n(a),console.log(t)})))}()}catch(r){c.e(r)}finally{c.f()}}0===e&&n(a)}))},loadImage:function(t){return new Promise((function(n,e){var r;t.startsWith("#")?n(t):((r=new Image).onload=function(){return n(r)},r.onerror=function(){return e("下载图片失败 ".concat(t))},r.crossOrigin="anonymous",r.src=t,!0===r.complete&&setTimeout((function(){return n(r)}),500))}))}}};e(621),e=e(37),i=Object(e.a)(i,void 0,void 0,!1,null,"b137f4e8",null);n.default=i.exports},781:function(t,a,n){"use strict";n.r(a),function(t){n.d(a,"install",(function(){return r}));var e=n(623);function r(t){t.component("vue-canvas-poster",e.default)}n.d(a,"VueCanvasPoster",(function(){return e.default}));var o={install:r};a.default=o;var i=null;"undefined"!=typeof window?i=window.Vue:void 0!==t&&(i=t.Vue),i&&i.use(o)}.call(this,n(52))}}]);