(window.webpackJsonp=window.webpackJsonp||[]).push([[26,10,12],{369:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e(60);n=e(19);var i=e(96),r=(n=e.n(i),e(1)),s=e(95),o=(e(92),function(){for(var t,n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];(t=console).log.apply(t,["bit-activity-request:"].concat(e))}),l=n.a.create({baseURL:"/",timeout:6e4,headers:{token:"0xddb42C195d0e1670AeC3f085131364e6681B9e3C",language:"zh",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});l.interceptors.request.use((function(t){var n,e,i;return o("requestlog:",t),r.a.prototype.$store&&(e=(i=(n=r.a.prototype.$store.state).local).UA,i=i.locale,e.isBitKeep?Object.assign(t.headers,n.local.bitkeep,{language:i}):Object.assign(t.headers,{language:i})),t}),(function(t){return Promise.resolve({status:1})})),l.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];(t=console).log.apply(t,["bit-activity-response:"].concat(e))}("responselog:",t);var n="网路开了小差";n=(t=Object(s.b)()||{}).t?t.t("base.networkErro"):n;return Promise.resolve({status:1,data:n})}));var c={mBoxList:function(t){return l.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return l.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return l.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return l.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return l.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return l.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return l.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return l.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return l.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return l.post("swap/mining/info",t)},historyPhase:function(t){return l.post("swap/mining/historyPhase",t)},receiveAward:function(t){return l.post("swap/mining/receiveAward",t)},getInviteList:function(t){return l.post("friendship/getInviteList",t)},certifyFriendship:function(t){return l.post("friendship/certifyFriendship",t)}}},370:function(t,n,e){var i=e(375);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,e(110).default)("640c92ec",i,!0,{sourceMap:!1})},374:function(t,n,e){"use strict";e(370)},375:function(t,n,e){(e=e(109)(!1)).push([t.i,".header .header_wapper[data-v-3521874b] {\n  width: 100vw;\n}\n.fixed[data-v-3521874b] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99;\n}",""]),t.exports=e},376:function(t,n,e){"use strict";e.r(n);var i=e(14),r=(e(68),{name:"Header",props:{fixed:{type:Boolean,default:function(){return!0}}},computed:{},data:function(){return{info:{}}},updated:function(){},mounted:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$nextTick();case 2:case"end":return n.stop()}}),n)})))()},methods:{onChange:function(){},onclose:function(){}},filters:{}});e(374),e=e(79),r=Object(e.a)(r,(function(){var t=this.$createElement;return(t=this._self._c||t)("div",{class:{fixed:this.fixed,header:!0},attrs:{id:"Header"}},[t("div",{staticClass:"header_wapper"},[this._t("default")],2)])}),[],!1,null,"3521874b",null);n.default=r.exports},377:function(t,n,e){"use strict";e.r(n),e.d(n,"Header",(function(){return i}));var i=(e=e(376)).default;n.default={Header:e.default}},382:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var i=e(130),r=e(167);function s(t){return function(t){if(Array.isArray(t))return Object(i.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},399:function(t,n,e){t.exports=function(){"use strict";var t=6e4,u=36e5,n="millisecond",b="second",e="minute",r="hour",o="day",p="week",l="month",c="quarter",g="year",d="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},s=function(t,n,e){var i=String(t);return!i||i.length>=n?t:""+Array(n+1-i.length).join(e)+t},_={s:s,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),i=Math.floor(e/60),r=e%60;return(n<=0?"+":"-")+s(i,2,"0")+":"+s(r,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var i=12*(e.year()-n.year())+(e.month()-n.month()),r=n.clone().add(i,l),s=e-r<0,o=n.clone().add(i+(s?-1:1),l);return+(-(i+(e-r)/(s?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:g,w:p,d:o,D:d,h:r,m:e,s:b,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},a="en",x={};x[a]=v;var i=function(t){return t instanceof B},y=function(t,n,e){var i;if(!t)return a;if("string"==typeof t)x[t]&&(i=t),n&&(x[t]=n,i=t);else{var r=t.name;x[r]=t,i=r}return!e&&i&&(a=i),i||!e&&a},w=function(t,n){if(i(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new B(e)},$=_;$.l=y,$.i=i,$.w=function(t,n){return w(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var B=function(){function v(t){this.$L=y(t.locale,null,!0),this.parse(t)}var _=v.prototype;return _.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if($.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var i=n.match(h);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return e?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},_.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},_.$utils=function(){return $},_.isValid=function(){return!(this.$d.toString()===f)},_.isSame=function(t,n){var e=w(t);return this.startOf(n)<=e&&e<=this.endOf(n)},_.isAfter=function(t,n){return w(t)<this.startOf(n)},_.isBefore=function(t,n){return this.endOf(n)<w(t)},_.$g=function(t,n,e){return $.u(t)?this[n]:this.set(e,t)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(t,n){var i=this,c=!!$.u(n)||n,f=$.p(t),s=function(t,n){var e=$.w(i.$u?Date.UTC(i.$y,n,t):new Date(i.$y,n,t),i);return c?e:e.endOf(o)},h=function(t,n){return $.w(i.toDate()[t].apply(i.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(n)),i)},a=this.$W,m=this.$M,v=this.$D,_="set"+(this.$u?"UTC":"");switch(f){case g:return c?s(1,0):s(31,11);case l:return c?s(1,m):s(0,m+1);case p:var u=this.$locale().weekStart||0,x=(a<u?a+7:a)-u;return s(c?v-x:v+(6-x),m);case o:case d:return h(_+"Hours",0);case r:return h(_+"Minutes",1);case e:return h(_+"Seconds",2);case b:return h(_+"Milliseconds",3);default:return this.clone()}},_.endOf=function(t){return this.startOf(t,!1)},_.$set=function(t,c){var f,i=$.p(t),h="set"+(this.$u?"UTC":""),s=(f={},f[o]=h+"Date",f[d]=h+"Date",f[l]=h+"Month",f[g]=h+"FullYear",f[r]=h+"Hours",f[e]=h+"Minutes",f[b]=h+"Seconds",f[n]=h+"Milliseconds",f)[i],m=i===o?this.$D+(c-this.$W):c;if(i===l||i===g){var a=this.clone().set(d,1);a.$d[s](m),a.init(),this.$d=a.set(d,Math.min(this.$D,a.daysInMonth())).$d}else s&&this.$d[s](m);return this.init(),this},_.set=function(t,n){return this.clone().$set(t,n)},_.get=function(t){return this[$.p(t)]()},_.add=function(n,c){var d,i=this;n=Number(n);var f=$.p(c),s=function(t){var e=w(i);return $.w(e.date(e.date()+Math.round(t*n)),i)};if(f===l)return this.set(l,this.$M+n);if(f===g)return this.set(g,this.$y+n);if(f===o)return s(1);if(f===p)return s(7);var h=(d={},d[e]=t,d[r]=u,d[b]=1e3,d)[f]||1,a=this.$d.getTime()+n*h;return $.w(a,this)},_.subtract=function(t,n){return this.add(-1*t,n)},_.format=function(t){var n=this;if(!this.isValid())return f;var s=t||"YYYY-MM-DDTHH:mm:ssZ",e=$.z(this),r=this.$locale(),i=this.$H,o=this.$m,a=this.$M,l=r.weekdays,c=r.months,d=function(t,e,r,i){return t&&(t[e]||t(n,s))||r[e].substr(0,i)},u=function(t){return $.s(i%12||12,t,"0")},h=r.meridiem||function(t,n,e){var i=t<12?"AM":"PM";return e?i.toLowerCase():i},b={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:$.s(a+1,2,"0"),MMM:d(r.monthsShort,a,c,3),MMMM:d(c,a),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,l,2),ddd:d(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:$.s(i,2,"0"),h:u(1),hh:u(2),a:h(i,o,!0),A:h(i,o,!1),m:String(o),mm:$.s(o,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:e};return s.replace(m,(function(t,n){return n||b[t]||e.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(n,d,f){var i,h=$.p(d),s=w(n),m=(s.utcOffset()-this.utcOffset())*t,a=this-s,v=$.m(this,s);return v=(i={},i[g]=v/12,i[l]=v,i[c]=v/3,i[p]=(a-m)/6048e5,i[o]=(a-m)/864e5,i[r]=a/u,i[e]=a/t,i[b]=a/1e3,i)[h]||a,f?v:$.a(v)},_.daysInMonth=function(){return this.endOf(l).$D},_.$locale=function(){return x[this.$L]},_.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),i=y(t,n,!0);return i&&(e.$L=i),e},_.clone=function(){return $.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},v}(),M=B.prototype;return w.prototype=M,[["$ms",n],["$s",b],["$m",e],["$H",r],["$W",o],["$M",l],["$y",g],["$D",d]].forEach((function(t){M[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),w.extend=function(t,n){return t.$i||(t(n,B,w),t.$i=!0),w},w.locale=y,w.isDayjs=i,w.unix=function(t){return w(1e3*t)},w.en=x[a],w.Ls=x,w.p={},w}()},451:function(t,n,e){var i=e(505);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,e(110).default)("703a77f4",i,!0,{sourceMap:!1})},504:function(t,n,e){"use strict";e(451)},505:function(t,n,e){var i=e(109),r=e(239);e=e(506),i=i(!1),e=r(e);i.push([t.i,".loading[data-v-224252ec] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.color_red[data-v-224252ec] {\n  color: #ff255a;\n  font-weight: 600;\n}\n.font-18[data-v-224252ec] {\n  font-size: 0.48rem;\n}\n.color_text[data-v-224252ec] {\n  color: #4b5373;\n}\n.color_blod[data-v-224252ec] {\n  color: #080d21;\n}\n.btn[data-v-224252ec] {\n  background: linear-gradient(122.71deg, #74eeff 3.38%, #6f2cff 92.57%),#c4c4c4;\n  border-radius: 2.67rem;\n  height: 0.64rem;\n  width: 1.81rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 2.67rem;\n  font-weight: 500;\n  font-size: 0.32rem;\n  line-height: 0.32rem;\n  color: #ffffff;\n}\n.btn[data-v-224252ec]:active {\n  opacity: 0.8;\n}\n#blindbox_list[data-v-224252ec] {\n  word-break: break-all;\n  background: #3d0b88;\n  min-height: 100vh;\n  box-sizing: border-box;\n  font-style: normal;\n  font-weight: normal;\n  font-family: PingFang SC;\n  overflow: hidden;\n  position: relative;\n}\n#blindbox_list .tag[data-v-224252ec] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n#blindbox_list .tag .btn[data-v-224252ec] {\n  border-radius: 0 0.27rem;\n  font-size: 0.29rem;\n  line-height: 0.29rem;\n  height: 0.64rem;\n  font-weight: 500;\n  width: 2.08rem;\n  white-space: nowrap;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#blindbox_list .tag .btn.open[data-v-224252ec] {\n  background: linear-gradient(274.96deg, #bc0eff .67%, #ff81e2 100%);\n  color: #ffffff;\n}\n#blindbox_list .tag .btn.shared[data-v-224252ec] {\n  color: #1cbdb5;\n  background: linear-gradient(274.96deg, rgba(0,199,215,0.2) .67%, rgba(115,255,221,0.2) 100%);\n}\n#blindbox_list .tag .btn.en[data-v-224252ec] {\n  width: 2.53rem;\n}\n#blindbox_list .blindbox_list_firends[data-v-224252ec] {\n  color: #fff;\n  text-align: center;\n  font-size: 0.37rem;\n  height: 1.17rem;\n  line-height: 1.17rem;\n  font-weight: 500;\n  overflow: hidden;\n  background: linear-gradient(90.35deg, rgba(182,170,255,0.5) 1.43%, rgba(182,170,255,0) 100%);\n}\n#blindbox_list .blindbox_list_firends i[data-v-224252ec] {\n  vertical-align: middle;\n  font-weight: 1000;\n  display: inline-block;\n  margin-left: 0.11rem;\n}\n#blindbox_list .blindbox_list_header[data-v-224252ec] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.59rem 0.4rem;\n  box-sizing: border-box;\n}\n#blindbox_list .blindbox_list_header img[data-v-224252ec] {\n  width: 0.85rem;\n  height: 0.85rem;\n}\n#blindbox_list .blindbox_list_body[data-v-224252ec] {\n  overflow: hidden;\n  margin-top: 0.27rem;\n}\n#blindbox_list .blindbox_list_body .blindbox_list_content[data-v-224252ec] {\n  min-height: 100vh;\n}\n#blindbox_list .blindbox_list_body .endBg[data-v-224252ec] {\n  box-sizing: border-box;\n  width: 5.87rem;\n  height: 7.52rem;\n  margin: 4.43rem auto 0;\n  box-shadow: inset 0 0.03rem 0 rgba(255,255,255,0.6);\n  backdrop-filter: blur(0.27rem);\n  border-radius: 0.48rem;\n  background: url("+e+") center center no-repeat;\n  background-size: 100% 100%;\n  text-align: center;\n  overflow: hidden;\n  box-shadow: inset 0 0.03rem 0.05rem rgba(255,255,255,0.6);\n}\n#blindbox_list .blindbox_list_body .endBg .title[data-v-224252ec] {\n  margin-top: 1.73rem;\n  font-size: 0.48rem;\n  line-height: 0.48rem;\n  font-weight: 800;\n}\n#blindbox_list .blindbox_list_body .endBg .subtitle[data-v-224252ec] {\n  padding: 0 0.37rem 0 0.43rem;\n  margin-top: 0.13rem;\n  font-size: 0.37rem;\n  line-height: 0.37rem;\n}\n#blindbox_list .blindbox_list_body .endBg .content[data-v-224252ec] {\n  padding: 0 0.37rem 0 0.43rem;\n  text-align: left;\n  margin-top: 0.4rem;\n  font-size: 0.37rem;\n  line-height: 0.48rem;\n}\n#blindbox_list .blindbox_list_body .endBg.en[data-v-224252ec] {\n  word-break: keep-all;\n}\n#blindbox_list .blindbox_list_body .endBg.en .title[data-v-224252ec] {\n  margin-top: 1.73rem;\n  line-height: 0.53rem;\n  font-size: 0.53rem;\n  text-align: center;\n  padding: 0 0.37rem 0 0.43rem;\n}\n#blindbox_list .blindbox_list_body .endBg.en .subtitle[data-v-224252ec] {\n  margin-top: 0.19rem;\n  font-size: 0.32rem;\n  line-height: 0.32rem;\n}\n#blindbox_list .blindbox_list_body .endBg.en .content[data-v-224252ec] {\n  padding: 0 0.37rem 0 0.43rem;\n  text-align: left;\n  margin-top: 0.53rem;\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n}\n#blindbox_list .blindbox_list_body .list_item .invaild[data-v-224252ec] {\n  opacity: 0.4;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper[data-v-224252ec] {\n  position: relative;\n  overflow: hidden;\n  width: 9.15rem;\n  border-radius: 0.27rem;\n  box-sizing: border-box;\n  padding: 0.27rem;\n  margin: 0.27rem 0.43rem;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 0.27rem;\n  align-items: center;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_pic[data-v-224252ec] {\n  height: 1.97rem;\n  width: 1.97rem;\n  border-radius: 0.16rem;\n  overflow: hidden;\n  display: flex;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_pic img[data-v-224252ec] {\n  width: 100%;\n  height: 100%;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont[data-v-224252ec] {\n  flex: 1;\n  width: 4.29rem;\n  color: #7f828f;\n  font-size: 0.27rem;\n  line-height: 0.37rem;\n  margin: 0 0.27rem;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont .title[data-v-224252ec] {\n  margin-top: 0.13rem;\n  font-size: 0.43rem;\n  font-weight: 500;\n  line-height: 0.48rem;\n  letter-spacing: 0;\n  color: #080d21;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont .title.en[data-v-224252ec] {\n  line-height: 0.48rem;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont .content[data-v-224252ec] {\n  margin: 0.13rem 0;\n  line-height: 0.37rem;\n  color: #4b5373;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont .time[data-v-224252ec] {\n  font-size: 0.27rem;\n  line-height: 0.32rem;\n  color: #4b5373;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_btn[data-v-224252ec] {\n  height: 1.97rem;\n  display: flex;\n  display: flex;\n  align-items: flex-end;\n}",""]),t.exports=i},506:function(t,n,e){t.exports=e.p+"img/endbg@2.35af55c.png"},562:function(t,n,e){"use strict";e.r(n),e(55),e(41),e(61),e(80),e(48),e(81);var a=e(382),i=e(14),r=e(35),s=(e(84),e(60),e(68),e(377)),o=e(399),l=e.n(o),c=e(369);o=e(91);function d(t,n){var e,i=Object.keys(t);return Object.getOwnPropertySymbols&&(e=Object.getOwnPropertySymbols(t),n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.push.apply(i,e)),i}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?d(Object(e),!0).forEach((function(n){Object(r.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}o={name:"mBoxList",components:{Header:s.Header},computed:u(u({},Object(o.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep}}),data:function(){return{isLoading:!0,inviteNum:0,helpNum:0,listLoading:!1,finished:!1,refreshing:!1,total:20,start:0,limit:10,blindbox_list:[]}},created:function(){return Object(i.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},beforeMount:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.isBitKeep&&BitKeepInvoke.setTitle(t.$t("ActivityBlindbox.title.myBlindboxText"));case 1:case"end":return n.stop()}}),n)})))()},mounted:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.showLoading(),n.next=3,t.$nextTick();case 3:t.hideLoading(),t.isLoading=!1;case 5:case"end":return n.stop()}}),n)})))()},methods:{getList:function(){var s=arguments,t=this;return Object(i.a)(regeneratorRuntime.mark((function n(){var e,r,i,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=0<s.length&&void 0!==s[0]?s[0]:1,n.next=3,c.a.mBoxList({start:(e-1)*t.limit,limit:t.limit});case 3:if(r=n.sent,i=r.data,1==r.status)return t.finished=!0,n.abrupt("return",t.$toast.fail(i));n.next=9;break;case 9:if(t.total=i.total,t.inviteNum=i.invite_number,t.helpNum=i.help_number,(o=i.list.map((function(t){return t.bg_icon="url(".concat(t.cover_image,") no-repeat  center center/cover"),t})))&&0!=o.length){n.next=16;break}return t.finished=!0,n.abrupt("return");case 16:t.start=e,t.blindbox_list=1==e?o:[].concat(Object(a.a)(t.blindbox_list),Object(a.a)(o));case 18:case"end":return n.stop()}}),n)})))()},goFriendList:function(){this.$router.push({path:"/activity/blindbox/firendList"})},handlerBtn:function(t,n){this.$router.push({path:"/activity/blindbox/detail/".concat(t.id),query:{ownerIdentity:t.ownerIdentity}})},showLoading:function(){this.Toast=this.$toast.loading({duration:0,forbidClick:!0})},hideLoading:function(){this.Toast&&this.Toast.clear()},back:function(){this.$router.back()},onLoad:function(t){var n=this;return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.refreshing&&(n.blindbox_list=[],n.refreshing=!1),e.next=3,n.getList(t?1:n.start+1);case 3:n.listLoading=!1,n.total<=n.blindbox_list.length&&(n.finished=!0);case 5:case"end":return e.stop()}}),e)})))()},onRefresh:function(){this.finished=!1,this.listLoading=!0,this.onLoad(!0)}},filters:{date:function(t){var n;t=(n=l()(t)).year()==l()().year()?"MM-DD HH:mm:ss":"YYYY-MM-DD HH:mm:ss";return n.format(t)}}},e(504),e=e(79),o=Object(e.a)(o,(function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",{attrs:{id:"blindbox_list"}},[i.isLoading?n("div",{staticClass:"loading"},[n("van-loading",{attrs:{color:"#1989fa"}})],1):n("div",[0<i.blindbox_list.length?n("div",{staticClass:"blindbox_list_firends",on:{click:i.goFriendList}},[n("van-icon",{attrs:{name:"http://cdn.bitkeep.vip/u_b_78569440-5721-11ec-84e8-3b41e43dd21d.png",color:"#fff"}}),i._v("\n      "+i._s(i.$t("ActivityBlindbox.ActivityBlindboxList.inviteContent",{invite:this.inviteNum||0,helper:this.helpNum||0}))),n("van-icon",{attrs:{name:"arrow",color:"#fff"}})],1):i._e(),i._v(" "),n("div",{staticClass:"blindbox_list_body"},[n("van-pull-refresh",{staticClass:"blindbox_list_content",on:{refresh:i.onRefresh},model:{value:i.refreshing,callback:function(t){i.refreshing=t},expression:"refreshing"}},[n("van-list",{attrs:{finished:i.finished},on:{load:i.onLoad},model:{value:i.listLoading,callback:function(t){i.listLoading=t},expression:"listLoading"}},i._l(i.blindbox_list,(function(t){var e,r;return n("div",{key:t.id,on:{click:function(n){return i.handlerBtn(t,0)}}},[n("div",{class:{list_item:!0}},[n("div",{class:{list_item_warpper:!0,"radial-gradient":!0,active:!0,invaild:3==t.status}},[n("div",{staticClass:"tag"},[1!=t.is_owner?n("span",{class:((e={btn:!0,shared:!0})[i.locale]=!0,e)},[i._v(i._s(i.$t("ActivityBlindbox.ActivityBlindboxList.ShareWithMe")))]):1==t.status&&1==t.is_owner?n("span",{class:((r={btn:!0,open:!0})[i.locale]=!0,r)},[i._v(i._s(i.$t("ActivityBlindbox.ActivityBlindboxList.willOpened")))]):n("span")]),i._v(" "),n("div",{staticClass:"list_item_pic"},[n("van-image",{attrs:{width:"100%",height:"100%",src:t.cover_image}})],1),i._v(" "),n("div",{staticClass:"list_item_cont"},[n("div",{class:((r={title:!0,color_blod:!0,"van-ellipsis":!0})[i.locale]=!0,r)},[i._v("\n                    "+i._s(t.title)+"\n                  ")]),i._v(" "),n("div",{staticClass:"content"},[n("span",{domProps:{innerHTML:i._s(i.$t("ActivityBlindbox.ActivityBlindboxList.blindBoxNumText",{surplus:t.already_invite,invite:t.invite-t.already_invite}))}}),i._v(" "),n("div",[i._v("\n                      "+i._s(i.$t("ActivityBlindbox.ActivityBlindboxList.blindBoxSurpriseText"))+"\n                    ")])]),i._v(" "),n("div",{staticClass:"time van-ellipsis"},[n("span",[i._v(i._s(i.$t("ActivityBlindbox.ActivityBlindboxList.ValidUntilText")))]),i._v("\n                    "+i._s(i._f("date")(t.end_time))+"\n                  ")])]),i._v(" "),n("div",{staticClass:"list_item_btn"},[0==t.status?n("div",{staticClass:"btn",on:{click:function(n){return i.handlerBtn(t,0)}}},[i._v("\n                    "+i._s(i.$t("ActivityBlindbox.ActivityBlindboxList.GoShareText"))+"\n                  ")]):i._e(),i._v(" "),1==t.status&&1==t.is_owner?n("div",{staticClass:"btn",on:{click:function(n){return i.handlerBtn(t,1)}}},[i._v("\n                    "+i._s(i.$t("ActivityBlindbox.ActivityBlindboxList.GoOpenText"))+"\n                  ")]):i._e(),i._v(" "),1==t.status&&1!=t.is_owner?n("div",{staticClass:"btn",on:{click:function(n){return i.handlerBtn(t,0)}}},[i._v("\n                    "+i._s(i.$t("ActivityBlindbox.ActivityBlindboxList.GoShareText"))+"\n                  ")]):i._e(),i._v(" "),2==t.status?n("div",{staticClass:"btn",on:{click:function(n){return i.handlerBtn(t,2)}}},[i._v("\n                    "+i._s(i.$t("ActivityBlindbox.ActivityBlindboxList.SuccessfullyOpenedText"))+"\n                  ")]):i._e(),i._v(" "),3==t.status?n("div",{staticClass:"btn",on:{click:function(n){return i.handlerBtn(t,2)}}},[i._v("\n                    "+i._s(i.$t("ActivityBlindbox.ActivityBlindboxList.expiredText"))+"\n                  ")]):i._e()])])])])})),0),i._v(" "),i.listLoading||i.blindbox_list&&0!=i.blindbox_list.length?i._e():n("div",{class:((t={endBg:!0,color_theme:!0})[i.locale]=!0,t)},[n("div",{staticClass:"title"},[i._v("\n            "+i._s(i.$t("ActivityBlindbox.ActivityBlindboxList.end.title"))+"\n          ")]),i._v(" "),n("div",{staticClass:"content",domProps:{innerHTML:i._s(i.$t("ActivityBlindbox.ActivityBlindboxList.end.content"))}})])],1)],1)])])}),[],!1,null,"224252ec",null),n.default=o.exports}}]);