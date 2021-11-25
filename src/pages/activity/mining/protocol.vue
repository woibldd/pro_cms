<template>
  <van-popup v-model="visables" closeable
             :close-icon="closeIcon" round position="bottom" @click-overlay="close" 
             @click-close-icon="close" class="colorBackground1" :style="{ height: '45%', overflow: 'hidden' }">
    <div class="title">
      <p class="textPrimary0">{{$t('mining.ClaimRewards')}}</p>
    </div>
    <div class="line colorLine"></div>
    <div class="content">
      <img src="http://cdn.bitkeep.vip/u_b_7d8ec4f0-4b78-11ec-9826-e3fc5958ff1e.png" class="logo" alt="">
      <p class="textPrimary0">{{unclaimReward}} BKB</p>
    </div>
    <div class="confirm-bottom">
      <van-button class="swap-btn colorBackgroundPrimary" :class="unclaimReward==0? 'setOpactive' : ''" @click="swapConfirm">{{
            $t("mining.confirm")
          }}</van-button>
    </div>
  </van-popup>
</template>
<script>
import { debounce } from "@/tools/common";
import { USER_API } from "@/api/client";

export default {
  data() {
    return {
      addAllContent: "",
      visables: this.show,
      closeIcon: 'http://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png'
    };
  },
  watch: {
    show(n){
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
  props: ['show', 'theme', 'unclaimReward'],
  methods: {
    swapConfirm: debounce(async function () {
      if(this.unclaimReward== 0) return 
      const { data, status } = await USER_API.receiveAward();
      if (status == 1) {
        this.close();
        return this.$toast(data);
      }
      this.$toast(data);
      this.$emit('close', true);
    }),
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
}
.setOpactive{
  opacity: 0.3;
}
.line{
  width: 100%;
  margin-top: 0;
  height: 1px;
}
.content{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60%;
  overflow: auto;
  img{
    width: 48px;
    height: 48px;
  }
  p{
    font-family: bitkeep DIN;
    font-size: 24px;
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