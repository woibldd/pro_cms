<template>
  <div id="blindbox_invite">
    <div class="loading" v-if="isLoading">
      <van-loading size="1rem" vertical color="#1989fa"
        >{{ $t("base.loading") }}...</van-loading
      >
    </div>
    <div v-else>
      <Header v-if="!isBitKeep">
        <div class="blindbox_invite_header">
          <span class="header_back" @click="back">
            <img src="@/assets/activity/blindbox/nav_back_black@3.png" />
          </span>
          <span class="header_btn btn" v-if="isBitKeep">
            {{ $t("ActivityBlindboxList.myBlindboxText") }}
          </span>
        </div>
      </Header>
      <div class="block_detail_bg ">
        <van-image width="100%" height="100%" :src="info.cover_image" />
      </div>
      <BlindTimeText
        class="block_time"
        :info="info"
        :startTime="startTime"
        :endTime="endTime"
        :format="format"
        @change="chountChange"
        @end="end"
      />
      <div class="block_invite">
        <div class="block_warpper radial-gradient">
          <div class="block_header">
            <BlindTitleImage
              :isBitKeep="isBitKeep"
              :is_owner="info.is_owner"
              :status="info.status"
            />
          </div>
          <!-- 是否已经开启-->
          <!-- 金额展示 -->
          <div
            class="block_invite_coin color_red"
            v-if="info.status == 2 && info.is_owner == 1"
          >
            <span>+{{ info.amount }}</span>
            &nbsp;
            <span>{{ info.symbol }}</span>
          </div>
          <!-- 助力进度  -->
          <div v-else>
            <div class="block_invite_num color_text">
              距离开启盲盒仅差
              <span class="color_red">{{ info.surplus }}</span
              >/{{ info.invite }} 人助力
            </div>

            <div class="block_invite_progress">
              <div class="progress" :style="progress"></div>
            </div>
          </div>

          <!-- 属于ETH地址÷ -->
          <div
            class="block_invite_ETH"
            v-if="info.is_owner != 1 && info.status == 0"
          >
            <div class="invite_ETH_content">
              <input
                type="text"
                v-model="address"
                placeholder="点即此处输入 ETH 地址即可助力"
              />
            </div>
          </div>
          <!-- 操作按钮÷÷ -->
          <BlindButton
            v-if="info.status != 3"
            :isBitKeep="isBitKeep"
            @handerBotton="handerBotton"
            :info="info"
          />
          <!-- 下载地址 -->
          <div
            v-if="!isBitKeep"
            :class="{
              block_invite_down: true,
              mb: invite_list && invite_list.length > 0
            }"
          >
            <a href="https://bitkeep.org"
              >没有地址？点击下载 BitKeep 创建地址</a
            >
          </div>
          <!-- 邀请人地址 -->
          <div
            class="block_invite_list color_text"
            v-if="invite_list && invite_list.length > 0"
          >
            <div class="title">助力成功 ETH 地址：</div>
            <div
              v-for="(item, index) in invite_list"
              :key="item"
              class="block_invite_item"
            >
              <div>{{ index + 1 }}. {{ item }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="block_open_strategy">
        <div class="block_open_strategy_warpper"></div>
      </div>

      <div class="block_acitve_strategy">
        <div class="block_warpper radial-gradient">
          <div class="block_header">
            <BlindTitleImage
              type="footer"
              :isBitKeep="isBitKeep"
              :is_owner="info.is_owner"
              :status="info.status"
            />
            <!-- <img src="@/assets/activity/blindbox/title03@2.png" /> -->
          </div>
          <div class="block_body color_text">
            <div
              v-for="(item, index) in $t(
                'ActivityBlindbox.ActivityBlindboxDetail.rules'
              )"
              :key="item"
            >
              {{ index + 1 }}. {{ item }}
            </div>
          </div>
          <div class="block_footer">本活动最终解释权归 BitKeep 所有</div>
        </div>
      </div>

      <div class="block_page_footer">
        <div class="block_warpper">
          <div class="block_header">
            <img src="@/assets/activity/blindbox/logo2@3.png" />
          </div>
        </div>
      </div>
      <CreatePoster
        :zIndex="100"
        ref="CreatePoster"
        :isBitKeep="isBitKeep"
        :info="info"
        :startTime="startTime"
        :endTime="endTime"
        :format="format"
        @change="chountChange"
        @end="end"
      />
    </div>
  </div>
</template>

<script>
import { Header } from "@/components/common";
import Countdown from "@/components/common/c-vue-countdown";
import BlindTimeText from "@/components/blindbox/blindTimeText.vue";
import BlindTitleImage from "@/components/blindbox/titleImage.vue";
import BlindButton from "@/components/blindbox/BlindButton.vue";
import CreatePoster from "@/components/blindbox/createPoster.vue";
import { USER_API } from "../../../api/client";

