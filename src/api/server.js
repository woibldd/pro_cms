// import LRU from "lru-cache";
// let CACHED = new LRU({
//   max: 100, // 缓存队列长度
//   maxAge: 1000 * 60 // 缓存时间 一个小时
// });
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
   
    console.log("请求参数：", JSON.stringify(params),JSON.stringify(query))
    let url = createURL(`/article/detail`, params);
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


  getList(app, params = {}, config = {}) {
    return app.$axios.$post(`${basePHPUrl}/v1/destination/product/search`, { data: params }, config).then(result => {
      return result
    })
      .catch(err => {
        return { flag: 500, msg: "请求失败", data: {} };
      });
  }
};
