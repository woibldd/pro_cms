exports.ids = [49,10];
exports.modules = {

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/trading/index.vue?vue&type=template&id=55461b86&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.tradingList && _vm.tradingList.length>0)?_vm._ssrNode("<div data-v-55461b86>","</div>",_vm._l((_vm.tradingList),function(item,index){return _vm._ssrNode("<div class=\"trading-wrap-box-pool colorBackground1\" data-v-55461b86>","</div>",[_vm._ssrNode("<div class=\"trading-wrap-box-pool-title\" data-v-55461b86>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",item.fromIcon?item.fromIcon:'https://cdn.bitkeep.vip/u_b_a6bdfc60-5113-11ec-be10-ddc2856c6ac6.png'))+" alt class=\"bigImg\" data-v-55461b86> <img"+(_vm._ssrAttr("src",item.toIcon?item.toIcon:'https://cdn.bitkeep.vip/u_b_090033d0-5104-11ec-be10-ddc2856c6ac6.png'))+" alt class=\"smallImg\" data-v-55461b86> "),_vm._ssrNode("<div class=\"trading-wrap-box-pool-title-flex\" data-v-55461b86>","</div>",[_vm._ssrNode("<div class=\"trading-wrap-box-pool-title-left\" data-v-55461b86><div class=\"textPrimary0\" data-v-55461b86>"+_vm._ssrEscape(_vm._s(item.fromChain.toUpperCase())+"/"+_vm._s(item.toChain.toUpperCase()))+"</div> <div class=\"textSecond3\" data-v-55461b86>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.Chain')))+"</div></div> "),(!_vm.finished && _vm.activeType != 2)?_vm._ssrNode("<div class=\"trading-wrap-box-pool-title-right\" data-v-55461b86>","</div>",[_vm._ssrNode(((_vm.activeType == 0)?("<div class=\"textSecond3\" data-v-55461b86>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.Ending')))+"</div>"):"<!---->")+" "+((_vm.activeType == 1)?("<div class=\"textSecond3\" data-v-55461b86>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.Start')))+"</div>"):"<!---->")+" "),(item.countdown > 0)?_vm._ssrNode("<div data-v-55461b86>","</div>",[_c('van-count-down',{staticClass:"textPrimary0 setFontFamily",attrs:{"time":item.countdown,"format":_vm.formatEn}})],1):_vm._ssrNode(("<div class=\"textPrimary0\" data-v-55461b86>--</div>"))],2):(_vm.finished)?_vm._ssrNode(("<div class=\"trading-wrap-one-header-about colorSecond08 colorSecond18\" data-v-55461b86><span data-v-55461b86>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.finished')))+"</span></div>")):_vm._ssrNode(("<div data-v-55461b86></div>"))],2)],2),_vm._ssrNode(" <div class=\"trading-wrap-box-pool-content textSecond2\" data-v-55461b86><div class=\"trading-wrap-line colorLine\" data-v-55461b86></div> <div class=\"trading-wrap-box-pool-flex\" data-v-55461b86><div class=\"trading-wrap-box-pool-left\" data-v-55461b86><div class=\"textSecond3\" data-v-55461b86>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.Time')))+"</div> <div class=\"textSecond3\" data-v-55461b86>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.Reward')))+"</div></div> <div class=\"trading-wrap-box-pool-right\" data-v-55461b86><div class=\"textSecond2 setFontFamily\" data-v-55461b86>"+_vm._ssrEscape("\n              "+_vm._s(item.startTime)+" — "+_vm._s(item.endTime)+" (GMT+8)\n            ")+"</div> <div class=\"setFontFamily textSecond2\" data-v-55461b86><span class=\"colorPrimary\" data-v-55461b86>"+_vm._ssrEscape(_vm._s(item.rate)+"x")+"</span>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('trading.in'))+" BKB\n            ")+"</div></div></div> <div class=\"trading-wrap-line colorLine setMargin\" data-v-55461b86></div> <div class=\"trading-wrap-box-pool-flex\" data-v-55461b86><div class=\"trading-wrap-box-pool-left\" data-v-55461b86><div class=\"textSecond3\" data-v-55461b86>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.YourTrading')))+"</div> <div class=\"textPrimary0 setFontFamily setFont16\" data-v-55461b86>"+_vm._ssrEscape("\n              $"+_vm._s(_vm.milliFormat(item.allTradingVolume))+"\n            ")+"</div></div> <div class=\"trading-wrap-box-pool-right\" data-v-55461b86><div class=\"textSecond3\" data-v-55461b86>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.tradingTitle')))+"</div> <div class=\"setFontFamily colorPrimary setFont16\" data-v-55461b86>"+_vm._ssrEscape("\n              +"+_vm._s(_vm.milliFormat(item.reward))+" BKB\n            ")+"</div></div></div> "+((!_vm.finished && _vm.activeType == 0)?("<div class=\"trading-wrap-box-pool-stake colorwhite colorBackgroundPrimary\" data-v-55461b86>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("trading.swapNow"))+"\n        ")+"</div>"):(!_vm.finished && _vm.activeType == 1)?("<div class=\"trading-wrap-box-pool-stake textSecond3 colorBackground2\" data-v-55461b86>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("trading.ComingSoon"))+"\n        ")+"</div>"):(!_vm.finished && _vm.activeType == 2)?("<div class=\"trading-wrap-box-pool-stake textSecond3 colorBackground2\" data-v-55461b86>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("trading.finished"))+"\n        ")+"</div>"):"<!---->")+"</div>")],2)}),0):_vm._ssrNode(("<div class=\"noData\" data-v-55461b86><img src=\"https://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png\" alt data-v-55461b86> <p class=\"textSecond3\" data-v-55461b86>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.noData')))+"</p></div>"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/trading/index.vue?vue&type=template&id=55461b86&scoped=true&

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
  "55461b86",
  "4fbef3ec"
  
)

/* harmony default export */ var trading = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(264);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("170f7836", content, true, context)
};

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_57af3867_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(188);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_57af3867_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_57af3867_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_57af3867_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_57af3867_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-57af3867] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-57af3867] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-57af3867] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-57af3867] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-57af3867] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-57af3867] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-57af3867] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-57af3867] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-57af3867] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-57af3867] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-57af3867] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-57af3867] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-57af3867] {\n  background-color: #495BFF;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-57af3867] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-57af3867] {\n  background-color: #1CBDB5;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-57af3867] {\n  background-color: #080D21;\n}\n.theme-light .colorPrimary[data-v-57af3867] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-57af3867] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-57af3867] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-57af3867] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-57af3867] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-57af3867] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-57af3867] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-57af3867] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-57af3867] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-57af3867] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-57af3867] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-57af3867] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-57af3867] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-57af3867] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-57af3867] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-57af3867] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-57af3867] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-57af3867] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-57af3867] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-57af3867] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-57af3867] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-57af3867] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-57af3867] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-57af3867] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-57af3867] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-57af3867] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-57af3867] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-57af3867] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-57af3867] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-57af3867] {\n  background-color: #495BFF;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-57af3867] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-57af3867] {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-57af3867] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-57af3867] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-57af3867] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-57af3867] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-57af3867] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-57af3867] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-57af3867] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-57af3867] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-57af3867] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-57af3867] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-57af3867] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-57af3867] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-57af3867] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-57af3867] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-57af3867] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-57af3867] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-57af3867] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-57af3867] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-57af3867] {\n  background-color: rgba(255,184,0,0.1);\n}\n.hisory-wrap[data-v-57af3867] {\n  min-height: 100vh;\n  padding: 0.27rem 0.43rem 0.4rem;\n}\n.hisory-wrap .hisory-wrap-box[data-v-57af3867] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.4rem 0.91rem;\n  border-radius: 0.21rem;\n  text-align: center;\n}\n.hisory-wrap .hisory-wrap-box .hisory-wrap-box-text[data-v-57af3867] :first-child {\n  font-size: 0.32rem;\n}\n.hisory-wrap .hisory-wrap-box .hisory-wrap-box-text[data-v-57af3867] :last-child {\n  font-size: 0.43rem;\n}\n.loading[data-v-57af3867] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/trading/history.vue?vue&type=template&id=57af3867&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hisory-wrap colorBackground0"},[(_vm.isLoading)?_vm._ssrNode("<div class=\"loading\" data-v-57af3867>","</div>",[_c('van-loading',{attrs:{"color":"#1989fa","vertical":""}},[_vm._v(_vm._s(_vm.$t("base.loading"))+"...")])],1):_c('van-pull-refresh',{staticStyle:{"min-height":"100vh"},attrs:{"success-text":_vm.$t('mining.success'),"loading-text":_vm.$t('mining.loading'),"loosing-text":_vm.$t('mining.loading')},on:{"refresh":_vm.onDownRefresh},model:{value:(_vm.refreshLoading),callback:function ($$v) {_vm.refreshLoading=$$v},expression:"refreshLoading"}},[_c('van-list',{attrs:{"finished":_vm.finished,"immediate-check":false,"loading-text":_vm.$t('mining.loading'),"finished-text":_vm.$t('base.nomore')},on:{"load":_vm.onLoadList},model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}},[_c('div',{staticClass:"hisory-wrap-box colorBackground1"},[_c('div',{staticClass:"hisory-wrap-box-text"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t("trading.transaction")))]),_vm._v(" "),_c('div',{staticClass:"textPrimary0 setFontFamily"},[_vm._v("$"+_vm._s(_vm.milliFormat(_vm.tradingSummarys.totalTradingVolume)))])]),_vm._v(" "),_c('div',{staticClass:"hisory-wrap-box-text"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t("trading.GetsBKB")))]),_vm._v(" "),_c('div',{staticClass:"textPrimary0 setFontFamily"},[_vm._v(_vm._s(_vm.milliFormat(_vm.tradingSummarys.totalReward)))])])]),_vm._v(" "),_c('div',{staticClass:"history-wrap-one"},[_c('tradingCom',{attrs:{"tradingList":_vm.historyList,"finished":true}})],1)])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/trading/history.vue?vue&type=template&id=57af3867&scoped=true&

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(67);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./components/trading/index.vue + 4 modules
var trading = __webpack_require__(113);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/trading/history.vue?vue&type=script&lang=js&
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



/* harmony default export */ var historyvue_type_script_lang_js_ = ({
  data() {
    return {
      historyList: [],
      refreshLoading: false,
      start: 1,
      isLoading: true,
      loading: false,
      tradingSummarys: {
        totalReward: 0,
        totalTradingVolume: 0
      }
    };
  },

  components: {
    tradingCom: trading["default"]
  },
  computed: { ...Object(external_vuex_["mapState"])(["local"]),

    isBitKeep() {
      return this.local.UA.isBitKeep;
    }

  },

  mounted() {
    this.isBitKeep && BitKeepInvoke.onLoadReady(() => {
      BitKeepInvoke.setTitle(this.$t("mining.historyTitle"));
      BitKeepInvoke.setIconAction("");
      BitKeepInvoke.appMode((err, res) => {
        let body = document.getElementsByTagName("body")[0];

        if (res == 1) {
          body.setAttribute("class", "theme-dark");
        } else {
          body.setAttribute("class", "theme-light");
        }
      });
    });
    this.getHistoryList();
    this.getTradingSummary();
  },

  methods: {
    async getHistoryList() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].tradingHistory({
        start: this.start,
        limit: 20
      });

      if (status == 1) {
        this.isLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("staking.know"),
          confirmButtonColor: "$theme-light-colorPrimary"
        });
      }

      var moreList = data.list;
      this.finished = false;

      if (this.start == 1) {
        this.historyList = [];
        this.historyList = moreList;
      } else {
        this.historyList.push(...moreList);
      }

      this.refreshLoading = false;
      this.loading = false;
      this.isLoading = false;
      this.$toast.clear();

      if (this.historyList.length >= data.totalRows) {
        this.finished = true;
      }
    },

    // 上拉加载请求方法
    onLoadList() {
      this.start++;
      this.finished = false;
      this.getHistoryList();
    },

    onDownRefresh() {
      this.start = 1;
      this.getHistoryList();
    },

    async getTradingSummary() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].tradingSummary();

      if (status == 1) {
        this.isLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("trading.know"),
          confirmButtonColor: "#495BFF"
        });
      }

      this.tradingSummarys = data;
    },

    milliFormat(num) {
      return num && num.toString().replace(/^\d+/g, m => m.replace(/(?=(?!^)(\d{3})+$)/g, ","));
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/trading/history.vue?vue&type=script&lang=js&
 /* harmony default export */ var trading_historyvue_type_script_lang_js_ = (historyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/trading/history.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(263)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  trading_historyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "57af3867",
  "fdcb64dc"
  
)

/* harmony default export */ var trading_history = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_API; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);



 // const requestlog = debug('bit-activity-request')
