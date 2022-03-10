<template>
<div class="lotteryresults colorBackground1">
    <div class="lotteryresults-content"></div>
    <div class="lotteryresults-summary colorBackground3">
        <div class="lotteryresults-summary-item">
            <p class="textSecond2">{{$t('noviceBenefits.participationperiods')}}</p>
            <p class="textPrimary0 setFontFamily">{{resultList.pushTimes || 0}}</p>
        </div>
        <div class="lotteryresults-summary-item">
            <p class="textSecond2">{{$t('noviceBenefits.ticketsinvested')}}</p>
            <p class="textPrimary0 setFontFamily">{{resultList.pushPapers || 0}}</p>
        </div>
        <div class="lotteryresults-summary-item">
            <p class="textSecond2">{{$t('noviceBenefits.obtainBKB')}}</p>
            <p class="textPrimary0 setFontFamily">{{resultList.allReward || 0}}</p>
        </div>
    </div>

    <ul class="lotteryresults-list" v-if="!!resultList.list.length">
        <li class="lotteryresults-list-item" v-for="(item,index) in resultList.list" :key="index">
             <div class="lotteryresults-list-left">
                <p class="lotteryresults-list-itemNums textPrimary0">{{$t('noviceBenefits.investment')}} <span class="setFontFamily">{{item.pushPapers}}</span> {{$t('noviceBenefits.araffleticket')}}</p>
                <p class="lotteryresults-list-item-result textSecond3">{{item.code}}</p>
             </div>
             <div class="lotteryresults-list-left" v-if="Number(item.isReward) == 1 ">
                <p class="lotteryresults-list-itemNums textPrimary0">🎉 {{$t('noviceBenefits.Congratulations')}}</p>
                <p class="lotteryresults-list-item-result colorPrimary" style="text-align:right ">+ <span class="setFontFamily">{{item.reward}}</span> BKB</p>
             </div>
             <div class="lotteryresults-list-item-result lotteryresults-list-right textSecond3" v-if="Number(item.isReward) == 0 ">
                 {{$t('noviceBenefits.Failedto')}}
             </div>
             <div class="lotteryresults-list-item-result lotteryresults-list-right textSecond3" v-if="Number(item.isReward) == 2 ">
                 {{$t('noviceBenefits.Tobewon')}}
             </div>
        </li>
    </ul>
    <div class="lotteryresults-nodata" v-if="!resultList.list.length">
      <img src="https://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png" alt="">
      <p class="textSecond3">{{ $t('mining.noData') }}</p>
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
      resultList:{
        pushTimes: 0,
        pushPapers: 0,
        allReward: 0,
        list:[]
        },
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
    this.getRewardResult();
  },
  methods: {
    async getRewardResult(){
        const { data, status } = await USER_API.getRewardResult();
        if(data){
            this.resultList = data;
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
               this.$t('noviceBenefits.Lotteryresults')
            );
          //设置主题
            this.$nextTick(() => {
              BitKeepInvoke.appMode((err, res) => {
                let body = document.getElementsByTagName("body")[0];
                if (res == 1) {
                  this.theme = 1;
                  this.question = 'https://cdn.bitkeep.vip/u_b_47485390-4f90-11ec-ace3-97579b99c357.png';
                  body.setAttribute("class", "theme-dark");
                  // setTimeout(()=>{
                  //   BitKeepInvoke.setIconAction("");
                  // },500)
                } else {
                  this.theme = 0;
                  this.question = 'https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png';
                  body.setAttribute("class", "theme-light");
                  // setTimeout(()=>{
                  //   BitKeepInvoke.setIconAction("");
                  // },500)
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

body::-webkit-scrollbar {
  display: none;  // 重点
}
p{
    margin: 0;
    padding: 0;
}
.lotteryresults{
    min-height: 100vh;
}
.lotteryresults-content{
  height: 10px;
}
.lotteryresults-summary{
    height: 66px;
    border-radius: 8px;
    margin: 0px 16px 10px 16px;
    display: flex;
    justify-content: space-around;
}
.lotteryresults-summary-item{
    p:nth-child(1){
        font-size: 12px;
        text-align: center;
        margin-top: 15px;
    }
    p:nth-child(2){
        font-size: 20px;
        text-align: center;
    }
}
.lotteryresults-list-item{
    height: 60px;
    padding: 15px 16px;
    display: flex;
    justify-content: space-between;
    .lotteryresults-list-itemNums{
        font-size: 14px;
    }
    .lotteryresults-list-item-result{
        font-size: 12px;
    }
    .lotteryresults-list-right{
        line-height: 30px;
        font-size: 14px;
    }
}
.lotteryresults-nodata{
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img{
    width: 100px;
    height: 100px;
  }
  p{
    font-size: 14px;
  }
}
.colorBlue{
    color: #7524f9!important;
}
</style>