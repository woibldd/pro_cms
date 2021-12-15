exports.ids = [31];
exports.modules = {

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(201);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("7e605698", content, true, context)
};

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inviteList_vue_vue_type_style_index_0_id_3c9e1ecc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inviteList_vue_vue_type_style_index_0_id_3c9e1ecc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inviteList_vue_vue_type_style_index_0_id_3c9e1ecc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inviteList_vue_vue_type_style_index_0_id_3c9e1ecc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inviteList_vue_vue_type_style_index_0_id_3c9e1ecc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-3c9e1ecc] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-3c9e1ecc] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-3c9e1ecc] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-3c9e1ecc] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-3c9e1ecc] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-3c9e1ecc] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorBackground0[data-v-3c9e1ecc] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-3c9e1ecc] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-3c9e1ecc] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-3c9e1ecc] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-3c9e1ecc] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-3c9e1ecc] {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary[data-v-3c9e1ecc] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-3c9e1ecc] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-3c9e1ecc] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-3c9e1ecc] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-3c9e1ecc] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-3c9e1ecc] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-3c9e1ecc] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-3c9e1ecc] {\n  color: #F04E98;\n}\n.theme-light .colorBlack[data-v-3c9e1ecc] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-3c9e1ecc] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-3c9e1ecc] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-3c9e1ecc] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-3c9e1ecc] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-3c9e1ecc] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-3c9e1ecc] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-3c9e1ecc] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0[data-v-3c9e1ecc] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-3c9e1ecc] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-3c9e1ecc] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-3c9e1ecc] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-3c9e1ecc] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-3c9e1ecc] {\n  background-color: #1F212E;\n}\n.theme-dark .colorBackground0[data-v-3c9e1ecc] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-3c9e1ecc] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-3c9e1ecc] {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3[data-v-3c9e1ecc] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-3c9e1ecc] {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary[data-v-3c9e1ecc] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-3c9e1ecc] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-3c9e1ecc] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-3c9e1ecc] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-3c9e1ecc] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-3c9e1ecc] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-3c9e1ecc] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-3c9e1ecc] {\n  color: #F04E98;\n}\n.theme-dark .colorBlack[data-v-3c9e1ecc] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-3c9e1ecc] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-3c9e1ecc] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-3c9e1ecc] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-3c9e1ecc] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-3c9e1ecc] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-3c9e1ecc] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-3c9e1ecc] {\n  color: rgba(47,128,237,0.1);\n}\n.invite-list-box .loading[data-v-3c9e1ecc] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.invite-list-box .setHeight[data-v-3c9e1ecc] {\n  min-height: 90vh;\n}\n.invite-list-box .invite-list-header[data-v-3c9e1ecc] {\n  margin: 0.43rem 0.43rem 0;\n  border-radius: 0.21rem 0.21rem 0 0;\n  color: #495bff;\n  display: flex;\n  padding: 0.27rem 0.4rem 0.4rem;\n  line-height: 0.75rem;\n  background-color: rgba(73,91,255,0.1);\n}\n.invite-list-box .invite-list-header .color-line[data-v-3c9e1ecc] {\n  width: 0.03rem;\n  height: 0.96rem;\n  opacity: 0.1;\n  margin-top: 0.37rem;\n  background: #495bff;\n}\n.invite-list-box .invite-list-header .invite-list-header-left[data-v-3c9e1ecc] {\n  width: 50%;\n}\n.invite-list-box .invite-list-header .invite-list-header-left[data-v-3c9e1ecc] :first-child {\n  font-size: 0.37rem;\n}\n.invite-list-box .invite-list-header .invite-list-header-left[data-v-3c9e1ecc] :last-child {\n  font-size: 0.64rem;\n}\n.invite-list-box .invite-list-header .invite-list-header-right[data-v-3c9e1ecc] {\n  width: 50%;\n  padding-left: 0.43rem;\n}\n.invite-list-box .invite-list-header .invite-list-header-right[data-v-3c9e1ecc] :first-child {\n  font-size: 0.37rem;\n}\n.invite-list-box .invite-list-header .invite-list-header-right[data-v-3c9e1ecc] :last-child {\n  font-size: 0.64rem;\n}\n.invite-list-box .invite-row[data-v-3c9e1ecc] {\n  padding: 0 0.43rem;\n  height: 0.8rem;\n  line-height: 0.8rem;\n}\n.invite-list-box .invite-line[data-v-3c9e1ecc] {\n  width: 100%;\n  height: 0.03rem;\n}\n.invite-list-box .invite-row-data[data-v-3c9e1ecc] {\n  height: 1.33rem;\n  line-height: 1.33rem;\n  margin: 0 0.43rem;\n}\n.invite-list-box .invite-row-data .invite-row-data-row[data-v-3c9e1ecc] {\n  font-family: \"bitkeep DIN\";\n}\n.invite-list-box .noData[data-v-3c9e1ecc] {\n  min-height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.invite-list-box .noData img[data-v-3c9e1ecc] {\n  width: 2.67rem;\n  height: 2.67rem;\n}\n.invite-list-box .noData p[data-v-3c9e1ecc] {\n  font-size: 0.37rem;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindboxInvite/inviteList.vue?vue&type=template&id=3c9e1ecc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"invite-list"},[(_vm.isLoading)?_vm._ssrNode("<div class=\"loading\" data-v-3c9e1ecc>","</div>",[_c('van-loading',{attrs:{"color":"#1989fa","vertical":""}},[_vm._v(_vm._s(_vm.$t("base.loading"))+"...")])],1):_vm._ssrNode("<div class=\"invite-list-box\" data-v-3c9e1ecc>","</div>",[_vm._ssrNode("<div class=\"invite-list-header\" data-v-3c9e1ecc><div class=\"invite-list-header-left\" data-v-3c9e1ecc><div data-v-3c9e1ecc>"+_vm._ssrEscape(_vm._s(_vm.$t("blindboxInvite.inforce")))+"</div> <div class=\"setFontFamily\" data-v-3c9e1ecc>"+_vm._ssrEscape(_vm._s(_vm.activeCount || 0))+"</div></div> <div class=\"color-line\" data-v-3c9e1ecc></div> <div class=\"invite-list-header-right\" data-v-3c9e1ecc><div data-v-3c9e1ecc>"+_vm._ssrEscape(_vm._s(_vm.$t("blindboxInvite.inactivated")))+"</div> <div class=\"setFontFamily\" data-v-3c9e1ecc>"+_vm._ssrEscape(_vm._s(_vm.unActiveCount || 0))+"</div></div></div> "),(_vm.inviteList.length > 0)?_vm._ssrNode("<div data-v-3c9e1ecc>","</div>",[_c('van-pull-refresh',{staticClass:"setHeight",attrs:{"success-text":_vm.$t('mining.success'),"loading-text":_vm.$t('mining.loading'),"loosing-text":_vm.$t('mining.loading')},on:{"refresh":_vm.onRefresh},model:{value:(_vm.refreshing),callback:function ($$v) {_vm.refreshing=$$v},expression:"refreshing"}},[_c('van-list',{attrs:{"finished":_vm.finished,"immediate-check":false},on:{"load":_vm.getInviteList},model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}},[_c('van-row',{staticClass:"invite-row"},[_c('van-col',{staticClass:"invite-col textSecond3",attrs:{"span":"8"}},[_vm._v(_vm._s(_vm.$t("blindboxInvite.Address")))]),_vm._v(" "),_c('van-col',{staticClass:"invite-col textSecond3",attrs:{"span":"7"}},[_vm._v(_vm._s(_vm.$t("blindboxInvite.State")))]),_vm._v(" "),_c('van-col',{staticClass:"invite-col textSecond3",attrs:{"span":"9"}},[_vm._v(_vm._s(_vm.$t("blindboxInvite.Time")))])],1),_vm._v(" "),_c('div',{staticClass:"invite-line colorLine"}),_vm._v(" "),_vm._l((_vm.inviteList),function(item){return _c('div',{key:item.address,staticClass:"invite-row-data"},[_c('van-row',{staticClass:"invite-row-data-row",class:item.state == 1 ? 'textPrimary0' : 'textSecond3'},[_c('van-col',{staticClass:"invite-row-data-col",attrs:{"span":"8"}},[_vm._v(_vm._s(_vm._f("address")(item.address_friend)))]),_vm._v(" "),_c('van-col',{staticClass:"invite-row-data-col",attrs:{"span":"7"}},[_vm._v(_vm._s(item.state == 1 ? "In force" : "Inactivated"))]),_vm._v(" "),_c('van-col',{staticClass:"invite-row-data-col",attrs:{"span":"9"}},[_vm._v(_vm._s(_vm._f("filterTime")(item.create_time)))])],1),_vm._v(" "),_c('div',{staticClass:"invite-line colorLine"})],1)})],2)],1)],1):_vm._ssrNode(("<div class=\"noData\" data-v-3c9e1ecc><img src=\"http://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png\" alt data-v-3c9e1ecc> <p class=\"textSecond3\" data-v-3c9e1ecc>No Data</p></div>"))],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/blindboxInvite/inviteList.vue?vue&type=template&id=3c9e1ecc&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindboxInvite/inviteList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var inviteListvue_type_script_lang_js_ = ({
  data() {
    return {
      isLoading: true,
      finished: false,
      loading: false,
      refreshing: false,
      inviteList: [],
      activeCount: 0,
      unActiveCount: 0,
      start: 0,
      limit: 20
    };
  },

  filters: {
    address(item) {
      return item && item.substring(0, 6) + " .... " + item.substr(-4);
    },

    filterTime(date) {
      let val = new Date(date);
      var Y = val.getFullYear();
      var M = val.getMonth();
      var D = val.getDate();
      var H = val.getHours();
      var MI = val.getMinutes();
      var S = val.getSeconds();
      return Y + "-" + M + "-" + D + " " + H + ":" + MI + ":" + S;
    }

  },
  computed: { ...Object(external_vuex_["mapState"])(["local"]),

    locale() {
      return this.local.locale;
    },

    isBitKeep() {
      return this.local.UA.isBitKeep;
    }

  },

  async created() {
    this.isLoading = false;
  },

  beforeMount() {
    this.isBitKeep && BitKeepInvoke.onLoadReady(() => {
      BitKeepInvoke.setTitle(this.$t("blindboxInvite.inviteFriends"));
      BitKeepInvoke.setIconAction();
      this.$nextTick(() => {
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

  mounted() {
    this.getInviteList();
  },

  methods: {
    async getInviteList() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].getInviteList({
        start: this.start * this.limit,
        limit: this.limit
      });

      if (status == 1) {
        this.isLoading = false;
        this.loading = true;
        return this.$toast(data);
      }

      this.activeCount = data.activeCount;
      this.unActiveCount = data.unActiveCount;
      var moreList = data.list;
      moreList && this.inviteList.push(...moreList);
      this.isLoading = false;
      this.$toast.clear();
      this.loading = false;
      this.start++;

      if (this.inviteList.length >= data.total_count) {
        this.finished = true;
      }
    },

    async onRefresh() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].getInviteList({
        start: 0,
        limit: this.limit
      });

      if (status == 1) {
        this.isLoading = false;
        this.$toast(data);
      }

      this.rewardsList = data.data;
      this.refreshing = false;
    },

    getSub() {
      // 中间显示省略号
      let copy = JSON.parse(JSON.stringify(this.inviteLink));
      let fisrt = copy.substring(0, 14);
      this.inviteLink = fisrt + " .... " + copy.substr(-15);
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/blindboxInvite/inviteList.vue?vue&type=script&lang=js&
 /* harmony default export */ var blindboxInvite_inviteListvue_type_script_lang_js_ = (inviteListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/blindboxInvite/inviteList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(200)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blindboxInvite_inviteListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3c9e1ecc",
  "4b619cc3"
  
)

/* harmony default export */ var inviteList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 64:
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
  baseURL: "/",
  timeout: 60000,
  headers: {
    token: "",
    // token: "",
    language: "zh",
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
  getInviteList: (data, headers = {}) => host_user_instance.post('friendship/getInviteList', data),
  certifyFriendship: (data, headers = {}) => host_user_instance.post('friendship/certifyFriendship', data),
  activityDoneRewardList: (data, headers = {}) => host_user_instance.post('swap/mining/activityDoneRewardList', data)
};

/***/ })

};;
//# sourceMappingURL=inviteList.js.map