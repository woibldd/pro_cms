(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{596:function(e,t,n){var o=n(626);(o="string"==typeof(o=o.__esModule?o.default:o)?[[e.i,o,""]]:o).locals&&(e.exports=o.locals),(0,n(51).default)("53d50b6e",o,!0,{sourceMap:!1})},625:function(e,t,n){"use strict";n(596)},626:function(e,t,n){(n=n(50)(!1)).push([e.i,".AirdropAddressBox[data-v-15a011ee] {\n  width: 8.4rem;\n  background: #202024;\n  box-sizing: border-box;\n  border: 0.03rem solid #49494D;\n}\n.AirdropAddressBox .content[data-v-15a011ee] {\n  padding: 0.53rem 0.27rem 0 0.27rem;\n  box-sizing: border-box;\n}\n.AirdropAddressBox .content .title[data-v-15a011ee] {\n  font-size: 0.37rem;\n  font-weight: 400;\n  color: #fff;\n  text-align: left;\n}\n.AirdropAddressBox .content .title span[data-v-15a011ee] {\n  font-size: 0.53rem;\n  color: #09EFBD;\n}\n.AirdropAddressBox .content .getTime[data-v-15a011ee] {\n  margin: 0.27rem 0;\n  font-size: 0.37rem;\n  font-weight: 400;\n  color: #fff;\n}\n.AirdropAddressBox .content .list[data-v-15a011ee] {\n  width: 100%;\n  height: 12.11rem;\n  overflow: auto;\n}\n.AirdropAddressBox .content .list .Addresslist[data-v-15a011ee] {\n  width: 100%;\n  overflow: auto;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  padding-bottom: 0.53rem;\n}\n.AirdropAddressBox .content .list .Addresslist .item[data-v-15a011ee] {\n  display: block;\n  width: 2.48rem;\n  height: 0.37rem;\n  font-size: 0.29rem;\n  font-weight: 400;\n  color: #fff;\n  box-sizing: border-box;\n  margin: 0.27rem 0 0;\n}",""]),e.exports=n},681:function(e,t,n){"use strict";n.r(t);var o=n(4),r=(n(52),{name:"AirdropAddressCard",props:{showAirdropAddress:{type:Boolean,default:!1},LotteryList:{type:Array,default:function(){return[]}}},data:function(){return{MintNum:0,visables:this.showAirdropAddress}},computed:{showList:function(){for(var e=[],t=[],n=0;n<this.LotteryList.length;n++)t.length<3&&t.push(this.LotteryList[n]),n%3==2&&(e.push(t),t=[]);return e}},watch:{showAirdropAddress:function(e){this.visables=e}},methods:{close:function(){this.$emit("closeAirdropAddressCard",!1)},touchmove:function(e){}},mounted:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}});n(625),n=n(29),r=Object(n.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-popup",{attrs:{"close-icon-position":"top-right","close-on-click-overlay":!1,closeable:""},on:{"click-close-icon":e.close},model:{value:e.visables,callback:function(t){e.visables=t},expression:"visables"}},[n("div",{staticClass:"AirdropAddressBox"},[n("div",{staticClass:"content"},[n("div",{staticClass:"title TTORegular"},[e._v(e._s(e.$t("polygon.airdropTips1"))+" "),n("span",{staticClass:"TTOMedium"},[e._v("BKB"+e._s(e.$t("polygon.airdropTips2")))])]),e._v(" "),n("div",{staticClass:"getTime TTORegular"},[e._v(e._s(e._f("timeFilter")((new Date).getTime()-864e5)))]),e._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"Addresslist",on:{touchmove:function(t){return t.stopPropagation(),e.touchmove.apply(null,arguments)}}},e._l(e.LotteryList,(function(t,o){return n("div",{key:o,staticClass:"item TTORegular"},[e._v(" \n            "+e._s(t)+" \n          ")])})),0)])])])])}),[],!1,null,"15a011ee",null);t.default=r.exports}}]);