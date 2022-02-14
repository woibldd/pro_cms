<template>
  <div class="drawluckly colorBackground1">
     <div class="drawluckly-box" :style="{'height':documentHeight + 'px'}">
      <div class="drawluckly-topbanner">
        <span class="drawluckly-topbanner-time colorBlack">2022.01.28</span>
        <span  class="drawluckly-topbanner-text colorBlack">
          {{$t('noviceBenefits.Winaraffle')}} {{RewardDetail.thisRewardPool || 0}} BKB
        </span>
      </div>

      <div class="drawluckly-Coupons">
        <div class="drawluckly-Coupons-item">
          <p class="textSecond2">{{$t('noviceBenefits.rafflepapers')}}</p>
          <p class="textPrimary0 setFontFamily">{{RewardDetail.allPapersIn || 0}}</p>
        </div>
        <div class="drawluckly-Coupons-item">
          <p class="textSecond2">{{$t('noviceBenefits.merafflepapers')}}</p>
          <p class="textPrimary0 setFontFamily">{{RewardDetail.mePapersIn || 0}}</p>
        </div>
      </div>

      <div class="drawluckly-CouponsNums">
        <p class="drawluckly-CouponsNums-title">
          <span class="textPrimary0">{{$t('noviceBenefits.raffletickets')}}</span>
          <span class="textPrimary0">{{$t('noviceBenefits.available')}}: <i class="colorPrimary setFontFamily drawluckly-CouponsNums-title-number">{{RewardDetail.mePapersKeep || 0}}</i></span>
        </p>
        <div class="drawluckly-CouponsNums-inp">
        <van-field v-model="CouponsNums" type="number" :placeholder="$t('noviceBenefits.Pleaseenter')"/>
        <p class="drawluckly-CouponsNums-all colorPrimary " @click="allin()">All in</p>
        </div>
      </div>

      <div class="drawluckly-Award" v-if="!!RewardDetail.whoGotReward">
        <p class="textPrimary0">{{$t('noviceBenefits.usersyesterday')}}</p>
        <div class="drawluckly-Award-user">
          <p class="textPrimary0 setFontFamily">{{RewardDetail.whoGotReward}}</p>
          <p class="colorPrimary">+ <span class="setFontFamily">{{RewardDetail.whoGotRewardPool}}</span> BKB</p>
        </div>
      </div>

      <div class="drawluckly-rule colorBackground3">
        <p class="drawluckly-rule-title textPrimary0">{{$t('noviceBenefits.Activityrules')}}</p>
        <ul class="drawluckly-rule-content">
          <li class="textSecond2"><span class="setFontFamily">1. </span>{{$t('noviceBenefits.Dailyreward')}}</li>
          <li class="textSecond2"><span class="setFontFamily">2. </span>{{$t('noviceBenefits.morelottery')}}</li>
          <li class="textSecond2"><span class="setFontFamily">3. </span>{{$t('noviceBenefits.luckydraw')}}</li>
        </ul>
        <div class="drawluckly-rule-bottom textSecond3">*{{$t('noviceBenefits.notes')}} </div>
      </div>
     </div>
    <div class="drawluckly-btnbox colorBackground1">
        <van-button :class="Number(CouponsNums) > 0 ? 'ondrawluckly-btn colorBackgroundPrimary' : 'drawluckly-btn colorBackgroundPrimary'" @click="pushPapersIn()"> <span class="colorwhite">{{$t('noviceBenefits.Immediateinput')}} </span></van-button>
    </div>
  </div>
