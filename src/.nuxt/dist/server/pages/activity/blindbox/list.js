exports.ids = [18,5,7];
exports.modules = {

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("3d40511e", content, true, context)
};

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_edd61e5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_edd61e5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_edd61e5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_edd61e5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_edd61e5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(59);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(124);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading[data-v-edd61e5a] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.color_red[data-v-edd61e5a] {\n  color: #ff255a;\n  font-weight: 600;\n}\n.font-18[data-v-edd61e5a] {\n  font-size: 0.48rem;\n}\n.color_text[data-v-edd61e5a] {\n  color: #4b5373;\n}\n.color_blod[data-v-edd61e5a] {\n  color: #080d21;\n}\n.btn[data-v-edd61e5a] {\n  background: linear-gradient(122.71deg, #74eeff 3.38%, #6f2cff 92.57%),#c4c4c4;\n  border-radius: 2.67rem;\n  height: 0.64rem;\n  width: 1.81rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 2.67rem;\n  font-weight: 500;\n  font-size: 0.32rem;\n  line-height: 0.32rem;\n  color: #ffffff;\n}\n.btn[data-v-edd61e5a]:active {\n  opacity: 0.8;\n}\n#blindbox_list[data-v-edd61e5a] {\n  word-break: break-all;\n  background: #3d0b88;\n  min-height: 100vh;\n  box-sizing: border-box;\n  font-style: normal;\n  font-weight: normal;\n  font-family: PingFang SC;\n}\n#blindbox_list .blindbox_list_header[data-v-edd61e5a] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.59rem 0.4rem;\n  box-sizing: border-box;\n}\n#blindbox_list .blindbox_list_header img[data-v-edd61e5a] {\n  width: 0.85rem;\n  height: 0.85rem;\n}\n#blindbox_list .blindbox_list_body[data-v-edd61e5a] {\n  overflow: hidden;\n}\n#blindbox_list .blindbox_list_body .blindbox_list_content[data-v-edd61e5a] {\n  min-height: 100vh;\n}\n#blindbox_list .blindbox_list_body .noData[data-v-edd61e5a] {\n  box-sizing: border-box;\n  width: 5.87rem;\n  height: 7.52rem;\n  margin: 4.43rem auto 0;\n  box-shadow: inset 0 0.03rem 0 rgba(255,255,255,0.6);\n  backdrop-filter: blur(0.27rem);\n  border-radius: 0.48rem;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center center no-repeat;\n  background-size: 100% 100%;\n  text-align: center;\n}\n#blindbox_list .blindbox_list_body .noData.en[data-v-edd61e5a] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center center no-repeat;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper[data-v-edd61e5a] {\n  position: relative;\n  overflow: hidden;\n  width: 9.15rem;\n  border-radius: 0.27rem;\n  box-sizing: border-box;\n  padding: 0.27rem;\n  margin: 0.27rem 0.43rem;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 0.27rem;\n  align-items: center;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_invaild[data-v-edd61e5a] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background: #ffffff;\n  opacity: 0.4;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_pic[data-v-edd61e5a] {\n  height: 1.97rem;\n  width: 1.97rem;\n  border-radius: 0.16rem;\n  overflow: hidden;\n  display: flex;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_pic img[data-v-edd61e5a] {\n  width: 100%;\n  height: 100%;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont[data-v-edd61e5a] {\n  flex: 1;\n  width: 4.29rem;\n  color: #7f828f;\n  font-size: 0.27rem;\n  line-height: 0.37rem;\n  margin: 0 0.27rem;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont .title[data-v-edd61e5a] {\n  margin-top: 0.13rem;\n  font-size: 0.43rem;\n  font-weight: 500;\n  line-height: 0.43rem;\n  letter-spacing: 0;\n  color: #080d21;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont .content[data-v-edd61e5a] {\n  margin: 0.13rem 0;\n  line-height: 0.37rem;\n  color: #7F828F;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont .time[data-v-edd61e5a] {\n  font-size: 0.27rem;\n  line-height: 0.32rem;\n  color: #080D21;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_btn[data-v-edd61e5a] {\n  height: 1.97rem;\n  display: flex;\n  display: flex;\n  align-items: flex-end;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/noData@2.aa4b513.png";

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindbox/list.vue?vue&type=template&id=edd61e5a&scoped=true&
var render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"blindbox_list"}},[(_vm.isLoading)?_vm._ssrNode("<div class=\"loading\" data-v-edd61e5a>","</div>",[_c('van-loading',{attrs:{"color":"#1989fa"}})],1):_vm._ssrNode("<div data-v-edd61e5a>","</div>",[_vm._ssrNode("<div class=\"blindbox_list_body\" data-v-edd61e5a>","</div>",[_c('van-pull-refresh',{staticClass:"blindbox_list_content",on:{"refresh":_vm.onRefresh},model:{value:(_vm.refreshing),callback:function ($$v) {_vm.refreshing=$$v},expression:"refreshing"}},[_c('van-list',{attrs:{"finished":_vm.finished,"finished-text":_vm.$t('base.no_more')},on:{"load":_vm.onLoad},model:{value:(_vm.listLoading),callback:function ($$v) {_vm.listLoading=$$v},expression:"listLoading"}},_vm._l((_vm.blindbox_list),function(item){return _c('div',{key:item.id,on:{"click":function($event){return _vm.handlerBtn(item, 0)}}},[_c('div',{class:{ list_item: true }},[_c('div',{staticClass:"list_item_warpper radial-gradient active"},[(item.status == 3)?_c('div',{staticClass:"list_item_invaild"}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"list_item_pic"},[_c('van-image',{attrs:{"width":"100%","height":"100%","src":item.cover_image}})],1),_vm._v(" "),_c('div',{staticClass:"list_item_cont"},[_c('div',{staticClass:"title color_blod van-ellipsis"},[_vm._v("\n                    "+_vm._s(item.title)+"\n                  ")]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('span',{domProps:{"innerHTML":_vm._s(
                        _vm.$t(
                          'ActivityBlindbox.ActivityBlindboxList.blindBoxNumText',
                          {
                            surplus: item.invite - item.already_invite,
                            invite: item.invite
                          }
                        )
                      )}}),_vm._v(" "),_c('div',[_vm._v("\n                        "+_vm._s(_vm.$t(
                          'ActivityBlindbox.ActivityBlindboxList.blindBoxSurpriseText'))+"\n                      ")])]),_vm._v(" "),_c('div',{staticClass:"time van-ellipsis"},[_c('span',[_vm._v(_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxList.ValidUntilText")))]),_vm._v(" "+_vm._s(_vm._f("date")(item.start_time))+"\n                  ")])]),_vm._v(" "),_c('div',{staticClass:"list_item_btn"},[(item.status == 0)?_c('div',{staticClass:"btn",on:{"click":function($event){return _vm.handlerBtn(item, 0)}}},[_vm._v("\n                    "+_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxList.GoShareText"))+"\n                  ")]):_vm._e(),_vm._v(" "),(item.status == 1 && item.is_owner ==1)?_c('div',{staticClass:"btn",on:{"click":function($event){return _vm.handlerBtn(item, 1)}}},[_vm._v("\n                    "+_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxList.GoOpenText"))+"\n                  ")]):_vm._e(),_vm._v(" "),(item.status == 1 && item.is_owner !=1)?_c('div',{staticClass:"btn",on:{"click":function($event){return _vm.handlerBtn(item, 0)}}},[_vm._v("\n                    "+_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxList.GoShareText"))+"\n                  ")]):_vm._e(),_vm._v(" "),(item.status == 2)?_c('div',{staticClass:"btn",on:{"click":function($event){return _vm.handlerBtn(item, 2)}}},[_vm._v("\n                      "+_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxList.SuccessfullyOpenedText"))+"\n                  ")]):_vm._e(),_vm._v(" "),(item.status == 3)?_c('div',{staticClass:"btn",on:{"click":function($event){return _vm.handlerBtn(item, 2)}}},[_vm._v("\n                      "+_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxList.expiredText"))+"\n                  ")]):_vm._e()])])])])}),0),_vm._v(" "),(!_vm.listLoading && (!_vm.blindbox_list || _vm.blindbox_list.length == 0))?_c('div',{class:( _obj = {noData:true}, _obj[_vm.locale] = true, _obj )}):_vm._e()],1)],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/blindbox/list.vue?vue&type=template&id=edd61e5a&scoped=true&

