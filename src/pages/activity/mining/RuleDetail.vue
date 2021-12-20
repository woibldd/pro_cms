<template>
  <van-popup v-model="visables" closeable
             :close-icon="closeIcon" round position="bottom" @click-overlay="close" 
             @click-close-icon="close" class="colorBackground1" :style="{ height: '60%', overflow: 'hidden' }">
    <div class="title">
      <p class="textPrimary0">{{$t('mining.miningRuleTitle')}}</p>
    </div>
    <div class="line colorLine"></div>
    <div class="ruleDetailcontent">
      <p class="textPrimary0 setF">{{$t('mining.ruleDetail')}}</p>
      <p class="textSecond1 setLineHeight" v-html="$t('mining.ruleDetail1')"></p>
      <p class="textSecond1">{{$t('mining.ruleDetail2')}}</p>
    </div>
  </van-popup>
</template>
<script>

export default {
  data() {
    return {
      visables: this.ruleDetailFlag,
      closeIcon: 'https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png'
    };
  },
  watch: {
    ruleDetailFlag(n){
      this.visables = n;
    },
    theme(n){
      if(n==1){
        this.closeIcon = 'https://cdn.bitkeep.vip/u_b_d71e28c0-4c2d-11ec-ad04-d1b66ed0d35e.png';
      }else{
        this.closeIcon = 'https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png';
      }  
    }
  },
  props: ['ruleDetailFlag','theme'],
  methods: {
    close(){
      this.$emit('ruleDetailClose', false);
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
    line-height: 22px;
    margin:0 0 10px;
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