</template>
<script type=module>// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDae8sHM0DPG7yzTw3134GTlnQ1X4wYEzE",
    authDomain: "bitkeep-web.firebaseapp.com",
    projectId: "福利中心",
    storageBucket: "bitkeep-web.appspot.com",
    messagingSenderId: "25685918225",
    appId: "1:25685918225:web:6150d19eb600690a18a7b0",
    measurementId: "G-39NRXSECDR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
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
        },
      documentHeight: '',  //默认屏幕高度
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
    this.documentHeight = document.documentElement.clientHeight;

  },
  methods: {
    firstEnter(title,message) {
      this.$dialog.alert({
          title:title || '',
          message: message,
          confirmButtonText: this.$t("CbkbExchange.know"),
          confirmButtonColor: "#495BFF",
      });
    },
    async pushPapersIn(){
      if(Number(this.CouponsNums) <= 0){
        return;
      }
      if(Number(this.CouponsNums) > Number(this.RewardDetail.mePapersKeep)){
        this.firstEnter('',this.$t('noviceBenefits.Investedmore'));
        return;
      }
      const { data, status } = await USER_API.pushPapersIn({nums:this.CouponsNums});
      if(data === true){
        this.getRewardDetail();
        this.CouponsNums = 0;
        this.firstEnter('',this.$t('noviceBenefits.Investinsuccess'));
      }else{
        this.firstEnter('',this.$t('noviceBenefits.Failedtoputin'));
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
@import "@/assets/css/theme.scss";
html,body {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

.drawluckly-box::-webkit-scrollbar {
  display: none;  // 重点
}
.theme-light{
    .drawluckly-CouponsNums-inp{
        border: 1px solid $theme-light-colorLine1;
        .drawluckly-CouponsNums-all{
          border-left: 1px solid $theme-light-colorLine1;
        }
    }
    .drawluckly-btnbox{
      border-top:1px solid $theme-light-colorLine;
    }
}

.theme-dark{
    .drawluckly-CouponsNums-inp{
        border: 1px solid $theme-dark-colorLine1;
         .van-cell{
          background-color: #171A26;
          .van-cell__value{
            .van-field__body{
              .van-field__control{
                color: #DFE0E3;
                &::placeholder{
                  color: #5F626D;
                }
              }
            }
          }
        }
        .drawluckly-CouponsNums-all{
          border-left: 1px solid $theme-dark-colorLine;
        }
    }
    .drawluckly-btnbox{
      border-top:1px solid $theme-dark-colorLine;
    }
}
p{
  padding: 0;
  margin: 0;
}
.drawluckly-box{
  overflow-y: auto;
}
.drawluckly{
  min-height: 100vh;
  position: relative;
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
      font-size: 12px;
    }
    .drawluckly-topbanner-text{
      display: inline-block;
      width: 150px;
      position: absolute;
      bottom: 10px;
      left: 16px;
      color: #080D21;
      font-size: 26px;
      font-weight: 700;
    }
}
.drawluckly-Coupons{
  display: flex;
  padding: 30px 16px 30px 16px;
  justify-content: space-between;
  .drawluckly-Coupons-item{
    p:nth-child(1){
      font-size: 14px;
      line-height: 14px;
      max-width: 165px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p:nth-child(2){
      font-size: 16px;
      line-height: 16px;
      padding-top: 5px;
      max-width: 165px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.drawluckly-CouponsNums{
  padding: 0 16px 30px 16px;
  .drawluckly-CouponsNums-title{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 14px;
    .drawluckly-CouponsNums-title-number{
      font-style: normal;
    }
    span:nth-child(1){
      display: inline-block;
      max-width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.drawluckly-CouponsNums-inp{
  margin-top: 10px;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  display: flex;
  .drawluckly-CouponsNums-all{
    width: 68px;
    margin: 16px 0 16px 16px;
    text-align: center;
    font-size: 14px;
    line-height: 18px;
  }
  .van-cell {
    margin: 14px 0 16px 15px;
    padding: 0;
    &::after{
      border-bottom: none;
    }
    .van-field__control{
      font-size: 16px;
    }
  }
}
.drawluckly-Award{
  padding: 0 15px;
  font-size: 14px;
  line-height: 14px;
  .drawluckly-Award-user{
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    line-height: 15px;
  }
}

.drawluckly-rule{
  margin: 30px 16px 20px 16px;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 102px;
  .drawluckly-rule-title{
    font-size: 14px;
    font-weight: 600;
  }
  .drawluckly-rule-content{
    margin-top: 15px;
    font-size: 14px;
    line-height: 20px;
  }
  .drawluckly-rule-bottom{
    margin-top: 15px;
    font-size: 12px;
  }
}
.drawluckly-btnbox{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 95px;
  display: flex;
  justify-content: center;
  .drawluckly-btn{
    width: 303px;
    height: 50px;
    opacity: 0.3;
    border-radius: 10px;
    font-size: 16px;
    margin-top: 10px;
    border: none;
  }
  .ondrawluckly-btn{
    width: 303px;
    height: 50px;
    border-radius: 10px;
    font-size: 16px;
    margin-top: 10px;
    border: none;
  }
}
</style>
