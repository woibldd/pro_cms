<template>
  <div class="Novicebenefits colorBackground0">
    <div class="Novicebenefits-topbanner">
        <van-image
            width="100%"
            height="100%"
            src="https://cdn.bitkeep.vip/u_b_980f2ee0-7fdb-11ec-a9c3-37af95cd2c04.jpeg"
        />
    </div>
      <div class="Novicebenefits-box">
            <div class="Novicebenefits-title textPrimary0">
                {{$t('noviceBenefits.sign')}}
                <van-image
                    :src="question"
                    @click="firstEnter($t('noviceBenefits.Tips'),$t('noviceBenefits.Cumulative'))"
                />
        </div>
        <div class="Novicebenefits-sign colorBackground1">
            <div class="Novicebenefits-sign-top">
                <div class="Novicebenefits-sign-title textPrimary0">{{$t('noviceBenefits.alreadySignedin')}}<span class="setFontFamily colorPrimary Novicebenefits-sign-top-bottom-content-span">{{signDay}}</span>{{$t('noviceBenefits.day')}}</div>
                <div class="Novicebenefits-sign-top-signlist" >
                    <div v-for="(item,index) in signList.list" :key="index" class="Novicebenefits-sign-item">
                        
                        <div @click="welfareSignInfunc(index)">
                            <div class="Novicebenefits-sign-item-img">
                                <span v-if="item.day === 4 || item.day === 7" class="Novicebenefits-sign-item-img-obtain backgroundSecond01"> <i style="font-style:normal;" class="colorwhite">{{$t('noviceBenefits.obtain')}}</i></span>
                                <van-image
                                    v-if="!item.isSignin"
                                    :src="(item.day === 4 || item.day === 7) && index === signDay && !signList.todayIsSgin ? 'https://cdn.bitkeep.vip/u_b_e4fd4180-a03b-11ec-ad8b-9ff4f858e021.png' : index === signDay && !signList.todayIsSgin? 'https://cdn.bitkeep.vip/u_b_2e5e5380-a034-11ec-b054-8b7edc051038.png' : (item.day === 4 || item.day === 7) ? 'https://cdn.bitkeep.vip/u_b_65c04710-7448-11ec-a3df-456c694c3f18.png' : 'https://cdn.bitkeep.vip/u_b_5457fe50-743e-11ec-a3df-456c694c3f18.png'"
                                />
                                <van-image
                                    v-else
                                    :src="(item.day === 4 || item.day === 7) ? 'https://cdn.bitkeep.vip/u_b_e4fd6890-a03b-11ec-ad8b-9ff4f858e021.png' : 'https://cdn.bitkeep.vip/u_b_2e5e0560-a034-11ec-b054-8b7edc051038.png'"
                                />
                            </div>
                            <!-- 签到 -->
                            <p v-if="index === signDay && !signList.todayIsSgin" class="Novicebenefits-sign-item-result colorPrimary">{{$t('noviceBenefits.Signedin')}}</p>
                            <p v-else :class="index < signDay  ? 'Novicebenefits-sign-item-result Novicebenefits-sign-item-day colorPrimary':'Novicebenefits-sign-item-result Novicebenefits-sign-item-day textSecond2 setFontFamily'"> {{locale === 'en' ? item.day : item.day + $t('noviceBenefits.day')}}</p>
                            <!-- {{index < signDay ? $t('noviceBenefits.alreadySignedin1'): item.day + $t('noviceBenefits.day') }} -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="Novicebenefits-sign-top-bottom">
                <div class="Novicebenefits-sign-top-bottom-img">
                    <van-image
                        class="Novicebenefits-sign-top-bottom-img-left"
                        src="https://cdn.bitkeep.vip/u_b_6b97a060-a036-11ec-b054-8b7edc051038.png"
                    />
                </div>
                <div class="Novicebenefits-sign-top-bottom-content">
                    <p class="textPrimary0 Novicebenefits-sign-top-bottom-content-top">
                        {{$t('noviceBenefits.Currently')}} 
                        <span class="colorPrimary Novicebenefits-sign-top-bottom-content-span setFontFamily"> {{signList.lottery}} </span> {{$t('noviceBenefits.zhang')}}
                    <img
                        class="Novicebenefits-sign-top-bottom-img-right"
                        :src="question"
                        @click="firstEnter($t('noviceBenefits.Whatisaraffleticket'),$t('noviceBenefits.Usethelotteryticket'))"
                    />
                    </p>
                    <p class="textSecond2">{{$t('noviceBenefits.Participate')}}<span class="setFontFamily">{{signList.reward_pool}}</span>  BKB?</p>
                </div>
                <div class="Novicebenefits-sign-top-bottom-btn">
                    <van-button class="draw-btn colorBackgroundPrimary" @click="drawClick()"> <span class="colorwhite Novicebenefits-sign-top-bottom-btn-span">{{$t('noviceBenefits.Draw')}}</span> </van-button>
                </div>
            </div>
        </div>
        <div class="Novicebenefits-title Novicebenefits-title-not textPrimary0" >{{$t('noviceBenefits.Novice')}}</div>
        <ul class="Novicebenefits-reward Novicebenefits-sign-top-bottom colorBackground1" >
            <!-- 加入Telegram -->
            <li class="Novicebenefits-reward-item Novicebenefits-sign-top-bottom">
                <div class="Novicebenefits-sign-top-bottom-img">
                    <van-image
                        src="https://cdn.bitkeep.vip/u_b_6b96dd11-a036-11ec-b054-8b7edc051038.png"
                    />
                </div>
                <div class="Novicebenefits-sign-top-bottom-content">
                    <p class="textPrimary0">{{$t('noviceBenefits.Telegram')}}</p>
                    <p class="textSecond2">{{$t('noviceBenefits.Reward')}}</p>
                </div> 
                 <div class="Novicebenefits-sign-top-bottom-btn" v-if="!newUser.isNewUser">
                    <span class="alreadydraw-btn textSecond3">  {{$t('noviceBenefits.incompatible')}}</span>
                </div>
                <div class="Novicebenefits-sign-top-bottom-btn" v-else>
                    <span class="alreadydraw-btn textSecond3" v-if="!!newUser.isDoneTelJob">{{$t('noviceBenefits.alreadyReceived')}}</span>
                    <van-button class="draw-btn colorBackgroundPrimary" @click="joinTelegram()" v-else><span class="colorwhite Novicebenefits-sign-top-bottom-btn-span"> <span class="colorwhite"> {{!!joinTelegramflag ?  $t('noviceBenefits.Getitnow') : $t('noviceBenefits.Join')}}</span></span></van-button>
                </div>
            </li>

            <li class="Novicebenefits-reward-item Novicebenefits-sign-top-bottom ">
                <!-- swap交易 -->
                <div class="Novicebenefits-sign-top-bottom-img">
                    <van-image
                        src="https://cdn.bitkeep.vip/u_b_6b96dd10-a036-11ec-b054-8b7edc051038.png"
                    />
                </div>
                <div class="Novicebenefits-sign-top-bottom-content">
                    <p class="textPrimary0">{{$t('noviceBenefits.swap')}}</p>
                    <p class="textSecond2">{{$t('noviceBenefits.raffle')}}</p>
                </div>
                <div class="Novicebenefits-sign-top-bottom-btn" v-if="!newUser.isNewUser">
                    <span class="alreadydraw-btn textSecond3"> {{$t('noviceBenefits.incompatible')}}</span>
                </div>
                <div class="Novicebenefits-sign-top-bottom-btn" v-else>
                    <span class="alreadydraw-btn textSecond3" v-if="!!newUser.isDoneSwap">{{$t('noviceBenefits.alreadyReceived')}}</span>
                    <van-button class="draw-btn colorBackgroundPrimary" @click="SwapTransaction()" v-else><span class="colorwhite Novicebenefits-sign-top-bottom-btn-span"> {{newUser.isUpToSwap ?  $t('noviceBenefits.Getitnow') : $t('noviceBenefits.Immediate')}}</span></van-button>
                </div>
            </li>

                <!-- 入金50u -->
            <li class="Novicebenefits-reward-item Novicebenefits-sign-top-bottom" >
                <div class="Novicebenefits-sign-top-bottom-img">
                    <van-image
                        src="https://cdn.bitkeep.vip/u_b_6b972b30-a036-11ec-b054-8b7edc051038.png"
                    />
                </div>
                <div class="Novicebenefits-sign-top-bottom-content">
                    <p class="textPrimary0">{{$t('noviceBenefits.USDT')}}</p>
                    <p class="textSecond2">{{$t('noviceBenefits.Reward')}} </p>
                </div>
                  <div class="Novicebenefits-sign-top-bottom-btn" v-if="!newUser.isNewUser">
                      <!-- 不符合 -->
                    <span class="alreadydraw-btn textSecond3"> {{$t('noviceBenefits.incompatible')}}</span>
                </div>
                <div class="Novicebenefits-sign-top-bottom-btn" v-else>
                    <!-- 已领取 -->
                     <span class="alreadydraw-btn textSecond3" v-if="!!newUser.isDone50U">{{$t('noviceBenefits.alreadyReceived')}}</span>
                     <!-- 暂未达标 -->
                    <span v-else-if="!newUser.isUpTo50U" class=" alreadydraw-btn textbtn textSecond3 standard"> {{$t('noviceBenefits.standard')}}</span>
                    <!-- 立即领取 -->
                    <van-button class="draw-btn colorBackgroundPrimary" @click="UpTo50U()" v-else-if="newUser.isUpTo50U"><span class="colorwhite Novicebenefits-sign-top-bottom-btn-span"> {{ $t('noviceBenefits.Getitnow')}}</span></van-button>
                </div>
            </li>
        </ul>

         <div class="Novicebenefits-title Novicebenefits-title-not textPrimary0">{{$t('noviceBenefits.Morebenefits')}}</div>
         <ul class="Novicebenefits-reward Novicebenefits-sign-top-bottom colorBackground1">
            <li class="Novicebenefits-reward-item Novicebenefits-sign-top-bottom">
                <div class="Novicebenefits-sign-top-bottom-img">
                    <van-image
                        src="https://cdn.bitkeep.vip/u_b_b21ebdc0-a036-11ec-b054-8b7edc051038.png"
                    />
                </div>
                <div class="Novicebenefits-sign-top-bottom-content">
                    <p class="textPrimary0">{{$t('noviceBenefits.Airdropactivity')}}</p>
                    <p class="textSecond2">{{$t('noviceBenefits.Access')}}</p>
                </div>
                <div class="Novicebenefits-sign-top-bottom-btn">
                    <van-button class="draw-btn colorBackgroundPrimary" @click="viewairdrop()"><span class="colorwhite Novicebenefits-sign-top-bottom-btn-span"> {{$t('noviceBenefits.Viewnow')}}</span></van-button>
                </div>
            </li>

            <li class="Novicebenefits-reward-item Novicebenefits-sign-top-bottom">
                <div class="Novicebenefits-sign-top-bottom-img">
                    <van-image
                        src="https://cdn.bitkeep.vip/u_b_b21e96b0-a036-11ec-b054-8b7edc051038.png"
                    />
                </div>
                <div class="Novicebenefits-sign-top-bottom-content">
                    <p class="textPrimary0">{{$t('noviceBenefits.Blindboxactivity')}}</p>
                    <p class="textSecond2">{{$t('noviceBenefits.AccessNFT')}}</p>
                </div>
                <div class="Novicebenefits-sign-top-bottom-btn">
                    <van-button class="draw-btn colorBackgroundPrimary" @click="viewblindbox()"><span class="colorwhite Novicebenefits-sign-top-bottom-btn-span"> {{$t('noviceBenefits.Viewnow')}}</span></van-button>
                </div>
            </li>

            <li class="Novicebenefits-reward-item Novicebenefits-sign-top-bottom">
                <div class="Novicebenefits-sign-top-bottom-img">
                    <van-image
                        src="https://cdn.bitkeep.vip/u_b_b21e4890-a036-11ec-b054-8b7edc051038.png"
                    />
                </div>
                <div class="Novicebenefits-sign-top-bottom-content">
                    <p class="textPrimary0">{{$t('noviceBenefits.Invitation')}}</p>
                    <p class="textSecond2">{{$t('noviceBenefits.Invitefriends')}}</p>
                </div>
                <div class="Novicebenefits-sign-top-bottom-btn">
                    <van-button class="draw-btn colorBackgroundPrimary Novicebenefits-sign-top-bottom-btn-span" @click="viewblindboxInvite()"><span class="colorwhite"> {{$t('noviceBenefits.Viewnow')}}</span></van-button>
                </div>
            </li>
        </ul>
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
import { Toast } from 'vant';
import Cookie from 'cookie';
export default {
  name: "Novicebenefits",
  data() {
    return {
      isLoading: true,
      question: 'https://cdn.bitkeep.vip/u_b_af43f280-78f1-11ec-9d29-f144d09ca5ed.png',
      signList:{
        reward_pool: 0,
        lottery: 0,
        todayIsSgin:false,
        list:[{
            day:1,
            isSignin:false,
        },{
            day:2,
            isSignin:false,
        },{
            day:3,
            isSignin:false,
        },{
            day:4,
            isSignin:false,
        },{
            day:5,
            isSignin:false,
        },{
            day:6,
            isSignin:false,
        },{
            day:7,
            isSignin:false,
        }]
        },
      signNums:1,
      joinTelegramflag:false,
      SwapTransactionflag:false,
      newUser:{
        isNewUser: false,
        isDoneTelJob: false,
        isDoneSwap: false,
        isUpToSwap:false,
        isUpTo50U: false,
        isDone50U:false,
        isAlterReward: false, // 是否弹出最近一次中奖信息
        yestdaycode: '', // 最近一次中奖期号
        yestdayRewardPool: 0 // 最近一次中奖奖池
    },
    telegramUrl:''
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
    signDay() {
        let day = [];
        day = this.signList.list.filter(item => item.isSignin);
        return day.length;
    },
    signimg(item,index){
 return (item.day === 4 || item.day === 7) && index === this.signDay ? 'https://cdn.bitkeep.vip/u_b_e4fd4180-a03b-11ec-ad8b-9ff4f858e021.png' : index === this.signDay ? 'https://cdn.bitkeep.vip/u_b_2e5e5380-a034-11ec-b054-8b7edc051038.png' : (item.day === 4 || item.day === 7) ? 'https://cdn.bitkeep.vip/u_b_65c04710-7448-11ec-a3df-456c694c3f18.png' : 'https://cdn.bitkeep.vip/u_b_5457fe50-743e-11ec-a3df-456c694c3f18.png'
    },
    userInfo() {
      return this.local.userInfo.token;
    },
  },
  components: {
  },
  
  mounted() {
    this.joinTelegramflag = localStorage.getItem('joinTelegram') || false;
    this. SwapTransactionflag = localStorage.getItem('SwapTransaction') || false;
    this.getInfo();
    this.setIcon();
    this.info();
    this.islanguage();
  },
  methods: {
      firstEnter(title,message,type) {
        let mes =
            "<div class='popBox'><p>" +
            message +
            "</p></div>";
        this.$dialog.alert({
            title:title || '',
            message: mes,
            confirmButtonText: this.$t("CbkbExchange.know"),
            confirmButtonColor: "#7524f9",
        }).then(()=>{
            if(type && type==="prize"){
                this.$router.push("/activity/noviceBenefits/lotteryresults")
            }
        });
    },

    // 初始化
    info(){
        this.newUserRewardJobs();
        this.getSignInDetailByUser();
    }, 
    islanguage(){
        //   中文:https://t.me/BitKeep_Official
        // 英文：https://t.me/bitkeep
    // 尼日利亚：https://t.me/bitkeepng
    // 越南：https://t.me/BitKeep_Vietnam
    //菲律宾： https://t.me/BitKeep_Philippines
    // 巴基斯坦：https://t.me/Bitkeep_Pak
    // 南亚：https://t.me/BitkeepSouthAsia

        if(this.locale == 'zh'){
            this.telegramUrl = 'https://t.me/BitKeep_Official'
        }else if(this.locale === 'en' || this.locale === 'ko' || this.locale == 'ja'){
            this.telegramUrl = 'https://t.me/bitkeep'
        }else if(this.locale == 'vi'){
            this.telegramUrl = 'https://t.me/BitKeep_Vietnam'
        }else if(this.locale == 'id'){
             this.telegramUrl = 'https://t.me/bitkeepng'
        }else{
            this.telegramUrl = 'https://t.me/bitkeep'
        }
    },
    async viewblindbox(){
        // 查看盲盒1
        this.$router.push('/activity/blindbox/list')
    },
    async viewairdrop(){
        // 查看空投
        window.location.href = 'https://h5.bitkeep.biz/airdropClaim.html#/?_needChain=all&lang=en';
    },
    async viewblindboxInvite(){
        // 查看邀请
         this.$router.push('/activity/blindboxInvite')
    },
    // 新手任务已经是否是新用户
    async newUserRewardJobs(){
        const { data, status } = await USER_API.newUserRewardJobs();
        if(data){
            this.newUser = data;
            if(!!data.isAlterReward){
                this.firstEnter('',this.$t('noviceBenefits.congratulations') + data.yestdaycode + this.$t('noviceBenefits.winningthelottery') + data.yestdayRewardPool + 'BKB!',prize);
            }
        }
    },
    async UpTo50U(){
        const { data, status } = await USER_API.getFirst50UJob();
        if(data.success === true && !!data.isActivate){
            this.firstEnter('',this.$t('noviceBenefits.receiveSuccess'));
            this.info();
        }else if (!data.isActivate){
            this.firstEnter('',this.$t('noviceBenefits.Cloudwallet'));
        }else{
            this.firstEnter('',this.$t('noviceBenefits.receiveError'));
        }
    },
    async SwapTransaction(){
        // SWAP交易
        if(!this.newUser.isUpToSwap){
            BitKeepInvoke.nativeApp();
            localStorage.setItem('SwapTransaction',true);
        }else{
            if(!!this.newUser.isUpTo50U){
                const { data, status } = await USER_API.getFirstSwapJob();
                if(data.success === true && !!data.isActivate){
                    this.firstEnter('',this.$t('noviceBenefits.receiveSuccess'));
                    this.info();
                }else if (!data.isActivate){
                    this.firstEnter('',this.$t('noviceBenefits.Cloudwallet'));
                }else{
                    this.firstEnter('',this.$t('noviceBenefits.receiveError'));
                }
            }else{
                 // 钱包资产需高于50u
                 this.firstEnter('',this.$t('noviceBenefits.50u'));
            }
        }
    },
    async joinTelegram(){
        // 加入Telegram
        if(!this.joinTelegramflag){
            // 立即加入
            window.location.href=this.telegramUrl ;
            this.joinTelegramflag = true;
            localStorage.setItem('joinTelegram',true);
        }else{
            // 立即领取
            if(!!this.newUser.isUpTo50U){
                const { data, status } = await USER_API.getJoinTeleJob();
                if(data.success === true && !!data.isActivate){
                     this.firstEnter('',this.$t('noviceBenefits.receiveSuccess'));
                    this.info();
                }else if (!data.isActivate){
                    this.firstEnter('',this.$t('noviceBenefits.Cloudwallet'));
                }else{
                    this.firstEnter('',this.$t('noviceBenefits.receiveError'));
                }
            }else{
                // 钱包资产需高于50u
                 this.firstEnter('',this.$t('noviceBenefits.50u'));
            }
        }
    },
    async welfareSignInfunc(index){
        if ((index !== this.signDay && index < this.signDay) || this.signList.todayIsSgin) return;
        const { data, status } = await USER_API.welfareSignIn();
        if(data === true){
            this.getSignInDetailByUser();
            this.firstEnter('',this.$t('noviceBenefits.signSuccess'));
        }else{
            this.getSignInDetailByUser();
            this.firstEnter('',this.$t('noviceBenefits.signError'));
        }
    },

    // 获取某人的签到详情
    async getSignInDetailByUser(){
        const { data, status } = await USER_API.getSignInDetailByUser();
        if(!!data.list){
            this.signList = data;
        }
    },
    drawClick(){
        this.$router.push("/activity/noviceBenefits/drawluckly")
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
               this.$t('noviceBenefits.WelfareCenter')
            );
          //设置主题
            this.$nextTick(() => {
                BitKeepInvoke.setIconAction();
              BitKeepInvoke.appMode((err, res) => {
                let body = document.getElementsByTagName("body")[0];
                if (res == 1) {
                  this.theme = 1;
                  this.question = 'https://cdn.bitkeep.vip/u_b_cac9ff90-78f1-11ec-9d29-f144d09ca5ed.png';
                  body.setAttribute("class", "theme-dark");
                //   setTimeout(()=>{
                    // BitKeepInvoke.setIconAction();
                //   },500)
                } else {
                  this.theme = 0;
                  this.question = 'https://cdn.bitkeep.vip/u_b_af43f280-78f1-11ec-9d29-f144d09ca5ed.png';
                  body.setAttribute("class", "theme-light");
                //   setTimeout(()=>{
                    // BitKeepInvoke.setIconAction();
                //   },500)
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
.van-dialog{
    .van-dialog__content{
        .van-dialog__message{
            overflow-y: clip;
        }
    }
}
.Novicebenefits{
    min-height: 100vh; 
}
.Novicebenefits-box{
    padding:10px 16px 54px 16px;
}
.Novicebenefits-title{
    display: flex;
    align-items: center;
    width: 100%;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    font-weight: 500;
    .van-image{
        width: 16px;
        height: 16px;
        margin: 0 0 0 6px;
    }
}
.Novicebenefits-title-not{
    margin-top: 10px;
}
.Novicebenefits-sign{
    width: 100%;
    height: 182px;
    border-radius: 10px;
}
.theme-light{
    .Novicebenefits-sign-top-signlist{
         border-bottom: 2px solid $theme-light-colorLine;
    }
}

.theme-dark{
    .Novicebenefits-sign-top-signlist{
         border-bottom: 2px solid $theme-dark-colorLine;
    }
}
.Novicebenefits-sign-top{
    height: 110px;
    .Novicebenefits-sign-top-signlist{
        margin: 0 15px 0 15px;
        height: 80px;
        display: flex;
        justify-content: space-around;
        .Novicebenefits-sign-item{
            padding: 15px 0;
           .Novicebenefits-sign-item-img{
               width: 40px;
               height: 40px;
               position: relative;
               text-align: center;
                .van-image{
                    width: 40px;
                    height: 40px;
                }
                .Novicebenefits-sign-item-img-obtain{
                    display: inline-block;
                    position: absolute;
                    top: -8px;
                    width: 40px;
                    height: 18px;
                    border-radius: 20px;
                    text-align: center;
                    font-size: 11px;
                    line-height: 18px;
                    z-index: 999;
                }
           }
        }
    }
}
.Novicebenefits-sign-top-bottom{
    height:70px;
    display: flex;
    align-items: center;
}
.Novicebenefits-sign-title{
    font-size: 14px;
    line-height: 14px;
    padding: 15px 0 0 15px;
    font-weight: 500;
}
.Novicebenefits-sign-top-bottom-content-span{
    display: inline-block;
    margin: 0 3px;
    line-height: 20px;
}

.Novicebenefits-sign-top-bottom{
    display: flex;
    .Novicebenefits-sign-top-bottom-img-left{
        width: 32px;
        height: 32px;
    }
    .Novicebenefits-sign-top-bottom-img{
        padding: 24px 20px 24px 20px;
        .van-image{
            width: 32px;
            height: 32px;
        }
    }
    .Novicebenefits-sign-top-bottom-btn{
        margin: 24px 16px 21px 0;
        .standard{
            display: inline-block;
            width: 70px;
            height: 28px;
            margin-left: 10px;
        }
        .Novicebenefits-sign-top-bottom-btn-span{
            max-width: 68px;
            height: 28px;
            display: inline-block;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            line-height: 28px;
        }
       .draw-btn{
            width: 70px;
            height: 28px;
            font-size: 12px;
            line-height: 28px;
            border-radius: 100px;
            border: none;
            font-weight: 500;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            .van-button__text{
                width: 70px;
                height: 28px;
            }
       }
       .textbtn {
            width: 70px;
            height: 28px;
            font-size: 12px;
            line-height: 28px;
            display: inline-block;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            .van-button__text{
                width: 70px;
                height: 28px;
            }
       }
       .alreadydraw-btn{
            width: 70px;
            height: 28px;
            text-align: center;
            line-height: 28px;
            font-size: 12px;
            font-weight: 500;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            display: flex;
            justify-content: center;
            .van-button__text{
                width: 70px;
                height: 28px;
            }
       }
       .van-button--normal{
           padding: 0;
       }
    }
}
.Novicebenefits-sign-item-result{
    text-align: center;
    font-size: 11px;
}
.Novicebenefits-sign-item-day{
    font-size: 11px;
    color: #7F828F;
}
.Novicebenefits-sign-top-bottom-content{
    flex: 1;
    margin: 17px 0;
    .Novicebenefits-sign-top-bottom-img-right{
        width: 15.05px;
        height: 15.05px;
        margin-left: 5px;
    }
    .Novicebenefits-sign-top-bottom-content-top{
        display: flex;
        align-items: center;
    }
    p:nth-child(1){
        font-size: 14px;
        padding: 0;
        margin: 0;
        font-weight: 500;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        max-width: 180px;
    }
    p:nth-child(2){
        font-size: 12px;
        padding: 0;
        margin: 0;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        max-width: 190px;
    }
}
.Novicebenefits-reward{
    display: flex;
    background: #ffffff;
    border-radius: 10px;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .Novicebenefits-reward-item{
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
    }
}

</style>
<style lang="scss">
@import "@/assets/css/theme.scss";
.theme-light {
  .van-dialog, .van-dialog__footer, .van-dialog .van-button--default{
    background: $theme-light-colorBackground1;
    [class*=van-hairline]::after{
      border: 1px solid #F4F5FA;
    }
    .van-dialog__header{
        color: #080D21;
        font-size: 16px;
        font-weight: 500;
    }
    .popBox{
      color: #080D21;
      font-size: 16px;
      font-weight: 500;
    }
    .van-dialog__confirm{
      color: #080D21;
    }
    .van-dialog__confirm:active{
      color: #080D21;
    }
  }
  .trading-wrap-status {
    .setBorder {
      border-bottom: 2.1px solid $theme-light-textPrimary0;
      font-weight: 500;
    }
  }
}
.theme-dark {
  .van-dialog, .van-dialog__footer, .van-dialog .van-button--default{
    background: $theme-dark-colorBackground1;
    .van-dialog__header{
        color: #7F828F;
       font-size: 16px;
      font-weight: 500;
    }
    .popBox{
      color: #7F828F;
       font-size: 16px;
      font-weight: 500;
    }
    [class*=van-hairline]::after{
      border: 1px solid #1F212E;
    }
    .van-dialog__confirm{
      color: #DFE0E3;
    }
    .van-dialog__confirm:active{
      color: #DFE0E3;
    }
  }
  .trading-wrap-status {
    .setBorder {
      border-bottom: 2.1px solid $theme-dark-textPrimary0;
      font-weight: 500;
    }
  }
}
</style>