exports.ids = [8];
exports.modules = {

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("365d89f2", content, true, context)
};

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_vue_countdown_vue_vue_type_style_index_0_id_ce47b7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_vue_countdown_vue_vue_type_style_index_0_id_ce47b7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_vue_countdown_vue_vue_type_style_index_0_id_ce47b7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_vue_countdown_vue_vue_type_style_index_0_id_ce47b7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_vue_countdown_vue_vue_type_style_index_0_id_ce47b7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cuntdown[data-v-ce47b7d2] {\n  display: inline-block;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/c-vue-countdown.vue?vue&type=template&id=ce47b7d2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.hidden)?_c('div',{staticClass:"cuntdown",domProps:{"innerHTML":_vm._s(_vm.pareStr)}},[]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/c-vue-countdown.vue?vue&type=template&id=ce47b7d2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/c-vue-countdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
const conversionRate = {
  ss: 1000,
  mm: 1000 * 60,
  hh: 1000 * 60 * 60,
  dd: 1000 * 60 * 60 * 24,
  mn: 1000 * 60 * 60 * 24
};
const REG = {
  all: /\{(dd|hh|mm|ss|ms){1}\}/gi,
  ms: /\{(ms){1}\}/gi,
  ss: /\{(ss){1}\}/gi,
  mm: /\{(mm){1}\}/gi,
  hh: /\{(hh){1}\}/gi,
  dd: /\{(dd){1}\}/gi,
  mn: /\{(mn){1}\}/gi,
  yy: /\{(yy){1}\}/gi
};
/* harmony default export */ var c_vue_countdownvue_type_script_lang_js_ = ({
  name: "cuntdown",
  props: {
    hidden: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: "{yy}年{mn}月{dd}天{hh}小时{mm}分钟{ss}秒{ms}毫秒" // default: "{dd}天{hh}小时{mm}分钟{ss}秒{ms}毫秒"

    },
    startTime: {
      type: Number || String,
      default: new Date().getTime()
    },
    endTime: {
      type: Number || String,
      default: new Date().getTime()
    }
  },

  data() {
    return {
      timer: null,
      stepTime: 0
    };
  },

  watch: {
    stepTime(val) {
      const date = {
        ms: this.ms,
        ss: this.ss,
        mm: this.mm,
        hh: this.hh,
        dd: this.dd
      };
      if (val <= 0) return this.$emit("end", date);
      this.$emit("change", date);
    },

    startTime() {
      this.stepTime = 0;
      this.init();
    },

    endTime() {
      this.stepTime = 0;
      this.init();
    }

  },
  computed: {
    options_show() {
      return {
        ms: REG.ms.test(this.format),
        ss: REG.ss.test(this.format),
        mm: REG.mm.test(this.format),
        hh: REG.hh.test(this.format),
        dd: REG.dd.test(this.format),
        mn: REG.mn.test(this.format),
        yy: REG.yy.test(this.format)
      };
    },

    ms() {
      return Math.floor(this.stepTime % conversionRate.ss);
    },

    ss() {
      // return Math.floor(this.stepTime % conversionRate.mm);
      return this.options_show.mm ? Math.floor(this.stepTime % conversionRate.mm / conversionRate.ss) : Math.floor(this.stepTime / conversionRate.ss);
    },

    mm() {
      return this.options_show.hh ? Math.floor(this.stepTime % conversionRate.hh / conversionRate.mm) : Math.floor(this.stepTime / conversionRate.mm);
    },

    hh() {
      return this.options_show.dd ? Math.floor(this.stepTime % conversionRate.dd / conversionRate.hh) : Math.floor(this.stepTime / conversionRate.hh);
    },

    dd() {
      return this.options_show.mn ? this.diff.day : Math.floor(this.stepTime / conversionRate.dd); // return Math.floor(this.stepTime / conversionRate.dd);
    },

    mn() {
      const dy = this.diff.year > 0 ? this.diff.year : 0;
      const dm = this.diff.month > 0 ? this.diff.month : 0;
      return this.options_show.yy ? dm : dy * 12 + dm - 1;
    },

    yy() {
      return this.diff.year > 0 ? this.diff.year : 0;
    },

    step_times() {
      return this.options_show.ms ? 100 : 1000;
    },

    pareStr() {
      const str = this.format.replace(REG.ms, this.zero(this.ms, 4)).replace(REG.ss, this.zero(this.ss)).replace(REG.mm, this.zero(this.mm)).replace(REG.hh, this.zero(this.hh)).replace(REG.dd, this.zero(this.dd)).replace(REG.mn, this.zero(this.mn)).replace(REG.yy, this.zero(this.yy));
      return str;
    },

    diff() {
      const endDate = new Date(this.endTime);
      const startDate = new Date(this.startTime);
      if (isNaN(endDate) || isNaN(startDate)) console.log("请输入有效范围和有效时间戳");
      const startYears = startDate.getFullYear();
      const startMonth = startDate.getMonth() + 1;
      const startDay = startDate.getDate();
      const endYears = endDate.getFullYear();
      const endMonth = endDate.getMonth() + 1;
      const endDay = endDate.getDate();
      return {
        endDate,
        startDate,
        startYears,
        endYears,
        startMonth,
        endMonth,
        endDay,
        startDay,
        day: endDay - startDay,
        month: endMonth - startMonth,
        year: endYears - startYears
      };
    }

  },
  methods: {
    init() {
      const step = this.step_times;
      clearInterval(this.timer);
      if (this.startTime >= this.endTime) return;
      this.stepTime = this.endTime - this.startTime;
      if (this.stepTime <= 0) return this.stepTime = 0;
      this.timer = setInterval(() => {
        this.stepTime = this.stepTime - step;

        if (this.stepTime <= 0) {
          this.stepTime = 0;
          clearInterval(this.timer);
        }
      }, step);
    },

    zero(val, len = 2) {
      const l = len - String(val).length;
      const zeros = l > 0 ? new Array(l).fill(0).join("") : "";
      return Number(val) < 10 ? zeros + val : val;
    }

  },
  filters: {
    filterZero(val) {
      return Number(val) < 10 ? "0" + val : val;
    }

  },

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./components/common/c-vue-countdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_c_vue_countdownvue_type_script_lang_js_ = (c_vue_countdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/common/c-vue-countdown.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(77)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_c_vue_countdownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ce47b7d2",
  "52c842f3"
  
)

/* harmony default export */ var c_vue_countdown = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=common-c-vue-countdown.js.map