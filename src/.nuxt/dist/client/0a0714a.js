(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{439:function(t,e,i){var s=i(7),n=i(181);i=i(114);s({target:"Array",proto:!0},{fill:n}),i("fill")},444:function(t,e,i){var s=i(452);(s="string"==typeof(s=s.__esModule?s.default:s)?[[t.i,s,""]]:s).locals&&(t.exports=s.locals),(0,i(51).default)("365d89f2",s,!0,{sourceMap:!1})},451:function(t,e,i){"use strict";i(444)},452:function(t,e,i){(i=i(50)(!1)).push([t.i,".cuntdown[data-v-ce47b7d2] {\n  display: inline-block;\n}",""]),t.exports=i},455:function(t,e,i){"use strict";i.r(e),i(274),i(53),i(77),i(78),i(179),i(439);var s=1e3,n=6e4,r=36e5,h=864e5,o={all:/\{(dd|hh|mm|ss|ms){1}\}/gi,ms:/\{(ms){1}\}/gi,ss:/\{(ss){1}\}/gi,mm:/\{(mm){1}\}/gi,hh:/\{(hh){1}\}/gi,dd:/\{(dd){1}\}/gi,mn:/\{(mn){1}\}/gi,yy:/\{(yy){1}\}/gi},m={name:"cuntdown",props:{hidden:{type:Boolean,default:!1},format:{type:String,default:"{yy}年{mn}月{dd}天{hh}小时{mm}分钟{ss}秒{ms}毫秒"},startTime:{type:Number||String,default:(new Date).getTime()},endTime:{type:Number||String,default:(new Date).getTime()}},data:function(){return{timer:null,stepTime:0}},watch:{stepTime:function(t){var e={ms:this.ms,ss:this.ss,mm:this.mm,hh:this.hh,dd:this.dd};if(t<=0)return this.$emit("end",e);this.$emit("change",e)},startTime:function(){this.stepTime=0,this.init()},endTime:function(){this.stepTime=0,this.init()}},computed:{options_show:function(){return{ms:o.ms.test(this.format),ss:o.ss.test(this.format),mm:o.mm.test(this.format),hh:o.hh.test(this.format),dd:o.dd.test(this.format),mn:o.mn.test(this.format),yy:o.yy.test(this.format)}},ms:function(){return Math.floor(this.stepTime%s)},ss:function(){return this.options_show.mm?Math.floor(this.stepTime%n/s):Math.floor(this.stepTime/s)},mm:function(){return this.options_show.hh?Math.floor(this.stepTime%r/n):Math.floor(this.stepTime/n)},hh:function(){return this.options_show.dd?Math.floor(this.stepTime%h/r):Math.floor(this.stepTime/r)},dd:function(){return this.options_show.mn?this.diff.day:Math.floor(this.stepTime/h)},mn:function(){var t=0<this.diff.year?this.diff.year:0,e=0<this.diff.month?this.diff.month:0;return this.options_show.yy?e:12*t+e-1},yy:function(){return 0<this.diff.year?this.diff.year:0},step_times:function(){return this.options_show.ms?100:1e3},pareStr:function(){return this.format.replace(o.ms,this.zero(this.ms,4)).replace(o.ss,this.zero(this.ss)).replace(o.mm,this.zero(this.mm)).replace(o.hh,this.zero(this.hh)).replace(o.dd,this.zero(this.dd)).replace(o.mn,this.zero(this.mn)).replace(o.yy,this.zero(this.yy))},diff:function(){var t=new Date(this.endTime),e=new Date(this.startTime);isNaN(t)||isNaN(e);var i=e.getFullYear(),s=e.getMonth()+1,n=e.getDate(),r=t.getFullYear(),h=t.getMonth()+1,o=t.getDate();return{endDate:t,startDate:e,startYears:i,endYears:r,startMonth:s,endMonth:h,endDay:o,startDay:n,day:o-n,month:h-s,year:r-i}}},methods:{init:function(){var t=this,e=this.step_times;if(clearInterval(this.timer),!(this.startTime>=this.endTime)){if(this.stepTime=this.endTime-this.startTime,this.stepTime<=0)return this.stepTime=0;this.timer=setInterval((function(){t.stepTime=t.stepTime-e,t.stepTime<=0&&(t.stepTime=0,clearInterval(t.timer))}),e)}},zero:function(t){var e=0<(e=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:2)-String(t).length)?new Array(e).fill(0).join(""):"";return Number(t)<10?e+t:t}},filters:{filterZero:function(t){return Number(t)<10?"0"+t:t}},created:function(){this.init()}};i(451),i=i(29),m=Object(i.a)(m,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return t.hidden?t._e():e("div",{staticClass:"cuntdown",domProps:{innerHTML:t._s(t.pareStr)}})}),[],!1,null,"ce47b7d2",null);e.default=m.exports}}]);