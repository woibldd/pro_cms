exports.ids = [28,2,4,5,6,7,8,9];
exports.modules = {

/***/ 105:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_vue_countdown_vue_vue_type_style_index_0_id_ce47b7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_vue_countdown_vue_vue_type_style_index_0_id_ce47b7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_vue_countdown_vue_vue_type_style_index_0_id_ce47b7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_vue_countdown_vue_vue_type_style_index_0_id_ce47b7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_vue_countdown_vue_vue_type_style_index_0_id_ce47b7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 108:
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
      default: "{yy}???{mn}???{dd}???{hh}??????{mm}??????{ss}???{ms}??????" // default: "{dd}???{hh}??????{mm}??????{ss}???{ms}??????"

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
      if (isNaN(endDate) || isNaN(startDate)) console.log("???????????????????????????????????????");
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
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/c-vue-countdown.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(107)
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
  "9b23d0f6"
  
)

/* harmony default export */ var c_vue_countdown = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blindTimeText_vue_vue_type_style_index_0_id_0becdc74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blindTimeText_vue_vue_type_style_index_0_id_0becdc74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blindTimeText_vue_vue_type_style_index_0_id_0becdc74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blindTimeText_vue_vue_type_style_index_0_id_0becdc74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blindTimeText_vue_vue_type_style_index_0_id_0becdc74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rulesTextTitle@2.en.2e040b3.png";

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 137:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 138:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blindbox/blindTimeText.vue?vue&type=template&id=0becdc74&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"block_time_content",attrs:{"id":"blindTimeText"}},[_vm._ssrNode(((_vm.info.status == 0 || _vm.info.status == 1)?("<span class=\"color_white\" data-v-0becdc74>"+_vm._ssrEscape(_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxDetail.invalidTimeText"))+" ????")+"</span>"):"<!---->")+" "+((_vm.info.status == 2)?("<span class=\"color_white\" data-v-0becdc74>"+_vm._ssrEscape(_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxDetail.successfullyTimeText"))+" ????")+"</span>"):"<!---->")+" "+((_vm.info.status == 3)?("<span class=\"color_white\" data-v-0becdc74>"+_vm._ssrEscape(_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxDetail.expiredTimeText"))+" ????")+"</span>"):"<!---->")+" "),(_vm.info.status == 0 || _vm.info.status == 1)?_c('Countdown',{staticClass:"color_red",attrs:{"startTime":_vm.startTime,"endTime":_vm.endTime,"format":_vm.format}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blindbox/blindTimeText.vue?vue&type=template&id=0becdc74&scoped=true&

// EXTERNAL MODULE: ./components/common/c-vue-countdown.vue + 4 modules
var c_vue_countdown = __webpack_require__(108);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blindbox/blindTimeText.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var blindTimeTextvue_type_script_lang_js_ = ({
  name: "blindTimeText",
  components: {
    Countdown: c_vue_countdown["default"]
  },
  props: {
    locale: {
      type: String,
      default: () => "en"
    },
    info: {
      type: Object,
      default: () => ({
        status: 0,
        is_owner: 0
      })
    },
    startTime: {
      type: Number || String,
      default: 0
    },
    endTime: {
      type: Number || String,
      default: 0
    },
    format: {
      type: String,
      default: "{dd}???{hh}??????{mm}??????{ss}???"
    }
  },
  methods: {
    chountChange(...arg) {
      this.$emit("change", ...arg);
    },

    end(...arg) {
      this.$emit("end", ...arg);
    }

  }
});
// CONCATENATED MODULE: ./components/blindbox/blindTimeText.vue?vue&type=script&lang=js&
 /* harmony default export */ var blindbox_blindTimeTextvue_type_script_lang_js_ = (blindTimeTextvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/blindbox/blindTimeText.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(134)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blindbox_blindTimeTextvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0becdc74",
  "302b5802"
  
)

/* harmony default export */ var blindTimeText = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo2@3.fb021ce.png";

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/openTextTitle@2.en.6afb738.png";

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/inviteTextTitle@2.en.5267b37.png";

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/helperTextTitle@2.en.6c9b040.png";

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_titleImage_vue_vue_type_style_index_0_id_bd22fe4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_titleImage_vue_vue_type_style_index_0_id_bd22fe4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_titleImage_vue_vue_type_style_index_0_id_bd22fe4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_titleImage_vue_vue_type_style_index_0_id_bd22fe4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_titleImage_vue_vue_type_style_index_0_id_bd22fe4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlindButton_vue_vue_type_style_index_0_id_3763a924_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlindButton_vue_vue_type_style_index_0_id_3763a924_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlindButton_vue_vue_type_style_index_0_id_3763a924_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlindButton_vue_vue_type_style_index_0_id_3763a924_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlindButton_vue_vue_type_style_index_0_id_3763a924_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/poster_logo@2.53db9a6.png";

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createPoster_vue_vue_type_style_index_0_id_77ca09a3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createPoster_vue_vue_type_style_index_0_id_77ca09a3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createPoster_vue_vue_type_style_index_0_id_77ca09a3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createPoster_vue_vue_type_style_index_0_id_77ca09a3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createPoster_vue_vue_type_style_index_0_id_77ca09a3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 225:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 226:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blindbox/titleImage.vue?vue&type=template&id=bd22fe4c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.type == 'helper')?_c('div',{staticClass:"titleImage"},[_vm._ssrNode(((_vm.status == 2 && _vm.isOwner)?("<div class=\"item\" data-v-bd22fe4c><img"+(_vm._ssrAttr("src",__webpack_require__(178)))+" class=\"openTextTitle_en\" data-v-bd22fe4c></div>"):(_vm.isOwner)?("<div class=\"item\" data-v-bd22fe4c><img"+(_vm._ssrAttr("src",__webpack_require__(179)))+" class=\"inviteTextTitle_en\" data-v-bd22fe4c></div>"):("<div class=\"item\" data-v-bd22fe4c><img"+(_vm._ssrAttr("src",__webpack_require__(180)))+" class=\"helperTextTitle_en\" data-v-bd22fe4c></div>")))],2):(_vm.type == 'footer')?_c('div',{staticClass:"titleImage footer "},[_vm._ssrNode("<div class=\"item\" data-v-bd22fe4c><img"+(_vm._ssrAttr("src",__webpack_require__(135)))+" class=\"rulesTextTitle_en\" data-v-bd22fe4c></div>")]):(_vm.type == 'strategy')?_c('div',{staticClass:"titleImage"},[_vm._ssrNode("<div class=\"item\" data-v-bd22fe4c><img"+(_vm._ssrAttr("src",__webpack_require__(135)))+" class=\"strategyTextTitle_en\" data-v-bd22fe4c></div>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blindbox/titleImage.vue?vue&type=template&id=bd22fe4c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blindbox/titleImage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var titleImagevue_type_script_lang_js_ = ({
  name: "titleImag",
  props: {
    locale: {
      default: "en"
    },
    type: {
      default: "helper"
    },
    is_owner: {},
    status: {}
  },
  computed: {
    isOwner() {
      return this.is_owner == 1;
    }

  }
});
// CONCATENATED MODULE: ./components/blindbox/titleImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var blindbox_titleImagevue_type_script_lang_js_ = (titleImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/blindbox/titleImage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(181)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blindbox_titleImagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bd22fe4c",
  "19545dba"
  
)

/* harmony default export */ var titleImage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blindbox/BlindButton.vue?vue&type=template&id=3763a924&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"block_invite_button"},[_vm._ssrNode(((_vm.info.status == 1 && _vm.info.is_owner == 1)?("<div data-v-3763a924><div class=\"invite_button heart\" data-v-3763a924>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t("ActivityBlindbox.button.OpenimmediatelyText"))+"\n    ")+"</div></div>"):"<!---->")+" "+((_vm.info.status == 0)?("<div data-v-3763a924>"+((_vm.info.is_owner == 1)?("<div class=\"invite_button heart\" data-v-3763a924>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t("ActivityBlindbox.button.InviteFriendsNow"))+"\n    ")+"</div>"):("<div class=\"invite_button heart\" data-v-3763a924>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t("ActivityBlindbox.button.OpenFriendsImmediately"))+"\n    ")+"</div>"))+"</div>"):"<!---->")+" "+((_vm.info.status == 2 && _vm.info.is_owner == 1)?("<div data-v-3763a924><div class=\"invite_button\" data-v-3763a924>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t("ActivityBlindbox.button.ViewAssets"))+"\n    ")+"</div></div>"):"<!---->")+" "+((_vm.info.status == 2 && _vm.info.is_owner == 0)?("<div data-v-3763a924><div class=\"invite_button\" data-v-3763a924>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t("ActivityBlindbox.button.SuccessView"))+"\n    ")+"</div></div>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blindbox/BlindButton.vue?vue&type=template&id=3763a924&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blindbox/BlindButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BlindButtonvue_type_script_lang_js_ = ({
  name: "titleImag",
  props: {
    isBitKeep: {
      type: Boolean
    },
    info: {
      default: () => ({})
    }
  },
  computed: {
    isOwner() {
      return this.is_owner == 1;
    }

  },
  methods: {
    handerBotton(...arg) {
      this.$emit("handerBotton", ...arg);
    }

  }
});
// CONCATENATED MODULE: ./components/blindbox/BlindButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var blindbox_BlindButtonvue_type_script_lang_js_ = (BlindButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/blindbox/BlindButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(182)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blindbox_BlindButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3763a924",
  "38fe98b7"
  
)

/* harmony default export */ var BlindButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blindbox/createPoster.vue?vue&type=template&id=77ca09a3&scoped=true&
var render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-overlay',{class:{
    qcodeModalwarpper: true,
    hidden: !_vm.showModal
  },attrs:{"show":true}},[_c('canvas',{ref:"qrcode",staticClass:"canvasTmp"}),_vm._v(" "),_c('div',{on:{"click":function($event){$event.stopPropagation();}}},[_c('BlindTimeText',{staticClass:"block_time",attrs:{"info":_vm.info,"startTime":_vm.startTime,"endTime":_vm.endTime,"format":_vm.format}}),_vm._v(" "),_c('span',{staticClass:"close",attrs:{"name":"close"},on:{"click":function($event){_vm.showModal = false}}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.poster.url),expression:"!poster.url"}],ref:"poster",staticClass:"poster_wrapper",attrs:{"id":"poster"}},[_c('img',{staticClass:"poster_bg",attrs:{"src":_vm.proxy_img,"alt":""},on:{"load":_vm.createPoster}}),_vm._v(" "),_c('div',{staticClass:"commany_title"},[_c('img',{staticClass:"logo",attrs:{"src":__webpack_require__(183),"alt":""}}),_vm._v(" "),_c('div',{class:( _obj = { content:true}, _obj[_vm.locale] = true, _obj )},[_c('div',[_vm._v("\n            "+_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxDetail.ScanBlindBox"))+"\n          ")]),_vm._v(" "),_c('div',[_vm._v("\n            "+_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxDetail.DownloadBitkeep"))+"\n          ")])])]),_vm._v(" "),_c('img',{staticClass:"poster_qrcode",attrs:{"src":_vm.qrcodeUrl}})]),_vm._v(" "),(_vm.poster.url)?_c('div',{staticClass:"postershow"},[_c('img',{attrs:{"src":_vm.poster.url}})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"footer"},[(_vm.isBitKeep || _vm.pedding)?_c('div',{staticClass:"btn left",on:{"click":_vm.saveImage}},[_c('img',{attrs:{"src":__webpack_require__(91),"alt":""}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("ActivityBlindbox.button.savePicture")))])]):_c('a',{staticClass:"btn left",attrs:{"href":_vm.poster.url,"download":new Date().getTime() + '.jpeg'}},[_c('img',{attrs:{"src":__webpack_require__(91),"alt":""}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("ActivityBlindbox.button.savePicture")))])]),_vm._v(" "),(_vm.isBitKeep)?_c('div',{staticClass:"btn",on:{"click":_vm.shareImage}},[_c('img',{attrs:{"src":__webpack_require__(92),"alt":""}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("ActivityBlindbox.button.ShareLink")))])]):_c('div',{staticClass:"btn"},[_c('img',{attrs:{"src":__webpack_require__(92),"alt":""}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("ActivityBlindbox.button.ShareLink")))])])])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blindbox/createPoster.vue?vue&type=template&id=77ca09a3&scoped=true&

