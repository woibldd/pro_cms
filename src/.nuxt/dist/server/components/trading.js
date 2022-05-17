exports.ids = [19];
exports.modules = {

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_adb65f7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_adb65f7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_adb65f7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_adb65f7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_adb65f7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/trading/index.vue?vue&type=template&id=adb65f7a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.tradingList && _vm.tradingList.length>0)?_vm._ssrNode("<div data-v-adb65f7a>","</div>",_vm._l((_vm.tradingList),function(item,index){return _vm._ssrNode("<div class=\"trading-wrap-box-pool colorBackground1\" data-v-adb65f7a>","</div>",[_vm._ssrNode("<div class=\"trading-wrap-box-pool-title\" data-v-adb65f7a>","</div>",[_vm._ssrNode(((item.fromIcon)?("<img"+(_vm._ssrAttr("src",item.fromIcon))+" alt class=\"bigImg colorBackground0\" data-v-adb65f7a>"):("<div class=\"noImg colorBackground2 noImgOne textSecond3 setFontFamily\" data-v-adb65f7a>"+_vm._ssrEscape("\n          "+_vm._s(item.fromSymbol.length> 4 ? item.fromSymbol.substring(0,4).toUpperCase(): item.fromSymbol.toUpperCase())+"\n        ")+"</div>"))+" "+((item.toIcon)?("<img"+(_vm._ssrAttr("src",item.toIcon))+" alt class=\"smallImg colorBackground0\" data-v-adb65f7a>"):("<div class=\"noImg noImgTwo colorBackground2 textSecond3 setFontFamily\" data-v-adb65f7a>"+_vm._ssrEscape("\n          "+_vm._s(item.toSymbol.length> 4 ? item.toSymbol.substring(0,4).toUpperCase(): item.toSymbol.toUpperCase())+"\n          ")+"</div>"))+" "),_vm._ssrNode("<div class=\"trading-wrap-box-pool-title-flex\" data-v-adb65f7a>","</div>",[_vm._ssrNode("<div class=\"trading-wrap-box-pool-title-left\" data-v-adb65f7a><div class=\"textPrimary0\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(item.fromSymbol.toUpperCase())+"/"+_vm._s(item.toSymbol .toUpperCase()))+"</div> <div class=\"textSecond3\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(item.chainName))+"</div></div> "),(!_vm.finished && _vm.activeType != 2)?_vm._ssrNode("<div class=\"trading-wrap-box-pool-title-right\" data-v-adb65f7a>","</div>",[_vm._ssrNode(((_vm.activeType == 0)?("<div class=\"textSecond3\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.Ending')))+"</div>"):"<!---->")+" "+((_vm.activeType == 1)?("<div class=\"textSecond3\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.Start')))+"</div>"):"<!---->")+" "),(item.countdown > 0)?_vm._ssrNode("<div data-v-adb65f7a>","</div>",[_c('van-count-down',{staticClass:"textPrimary0 setFontFamily",attrs:{"time":item.countdown,"format":_vm.formatEn}})],1):_vm._ssrNode(("<div class=\"textPrimary0\" data-v-adb65f7a>--</div>"))],2):(_vm.finished)?_vm._ssrNode(("<div class=\"trading-wrap-one-header-about colorSecond08 colorSecond18\" data-v-adb65f7a><span data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.finished')))+"</span></div>")):_vm._ssrNode(("<div data-v-adb65f7a></div>"))],2)],2),_vm._ssrNode(" <div class=\"trading-wrap-box-pool-content textSecond2\" data-v-adb65f7a><div class=\"trading-wrap-line colorLine\" data-v-adb65f7a></div> <div class=\"trading-wrap-box-pool-flex\" data-v-adb65f7a><div class=\"trading-wrap-box-pool-left\" data-v-adb65f7a><div class=\"textSecond3\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.Time')))+"</div> <div class=\"textSecond3\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.Reward')))+"</div></div> <div class=\"trading-wrap-box-pool-right\" data-v-adb65f7a><div class=\"textSecond2 setFontFamily\" data-v-adb65f7a>"+_vm._ssrEscape("\n              "+_vm._s(item.startTime)+" — "+_vm._s(item.endTime)+" (GMT+8)\n            ")+"</div> <div class=\"setFontFamily textSecond2\" data-v-adb65f7a><span class=\"colorPrimary\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(item.rate)+"x")+"</span>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('trading.in'))+" BKB\n            ")+"</div></div></div> <div class=\"trading-wrap-line colorLine setMargin\" data-v-adb65f7a></div> "+((!_vm.finished && _vm.activeType == 0)?("<div class=\"trading-wrap-box-pool-flex\" data-v-adb65f7a><div class=\"trading-wrap-box-pool-left\" data-v-adb65f7a><div class=\"textSecond3\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.TodayTradingValue')))+"</div> <div class=\"textPrimary0 setFontFamily setFont16\" data-v-adb65f7a>"+_vm._ssrEscape("\n              $"+_vm._s(_vm.milliFormat(item.allTradingVolumeToday))+"\n            ")+"</div></div> <div class=\"trading-wrap-box-pool-right\" data-v-adb65f7a><div class=\"textSecond3\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.TodayTradingReward')))+"</div> <div class=\"setFontFamily colorPrimary setFont16\" data-v-adb65f7a>"+_vm._ssrEscape("\n              +"+_vm._s(_vm.milliFormat(item.rewardToday))+" BKB\n            ")+"</div></div></div>"):"<!---->")+" "+((_vm.activeType != 1)?("<div class=\"trading-wrap-box-pool-flex\" data-v-adb65f7a><div class=\"trading-wrap-box-pool-left\" data-v-adb65f7a><div class=\"textSecond3\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.YourTradingValue')))+"</div> <div class=\"textPrimary0 setFontFamily setFont16\" data-v-adb65f7a>"+_vm._ssrEscape("\n              $"+_vm._s(_vm.milliFormat(item.allTradingVolume))+"\n            ")+"</div></div> <div class=\"trading-wrap-box-pool-right\" data-v-adb65f7a><div class=\"textSecond3\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.YourTradingReward')))+"</div> <div class=\"setFontFamily colorPrimary setFont16\" data-v-adb65f7a>"+_vm._ssrEscape("\n              +"+_vm._s(_vm.milliFormat(item.reward))+" BKB\n            ")+"</div></div></div>"):"<!---->")+" "+((!_vm.finished && _vm.activeType == 0)?("<div class=\"trading-wrap-box-pool-stake colorwhite colorBackgroundPrimary\" data-v-adb65f7a>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("trading.swapNow"))+"\n        ")+"</div>"):(!_vm.finished && _vm.activeType == 1)?("<div class=\"trading-wrap-box-pool-stake textSecond3 colorBackground2\" data-v-adb65f7a>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("trading.ComingSoon"))+"\n        ")+"</div>"):(!_vm.finished && _vm.activeType == 2)?("<div class=\"trading-wrap-box-pool-stake textSecond3 colorBackground2\" data-v-adb65f7a>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("trading.finished"))+"\n        ")+"</div>"):"<!---->")+"</div>")],2)}),0):_vm._ssrNode(("<div"+(_vm._ssrClass("noData",!_vm.finished?'setHeight': ''))+" data-v-adb65f7a><img src=\"https://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png\" alt data-v-adb65f7a> <p class=\"textSecond3\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.noData')))+"</p></div>"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/trading/index.vue?vue&type=template&id=adb65f7a&scoped=true&

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
  
  var style0 = __webpack_require__(119)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_tradingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "adb65f7a",
  "52a67bd3"
  
)

/* harmony default export */ var trading = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ })

};;
//# sourceMappingURL=trading.js.map