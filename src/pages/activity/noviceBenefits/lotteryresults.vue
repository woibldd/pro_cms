<template>
<div class="lotteryresults">
    <div class="lotteryresults-summary">
        <div class="lotteryresults-summary-item">
            <p>{{$t('noviceBenefits.participationperiods')}}</p>
            <p>{{resultList.pushTimes || 0}}</p>
        </div>
        <div class="lotteryresults-summary-item">
            <p>{{$t('noviceBenefits.ticketsinvested')}}</p>
            <p>{{resultList.pushPapers || 0}}</p>
        </div>
        <div class="lotteryresults-summary-item">
            <p>{{$t('noviceBenefits.obtainBKB')}}</p>
            <p>{{resultList.allReward || 0}}</p>
        </div>
    </div>

    <ul class="lotteryresults-list" v-if="!!resultList.list">
        <li class="lotteryresults-list-item" v-for="(item,index) in resultList.list" :key="index">
             <div class="lotteryresults-list-left">
                <p class="lotteryresults-list-itemNums">{{$t('noviceBenefits.investment')}} {{item.pushPapers}} {{$t('noviceBenefits.araffleticket')}}</p>
                <p class="lotteryresults-list-item-result">{{item.code}}</p>
             </div>
             <div class="lotteryresults-list-left" v-if="Number(item.reward) > 0 ">
                <p class="lotteryresults-list-itemNums">🎉 {{$t('noviceBenefits.Congratulations')}}!</p>
                <p class="lotteryresults-list-item-result colorBlue" style="text-align:right">+1000 BKB</p>
             </div>
             <div class="lotteryresults-list-item-result lotteryresults-list-right" v-if="Number(item.reward) <= 0 ">
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
                    BitKeepInvoke.setIconAction(
                    "https://cdn.bitkeep.vip/u_b_09035ca0-4dd9-11ec-a555-07d5354e6fab.png",
                    ()=>{
                      this.$router.push("/activity/mining/history")
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
                      this.$router.push("/activity/mining/history")
                    //   let routeUrl = this.$router.resolve({
                    //      path: "/activity/mining/history"
                    //    });
                    //    window.open(routeUrl.href, '_blank');
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
    margin: 0;
    padding: 0;
}
.lotteryresults-summary{
    height: 66px;
    background: #F8F9FA;
    border-radius: 8px;
    margin: 10px 16px 10px 16px;
    display: flex;
    justify-content: space-around;
}
.lotteryresults-summary-item{
    p:nth-child(1){
        color: #7F828F;
        font-size: 12px;
        text-align: center;
        margin-top: 15px;
    }
    p:nth-child(2){
        color:  #080D21;
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
        color: #080D21;
    }
    .lotteryresults-list-item-result{
        font-size: 12px;
        color: #9CA5B3;
    }
    .lotteryresults-list-right{
        line-height: 30px;
        font-size: 14px;
    }
}
.lotteryresults-nodata{
    text-align: center;
    font-size: 14px;
    color: #080D21;
}
.colorBlue{
    color: #495BFF!important;
}
</style>