// EXTERNAL MODULE: external "qrcode"
var external_qrcode_ = __webpack_require__(79);
var external_qrcode_default = /*#__PURE__*/__webpack_require__.n(external_qrcode_);

// EXTERNAL MODULE: ./mixin/base.js
var base = __webpack_require__(89);

// EXTERNAL MODULE: external "html2canvas"
var external_html2canvas_ = __webpack_require__(80);
var external_html2canvas_default = /*#__PURE__*/__webpack_require__.n(external_html2canvas_);

// EXTERNAL MODULE: ./components/blindbox/blindTimeText.vue + 4 modules
var blindTimeText = __webpack_require__(140);

// EXTERNAL MODULE: ./tools/common.js
var common = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blindbox/createPoster.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import { mapState } from "vuex";





/* harmony default export */ var createPostervue_type_script_lang_js_ = ({
  name: "CrearePoster",
  mixins: [base["a" /* BaseMixin */]],
  components: {
    BlindTimeText: blindTimeText["default"]
  },
  props: {
    locale: {
      default: "en"
    },
    zIndex: {
      default: 100
    },
    isBitKeep: {
      default: false
    },
    qrcodeText: {
      default: ""
    },
    info: {
      default: () => ({
        status: 0,
        is_owner: 0
      })
    },
    format: {
      default: () => "{dd}???{hh}??????{mm}??????{ss}???"
    },
    startTime: {
      default: () => 0
    },
    endTime: {
      default: () => 0
    }
  },
  computed: {
    proxy_img() {
      const sourceUrl = this.info.invite_image1 || "";
      return sourceUrl ? `/poster${sourceUrl.replace("http://cdn.bitkeep.vip", "").replace("https://cdn.bitkeep.vip", "")}` : "";
    },

    codeText() {
      return this.qrcodeText || ( false ? undefined : "");
    }

  },

  data() {
    return {
      showModal: false,
      qrcodeUrl: "",
      poster: {
        url: ""
      },
      pedding: false
    };
  },

  async mounted() {
    this.qrcodeUrl = await external_qrcode_default.a.toDataURL(this.codeText, {
      errorCorrectionLevel: "H",
      quality: 100,
      // margin: 5,
      color: {// // background: ;
        // dark:"#FFBF60FF",
        // light:"#ffffffb3"
      }
    }).catch(err => "");
  },

  methods: {
    init() {
      this.showModal = true;

      if (this.pedding) {
        this.showLoading(this.$t("ActivityBlindbox.toast.Generating"));
      }
    },

    async createPoster() {
      // if(!this.proxy_img && !this.info.invite_image1) return
      if (this.pedding) return this.showLoading(this.$t("ActivityBlindbox.toast.Generating"));
      this.showModal && this.showLoading(this.$t("ActivityBlindbox.toast.Generating"));
      this.pedding = true;
      this.poster.url = "";
      const el = this.$refs.poster;

      if (!this.qrcodeUrl) {
        this.qrcodeUrl = await external_qrcode_default.a.toDataURL(this.codeText).catch(err => "");
        await this.$nextTick();
      }

      console.time("poster");
      console.log({
        el: el.offsetWidth
      });
      external_html2canvas_default()(el, {
        dpi: Object(common["a" /* DPR */])(),
        // backgroundColor: "#fff",
        // useCORS: true,
        // windowWidth: document.body.scrollWidth,
        // windowHeight: document.body.scrollHeight,
        width: el.offsetWidth - 1,
        height: el.offsetHeight - 1,
        scale: 3,
        async: true,
        // width: 375,
        // height: 812,
        scrollY: 0,
        scrollX: 0,
        allowTaint: false
      }).then(async canvas => {
        // canvas.toBlob((blob) => {
        //   console.log({blob})
        // })
        // canvas.toDataURL("image/png");
        // const wid = canvas.width;
        // const hei = canvas.height;
        // const img = html2canvas.convertToJPEG(canvas, wid, hei);
        // const dataURL = img.getAttribute("src");
        this.poster.url = canvas.toDataURL("image/jpeg");
        await this.$nextTick();
        this.pedding = false;
        console.timeEnd("poster");
        console.time("upload");
        this.hideLoading();
      }).catch(err => {
        this.pedding = false;
        this.$toast.fail(JSON.stringify(err));
      });
    },

    shareImage() {
      BitKeepInvoke.shareUrl('', this.$t("ActivityBlindbox.shared.content"), location.href, this.info.cover_image, console.log);
    },

    saveImage() {
      if (this.poster.url) {
        this.showLoading(this.$t("ActivityBlindbox.toast.Saving"));
        BitKeepInvoke.saveImageFromBase64(this.poster.url, e => {
          this.hideLoading();
        });
        return;
      } else {
        this.createPoster();
      } // this.createPoster();

    }

  }
});
// CONCATENATED MODULE: ./components/blindbox/createPoster.vue?vue&type=script&lang=js&
 /* harmony default export */ var blindbox_createPostervue_type_script_lang_js_ = (createPostervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/blindbox/createPoster.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(184)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blindbox_createPostervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "77ca09a3",
  "ae1978ae"
  
)

