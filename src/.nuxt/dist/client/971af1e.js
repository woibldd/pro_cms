(window.webpackJsonp=window.webpackJsonp||[]).push([[24,10,12],{364:function(t,e,n){var i=n(370);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,n(109).default)("640c92ec",i,!0,{sourceMap:!1})},367:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));e=n(18),e=n(93),e=n.n(e);var r=n(0),i=n(92),a=e.a.create({baseURL:"/",timeout:6e4,headers:{token:"",language:"zh",currency:"",brand:"",os:"",package:"",clientversion:"",im:""}});a.interceptors.request.use((function(t){var e,n,i;return r.a.prototype.$store&&(n=(i=(e=r.a.prototype.$store.state).local).UA,i=i.locale,n.isBitKeep?Object.assign(t.headers,e.local.bitkeep,{language:i}):Object.assign(t.headers,{language:i})),t}),(function(t){return Promise.resolve({status:1})})),a.interceptors.response.use((function(t){return t.data}),(function(t){var e="网路开了小差",n=Object(i.b)()||{};e=n.t?n.t("base.networkErro"):e;return Promise.resolve({status:1,data:e})}));var s={mBoxList:function(t){return a.get("user/activity/mBoxList",{params:t,headers:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})},openMBox:function(t){return a.get("user/activity/openMBox",{params:t})},helpMBox:function(t){return a.get("user/activity/helpMBox",{params:t})},mBoxDetail:function(t){return a.get("user/activity/mBoxDetail",{params:t})},getCbkbSwapInfo:function(t){return a.get("user/cloudwallet/getCbkbSwapInfo",{params:t})},swapBkb:function(t){return a.get("user/cloudwallet/swapBkb",{params:t})},getAirDropCount:function(t){return a.post("user/cloudwallet/getAirDropCount",t)},getAirDrop:function(t){return a.post("user/cloudwallet/getAirDrop",t)},miningInfo:function(t){return a.post("mining/info",t)},historyPhase:function(t){return a.post("/mining/historyPhase",t)},receiveAward:function(t){return a.post("/mining/receiveAward",t)}}},369:function(t,e,n){"use strict";n(364)},370:function(t,e,n){(n=n(108)(!1)).push([t.i,".header .header_wapper[data-v-3521874b] {\n  width: 100vw;\n}\n.fixed[data-v-3521874b] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99;\n}",""]),t.exports=n},371:function(t,e,n){"use strict";n.r(e);var i=n(13),r=(n(67),{name:"Header",props:{fixed:{type:Boolean,default:function(){return!0}}},computed:{},data:function(){return{info:{}}},updated:function(){},mounted:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:case"end":return e.stop()}}),e)})))()},methods:{onChange:function(){},onclose:function(){}},filters:{}});n(369),n=n(77),r=Object(n.a)(r,(function(){var t=this.$createElement;return(t=this._self._c||t)("div",{class:{fixed:this.fixed,header:!0},attrs:{id:"Header"}},[t("div",{staticClass:"header_wapper"},[this._t("default")],2)])}),[],!1,null,"3521874b",null);e.default=r.exports},372:function(t,e,n){"use strict";n.r(e),n.d(e,"Header",(function(){return i}));var i=(n=n(371)).default;e.default={Header:n.default}},390:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(130),r=n(168);function a(t){return function(t){if(Array.isArray(t))return Object(i.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},392:function(t,e,n){t.exports=function(){"use strict";var t=6e4,e=36e5,u="millisecond",n="second",r="minute",b="hour",p="day",o="week",c="month",l="quarter",g="year",d="date",f="Invalid Date",s=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},a=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:a,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+a(i,2,"0")+":"+a(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,c),a=n-r<0,s=e.clone().add(i+(a?-1:1),c);return+(-(i+(n-r)/(a?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:g,w:o,d:p,D:d,h:b,m:r,s:n,ms:u,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",y={};y[v]=m;var i=function(t){return t instanceof M},w=function(t,e,n){var i;if(!t)return v;if("string"==typeof t)y[t]&&(i=t),e&&(y[t]=e,i=t);else{var r=t.name;y[r]=t,i=r}return!n&&i&&(v=i),i||!n&&v},x=function(t,e){if(i(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new M(n)},$=_;$.l=w,$.i=i,$.w=function(t,e){return x(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function m(t){this.$L=w(t.locale,null,!0),this.parse(t)}var _=m.prototype;return _.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if($.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(s);if(i){var r=i[2]-1||0,a=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},_.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},_.$utils=function(){return $},_.isValid=function(){return!(this.$d.toString()===f)},_.isSame=function(t,e){var n=x(t);return this.startOf(e)<=n&&n<=this.endOf(e)},_.isAfter=function(t,e){return x(t)<this.startOf(e)},_.isBefore=function(t,e){return this.endOf(e)<x(t)},_.$g=function(t,e,n){return $.u(t)?this[e]:this.set(n,t)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(t,e){var i=this,l=!!$.u(e)||e,f=$.p(t),a=function(t,e){var n=$.w(i.$u?Date.UTC(i.$y,e,t):new Date(i.$y,e,t),i);return l?n:n.endOf(p)},s=function(t,e){return $.w(i.toDate()[t].apply(i.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),i)},h=this.$W,u=this.$M,m=this.$D,_="set"+(this.$u?"UTC":"");switch(f){case g:return l?a(1,0):a(31,11);case c:return l?a(1,u):a(0,u+1);case o:var v=this.$locale().weekStart||0,y=(h<v?h+7:h)-v;return a(l?m-y:m+(6-y),u);case p:case d:return s(_+"Hours",0);case b:return s(_+"Minutes",1);case r:return s(_+"Seconds",2);case n:return s(_+"Milliseconds",3);default:return this.clone()}},_.endOf=function(t){return this.startOf(t,!1)},_.$set=function(t,e){var o,i=$.p(t),l="set"+(this.$u?"UTC":""),a=(o={},o[p]=l+"Date",o[d]=l+"Date",o[c]=l+"Month",o[g]=l+"FullYear",o[b]=l+"Hours",o[r]=l+"Minutes",o[n]=l+"Seconds",o[u]=l+"Milliseconds",o)[i],s=i===p?this.$D+(e-this.$W):e;if(i===c||i===g){var f=this.clone().set(d,1);f.$d[a](s),f.init(),this.$d=f.set(d,Math.min(this.$D,f.daysInMonth())).$d}else a&&this.$d[a](s);return this.init(),this},_.set=function(t,e){return this.clone().$set(t,e)},_.get=function(t){return this[$.p(t)]()},_.add=function(l,d){var f,i=this;l=Number(l);var h=$.p(d),a=function(t){var e=x(i);return $.w(e.date(e.date()+Math.round(t*l)),i)};if(h===c)return this.set(c,this.$M+l);if(h===g)return this.set(g,this.$y+l);if(h===p)return a(1);if(h===o)return a(7);var s=(f={},f[r]=t,f[b]=e,f[n]=1e3,f)[h]||1,m=this.$d.getTime()+l*s;return $.w(m,this)},_.subtract=function(t,e){return this.add(-1*t,e)},_.format=function(t){var e=this;if(!this.isValid())return f;var a=t||"YYYY-MM-DDTHH:mm:ssZ",n=$.z(this),r=this.$locale(),i=this.$H,s=this.$m,o=this.$M,u=r.weekdays,c=r.months,l=function(t,n,r,i){return t&&(t[n]||t(e,a))||r[n].substr(0,i)},d=function(t){return $.s(i%12||12,t,"0")},m=r.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},_={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:$.s(o+1,2,"0"),MMM:l(r.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,u,2),ddd:l(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(i),HH:$.s(i,2,"0"),h:d(1),hh:d(2),a:m(i,s,!0),A:m(i,s,!1),m:String(s),mm:$.s(s,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:n};return a.replace(h,(function(t,e){return e||_[t]||n.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(d,f,h){var i,m=$.p(f),a=x(d),s=(a.utcOffset()-this.utcOffset())*t,_=this-a,u=$.m(this,a);return u=(i={},i[g]=u/12,i[c]=u,i[l]=u/3,i[o]=(_-s)/6048e5,i[p]=(_-s)/864e5,i[b]=_/e,i[r]=_/t,i[n]=_/1e3,i)[m]||_,h?u:$.a(u)},_.daysInMonth=function(){return this.endOf(c).$D},_.$locale=function(){return y[this.$L]},_.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=w(t,e,!0);return i&&(n.$L=i),n},_.clone=function(){return $.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},m}(),O=M.prototype;return x.prototype=O,[["$ms",u],["$s",n],["$m",r],["$H",b],["$W",p],["$M",c],["$y",g],["$D",d]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),x.extend=function(t,e){return t.$i||(t(e,M,x),t.$i=!0),x},x.locale=w,x.isDayjs=i,x.unix=function(t){return x(1e3*t)},x.en=y[v],x.Ls=y,x.p={},x}()},427:function(t,e,n){var i=n(462);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,n(109).default)("a62e19c4",i,!0,{sourceMap:!1})},461:function(t,e,n){"use strict";n(427)},462:function(t,e,n){(n=n(108)(!1)).push([t.i,".loading[data-v-66a9f5a1] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.color_red[data-v-66a9f5a1] {\n  color: #ff255a;\n  font-weight: 600;\n}\n.color_text[data-v-66a9f5a1] {\n  color: #4b5373;\n}\n.color_blod[data-v-66a9f5a1] {\n  color: #080d21;\n}\n.btn[data-v-66a9f5a1] {\n  background: linear-gradient(122.71deg, #74eeff 3.38%, #6f2cff 92.57%),#c4c4c4;\n  border-radius: 2.67rem;\n  height: 0.64rem;\n  width: 1.81rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 2.67rem;\n  font-weight: 500;\n  font-size: 0.32rem;\n  line-height: 0.32rem;\n  color: #ffffff;\n}\n.btn[data-v-66a9f5a1]:active {\n  opacity: 0.8;\n}\n#blindbox_list[data-v-66a9f5a1] {\n  word-break: break-all;\n  background: #3d0b88;\n  min-height: 100vh;\n  box-sizing: border-box;\n  font-style: normal;\n  font-weight: normal;\n  font-family: PingFang SC;\n}\n#blindbox_list .blindbox_list_header[data-v-66a9f5a1] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.59rem 0.4rem;\n  box-sizing: border-box;\n}\n#blindbox_list .blindbox_list_header img[data-v-66a9f5a1] {\n  width: 0.85rem;\n  height: 0.85rem;\n}\n#blindbox_list .blindbox_list_body[data-v-66a9f5a1] {\n  overflow: hidden;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper[data-v-66a9f5a1] {\n  position: relative;\n  overflow: hidden;\n  width: 9.15rem;\n  height: 2.51rem;\n  background: #ffffff;\n  border-radius: 0.27rem;\n  box-sizing: border-box;\n  padding: 0.27rem;\n  margin: 0.27rem 0.43rem;\n  display: flex;\n  justify-content: space-between;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_invaild[data-v-66a9f5a1] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background: #ffffff;\n  opacity: 0.6;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_pic[data-v-66a9f5a1] {\n  height: 1.97rem;\n  width: 1.97rem;\n  border-radius: 0.16rem;\n  overflow: hidden;\n  display: flex;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_pic img[data-v-66a9f5a1] {\n  width: 100%;\n  height: 100%;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont[data-v-66a9f5a1] {\n  flex: 1;\n  height: 0.75rem;\n  width: 4.29rem;\n  color: #7f828f;\n  font-size: 0.32rem;\n  line-height: 0.37rem;\n  margin: 0 0.27rem;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont .title[data-v-66a9f5a1] {\n  margin-top: 0.13rem;\n  font-size: 0.43rem;\n  font-weight: 500;\n  line-height: 0.43rem;\n  letter-spacing: 0;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont .content[data-v-66a9f5a1] {\n  margin: 0.13rem 0;\n  line-height: 0.37rem;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont .time[data-v-66a9f5a1] {\n  font-size: 0.27rem;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_btn[data-v-66a9f5a1] {\n  display: flex;\n  align-items: flex-end;\n}",""]),t.exports=n},530:function(t,e,n){"use strict";n.r(e),n(51),n(34),n(58),n(78),n(42),n(79);var s=n(390),i=n(13),r=n(29),a=(n(82),n(59),n(67),n(372)),o=n(392),u=n.n(o),c=n(367);o=n(91);function l(t,e){var n,i=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)),i}o={name:"blindboxIndex",components:{Header:a.Header},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(o.b)(["local"])),data:function(){return{isLoading:!0,listLoading:!1,finished:!1,refreshing:!1,total:20,start:0,limit:20,blindbox_list:[{},{}]}},created:function(){return Object(i.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},beforeMount:function(){return Object(i.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.showLoading(),e.next=3,t.$nextTick();case 3:t.hideLoading(),t.isLoading=!1;case 5:case"end":return e.stop()}}),e)})))()},methods:{getList:function(){var t=arguments,a=this;return Object(i.a)(regeneratorRuntime.mark((function e(){var n,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=0<t.length&&void 0!==t[0]?t[0]:1,e.next=3,c.a.mBoxList({start:n,limit:a.limit}).catch(console);case 3:if(i=e.sent,r=i.data,1==i.status)return e.abrupt("return",a.$toast.fail(r));e.next=8;break;case 8:a.total=r.total,i=r.list.map((function(t){return t.bg_icon="url(".concat(t.cover_image,") no-repeat  center center/cover"),t})),a.start=n,a.blindbox_list=1==n?i:[].concat(Object(s.a)(a.blindbox_list),Object(s.a)(i));case 12:case"end":return e.stop()}}),e)})))()},handlerBtn:function(t,e){this.$router.push({path:"/activity/blindbox/detail",query:{id:t.id}})},showLoading:function(){this.Toast=this.$toast.loading({duration:0,forbidClick:!0}),"undefined"!=typeof BitKeepInvoke&&BitKeepInvoke.showLoading()},hideLoading:function(){this.Toast&&this.Toast.clear(),"undefined"!=typeof BitKeepInvoke&&BitKeepInvoke.hideLoading()},back:function(){this.$router.back()},onLoad:function(t){var e=this;return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.refreshing&&(e.blindbox_list=[],e.refreshing=!1),n.next=3,e.getList(t?1:e.start+1);case 3:e.listLoading=!1,e.finished=!0;case 5:case"end":return n.stop()}}),n)})))()},onRefresh:function(){this.finished=!1,this.listLoading=!0,this.onLoad(!0)}},filters:{date:function(t){var e;t=(e=u()(t)).year()==u()().year()?"MM-DD HH:mm:ss":"YYYY-MM-DD HH:mm:ss";return e.format(t)}}},n(461),n=n(77),o=Object(n.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"blindbox_list"}},[t.isLoading?i("div",{staticClass:"loading"},[i("van-loading",{attrs:{color:"#1989fa"}})],1):i("div",[i("div",{staticClass:"blindbox_list_body"},[i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.listLoading,callback:function(e){t.listLoading=e},expression:"listLoading"}},t._l(t.blindbox_list,(function(e){return i("div",{key:e.id,on:{click:function(n){return t.handlerBtn(e,0)}}},[i("div",{class:{list_item:!0}},[i("div",{staticClass:"list_item_warpper"},[0!=e.status?i("div",{staticClass:"list_item_invaild"}):t._e(),t._v(" "),i("div",{staticClass:"list_item_pic"},[i("van-image",{attrs:{width:"100%",height:"100%","lazy-load":"",src:e.cover_image}})],1),t._v(" "),i("div",{staticClass:"list_item_cont"},[i("div",{staticClass:"title color_blod van-ellipsis"},[t._v("\n                    "+t._s(e.title)+"\n                  ")]),t._v(" "),i("div",{staticClass:"content"},[t._v("\n                    距离开启盲盒仅差\n                    "),i("span",{staticClass:"color_red"},[t._v(t._s(e.invite-e.already_invite))]),t._v("/"),i("span",{staticClass:"color_blod"},[t._v(t._s(e.invite))]),t._v("\n                    人助力 开启后将获惊喜数字资产\n                  ")]),t._v(" "),i("div",{staticClass:"time van-ellipsis"},[t._v("\n                    有效期至 "+t._s(t._f("date")(e.start_time))+"\n                  ")])]),t._v(" "),i("div",{staticClass:"list_item_btn"},[0==e.status?i("div",{staticClass:"btn",on:{click:function(n){return t.handlerBtn(e,0)}}},[t._v("\n                    去开启\n                  ")]):t._e(),t._v(" "),1==e.status?i("div",{staticClass:"btn",on:{click:function(n){return t.handlerBtn(e,1)}}},[t._v("\n                    成功开启\n                  ")]):t._e(),t._v(" "),2==e.status?i("div",{staticClass:"btn",on:{click:function(n){return t.handlerBtn(e,2)}}},[t._v("\n                    已过期\n                  ")]):t._e()])])])])})),0)],1)],1)])])}),[],!1,null,"66a9f5a1",null),e.default=o.exports}}]);