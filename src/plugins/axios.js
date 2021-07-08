

import { debug } from 'debug'
const requestlog = process.env.BUILD_ENV == 'pro' ? (...arg) => {
  console.log("bit-article-request", ...arg)
} : debug('bit-article-request')
const responselog = process.env.BUILD_ENV == 'pro' ? (...arg) => {
  console.log("bit-article-response", ...arg)
} : debug('bit-article-response')
export default function ({ $axios, store, redirect }) {
  // $axios.onError 是一个 nuxt 提供的辅助拦截器函数
  // 里面可以拦截到错误
  $axios.interceptors.request.use(
    config => {
      requestlog(config.url, config.params || '', config.data || '')
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  // response interceptor
  $axios.interceptors.response.use(
    response => {
      responselog(response.status, response.config ? response.config.url : "")
      return response
    }
    ,
    error => {
      return Promise.resolve({ status: 1, data: error })
    }
  )
}

