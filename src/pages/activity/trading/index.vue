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
      @refresh="onDownRefresh"
    >
     <van-list
        v-model="loading"
        :finished="finished"
        :immediate-check="false"
        :loading-text="$t('mining.loading')"
        :finished-text="$t('base.nomore')"
        @load="onLoadList"
      >
        <div class="trading-wrap">
          <van-notice-bar wrapable
            :scrollable="false" 
            color="#FF8146" 
            background="rgba(255, 129, 70, 0.1)" 
            left-icon="https://cdn.bitkeep.vip/u_b_c2936690-7531-11ec-8de8-87fc79fc0305.png" 
            mode="closeable">{{$t('trading.noticeBar')}}</van-notice-bar>
          <div class="img">
            <img
              src="https://cdn.bitkeep.vip/u_b_c29ed840-7531-11ec-8de8-87fc79fc0305.png"
              alt=""
            />
            <div class="img-text">
              <div>{{$t('trading.make')}}</div>
              <div>{{$t('trading.toGet')}}</div>
            </div>
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
                {{ $t("trading.ruleContentTitle") }}
              </p>
            </div>
          </div>
          <!-- <activity-com/> -->
          <div class="wrap-bottom colorBackground1">
            <div class="wrap-bottom-text">
              <div class="textSecond3">{{ $t("trading.UnclaimedReward") }}</div>
              <div class="colorPrimary setFontFamily">{{milliFormat(waitClaim)}} BKB</div>
            </div>
            <van-button class="swap-btn colorBackgroundSecond01" @click="claim">{{
              $t("trading.claim")
            }}</van-button>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
    <pup-protocol
      :show="show"
      @close="close"
      :theme="theme"
      :waitClaim='waitClaim'
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
      loading: false, //上拉加载
      finished: false, //上拉加载完毕
      start: 1,
      activeType: 0,
      theme: 0,
      waitClaim: 0,
      activeList: [
        this.$t("trading.Live"),
        this.$t("trading.Upcoming"),
        this.$t("trading.Past"),
      ],
      tradingList: [],
    };
  },
  computed: {
    ...mapState(["local"]),
    locale() {
      return this.local.locale;
    },
    firstState() {
      return this.local.firstStatus;
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
    this.firstEnter();
    this.getInfo();
    this.setIcon();
    this.tradingWaitClaim();
  },
  methods: {
    firstEnter() {
      let tit =
        "<div class='popBox'><div>" +
        this.$t("trading.tit1") +
        "</div><div>" +
        this.$t("trading.tit2") +
        "</div></div>";
      if (this.firstState) {
        this.$dialog.alert({
          title: this.$t("trading.popTit"),
          message: tit,
          confirmButtonText: this.$t("trading.btn"),
          getContainer: () => document.querySelector("body"),
        });
        this.$store.commit('SET_firstStatus', false);
      } else {
        return;
      }
    },
    // 获取列表
    async getInfo() {
      const { data, status } = await USER_API.tradingGetList({
        start: this.start,
        limit: 20,
        type: this.activeType + 1
      });
      if (status == 1) {
        this.isLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("staking.know"),
          confirmButtonColor: "$theme-light-colorPrimary",
        });
      }
      var moreList = data.list;
      this.finished = false;
      if(this.start == 1 ){
        this.tradingList = [];
        this.tradingList = moreList;
      }else{
        this.tradingList.push(...moreList);
      }
      this.refreshLoading = false;
      this.loading = false;
      this.isLoading = false;
      this.$toast.clear();
      if (this.tradingList.length >= data.totalRows) {
        this.finished = true;
      }
    },
    // 上拉加载请求方法
    onLoadList() {
      this.start++;
      this.finished = false;
      this.getInfo();
    },
    onDownRefresh() {
      this.start = 1;
      this.getInfo();
    },
    async tradingWaitClaim(){
      const { data, status } = await USER_API.tradingWaitClaim();
      if (status == 1) {
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("staking.know"),
          confirmButtonColor: "$theme-light-colorPrimary",
        });
      }
      this.waitClaim = data;
    },
    tabChange(val) {
      this.activeType = val;
      this.getInfo();
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
          this.tradingWaitClaim();
        }, 200);
      }
      this.show = false;
    },
    swap(swapNow) {
      // let swap = {
      //   symbol0: {
      //     symbol: "CAKE",
      //     chain: "CAKE",
      //     chainName: "CAKE",
      //     contract: "contract",
      //     icon: "123",
      //   },
      //   symbol1: {
      //     symbol: "BNB",
      //     chainName: "BNB",
      //     chain: "BNB",
      //     contract: "contract",
      //     icon: "123",
      //   },
      // }
      BitKeepInvoke.nativeApp(JSON.stringify(swapNow));
    },
    learnMore() {
      this.$router.push("/activity/trading/tradingRule");
    },
  },
};
</script>
<style lang="scss">
.wrap-title {
  width: 100%;
  .van-tabs__wrap {
    width: 100%;
    padding-bottom: 5px;
  }
  .van-tabs__nav--line {
    width: 40%;
    margin-left: 8px;
  }
  .van-tab__text--ellipsis {
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    padding-bottom: 2px;
  }
  .van-tabs__line {
    border-radius: 1px;
    width: 16px;
  }
}
.van-dialog__message--has-title{
  color: #7F828F;
}
.van-dialog__header{
  color: #080D21;
  font-size: 18px;
  font-weight: 500;
}
.popBox div {
  margin-bottom: 10px;
  text-align: left;
  line-height: 1.5;
}
.van-notice-bar{
  font-size: 12px;
  line-height: 15px;
  padding: 6px 8px 6px 10px;
  i{
    display: inline-block;
    margin-right: 5px;
    img{
      width: 16px;
      height: 16px;
    }
  }
}
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
      font-weight: 500;
    }
  }
}
.theme-dark {
  .trading-wrap-status {
    .setBorder {
      border-bottom: 2.1px solid $theme-dark-textPrimary0;
      font-weight: 500;
    }
  }
}
</style>
