<template>
  <van-popup
    v-model="visables"
    closeable
    :close-icon="closeIcon"
    round
    position="bottom"
    @click-overlay="close"
    @click-close-icon="close"
    class="colorBackground1"
    :style="{ height: '53%', overflow: 'hidden' }"
  >
    <div class="title">
      <p class="textPrimary0">{{ $t("mining.ClaimRewards") }}</p>
    </div>
    <div class="line colorLine"></div>
    <div class="content">
      <img
        src="https://cdn.bitkeep.vip/u_b_7d8ec4f0-4b78-11ec-9826-e3fc5958ff1e.png"
        class="logo"
        alt=""
      />
      <p class="textPrimary0">{{ milliFormat(unclaimReward + sumReward) }} BKB</p>
      <div class="content_invite">
        <div class="content_invite_flex colorBackground3">
          <div class="content_invite_flex_cont">
            <div>
              <!-- https://cdn.bitkeep.vip/u_b_e7b661f0-5427-11ec-a16d-43771b230a03.png -->
              <img
                src="https://cdn.bitkeep.vip/u_b_e7b6fe30-5427-11ec-a16d-43771b230a03.png"
                alt=""
              />
              <span class="textSecond1">{{ $t("mining.tradingRewards") }}</span>
            </div>
            <div class="invite_number textPrimary0 setFontFamily">{{ milliFormat(unclaimReward) }} BKB</div>
          </div>
          <div class="content_invite_flex_cont setMargin">
            <div>
              <img
                src="https://cdn.bitkeep.vip/u_b_e7b661f0-5427-11ec-a16d-43771b230a03.png"
                alt=""
              />
              <span class="textSecond1">{{ $t("mining.invitationRewards") }}</span>
            </div>
            <div class="invite_number textPrimary0 setFontFamily">{{milliFormat(sumReward)}} BKB</div>
          </div>
        </div>
      </div>
    </div>
    <div class="confirm-bottom">
      <van-button
        class="swap-btn colorBackgroundPrimary"
        :disabled="btnStatus"
        :class="(unclaimReward + sumReward) == 0 ? 'setOpactive' : ''"
        @click="swapConfirm"
        >{{ $t("mining.confirm") }}</van-button
      >
    </div>
  </van-popup>
</template>
<script>
import { debounce } from "@/tools/common";
import { USER_API } from "@/api/client";

export default {
  data() {
    return {
      addAllContent: "",
      visables: this.show,
      btnStatus: false,
      closeIcon:
        "https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png",
    };
  },
  watch: {
    show(n) {
      this.visables = n;
    },
    theme(n) {
      if (n == 1) {
        this.closeIcon =
          "https://cdn.bitkeep.vip/u_b_d71e28c0-4c2d-11ec-ad04-d1b66ed0d35e.png";
      } else {
        this.closeIcon =
          "https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png";
      }
    },
  },
  props: ["show", "theme", "unclaimReward", "sumReward"],
  mounted () {
    // this.filter_unclaimReward = this.unclaimReward && this.milliFormat(this.unclaimReward)
    // this.filter_sumReward = this.sumReward && this.milliFormat(this.sumReward)
  },
  methods: {
    swapConfirm: debounce(async function () {
      if ((this.unclaimReward + this.sumReward) == 0) return;
      this.btnStatus = true;
      const { data, status } = await USER_API.receiveAward();
      if (status == 1) {
        this.close();
        setTimeout(() => {
          this.btnStatus = false;
        }, 1000);
        return this.$toast(data);
      }
      this.$toast(data);
      this.$emit("close", true);
      setTimeout(() => {
        this.btnStatus = false;
      }, 1000);
    }),
    close() {
      this.$emit("close", false);
    },
    milliFormat(num) {
      return (
        num &&
        num
          .toString()
          .replace(/^\d+/g, (m) => m.replace(/(?=(?!^)(\d{3})+$)/g, ","))
      );
    },
  },
};
</script>
<style lang="scss">
.van-popup__close-icon--top-right {
  top: 10px;
  right: 9px;
  img {
    width: 28px;
    height: 28px;
  }
}
.theme-dark {
  .van-toast {
    background-color: #dfe0e3;
    color: #171a26;
  }
}
</style>
<style scoped lang='scss'>
@import "@/assets/css/theme.scss";
.title {
  margin: 14px 16px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
}
.setOpactive {
  opacity: 0.3;
}
.line {
  width: 100%;
  margin-top: 0;
  height: 1px;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60%;
  overflow: auto;
  padding-top: 20px;
  .content_invite {
    width: 100%;
    .content_invite_flex {
      border-radius: 6px;
      margin:10px 20px 20px;
      padding: 10px;
      .content_invite_flex_cont {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .setMargin{
        margin-top: 14px;
      }
      img {
        width: 16px;
        height: 16px;
        vertical-align: sub;
      }
      span {
        display: inline-block;
        margin-left: 5px;
        font-size: 14px;
      }
      .invite_number{
        font-size: 14px;
      }
    }
  }
  img {
    width: 48px;
    height: 48px;
  }
  p {
    font-family: bitkeep DIN;
    font-size: 24px;
    margin: 10px;
  }
}
.confirm-bottom {
  height: 48px;
  width: 100%;
  bottom: 0;
  z-index: 99;
  position: fixed;
  padding: 11px 0 34px;
  .swap-btn {
    height: 50px;
    border-radius: 10px;
    text-align: center;
    line-height: 44px;
    border: none;
    font-weight: 500;
    font-size: 16px;
    width: 300px;
    left: 50%;
    color: #fff;
    transform: translateX(-50%);
    z-index: 0;
  }
}
</style>