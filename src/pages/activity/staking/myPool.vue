<template>
  <div
    class="myPool-warp"
    :class="activeType == 1 ? 'colorBackground0' : 'colorBackground1'"
  >
    <div class="loading" v-if="isLoading">
      <van-loading color="#1989fa" vertical
        >{{ $t("base.loading") }}...</van-loading
      >
    </div>
    <div v-else>
      <div class="myPool-warp-tab colorBackground1">
        <div
          class="myPool-warp-tab-first"
          :class="activeType == '1' ? 'textPrimary0 setFontW' : 'textSecond2'"
          @click="active(1)"
        >
          {{ $t("staking.Staking") }}
        </div>
        <div
          class="myPool-warp-tab-last"
          :class="activeType == '2' ? 'textPrimary0 setFontW' : 'textSecond2'"
          @click="active(2)"
        >
          {{ $t("staking.Activity") }}
        </div>
      </div>
      <div v-if="activeType == 1">
        <van-pull-refresh
          v-model="refreshLoading"
          :success-text="$t('mining.success')"
          :loading-text="$t('mining.loading')"
          :loosing-text="$t('mining.loading')"
          @refresh="getList"
          style="min-height: 100vh"
        >
          <div
            v-if="myPoolList.length > 0"
            class="myPool-warp-tab-firstContent"
          >
            <div
              v-for="item in myPoolList"
              :key="item.id"
              class="myPool-warp-tab-firstContentBox colorBackground1"
            >
              <div class="myPool-warp-tab-firstContent-title">
                <div class="myPool-warp-tab-firstContent-titleLeft">
                  <img
                    src="https://cdn.bitkeep.vip/u_b_a6bdfc60-5113-11ec-be10-ddc2856c6ac6.png"
                    alt=""
                  />
                  <span class="textPrimary0">{{ item.poolName }}</span>
                </div>
                <div class="myPool-warp-tab-firstContent-titleRight">
                  <div
                    class="colorSecond08 colorSecond18"
                    v-if="!item.isExpire"
                  >
                    {{ $t("staking.BeExpired") }}
                  </div>
                  <div
                    class="colorSecond01 colorBackgroundColorSecond11"
                    v-else
                  >
                    {{ $t("staking.Pledge") }}
                  </div>
                </div>
              </div>
              <div class="myPool-wrap-line colorLine"></div>
              <div class="myPool-warp-tab-firstContent-content">
                <div class="myPool-warp-tab-firstContent-content-apy">
                  <div class="textSecond2">APY</div>
                  <div class="colorSecond01 setFontFamily">
                    {{ (item.apy * 100).toFixed(2) + "%" }}
                  </div>
                </div>
                <div class="myPool-warp-tab-firstContent-content-number">
                  <div class="myPool-warp-tab-firstContent-content-number-left">
                    <div class="textSecond2">{{ $t("staking.Durations") }}</div>
                    <div class="textPrimary0 setFontFamily">{{ item.lockTime }} {{$t('staking.Days')}}</div>
                  </div>
                  <div
                    class="myPool-warp-tab-firstContent-content-number-right"
                  >
                    <div class="textSecond2">
                      {{ $t("staking.PledgeDueDate") }}
                    </div>
                    <div class="textPrimary0 setFontFamily">{{ time(item.lockEndTime) }}</div>
                  </div>
                </div>
                <div class="myPool-warp-tab-firstContent-content-number">
                  <div class="myPool-warp-tab-firstContent-content-number-left">
                    <div class="textSecond2">
                      {{ $t("staking.YourStakeAmount") }}
                    </div>
                    <div class="textPrimary0 setFontFamily">{{ item.stakeAmount }} BKB</div>
                  </div>
                  <div
                    class="myPool-warp-tab-firstContent-content-number-right"
                  >
                    <div class="textSecond2">
                      {{ $t("staking.CurrencyReward") }}
                    </div>
                    <div class="colorPrimary setFontFamily">
                      +{{ item.currencyReward }} BKB
                    </div>
                  </div>
                </div>
                <div
                  class="myPool-warp-tab-firstContent-content-btn"
                  :class="
                    !item.isExpire
                      ? 'colorBackground2 textPrimary0'
                      : 'colorBackgroundPrimary colorwhite'
                  "
                  @click="removeClick(item)"
                >
                  {{
                    !item.isExpire
                      ? $t("staking.Remove")
                      : $t("staking.Unstake")
                  }}
                </div>
              </div>
            </div>
          </div>
          <div class="noData" v-else>
            <img
              src="https://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png"
              alt=""
            />
            <p class="textSecond3">{{ $t("mining.noData") }}</p>
          </div>
        </van-pull-refresh>
      </div>
      <div v-if="activeType == 2">
        <van-pull-refresh
          v-model="refreshLoading"
          :success-text="$t('mining.success')"
          :loading-text="$t('mining.loading')"
          :loosing-text="$t('mining.loading')"
          @refresh="stakeHistory"
          style="min-height: 100vh"
        >
          <div
            v-if="historyList.length > 0"
            class="myPool-warp-tab-lastContent"
          >
            <div
              v-for="(historyItem, index) in historyList"
              :key="index"
              class="myPool-warp-tab-lastContent-titleBox"
            >
              <div class="myPool-warp-tab-lastContent-title">
                <div class="myPool-warp-tab-firstContent-titleLeft">
                  <img
                    src="https://cdn.bitkeep.vip/u_b_a6bdfc60-5113-11ec-be10-ddc2856c6ac6.png"
                    alt=""
                  />
                  <span class="textPrimary0">{{ historyItem.poolName }}</span>
                </div>
                <div class="myPool-warp-tab-firstContent-titleRight">
                  <div class="textSecond3">
                    {{ time(historyItem.updateTime) }}
                  </div>
                </div>
              </div>
              <div class="myPool-warp-tab-lastContent-number">
                <div>
                  <div class="textSecond2">{{ $t("staking.StakeAmount") }}</div>
                  <div class="textPrimary0 setFontFamily">
                    {{ historyItem.stakeAmount.toFixed(2) }} BKB
                  </div>
                </div>
                <div>
                  <div class="Reward textSecond2">
                    {{ $t("staking.Reward") }}
                  </div>
                  <div class="colorPrimary setFontFamily">
                    +{{ historyItem.reward.toFixed(2) }} BKB
                  </div>
                </div>
                <div>
                  <div class="textSecond2">{{ $t("staking.Operate") }}</div>
                  <div class="textPrimary0" style="text-align: right">
                    {{
                      historyItem.status === 1
                        ? $t("staking.Add")
                        : $t("staking.Remove")
                    }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="noData" v-else>
            <img
              src="https://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png"
              alt=""
            />
            <p class="textSecond3">{{ $t("mining.noData") }}</p>
          </div>
        </van-pull-refresh>
      </div>
    </div>
    <pup-protocol
      :showPool="showPool"
      @Cancel="close"
      :theme="theme"
      :stakeAmount="stakeAmount"
      :currencyReward="currencyReward"
      :stakingStatus="stakingStatus"
      :address="address"
      :stakeId="stakeId"
      :token="token"
      :key="new Date().getTime()"
    ></pup-protocol>
  </div>
</template>
<script>
import pupProtocol from "./protocol.vue";
import { USER_API } from "@/api/client";
import { mapState } from "vuex";
import moment from "moment";

export default {
  data() {
    return {
      activeType: 1,
      showPool: false,
      theme: 0,
      myPoolList: [],
      historyList: [],
      currencyReward: 0,
      stakeAmount: 0,
      stakingStatus: false,
      refreshLoading: false,
      isLoading: true,
      address: "",
      stakeId: "",
      token: "",
    };
  },
  components: {
    pupProtocol,
  },
  computed: {
    ...mapState(["local"]),
    locale() {
      return this.local.locale;
    },
    isBitKeep() {
      return this.local.UA.isBitKeep;
    },
  },
  async mounted() {
    this.setIcon();
    if (!this.isBitKeep) {
    //   this.address = "0x7068dd34531c8f7656b540e6290e352c880f6822";
      this.address = "0x3707766dbADE98CC3631B5427A8D9186db159154";
      this.getList();
      this.stakeHistory();
      this.handleGetToken();
    }
  },
  methods: {
    async getList() {
      //   this.address = await wallet.connect();
      const { data, status } = await USER_API.myPool({
        userid: this.address,
      });
      if (status == 1) {
        this.isLoading = false;
        this.refreshLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("CbkbExchange.know"),
          confirmButtonColor: "$theme-light-colorPrimary",
        });
      }
      this.isLoading = false;
      this.refreshLoading = false;
      this.myPoolList = data.list;
    },
    async stakeHistory() {
      const { data, status } = await USER_API.stakeHistory({
        userid: this.address,
      });
      if (status == 1) {
        this.isLoading = false;
        this.refreshLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("CbkbExchange.know"),
          confirmButtonColor: "$theme-light-colorPrimary",
        });
      }
      this.isLoading = false;
      this.refreshLoading = false;
      this.historyList = data.list;
    },
    async handleGetToken() {
      const { data, status } = await USER_API.handleGetToken({
        userid: this.address,
      });
      if (status == 1) {
        this.isLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("CbkbExchange.know"),
          confirmButtonColor: "$theme-light-colorPrimary",
        });
      }
      this.token = data.token;
    },
    time(lockEndTime) {
      return moment(lockEndTime).format("YYYY-MM-DD HH:mm");
    },
    close(val) {
      if (val) {
        this.getList();
        this.handleGetToken();
      }
      this.showPool = false;
    },
    removeClick(item) {
      this.showPool = true;
      this.stakeAmount = item.stakeAmount;
      this.currencyReward = item.currencyReward;
      this.stakingStatus = item.isExpire;
      this.stakeId = item.id;
    },
    active(type) {
      this.activeType = type;
      if (this.activeType == 1) {
        this.getList();
      } else {
        this.stakeHistory();
      }
    },
    setIcon() {
      this.$store.commit('CHANGE_LANG',this.locale)
      this.isBitKeep &&
        BitKeepInvoke.onLoadReady(() => {
          BitKeepInvoke.getAddress(async (err, data) => {
            if (err) {
              return this.$toast(err);
            }
            this.addresses = data;
            this.address = this.addresses["eth"] || "--";
            this.getList();
            this.stakeHistory();
            this.handleGetToken();
          });
          BitKeepInvoke.setIconAction();
          BitKeepInvoke.setTitle(this.$t("staking.MyPoolsTitle"));
          //设置主题
          this.$nextTick(() => {
            BitKeepInvoke.appMode((err, res) => {
              let body = document.getElementsByTagName("body")[0];
              if (res == 1) {
                this.theme = 1;
                body.setAttribute("class", "theme-dark");
              } else {
                this.theme = 0;
                body.setAttribute("class", "theme-light");
              }
            });
          });
        });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/theme.scss";
.theme-light {
  .setFontW {
    border-bottom: 2.1px solid $theme-light-textPrimary0;
  }
  .myPool-warp-tab-lastContent-number {
    border-bottom: 1px solid $theme-light-colorLine;
  }
  .myPool-warp-tab {
    border-bottom: 1px solid $theme-light-colorLine;
  }
}
.theme-dark {
  .setFontW {
    border-bottom: 2.1px solid $theme-dark-textPrimary0;
  }
  .myPool-warp-tab-lastContent-number {
    border-bottom: 1px solid $theme-dark-colorLine;
  }
  .myPool-warp-tab {
    border-bottom: 1px solid $theme-dark-colorLine;
  }
}
.loading {
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.myPool-warp {
  min-height: 100vh;
  padding-bottom: 10px;
  .myPool-wrap-line {
    width: 100%;
    height: 1px;
  }
  .myPool-warp-tab {
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    padding: 0 105px;
    display: flex;
    justify-content: space-between;
    .setFontW {
      font-weight: 500;
    }
  }
  .myPool-warp-tab-firstContentBox {
    margin-top: 10px;
    border-radius: 8px;
  }
  .myPool-warp-tab-firstContent {
    margin: 10px 16px 0;
    .myPool-warp-tab-firstContent-title {
      height: 54px;
      line-height: 54px;
      display: flex;
      padding-left: 15px;
      justify-content: space-between;
      .myPool-warp-tab-firstContent-titleLeft {
        display: flex;
        align-items: center;
        img {
          width: 30px;
          height: 30px;
          vertical-align: middle;
        }
        span {
          font-weight: 500;
          font-size: 14px;
          vertical-align: sub;
          display: inline-block;
          margin-left: 5px;
        }
      }
      .myPool-warp-tab-firstContent-titleRight {
        > div {
          width: 84px;
          height: 24px;
          line-height: 24px;
          border-bottom-left-radius: 8px;
          border-top-right-radius: 8px;
          text-align: center;
          font-size: 12px;
          font-weight: 500;
        }
      }
    }
    .myPool-warp-tab-firstContent-content {
      padding: 10px 16px 20px;
      .myPool-warp-tab-firstContent-content-apy {
        :first-child {
          font-size: 12px;
        }
        :last-child {
          font-size: 16px;
        }
      }
      .myPool-warp-tab-firstContent-content-number {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        .myPool-warp-tab-firstContent-content-number-left {
          text-align: left;
          :first-child {
            font-size: 12px;
          }
          :last-child {
            font-size: 16px;
            margin-top: 5px;
          }
        }
        .myPool-warp-tab-firstContent-content-number-right {
          text-align: right;
          :first-child {
            font-size: 12px;
          }
          :last-child {
            font-size: 16px;
            margin-top: 5px;
          }
        }
      }
      .myPool-warp-tab-firstContent-content-btn {
        height: 50px;
        line-height: 50px;
        margin-top: 20px;
        // font-weight: 500;
        font-size: 16px;
        text-align: center;
        border-radius: 10px;
      }
    }
  }
  .myPool-warp-tab-lastContent {
    padding:0 15px 15px;
    .myPool-warp-tab-lastContent-titleBox {
      padding-top: 15px;
    }
    .myPool-warp-tab-lastContent-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
      span {
        font-weight: 500;
        font-size: 14px;
        vertical-align: sub;
        display: inline-block;
        margin-left: 5px;
      }
      .myPool-warp-tab-firstContent-titleRight {
        > div {
          text-align: center;
          font-size: 12px;
        }
      }
    }
    .myPool-warp-tab-lastContent-number {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      line-height: 17px;
      padding-bottom: 15px;
      div {
        :first-child {
          font-size: 12px;
        }
        :last-child {
          font-size: 14px;
        }
      }
    }
  }
}
.noData {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 100px;
    height: 100px;
  }
  p {
    font-size: 14px;
  }
}
</style>