// EXTERNAL MODULE: ./components/common/index.js
var common = __webpack_require__(64);

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(55);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(71);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindbox/list.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var listvue_type_script_lang_js_ = ({
  name: "mBoxList",
  components: {
    Header: common["Header"]
  },
  computed: { ...Object(external_vuex_["mapState"])(["local"]),

    locale() {
      return this.local.locale;
    }

  },

  // async asyncData(ctx) {},
  data() {
    return {
      isLoading: true,
      listLoading: false,
      finished: false,
      refreshing: false,
      total: 20,
      start: 0,
      limit: 20,
      blindbox_list: []
    };
  },

  async created() {},

  async beforeMount() {// this.onLoad(true);
  },

  async mounted() {
    this.showLoading();
    await this.$nextTick();
    this.hideLoading();
    this.isLoading = false;
  },

  methods: {
    async getList(pageNo = 1) {
      const {
        data,
        status
      } = await client["a" /* USER_API */].mBoxList({
        start: pageNo,
        limit: this.limit
      }).catch(console);
      if (status == 1) return this.$toast.fail(data);
      this.total = data.total;
      const list = data.list.map(item => {
        item.bg_icon = `url(${item.cover_image}) no-repeat  center center/cover`;
        return item;
      });
      this.start = pageNo;

      if (pageNo == 1) {
        this.blindbox_list = list;
      } else {
        this.blindbox_list = [...this.blindbox_list, ...list];
      }
    },

    handlerBtn(item, type) {
      this.$router.push({
        path: "/activity/blindbox/detail",
        query: {
          id: item.id
        }
      });
    },

    showLoading() {
      this.Toast = this.$toast.loading({
        duration: 0,
        // 持续展示 toast
        forbidClick: true // message: '请求中请稍后',

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

    },

    back() {
      this.$router.back();
    },

    async onLoad(isRefresh) {
      if (this.refreshing) {
        this.blindbox_list = [];
        this.refreshing = false;
      }

      await this.getList(isRefresh ? 1 : this.start + 1);
      this.listLoading = false; // if (this.total <= this.blindbox_list.length) {

      this.finished = true; // }
    },

    onRefresh() {
      // 清空列表数据
      this.finished = false; // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态

      this.listLoading = true;
      this.onLoad(true);
    }

  },
  filters: {
    date(val) {
      const date = external_dayjs_default()(val);
      const str = date.year() == external_dayjs_default()().year() ? "MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm:ss";
      return date.format(str);
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/blindbox/list.vue?vue&type=script&lang=js&
 /* harmony default export */ var blindbox_listvue_type_script_lang_js_ = (listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/blindbox/list.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(122)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blindbox_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "edd61e5a",
  "3cba6542"
  
)

/* harmony default export */ var blindbox_list = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("640c92ec", content, true, context)
};

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_3521874b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_3521874b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_3521874b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_3521874b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_3521874b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header .header_wapper[data-v-3521874b] {\n  width: 100vw;\n}\n.fixed[data-v-3521874b] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 63:
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
  
  var style0 = __webpack_require__(60)
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

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);

const Header = _header_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = ({
  Header: _header_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_API; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);

 // const isProduction = process.env.NODE_ENV == "production";
// const HOST_URL = process.env.HOST_URL || process.env.baseURL

const host_user_instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "/",
  timeout: 60000,
  headers: {
    token: "5c4e30ffa048f856e01b7501e961229c",
    // token: "",
    language: "zh",
    currency: "",
    brand: "",
    os: "",
    package: "",
    clientversion: "",
    im: ""
  }
});
host_user_instance.interceptors.request.use(function (config) {
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
  console.error("___", error); // Do omething with response error

  return Promise.resolve({
    status: 1,
    data: "网路开了小差"
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
  mBoxDetail: (data, headers = {}) => host_user_instance.get("user/activity/mBoxDetail", {
    params: data
  })
};

/***/ })

};;
//# sourceMappingURL=list.js.map