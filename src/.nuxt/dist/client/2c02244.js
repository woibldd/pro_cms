(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{592:function(t,n,e){var i=e(639);(i="string"==typeof(i=i.__esModule?i.default:i)?[[t.i,i,""]]:i).locals&&(t.exports=i.locals),(0,e(67).default)("b0c9abf0",i,!0,{sourceMap:!1})},638:function(t,n,e){"use strict";e(592)},639:function(t,n,e){(e=e(66)(!1)).push([t.i,".InvitedBox[data-v-0a4149d6] {\n  width: 8.4rem;\n  background: #202024;\n  box-sizing: border-box;\n  border: 0.03rem solid #49494D;\n}\n.InvitedBox .content[data-v-0a4149d6] {\n  padding: 1.07rem 0.53rem 0.53rem 0.53rem;\n  box-sizing: border-box;\n}\n.InvitedBox .content .title[data-v-0a4149d6] {\n  font-size: 0.43rem;\n  font-weight: 400;\n  color: #fff;\n}\n.InvitedBox .content .title span[data-v-0a4149d6] {\n  font-size: 0.53rem;\n  color: #09EFBD;\n}\n.InvitedBox .content .Invitedlist[data-v-0a4149d6] {\n  width: 100%;\n  height: 12.11rem;\n  overflow: auto;\n  border-top: 0.03rem solid #49494D;\n}\n.InvitedBox .content .Invitedlist .item[data-v-0a4149d6] {\n  font-size: 0.37rem;\n  color: #fff;\n  font-weight: 400;\n  margin-top: 0.53rem;\n}\n.InvitedBox .content .Invitedlist .item .address[data-v-0a4149d6] {\n  word-wrap: break-word;\n  word-break: normal;\n}",""]),t.exports=e},736:function(t,n,e){"use strict";e.r(n),e(257);var i={name:"InvitedCard",props:{showInvitedlist:{type:Boolean,default:!1},inviteAddress:{type:Array,default:function(){return[]}},inviteNum:{type:Number,default:0},luckRate:{type:Number,default:0}},data:function(){return{visables:this.showInvitedlist}},watch:{showInvitedlist:function(t){this.visables=t}},methods:{close:function(){this.$emit("closeInvitedCard",!1)}}};e(638),e=e(37),i=Object(e.a)(i,(function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("van-popup",{attrs:{"close-icon-position":"top-right","close-on-click-overlay":!1,closeable:""},on:{"click-close-icon":t.close},model:{value:t.visables,callback:function(n){t.visables=n},expression:"visables"}},[i("div",{staticClass:"InvitedBox"},[i("div",{staticClass:"content"},[i("div",{staticClass:"title TTORegular"},[t._v(t._s(t.$t("polygon.inviteCount"))+" "),i("span",{staticClass:"TTOMedium"},[t._v(t._s(t.inviteNum))])]),t._v(" "),i("div",{staticClass:"title TTORegular"},[t._v(t._s(t.$t("polygon.inviteTips2"))),i("span",{staticClass:"TTOMedium "},[t._v(t._s(t.luckRate)+"%")])]),t._v(" "),i("div",{staticClass:"Invitedlist TTORegular"},t._l(t.inviteAddress,(function(n,e){return i("div",{key:e,staticClass:"item TTORegular"},[i("div",{staticClass:"TTORegular Invitedlabel"},[t._v("\n            "+t._s(t.$t("polygon.inviteAddress"))+"\n          ")]),t._v(" "),i("div",{staticClass:"address TTORegular"},[t._v("\n            "+t._s(n)+"\n          ")])])})),0)])])])}),[],!1,null,"0a4149d6",null);n.default=i.exports}}]);