import { mapState } from "vuex";
import { BaseMixin } from "@/mixin/base.js";
export default {
  name: "mBoxDetail",
  mixins: [BaseMixin],
  components: {
    Header,
    Countdown,
    BlindTimeText,
    BlindTitleImage,
    CreatePoster,
    BlindButton
  },
  computed: {
    ...mapState(["local"]),
    id() {
      return this.$route.query.id;
    },
    progress() {
      return `width:${(this.info.already_number / this.info.invite) * 100}%`;
    },
    isCountdown() {
      return this.info.status == 0 || this.info.status == 1;
    },
    isInvaild() {
      return this.info.status == 3;
    },
    isBitKeep() {
      return this.local.UA.isBitKeep;
    },
    locale() {
      return this.local.locale;
    }
  },
  async asyncData(ctx) {},

  data() {
    return {
      Toast: null,
      timer: null,
      format: "{dd}天{hh}小时{mm}分钟{ss}秒",
      startTime: 0,
      endTime: 0,
      isLoading: true,

      poster: {
        url: "",
        poster_url: ""
      },
      qrcodeUrl: "",

      info: {
        status: 0,
        is_owner: 1
      },
      invite_list: [],
      address: ""
    };
  },
  async created() {},
  async beforeMount() {
    this.getDetails();
  },
  async mounted() {
    await this.$nextTick();
    this.isLoading = false;
    this.init();
  },

  methods: {
    async init() {
      await this.$nextTick();
    },

    shareImage() {
      BitKeepInvoke &&
        BitKeepInvoke.shareUrl(
          this.info.title,
          this.info.title,
          location.href,
          this.info.invite_image1,
          console.log
        );
    },
    async getDetails(refresh) {
      if (!this.$route.query.id) {
        // this.$toast.fail("params id is not found");
        return false;
      }
      if (this.info.status > 1) return;
      !refresh && this.showLoading("加载中...");
      const { data, status } = await USER_API.mBoxDetail({
        id: this.$route.query.id
      });
      !refresh && this.hideLoading();

      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.getDetails(true);
      }, 5000);
      if (status != 0) {
        !refresh && this.$toast.fail(data);
        return false;
      }
      if (JSON.stringify(this.info) == JSON.stringify(data)) return false;
      this.info = data;
      this.startTime = data.current_time;
      this.endTime = new Date(data.end_time).getTime();
      this.invite_list = data.help_record || [];
      return true;
    },
    async handerBotton(type) {
      const isOwner = this.info.is_owner == 1;

      switch (String(type)) {
        //立即开启盲盒
        case "0":
          this.showLoading("开启中...");
          const openMBoxR = await USER_API.openMBox({
            id: this.$route.query.id
          });
          await this.getDetails();
          this.hideLoading();
          if (openMBoxR.status != 0) {
            return this.$toast.fail(JSON.stringify(openMBoxR.data));
          }
          break;
        // 立即邀请好友助力
        case "1":
          if (this.info.is_owner == 1) {
            this.$refs.CreatePoster && this.$refs.CreatePoster.init();
          } else {
            this.helperBtn();
          }
          break;
        //查看资产
        case "2":
          if (this.isBitKeep) {
            BitKeepInvoke.openUrl("bitkeep://cloundWallet");
          } else {
            !this.isBitKeep &&
              this.$router.push({
                path: "/activity/blindbox/download",
                query: {}
              });
          }

          break;
        default:
          break;
      }
    },
    async helperBtn(isOwner) {
      if (isOwner) {
      } else {
        if (!this.address || !this.address.replace(/ /g, "")) {
          return this.$toast.fail("助力请输入ETH地址");
        }
        this.showLoading();
        const HelpR = await USER_API.helpMBox({
          address: this.address,
          id: this.$route.query.id
        });
        this.hideLoading();
        if (HelpR.status != 0) {
          this.$toast.fail(JSON.stringify(HelpR.data));
          return;
        }
        this.getDetails();

        await this.$dialog.alert({
          message: "助力成功"
        });

        // await this.getDetails();

        !this.isBitKeep &&
          this.$router.push({
            path: "/activity/blindbox/download",
            query: {}
          });
      }
    },
    back() {
      this.$router.back();
    },
    beforeDestroy() {
      console.log(111);
      clearTimeout(this.timer);
    },
    chountChange({ dd, hh, mm, ss, ms, yy }) {},
    end() {},
    onChange() {},
    onclose() {
      console.log(arguments);
    }
  },

  filters: {}
};
</script>
<style lang="scss"></style>
<style lang="scss" scoped>
.mb {
  margin-bottom: -24px !important;
}

