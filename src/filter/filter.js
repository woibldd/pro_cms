import Vue from 'vue';
//合约地址模糊展示
Vue.filter('blurredDisplay', function (value) {
    let res = value.toString();
    return res.slice(0,4) + '...' + res.slice(-4);
});
//日期格式过滤器
Vue.filter("timeFilter", function (value) {
    if (value == 0) {
      return "--"
    } else {
      var oDate = new Date(value),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth() + 1,
        oDay = oDate.getDate()
      if (oMonth < 10) {
        oMonth = "0" + oMonth;
      }
      if (oDay < 10) {
        oDay = "0" + oDay;
      }
      return oMonth +'-'+oDay+'-'+oYear
    }
  })
