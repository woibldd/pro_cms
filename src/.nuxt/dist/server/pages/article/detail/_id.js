exports.ids = [64];
exports.modules = {

/***/ 227:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_0ddf6aec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(227);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_0ddf6aec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_0ddf6aec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_0ddf6aec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_0ddf6aec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/detail/_id.vue?vue&type=template&id=0ddf6aec&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"article"}},[_vm._ssrNode("<div class=\"header\" data-v-0ddf6aec><div class=\"title\" data-v-0ddf6aec>"+_vm._ssrEscape("\n      "+_vm._s(_vm.info.title)+"\n    ")+"</div> <div class=\"sub\" data-v-0ddf6aec><span data-v-0ddf6aec>"+_vm._ssrEscape(_vm._s(_vm.source)+":")+"</span> <span class=\"username\" data-v-0ddf6aec>"+_vm._ssrEscape(_vm._s(_vm.info.user_name))+"</span> <span data-v-0ddf6aec>"+_vm._ssrEscape(_vm._s(_vm._f("filterDate")(_vm.info.create_time)))+"</span></div></div> "+((_vm.info.content)?("<div class=\"content\" data-v-0ddf6aec>"+(_vm._s(_vm.info.content))+"</div>"):("<div class=\"noData\" data-v-0ddf6aec>\n       ??????????????????\n  </div>"))+" "),_c('van-image-preview',{attrs:{"close-on-popstate":"","closeable":"","start-position":_vm.current,"images":_vm.images},on:{"change":_vm.onChange,"onclose":_vm.onclose},model:{value:(_vm.showPreview),callback:function ($$v) {_vm.showPreview=$$v},expression:"showPreview"}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/detail/_id.vue?vue&type=template&id=0ddf6aec&scoped=true&

// CONCATENATED MODULE: ./api/server.js
// import LRU from "lru-cache";
// let CACHED = new LRU({
//   max: 100, // ??????????????????
//   maxAge: 1000 * 60 * 24 // ???????????? ????????????
// });
const LANG = null;

function createURL(url, params) {
  url += "?";

  for (var item in params) {
    url += `${item}=${params[item]}&`;
  }

  return url.substr(0, url.length - 1);
}

/* harmony default export */ var server = ({
  articleDetail(ctx, data = {}) {
    const {
      $axios,
      app,
      store,
      route,
      params,
      query,
      env,
      isDev,
      isHMR,
      redirect,
      error,
      $config
    } = ctx;
    let url = createURL(`/article/detail`, params); // console.log("???????????????", JSON.stringify($config),JSON.stringify(params),JSON.stringify(query))

    return $axios.$get(url).then(result => {
      // console.log("?????????",result)
      return result;
    }).catch(err => {
      return {
        status: 1,
        msg: "????????????"
      };
    });
  },

  articleLang(ctx, data = {}) {
    const {
      $axios,
      params,
      query,
      $config
    } = ctx; // console.log("???????????????", JSON.stringify($config),JSON.stringify(params),JSON.stringify(query))

    let url = createURL(`/article/lang`, params);
    return $axios.$get(url).then(result => {
      // console.log("?????????",result)
      return result;
    }).catch(err => {
      return {
        status: 1,
        msg: "????????????"
      };
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/detail/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Detail",

  async asyncData(ctx) {
    const [langR, detailR] = await Promise.all([server.articleLang(ctx), server.articleDetail(ctx)]);
    const {
      status,
      data
    } = detailR;
    const info = String(data) == "null" || !data ? {
      title: "??????????????????"
    } : data;
    const {
      languages,
      means
    } = langR.status == 0 ? langR.data : {
      languages: [],
      means: []
    };

    if (detailR.status == 0) {
      ctx.app.head.title = info.title;
    }

    return {
      info,
      languages,
      means
    };
  },

  computed: {
    source() {
      const {
        list
      } = this.languages.find(v => v.zh == '??????') || {
        list: []
      };
      const {
        value
      } = list.find(v => v.key == this.info.language) || {
        key: "en",
        value: "source"
      };
      return value;
    }

  },

  data() {
    return {
      showPreview: false,
      images: [],
      current: 0,
      languages: [],
      means: [],
      info: {}
    };
  },

  async mounted() {
    await this.$nextTick();
    const self = this;
    const imgs = document.getElementById("article").getElementsByTagName("img");
    this.images = Array.from(imgs).map((v, index) => {
      v.setAttribute("show_index", index);

      v.onclick = function () {
        self.showPreview = true;
        self.current = Number(this.getAttribute("show_index") || 0);
      };

      return v.getAttribute("src") || v.getAttribute("href");
    }).filter(v => v);
  },

  methods: {
    onChange() {},

    onclose() {
      console.log(arguments);
    }

  },
  filters: {
    filterDate(create_time) {
      function isZero(m) {
        return m < 10 ? "0" + m : m;
      } //??????????????????????????????parseInt??????


      var time = new Date(create_time || new Date().getTime()); // ????????????Date???????????????????????????????????????????????????????????????????????????new Date(..)??????

      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      return y + "-" + isZero(m) + "-" + isZero(d) + " " + isZero(h) + ":" + isZero(mm);
    }

  }
});
// CONCATENATED MODULE: ./pages/article/detail/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var detail_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/article/detail/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(282)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  detail_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0ddf6aec",
  "229947c0"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map