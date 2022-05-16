exports.ids = [10];
exports.modules = {

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(154);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("53d50b6e", content, true, context)
};

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirdropAddressCard_vue_vue_type_style_index_0_id_15a011ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirdropAddressCard_vue_vue_type_style_index_0_id_15a011ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirdropAddressCard_vue_vue_type_style_index_0_id_15a011ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirdropAddressCard_vue_vue_type_style_index_0_id_15a011ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirdropAddressCard_vue_vue_type_style_index_0_id_15a011ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".AirdropAddressBox[data-v-15a011ee] {\n  width: 8.4rem;\n  background: #202024;\n  box-sizing: border-box;\n  border: 0.03rem solid #49494D;\n}\n.AirdropAddressBox .content[data-v-15a011ee] {\n  padding: 0.53rem 0.27rem 0 0.27rem;\n  box-sizing: border-box;\n}\n.AirdropAddressBox .content .title[data-v-15a011ee] {\n  font-size: 0.37rem;\n  font-weight: 400;\n  color: #fff;\n  text-align: left;\n}\n.AirdropAddressBox .content .title span[data-v-15a011ee] {\n  font-size: 0.53rem;\n  color: #09EFBD;\n}\n.AirdropAddressBox .content .getTime[data-v-15a011ee] {\n  margin: 0.27rem 0;\n  font-size: 0.37rem;\n  font-weight: 400;\n  color: #fff;\n}\n.AirdropAddressBox .content .list[data-v-15a011ee] {\n  width: 100%;\n  height: 12.11rem;\n  overflow: auto;\n}\n.AirdropAddressBox .content .list .Addresslist[data-v-15a011ee] {\n  width: 100%;\n  overflow: auto;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  padding-bottom: 0.53rem;\n}\n.AirdropAddressBox .content .list .Addresslist .item[data-v-15a011ee] {\n  display: block;\n  width: 2.48rem;\n  height: 0.37rem;\n  font-size: 0.29rem;\n  font-weight: 400;\n  color: #fff;\n  box-sizing: border-box;\n  margin: 0.27rem 0 0;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/AirdropAddressCard.vue?vue&type=template&id=15a011ee&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-popup',{attrs:{"close-icon-position":"top-right","close-on-click-overlay":false,"closeable":""},on:{"click-close-icon":_vm.close},model:{value:(_vm.visables),callback:function ($$v) {_vm.visables=$$v},expression:"visables"}},[_c('div',{staticClass:"AirdropAddressBox"},[_c('div',{staticClass:"content"},[_c('div',{staticClass:"title TTORegular"},[_vm._v(_vm._s(_vm.$t('polygon.airdropTips1'))+" "),_c('span',{staticClass:"TTOMedium"},[_vm._v("BKB"+_vm._s(_vm.$t('polygon.airdropTips2')))])]),_vm._v(" "),_c('div',{staticClass:"getTime TTORegular"},[_vm._v(_vm._s(_vm._f("timeFilter")(((new Date).getTime())-86400000)))]),_vm._v(" "),_c('div',{staticClass:"list"},[_c('div',{staticClass:"Addresslist",on:{"touchmove":function($event){$event.stopPropagation();return _vm.touchmove.apply(null, arguments)}}},_vm._l((_vm.LotteryList),function(item,index){return _c('div',{key:index,staticClass:"item TTORegular"},[_vm._v(" \n            "+_vm._s(item)+" \n          ")])}),0)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/polygon/AirdropAddressCard.vue?vue&type=template&id=15a011ee&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/AirdropAddressCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AirdropAddressCardvue_type_script_lang_js_ = ({
  name: "AirdropAddressCard",
  props: {
    showAirdropAddress: {
      type: Boolean,
      default: false
    },
    LotteryList: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      MintNum: 0,
      visables: this.showAirdropAddress
    };
  },

  computed: {
    showList() {
      const list = [];
      let dr = [];

      for (let i = 0; i < this.LotteryList.length; i++) {
        if (dr.length < 3) {
          dr.push(this.LotteryList[i]);
        }

        if (i % 3 === 2) {
          list.push(dr);
          dr = [];
        }
      }

      return list;
    }

  },
  watch: {
    showAirdropAddress(n) {
      this.visables = n;
    }

  },
  methods: {
    close() {
      this.$emit("closeAirdropAddressCard", false);
    },

    touchmove(event) {}

  },

  async mounted() {}

});
// CONCATENATED MODULE: ./components/polygon/AirdropAddressCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var polygon_AirdropAddressCardvue_type_script_lang_js_ = (AirdropAddressCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/polygon/AirdropAddressCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(153)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  polygon_AirdropAddressCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "15a011ee",
  "07dc2d21"
  
)

/* harmony default export */ var AirdropAddressCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=polygon-airdrop-address-card.js.map