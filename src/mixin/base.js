import { mapState } from "vuex";
function LowerCase(str=''){
    return (str || '').toLowerCase()
}
export const BaseMixin = {
  computed: {
    ...mapState(["local"]),
    locale() {
      return this.local.locale;
    },
    isBitKeep() {
      return this.local.UA.isBitKeep;
    }
  },
  created: function() {},

  methods: {
    /**
     * 
     * @param {*} coin   'test'
     * @param {*} chain   'ht'
     * @param {*} contract  代币: '0x76b9a40Fb2844A450C086B06A4D20599C16FF6eA'    nft: '0x76b9a40Fb2844A450C086B06A4D20599C16FF6eA#BK#NFT'
     * @returns 
     */
    async addCoin(coin, chain, contract) {
      if (!this.isBitKeep) return;
      try {
        await this._isCoinHas(chain, contract);
        await this._addCoin(coin, chain, contract);
      } catch (error) {
          console.error(error)
      }
    },
    _addCoin(coin, chain, contract) {
      return new Promise(resolve => {
        window.BitKeepInvoke.addCoin(coin, chain, contract, (err, data) => {
            console.log(err,data)
          if (err) return resolve(false);
          console.log(data)
          if (data) return resolve(true);
          resolve(false);
        });
      });
    },
    _isCoinHas(chain, contract) {
      return new Promise(resolve => {
        window.BitKeepInvoke.getCoins((err, data) => {
            console.log(err,data)
          if (err) return resolve(false);
          if (data) {
           
            let coinItem = data.find(
              item =>
                `${LowerCase(item.chain)}_${LowerCase(item.contract)}` ==
                `${LowerCase(chain)}_${LowerCase(contract)}`
            );
            return resolve(coinItem);
          }
          resolve(false);
        });
      });
    },
    showLoading(msg) {
      this.Toast = this.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: msg || ""
      });
      // const isBitKeepInvoke = typeof BitKeepInvoke !== "undefined";
      // // this.isLoading = true;
      // isBitKeepInvoke && BitKeepInvoke.showLoading();
    },
    hideLoading() {
      if (this.Toast) {
        this.Toast.clear();
      }
      // const isBitKeepInvoke = typeof BitKeepInvoke !== "undefined";
      // // this.isLoading = false;
      // isBitKeepInvoke && BitKeepInvoke.hideLoading();
    }
  }
};
