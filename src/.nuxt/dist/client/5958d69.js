(window.webpackJsonp=window.webpackJsonp||[]).push([[26,27,31],{601:function(t,n,e){},604:function(t,n,e){"use strict";e.r(n),e.d(n,"isValidUrl",(function(){return r})),e.d(n,"equal",(function(){return i}));var s=e(37),r=(e(26),e(187),e(67),e(15),e(52),function(t){return/(ht|f)tp(s?):\/\/([^ \\/]*\.)+[^ \\/]*(:[0-9]+)?\/?/.test(t)}),i=function t(n,e){if(n===e)return!0;if(n&&e&&"object"==Object(s.a)(n)&&"object"==Object(s.a)(e)){var r,i,a=Array.isArray(n),o=Array.isArray(e);if(a&&o){if((u=n.length)!=e.length)return!1;for(r=u;0!=r--;)if(!t(n[r],e[r]))return!1;return!0}if(a!=o)return!1;if((a=n instanceof Date)!=(o=e instanceof Date))return!1;if(a&&o)return n.getTime()==e.getTime();if((a=n instanceof RegExp)!=(o=e instanceof RegExp))return!1;if(a&&o)return n.toString()==e.toString();var u,c=Object.keys(n);if((u=c.length)!==Object.keys(e).length)return!1;for(r=u;0!=r--;)if(!Object.prototype.hasOwnProperty.call(e,c[r]))return!1;for(r=u;0!=r--;)if(!t(n[i=c[r]],e[i]))return!1;return!0}return n!=n&&e!=e}},641:function(t,n,e){"use strict";e(601)},651:function(t,n,e){"use strict";e.r(n),e(273),e(57),e(15),e(186),e(79),e(26),e(39),e(58),e(68),e(40),e(38),e(59),e(69),e(41);var i=e(713),r=e(604);function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function a(i){String.prototype.toPx=function(t,n){if("0"===this)return 0;t=(t=t?/^-?[0-9]+([.]{1}[0-9]+){0,1}(px|%)$/g:/^[0-9]+([.]{1}[0-9]+){0,1}(px|%)$/g).exec(this)[2];var e=parseFloat(this),r=0;return"px"===t?r=Math.round(e*(i||1)):"%"===t&&(r=Math.round(e*n/100)),r}}var c={name:"VueCanvasPoster",props:{painting:{type:Object,default:function(){return{}}},dirty:{type:Boolean,default:!1},widthPixels:{type:Number,default:750}},watch:{painting:{handler:function(t,n){this.isNeedRefresh(t,n)&&(this.paintCount=0,this.startPaint())},deep:!0,immediate:!0}},data:function(){return{paintCount:0,painterStyle:"",canvasWidthInPx:375,canvasHeightInPx:375,width:100,height:100,canvas:null,ctx:null}},render:function(t){return t("div",[t("canvas",{ref:"canvas",class:"canvas",style:this.painterStyle})])},mounted:function(){var t=this;this.$nextTick((function(){t.canvas=t.$refs.canvas,t.ctx=t.canvas.getContext("2d")}))},methods:{isEmpty:function(t){for(var n in t)return!1;return!0},isNeedRefresh:function(t,n){return!(!t||this.isEmpty(t)||this.dirty&&Object(r.equal)(t,n))},startPaint:function(){var t=this;this.isEmpty(this.painting)||(a(1),this.downloadImages().then((function(n){var e=n.width,r=n.height;e&&r&&(t.canvasWidthInPx=e.toPx(),t.widthPixels&&(a(t.widthPixels/t.canvasWidthInPx),t.canvasWidthInPx=t.widthPixels),t.canvasHeightInPx=r.toPx(),t.painterStyle="width:".concat(t.canvasWidthInPx,"px;height:").concat(t.canvasHeightInPx,"px;"),t.canvas=t.$refs.canvas,t.canvas.width=t.canvasWidthInPx,t.canvas.height=t.canvasHeightInPx,e=t.canvas.getContext("2d"),new i.default(e,n).paint((function(){var n=t.canvas.toDataURL("image/png");t.$emit("success",n)})))})).catch((function(n){t.$emit("fail",n)})))},downloadImages:function(){var t=this;return new Promise((function(n){var e=0,i=0,a=JSON.parse(JSON.stringify(t.painting));if(a.background&&(e++,t.loadImage(a.background).then((function(t){a.background=t,e===++i&&n(a)}),(function(t){e===++i&&n(a)}))),a.views){var r,c=function(t,n){var e,r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(e="Object"===e&&t.constructor?t.constructor.name:e)||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length)return r&&(t=r),e=0,{s:n=function(){},n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}(a.views);try{for(c.s();!(r=c.n()).done;)!function(){var o=r.value;o&&"image"===o.type&&o.url&&(e++,t.loadImage(o.url).then((function(t){i++,o.url=t,o.sWidth=t.width,o.sHeight=t.height,e===i&&n(a)}),(function(t){e===++i&&n(a)})))}()}catch(r){c.e(r)}finally{c.f()}}0===e&&n(a)}))},loadImage:function(t){return new Promise((function(n,e){var r;t.startsWith("#")?n(t):((r=new Image).onload=function(){return n(r)},r.onerror=function(){return e("下载图片失败 ".concat(t))},r.crossOrigin="anonymous",r.src=t,!0===r.complete&&setTimeout((function(){return n(r)}),500))}))}}};e(641),e=e(34),e=Object(e.a)(c,void 0,void 0,!1,null,"b137f4e8",null);n.default=e.exports},802:function(t,a,n){"use strict";n.r(a),function(t){n.d(a,"install",(function(){return r}));var e=n(651);function r(t){t.component("vue-canvas-poster",e.default)}n.d(a,"VueCanvasPoster",(function(){return e.default}));var o={install:r},i=(a.default=o,null);"undefined"!=typeof window?i=window.Vue:void 0!==t&&(i=t.Vue),i&&i.use(o)}.call(this,n(60))}}]);