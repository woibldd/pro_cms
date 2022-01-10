<template>
  <div class="colorBackground1">
    <div class="loading" v-if="isLoading">
      <van-loading color="#1989fa" vertical
        >{{ $t("base.loading") }}...</van-loading
      >
    </div>
    <div v-else>
      <div class="addPool">
        <div class="staking-wrap-box-pool-title">
          <img
            src="https://cdn.bitkeep.vip/u_b_a6bdfc60-5113-11ec-be10-ddc2856c6ac6.png"
            alt=""
          />
          <div class="staking-wrap-box-pool-title-flex">
            <div class="staking-wrap-box-pool-title-left">
              <div class="textPrimary0">{{ title }}</div>
            </div>
            <div class="staking-wrap-box-pool-title-right">
              <div class="textSecond2">{{ $t("staking.APY") }}</div>
              <div class="colorSecond01 setFontFamily">{{ apy + "%" }}</div>
            </div>
          </div>
        </div>
        <div class="staking-wrap-box-pool-duration textPrimary0">
          {{ $t("staking.Duration") }}
        </div>
        <div class="staking-wrap-box-pool-duration-box">
          <span
            class="staking-wrap-box-pool-duration-smallBox setFontFamily"
            @click="handlePoolTimeTab(sitem, i)"
            v-for="(sitem, i) in listInfo.list[0].config"
            :key="i"
            :class="[
              isActiveSaleOut(sitem) ? 'textSecond3' : 'textSecond1',
              i == setBorderColor ? 'setBorderColor' : '',
            ]"
            >{{ sitem.time }}</span
          >
        </div>
        <div class="staking-warp-amount">
          <div class="textPrimary0">{{ $t("staking.StakeAmount") }}</div>
          <div class="textSecond3">
            {{ $t("staking.Available") }}:
            {{ listInfo.list[0].userAmount.toFixed(6) }} BKB
          </div>
        </div>
        <div class="staking-warp-amount-input">
          <input
            type="number"
            v-model="inputNumber"
            :min='1'
            placeholder="Entry stake amount"
            class="textPrimary0 setFontFamily"
            @keydown="handleInput"
            @blur="handleInput"
          />
          <div class="staking-warp-amount-input-right">
            <div class="right textPrimary0 setFontFamily">BKB</div>
            <div class="line colorLine1"></div>
            <div class="max colorPrimary" @click="Max">
              {{ $t("staking.MAX") }}
            </div>
          </div>
        </div>
        <div class="staking-limiation textPrimary0">
          {{ $t("staking.StakeAmountLimiation") }}
        </div>
        <div class="staking-min textSecond3">
          <div>
            {{ $t("staking.Minimum") }}:
            <span class="setFontFamily textPrimary0"> 1 BKB</span>
          </div>
          <div>
            {{ $t("staking.Maximum") }}:
            <span class="setFontFamily textPrimary0">10,000,000 BKB</span>
          </div>
        </div>
        <!-- <div class="colorLine setColorLine"></div> -->
        <div class="staking-summry">
          <div class="textPrimary0 Summary">{{ $t("staking.Summary") }}</div>
          <div class="staking-summary-box colorBackground3">
            <ul>
              <li>
                <span class="dian colorBackgroundPrimary"></span>
                <span class="textSecond3">{{ $t("staking.StakeDate") }} </span>
                <span class="textPrimary0 setFontFamily">{{
                  timerFormatte(listInfo.serverTime)
                }}</span>
              </li>
              <li class="setLeftLine colorDisable"></li>
              <li>
                <span class="dian colorBackgroundPrimary"></span>
                <span class="textSecond3">{{ $t("staking.ValueDate") }} </span>
                <span class="textPrimary0 setFontFamily">{{
                  timerFormatte(listInfo.serverTime)
                }}</span>
              </li>
              <li class="setLeftColorLine">
                <span class="textSecond3"
                  >{{ $t("staking.InterestPeriod") }}
                </span>
                <span class="textPrimary0 setFontFamily"
                  >{{ day }} {{ $t("staking.Days") }}</span
                >
              </li>
              <li>
                <span class="dian colorBackgroundPrimary"></span>
                <span class="textSecond3"
                  >{{ $t("staking.InterestEndDate") }}
                </span>
                <span class="textPrimary0 setFontFamily">{{
                  endtimerFormatte(listInfo.serverTime)
                }}</span>
              </li>
              <li class="setLeftLine colorDisable"></li>
              <li>
                <span class="dian colorBackgroundPrimary"></span>
                <span class="textSecond3"
                  >{{ $t("staking.RedemptionDate") }}
                </span>
                <span class="textPrimary0 setFontFamily">{{
                  endtimerFormatte(listInfo.serverTime)
                }}</span>
              </li>
            </ul>
            <div class="colorLine1 setColorLine1"></div>
            <div class="staking-warp-Interests">
              <div class="textSecond3">
                {{ $t("staking.EstimatedInterests") }}
              </div>
              <div class="colorSecond01 setFontFamily">
                {{
                  inputNumber
                    ? ((this.apy / 100 / 360) * this.day * inputNumber).toFixed(
                        6
                      )
                    : 0
                }}
                BKB
              </div>
              <!-- <div class="colorSecond01">{{this.apy}} BKB</div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="wrap-bottom colorBackground1">
        <button
          class="swap-btn"
          :class="[
            btn == `${$t('staking.StakeNow')}` && inputNumber >= 1
              ? 'staking-wrap-box-pool-stake-now'
              : 'staking-wrap-box-pool-stake-now setOpacity',
          ]"
          @click="handleGetLoginSign"
        >
          {{ btn }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { USER_API } from "@/api/client";
import { mapState } from "vuex";
import moment from "moment";
import { wallet } from "./wallet";
// import airdropABI from "./airdropABI";
export default {
  data() {
    return {
      setBorderColor: 0,
      apy: "20",
      btn: "Stake now",
      inputNumber: '',
      isLoading: true,
      title: "",
      day: "7",
      accounts: "",
      listInfo: {
        serverTime: "",
        list: [{ allStakeAmount: 0, bkbTotalSuperAmount: 0, config: [] }],
      },
      token: "",
      poolContract: "0xbb85bfbbdcefca43e9de619a149c186506fd0ff6",
    };
  },
  computed: {
    ...mapState(["local"]),
    locale() {
      return this.local.locale;
    },
    isBitKeep() {
      return this.local.UA.isBitKeep;
    },
    userInfo() {
      return this.local.userInfo.token;
    },
  },
  mounted() {
    this.setIcon();
    this.onClickConnect();
  },
  methods: {
    handleInput(e){
      if(e.target.value < 1) e.target.value = '';
      e.target.value = (e.target.value.match(/^\d*(\.?\d{0,5})/g)[0]) || null
    },
    async getInfo() {
      const { data, status } = await USER_API.poolList({
        userid: this.accounts,
      });
      if (status == 1) {
        this.isLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("CbkbExchange.know"),
          confirmButtonColor: "$theme-light-colorPrimary",
        });
      }
      this.isLoading = false;
      this.listInfo = data;
      this.listInfo.list = data.list;
      this.title = data.list[0].title;
      let prames = data.list && data.list[0].config[0];
      this.handlePoolTimeTab(prames, 0);
    },
    setIcon() {
      this.isBitKeep &&
        BitKeepInvoke.onLoadReady(() => {
          BitKeepInvoke.setIconAction();
          //设置主题
          this.$nextTick(() => {
            this.$store.commit('CHANGE_LANG',this.locale)
            BitKeepInvoke.setTitle(this.$t("staking.AddPoolTitle"));
            BitKeepInvoke.getAddress(async (err, data) => {
              if (err) {
                return this.$toast(err);
              }
              this.accounts = data["eth"] || "--";
              await this.handleGetToken();
              await this.getInfo();
          });
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
    Max() {
      this.inputNumber = this.listInfo.list[0].userAmount;
    },
    timerFormatte(time) {
      return moment(time).format("YYYY-MM-DD HH:mm");
    },
    endtimerFormatte(time) {
      return moment(time).add(this.day, "d").format("YYYY-MM-DD HH:mm");
    },
    async handleGetToken() {
      const { data, status } = await USER_API.handleGetToken({
        userid: this.accounts,
      });
      if (status == 1) {
        this.isLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("staking.know"),
          confirmButtonColor: "$theme-light-colorPrimary",
        });
      }
      this.token = data.token;
    },
    // 获取签名
    async handleGetLoginSign() {
      if(this.inputNumber == '' || this.inputNumber < 1) return this.$toast(this.$t('staking.stakeAmount'));
      if(this.listInfo.list && (this.inputNumber > this.listInfo.list[0].userAmount)) return this.$toast('insufficient balance');
      if(this.btn == this.$t('staking.StakeNow') && this.inputNumber >= 1) {
        try {
          let loginSign = await wallet.LoginSign(this.token, this.accounts);
          this.handleStaking(loginSign);
        } catch (error) {
          this.$toast(this.$t('staking.authorization'));
        }
      }
    },
    async handleStaking(loginSign) {
      const { data, status } = await USER_API.staking({
        userid: this.accounts,
        time: this.day,
        amount: Number(this.inputNumber),
        c_token: this.token,
        verifyToken: loginSign,
      });
      if (status == 1) {
        this.isLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("staking.know"),
          confirmButtonColor: "$theme-light-colorPrimary",
        });
      }
      this.$router.push("/activity/staking/myPool");
    },
    isActiveSaleOut(sitem) {
      return (
        sitem.allStake >= sitem.limit ||
        moment(sitem.lastStakeTime).isBefore(
          moment(this.listInfo.list[0].serverTime)
        )
      );
    },
    handlePoolTimeTab(item, index) {
      this.setBorderColor = index;
      this.day = item.time;
      this.apy = (item.apy * 100).toFixed(2);
      this.btn = !this.isActiveSaleOut(item)
        ? this.$t("staking.StakeNow")
        : this.$t("staking.SoldOut");
    },
    // 点击连接
    async onClickConnect() {
      try {
        this.accounts = this.accounts || await wallet.connect();
        // const chainId = await wallet.getChainId();
        // const [adddress] = await wallet.getAccounts();       
        // if (Number(chainId) !== 1) {
        //   await wallet.switchChainId(1, this.accounts);
        // }
        if(!this.isBitKeep){
          await this.handleGetToken();
          await this.getInfo();
        } 
        wallet.on("chainChanged", async () => {
          const chainId16 = await wallet.getChainId();
          Number(chainId16) != 1 && (await wallet.switchChainId(1));
        });
        wallet.on("accountsChanged", this.onClickConnect);
      } catch (error) {
        this.$toast(typeof error == "object" ? error.message : error);
      }
    },
    // addPool(){
    //   const token = window.web3.eth
    //         .contract(airdropABI)
    //         .at(this.poolContract);

    //       const data = token.withdraw.getData('0x9a78649501bbaac285ea4187299471b7ad4abd35', this.inputNumber);
    //       const params = {
    //         to: this.poolContract,
    //         value: 0,
    //         data: data,
    //       };
    //       console.log(token);

    //       params.gasLimit = window.web3.eth.estimateGas(
    //         params,
    //         (err, gasLimit) => {
    //           if (err) return Toast(err);
    //           params.gas = gasLimit;
    //           window.web3.eth.sendTransaction(params, (err, result) => {
    //             if (err) return Toast(this.$t("base.dropCancel"));
    //             console.log(parseFloat(result));
    //             this.$dialog.alert({
    //               message: data,
    //               confirmButtonText: this.$t("staking.know"),
    //               confirmButtonColor: "$theme-light-colorPrimary",
    //             });
    //           });
    //         }
    //       );
    // }
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/theme.scss";
.theme-light {
  .staking-warp-amount-input {
    border: 1px solid $theme-light-colorLine1;
  }
  .staking-wrap-box-pool-duration-smallBox {
    border: 1px solid $theme-light-colorLine1;
  }
  .wrap-bottom {
    border-top: 1px solid $theme-light-colorLine1;
  }
}
.theme-dark {
  .staking-warp-amount-input {
    border: 1px solid $theme-dark-colorLine1;
  }
  .staking-wrap-box-pool-duration-smallBox {
    border: 1px solid $theme-dark-colorLine1;
  }
  .wrap-bottom {
    border-top: 1px solid $theme-dark-colorLine1;
  }
}
.loading {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.addPool {
  padding: 0 16px;
  min-height: 100vh;
  .staking-wrap-box-pool-title {
    display: flex;
    height: 54px;
    align-items: center;
    position: relative;
    img {
      width: 30px;
      height: 30px;
      display: inline-block;
      vertical-align: middle;
    }
  }
  .staking-wrap-box-pool-title-flex {
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    align-items: center;
    .staking-wrap-box-pool-title-left {
      :first-child {
        font-weight: 600;
        font-size: 16px;
      }
    }
    .staking-wrap-box-pool-title-right {
      text-align: right;
      position: absolute;
      right: 0;
      :first-child {
        font-size: 12px;
      }
      :last-child {
        font-size: 16px;
        margin-top: 2px;
      }
    }
  }
  .staking-wrap-box-pool-duration {
    margin-top: 20px;
    font-size: 14px;
  }
  .staking-wrap-box-pool-duration-box {
    margin-top: 10px;
    .staking-wrap-box-pool-duration-smallBox {
      display: inline-block;
      text-align: center;
      height: 28px;
      width: 60px;
      line-height: 28px;
      border-radius: 4px;
      margin-right: 8px;
      font-size: 16px;
    }
    .setBorderColor {
      border: 1px solid #495bff;
      color: #495bff;
    }
  }
  .staking-warp-amount {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    :first-child {
      font-size: 14px;
    }
    :last-child {
      font-size: 12px;
    }
  }
  .staking-warp-amount-input {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-radius: 8px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    input {
      width: 55%;
      height: 50px;
      float: left;
      padding-left: 15px;
      font-size: 16px;
      display: block;
      background: none;
      outline: none;
      border: none;
    }
    .staking-warp-amount-input-right {
      float: right;
      line-height: 50px;
      .right {
        float: left;
        padding: 0 20px 0 10px;
        font-size: 16px;
      }
      .line {
        width: 1px;
        height: 18px;
        float: left;
        margin-top: 17px;
      }
      .max {
        float: left;
        padding: 0 17px 0 20px;
        font-size: 16px;
      }
    }
  }
  .staking-limiation {
    margin-top: 30px;
    font-size: 14px;
  }
  .staking-min {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-top: 10px;
  }
  .setColorLine {
    width: 100%;
    height: 1px;
    margin-top: 30px;
  }
  .staking-summry {
    margin-top: 40px;
    padding-bottom: 100px;
    .Summary {
      font-weight: 600;
      font-size: 16px;
    }
    .staking-summary-box {
      width: 100%;
      border-radius: 8px;
      margin-top: 10px;
      ul {
        padding: 15px;
        li {
          font-size: 14px;
          position: relative;
          .dian {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;
          }
          :last-child {
            position: absolute;
            right: 0;
          }
        }
        .setLeftLine {
          width: 2px;
          height: 28px;
          margin-left: 2px;
          margin-top: 1px;
        }
        .setLeftColorLine {
          height: 81px;
          line-height: 81px;
          border-left: 2px solid #1cbdb5;
          margin-left: 2px;
          :first-child {
            margin-left: 18px;
          }
        }
      }
      .setColorLine1 {
        height: 1px;
        margin: 0 16px 15px;
        box-sizing: border-box;
      }
      .staking-warp-Interests {
        display: flex;
        justify-content: space-between;
        padding: 0 15px 15px;
        font-size: 14px;
      }
    }
  }
}
.setBottomLine {
  width: 100%;
  height: 1px;
}
.wrap-bottom {
  width: 100%;
  bottom: 0;
  z-index: 99;
  position: fixed;
  padding: 11px 36px 34px;
  box-sizing:border-box;
  .staking-wrap-box-pool-stake-now {
    background: #495bff;
    color: #fff;
  }
  .setOpacity {
    opacity: 0.3;
  }
  .swap-btn {
    z-index: 0;
    color: #fff;
    height: 50px;
    border-radius: 10px;
    text-align: center;
    line-height: 44px;
    border: none;
    font-weight: 500;
    font-size: 16px;
    width: 303px;
  }
}
</style>