<template>
  <div id="blindbox_list">
    <div class="loading" v-if="isLoading">
      <van-loading color="#1989fa" />
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
        <van-pull-refresh
          class="blindbox_list_content"
          v-model="refreshing"
          @refresh="onRefresh"
        >
          <van-list v-model="listLoading" :finished="finished" @load="onLoad">
            <div
              v-for="item in blindbox_list"
              :key="item.id"
              @click="handlerBtn(item, 0)"
            >
              <div :class="{ list_item: true }">
                <div
                  :class="{
                    list_item_warpper: true,
                    'radial-gradient': true,
                    active: true,
                    invaild: item.status == 3
                  }"
                >
                  <div class="tag">
                    <span
                      :class="{
                        btn: true,
                        shared: true,
                        [locale]: true
                      }"
                      v-if="item.is_owner != 1"
                      >{{
                        $t("ActivityBlindbox.ActivityBlindboxList.ShareWithMe")
                      }}</span
                    >
                    <span
                      :class="{
                        btn: true,
                        open: true,
                        [locale]: true
                      }"
                      v-else-if="item.status == 1 && item.is_owner == 1"
                      >{{
                        $t("ActivityBlindbox.ActivityBlindboxList.willOpened")
                      }}</span
                    >
                    <span v-else></span>
                  </div>
                  <div class="list_item_pic">
                    <van-image
                      width="100%"
                      height="100%"
                      :src="item.cover_image"
                    />
                  </div>
                  <div class="list_item_cont">
                    <div
                      :class="{
                        title: true,
                        color_blod: true,
                        'van-ellipsis': true,
                        [locale]: true
                      }"
                    >
                      {{ item.title }}
                    </div>
                    <div class="content">
                      <span
                        v-html="
                          $t(
                            'ActivityBlindbox.ActivityBlindboxList.blindBoxNumText',
                            {
                              surplus: item.invite - item.already_invite,
                              invite: item.invite
                            }
                          )
                        "
                      ></span>
                      <div>
                        {{
                          $t(
                            "ActivityBlindbox.ActivityBlindboxList.blindBoxSurpriseText"
                          )
                        }}
                      </div>
                      <!-- 距离开启盲盒仅差
                      <span class="color_red">{{
                        item.invite - item.already_invite
                      }}</span
                      >/<span class="color_blod">{{ item.invite }}</span>
                      人助力 开启后将获惊喜数字资产 -->
                    </div>
                    <div class="time van-ellipsis">
                      <span>{{
                        $t(
                          "ActivityBlindbox.ActivityBlindboxList.ValidUntilText"
                        )
                      }}</span>
                      {{ item.end_time | date }}
                    </div>
                  </div>
                  <!-- 按钮÷ -->
                  <div class="list_item_btn">
                    <div
                      class="btn"
                      v-if="item.status == 0"
                      @click="handlerBtn(item, 0)"
                    >
                      {{
                        $t("ActivityBlindbox.ActivityBlindboxList.GoShareText")
                      }}
                    </div>

                    <div
                      class="btn"
                      v-if="item.status == 1 && item.is_owner == 1"
                      @click="handlerBtn(item, 1)"
                    >
                      {{
                        $t("ActivityBlindbox.ActivityBlindboxList.GoOpenText")
                      }}
                    </div>
                    <div
                      class="btn"
                      v-if="item.status == 1 && item.is_owner != 1"
                      @click="handlerBtn(item, 0)"
                    >
                      {{
                        $t("ActivityBlindbox.ActivityBlindboxList.GoShareText")
                      }}
                    </div>
                    <div
                      class="btn"
                      v-if="item.status == 2"
                      @click="handlerBtn(item, 2)"
                    >
                      {{
                        $t(
                          "ActivityBlindbox.ActivityBlindboxList.SuccessfullyOpenedText"
                        )
                      }}
                    </div>
                    <div
                      class="btn"
                      v-if="item.status == 3"
                      @click="handlerBtn(item, 2)"
                    >
                      {{
                        $t("ActivityBlindbox.ActivityBlindboxList.expiredText")
                      }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </van-list>
          <div
            class="noData color_theme"
            v-if="!listLoading && (!blindbox_list || blindbox_list.length == 0)"
          >
            <div class="title">
              {{ $t("ActivityBlindbox.ActivityBlindboxList.noData.title") }}
            </div>
            <div class="content">
              {{ $t("ActivityBlindbox.ActivityBlindboxList.noData.content") }}
            </div>
          </div>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script>
import { Header } from "@/components/common";
import Dayjs from "dayjs";
import { USER_API } from "@/api/client";
import { mapState } from "vuex";
export default {
  name: "mBoxList",
  components: { Header },
  computed: {
    ...mapState(["local"]),
    locale() {
      return this.local.locale;
    },
    isBitKeep() {
      return this.local.UA.isBitKeep;
    }
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
      blindbox_list: []
    };
  },
  async created() {},
  async beforeMount() {
    this.isBitKeep &&
      BitKeepInvoke.setTitle(this.$t("ActivityBlindbox.title.myBlindboxText"));

    // this.onLoad(true);
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
      });

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
        path: `/activity/blindbox/detail/${item.id}`,
        // query: {
        //   id: item.id,
        // }
      });
    },
    showLoading() {
      this.Toast = this.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true
        // message: '请求中请稍后',
      });
      // const isBitKeepInvoke = typeof BitKeepInvoke !== "undefined";
      // // this.isLoading = true;
      // isBitKeepInvoke && BitKeepInvoke.showLoading();
    },
    hideLoading() {
      if (this.Toast) {
        this.Toast.clear();
      }
      // const isBitKeepInvoke = typeof BitKeepInvoke !== "undefined";
      // // this.isLoading = false;
      // isBitKeepInvoke && BitKeepInvoke.hideLoading();
    },
    back() {
      this.$router.back();
    },
    async onLoad(isRefresh) {
      if (this.refreshing) {
        this.blindbox_list = [];
        this.refreshing = false;
      }
      await this.getList(isRefresh ? 1 : this.start + 1);
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
.font-18 {
  font-size: 18px;
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
  overflow: hidden;
  position: relative;
  .tag {
    position: absolute;
    right: 0;
    top: 0;

    .btn {
      border-radius: 0px 10px;
      font-size: 11px;
      line-height: 11px;
      height: 24px;
      font-weight: 500;
      width: 78px;
      white-space: nowrap;

      display: flex;
      justify-content: center;
      align-items: center;
      &.open {
        background: linear-gradient(274.96deg, #bc0eff 0.67%, #ff81e2 100%);
        color: #ffffff;
      }
      &.shared {
        color: #1cbdb5;
        background: linear-gradient(
          274.96deg,
          rgba(0, 199, 215, 0.2) 0.67%,
          rgba(115, 255, 221, 0.2) 100%
        );
      }
      &.en {
        width: 95px;
      }
    }
  }
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
    margin-top: 10px;
    .blindbox_list_content {
      min-height: 100vh;
    }
    .noData {
      // border: 2px solid #d5c6ff;
      box-sizing: border-box;
      width: 220px;
      height: 282px;
      margin: 166px auto 0;
      box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(10px);
      /* Note: backdrop-filter has minimal browser support */
      border-radius: 18px;
      background: url("@/assets/activity/blindbox/noDatabg@2.png") center center
        no-repeat;
      background-size: 100% 100%;
      text-align: center;
      overflow: hidden;
      .title {
        margin-top: 120px;
        font-size: 18px;
        line-height: 18px;
        font-weight: 800;
      }
      .content {
        font-size: 14px;
        line-height: 20px;
        text-align: justify;
        margin: 15px 30px 0px;
      }
    }

    .list_item {
      .invaild {
        opacity: 0.4;
      }
      .list_item_warpper {
        position: relative;
        overflow: hidden;
        width: 343px;
        // height: 94px;

        border-radius: 10px;
        box-sizing: border-box;
        padding: 10px;
        margin: 10px 16px;
        display: flex;
        justify-content: space-between;
        border-radius: 10px;
        align-items: center;
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
          // height: 28px;
          width: 161px;
          color: #7f828f;
          font-size: 10px;
          line-height: 14px;
          margin: 0 10px;
          .title {
            margin-top: 5px;
            font-size: 16px;
            font-weight: 500;
            line-height: 18px;
            letter-spacing: 0px;
            color: #080d21;
            &.en {
              line-height: 18px;
            }
          }
          .content {
            margin: 5px 0px;
            line-height: 14px;
            // color: #7f828f;
            color: #4b5373;
          }
          .time {
            font-size: 10px;
            line-height: 12px;
            color: #4b5373;
            // line-height: 10px;  //有的最小12px
          }
        }
        .list_item_btn {
          height: 74px;
          display: flex;
          display: flex;
          align-items: flex-end;
          // align-items: flex-end;
          // align-self: flex-end;
        }
      }
    }
  }
}
</style>
