exports.ids = [42];
exports.modules = {

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(231);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("491e3b00", content, true, context)
};

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_drawluckly_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(166);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_drawluckly_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_drawluckly_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_drawluckly_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_drawluckly_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0 {\n  color: #080D21;\n}\n.theme-light .textSecond1 {\n  color: #4B5373;\n}\n.theme-light .textSecond2 {\n  color: #7F828F;\n}\n.theme-light .textSecond3 {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine {\n  background-color: #F4F5FA;\n}\n.theme-light .colorBackground0 {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1 {\n  background-color: #fff;\n}\n.theme-light .colorBackground2 {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3 {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary {\n  color: #495BFF;\n}\n.theme-light .colorSecond01 {\n  color: #1CBDB5;\n}\n.theme-light .backgroundSecond01 {\n  background-color: #1CBDB5;\n}\n.theme-light .colorSecond02 {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03 {\n  color: #26BC80;\n}\n.theme-light .colorSecond04 {\n  color: #FF8146;\n}\n.theme-light .colorSecond05 {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06 {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07 {\n  color: #F04E98;\n}\n.theme-light .colorBlack {\n  color: #000;\n}\n.theme-light .colorwhite {\n  color: #fff;\n}\n.theme-light .colorSecond10 {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11 {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12 {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13 {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14 {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15 {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0 {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1 {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2 {\n  color: #7F828F;\n}\n.theme-dark .textSecond3 {\n  color: #6D707D;\n}\n.theme-dark .colorDisable {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine {\n  background-color: #1F212E;\n}\n.theme-dark .colorBackground0 {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1 {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2 {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3 {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01 {\n  color: #1CBDB5;\n}\n.theme-dark .backgroundSecond01 {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorSecond02 {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03 {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04 {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05 {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06 {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07 {\n  color: #F04E98;\n}\n.theme-dark .colorBlack {\n  color: #000;\n}\n.theme-dark .colorwhite {\n  color: #fff;\n}\n.theme-dark .colorSecond10 {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11 {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12 {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13 {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14 {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15 {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .drawluckly-CouponsNums-inp {\n  border: 0.03rem solid #F0F0F0;\n}\n.theme-light .drawluckly-CouponsNums-inp .drawluckly-CouponsNums-all {\n  border-left: 0.03rem solid #F0F0F0;\n}\n.theme-light .drawluckly-btnbox {\n  border-top: 0.03rem solid #F0F0F0;\n}\n.theme-dark .drawluckly-CouponsNums-inp {\n  border: 0.03rem solid #1F212E;\n}\n.theme-dark .drawluckly-CouponsNums-inp .van-cell {\n  background-color: #171A26;\n}\n.theme-dark .drawluckly-CouponsNums-inp .van-cell .van-field__control {\n  color: #f0f0f0;\n}\n.theme-dark .drawluckly-CouponsNums-inp .drawluckly-CouponsNums-all {\n  border-left: 0.03rem solid #1F212E;\n}\n.theme-dark .drawluckly-btnbox {\n  border-top: 0.03rem solid #1F212E;\n}\np {\n  padding: 0;\n  margin: 0;\n}\n.drawluckly {\n  min-height: 100vh;\n}\n.drawluckly-topbanner {\n  width: 100%;\n  height: 3.73rem;\n  background-image: url(https://cdn.bitkeep.vip/u_b_f8a2c6a0-72bf-11ec-9c27-5bf3ec58d767.png);\n  background-size: 100%;\n  position: relative;\n}\n.drawluckly-topbanner .drawluckly-topbanner-time {\n  position: absolute;\n  top: 0.27rem;\n  left: 0.43rem;\n  font-size: 0.32rem;\n}\n.drawluckly-topbanner .drawluckly-topbanner-text {\n  display: inline-block;\n  width: 3.47rem;\n  position: absolute;\n  bottom: 0.27rem;\n  left: 0.43rem;\n  color: #080D21;\n  font-size: 0.75rem;\n}\n.drawluckly-Coupons {\n  display: flex;\n  padding: 1.07rem 0 0.8rem 0.43rem;\n}\n.drawluckly-Coupons .drawluckly-Coupons-item p:nth-child(1) {\n  font-size: 0.37rem;\n  line-height: 0.37rem;\n}\n.drawluckly-Coupons .drawluckly-Coupons-item p:nth-child(2) {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  padding-top: 0.13rem;\n}\n.drawluckly-CouponsNums {\n  padding: 0 0.43rem 0.8rem 0.43rem;\n}\n.drawluckly-CouponsNums .drawluckly-CouponsNums-title {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.37rem;\n  line-height: 0.37rem;\n}\n.drawluckly-CouponsNums-inp {\n  margin-top: 0.27rem;\n  width: 100%;\n  height: 1.33rem;\n  border-radius: 0.21rem;\n  display: flex;\n}\n.drawluckly-CouponsNums-inp .drawluckly-CouponsNums-all {\n  width: 1.81rem;\n  margin: 0.43rem 0 0.43rem 0.43rem;\n  text-align: center;\n  font-size: 0.37rem;\n  line-height: 0.48rem;\n}\n.drawluckly-CouponsNums-inp .van-cell {\n  margin: 0.43rem 0 0.43rem 0.4rem;\n  padding: 0;\n}\n.drawluckly-CouponsNums-inp .van-cell::after {\n  border-bottom: none;\n}\n.drawluckly-Award {\n  padding: 0 0.4rem;\n  font-size: 0.37rem;\n  line-height: 0.37rem;\n}\n.drawluckly-Award .drawluckly-Award-user {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 0.13rem;\n}\n.drawluckly-rule {\n  height: 5.52rem;\n  margin: 0.8rem 0.43rem 0.53rem 0.43rem;\n  border-radius: 0.21rem;\n  padding: 0.4rem;\n}\n.drawluckly-rule .drawluckly-rule-title {\n  font-size: 0.37rem;\n  font-weight: 600;\n}\n.drawluckly-rule .drawluckly-rule-content {\n  margin-top: 0.4rem;\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n}\n.drawluckly-rule .drawluckly-rule-bottom {\n  margin-top: 0.4rem;\n  font-size: 0.32rem;\n}\n.drawluckly-btnbox {\n  height: 2.53rem;\n  border-top: 0.03rem solid #F4F5FA;\n  margin-top: 0.53rem;\n  display: flex;\n  justify-content: center;\n}\n.drawluckly-btnbox .drawluckly-btn {\n  width: 8.08rem;\n  height: 1.33rem;\n  opacity: 0.3;\n  border-radius: 0.27rem;\n  color: #ffffff;\n  font-size: 0.43rem;\n  margin-top: 0.27rem;\n  border: none;\n}\n.drawluckly-btnbox .ondrawluckly-btn {\n  width: 8.08rem;\n  height: 1.33rem;\n  background: #495BFF;\n  border-radius: 0.27rem;\n  color: #ffffff;\n  font-size: 0.43rem;\n  margin-top: 0.27rem;\n  border: none;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/noviceBenefits/drawluckly.vue?vue&type=template&id=4272099b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"drawluckly colorBackground1"},[_vm._ssrNode("<div class=\"drawluckly-topbanner\"><span class=\"drawluckly-topbanner-time colorBlack\">2022.10.20</span> <span class=\"drawluckly-topbanner-text colorBlack\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.$t('noviceBenefits.Winaraffle'))+" "+_vm._s(_vm.RewardDetail.thisRewardPool || 0)+" BKB\n      ")+"</span></div> <div class=\"drawluckly-Coupons\"><div class=\"drawluckly-Coupons-item\"><p class=\"textSecond2\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.rafflepapers')))+"</p> <p class=\"textPrimary0\">"+_vm._ssrEscape(_vm._s(_vm.RewardDetail.allPapersIn || 0))+"</p></div> <div class=\"drawluckly-Coupons-item\" style=\"marginLeft:50px;\"><p class=\"textSecond2\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.merafflepapers')))+"</p> <p class=\"textPrimary0\">"+_vm._ssrEscape(_vm._s(_vm.RewardDetail.mePapersIn || 0))+"</p></div></div> "),_vm._ssrNode("<div class=\"drawluckly-CouponsNums\">","</div>",[_vm._ssrNode("<p class=\"drawluckly-CouponsNums-title\"><span class=\"textPrimary0\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.raffletickets')))+"</span> <span class=\"textPrimary0\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.available'))+": ")+"<span class=\"colorPrimary\">"+_vm._ssrEscape(_vm._s(_vm.RewardDetail.mePapersKeep || 0))+"</span></span></p> "),_vm._ssrNode("<div class=\"drawluckly-CouponsNums-inp\">","</div>",[_c('van-field',{attrs:{"type":"number","placeholder":_vm.$t('noviceBenefits.Pleaseenter')},model:{value:(_vm.CouponsNums),callback:function ($$v) {_vm.CouponsNums=$$v},expression:"CouponsNums"}}),_vm._ssrNode(" <p class=\"drawluckly-CouponsNums-all colorPrimary \">All in</p>")],2)],2),_vm._ssrNode(" "+((!!_vm.RewardDetail.whoGotReward)?("<div class=\"drawluckly-Award\"><p class=\"textPrimary0\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.usersyesterday')))+"</p> <div class=\"drawluckly-Award-user\"><p class=\"textPrimary0\">"+_vm._ssrEscape(_vm._s(_vm.RewardDetail.whoGotReward))+"</p> <p class=\"colorPrimary\">"+_vm._ssrEscape("+"+_vm._s(_vm.RewardDetail.whoGotRewardPool)+" BKB")+"</p></div></div>"):"<!---->")+" <div class=\"drawluckly-rule colorBackground3\"><p class=\"drawluckly-rule-title textPrimary0\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.Activityrules')))+"</p> <ul class=\"drawluckly-rule-content\"><li class=\"textSecond2\">"+_vm._ssrEscape("1."+_vm._s(_vm.$t('noviceBenefits.Dailyreward')))+"</li> <li class=\"textSecond2\">"+_vm._ssrEscape("2."+_vm._s(_vm.$t('noviceBenefits.morelottery')))+"</li> <li class=\"textSecond2\">"+_vm._ssrEscape("3."+_vm._s(_vm.$t('noviceBenefits.luckydraw')))+"</li></ul> <div class=\"drawluckly-rule-bottom textSecond3\">"+_vm._ssrEscape("*"+_vm._s(_vm.$t('noviceBenefits.notes'))+" ")+"</div></div> "),_vm._ssrNode("<div class=\"drawluckly-btnbox\">","</div>",[_c('van-button',{class:Number(_vm.CouponsNums) > 0 ? 'ondrawluckly-btn colorBackgroundPrimary' : 'drawluckly-btn colorBackgroundPrimary',on:{"click":function($event){return _vm.pushPapersIn()}}},[_c('span',{staticClass:"colorwhite"},[_vm._v(_vm._s(_vm.$t('noviceBenefits.Immediateinput'))+" ")])])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/noviceBenefits/drawluckly.vue?vue&type=template&id=4272099b&

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(66);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/noviceBenefits/drawluckly.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var drawlucklyvue_type_script_lang_js_ = ({
  name: "Novicebenefits",

  data() {
    return {
      isLoading: true,
      CouponsNums: '',
      RewardDetail: {
        allPapersIn: 0,
        mePapersIn: 0,
        mePapersKeep: 0,
        thisRewardPool: 0,
        whoGotReward: "",
        whoGotRewardPool: 0
      }
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(["local"]),

    locale() {
      return this.local.locale;
    },

    isBitKeep() {
      return this.local.UA.isBitKeep;
    }

  },
  components: {},

  mounted() {
    this.getInfo();
    this.setIcon();
    this.getRewardDetail();
  },

  methods: {
    async pushPapersIn() {
      if (Number(this.CouponsNums) <= 0) {
        return;
      }

      const {
        data,
        status
      } = await client["a" /* USER_API */].pushPapersIn();

      if (data === true) {
        this.getRewardDetail();
        this.CouponsNums = 0;
      } else {
        this.$toast('error');
      }
    },

    allin() {
      this.CouponsNums = this.RewardDetail.mePapersKeep;
    },

    async getRewardDetail() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].getRewardDetail();

      if (data) {
        this.RewardDetail = data;
      }
    },

    // 获取信息
    async getInfo() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].miningInfo();

      if (status == 1) {
        this.isLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("CbkbExchange.know"),
          confirmButtonColor: "$theme-light-colorPrimary"
        });
      }

      this.isLoading = false;
    },

    setIcon() {
      // window.addEventListener("load", () => {
      this.isBitKeep && BitKeepInvoke.onLoadReady(() => {
        BitKeepInvoke.setTitle(this.$t('noviceBenefits.Dailyluckydraw')); //设置主题

        this.$nextTick(() => {
          BitKeepInvoke.appMode((err, res) => {
            let body = document.getElementsByTagName("body")[0];

            if (res == 1) {
              this.theme = 1;
              this.question = 'https://cdn.bitkeep.vip/u_b_47485390-4f90-11ec-ace3-97579b99c357.png';
              body.setAttribute("class", "theme-dark");
              setTimeout(() => {
                BitKeepInvoke.setIconAction("https://cdn.bitkeep.vip/u_b_09035ca0-4dd9-11ec-a555-07d5354e6fab.png", () => {
                  this.$router.push("/activity/noviceBenefits/lotteryresults");
                });
              }, 500);
            } else {
              this.theme = 0;
              this.question = 'https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png';
              body.setAttribute("class", "theme-light");
              setTimeout(() => {
                BitKeepInvoke.setIconAction("https://cdn.bitkeep.vip/u_b_2bb4fa20-3b86-11ec-8e63-1db435df936c.png", () => {
                  this.$router.push("/activity/noviceBenefits/lotteryresults");
                });
              }, 500);
            }
          });
        });
      }); // });
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/noviceBenefits/drawluckly.vue?vue&type=script&lang=js&
 /* harmony default export */ var noviceBenefits_drawlucklyvue_type_script_lang_js_ = (drawlucklyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/activity/noviceBenefits/drawluckly.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(230)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  noviceBenefits_drawlucklyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "712849dc"
  
)

/* harmony default export */ var drawluckly = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_API; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);



 // const requestlog = debug('bit-activity-request')
