(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{518:function(t,e,s){},549:function(t,e,s){"use strict";s(518)},586:function(t,e,s){"use strict";s.r(e),s(68),s(42),s(11);var i={name:"Ment",components:{Swiper:(i=s(544)).Swiper,SwiperSlide:i.SwiperSlide},props:{showMent:{type:Boolean,default:!1},MentList:{type:Array,default:function(){return[]}}},data:function(){return{visables:this.showMent,list:this.MentList.map((function(t){return t.selected=!1,t})),selectedList:[],swiperOption:{initialSlide:0,slidesPerView:2.4,direction:"horizontal",loop:!1}}},watch:{showMent:function(t){this.visables=t}},methods:{selected:function(t){this.list=this.list.map((function(e){return e.tokenId==t.tokenId&&(e.selected=!e.selected),e})),this.selectedList=this.list.filter((function(t){return 1==t.selected})).map((function(t){return t.tokenId}))},close:function(){this.$emit("closeMent",!1)},MentToken:function(t){1==this.list.length?(this.selected(this.list[0]),this.$emit("closeMent",this.selectedList)):0<t.length?this.$emit("closeMent",t):this.$toast.fail(this.$t("polygon.mentAlert"))}},computed:{MATIC:function(){return 100*this.selectedList.length}}};s(549),s=s(28),i=Object(s.a)(i,(function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("van-popup",{attrs:{"close-icon-position":"top-right",closeable:"","close-on-click-overlay":!1},on:{"click-close-icon":s.close},model:{value:s.visables,callback:function(t){s.visables=t},expression:"visables"}},[i("div",{staticClass:"Mentpopup"},[i("div",{staticClass:"TTORegular title"},[1<s.list.length?i("div",{staticClass:"title1"},[s._v("\n        "+s._s(s.$t("polygon.meltTitle1"))+"\n        ("+s._s(s.list.filter((function(t){return 1==t.selected})).length)+"/"+s._s(s.list.length)+") \n      ")]):i("div",{staticClass:"title2"},[s._v("\n        "+s._s(s.$t("polygon.meltTitle2"))+"\n      ")])]),s._v(" "),1<s.list.length?i("div",{staticClass:"MentList"},[i("swiper",{staticClass:"swiper-wrapper",attrs:{options:s.swiperOption},on:{mousemove:function(t){return t}}},s._l(s.list,(function(t){return i("swiper-slide",{key:t.tokenId},[i("div",{staticClass:"Mentlogo",class:1==t.selected?"MentlogoActive":"",on:{click:function(e){return s.selected(t)}}},[i("img",{attrs:{src:t.picUrl,alt:""}}),s._v(" "),i("div",{staticClass:"TTORegular tokenId"},[s._v("Token ID: #"+s._s(t.tokenId))])])])})),1)],1):1==s.list.length?i("div",{staticClass:"Mintlogo"},[i("img",{attrs:{src:s.list[0].picUrl,alt:""}}),s._v(" "),i("div",{staticClass:"TTORegular tokenId"},[s._v("Token ID: #"+s._s(s.list[0].tokenId))])]):s._e(),s._v(" "),i("div",{staticClass:"PaymentBox"},[i("div",{staticClass:"PaymentInfo"},[i("div",{staticClass:"title TTORegular"},[s._v(s._s(s.$t("polygon.meltValue")))]),s._v(" "),i("div",{staticClass:"PaymentContent"},[1<s.list.length?i("span",{staticClass:"TTOMedium"},[s._v(s._s(s.MATIC)+" MATIC")]):i("span",{staticClass:"TTOMedium"},[s._v("100 MATIC")])]),s._v(" "),i("div",{staticClass:"PaymentValue"})]),s._v(" "),i("div",{staticClass:"MentSubmit TTOMedium",on:{click:function(t){return s.MentToken(s.selectedList)}}},[s._v("Melt")])])])])}),[],!1,null,"1e41ab22",null);e.default=i.exports}}]);