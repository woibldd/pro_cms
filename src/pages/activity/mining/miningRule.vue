<template>
  <div class="mining-rule">
    <div class="mining-rule-title-one">{{$t('mining.ruleTitle')}}</div>
    <div class="mining-rule-content">
      {{$t('mining.ruleContent')}}
    </div>
    <div class="mining-rule-title-one setM">{{$t('mining.how')}}</div>
    <div class="mining-rule-title" v-html="$t('mining.how1')"></div>
    <div class="mining-rule-title">{{$t('mining.how2')}}</div>
    <div class="mining-rule-content">
      {{$t('mining.howContent')}}
    </div>
    <ul class="mining-rule-content-ul">
      <li class="mining-rule-content-li">{{$t('mining.Objectives1')}}</li>
      <li class="mining-rule-content-li">{{$t('mining.Objectives2')}}</li>
      <li class="mining-rule-content-li">{{$t('mining.Objectives3')}}</li>
    </ul>
    <div class="mining-rule-title-one"> {{$t('mining.how3')}}</div>
    <div class="mining-rule-content">
      {{$t('mining.OverviewContent')}}
    </div>
    <div class="mining-rule-title-one"> {{$t('mining.how4')}}</div>
    <div class="mining-rule-content">
      {{$t('mining.how4Content')}}
    </div>
    <div class="mining-rule-title-one"> {{$t('mining.how5')}}</div>
    <div class="mining-rule-content">
      {{$t('mining.how5Content')}}
    </div>
    <div class="mining-rule-title-one"> {{$t('mining.how6')}}</div>
    <div class="mining-rule-content">
      {{$t('mining.how6Content')}}
    </div>
    <div class="mining-rule-faq">
      <div class="mining-rule-title-one setM"> {{$t('mining.FQATitle')}}</div>
      <p class="mining-rule-title setC">
        {{$t('mining.FQATitle1')}}
      </p>
      <div class="mining-rule-content">
        {{$t('mining.howContent')}}
      </div>
      <ul class="mining-rule-content-ul">
        <li class="mining-rule-content-li">{{$t('mining.Objectives1')}}</li>
        <li class="mining-rule-content-li">{{$t('mining.Objectives2')}}</li>
        <li class="mining-rule-content-li">{{$t('mining.Objectives3')}}</li>
      </ul>
      <div class="mining-rule-content">
        {{$t('mining.FQAContent1')}}
      </div>
      <p class="mining-rule-title setC">
        {{$t('mining.FQATitle2')}}
      </p>
      <p class="mining-rule-content">
        {{$t('mining.FQAContent2')}}
      </p>
      <p class="mining-rule-title setC">
        {{$t('mining.FQATitle3')}}
      </p>
      <p class="mining-rule-content">
        {{$t('mining.FQAContent3')}}
      </p>
      <p class="mining-rule-title setC">
        {{$t('mining.FQATitle4')}}
      </p>
      <p class="mining-rule-content">
        {{$t('mining.FQAContent4')}}
      </p>
      <p class="mining-rule-title setC">
        {{$t('mining.FQATitle5')}}
      </p>
      <p class="mining-rule-content">
        {{$t('mining.FQAContent5')}}
      </p>
      <p class="mining-rule-title setC">
        {{$t('mining.FQATitle6')}}
      </p>
      <p class="mining-rule-content">
        {{$t('mining.FQAContent6')}}
      </p>
      <ul class="mining-rule-content-ul">
        <li class="mining-rule-content-li">{{$t('mining.FQAContent61')}}</li>
        <li class="mining-rule-content-li">{{$t('mining.FQAContent62')}}</li>
        <li class="mining-rule-content-li">{{$t('mining.FQAContent63')}}</li>
        <li class="mining-rule-content-li">{{$t('mining.FQAContent64')}}</li>
        <li class="mining-rule-content-li">{{$t('mining.FQAContent65')}}</li>
        <li class="mining-rule-content-li">{{$t('mining.FQAContent66')}}</li>
        <li class="mining-rule-content-li">{{$t('mining.FQAContent67')}}</li>
        <li class="mining-rule-content-li">{{$t('mining.FQAContent68')}}</li>
      </ul>
      <p class="mining-rule-content">
        {{$t('mining.FQAContentNote')}}
      </p>
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
  created() {
    this.isBitKeep && BitKeepInvoke.onLoadReady(() => {
      BitKeepInvoke.setTitle(this.$t("mining.miningRuleTitle"));
      BitKeepInvoke.setIconAction();
    });
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
  padding: 16px;
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
    line-height: 28px;
  }
  .mining-rule-content {
    font-size: 14px;
    line-height: 22px;
    margin-top: 8px;
  }
  .mining-rule-title-flex {
    display: flex;
    justify-content: space-between;
  }
}
</style>