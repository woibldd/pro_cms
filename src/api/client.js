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
  baseURL: "/",
  timeout: 60000,
  headers: {
    token: "",
    // token: "",
    language: "en",
    currency: "",
    brand: "",
    os: "",
    package: "",
    clientVersion: 1,
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
};
