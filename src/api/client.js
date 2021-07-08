import axios from "axios";
import  Vue  from "vue"
// import { debug } from 'debug'
// const requestlog = debug('bit-activity-request')
// const responselog = debug('bit-activity-response')
// const isProduction = process.env.NODE_ENV == "production";
// const HOST_URL = process.env.HOST_URL || process.env.baseURL

const host_user_instance = axios.create({
  baseURL: "/",
  timeout: 60000,
  headers: {
    token: "",
    // token: "",
    language: "zh",
    currency: "",
    brand: "",
    os: "",
    package: "",
    clientversion: "",
    im: ""
  }
});


host_user_instance.interceptors.request.use(
  function (config) {
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

    console.error("___",error)
    // Do omething with response error
    return Promise.resolve({
      status: 1,
      data: "网路开了小差"
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


  mBoxDetail: (data,headers={}) => host_user_instance.get("user/activity/mBoxDetail", { params: data })
  
};
