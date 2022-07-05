import axios from "axios";
import  Vue  from "vue"
import { getI18n } from "../locales"
import { debug } from 'debug'
// const requestlog = debug('bit-activity-request')
// const responselog = debug('bit-activity-response')
// const isProduction = process.env.NODE_ENV == "production";
// const HOST_URL = process.env.HOST_URL || process.env.baseURL
const requestlog = process.env.BUILD_ENV == 'pro' ? (...arg) => {
  console.log("bit-activity-request:", ...arg)
} : debug('bit-activity-request')
const responselog = process.env.BUILD_ENV == 'pro' ? (...arg) => {
  console.log("bit-activity-response:", ...arg)
} : debug('bit-activity-response')
const host_user_instance = axios.create({
  baseURL: "https://b1.bitkeep.top",
  timeout: 60000,
  headers: {
    token: "",
    // token: "",
    language: "en",
    currency: "",
    brand: "web",
    os: "",
    package: "",
    clientVersion: "",
    im: "",
  }
});


host_user_instance.interceptors.request.use(
  function (config) {
    requestlog('requestlog:',config)
    if(process.client && Vue.prototype.$store){
        const state  = Vue.prototype.$store.state
        const { UA, locale } = state.local
        if(UA.isBitKeep){
           Object.assign(config.headers,state.local.bitkeep,{
                language: locale
           })
        }else{
          Object.assign(config.headers,{
            language: locale
          })
        }
    }

    return config;
  },
  function (error) {

    return Promise.resolve({
      status: 1
    });
  }
);

// Add a response interceptor
host_user_instance.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    responselog('responselog:',error)
    // Do omething with response error
    let message = '网路开了小差'
    if(process.client){
      const  i18n = getI18n() || {}
      message =  i18n.t? i18n.t("base.networkErro") :  message
    }
    return Promise.resolve({
      status: 1,
      data: message
    });
  }
);


export const USER_API = {
  //盲盒列表
  mBoxList: (data,headers={}) => host_user_instance.get("user/activity/mBoxList", { params: data ,headers}),
  // 打开盲盒÷
  openMBox: (data,headers={}) => host_user_instance.get("user/activity/openMBox", { params: data }),

  //盲盒助力提交
  helpMBox: (data,headers={}) => host_user_instance.get("user/activity/helpMBox", { params: data }),
  //助力邀请好友列表
  userInviteList: (data,headers={}) => host_user_instance.get("user/activity/inviteList", { params: data }),


  mBoxDetail: (data,headers={}) => host_user_instance.get("user/activity/mBoxDetail", { params: data }),
  //cbkb兑换模块
  getCbkbSwapInfo: (data,headers={}) => host_user_instance.get("user/cloudwallet/getCbkbSwapInfo", { params: data }),
  swapBkb: (data,headers={}) => host_user_instance.get("user/cloudwallet/swapBkb", { params: data }),
  //BKB空投
  getAirDropCount: (data,headers={}) => host_user_instance.post("user/cloudwallet/getAirDropCount", data),
  getAirDrop: (data,headers={}) => host_user_instance.post("user/cloudwallet/getAirDrop", data),

  // 交易挖矿
  miningInfo: (data,headers={}) => host_user_instance.post("swap/mining/info", data),
  historyPhase: (data,headers={}) => host_user_instance.post("swap/mining/historyPhase", data),
  receiveAward: (data,headers={}) => host_user_instance.post("swap/mining/receiveAward", data),
  // 邀请好友
  getInviteList: (data,headers={}) => host_user_instance.post('user/friendship/getInviteList',data),
  certifyFriendship: (data,headers={}) => host_user_instance.post('user/friendship/certifyFriendship',data),
  activityDoneRewardList: (data,headers={}) => host_user_instance.post('swap/mining/activityDoneRewardList',data),

  //质押bkb
// 质押池列表
  poolList: (data,headers={}) => host_user_instance.post('/user/cloudstaking/poolList',data),
// 我的质押池列表
  myPool: (data,headers={}) => host_user_instance.post('/user/cloudstaking/myPool',data),
// 历史质押池列表
  stakeHistory: (data,headers={}) => host_user_instance.post('/user/cloudstaking/stakeHistory',data),
// 取消质押
  receiveStakingReward: (data,headers={}) => host_user_instance.post('/user/cloudstaking/receiveStakingReward',data),
  //确认质押
  staking: (data,headers={}) => host_user_instance.post('/user/cloudstaking/staking',data),
  //获取token
  handleGetToken: (data,headers={}) => host_user_instance.post('/user/cloudstaking/getToken',data),

  //trading 交易大赛
  tradingGetList: (data,headers={}) => host_user_instance.post('swap/tradeCompetition/getList',data),
  //待领取
  tradingWaitClaim: (data,headers={}) => host_user_instance.post('swap/tradeCompetition/waitClaim',data),
  //领取
  tradingClaim: (data,headers={}) => host_user_instance.post('swap/tradeCompetition/claim',data),
  //历史汇总
  tradingSummary: (data,headers={}) => host_user_instance.post('swap/tradeCompetition/summary',data),
  //历史list
  tradingHistory: (data,headers={}) => host_user_instance.post('swap/tradeCompetition/history',data),


  // 新手福利
  welfareSignIn: (data,headers={}) => host_user_instance.post('user/welfare/signIn',data), // 签到
  getRewardDetail: (data,headers={}) => host_user_instance.post('user/welfare/getRewardDetail',data),//每日抽奖详情
  getSignInDetailByUser: (data,headers={}) => host_user_instance.post('user/welfare/getSignInDetailByUser',data), // 获取某人的签到详情
  getRewardResult: (data,headers={}) => host_user_instance.post('user/welfare/getRewardResult',data), // 获取抽奖结果
  // getRewardDetail: (data,headers={}) => host_user_instance.post('user/welfare/getRewardDetail',data), // 每日抽奖详情页
  pushPapersIn: (data,headers={}) => host_user_instance.post('user/welfare/pushPapersIn',data), // 立即投入
  getJoinTeleJob: (data,headers={}) => host_user_instance.post('user/welfare/getJoinTeleJob',data), // 加入电报
  getFirstSwapJob: (data,headers={}) => host_user_instance.post('user/welfare/getFirstSwapJob',data), // swap首次交易
  getFirst50UJob: (data,headers={}) => host_user_instance.post('user/welfare/getFirst50UJob',data), // 领取50u
  newUserRewardJobs: (data,headers={}) => host_user_instance.post('user/welfare/newUserRewardJobs',data), // 新手任务


    // NFTMint
  //默认兑换列表
  nftMintGetInfo: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/getInfo",data),
  //建立邀请关系
  nftMintInvite: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/invite", data),
  //获取TX
  buildNftMintTxs: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/buildNftMintTxs", data),
  //签名token
  nftMintGetToken: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/getToken", data),
  //获取空头获奖列表
  nftMintLotteryList: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/LotteryList", data),
  //退款TX
  nftMintbuildNftMeltTxs: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/buildNftMeltTxs", data),
  //获取持有的NTT列表
  nftMintnftList: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/nftList", data),
  //查看Mint的广播状态
  nftMintcheckTransaction: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/checkTransaction", data),
  
  
};
