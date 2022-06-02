exports.ids = [56,59];
exports.modules = {

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transfer16", function() { return transfer16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wallet", function() { return wallet; });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);
// import detectEthereumProvider from '@metamask/detect-provider';
 // import { transfer16 } from '../common/common'

function transfer16(val = '1') {
  val = isNaN(Number(val)) ? 1 : Number(val);
  return "0x" + val.toString(16);
}

class Wallet extends eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a {
  constructor() {
    super();
    this._accounts = [];
    this._chainId = 0;
    this._walletPlatform = 'bitkeep';
  } // 是否安装 bitkeep 钱包


  isInstall() {
    const isInstalled = !!window.ethereum && !!window.isBitKeep;
    !isInstalled && console.warn("no installed bitkeep");
    return isInstalled;
  } // 是否连接中


  isConnected() {
    return window.ethereum && window.ethereum.isConnected();
  } // 连接钱包


  async connect() {
    if (this.isInstall()) {
      const Accounts = await ethereum.request({
        method: 'eth_requestAccounts'
      });
      this.initEvent();
      return Accounts[0];
    } else {
      return {
        status: 50001,
        message: 'please download bitkeep chrome '
      };
    }
  } // 切换地址


  selectedAddress() {
    return window.ethereum && ethereum.selectedAddress;
  } // 获取钱包信息


  getWalletInfo() {
    return {
      address: window.ethereum && ethereum.selectedAddress,
      chainName: window.ethereum && window.ethereum.chainName || 'eth',
      chainId: window.ethereum && window.ethereum.chainId || '1',
      walletId: '',
      walletPlatform: this.getWalletPlatform()
    };
  } // 获取 chain ID


  async getChainId() {
    return window.ethereum && window.ethereum.request({
      method: 'eth_chainId'
    });
  } // 切换 chain ID


  async switchChainId(chainId, address) {
    if (!address) {
      const [nAddress] = await this.getAccounts();
      address = nAddress;
    }

    return window.ethereum && window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{
        chainId: transfer16(chainId)
      }, address]
    });
  } // 获取钱包标识


  getWalletPlatform() {
    return this._walletPlatform;
  } // 获取钱包账号


  async getAccounts() {
    return window.ethereum ? window.ethereum.request({
      method: "eth_accounts"
    }) : [];
  } // 登录签名


  async LoginSign(dataToSign, address) {
    console.log(dataToSign, address, 'dataToSign, addressdataToSign, addressdataToSign, address');
    return await window.ethereum.request({
      method: "personal_sign",
      params: [dataToSign, address],
      from: address
    }); // return await window.ethereum.signMessage({ data: dataToSign })
  }

  initEvent() {
    ethereum.removeAllListeners && ethereum.removeAllListeners(); // ethereum.removeListener && ethereum.removeListener('chainChanged')

    ethereum.on('accountsChanged', async (...arg) => {
      this.emit('accountsChanged', ...arg);
    });
    ethereum.on('chainChanged', async (...arg) => {
      this.emit('chainChanged', ...arg);
    });
  }

}

