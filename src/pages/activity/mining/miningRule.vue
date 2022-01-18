<template>
  <div class="mining-rule">
    <div class="mining-rule-title-one">{{$t('mining.ruleTitle')}}</div>
    <div class="mining-rule-content">
      {{$t('mining.ruleContent')}}
    </div>
    <div class="mining-rule-title-one setM">{{$t('mining.how')}}</div>
    <div class="mining-rule-title">{{$t('mining.how1')}}<span style="color: #495BFF" @click="openUrl"> https://www.youtube.com</span>{{$t('mining.how11')}}</div>
    <div class="mining-rule-title">{{$t('mining.how2')}}</div>
    <div class="mining-rule-content">
      {{$t('mining.howContent')}}
    </div>
    <div class="mining-rule-content" v-html="$t('mining.howContent1')">    </div>
    <ul class="mining-rule-content-ul">
      <li class="mining-rule-content-li">{{$t('mining.Objectives1')}}</li>
      <li class="mining-rule-content-li">{{$t('mining.Objectives2')}}</li>
      <li class="mining-rule-content-li">{{$t('mining.Objectives3')}}</li>
      <li class="mining-rule-content-li">{{$t('mining.Objectives4')}}</li>
    </ul>
    <div class="mining-rule-content" v-html="$t('mining.howContent2')">    </div>
    <ul class="mining-rule-content-ul">
      <li class="mining-rule-content-li">{{$t('mining.Objectives11')}}</li>
      <li class="mining-rule-content-li">{{$t('mining.Objectives12')}}</li>
      <li class="mining-rule-content-li">{{$t('mining.Objectives13')}}</li>
    </ul>
    <div class="mining-rule-title"> {{$t('mining.how3')}}</div>
    <div class="mining-rule-content">
      {{$t('mining.OverviewContent')}}
    </div>
    <div class="mining-rule-faq">
      <div class="mining-rule-title-one setM"> {{$t('mining.FQATitle')}}</div>
      <p class="mining-rule-title setC">
        {{$t('mining.FQATitle1')}}
      </p>
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
      <ul class="mining-rule-content-ul">
        <li class="mining-rule-content-li">{{$t('mining.FQAContent51')}}</li>
        <li class="mining-rule-content-li">{{$t('mining.FQAContent52')}}</li>
        <li class="mining-rule-content-li">{{$t('mining.FQAContent53')}}</li>
        <li class="mining-rule-content-li">{{$t('mining.FQAContent54')}}</li>
      </ul>
      <p class="mining-rule-content">
        {{$t('mining.FQAContentNote')}}
      </p>
      <p class="mining-rule-title setC">
        {{$t('mining.FQATitle6')}}
      </p>
      <p class="mining-rule-content">
        {{$t('mining.FQAContent6')}}
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
  beforeMount() {
    this.isBitKeep && BitKeepInvoke.onLoadReady(() => {
      BitKeepInvoke.setTitle(this.$t("mining.miningRuleTitle"));
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
    line-height: 20px;
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