exports.ids = [5,4,8];
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


/***/ })

};;
//# sourceMappingURL=blindbox-create-poster.js.map