exports.ids = [40,36,37];
exports.modules = {

/***/ 119:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createPoster_vue_vue_type_style_index_0_id_2ad7cb24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createPoster_vue_vue_type_style_index_0_id_2ad7cb24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createPoster_vue_vue_type_style_index_0_id_2ad7cb24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createPoster_vue_vue_type_style_index_0_id_2ad7cb24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createPoster_vue_vue_type_style_index_0_id_2ad7cb24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vant__WEBPACK_IMPORTED_MODULE_0__);

const vCopy = {
  // ?????????????????????

  /*
   bind ???????????????????????????????????????????????????????????????????????????
   el: ????????? dom ??????
   value: ??????????????????????????????????????? copy ??????
  */
  bind(el, {
    value
  }) {
    el.$value = value; // ????????????????????????????????????????????????????????????????????????????????????????????????

    el.handler = () => {
      if (!el.$value) {
        // ??????????????????????????????????????????????????????????????? vant ?????????
        vant__WEBPACK_IMPORTED_MODULE_0__["Toast"].fail('Some error occurred');
        return;
      } // ???????????? textarea ??????


      const textarea = document.createElement('textarea'); // ?????? textarea ?????? readonly ?????? iOS ????????????????????????????????? textarea ??????????????????

      textarea.readOnly = 'readonly';
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px'; // ?????? copy ???????????? textarea ????????? value ??????

      textarea.value = el.$value; // ??? textarea ????????? body ???

      document.body.appendChild(textarea); // ??????????????????

      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      const result = document.execCommand('Copy');

      if (result) {
        Object(vant__WEBPACK_IMPORTED_MODULE_0__["Toast"])('Copied');
      }

      document.body.removeChild(textarea);
    }; // ?????????????????????????????????????????? copy


    el.addEventListener('click', el.handler);
  },

  // ???????????????????????????????????????
  componentUpdated(el, {
    value
  }) {
    el.$value = value;
  },

  // ???????????????????????????????????????????????????
  unbind(el) {
    el.removeEventListener('click', el.handler);
  }

};
/* harmony default export */ __webpack_exports__["default"] = (vCopy);

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindboxInvite/component/createPoster.vue?vue&type=template&id=2ad7cb24&scoped=true&
var render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-overlay',{class:{
    qcodeModalwarpper: true,
    hidden: !_vm.showModal
  },attrs:{"show":true}},[_c('canvas',{ref:"qrcode",staticClass:"canvasTmp"}),_vm._v(" "),_c('div',{staticClass:"overlayBox",on:{"click":function($event){$event.stopPropagation();}}},[_c('span',{staticClass:"close",attrs:{"name":"close"},on:{"click":function($event){_vm.showModal = false}}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.poster.url),expression:"!poster.url"}],ref:"poster",staticClass:"poster_wrapper",attrs:{"id":"poster"}},[_c('img',{staticClass:"poster_bg",attrs:{"src":_vm.proxy_img,"alt":""},on:{"load":_vm.createPoster}}),_vm._v(" "),_c('div',{staticClass:"commany_title"},[_c('div',{class:( _obj = { content:true}, _obj[_vm.locale] = true, _obj )},[_c('div',[_vm._v("\n            "+_vm._s(_vm.$t("blindboxInvite.Poster"))+"\n          ")]),_vm._v(" "),_c('div',[_vm._v("\n            "+_vm._s(_vm.$t("blindboxInvite.downReward"))+"\n          ")])])]),_vm._v(" "),_c('div',{staticClass:"imgText"},[_vm._v(_vm._s(_vm.$t("blindboxInvite.imgText")))]),_vm._v(" "),_c('img',{staticClass:"poster_qrcode",attrs:{"src":_vm.qrcodeUrl}})]),_vm._v(" "),(_vm.poster.url)?_c('div',{staticClass:"postershow"},[_c('img',{attrs:{"src":_vm.poster.url}})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"footer"},[(_vm.isBitKeep || _vm.pedding)?_c('div',{staticClass:"btn left",on:{"click":_vm.saveImage}},[_c('img',{attrs:{"src":__webpack_require__(91),"alt":""}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("blindboxInvite.savePicture")))])]):_c('a',{staticClass:"btn left",attrs:{"href":_vm.poster.url,"download":new Date().getTime() + '.jpeg'}},[_c('img',{attrs:{"src":__webpack_require__(91),"alt":""}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("blindboxInvite.savePicture")))])]),_vm._v(" "),(_vm.isBitKeep)?_c('div',{staticClass:"btn",on:{"click":_vm.shareImage}},[_c('img',{attrs:{"src":__webpack_require__(92),"alt":""}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("blindboxInvite.ShareLink")))])]):_c('div',{staticClass:"btn"},[_c('img',{attrs:{"src":__webpack_require__(92),"alt":""}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("blindboxInvite.ShareLink")))])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/blindboxInvite/component/createPoster.vue?vue&type=template&id=2ad7cb24&scoped=true&

