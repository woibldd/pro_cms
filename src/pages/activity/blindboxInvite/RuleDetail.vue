<template>
  <van-popup v-model="visables" closeable
             :close-icon="closeIcon" round position="bottom" @click-overlay="close" 
             @click-close-icon="close" class="colorBackground1" :style="{ height: '50%', overflow: 'hidden' }">
    <div class="title">
      <p class="textPrimary0">{{$t('blindboxInvite.RuleTitle')}}</p>
    </div>
    <div class="line colorLine"></div>
    <ul class="ruleDetailcontent">
      <li class="textPrimary0 setF">{{$t('blindboxInvite.inviteRuleTitle')}}</li>
      <li class="textSecond1 setLineHeight" v-html="$t('blindboxInvite.ruleDetail')"></li>
      <li class="textSecond1 setLineHeight" v-html="$t('blindboxInvite.ruleDetail1')"></li>
      <li class="textSecond1">{{$t('blindboxInvite.ruleDetail2')}}</li>
    </ul>
  </van-popup>
</template>
<script>

export default {
  data() {
    return {
      visables: this.ruleDetailFlag,
      closeIcon: 'http://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png'
    };
  },
  watch: {
    ruleDetailFlag(n){
      this.visables = n;
    },
    theme(n){
      if(n==1){
        this.closeIcon = 'http://cdn.bitkeep.vip/u_b_d71e28c0-4c2d-11ec-ad04-d1b66ed0d35e.png';
      }else{
        this.closeIcon = 'http://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png';
      }  
    }
  },
  props: ['ruleDetailFlag','theme'],
  methods: {
    close(){
      this.$emit('close', false);
    }
  }
};
</script>
<style lang="scss">
.van-popup__close-icon--top-right{
  top:10px;
  right: 9px;
  img{
    width: 28px;
    height: 28px;
  }
}
.theme-dark{
  .van-toast{
    background-color: #DFE0E3;
    color: #171A26;
  }
}

</style>
<style scoped lang='scss'>
@import "@/assets/css/theme.scss";
.title{
  margin: 14px 16px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  p{
    font-weight: 600;
  }
}
.setOpactive{
  opacity: 0.3;
}
.line{
  width: 100%;
  margin-top: 0;
  height: 1px;
}
.ruleDetailcontent{
  height: 50vh;
  overflow: auto;
  padding: 20px;
  img{
    width: 48px;
    height: 48px;
  }
  .setF{
    font-size: 16px;
  }
  .setLineHeight{
    line-height: 18px;
  }
  p{
    // font-family: bitkeep DIN;
    font-size: 14px;
    line-height: 18px;
    margin: 10px;
  }
  li{
    list-style: disc;
    font-size: 14px;
    line-height: 18px;
    margin: 10px;
  }
}
 .confirm-bottom {
    height: 48px;
    width: 100%;
    bottom: 0;
    z-index: 99;
    position: fixed;
    padding: 11px 0 34px;
    .swap-btn {
      height: 50px;
      border-radius: 10px;
      text-align: center;
      line-height: 44px;
      border: none;
      font-weight: 500;
      font-size: 16px;
      width: 300px;
      left: 50%;
      color: #fff;
      transform: translateX(-50%);
      z-index: 0;
    }
  }
</style>