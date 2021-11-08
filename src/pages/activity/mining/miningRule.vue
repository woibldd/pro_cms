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
.mining-rule {
  padding: 16px;
  .mining-rule-title-one {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    color: #080D21;
  }
  .mining-rule-content-oneTitle {
    color: #9CA5B3;;
    font-size: 16px;
    line-height: 24px;
    padding: 16px 0;
    border-bottom: 1px solid #F4F5FA;
  }
  .mining-rule-title {
    font-weight: 500;
    font-size: 18px;
    color: #080D21;
    margin: 16px 0;
  }
  .setM{
    margin-top: 20px;
    padding-top: 20px;
    width: 100%;
    border-top: 1px solid #F4F5FA;
  }
  .setC{
    color: #080D21;
  }
  .mining-rule-content-ul{
    margin-left: 30px;
  }
  .mining-rule-content-li {
    list-style: disc;
    color: #4B5373;
    font-size: 16px;
    line-height: 28px;
  }
  .mining-rule-content-one {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-top: 16px;
    color: #4B5373;
  }
  .mining-rule-content {
    font-size: 16px;
    line-height: 22px;
    color: #4b5373;
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
    color: #9CA5B3;
  }
}
</style>