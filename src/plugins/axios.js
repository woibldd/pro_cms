 

let count = 0
export default function ({ $axios, store, redirect }) {
  // $axios.onError 是一个 nuxt 提供的辅助拦截器函数
  // 里面可以拦截到错误
//   $axios.interceptors.request.use(
//     config => {
//         count++
//         console.log("interceptors:server",count)
//       return config
//     },
//     error => {
//       // do something with request error
//       return Promise.reject(error)
//     }
//   )

//   // response interceptor
//   $axios.interceptors.response.use(
//     response => {
//     console.log("interceptors:serve:response",count)
//       return response
//     },
//     error => {
//       return Promise.resolve({status:1,data:error})
//     }
//   )
}

