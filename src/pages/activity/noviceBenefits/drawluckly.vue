<template>
<div class="drawluckly">
    <div class="drawluckly-topbanner">
      <span class="drawluckly-topbanner-time">2022.10.20</span>
      <span  class="drawluckly-topbanner-text">
        {{$t('noviceBenefits.Winaraffle')}} {{RewardDetail.thisRewardPool || 0}} BKB
      </span>
    </div>

    <div class="drawluckly-Coupons">
      <div class="drawluckly-Coupons-item">
        <p>{{$t('noviceBenefits.rafflepapers')}}</p>
        <p>{{RewardDetail.allPapersIn || 0}}</p>
      </div>
      <div class="drawluckly-Coupons-item" style="marginLeft:50px;">
        <p>{{$t('noviceBenefits.merafflepapers')}}</p>
        <p>{{RewardDetail.mePapersIn || 0}}</p>
      </div>
    </div>

    <div class="drawluckly-CouponsNums">
      <p class="drawluckly-CouponsNums-title">
        <span>{{$t('noviceBenefits.raffletickets')}}</span>
        <span>{{$t('noviceBenefits.available')}}: <span class="colorBlue">{{RewardDetail.mePapersKeep || 0}}</span></span>
      </p>
      <div class="drawluckly-CouponsNums-inp">
       <van-field v-model="CouponsNums" type="number" :placeholder="$t('noviceBenefits.Pleaseenter')"/>
       <p class="drawluckly-CouponsNums-all" @click="allin()">All in</p>
      </div>
    </div>

    <div class="drawluckly-Award" v-if="!!RewardDetail.whoGotReward">
      <p>{{$t('noviceBenefits.usersyesterday')}}</p>
      <div class="drawluckly-Award-user">
        <p>{{RewardDetail.whoGotReward}}</p>
        <p>+{{RewardDetail.whoGotRewardPool}} BKB</p>
      </div>
    </div>

    <div class="drawluckly-rule">
      <p class="drawluckly-rule-title">{{$t('noviceBenefits.Activityrules')}}</p>
      <ul class="drawluckly-rule-content">
        <li>1.{{$t('noviceBenefits.Dailyreward')}}</li>
        <li>2.{{$t('noviceBenefits.morelottery')}}</li>
        <li>3.{{$t('noviceBenefits.luckydraw')}}</li>
      </ul>
      <div class="drawluckly-rule-bottom">*{{$t('noviceBenefits.notes')}} </div>
    </div>

    <div class="drawluckly-btnbox">
       <van-button :class="Number(CouponsNums) > 0 ? 'ondrawluckly-btn' : 'drawluckly-btn'" @click="pushPapersIn()">{{$t('noviceBenefits.Immediateinput')}}</van-button>
    </div>
    </div>
