(window.webpackJsonp=window.webpackJsonp||[]).push([[11,15],{361:function(t,n,e){var content=e(381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(101).default)("cbba6d14",content,!1,{sourceMap:!1})},365:function(t,n,e){"use strict";e.r(n),e.d(n,"isValidUrl",(function(){return o})),e.d(n,"equal",(function(){return c}));var r=e(38),o=(e(157),e(44),e(75),e(19),e(45),function(t){return/(ht|f)tp(s?):\/\/([^ \\/]*\.)+[^ \\/]*(:[0-9]+)?\/?/.test(t)}),c=function t(a,b){if(a===b)return!0;if(a&&b&&"object"==Object(r.a)(a)&&"object"==Object(r.a)(b)){var i,n,e,o=Array.isArray(a),c=Array.isArray(b);if(o&&c){if((n=a.length)!=b.length)return!1;for(i=n;0!=i--;)if(!t(a[i],b[i]))return!1;return!0}if(o!=c)return!1;var f=a instanceof Date,l=b instanceof Date;if(f!=l)return!1;if(f&&l)return a.getTime()==b.getTime();var h=a instanceof RegExp,d=b instanceof RegExp;if(h!=d)return!1;if(h&&d)return a.toString()==b.toString();var v=Object.keys(a);if((n=v.length)!==Object.keys(b).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,v[i]))return!1;for(i=n;0!=i--;)if(!t(a[e=v[i]],b[e]))return!1;return!0}return a!=a&&b!=b}},380:function(t,n,e){"use strict";e(361)},381:function(t,n,e){var r=e(100)(!1);r.push([t.i,".canvas[data-v-b137f4e8] {\n  position: fixed;\n  top: 53.33rem;\n}",""]),t.exports=r},383:function(t,n,e){"use strict";e.r(n);e(344),e(82),e(19),e(154),e(62),e(44),e(35),e(53),e(61),e(32),e(30),e(52),e(65),e(33);var r=e(399),o=e(365);function c(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return f(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==e.return||e.return()}finally{if(l)throw o}}}}function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}function l(t){String.prototype.toPx=function(n,e){if("0"===this)return 0;var r=(n?/^-?[0-9]+([.]{1}[0-9]+){0,1}(px|%)$/g:/^[0-9]+([.]{1}[0-9]+){0,1}(px|%)$/g).exec(this)[2],o=parseFloat(this),c=0;return"px"===r?c=Math.round(o*(t||1)):"%"===r&&(c=Math.round(o*e/100)),c}}var h={name:"VueCanvasPoster",props:{painting:{type:Object,default:function(){return{}}},dirty:{type:Boolean,default:!1},widthPixels:{type:Number,default:750}},watch:{painting:{handler:function(t,n){this.isNeedRefresh(t,n)&&(this.paintCount=0,this.startPaint())},deep:!0,immediate:!0}},data:function(){return{paintCount:0,painterStyle:"",canvasWidthInPx:375,canvasHeightInPx:375,width:100,height:100,canvas:null,ctx:null}},render:function(t){return t("div",[t("canvas",{ref:"canvas",class:"canvas",style:this.painterStyle})])},mounted:function(){var t=this;this.$nextTick((function(){t.canvas=t.$refs.canvas,t.ctx=t.canvas.getContext("2d")}))},methods:{isEmpty:function(object){for(var i in object)return!1;return!0},isNeedRefresh:function(t,n){return!(!t||this.isEmpty(t)||this.dirty&&Object(o.equal)(t,n))},startPaint:function(){var t=this;this.isEmpty(this.painting)||(l(1),this.downloadImages().then((function(n){var e=n.width,o=n.height;if(e&&o){t.canvasWidthInPx=e.toPx(),t.widthPixels&&(l(t.widthPixels/t.canvasWidthInPx),t.canvasWidthInPx=t.widthPixels),t.canvasHeightInPx=o.toPx(),t.painterStyle="width:".concat(t.canvasWidthInPx,"px;height:").concat(t.canvasHeightInPx,"px;"),t.canvas=t.$refs.canvas,t.canvas.width=t.canvasWidthInPx,t.canvas.height=t.canvasHeightInPx;var c=t.canvas.getContext("2d");new r.default(c,n).paint((function(){var n=t.canvas.toDataURL("image/png");t.$emit("success",n)}))}else console.error("You should set width and height correctly for painter, width: ".concat(e,", height: ").concat(o))})).catch((function(n){t.$emit("fail",n)})))},downloadImages:function(){var t=this;return new Promise((function(n){var e=0,r=0,o=JSON.parse(JSON.stringify(t.painting));if(o.background&&(e++,t.loadImage(o.background).then((function(image){o.background=image,r++,e===r&&n(o)}),(function(t){r++,e===r&&n(o),console.log(t)}))),o.views){var f,l=c(o.views);try{var h=function(){var view=f.value;view&&"image"===view.type&&view.url&&(e++,t.loadImage(view.url).then((function(image){r++,view.url=image,view.sWidth=image.width,view.sHeight=image.height,e===r&&n(o)}),(function(t){r++,e===r&&n(o),console.log(t)})))};for(l.s();!(f=l.n()).done;)h()}catch(t){l.e(t)}finally{l.f()}}0===e&&n(o)}))},loadImage:function(t){return new Promise((function(n,e){if(t.startsWith("#"))n(t);else{var img=new Image;img.onload=function(){return n(img)},img.onerror=function(){return e("下载图片失败 ".concat(t))},img.crossOrigin="anonymous",img.src=t,!0===img.complete&&setTimeout((function(){return n(img)}),500)}}))}}},d=(e(380),e(70)),component=Object(d.a)(h,undefined,undefined,!1,null,"b137f4e8",null);n.default=component.exports}}]);