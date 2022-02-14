exports.ids = [40];
exports.modules = {

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(270);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("e9c122f2", content, true, context)
};

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_miningRule_vue_vue_type_style_index_0_id_0b74c86f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(190);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_miningRule_vue_vue_type_style_index_0_id_0b74c86f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_miningRule_vue_vue_type_style_index_0_id_0b74c86f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_miningRule_vue_vue_type_style_index_0_id_0b74c86f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_miningRule_vue_vue_type_style_index_0_id_0b74c86f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-0b74c86f] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-0b74c86f] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-0b74c86f] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-0b74c86f] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-0b74c86f] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-0b74c86f] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-0b74c86f] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-0b74c86f] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-0b74c86f] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-0b74c86f] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-0b74c86f] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-0b74c86f] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-0b74c86f] {\n  background-color: #495BFF;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-0b74c86f] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-0b74c86f] {\n  background-color: #1CBDB5;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-0b74c86f] {\n  background-color: #080D21;\n}\n.theme-light .colorPrimary[data-v-0b74c86f] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-0b74c86f] {\n  color: #1CBDB5;\n}\n.theme-light .backgroundSecond01[data-v-0b74c86f] {\n  background-color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-0b74c86f] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-0b74c86f] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-0b74c86f] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-0b74c86f] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-0b74c86f] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-0b74c86f] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-0b74c86f] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-0b74c86f] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-0b74c86f] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-0b74c86f] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-0b74c86f] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-0b74c86f] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-0b74c86f] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-0b74c86f] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-0b74c86f] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-0b74c86f] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-0b74c86f] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-0b74c86f] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-0b74c86f] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-0b74c86f] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-0b74c86f] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-0b74c86f] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-0b74c86f] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-0b74c86f] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-0b74c86f] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-0b74c86f] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-0b74c86f] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-0b74c86f] {\n  background-color: #495BFF;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-0b74c86f] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-0b74c86f] {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-0b74c86f] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-0b74c86f] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-0b74c86f] {\n  color: #1CBDB5;\n}\n.theme-dark .backgroundSecond01[data-v-0b74c86f] {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-0b74c86f] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-0b74c86f] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-0b74c86f] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-0b74c86f] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-0b74c86f] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-0b74c86f] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-0b74c86f] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-0b74c86f] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-0b74c86f] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-0b74c86f] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-0b74c86f] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-0b74c86f] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-0b74c86f] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-0b74c86f] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-0b74c86f] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-0b74c86f] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .mining-rule[data-v-0b74c86f] {\n  background: #F8F9FA;\n}\n.theme-light .mining-rule-title-one[data-v-0b74c86f] {\n  color: #080D21;\n}\n.theme-light .mining-rule-title[data-v-0b74c86f] {\n  color: #080D21;\n}\n.theme-light .setC[data-v-0b74c86f] {\n  color: #080D21;\n}\n.theme-light .setM[data-v-0b74c86f] {\n  border-top: 0.03rem solid #F4F5FA;\n}\n.theme-light .mining-rule-content-li[data-v-0b74c86f] {\n  color: #4B5373;\n}\n.theme-light .mining-rule-content[data-v-0b74c86f] {\n  color: #4B5373;\n}\n.theme-dark .mining-rule[data-v-0b74c86f] {\n  background: #0A0E1F;\n}\n.theme-dark .mining-rule-title-one[data-v-0b74c86f] {\n  color: #DFE0E3;\n}\n.theme-dark .mining-rule-title[data-v-0b74c86f] {\n  color: #DFE0E3;\n}\n.theme-dark .setC[data-v-0b74c86f] {\n  color: #DFE0E3;\n}\n.theme-dark .setM[data-v-0b74c86f] {\n  border-top: 0.03rem solid #1F212E;\n}\n.theme-dark .mining-rule-content-li[data-v-0b74c86f] {\n  color: #9CA5B3;\n}\n.theme-dark .mining-rule-content[data-v-0b74c86f] {\n  color: #9CA5B3;\n}\n.mining-rule[data-v-0b74c86f] {\n  padding: 0.43rem;\n}\n.mining-rule .mining-rule-title-one[data-v-0b74c86f] {\n  font-size: 0.48rem;\n  font-weight: 700;\n  line-height: 0.96rem;\n}\n.mining-rule .mining-rule-title[data-v-0b74c86f] {\n  font-weight: 500;\n  font-size: 0.43rem;\n  margin: 0.43rem 0;\n}\n.mining-rule .setM[data-v-0b74c86f] {\n  margin-top: 0.53rem;\n  padding-top: 0.53rem;\n  width: 100%;\n}\n.mining-rule .mining-rule-content-ul[data-v-0b74c86f] {\n  margin-left: 0.8rem;\n}\n.mining-rule .mining-rule-content-li[data-v-0b74c86f] {\n  list-style: disc;\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n}\n.mining-rule .mining-rule-content[data-v-0b74c86f] {\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n  margin-top: 0.21rem;\n}\n.mining-rule .mining-rule-title-flex[data-v-0b74c86f] {\n  display: flex;\n  justify-content: space-between;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/mining/miningRule.vue?vue&type=template&id=0b74c86f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mining-rule"},[_vm._ssrNode("<div class=\"mining-rule-title-one\" data-v-0b74c86f>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.ruleTitle')))+"</div> <div class=\"mining-rule-content\" data-v-0b74c86f>"+_vm._ssrEscape("\n    "+_vm._s(_vm.$t('mining.ruleContent'))+"\n  ")+"</div> <div class=\"mining-rule-title-one setM\" data-v-0b74c86f>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.how')))+"</div> <div class=\"mining-rule-title\" data-v-0b74c86f>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.how1')))+"<span style=\"color: #495BFF\" data-v-0b74c86f> https://www.youtube.com</span>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.how11')))+"</div> <div class=\"mining-rule-title\" data-v-0b74c86f>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.how2')))+"</div> <div class=\"mining-rule-content\" data-v-0b74c86f>"+_vm._ssrEscape("\n    "+_vm._s(_vm.$t('mining.howContent'))+"\n  ")+"</div> <div class=\"mining-rule-content\" data-v-0b74c86f>"+(_vm._s(_vm.$t('mining.howContent1')))+"</div> <ul class=\"mining-rule-content-ul\" data-v-0b74c86f><li class=\"mining-rule-content-li\" data-v-0b74c86f>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.Objectives1')))+"</li> <li class=\"mining-rule-content-li\" data-v-0b74c86f>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.Objectives2')))+"</li> <li class=\"mining-rule-content-li\" data-v-0b74c86f>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.Objectives3')))+"</li> <li class=\"mining-rule-content-li\" data-v-0b74c86f>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.Objectives4')))+"</li></ul> <div class=\"mining-rule-content\" data-v-0b74c86f>"+(_vm._s(_vm.$t('mining.howContent2')))+"</div> <ul class=\"mining-rule-content-ul\" data-v-0b74c86f><li class=\"mining-rule-content-li\" data-v-0b74c86f>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.Objectives11')))+"</li> <li class=\"mining-rule-content-li\" data-v-0b74c86f>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.Objectives12')))+"</li> <li class=\"mining-rule-content-li\" data-v-0b74c86f>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.Objectives13')))+"</li></ul> <div class=\"mining-rule-title\" data-v-0b74c86f>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('mining.how3')))+"</div> <div class=\"mining-rule-content\" data-v-0b74c86f>"+_vm._ssrEscape("\n    "+_vm._s(_vm.$t('mining.OverviewContent'))+"\n  ")+"</div> <div class=\"mining-rule-faq\" data-v-0b74c86f><div class=\"mining-rule-title-one setM\" data-v-0b74c86f>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('mining.FQATitle')))+"</div> <p class=\"mining-rule-title setC\" data-v-0b74c86f>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('mining.FQATitle1'))+"\n    ")+"</p> <div class=\"mining-rule-content\" data-v-0b74c86f>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('mining.FQAContent1'))+"\n    ")+"</div> <p class=\"mining-rule-title setC\" data-v-0b74c86f>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('mining.FQATitle2'))+"\n    ")+"</p> <p class=\"mining-rule-content\" data-v-0b74c86f>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('mining.FQAContent2'))+"\n    ")+"</p> <p class=\"mining-rule-title setC\" data-v-0b74c86f>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('mining.FQATitle3'))+"\n    ")+"</p> <p class=\"mining-rule-content\" data-v-0b74c86f>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('mining.FQAContent3'))+"\n    ")+"</p> <p class=\"mining-rule-title setC\" data-v-0b74c86f>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('mining.FQATitle4'))+"\n    ")+"</p> <p class=\"mining-rule-content\" data-v-0b74c86f>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('mining.FQAContent4'))+"\n    ")+"</p> <p class=\"mining-rule-title setC\" data-v-0b74c86f>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('mining.FQATitle5'))+"\n    ")+"</p> <p class=\"mining-rule-content\" data-v-0b74c86f>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('mining.FQAContent5'))+"\n    ")+"</p> <ul class=\"mining-rule-content-ul\" data-v-0b74c86f><li class=\"mining-rule-content-li\" data-v-0b74c86f>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.FQAContent51')))+"</li> <li class=\"mining-rule-content-li\" data-v-0b74c86f>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.FQAContent52')))+"</li> <li class=\"mining-rule-content-li\" data-v-0b74c86f>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.FQAContent53')))+"</li> <li class=\"mining-rule-content-li\" data-v-0b74c86f>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.FQAContent54')))+"</li></ul> <p class=\"mining-rule-content\" data-v-0b74c86f>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('mining.FQAContentNote'))+"\n    ")+"</p> <p class=\"mining-rule-title setC\" data-v-0b74c86f>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('mining.FQATitle6'))+"\n    ")+"</p> <p class=\"mining-rule-content\" data-v-0b74c86f>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('mining.FQAContent6'))+"\n    ")+"</p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/mining/miningRule.vue?vue&type=template&id=0b74c86f&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/mining/miningRule.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var miningRulevue_type_script_lang_js_ = ({
  data() {
    return {};
  },

  computed: { ...Object(external_vuex_["mapState"])(["local"]),

    isBitKeep() {
      return this.local.UA.isBitKeep;
    }

  },

  beforeMount() {
    this.isBitKeep && BitKeepInvoke.onLoadReady(() => {
      BitKeepInvoke.setTitle(this.$t("mining.miningRuleTitle"));
      BitKeepInvoke.setIconAction('');
      BitKeepInvoke.appMode((err, res) => {
        let body = document.getElementsByTagName("body")[0];

        if (res == 1) {
          body.setAttribute("class", "theme-dark");
        } else {
          body.setAttribute("class", "theme-light");
        }
      });
    });
  },

  methods: {
    openUrl() {
      BitKeepInvoke.openUrl('https://www.youtube.com/watch?v=_5expUiioV8');
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/mining/miningRule.vue?vue&type=script&lang=js&
 /* harmony default export */ var mining_miningRulevue_type_script_lang_js_ = (miningRulevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/mining/miningRule.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(269)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mining_miningRulevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0b74c86f",
  "2da80668"
  
)

/* harmony default export */ var miningRule = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=miningRule.js.map