(window.webpackJsonp=window.webpackJsonp||[]).push([[38,14,16],{365:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n(49);e=n(14);var r=n(80),i=(e=n.n(r),n(1)),s=n(79),o=(n(78),function(){for(var t,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];(t=console).log.apply(t,["bit-activity-request:"].concat(n))}),u=e.a.create({baseURL:"https://b1.bitkeep.top",timeout:6e4,headers:{token:"",language:"en",currency:"",brand:"",os:"",package:"",clientVersion:1,im:""}});u.interceptors.request.use((function(t){var e,n,r;return o("requestlog:",t),i.default.prototype.$store&&(n=(r=(e=i.default.prototype.$store.state).local).UA,r=r.locale,n.isBitKeep?Object.assign(t.headers,e.local.bitkeep,{language:r}):Object.assign(t.headers,{language:r})),t}),(function(t){return Promise.resolve({status:1})})),u.interceptors.response.use((function(t){return t.data}),(function(t){!function(){for(var t,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];(t=console).log.apply(t,["bit-activity-response:"].concat(n))}("responselog:",t);var e="网路开了小差";e=(t=Object(s.b)()||{}).t?t.t("base.networkErro"):e;return Promise.resolve({status:1,data:e})}));var c={mBoxList:function(t){return u.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return u.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return u.get("user/activity/helpMBox",{params:t})},userInviteList:function(t){return u.get("user/activity/inviteList",{params:t})},mBoxDetail:function(t){return u.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return u.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return u.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return u.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return u.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return u.post("swap/mining/info",t)},historyPhase:function(t){return u.post("swap/mining/historyPhase",t)},receiveAward:function(t){return u.post("swap/mining/receiveAward",t)},getInviteList:function(t){return u.post("user/friendship/getInviteList",t)},certifyFriendship:function(t){return u.post("user/friendship/certifyFriendship",t)},activityDoneRewardList:function(t){return u.post("swap/mining/activityDoneRewardList",t)},poolList:function(t){return u.post("/user/cloudstaking/poolList",t)},myPool:function(t){return u.post("/user/cloudstaking/myPool",t)},stakeHistory:function(t){return u.post("/user/cloudstaking/stakeHistory",t)},receiveStakingReward:function(t){return u.post("/user/cloudstaking/receiveStakingReward",t)},staking:function(t){return u.post("/user/cloudstaking/staking",t)},handleGetToken:function(t){return u.post("/user/cloudstaking/getToken",t)},tradingGetList:function(t){return u.post("swap/tradeCompetition/getList",t)},tradingWaitClaim:function(t){return u.post("swap/tradeCompetition/waitClaim",t)},tradingClaim:function(t){return u.post("swap/tradeCompetition/claim",t)},tradingSummary:function(t){return u.post("swap/tradeCompetition/summary",t)},tradingHistory:function(t){return u.post("swap/tradeCompetition/history",t)},welfareSignIn:function(t){return u.post("user/welfare/signIn",t)},getRewardDetail:function(t){return u.post("user/welfare/getRewardDetail",t)},getSignInDetailByUser:function(t){return u.post("user/welfare/getSignInDetailByUser",t)},getRewardResult:function(t){return u.post("user/welfare/getRewardResult",t)},pushPapersIn:function(t){return u.post("user/welfare/pushPapersIn",t)},getJoinTeleJob:function(t){return u.post("user/welfare/getJoinTeleJob",t)},getFirstSwapJob:function(t){return u.post("user/welfare/getFirstSwapJob",t)},getFirst50UJob:function(t){return u.post("user/welfare/getFirst50UJob",t)},newUserRewardJobs:function(t){return u.post("user/welfare/newUserRewardJobs",t)},nftMintGetInfo:function(t){return u.post("/operationweb/nftmint/getInfo",t)},nftMintInvite:function(t){return u.post("/operationweb/nftmint/invite",t)},buildNftMintTxs:function(t){return u.post("/operationweb/nftmint/buildNftMintTxs",t)},nftMintGetToken:function(t){return u.post("/operationweb/nftmint/getToken",t)},nftMintLotteryList:function(t){return u.post("/operationweb/nftmint/LotteryList",t)},nftMintbuildNftMeltTxs:function(t){return u.post("/operationweb/nftmint/buildNftMeltTxs",t)},nftMintnftList:function(t){return u.post("/operationweb/nftmint/nftList",t)},nftMintcheckTransaction:function(t){return u.post("/operationweb/nftmint/checkTransaction",t)}}},366:function(t,e,n){},367:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(122),i=n(159);function s(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(i.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},369:function(t,e,n){"use strict";n(366)},370:function(t,e,n){"use strict";n.r(e);var r=n(3),i=(n(41),{name:"Header",props:{fixed:{type:Boolean,default:function(){return!0}}},computed:{},data:function(){return{info:{}}},updated:function(){},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:case"end":return e.stop()}}),e)})))()},methods:{onChange:function(){},onclose:function(){}},filters:{}});n(369),n=n(27),i=Object(n.a)(i,(function(){var t=this.$createElement;return(t=this._self._c||t)("div",{class:{fixed:this.fixed,header:!0},attrs:{id:"Header"}},[t("div",{staticClass:"header_wapper"},[this._t("default")],2)])}),[],!1,null,"3521874b",null);e.default=i.exports},371:function(t,e,n){"use strict";n.r(e),n.d(e,"Header",(function(){return r}));var r=(n=n(370)).default;e.default={Header:n.default}},556:function(t,e,n){t.exports=function(){"use strict";var t=6e4,e=36e5,u="millisecond",n="second",p="minute",g="hour",r="day",o="week",b="month",c="quarter",f="year",l="date",d="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},s=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},w={s:s,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+s(r,2,"0")+":"+s(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,b),s=n-i<0,o=e.clone().add(r+(s?-1:1),b);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:b,y:f,w:o,d:r,D:l,h:g,m:p,s:n,ms:u,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},a="en",y={};y[a]=v;var $=function(t){return t instanceof k},i=function(t,e,n){var r;if(!t)return a;if("string"==typeof t)y[t]&&(r=t),e&&(y[t]=e,r=t);else{var i=t.name;y[i]=t,r=i}return!n&&r&&(a=r),r||!n&&a},_=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new k(n)},M=w;M.l=i,M.i=$,M.w=function(t,e){return _(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var k=function(){function v(t){this.$L=i(t.locale,null,!0),this.parse(t)}var w=v.prototype;return w.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},w.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},w.$utils=function(){return M},w.isValid=function(){return!(this.$d.toString()===d)},w.isSame=function(t,e){var n=_(t);return this.startOf(e)<=n&&n<=this.endOf(e)},w.isAfter=function(t,e){return _(t)<this.startOf(e)},w.isBefore=function(t,e){return this.endOf(e)<_(t)},w.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},w.unix=function(){return Math.floor(this.valueOf()/1e3)},w.valueOf=function(){return this.$d.getTime()},w.startOf=function(t,e){var c=this,i=!!M.u(e)||e,d=M.p(t),s=function(t,e){var n=M.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return i?n:n.endOf(r)},h=function(t,e){return M.w(c.toDate()[t].apply(c.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},a=this.$W,u=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case f:return i?s(1,0):s(31,11);case b:return i?s(1,u):s(0,u+1);case o:var w=this.$locale().weekStart||0,y=(a<w?a+7:a)-w;return s(i?m-y:m+(6-y),u);case r:case l:return h(v+"Hours",0);case g:return h(v+"Minutes",1);case p:return h(v+"Seconds",2);case n:return h(v+"Milliseconds",3);default:return this.clone()}},w.endOf=function(t){return this.startOf(t,!1)},w.$set=function(t,e){var o,c=M.p(t),i="set"+(this.$u?"UTC":""),s=(o={},o[r]=i+"Date",o[l]=i+"Date",o[b]=i+"Month",o[f]=i+"FullYear",o[g]=i+"Hours",o[p]=i+"Minutes",o[n]=i+"Seconds",o[u]=i+"Milliseconds",o)[c],d=c===r?this.$D+(e-this.$W):e;if(c===b||c===f){var a=this.clone().set(l,1);a.$d[s](d),a.init(),this.$d=a.set(l,Math.min(this.$D,a.daysInMonth())).$d}else s&&this.$d[s](d);return this.init(),this},w.set=function(t,e){return this.clone().$set(t,e)},w.get=function(t){return this[M.p(t)]()},w.add=function(c,l){var d,h=this;c=Number(c);var i=M.p(l),s=function(t){var e=_(h);return M.w(e.date(e.date()+Math.round(t*c)),h)};if(i===b)return this.set(b,this.$M+c);if(i===f)return this.set(f,this.$y+c);if(i===r)return s(1);if(i===o)return s(7);var m=(d={},d[p]=t,d[g]=e,d[n]=1e3,d)[i]||1,a=this.$d.getTime()+c*m;return M.w(a,this)},w.subtract=function(t,e){return this.add(-1*t,e)},w.format=function(t){var i=this;if(!this.isValid())return d;var s=t||"YYYY-MM-DDTHH:mm:ssZ",e=M.z(this),n=this.$locale(),r=this.$H,o=this.$m,a=this.$M,u=n.weekdays,c=n.months,f=function(t,e,n,r){return t&&(t[e]||t(i,s))||n[e].substr(0,r)},l=function(t){return M.s(r%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:M.s(a+1,2,"0"),MMM:f(n.monthsShort,a,c,3),MMMM:f(c,a),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:f(n.weekdaysMin,this.$W,u,2),ddd:f(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(r),HH:M.s(r,2,"0"),h:l(1),hh:l(2),a:h(r,o,!0),A:h(r,o,!1),m:String(o),mm:M.s(o,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:e};return s.replace(m,(function(t,n){return n||v[t]||e.replace(":","")}))},w.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},w.diff=function(l,d,h){var m,i=M.p(d),s=_(l),v=(s.utcOffset()-this.utcOffset())*t,a=this-s,u=M.m(this,s);return u=(m={},m[f]=u/12,m[b]=u,m[c]=u/3,m[o]=(a-v)/6048e5,m[r]=(a-v)/864e5,m[g]=a/e,m[p]=a/t,m[n]=a/1e3,m)[i]||a,h?u:M.a(u)},w.daysInMonth=function(){return this.endOf(b).$D},w.$locale=function(){return y[this.$L]},w.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=i(t,e,!0);return r&&(n.$L=r),n},w.clone=function(){return M.w(this.$d,this)},w.toDate=function(){return new Date(this.valueOf())},w.toJSON=function(){return this.isValid()?this.toISOString():null},w.toISOString=function(){return this.$d.toISOString()},w.toString=function(){return this.$d.toUTCString()},v}(),D=k.prototype;return _.prototype=D,[["$ms",u],["$s",n],["$m",p],["$H",g],["$W",r],["$M",b],["$y",f],["$D",l]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),_.extend=function(t,e){return t.$i||(t(e,k,_),t.$i=!0),_},_.locale=i,_.isDayjs=$,_.unix=function(t){return _(1e3*t)},_.en=y[a],_.Ls=y,_.p={},_}()},610:function(t,e,n){},672:function(t,e,n){"use strict";n(610)},752:function(t,e,n){"use strict";n.r(e),n(43),n(31),n(42),n(66),n(37),n(67);var r=n(367),o=n(3),i=n(28),s=(n(69),n(49),n(41),n(371)),a=n(556),u=n.n(a),c=n(365);a=n(77);function f(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)),r}a={name:"blindboxIndex",components:{Header:s.Header},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(a.b)(["local"])),data:function(){return{isLoading:!0,listLoading:!1,finished:!1,refreshing:!1,total:20,start:0,limit:20,blindbox_list:[{},{}]}},created:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},beforeMount:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.showLoading(),e.next=3,t.$nextTick();case 3:t.hideLoading(),t.isLoading=!1;case 5:case"end":return e.stop()}}),e)})))()},methods:{getList:function(){var i=arguments,s=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var e,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=0<i.length&&void 0!==i[0]?i[0]:1,t.next=3,c.a.mBoxList({start:e,limit:s.limit}).catch(console);case 3:if(o=t.sent,n=o.data,1==o.status)return t.abrupt("return",s.$toast.fail(n));t.next=8;break;case 8:s.total=n.total,o=n.list.map((function(t){return t.bg_icon="url(".concat(t.cover_image,") no-repeat  center center/cover"),t})),s.start=e,s.blindbox_list=1==e?o:[].concat(Object(r.a)(s.blindbox_list),Object(r.a)(o));case 12:case"end":return t.stop()}}),t)})))()},handlerBtn:function(t,e){this.$router.push({path:"/activity/blindbox/detail",query:{id:t.id}})},showLoading:function(){this.Toast=this.$toast.loading({duration:0,forbidClick:!0}),"undefined"!=typeof BitKeepInvoke&&BitKeepInvoke.showLoading()},hideLoading:function(){this.Toast&&this.Toast.clear(),"undefined"!=typeof BitKeepInvoke&&BitKeepInvoke.hideLoading()},back:function(){this.$router.back()},onLoad:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.refreshing&&(e.blindbox_list=[],e.refreshing=!1),n.next=3,e.getList(t?1:e.start+1);case 3:e.listLoading=!1,e.finished=!0;case 5:case"end":return n.stop()}}),n)})))()},onRefresh:function(){this.finished=!1,this.listLoading=!0,this.onLoad(!0)}},filters:{date:function(t){var e;t=(e=u()(t)).year()==u()().year()?"MM-DD HH:mm:ss":"YYYY-MM-DD HH:mm:ss";return e.format(t)}}},n(672),n=n(27),a=Object(n.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"blindbox_list"}},[t.isLoading?n("div",{staticClass:"loading"},[n("van-loading",{attrs:{color:"#7524f9"}})],1):n("div",[n("div",{staticClass:"blindbox_list_body"},[n("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.listLoading,callback:function(e){t.listLoading=e},expression:"listLoading"}},t._l(t.blindbox_list,(function(e){return n("div",{key:e.id,on:{click:function(n){return t.handlerBtn(e,0)}}},[n("div",{class:{list_item:!0}},[n("div",{staticClass:"list_item_warpper"},[0!=e.status?n("div",{staticClass:"list_item_invaild"}):t._e(),t._v(" "),n("div",{staticClass:"list_item_pic"},[n("van-image",{attrs:{width:"100%",height:"100%","lazy-load":"",src:e.cover_image}})],1),t._v(" "),n("div",{staticClass:"list_item_cont"},[n("div",{staticClass:"title color_blod van-ellipsis"},[t._v("\n                    "+t._s(e.title)+"\n                  ")]),t._v(" "),n("div",{staticClass:"content"},[t._v("\n                    距离开启盲盒仅差\n                    "),n("span",{staticClass:"color_red"},[t._v(t._s(e.invite-e.already_invite))]),t._v("/"),n("span",{staticClass:"color_blod"},[t._v(t._s(e.invite))]),t._v("\n                    人助力 开启后将获惊喜数字资产\n                  ")]),t._v(" "),n("div",{staticClass:"time van-ellipsis"},[t._v("\n                    有效期至 "+t._s(t._f("date")(e.start_time))+"\n                  ")])]),t._v(" "),n("div",{staticClass:"list_item_btn"},[0==e.status?n("div",{staticClass:"btn",on:{click:function(n){return t.handlerBtn(e,0)}}},[t._v("\n                    去开启\n                  ")]):t._e(),t._v(" "),1==e.status?n("div",{staticClass:"btn",on:{click:function(n){return t.handlerBtn(e,1)}}},[t._v("\n                    成功开启\n                  ")]):t._e(),t._v(" "),2==e.status?n("div",{staticClass:"btn",on:{click:function(n){return t.handlerBtn(e,2)}}},[t._v("\n                    已过期\n                  ")]):t._e()])])])])})),0)],1)],1)])])}),[],!1,null,"37f1a7b2",null),e.default=a.exports}}]);