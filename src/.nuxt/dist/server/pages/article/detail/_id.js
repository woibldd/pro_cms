exports.ids = [46];
exports.modules = {

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// import LRU from "lru-cache";
// let CACHED = new LRU({
//   max: 100, // 缓存队列长度
//   maxAge: 1000 * 60 * 24 // 缓存时间 一个小时
// });
const LANG = null;

function createURL(url, params) {
  url += "?";

  for (var item in params) {
    url += `${item}=${params[item]}&`;
  }

  return url.substr(0, url.length - 1);
}

/* harmony default export */ __webpack_exports__["a"] = ({
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
    let url = createURL(`/article/detail`, params); // console.log("请求参数：", JSON.stringify($config),JSON.stringify(params),JSON.stringify(query))

    return $axios.$get(url).then(result => {
      // console.log("响应：",result)
      return result;
    }).catch(err => {
      return {
        status: 1,
        msg: "请求失败"
      };
    });
  },

  articleLang(ctx, data = {}) {
    const {
      $axios,
      params,
      query,
      $config
    } = ctx; // console.log("请求参数：", JSON.stringify($config),JSON.stringify(params),JSON.stringify(query))

    let url = createURL(`/article/lang`, params);
    return $axios.$get(url).then(result => {
      // console.log("响应：",result)
      return result;
    }).catch(err => {
      return {
        status: 1,
        msg: "请求失败"
      };
    });
  }

});

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(249);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("b7861040", content, true, context)
};

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_0ddf6aec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(178);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_0ddf6aec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_0ddf6aec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_0ddf6aec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_0ddf6aec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#article[data-v-0ddf6aec] {\n  min-height: 100vh;\n  margin: 0 auto;\n  padding: 0.4rem 0.43rem;\n  width: 100vw;\n  box-sizing: border-box;\n}\n#article *[data-v-0ddf6aec] {\n  max-width: 100%;\n  box-sizing: border-box;\n}\n#article .title[data-v-0ddf6aec] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 0.53rem;\n  line-height: 0.75rem;\n}\n#article .sub[data-v-0ddf6aec] {\n  margin: 0.4rem 0;\n  font-family: PingFang SC;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 0.32rem;\n  line-height: 0.32rem;\n  text-align: justify;\n  color: #6d707d;\n}\n#article .username[data-v-0ddf6aec] {\n  padding-right: 0.27rem;\n}\n#article .content[data-v-0ddf6aec] {\n  word-break: break-word;\n}\n#article .noData[data-v-0ddf6aec] {\n  color: #999;\n  line-height: 60vh;\n  font-size: 0.8rem;\n  text-align: center;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/detail/_id.vue?vue&type=template&id=0ddf6aec&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"article"}},[_vm._ssrNode("<div class=\"header\" data-v-0ddf6aec><div class=\"title\" data-v-0ddf6aec>"+_vm._ssrEscape("\n      "+_vm._s(_vm.info.title)+"\n    ")+"</div> <div class=\"sub\" data-v-0ddf6aec><span data-v-0ddf6aec>"+_vm._ssrEscape(_vm._s(_vm.source)+":")+"</span> <span class=\"username\" data-v-0ddf6aec>"+_vm._ssrEscape(_vm._s(_vm.info.user_name))+"</span> <span data-v-0ddf6aec>"+_vm._ssrEscape(_vm._s(_vm._f("filterDate")(_vm.info.create_time)))+"</span></div></div> "+((_vm.info.content)?("<div class=\"content\" data-v-0ddf6aec>"+(_vm._s(_vm.info.content))+"</div>"):("<div class=\"noData\" data-v-0ddf6aec>\n       该文章不存在\n  </div>"))+" "),_c('van-image-preview',{attrs:{"close-on-popstate":"","closeable":"","start-position":_vm.current,"images":_vm.images},on:{"change":_vm.onChange,"onclose":_vm.onclose},model:{value:(_vm.showPreview),callback:function ($$v) {_vm.showPreview=$$v},expression:"showPreview"}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/detail/_id.vue?vue&type=template&id=0ddf6aec&scoped=true&

// EXTERNAL MODULE: ./api/server.js
var server = __webpack_require__(147);

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
    const [langR, detailR] = await Promise.all([server["a" /* default */].articleLang(ctx), server["a" /* default */].articleDetail(ctx)]);
    const {
      status,
      data
    } = detailR;
    const info = String(data) == "null" || !data ? {
      title: "该文章不存在"
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
      } = this.languages.find(v => v.zh == '来源') || {
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
      } //时间戳是整数，否则要parseInt转换


      var time = new Date(create_time || new Date().getTime()); // 需要使用Date格式进行日期转化，若是时间戳、字符串时间，需要通过new Date(..)转化

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
  
  var style0 = __webpack_require__(248)
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
  "cf9c2edc"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map