<template>
  <div class="Novicebenefits">
      <div class="Novicebenefits-box">
            <div class="Novicebenefits-title textPrimary0">
                {{$t('noviceBenefits.sign')}}
                <van-image
                   
                    src="https://cdn.bitkeep.vip/u_b_47485390-4f90-11ec-ace3-97579b99c357.png"
                />
        </div>
        <div class="Novicebenefits-sign">
            <div class="Novicebenefits-sign-top">
                <div class="Novicebenefits-sign-title">{{$t('noviceBenefits.alreadySignedin')}}<span class="colorBlue">{{signDay}}</span>{{$t('noviceBenefits.day')}}</div>
                <div class="Novicebenefits-sign-top-signlist" >
                    <div v-for="(item,index) in signList.list" :key="index" class="Novicebenefits-sign-item">
                        
                        <div @click="welfareSignInfunc(index)">
                            <p class="Novicebenefits-sign-item-img">
                                <span v-if="item.day === 4 || item.day === 7" class="Novicebenefits-sign-item-img-obtain">{{$t('noviceBenefits.obtain')}}</span>
                                <van-image
                                    v-if="!item.isSignin"
                                    :src="(item.day === 4 || item.day === 7) && index === signDay ? 'https://cdn.bitkeep.vip/u_b_aa80c7c0-7615-11ec-9d29-f144d09ca5ed.png' : index === signDay ? 'https://cdn.bitkeep.vip/u_b_56e30a70-7448-11ec-a3df-456c694c3f18.png' : (item.day === 4 || item.day === 7) ? 'https://cdn.bitkeep.vip/u_b_65c04710-7448-11ec-a3df-456c694c3f18.png' : 'https://cdn.bitkeep.vip/u_b_5457fe50-743e-11ec-a3df-456c694c3f18.png'"
                                />
                                <van-image
                                    v-else
                                    :src="(item.day === 4 || item.day === 7) ? 'https://cdn.bitkeep.vip/u_b_78224830-7449-11ec-a3df-456c694c3f18.png' : 'https://cdn.bitkeep.vip/u_b_384a1810-7448-11ec-a3df-456c694c3f18.png'"
                                />
                            </p>
                            <!-- 签到 -->
                            <p v-if="index === signDay" class="Novicebenefits-sign-item-result colorBlue">{{$t('noviceBenefits.Signedin')}}</p>
                            <p v-else class="Novicebenefits-sign-item-result Novicebenefits-sign-item-day"> {{index < signDay ? $t('noviceBenefits.alreadySignedin'): item.day + $t('noviceBenefits.day') }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Novicebenefits-sign-top-bottom">
                <div class="Novicebenefits-sign-top-bottom-img">
                    <van-image
                        class="Novicebenefits-sign-top-bottom-img-left"
                        src="https://cdn.bitkeep.vip/u_b_d856c8b0-72a1-11ec-bb03-832c5d2a67c5.png"
                    />
                </div>
                <div class="Novicebenefits-sign-top-bottom-content">
                    <p>{{$t('noviceBenefits.Currently')}} <span class="colorBlue">{{signList.lottery}}</span> {{$t('noviceBenefits.zhang')}}
                    <van-image
                        class="Novicebenefits-sign-top-bottom-img-right"
                        src="https://cdn.bitkeep.vip/u_b_47485390-4f90-11ec-ace3-97579b99c357.png"
                    /></p>
                    <p>{{$t('noviceBenefits.Participate')}} {{signList.reward_pool}} BKB！</p>
                </div>
                <div class="Novicebenefits-sign-top-bottom-btn">
                    <van-button class="draw-btn" @click="drawClick()">{{$t('noviceBenefits.Draw')}} </van-button>
                </div>
            </div>
        </div>
        <div class="Novicebenefits-title" v-if="!!newUser.isNewUser">{{$t('noviceBenefits.Novice')}}</div>
        <ul class="Novicebenefits-reward Novicebenefits-sign-top-bottom" v-if="!!newUser.isNewUser && (!newUser.isDoneTelJob || !newUser.isDoneSwap || !newUser.isDone50U)">
            <!-- 加入Telegram -->
            <li class="Novicebenefits-reward-item Novicebenefits-sign-top-bottom">
                <div class="Novicebenefits-sign-top-bottom-img">
                    <van-image
                        src="https://cdn.bitkeep.vip/u_b_ce1f5eb0-72a7-11ec-bb03-832c5d2a67c5.png"
                    />
                </div>
                <div class="Novicebenefits-sign-top-bottom-content">
                    <p>{{$t('noviceBenefits.Telegram')}}</p>
                    <p>{{$t('noviceBenefits.Reward')}} BKB +1</p>
                </div> 
                <div class="Novicebenefits-sign-top-bottom-btn">
                    <span class="alreadydraw-btn" v-if="!!newUser.isDoneTelJob">{{$t('noviceBenefits.alreadyReceived')}}</span>
                    <van-button class="draw-btn" @click="joinTelegram()" v-else> {{!!joinTelegramflag ?  $t('noviceBenefits.Getitnow') : $t('noviceBenefits.Join')}}</van-button>
                </div>
            </li>

            <li class="Novicebenefits-reward-item Novicebenefits-sign-top-bottom" v-if="!newUser.isDoneSwap">
                <!-- swap交易 -->
                <div class="Novicebenefits-sign-top-bottom-img">
                    <van-image
                        src="https://cdn.bitkeep.vip/u_b_bb1dd750-72a8-11ec-bb03-832c5d2a67c5.png"
                    />
                </div>
                <div class="Novicebenefits-sign-top-bottom-content">
                    <p>{{$t('noviceBenefits.swap')}}</p>
                    <p>{{$t('noviceBenefits.raffle')}}</p>
                </div>
                <div class="Novicebenefits-sign-top-bottom-btn">
                    <van-button class="draw-btn" @click="SwapTransaction()">{{!newUser.isUpToSwap ?  $t('noviceBenefits.Getitnow') : $t('noviceBenefits.Immediate')}}</van-button>
                </div>
            </li>

            <li class="Novicebenefits-reward-item Novicebenefits-sign-top-bottom" v-if="!newUser.isDone50U">
                <!-- 入金50u -->
                <div class="Novicebenefits-sign-top-bottom-img">
                    <van-image
                        src="https://cdn.bitkeep.vip/u_b_cb358fc0-72a8-11ec-bb03-832c5d2a67c5.png"
                    />
                </div>
                <div class="Novicebenefits-sign-top-bottom-content">
                    <p>{{$t('noviceBenefits.USDT')}}</p>
                    <p>{{$t('noviceBenefits.Reward')}} BKB +2</p>
                </div>
                <div class="Novicebenefits-sign-top-bottom-btn">
                    <span v-if="!newUser.isUpTo50U" class="alreadydraw-btn"> {{$t('noviceBenefits.standard')}}</span>
                    <van-button class="draw-btn" @click="UpTo50U()" v-if="newUser.isUpTo50U">{{ $t('noviceBenefits.Join')}}</van-button>
                </div>
            </li>
        </ul>

         <div class="Novicebenefits-title">{{$t('noviceBenefits.Morebenefits')}}</div>
        <ul class="Novicebenefits-reward Novicebenefits-sign-top-bottom">
            <li class="Novicebenefits-reward-item Novicebenefits-sign-top-bottom">
                <div class="Novicebenefits-sign-top-bottom-img">
                    <van-image
                        src="https://cdn.bitkeep.vip/u_b_5c7c1070-72be-11ec-9c27-5bf3ec58d767.png"
                    />
                </div>
                <div class="Novicebenefits-sign-top-bottom-content">
                    <p>{{$t('noviceBenefits.Airdropactivity')}}</p>
                    <p>{{$t('noviceBenefits.Access')}}</p>
                </div>
                <div class="Novicebenefits-sign-top-bottom-btn">
                    <van-button class="draw-btn" @click="viewairdrop()">{{$t('noviceBenefits.Viewnow')}}</van-button>
                </div>
            </li>

            <li class="Novicebenefits-reward-item Novicebenefits-sign-top-bottom">
                <div class="Novicebenefits-sign-top-bottom-img">
                    <van-image
                        src="https://cdn.bitkeep.vip/u_b_63083e00-72be-11ec-9c27-5bf3ec58d767.png"
                    />
                </div>
                <div class="Novicebenefits-sign-top-bottom-content">
                    <p>{{$t('noviceBenefits.Blindboxactivity')}}</p>
                    <p>{{$t('noviceBenefits.AccessNFT')}}</p>
                </div>
                <div class="Novicebenefits-sign-top-bottom-btn">
                    <van-button class="draw-btn" @click="viewblindbox()">{{$t('noviceBenefits.Viewnow')}}</van-button>
                </div>
            </li>

            <li class="Novicebenefits-reward-item Novicebenefits-sign-top-bottom">
                <div class="Novicebenefits-sign-top-bottom-img">
                    <van-image
                        src="https://cdn.bitkeep.vip/u_b_5fcf5a20-72be-11ec-9c27-5bf3ec58d767.png"
                    />
                </div>
                <div class="Novicebenefits-sign-top-bottom-content">
                    <p>{{$t('noviceBenefits.Invitation')}}</p>
                    <p>{{$t('noviceBenefits.Invitefriends')}}</p>
                </div>
                <div class="Novicebenefits-sign-top-bottom-btn">
                    <van-button class="draw-btn" @click="viewblindboxInvite()">{{$t('noviceBenefits.Viewnow')}}</van-button>
                </div>
            </li>
        </ul>
      </div>
  </div>
</template>
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
      signList:{
        reward_pool: 0,
        lottery: 0,
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
        isDone50U: false,
        isUpToSwap:false
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
    }
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
        }
    },
    async viewblindbox(){
        // 查看盲盒
        window.location.href = window.location.origin + '/activity/blindbox/list';
    },
    async viewairdrop(){
        // 查看空投
        window.location.href = 'https://h5.bitkeep.biz/airdropClaim.html#/?_needChain=all&lang=en';
    },
    async viewblindboxInvite(){
        // 查看邀请
        window.location.href = window.location.origin + '/activity/blindboxInvite';
    },
    // 新手任务已经是否是新用户
    async newUserRewardJobs(){
        const { data, status } = await USER_API.newUserRewardJobs();
        if(data){
            this.newUser = data;
        }
    },
    async UpTo50U(){
        const { data, status } = await USER_API.getFirst50UJob();
        if(data === true){
            this.$toast('领取成功');
            this.newUserRewardJobs();
        }else{
            this.$toast('领取失败');
        }
    },
    async SwapTransaction(){
        // SWAP交易
        if(!newUser.isUpToSwap){
            BitKeepInvoke.nativeApp();
            localStorage.setItem('SwapTransaction',true);
        }else{
            const { data, status } = await USER_API.getFirstSwapJob();
            if(data === true){
                this.$toast('领取成功');
                this.newUserRewardJobs();
            }else{
                this.$toast('领取失败');
            }
        }
    },
    async joinTelegram(){
        // 加入Telegram
        if(!this.joinTelegramflag){
            // 立即加入
            this.joinTelegramflag = true;
            localStorage.setItem('joinTelegram',true);
        }else{
            // 立即领取
            const { data, status } = await USER_API.getJoinTeleJob();
            if(data === true){
                this.$toast('领取成功');
                this.newUserRewardJobs();
            }else{
                this.$toast('领取失败');
            }
        }
    },
    async welfareSignInfunc(index){
        if (index !== this.signDay) return;
        const { data, status } = await USER_API.welfareSignIn();
        console.log(data, 'datatat')
        if(data === true){
            this.signList.list[index].isSignin = true;
            this.$toast('签到成功');
        }else{
            this.$toast('签到失败');
        }
    },

    // 获取某人的签到详情
    async getSignInDetailByUser(){
        const { data, status } = await USER_API.getSignInDetailByUser();
        if(data){
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
p{
    margin: 0;
    padding: 0;
}
.Novicebenefits{
    width: 100%;
    background: #F8F9FA;
    height: 100%;
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
    padding-top: 10px;
    .van-image{
        width: 16px;
        height: 16px;
        margin: 0 0 0 6px;
    }
}
.Novicebenefits-sign{
    width: 100%;
    height: 182px;
    background: #ffffff;
    border-radius: 10px;
}
.Novicebenefits-sign-top{
    height: 110px;
    .Novicebenefits-sign-top-signlist{
        border-bottom: 2px solid #F4F5FA;
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
                    top: -10px;
                    width: 46px;
                    height: 18px;
                    background: #1CBDB5;
                    border-radius: 20px;
                    text-align: center;
                    color: #FFFFFF;
                    font-size: 11px;
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
    color:  #080D21;
    padding: 15px 0 0 15px;
}
.Novicebenefits-sign-top-bottom{
    display: flex;
    .Novicebenefits-sign-top-bottom-img-left{
        width: 32px;
        height: 32px;
    }
    .Novicebenefits-sign-top-bottom-img{
        margin: 24px 20px 24px 20px;
        .van-image{
            width: 32px;
            height: 32px;
        }
    }
    .Novicebenefits-sign-top-bottom-btn{
        margin: 24px 16px 21px 0;
       .draw-btn{
           width: 72px;
           height: 28px;
           background: #495BFF;
           font-size: 12px;
           color: #ffffff;
           line-height: 28px;
           border-radius: 100px;
       }
       .alreadydraw-btn{
           display: inline-block;
           width: 72px;
           height: 28px;
           text-align: center;
           line-height: 28px;
           font-size: 12px;
           color: #9CA5B3;
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
        width: 15px;
        height: 15px;
        margin-left: 5px;
    }
    p:nth-child(1){
        color:  #080D21;
        font-size: 14px;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
    }
    p:nth-child(2){
        color:  #7F828F;
        font-size: 12px;
        padding: 0;
        margin: 0;
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
.colorBlue{
    color: #495BFF;
    padding: 0 3px 0 3px;
}
</style>