.loading {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#blindbox_invite {
  font-family: PingFang SC;
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  font-style: normal;
  font-weight: normal;
  background: #3d0b88;
  word-break: break-all;
  .blindbox_invite_header {
    display: flex;
    justify-content: space-between;
    padding: 22px 0 22px 15px;
    width: 100%;
    box-sizing: border-box;
    .header_btn {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      font-size: 12px;
      padding: 0 11px;
      color: #ffffff;
      height: 32px;
      background: linear-gradient(122.71deg, #5aebff 3.38%, #6d39ff 92.57%),
        #c4c4c4;
      border-radius: 100px 0px 0px 100px;
    }
    .header_back > img {
      width: 32px;
      height: 32px;
    }
  }
}

.block_invite,
.block_acitve_strategy {
  padding: 15px 16px 0px;
  width: 100%;
  box-sizing: border-box;
  .block_warpper {
    // background: #ffffff;
    border-radius: 16px;
    // width: 343px;
    box-sizing: border-box;
    padding: 10px 20px 20px;
    .block_header {
      overflow: hidden;
      width: 250px;
      height: 48px;
      margin: 0 auto;
      display: flex;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.block_invite {
  .block_warpper {
    .block_invite_num {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      text-align: center;
      margin: 15px 0;
      .color_red {
        font-size: 16px;
      }
    }
    .block_invite_progress {
      width: 280px;
      height: 5px;
      background: #f2f1fa;
      margin: 0 auto;
      border-radius: 100px;
      .progress {
        border-radius: 100px;
        // width: 101px;
        height: 5px;
        background: linear-gradient(90deg, #7067fd 0%, #4a2fd2 100%);
      }
    }
    .block_invite_ETH {
      .invite_ETH_content {
        margin-top: 20px;
        width: 303px;
        height: 60px;
        background: #f2f1fa;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.8;

        border-radius: 8px;
        input {
          border: none;
          width: 80%;
          text-align: center;
          outline: none;
          background: #f2f1fa;

          font-size: 12px;
          line-height: 16px;
          &::placeholder {
            color: #4b5373;
          }
        }
      }
    }
    // .block_invite_button {
    //   margin-top: 20px;
    //   background: url("@/assets/activity/blindbox/BTN@3.png") center center
    //     no-repeat;
    //   width: 303px;
    //   // height: 84px;
    //   background-size: 100% 100%;
    //   .heart {
    //     animation: heartbeat 1s infinite ease;
    //   }
    //   .invite_button {
    //     // animation: heartbeat 1s infinite ease-in;
    //     margin: 0 auto;
    //     width: 280px;
    //     height: 50px;
    //     background: url("@/assets/activity/blindbox/shareBtn.png") center center
    //       no-repeat;
    //     background-size: 100% 100%;
    //     text-align: center;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     color: #ffffff;
    //     font-weight: 600;
    //     font-size: 17px;

    //     &:hover {
    //       opacity: 0.6 !important;
    //     }
    //   }
    // }
    .block_invite_down {
      margin: 20px auto 0px;
      width: 100%;
      text-align: center;
      height: 16px;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      a {
        color: #495bff;
      }
    }
    .block_invite_list {
      margin-top: 34px;
      font-size: 12px;
      line-height: 16px;
      padding: 20px 16px 20px;
      overflow: hidden;
      background: #f2f1fa;
      border-radius: 8px;
      box-sizing: border-box;
      opacity: 0.8;

      .title {
        margin-bottom: 5px;
      }
      .block_invite_item {
        margin-top: 2px;
      }
    }
  }
}
.block_open_strategy {
  margin-top: 20px;
  padding: 0px 16px 0px 11px;
  box-sizing: border-box;
  width: 100%;
  .block_open_strategy_warpper {
    width: 100%;
    height: 100%;
    background: url("@/assets/activity/blindbox/02@2.png") center center
      no-repeat;
    background-size: 100% 100%;
  }

  // width: 348px;
  height: 426px;
}

.block_acitve_strategy {
  padding-top: 20px;
  overflow: hidden;
  .block_warpper {
    // .block_header {
    //   width: 178px;
    //   height: 24px;
    // }
    .block_body {
      padding-top: 15px;
      font-size: 12px;
      line-height: 18px;
      > div {
        margin-bottom: 18px;
      }
    }
    .block_footer {
      color: #999;
    }
  }
}

.block_invite_coin {
  margin-top: 15px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Gilroy;
  font-weight: bold;
  font-size: 28px;
  line-height: 28px;
  /* identical to box height, or 100% */
  // color: #ff255a;
}
.block_page_footer {
  padding: 40px 0 27px;
  box-sizing: border-box;
  .block_header {
    margin: 0 auto;
    width: 90px;
    height: 24px;
    // opacity: 0.3;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.block_detail_bg {
  width: 100%;
  display: flex;
  height: 440px;
  min-height: 440px;
  // img {
  //   width: 100%;
  //   height: 440px;
  //   // min-height:440px;
  // }
}
</style>
