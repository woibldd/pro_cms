exports.ids = [35];
exports.modules = {

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(351);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7d31aef5", content, true, context)
};

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stepDetail_vue_vue_type_style_index_0_id_2a910c3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(253);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stepDetail_vue_vue_type_style_index_0_id_2a910c3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stepDetail_vue_vue_type_style_index_0_id_2a910c3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stepDetail_vue_vue_type_style_index_0_id_2a910c3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stepDetail_vue_vue_type_style_index_0_id_2a910c3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".step_detail_box[data-v-2a910c3a] {\n  margin-top: 0.67rem;\n}\n.step_detail_box .line[data-v-2a910c3a] {\n  margin: 0.67rem 0.85rem;\n  background: #080D21;\n  height: 0.05rem;\n}\n.step_detail_box h1[data-v-2a910c3a] {\n  margin: 0.27rem 0.85rem 0;\n}\n.step_detail_box h2[data-v-2a910c3a] {\n  font-size: 0.53rem;\n  margin: 0.27rem 0.85rem 0;\n}\n.step_detail_box .step_detail_box_con[data-v-2a910c3a] {\n  margin-top: 0.4rem;\n}\n.step_detail_box .step_detail_box_con .step_detail_box_content[data-v-2a910c3a] {\n  font-size: 0.43rem;\n  margin: 0.27rem 0.85rem;\n}\n.step_detail_box .step_detail_box_con .step_detail_box_img[data-v-2a910c3a] {\n  width: 100%;\n  margin-top: 0.53rem;\n}\n.step_detail_box .step_detail_box_con .step_detail_box_img img[data-v-2a910c3a] {\n  width: 100%;\n}\n.step_detail_box[data-v-2a910c3a]:last-child {\n  margin-bottom: 2.53rem;\n}\n.step_detail_box .download[data-v-2a910c3a] {\n  box-sizing: border-box;\n  position: fixed;\n  z-index: 100;\n  bottom: 0;\n  width: 100%;\n  height: 2rem;\n  padding: 0 0.43rem;\n  background: #fff;\n  border-top: 0.03rem solid #f4f5fa;\n}\n.step_detail_box .download .left[data-v-2a910c3a] {\n  box-sizing: border-box;\n  float: left;\n  width: 50%;\n  padding-right: 1%;\n}\n.step_detail_box .download .right[data-v-2a910c3a] {\n  box-sizing: border-box;\n  float: left;\n  width: 50%;\n  padding-left: 1%;\n}\n.step_detail_box .download a[data-v-2a910c3a] {\n  display: block;\n  width: 100%;\n  margin: 0.32rem 0 0;\n}\n.step_detail_box .download a img[data-v-2a910c3a] {\n  display: block;\n  width: 100%;\n}\n.step_detail_box .download .version[data-v-2a910c3a] {\n  width: 100%;\n  color: #9ca5b3;\n  font-size: 0.32rem;\n  margin-top: 0.13rem;\n  text-align: center;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindbox/stepDetail.vue?vue&type=template&id=2a910c3a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"step_detail_box"},[_vm._ssrNode("<h1 data-v-2a910c3a>How to create a BitKeep cloud wallet</h1> "+(_vm._ssrList((_vm.$t('ActivityBlindbox.stepDetail')),function(item){return ("<div class=\"step_detail_box_con\" data-v-2a910c3a><div class=\"line\" data-v-2a910c3a></div> <h2 data-v-2a910c3a>"+(_vm._s(item.title))+"</h2> <div class=\"step_detail_box_content textPrimary0\" data-v-2a910c3a>"+_vm._ssrEscape("\n      "+_vm._s(item.content)+"\n    ")+"</div> <div class=\"step_detail_box_img\" data-v-2a910c3a><img"+(_vm._ssrAttr("src",item.img))+" alt data-v-2a910c3a></div></div>")}))+" "+((_vm.isIos)?("<div id=\"IosBtnen\" class=\"download\" data-v-2a910c3a><div class=\"left\" data-v-2a910c3a><a href=\"https://itunes.apple.com/app/bitkeep/id1395301115\" target=\"_blank\" data-v-2a910c3a><img src=\"https://cdn.bitkeep.vip/u_b_333f4110-d0ba-11eb-a1fd-1b9796c35a14.png\" alt=\"btn1\" data-v-2a910c3a></a></div> <div class=\"right\" data-v-2a910c3a><a href=\"https://www.bitkeep.com/testFlight.html\" data-v-2a910c3a><img src=\"https://cdn.bitkeep.vip/u_b_33418b00-d0ba-11eb-a1fd-1b9796c35a14.png\" alt=\"btn2\" data-v-2a910c3a></a></div></div>"):("<div id=\"AndroidBtnen\" class=\"download\" data-v-2a910c3a><div class=\"left\" data-v-2a910c3a><a href=\"https://www.bitkeep.com/\" target=\"_blank\" data-v-2a910c3a><img src=\"https://cdn.bitkeep.vip/u_b_33740cb0-d0ba-11eb-a1fd-1b9796c35a14.png\" alt=\"btn1\" data-v-2a910c3a></a></div> <div class=\"right\" data-v-2a910c3a><a href=\"https://www.bitkeep.com/\" class=\"btnDwonload\" data-v-2a910c3a><img src=\"https://cdn.bitkeep.vip/u_b_337433c0-d0ba-11eb-a1fd-1b9796c35a14.png\" alt=\"btn2\" data-v-2a910c3a></a></div></div>")))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/blindbox/stepDetail.vue?vue&type=template&id=2a910c3a&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindbox/stepDetail.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var stepDetailvue_type_script_lang_js_ = ({
  name: "stepDetail",
  computed: { ...Object(external_vuex_["mapState"])(["local"]),

    locale() {
      return this.local.locale;
    },

    isIos() {
      return this.local.UA.ios;
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/blindbox/stepDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ var blindbox_stepDetailvue_type_script_lang_js_ = (stepDetailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/blindbox/stepDetail.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(350)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blindbox_stepDetailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2a910c3a",
  "12dd9661"
  
)

/* harmony default export */ var stepDetail = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=stepDetail.js.map