exports.ids = [28];
exports.modules = {

/***/ 150:
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
  add("2242f5b6", content, true, context)
};

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_1700a085_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(150);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_1700a085_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_1700a085_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_1700a085_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_1700a085_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(35);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(202);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-1700a085] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-1700a085] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-1700a085] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-1700a085] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-1700a085] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-1700a085] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorBackground0[data-v-1700a085] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-1700a085] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-1700a085] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-1700a085] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-1700a085] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-1700a085] {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary[data-v-1700a085] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-1700a085] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-1700a085] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-1700a085] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-1700a085] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-1700a085] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-1700a085] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-1700a085] {\n  color: #F04E98;\n}\n.theme-light .colorBlack[data-v-1700a085] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-1700a085] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-1700a085] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-1700a085] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-1700a085] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-1700a085] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-1700a085] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-1700a085] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0[data-v-1700a085] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-1700a085] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-1700a085] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-1700a085] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-1700a085] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-1700a085] {\n  background-color: #1F212E;\n}\n.theme-dark .colorBackground0[data-v-1700a085] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-1700a085] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-1700a085] {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3[data-v-1700a085] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-1700a085] {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary[data-v-1700a085] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-1700a085] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-1700a085] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-1700a085] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-1700a085] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-1700a085] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-1700a085] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-1700a085] {\n  color: #F04E98;\n}\n.theme-dark .colorBlack[data-v-1700a085] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-1700a085] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-1700a085] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-1700a085] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-1700a085] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-1700a085] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-1700a085] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-1700a085] {\n  color: rgba(47,128,237,0.1);\n}\n.detail_box .detail_box_header[data-v-1700a085] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0.21rem 0.59rem 0.21rem 0.43rem;\n  align-items: center;\n}\n.detail_box .detail_box_header img[data-v-1700a085] {\n  width: 2.88rem;\n  height: 0.75rem;\n}\n.detail_box .detail_box_header .detail_box_lang .langBox[data-v-1700a085] {\n  box-sizing: border-box;\n}\n.detail_box .detail_box_header .detail_box_lang .langBox .curLang[data-v-1700a085] {\n  font-size: 0.37rem;\n}\n.detail_box .detail_box_header .detail_box_lang .langBox .icon[data-v-1700a085] {\n  transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  -o-transform: rotate(90deg);\n}\n.detail_box .detail_box_header .detail_box_lang .langList[data-v-1700a085] {\n  display: none;\n  position: absolute;\n  right: 0.43rem;\n  overflow: hidden;\n  padding: 0.32rem 0.59rem;\n  background: #fff;\n  border-radius: 0.3rem;\n  box-shadow: 0 0.8rem 1.07rem 0 #0e1b400d;\n  font-size: 0.37rem;\n  line-height: 0.8rem;\n  text-align: center;\n}\n.detail_box .detail_box_text[data-v-1700a085] {\n  width: 100%;\n  margin: 0.75rem 0.43rem 0;\n}\n.detail_box .detail_box_text p[data-v-1700a085] {\n  width: 6.13rem;\n  font-weight: bold;\n  font-size: 0.64rem;\n  line-height: 0.64rem;\n}\n.detail_box .detail_box_flex_content[data-v-1700a085] {\n  display: flex;\n  align-items: center;\n  margin: 0.27rem 0.43rem;\n}\n.detail_box .detail_box_flex_content .detail_box_flex_content_first[data-v-1700a085] {\n  width: 2.96rem;\n}\n.detail_box .detail_box_flex_content .detail_box_flex_content_last[data-v-1700a085] {\n  width: 3.31rem;\n}\n.detail_box .detail_box_flex_content .detail_box_flex_content_right[data-v-1700a085] {\n  margin-left: 1.76rem;\n}\n.detail_box .detail_box_flex_content img[data-v-1700a085] {\n  width: 0.64rem;\n  height: 0.64rem;\n}\n.detail_box .detail_box_address[data-v-1700a085] {\n  margin: 1.33rem 0.43rem;\n  height: 6.99rem;\n  border-radius: 0.43rem;\n  padding: 0.27rem;\n  background: #ddd !important;\n}\n.detail_box .detail_box_address .detail_box_address_header[data-v-1700a085] {\n  font-size: 0.48rem;\n  line-height: 0.64rem;\n  font-weight: 600;\n  text-align: center;\n}\n.detail_box .detail_box_address .detail_box_address_desc[data-v-1700a085] {\n  font-size: 0.35rem;\n  line-height: 0.37rem;\n  text-align: center;\n  margin-top: 0.27rem;\n}\n.detail_box .detail_box_address .detail_box_address_textarea[data-v-1700a085] {\n  margin: 0.53rem 0;\n  height: 2.93rem;\n  border-radius: 0.21rem;\n}\n.detail_box .detail_box_address .detail_box_address_textarea textarea[data-v-1700a085] {\n  border-radius: 0.21rem;\n  border: none;\n  width: 7.23rem;\n  height: 0.85rem;\n  padding: 0.37rem;\n  text-align: center;\n  line-height: 0.85rem;\n  outline: none;\n  background: #f3f5f6;\n  resize: none;\n  font-size: 0.32rem;\n}\n.detail_box .detail_box_address .detail_box_address_textarea textarea[data-v-1700a085]::placeholder {\n  color: #4b5373;\n}\n.detail_box .detail_box_address .detail_box_address_textarea textarea.focus[data-v-1700a085] {\n  line-height: 0.43rem;\n  font-size: 0.32rem;\n  text-align: left;\n}\n.detail_box .detail_box_address .detail_box_address_textarea .detail_box_address_textarea_btn[data-v-1700a085] {\n  background: #495bff;\n  border-radius: 0.21rem;\n  color: #fff;\n  height: 1.33rem;\n  line-height: 1.33rem;\n  text-align: center;\n  font-size: 0.43rem;\n}\n.detail_box .detail_box_address .detail_box_address_textarea .detail_box_address_textarea_link[data-v-1700a085] {\n  margin: 0.4rem 1.87rem;\n  text-align: center;\n  font-size: 0.37rem;\n}\n.detail_box .setMargin[data-v-1700a085] {\n  margin: 1.07rem 0.43rem 0.53rem;\n}\n.detail_box .setBottom[data-v-1700a085] {\n  padding: 0 0.43rem 0.91rem;\n}\n.detail_box .detail_box_wallet img[data-v-1700a085] {\n  width: 100%;\n}\n.detail_box .detail_box_wallet .detail_box_wallet_title_content .detail_box_wallet_title[data-v-1700a085] {\n  font-size: 0.59rem;\n  font-weight: 600;\n}\n.detail_box .detail_box_wallet .detail_box_wallet_title_content .detail_box_wallet_ul[data-v-1700a085] {\n  margin-top: 0.37rem;\n  line-height: 0.53rem;\n  color: #0e1b40;\n}\n.detail_box .detail_box_wallet .detail_box_wallet_title_content .detail_box_wallet_ul li[data-v-1700a085] {\n  margin-left: 0.48rem;\n}\n.detail_box .detail_box_wallet .detail_box_wallet_title_content .detail_box_wallet_ul li[data-v-1700a085]::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0.37rem;\n  margin-top: 0.08rem;\n  width: 0.37rem;\n  height: 0.37rem;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-size: 100% auto;\n}\n.detail_box .setBackground[data-v-1700a085] {\n  width: 100%;\n  margin-top: 0.91rem;\n  background: url(\"https://cdn.bitkeep.vip/u_b_ad386c70-d0bb-11eb-a1fd-1b9796c35a14.jpeg\") no-repeat;\n}\n.detail_box .detail_box_nft[data-v-1700a085] {\n  margin: 1.33rem 0.43rem;\n}\n.detail_box .detail_box_nft h2[data-v-1700a085] {\n  font-size: 0.59rem;\n}\n.detail_box .detail_box_nft .detail_box_nft_desc[data-v-1700a085] {\n  color: #0e1b40;\n  font-size: 0.32rem;\n  line-height: 0.43rem;\n}\n.detail_box .detail_box_nft img[data-v-1700a085] {\n  width: 100%;\n  margin-top: 0.8rem;\n}\n.detail_box .detail_box_bitkeep[data-v-1700a085] {\n  position: relative;\n  box-sizing: border-box;\n  height: 14.51rem;\n  padding: 0.8rem 0.43rem 0;\n  background: #0e1b40;\n}\n.detail_box .detail_box_bitkeep>h1[data-v-1700a085] {\n  font-size: 0.59rem;\n  color: #fff;\n}\n.detail_box .detail_box_bitkeep p[data-v-1700a085] {\n  color: #fff;\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n  font-weight: 400;\n}\n.detail_box .detail_box_bitkeep div[data-v-1700a085] {\n  color: #fff;\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n  font-weight: 400;\n}\n.detail_box .detail_box_bitkeep ul li[data-v-1700a085] {\n  margin-top: 0.8rem;\n  font-size: 0.37rem;\n}\n.detail_box .detail_box_bitkeep ul li .num[data-v-1700a085] {\n  font-size: 0.64rem;\n  font-weight: 600;\n}\n.detail_box .detail_box_bitkeep ul li .num span[data-v-1700a085] {\n  font-size: 0.37rem;\n}\n.detail_box .detail_box_bitkeep .people[data-v-1700a085] {\n  position: absolute;\n  bottom: 0;\n  left: 2.5%;\n  width: 95%;\n}\n.detail_box .detail_box_bitkeep .people img[data-v-1700a085] {\n  display: block;\n  width: 100%;\n}\n.detail_box .blindbox_logo[data-v-1700a085] {\n  width: 100%;\n  margin: 0.4rem auto 1.87rem;\n  display: flex;\n  justify-content: center;\n  padding: 0.4rem;\n  box-sizing: border-box;\n  align-items: center;\n}\n.detail_box .blindbox_logo .logo[data-v-1700a085] {\n  width: 2.8rem;\n  height: 0.75rem;\n  display: flex;\n}\n.detail_box .blindbox_logo .logo img[data-v-1700a085] {\n  width: 100%;\n  height: 100%;\n}\n.detail_box .download[data-v-1700a085] {\n  box-sizing: border-box;\n  position: fixed;\n  z-index: 100;\n  bottom: 0;\n  width: 100%;\n  height: 2rem;\n  padding: 0 0.43rem;\n  background: #fff;\n  border-top: 0.03rem solid #f4f5fa;\n}\n.detail_box .download .left[data-v-1700a085] {\n  box-sizing: border-box;\n  float: left;\n  width: 50%;\n  padding-right: 1%;\n}\n.detail_box .download .right[data-v-1700a085] {\n  box-sizing: border-box;\n  float: left;\n  width: 50%;\n  padding-left: 1%;\n}\n.detail_box .download a[data-v-1700a085] {\n  display: block;\n  width: 100%;\n  margin: 0.32rem 0 0;\n}\n.detail_box .download a img[data-v-1700a085] {\n  display: block;\n  width: 100%;\n}\n.detail_box .download .version[data-v-1700a085] {\n  width: 100%;\n  color: #9ca5b3;\n  font-size: 0.32rem;\n  margin-top: 0.13rem;\n  text-align: center;\n}\n.detail_box a[data-v-1700a085] {\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n  -moz-tap-highlight-color: transparent;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 202:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALwSURBVHgBxZgxb9NQEMf/FxJVEIYMIDbqwgeg/QQkEyliCEyIFhEWJiTYGDK0GUAwgBqJBRgaBK2YUCYaBFJTwcCARGBhA3dELBlICorC613ipLZrx3bjOH/J8lP8ru/Xu3u+dyYEVO6y0v4dQo6AMwpIg5CC4ktEaPBY716ELZVApVomPcCfZzOfOn9F5RXhGgQimOqkUHqzTmU/kz2BLiyqdEdhlYcaRpPOYEUvMFegdF6lDrexxMPbCFcrOwkUa2VqwC9QNq80tFGRPMF4pHN+ZZzyi5xgqI1NjB6iA0FZgIwwfYkApq86hy9jDl/M/NTIGQ3RadZYc6CBh4xtvYoJiNfNVF9STcYx049LmJBI7TmiCyTeQbShskszGAwPEW5hwjKqAMjY5j8xRiWTwOmTwLfvw+epDmbiDJPDGHXiOHC/wPdjwI9t4GbBfS5x0Y6p4MXyQDCiU9M9b7kCcWWIcRJNIwIYUeUt0Gy624hzxEMaIoB5/wF4+sLTNCW7LIUQ5Qbz6Ikv81TMzwK5c737mGG6EqDGsAmywI2rwOO7vaQMAvPpczAYYRkKlDyyt4CMHxScoZxgZIs/fIag0gVoy+1pswWsvbYC2qHcYO7cG76jnKQUtgWoPmySALlBhQkjIkKNstzW8BvSs3QsXOpdfYn3/rTCgxFJ6eieh+YXlBxZ014GdiizRoVh1TfWaK677Tl2z/1Y2MMXIowwlOQ+ODGylyRsmh9js6fCgGHp7J0ZGcQHhITrfHLb9GMtXvr1GzjKCf7u48gw4p1if2zpOuYX1QpXuGgPaxyqjXUaNKOW0jEVxzJ5vAZClr7TwrL5BwtQhfuj/x1clImIAIa3eaZWsbbU+4pr9RV1J44Tio88X2UNWcv+zLHay8SpBOY4w0oIn6b0t4m0E4zI83NMltsTolA6Wl12cr8hdJPvD1YCFuN2id09i2CqyYu3GtYHq31gvdqXY8uz/N7S+L/WbJ/0GiQQvTypuIXGTbsmLywLavrgRwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindboxInvite/detail.vue?vue&type=template&id=1700a085&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"detail_box"},[_vm._ssrNode("<div class=\"detail_box_header\" data-v-1700a085>","</div>",[_vm._ssrNode("<div data-v-1700a085><img"+(_vm._ssrAttr("src",__webpack_require__(80)))+" data-v-1700a085></div> "),_vm._ssrNode("<div class=\"detail_box_lang\" data-v-1700a085>","</div>",[_vm._ssrNode("<div id=\"showLang\" class=\"langBox\" data-v-1700a085>","</div>",[_vm._ssrNode("<span class=\"curLang\" data-v-1700a085>中文</span> "),_c('van-icon',{staticClass:"icon",attrs:{"name":"play"}})],2),_vm._ssrNode(" <ul id=\"langList\" class=\"langList\" data-v-1700a085><li data-val=\"zh\" data=\"中文\" class=\"langItem\" data-v-1700a085>中文</li> <li data-val=\"en\" data=\"English\" class=\"langItem\" data-v-1700a085>English</li></ul>")],2)],2),_vm._ssrNode(" <div class=\"detail_box_text\" data-v-1700a085><p class=\"textPrimary0\" data-v-1700a085>The most trusted &amp; secure crypto wallet</p></div> <div class=\"detail_box_flex\" data-v-1700a085><div class=\"detail_box_flex_content\" data-v-1700a085><div data-v-1700a085><div data-v-1700a085><img src=\"http://cdn.bitkeep.vip/u_b_24d53cf0-5a54-11ec-bdbc-7722494dfa58.jpeg\" alt data-v-1700a085></div> <div class=\"detail_box_flex_content_first\" data-v-1700a085>\n          Securely store encrypted assets\n        </div></div> <div class=\"detail_box_flex_content_right\" data-v-1700a085><div data-v-1700a085><img src=\"http://cdn.bitkeep.vip/u_b_24d60040-5a54-11ec-bdbc-7722494dfa58.jpeg\" alt data-v-1700a085></div> <div class=\"detail_box_flex_content_last\" data-v-1700a085>\n          Convenient &amp; easy to use BKSwap\n        </div></div></div> <div class=\"detail_box_flex_content\" data-v-1700a085><div data-v-1700a085><div data-v-1700a085><img src=\"http://cdn.bitkeep.vip/u_b_24d5d930-5a54-11ec-bdbc-7722494dfa58.jpeg\" alt data-v-1700a085></div> <div class=\"detail_box_flex_content_first\" data-v-1700a085>Support 721 NFT</div></div> <div class=\"detail_box_flex_content_right\" data-v-1700a085><div data-v-1700a085><img src=\"http://cdn.bitkeep.vip/u_b_24d5b220-5a54-11ec-bdbc-7722494dfa58.jpeg\" alt data-v-1700a085></div> <div data-v-1700a085>7000+ DApp ecosystem</div></div></div></div> <div class=\"detail_box_address colorBackgroundWhite\" data-v-1700a085><div class=\"detail_box_address_header textPrimary0\" data-v-1700a085>\n      Your friend invites you to join BitKeep multi-chain wallet\n    </div> <div class=\"detail_box_address_desc textSecond1\" data-v-1700a085>\n      Trade and mine together to get BKB asset rewards\n    </div> <div class=\"detail_box_address_textarea colorBackground2\" data-v-1700a085><textarea type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t(
            'ActivityBlindbox.ActivityBlindboxDetail.inputAddressPlaceholader'
          )))+(_vm._ssrClass(null,{ focus: _vm.focus || !!_vm.address }))+" data-v-1700a085>"+_vm._ssrEscape(_vm._s(_vm.address))+"</textarea> <div class=\"detail_box_address_textarea_btn\" data-v-1700a085>提交地址 接受邀请</div> <div class=\"detail_box_address_textarea_link colorPrimary\" data-v-1700a085>\n        没有 ETH 地址? 点击下方按钮下载 BitKeep 创建\n      </div></div></div> <div class=\"detail_box_wallet setMargin\" data-v-1700a085><h1 data-v-1700a085>Why choose BitKeep wallet？</h1> <img src=\"http://cdn.bitkeep.vip/u_b_916160b0-5a59-11ec-bdbc-7722494dfa58.png\" alt data-v-1700a085> <div class=\"detail_box_wallet_title_content\" data-v-1700a085><div class=\"detail_box_wallet_title\" data-v-1700a085>Control your crypto</div> <ul class=\"detail_box_wallet_ul\" data-v-1700a085><li data-v-1700a085>安全存储加密数字货币及 NFT，资产自我掌控</li> <li data-v-1700a085>支持 30+ 主链，5000+ 种加密资产</li> <li data-v-1700a085>7000+ DApp 生态功能，畅玩 DeFi</li></ul></div></div> <div class=\"detail_box_wallet setBackground\" data-v-1700a085><img src=\"http://cdn.bitkeep.vip/u_b_e98408a0-5a5f-11ec-bdbc-7722494dfa58.jpeg\" alt data-v-1700a085> <div class=\"detail_box_wallet_title_content setBottom\" data-v-1700a085><div class=\"detail_box_wallet_title\" data-v-1700a085>Trading anycoins on BKSwap</div> <ul class=\"detail_box_wallet_ul\" data-v-1700a085><li data-v-1700a085>随时轻松兑换和交易多链加密货币</li> <li data-v-1700a085>聚合 Uniswap、Sushiswap、PancakeSwap 等 30+ 主流 DEX</li></ul></div></div> <div class=\"detail_box_nft\" data-v-1700a085><h2 class=\"textPrimary0\" data-v-1700a085>Store your NFTs</h2> <div class=\"detail_box_nft_desc\" data-v-1700a085>\n      Safely store and easily view all of your NFTs (ERC721 tokens) right in\n      your Wallet.\n    </div> <img src=\"http://cdn.bitkeep.vip/u_b_f565c310-5a60-11ec-bdbc-7722494dfa58.png\" alt data-v-1700a085></div> <div class=\"detail_box_bitkeep\" data-v-1700a085><h1 bklang=\"five_1\" data-v-1700a085>BitKeep 为全球提供服务</h1> <p bklang=\"five_2\" data-v-1700a085>\n      已为全球 168+ 个国家地区的数百万用户提供安全、可靠的加密资产管理服务\n    </p> <ul data-v-1700a085><li data-v-1700a085><p bklang=\"five_3\" data-v-1700a085>用户量</p> <div class=\"num GB\" data-v-1700a085>4,000,000<span data-v-1700a085>+</span></div></li> <li data-v-1700a085><p bklang=\"five_4\" data-v-1700a085>转账金额</p> <div class=\"num\" data-v-1700a085><span data-v-1700a085>$</span>5,000<span data-v-1700a085>+ 亿</span></div></li> <li data-v-1700a085><p data-v-1700a085>覆盖国家和地区</p> <div class=\"num\" data-v-1700a085>168<span data-v-1700a085>+</span></div></li></ul> <div class=\"people\" data-v-1700a085><img src=\"https://cdn.bitkeep.vip/u_b_e27e3060-d0b9-11eb-a1fd-1b9796c35a14.png\" alt=\"people\" data-v-1700a085></div></div> <div class=\"blindbox_logo\" data-v-1700a085><span class=\"logo\" data-v-1700a085><img"+(_vm._ssrAttr("src",__webpack_require__(80)))+" data-v-1700a085></span></div> "+((_vm.isIos)?("<div id=\"IosBtnen\" class=\"download\" data-v-1700a085><div class=\"left\" data-v-1700a085><a href=\"https://itunes.apple.com/app/bitkeep/id1395301115\" target=\"_blank\" data-v-1700a085><img src=\"https://cdn.bitkeep.vip/u_b_333f4110-d0ba-11eb-a1fd-1b9796c35a14.png\" alt=\"btn1\" data-v-1700a085></a></div> <div class=\"right\" data-v-1700a085><a href=\"https://www.bitkeep.com/testFlight.html\" data-v-1700a085><img src=\"https://cdn.bitkeep.vip/u_b_33418b00-d0ba-11eb-a1fd-1b9796c35a14.png\" alt=\"btn2\" data-v-1700a085></a></div></div>"):("<div id=\"AndroidBtnen\" class=\"download\" data-v-1700a085><div class=\"left\" data-v-1700a085><a href=\"https://www.bitkeep.com/\" target=\"_blank\" data-v-1700a085><img src=\"https://cdn.bitkeep.vip/u_b_33740cb0-d0ba-11eb-a1fd-1b9796c35a14.png\" alt=\"btn1\" data-v-1700a085></a></div> <div class=\"right\" data-v-1700a085><a href=\"https://www.bitkeep.com/\" class=\"btnDwonload\" data-v-1700a085><img src=\"https://cdn.bitkeep.vip/u_b_337433c0-d0ba-11eb-a1fd-1b9796c35a14.png\" alt=\"btn2\" data-v-1700a085></a></div></div>")))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/blindboxInvite/detail.vue?vue&type=template&id=1700a085&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindboxInvite/detail.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var detailvue_type_script_lang_js_ = ({
  data() {
    return {};
  },

  methods: {}
});
// CONCATENATED MODULE: ./pages/activity/blindboxInvite/detail.vue?vue&type=script&lang=js&
 /* harmony default export */ var blindboxInvite_detailvue_type_script_lang_js_ = (detailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/blindboxInvite/detail.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(200)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blindboxInvite_detailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1700a085",
  "53d94acd"
  
)

/* harmony default export */ var detail = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo@2.ca1f304.png";

/***/ })

};;
//# sourceMappingURL=detail.js.map