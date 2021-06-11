import axios from "axios";
const isProduction = process.env.NODE_ENV == "production";
console.log("_____", process.env.VUE_APP_API);
const   request = axios.create({
  baseURL: process.env.VUE_APP_API || "/",
});

// request.interceptors.request.use(
//     function(config) {

//         return config;
//     },
//     function(error) {

//         return Promise.resolve({
//           status:1
//         });
//     }
// );
// Add a response interceptor
request.interceptors.response.use(
    function(response) {
        return  response.data
    },
    function(error) {


        // Do omething with response error
         return Promise.resolve({
          status:1,
          data:"网路开了小差"
        });
    }
);

export const API = {
  getDetails: (data) => request.get("/article/detail", { params: data }),
  line_list: (data) => request.post("api/line/list", data),
  line_feedback: (data) => request.post("api/line/feedback", data),
};
