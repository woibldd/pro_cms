(window.webpackJsonp=window.webpackJsonp||[]).push([[30,34],{616:function(t,n,e){var r=e(678);(r="string"==typeof(r=r.__esModule?r.default:r)?[[t.i,r,""]]:r).locals&&(t.exports=r.locals),(0,e(51).default)("cbba6d14",r,!0,{sourceMap:!1})},618:function(t,n,e){"use strict";e.r(n),e.d(n,"isValidUrl",(function(){return r})),e.d(n,"equal",(function(){return i}));var u=e(58),r=(n=e(184),n=e(53),n=e(69),n=e(18),n=e(63),function(t){return/(ht|f)tp(s?):\/\/([^ \\/]*\.)+[^ \\/]*(:[0-9]+)?\/?/.test(t)}),i=function t(n,e){if(n===e)return!0;if(n&&e&&"object"==Object(u.a)(n)&&"object"==Object(u.a)(e)){var r,i,a=Array.isArray(n),o=Array.isArray(e);if(a&&o){if((c=n.length)!=e.length)return!1;for(r=c;0!=r--;)if(!t(n[r],e[r]))return!1;return!0}if(a!=o)return!1;if((a=n instanceof Date)!=(o=e instanceof Date))return!1;if(a&&o)return n.getTime()==e.getTime();if((a=n instanceof RegExp)!=(o=e instanceof RegExp))return!1;if(a&&o)return n.toString()==e.toString();var c,s=Object.keys(n);if((c=s.length)!==Object.keys(e).length)return!1;for(r=c;0!=r--;)if(!Object.prototype.hasOwnProperty.call(e,s[r]))return!1;for(r=c;0!=r--;)if(!t(n[i=s[r]],e[i]))return!1;return!0}return n!=n&&e!=e}},677:function(t,n,e){"use strict";e(616)},678:function(t,n,e){(e=e(50)(!1)).push([t.i,".canvas[data-v-b137f4e8] {\n  position: fixed;\n  top: 53.33rem;\n}",""]),t.exports=e},687:function(t,n,e){"use strict";e.r(n),e(274),e(61),e(18),e(183),e(79),e(53),e(44),e(70),e(80),e(45),e(43),e(71),e(81),e(46);var a=e(755),r=e(618);function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function o(i){String.prototype.toPx=function(t,n){if("0"===this)return 0;var e=(r=t?/^-?[0-9]+([.]{1}[0-9]+){0,1}(px|%)$/g:/^[0-9]+([.]{1}[0-9]+){0,1}(px|%)$/g).exec(this)[2],r=(t=parseFloat(this),0);return"px"===e?r=Math.round(t*(i||1)):"%"===e&&(r=Math.round(t*n/100)),r}}var i={name:"VueCanvasPoster",props:{painting:{type:Object,default:function(){return{}}},dirty:{type:Boolean,default:!1},widthPixels:{type:Number,default:750}},watch:{painting:{handler:function(t,n){this.isNeedRefresh(t,n)&&(this.paintCount=0,this.startPaint())},deep:!0,immediate:!0}},data:function(){return{paintCount:0,painterStyle:"",canvasWidthInPx:375,canvasHeightInPx:375,width:100,height:100,canvas:null,ctx:null}},render:function(t){return t("div",[t("canvas",{ref:"canvas",class:"canvas",style:this.painterStyle})])},mounted:function(){var t=this;this.$nextTick((function(){t.canvas=t.$refs.canvas,t.ctx=t.canvas.getContext("2d")}))},methods:{isEmpty:function(t){for(var n in t)return!1;return!0},isNeedRefresh:function(t,n){return!(!t||this.isEmpty(t)||this.dirty&&Object(r.equal)(t,n))},startPaint:function(){var i=this;this.isEmpty(this.painting)||(o(1),this.downloadImages().then((function(t){var n,e=t.width,r=t.height;e&&r?(i.canvasWidthInPx=e.toPx(),i.widthPixels&&(o(i.widthPixels/i.canvasWidthInPx),i.canvasWidthInPx=i.widthPixels),i.canvasHeightInPx=r.toPx(),i.painterStyle="width:".concat(i.canvasWidthInPx,"px;height:").concat(i.canvasHeightInPx,"px;"),i.canvas=i.$refs.canvas,i.canvas.width=i.canvasWidthInPx,i.canvas.height=i.canvasHeightInPx,n=i.canvas.getContext("2d"),new a.default(n,t).paint((function(){var t=i.canvas.toDataURL("image/png");i.$emit("success",t)}))):console.error("You should set width and height correctly for painter, width: ".concat(e,", height: ").concat(r))})).catch((function(t){i.$emit("fail",t)})))},downloadImages:function(){var t=this;return new Promise((function(n){var e=0,i=0,a=JSON.parse(JSON.stringify(t.painting));if(a.background&&(e++,t.loadImage(a.background).then((function(t){a.background=t,e===++i&&n(a)}),(function(t){e===++i&&n(a),console.log(t)}))),a.views){var r,o=function(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return s(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(e="Object"===e&&t.constructor?t.constructor.name:e)||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?s(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0;return{s:n=function(){},n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,o=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){o=!0,i=t},f:function(){try{a||null==e.return||e.return()}finally{if(o)throw i}}}}(a.views);try{for(o.s();!(r=o.n()).done;)!function(){var o=r.value;o&&"image"===o.type&&o.url&&(e++,t.loadImage(o.url).then((function(t){i++,o.url=t,o.sWidth=t.width,o.sHeight=t.height,e===i&&n(a)}),(function(t){e===++i&&n(a),console.log(t)})))}()}catch(r){o.e(r)}finally{o.f()}}0===e&&n(a)}))},loadImage:function(t){return new Promise((function(n,e){var r;t.startsWith("#")?n(t):((r=new Image).onload=function(){return n(r)},r.onerror=function(){return e("下载图片失败 ".concat(t))},r.crossOrigin="anonymous",r.src=t,!0===r.complete&&setTimeout((function(){return n(r)}),500))}))}}};e(677),e=e(29),i=Object(e.a)(i,void 0,void 0,!1,null,"b137f4e8",null);n.default=i.exports}}]);