(window.webpackJsonp=window.webpackJsonp||[]).push([[28,12,14],{371:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e(60);n=e(20);var i=e(95),r=(n=e.n(i),e(2)),a=e(94),s=(e(92),function(){for(var t,n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];(t=console).log.apply(t,["bit-activity-request:"].concat(e))}),u=n.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});u.interceptors.request.use((function(t){var n,e,i;return s("requestlog:",t),r.a.prototype.$store&&(e=(i=(n=r.a.prototype.$store.state).local).UA,i=i.locale,e.isBitKeep?Object.assign(t.headers,n.local.bitkeep,{language:i}):Object.assign(t.headers,{language:i})),t}),(function(t){return Promise.resolve({status:1})})),u.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];(t=console).log.apply(t,["bit-activity-response:"].concat(e))}("responselog:",t);var n="网路开了小差";n=(t=Object(a.b)()||{}).t?t.t("base.networkErro"):n;return Promise.resolve({status:1,data:n})}));var o={mBoxList:function(t){return u.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return u.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return u.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return u.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return u.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return u.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return u.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return u.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return u.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return u.post("swap/mining/info",t)},historyPhase:function(t){return u.post("swap/mining/historyPhase",t)},receiveAward:function(t){return u.post("swap/mining/receiveAward",t)},getInviteList:function(t){return u.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return u.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return u.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return u.post("/user/cloudstaking/poolList",t)},myPool:function(t){return u.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return u.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return u.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return u.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return u.post("/user/cloudstaking/getToken",t)},tradingGetList:function(t){return u.post("swap/tradeCompetition/getList",t)},tradingWaitClaim:function(t){return u.post("swap/tradeCompetition/waitClaim",t)},tradingClaim:function(t){return u.post("swap/tradeCompetition/claim",t)},tradingSummary:function(t){return u.post("swap/tradeCompetition/summary",t)},tradingHistory:function(t){return u.post("swap/tradeCompetition/history",t)}}},375:function(t,n,e){var i=e(377);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,e(110).default)("640c92ec",i,!0,{sourceMap:!1})},376:function(t,n,e){"use strict";e(375)},377:function(t,n,e){(e=e(109)(!1)).push([t.i,".header .header_wapper[data-v-3521874b] {\n  width: 100vw;\n}\n.fixed[data-v-3521874b] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99;\n}",""]),t.exports=e},378:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var i=e(131),r=e(166);function a(t){return function(t){if(Array.isArray(t))return Object(i.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},379:function(t,n,e){"use strict";e.r(n);var i=e(14),r=(e(68),{name:"Header",props:{fixed:{type:Boolean,default:function(){return!0}}},computed:{},data:function(){return{info:{}}},updated:function(){},mounted:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$nextTick();case 2:case"end":return n.stop()}}),n)})))()},methods:{onChange:function(){},onclose:function(){}},filters:{}});e(376),e=e(79),r=Object(e.a)(r,(function(){var t=this.$createElement;return(t=this._self._c||t)("div",{class:{fixed:this.fixed,header:!0},attrs:{id:"Header"}},[t("div",{staticClass:"header_wapper"},[this._t("default")],2)])}),[],!1,null,"3521874b",null);n.default=r.exports},380:function(t,n,e){"use strict";e.r(n),e.d(n,"Header",(function(){return i}));var i=(e=e(379)).default;n.default={Header:e.default}},558:function(t,n,e){t.exports=function(){"use strict";var t=6e4,n=36e5,u="millisecond",e="second",p="minute",r="hour",b="day",g="week",o="month",c="quarter",l="year",d="date",f="Invalid Date",s=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},a=function(t,n,e){var i=String(t);return!i||i.length>=n?t:""+Array(n+1-i.length).join(e)+t},v={s:a,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),i=Math.floor(e/60),r=e%60;return(n<=0?"+":"-")+a(i,2,"0")+":"+a(r,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var i=12*(e.year()-n.year())+(e.month()-n.month()),r=n.clone().add(i,o),a=e-r<0,s=n.clone().add(i+(a?-1:1),o);return+(-(i+(e-r)/(a?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:l,w:g,d:b,D:d,h:r,m:p,s:e,ms:u,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},_="en",y={};y[_]=m;var i=function(t){return t instanceof k},w=function(t,n,e){var i;if(!t)return _;if("string"==typeof t)y[t]&&(i=t),n&&(y[t]=n,i=t);else{var r=t.name;y[r]=t,i=r}return!e&&i&&(_=i),i||!e&&_},x=function(t,n){if(i(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new k(e)},$=v;$.l=w,$.i=i,$.w=function(t,n){return x(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var k=function(){function m(t){this.$L=w(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if($.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var i=n.match(s);if(i){var r=i[2]-1||0,a=(i[7]||"0").substring(0,3);return e?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return $},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,n){var e=x(t);return this.startOf(n)<=e&&e<=this.endOf(n)},v.isAfter=function(t,n){return x(t)<this.startOf(n)},v.isBefore=function(t,n){return this.endOf(n)<x(t)},v.$g=function(t,n,e){return $.u(t)?this[n]:this.set(e,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,n){var i=this,c=!!$.u(n)||n,f=$.p(t),a=function(t,n){var e=$.w(i.$u?Date.UTC(i.$y,n,t):new Date(i.$y,n,t),i);return c?e:e.endOf(b)},s=function(t,n){return $.w(i.toDate()[t].apply(i.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(n)),i)},h=this.$W,u=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case l:return c?a(1,0):a(31,11);case o:return c?a(1,u):a(0,u+1);case g:var _=this.$locale().weekStart||0,y=(h<_?h+7:h)-_;return a(c?m-y:m+(6-y),u);case b:case d:return s(v+"Hours",0);case r:return s(v+"Minutes",1);case p:return s(v+"Seconds",2);case e:return s(v+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,n){var c,i=$.p(t),f="set"+(this.$u?"UTC":""),a=(c={},c[b]=f+"Date",c[d]=f+"Date",c[o]=f+"Month",c[l]=f+"FullYear",c[r]=f+"Hours",c[p]=f+"Minutes",c[e]=f+"Seconds",c[u]=f+"Milliseconds",c)[i],s=i===b?this.$D+(n-this.$W):n;if(i===o||i===l){var h=this.clone().set(d,1);h.$d[a](s),h.init(),this.$d=h.set(d,Math.min(this.$D,h.daysInMonth())).$d}else a&&this.$d[a](s);return this.init(),this},v.set=function(t,n){return this.clone().$set(t,n)},v.get=function(t){return this[$.p(t)]()},v.add=function(c,d){var f,i=this;c=Number(c);var h=$.p(d),a=function(t){var n=x(i);return $.w(n.date(n.date()+Math.round(t*c)),i)};if(h===o)return this.set(o,this.$M+c);if(h===l)return this.set(l,this.$y+c);if(h===b)return a(1);if(h===g)return a(7);var s=(f={},f[p]=t,f[r]=n,f[e]=1e3,f)[h]||1,m=this.$d.getTime()+c*s;return $.w(m,this)},v.subtract=function(t,n){return this.add(-1*t,n)},v.format=function(t){var n=this;if(!this.isValid())return f;var a=t||"YYYY-MM-DDTHH:mm:ssZ",e=$.z(this),r=this.$locale(),i=this.$H,s=this.$m,o=this.$M,u=r.weekdays,c=r.months,l=function(t,e,r,i){return t&&(t[e]||t(n,a))||r[e].substr(0,i)},d=function(t){return $.s(i%12||12,t,"0")},m=r.meridiem||function(t,n,e){var i=t<12?"AM":"PM";return e?i.toLowerCase():i},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:$.s(o+1,2,"0"),MMM:l(r.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,u,2),ddd:l(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(i),HH:$.s(i,2,"0"),h:d(1),hh:d(2),a:m(i,s,!0),A:m(i,s,!1),m:String(s),mm:$.s(s,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:e};return a.replace(h,(function(t,n){return n||v[t]||e.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(d,f,h){var i,m=$.p(f),a=x(d),s=(a.utcOffset()-this.utcOffset())*t,v=this-a,u=$.m(this,a);return u=(i={},i[l]=u/12,i[o]=u,i[c]=u/3,i[g]=(v-s)/6048e5,i[b]=(v-s)/864e5,i[r]=v/n,i[p]=v/t,i[e]=v/1e3,i)[m]||v,h?u:$.a(u)},v.daysInMonth=function(){return this.endOf(o).$D},v.$locale=function(){return y[this.$L]},v.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),i=w(t,n,!0);return i&&(e.$L=i),e},v.clone=function(){return $.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),M=k.prototype;return x.prototype=M,[["$ms",u],["$s",e],["$m",p],["$H",r],["$W",b],["$M",o],["$y",l],["$D",d]].forEach((function(t){M[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),x.extend=function(t,n){return t.$i||(t(n,k,x),t.$i=!0),x},x.locale=w,x.isDayjs=i,x.unix=function(t){return x(1e3*t)},x.en=y[_],x.Ls=y,x.p={},x}()},611:function(t,n,e){var i=e(667);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,e(110).default)("a62e19c4",i,!0,{sourceMap:!1})},666:function(t,n,e){"use strict";e(611)},667:function(t,n,e){(e=e(109)(!1)).push([t.i,".loading[data-v-66a9f5a1] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.color_red[data-v-66a9f5a1] {\n  color: #ff255a;\n  font-weight: 600;\n}\n.color_text[data-v-66a9f5a1] {\n  color: #4b5373;\n}\n.color_blod[data-v-66a9f5a1] {\n  color: #080d21;\n}\n.btn[data-v-66a9f5a1] {\n  background: linear-gradient(122.71deg, #74eeff 3.38%, #6f2cff 92.57%),#c4c4c4;\n  border-radius: 2.67rem;\n  height: 0.64rem;\n  width: 1.81rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 2.67rem;\n  font-weight: 500;\n  font-size: 0.32rem;\n  line-height: 0.32rem;\n  color: #ffffff;\n}\n.btn[data-v-66a9f5a1]:active {\n  opacity: 0.8;\n}\n#blindbox_list[data-v-66a9f5a1] {\n  word-break: break-all;\n  background: #3d0b88;\n  min-height: 100vh;\n  box-sizing: border-box;\n  font-style: normal;\n  font-weight: normal;\n  font-family: PingFang SC;\n}\n#blindbox_list .blindbox_list_header[data-v-66a9f5a1] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.59rem 0.4rem;\n  box-sizing: border-box;\n}\n#blindbox_list .blindbox_list_header img[data-v-66a9f5a1] {\n  width: 0.85rem;\n  height: 0.85rem;\n}\n#blindbox_list .blindbox_list_body[data-v-66a9f5a1] {\n  overflow: hidden;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper[data-v-66a9f5a1] {\n  position: relative;\n  overflow: hidden;\n  width: 9.15rem;\n  height: 2.51rem;\n  background: #ffffff;\n  border-radius: 0.27rem;\n  box-sizing: border-box;\n  padding: 0.27rem;\n  margin: 0.27rem 0.43rem;\n  display: flex;\n  justify-content: space-between;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_invaild[data-v-66a9f5a1] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background: #ffffff;\n  opacity: 0.6;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_pic[data-v-66a9f5a1] {\n  height: 1.97rem;\n  width: 1.97rem;\n  border-radius: 0.16rem;\n  overflow: hidden;\n  display: flex;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_pic img[data-v-66a9f5a1] {\n  width: 100%;\n  height: 100%;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont[data-v-66a9f5a1] {\n  flex: 1;\n  height: 0.75rem;\n  width: 4.29rem;\n  color: #7f828f;\n  font-size: 0.32rem;\n  line-height: 0.37rem;\n  margin: 0 0.27rem;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont .title[data-v-66a9f5a1] {\n  margin-top: 0.13rem;\n  font-size: 0.43rem;\n  font-weight: 500;\n  line-height: 0.43rem;\n  letter-spacing: 0;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont .content[data-v-66a9f5a1] {\n  margin: 0.13rem 0;\n  line-height: 0.37rem;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont .time[data-v-66a9f5a1] {\n  font-size: 0.27rem;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_btn[data-v-66a9f5a1] {\n  display: flex;\n  align-items: flex-end;\n}",""]),t.exports=e},773:function(t,n,e){"use strict";e.r(n),e(55),e(41),e(61),e(80),e(48),e(81);var s=e(378),i=e(14),r=e(36),a=(e(85),e(60),e(68),e(380)),o=e(558),u=e.n(o),c=e(371);o=e(91);function l(t,n){var e,i=Object.keys(t);return Object.getOwnPropertySymbols&&(e=Object.getOwnPropertySymbols(t),n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.push.apply(i,e)),i}o={name:"blindboxIndex",components:{Header:a.Header},computed:function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){Object(r.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},Object(o.b)(["local"])),data:function(){return{isLoading:!0,listLoading:!1,finished:!1,refreshing:!1,total:20,start:0,limit:20,blindbox_list:[{},{}]}},created:function(){return Object(i.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},beforeMount:function(){return Object(i.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.showLoading(),n.next=3,t.$nextTick();case 3:t.hideLoading(),t.isLoading=!1;case 5:case"end":return n.stop()}}),n)})))()},methods:{getList:function(){var t=arguments,a=this;return Object(i.a)(regeneratorRuntime.mark((function n(){var e,r,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=0<t.length&&void 0!==t[0]?t[0]:1,n.next=3,c.a.mBoxList({start:e,limit:a.limit}).catch(console);case 3:if(i=n.sent,r=i.data,1==i.status)return n.abrupt("return",a.$toast.fail(r));n.next=8;break;case 8:a.total=r.total,i=r.list.map((function(t){return t.bg_icon="url(".concat(t.cover_image,") no-repeat  center center/cover"),t})),a.start=e,a.blindbox_list=1==e?i:[].concat(Object(s.a)(a.blindbox_list),Object(s.a)(i));case 12:case"end":return n.stop()}}),n)})))()},handlerBtn:function(t,n){this.$router.push({path:"/activity/blindbox/detail",query:{id:t.id}})},showLoading:function(){this.Toast=this.$toast.loading({duration:0,forbidClick:!0}),"undefined"!=typeof BitKeepInvoke&&BitKeepInvoke.showLoading()},hideLoading:function(){this.Toast&&this.Toast.clear(),"undefined"!=typeof BitKeepInvoke&&BitKeepInvoke.hideLoading()},back:function(){this.$router.back()},onLoad:function(t){var n=this;return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.refreshing&&(n.blindbox_list=[],n.refreshing=!1),e.next=3,n.getList(t?1:n.start+1);case 3:n.listLoading=!1,n.finished=!0;case 5:case"end":return e.stop()}}),e)})))()},onRefresh:function(){this.finished=!1,this.listLoading=!0,this.onLoad(!0)}},filters:{date:function(t){var n;t=(n=u()(t)).year()==u()().year()?"MM-DD HH:mm:ss":"YYYY-MM-DD HH:mm:ss";return n.format(t)}}},e(666),e=e(79),o=Object(e.a)(o,(function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"blindbox_list"}},[t.isLoading?i("div",{staticClass:"loading"},[i("van-loading",{attrs:{color:"#1989fa"}})],1):i("div",[i("div",{staticClass:"blindbox_list_body"},[i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(n){t.refreshing=n},expression:"refreshing"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.listLoading,callback:function(n){t.listLoading=n},expression:"listLoading"}},t._l(t.blindbox_list,(function(n){return i("div",{key:n.id,on:{click:function(e){return t.handlerBtn(n,0)}}},[i("div",{class:{list_item:!0}},[i("div",{staticClass:"list_item_warpper"},[0!=n.status?i("div",{staticClass:"list_item_invaild"}):t._e(),t._v(" "),i("div",{staticClass:"list_item_pic"},[i("van-image",{attrs:{width:"100%",height:"100%","lazy-load":"",src:n.cover_image}})],1),t._v(" "),i("div",{staticClass:"list_item_cont"},[i("div",{staticClass:"title color_blod van-ellipsis"},[t._v("\n                    "+t._s(n.title)+"\n                  ")]),t._v(" "),i("div",{staticClass:"content"},[t._v("\n                    距离开启盲盒仅差\n                    "),i("span",{staticClass:"color_red"},[t._v(t._s(n.invite-n.already_invite))]),t._v("/"),i("span",{staticClass:"color_blod"},[t._v(t._s(n.invite))]),t._v("\n                    人助力 开启后将获惊喜数字资产\n                  ")]),t._v(" "),i("div",{staticClass:"time van-ellipsis"},[t._v("\n                    有效期至 "+t._s(t._f("date")(n.start_time))+"\n                  ")])]),t._v(" "),i("div",{staticClass:"list_item_btn"},[0==n.status?i("div",{staticClass:"btn",on:{click:function(e){return t.handlerBtn(n,0)}}},[t._v("\n                    去开启\n                  ")]):t._e(),t._v(" "),1==n.status?i("div",{staticClass:"btn",on:{click:function(e){return t.handlerBtn(n,1)}}},[t._v("\n                    成功开启\n                  ")]):t._e(),t._v(" "),2==n.status?i("div",{staticClass:"btn",on:{click:function(e){return t.handlerBtn(n,2)}}},[t._v("\n                    已过期\n                  ")]):t._e()])])])])})),0)],1)],1)])])}),[],!1,null,"66a9f5a1",null),n.default=o.exports}}]);