exports.ids = [43,47];
exports.modules = {

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(260);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("ebb62b9c", content, true, context)
};

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addPool_vue_vue_type_style_index_0_id_7d37297c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addPool_vue_vue_type_style_index_0_id_7d37297c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addPool_vue_vue_type_style_index_0_id_7d37297c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addPool_vue_vue_type_style_index_0_id_7d37297c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addPool_vue_vue_type_style_index_0_id_7d37297c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-7d37297c] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-7d37297c] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-7d37297c] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-7d37297c] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-7d37297c] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-7d37297c] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-7d37297c] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-7d37297c] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-7d37297c] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-7d37297c] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-7d37297c] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-7d37297c] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-7d37297c] {\n  background-color: #495BFF;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-7d37297c] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-7d37297c] {\n  background-color: #1CBDB5;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-7d37297c] {\n  background-color: #080D21;\n}\n.theme-light .colorPrimary[data-v-7d37297c] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-7d37297c] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-7d37297c] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-7d37297c] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-7d37297c] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-7d37297c] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-7d37297c] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-7d37297c] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-7d37297c] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-7d37297c] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-7d37297c] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-7d37297c] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-7d37297c] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-7d37297c] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-7d37297c] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-7d37297c] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-7d37297c] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-7d37297c] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-7d37297c] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-7d37297c] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-7d37297c] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-7d37297c] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-7d37297c] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-7d37297c] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-7d37297c] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-7d37297c] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-7d37297c] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-7d37297c] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-7d37297c] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-7d37297c] {\n  background-color: #495BFF;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-7d37297c] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-7d37297c] {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-7d37297c] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-7d37297c] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-7d37297c] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-7d37297c] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-7d37297c] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-7d37297c] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-7d37297c] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-7d37297c] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-7d37297c] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-7d37297c] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-7d37297c] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-7d37297c] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-7d37297c] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-7d37297c] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-7d37297c] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-7d37297c] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-7d37297c] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-7d37297c] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-7d37297c] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .staking-warp-amount-input[data-v-7d37297c] {\n  border: 0.03rem solid #F0F0F0;\n}\n.theme-light .staking-wrap-box-pool-duration-smallBox[data-v-7d37297c] {\n  border: 0.03rem solid #F0F0F0;\n}\n.theme-light .wrap-bottom[data-v-7d37297c] {\n  border-top: 0.03rem solid #F0F0F0;\n}\n.theme-dark .staking-warp-amount-input[data-v-7d37297c] {\n  border: 0.03rem solid #2A2D3D;\n}\n.theme-dark .staking-wrap-box-pool-duration-smallBox[data-v-7d37297c] {\n  border: 0.03rem solid #2A2D3D;\n}\n.theme-dark .wrap-bottom[data-v-7d37297c] {\n  border-top: 0.03rem solid #2A2D3D;\n}\n.loading[data-v-7d37297c] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.addPool[data-v-7d37297c] {\n  padding: 0 0.43rem;\n  min-height: 100vh;\n}\n.addPool .staking-wrap-box-pool-title[data-v-7d37297c] {\n  display: flex;\n  height: 1.44rem;\n  align-items: center;\n  position: relative;\n}\n.addPool .staking-wrap-box-pool-title img[data-v-7d37297c] {\n  width: 0.8rem;\n  height: 0.8rem;\n  display: inline-block;\n  vertical-align: middle;\n}\n.addPool .staking-wrap-box-pool-title-flex[data-v-7d37297c] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 0.27rem;\n  align-items: center;\n}\n.addPool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-left[data-v-7d37297c] :first-child {\n  font-weight: 600;\n  font-size: 0.43rem;\n}\n.addPool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-right[data-v-7d37297c] {\n  text-align: right;\n  position: absolute;\n  right: 0;\n}\n.addPool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-right[data-v-7d37297c] :first-child {\n  font-size: 0.32rem;\n}\n.addPool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-right[data-v-7d37297c] :last-child {\n  font-size: 0.43rem;\n  margin-top: 0.05rem;\n}\n.addPool .staking-wrap-box-pool-duration[data-v-7d37297c] {\n  margin-top: 0.53rem;\n  font-size: 0.37rem;\n}\n.addPool .staking-wrap-box-pool-duration-box[data-v-7d37297c] {\n  margin-top: 0.27rem;\n}\n.addPool .staking-wrap-box-pool-duration-box .staking-wrap-box-pool-duration-smallBox[data-v-7d37297c] {\n  display: inline-block;\n  text-align: center;\n  height: 0.75rem;\n  width: 1.6rem;\n  line-height: 0.75rem;\n  border-radius: 0.11rem;\n  margin-right: 0.21rem;\n  font-size: 0.43rem;\n}\n.addPool .staking-wrap-box-pool-duration-box .setBorderColor[data-v-7d37297c] {\n  border: 0.03rem solid #495bff;\n  color: #495bff;\n}\n.addPool .staking-warp-amount[data-v-7d37297c] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 0.8rem;\n}\n.addPool .staking-warp-amount[data-v-7d37297c] :first-child {\n  font-size: 0.37rem;\n}\n.addPool .staking-warp-amount[data-v-7d37297c] :last-child {\n  font-size: 0.32rem;\n}\n.addPool .staking-warp-amount-input[data-v-7d37297c] {\n  width: 100%;\n  height: 1.33rem;\n  line-height: 1.33rem;\n  border-radius: 0.21rem;\n  margin-top: 0.27rem;\n  display: flex;\n  align-items: center;\n}\n.addPool .staking-warp-amount-input input[data-v-7d37297c] {\n  width: 55%;\n  height: 1.33rem;\n  float: left;\n  padding-left: 0.4rem;\n  font-size: 0.43rem;\n  display: block;\n  background: none;\n  outline: none;\n  border: none;\n}\n.addPool .staking-warp-amount-input .staking-warp-amount-input-right[data-v-7d37297c] {\n  float: right;\n  line-height: 1.33rem;\n}\n.addPool .staking-warp-amount-input .staking-warp-amount-input-right .right[data-v-7d37297c] {\n  float: left;\n  padding: 0 0.53rem 0 0.27rem;\n  font-size: 0.43rem;\n}\n.addPool .staking-warp-amount-input .staking-warp-amount-input-right .line[data-v-7d37297c] {\n  width: 0.03rem;\n  height: 0.48rem;\n  float: left;\n  margin-top: 0.45rem;\n}\n.addPool .staking-warp-amount-input .staking-warp-amount-input-right .max[data-v-7d37297c] {\n  float: left;\n  padding: 0 0.45rem 0 0.53rem;\n  font-size: 0.43rem;\n}\n.addPool .staking-limiation[data-v-7d37297c] {\n  margin-top: 0.8rem;\n  font-size: 0.37rem;\n}\n.addPool .staking-min[data-v-7d37297c] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.37rem;\n  margin-top: 0.27rem;\n}\n.addPool .setColorLine[data-v-7d37297c] {\n  width: 100%;\n  height: 0.03rem;\n  margin-top: 0.8rem;\n}\n.addPool .staking-summry[data-v-7d37297c] {\n  margin-top: 1.07rem;\n  padding-bottom: 2.67rem;\n}\n.addPool .staking-summry .Summary[data-v-7d37297c] {\n  font-weight: 600;\n  font-size: 0.43rem;\n}\n.addPool .staking-summry .staking-summary-box[data-v-7d37297c] {\n  width: 100%;\n  border-radius: 0.21rem;\n  margin-top: 0.27rem;\n}\n.addPool .staking-summry .staking-summary-box ul[data-v-7d37297c] {\n  padding: 0.4rem;\n}\n.addPool .staking-summry .staking-summary-box ul li[data-v-7d37297c] {\n  font-size: 0.37rem;\n  position: relative;\n}\n.addPool .staking-summry .staking-summary-box ul li .dian[data-v-7d37297c] {\n  width: 0.16rem;\n  height: 0.16rem;\n  border-radius: 50%;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 0.27rem;\n}\n.addPool .staking-summry .staking-summary-box ul li[data-v-7d37297c] :last-child {\n  position: absolute;\n  right: 0;\n}\n.addPool .staking-summry .staking-summary-box ul .setLeftLine[data-v-7d37297c] {\n  width: 0.05rem;\n  height: 0.75rem;\n  margin-left: 0.05rem;\n  margin-top: 0.03rem;\n}\n.addPool .staking-summry .staking-summary-box ul .setLeftColorLine[data-v-7d37297c] {\n  height: 2.16rem;\n  line-height: 2.16rem;\n  border-left: 0.05rem solid #1cbdb5;\n  margin-left: 0.05rem;\n}\n.addPool .staking-summry .staking-summary-box ul .setLeftColorLine[data-v-7d37297c] :first-child {\n  margin-left: 0.48rem;\n}\n.addPool .staking-summry .staking-summary-box .setColorLine1[data-v-7d37297c] {\n  height: 0.03rem;\n  margin: 0 0.43rem 0.4rem;\n  box-sizing: border-box;\n}\n.addPool .staking-summry .staking-summary-box .staking-warp-Interests[data-v-7d37297c] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 0.4rem 0.4rem;\n  font-size: 0.37rem;\n}\n.setBottomLine[data-v-7d37297c] {\n  width: 100%;\n  height: 0.03rem;\n}\n.wrap-bottom[data-v-7d37297c] {\n  width: 100%;\n  bottom: 0;\n  z-index: 99;\n  position: fixed;\n  padding: 0.29rem 0.96rem 0.91rem;\n  box-sizing: border-box;\n}\n.wrap-bottom .staking-wrap-box-pool-stake-now[data-v-7d37297c] {\n  background: #495bff;\n  color: #fff;\n}\n.wrap-bottom .setOpacity[data-v-7d37297c] {\n  opacity: 0.3;\n}\n.wrap-bottom .swap-btn[data-v-7d37297c] {\n  z-index: 0;\n  color: #fff;\n  height: 1.33rem;\n  border-radius: 0.27rem;\n  text-align: center;\n  line-height: 1.17rem;\n  border: none;\n  font-weight: 500;\n  font-size: 0.43rem;\n  width: 8.08rem;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/staking/addPool.vue?vue&type=template&id=7d37297c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"colorBackground1"},[(_vm.isLoading)?_vm._ssrNode("<div class=\"loading\" data-v-7d37297c>","</div>",[_c('van-loading',{attrs:{"color":"#1989fa","vertical":""}},[_vm._v(_vm._s(_vm.$t("base.loading"))+"...")])],1):_vm._ssrNode(("<div data-v-7d37297c><div class=\"addPool\" data-v-7d37297c><div class=\"staking-wrap-box-pool-title\" data-v-7d37297c><img src=\"https://cdn.bitkeep.vip/u_b_a6bdfc60-5113-11ec-be10-ddc2856c6ac6.png\" alt data-v-7d37297c> <div class=\"staking-wrap-box-pool-title-flex\" data-v-7d37297c><div class=\"staking-wrap-box-pool-title-left\" data-v-7d37297c><div class=\"textPrimary0\" data-v-7d37297c>"+_vm._ssrEscape(_vm._s(_vm.title))+"</div></div> <div class=\"staking-wrap-box-pool-title-right\" data-v-7d37297c><div class=\"textSecond2\" data-v-7d37297c>"+_vm._ssrEscape(_vm._s(_vm.$t("staking.APY")))+"</div> <div class=\"colorSecond01 setFontFamily\" data-v-7d37297c>"+_vm._ssrEscape(_vm._s(_vm.apy + "%"))+"</div></div></div></div> <div class=\"staking-wrap-box-pool-duration textPrimary0\" data-v-7d37297c>"+_vm._ssrEscape("\n        "+_vm._s(_vm.$t("staking.Duration"))+"\n      ")+"</div> <div class=\"staking-wrap-box-pool-duration-box\" data-v-7d37297c>"+(_vm._ssrList((_vm.listInfo.list[0].config),function(sitem,i){return ("<span"+(_vm._ssrClass("staking-wrap-box-pool-duration-smallBox setFontFamily",[
            _vm.isActiveSaleOut(sitem) ? 'textSecond3' : 'textSecond1',
            i == _vm.setBorderColor ? 'setBorderColor' : '' ]))+" data-v-7d37297c>"+_vm._ssrEscape(_vm._s(sitem.time))+"</span>")}))+"</div> <div class=\"staking-warp-amount\" data-v-7d37297c><div class=\"textPrimary0\" data-v-7d37297c>"+_vm._ssrEscape(_vm._s(_vm.$t("staking.StakeAmount")))+"</div> <div class=\"textSecond3\" data-v-7d37297c>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("staking.Available"))+":\n          "+_vm._s(_vm.listInfo.list[0].userAmount.toFixed(6))+" BKB\n        ")+"</div></div> <div class=\"staking-warp-amount-input\" data-v-7d37297c><input type=\"number\""+(_vm._ssrAttr("min",1))+" placeholder=\"Entry stake amount\""+(_vm._ssrAttr("value",(_vm.inputNumber)))+" class=\"textPrimary0 setFontFamily\" data-v-7d37297c> <div class=\"staking-warp-amount-input-right\" data-v-7d37297c><div class=\"right textPrimary0 setFontFamily\" data-v-7d37297c>BKB</div> <div class=\"line colorLine1\" data-v-7d37297c></div> <div class=\"max colorPrimary\" data-v-7d37297c>"+_vm._ssrEscape("\n            "+_vm._s(_vm.$t("staking.MAX"))+"\n          ")+"</div></div></div> <div class=\"staking-limiation textPrimary0\" data-v-7d37297c>"+_vm._ssrEscape("\n        "+_vm._s(_vm.$t("staking.StakeAmountLimiation"))+"\n      ")+"</div> <div class=\"staking-min textSecond3\" data-v-7d37297c><div data-v-7d37297c>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("staking.Minimum"))+":\n          ")+"<span class=\"setFontFamily textPrimary0\" data-v-7d37297c> 1 BKB</span></div> <div data-v-7d37297c></div></div> <div class=\"staking-summry\" data-v-7d37297c><div class=\"textPrimary0 Summary\" data-v-7d37297c>"+_vm._ssrEscape(_vm._s(_vm.$t("staking.Summary")))+"</div> <div class=\"staking-summary-box colorBackground3\" data-v-7d37297c><ul data-v-7d37297c><li data-v-7d37297c><span class=\"dian colorBackgroundPrimary\" data-v-7d37297c></span> <span class=\"textSecond3\" data-v-7d37297c>"+_vm._ssrEscape(_vm._s(_vm.$t("staking.StakeDate"))+" ")+"</span> <span class=\"textPrimary0 setFontFamily\" data-v-7d37297c>"+_vm._ssrEscape(_vm._s(_vm.timerFormatte(_vm.listInfo.serverTime)))+"</span></li> <li class=\"setLeftLine colorDisable\" data-v-7d37297c></li> <li data-v-7d37297c><span class=\"dian colorBackgroundPrimary\" data-v-7d37297c></span> <span class=\"textSecond3\" data-v-7d37297c>"+_vm._ssrEscape(_vm._s(_vm.$t("staking.ValueDate"))+" ")+"</span> <span class=\"textPrimary0 setFontFamily\" data-v-7d37297c>"+_vm._ssrEscape(_vm._s(_vm.timerFormatte(_vm.listInfo.serverTime)))+"</span></li> <li class=\"setLeftColorLine\" data-v-7d37297c><span class=\"textSecond3\" data-v-7d37297c>"+_vm._ssrEscape(_vm._s(_vm.$t("staking.InterestPeriod"))+"\n              ")+"</span> <span class=\"textPrimary0 setFontFamily\" data-v-7d37297c>"+_vm._ssrEscape(_vm._s(_vm.day)+" "+_vm._s(_vm.$t("staking.Days")))+"</span></li> <li data-v-7d37297c><span class=\"dian colorBackgroundPrimary\" data-v-7d37297c></span> <span class=\"textSecond3\" data-v-7d37297c>"+_vm._ssrEscape(_vm._s(_vm.$t("staking.InterestEndDate"))+"\n              ")+"</span> <span class=\"textPrimary0 setFontFamily\" data-v-7d37297c>"+_vm._ssrEscape(_vm._s(_vm.endtimerFormatte(_vm.listInfo.serverTime)))+"</span></li> <li class=\"setLeftLine colorDisable\" data-v-7d37297c></li> <li data-v-7d37297c><span class=\"dian colorBackgroundPrimary\" data-v-7d37297c></span> <span class=\"textSecond3\" data-v-7d37297c>"+_vm._ssrEscape(_vm._s(_vm.$t("staking.RedemptionDate"))+"\n              ")+"</span> <span class=\"textPrimary0 setFontFamily\" data-v-7d37297c>"+_vm._ssrEscape(_vm._s(_vm.endtimerFormatte(_vm.listInfo.serverTime)))+"</span></li></ul> <div class=\"colorLine1 setColorLine1\" data-v-7d37297c></div> <div class=\"staking-warp-Interests\" data-v-7d37297c><div class=\"textSecond3\" data-v-7d37297c>"+_vm._ssrEscape("\n              "+_vm._s(_vm.$t("staking.EstimatedInterests"))+"\n            ")+"</div> <div class=\"colorSecond01 setFontFamily\" data-v-7d37297c>"+_vm._ssrEscape("\n              "+_vm._s(_vm.inputNumber
                  ? ((this.apy / 100 / 360) * this.day * _vm.inputNumber).toFixed(
                      6
                    )
                  : 0)+"\n              BKB\n            ")+"</div></div></div></div></div> <div class=\"wrap-bottom colorBackground1\" data-v-7d37297c><button"+(_vm._ssrClass("swap-btn",[
          _vm.btn == ("" + (_vm.$t('staking.StakeNow'))) && _vm.inputNumber >= 1
            ? 'staking-wrap-box-pool-stake-now'
            : 'staking-wrap-box-pool-stake-now setOpacity' ]))+" data-v-7d37297c>"+_vm._ssrEscape("\n        "+_vm._s(_vm.btn)+"\n      ")+"</button></div></div>"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/staking/addPool.vue?vue&type=template&id=7d37297c&scoped=true&

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(67);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(64);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./pages/activity/staking/wallet.js
var wallet = __webpack_require__(77);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/staking/addPool.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // import airdropABI from "./airdropABI";

