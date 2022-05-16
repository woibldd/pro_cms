exports.ids = [5,4,8];
exports.modules = {

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(133);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("365d89f2", content, true, context)
};

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFaSURBVHgB7ZiNTcMwEIUvFQN0BI9QNggTMEJHgA0Im3QDYILSCdoNwgawQXiHbCm4ieNz7DiV/ElPTc9q9ck/pyREhULBn67rFPLd5aNFdn2njeXYIFvKh0Ke+oUNrZw7x9gJOdAy7JF6aMAl2FZVdaAFwL6rx8ZueokH0adMIRfM8BclxnsGdQs64vKMvCHcEl4oMZIlbuh6Izeu/RMDieDjSH1PCUl2SDCz2xizKxH8GKmf7II+SC1yxPWZZSkQieAzcrFqr3av1HJ8mIzU3/dQSe82A5EffNzrZVPIu6655MiSfLB/E02wJ/o5VHfIGYIkoxwSDzmDeLlnCwrkDCLJWYIBcgZvyWDBGXIGL8kgwQhyhsn/Cb2biSFn2OkMIprBBHKTSG63FpdjvARzyTGTgjnlGKdgbjnGJagosxzjajM1rYDVP3b+g/ecfoGTC35xpahQKPjzC6Ozn3JRmGUSAAAAAElFTkSuQmCC"

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFESURBVHgB7ZbRTQMxDIb/IAZgBSaADThGYAJgEsQITFBGYANggh4bsEG7QWpLeYjS5M6Ok1Mf8klWpF7sfk3qXIDBYKDHe/9GcfAydpn8G4q9V6IR1LAr1FBL5upcoRPOuSMNjxQzDFwL5nxS/C48/y89YElaGJb8prhHK5KVf4ER6XbncrttcUzY7idUsIkgryANX6igu2CQ+6G4QwVdBQtyfxS3sHR3iyYJjTEnteYgnW0cTXGT4JpcMm+/qaBULicJKbWCWrlUElJqBGvl4nxI0Qpa5ZZoeczE/yE+SqbwBjEhuSysklwKHBrJMU0EmUgSreSYZoKMVox+0ETDc5T/Kk1Ud3ENXDv+otycTW4zFoaglSFo5eIFJefgg1fchJRMaxNc7kPf0WgJOqjPfEpb3OxVZaUk+IFt4QV5x2Aw0HMCShN+nd/b/wkAAAAASUVORK5CYII="

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseMixin; });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
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
     * @param {*} contract  代币: '0x76b9a40Fb2844A450C086B06A4D20599C16FF6eA'    nft: '0x76b9a40Fb2844A450C086B06A4D20599C16FF6eA#BK#NFT'
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
        // 持续展示 toast
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

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_vue_countdown_vue_vue_type_style_index_0_id_ce47b7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_vue_countdown_vue_vue_type_style_index_0_id_ce47b7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_vue_countdown_vue_vue_type_style_index_0_id_ce47b7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_vue_countdown_vue_vue_type_style_index_0_id_ce47b7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_vue_countdown_vue_vue_type_style_index_0_id_ce47b7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cuntdown[data-v-ce47b7d2] {\n  display: inline-block;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 135:
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
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/common/c-vue-countdown.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(132)
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
  "04a45a06"
  
)