// const responselog = debug('bit-activity-response')
// const isProduction = process.env.NODE_ENV == "production";
// const HOST_URL = process.env.HOST_URL || process.env.baseURL

const requestlog =  false ? undefined : Object(debug__WEBPACK_IMPORTED_MODULE_3__["debug"])('bit-activity-request');
const responselog =  false ? undefined : Object(debug__WEBPACK_IMPORTED_MODULE_3__["debug"])('bit-activity-response');
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
  welfareSignIn: (data, headers = {}) => host_user_instance.post('welfare/signIn', data),
  // 签到 
  getRewardDetail: (data, headers = {}) => host_user_instance.post('welfare/getRewardDetail', data),
  //每日抽奖详情
  getSignInDetailByUser: (data, headers = {}) => host_user_instance.post('welfare/getSignInDetailByUser', data),
  // 获取某人的签到详情
  getRewardResult: (data, headers = {}) => host_user_instance.post('welfare/getRewardResult', data),
  // 获取抽奖结果
  getRewardDetail: (data, headers = {}) => host_user_instance.post('welfare/getRewardDetail', data),
  // 每日抽奖详情页
  pushPapersIn: (data, headers = {}) => host_user_instance.post('welfare/pushPapersIn', data),
  // 立即投入
  getJoinTeleJob: (data, headers = {}) => host_user_instance.post('welfare/getJoinTeleJob', data),
  // 加入电报 
  getFirstSwapJob: (data, headers = {}) => host_user_instance.post('welfare/getFirstSwapJob', data),
  // swap首次交易
  getFirst50UJob: (data, headers = {}) => host_user_instance.post('welfare/getFirst50UJob', data),
  // 领取50u
  newUserRewardJobs: (data, headers = {}) => host_user_instance.post('welfare/newUserRewardJobs', data) // 新手任务

};

/***/ })

};;
//# sourceMappingURL=drawluckly.js.map