</template>
<script>
import { USER_API } from "@/api/client";
import { mapState } from "vuex";
export default {
  name: "Novicebenefits",
  data() {
    return {
      isLoading: true,
      CouponsNums:'',
      RewardDetail:{
        allPapersIn: 0,
        mePapersIn: 0,
        mePapersKeep: 0,
        thisRewardPool: 0,
        whoGotReward: "",
        whoGotRewardPool: 0,
        }
    };
  },
  computed: {
    ...mapState(["local"]),
    locale() {
      return this.local.locale;
    },
    isBitKeep() {
      return this.local.UA.isBitKeep;
    },
  },
  components: {
  },
  
  mounted() {
    this.getInfo();
    this.setIcon();
    this.getRewardDetail();
  },
  methods: {
    async pushPapersIn(){
      if(Number(this.CouponsNums) <= 0){
        return;
      }
      const { data, status } = await USER_API.pushPapersIn();
      if(data === true){
        this.getRewardDetail();
        this.CouponsNums = 0;
      }else{
        this.$toast('投入失败');
      }
    },
    allin(){
      this.CouponsNums = this.RewardDetail.mePapersKeep;
    },
    async getRewardDetail (){
      const { data, status } = await USER_API.getRewardDetail();
      if(data){
        this.RewardDetail = data;
      }
    },
    // 获取信息
    async getInfo() {
      const { data, status } = await USER_API.miningInfo();
      if (status == 1) {
        this.isLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("CbkbExchange.know"),
          confirmButtonColor: "$theme-light-colorPrimary",
        });
      }
      this.isLoading = false;
    },
    setIcon(){
      // window.addEventListener("load", () => {
        this.isBitKeep &&
          BitKeepInvoke.onLoadReady(() => {
            BitKeepInvoke.setTitle(
              this.$t('noviceBenefits.Dailyluckydraw')
            );
          //设置主题
            this.$nextTick(() => {
              BitKeepInvoke.appMode((err, res) => {
                let body = document.getElementsByTagName("body")[0];
                if (res == 1) {
                  this.theme = 1;
                  this.question = 'https://cdn.bitkeep.vip/u_b_47485390-4f90-11ec-ace3-97579b99c357.png';
                  body.setAttribute("class", "theme-dark");
                  setTimeout(()=>{
                    BitKeepInvoke.setIconAction(
                    "https://cdn.bitkeep.vip/u_b_09035ca0-4dd9-11ec-a555-07d5354e6fab.png",
                    ()=>{
                      this.$router.push("/activity/noviceBenefits/lotteryresults")
                    });
                  },500)
                } else {
                  this.theme = 0;
                  this.question = 'https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png';
                  body.setAttribute("class", "theme-light");
                  setTimeout(()=>{
                    BitKeepInvoke.setIconAction(
                    "https://cdn.bitkeep.vip/u_b_2bb4fa20-3b86-11ec-8e63-1db435df936c.png",
                    ()=>{
                      this.$router.push("/activity/noviceBenefits/lotteryresults")
                    });
                  },500)
                }
              });
          })
        });
      // });
    },
  },
};
</script>
<style lang="scss">
p{
  padding: 0;
  margin: 0;
}
.drawluckly-topbanner{
    width: 100%;
    height: 140px;
    background-image: url(https://cdn.bitkeep.vip/u_b_f8a2c6a0-72bf-11ec-9c27-5bf3ec58d767.png);
    background-size:100%;
    position: relative;
    .drawluckly-topbanner-time{
      position: absolute;
      top: 10px;
      left: 16px;
      color: #000000;
      font-size: 12px;
    }
    .drawluckly-topbanner-text{
      display: inline-block;
      width: 130px;
      position: absolute;
      bottom: 10px;
      left: 16px;
      color: #080D21;
      font-size: 28px;
    }
}
.drawluckly-Coupons{
  display: flex;
  padding: 40px 0 30px 16px;
  .drawluckly-Coupons-item{
    p:nth-child(1){
      color: #7F828F;
      font-size: 14px;
      line-height: 14px;
    }
    p:nth-child(2){
      color: #080D21;
      font-size: 16px;
      line-height: 16px;
      padding-top: 5px;
    }
  }
}
.drawluckly-CouponsNums{
  padding: 0 16px 30px 16px;
  .drawluckly-CouponsNums-title{
    display: flex;
    justify-content: space-between;
    color: #080D21;
    font-size: 14px;
    line-height: 14px;
  }
}
.drawluckly-CouponsNums-inp{
  margin-top: 10px;
  width: 100%;
  height: 50px;
  border: 1px solid #F0F0F0;
  border-radius: 8px;
  display: flex;
  .drawluckly-CouponsNums-all{
    width: 68px;
    margin: 16px 0 16px 16px;
    border-left: 1px solid #F0F0F0;
    text-align: center;
    color: #495BFF;
    font-size: 14px;
    line-height: 18px;
  }
  .van-cell {
    margin: 16px 0 16px 15px;
    padding: 0;
    &::after{
      border-bottom: none;
    }
  }
}
.drawluckly-Award{
  padding: 0 15px;
  color: #080D21;
  font-size: 14px;
  line-height: 14px;
  .drawluckly-Award-user{
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }
}

.drawluckly-rule{
  height: 207px;
  margin: 30px 16px 20px 16px;
  background: #F8F9FA;
  border-radius: 8px;
  padding: 15px;
  .drawluckly-rule-title{
    color: #080D21;
    font-size: 14px;
    font-weight: 600;
  }
  .drawluckly-rule-content{
    margin-top: 15px;
    color:  #7F828F;
    font-size: 14px;
    line-height: 20px;
  }
  .drawluckly-rule-bottom{
    color:    #9CA5B3;
    margin-top: 15px;
    font-size: 12px;
  }
}
.drawluckly-btnbox{
  height: 95px;
  border-top:1px solid #F4F5FA;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  .drawluckly-btn{
    width: 303px;
    height: 50px;
    background: #495BFF;
    opacity: 0.3;
    border-radius: 10px;
    color: #ffffff;
    font-size: 16px;
    margin-top: 10px;
  }
  .ondrawluckly-btn{
    width: 303px;
    height: 50px;
    background: #495BFF;
    border-radius: 10px;
    color: #ffffff;
    font-size: 16px;
    margin-top: 10px;
  }
}
.colorBlue{
    color: #495BFF;
}
</style>
