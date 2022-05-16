exports.ids = [15];
exports.modules = {

/***/ 104:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ment_vue_vue_type_style_index_0_id_1e41ab22_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ment_vue_vue_type_style_index_0_id_1e41ab22_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ment_vue_vue_type_style_index_0_id_1e41ab22_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ment_vue_vue_type_style_index_0_id_1e41ab22_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ment_vue_vue_type_style_index_0_id_1e41ab22_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/Ment.vue?vue&type=template&id=1e41ab22&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-popup',{attrs:{"close-icon-position":"top-right","closeable":"","close-on-click-overlay":false},on:{"click-close-icon":_vm.close},model:{value:(_vm.visables),callback:function ($$v) {_vm.visables=$$v},expression:"visables"}},[_c('div',{staticClass:"Mentpopup"},[_c('div',{staticClass:"TTORegular title"},[(_vm.list.length > 1)?_c('div',{staticClass:"title1"},[_vm._v("\n        "+_vm._s(_vm.$t('polygon.meltTitle1'))+"\n        ("+_vm._s(_vm.list.filter(function (item){return item.selected==true}).length)+"/"+_vm._s(_vm.list.length)+") \n      ")]):_c('div',{staticClass:"title2"},[_vm._v("\n        "+_vm._s(_vm.$t('polygon.meltTitle2'))+"\n      ")])]),_vm._v(" "),(_vm.list.length > 1)?_c('div',{staticClass:"MentList"},[_c('swiper',{staticClass:"swiper-wrapper",attrs:{"options":_vm.swiperOption},on:{"mousemove":function (e){ return e; }}},_vm._l((_vm.list),function(item){return _c('swiper-slide',{key:item.tokenId},[_c('div',{staticClass:"Mentlogo",class:item.selected==true?'MentlogoActive':'',on:{"click":function($event){return _vm.selected(item)}}},[_c('img',{attrs:{"src":item.picUrl,"alt":""}}),_vm._v(" "),_c('div',{staticClass:"TTORegular tokenId"},[_vm._v("Token ID: #"+_vm._s(item.tokenId))])])])}),1)],1):(_vm.list.length == 1)?_c('div',{staticClass:"Mintlogo"},[_c('img',{attrs:{"src":_vm.list[0].picUrl,"alt":""}}),_vm._v(" "),_c('div',{staticClass:"TTORegular tokenId"},[_vm._v("Token ID: #"+_vm._s(_vm.list[0].tokenId))])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"PaymentBox"},[_c('div',{staticClass:"PaymentInfo"},[_c('div',{staticClass:"title TTORegular"},[_vm._v(_vm._s(_vm.$t('polygon.meltValue')))]),_vm._v(" "),_c('div',{staticClass:"PaymentContent"},[(_vm.list.length>1)?_c('span',{staticClass:"TTOMedium"},[_vm._v(_vm._s(_vm.MATIC)+" MATIC")]):_c('span',{staticClass:"TTOMedium"},[_vm._v("100 MATIC")])]),_vm._v(" "),_c('div',{staticClass:"PaymentValue"})]),_vm._v(" "),_c('div',{staticClass:"MentSubmit TTOMedium",on:{"click":function($event){return _vm.MentToken(_vm.selectedList)}}},[_vm._v("Melt")])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/polygon/Ment.vue?vue&type=template&id=1e41ab22&scoped=true&

// EXTERNAL MODULE: external "vue-awesome-swiper"
var external_vue_awesome_swiper_ = __webpack_require__(78);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/Ment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Mentvue_type_script_lang_js_ = ({
  name: "Ment",
  components: {
    Swiper: external_vue_awesome_swiper_["Swiper"],
    SwiperSlide: external_vue_awesome_swiper_["SwiperSlide"]
  },
  props: {
    showMent: {
      type: Boolean,
      default: false
    },
    MentList: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      visables: this.showMent,
      list: this.MentList.map(item => {
        item.selected = false;
        return item;
      }),
      selectedList: [],
      swiperOption: {
        initialSlide: 0,
        slidesPerView: 2.4,
        direction: 'horizontal',
        loop: false
      }
    };
  },

  watch: {
    showMent(n) {
      this.visables = n;
    }

  },
  methods: {
    selected(tokenId) {
      this.list = this.list.map(item => {
        if (item.tokenId == tokenId.tokenId) {
          item.selected = !item.selected;
        }

        return item;
      });
      this.selectedList = this.list.filter(item => {
        return item.selected == true;
      }).map(item => {
        return item.tokenId;
      });
    },

    close() {
      this.$emit("closeMent", false);
    },

    MentToken(tokens) {
      if (this.list.length == 1) {
        this.selected(this.list[0]);
        this.$emit("closeMent", this.selectedList);
      } else if (tokens.length > 0) {
        console.log({
          tokens
        });
        this.$emit("closeMent", tokens);
      } else {
        this.$toast.fail(this.$t('polygon.mentAlert'));
      }
    }

  },
  computed: {
    MATIC() {
      return this.selectedList.length * 100;
    }

  }
});
// CONCATENATED MODULE: ./components/polygon/Ment.vue?vue&type=script&lang=js&
 /* harmony default export */ var polygon_Mentvue_type_script_lang_js_ = (Mentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/polygon/Ment.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(137)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  polygon_Mentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1e41ab22",
  "d429b848"
  
)

/* harmony default export */ var Ment = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=polygon-ment.js.map