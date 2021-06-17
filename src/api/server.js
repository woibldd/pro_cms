// import LRU from "lru-cache";
// let CACHED = new LRU({
//   max: 100, // 缓存队列长度
//   maxAge: 1000 * 60 * 24 // 缓存时间 一个小时
// });
const LANG = null
function createURL(url, params) {
  url += "?";
  for (var item in params) {
    url += `${item}=${params[item]}&`;
  }
  return url.substr(0, url.length - 1);
}
export default {
  articleDetail(ctx, data = {}) {
    const { $axios,
       app,
      store,
      route,
      params,
      query,
      env,
      isDev,
      isHMR,
      redirect,
      error,
      $config
     } = ctx
   
   
    let url = createURL(`/article/detail`, params);
    console.log("请求参数：", url)
    return $axios
      .$get(url)
      .then(result => {
        console.log("响应：",result)
        return result;
      })
      .catch(err => {
        return { status: 1, msg: "请求失败" };
      });
  },


  articleLang(ctx, data = {}) {
    const { 
      $axios,
      params,
      query
     } = ctx
   
    let url = createURL(`/article/lang`, params);
    console.log("请求参数：", url)
    return $axios
      .$get(url)
      .then(result => {
        console.log("响应：",result)
        return result;
      })
      .catch(err => {
        return { status: 1, msg: "请求失败" };
      });
  },

};