/* harmony default export */ var createPoster = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(225);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_id_010ae2b5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(226);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_id_010ae2b5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_id_010ae2b5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_id_010ae2b5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_id_010ae2b5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindbox/detail/_id.vue?vue&type=template&id=010ae2b5&scoped=true&
var render = function () {
var _obj, _obj$1;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"blindbox_invite"}},[(_vm.isLoading)?_vm._ssrNode("<div class=\"loading\" data-v-010ae2b5>","</div>",[_c('van-loading',{attrs:{"size":"1rem","vertical":"","color":"#7524f9"}},[_vm._v(_vm._s(_vm.$t("base.loading"))+"...")])],1):_vm._ssrNode("<div data-v-010ae2b5>","</div>",[_c('Header',[_c('div',{staticClass:"blindbox_invite_header"},[_c('span',{staticClass:"header_back"}),_vm._v(" "),(_vm.isBitKeep)?_c('span',{staticClass:"header_btn btn active",on:{"click":function($event){return _vm.$router.replace({
              path: '/activity/blindbox/list',
              query: {}
            })}}},[_vm._v("\n          "+_vm._s(_vm.$t("ActivityBlindbox.title.myBlindboxText"))+"\n        ")]):_vm._e()])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"block_detail_bg\" data-v-010ae2b5>","</div>",[_c('van-image',{attrs:{"width":"100%","height":"100%","src":_vm.heade_image}})],1),_vm._ssrNode(" "),_c('BlindTimeText',{staticClass:"block_time",attrs:{"info":_vm.info,"locale":_vm.locale,"startTime":_vm.startTime,"endTime":_vm.endTime,"format":_vm.format},on:{"change":_vm.chountChange,"end":_vm.end}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"block_invite\" data-v-010ae2b5>","</div>",[_vm._ssrNode("<div class=\"block_warpper radial-gradient\" data-v-010ae2b5>","</div>",[_vm._ssrNode("<div class=\"block_header\" data-v-010ae2b5>","</div>",[_c('BlindTitleImage',{attrs:{"isBitKeep":_vm.isBitKeep,"locale":_vm.locale,"is_owner":_vm.info.is_owner,"status":_vm.info.status}})],1),_vm._ssrNode(" "+((_vm.info.status == 2 && _vm.info.is_owner == 1)?("<div class=\"block_invite_coin color_red\" data-v-010ae2b5>"+(_vm._ssrList((_vm.info.symbolList),function(item,index){return ("<div data-v-010ae2b5><span data-v-010ae2b5>"+_vm._ssrEscape("+"+_vm._s(item.amount))+"</span> <span data-v-010ae2b5>"+_vm._ssrEscape(_vm._s(item.symbol))+"</span></div>")}))+"</div>"):("<div data-v-010ae2b5><div class=\"block_invite_num color_text\" data-v-010ae2b5>"+(_vm._s(
              _vm.$t('ActivityBlindbox.ActivityBlindboxDetail.blindBoxNumText', {
                surplus: this.info.already_number || 0,
                invite: this.info.invite || 0
              })
            ))+"</div> <div class=\"block_invite_progress\" data-v-010ae2b5><div class=\"progress\""+(_vm._ssrStyle(null,_vm.progress, null))+" data-v-010ae2b5></div></div></div>"))+" "+((_vm.info.is_owner != 1 && _vm.info.status == 0)?("<div class=\"block_invite_ETH\" data-v-010ae2b5><div class=\"invite_ETH_content\" data-v-010ae2b5><textarea type=\"text\""+(_vm._ssrAttr("placeholder",_vm.focus
                  ? ''
                  : _vm.$t(
                      'ActivityBlindbox.ActivityBlindboxDetail.inputAddressPlaceholader'
                    )))+(_vm._ssrClass(null,{
                focus: _vm.focus || !!_vm.address
              }))+" data-v-010ae2b5>"+_vm._ssrEscape(_vm._s(_vm.address))+"</textarea> <span data-v-010ae2b5></span></div></div>"):"<!---->")+" "),_c('vue2-recaptcha-invisible',{attrs:{"data-sitekey":"6LeNstsdAAAAAMR2UBwyqxUuL3CPgD4QT_yxVG26","data-validate":_vm.validate,"data-callback":_vm.onSubmit,"data-btn-class":"btn","data-type":"image","data-btn-disabled":false}},[(_vm.info.status != 3)?_c('BlindButton',{attrs:{"isBitKeep":_vm.isBitKeep,"info":_vm.info},on:{"handerBotton":_vm.handerBotton}}):_c('div')],1),_vm._ssrNode(" "+((!_vm.isBitKeep)?("<div class=\"block_invite_down\" data-v-010ae2b5><a data-v-010ae2b5>"+(_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxDetail.NoAddressDownload")))+"</a></div>"):"<!---->")+" "+((_vm.invite_list && _vm.invite_list.length > 0)?("<div"+(_vm._ssrClass(" ",{
            block_invite_list: true,
            color_text: true,
            mt: !_vm.isBitKeep
          }))+" data-v-010ae2b5><div class=\"title\" data-v-010ae2b5>"+_vm._ssrEscape("\n            "+_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxDetail.HelpSuccessETH"))+" ???"+_vm._s(_vm.invite_list.length)+"??????\n          ")+"</div> "+(_vm._ssrList((_vm.invite_list),function(item,index){return ("<div class=\"block_invite_item\" data-v-010ae2b5><div data-v-010ae2b5>"+_vm._ssrEscape(_vm._s(index + 1)+". "+_vm._s(item))+"</div></div>")}))+"</div>"):"<!---->"))],2)]),_vm._ssrNode(" <div class=\"block_open_strategy\" data-v-010ae2b5>"+((_vm.info.is_owner != 1 && _vm.info.status == 0)?("<div"+(_vm._ssrClass(null,( _obj = { block_open_is_owner: true }, _obj[_vm.locale] = true, _obj )))+" data-v-010ae2b5></div>"):("<div"+(_vm._ssrClass(null,( _obj$1 = { block_open_strategy_warpper: true }, _obj$1[_vm.locale] = true, _obj$1 )))+" data-v-010ae2b5></div>"))+"</div> "),_vm._ssrNode("<div class=\"block_acitve_strategy\" data-v-010ae2b5>","</div>",[_vm._ssrNode("<div class=\"block_warpper radial-gradient\" data-v-010ae2b5>","</div>",[_vm._ssrNode("<div class=\"block_header\" data-v-010ae2b5>","</div>",[_c('BlindTitleImage',{attrs:{"type":"footer","isBitKeep":_vm.isBitKeep,"locale":_vm.locale,"is_owner":_vm.info.is_owner,"status":_vm.info.status}})],1),_vm._ssrNode(" <div class=\"block_body color_theme\" data-v-010ae2b5>"+(_vm._ssrList((_vm.$t(
              'ActivityBlindbox.ActivityBlindboxDetail.rules'
            )),function(item,index){return ("<div class=\"rules_item\" data-v-010ae2b5><span data-v-010ae2b5>"+_vm._ssrEscape(_vm._s(index + 1)+".??")+"</span> <span class=\"con\" data-v-010ae2b5>"+(_vm._s(item))+"</span></div>")}))+"</div> <div class=\"block_footer\" data-v-010ae2b5>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxDetail.FinalInterpretation"))+"\n        ")+"</div>")],2)]),_vm._ssrNode(" <div class=\"block_page_footer\" data-v-010ae2b5><div class=\"block_warpper\" data-v-010ae2b5><div class=\"block_header\" data-v-010ae2b5><img"+(_vm._ssrAttr("src",__webpack_require__(173)))+" data-v-010ae2b5></div></div></div> "),_c('CreatePoster',{ref:"CreatePoster",attrs:{"locale":_vm.locale,"zIndex":100,"isBitKeep":_vm.isBitKeep,"info":_vm.info,"startTime":_vm.startTime,"endTime":_vm.endTime,"format":_vm.format},on:{"change":_vm.chountChange,"end":_vm.end}})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/blindbox/detail/_id.vue?vue&type=template&id=010ae2b5&scoped=true&

