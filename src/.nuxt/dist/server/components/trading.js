exports.ids = [10];
exports.modules = {

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/trading/index.vue?vue&type=template&id=0ed601e4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.tradingList && _vm.tradingList.length>0)?_vm._ssrNode("<div data-v-0ed601e4>","</div>",_vm._l((_vm.tradingList),function(item,index){return _vm._ssrNode("<div class=\"trading-wrap-box-pool colorBackground1\" data-v-0ed601e4>","</div>",[_vm._ssrNode("<div class=\"trading-wrap-box-pool-title\" data-v-0ed601e4>","</div>",[_vm._ssrNode(((item.fromIcon)?("<img"+(_vm._ssrAttr("src",item.fromIcon))+" alt class=\"bigImg colorBackground0\" data-v-0ed601e4>"):("<div class=\"noImg colorBackground2 noImgOne textSecond3 setFontFamily\" data-v-0ed601e4>"+_vm._ssrEscape("\n          "+_vm._s(item.fromSymbol.length> 4 ? item.fromSymbol.substring(0,4).toUpperCase(): item.fromSymbol.toUpperCase())+"\n        ")+"</div>"))+" "+((item.toIcon)?("<img"+(_vm._ssrAttr("src",item.toIcon))+" alt class=\"smallImg colorBackground0\" data-v-0ed601e4>"):("<div class=\"noImg noImgTwo colorBackground2 textSecond3 setFontFamily\" data-v-0ed601e4>"+_vm._ssrEscape("\n          "+_vm._s(item.toSymbol.length> 4 ? item.toSymbol.substring(0,4).toUpperCase(): item.toSymbol.toUpperCase())+"\n          ")+"</div>"))+" "),_vm._ssrNode("<div class=\"trading-wrap-box-pool-title-flex\" data-v-0ed601e4>","</div>",[_vm._ssrNode("<div class=\"trading-wrap-box-pool-title-left\" data-v-0ed601e4><div class=\"textPrimary0\" data-v-0ed601e4>"+_vm._ssrEscape(_vm._s(item.fromSymbol.toUpperCase())+"/"+_vm._s(item.toSymbol .toUpperCase()))+"</div> <div class=\"textSecond3\" data-v-0ed601e4>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.Chain')))+"</div></div> "),(!_vm.finished && _vm.activeType != 2)?_vm._ssrNode("<div class=\"trading-wrap-box-pool-title-right\" data-v-0ed601e4>","</div>",[_vm._ssrNode(((_vm.activeType == 0)?("<div class=\"textSecond3\" data-v-0ed601e4>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.Ending')))+"</div>"):"<!---->")+" "+((_vm.activeType == 1)?("<div class=\"textSecond3\" data-v-0ed601e4>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.Start')))+"</div>"):"<!---->")+" "),(item.countdown > 0)?_vm._ssrNode("<div data-v-0ed601e4>","</div>",[_c('van-count-down',{staticClass:"textPrimary0 setFontFamily",attrs:{"time":item.countdown,"format":_vm.formatEn}})],1):_vm._ssrNode(("<div class=\"textPrimary0\" data-v-0ed601e4>--</div>"))],2):(_vm.finished)?_vm._ssrNode(("<div class=\"trading-wrap-one-header-about colorSecond08 colorSecond18\" data-v-0ed601e4><span data-v-0ed601e4>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.finished')))+"</span></div>")):_vm._ssrNode(("<div data-v-0ed601e4></div>"))],2)],2),_vm._ssrNode(" <div class=\"trading-wrap-box-pool-content textSecond2\" data-v-0ed601e4><div class=\"trading-wrap-line colorLine\" data-v-0ed601e4></div> <div class=\"trading-wrap-box-pool-flex\" data-v-0ed601e4><div class=\"trading-wrap-box-pool-left\" data-v-0ed601e4><div class=\"textSecond3\" data-v-0ed601e4>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.Time')))+"</div> <div class=\"textSecond3\" data-v-0ed601e4>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.Reward')))+"</div></div> <div class=\"trading-wrap-box-pool-right\" data-v-0ed601e4><div class=\"textSecond2 setFontFamily\" data-v-0ed601e4>"+_vm._ssrEscape("\n              "+_vm._s(item.startTime)+" — "+_vm._s(item.endTime)+" (GMT+8)\n            ")+"</div> <div class=\"setFontFamily textSecond2\" data-v-0ed601e4><span class=\"colorPrimary\" data-v-0ed601e4>"+_vm._ssrEscape(_vm._s(item.rate)+"x")+"</span>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('trading.in'))+" BKB\n            ")+"</div></div></div> <div class=\"trading-wrap-line colorLine setMargin\" data-v-0ed601e4></div> "+((!_vm.finished && _vm.activeType == 0)?("<div class=\"trading-wrap-box-pool-flex\" data-v-0ed601e4><div class=\"trading-wrap-box-pool-left\" data-v-0ed601e4><div class=\"textSecond3\" data-v-0ed601e4>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.TodayTradingValue')))+"</div> <div class=\"textPrimary0 setFontFamily setFont16\" data-v-0ed601e4>"+_vm._ssrEscape("\n              $"+_vm._s(_vm.milliFormat(item.allTradingVolumeToday))+"\n            ")+"</div></div> <div class=\"trading-wrap-box-pool-right\" data-v-0ed601e4><div class=\"textSecond3\" data-v-0ed601e4>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.TodayTradingReward')))+"</div> <div class=\"setFontFamily colorPrimary setFont16\" data-v-0ed601e4>"+_vm._ssrEscape("\n              +"+_vm._s(_vm.milliFormat(item.rewardToday))+" BKB\n            ")+"</div></div></div>"):"<!---->")+" "+((_vm.activeType != 1)?("<div class=\"trading-wrap-box-pool-flex\" data-v-0ed601e4><div class=\"trading-wrap-box-pool-left\" data-v-0ed601e4><div class=\"textSecond3\" data-v-0ed601e4>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.YourTradingValue')))+"</div> <div class=\"textPrimary0 setFontFamily setFont16\" data-v-0ed601e4>"+_vm._ssrEscape("\n              $"+_vm._s(_vm.milliFormat(item.allTradingVolume))+"\n            ")+"</div></div> <div class=\"trading-wrap-box-pool-right\" data-v-0ed601e4><div class=\"textSecond3\" data-v-0ed601e4>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.YourTradingReward')))+"</div> <div class=\"setFontFamily colorPrimary setFont16\" data-v-0ed601e4>"+_vm._ssrEscape("\n              +"+_vm._s(_vm.milliFormat(item.reward))+" BKB\n            ")+"</div></div></div>"):"<!---->")+" "+((!_vm.finished && _vm.activeType == 0)?("<div class=\"trading-wrap-box-pool-stake colorwhite colorBackgroundPrimary\" data-v-0ed601e4>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("trading.swapNow"))+"\n        ")+"</div>"):(!_vm.finished && _vm.activeType == 1)?("<div class=\"trading-wrap-box-pool-stake textSecond3 colorBackground2\" data-v-0ed601e4>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("trading.ComingSoon"))+"\n        ")+"</div>"):(!_vm.finished && _vm.activeType == 2)?("<div class=\"trading-wrap-box-pool-stake textSecond3 colorBackground2\" data-v-0ed601e4>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("trading.finished"))+"\n        ")+"</div>"):"<!---->")+"</div>")],2)}),0):_vm._ssrNode(("<div class=\"noData\" data-v-0ed601e4><img src=\"https://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png\" alt data-v-0ed601e4> <p class=\"textSecond3\" data-v-0ed601e4>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.noData')))+"</p></div>"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/trading/index.vue?vue&type=template&id=0ed601e4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/trading/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var tradingvue_type_script_lang_js_ = ({
  data() {
    return {
      formatEn: "DDd HHh mmm sss"
    };
  },

  props: {
    finished: {
      type: Boolean,
      default: false
    },
    tradingList: {
      type: Array,
      default: () => {}
    },
    activeType: {
      type: Number,
      default: 0
    }
  },
  methods: {
    swap(swapNow) {
      this.$emit('swap', swapNow);
    },

    milliFormat(num) {
      return num && num.toString().replace(/^\d+/g, m => m.replace(/(?=(?!^)(\d{3})+$)/g, ","));
    }

  }
});
// CONCATENATED MODULE: ./components/trading/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_tradingvue_type_script_lang_js_ = (tradingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/trading/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(96)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_tradingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0ed601e4",
  "4fbef3ec"
  
)

/* harmony default export */ var trading = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("810caffe", content, true, context)
};

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0ed601e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0ed601e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0ed601e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0ed601e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0ed601e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-0ed601e4] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-0ed601e4] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-0ed601e4] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-0ed601e4] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-0ed601e4] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-0ed601e4] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-0ed601e4] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-0ed601e4] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-0ed601e4] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-0ed601e4] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-0ed601e4] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-0ed601e4] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-0ed601e4] {\n  background-color: #495BFF;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-0ed601e4] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-0ed601e4] {\n  background-color: #1CBDB5;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-0ed601e4] {\n  background-color: #080D21;\n}\n.theme-light .colorPrimary[data-v-0ed601e4] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-0ed601e4] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-0ed601e4] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-0ed601e4] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-0ed601e4] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-0ed601e4] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-0ed601e4] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-0ed601e4] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-0ed601e4] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-0ed601e4] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-0ed601e4] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-0ed601e4] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-0ed601e4] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-0ed601e4] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-0ed601e4] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-0ed601e4] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-0ed601e4] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-0ed601e4] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-0ed601e4] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-0ed601e4] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-0ed601e4] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-0ed601e4] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-0ed601e4] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-0ed601e4] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-0ed601e4] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-0ed601e4] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-0ed601e4] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-0ed601e4] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-0ed601e4] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-0ed601e4] {\n  background-color: #495BFF;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-0ed601e4] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-0ed601e4] {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-0ed601e4] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-0ed601e4] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-0ed601e4] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-0ed601e4] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-0ed601e4] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-0ed601e4] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-0ed601e4] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-0ed601e4] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-0ed601e4] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-0ed601e4] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-0ed601e4] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-0ed601e4] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-0ed601e4] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-0ed601e4] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-0ed601e4] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-0ed601e4] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-0ed601e4] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-0ed601e4] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-0ed601e4] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .bigImg[data-v-0ed601e4] {\n  border: 0.03rem solid #fff;\n  border-radius: 50%;\n}\n.theme-light .noImg[data-v-0ed601e4] {\n  border: 0.03rem solid #fff;\n}\n.theme-light .smallImg[data-v-0ed601e4] {\n  border: 0.03rem solid #fff;\n  border-radius: 50%;\n}\n.theme-light .noImg[data-v-0ed601e4] {\n  border: 0.03rem solid #fff;\n}\n.theme-dark .bigImg[data-v-0ed601e4] {\n  border: 0.03rem solid #0A0E1F;\n  border-radius: 50%;\n}\n.theme-dark .smallImg[data-v-0ed601e4] {\n  border: 0.03rem solid #0A0E1F;\n  border-radius: 50%;\n}\n.noData[data-v-0ed601e4] {\n  min-height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.noData img[data-v-0ed601e4] {\n  width: 2.67rem;\n  height: 2.67rem;\n}\n.noData p[data-v-0ed601e4] {\n  font-size: 0.37rem;\n}\n.setMargin[data-v-0ed601e4] {\n  margin-top: 0.4rem;\n}\n.trading-wrap-box-pool[data-v-0ed601e4] {\n  border-radius: 0.21rem;\n  margin-top: 0.27rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title[data-v-0ed601e4] {\n  display: flex;\n  height: 1.44rem;\n  align-items: center;\n  position: relative;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .bigImg[data-v-0ed601e4] {\n  width: 0.85rem;\n  height: 0.85rem;\n  display: inline-block;\n  margin-left: 0.4rem;\n  vertical-align: middle;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .smallImg[data-v-0ed601e4] {\n  width: 0.85rem;\n  height: 0.85rem;\n  border-radius: 50%;\n  margin-left: -0.13rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .noImg[data-v-0ed601e4] {\n  display: inline-block;\n  width: 0.85rem;\n  height: 0.85rem;\n  line-height: 0.85rem;\n  border-radius: 50%;\n  font-size: 0.29rem;\n  font-weight: 700;\n  text-align: center;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .noImgOne[data-v-0ed601e4] {\n  margin-left: 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .noImgTwo[data-v-0ed601e4] {\n  margin-left: -0.13rem;\n}\n.trading-wrap-box-pool .trading-wrap-line[data-v-0ed601e4] {\n  width: 100%;\n  height: 0.03rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex[data-v-0ed601e4] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 0.27rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-left[data-v-0ed601e4] :first-child {\n  font-weight: 600;\n  font-size: 0.43rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-left[data-v-0ed601e4] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.11rem;\n  width: 3.33rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-one-header-about[data-v-0ed601e4] {\n  height: 0.64rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 0.64rem;\n  text-align: center;\n  padding: 0.05rem 0.32rem;\n  border-top-right-radius: 0.21rem;\n  border-bottom-left-radius: 0.21rem;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-right[data-v-0ed601e4] {\n  text-align: right;\n  position: absolute;\n  right: 0.4rem;\n  margin-top: 0.13rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-right[data-v-0ed601e4] :first-child {\n  font-size: 0.32rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-right[data-v-0ed601e4] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.05rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content[data-v-0ed601e4] {\n  padding: 0 0.4rem 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex[data-v-0ed601e4] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.4rem 0 0;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .setFont16[data-v-0ed601e4] {\n  font-size: 0.43rem !important;\n  margin-top: 0.13rem !important;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-left[data-v-0ed601e4] {\n  text-align: left;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-left[data-v-0ed601e4] :first-child {\n  font-size: 0.32rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-left[data-v-0ed601e4] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-right[data-v-0ed601e4] {\n  text-align: right;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-right[data-v-0ed601e4] :first-child {\n  font-size: 0.32rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-right[data-v-0ed601e4] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-stake[data-v-0ed601e4] {\n  width: 100%;\n  height: 1.33rem;\n  line-height: 1.33rem;\n  text-align: center;\n  border-radius: 0.27rem;\n  font-weight: 500;\n  font-size: 0.43rem;\n  margin-top: 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-stake-now[data-v-0ed601e4] {\n  background: #495bff;\n  color: #fff;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-stake-soon[data-v-0ed601e4] {\n  color: #9ca5b3;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=trading.js.map