(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("56d7")},"0403":function(e,t,n){"use strict";n("e845")},"127b":function(e,t,n){},"542a":function(e,t,n){n("ac1f"),n("466d"),n("b680"),function(e,t){var n,i=e.document,a=i.documentElement,r=i.querySelector('meta[name="viewport"]'),o=i.querySelector('meta[name="flexible"]'),s=0,c=0,u=t.flexible||(t.flexible={});if(r){console.warn("将根据已有的meta标签来设置缩放比例");var l=r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);l&&(c=parseFloat(l[1]),s=parseInt(1/c))}else if(o){var d=o.getAttribute("content");if(d){var m=d.match(/initial\-dpr=([\d\.]+)/),f=d.match(/maximum\-dpr=([\d\.]+)/);m&&(s=parseFloat(m[1]),c=parseFloat((1/s).toFixed(2))),f&&(s=parseFloat(f[1]),c=parseFloat((1/s).toFixed(2)))}}if(!s&&!c){e.navigator.appVersion.match(/android/gi);var p=e.navigator.appVersion.match(/iphone/gi),v=e.devicePixelRatio;s=p?v>=3&&(!s||s>=3)?3:v>=2&&(!s||s>=2)?2:1:1,c=1/s}if(a.setAttribute("data-dpr",s),!r)if(r=i.createElement("meta"),r.setAttribute("name","viewport"),r.setAttribute("content","initial-scale="+c+", maximum-scale="+c+", minimum-scale="+c+", user-scalable=no"),a.firstElementChild)a.firstElementChild.appendChild(r);else{var w=i.createElement("div");w.appendChild(r),i.write(w.innerHTML)}function h(){var t=a.getBoundingClientRect().width;t/s>540&&(t=540*s);var n=t/10;a.style.fontSize=n+"px",u.rem=e.rem=n}e.addEventListener("resize",(function(){clearTimeout(n),n=setTimeout(h,300)}),!1),e.addEventListener("pageshow",(function(e){e.persisted&&(clearTimeout(n),n=setTimeout(h,300))}),!1),"complete"===i.readyState?i.body.style.fontSize=12*s+"px":i.addEventListener("DOMContentLoaded",(function(e){i.body.style.fontSize=12*s+"px"}),!1),h(),u.dpr=e.dpr=s,u.refreshRem=h,u.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"===typeof e&&e.match(/rem$/)&&(t+="px"),t},u.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"===typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window["lib"]||(window["lib"]={}))},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("542a");var i=n("ba4c"),a=n.n(i),r=(n("159b"),n("b0c0"),n("e41f")),o=n("2241"),s=n("d399"),c=n("ad06"),u=n("44bf"),l=n("543e"),d=n("343b"),m=n("f0ca"),f=n("28a2"),p=(n("160b"),n("c2d8"),n("d738"),n("c59a"),n("e2ab"),n("b657"),n("1279"),n("15f8"),n("9b0f"),[r["a"],o["a"],s["a"],c["a"],u["a"],l["a"],d["a"],m["a"],f["a"]]);function v(e){p.forEach((function(t){console.log({item:t}),t.install?e.use(t):t.name&&e.component(t.name,t)}))}"undefined"!==typeof window&&window.Vue&&v(window.Vue);var w={install:v},h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view")],1)],1)},b=[],g=n("2877"),_={},x=Object(g["a"])(_,h,b,!1,null,null,null),y=x.exports,C=n("8c4f"),$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"article"}},[n("div",{staticClass:"header"},[n("div",{staticClass:"title"},[e._v(" "+e._s(e.info.title)+" ")]),n("div",{staticClass:"sub"},[n("span",[e._v("来源：")]),n("span",{staticClass:"username"},[e._v(e._s(e.info.user_name))]),n("span",[e._v(e._s(e._f("filterDate")(e.info.create_time)))])])]),n("div",{staticClass:"content",domProps:{innerHTML:e._s(e.info.content)}}),n("van-image-preview",{attrs:{"close-on-popstate":"",closeable:"","start-position":e.current,images:e.images},on:{change:e.onChange,onclose:e.onclose},model:{value:e.showPreview,callback:function(t){e.showPreview=t},expression:"showPreview"}})],1)},E=[],A=n("1da1"),k=(n("96cf"),n("4de4"),n("d81d"),n("a630"),n("3ca3"),n("a9e3"),n("d3b7"),n("bc3a")),D=n.n(k);console.log("_____","/");var P=D.a.create({baseURL:"/"});P.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.resolve({status:1,data:"网路开了小差"})}));var T={getDetails:function(e){return P.get("/article/detail",{params:e})},line_list:function(e){return P.post("api/line/list",e)},line_feedback:function(e){return P.post("api/line/feedback",e)}},L={name:"Home",data:function(){new Date;return{showPreview:!1,images:[],current:0,info:{}}},computed:{id:function(){return this.$route.query.id}},mounted:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){var n,i,a,r,o,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$toast.loading({duration:0}),i=e.$route.params.id||e.$route.query.id,t.next=4,T.getDetails({id:i});case 4:return a=t.sent,r=a.status,o=a.data,n.clear(),0==r?(e.info=o,document.title=e.info.title):e.$toast(o),t.next=10,e.$nextTick();case 10:s=e,c=document.getElementById("article").getElementsByTagName("img"),e.images=Array.from(c).map((function(e,t){return e.setAttribute("show_index",t),e.onclick=function(){s.showPreview=!0,s.current=Number(this.getAttribute("show_index")||0)},e.getAttribute("src")||e.getAttribute("href")})).filter((function(e){return e}));case 13:case"end":return t.stop()}}),t)})))()},methods:{onChange:function(){},onclose:function(){console.log(arguments)}},filters:{filterDate:function(e){return new Date(e||new Date).toLocaleString()}}},F=L,R=(n("5bb1"),Object(g["a"])(F,$,E,!1,null,"ec965532",null)),S=R.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"article"}},[n("div",{staticClass:"header"},[n("div",{staticClass:"title"},[e._v(" "+e._s(e.info.title)+" ")]),n("div",{staticClass:"sub"},[n("span",[e._v("来源：")]),n("span",{staticClass:"username"},[e._v(e._s(e.info.user_name))]),n("span",[e._v(e._s(e._f("filterDate")(e.info.create_time)))])])]),n("div",{staticClass:"content",domProps:{innerHTML:e._s(e.info.content)}}),n("van-image-preview",{attrs:{"close-on-popstate":"",closeable:"","start-position":e.current,images:e.images},on:{change:e.onChange,onclose:e.onclose},model:{value:e.showPreview,callback:function(t){e.showPreview=t},expression:"showPreview"}})],1)},O=[],j={name:"Home",data:function(){new Date;return{showPreview:!1,images:[],current:0,info:{}}},computed:{id:function(){return this.$route.query.id}},mounted:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){var n,i,a,r,o,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$toast.loading({duration:0}),i=e.$route.params.id||e.$route.query.id,t.next=4,T.getDetails({id:i});case 4:return a=t.sent,r=a.status,o=a.data,n.clear(),0==r?(e.info=o,document.title=e.info.title):e.$toast(o),t.next=10,e.$nextTick();case 10:s=e,c=document.getElementById("article").getElementsByTagName("img"),e.images=Array.from(c).map((function(e,t){return e.setAttribute("show_index",t),e.onclick=function(){s.showPreview=!0,s.current=Number(this.getAttribute("show_index")||0)},e.getAttribute("src")||e.getAttribute("href")})).filter((function(e){return e}));case 13:case"end":return t.stop()}}),t)})))()},methods:{onChange:function(){},onclose:function(){console.log(arguments)}},filters:{filterDate:function(e){return new Date(e||new Date).toLocaleString()}}},B=j,H=(n("0403"),Object(g["a"])(B,q,O,!1,null,"53d73f99",null)),z=H.exports;a.a.use(C["a"]);var M=[{path:"/:id",name:"home",component:z,meta:{title:""}},{path:"/article/detail/:id",name:"detail",meta:{title:""},component:S},{path:"*",redirect:{name:"detail"}}],N=new C["a"]({base:"/",routes:M});N.beforeEach((function(e,t,n){n()}));var V=N;n("f70e");a.a.use(w),a.a.config.productionTip=!1,new a.a({router:V,render:function(e){return e(y)}}).$mount("#app")},"5bb1":function(e,t,n){"use strict";n("127b")},e845:function(e,t,n){},f70e:function(e,t,n){}},[[0,"runtime","chunk-libs"]]]);