// EXTERNAL MODULE: ./components/common/index.js
var common = __webpack_require__(94);

// EXTERNAL MODULE: ./components/common/c-vue-countdown.vue + 4 modules
var c_vue_countdown = __webpack_require__(108);

// EXTERNAL MODULE: ./components/blindbox/blindTimeText.vue + 4 modules
var blindTimeText = __webpack_require__(140);

// EXTERNAL MODULE: ./components/blindbox/titleImage.vue + 4 modules
var titleImage = __webpack_require__(238);

// EXTERNAL MODULE: ./components/blindbox/BlindButton.vue + 4 modules
var BlindButton = __webpack_require__(239);

// EXTERNAL MODULE: ./components/blindbox/createPoster.vue + 4 modules
var createPoster = __webpack_require__(240);

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(86);

// EXTERNAL MODULE: external "@finpo/vue2-recaptcha-invisible"
var vue2_recaptcha_invisible_ = __webpack_require__(85);
var vue2_recaptcha_invisible_default = /*#__PURE__*/__webpack_require__.n(vue2_recaptcha_invisible_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./mixin/base.js
var base = __webpack_require__(89);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindbox/detail/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  name: "mBoxDetail",
  mixins: [base["a" /* BaseMixin */]],
  components: {
    Header: common["Header"],
    Countdown: c_vue_countdown["default"],
    BlindTimeText: blindTimeText["default"],
    BlindTitleImage: titleImage["default"],
    CreatePoster: createPoster["default"],
    BlindButton: BlindButton["default"],
    vue2RecaptchaInvisible: vue2_recaptcha_invisible_default.a
  },
  computed: { ...Object(external_vuex_["mapState"])(["local"]),

    id() {
      return this.$route.query.id;
    },

    progress() {
      return `width:${this.info.already_number / this.info.invite * 100}%`;
    },

    isCountdown() {
      return this.info.status == 0 || this.info.status == 1;
    },

    isInvaild() {
      return this.info.status == 3;
    },

    isBitKeep() {
      return this.local.UA.isBitKeep;
    },

    locale() {
      return this.local.locale;
    },

    format() {
      return this.locale == "zh" ? "{dd}???{hh}???{mm}???{ss}???" : "{dd} d {hh} h {mm} m {ss} s";
    },

    heade_image() {
      return this.info.status == 2 ? this.info.prize_image : this.info.poster_image;
    }

  },

  async asyncData(ctx) {},

  data() {
    return {
      Toast: null,
      timer: null,
      startTime: 0,
      endTime: 0,
      isLoading: true,
      poster: {
        url: "",
        poster_url: ""
      },
      qrcodeUrl: "",
      info: {
        status: 0,
        is_owner: 1
      },
      invite_list: [],
      address: "",
      focus: false,
      verifytoken: '',
      handerType: ''
    };
  },

  async created() {},

  async beforeMount() {
    this.getDetails();
  },

  head() {
    return {
      script: [{
        src: 'https://www.recaptcha.net/recaptcha/api.js?render=explicit'
      }]
    };
  },

  async mounted() {
    await this.$nextTick();
    this.isLoading = false;
    this.init();
  },

  methods: {
    async init() {
      await this.$nextTick();
    },

    validate() {
      if (this.handerType == 1) return false;

      if (!this.address || !this.address.replace(/ /g, "")) {
        this.$toast.fail(this.$t("ActivityBlindbox.toast.inputETH"));
        this.$refs.textarea && this.$refs.textarea.focus();
        return false;
      } // if(!window.web3.isAddress(this.address)){
      //   return this.$toast('Enter the correct ETH address')
      // }


      return true;
    },

    async onSubmit(token) {
      const HelpR = await client["a" /* USER_API */].helpMBox({
        address: this.address,
        id: this.info.id,
        scene: this.info.scene,
        verifytoken: token
      });
      this.hideLoading();

      if (HelpR.status != 0) {
        return this.$dialog.alert({
          message: HelpR.data,
          confirmButtonText: this.$t("blindboxInvite.know")
        });
      }

      this.getDetails();
      this.$toast.success(this.$t("ActivityBlindbox.toast.ContributeSuccess"));
      !this.isBitKeep && this.$router.push({
        path: "/activity/blindbox/download",
        query: {}
      });
    },

    handlerFocus() {
      this.focus = true;
    },

    handlerBlur() {
      this.focus = false;
    },

    openUrl() {
      this.$router.push('/activity/blindbox/stepDetail');
    },

    async getDetails(refresh) {
      const id = this.$route.params.id || this.$route.query.id;
      const ownerIdentity = this.$route.params.ownerIdentity || this.$route.query.ownerIdentity;

      if (!id) {
        // this.$toast.fail("params id is not found");
        return false;
      }

      if (this.info.status > 1) return;
      !refresh && this.showLoading(this.$t("ActivityBlindbox.toast.loading"));
      const {
        data,
        status
      } = await client["a" /* USER_API */].mBoxDetail({
        id,
        ownerIdentity
      });
      !refresh && this.hideLoading();
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.getDetails(true);
      }, 5000);

      if (status != 0) {
        !refresh && this.$toast.fail(data);
        return false;
      }

      if (JSON.stringify(this.info) == JSON.stringify(data)) return false;
      this.info = data;
      this.startTime = data.current_time;
      this.endTime = new Date(data.end_time).getTime();
      this.invite_list = data.help_record || [];
      this.isBitKeep && BitKeepInvoke.setTitle(this.info.title);
      return true;
    },

    async handerBotton(type) {
      this.handerType = type;
      const isOwner = this.info.is_owner == 1;

      switch (String(type)) {
        //??????????????????
        case "0":
          // ????????????????????????????????????????????????
          if (this.info.isCloudWallet != 1) {
            const isComfirm = await new Promise(resolve => BitKeepInvoke.confirm(this.$t("ActivityBlindbox.dialog.isCreateWalletComfirm"), resolve));
            isComfirm && BitKeepInvoke.openUrl("bitkeep://cloudCreateWallet");
            return;
          }

          this.showLoading(this.$t("ActivityBlindbox.toast.open"));
          const openMBoxR = await client["a" /* USER_API */].openMBox({
            id: this.$route.params.id || this.$route.query.id
          });
          await this.getDetails();
          this.hideLoading();

          if (openMBoxR.status != 0) {
            return this.$toast.fail(openMBoxR.data);
          }

          break;
        // ????????????????????????

        case "1":
          if (this.info.is_owner == 1) {
            this.$refs.CreatePoster && this.$refs.CreatePoster.init();
          } else {
            this.helperBtn();
          }

          break;
        //????????????

        case "2":
          if (this.isBitKeep) {
            this.info.isCloudWallet == 1 ? BitKeepInvoke.openUrl("bitkeep://cloudWallet") : BitKeepInvoke.openUrl("bitkeep://cloudCreateWallet");
          } else {
            !this.isBitKeep && this.$router.push({
              path: "/activity/blindbox/download",
              query: {}
            });
          }

        case "3":
          this.helperBtn();
          break;

        default:
          break;
      }
    },

    async helperBtn(isOwner) {
      if (isOwner) {} else {
        if (!this.address || !this.address.replace(/ /g, "")) {
          this.$toast.fail(this.$t("ActivityBlindbox.toast.inputETH"));
          this.$refs.textarea && this.$refs.textarea.focus();
          return;
        } // const HelpR = await USER_API.helpMBox({
        //   address: this.address,
        //   id: this.info.id,
        //   scene: this.info.scene
        // });
        // this.hideLoading();
        // if (HelpR.status != 0) {
        //   return this.$dialog.alert({
        //     message: HelpR.data,
        //     confirmButtonText: this.$t("blindboxInvite.know"),
        //     confirmButtonColor: "$theme-light-colorPrimary",
        //   });
        // }
        // this.getDetails();
        // this.$toast.success(
        //   this.$t("ActivityBlindbox.toast.ContributeSuccess")
        // );
        // !this.isBitKeep &&
        //   this.$router.push({
        //     path: "/activity/blindbox/download",
        //     query: {}
        //   });

      }
    },

    back() {
      this.$router.back();
    },

    beforeDestroy() {
      console.log(111);
      clearTimeout(this.timer);
    },

    chountChange({
      dd,
      hh,
      mm,
      ss,
      ms,
      yy
    }) {},

    end() {},

    onChange() {},

    onclose() {
      console.log(arguments);
    }

  },
  filters: {}
});
// CONCATENATED MODULE: ./pages/activity/blindbox/detail/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var detail_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/blindbox/detail/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(280)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(281)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  detail_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "010ae2b5",
  "ec7c98c0"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_API; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
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
  baseURL: "https://b1.bitkeep.top",
  timeout: 60000,
  headers: {
    token: "",
    // token: "",
    language: "en",
    currency: "",
    brand: "web",
    os: "",
    package: "",
    clientVersion: "",
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

  let message = '??????????????????';

  if (false) {}

  return Promise.resolve({
    status: 1,
    data: message
  });
});
const USER_API = {
  //????????????
  mBoxList: (data, headers = {}) => host_user_instance.get("user/activity/mBoxList", {
    params: data,
    headers
  }),
  // ??????????????
  openMBox: (data, headers = {}) => host_user_instance.get("user/activity/openMBox", {
    params: data
  }),
  //??????????????????
  helpMBox: (data, headers = {}) => host_user_instance.get("user/activity/helpMBox", {
    params: data
  }),
  //????????????????????????
  userInviteList: (data, headers = {}) => host_user_instance.get("user/activity/inviteList", {
    params: data
  }),
  mBoxDetail: (data, headers = {}) => host_user_instance.get("user/activity/mBoxDetail", {
    params: data
  }),
  //cbkb????????????
  getCbkbSwapInfo: (data, headers = {}) => host_user_instance.get("user/cloudwallet/getCbkbSwapInfo", {
    params: data
  }),
  swapBkb: (data, headers = {}) => host_user_instance.get("user/cloudwallet/swapBkb", {
    params: data
  }),
  //BKB??????
  getAirDropCount: (data, headers = {}) => host_user_instance.post("user/cloudwallet/getAirDropCount", data),
  getAirDrop: (data, headers = {}) => host_user_instance.post("user/cloudwallet/getAirDrop", data),
  // ????????????
  miningInfo: (data, headers = {}) => host_user_instance.post("swap/mining/info", data),
  historyPhase: (data, headers = {}) => host_user_instance.post("swap/mining/historyPhase", data),
  receiveAward: (data, headers = {}) => host_user_instance.post("swap/mining/receiveAward", data),
  // ????????????
  getInviteList: (data, headers = {}) => host_user_instance.post('user/friendship/getInviteList', data),
  certifyFriendship: (data, headers = {}) => host_user_instance.post('user/friendship/certifyFriendship', data),
  activityDoneRewardList: (data, headers = {}) => host_user_instance.post('swap/mining/activityDoneRewardList', data),
  //??????bkb
  // ???????????????
  poolList: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/poolList', data),
  // ?????????????????????
  myPool: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/myPool', data),
  // ?????????????????????
  stakeHistory: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/stakeHistory', data),
  // ????????????
  receiveStakingReward: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/receiveStakingReward', data),
  //????????????
  staking: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/staking', data),
  //??????token
  handleGetToken: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/getToken', data),
  //trading ????????????
  tradingGetList: (data, headers = {}) => host_user_instance.post('swap/tradeCompetition/getList', data),
  //?????????
  tradingWaitClaim: (data, headers = {}) => host_user_instance.post('swap/tradeCompetition/waitClaim', data),
  //??????
  tradingClaim: (data, headers = {}) => host_user_instance.post('swap/tradeCompetition/claim', data),
  //????????????
  tradingSummary: (data, headers = {}) => host_user_instance.post('swap/tradeCompetition/summary', data),
  //??????list
  tradingHistory: (data, headers = {}) => host_user_instance.post('swap/tradeCompetition/history', data),
  // ????????????
  welfareSignIn: (data, headers = {}) => host_user_instance.post('user/welfare/signIn', data),
  // ??????
  getRewardDetail: (data, headers = {}) => host_user_instance.post('user/welfare/getRewardDetail', data),
  //??????????????????
  getSignInDetailByUser: (data, headers = {}) => host_user_instance.post('user/welfare/getSignInDetailByUser', data),
  // ???????????????????????????
  getRewardResult: (data, headers = {}) => host_user_instance.post('user/welfare/getRewardResult', data),
  // ??????????????????
  // getRewardDetail: (data,headers={}) => host_user_instance.post('user/welfare/getRewardDetail',data), // ?????????????????????
  pushPapersIn: (data, headers = {}) => host_user_instance.post('user/welfare/pushPapersIn', data),
  // ????????????
  getJoinTeleJob: (data, headers = {}) => host_user_instance.post('user/welfare/getJoinTeleJob', data),
  // ????????????
  getFirstSwapJob: (data, headers = {}) => host_user_instance.post('user/welfare/getFirstSwapJob', data),
  // swap????????????
  getFirst50UJob: (data, headers = {}) => host_user_instance.post('user/welfare/getFirst50UJob', data),
  // ??????50u
  newUserRewardJobs: (data, headers = {}) => host_user_instance.post('user/welfare/newUserRewardJobs', data),
  // ????????????
  // NFTMint
  //??????????????????
  nftMintGetInfo: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/getInfo", data),
  //??????????????????
  nftMintInvite: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/invite", data),
  //??????TX
  buildNftMintTxs: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/buildNftMintTxs", data),
  //??????token
  nftMintGetToken: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/getToken", data),
  //????????????????????????
  nftMintLotteryList: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/LotteryList", data),
  //??????TX
  nftMintbuildNftMeltTxs: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/buildNftMeltTxs", data),
  //???????????????NTT??????
  nftMintnftList: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/nftList", data),
  //??????Mint???????????????
  nftMintcheckTransaction: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/checkTransaction", data)
};

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_3521874b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_3521874b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_3521874b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_3521874b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_3521874b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseMixin; });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);