/* harmony default export */ var addPoolvue_type_script_lang_js_ = ({
  data() {
    return {
      setBorderColor: 0,
      apy: "20",
      btn: "Stake now",
      inputNumber: '',
      isLoading: true,
      title: "",
      day: "7",
      accounts: "",
      listInfo: {
        serverTime: "",
        list: [{
          allStakeAmount: 0,
          bkbTotalSuperAmount: 0,
          config: []
        }]
      },
      token: "",
      poolContract: "0xbb85bfbbdcefca43e9de619a149c186506fd0ff6"
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(["local"]),

    locale() {
      return this.local.locale;
    },

    isBitKeep() {
      return this.local.UA.isBitKeep;
    },

    userInfo() {
      return this.local.userInfo.token;
    }

  },

  mounted() {
    this.setIcon();
    this.onClickConnect();
  },

  methods: {
    handleInput(e) {
      if (e.target.value < 1) e.target.value = '';
      e.target.value = e.target.value.match(/^\d*(\.?\d{0,5})/g)[0] || null;
    },

    async getInfo() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].poolList({
        userid: this.accounts
      });

      if (status == 1) {
        this.isLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("CbkbExchange.know"),
          confirmButtonColor: "$theme-light-colorPrimary"
        });
      }

      this.isLoading = false;
      this.listInfo = data;
      this.listInfo.list = data.list;
      this.title = data.list[0].title;
      let prames = data.list && data.list[0].config[0];
      this.handlePoolTimeTab(prames, 0);
    },

    setIcon() {
      this.isBitKeep && BitKeepInvoke.onLoadReady(() => {
        BitKeepInvoke.setIconAction(); //设置主题

        this.$nextTick(() => {
          this.$store.commit('CHANGE_LANG', this.locale);
          BitKeepInvoke.setTitle(this.$t("staking.AddPoolTitle"));
          BitKeepInvoke.getAddress(async (err, data) => {
            if (err) {
              return this.$toast(err);
            }

            this.accounts = data["eth"] || "--";
            await this.handleGetToken();
            await this.getInfo();
          });
          BitKeepInvoke.appMode((err, res) => {
            let body = document.getElementsByTagName("body")[0];

            if (res == 1) {
              body.setAttribute("class", "theme-dark");
            } else {
              body.setAttribute("class", "theme-light");
            }
          });
        });
      });
    },

    Max() {
      this.inputNumber = this.listInfo.list[0].userAmount;
    },

    timerFormatte(time) {
      return external_moment_default()(time).format("YYYY-MM-DD HH:mm");
    },

    endtimerFormatte(time) {
      return external_moment_default()(time).add(this.day, "d").format("YYYY-MM-DD HH:mm");
    },

    async handleGetToken() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].handleGetToken({
        userid: this.accounts
      });

      if (status == 1) {
        this.isLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("staking.know"),
          confirmButtonColor: "$theme-light-colorPrimary"
        });
      }

      this.token = data.token;
    },

    // 获取签名
    async handleGetLoginSign() {
      if (this.inputNumber == '' || this.inputNumber < 1) return this.$toast(this.$t('staking.stakeAmount'));
      if (this.listInfo.list && this.inputNumber > this.listInfo.list[0].userAmount) return this.$toast('insufficient balance');

      if (this.btn == this.$t('staking.StakeNow') && this.inputNumber >= 1) {
        try {
          let loginSign = await wallet["wallet"].LoginSign(this.token, this.accounts);
          this.handleStaking(loginSign);
        } catch (error) {
          this.$toast(this.$t('staking.authorization'));
        }
      }
    },

    async handleStaking(loginSign) {
      const {
        data,
        status
      } = await client["a" /* USER_API */].staking({
        userid: this.accounts,
        time: this.day,
        amount: Number(this.inputNumber),
        c_token: this.token,
        verifyToken: loginSign
      });

      if (status == 1) {
        this.isLoading = false;
        this.handleGetToken();
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("staking.know"),
          confirmButtonColor: "$theme-light-colorPrimary"
        });
      }

      this.$router.push("/activity/staking/myPool");
    },

    isActiveSaleOut(sitem) {
      return sitem.allStake >= sitem.limit || external_moment_default()(sitem.lastStakeTime).isBefore(external_moment_default()(this.listInfo.list[0].serverTime));
    },

    handlePoolTimeTab(item, index) {
      this.setBorderColor = index;
      this.day = item.time;
      this.apy = (item.apy * 100).toFixed(2);
      this.btn = !this.isActiveSaleOut(item) ? this.$t("staking.StakeNow") : this.$t("staking.SoldOut");
    },

    // 点击连接
    async onClickConnect() {
      try {
        this.accounts = this.accounts || (await wallet["wallet"].connect()); // const chainId = await wallet.getChainId();
        // const [adddress] = await wallet.getAccounts();       
        // if (Number(chainId) !== 1) {
        //   await wallet.switchChainId(1, this.accounts);
        // }

        if (!this.isBitKeep) {
          await this.handleGetToken();
          await this.getInfo();
        }

        wallet["wallet"].on("chainChanged", async () => {
          const chainId16 = await wallet["wallet"].getChainId();
          Number(chainId16) != 1 && (await wallet["wallet"].switchChainId(1));
        });
        wallet["wallet"].on("accountsChanged", this.onClickConnect);
      } catch (error) {
        this.$toast(typeof error == "object" ? error.message : error);
      }
    } // addPool(){
    //   const token = window.web3.eth
    //         .contract(airdropABI)
    //         .at(this.poolContract);
    //       const data = token.withdraw.getData('0x9a78649501bbaac285ea4187299471b7ad4abd35', this.inputNumber);
    //       const params = {
    //         to: this.poolContract,
    //         value: 0,
    //         data: data,
    //       };
    //       console.log(token);
    //       params.gasLimit = window.web3.eth.estimateGas(
    //         params,
    //         (err, gasLimit) => {
    //           if (err) return Toast(err);
    //           params.gas = gasLimit;
    //           window.web3.eth.sendTransaction(params, (err, result) => {
    //             if (err) return Toast(this.$t("base.dropCancel"));
    //             console.log(parseFloat(result));
    //             this.$dialog.alert({
    //               message: data,
    //               confirmButtonText: this.$t("staking.know"),
    //               confirmButtonColor: "$theme-light-colorPrimary",
    //             });
    //           });
    //         }
    //       );
    // }


  }
});
// CONCATENATED MODULE: ./pages/activity/staking/addPool.vue?vue&type=script&lang=js&
 /* harmony default export */ var staking_addPoolvue_type_script_lang_js_ = (addPoolvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/staking/addPool.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(259)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  staking_addPoolvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7d37297c",
  "3e5e1c71"
  
)

