<template>
  <div id="article">
    <div class="header">
      <div class="title">
        {{ info.title }}
      </div>
      <div class="sub">
        <span>来源：</span>
        <span class="username">{{ info.user_name }}</span>
        <span>{{ info.create_time | filterDate }}</span>
      </div>
    </div>
    <div  v-if="info.content" class="content"  v-html="info.content"></div>
    <div  v-else class="noData">
         该文章不存在
    </div>
    <van-image-preview
      close-on-popstate
      closeable
      :start-position="current"
      v-model="showPreview"
      :images="images"
      @change="onChange"
      @onclose="onclose"
    />
  </div>
</template>

<script>
import API from "@/api/server.js";
export default {
  name: "Detail",
  async asyncData(ctx) {
    const result = await API.articleDetail(ctx);
    const { status, data } = result;

    const info =
      String(data) == "null" || !data
        ? {
            title: "该文章不存在",
          }
        : data;
    
    if (status == 0) {
      ctx.app.head.title = info.title;
      return {
        info
      };
    } else {
      return {
         info
      };
    }
  },
  data() {
    return {
      showPreview: false,
      images: [],
      current: 0,
      info: {

      }
    };
  },
  async mounted() {
    await this.$nextTick();
    const self = this;
    const imgs = document.getElementById("article").getElementsByTagName("img");
    this.images = Array.from(imgs)
      .map((v, index) => {
        v.setAttribute("show_index", index);
        v.onclick = function () {
          self.showPreview = true;
          self.current = Number(this.getAttribute("show_index") || 0);
        };
        return v.getAttribute("src") || v.getAttribute("href");
      })
      .filter((v) => v);
  },
  methods: {
    onChange() {},
    onclose() {
      console.log(arguments);
    },
  },

  filters: {
    filterDate(create_time) {
      function isZero(m) {
        return m < 10 ? "0" + m : m;
      }
      //时间戳是整数，否则要parseInt转换
      var time = new Date(create_time|| new Date().getTime()); // 需要使用Date格式进行日期转化，若是时间戳、字符串时间，需要通过new Date(..)转化
      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      return (
        y +
        "—" +
        isZero(m) +
        "-" +
        isZero(d) +
        " " +
        isZero(h) +
        ":" +
        isZero(mm)
      );
    },
  },
};
</script>
<style lang="scss" scoped>
#article {
  min-height: 100vh;
  margin: 0 auto;
  padding: 15px 16px;
  box-sizing: border-box;
  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  }
  .sub {
    margin: 15px 0;
    font-family: PingFang SC;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    /* identical to box height, or 100% */

    text-align: justify;

    /* textSecond3 */

    color: #6d707d;
  }
  .username {
    padding-right: 10px;
  }
  .content {
    // margin:15px 0;
    white-space: pre
  }
  .noData{
    color: #999;
    line-height: 60vh;
    font-size: 30px;
    text-align: center;
  }
}
</style>
