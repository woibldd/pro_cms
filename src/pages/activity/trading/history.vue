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
      @refresh="historyPhase"
    >
    <div class="hisory-wrap-box colorBackground1">
      <div class="hisory-wrap-box-text">
        <div class="textSecond2">{{$t('trading.transaction')}}</div>
        <div class="textPrimary0">$8,125,250.87</div>
      </div>
      <div class="hisory-wrap-box-text">
        <div class="textSecond2">{{$t('trading.GetsBKB')}}</div>
        <div class="textPrimary0">3,750.8704</div>
      </div>
    </div>
    <div class="history-wrap-one">
      <tradingCom :tradingList = 'historyList' :finished='true'></tradingCom>
    </div>
    </van-pull-refresh>
  </div>
</template>
<script>
import { USER_API } from "@/api/client";
import { mapState } from "vuex";
import trading from '@/components/trading';
export default {
  data() {
    return {
      historyList: [
        {},{},{}
      ],
      refreshLoading: false,
      isLoading: true,
    };
  },
  components: {
    tradingCom: trading
  },
  computed: {
    ...mapState(["local"]),
    isBitKeep() {
      return this.local.UA.isBitKeep;
    },
  },
  beforeMount() {
    
  },
  mounted() {
    this.isBitKeep &&
      BitKeepInvoke.onLoadReady(() => {
        BitKeepInvoke.setTitle(this.$t("mining.historyTitle"));
        BitKeepInvoke.setIconAction('');
        BitKeepInvoke.appMode((err, res) => {
        let body = document.getElementsByTagName("body")[0];
        if (res == 1) {
          body.setAttribute("class", "theme-dark");
        } else {
          body.setAttribute("class", "theme-light");
        }
      });
    });
    this.historyPhase();
  },
  methods: {
    async historyPhase() {
      const { data, status } = await USER_API.historyPhase();
      if (status == 1) {
        this.isLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("trading.know"),
          confirmButtonColor: "#495BFF",
        });
      }
      this.historyList = data;
      this.isLoading = false;
      this.refreshLoading = false;
    },
  },
};
</script>
<style scoped lang='scss'>
@import "@/assets/css/theme.scss";
.hisory-wrap {
  min-height: 100vh;
  padding: 10px 16px 15px;
  .hisory-wrap-box{
    display: flex;
    justify-content: space-between;
    padding: 15px 34px;
    border-radius: 8px;
    text-align: center;
    .hisory-wrap-box-text{
      :first-child{
        font-size: 12px;
      }
      :last-child{
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
