exports.ids = [26,25];
exports.modules = {

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vant__WEBPACK_IMPORTED_MODULE_0__);

const vCopy = {
  // 名字爱取啥取啥

  /*
   bind 钩子函数，第一次绑定时调用，可以在这里做初始化设置
   el: 作用的 dom 对象
   value: 传给指令的值，也就是我们要 copy 的值
  */
  bind(el, {
    value
  }) {
    el.$value = value; // 用一个全局属性来存传进来的值，因为这个值在别的钩子函数里还会用到

    el.handler = () => {
      if (!el.$value) {
        // 值为空的时候，给出提示，我这里的提示是用的 vant 的提示
        vant__WEBPACK_IMPORTED_MODULE_0__["Toast"].fail('无复制内容');
        return;
      } // 动态创建 textarea 标签


      const textarea = document.createElement('textarea'); // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域

      textarea.readOnly = 'readonly';
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px'; // 将要 copy 的值赋给 textarea 标签的 value 属性

      textarea.value = el.$value; // 将 textarea 插入到 body 中

      document.body.appendChild(textarea); // 选中值并复制

      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      const result = document.execCommand('Copy');

      if (result) {
        vant__WEBPACK_IMPORTED_MODULE_0__["Toast"].success('复制成功');
      }

      document.body.removeChild(textarea);
    }; // 绑定点击事件，就是所谓的一键 copy


    el.addEventListener('click', el.handler);
  },

  // 当传进来的值更新的时候触发
  componentUpdated(el, {
    value
  }) {
    el.$value = value;
  },

  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    el.removeEventListener('click', el.handler);
  }

};
/* harmony default export */ __webpack_exports__["default"] = (vCopy);

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(165);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("43292308", content, true, context)
};

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d99b39ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d99b39ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d99b39ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d99b39ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d99b39ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-d99b39ca] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-d99b39ca] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-d99b39ca] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-d99b39ca] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-d99b39ca] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-d99b39ca] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorBackground0[data-v-d99b39ca] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-d99b39ca] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-d99b39ca] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-d99b39ca] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-d99b39ca] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-d99b39ca] {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary[data-v-d99b39ca] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-d99b39ca] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-d99b39ca] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-d99b39ca] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-d99b39ca] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-d99b39ca] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-d99b39ca] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-d99b39ca] {\n  color: #F04E98;\n}\n.theme-light .colorBlack[data-v-d99b39ca] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-d99b39ca] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-d99b39ca] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-d99b39ca] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-d99b39ca] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-d99b39ca] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-d99b39ca] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-d99b39ca] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0[data-v-d99b39ca] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-d99b39ca] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-d99b39ca] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-d99b39ca] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-d99b39ca] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-d99b39ca] {\n  background-color: #1F212E;\n}\n.theme-dark .colorBackground0[data-v-d99b39ca] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-d99b39ca] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-d99b39ca] {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3[data-v-d99b39ca] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-d99b39ca] {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary[data-v-d99b39ca] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-d99b39ca] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-d99b39ca] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-d99b39ca] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-d99b39ca] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-d99b39ca] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-d99b39ca] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-d99b39ca] {\n  color: #F04E98;\n}\n.theme-dark .colorBlack[data-v-d99b39ca] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-d99b39ca] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-d99b39ca] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-d99b39ca] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-d99b39ca] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-d99b39ca] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-d99b39ca] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-d99b39ca] {\n  color: rgba(47,128,237,0.1);\n}\n.warp-invite[data-v-d99b39ca] {\n  min-height: 100vh;\n  padding-bottom: 0.67rem;\n}\n.warp-invite .loading[data-v-d99b39ca] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.warp-invite .warp-invite-banner[data-v-d99b39ca] {\n  height: 4.27rem;\n}\n.warp-invite .warp-invite-banner img[data-v-d99b39ca] {\n  width: 100%;\n}\n.warp-invite .setTop[data-v-d99b39ca] {\n  position: relative;\n  top: -1.2rem;\n}\n.warp-invite .warp-invite-one[data-v-d99b39ca] {\n  margin: 0.27rem 0.43rem 0;\n  border-radius: 0.21rem;\n  font-size: 0.37rem;\n  line-height: 0.43rem;\n}\n.warp-invite .warp-invite-one .warp-invite-produced[data-v-d99b39ca] {\n  display: flex;\n  height: 1.33rem;\n  line-height: 1.33rem;\n  justify-content: space-between;\n}\n.warp-invite .warp-invite-one .warp-invite-produced span[data-v-d99b39ca] {\n  font-size: 0.37rem;\n}\n.warp-invite .warp-invite-one .warp-invite-produced span img[data-v-d99b39ca] {\n  width: 0.53rem;\n  height: 0.53rem;\n  margin-right: 0.13rem;\n  vertical-align: sub;\n}\n.warp-invite .warp-invite-one .warp-invite-produced span i[data-v-d99b39ca] {\n  vertical-align: text-bottom;\n}\n.warp-invite .warp-invite-one .warp-invite-produced span[data-v-d99b39ca]:last-child {\n  font-size: 0.48rem;\n}\n.warp-invite .warp-invite-one .warp-invite-one-header[data-v-d99b39ca] {\n  display: flex;\n  justify-content: space-between;\n  height: 0.93rem;\n  line-height: 0.93rem;\n  padding: 0 0.21rem 0 0.4rem;\n}\n.warp-invite .warp-invite-one .warp-invite-one-header .warp-invite-one-header-title span[data-v-d99b39ca] {\n  font-size: 0.48rem;\n  font-family: \"bitkeep DIN\";\n}\n.warp-invite .warp-invite-one .warp-invite-one-header .warp-invite-one-header-right[data-v-d99b39ca] {\n  padding-right: 0.19rem;\n}\n.warp-invite .warp-invite-one .borderBottom[data-v-d99b39ca] {\n  height: 0.03rem;\n}\n.warp-invite .warp-invite-one .invite-setP[data-v-d99b39ca] {\n  padding: 0 0.4rem 0.03rem;\n}\n.warp-invite .warp-invite-one .warp-invite-link[data-v-d99b39ca] {\n  border-radius: 0.21rem;\n  margin: 0.27rem 0 0.27rem;\n}\n.warp-invite .warp-invite-one .warp-invite-link .warp-invite-link-box[data-v-d99b39ca] {\n  padding: 0.27rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.warp-invite .warp-invite-one .warp-invite-link-btn[data-v-d99b39ca] {\n  height: 1.33rem;\n  line-height: 1.33rem;\n  color: #fff;\n  text-align: center;\n  border-radius: 0.27rem;\n  margin-bottom: 0.53rem;\n  font-size: 0.43rem;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindboxInvite/index.vue?vue&type=template&id=d99b39ca&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"warp-invite colorBackground3"},[(_vm.isLoading)?_vm._ssrNode("<div class=\"loading\" data-v-d99b39ca>","</div>",[_c('van-loading',{attrs:{"color":"#1989fa","vertical":""}},[_vm._v(_vm._s(_vm.$t("base.loading"))+"...")])],1):_vm._ssrNode("<div data-v-d99b39ca>","</div>",[_vm._ssrNode("<div class=\"warp-invite colorBackground3\" data-v-d99b39ca>","</div>",[_vm._ssrNode("<div class=\"warp-invite-banner\" data-v-d99b39ca><img src=\"http://cdn.bitkeep.vip/u_b_e0135f70-5422-11ec-a16d-43771b230a03.png\" data-v-d99b39ca></div> "),_vm._ssrNode("<div class=\"warp-invite-one colorBackgroundWhite setTop\" data-v-d99b39ca>","</div>",[_vm._ssrNode("<div class=\"warp-invite-one-header\" style=\"padding-right: 0\" data-v-d99b39ca><div class=\"warp-invite-one-header-title\" data-v-d99b39ca><span data-v-d99b39ca>"+_vm._ssrEscape(_vm._s(_vm.$t("blindboxInvite.myRewards")))+"</span></div></div> "),_vm._ssrNode("<div class=\"invite-setP\" data-v-d99b39ca>","</div>",[_vm._ssrNode("<div class=\"warp-invite-produced\" data-v-d99b39ca>","</div>",[_vm._ssrNode("<span data-v-d99b39ca><img src=\"http://cdn.bitkeep.vip/u_b_e7b661f0-5427-11ec-a16d-43771b230a03.png\" alt data-v-d99b39ca>"+_vm._ssrEscape(_vm._s(_vm.$t("blindboxInvite.invitedNumber")))+"</span> "),_vm._ssrNode("<span class=\"setFontFamily\" data-v-d99b39ca>","</span>",[_vm._ssrNode("0\n              "),_c('van-icon',{attrs:{"name":"arrow","color":"#999BA3"}})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"warp-invite-produced\" data-v-d99b39ca>","</div>",[_vm._ssrNode("<span data-v-d99b39ca><img src=\"http://cdn.bitkeep.vip/u_b_e7b6fe30-5427-11ec-a16d-43771b230a03.png\" alt data-v-d99b39ca>"+_vm._ssrEscape(_vm._s(_vm.$t("blindboxInvite.tokenRewards")))+"</span> "),_vm._ssrNode("<span class=\"setFontFamily\" data-v-d99b39ca>","</span>",[_vm._ssrNode("0\n              "),_c('van-icon',{attrs:{"name":"arrow","color":"#999BA3"}})],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"invite-setP\" data-v-d99b39ca>","</div>",[_vm._ssrNode("<div class=\"warp-invite-produced\" data-v-d99b39ca>","</div>",[_vm._ssrNode("<span data-v-d99b39ca><img src=\"http://cdn.bitkeep.vip/u_b_e7b63ae0-5427-11ec-a16d-43771b230a03.png\" alt data-v-d99b39ca>"+_vm._ssrEscape(_vm._s(_vm.$t("blindboxInvite.NFTRewards")))+"</span> "),_vm._ssrNode("<span class=\"setFontFamily\" data-v-d99b39ca>","</span>",[_vm._ssrNode("0\n              "),_c('van-icon',{attrs:{"name":"arrow","color":"#999BA3"}})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"warp-invite-produced\" data-v-d99b39ca>","</div>",[_vm._ssrNode("<span data-v-d99b39ca><img src=\"http://cdn.bitkeep.vip/u_b_e7b5c5b0-5427-11ec-a16d-43771b230a03.png\" alt data-v-d99b39ca>"+_vm._ssrEscape(_vm._s(_vm.$t("blindboxInvite.boxRewards")))+"</span> "),_vm._ssrNode("<span class=\"setFontFamily\" data-v-d99b39ca>","</span>",[_vm._ssrNode("0\n              "),_c('van-icon',{attrs:{"name":"arrow","color":"#999BA3"}})],2)],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"warp-invite-one colorBackgroundWhite setTop\" data-v-d99b39ca>","</div>",[_vm._ssrNode("<div class=\"warp-invite-one-header\" style=\"padding-right: 0\" data-v-d99b39ca><div class=\"warp-invite-one-header-title\" data-v-d99b39ca><span data-v-d99b39ca>"+_vm._ssrEscape(_vm._s(_vm.$t("blindboxInvite.inviteFriend")))+"</span></div></div> "),_vm._ssrNode("<div class=\"invite-setP\" data-v-d99b39ca>","</div>",[_vm._ssrNode("<div class=\"warp-invite-link colorBackground3\" data-v-d99b39ca>","</div>",[_vm._ssrNode("<div class=\"warp-invite-link-box\" data-v-d99b39ca>","</div>",[_vm._ssrNode("<span data-v-d99b39ca><span class=\"textSecond2\" data-v-d99b39ca>"+_vm._ssrEscape(_vm._s(_vm.$t("blindboxInvite.inviteLink")))+"<br data-v-d99b39ca> <span class=\"warp-invite-address textPrimary0\" data-v-d99b39ca>"+_vm._ssrEscape(_vm._s(_vm.inviteLink))+"</span></span></span> "),_vm._ssrNode("<span class=\"setFontFamily\" data-v-d99b39ca>","</span>",[_c('van-icon',{directives:[{name:"copy",rawName:"v-copy",value:(_vm.inviteLinkAll),expression:"inviteLinkAll"}],attrs:{"name":"http://cdn.bitkeep.vip/u_b_1a477b90-3579-11ec-8690-93c311cd0b88.png"}})],1)],2)]),_vm._ssrNode(" <div class=\"warp-invite-link-btn colorBackgroundPrimary\" data-v-d99b39ca>"+_vm._ssrEscape("\n              "+_vm._s(_vm.$t("blindboxInvite.inviteFriendsNow"))+"\n            ")+"</div>")],2)],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/blindboxInvite/index.vue?vue&type=template&id=d99b39ca&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./pages/activity/blindboxInvite/copy.js
var copy = __webpack_require__(133);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindboxInvite/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { USER_API } from "@/api/client";
// import { debounce } from "../../../tools/common";


/* harmony default export */ var blindboxInvitevue_type_script_lang_js_ = ({
  name: "blindboxInvite",

  data() {
    return {
      isLoading: true,
      inviteLink: "",
      inviteLinkAll: ""
    };
  },

  directives: {
    copy: copy["default"]
  },
  computed: { ...Object(external_vuex_["mapState"])(["local"]),

    locale() {
      return this.local.locale;
    },

    isBitKeep() {
      return this.local.UA.isBitKeep;
    },

    userInfo() {
      return this.local.userInfo.token;
    }

  },

  async created() {
    this.isLoading = false;
  },

  beforeMount() {
    this.isBitKeep && BitKeepInvoke.onLoadReady(() => {
      BitKeepInvoke.setTitle(this.$t("blindboxInvite.inviteTitle"));
      let devSrc = "http://192.168.50.246:8081/activity/blindboxInvite?token="; // let proSrc = 'https://news.bitkeep.io/activity/blindboxInvite';

      this.inviteLink = devSrc + this.userInfo;
      this.inviteLinkAll = devSrc + this.userInfo;
      this.getSub();
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

  methods: {
    getSub() {
      // 中间显示省略号
      let copy = JSON.parse(JSON.stringify(this.inviteLink));
      let fisrt = copy.substring(0, 14);
      this.inviteLink = fisrt + " .... " + copy.substr(-15);
    },

    inviteFirends() {
      this.$router.push('/activity/blindboxInvite/inviteList');
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/blindboxInvite/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var activity_blindboxInvitevue_type_script_lang_js_ = (blindboxInvitevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/blindboxInvite/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(164)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  activity_blindboxInvitevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d99b39ca",
  "14ef14f4"
  
)

/* harmony default export */ var blindboxInvite = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map