(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{442:function(t,n,i){t.exports=i.p+"img/Py_bg.e03563f.png"},588:function(t,n,i){var e=i(630);(e="string"==typeof(e=e.__esModule?e.default:e)?[[t.i,e,""]]:e).locals&&(t.exports=e.locals),(0,i(67).default)("290f2d89",e,!0,{sourceMap:!1})},629:function(t,n,i){"use strict";i(588)},630:function(t,n,i){var e=i(66),o=i(174);i=i(259),e=e(!1),i=o(i);e.push([t.i,".Mintpopup[data-v-26f07a4b] {\n  width: 8.4rem;\n  height: 13.65rem;\n  background: #202024;\n  box-sizing: border-box;\n  border: 0.03rem solid #49494D;\n}\n.Mintpopup .Mintlogo[data-v-26f07a4b] {\n  width: 100%;\n  padding-top: 0.53rem;\n}\n.Mintpopup .Mintlogo img[data-v-26f07a4b] {\n  display: block;\n  width: 5.33rem;\n  height: 5.12rem;\n  margin: 0 auto;\n}\n.Mintpopup .PaymentBox[data-v-26f07a4b] {\n  width: 100%;\n}\n.Mintpopup .PaymentBox .title[data-v-26f07a4b] {\n  width: 100%;\n  text-align: center;\n  font-size: 0.37rem;\n  color: #fff;\n  margin-top: 0.53rem;\n  margin-bottom: 0.27rem;\n  font-weight: 400;\n}\n.Mintpopup .PaymentBox .PaymentNum[data-v-26f07a4b] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.Mintpopup .PaymentBox .PaymentNum .subtraction[data-v-26f07a4b] {\n  font-size: 0.48rem;\n  color: #fff;\n  margin-right: 0.27rem;\n  cursor: pointer;\n  font-weight: 800;\n}\n.Mintpopup .PaymentBox .PaymentNum .number[data-v-26f07a4b] {\n  width: 1.07rem;\n  height: 1.07rem;\n  border: 0.03rem solid #49494D;\n  color: #09EFBD;\n  font-size: 0.8rem;\n  margin-right: 0.27rem;\n  text-align: center;\n  line-height: 1.07rem;\n  box-sizing: border-box;\n}\n.Mintpopup .PaymentBox .PaymentNum .Addition[data-v-26f07a4b] {\n  font-size: 0.48rem;\n  color: #fff;\n  cursor: pointer;\n  font-weight: 800;\n}\n.Mintpopup .PaymentBox .PaymentInfo[data-v-26f07a4b] {\n  width: 100%;\n  margin: 1.07rem 0;\n  box-sizing: border-box;\n}\n.Mintpopup .PaymentBox .PaymentInfo .title[data-v-26f07a4b] {\n  width: 100%;\n  font-size: 0.37rem;\n  color: #fff;\n  font-weight: 400;\n  text-align: center;\n}\n.Mintpopup .PaymentBox .PaymentInfo .PaymentContent[data-v-26f07a4b] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.Mintpopup .PaymentBox .PaymentInfo .PaymentContent .TTOMedium[data-v-26f07a4b]:first-child {\n  font-size: 0.64rem;\n  color: #09EFBD;\n  font-weight: 400;\n}\n.Mintpopup .PaymentBox .mintSubmit[data-v-26f07a4b] {\n  width: 5.28rem;\n  height: 1.17rem;\n  line-height: 1.17rem;\n  background: url("+i+");\n  background-size: 100% 100%;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 0.53rem;\n  color: #fff;\n  cursor: pointer;\n}",""]),t.exports=e},732:function(t,n,i){"use strict";i.r(n);var e={name:"Mint",props:{showMint:{type:Boolean,default:!1},MentList:{type:Array,default:function(){return[]}},isWhite:{type:Boolean,default:!1}},data:function(){return{MintNum:1,visables:this.showMint}},watch:{showMint:function(t){this.visables=t}},methods:{subtraction:function(){1<this.MintNum?this.MintNum--:this.$toast(this.$t("polygon.mintAlert"))},Addition:function(){var t=5;this.isWhite&&(t=10),this.MintNum<t-this.MentList.length?this.MintNum++:this.$toast(this.isWhite?this.$t("polygon.whiteAlert1"):this.$t("polygon.whiteAlert2"))},close:function(){this.visables=!1,this.$emit("closeMint",!1),this.MintNum=1},MintToken:function(t){1<=t?this.$emit("closeMint",t):this.$toast.fail(this.$t("polygon.mintAlert"))}},computed:{MATIC:function(){return 100*this.MintNum}}},o=(i(629),i(37));e=Object(o.a)(e,(function(){var t=this,n=t.$createElement;return(n=t._self._c||n)("van-popup",{attrs:{"close-icon-position":"top-right",closeable:"","close-on-click-overlay":!1},on:{"click-close-icon":t.close},model:{value:t.visables,callback:function(n){t.visables=n},expression:"visables"}},[n("div",{staticClass:"Mintpopup"},[n("div",{staticClass:"Mintlogo"},[n("img",{attrs:{src:i(442),alt:""}})]),t._v(" "),n("div",{staticClass:"PaymentBox"},[n("div",{staticClass:"TTORegular title"},[t._v(t._s(t.$t("polygon.mintAmount")))]),t._v(" "),n("div",{staticClass:"PaymentNum"},[n("van-icon",{staticClass:"subtraction",attrs:{name:"minus",size:"18"},on:{click:t.subtraction}}),t._v(" "),n("span",{staticClass:"TTOMedium number"},[t._v(t._s(t.MintNum))]),t._v(" "),n("van-icon",{staticClass:"Addition",attrs:{name:"plus",size:"18"},on:{click:t.Addition}})],1),t._v(" "),n("div",{staticClass:"PaymentInfo"},[n("div",{staticClass:"title TTORegular"},[t._v(t._s(t.$t("polygon.mintPayment")))]),t._v(" "),n("div",{staticClass:"PaymentContent"},[n("span",{staticClass:"TTOMedium"},[t._v(t._s(t.MATIC)+" MATIC")])])]),t._v(" "),n("div",{staticClass:"mintSubmit TTOMedium",on:{click:function(n){return t.MintToken(t.MintNum)}}},[t._v("MINT")])])])])}),[],!1,null,"26f07a4b",null);n.default=e.exports}}]);