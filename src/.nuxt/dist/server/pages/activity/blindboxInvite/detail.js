exports.ids = [29];
exports.modules = {

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(210);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("a16c2958", content, true, context)
};

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_3148940c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(157);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_3148940c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_3148940c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_3148940c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_3148940c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(35);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(211);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-3148940c] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-3148940c] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-3148940c] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-3148940c] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-3148940c] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-3148940c] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorBackground0[data-v-3148940c] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-3148940c] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-3148940c] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-3148940c] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-3148940c] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-3148940c] {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary[data-v-3148940c] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-3148940c] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-3148940c] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-3148940c] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-3148940c] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-3148940c] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-3148940c] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-3148940c] {\n  color: #F04E98;\n}\n.theme-light .colorBlack[data-v-3148940c] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-3148940c] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-3148940c] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-3148940c] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-3148940c] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-3148940c] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-3148940c] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-3148940c] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0[data-v-3148940c] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-3148940c] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-3148940c] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-3148940c] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-3148940c] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-3148940c] {\n  background-color: #1F212E;\n}\n.theme-dark .colorBackground0[data-v-3148940c] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-3148940c] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-3148940c] {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3[data-v-3148940c] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-3148940c] {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary[data-v-3148940c] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-3148940c] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-3148940c] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-3148940c] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-3148940c] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-3148940c] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-3148940c] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-3148940c] {\n  color: #F04E98;\n}\n.theme-dark .colorBlack[data-v-3148940c] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-3148940c] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-3148940c] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-3148940c] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-3148940c] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-3148940c] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-3148940c] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-3148940c] {\n  color: rgba(47,128,237,0.1);\n}\n.loading[data-v-3148940c] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.detail_box_back[data-v-3148940c] {\n  background: url(\"http://cdn.bitkeep.vip/u_b_4dcd9190-5bec-11ec-bdbc-7722494dfa58.png\") no-repeat;\n  background-size: 100% 100%;\n}\n.detail_box h1[data-v-3148940c] {\n  font-size: 0.64rem;\n}\n.detail_box .detail_box_header[data-v-3148940c] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.21rem 0.59rem 0.21rem 0.43rem;\n  align-items: center;\n}\n.detail_box .detail_box_header img[data-v-3148940c] {\n  width: 2.88rem;\n  height: 0.75rem;\n}\n.detail_box .detail_box_header .detail_box_lang .langBox[data-v-3148940c] {\n  box-sizing: border-box;\n}\n.detail_box .detail_box_header .detail_box_lang .langBox .curLang[data-v-3148940c] {\n  font-size: 0.37rem;\n}\n.detail_box .detail_box_header .detail_box_lang .langBox .icon[data-v-3148940c] {\n  transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  -o-transform: rotate(90deg);\n}\n.detail_box .detail_box_header .detail_box_lang .langList[data-v-3148940c] {\n  position: absolute;\n  right: 0.43rem;\n  overflow: hidden;\n  padding: 0.32rem 0.59rem;\n  background: #fff;\n  border-radius: 0.16rem;\n  box-shadow: 0 0.8rem 1.07rem 0 #0e1b400d;\n  font-size: 0.37rem;\n  line-height: 0.8rem;\n  text-align: center;\n  margin-top: 0.16rem;\n}\n.detail_box .detail_box_text[data-v-3148940c] {\n  margin: 0.75rem 0.43rem 0;\n}\n.detail_box .detail_box_text p[data-v-3148940c] {\n  width: 6.13rem;\n  font-weight: bold;\n  font-size: 0.64rem;\n  line-height: 0.64rem;\n}\n.detail_box .detail_box_flex_content[data-v-3148940c] {\n  display: flex;\n  align-items: center;\n  margin: 0.27rem 0.43rem;\n}\n.detail_box .detail_box_flex_content .detail_box_flex_content_first[data-v-3148940c] {\n  width: 2.96rem;\n  font-size: 0.37rem;\n}\n.detail_box .detail_box_flex_content .detail_box_flex_content_last[data-v-3148940c] {\n  font-size: 0.37rem;\n}\n.detail_box .detail_box_flex_content .detail_box_flex_content_right[data-v-3148940c] {\n  margin-left: 1.76rem;\n}\n.detail_box .detail_box_flex_content .detail_box_flex_content_right .detail_box_flex_font[data-v-3148940c] {\n  font-size: 0.37rem;\n}\n.detail_box .detail_box_flex_content img[data-v-3148940c] {\n  width: 0.64rem;\n  height: 0.64rem;\n}\n.detail_box .detail_box_address[data-v-3148940c] {\n  margin: 1.33rem 0.43rem 1.07rem;\n  height: 6.99rem;\n  border-radius: 0.43rem;\n  padding: 0.27rem;\n  background: #fff;\n}\n.detail_box .detail_box_address .detail_box_address_header[data-v-3148940c] {\n  font-size: 0.48rem;\n  line-height: 0.64rem;\n  font-weight: 600;\n  text-align: center;\n}\n.detail_box .detail_box_address .detail_box_address_desc[data-v-3148940c] {\n  font-size: 0.35rem;\n  line-height: 0.37rem;\n  text-align: center;\n  margin-top: 0.27rem;\n}\n.detail_box .detail_box_address .detail_box_address_textarea[data-v-3148940c] {\n  margin: 0.53rem 0;\n  height: 2.93rem;\n  border-radius: 0.21rem;\n}\n.detail_box .detail_box_address .detail_box_address_textarea textarea[data-v-3148940c] {\n  border-radius: 0.21rem;\n  border: none;\n  width: 7.23rem;\n  height: 0.85rem;\n  padding: 0.37rem;\n  text-align: center;\n  line-height: 0.85rem;\n  outline: none;\n  background: #f3f5f6;\n  resize: none;\n  font-size: 0.32rem;\n}\n.detail_box .detail_box_address .detail_box_address_textarea textarea[data-v-3148940c]::placeholder {\n  color: #4b5373;\n}\n.detail_box .detail_box_address .detail_box_address_textarea textarea.focus[data-v-3148940c] {\n  line-height: 0.43rem;\n  font-size: 0.32rem;\n  text-align: left;\n}\n.detail_box .detail_box_address .detail_box_address_textarea .detail_box_address_textarea_btn[data-v-3148940c] {\n  background: #495bff;\n  border-radius: 0.21rem;\n  color: #fff;\n  height: 1.33rem;\n  line-height: 1.33rem;\n  text-align: center;\n  font-size: 0.43rem;\n}\n.detail_box .detail_box_address .detail_box_address_textarea .detail_box_address_textarea_link[data-v-3148940c] {\n  margin: 0.4rem 1.87rem;\n  text-align: center;\n  font-size: 0.37rem;\n}\n.detail_box .setMargin[data-v-3148940c] {\n  margin: 1.07rem 0.43rem 0.53rem;\n}\n.detail_box .setBottom[data-v-3148940c] {\n  padding: 0 0.43rem 0.91rem;\n}\n.detail_box .detail_box_wallet>h1[data-v-3148940c] {\n  font-size: 0.64rem;\n}\n.detail_box .detail_box_wallet img[data-v-3148940c] {\n  width: 100%;\n}\n.detail_box .detail_box_wallet .detail_box_wallet_title_content .detail_box_wallet_title[data-v-3148940c] {\n  font-weight: 600;\n}\n.detail_box .detail_box_wallet .detail_box_wallet_title_content .detail_box_wallet_ul[data-v-3148940c] {\n  margin-top: 0.37rem;\n  line-height: 0.53rem;\n  color: #0e1b40;\n}\n.detail_box .detail_box_wallet .detail_box_wallet_title_content .detail_box_wallet_ul li[data-v-3148940c] {\n  margin-left: 0.48rem;\n  font-size: 0.32rem;\n}\n.detail_box .detail_box_wallet .detail_box_wallet_title_content .detail_box_wallet_ul li[data-v-3148940c]::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0.37rem;\n  margin-top: 0.08rem;\n  width: 0.37rem;\n  height: 0.37rem;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-size: 100% auto;\n}\n.detail_box .setBackground[data-v-3148940c] {\n  width: 100%;\n  margin-top: 0.91rem;\n  background: url(\"https://cdn.bitkeep.vip/u_b_ad386c70-d0bb-11eb-a1fd-1b9796c35a14.jpeg\") 100% 100% no-repeat;\n}\n.detail_box .detail_box_nft[data-v-3148940c] {\n  margin: 0.8rem 0.43rem;\n}\n.detail_box .detail_box_nft h2[data-v-3148940c] {\n  font-size: 0.59rem;\n}\n.detail_box .detail_box_nft .detail_box_nft_desc[data-v-3148940c] {\n  color: #0e1b40;\n  font-size: 0.32rem;\n  line-height: 0.43rem;\n}\n.detail_box .detail_box_nft img[data-v-3148940c] {\n  width: 100%;\n  margin-top: 0.8rem;\n}\n.detail_box .detail_box_bitkeep[data-v-3148940c] {\n  position: relative;\n  box-sizing: border-box;\n  height: 14.51rem;\n  padding: 0.8rem 0.43rem 0;\n  background: #0e1b40;\n}\n.detail_box .detail_box_bitkeep>h1[data-v-3148940c] {\n  font-size: 0.59rem;\n  color: #fff;\n}\n.detail_box .detail_box_bitkeep p[data-v-3148940c] {\n  color: #fff;\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n  font-weight: 400;\n}\n.detail_box .detail_box_bitkeep div[data-v-3148940c] {\n  color: #fff;\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n  font-weight: 400;\n}\n.detail_box .detail_box_bitkeep ul li[data-v-3148940c] {\n  margin-top: 0.8rem;\n  font-size: 0.37rem;\n}\n.detail_box .detail_box_bitkeep ul li .num[data-v-3148940c] {\n  font-size: 0.64rem;\n  font-weight: 600;\n}\n.detail_box .detail_box_bitkeep ul li .num span[data-v-3148940c] {\n  font-size: 0.37rem;\n}\n.detail_box .detail_box_bitkeep .people[data-v-3148940c] {\n  position: absolute;\n  bottom: 0;\n  left: 2.5%;\n  width: 95%;\n}\n.detail_box .detail_box_bitkeep .people img[data-v-3148940c] {\n  display: block;\n  width: 100%;\n}\n.detail_box .blindbox_logo[data-v-3148940c] {\n  width: 100%;\n  margin: 0.4rem auto 1.87rem;\n  display: flex;\n  justify-content: center;\n  padding: 0.4rem;\n  box-sizing: border-box;\n  align-items: center;\n}\n.detail_box .blindbox_logo .logo[data-v-3148940c] {\n  width: 2.8rem;\n  height: 0.75rem;\n  display: flex;\n}\n.detail_box .blindbox_logo .logo img[data-v-3148940c] {\n  width: 100%;\n  height: 100%;\n}\n.detail_box .download[data-v-3148940c] {\n  box-sizing: border-box;\n  position: fixed;\n  z-index: 100;\n  bottom: 0;\n  width: 100%;\n  height: 2rem;\n  padding: 0 0.43rem;\n  background: #fff;\n  border-top: 0.03rem solid #f4f5fa;\n}\n.detail_box .download .left[data-v-3148940c] {\n  box-sizing: border-box;\n  float: left;\n  width: 50%;\n  padding-right: 1%;\n}\n.detail_box .download .right[data-v-3148940c] {\n  box-sizing: border-box;\n  float: left;\n  width: 50%;\n  padding-left: 1%;\n}\n.detail_box .download a[data-v-3148940c] {\n  display: block;\n  width: 100%;\n  margin: 0.32rem 0 0;\n}\n.detail_box .download a img[data-v-3148940c] {\n  display: block;\n  width: 100%;\n}\n.detail_box .download .version[data-v-3148940c] {\n  width: 100%;\n  color: #9ca5b3;\n  font-size: 0.32rem;\n  margin-top: 0.13rem;\n  text-align: center;\n}\n.detail_box .setFont[data-v-3148940c] {\n  font-size: 0.32rem;\n}\n.detail_box a[data-v-3148940c] {\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n  -moz-tap-highlight-color: transparent;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 211:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALwSURBVHgBxZgxb9NQEMf/FxJVEIYMIDbqwgeg/QQkEyliCEyIFhEWJiTYGDK0GUAwgBqJBRgaBK2YUCYaBFJTwcCARGBhA3dELBlICorC613ipLZrx3bjOH/J8lP8ru/Xu3u+dyYEVO6y0v4dQo6AMwpIg5CC4ktEaPBY716ELZVApVomPcCfZzOfOn9F5RXhGgQimOqkUHqzTmU/kz2BLiyqdEdhlYcaRpPOYEUvMFegdF6lDrexxMPbCFcrOwkUa2VqwC9QNq80tFGRPMF4pHN+ZZzyi5xgqI1NjB6iA0FZgIwwfYkApq86hy9jDl/M/NTIGQ3RadZYc6CBh4xtvYoJiNfNVF9STcYx049LmJBI7TmiCyTeQbShskszGAwPEW5hwjKqAMjY5j8xRiWTwOmTwLfvw+epDmbiDJPDGHXiOHC/wPdjwI9t4GbBfS5x0Y6p4MXyQDCiU9M9b7kCcWWIcRJNIwIYUeUt0Gy624hzxEMaIoB5/wF4+sLTNCW7LIUQ5Qbz6Ikv81TMzwK5c737mGG6EqDGsAmywI2rwOO7vaQMAvPpczAYYRkKlDyyt4CMHxScoZxgZIs/fIag0gVoy+1pswWsvbYC2qHcYO7cG76jnKQUtgWoPmySALlBhQkjIkKNstzW8BvSs3QsXOpdfYn3/rTCgxFJ6eieh+YXlBxZ014GdiizRoVh1TfWaK677Tl2z/1Y2MMXIowwlOQ+ODGylyRsmh9js6fCgGHp7J0ZGcQHhITrfHLb9GMtXvr1GzjKCf7u48gw4p1if2zpOuYX1QpXuGgPaxyqjXUaNKOW0jEVxzJ5vAZClr7TwrL5BwtQhfuj/x1clImIAIa3eaZWsbbU+4pr9RV1J44Tio88X2UNWcv+zLHay8SpBOY4w0oIn6b0t4m0E4zI83NMltsTolA6Wl12cr8hdJPvD1YCFuN2id09i2CqyYu3GtYHq31gvdqXY8uz/N7S+L/WbJ/0GiQQvTypuIXGTbsmLywLavrgRwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindboxInvite/detail.vue?vue&type=template&id=3148940c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.isLoading)?_vm._ssrNode("<div class=\"loading\" data-v-3148940c>","</div>",[_c('van-loading',{attrs:{"color":"#1989fa","vertical":""}},[_vm._v(_vm._s(_vm.$t("base.loading"))+"...")])],1):_vm._ssrNode("<div class=\"detail_box\" data-v-3148940c>","</div>",[_vm._ssrNode("<div class=\"detail_box_back\" data-v-3148940c>","</div>",[_vm._ssrNode("<div class=\"detail_box_header\" data-v-3148940c>","</div>",[_vm._ssrNode("<div data-v-3148940c><img"+(_vm._ssrAttr("src",__webpack_require__(79)))+" data-v-3148940c></div> "),_vm._ssrNode("<div class=\"detail_box_lang\" data-v-3148940c>","</div>",[_vm._ssrNode("<div id=\"showLang\" class=\"langBox\" data-v-3148940c>","</div>",[_vm._ssrNode("<span class=\"curLang\" data-v-3148940c>"+_vm._ssrEscape(_vm._s(_vm.langText))+"</span> "),_c('van-icon',{staticClass:"icon setFont",attrs:{"name":"play"}})],2),_vm._ssrNode(" <ul id=\"langList\" class=\"langList\""+(_vm._ssrStyle(null,null, { display: (_vm.langShow) ? '' : 'none' }))+" data-v-3148940c><li data-val=\"en\" data=\"English\" class=\"langItem\" data-v-3148940c>English</li> <li data-val=\"ko\" data=\"한국어\" class=\"langItem\" data-v-3148940c>한국어</li> <li data-val=\"ja\" data=\"日本語\" class=\"langItem\" data-v-3148940c>日本語</li> <li data-val=\"vi\" data=\"Tiếng Việt\" class=\"langItem\" data-v-3148940c>Tiếng Việt</li></ul>")],2)],2),_vm._ssrNode(" <div class=\"detail_box_text\" data-v-3148940c><p class=\"textPrimary0\" data-v-3148940c>"+_vm._ssrEscape(_vm._s(_vm.$t('blindboxInvite.detailWallet')))+"</p></div> <div class=\"detail_box_flex\" data-v-3148940c><div class=\"detail_box_flex_content\" data-v-3148940c><div data-v-3148940c><div data-v-3148940c><img src=\"http://cdn.bitkeep.vip/u_b_2d8ec1f0-5bed-11ec-bdbc-7722494dfa58.png\" alt data-v-3148940c></div> <div class=\"detail_box_flex_content_first\" data-v-3148940c>"+_vm._ssrEscape("\n            "+_vm._s(_vm.$t('blindboxInvite.detailWallet1'))+"\n          ")+"</div></div> <div class=\"detail_box_flex_content_right\" data-v-3148940c><div data-v-3148940c><img src=\"http://cdn.bitkeep.vip/u_b_2d96d840-5bed-11ec-bdbc-7722494dfa58.png\" alt data-v-3148940c></div> <div class=\"detail_box_flex_content_last\" data-v-3148940c>"+_vm._ssrEscape("\n            "+_vm._s(_vm.$t('blindboxInvite.detailWallet2'))+"\n          ")+"</div></div></div> <div class=\"detail_box_flex_content\" data-v-3148940c><div data-v-3148940c><div data-v-3148940c><img src=\"http://cdn.bitkeep.vip/u_b_2d97e9b0-5bed-11ec-bdbc-7722494dfa58.png\" alt data-v-3148940c></div> <div class=\"detail_box_flex_content_first\" data-v-3148940c>"+_vm._ssrEscape(_vm._s(_vm.$t('blindboxInvite.detailWallet3')))+"</div></div> <div class=\"detail_box_flex_content_right\" data-v-3148940c><div data-v-3148940c><img src=\"http://cdn.bitkeep.vip/u_b_2d8f1010-5bed-11ec-bdbc-7722494dfa58.png\" alt data-v-3148940c></div> <div class=\"detail_box_flex_font\" data-v-3148940c>"+_vm._ssrEscape(_vm._s(_vm.$t('blindboxInvite.detailWallet4')))+"</div></div></div></div> <div class=\"detail_box_address colorBackgroundWhite\" data-v-3148940c><div class=\"detail_box_address_header textPrimary0\" data-v-3148940c>"+_vm._ssrEscape("\n        "+_vm._s(_vm.$t('blindboxInvite.yourFrinedInvite'))+"\n      ")+"</div> <div class=\"detail_box_address_desc textSecond1\" data-v-3148940c>"+_vm._ssrEscape("\n                "+_vm._s(_vm.$t('blindboxInvite.friendsText'))+"\n      ")+"</div> <div class=\"detail_box_address_textarea colorBackground2\" data-v-3148940c><textarea type=\"text\""+(_vm._ssrAttr("placeholder",_vm.focus ? '' : _vm.$t( 'blindboxInvite.detailInput' )))+(_vm._ssrClass(null,{ focus: _vm.focus || !!_vm.address }))+" data-v-3148940c>"+_vm._ssrEscape(_vm._s(_vm.address))+"</textarea> <div class=\"detail_box_address_textarea_btn\" data-v-3148940c>"+_vm._ssrEscape(_vm._s(_vm.$t( 'blindboxInvite.detailBtn' )))+"</div> <div class=\"detail_box_address_textarea_link\" data-v-3148940c><a href=\"https://www.bitkeep.org/\" class=\"colorPrimary\" data-v-3148940c>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t( 'blindboxInvite.detailJust' ))+"\n          ")+"</a></div></div></div>")],2),_vm._ssrNode(" <div class=\"detail_box_wallet setMargin\" data-v-3148940c><h1 data-v-3148940c>"+_vm._ssrEscape(_vm._s(_vm.$t( 'blindboxInvite.detailWhy' )))+"</h1> <img src=\"http://cdn.bitkeep.vip/u_b_916160b0-5a59-11ec-bdbc-7722494dfa58.png\" alt data-v-3148940c> <div class=\"detail_box_wallet_title_content\" data-v-3148940c><h1 class=\"detail_box_wallet_title\" data-v-3148940c>"+_vm._ssrEscape(_vm._s(_vm.$t( 'blindboxInvite.detailContro' )))+"</h1> <ul class=\"detail_box_wallet_ul\" data-v-3148940c><li data-v-3148940c>"+_vm._ssrEscape(_vm._s(_vm.$t( 'blindboxInvite.detailUl1' )))+"</li> <li data-v-3148940c>"+_vm._ssrEscape(_vm._s(_vm.$t( 'blindboxInvite.detailUl2' )))+"</li> <li data-v-3148940c>"+_vm._ssrEscape(_vm._s(_vm.$t( 'blindboxInvite.detailUl3' )))+"</li></ul></div></div> <div class=\"detail_box_wallet setBackground\" data-v-3148940c><img src=\"http://cdn.bitkeep.vip/u_b_22575140-5bec-11ec-bdbc-7722494dfa58.png\" alt data-v-3148940c> <div class=\"detail_box_wallet_title_content setBottom\" data-v-3148940c><h1 class=\"detail_box_wallet_title\" data-v-3148940c>"+_vm._ssrEscape(_vm._s(_vm.$t( 'blindboxInvite.detailCrypto' )))+"</h1> <ul class=\"detail_box_wallet_ul\" data-v-3148940c><li data-v-3148940c>"+_vm._ssrEscape(_vm._s(_vm.$t('blindboxInvite.detailAny')))+"</li> <li data-v-3148940c>"+_vm._ssrEscape(_vm._s(_vm.$t('blindboxInvite.detailAggregate')))+"</li></ul></div></div> <div class=\"detail_box_nft\" data-v-3148940c><h1 class=\"textPrimary0\" data-v-3148940c>"+_vm._ssrEscape(_vm._s(_vm.$t('blindboxInvite.detailNFT')))+"</h1> <div class=\"detail_box_nft_desc\" data-v-3148940c>"+_vm._ssrEscape("\n        "+_vm._s(_vm.$t('blindboxInvite.detailNFTCon'))+"\n      ")+"</div> <img src=\"http://cdn.bitkeep.vip/u_b_d35394b0-5e1f-11ec-bd49-b1b354a240c8.png\" alt data-v-3148940c></div> <div class=\"detail_box_bitkeep\" data-v-3148940c><h1 bklang=\"five_1\" data-v-3148940c>"+_vm._ssrEscape(_vm._s(_vm.$t('blindboxInvite.foot1')))+"</h1> <p bklang=\"five_2\" data-v-3148940c>"+_vm._ssrEscape("\n        "+_vm._s(_vm.$t('blindboxInvite.foot2'))+"\n      ")+"</p> <ul data-v-3148940c><li data-v-3148940c><p bklang=\"five_3\" data-v-3148940c>"+_vm._ssrEscape(_vm._s(_vm.$t('blindboxInvite.foot3')))+"</p> <div class=\"num GB\" data-v-3148940c>4,000,000<span data-v-3148940c>+</span></div></li> <li data-v-3148940c><p bklang=\"five_4\" data-v-3148940c>"+_vm._ssrEscape(_vm._s(_vm.$t('blindboxInvite.foot4')))+"</p> <div class=\"num\" data-v-3148940c><span data-v-3148940c>$</span>5,000<span data-v-3148940c>+ 亿</span></div></li> <li data-v-3148940c><p data-v-3148940c>"+_vm._ssrEscape(_vm._s(_vm.$t('blindboxInvite.foot5')))+"</p> <div class=\"num\" data-v-3148940c>168<span data-v-3148940c>+</span></div></li></ul> <div class=\"people\" data-v-3148940c><img src=\"https://cdn.bitkeep.vip/u_b_e27e3060-d0b9-11eb-a1fd-1b9796c35a14.png\" alt=\"people\" data-v-3148940c></div></div> <div class=\"blindbox_logo\" data-v-3148940c><span class=\"logo\" data-v-3148940c><img"+(_vm._ssrAttr("src",__webpack_require__(79)))+" data-v-3148940c></span></div> "+((_vm.isIos)?("<div id=\"IosBtnen\" class=\"download\" data-v-3148940c><div class=\"left\" data-v-3148940c><a href=\"https://itunes.apple.com/app/bitkeep/id1395301115\" target=\"_blank\" data-v-3148940c><img src=\"https://cdn.bitkeep.vip/u_b_333f4110-d0ba-11eb-a1fd-1b9796c35a14.png\" alt=\"btn1\" data-v-3148940c></a></div> <div class=\"right\" data-v-3148940c><a href=\"https://www.bitkeep.com/testFlight.html\" data-v-3148940c><img src=\"https://cdn.bitkeep.vip/u_b_33418b00-d0ba-11eb-a1fd-1b9796c35a14.png\" alt=\"btn2\" data-v-3148940c></a></div></div>"):("<div id=\"AndroidBtnen\" class=\"download\" data-v-3148940c><div class=\"left\" data-v-3148940c><a href=\"https://www.bitkeep.com/\" target=\"_blank\" data-v-3148940c><img src=\"https://cdn.bitkeep.vip/u_b_33740cb0-d0ba-11eb-a1fd-1b9796c35a14.png\" alt=\"btn1\" data-v-3148940c></a></div> <div class=\"right\" data-v-3148940c><a href=\"https://www.bitkeep.com/\" class=\"btnDwonload\" data-v-3148940c><img src=\"https://cdn.bitkeep.vip/u_b_337433c0-d0ba-11eb-a1fd-1b9796c35a14.png\" alt=\"btn2\" data-v-3148940c></a></div></div>")))],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/blindboxInvite/detail.vue?vue&type=template&id=3148940c&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(64);

// EXTERNAL MODULE: ./tools/common.js
var common = __webpack_require__(16);

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
//
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
  name: "Detail",

  data() {
    return {
      isLoading: true,
      address: '',
      focus: false,
      langShow: false,
      langText: 'English'
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(["local"]),

    locale() {
      return this.local.locale;
    },

    isIos() {
      return this.local.UA.ios;
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.isLoading = false;
      window.addEventListener('load', () => {
        let lang = {
          en: 'English',
          ja: '日本語',
          ko: '한국어',
          vi: 'Tiếng Việt'
        };
        this.langText = lang[this.locale];
        this.$store.commit('CHANGE_LANG', this.locale);
      });
    });
  },

  methods: {
    handlerFocus() {
      this.focus = true;
    },

    handlerBlur() {
      this.focus = false;
    },

    submitAddress: Object(common["b" /* debounce */])(async function () {
      if (this.address == '') return this.$toast(this.$t('blindboxInvite.emptyToast'));
      const {
        data,
        status
      } = await client["a" /* USER_API */].certifyFriendship({
        address: this.address,
        token: this.$route.query.token
      });

      if (status == 1) {
        this.isLoading = false;
        return this.$toast(data);
      }

      this.address = ''; // 0 --认证不成功
      // 1 --成功
      // 2 --地址已存在

      if (data == 0) {
        this.$toast(this.$t('blindboxInvite.toast0'));
      } else if (data == 1) {
        this.$router.push('/activity/blindboxInvite/download');
      } else {
        this.$toast(this.$t('blindboxInvite.toast2'));
      } // switch (data) {
      //   case 0:
      //     return this.$toast('认证不成功');
      //   case 1:
      //     this.$toast('成功');
      //     this.$router.push('/activity/blindboxInvite/download')
      //   case 2:
      //     return this.$toast('地址已存在');
      // }

    }),

    changeLang() {
      this.langShow = true; // 点击切换语言

      let langItem = document.getElementsByClassName('langItem');

      for (let i = 0; i < langItem.length; i++) {
        let curItem = langItem[i];
        curItem.addEventListener('click', () => {
          let lang = curItem.getAttribute('data-val');
          this.langShow = false;
          this.langText = curItem.getAttribute('data'); // 获取对应语言包数据

          this.$store.commit('CHANGE_LANG', lang);
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/blindboxInvite/detail.vue?vue&type=script&lang=js&
 /* harmony default export */ var blindboxInvite_detailvue_type_script_lang_js_ = (detailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/blindboxInvite/detail.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(209)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blindboxInvite_detailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3148940c",
  "53d94acd"
  
)

/* harmony default export */ var detail = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo@2.ca1f304.png";

/***/ })

};;
//# sourceMappingURL=detail.js.map