<template>
<div class="lotteryresults colorBackground1">
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

    <ul class="lotteryresults-list" v-if="!!resultList.list">
        <li class="lotteryresults-list-item" v-for="(item,index) in resultList.list" :key="index">
             <div class="lotteryresults-list-left">
                <p class="lotteryresults-list-itemNums textPrimary0">{{$t('noviceBenefits.investment')}} <span class="setFontFamily">{{item.pushPapers}}</span> {{$t('noviceBenefits.araffleticket')}}</p>
                <p class="lotteryresults-list-item-result textSecond3">{{item.code}}</p>
             </div>
             <div class="lotteryresults-list-left" v-if="Number(item.reward) > 0 ">
                <p class="lotteryresults-list-itemNums textPrimary0">🎉 {{$t('noviceBenefits.Congratulations')}}!</p>
                <p class="lotteryresults-list-item-result colorPrimary" style="text-align:right">+1000 BKB</p>
             </div>
             <div class="lotteryresults-list-item-result lotteryresults-list-right textSecond3" v-if="Number(item.reward) <= 0 ">
                 {{$t('noviceBenefits.Failedto')}}
             </div>
        </li>
    </ul>
    <div class="lotteryresults-nodata" v-if="!resultList.list">暂无数据</div>
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
                  setTimeout(()=>{
                    BitKeepInvoke.setIconAction();
                  },500)
                } else {
                  this.theme = 0;
                  this.question = 'https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png';
                  body.setAttribute("class", "theme-light");
                  setTimeout(()=>{
                    BitKeepInvoke.setIconAction();
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
p{
    margin: 0;
    padding: 0;
}
.lotteryresults{
    min-height: 100vh;
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
    text-align: center;
    font-size: 14px;
}
.colorBlue{
    color: #495BFF!important;
}
</style>