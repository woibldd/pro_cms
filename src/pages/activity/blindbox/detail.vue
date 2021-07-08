<template>
  <div id="blindbox_invite">
    <div class="loading" v-if="isLoading">
      <van-loading size="1rem" vertical color="#1989fa"
        >{{ $t("base.loading") }}...</van-loading
      >
    </div>
    <div v-else>
      <Header>
        <div class="blindbox_invite_header">
          <span class="header_back">
            <!-- <img src="@/assets/activity/blindbox/nav_back_black@3.png" /> -->
          </span>
          <span
            class="header_btn btn active"
            v-if="isBitKeep"
            @click="
              $router.replace({
                path: '/activity/blindbox/list',
                query: {}
              })
            "
          >
            {{ $t("ActivityBlindbox.title.myBlindboxText") }}
          </span>
        </div>
      </Header>
      <!-- h5图片。÷ -->
      <div class="block_detail_bg">
        <van-image width="100%" height="100%" :src="heade_image" />
      </div>
      
      <BlindTimeText
        class="block_time"
        :info="info"
        :locale="locale"
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
              :locale="locale"
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
            <!-- <div class="block_invite_num color_text">
              距离开启盲盒仅差
              <span class="color_red">{{ info.surplus }}</span
              >/{{ info.invite }} 人助力
            </div> -->
            <div
              class="block_invite_num color_text"
              v-html="
                $t('ActivityBlindbox.ActivityBlindboxDetail.blindBoxNumText', {
                  surplus: this.info.surplus || 0,
                  invite: this.info.invite || 0
                })
              "
            ></div>

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
              <textarea
                type="text"
                ref="textarea"
                v-model="address"
                @focus="handlerFocus"
                :class="{
                  focus: focus || !!address
                }"
                @blur="handlerBlur()"
                :placeholder="
                  focus
                    ? ''
                    : $t(
                        'ActivityBlindbox.ActivityBlindboxDetail.inputAddressPlaceholader'
                      )
                "
              />
              <span></span>
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
            class="block_invite_down"
          >
          
            <a href="https://bitkeep.org">{{
              $t("ActivityBlindbox.ActivityBlindboxDetail.NoAddressDownload")
            }}</a>
          </div>
          <!-- 邀请人地址 -->
          <div
            :class="{
              block_invite_list:true,
              color_text:true,
              mt: !isBitKeep
            }"
            class=" "
            v-if="invite_list && invite_list.length > 0"
          >
            <div class="title">
              {{
                $t("ActivityBlindbox.ActivityBlindboxDetail.HelpSuccessETH")
              }}：
            </div>
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

        <!-- 开启盲盒攻略 -->
      <div class="block_open_strategy">
        <div :class="{block_open_strategy_warpper:true,[locale]:true }"></div>
      </div>

      <!-- 底部规则÷ -->
      <div class="block_acitve_strategy">
        <div class="block_warpper radial-gradient">
          <div class="block_header">
            <BlindTitleImage
              type="footer"
              :isBitKeep="isBitKeep"
              :locale="locale"
              :is_owner="info.is_owner"
              :status="info.status"
            />
            <!-- <img src="@/assets/activity/blindbox/title03@2.png" /> -->
          </div>
          <div class="block_body color_theme">
            <div
              class="rules_item"
              v-for="(item, index) in $t(
                'ActivityBlindbox.ActivityBlindboxDetail.rules'
              )"
              :key="item"
            >
               <span>{{ index + 1 }}.&nbsp;</span>
               <span class="con">{{ item }}</span>
            </div>
          </div>
          <div class="block_footer">{{$t("ActivityBlindbox.ActivityBlindboxDetail.FinalInterpretation")}}</div>
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
        :locale="locale"
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
    },
    format(){
        return  this.locale=='zh'? "{dd}天{hh}时{mm}分{ss}秒":"{dd} D {hh} H {mm} M {ss} S"
    },
    heade_image(){
      return this.info.status==2 ?  this.info.prize_image : this.info.poster_image
    }
  },
  async asyncData(ctx) {},

  data() {
    return {
      Toast: null,
      timer: null,

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
      address: "",
      focus: false
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
    handlerFocus() {
      this.focus = true;
    },
    handlerBlur() {
      this.focus = false;
    },
    async getDetails(refresh) {
      if (!this.$route.query.id) {
        // this.$toast.fail("params id is not found");
        return false;
      }
      if (this.info.status > 1) return;
      !refresh && this.showLoading(this.$t("ActivityBlindbox.toast.loading"));
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
      this.isBitKeep && BitKeepInvoke.setTitle(this.info.title);
      return true;
    },
    async handerBotton(type) {
      const isOwner = this.info.is_owner == 1;
      switch (String(type)) {
        //立即开启盲盒
        case "0":
          // 云钱包不存在，是否现在创建云钱包
          if (this.info.isCloudWallet != 1) {
            const isComfirm = await new Promise(resolve =>
              BitKeepInvoke.confirm(
                this.$t("ActivityBlindbox.dialog.isCreateWalletComfirm"),
                resolve
              )
            );
            isComfirm && BitKeepInvoke.openUrl("bitkeep://cloudCreateWallet");
            return 
          }
          this.showLoading(this.$t("ActivityBlindbox.toast.open"));
          const openMBoxR = await USER_API.openMBox({
            id: this.$route.query.id
          });
          await this.getDetails();
          this.hideLoading();
          if (openMBoxR.status != 0) {
            return this.$toast.fail(openMBoxR.data);
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
            this.info.isCloudWallet == 1
              ? BitKeepInvoke.openUrl("bitkeep://cloudWallet")
              : BitKeepInvoke.openUrl("bitkeep://cloudCreateWallet");
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
          this.$toast.fail(this.$t("ActivityBlindbox.toast.inputETH"));
          this.$refs.textarea && this.$refs.textarea.focus();
          return;
        }
        this.showLoading();
        const HelpR = await USER_API.helpMBox({
          address: this.address,
          id: this.$route.query.id
        });
        this.hideLoading();
        if (HelpR.status != 0) {
          this.$toast.fail(HelpR.data);
          return;
        }
        this.getDetails();

        this.$toast.success(this.$t("ActivityBlindbox.toast.ContributeSuccess"))
        // await new Promise((resolve) =>
        //   BitKeepInvoke.alert(
        //     this.$t("ActivityBlindbox.dialog.helperSuccess"),
        //     resolve
        //   )
        // );
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
  // margin-bottom: -24px !important;
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
    }
    .rules_item{
       display: flex;
       .con{
         flex: 1;
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
      // white-space: nowrap;
      margin: 15px 0;
      .color_red {
        font-size: 20px;
      }
    }
    .block_invite_progress {
      width: 280px;
      height: 5px;
      background: #ffffff;
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
        background: #ffffff;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.8;
        textarea {
          border-radius: 8px;
          border: none;
          width: 271px;
          height: 32px;
          padding: 14px;
          text-align: center;
          line-height: 32px;
          outline: none;
          background: #ffffff;
          resize: none;
          font-size: 12px;
          &::placeholder {
            color: #4b5373;
          }
          &.focus {
            line-height: 16px;
            font-size: 12px;
            text-align: left;
          }
        }
      }
    }
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
      position: relative;
      z-index: 10;
      margin-top: 34px;
      font-size: 12px;
      line-height: 16px;
      padding: 20px 16px 20px;
      // overflow: hidden;
      background: #ffffff;
      border-radius: 8px;
      box-sizing: border-box;
      opacity: 0.8;
      &.mt{
         margin-top: 10px;
      }
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
    &.en{
        background: url("@/assets/activity/blindbox/02@2.en.png") center center
      no-repeat;
      background-size: 100% 100%;
    }
  }
  

  // width: 348px;
  height: 426px;
}

.block_acitve_strategy {
  padding-top: 20px;
  overflow: hidden;
  .block_warpper {
    .block_header {
      // width: 178px;
      // height: 24px;
    }
    .block_body {
      padding-top: 15px;
      font-size: 12px;
      line-height: 18px;
      > div {
        margin-bottom: 18px;
      }
    }
    .block_footer {
      color: #0c099899;
      // word-wrap:break-word; 
      word-break:  keep-all;
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
  font-family: "bitkeep EN BLOD";
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
