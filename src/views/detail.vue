<template>
  <div id="article">
    <div class="header">
      <div class="title">
        {{ info.title }}
      </div>
      <div class="sub">
        <span>来源：</span>
        <span class="username">{{ info.user_name }}</span>
        <span>{{ info.create_time  | filterDate }}</span>
      </div>
    </div>
    <div class="content" v-html="info.content"></div>
  </div>
</template>

<script>
import { API } from "../api/index";

export default {
  name: "Home",
  data() {
    const date = new Date();
    return {
      info: {},
    };
  },

  computed: {
    id() {
      return this.$route.query.id;
    },
  },
  async mounted() {
    const toast = this.$toast.loading({ duration: 0 });
    const id = this.$route.params.id || this.$route.query.id;
    const { status, data } = await API.getDetails({ id });
    toast.clear();
    if (data.status == 0) {
      this.info = data.data;
      document.title = this.info.title;
    } else {
      this.$toast(data.data);
    }
  },
  methods: {},
  filters:{
      filterDate (create_time){
          return new Date(create_time).toLocaleString()
      }
  }
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
  .username{
    padding-right:10px;
  }
  .content {
    // margin:15px 0;
  }
}
</style>
