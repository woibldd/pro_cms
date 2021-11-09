<template>
  <div class="mining-rule">
    <div class="mining-rule-title-one">{{$t('mining.ruleTitle')}}</div>
    <div class="mining-rule-content-oneTitle">
      {{$t('mining.ruleContent')}}
    </div>
    <div class="mining-rule-content-one">
      {{$t('mining.ruleRewards')}}
    </div>
    <div class="mining-rule-title">{{$t('mining.ObjectivesTitle')}}</div>
    <ul class="mining-rule-content-ul">
      <li class="mining-rule-content-li">{{$t('mining.Objectives1')}}</li>
      <li class="mining-rule-content-li">{{$t('mining.Objectives2')}}</li>
    </ul>
    <div class="mining-rule-title-flex">
      <div class="mining-rule-title-one setM"> {{$t('mining.OverviewTitle')}}</div>
    </div>
    <div class="mining-rule-content">
      {{$t('mining.OverviewContent')}}
    </div>
    <div class="mining-rule-faq">
      <div class="mining-rule-title-one setM"> {{$t('mining.FQATitle')}}</div>
      <p class="mining-rule-faq-title setC">
        {{$t('mining.FQATitle1')}}
      </p>
      <p class="mining-rule-faq-content">
        {{$t('mining.FQAContent1')}}
       
      </p>
      <p class="mining-rule-faq-title setC">
        {{$t('mining.FQATitle2')}}
      </p>
      <p class="mining-rule-faq-content">
        {{$t('mining.FQAContent2')}}
        
      </p>
      <p class="mining-rule-faq-title setC">
        {{$t('mining.FQATitle3')}}
      </p>
      <p class="mining-rule-faq-content">
        {{$t('mining.FQAContent3')}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    // BitKeepInvoke.onLoadReady(() => {
      // BitKeepInvoke.setTitle(this.$t("mining.miningRuleTitle", { v: this.phase }));
    //   BitKeepInvoke.setIconAction();
    // });
  },
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
  .mining-rule-content-oneTitle {
    color: $theme-light-textSecond3;
    border-bottom: 1px solid $theme-light-colorLine;
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
  .mining-rule-content-one{
    color: $theme-light-textSecond1;

  }
  .mining-rule-content{
    color: $theme-light-textSecond1;

  }
  .mining-rule-faq-content{
    color: $theme-light-textSecond3;

  }
}
.theme-dark{
  .mining-rule{
    background: $theme-dark-colorBackground0;
  }
  .mining-rule-title-one {
    color: $theme-dark-textPrimary0;
  }
  .mining-rule-content-oneTitle {
    color: $theme-dark-textSecond3;
    border-bottom: 1px solid $theme-dark-colorLine;
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
  .mining-rule-content-one{
    color: $theme-dark-textSecond1;

  }
  .mining-rule-content{
    color: $theme-dark-textSecond1;

  }
  .mining-rule-faq-content{
    color: $theme-dark-textSecond3;

  }
}
.mining-rule {
  padding: 16px;
  .mining-rule-title-one {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
  }
  .mining-rule-content-oneTitle {
    font-size: 16px;
    line-height: 24px;
    padding: 16px 0;
  }
  .mining-rule-title {
    font-weight: 500;
    font-size: 18px;
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
    font-size: 16px;
    line-height: 28px;
  }
  .mining-rule-content-one {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-top: 16px;
  }
  .mining-rule-content {
    font-size: 16px;
    line-height: 22px;
    margin-top: 16px;
  }
  .mining-rule-title-flex {
    display: flex;
    justify-content: space-between;
  }
  .mining-rule-faq-title {
    font-size: 16px;
  }
  .mining-rule-faq-content {
    font-size: 16px;
  }
}
</style>