(window.webpackJsonp=window.webpackJsonp||[]).push([[0,15,17],{365:function(t,e,r){"use strict";function s(t){var e,r,s,i,o,a,n,c=f(t,!1);if("string"==typeof c&&2<c.length)if(43===(e=(c=v(c)).charCodeAt(0))||45===e){if(88===(t=c.charCodeAt(2))||120===t)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+c}for(o=(i=c.slice(2)).length,a=0;a<o;a++)if((n=i.charCodeAt(a))<48||s<n)return NaN;return parseInt(i,r)}return+c}var i=r(15),o=r(4),a=r(128),n=r(25),c=r(22),h=r(71),l=r(162),f=r(90),d=r(5),u=r(91),g=r(81).f,x=r(52).f,b=r(23).f,v=r(368).trim,y="Number",p=o[y],w=p.prototype,m=h(u(w))==y;if(a(y,!p(" 0o1")||!p("0b1")||p("+0x1"))){for(var P,k=function(t){t=arguments.length<1?0:t;var e=this;return e instanceof k&&(m?d((function(){w.valueOf.call(e)})):h(e)!=y)?l(new p(s(t)),e,k):s(t)},S=i?g(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;S.length>I;I++)c(p,P=S[I])&&!c(k,P)&&b(k,P,x(p,P));(k.prototype=w).constructor=k,n(o,y,k)}},366:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},368:function(t,e,r){var s=r(35),i=(r="["+r(366)+"]",RegExp("^"+r+r+"*")),o=RegExp(r+r+"*$");r=function(t){return function(e){return e=String(s(e)),1&t&&(e=e.replace(i,"")),2&t?e.replace(o,""):e}};t.exports={start:r(1),end:r(2),trim:r(3)}},374:function(t,e,r){var s=r(6),i=r(165);r=r(110);s({target:"Array",proto:!0},{fill:i}),r("fill")},392:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var s=r(130),i=r(168);function o(t){return function(t){if(Array.isArray(t))return Object(s.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(i.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},425:function(t,e,r){"use strict";var s=r(6),i=r(368).trim;s({target:"String",proto:!0,forced:r(426)("trim")},{trim:function(){return i(this)}})},426:function(t,e,r){var s=r(5),i=r(366);t.exports=function(t){return s((function(){return!!i[t]()||"​᠎"!="​᠎"[t]()||i[t].name!==t}))}},456:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return l}));e=r(43),e=r(18),e=r(62),e=r(72),e=r(36),e=r(34),e=r(61),e=r(73),e=r(37);var s=r(392),i=r(194),o=r(195);e=r(163),e=r(41),e=r(111),e=r(374),e=r(95),e=r(59),e=r(69),e=r(365);function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,s=new Array(e);r<e;r++)s[r]=t[r];return s}var c=r(457),h=r(458),l=function(){function t(e,r){Object(i.a)(this,t),this.ctx=e,this.data=r,this.globalWidth={},this.globalHeight={}}return Object(o.a)(t,[{key:"paint",value:function(t){if(this.style={width:this.data.width.toPx(),height:this.data.height.toPx()},this._background(),this.data.views&&0<this.data.views.length){var e,r=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(r="Object"===r&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var s=0;return{s:e=function(){},n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,a=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){a=!0,i=t},f:function(){try{o||null==r.return||r.return()}finally{if(a)throw i}}}}(this.data.views);try{for(r.s();!(e=r.n()).done;){var s=e.value;this._drawAbsolute(s)}}catch(t){r.e(t)}finally{r.f()}}t&&t()}},{key:"_background",value:function(){this.ctx.save();var t=(r=this.style).width,e=r.height,r=this.data.background;this.ctx.translate(t/2,e/2),this._doClip(this.data.borderRadius,t,e),r?r.src?this.ctx.drawImage(r,-t/2,-e/2,t,e):r.startsWith("#")||r.startsWith("rgba")||"transparent"===r.toLowerCase()?(this.ctx.fillStyle=r,this.ctx.fillRect(-t/2,-e/2,t,e)):h.api.isGradient(r)&&(h.api.doGradient(r,t,e,this.ctx),this.ctx.fillRect(-t/2,-e/2,t,e)):(this.ctx.fillStyle="transparent",this.ctx.fillRect(-t/2,-e/2,t,e)),this.ctx.restore()}},{key:"_drawAbsolute",value:function(t){if(t&&t.type)switch(t.css&&t.css.length&&(t.css=Object.assign.apply(Object,Object(s.a)(t.css))),t.type){case"image":this._drawAbsImage(t);break;case"text":this._fillAbsText(t);break;case"rect":this._drawAbsRect(t);break;case"qrcode":this._drawQRCode(t)}}},{key:"_border",value:function(t){var e=void 0===(h=t.borderRadius)?0:h,s=t.width,i=t.height,a=void 0===(l=t.borderWidth)?0:l,r=t.borderStyle,o=void 0===r?"solid":r,n=0,c=0,h=0,l=0;t=Math.min(s,i);e&&(4===(r=e.split(/\s+/)).length?(n=Math.min(r[0].toPx(!1,t),s/2,i/2),c=Math.min(r[1].toPx(!1,t),s/2,i/2),h=Math.min(r[2].toPx(!1,t),s/2,i/2),l=Math.min(r[3].toPx(!1,t),s/2,i/2)):n=c=h=l=Math.min(e&&e.toPx(!1,t),s/2,i/2)),t=a&&a.toPx(!1,t),this.ctx.lineWidth=t,"dashed"===o?this.ctx.setLineDash([4*t/3,4*t/3]):"dotted"===o&&this.ctx.setLineDash([t,t]),o="solid"!==o,this.ctx.beginPath(),o&&0===n&&this.ctx.moveTo(-s/2-t,-i/2-t/2),0!==n&&this.ctx.arc(-s/2+n,-i/2+n,n+t/2,+Math.PI,1.5*Math.PI),this.ctx.lineTo(0===c?o?s/2:s/2+t/2:s/2-c,-i/2-t/2),o&&0===c&&this.ctx.moveTo(s/2+t/2,-i/2-t),0!==c&&this.ctx.arc(s/2-c,-i/2+c,c+t/2,1.5*Math.PI,2*Math.PI),this.ctx.lineTo(s/2+t/2,0===h?o?i/2:i/2+t/2:i/2-h),o&&0===h&&this.ctx.moveTo(s/2+t,i/2+t/2),0!==h&&this.ctx.arc(s/2-h,i/2-h,h+t/2,0,.5*Math.PI),this.ctx.lineTo(0===l?o?-s/2:-s/2-t/2:-s/2+l,i/2+t/2),o&&0===l&&this.ctx.moveTo(-s/2-t/2,i/2+t),0!==l&&this.ctx.arc(-s/2+l,i/2-l,l+t/2,.5*Math.PI,+Math.PI),this.ctx.lineTo(-s/2-t/2,0===n?o?-i/2:-i/2-t/2:-i/2+n),o&&0===n&&this.ctx.moveTo(-s/2-t,-i/2-t/2),o||this.ctx.closePath()}},{key:"_doClip",value:function(t,e,r,s){t&&e&&r&&(this.ctx.globalAlpha=0,this.ctx.fillStyle="white",this._border({borderRadius:t,width:e,height:r,borderStyle:s}),this.ctx.fill(),this.ctx.clip(),this.ctx.globalAlpha=1)}},{key:"_doBorder",value:function(t,e,r){var s,i,o,a;t.css&&(s=(a=t.css).borderRadius,i=a.borderWidth,o=a.borderColor,a=a.borderStyle,i&&(this.ctx.save(),this._preProcess(t,!0),this.ctx.strokeStyle=o||"black",this._border({borderRadius:s,width:e,height:r,borderWidth:i,borderStyle:a}),this.ctx.stroke(),this.ctx.restore()))}},{key:"_preProcess",value:function(t,e){var r,s,i=0,o=this._doPaddings(t);switch(t.type){case"text":for(var a=t.text.split("\n"),n=0;n<a.length;++n)""===a[n]&&(a[n]=" ");var c=["normal","bold","bolder","lighter","100","200","300","400","500","600","700","800","900"].includes(t.css.fontWeight)?t.css.fontWeight:"normal",h="italic"===t.css.textStyle?"italic":"normal",l=t.css.textIndent?t.css.textIndent.toPx():0;t.css.fontSize||(t.css.fontSize="20rpx"),this.ctx.font="".concat(h," ").concat(c," ").concat(t.css.fontSize.toPx(),'px "').concat(t.css.fontFamily||"sans-serif",'"');for(var f=0,d=[],u=0;u<a.length;++u){var g=this.ctx.measureText(a[u]).width,x=t.css.fontSize.toPx()+o[1]+o[3],b=t.css.width?t.css.width.toPx(!1,this.style.width)-o[1]-o[3]:g;l=(b=b<x?x:b)<l?b:l,i=i<b?b:i;f+=g=Math.ceil((g+l)/b),d[u]=g}f=t.css.maxLines<f?t.css.maxLines:f;var v=(c=(t.css.lineHeight||t.css.fontSize).toPx())*f,y={textIndent:l,lines:f,lineHeight:c,textArray:a,linesArray:d};break;case"image":t.css&&(t.css.width||(t.css.width="auto"),t.css.height||(t.css.height="auto")),!t.css||"auto"===t.css.width&&"auto"===t.css.height?(i=Math.round(t.sWidth),v=Math.round(t.sHeight)):"auto"===t.css.width?(v=t.css.height.toPx(!1,this.style.height),i=t.sWidth/t.sHeight*v):v="auto"===t.css.height?(i=t.css.width.toPx(!1,this.style.width),t.sHeight/t.sWidth*i):(i=t.css.width.toPx(!1,this.style.width),t.css.height.toPx(!1,this.style.height));break;default:if(!t.css.width||!t.css.height)return void console.error("You should set width and height");i=t.css.width.toPx(!1,this.style.width),v=t.css.height.toPx(!1,this.style.height)}r=t.css&&t.css.right?"string"==typeof t.css.right?this.style.width-t.css.right.toPx(!0,this.style.width):(w=t.css.right,this.style.width-w[0].toPx(!0,this.style.width)-this.globalWidth[w[1]]*(w[2]||1)):t.css&&t.css.left?"string"==typeof t.css.left?t.css.left.toPx(!0,this.style.width):(m=t.css.left)[0].toPx(!0,this.style.width)+this.globalWidth[m[1]]*(m[2]||1):0,s=t.css&&t.css.bottom?this.style.height-v-t.css.bottom.toPx(!0,this.style.height):t.css&&t.css.top?"string"==typeof t.css.top?t.css.top.toPx(!0,this.style.height):(S=t.css.top)[0].toPx(!0,this.style.height)+this.globalHeight[S[1]]*(S[2]||1):0;var p=t.css&&t.css.rotate?this._getAngle(t.css.rotate):0,w=t.css&&t.css.align?t.css.align:t.css&&t.css.right?"right":"left",m=t.css&&t.css.verticalAlign?t.css.verticalAlign:"top",P=0;switch(w){case"center":P=r;break;case"right":P=r-i/2;break;default:P=r+i/2}var k=0;switch(m){case"center":k=s;break;case"bottom":k=s-v/2;break;default:k=s+v/2}this.ctx.translate(P,k);var S=r;return"center"===w?S=r-i/2:"right"===w&&(S=r-i),w=s,"center"===m?w=s-v/2:"bottom"===m&&(w=s-v),t.rect?(t.rect.left=S,t.rect.top=w,t.rect.right=S+i,t.rect.bottom=w+v,t.rect.x=t.css&&t.css.right?r-i:r,t.rect.y=s):t.rect={left:S,top:w,right:S+i,bottom:w+v,x:t.css&&t.css.right?r-i:r,y:s},t.rect.left=t.rect.left-o[3],t.rect.top=t.rect.top-o[0],t.rect.right=t.rect.right+o[1],t.rect.bottom=t.rect.bottom+o[2],"text"===t.type&&(t.rect.minWidth=t.css.fontSize.toPx()+o[1]+o[3]),this.ctx.rotate(p),!e&&t.css&&t.css.borderRadius&&"rect"!==t.type&&this._doClip(t.css.borderRadius,i,v,t.css.borderStyle),this._doShadow(t),t.id&&(this.globalWidth[t.id]=i,this.globalHeight[t.id]=v),{width:i,height:v,x:r,y:s,extra:y}}},{key:"_doPaddings",value:function(t){var e,r,s=(t.css||{}).padding;t=[0,0,0,0];return s&&(1===(s=s.split(/\s+/)).length&&(t=[e=s[0].toPx(),e,e,e]),2===s.length&&(t=[e=s[0].toPx(),r=s[1].toPx(),e,r]),3===s.length&&(t=[s[0].toPx(),r=s[1].toPx(),s[2].toPx(),r]),4===s.length&&(t=[s[0].toPx(),s[1].toPx(),s[2].toPx(),s[3].toPx()])),t}},{key:"_doBackground",value:function(t){this.ctx.save();var e=(r=this._preProcess(t,!0)).width,s=r.height,i=t.css.background,r=(e=e+(r=this._doPaddings(t))[1]+r[3],s+r[0]+r[2]);this._doClip(t.css.borderRadius,e,r,t.css.borderStyle),h.api.isGradient(i)?h.api.doGradient(i,e,r,this.ctx):this.ctx.fillStyle=i,this.ctx.fillRect(-e/2,-r/2,e,r),this.ctx.restore()}},{key:"_drawQRCode",value:function(t){this.ctx.save();var e=(r=this._preProcess(t)).width,r=r.height;c.api.draw(t.content,this.ctx,-e/2,-r/2,e,r,t.css.background,t.css.color),this.ctx.restore(),this._doBorder(t,e,r)}},{key:"_drawAbsImage",value:function(t){if(t.url){this.ctx.save();var e=(n=this._preProcess(t)).width,s=n.height;if("string"==typeof t.url)return this.ctx.fillStyle="#ddd",this.ctx.fillRect(-e/2,-s/2,e,s),void this.ctx.restore();var i=t.sWidth,r=t.sHeight,a=0,o=0,n=e/s;t.sWidth/t.sHeight<=n?(r=i/n,o=Math.round((t.sHeight-r)/2)):(i=r*n,a=Math.round((t.sWidth-i)/2)),t.css&&"scaleToFill"===t.css.mode?this.ctx.drawImage(t.url,-e/2,-s/2,e,s):(this.ctx.drawImage(t.url,a,o,i,r,-e/2,-s/2,e,s),t.rect.startX=a/t.sWidth,t.rect.startY=o/t.sHeight,t.rect.endX=(a+i)/t.sWidth,t.rect.endY=(o+r)/t.sHeight),this.ctx.restore(),this._doBorder(t,e,s)}}},{key:"_fillAbsText",value:function(t){if(t.text){t.css.background&&this._doBackground(t),this.ctx.save();var e=(r=this._preProcess(t,t.css.background&&t.css.borderRadius)).width,s=r.height,r=r.extra;this.ctx.fillStyle=t.css.color||"black";var i=r.lines,o=r.lineHeight,a=r.textArray,n=r.linesArray,c=r.textIndent;if(t.id){for(var h=0,l=0;l<a.length;++l){var f=this.ctx.measureText(a[l]).width;h=h<f?f:h}this.globalWidth[t.id]=!e||h<e?h:e}for(var d=0,u=0;u<a.length;++u)for(var g=Math.ceil(a[u].length/n[u]),x=Math.ceil((e-c)/e*(a[u].length/n[u])),b=0,v=0,y=0;y<n[u]&&!(i<=d);++y){for(var p=0==y?c:0,w=(v=0==y?x:g,a[u].substr(b,v)),m=this.ctx.measureText(w).width;b+v<=a[u].length&&(e-m-p>t.css.fontSize.toPx()||m-e>t.css.fontSize.toPx());){if(m<e)w=a[u].substr(b,++v);else{if(w.length<=1)break;w=a[u].substr(b,--v)}m=this.ctx.measureText(w).width}if(b+=w.length,d===i-1&&(u<a.length-1||b<a[u].length)){for(;this.ctx.measureText("".concat(w,"...")).width>e&&!(w.length<=1);)w=w.substring(0,w.length-1);w+="...",m=this.ctx.measureText(w).width}this.ctx.textAlign=t.css.textAlign||"left";var P=void 0,k=void 0;switch(t.css.textAlign){case"center":k=(P=0)-m/2+p;break;case"right":k=(P=e/2)-m+p;break;default:k=P=-e/2+p}var S=-s/2+(0===d?t.css.fontSize.toPx():t.css.fontSize.toPx()+d*o);d++,"stroke"===t.css.textStyle?this.ctx.strokeText(w,P,S,m):this.ctx.fillText(w,P,S,m);var I=t.css.fontSize.toPx();t.css.textDecoration&&(this.ctx.lineWidth=I/13,this.ctx.beginPath(),/\bunderline\b/.test(t.css.textDecoration)&&(this.ctx.moveTo(k,S),this.ctx.lineTo(k+m,S)),/\boverline\b/.test(t.css.textDecoration)&&(this.ctx.moveTo(k,S-I),this.ctx.lineTo(k+m,S-I)),/\bline-through\b/.test(t.css.textDecoration)&&(this.ctx.moveTo(k,S-I/3),this.ctx.lineTo(k+m,S-I/3)),this.ctx.closePath(),this.ctx.strokeStyle=t.css.color,this.ctx.stroke())}this.ctx.restore(),this._doBorder(t,e,s)}}},{key:"_drawAbsRect",value:function(t){this.ctx.save();var e=(o=this._preProcess(t)).width,s=o.height;h.api.isGradient(t.css.color)?h.api.doGradient(t.css.color,e,s,this.ctx):this.ctx.fillStyle=t.css.color;var r=(i=t.css).borderRadius,o=i.borderStyle,i=i.borderWidth;this._border({borderRadius:r,width:e,height:s,borderWidth:i,borderStyle:o}),this.ctx.fill(),this.ctx.restore(),this._doBorder(t,e,s)}},{key:"_doShadow",value:function(t){t.css&&t.css.shadow&&(4<(t=t.css.shadow.replace(/,\s+/g,",").split(/\s+/)).length?console.error("shadow don't spread option"):(this.ctx.shadowOffsetX=parseInt(t[0],10),this.ctx.shadowOffsetY=parseInt(t[1],10),this.ctx.shadowBlur=parseInt(t[2],10),this.ctx.shadowColor=t[3]))}},{key:"_getAngle",value:function(t){return Number(t)*Math.PI/180}}]),t}()},457:function(t,e,r){"use strict";r.r(e),r.d(e,"api",(function(){return C}));e=r(43);var o,g,n,c,h,u,l=[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28],b=[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177],f=[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],d=[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],p=[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175],x=[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],v=[],y=[],w=[],m=[],P=[],k=2;function S(t,e){var r;e<t&&(r=t,t=e,e=r),r=e,r*=e,r+=e,r>>=1,m[r+=t]=1}function I(t,e){var r;for(w[t+g*e]=1,r=-2;r<2;r++)w[t+r+g*(e-2)]=1,w[t-2+g*(e+r+1)]=1,w[t+2+g*(e+r)]=1,w[t+r+1+g*(e+2)]=1;for(r=0;r<2;r++)S(t-1,e+r),S(t+1,e-r),S(t-r,e-1),S(t+r,e+1)}function A(t){for(;255<=t;)t=((t-=255)>>8)+(255&t);return t}var _=[];function M(t,e,r,s){for(var i,o,a=0;a<s;a++)v[r+a]=0;for(a=0;a<e;a++){if(255!=(o=p[v[t+a]^v[r]]))for(i=1;i<s;i++)v[r+i-1]=v[r+i]^x[A(o+_[s-i])];else for(i=r;i<r+s;i++)v[i]=v[i+1];v[r+s-1]=255==o?0:x[A(o+_[0])]}}function T(t,e){var r;return e<t&&(r=t,t=e,e=r),r=e,r+=e*e,r>>=1,m[r+=t]}function W(t){var e,r,s,i;switch(t){case 0:for(r=0;r<g;r++)for(e=0;e<g;e++)e+r&1||T(e,r)||(w[e+r*g]^=1);break;case 1:for(r=0;r<g;r++)for(e=0;e<g;e++)1&r||T(e,r)||(w[e+r*g]^=1);break;case 2:for(r=0;r<g;r++)for(e=s=0;e<g;e++,s++)(s=3==s?0:s)||T(e,r)||(w[e+r*g]^=1);break;case 3:for(r=i=0;r<g;r++,i++)for(s=i=3==i?0:i,e=0;e<g;e++,s++)(s=3==s?0:s)||T(e,r)||(w[e+r*g]^=1);break;case 4:for(r=0;r<g;r++)for(i=r>>1&1,e=s=0;e<g;e++,s++)3==s&&(s=0,i=!i),i||T(e,r)||(w[e+r*g]^=1);break;case 5:for(r=i=0;r<g;r++,i++)for(3==i&&(i=0),e=s=0;e<g;e++,s++)(e&r&1)+!(!(s=3==s?0:s)|!i)||T(e,r)||(w[e+r*g]^=1);break;case 6:for(r=i=0;r<g;r++,i++)for(3==i&&(i=0),e=s=0;e<g;e++,s++)(e&r&1)+((s=3==s?0:s)&&s==i)&1||T(e,r)||(w[e+r*g]^=1);break;case 7:for(r=i=0;r<g;r++,i++)for(3==i&&(i=0),e=s=0;e<g;e++,s++)((s=3==s?0:s)&&s==i)+(e+r&1)&1||T(e,r)||(w[e+r*g]^=1)}}function R(t){for(var e=0,r=0;r<=t;r++)5<=P[r]&&(e+=3+P[r]-5);for(r=3;r<t-1;r+=2)P[r-2]==P[r+2]&&P[r+2]==P[r-1]&&P[r-1]==P[r+1]&&3*P[r-1]==P[r]&&(0==P[r-3]||t<r+3||3*P[r-3]>=4*P[r]||3*P[r+3]>=4*P[r])&&(e+=40);return e}var a=null,C={get ecclevel(){return k},set ecclevel(t){k=t},get size(){return _size},set size(t){_size=t},get canvas(){return a},set canvas(t){a=t},getFrame:function(t){var e,r,s,i,C,a,N,O=t.length;o=0;do{if(s=4*(k-1)+16*(++o-1),n=d[s++],c=d[s++],h=d[s++],u=d[s],O<=(s=h*(n+c)+c-3+(o<=9)))break}while(o<40);for(g=17+4*o,i=h+(h+u)*(n+c)+c,O=0;O<i;O++)y[O]=0;for(v=t.slice(0),O=0;O<g*g;O++)w[O]=0;for(O=0;O<(g*(g+1)+1)/2;O++)m[O]=0;for(O=0;O<3;O++){for(r=s=0,w[(r=2==O?g-7:r)+3+g*((s=1==O?g-7:s)+3)]=1,e=0;e<6;e++)w[r+e+g*s]=1,w[r+g*(s+e+1)]=1,w[r+6+g*(s+e)]=1,w[r+e+1+g*(s+6)]=1;for(e=1;e<5;e++)S(r+e,s+1),S(r+1,s+e+1),S(r+5,s+e),S(r+e+1,s+5);for(e=2;e<4;e++)w[r+e+g*(s+2)]=1,w[r+2+g*(s+e+1)]=1,w[r+4+g*(s+e)]=1,w[r+e+1+g*(s+4)]=1}if(1<o)for(O=l[o],r=g-7;;){for(e=g-7;O-3<e&&(I(e,r),!(e<O));)e-=O;if(r<=O+9)break;I(6,r-=O),I(r,6)}for(w[8+g*(g-8)]=1,r=0;r<7;r++)S(7,r),S(g-8,r),S(7,r+g-7);for(e=0;e<8;e++)S(e,7),S(e+g-8,7),S(e,g-8);for(e=0;e<9;e++)S(e,8);for(e=0;e<8;e++)S(e+g-8,8),S(8,e);for(r=0;r<7;r++)S(8,r+g-7);for(e=0;e<g-14;e++)1&e?(S(8+e,6),S(6,8+e)):(w[8+e+6*g]=1,w[6+g*(8+e)]=1);if(6<o)for(O=b[o-7],s=17,e=0;e<6;e++)for(r=0;r<3;r++,s--)1&(11<s?o>>s-12:O>>s)?(w[5-e+g*(2-r+g-11)]=1,w[2-r+g-11+g*(5-e)]=1):(S(5-e,2-r+g-11),S(2-r+g-11,5-e));for(r=0;r<g;r++)for(e=0;e<=r;e++)w[e+g*r]&&S(e,r);for(i=v.length,C=0;C<i;C++)y[C]=v.charCodeAt(C);if(v=y.slice(0),(e=h*(n+c)+c)-2<=i&&(i=e-2,9<o&&i--),C=i,9<o){for(v[C+2]=0,v[C+3]=0;C--;)O=v[C],v[C+3]|=255&O<<4,v[C+2]=O>>4;v[2]|=255&i<<4,v[1]=i>>4,v[0]=64|i>>12}else{for(v[C+1]=0,v[C+2]=0;C--;)O=v[C],v[C+2]|=255&O<<4,v[C+1]=O>>4;v[1]|=255&i<<4,v[0]=64|i>>4}for(C=i+3-(o<10);C<e;)v[C++]=236,v[C++]=17;for(_[0]=1,C=0;C<u;C++){for(_[C+1]=1,a=C;0<a;a--)_[a]=_[a]?_[a-1]^x[A(p[_[a]]+C)]:_[a-1];_[0]=x[A(p[_[0]]+C)]}for(C=0;C<=u;C++)_[C]=p[_[C]];for(s=e,C=r=0;C<n;C++)M(r,h,s,u),r+=h,s+=u;for(C=0;C<c;C++)M(r,h+1,s,u),r+=h+1,s+=u;for(C=r=0;C<h;C++){for(a=0;a<n;a++)y[r++]=v[C+a*h];for(a=0;a<c;a++)y[r++]=v[n*h+C+a*(h+1)]}for(a=0;a<c;a++)y[r++]=v[n*h+C+a*(h+1)];for(C=0;C<u;C++)for(a=0;a<n+c;a++)y[r++]=v[e+C+a*u];for(v=y,e=r=g-1,s=i=1,N=(h+u)*(n+c)+c,C=0;C<N;C++)for(O=v[C],a=0;a<8;a++,O<<=1)for(128&O&&(w[e+g*r]=1);i?e--:(e++,s?0!=r?r--:(s=!s,6==(e-=2)&&(e--,r=9)):r!=g-1?r++:(s=!s,6==(e-=2)&&(e--,r-=8))),i=!i,T(e,r););for(v=w.slice(0),r=3e4,s=O=0;s<8&&(W(s),(e=function(){for(var t,e,r,s,i=0,o=0,a=0;a<g-1;a++)for(t=0;t<g-1;t++)(w[t+g*a]&&w[t+1+g*a]&&w[t+g*(a+1)]&&w[t+1+g*(a+1)]||!(w[t+g*a]||w[t+1+g*a]||w[t+g*(a+1)]||w[t+1+g*(a+1)]))&&(i+=3);for(a=0;a<g;a++){for(e=r=t=P[0]=0;t<g;t++)(s=w[t+g*a])==r?P[e]++:P[++e]=1,o+=(r=s)?1:-1;i+=R(e)}var n=o=o<0?-o:o,c=0;for(n+=n<<2,n<<=1;g*g<n;)n-=g*g,c++;for(i+=10*c,t=0;t<g;t++){for(e=r=a=P[0]=0;a<g;a++)(s=w[t+g*a])==r?P[e]++:P[++e]=1,r=s;i+=R(e)}return i}())<r&&(r=e,O=s),7!=O);s++)w=v.slice(0);for(O!=s&&W(O),r=f[O+(k-1<<3)],s=0;s<8;s++,r>>=1)1&r&&(w[g-1-s+8*g]=1,s<6?w[8+g*s]=1:w[8+g*(s+1)]=1);for(s=0;s<7;s++,r>>=1)1&r&&(w[8+g*(g-7+s)]=1,s?w[6-s+8*g]=1:w[7+8*g]=1);return w},utf16to8:function(t){for(var e,r="",s=t.length,i=0;i<s;i++)1<=(e=t.charCodeAt(i))&&e<=127?r+=t.charAt(i):(2047<e?(r+=String.fromCharCode(224|e>>12&15),r+=String.fromCharCode(128|e>>6&63)):r+=String.fromCharCode(192|e>>6&31),r+=String.fromCharCode(128|e>>0&63));return r},draw:function(t,e,r,s,i,o,a,n,c,h){if(k=h||k,e){o=Math.min(i,o),t=this.utf16to8(t);var l=this.getFrame(t),f=o/g;a&&(e.fillStyle=a,e.fillRect(r,s,i,i)),e.fillStyle=n||"black";for(var d=0;d<g;d++)for(var u=0;u<g;u++)l[u*g+d]&&e.fillRect(r+f*d,s+f*u,f,f)}else console.warn("No canvas provided to draw QR code in!")}}},458:function(t,e,r){"use strict";function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,s=new Array(e);r<e;r++)s[r]=t[r];return s}r.r(e),r.d(e,"api",(function(){return s})),e=r(163),e=r(41),e=r(111),e=r(425),e=r(129),e=r(43),e=r(18),e=r(62),e=r(72),e=r(36),e=r(34),e=r(61),e=r(73),e=r(37);var s={isGradient:function(t){return!(!t||!t.startsWith("linear")&&!t.startsWith("radial"))},doGradient:function(t,e,r,s){t.startsWith("linear")?function(t,e,r,s){e=function(t,e,r){var s,i=t.match(/([-]?\d{1,3})deg/);switch(i&&i[1]?parseFloat(i[1]):0){case 0:s=[0,-r/2,0,r/2];break;case 90:s=[e/2,0,-e/2,0];break;case-90:s=[-e/2,0,e/2,0];break;case 180:s=[0,r/2,0,-r/2];break;case-180:s=[0,-r/2,0,r/2];break;default:var o,n=0;s=[o=0<i[1]&&i[1]<90?e/2-(e/2*Math.tan((90-i[1])*Math.PI*2/360)-r/2)*Math.sin(2*(90-i[1])*Math.PI*2/360)/2:-180<i[1]&&i[1]<-90?-e/2+(e/2*Math.tan((90-i[1])*Math.PI*2/360)-r/2)*Math.sin(2*(90-i[1])*Math.PI*2/360)/2:90<i[1]&&i[1]<180?e/2+(-e/2*Math.tan((90-i[1])*Math.PI*2/360)-r/2)*Math.sin(2*(90-i[1])*Math.PI*2/360)/2:-e/2-(-e/2*Math.tan((90-i[1])*Math.PI*2/360)-r/2)*Math.sin(2*(90-i[1])*Math.PI*2/360)/2,-(n=Math.tan((90-i[1])*Math.PI*2/360)*o),-o,n]}return s}(r,t,e);for(var i=s.createLinearGradient(e[0],e[1],e[2],e[3]),o=n((r=r.match(/linear-gradient\((.+)\)/)[1]).substring(r.indexOf(",")+1)),a=0;a<o.colors.length;a++)i.addColorStop(o.percents[a],o.colors[a]);s.fillStyle=i}(e,r,t,s):t.startsWith("radial")&&function(t,e,r,s){for(var i=n(r.match(/radial-gradient\((.+)\)/)[1]),o=s.createRadialGradient(0,0,0,0,0,t<e?e/2:t/2),a=0;a<i.colors.length;a++)o.addColorStop(i.percents[a],i.colors[a]);s.fillStyle=o}(e,r,t,s)}};function n(t){var e,r=[],s=[],i=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(r="Object"===r&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var s=0;return{s:e=function(){},n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,n=!0,a=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return n=t.done,t},e:function(t){a=!0,i=t},f:function(){try{n||null==r.return||r.return()}finally{if(a)throw i}}}}(t.substring(0,t.length-1).split("%,"));try{for(i.s();!(e=i.n()).done;){var n=e.value;r.push(n.substring(0,n.lastIndexOf(" ")).trim()),s.push(n.substring(n.lastIndexOf(" "),n.length)/100)}}catch(t){i.e(t)}finally{i.f()}return{colors:r,percents:s}}}}]);