/* harmony default export */ var addPool = __webpack_exports__["default"] = (component.exports);

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
    token: "c8ff79c0aff1c702d3c73f0874add811",
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
  tradingClaim: (data, headers = {}) => host_user_instance.post('/tradeCompetition/claim', data),
  //历史汇总
  tradingSummary: (data, headers = {}) => host_user_instance.post('/tradeCompetition/summary', data),
  //历史list
  tradingHistory: (data, headers = {}) => host_user_instance.post('/tradeCompetition/history', data)
};

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transfer16", function() { return transfer16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wallet", function() { return wallet; });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);
// import detectEthereumProvider from '@metamask/detect-provider';
 // import { transfer16 } from '../common/common'

function transfer16(val = '1') {
  val = isNaN(Number(val)) ? 1 : Number(val);
  return "0x" + val.toString(16);
}

class Wallet extends eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a {
  constructor() {
    super();
    this._accounts = [];
    this._chainId = 0;
    this._walletPlatform = 'bitkeep';
  } // 是否安装 bitkeep 钱包


  isInstall() {
    const isInstalled = !!window.ethereum && !!window.isBitKeep;
    !isInstalled && console.warn("no installed bitkeep");
    return isInstalled;
  } // 是否连接中


  isConnected() {
    return window.ethereum && window.ethereum.isConnected();
  } // 连接钱包


