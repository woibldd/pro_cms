(window.webpackJsonp=window.webpackJsonp||[]).push([[12,15],{363:function(t,e,i){var s=i(5),n=i(159);i=i(94);s({target:"Array",proto:!0},{fill:n}),i("fill")},371:function(t,e,i){},533:function(t,e,i){"use strict";i(371)},534:function(t,e,i){},539:function(t,e,i){"use strict";i.r(e),i(233),i(36),i(55),i(67),i(157),i(363);var s=1e3,n=6e4,r=36e5,o=864e5,a={all:/\{(dd|hh|mm|ss|ms){1}\}/gi,ms:/\{(ms){1}\}/gi,ss:/\{(ss){1}\}/gi,mm:/\{(mm){1}\}/gi,hh:/\{(hh){1}\}/gi,dd:/\{(dd){1}\}/gi,mn:/\{(mn){1}\}/gi,yy:/\{(yy){1}\}/gi},h={name:"cuntdown",props:{hidden:{type:Boolean,default:!1},format:{type:String,default:"{yy}年{mn}月{dd}天{hh}小时{mm}分钟{ss}秒{ms}毫秒"},startTime:{type:Number||String,default:(new Date).getTime()},endTime:{type:Number||String,default:(new Date).getTime()}},data:function(){return{timer:null,stepTime:0}},watch:{stepTime:function(t){var e={ms:this.ms,ss:this.ss,mm:this.mm,hh:this.hh,dd:this.dd};if(t<=0)return this.$emit("end",e);this.$emit("change",e)},startTime:function(){this.stepTime=0,this.init()},endTime:function(){this.stepTime=0,this.init()}},computed:{options_show:function(){return{ms:a.ms.test(this.format),ss:a.ss.test(this.format),mm:a.mm.test(this.format),hh:a.hh.test(this.format),dd:a.dd.test(this.format),mn:a.mn.test(this.format),yy:a.yy.test(this.format)}},ms:function(){return Math.floor(this.stepTime%s)},ss:function(){return this.options_show.mm?Math.floor(this.stepTime%n/s):Math.floor(this.stepTime/s)},mm:function(){return this.options_show.hh?Math.floor(this.stepTime%r/n):Math.floor(this.stepTime/n)},hh:function(){return this.options_show.dd?Math.floor(this.stepTime%o/r):Math.floor(this.stepTime/r)},dd:function(){return this.options_show.mn?this.diff.day:Math.floor(this.stepTime/o)},mn:function(){var t=0<this.diff.year?this.diff.year:0,e=0<this.diff.month?this.diff.month:0;return this.options_show.yy?e:12*t+e-1},yy:function(){return 0<this.diff.year?this.diff.year:0},step_times:function(){return this.options_show.ms?100:1e3},pareStr:function(){return this.format.replace(a.ms,this.zero(this.ms,4)).replace(a.ss,this.zero(this.ss)).replace(a.mm,this.zero(this.mm)).replace(a.hh,this.zero(this.hh)).replace(a.dd,this.zero(this.dd)).replace(a.mn,this.zero(this.mn)).replace(a.yy,this.zero(this.yy))},diff:function(){var t=new Date(this.endTime),e=new Date(this.startTime);isNaN(t)||isNaN(e);var i=e.getFullYear(),s=e.getMonth()+1,n=e.getDate(),r=t.getFullYear(),o=t.getMonth()+1,a=t.getDate();return{endDate:t,startDate:e,startYears:i,endYears:r,startMonth:s,endMonth:o,endDay:a,startDay:n,day:a-n,month:o-s,year:r-i}}},methods:{init:function(){var t=this,e=this.step_times;if(clearInterval(this.timer),!(this.startTime>=this.endTime)){if(this.stepTime=this.endTime-this.startTime,this.stepTime<=0)return this.stepTime=0;this.timer=setInterval((function(){t.stepTime=t.stepTime-e,t.stepTime<=0&&(t.stepTime=0,clearInterval(t.timer))}),e)}},zero:function(t){var e=0<(e=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:2)-String(t).length)?new Array(e).fill(0).join(""):"";return Number(t)<10?e+t:t}},filters:{filterZero:function(t){return Number(t)<10?"0"+t:t}},created:function(){this.init()}};i(533),i=i(27),h=Object(i.a)(h,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return t.hidden?t._e():e("div",{staticClass:"cuntdown",domProps:{innerHTML:t._s(t.pareStr)}})}),[],!1,null,"ce47b7d2",null);e.default=h.exports},570:function(t,e,i){"use strict";i(534)},588:function(t,e,i){"use strict";i.r(e),i(233),i(49);var s={name:"blindTimeText",components:{Countdown:i(539).default},props:{locale:{type:String,default:function(){return"en"}},info:{type:Object,default:function(){return{status:0,is_owner:0}}},startTime:{type:Number||String,default:0},endTime:{type:Number||String,default:0},format:{type:String,default:"{dd}天{hh}小时{mm}分钟{ss}秒"}},methods:{chountChange:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];this.$emit.apply(this,["change"].concat(e))},end:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];this.$emit.apply(this,["end"].concat(e))}}};i(570),i=i(27),s=Object(i.a)(s,(function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("div",{staticClass:"block_time_content",attrs:{id:"blindTimeText"}},[0==t.info.status||1==t.info.status?e("span",{staticClass:"color_white"},[t._v(t._s(t.$t("ActivityBlindbox.ActivityBlindboxDetail.invalidTimeText"))+"   ")]):t._e(),t._v(" "),2==t.info.status?e("span",{staticClass:"color_white"},[t._v(t._s(t.$t("ActivityBlindbox.ActivityBlindboxDetail.successfullyTimeText"))+"   ")]):t._e(),t._v(" "),3==t.info.status?e("span",{staticClass:"color_white"},[t._v(t._s(t.$t("ActivityBlindbox.ActivityBlindboxDetail.expiredTimeText"))+"   ")]):t._e(),t._v(" "),0==t.info.status||1==t.info.status?e("Countdown",{staticClass:"color_red",attrs:{startTime:t.startTime,endTime:t.endTime,format:t.format}}):t._e()],1)}),[],!1,null,"0becdc74",null);e.default=s.exports}}]);