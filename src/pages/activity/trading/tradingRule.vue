<template>
  <div class="mining-rule">
    <div class="mining-rule-title-one">{{$t('trading.ruleTitle')}}</div>
    <div class="mining-rule-content" v-html="$t('trading.ruleContent')"></div>
    <div class="mining-rule-title-one setM">{{$t('trading.how')}}</div>
    <div class="mining-rule-title">{{$t('trading.how1')}}<span style="color: #7524f9" @click="openUrl"> https://www.youtube.com</span>{{$t('trading.how11')}}</div>
    <div class="mining-rule-title">{{$t('trading.how2')}}</div>
    <div class="mining-rule-content">
      {{$t('trading.howContent')}}
    </div>
    <div class="mining-rule-content" v-html="$t('trading.howContent1')"></div>
    <div class="mining-rule-content" v-html="$t('trading.Objectives1')"></div>
    <!-- <ul class="mining-rule-content-ul">
      <li class="mining-rule-content-li">{{$t('trading.Objectives1')}}</li>
    </ul> -->
    <div class="mining-rule-title"> {{$t('trading.how3')}}</div>
    <div class="mining-rule-content">
      {{$t('trading.OverviewContent')}}
    </div>
    <div class="mining-rule-title"> {{$t('trading.how4')}}</div>
    <div class="mining-rule-content">
      {{$t('trading.OverviewContent4')}}
    </div>
    <div class="mining-rule-title"> {{$t('trading.how5')}}</div>
    <div class="mining-rule-content">
      {{$t('trading.OverviewContent5')}}
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["local"]),
    isBitKeep() {
      return this.local.UA.isBitKeep;
    },
  },
  beforeMount() {
    this.isBitKeep && BitKeepInvoke.onLoadReady(() => {
      BitKeepInvoke.setTitle(this.$t("trading.tradingRule"));
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
  },
  methods: {
    openUrl(){
      BitKeepInvoke.openUrl('https://www.youtube.com/watch?v=_5expUiioV8')
    }
  }
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/theme.scss";
.theme-light{
  .mining-rule{
    background: $theme-light-colorBackground0;
  }
  .mining-rule-title-one {
    color: $theme-light-textPrimary0;
  }
  .mining-rule-title{
    color: $theme-light-textPrimary0;
  }
  .setC{
    color: $theme-light-textPrimary0;
  }
  .setM{
    border-top: 1px solid $theme-light-colorLine;

  }
  .mining-rule-content-li{
    color: $theme-light-textSecond1;

  }
  .mining-rule-content{
    color: $theme-light-textSecond1;

  }
}
.theme-dark{
  .mining-rule{
    background: $theme-dark-colorBackground0;
  }
  .mining-rule-title-one {
    color: $theme-dark-textPrimary0;
  }
  .mining-rule-title{
    color: $theme-dark-textPrimary0;
  }
  .setC{
    color: $theme-dark-textPrimary0;
  }
  .setM{
    border-top: 1px solid $theme-dark-colorLine;

  }
  .mining-rule-content-li{
    color: $theme-dark-textSecond1;

  }
  .mining-rule-content{
    color: $theme-dark-textSecond1;

  }
}
.mining-rule {
  padding: 16px 16px 30px;
  .mining-rule-title-one {
    font-size: 18px;
    font-weight: 700;
    line-height: 36px;
  }
  .mining-rule-title {
    font-weight: 500;
    font-size: 16px;
    margin: 16px 0;
  }
  .setM{
    margin-top: 20px;
    padding-top: 20px;
    width: 100%;
  }
  
  .mining-rule-content-ul{
    margin-left: 30px;
  }
  .mining-rule-content-li {
    list-style: disc;
    font-size: 14px;
    line-height: 20px;
    list-style: none;
  }
  .mining-rule-content {
    font-size: 14px;
    line-height: 20px;
    margin-top: 8px;
  }
  .mining-rule-title-flex {
    display: flex;
    justify-content: space-between;
  }
}
</style>