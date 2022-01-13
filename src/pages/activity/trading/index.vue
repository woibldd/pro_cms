<template>
  <div class="trading colorBackground0">
    <div class="loading" v-if="isLoading">
      <van-loading color="#1989fa" vertical
        >{{ $t("base.loading") }}...</van-loading
      >
    </div>
    <van-pull-refresh
      v-model="refreshLoading"
      v-else
      :success-text="$t('mining.success')"
      :loading-text="$t('mining.loading')"
      :loosing-text="$t('mining.loading')"
      @refresh="getInfo"
    >
      <div class="trading-wrap">
        <div class="img">
          <img
            src="https://cdn.bitkeep.vip/u_b_ea7b65f0-7292-11ec-8a6e-5bcf537d44fc.png"
            alt=""
          />
        </div>
        <!-- box -->
        <div class="trading-wrap-status textSecond3">
          <span
            v-for="(item, index) in activeList"
            :key="index"
            :class="activeType == index ? 'textPrimary0 setBorder' : ''"
            @click="tabChange(index)"
            >{{ item }}</span
          >
          <!-- <div 
            class="trading-wrap-bottom-line colorBackgroundTextPrimary0" 
            :class="[activeType == 0 ? 'trading-active-line-one':activeType == 1 ? 'trading-active-line-two': 'trading-active-line-three']"
            ></div> -->
        </div>
        <div v-show="activeType == 0">
          <div class="trading-wrap-box">
            <tradingCom
              @swap="swap"
              :tradingList="tradingList"
              :activeType="0"
            ></tradingCom>
          </div>
        </div>
        <div v-show="activeType == 1">
          <div class="trading-wrap-box">
            <tradingCom :tradingList="tradingList" :activeType="1"></tradingCom>
          </div>
        </div>
        <div v-show="activeType == 2">
          <div class="trading-wrap-box">
            <tradingCom :tradingList="tradingList" :activeType="2"></tradingCom>
          </div>
        </div>
        <!-- Mining Rule -->
        <div class="trading-wrap-one colorBackground1">
          <div class="trading-wrap-one-header">
            <div class="trading-wrap-one-header-title">
              <img
                src="https://cdn.bitkeep.vip/u_b_d9de7870-3b9e-11ec-8e63-1db435df936c.png"
                alt=""
              />
              <span class="setFontWeight textPrimary0">{{
                $t("trading.tradingRule")
              }}</span>
            </div>
            <div>
              <span
                class="trading-wrap-one-header-right colorPrimary"
                @click="learnMore"
                >{{ $t("mining.learnMore") }}</span
              >
            </div>
          </div>
          <div class="trading-wrap-line colorLine"></div>
          <div class="trading-wrap-one-body" @click="learnMore">
            <p class="trading-wrap-one-body-text textSecond1">
              {{ $t("mining.miningRule") }}
            </p>
          </div>
        </div>
        <!-- <activity-com/> -->
        <div class="wrap-bottom colorBackground1">
          <div class="wrap-bottom-text">
            <div class="textSecond3">{{ $t("trading.UnclaimedReward") }}</div>
            <div class="colorPrimary setFontFamily">3,750.8704 BKB</div>
          </div>
          <van-button class="swap-btn colorBackgroundSecond01" @click="claim">{{
            $t("trading.claim")
          }}</van-button>
        </div>
      </div>
    </van-pull-refresh>
    <pup-protocol
      :show="show"
      @close="close"
      :theme="theme"
      :key="new Date().getTime()"
    ></pup-protocol>
  </div>
</template>
<script>
import { USER_API } from "@/api/client";
import { mapState } from "vuex";
// import activity from "@/components/activity";
import pupProtocol from "./protocol.vue";
import trading from "@/components/trading";
export default {
  name: "trading",
  data() {
    return {
      status: false,
      show: false,
      isLoading: true,
      refreshLoading: false,
      activeType: 0,
      theme: 0,
      activeList: [
        this.$t("trading.Live"),
        this.$t("trading.Upcoming"),
        this.$t("trading.Past"),
      ],
      tradingList: [{}],
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
  },
  components: {
    // activityCom: activity,
    pupProtocol,
    tradingCom: trading,
  },

  mounted() {
    this.getInfo();
    this.setIcon();
  },
  methods: {
    // 获取信息
    async getInfo() {
      const { data, status } = await USER_API.miningInfo();
      if (status == 1) {
        this.isLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("staking.know"),
          confirmButtonColor: "$theme-light-colorPrimary",
        });
      }
      this.isLoading = false;
      this.refreshLoading = false;
    },
    inviteRewards() {
      this.$router.push("/activity/blindboxInvite/rewardList");
    },
    tabChange(val) {
      this.activeType = val;
    },
    setIcon() {
      this.isBitKeep &&
        BitKeepInvoke.onLoadReady(() => {
          BitKeepInvoke.setTitle(this.$t("trading.tradingTitle"));
          //设置主题
          this.$nextTick(() => {
            BitKeepInvoke.appMode((err, res) => {
              let body = document.getElementsByTagName("body")[0];
              if (res == 1) {
                this.theme = 1;
                body.setAttribute("class", "theme-dark");
                setTimeout(() => {
                  BitKeepInvoke.setIconAction(
                    "https://cdn.bitkeep.vip/u_b_09035ca0-4dd9-11ec-a555-07d5354e6fab.png",
                    () => {
                      this.$router.push("/activity/trading/history");
                    }
                  );
                }, 500);
              } else {
                this.theme = 0;
                body.setAttribute("class", "theme-light");
                setTimeout(() => {
                  BitKeepInvoke.setIconAction(
                    "https://cdn.bitkeep.vip/u_b_2bb4fa20-3b86-11ec-8e63-1db435df936c.png",
                    () => {
                      this.$router.push("/activity/trading/history");
                    }
                  );
                }, 500);
              }
            });
          });
        });
    },
    milliFormat(num) {
      return (
        num &&
        num
          .toString()
          .replace(/^\d+/g, (m) => m.replace(/(?=(?!^)(\d{3})+$)/g, ","))
      );
    },
    claim() {
      this.show = true;
    },
    close(val) {
      if (val) {
        setTimeout(() => {
          this.getInfo();
        }, 500);
      }
      this.show = false;
    },
    swap() {
      BitKeepInvoke.nativeApp(JSON.parse(JSON.stringify({
        symbol0: {
          symbol: "CAKE",
          chain: "CAKE",
          chainName: "CAKE",
          contract: "contract",
          icon: "123",
        },
        symbol1: {
          symbol: "BNB",
          chainName: "BNB",
          chain: "BNB",
          contract: "contract",
          icon: "123",
        },
      })));
    },
    learnMore() {
      this.$router.push("/activity/mining/miningRule");
    },
  },
};
</script>
<style lang="scss">
.van-dialog__message {
  font-size: 16px !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
  font-weight: 500;
  line-height: 20px;
}
.van-dialog__confirm {
  font-weight: 500;
  font-size: 17px;
}
</style>
<style lang="scss" scoped>
@import "@/assets/css/theme.scss";
@import "./index.scss";
.theme-light {
  .trading-wrap-status {
    .setBorder {
      border-bottom: 2.1px solid $theme-light-textPrimary0;
    }
  }
}
.theme-dark {
  .trading-wrap-status {
    .setBorder {
      border-bottom: 2.1px solid $theme-dark-textPrimary0;
    }
  }
}
</style>
