(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{567:function(s,t,i){},603:function(s,t,i){"use strict";i(567)},687:function(s,t,i){"use strict";i.r(t);var e={name:"WhitelistCard",props:{showWhitelist:{type:Boolean,default:!1}},data:function(){return{MintNum:0,visables:this.showWhitelist}},watch:{showWhitelist:function(s){this.visables=s}},methods:{close:function(){this.$emit("closeWhitelistcard",!1)}}};i(603),i=i(37),e=Object(i.a)(e,(function(){var t=this,s=t.$createElement;return(s=t._self._c||s)("van-popup",{attrs:{"close-icon-position":"top-right",closeable:"","close-on-click-overlay":!1},on:{"click-close-icon":t.close},model:{value:t.visables,callback:function(s){t.visables=s},expression:"visables"}},[s("div",{staticClass:"WhitelistBox"},[s("div",{staticClass:"content TTORegular"},[s("h1",{staticClass:"TTORegular title1"},[t._v(t._s(t.$t("polygon.whiteTitle")))]),t._v(" "),s("div",{staticClass:"TTORegular"},[t._v(t._s(t.$t("polygon.whiteTips1")))]),t._v(" "),s("div",{staticClass:"TTORegular"},[t._v(t._s(t.$t("polygon.whiteTips2")))]),t._v(" "),s("div",{staticClass:"TTORegular"},[t._v(t._s(t.$t("polygon.whiteTips3")))]),t._v(" "),s("div",{staticClass:"TTORegular"},[t._v(t._s(t.$t("polygon.whiteTips4")))]),t._v(" "),s("h1",{staticClass:"TTORegular title2"},[t._v(t._s(t.$t("polygon.whiteTips9")))]),t._v(" "),s("div",{staticClass:"TTORegular"},[t._v(t._s(t.$t("polygon.whiteTips5")))]),t._v(" "),s("div",{staticClass:"TTORegular"},[t._v(t._s(t.$t("polygon.whiteTips6")))])])])])}),[],!1,null,"b5b92e76",null);t.default=e.exports}}]);