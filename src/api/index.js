import axios from "axios";
const isProduction = process.env.NODE_ENV == "production";
console.log("_____", process.env.VUE_APP_API);
const request = axios.create({
  baseURL: process.env.VUE_APP_API || "/",
});

// request.interceptors.request.use(
//     function(config) {

//         return config;
//     },
//     function(error) {
//        r
//         return Promise.reject(error);
//     }
// );
// // Add a response interceptor
// request.interceptors.response.use(
//     function(response) {

//     },
//     function(error) {
//         loadingInstance.hide();
//         error && error.config && rmCacheKey(error.config,true)
//         // Do something with response error
//         return Promise.reject(error);
//     }
// );–

export const API = {
  getDetails: (data) => request.get("/article/detail", { params: data }),
  line_list: (data) => request.post("api/line/list", data),
  line_feedback: (data) => request.post("api/line/feedback", data),
};