/* harmony default export */ var c_vue_countdown = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(181);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("e9bff79e", content, true, context)
};

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blindTimeText_vue_vue_type_style_index_0_id_0becdc74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blindTimeText_vue_vue_type_style_index_0_id_0becdc74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blindTimeText_vue_vue_type_style_index_0_id_0becdc74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blindTimeText_vue_vue_type_style_index_0_id_0becdc74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blindTimeText_vue_vue_type_style_index_0_id_0becdc74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(20);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(182);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".block_time_content[data-v-0becdc74] {\n  font-family: PingFang SC;\n  font-style: normal;\n  position: relative;\n  width: 100%;\n  height: 0.85rem;\n  box-sizing: border-box;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center center no-repeat;\n  background-size: 100% 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.37rem;\n  color: #ffffff;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/time_bg.19e0770.png";

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(254);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3a2ef04c", content, true, context)
};

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blindbox/blindTimeText.vue?vue&type=template&id=0becdc74&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"block_time_content",attrs:{"id":"blindTimeText"}},[_vm._ssrNode(((_vm.info.status == 0 || _vm.info.status == 1)?("<span class=\"color_white\" data-v-0becdc74>"+_vm._ssrEscape(_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxDetail.invalidTimeText"))+"   ")+"</span>"):"<!---->")+" "+((_vm.info.status == 2)?("<span class=\"color_white\" data-v-0becdc74>"+_vm._ssrEscape(_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxDetail.successfullyTimeText"))+"   ")+"</span>"):"<!---->")+" "+((_vm.info.status == 3)?("<span class=\"color_white\" data-v-0becdc74>"+_vm._ssrEscape(_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxDetail.expiredTimeText"))+"   ")+"</span>"):"<!---->")+" "),(_vm.info.status == 0 || _vm.info.status == 1)?_c('Countdown',{staticClass:"color_red",attrs:{"startTime":_vm.startTime,"endTime":_vm.endTime,"format":_vm.format}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blindbox/blindTimeText.vue?vue&type=template&id=0becdc74&scoped=true&

// EXTERNAL MODULE: ./components/common/c-vue-countdown.vue + 4 modules
var c_vue_countdown = __webpack_require__(135);

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
      default: "{dd}天{hh}小时{mm}分钟{ss}秒"
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
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/blindbox/blindTimeText.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(180)
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
  "332a0f77"
  
)

/* harmony default export */ var blindTimeText = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/poster_logo@2.53db9a6.png";

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createPoster_vue_vue_type_style_index_0_id_77ca09a3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createPoster_vue_vue_type_style_index_0_id_77ca09a3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createPoster_vue_vue_type_style_index_0_id_77ca09a3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createPoster_vue_vue_type_style_index_0_id_77ca09a3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createPoster_vue_vue_type_style_index_0_id_77ca09a3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(20);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(255);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".qcodeModalwarpper[data-v-77ca09a3] {\n  width: 100vw;\n  z-index: 100;\n}\n.qcodeModalwarpper.hidden[data-v-77ca09a3] {\n  z-index: -10 !important;\n  opacity: 0;\n}\n.qcodeModalwarpper .canvasTmp[data-v-77ca09a3] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.qcodeModalwarpper .close[data-v-77ca09a3] {\n  position: absolute;\n  z-index: 1;\n  top: 1.6rem;\n  right: 0.69rem;\n  width: 0.75rem;\n  height: 0.75rem;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center center no-repeat;\n  background-size: 100% 100%;\n}\n.qcodeModalwarpper .postershow[data-v-77ca09a3] {\n  width: 9.2rem;\n  height: 14.21rem;\n  max-height: calc(100vh - 3.07rem);\n  margin: 0.48rem auto 0;\n  position: relative;\n}\n.qcodeModalwarpper .postershow img[data-v-77ca09a3] {\n  width: 100%;\n  height: 100%;\n}\n.qcodeModalwarpper .poster_wrapper[data-v-77ca09a3] {\n  position: relative;\n  width: 9.2rem;\n  height: 14.24rem;\n  max-height: calc(100vh - 3.07rem);\n  margin: 0.48rem auto 0;\n  position: relative;\n}\n.qcodeModalwarpper .poster_wrapper .poster_bg[data-v-77ca09a3] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title[data-v-77ca09a3] {\n  left: 0.43rem;\n  bottom: 0.59rem;\n  position: absolute;\n  font-weight: 500;\n  font-size: 0.32rem;\n  line-height: 0.48rem;\n  color: #ffffff;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title .logo[data-v-77ca09a3] {\n  width: 2.4rem;\n  height: 0.64rem;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title .title[data-v-77ca09a3] {\n  margin-top: 0.27rem;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title .content[data-v-77ca09a3] {\n  width: 5.84rem;\n  word-break: break-all;\n  word-wrap: break-word;\n}\n.qcodeModalwarpper .poster_wrapper .commany_title .content.en[data-v-77ca09a3] {\n  line-height: 0.35rem;\n}\n.qcodeModalwarpper .poster_wrapper .poster_qrcode[data-v-77ca09a3] {\n  position: absolute;\n  right: 0.48rem;\n  bottom: 0.53rem;\n  width: 1.6rem;\n  height: 1.6rem;\n  box-shadow: inset 0 0.03rem 0 rgba(255,255,255,0.4),inset 0 -0.03rem 0 rgba(255,255,255,0.15);\n  border-radius: 0.21rem;\n}\n.qcodeModalwarpper .footer[data-v-77ca09a3] {\n  margin-top: 0.4rem;\n  display: flex;\n  justify-content: center;\n}\n.qcodeModalwarpper .footer .left[data-v-77ca09a3] {\n  margin-right: 0.51rem;\n}\n.qcodeModalwarpper .footer .btn[data-v-77ca09a3] {\n  display: flex;\n  width: 4.32rem;\n  height: 1.33rem;\n  font-size: 0.43rem;\n  background: linear-gradient(122.71deg, #5aebff 3.38%, #6d39ff 92.57%),#c4c4c4;\n  border-radius: 2.67rem;\n  font-weight: 600;\n  color: #ffffff;\n  justify-content: center;\n  align-items: center;\n}\n.qcodeModalwarpper .footer .btn img[data-v-77ca09a3] {\n  width: 0.53rem;\n  height: 0.53rem;\n  margin-right: 0.16rem;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_close@2.730c7dc.png";

/***/ }),

/***/ 316:
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
  },attrs:{"show":true}},[_c('canvas',{ref:"qrcode",staticClass:"canvasTmp"}),_vm._v(" "),_c('div',{on:{"click":function($event){$event.stopPropagation();}}},[_c('BlindTimeText',{staticClass:"block_time",attrs:{"info":_vm.info,"startTime":_vm.startTime,"endTime":_vm.endTime,"format":_vm.format}}),_vm._v(" "),_c('span',{staticClass:"close",attrs:{"name":"close"},on:{"click":function($event){_vm.showModal = false}}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.poster.url),expression:"!poster.url"}],ref:"poster",staticClass:"poster_wrapper",attrs:{"id":"poster"}},[_c('img',{staticClass:"poster_bg",attrs:{"src":_vm.proxy_img,"alt":""},on:{"load":_vm.createPoster}}),_vm._v(" "),_c('div',{staticClass:"commany_title"},[_c('img',{staticClass:"logo",attrs:{"src":__webpack_require__(252),"alt":""}}),_vm._v(" "),_c('div',{class:( _obj = { content:true}, _obj[_vm.locale] = true, _obj )},[_c('div',[_vm._v("\n            "+_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxDetail.ScanBlindBox"))+"\n          ")]),_vm._v(" "),_c('div',[_vm._v("\n            "+_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxDetail.DownloadBitkeep"))+"\n          ")])])]),_vm._v(" "),_c('img',{staticClass:"poster_qrcode",attrs:{"src":_vm.qrcodeUrl}})]),_vm._v(" "),(_vm.poster.url)?_c('div',{staticClass:"postershow"},[_c('img',{attrs:{"src":_vm.poster.url}})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"footer"},[(_vm.isBitKeep || _vm.pedding)?_c('div',{staticClass:"btn left",on:{"click":_vm.saveImage}},[_c('img',{attrs:{"src":__webpack_require__(128),"alt":""}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("ActivityBlindbox.button.savePicture")))])]):_c('a',{staticClass:"btn left",attrs:{"href":_vm.poster.url,"download":new Date().getTime() + '.jpeg'}},[_c('img',{attrs:{"src":__webpack_require__(128),"alt":""}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("ActivityBlindbox.button.savePicture")))])]),_vm._v(" "),(_vm.isBitKeep)?_c('div',{staticClass:"btn",on:{"click":_vm.shareImage}},[_c('img',{attrs:{"src":__webpack_require__(129),"alt":""}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("ActivityBlindbox.button.ShareLink")))])]):_c('div',{staticClass:"btn"},[_c('img',{attrs:{"src":__webpack_require__(129),"alt":""}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("ActivityBlindbox.button.ShareLink")))])])])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blindbox/createPoster.vue?vue&type=template&id=77ca09a3&scoped=true&

// EXTERNAL MODULE: external "qrcode"
var external_qrcode_ = __webpack_require__(115);
var external_qrcode_default = /*#__PURE__*/__webpack_require__.n(external_qrcode_);

// EXTERNAL MODULE: ./mixin/base.js
var base = __webpack_require__(131);

// EXTERNAL MODULE: external "html2canvas"
var external_html2canvas_ = __webpack_require__(116);
var external_html2canvas_default = /*#__PURE__*/__webpack_require__.n(external_html2canvas_);

// EXTERNAL MODULE: ./components/blindbox/blindTimeText.vue + 4 modules
var blindTimeText = __webpack_require__(188);

// EXTERNAL MODULE: ./tools/common.js
var common = __webpack_require__(27);

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
      default: () => "{dd}天{hh}小时{mm}分钟{ss}秒"
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
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/blindbox/createPoster.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(253)
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
  "71923931"
  
)

/* harmony default export */ var createPoster = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blindbox-create-poster.js.map