// const responselog = debug('bit-activity-response')
// const isProduction = process.env.NODE_ENV == "production";
// const HOST_URL = process.env.HOST_URL || process.env.baseURL

const requestlog =  true ? (...arg) => {
  console.log("bit-activity-request:", ...arg);
} : undefined;
const responselog =  true ? (...arg) => {
  console.log("bit-activity-response:", ...arg);
} : undefined;
const host_user_instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "/",
  timeout: 60000,
  headers: {
    token: "",
    // token: "",
    language: "en",
    currency: "",
    brand: "",
    os: "",
    package: "",
    clientVersion: 1,
    im: ""
  }
});
host_user_instance.interceptors.request.use(function (config) {
  requestlog('requestlog:', config);

  if (false) {}

  return config;
}, function (error) {
  return Promise.resolve({
    status: 1
  });
}); // Add a response interceptor

host_user_instance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  responselog('responselog:', error); // Do omething with response error

  let message = '网路开了小差';

  if (false) {}

  return Promise.resolve({
    status: 1,
    data: message
  });
});
const USER_API = {
  //盲盒列表
  mBoxList: (data, headers = {}) => host_user_instance.get("user/activity/mBoxList", {
    params: data,
    headers
  }),
  // 打开盲盒÷
  openMBox: (data, headers = {}) => host_user_instance.get("user/activity/openMBox", {
    params: data
  }),
  //盲盒助力提交
  helpMBox: (data, headers = {}) => host_user_instance.get("user/activity/helpMBox", {
    params: data
  }),
  //助力邀请好友列表
  userInviteList: (data, headers = {}) => host_user_instance.get("user/activity/inviteList", {
    params: data
  }),
  mBoxDetail: (data, headers = {}) => host_user_instance.get("user/activity/mBoxDetail", {
    params: data
  }),
  //cbkb兑换模块
  getCbkbSwapInfo: (data, headers = {}) => host_user_instance.get("user/cloudwallet/getCbkbSwapInfo", {
    params: data
  }),
  swapBkb: (data, headers = {}) => host_user_instance.get("user/cloudwallet/swapBkb", {
    params: data
  }),
  //BKB空投
  getAirDropCount: (data, headers = {}) => host_user_instance.post("user/cloudwallet/getAirDropCount", data),
  getAirDrop: (data, headers = {}) => host_user_instance.post("user/cloudwallet/getAirDrop", data),
  // 交易挖矿
  miningInfo: (data, headers = {}) => host_user_instance.post("swap/mining/info", data),
  historyPhase: (data, headers = {}) => host_user_instance.post("swap/mining/historyPhase", data),
  receiveAward: (data, headers = {}) => host_user_instance.post("swap/mining/receiveAward", data),
  // 邀请好友
  getInviteList: (data, headers = {}) => host_user_instance.post('user/friendship/getInviteList', data),
  certifyFriendship: (data, headers = {}) => host_user_instance.post('user/friendship/certifyFriendship', data),
  activityDoneRewardList: (data, headers = {}) => host_user_instance.post('swap/mining/activityDoneRewardList', data),
  //质押bkb
  // 质押池列表
  poolList: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/poolList', data),
  // 我的质押池列表
  myPool: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/myPool', data),
  // 历史质押池列表
  stakeHistory: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/stakeHistory', data),
  // 取消质押
  receiveStakingReward: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/receiveStakingReward', data),
  //确认质押
  staking: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/staking', data),
  //获取token
  handleGetToken: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/getToken', data),
  //trading 交易大赛
  tradingGetList: (data, headers = {}) => host_user_instance.post('/tradeCompetition/getList', data),
  //待领取
  tradingWaitClaim: (data, headers = {}) => host_user_instance.post('/tradeCompetition/waitClaim', data),
  //领取
  tradingClaim: (data, headers = {}) => host_user_instance.post('/tradeCompetition/Claim', data),
  //历史汇总
  tradingSummary: (data, headers = {}) => host_user_instance.post('/tradeCompetition/summary', data),
  //历史list
  tradingHistory: (data, headers = {}) => host_user_instance.post('/tradeCompetition/history', data)
};

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
  add("3859ce8a", content, true, context)
};

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_55461b86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_55461b86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_55461b86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_55461b86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_55461b86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-55461b86] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-55461b86] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-55461b86] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-55461b86] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-55461b86] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-55461b86] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-55461b86] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-55461b86] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-55461b86] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-55461b86] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-55461b86] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-55461b86] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-55461b86] {\n  background-color: #495BFF;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-55461b86] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-55461b86] {\n  background-color: #1CBDB5;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-55461b86] {\n  background-color: #080D21;\n}\n.theme-light .colorPrimary[data-v-55461b86] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-55461b86] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-55461b86] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-55461b86] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-55461b86] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-55461b86] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-55461b86] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-55461b86] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-55461b86] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-55461b86] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-55461b86] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-55461b86] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-55461b86] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-55461b86] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-55461b86] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-55461b86] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-55461b86] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-55461b86] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-55461b86] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-55461b86] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-55461b86] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-55461b86] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-55461b86] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-55461b86] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-55461b86] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-55461b86] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-55461b86] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-55461b86] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-55461b86] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-55461b86] {\n  background-color: #495BFF;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-55461b86] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-55461b86] {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-55461b86] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-55461b86] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-55461b86] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-55461b86] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-55461b86] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-55461b86] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-55461b86] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-55461b86] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-55461b86] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-55461b86] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-55461b86] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-55461b86] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-55461b86] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-55461b86] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-55461b86] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-55461b86] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-55461b86] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-55461b86] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-55461b86] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .bigImg[data-v-55461b86] {\n  border: 0.03rem solid #fff;\n  border-radius: 50%;\n}\n.theme-light .smallImg[data-v-55461b86] {\n  border: 0.03rem solid #fff;\n  border-radius: 50%;\n}\n.theme-dark .bigImg[data-v-55461b86] {\n  border: 0.03rem solid #0A0E1F;\n  border-radius: 50%;\n}\n.theme-dark .smallImg[data-v-55461b86] {\n  border: 0.03rem solid #0A0E1F;\n  border-radius: 50%;\n}\n.noData[data-v-55461b86] {\n  min-height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.noData img[data-v-55461b86] {\n  width: 2.67rem;\n  height: 2.67rem;\n}\n.noData p[data-v-55461b86] {\n  font-size: 0.37rem;\n}\n.setMargin[data-v-55461b86] {\n  margin-top: 0.4rem;\n}\n.trading-wrap-box-pool[data-v-55461b86] {\n  border-radius: 0.21rem;\n  margin-top: 0.27rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title[data-v-55461b86] {\n  display: flex;\n  height: 1.44rem;\n  align-items: center;\n  position: relative;\n  margin-bottom: 0.21rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .bigImg[data-v-55461b86] {\n  width: 0.85rem;\n  height: 0.85rem;\n  display: inline-block;\n  margin-left: 0.4rem;\n  vertical-align: middle;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .smallImg[data-v-55461b86] {\n  width: 0.85rem;\n  height: 0.85rem;\n  border-radius: 50%;\n  margin-left: -0.11rem;\n}\n.trading-wrap-box-pool .trading-wrap-line[data-v-55461b86] {\n  width: 100%;\n  height: 0.03rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex[data-v-55461b86] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 0.27rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-left[data-v-55461b86] :first-child {\n  font-weight: 600;\n  font-size: 0.43rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-left[data-v-55461b86] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.11rem;\n  width: 3.33rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-one-header-about[data-v-55461b86] {\n  height: 0.64rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 0.64rem;\n  text-align: center;\n  padding: 0.05rem 0.32rem;\n  border-top-right-radius: 0.21rem;\n  border-bottom-left-radius: 0.21rem;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-right[data-v-55461b86] {\n  text-align: right;\n  position: absolute;\n  right: 0.4rem;\n  margin-top: 0.13rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-right[data-v-55461b86] :first-child {\n  font-size: 0.32rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-right[data-v-55461b86] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.05rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content[data-v-55461b86] {\n  padding: 0 0.4rem 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex[data-v-55461b86] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.4rem 0 0;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .setFont16[data-v-55461b86] {\n  font-size: 0.43rem !important;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-left[data-v-55461b86] {\n  text-align: left;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-left[data-v-55461b86] :first-child {\n  font-size: 0.32rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-left[data-v-55461b86] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-right[data-v-55461b86] {\n  text-align: right;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-right[data-v-55461b86] :first-child {\n  font-size: 0.32rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-right[data-v-55461b86] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-stake[data-v-55461b86] {\n  width: 100%;\n  height: 1.33rem;\n  line-height: 1.33rem;\n  text-align: center;\n  border-radius: 0.27rem;\n  font-weight: 500;\n  font-size: 0.43rem;\n  margin-top: 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-stake-now[data-v-55461b86] {\n  background: #495bff;\n  color: #fff;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-stake-soon[data-v-55461b86] {\n  color: #9ca5b3;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=history.js.map