const wallet = new Wallet();

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_5a04d7b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(202);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_5a04d7b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_5a04d7b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_5a04d7b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_5a04d7b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/staking/index.vue?vue&type=template&id=5a04d7b6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"staking-wrap colorBackground0"},[(_vm.isLoading)?_vm._ssrNode("<div class=\"loading\" data-v-5a04d7b6>","</div>",[_c('van-loading',{attrs:{"color":"#7524f9","vertical":""}},[_vm._v(_vm._s(_vm.$t("base.loading"))+"...")])],1):_c('van-pull-refresh',{attrs:{"success-text":_vm.$t('mining.success'),"loading-text":_vm.$t('mining.loading'),"loosing-text":_vm.$t('mining.loading')},on:{"refresh":_vm.getInfo},model:{value:(_vm.refreshLoading),callback:function ($$v) {_vm.refreshLoading=$$v},expression:"refreshLoading"}},[_c('div',{staticClass:"staking-wrap colorBackground0"},[_c('div',{staticClass:"staking-wrap-banner"},[_c('img',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_a3377020-a114-11ec-b5cd-6f94e6599e38.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"staking-wrap-imgText"},[_c('div',{staticClass:"imgTextTitle"},[_vm._v(_vm._s(_vm.$t('staking.stakingImg')))])])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box"},[_c('div',{staticClass:"staking-wrap-box-Introduce colorBackground1"},[_c('div',{staticClass:"staking-wrap-box-Introduce-title"},[_c('img',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_9976a830-647e-11ec-8dc3-6956fa76f0cf.png","alt":""}}),_vm._v(" "),_c('span',{staticClass:"textPrimary0"},[_vm._v(_vm._s(_vm.$t('staking.Introduce')))])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-line colorLine"}),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-Introduce-content textSecond2"},[_vm._v("\n            "+_vm._s(_vm.$t('staking.content'))+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"viewAll colorPrimary",on:{"click":_vm.viewAll}},[_vm._v("\n            "+_vm._s(!this.flag ? _vm.$t("mining.viewAll") : _vm.$t("mining.pickUp"))+"\n          ")])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-Data colorBackground1"},[_c('div',{staticClass:"staking-wrap-box-Data-title"},[_c('img',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_554d2280-6481-11ec-8561-09279f51a681.png","alt":""}}),_vm._v(" "),_c('span',{staticClass:"textPrimary0"},[_vm._v(_vm._s(_vm.$t('staking.Data')))])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-line colorLine"}),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-Data-content textSecond2"},[_c('div',{staticClass:"staking-wrap-box-Data-flex"},[_c('div',{staticClass:"staking-wrap-box-Data-left"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.StakedBKB')))]),_vm._v(" "),_c('div',{staticClass:"textPrimary0 setFontFamily"},[_vm._v("\n                  "+_vm._s(_vm.milliFormat(
                      _vm.listInfo.list.length > 0
                        ? _vm.listInfo.list[0].allStakeAmount.toFixed(0)
                        : 0
                    ))+"BKB\n                ")])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-Data-right"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.totalSupply')))]),_vm._v(" "),_c('div',{staticClass:"textPrimary0 setFontFamily"},[_vm._v("\n                  "+_vm._s(_vm.milliFormat(
                      _vm.listInfo.list.length > 0
                        ? _vm.listInfo.list[0].bkbTotalSuperAmount
                        : 0
                    ))+"\n                  BKB\n                ")])])])])]),_vm._v(" "),_vm._l((_vm.listInfo.list),function(item,index){return _c('div',{key:index,staticClass:"staking-wrap-box-pool colorBackground1"},[_c('div',{staticClass:"staking-wrap-box-pool-title"},[_c('img',{staticClass:"bigImg",attrs:{"src":"https://cdn.bitkeep.vip/u_b_27f9ea80-a03a-11ec-ad8b-9ff4f858e021.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-title-flex"},[_c('div',{staticClass:"staking-wrap-box-pool-title-left"},[_c('div',{staticClass:"textPrimary0"},[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.stakingImg')))])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-title-right"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.EndsIn')))]),_vm._v(" "),_c('div',{staticClass:"textPrimary0 setFontFamily"},[_vm._v(_vm._s(_vm.ends))])])])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-line colorLine"}),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-content textSecond2"},[_c('div',{staticClass:"staking-wrap-box-pool-flex"},[_c('div',{staticClass:"staking-wrap-box-pool-left"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.APY')))]),_vm._v(" "),_c('div',{staticClass:"colorSecond01 setFontFamily"},[_vm._v(_vm._s(_vm.apy))])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-right"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.YourStakeAmount')))]),_vm._v(" "),_c('div',{staticClass:"textPrimary0 setFontFamily"},[_vm._v("\n                  "+_vm._s(item.myAllStaking.toFixed(2))+" BKB\n                ")])])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-duration textSecond2"},[_vm._v("\n              "+_vm._s(_vm.$t('staking.Duration'))+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-duration-box"},_vm._l((item.config),function(sitem,i){return _c('span',{key:i,staticClass:"staking-wrap-box-pool-duration-smallBox setFontFamily",class:[
                  _vm.isActiveSaleOut(sitem) ? 'textSecond3' : 'textSecond1',
                  i == _vm.setBorderColor ? 'setBorderColor' : '' ],on:{"click":function($event){return _vm.handlePoolTimeTab(sitem, i)}}},[_vm._v(_vm._s(sitem.time))])}),0),_vm._v(" "),_c('div',{staticClass:"\n                staking-wrap-box-pool-stake\n              ",class:_vm.btn == ("" + (_vm.$t('staking.StakeNow')))
                  ? 'staking-wrap-box-pool-stake-now'
                  : 'textSecond3 colorBackground2',on:{"click":_vm.stakeNow}},[_vm._v("\n              "+_vm._s(_vm.btn)+"\n            ")])])])}),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool colorBackground1"},[_c('div',{staticClass:"staking-wrap-box-pool-title"},[_c('img',{staticClass:"bigImg",attrs:{"src":"https://cdn.bitkeep.vip/u_b_27f9ea80-a03a-11ec-ad8b-9ff4f858e021.png","alt":""}}),_vm._v(" "),_c('img',{staticClass:"smallImg",attrs:{"src":"https://cdn.bitkeep.vip/u_b_090033d0-5104-11ec-be10-ddc2856c6ac6.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-title-flex"},[_c('div',{staticClass:"staking-wrap-box-pool-title-left"},[_c('div',{staticClass:"textPrimary0"},[_vm._v(_vm._s(_vm.$t('staking.EthereumChainPool')))]),_vm._v(" "),_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.stakingImg')))])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-title-right"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.EndsIn')))]),_vm._v(" "),_c('div',{staticClass:"textPrimary0 setFontFamily"},[_vm._v("--")])])])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-line colorLine"}),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-content textSecond2"},[_c('div',{staticClass:"staking-wrap-box-pool-flex"},[_c('div',{staticClass:"staking-wrap-box-pool-left"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.APY')))]),_vm._v(" "),_c('div',{staticClass:"colorSecond01 setFontFamily"},[_vm._v("15.48%")])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-right"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.YourStakeAmount')))]),_vm._v(" "),_c('div',{staticClass:"textPrimary0 setFontFamily"},[_vm._v("0 BKB")])])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-duration textSecond2"},[_vm._v("\n              "+_vm._s(_vm.$t('staking.Duration'))+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-duration-box"},[_c('span',{staticClass:"\n                  staking-wrap-box-pool-duration-smallBox\n                  textSecond1\n                  setBorderColor\n                "},[_vm._v("7")])]),_vm._v(" "),_c('div',{staticClass:"\n                staking-wrap-box-pool-stake textSecond3 colorBackground2\n              "},[_vm._v("\n              "+_vm._s(_vm.$t('staking.ComingSoon'))+"\n            ")])])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool colorBackground1"},[_c('div',{staticClass:"staking-wrap-box-pool-title"},[_c('img',{staticClass:"bigImg",attrs:{"src":"https://cdn.bitkeep.vip/u_b_27f9ea80-a03a-11ec-ad8b-9ff4f858e021.png","alt":""}}),_vm._v(" "),_c('img',{staticClass:"smallImg",attrs:{"src":"https://cdn.bitkeep.vip/u_b_bc5504d0-567a-11ec-a2f6-c30da61fc62b.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-title-flex"},[_c('div',{staticClass:"staking-wrap-box-pool-title-left"},[_c('div',{staticClass:"textPrimary0"},[_vm._v(_vm._s(_vm.$t('staking.BSCChainPool')))]),_vm._v(" "),_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.stakingImg')))])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-title-right"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.EndsIn')))]),_vm._v(" "),_c('div',{staticClass:"textPrimary0 setFontFamily"},[_vm._v("--")])])])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-line colorLine"}),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-content textSecond2"},[_c('div',{staticClass:"staking-wrap-box-pool-flex"},[_c('div',{staticClass:"staking-wrap-box-pool-left"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.APY')))]),_vm._v(" "),_c('div',{staticClass:"colorSecond01 setFontFamily"},[_vm._v("17.85%")])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-right"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.YourStakeAmount')))]),_vm._v(" "),_c('div',{staticClass:"textPrimary0 setFontFamily"},[_vm._v("0 BKB")])])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-duration textSecond2"},[_vm._v("\n              "+_vm._s(_vm.$t('staking.Duration'))+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-duration-box"},[_c('span',{staticClass:"\n                  staking-wrap-box-pool-duration-smallBox\n                  textSecond1\n                  setBorderColor\n                "},[_vm._v("7")])]),_vm._v(" "),_c('div',{staticClass:"\n                staking-wrap-box-pool-stake textSecond3 colorBackground2\n              "},[_vm._v("\n              "+_vm._s(_vm.$t('staking.ComingSoon'))+"\n            ")])])])],2)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/staking/index.vue?vue&type=template&id=5a04d7b6&scoped=true&

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(86);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(81);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./pages/activity/staking/wallet.js
var wallet = __webpack_require__(103);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/staking/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var stakingvue_type_script_lang_js_ = ({
  name: "staking",

  data() {
    return {
      isLoading: true,
      refreshLoading: false,
      flag: false,
      theme: 0,
      setBorderColor: 0,
      apy: "20%",
      yourAmount: "0",
      ends: "--",
      btn: "Stake now",
      address: '',
      listInfo: {
        list: [{
          allStakeAmount: 0,
          bkbTotalSuperAmount: 0,
          config: []
        }]
      },
      question: "https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png"
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

  mounted() {
    this.setIcon();
    if (!this.isBitKeep) this.getInfo();
  },

  methods: {
    async getInfo() {
      if (!this.isBitKeep) this.address = await wallet["wallet"].connect();
      const {
        data,
        status
      } = await client["a" /* USER_API */].poolList({
        userid: this.address
      });

      if (status == 1) {
        this.isLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("staking.know"),
          confirmButtonColor: "$theme-light-colorPrimary"
        });
      }

      this.isLoading = false;
      this.listInfo = data;
      this.listInfo.list = data.list;
      let prames = data.list && data.list[0].config[0];
      this.refreshLoading = false;
      this.handlePoolTimeTab(prames, 0);
    },

    isActiveSaleOut(sitem) {
      return sitem.allStake >= sitem.limit || external_moment_default()(sitem.lastStakeTime).isBefore(external_moment_default()(this.listInfo.list[0].serverTime));
    },

    stakeNow() {
      if (this.btn == this.$t('staking.SoldOut')) return;
      this.$router.push("/activity/staking/addPool");
    },

    handlePoolTimeTab(item, index) {
      this.setBorderColor = index;
      this.apy = (item.apy * 100).toFixed(2) + "%"; // this.yourAmount = this.milliFormat(item.limit);

      this.ends = external_moment_default()(item.lastStakeTime).format("YYYY-MM-DD HH:mm");
      this.btn = !this.isActiveSaleOut(item) ? this.$t('staking.StakeNow') : this.$t('staking.SoldOut');
    },

    setIcon() {
      this.isBitKeep && BitKeepInvoke.onLoadReady(() => {
        BitKeepInvoke.setTitle(this.$t("staking.stakingTitle"));
        BitKeepInvoke.getAddress(async (err, data) => {
          if (err) {
            return this.$toast(err);
          }

          this.addresses = data;
          this.address = this.addresses["eth"] || "--";
          this.getInfo();
        }); //设置主题

        this.$nextTick(() => {
          BitKeepInvoke.appMode((err, res) => {
            let body = document.getElementsByTagName("body")[0];

            if (res == 1) {
              this.theme = 1;
              this.question = "https://cdn.bitkeep.vip/u_b_47485390-4f90-11ec-ace3-97579b99c357.png";
              body.setAttribute("class", "theme-dark");
              setTimeout(() => {
                BitKeepInvoke.setIconAction("https://cdn.bitkeep.vip/u_b_09035ca0-4dd9-11ec-a555-07d5354e6fab.png", () => {
                  this.$router.push("/activity/staking/myPool");
                });
              }, 500);
            } else {
              this.theme = 0;
              this.question = "https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png";
              body.setAttribute("class", "theme-light");
              setTimeout(() => {
                BitKeepInvoke.setIconAction("https://cdn.bitkeep.vip/u_b_2bb4fa20-3b86-11ec-8e63-1db435df936c.png", () => {
                  this.$router.push("/activity/staking/myPool");
                });
              }, 500);
            }
          });
        });
      });
    },

    viewAll() {
      this.flag = !this.flag;
      let dom = document.getElementsByClassName("staking-wrap-box-Introduce-content")[0];

      if (this.flag) {
        dom.setAttribute("style", "-webkit-line-clamp:20");
      } else {
        dom.setAttribute("style", "-webkit-line-clamp:3");
      }
    },

    milliFormat(num) {
      return num && num.toString().replace(/^\d+/g, m => m.replace(/(?=(?!^)(\d{3})+$)/g, ","));
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/staking/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var activity_stakingvue_type_script_lang_js_ = (stakingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/staking/index.vue



function injectStyles (context) {
  
  var style1 = __webpack_require__(254)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  activity_stakingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5a04d7b6",
  "2c014985"
  
)

/* harmony default export */ var staking = __webpack_exports__["default"] = (component.exports);

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
  //质押bkb
  // 质押池列表
  poolList: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/poolList', data),
  // 我的质押池列表
  myPool: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/myPool', data),
  // 历史质押池列表
  stakeHistory: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/stakeHistory', data),
  // 取消质押
  receiveStakingReward: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/receiveStakingReward', data),
  //确认质押
  staking: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/staking', data),
  //获取token
  handleGetToken: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/getToken', data),
  //trading 交易大赛
  tradingGetList: (data, headers = {}) => host_user_instance.post('swap/tradeCompetition/getList', data),
  //待领取
  tradingWaitClaim: (data, headers = {}) => host_user_instance.post('swap/tradeCompetition/waitClaim', data),
  //领取
  tradingClaim: (data, headers = {}) => host_user_instance.post('swap/tradeCompetition/claim', data),
  //历史汇总
  tradingSummary: (data, headers = {}) => host_user_instance.post('swap/tradeCompetition/summary', data),
  //历史list
  tradingHistory: (data, headers = {}) => host_user_instance.post('swap/tradeCompetition/history', data),
  // 新手福利
  welfareSignIn: (data, headers = {}) => host_user_instance.post('user/welfare/signIn', data),
  // 签到
  getRewardDetail: (data, headers = {}) => host_user_instance.post('user/welfare/getRewardDetail', data),
  //每日抽奖详情
  getSignInDetailByUser: (data, headers = {}) => host_user_instance.post('user/welfare/getSignInDetailByUser', data),
  // 获取某人的签到详情
  getRewardResult: (data, headers = {}) => host_user_instance.post('user/welfare/getRewardResult', data),
  // 获取抽奖结果
  // getRewardDetail: (data,headers={}) => host_user_instance.post('user/welfare/getRewardDetail',data), // 每日抽奖详情页
  pushPapersIn: (data, headers = {}) => host_user_instance.post('user/welfare/pushPapersIn', data),
  // 立即投入
  getJoinTeleJob: (data, headers = {}) => host_user_instance.post('user/welfare/getJoinTeleJob', data),
  // 加入电报
  getFirstSwapJob: (data, headers = {}) => host_user_instance.post('user/welfare/getFirstSwapJob', data),
  // swap首次交易
  getFirst50UJob: (data, headers = {}) => host_user_instance.post('user/welfare/getFirst50UJob', data),
  // 领取50u
  newUserRewardJobs: (data, headers = {}) => host_user_instance.post('user/welfare/newUserRewardJobs', data),
  // 新手任务
  // NFTMint
  //默认兑换列表
  nftMintGetInfo: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/getInfo", data),
  //建立邀请关系
  nftMintInvite: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/invite", data),
  //获取TX
  buildNftMintTxs: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/buildNftMintTxs", data),
  //签名token
  nftMintGetToken: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/getToken", data),
  //获取空头获奖列表
  nftMintLotteryList: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/LotteryList", data),
  //退款TX
  nftMintbuildNftMeltTxs: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/buildNftMeltTxs", data),
  //获取持有的NTT列表
  nftMintnftList: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/nftList", data),
  //查看Mint的广播状态
  nftMintcheckTransaction: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/checkTransaction", data)
};

/***/ })

};;
//# sourceMappingURL=index.js.map