// EXTERNAL MODULE: external "qrcode"
var external_qrcode_ = __webpack_require__(79);
var external_qrcode_default = /*#__PURE__*/__webpack_require__.n(external_qrcode_);

// EXTERNAL MODULE: ./mixin/base.js
var base = __webpack_require__(89);

// EXTERNAL MODULE: external "html2canvas"
var external_html2canvas_ = __webpack_require__(80);
var external_html2canvas_default = /*#__PURE__*/__webpack_require__.n(external_html2canvas_);

// EXTERNAL MODULE: ./tools/common.js
var common = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindboxInvite/component/createPoster.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var createPostervue_type_script_lang_js_ = ({
  name: "CrearePoster",
  mixins: [base["a" /* BaseMixin */]],
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
    userInfo: {
      default: ""
    },
    info: {
      default: () => ({
        status: 0,
        is_owner: 0
      })
    }
  },
  computed: {
    proxy_img() {
      const sourceUrl = "https://cdn.bitkeep.vip/u_b_c474a860-a020-11ec-b054-8b7edc051038.jpeg";
      return sourceUrl ? `/poster${sourceUrl.replace("https://cdn.bitkeep.vip", "").replace("https://cdn.bitkeep.vip", "")}` : "";
    },

    codeText() {
      return  false ? undefined : "";
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
      quality: 100
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
        width: el.offsetWidth - 1,
        height: el.offsetHeight - 1,
        scale: 3,
        async: true,
        scrollY: 0,
        scrollX: 0,
        allowTaint: false
      }).then(async canvas => {
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
      console.log(this.info.cover_image, '123');
      BitKeepInvoke.shareUrl(this.$t("blindboxInvite.inviteTitle"), this.$t("ActivityBlindbox.shared.content"), location.href + '/detail?token=' + this.userInfo, this.info.cover_image, console.log);
    },

    saveImage() {
      console.log(this.poster.url);

      if (this.poster.url) {
        this.showLoading(this.$t("ActivityBlindbox.toast.Saving"));
        BitKeepInvoke.saveImageFromBase64(this.poster.url, e => {
          this.hideLoading();
        });
        return;
      } else {
        this.createPoster();
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/blindboxInvite/component/createPoster.vue?vue&type=script&lang=js&
 /* harmony default export */ var component_createPostervue_type_script_lang_js_ = (createPostervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/blindboxInvite/component/createPoster.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(163)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  component_createPostervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2ad7cb24",
  "222e31d6"
  
)

/* harmony default export */ var createPoster = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c7064f60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(193);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c7064f60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c7064f60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c7064f60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c7064f60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindboxInvite/index.vue?vue&type=template&id=c7064f60&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"warp-invite colorBackground0"},[(_vm.isLoading)?_vm._ssrNode("<div class=\"loading\" data-v-c7064f60>","</div>",[_c('van-loading',{attrs:{"color":"#7524f9","vertical":""}},[_vm._v(_vm._s(_vm.$t("base.loading"))+"...")])],1):_vm._ssrNode("<div data-v-c7064f60>","</div>",[_vm._ssrNode("<div class=\"warp-invite colorBackground0\" data-v-c7064f60>","</div>",[_vm._ssrNode("<div class=\"warp-invite-banner\" data-v-c7064f60><img src=\"https://cdn.bitkeep.vip/u_b_2eb42130-a01f-11ec-b054-8b7edc051038.png\" data-v-c7064f60> <div class=\"imgText\" data-v-c7064f60><div class=\"imgTextTitle\" data-v-c7064f60>"+_vm._ssrEscape(_vm._s(_vm.$t("blindboxInvite.toEarn")))+"</div> <div class=\"imgTextContent\" data-v-c7064f60>"+_vm._ssrEscape(_vm._s(_vm.$t("blindboxInvite.rewardsMore")))+"</div></div></div> "),_vm._ssrNode("<div class=\"warp-invite-one colorBackground1 setTop\" data-v-c7064f60>","</div>",[_vm._ssrNode("<div class=\"warp-invite-one-header\" style=\"padding-right: 0\" data-v-c7064f60><div class=\"warp-invite-one-header-title textPrimary0\" data-v-c7064f60><span data-v-c7064f60>"+_vm._ssrEscape(_vm._s(_vm.$t("blindboxInvite.myRewards")))+"</span></div></div> "),_vm._ssrNode("<div class=\"invite-setP\" data-v-c7064f60>","</div>",[_vm._ssrNode("<div class=\"warp-invite-produced\" data-v-c7064f60>","</div>",[_vm._ssrNode("<span class=\"textSecond1\" data-v-c7064f60><img src=\"https://cdn.bitkeep.vip/u_b_a4c3d2d0-a01f-11ec-b054-8b7edc051038.png\" alt data-v-c7064f60>"+_vm._ssrEscape(_vm._s(_vm.$t("blindboxInvite.invitedNumber")))+"</span> "),_vm._ssrNode("<span class=\"setFontFamily setDisplay textPrimary0\" data-v-c7064f60>","</span>",[_c('van-icon',{attrs:{"name":"arrow","color":"#999BA3"}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"warp-invite-produced\" data-v-c7064f60>","</div>",[_vm._ssrNode("<span class=\"textSecond1\" data-v-c7064f60><img src=\"https://cdn.bitkeep.vip/u_b_a4c420f0-a01f-11ec-b054-8b7edc051038.png\" alt data-v-c7064f60>"+_vm._ssrEscape(_vm._s(_vm.$t("blindboxInvite.tokenRewards")))+"</span> "),_vm._ssrNode("<span class=\"setFontFamily\" data-v-c7064f60>","</span>",[_c('van-icon',{attrs:{"name":"arrow","color":"#999BA3"}})],1)],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"warp-invite-one colorBackground1 setTop\" data-v-c7064f60>","</div>",[_vm._ssrNode("<div class=\"warp-invite-one-header\" style=\"padding-right: 0\" data-v-c7064f60><div class=\"warp-invite-one-header-title\" data-v-c7064f60><span class=\"textPrimary0\" data-v-c7064f60>"+_vm._ssrEscape(_vm._s(_vm.$t("blindboxInvite.inviteFriends")))+"</span></div></div> "),_vm._ssrNode("<div class=\"invite-setP\" data-v-c7064f60>","</div>",[_vm._ssrNode("<div class=\"warp-invite-link colorBackground3\" data-v-c7064f60>","</div>",[_c('div',{directives:[{name:"copy",rawName:"v-copy",value:(_vm.inviteLinkAll),expression:"inviteLinkAll"}],staticClass:"warp-invite-link-box"},[_vm._ssrNode("<span data-v-c7064f60><span class=\"textSecond2\" data-v-c7064f60>"+_vm._ssrEscape(_vm._s(_vm.$t("blindboxInvite.inviteLink")))+"<br data-v-c7064f60> <span class=\"warp-invite-address textPrimary0\" data-v-c7064f60>"+_vm._ssrEscape(_vm._s(_vm.inviteLink))+"</span></span></span> "),_vm._ssrNode("<span class=\"setFontFamily\" data-v-c7064f60>","</span>",[_c('van-icon',{attrs:{"name":"https://cdn.bitkeep.vip/u_b_1a477b90-3579-11ec-8690-93c311cd0b88.png"}})],1)],2)]),_vm._ssrNode(" <div class=\"warp-invite-link-btn colorBackgroundPrimary\" data-v-c7064f60>"+_vm._ssrEscape("\n                "+_vm._s(_vm.$t("blindboxInvite.inviteFriendsNow"))+"\n              ")+"</div>")],2)],2),_vm._ssrNode(" <div class=\"warp-invite-imgLink setTop\" data-v-c7064f60></div>")],2)]),_vm._ssrNode(" "),_c('CreatePoster',{ref:"CreatePoster",attrs:{"locale":_vm.locale,"zIndex":100,"isBitKeep":_vm.isBitKeep,"userInfo":_vm.userInfo}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/blindboxInvite/index.vue?vue&type=template&id=c7064f60&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./pages/activity/blindboxInvite/component/createPoster.vue + 4 modules
var createPoster = __webpack_require__(230);

// EXTERNAL MODULE: ./pages/activity/blindboxInvite/copy.js
var copy = __webpack_require__(192);

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(86);

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
//
//
//
//
//
//
//
//
//
//
//
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

  head() {
    return {
      title: this.$t("blindboxInvite.inviteTitle"),
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.$t("ActivityBlindbox.shared.content")
      }, {
        hid: 'og:title',
        name: 'og:title',
        content: this.$t("blindboxInvite.inviteTitle")
      }, {
        hid: 'twitter:description',
        name: 'description',
        content: this.$t("ActivityBlindbox.shared.content")
      }, {
        hid: 'twitter:title',
        name: 'description',
        content: this.$t("blindboxInvite.inviteTitle")
      }]
    };
  },

  data() {
    return {
      isLoading: true,
      // refreshLoading: false,
      inviteLink: "",
      // inviteNumber: 0,
      inviteLinkAll: ""
    };
  },

  directives: {
    copy: copy["default"]
  },
  components: {
    CreatePoster: createPoster["default"]
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
      let devSrc = location.href + "/detail?token=";
      this.inviteLink = devSrc + this.userInfo;
      this.inviteLinkAll = devSrc + this.userInfo;
      this.getSub();
      this.$nextTick(() => {
        BitKeepInvoke.setIconAction();
        BitKeepInvoke.appMode((err, res) => {
          let body = document.getElementsByTagName("body")[0];

          if (res == 1) {
            body.setAttribute("class", "theme-dark");
          } else {
            body.setAttribute("class", "theme-light");
          }
        });
      });
    }); // this.getInviteNumber()
  },

  methods: {
    getSub() {
      // ?????????????????????
      let copy = JSON.parse(JSON.stringify(this.inviteLink));
      let fisrt = copy.substring(0, 14);
      this.inviteLink = fisrt + " .... " + copy.substr(-15);
    },

    // async getInviteNumber(){
    //   const { data, status } = await USER_API.getInviteList({
    //     start: 0,
    //     limit: 10,
    //   });
    //   if (status == 1) {
    //     this.isLoading = false;
    //     this.$toast(data);
    //   }
    //   this.inviteNumber = data.total_count;
    //   this.refreshLoading =false;
    // },
    inviteFriendList() {
      this.$router.push('/activity/blindboxInvite/inviteList');
    },

    rewardsList() {
      this.$router.push('/activity/blindboxInvite/rewardList');
    },

    toReward() {
      this.$router.push('/activity/mining');
    },

    inviteFirends() {
      this.$refs.CreatePoster && this.$refs.CreatePoster.init();
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/blindboxInvite/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var activity_blindboxInvitevue_type_script_lang_js_ = (blindboxInvitevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/blindboxInvite/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(245)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  activity_blindboxInvitevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c7064f60",
  "e430bef2"
  
)

/* harmony default export */ var blindboxInvite = __webpack_exports__["default"] = (component.exports);

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

/***/ })

};;
//# sourceMappingURL=index.js.map