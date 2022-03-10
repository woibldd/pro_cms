<template>
  <div class="warp-nft">
    <div class="loading" v-if="isLoading">
      <van-loading color="#7524f9" vertical
        >{{ $t("base.loading") }}...</van-loading
      >
    </div>
    <div v-else>
      <div class="warp">
        <div class="banner">
          <img
            :src="
              locale == 'en'
                ? 'https://cdn.bitkeep.vip/u_b_6ab42f50-412d-11ec-84b4-35a471e98238.png'
                : 'https://cdn.bitkeep.vip/u_b_6ab42f50-412d-11ec-84b4-35a471e98238.png'
            "
          />
        </div>
        <div class="countdown">
          <div class="countdown-con textSecond2">
            {{ $t("nft.endCountdown") }}
          </div>
          <div class="countdown-time">
            <van-count-down
              :time="startTime"
              :format="formatEn"
              class="mining-wrap-one-body-time textPrimary0"
            /><span class="time textPrimary0">S</span>
          </div>
        </div>
        <div class="text">
          <van-button
            v-if="!status"
            class="swap-btn colorwhite colorBackgroundPrimary"
            @click="getEligibility"
            >{{ $t("nft.getEligibility") }}</van-button
          >
          <van-button
            v-if="status"
            class="swap-btn colorwhite colorBackgroundPrimary"
            @click="getEligibility"
            >{{ $t("nft.drawNow") }}</van-button
          >
          <!-- <van-button v-else class="swap-btn colorDisable textSecond3" @click="getEligibility">{{ $t("nft.not") }}</van-button> -->
        </div>
        <div class="warp-content colorBackground3">
          <div class="warp-content-con">
            <p class="warp-content-title textPrimary0">
              {{ $t("nft.qualificationTime") }}
            </p>
            <p class="textSecond1">{{ fixdStartTime }}</p>
          </div>
          <div class="warp-content-con">
            <p class="warp-content-title textPrimary0">
              {{ $t("nft.lotteryTime") }}
            </p>
            <p class="textSecond1">{{ fixdEndTime }}</p>
          </div>
        </div>
        <div class="warp-content colorBackground3">
          <p class="warp-content-title textPrimary0">{{ $t("nft.rules") }}</p>
          <div class="ruleContent">
            <p class="textSecond1">{{ $t("nft.rule1") }}</p>
            <div class="ruleContent-list">
              <p class="textSecond1">{{ $t("nft.rule2") }}</p>
              <p class="textSecond1">{{ $t("nft.rule3") }}</p>
            </div>
            <p class="textSecond1">{{ $t("nft.rule4") }}</p>
          </div>
          <p class="textSecond3" style="line-height: 18px">
            {{ $t("nft.note") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import { USER_API } from "@/api/client";
// import { debounce } from "../../../tools/common";
import { mapState } from "vuex";

export default {
  name: "nftLottery",
  data() {
    return {
      isLoading: true,
      formatEn: "DDd HHh mmm ss",
      fixdStartTime: "2021/11/12 12:00 - 2021/11/12 12:00",
      fixdEndTime: "2021/11/12 12:00 - 2021/11/13 12:00",
      startTime: null,
      endTime: null,
      status: false,
    };
  },
  computed: {
    ...mapState(["local"]),
    locale() {
      return this.local.locale;
    },
    isBitKeep() {
      return this.local.UA.isBitKeep;
    },
  },
  async created() {
    await this.$nextTick();
    this.isLoading = false;
    this.startTime = this.countDown(this.fixdStartTime);
    this.endTime = this.countDown(this.fixdEndTime);
    if (this.startTime < 0) {
      this.status = true;
      this.startTime = this.endTime;
    }
  },
  beforeMount() {
    this.isBitKeep &&
      BitKeepInvoke.onLoadReady(() => {
        BitKeepInvoke.setTitle(this.$t("nft.nftTitle"));
        this.$nextTick(() => {
          BitKeepInvoke.appMode((err, res) => {
            let body = document.getElementsByTagName("body")[0];
            if (res == 1) {
              body.setAttribute("class", "theme-dark");
            } else {
              body.setAttribute("class", "theme-light");
            }
          });
        });
      });
  },
  methods: {
    getEligibility() {
      this.getDialog();
    },
    getDialog() {
      this.$dialog.alert({
        title: this.$t("nft.dialogTitle"),
        message: `<img src='https://cdn.bitkeep.vip/u_b_817d2120-413b-11ec-84b4-35a471e98238.png'/><div class='content'>BoredNessApeClubBoredNessApeClubBoredNessApeClub</div>`,
        confirmButtonText: this.$t("nft.btn"),
        getContainer: () => document.querySelector("body"),
      });
    },
    countDown(times) {
      let time = times.split("-")[1];
      let nowTime = Date.now(); //当前时间
      let setDate = new Date(time.replace(/-/g, "/"));
      let setTime = setDate.getTime(); //设定的时间
      //获取剩余时间总秒数
      return setTime - nowTime;
    },
  },
};
</script>
<style lang='scss'>
@import "@/assets/css/theme.scss";
.van-dialog {
  .van-dialog__header {
    padding: 20px 24px 0;
    font-size: 18px;
  }
  .van-dialog__message {
    padding: 20px 24px;
  }
  .van-button__text {
    color: #7524f9;
    font-weight: 500;
  }
  img {
    width: 60px;
    height: 60px;
  }
  .content {
    color: $theme-light-textPrimary0;
    font-family: "bitkeep DIN";
    font-size: 16px;
  }
}
</style>
<style lang="scss" scoped>
@import "@/assets/css/theme.scss";
.theme-dark {
  .warp-nft {
    background: $theme-dark-colorBackground0;
  }
}

.warp-nft {
  min-height: 100vh;
  .loading {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .warp {
    padding-bottom: 25px;
  }
  .banner {
    height: 140px;
    img {
      width: 100%;
    }
  }
  .text {
    margin: 20px 0 30px;
    text-align: center;
    .swap-btn {
      border: none;
      width: 166px;
      height: 50px;
      margin: 20px auto;
      border-radius: 10px;
      font-weight: 500;
      font-size: 16px;
      line-height: 50px;
      display: block;
    }
    .disabled {
      opacity: 0.5;
    }
  }
  .countdown {
    text-align: center;
    margin-top: 30px;
    .countdown-con {
      font-size: 12px;
      line-height: 14px;
    }
    .van-count-down {
      font-size: 20px !important;
    }
    .countdown-time {
      line-height: 20px;
      margin-top: 5px;
      display: inline-block;
      font-family: "bitkeep DIN";
    }
    .mining-wrap-one-body-time {
      display: inline-block;
    }
    .time {
      font-size: 14px;
      line-height: 16px;
    }
  }
  .warp-content {
    margin: 0 16px 15px;
    border-radius: 8px;
    padding: 2px 15px;
    font-size: 14px;
    line-height: 16px;
    .warp-content-title {
      font-weight: 600;
    }
    .ruleContent {
      line-height: 18px;
    }
    .ruleContent-list{
      text-indent: -13px;
      padding-left: 13px;
      line-height: 18px;
    }
  }
}
</style>