function LowerCase(str = '') {
  return (str || '').toLowerCase();
}

const BaseMixin = {
  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["local"]),

    locale() {
      return this.local.locale;
    },

    isBitKeep() {
      return this.local.UA.isBitKeep;
    }

  },
  created: function () {},
  methods: {
    /**
     * 
     * @param {*} coin   'test'
     * @param {*} chain   'ht'
     * @param {*} contract  ??????: '0x76b9a40Fb2844A450C086B06A4D20599C16FF6eA'    nft: '0x76b9a40Fb2844A450C086B06A4D20599C16FF6eA#BK#NFT'
     * @returns 
     */
    async addCoin(coin, chain, contract) {
      if (!this.isBitKeep) return;

      try {
        // await this._isCoinHas(chain, contract);
        await this._addCoin(coin, chain, contract);
      } catch (error) {
        console.error(error);
      }
    },

    _addCoin(coin, chain, contract) {
      return new Promise(resolve => {
        window.BitKeepInvoke.addCoin(coin, chain, contract, (err, data) => {
          console.log(err, data);
          if (err) return resolve(false);
          console.log(data);
          if (data) return resolve(true);
          resolve(false);
        });
      });
    },

    _isCoinHas(chain, contract) {
      return new Promise(resolve => {
        window.BitKeepInvoke.getCoins((err, data) => {
          console.log(err, data);
          if (err) return resolve(false);

          if (data) {
            let coinItem = data.find(item => `${LowerCase(item.chain)}_${LowerCase(item.contract)}` == `${LowerCase(chain)}_${LowerCase(contract)}`);
            return resolve(coinItem);
          }

          resolve(false);
        });
      });
    },

    showLoading(msg) {
      this.Toast = this.$toast.loading({
        duration: 0,
        // ???????????? toast
        forbidClick: true,
        message: msg || ""
      }); // const isBitKeepInvoke = typeof BitKeepInvoke !== "undefined";
      // // this.isLoading = true;
      // isBitKeepInvoke && BitKeepInvoke.showLoading();
    },

    hideLoading() {
      if (this.Toast) {
        this.Toast.clear();
      } // const isBitKeepInvoke = typeof BitKeepInvoke !== "undefined";
      // // this.isLoading = false;
      // isBitKeepInvoke && BitKeepInvoke.hideLoading();

    }

  }
};

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/header.vue?vue&type=template&id=3521874b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{fixed:_vm.fixed,header:true},attrs:{"id":"Header"}},[_vm._ssrNode("<div class=\"header_wapper\" data-v-3521874b>","</div>",[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/header.vue?vue&type=template&id=3521874b&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var headervue_type_script_lang_js_ = ({
  name: "Header",
  props: {
    fixed: {
      type: Boolean,
      default: () => true
    }
  },
  computed: {},

  data() {
    return {
      info: {}
    };
  },

  updated() {
    console.log(11111);
  },

  async mounted() {
    await this.$nextTick();
  },

  methods: {
    onChange() {},

    onclose() {
      console.log(arguments);
    }

  },
  filters: {}
});
// CONCATENATED MODULE: ./components/common/header.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_headervue_type_script_lang_js_ = (headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(88)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3521874b",
  "1eb405d8"
  
)

/* harmony default export */ var header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFaSURBVHgB7ZiNTcMwEIUvFQN0BI9QNggTMEJHgA0Im3QDYILSCdoNwgawQXiHbCm4ieNz7DiV/ElPTc9q9ck/pyREhULBn67rFPLd5aNFdn2njeXYIFvKh0Ke+oUNrZw7x9gJOdAy7JF6aMAl2FZVdaAFwL6rx8ZueokH0adMIRfM8BclxnsGdQs64vKMvCHcEl4oMZIlbuh6Izeu/RMDieDjSH1PCUl2SDCz2xizKxH8GKmf7II+SC1yxPWZZSkQieAzcrFqr3av1HJ8mIzU3/dQSe82A5EffNzrZVPIu6655MiSfLB/E02wJ/o5VHfIGYIkoxwSDzmDeLlnCwrkDCLJWYIBcgZvyWDBGXIGL8kgwQhyhsn/Cb2biSFn2OkMIprBBHKTSG63FpdjvARzyTGTgjnlGKdgbjnGJagosxzjajM1rYDVP3b+g/ecfoGTC35xpahQKPjzC6Ozn3JRmGUSAAAAAElFTkSuQmCC"

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFESURBVHgB7ZbRTQMxDIb/IAZgBSaADThGYAJgEsQITFBGYANggh4bsEG7QWpLeYjS5M6Ok1Mf8klWpF7sfk3qXIDBYKDHe/9GcfAydpn8G4q9V6IR1LAr1FBL5upcoRPOuSMNjxQzDFwL5nxS/C48/y89YElaGJb8prhHK5KVf4ER6XbncrttcUzY7idUsIkgryANX6igu2CQ+6G4QwVdBQtyfxS3sHR3iyYJjTEnteYgnW0cTXGT4JpcMm+/qaBULicJKbWCWrlUElJqBGvl4nxI0Qpa5ZZoeczE/yE+SqbwBjEhuSysklwKHBrJMU0EmUgSreSYZoKMVox+0ETDc5T/Kk1Ud3ENXDv+otycTW4zFoaglSFo5eIFJefgg1fchJRMaxNc7kPf0WgJOqjPfEpb3OxVZaUk+IFt4QV5x2Aw0HMCShN+nd/b/wkAAAAASUVORK5CYII="

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

const Header = _header_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = ({
  Header: _header_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ })

};;
//# sourceMappingURL=_id.js.map