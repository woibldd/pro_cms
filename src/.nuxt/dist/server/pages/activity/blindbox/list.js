exports.ids = [24,7,9];
exports.modules = {

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(220);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("66f6acfe", content, true, context)
};

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_d3950842_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(161);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_d3950842_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_d3950842_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_d3950842_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_d3950842_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(35);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(221);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading[data-v-d3950842] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.color_red[data-v-d3950842] {\n  color: #ff255a;\n  font-weight: 600;\n}\n.font-18[data-v-d3950842] {\n  font-size: 0.48rem;\n}\n.color_text[data-v-d3950842] {\n  color: #4b5373;\n}\n.color_blod[data-v-d3950842] {\n  color: #080d21;\n}\n.btn[data-v-d3950842] {\n  background: linear-gradient(122.71deg, #74eeff 3.38%, #6f2cff 92.57%),#c4c4c4;\n  border-radius: 2.67rem;\n  height: 0.64rem;\n  width: 1.81rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 2.67rem;\n  font-weight: 500;\n  font-size: 0.32rem;\n  line-height: 0.32rem;\n  color: #ffffff;\n}\n.btn[data-v-d3950842]:active {\n  opacity: 0.8;\n}\n#blindbox_list[data-v-d3950842] {\n  word-break: break-all;\n  background: #3d0b88;\n  min-height: 100vh;\n  box-sizing: border-box;\n  font-style: normal;\n  font-weight: normal;\n  font-family: PingFang SC;\n  overflow: hidden;\n  position: relative;\n}\n#blindbox_list .tag[data-v-d3950842] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n#blindbox_list .tag .btn[data-v-d3950842] {\n  border-radius: 0 0.27rem;\n  font-size: 0.29rem;\n  line-height: 0.29rem;\n  height: 0.64rem;\n  font-weight: 500;\n  width: 2.08rem;\n  white-space: nowrap;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#blindbox_list .tag .btn.open[data-v-d3950842] {\n  background: linear-gradient(274.96deg, #bc0eff .67%, #ff81e2 100%);\n  color: #ffffff;\n}\n#blindbox_list .tag .btn.shared[data-v-d3950842] {\n  color: #1cbdb5;\n  background: linear-gradient(274.96deg, rgba(0,199,215,0.2) .67%, rgba(115,255,221,0.2) 100%);\n}\n#blindbox_list .tag .btn.en[data-v-d3950842] {\n  width: 2.53rem;\n}\n#blindbox_list .blindbox_list_firends[data-v-d3950842] {\n  color: #fff;\n  text-align: center;\n  font-size: 0.37rem;\n  height: 1.17rem;\n  line-height: 1.17rem;\n  font-weight: 500;\n  overflow: hidden;\n  background: linear-gradient(90.35deg, rgba(182,170,255,0.5) 1.43%, rgba(182,170,255,0) 100%);\n}\n#blindbox_list .blindbox_list_firends .van-icon-arrow[data-v-d3950842] {\n  vertical-align: middle;\n  font-weight: 1000;\n  display: inline-block;\n  margin-left: 0.11rem;\n}\n#blindbox_list .blindbox_list_firends .friendIcon[data-v-d3950842] {\n  font-weight: 1000;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 0.11rem;\n  margin-top: -0.05rem;\n}\n#blindbox_list .blindbox_list_firends .friendIcon img[data-v-d3950842] {\n  width: 0.53rem;\n  height: 0.53rem;\n}\n#blindbox_list .blindbox_list_header[data-v-d3950842] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.59rem 0.4rem;\n  box-sizing: border-box;\n}\n#blindbox_list .blindbox_list_header img[data-v-d3950842] {\n  width: 0.85rem;\n  height: 0.85rem;\n}\n#blindbox_list .blindbox_list_body[data-v-d3950842] {\n  overflow: hidden;\n  margin-top: 0.27rem;\n}\n#blindbox_list .blindbox_list_body .blindbox_list_content[data-v-d3950842] {\n  min-height: 100vh;\n}\n#blindbox_list .blindbox_list_body .endBg[data-v-d3950842] {\n  box-sizing: border-box;\n  width: 5.87rem;\n  height: 7.52rem;\n  margin: 4.43rem auto 0;\n  box-shadow: inset 0 0.03rem 0 rgba(255,255,255,0.6);\n  backdrop-filter: blur(0.27rem);\n  border-radius: 0.48rem;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center center no-repeat;\n  background-size: 100% 100%;\n  text-align: center;\n  overflow: hidden;\n  box-shadow: inset 0 0.03rem 0.05rem rgba(255,255,255,0.6);\n}\n#blindbox_list .blindbox_list_body .endBg .title[data-v-d3950842] {\n  margin-top: 1.73rem;\n  font-size: 0.48rem;\n  line-height: 0.48rem;\n  font-weight: 800;\n}\n#blindbox_list .blindbox_list_body .endBg .subtitle[data-v-d3950842] {\n  padding: 0 0.37rem 0 0.43rem;\n  margin-top: 0.13rem;\n  font-size: 0.37rem;\n  line-height: 0.37rem;\n}\n#blindbox_list .blindbox_list_body .endBg .content[data-v-d3950842] {\n  padding: 0 0.37rem 0 0.43rem;\n  text-align: left;\n  margin-top: 0.4rem;\n  font-size: 0.37rem;\n  line-height: 0.48rem;\n}\n#blindbox_list .blindbox_list_body .endBg.en[data-v-d3950842] {\n  word-break: keep-all;\n}\n#blindbox_list .blindbox_list_body .endBg.en .title[data-v-d3950842] {\n  margin-top: 1.73rem;\n  line-height: 0.53rem;\n  font-size: 0.53rem;\n  text-align: center;\n  padding: 0 0.37rem 0 0.43rem;\n}\n#blindbox_list .blindbox_list_body .endBg.en .subtitle[data-v-d3950842] {\n  margin-top: 0.19rem;\n  font-size: 0.32rem;\n  line-height: 0.32rem;\n}\n#blindbox_list .blindbox_list_body .endBg.en .content[data-v-d3950842] {\n  padding: 0 0.37rem 0 0.43rem;\n  text-align: left;\n  margin-top: 0.53rem;\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n}\n#blindbox_list .blindbox_list_body .list_item .invaild[data-v-d3950842] {\n  opacity: 0.4;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper[data-v-d3950842] {\n  position: relative;\n  overflow: hidden;\n  width: 9.15rem;\n  border-radius: 0.27rem;\n  box-sizing: border-box;\n  padding: 0.13rem;\n  margin: 0.27rem 0.43rem;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 0.27rem;\n  position: relative;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_pic[data-v-d3950842] {\n  height: 2.77rem;\n  width: 1.97rem;\n  border-radius: 0.16rem;\n  overflow: hidden;\n  display: flex;\n  position: relative;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_pic img[data-v-d3950842] {\n  width: 100%;\n  height: 100%;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_pic .setBorderText[data-v-d3950842] {\n  bottom: 0.05rem;\n  position: absolute;\n  color: #fff;\n  font-size: 0.32rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100%;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_pic .setBorderT[data-v-d3950842] {\n  width: 3.12rem;\n  height: 2.67rem;\n  background: linear-gradient(269.79deg, #00C7D7 16.73%, #73FFDD 82.64%);\n  border-radius: 50%;\n  transform: scale(1, 0.5);\n  bottom: -1.44rem;\n  left: -0.56rem;\n  position: absolute;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont[data-v-d3950842] {\n  flex: 1;\n  color: #7f828f;\n  font-size: 0.27rem;\n  line-height: 0.37rem;\n  margin: 0 0.27rem;\n  position: relative;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont .title[data-v-d3950842] {\n  margin-top: 0.13rem;\n  font-size: 0.43rem;\n  font-weight: 500;\n  line-height: 0.48rem;\n  letter-spacing: 0;\n  color: #080d21;\n  word-break: break-word;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont .title.en[data-v-d3950842] {\n  line-height: 0.48rem;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont .content[data-v-d3950842] {\n  margin: 0.13rem 0;\n  line-height: 0.37rem;\n  color: #4b5373;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_cont .time[data-v-d3950842] {\n  width: 4.29rem;\n  font-size: 0.27rem;\n  line-height: 0.32rem;\n  color: #4b5373;\n  position: absolute;\n  bottom: 0.13rem;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .list_item_btn[data-v-d3950842] {\n  position: absolute;\n  bottom: 0.27rem;\n  right: 0.27rem;\n}\n#blindbox_list .blindbox_list_body .list_item .list_item_warpper .clamp3[data-v-d3950842] {\n  display: -webkit-box;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/endbg@2.35af55c.png";

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindbox/list.vue?vue&type=template&id=d3950842&scoped=true&
var render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"blindbox_list"}},[(_vm.isLoading)?_vm._ssrNode("<div class=\"loading\" data-v-d3950842>","</div>",[_c('van-loading',{attrs:{"color":"#1989fa"}})],1):_vm._ssrNode("<div data-v-d3950842>","</div>",[(_vm.blindbox_list.length > 0)?_vm._ssrNode("<div class=\"blindbox_list_firends\" data-v-d3950842>","</div>",[_c('van-icon',{staticClass:"friendIcon",attrs:{"name":"https://cdn.bitkeep.vip/u_b_78569440-5721-11ec-84e8-3b41e43dd21d.png","color":"#fff"}}),_vm._ssrNode(_vm._ssrEscape("\n      "+_vm._s(_vm.$t('ActivityBlindbox.ActivityBlindboxList.inviteContent', {
                invite: this.inviteNum || 0,
                helper: this.helpNum || 0
              })))),_c('van-icon',{attrs:{"name":"arrow","color":"#fff"}})],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"blindbox_list_body\" data-v-d3950842>","</div>",[_c('van-pull-refresh',{staticClass:"blindbox_list_content",on:{"refresh":_vm.onRefresh},model:{value:(_vm.refreshing),callback:function ($$v) {_vm.refreshing=$$v},expression:"refreshing"}},[_c('van-list',{attrs:{"finished":_vm.finished},on:{"load":_vm.onLoad},model:{value:(_vm.listLoading),callback:function ($$v) {_vm.listLoading=$$v},expression:"listLoading"}},_vm._l((_vm.blindbox_list),function(item){
              var _obj;
return _c('div',{key:item.id,on:{"click":function($event){return _vm.handlerBtn(item, 0)}}},[_c('div',{class:{ list_item: true }},[_c('div',{class:{
                  list_item_warpper: true,
                  'radial-gradient': true,
                  active: true,
                  invaild: item.status == 3
                }},[_c('div',{staticClass:"list_item_pic"},[_c('van-image',{attrs:{"width":"100%","height":"100%","fit":"cover","src":item.cover_image}}),_vm._v(" "),(item.is_owner != 1)?_c('div',{staticClass:"setBorderT"}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"setBorderText"},[(item.is_owner != 1)?_c('span',[_vm._v(_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxList.ShareWithMe")))]):_vm._e()])],1),_vm._v(" "),_c('div',{staticClass:"list_item_cont"},[_c('div',{class:( _obj = {
                      title: true,
                      color_blod: true,
                      'clamp3': true
                    }, _obj[_vm.locale] = true, _obj )},[_vm._v("\n                    "+_vm._s(item.title)+"\n                  ")]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('span',{domProps:{"innerHTML":_vm._s(
                        _vm.$t(
                          'ActivityBlindbox.ActivityBlindboxList.blindBoxNumText',
                          {
                            surplus: item.already_invite,
                            invite: item.invite - item.already_invite
                          }
                        )
                      )}}),_vm._v(" "),_c('div',[_vm._v("\n                      "+_vm._s(_vm.$t(
                          "ActivityBlindbox.ActivityBlindboxList.blindBoxSurpriseText"
                        ))+"\n                    ")])]),_vm._v(" "),_c('div',{staticClass:"time van-ellipsis"},[_c('span',[_vm._v(_vm._s(_vm.$t(
                        "ActivityBlindbox.ActivityBlindboxList.ValidUntilText"
                      )))]),_vm._v("\n                    "+_vm._s(_vm._f("date")(item.end_time))+"\n                  ")])]),_vm._v(" "),_c('div',{staticClass:"list_item_btn"},[(item.status == 0)?_c('div',{staticClass:"btn",on:{"click":function($event){return _vm.handlerBtn(item, 0)}}},[_vm._v("\n                    "+_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxList.GoShareText"))+"\n                  ")]):_vm._e(),_vm._v(" "),(item.status == 1 && item.is_owner == 1)?_c('div',{staticClass:"btn",on:{"click":function($event){return _vm.handlerBtn(item, 1)}}},[_vm._v("\n                    "+_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxList.GoOpenText"))+"\n                  ")]):_vm._e(),_vm._v(" "),(item.status == 1 && item.is_owner != 1)?_c('div',{staticClass:"btn",on:{"click":function($event){return _vm.handlerBtn(item, 0)}}},[_vm._v("\n                    "+_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxList.GoShareText"))+"\n                  ")]):_vm._e(),_vm._v(" "),(item.status == 2)?_c('div',{staticClass:"btn",on:{"click":function($event){return _vm.handlerBtn(item, 2)}}},[_vm._v("\n                    "+_vm._s(_vm.$t(
                        "ActivityBlindbox.ActivityBlindboxList.SuccessfullyOpenedText"
                      ))+"\n                  ")]):_vm._e(),_vm._v(" "),(item.status == 3)?_c('div',{staticClass:"btn",on:{"click":function($event){return _vm.handlerBtn(item, 2)}}},[_vm._v("\n                    "+_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxList.expiredText"))+"\n                  ")]):_vm._e()])])])])}),0),_vm._v(" "),(!_vm.listLoading && (!_vm.blindbox_list || _vm.blindbox_list.length == 0))?_c('div',{class:( _obj = {
            endBg: true,
            color_theme: true
          }, _obj[_vm.locale] = true, _obj )},[_c('div',{staticClass:"title"},[_vm._v("\n            "+_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxList.end.title"))+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"content",domProps:{"innerHTML":_vm._s(_vm.$t('ActivityBlindbox.ActivityBlindboxList.end.content'))}})]):_vm._e()],1)],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/blindbox/list.vue?vue&type=template&id=d3950842&scoped=true&

// EXTERNAL MODULE: ./components/common/index.js
var common = __webpack_require__(76);

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(65);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(68);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    },

    isBitKeep() {
      return this.local.UA.isBitKeep;
    }

  },

  // async asyncData(ctx) {},
  data() {
    return {
      isLoading: true,
      inviteNum: 0,
      helpNum: 0,
      listLoading: false,
      finished: false,
      refreshing: false,
      total: 20,
      start: 0,
      limit: 10,
      blindbox_list: []
    };
  },

  async created() {},

  async beforeMount() {
    this.isBitKeep && BitKeepInvoke.setTitle(this.$t("ActivityBlindbox.title.myBlindboxText")); // this.onLoad(true);
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
        start: (pageNo - 1) * this.limit,
        limit: this.limit
      });

      if (status == 1) {
        this.finished = true;
        return this.$toast.fail(data);
      }

      this.total = data.total;
      this.inviteNum = data.invite_number;
      this.helpNum = data.help_number;
      const list = data.list.map(item => {
        item.bg_icon = `url(${item.cover_image}) no-repeat  center center/cover`;
        return item;
      });

      if (!list || list.length == 0) {
        this.finished = true;
        return;
      }

      this.start = pageNo;

      if (pageNo == 1) {
        this.blindbox_list = list;
      } else {
        this.blindbox_list = [...this.blindbox_list, ...list];
      }
    },

    goFriendList() {
      this.$router.push({
        path: `/activity/blindbox/firendList`
      });
    },

    handlerBtn(item, type) {
      this.$router.push({
        path: `/activity/blindbox/detail/${item.id}`,
        query: {
          ownerIdentity: item.ownerIdentity
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
      this.listLoading = false;

      if (this.total <= this.blindbox_list.length) {
        this.finished = true;
      }
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
  
  var style0 = __webpack_require__(219)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blindbox_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d3950842",
  "00924d14"
  
)

/* harmony default export */ var blindbox_list = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 68:
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
    language: "en",
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
  getInviteList: (data, headers = {}) => host_user_instance.post('user/friendship/getInviteList', data),
  certifyFriendship: (data, headers = {}) => host_user_instance.post('user/friendship/certifyFriendship', data),
  activityDoneRewardList: (data, headers = {}) => host_user_instance.post('swap/mining/activityDoneRewardList', data),
  // 新手福利
  welfareSignIn: (data, headers = {}) => host_user_instance.post('user/welfare/signIn', data),
  // 签到 
  getRewardDetail: (data, headers = {}) => host_user_instance.post('user/welfare/getRewardDetail', data),
  //每日抽奖详情
  getSignInDetailByUser: (data, headers = {}) => host_user_instance.post('user/welfare/getSignInDetailByUser', data),
  // 获取某人的签到详情
  getRewardResult: (data, headers = {}) => host_user_instance.post('user/welfare/getRewardResult', data),
  // 获取抽奖结果
  getRewardDetail: (data, headers = {}) => host_user_instance.post('user/welfare/getRewardDetail', data),
  // 每日抽奖详情页
  pushPapersIn: (data, headers = {}) => host_user_instance.post('user/welfare/pushPapersIn', data),
  // 立即投入
  getJoinTeleJob: (data, headers = {}) => host_user_instance.post('user/welfare/getJoinTeleJob', data),
  // 加入电报 
  getFirstSwapJob: (data, headers = {}) => host_user_instance.post('user/welfare/getFirstSwapJob', data),
  // swap首次交易
  getFirst50UJob: (data, headers = {}) => host_user_instance.post('user/welfare/getFirst50UJob', data),
  // 领取50u
  newUserRewardJobs: (data, headers = {}) => host_user_instance.post('user/welfare/newUserRewardJobs', data) // 新手任务

};

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("640c92ec", content, true, context)
};

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_3521874b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_3521874b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_3521874b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_3521874b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_3521874b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header .header_wapper[data-v-3521874b] {\n  width: 100vw;\n}\n.fixed[data-v-3521874b] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 72:
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
  
  var style0 = __webpack_require__(70)
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
  "d766b2ac"
  
)

/* harmony default export */ var header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);

const Header = _header_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = ({
  Header: _header_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ })

};;
//# sourceMappingURL=list.js.map