(window.webpackJsonp=window.webpackJsonp||[]).push([[29,12,14],{371:function(t,n,e){"use strict";e.d(n,"a",(function(){return d})),e(60);n=e(20);var i=e(95),r=(n=e.n(i),e(2)),o=e(94),s=(e(92),function(){for(var t,n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];(t=console).log.apply(t,["bit-activity-request:"].concat(e))}),l=n.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});l.interceptors.request.use((function(t){var n,e,i;return s("requestlog:",t),r.a.prototype.$store&&(e=(i=(n=r.a.prototype.$store.state).local).UA,i=i.locale,e.isBitKeep?Object.assign(t.headers,n.local.bitkeep,{language:i}):Object.assign(t.headers,{language:i})),t}),(function(t){return Promise.resolve({status:1})})),l.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];(t=console).log.apply(t,["bit-activity-response:"].concat(e))}("responselog:",t);var n="网路开了小差";n=(t=Object(o.b)()||{}).t?t.t("base.networkErro"):n;return Promise.resolve({status:1,data:n})}));var d={mBoxList:function(t){return l.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return l.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return l.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return l.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return l.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return l.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return l.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return l.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return l.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return l.post("swap/mining/info",t)},historyPhase:function(t){return l.post("swap/mining/historyPhase",t)},receiveAward:function(t){return l.post("swap/mining/receiveAward",t)},getInviteList:function(t){return l.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return l.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return l.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return l.post("/user/cloudstaking/poolList",t)},myPool:function(t){return l.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return l.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return l.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return l.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return l.post("/user/cloudstaking/getToken",t)},tradingGetList:function(t){return l.post("/tradeCompetition/getList",t)},tradingWaitClaim:function(t){return l.post("/tradeCompetition/waitClaim",t)},tradingClaim:function(t){return l.post("/tradeCompetition/claim",t)},tradingSummary:function(t){return l.post("/tradeCompetition/summary",t)},tradingHistory:function(t){return l.post("/tradeCompetition/history",t)}}},375:function(t,n,e){var i=e(377);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,e(110).default)("640c92ec",i,!0,{sourceMap:!1})},376:function(t,n,e){"use strict";e(375)},377:function(t,n,e){(e=e(109)(!1)).push([t.i,".header .header_wapper[data-v-3521874b] {\n  width: 100vw;\n}\n.fixed[data-v-3521874b] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99;\n}",""]),t.exports=e},378:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e(131),r=e(166);function o(t){return function(t){if(Array.isArray(t))return Object(i.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},379:function(t,n,e){"use strict";e.r(n);var i=e(14),r=(e(68),{name:"Header",props:{fixed:{type:Boolean,default:function(){return!0}}},computed:{},data:function(){return{info:{}}},updated:function(){},mounted:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$nextTick();case 2:case"end":return n.stop()}}),n)})))()},methods:{onChange:function(){},onclose:function(){}},filters:{}});e(376),e=e(79),r=Object(e.a)(r,(function(){var t=this.$createElement;return(t=this._self._c||t)("div",{class:{fixed:this.fixed,header:!0},attrs:{id:"Header"}},[t("div",{staticClass:"header_wapper"},[this._t("default")],2)])}),[],!1,null,"3521874b",null);n.default=r.exports},380:function(t,n,e){"use strict";e.r(n),e.d(n,"Header",(function(){return i}));var i=(e=e(379)).default;n.default={Header:e.default}},558:function(t,n,e){t.exports=function(){"use strict";var t=6e4,u=36e5,n="millisecond",b="second",e="minute",r="hour",p="day",o="week",g="month",l="quarter",d="year",c="date",f="Invalid Date",s=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},_=function(t,n,e){var i=String(t);return!i||i.length>=n?t:""+Array(n+1-i.length).join(e)+t},v={s:_,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),i=Math.floor(e/60),r=e%60;return(n<=0?"+":"-")+_(i,2,"0")+":"+_(r,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var i=12*(e.year()-n.year())+(e.month()-n.month()),r=n.clone().add(i,g),o=e-r<0,s=n.clone().add(i+(o?-1:1),g);return+(-(i+(e-r)/(o?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:g,y:d,w:o,d:p,D:c,h:r,m:e,s:b,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},a="en",x={};x[a]=m;var i=function(t){return t instanceof k},y=function(t,n,e){var i;if(!t)return a;if("string"==typeof t)x[t]&&(i=t),n&&(x[t]=n,i=t);else{var r=t.name;x[r]=t,i=r}return!e&&i&&(a=i),i||!e&&a},w=function(t,n){if(i(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new k(e)},$=v;$.l=y,$.i=i,$.w=function(t,n){return w(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var k=function(){function m(t){this.$L=y(t.locale,null,!0),this.parse(t)}var _=m.prototype;return _.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if($.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var i=n.match(s);if(i){var r=i[2]-1||0,o=(i[7]||"0").substring(0,3);return e?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},_.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},_.$utils=function(){return $},_.isValid=function(){return!(this.$d.toString()===f)},_.isSame=function(t,n){var e=w(t);return this.startOf(n)<=e&&e<=this.endOf(n)},_.isAfter=function(t,n){return w(t)<this.startOf(n)},_.isBefore=function(t,n){return this.endOf(n)<w(t)},_.$g=function(t,n,e){return $.u(t)?this[n]:this.set(e,t)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(t,n){var i=this,l=!!$.u(n)||n,f=$.p(t),h=function(t,n){var e=$.w(i.$u?Date.UTC(i.$y,n,t):new Date(i.$y,n,t),i);return l?e:e.endOf(p)},s=function(t,n){return $.w(i.toDate()[t].apply(i.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(n)),i)},a=this.$W,m=this.$M,_=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case d:return l?h(1,0):h(31,11);case g:return l?h(1,m):h(0,m+1);case o:var u=this.$locale().weekStart||0,x=(a<u?a+7:a)-u;return h(l?_-x:_+(6-x),m);case p:case c:return s(v+"Hours",0);case r:return s(v+"Minutes",1);case e:return s(v+"Seconds",2);case b:return s(v+"Milliseconds",3);default:return this.clone()}},_.endOf=function(t){return this.startOf(t,!1)},_.$set=function(t,o){var l,i=$.p(t),f="set"+(this.$u?"UTC":""),h=(l={},l[p]=f+"Date",l[c]=f+"Date",l[g]=f+"Month",l[d]=f+"FullYear",l[r]=f+"Hours",l[e]=f+"Minutes",l[b]=f+"Seconds",l[n]=f+"Milliseconds",l)[i],s=i===p?this.$D+(o-this.$W):o;if(i===g||i===d){var a=this.clone().set(c,1);a.$d[h](s),a.init(),this.$d=a.set(c,Math.min(this.$D,a.daysInMonth())).$d}else h&&this.$d[h](s);return this.init(),this},_.set=function(t,n){return this.clone().$set(t,n)},_.get=function(t){return this[$.p(t)]()},_.add=function(n,l){var c,i=this;n=Number(n);var f=$.p(l),h=function(t){var e=w(i);return $.w(e.date(e.date()+Math.round(t*n)),i)};if(f===g)return this.set(g,this.$M+n);if(f===d)return this.set(d,this.$y+n);if(f===p)return h(1);if(f===o)return h(7);var s=(c={},c[e]=t,c[r]=u,c[b]=1e3,c)[f]||1,a=this.$d.getTime()+n*s;return $.w(a,this)},_.subtract=function(t,n){return this.add(-1*t,n)},_.format=function(t){var n=this;if(!this.isValid())return f;var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=$.z(this),o=this.$locale(),i=this.$H,s=this.$m,a=this.$M,l=o.weekdays,d=o.months,c=function(t,r,o,i){return t&&(t[r]||t(n,e))||o[r].substr(0,i)},u=function(t){return $.s(i%12||12,t,"0")},m=o.meridiem||function(t,n,e){var i=t<12?"AM":"PM";return e?i.toLowerCase():i},b={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:$.s(a+1,2,"0"),MMM:c(o.monthsShort,a,d,3),MMMM:c(d,a),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:c(o.weekdaysMin,this.$W,l,2),ddd:c(o.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:$.s(i,2,"0"),h:u(1),hh:u(2),a:m(i,s,!0),A:m(i,s,!1),m:String(s),mm:$.s(s,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:r};return e.replace(h,(function(t,n){return n||b[t]||r.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(n,c,f){var i,h=$.p(c),m=w(n),s=(m.utcOffset()-this.utcOffset())*t,a=this-m,_=$.m(this,m);return _=(i={},i[d]=_/12,i[g]=_,i[l]=_/3,i[o]=(a-s)/6048e5,i[p]=(a-s)/864e5,i[r]=a/u,i[e]=a/t,i[b]=a/1e3,i)[h]||a,f?_:$.a(_)},_.daysInMonth=function(){return this.endOf(g).$D},_.$locale=function(){return x[this.$L]},_.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),i=y(t,n,!0);return i&&(e.$L=i),e},_.clone=function(){return $.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},m}(),B=k.prototype;return w.prototype=B,[["$ms",n],["$s",b],["$m",e],["$H",r],["$W",p],["$M",g],["$y",d],["$D",c]].forEach((function(t){B[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),w.extend=function(t,n){return t.$i||(t(n,k,w),t.$i=!0),w},w.locale=y,w.isDayjs=i,w.unix=function(t){return w(1e3*t)},w.en=x[a],w.Ls=x,w.p={},w}()},630:function(t,n,e){var i=e(723);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,e(110).default)("66f6acfe",i,!0,{sourceMap:!1})},722:function(t,n,e){"use strict";e(630)},723:function(t,n,e){var i=e(109),r=e(239);e=e(724),i=i(!1),e=r(e);i.push([t.i,".loading[data-v-d3950842] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.color_red[data-v-d3950842] {\n  color: #ff255a;\n  font-weight: 600;\n}\n.font-18[data-v-d3950842] {\n  font-size: 0.48rem;\n}\n.color_text[data-v-d3950842] {\n  color: #4b5373;\n}\n.color_blod[data-v-d3950842] {\n  color: #080d21;\n}\n.btn[data-v-d3950842] {\n  background: linear-gradient(122.71deg, #74eeff 3.38%, #6f2cff 92.57%),#c4c4c4;\n  border-radius: 2.67rem;\n  height: 0.64rem;\n  width: 1.81rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 2.67rem;\n  font-weight: 500;\n  font-size: 0.32rem;\n  line-height: 0.32rem;\n  color: #ffffff;\n}\n.btn[data-v-d3950842]:active {\n  opacity: 0.8;\n}\n#blindbox_list[data-v-d3950842] {\n  word-break: break-all;\n  background: #3d0b88;\n  min-height: 100vh;\n  box-sizing: border-box;\n  font-style: normal;\n  font-weight: normal;\n  font-family: PingFang SC;\n  overflow: hidden;\n  position: relative;\n}\n#blindbox_list .tag[data-v-d3950842] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n#blindbox_list .tag .btn[data-v-d3950842] {\n  border-radius: 0 0.27rem;\n  font-size: 0.29rem;\n  line-height: 0.29rem;\n  height: 0.64rem;\n  font-weight: 500;\n  width: 2.08rem;\n  white-space: nowrap;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#blindbox_list .tag .btn.open[data-v-d3950842] {\n  background: linear-gradient(274.96deg, #bc0eff .67%, #ff81e2 100%);\n  color: #ffffff;\n}\n#blindbox_list .tag .btn.shared[data-v-d3950842] {\n  color: #1cbdb5;\n  background: linear-gradient(274.96deg, rgba(0,199,215,0.2) .67%, rgba(115,255,221,0.2) 100%);\n}\n#blindbox_list .tag .btn.en[data-v-d3950842] {\n  width: 2.53rem;\n}\n#blindbox_list .blindbox_list_firends[data-v-d3950842] {\n  color: #fff;\n  text-align: center;\n  font-size: 0.37rem;\n  height: 1.17rem;\n  line-height: 1.17rem;\n  font-weight: 500;\n  overflow: hidden;\n  background: linear-gradient(90.35deg, rgba(182,170,255,0.5) 1.43%, rgba(182,170,255,0) 100%);\n}\n#blindbox_list .blindbox_list_firends .van-icon-arrow[data-v-d3950842] {\n  vertical-align: middle;\n  font-weight: 1000;\n  display: inline-block;\n  margin-left: 0.11rem;\n}\n#blindbox_list .blindbox_list_firends .friendIcon[data-v-d3950842] {\n  font-weight: 1000;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 0.11rem;\n  margin-top: -0.05rem;\n}\n#blindbox_list .blindbox_list_firends .friendIcon img[data-v-d3950842] {\n  width: 0.53rem;\n  height: 0.53rem;\n}\n#blindbox_list .blindbox_list_header[data-v-d3950842] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.59rem 0.4rem;\n  box-sizing: border-box;\n}\n#blindbox_list .blindbox_list_header img[data-v-d3950842] {\n  width: 0.85rem;\n  height: 0.85rem;\n}\n#blindbox_list .blindbox_list_body[data-v-d3950842] {\n  overflow: hidden;\n  margin-top: 0.27rem;\n}\n#blindbox_list .blindbox_list_body .blindbox_list_content[data-v-d3950842] {\n  min-height: 100vh;\n}\n#blindbox_list .blindbox_list_body .endBg[data-v-d3950842] {\n  box-sizing: border-box;\n  width: 5.87rem;\n  height: 7.52rem;\n  margin: 4.43rem auto 0;\n  box-shadow: inset 0 0.03rem 0 rgba(255,255,255,0.6);\n  backdrop-filter: blur(0.27rem);\n  border-radius: 0.48rem;\n  background: url("+e+") center center no-repeat;\n  background-size: 100% 100%;\n  text-align: center;\n  overflow: hidden;\n  box-shadow: inset 0 0.03rem 0.05rem rgba(255,255,255,0.6);\n}\n#blindbox_list .blindbox_list_body .endBg .title[data-v-d3950842] {\n  margin-top: 1.73rem;\n  font-size: 0.48rem;\n  line-height: 0.48rem;\n  font-weight: 800;\n}\n#blindbox_list .blindbox_list_body .endBg .subtitle[data-v-d3950842] {\n  padding: 0 0.37rem 0 0.43rem;\n  margin-top: 0.13rem;\n  font-size: 0.37rem;\n  line-height: 0.37rem;\n}\n#blindbox_list .blindbox_list_body .endBg .content[data-v-d3950842] {\n  padding: 0 0.37rem 0 0.43rem;\n  text-align: left;\n  margin-top: 0.4rem;\n  font-size: 0.37rem;\n  line-height: 0.48rem;\n}\n#blindbox_list .blindbox_list_body .endBg.en[data-v-d3950842] {\n  word-break: keep-all;\n}\n#blindbox_list .blindbox_list_body .endBg.en .title[data-v-d3950842] {\n  margin-top: 1.73rem;\n  line-height: 0.53rem;\n  font-size: 0.53rem;\n  text-align: center;\n  padding: 0 0.37rem 0 0.43rem;\n}\n#blindbox_list .blindbox_list_body .endBg.en .subtitle[data-v-d3950842] {\n  margin-top: 0.19rem;\n  font-size: 0.32rem;\n  line-height: 0.32rem;\n}\n#blindbox_list .blindbox_list_body .endBg.en .content[data-v-d3950842] {\n  padding: 0 0.37rem 0 0.43rem;\n  text-align: left;\n  margin-top: 0.53rem;\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n}\n#blindbox_list .blindbox_list_body .list_item .invaild[data-v-d3950842] {\n  opacity: 0.4;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper[data-v-d3950842] {\n  position: relative;\n  overflow: hidden;\n  width: 9.15rem;\n  border-radius: 0.27rem;\n  box-sizing: border-box;\n  padding: 0.13rem;\n  margin: 0.27rem 0.43rem;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 0.27rem;\n  position: relative;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_pic[data-v-d3950842] {\n  height: 2.77rem;\n  width: 1.97rem;\n  border-radius: 0.16rem;\n  overflow: hidden;\n  display: flex;\n  position: relative;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_pic img[data-v-d3950842] {\n  width: 100%;\n  height: 100%;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_pic .setBorderText[data-v-d3950842] {\n  bottom: 0.05rem;\n  position: absolute;\n  color: #fff;\n  font-size: 0.32rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100%;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_pic .setBorderT[data-v-d3950842] {\n  width: 3.12rem;\n  height: 2.67rem;\n  background: linear-gradient(269.79deg, #00C7D7 16.73%, #73FFDD 82.64%);\n  border-radius: 50%;\n  transform: scale(1, 0.5);\n  bottom: -1.44rem;\n  left: -0.56rem;\n  position: absolute;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont[data-v-d3950842] {\n  flex: 1;\n  color: #7f828f;\n  font-size: 0.27rem;\n  line-height: 0.37rem;\n  margin: 0 0.27rem;\n  position: relative;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont .title[data-v-d3950842] {\n  margin-top: 0.13rem;\n  font-size: 0.43rem;\n  font-weight: 500;\n  line-height: 0.48rem;\n  letter-spacing: 0;\n  color: #080d21;\n  word-break: break-word;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont .title.en[data-v-d3950842] {\n  line-height: 0.48rem;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont .content[data-v-d3950842] {\n  margin: 0.13rem 0;\n  line-height: 0.37rem;\n  color: #4b5373;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont .time[data-v-d3950842] {\n  width: 4.29rem;\n  font-size: 0.27rem;\n  line-height: 0.32rem;\n  color: #4b5373;\n  position: absolute;\n  bottom: 0.13rem;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_btn[data-v-d3950842] {\n  position: absolute;\n  bottom: 0.27rem;\n  right: 0.27rem;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .clamp3[data-v-d3950842] {\n  display: -webkit-box;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}",""]),t.exports=i},724:function(t,n,e){t.exports=e.p+"img/endbg@2.35af55c.png"},785:function(t,n,e){"use strict";e.r(n),e(55),e(41),e(61),e(80),e(48),e(81);var a=e(378),i=e(14),r=e(36),o=(e(85),e(60),e(68),e(380)),s=e(558),l=e.n(s),d=e(371);s=e(91);function c(t,n){var e,i=Object.keys(t);return Object.getOwnPropertySymbols&&(e=Object.getOwnPropertySymbols(t),n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.push.apply(i,e)),i}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){Object(r.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}s={name:"mBoxList",components:{Header:o.Header},computed:u(u({},Object(s.b)(["local"])),{},{locale:function(){return this.local.locale},isBitKeep:function(){return this.local.UA.isBitKeep}}),data:function(){return{isLoading:!0,inviteNum:0,helpNum:0,listLoading:!1,finished:!1,refreshing:!1,total:20,start:0,limit:10,blindbox_list:[]}},created:function(){return Object(i.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},beforeMount:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.isBitKeep&&BitKeepInvoke.setTitle(t.$t("ActivityBlindbox.title.myBlindboxText"));case 1:case"end":return n.stop()}}),n)})))()},mounted:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.showLoading(),n.next=3,t.$nextTick();case 3:t.hideLoading(),t.isLoading=!1;case 5:case"end":return n.stop()}}),n)})))()},methods:{getList:function(){var t=arguments,s=this;return Object(i.a)(regeneratorRuntime.mark((function n(){var e,r,i,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=0<t.length&&void 0!==t[0]?t[0]:1,n.next=3,d.a.mBoxList({start:(e-1)*s.limit,limit:s.limit});case 3:if(r=n.sent,i=r.data,1==r.status)return s.finished=!0,n.abrupt("return",s.$toast.fail(i));n.next=9;break;case 9:if(s.total=i.total,s.inviteNum=i.invite_number,s.helpNum=i.help_number,(o=i.list.map((function(t){return t.bg_icon="url(".concat(t.cover_image,") no-repeat  center center/cover"),t})))&&0!=o.length){n.next=16;break}return s.finished=!0,n.abrupt("return");case 16:s.start=e,s.blindbox_list=1==e?o:[].concat(Object(a.a)(s.blindbox_list),Object(a.a)(o));case 18:case"end":return n.stop()}}),n)})))()},goFriendList:function(){this.$router.push({path:"/activity/blindbox/firendList"})},handlerBtn:function(t,n){this.$router.push({path:"/activity/blindbox/detail/".concat(t.id),query:{ownerIdentity:t.ownerIdentity}})},showLoading:function(){this.Toast=this.$toast.loading({duration:0,forbidClick:!0})},hideLoading:function(){this.Toast&&this.Toast.clear()},back:function(){this.$router.back()},onLoad:function(t){var n=this;return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.refreshing&&(n.blindbox_list=[],n.refreshing=!1),e.next=3,n.getList(t?1:n.start+1);case 3:n.listLoading=!1,n.total<=n.blindbox_list.length&&(n.finished=!0);case 5:case"end":return e.stop()}}),e)})))()},onRefresh:function(){this.finished=!1,this.listLoading=!0,this.onLoad(!0)}},filters:{date:function(t){var n;t=(n=l()(t)).year()==l()().year()?"MM-DD HH:mm:ss":"YYYY-MM-DD HH:mm:ss";return n.format(t)}}},e(722),e=e(79),s=Object(e.a)(s,(function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"blindbox_list"}},[t.isLoading?i("div",{staticClass:"loading"},[i("van-loading",{attrs:{color:"#1989fa"}})],1):i("div",[0<t.blindbox_list.length?i("div",{staticClass:"blindbox_list_firends",on:{click:t.goFriendList}},[i("van-icon",{staticClass:"friendIcon",attrs:{name:"https://cdn.bitkeep.vip/u_b_78569440-5721-11ec-84e8-3b41e43dd21d.png",color:"#fff"}}),t._v("\n      "+t._s(t.$t("ActivityBlindbox.ActivityBlindboxList.inviteContent",{invite:this.inviteNum||0,helper:this.helpNum||0}))),i("van-icon",{attrs:{name:"arrow",color:"#fff"}})],1):t._e(),t._v(" "),i("div",{staticClass:"blindbox_list_body"},[i("van-pull-refresh",{staticClass:"blindbox_list_content",on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(n){t.refreshing=n},expression:"refreshing"}},[i("van-list",{attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.listLoading,callback:function(n){t.listLoading=n},expression:"listLoading"}},t._l(t.blindbox_list,(function(n){var e;return i("div",{key:n.id,on:{click:function(e){return t.handlerBtn(n,0)}}},[i("div",{class:{list_item:!0}},[i("div",{class:{list_item_warpper:!0,"radial-gradient":!0,active:!0,invaild:3==n.status}},[i("div",{staticClass:"list_item_pic"},[i("van-image",{attrs:{width:"100%",height:"100%",fit:"cover",src:n.cover_image}}),t._v(" "),1!=n.is_owner?i("div",{staticClass:"setBorderT"}):t._e(),t._v(" "),i("div",{staticClass:"setBorderText"},[1!=n.is_owner?i("span",[t._v(t._s(t.$t("ActivityBlindbox.ActivityBlindboxList.ShareWithMe")))]):t._e()])],1),t._v(" "),i("div",{staticClass:"list_item_cont"},[i("div",{class:((e={title:!0,color_blod:!0,clamp3:!0})[t.locale]=!0,e)},[t._v("\n                    "+t._s(n.title)+"\n                  ")]),t._v(" "),i("div",{staticClass:"content"},[i("span",{domProps:{innerHTML:t._s(t.$t("ActivityBlindbox.ActivityBlindboxList.blindBoxNumText",{surplus:n.already_invite,invite:n.invite-n.already_invite}))}}),t._v(" "),i("div",[t._v("\n                      "+t._s(t.$t("ActivityBlindbox.ActivityBlindboxList.blindBoxSurpriseText"))+"\n                    ")])]),t._v(" "),i("div",{staticClass:"time van-ellipsis"},[i("span",[t._v(t._s(t.$t("ActivityBlindbox.ActivityBlindboxList.ValidUntilText")))]),t._v("\n                    "+t._s(t._f("date")(n.end_time))+"\n                  ")])]),t._v(" "),i("div",{staticClass:"list_item_btn"},[0==n.status?i("div",{staticClass:"btn",on:{click:function(e){return t.handlerBtn(n,0)}}},[t._v("\n                    "+t._s(t.$t("ActivityBlindbox.ActivityBlindboxList.GoShareText"))+"\n                  ")]):t._e(),t._v(" "),1==n.status&&1==n.is_owner?i("div",{staticClass:"btn",on:{click:function(e){return t.handlerBtn(n,1)}}},[t._v("\n                    "+t._s(t.$t("ActivityBlindbox.ActivityBlindboxList.GoOpenText"))+"\n                  ")]):t._e(),t._v(" "),1==n.status&&1!=n.is_owner?i("div",{staticClass:"btn",on:{click:function(e){return t.handlerBtn(n,0)}}},[t._v("\n                    "+t._s(t.$t("ActivityBlindbox.ActivityBlindboxList.GoShareText"))+"\n                  ")]):t._e(),t._v(" "),2==n.status?i("div",{staticClass:"btn",on:{click:function(e){return t.handlerBtn(n,2)}}},[t._v("\n                    "+t._s(t.$t("ActivityBlindbox.ActivityBlindboxList.SuccessfullyOpenedText"))+"\n                  ")]):t._e(),t._v(" "),3==n.status?i("div",{staticClass:"btn",on:{click:function(e){return t.handlerBtn(n,2)}}},[t._v("\n                    "+t._s(t.$t("ActivityBlindbox.ActivityBlindboxList.expiredText"))+"\n                  ")]):t._e()])])])])})),0),t._v(" "),t.listLoading||t.blindbox_list&&0!=t.blindbox_list.length?t._e():i("div",{class:((n={endBg:!0,color_theme:!0})[t.locale]=!0,n)},[i("div",{staticClass:"title"},[t._v("\n            "+t._s(t.$t("ActivityBlindbox.ActivityBlindboxList.end.title"))+"\n          ")]),t._v(" "),i("div",{staticClass:"content",domProps:{innerHTML:t._s(t.$t("ActivityBlindbox.ActivityBlindboxList.end.content"))}})])],1)],1)])])}),[],!1,null,"d3950842",null),n.default=s.exports}}]);