  async connect() {
    if (this.isInstall()) {
      const Accounts = await ethereum.request({
        method: 'eth_requestAccounts'
      });
      this.initEvent();
      return Accounts[0];
    } else {
      return {
        status: 50001,
        message: 'please download bitkeep chrome '
      };
    }
  } // 切换地址


  selectedAddress() {
    return window.ethereum && ethereum.selectedAddress;
  } // 获取钱包信息


  getWalletInfo() {
    return {
      address: window.ethereum && ethereum.selectedAddress,
      chainName: window.ethereum && window.ethereum.chainName || 'eth',
      chainId: window.ethereum && window.ethereum.chainId || '1',
      walletId: '',
      walletPlatform: this.getWalletPlatform()
    };
  } // 获取 chain ID


  async getChainId() {
    return window.ethereum && window.ethereum.request({
      method: 'eth_chainId'
    });
  } // 切换 chain ID


  async switchChainId(chainId, address) {
    if (!address) {
      const [nAddress] = await this.getAccounts();
      address = nAddress;
    }

    return window.ethereum && window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{
        chainId: transfer16(chainId)
      }, address]
    });
  } // 获取钱包标识


  getWalletPlatform() {
    return this._walletPlatform;
  } // 获取钱包账号


  async getAccounts() {
    return window.ethereum ? window.ethereum.request({
      method: "eth_accounts"
    }) : [];
  } // 登录签名


  async LoginSign(dataToSign, address) {
    console.log(dataToSign, address, 'dataToSign, addressdataToSign, addressdataToSign, address');
    return await window.ethereum.request({
      method: "personal_sign",
      params: [dataToSign, address],
      from: address
    }); // return await window.ethereum.signMessage({ data: dataToSign })
  }

  initEvent() {
    ethereum.removeAllListeners && ethereum.removeAllListeners(); // ethereum.removeListener && ethereum.removeListener('chainChanged')

    ethereum.on('accountsChanged', async (...arg) => {
      this.emit('accountsChanged', ...arg);
    });
    ethereum.on('chainChanged', async (...arg) => {
      this.emit('chainChanged', ...arg);
    });
  }

}

const wallet = new Wallet();

/***/ })

};;
//# sourceMappingURL=addPool.js.map