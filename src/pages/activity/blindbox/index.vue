<template>
  <div id="blindbox_list">
    <div class="loading" v-if="isLoading">
      <van-loading  color="#7524f9" />
    </div>
    <div v-else>
      <!-- <Header>
        <div class="blindbox_list_header">
          <span class="header_back" @click="back">
            <img src="@/assets/activity/blindbox/nav_back_black@3.png" />
          </span>
        </div>
      </Header> -->
      <div class="blindbox_list_body">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="listLoading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <div v-for="item in blindbox_list" :key="item.id" @click="handlerBtn(item, 0)">
              <div :class="{ list_item: true }">
                <div class="list_item_warpper">
                  <div v-if="item.status != 0" class="list_item_invaild"></div>
                  <div class="list_item_pic">
                    <van-image
                      width="100%"
                      height="100%"
                      lazy-load
                      :src="item.cover_image"
                    />
                  </div>
                  <div class="list_item_cont">
                    <div class="title color_blod van-ellipsis">
                      {{ item.title }}
                    </div>
                    <div class="content">
                      距离开启盲盒仅差
                      <span class="color_red">{{ item.invite  - item.already_invite }}</span
                      >/<span class="color_blod">{{ item.invite }}</span>
                      人助力 开启后将获惊喜数字资产
                    </div>
                    <div class="time van-ellipsis">
                      有效期至 {{ item.start_time | date }}
                    </div>
                  </div>
                  <div class="list_item_btn">
                    <div
                      class="btn"
                      v-if="item.status == 0"
                      @click="handlerBtn(item, 0)"
                    >
                      去开启
                    </div>
                    <div
                      class="btn"
                      v-if="item.status == 1"
                      @click="handlerBtn(item, 1)"
                    >
                      成功开启
                    </div>
                    <div
                      class="btn"
                      v-if="item.status == 2"
                      @click="handlerBtn(item, 2)"
                    >
                      已过期
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </van-list>
        </van-pull-refresh>
      </div>
    </div>

    <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> -->
  </div>
</template>

<script>
import { Header } from "@/components/common";
import Dayjs from "dayjs";
import { USER_API } from "@/api/client";

// const getDefaultImageStyle = (size = "cover", bg = "", url = "") => ({
//   background: `${bg} url(${url}) no-repeat  center center/${size || "cover"}`
// });
import { mapState } from "vuex";
export default {
  name: "blindboxIndex",
  components: { Header },
  computed: {
    ...mapState(["local"])
  },
  // async asyncData(ctx) {},

  data() {
    return {
      isLoading: true,

      listLoading: false,
      finished: false,
      refreshing: false,
      total: 20,
      start: 0,
      limit: 20,
      blindbox_list: [{},{}]
    };
  },
  async created() {},
  async beforeMount() {
    // this.onLoad();
  },
  async mounted() {
    this.showLoading();
    await this.$nextTick();
    this.hideLoading();
    this.isLoading = false;
  },

  methods: {
    async getList(pageNo = 1) {
      const { data, status } = await USER_API.mBoxList({
        start: pageNo,
        limit: this.limit
      }).catch(console);

      if (status == 1) return this.$toast.fail(data);
      this.total = data.total;
      const list = data.list.map(item => {
        item.bg_icon = `url(${item.cover_image}) no-repeat  center center/cover`;
        return item;
      });
      this.start = pageNo;
      if (pageNo == 1) {
        this.blindbox_list = list;
      } else {
        this.blindbox_list = [...this.blindbox_list, ...list];
      }
    },
    handlerBtn(item, type) {
      this.$router.push({
        path: "/activity/blindbox/detail",
        query: {
          id: item.id
        }
      });
    },
    showLoading() {
      this.Toast = this.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true
        // message: '请求中请稍后',
      });
      const isBitKeepInvoke = typeof BitKeepInvoke !== "undefined";
      // this.isLoading = true;
      isBitKeepInvoke && BitKeepInvoke.showLoading();
    },
    hideLoading() {
      if (this.Toast) {
        this.Toast.clear();
      }
      const isBitKeepInvoke = typeof BitKeepInvoke !== "undefined";
      // this.isLoading = false;
      isBitKeepInvoke && BitKeepInvoke.hideLoading();
    },
    back() {
      this.$router.back();
    },
    async onLoad(isRefresh) {
      if (this.refreshing) {
        this.blindbox_list = [];
        this.refreshing = false;
      }
      await this.getList(isRefresh?1:this.start + 1);
      this.listLoading = false;
      // if (this.total <= this.blindbox_list.length) {
      this.finished = true;
      // }
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.listLoading = true;
      this.onLoad(true);
    }
  },

  filters: {
    date(val) {
      const date = Dayjs(val);
      const str =
        date.year() == Dayjs().year()
          ? "MM-DD HH:mm:ss"
          : "YYYY-MM-DD HH:mm:ss";
      return date.format(str);
    }
  }
};
</script>

<style lang="scss" scoped>
.loading {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.color_red {
  color: #ff255a;
  font-weight: 600;
}
.color_text {
  color: #4b5373;
}
.color_blod {
  color: #080d21;
}
.btn {
  background: linear-gradient(122.71deg, #74eeff 3.38%, #6f2cff 92.57%), #c4c4c4;
  border-radius: 100px;
  height: 24px;
  width: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #ffffff;
  &:active {
    opacity: 0.8;
  }
}
#blindbox_list {
  word-break: break-all;
  background: #3d0b88;
  min-height: 100vh;
  box-sizing: border-box;
  font-style: normal;
  font-weight: normal;
  font-family: PingFang SC;

  .blindbox_list_header {
    display: flex;
    justify-content: space-between;
    padding: 22px 15px;
    box-sizing: border-box;
    img {
      width: 32px;
      height: 32px;
    }
  }
  .blindbox_list_body {
    overflow: hidden;

    .list_item {
      .list_item_warpper {
        position: relative;
        .list_item_invaild {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          background: #ffffff;
          opacity: 0.6;
        }
        overflow: hidden;
        width: 343px;
        height: 94px;
        background: #ffffff;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 10px;
        margin: 10px 16px;
        display: flex;

        justify-content: space-between;

        .list_item_pic {
          height: 74px;
          width: 74px;
          border-radius: 6px;
          overflow: hidden;
          display: flex;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .list_item_cont {
          flex: 1;
          height: 28px;
          width: 161px;
          color: #7f828f;
          font-size: 12px;
          line-height: 14px;
          margin: 0 10px;
          .title {
            margin-top: 5px;
            font-size: 16px;
            font-weight: 500;
            line-height: 16px;
            letter-spacing: 0px;
          }
          .content {
            margin: 5px 0px;
            line-height: 14px;
          }
          .time {
            font-size: 10px;
            // line-height: 10px;  //有的最小12px
          }
        }
        .list_item_btn {
          display: flex;
          align-items: flex-end;
        }
      }
    }
  }
}
</style>
