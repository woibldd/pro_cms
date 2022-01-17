<template>
  <div class="hisory-wrap colorBackground0">
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
      style="min-height:100vh"
    >
    <van-list
        v-model="loading"
        :finished="finished"
        :immediate-check="false"
        :loading-text="$t('mining.loading')"
        :finished-text="$t('base.nomore')"
        @load="onLoadList"
      >
      <div class="hisory-wrap-box colorBackground1">
        <div class="hisory-wrap-box-text">
          <div class="textSecond2">{{ $t("trading.transaction") }}</div>
          <div class="textPrimary0 setFontFamily">${{milliFormat(tradingSummarys.totalTradingVolume)}}</div>
        </div>
        <div class="hisory-wrap-box-text">
          <div class="textSecond2">{{ $t("trading.GetsBKB") }}</div>
          <div class="textPrimary0 setFontFamily">{{milliFormat(tradingSummarys.totalReward)}}</div>
        </div>
      </div>
      <div class="history-wrap-one">
        <tradingCom :tradingList="historyList" :finished="true"></tradingCom>
      </div>
    </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import { USER_API } from "@/api/client";
import { mapState } from "vuex";
import trading from "@/components/trading";
export default {
  data() {
    return {
      historyList: [],
      refreshLoading: false,
      start: 1,
      isLoading: true,
      loading: false,
      tradingSummarys: {
        totalReward: 0,
        totalTradingVolume: 0
      },
    };
  },
  components: {
    tradingCom: trading,
  },
  computed: {
    ...mapState(["local"]),
    isBitKeep() {
      return this.local.UA.isBitKeep;
    },
  },
  mounted() {
    this.isBitKeep &&
      BitKeepInvoke.onLoadReady(() => {
        BitKeepInvoke.setTitle(this.$t("mining.historyTitle"));
        BitKeepInvoke.setIconAction("");
        BitKeepInvoke.appMode((err, res) => {
          let body = document.getElementsByTagName("body")[0];
          if (res == 1) {
            body.setAttribute("class", "theme-dark");
          } else {
            body.setAttribute("class", "theme-light");
          }
        });
      });
    this.getHistoryList();
    this.getTradingSummary();
  },
  methods: {
    async getHistoryList() {
      const { data, status } = await USER_API.tradingHistory({
        start: this.start,
        limit: 20
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
        this.historyList = [];
        this.historyList = moreList;
      }else{
        this.historyList.push(...moreList);
      }
      this.refreshLoading = false;
      this.loading = false;
      this.isLoading = false;
      this.$toast.clear();
      if (this.historyList.length >= data.totalRows) {
        this.finished = true;
      }
    },
    // 上拉加载请求方法
    onLoadList() {
      this.start++;
      this.finished = false;
      this.getHistoryList();
    },
    onDownRefresh() {
      this.start = 1;
      this.getHistoryList();
    },
    async getTradingSummary() {
      const { data, status } = await USER_API.tradingSummary();
      if (status == 1) {
        this.isLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("trading.know"),
          confirmButtonColor: "#495BFF",
        });
      }
      this.tradingSummarys = data;
    },
    milliFormat(num) {
      return (
        num &&
        num
          .toString()
          .replace(/^\d+/g, (m) => m.replace(/(?=(?!^)(\d{3})+$)/g, ","))
      );
    },
  },
};
</script>
<style scoped lang='scss'>
@import "@/assets/css/theme.scss";
.hisory-wrap {
  min-height: 100vh;
  padding: 10px 16px 15px;
  .hisory-wrap-box {
    display: flex;
    justify-content: space-between;
    padding: 15px 34px;
    border-radius: 8px;
    text-align: center;
    .hisory-wrap-box-text {
      :first-child {
        font-size: 12px;
      }
      :last-child {
        font-size: 16px;
      }
    }
  }
}
.loading {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
