(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{363:function(t,s,e){var i=e(5),n=e(159);e=e(94);i({target:"Array",proto:!0},{fill:n}),e("fill")},512:function(t,s,e){},543:function(t,s,e){"use strict";e(512)},580:function(t,s,e){"use strict";e.r(s),e(233),e(36),e(55),e(67),e(157),e(363);var i=1e3,n=6e4,r=36e5,a=864e5,h={all:/\{(dd|hh|mm|ss|ms){1}\}/gi,ms:/\{(ms){1}\}/gi,ss:/\{(ss){1}\}/gi,mm:/\{(mm){1}\}/gi,hh:/\{(hh){1}\}/gi,dd:/\{(dd){1}\}/gi,mn:/\{(mn){1}\}/gi,yy:/\{(yy){1}\}/gi},o={name:"cuntdown",props:{hidden:{type:Boolean,default:!1},format:{type:String,default:"{dd}天{hh}小时{mm}分钟{ss}秒"},startTime:{type:Number||String,default:(new Date).getTime()},endTime:{type:Number||String,default:(new Date).getTime()}},data:function(){return{timer:null,stepTime:0}},watch:{stepTime:function(t){var s={ms:this.ms,ss:this.ss,mm:this.mm,hh:this.hh,dd:this.dd};if(t<=0)return this.$emit("end",s);this.$emit("change",s)},startTime:function(){this.stepTime=0,this.init()},endTime:function(){this.stepTime=0,this.init()}},computed:{options_show:function(){return{ms:h.ms.test(this.format),ss:h.ss.test(this.format),mm:h.mm.test(this.format),hh:h.hh.test(this.format),dd:h.dd.test(this.format),mn:h.mn.test(this.format),yy:h.yy.test(this.format)}},ms:function(){return Math.floor(this.stepTime%i)},ss:function(){return this.options_show.mm?Math.floor(this.stepTime%n/i):Math.floor(this.stepTime/i)},mm:function(){return this.options_show.hh?Math.floor(this.stepTime%r/n):Math.floor(this.stepTime/n)},hh:function(){return this.options_show.dd?Math.floor(this.stepTime%a/r):Math.floor(this.stepTime/r)},dd:function(){return this.options_show.mn?this.diff.day:Math.floor(this.stepTime/a)},mn:function(){var t=0<this.diff.year?this.diff.year:0,s=0<this.diff.month?this.diff.month:0;return this.options_show.yy?s:12*t+s-1},yy:function(){return 0<this.diff.year?this.diff.year:0},step_times:function(){return this.options_show.ms?100:1e3},pareStr:function(){return this.format.replace(h.ms,this.zero(this.ms,4)).replace(h.ss,this.zero(this.ss)).replace(h.mm,this.zero(this.mm)).replace(h.hh,this.zero(this.hh)).replace(h.dd,this.zero(this.dd)).replace(h.mn,this.zero(this.mn)).replace(h.yy,this.zero(this.yy))},diff:function(){var t=new Date(this.endTime),s=new Date(this.startTime);isNaN(t)||isNaN(s);var e=s.getFullYear(),i=s.getMonth()+1,n=s.getDate(),r=t.getFullYear(),a=t.getMonth()+1,h=t.getDate();return{endDate:t,startDate:s,startYears:e,endYears:r,startMonth:i,endMonth:a,endDay:h,startDay:n,day:h-n,month:a-i,year:r-e}}},methods:{init:function(){var t=this,s=this.step_times;if(clearInterval(this.timer),!(this.startTime>=this.endTime)){if(this.stepTime=this.endTime-this.startTime,this.stepTime<=0)return this.stepTime=0;this.timer=setInterval((function(){t.stepTime=t.stepTime-s,t.stepTime<=0&&(t.stepTime=0,clearInterval(t.timer))}),s)}},zero:function(t){var s=0<(s=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:2)-String(t).length)?new Array(s).fill(0).join(""):"";return Number(t)<10?s+t:t}},filters:{filterZero:function(t){return Number(t)<10?"0"+t:t}},created:function(){this.init()}};e(543),e=e(27),o=Object(e.a)(o,(function(){var t=this,s=t.$createElement;return(s=t._self._c||s)("div",{staticClass:"cuntdown"},[s("div",{staticClass:"item Background0"},[s("span",{staticClass:"TTOMedium"},[t._v("\n      "+t._s(t.zero(t.dd))+"\n    ")]),t._v(" "),s("span",{staticClass:"TTORegular"},[t._v("Days")])]),t._v(" "),s("div",{staticClass:"item Background0"},[s("span",{staticClass:"TTOMedium"},[t._v(t._s(t.zero(t.hh)))]),t._v(" "),s("span",{staticClass:"TTORegular"},[t._v("Hours")])]),t._v(" "),s("div",{staticClass:"item Background0"},[s("span",{staticClass:"TTOMedium"},[t._v(t._s(t.zero(t.mm)))]),t._v(" "),s("span",{staticClass:"TTORegular"},[t._v("Minutes")])]),t._v(" "),s("div",{staticClass:"item Background0"},[s("span",{staticClass:"TTOMedium"},[t._v(t._s(t.zero(t.ss)))]),t._v(" "),s("span",{staticClass:"TTORegular"},[t._v("Seconds")])])])}),[],!1,null,"7d697754",null);s.default=o.exports}}]);