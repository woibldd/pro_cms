<template>
  <van-overlay
    :class="{
      qcodeModalwarpper: true,
      hidden: !showModal
    }"
    :show="true"
  >
    <canvas class="canvasTmp" ref="qrcode"></canvas>
    <div @click.stop class="overlayBox">
      <span class="close" name="close" @click="showModal = false" />
      <div class="poster_wrapper" v-show="!poster.url" id="poster" ref="poster">
        <img  class="poster_bg" :src="proxy_img" alt="" @load="createPoster" />
        <div class="commany_title">
          <div :class="{ content:true,[locale]:true}">
            <!-- 扫描二维码 -->
            <div>
              {{ $t("blindboxInvite.Poster") }}
            </div>
            <!-- 下载 Bitkeep，获取bkb奖励 -->
            <div>
              {{
                $t("blindboxInvite.downReward")
              }}
            </div>
          </div>
        </div>
        <div class="imgText">{{$t("blindboxInvite.imgText")}}</div>
        <img class="poster_qrcode" :src="qrcodeUrl" />
      </div>
      <div class="postershow" v-if="poster.url">
        <img :src="poster.url" />
      </div>
      <div class="footer">
        <div v-if="isBitKeep || pedding" class="btn left" @click="saveImage">
          <img src="@/assets/activity/icon/icon_saveimage@2.png" alt="" />
          <span>{{ $t("blindboxInvite.savePicture") }}</span>
        </div>
        <a
          v-else
          class="btn left"
          :href="poster.url"
          :download="new Date().getTime() + '.jpeg'"
        >
          <img src="@/assets/activity/icon/icon_saveimage@2.png" alt="" />
          <span>{{ $t("blindboxInvite.savePicture") }}</span>
        </a>
        <div v-if="isBitKeep" class="btn" @click="shareImage">
          <img src="@/assets/activity/icon/icon_sharelink@2.png" alt="" />
          <span>{{ $t("blindboxInvite.ShareLink") }}</span>
        </div>
        <div v-else class="btn">
          <img src="@/assets/activity/icon/icon_sharelink@2.png" alt="" />
          <span>{{ $t("blindboxInvite.ShareLink") }}</span>
        </div>
      </div>
    </div>
  </van-overlay>
</template>
<script>
import QRCode from "qrcode";
import { BaseMixin } from "@/mixin/base.js";
import html2canvas from "html2canvas";
import { DPR } from "@/tools/common";
export default {
  name: "CrearePoster",
  mixins: [BaseMixin],
  props: {
    locale:{
      default:"en"
    },
    zIndex: {
      default: 100
    },
    isBitKeep: {
      default: false
    },
    userInfo: {
      default: ""
    },
    info: {
      default: () => ({
        status: 0,
        is_owner: 0
      })
    }
  },
  computed: {
    proxy_img() {
      const sourceUrl = "https://cdn.bitkeep.vip/u_b_c474a860-a020-11ec-b054-8b7edc051038.jpeg";
      return sourceUrl
        ? `/poster${sourceUrl
            .replace("https://cdn.bitkeep.vip", "")
            .replace("https://cdn.bitkeep.vip", "")}`
        : "";
    },
    codeText() {
      return process.client ? location.href + '/detail?token=' + this.userInfo : "";
    }
  },
  data() {
    return {
      showModal: false,
      qrcodeUrl: "",
      poster: {
        url: ""
      },
      pedding: false
    };
  },
  async mounted() {
    this.qrcodeUrl = await QRCode.toDataURL(this.codeText, {
      errorCorrectionLevel: "H",
      quality: 100,
    }).catch(err => "");
  },
  methods: {
    init() {
      this.showModal = true;
      if (this.pedding) {
        this.showLoading(this.$t("ActivityBlindbox.toast.Generating"));
      }
    },
    async createPoster() {
      if (this.pedding) return this.showLoading(this.$t("ActivityBlindbox.toast.Generating"));
      this.showModal && this.showLoading(this.$t("ActivityBlindbox.toast.Generating"));
      this.pedding = true;
      this.poster.url = "";
      const el = this.$refs.poster;
      if (!this.qrcodeUrl) {
        this.qrcodeUrl = await QRCode.toDataURL(this.codeText).catch(err => "");
        await this.$nextTick();
      }
      console.time("poster");
      console.log({ el: el.offsetWidth });
      html2canvas(el, {
        dpi: DPR(),
        width: el.offsetWidth - 1,
        height: el.offsetHeight - 1,
        scale: 3,
        async: true,
        scrollY: 0,
        scrollX: 0,
        allowTaint: false
      })
        .then(async canvas => {
          this.poster.url = canvas.toDataURL("image/jpeg");
          await this.$nextTick();
          this.pedding = false;
          console.timeEnd("poster");
          console.time("upload");
          this.hideLoading();
        })
        .catch(err => {
          this.pedding = false;
          this.$toast.fail(JSON.stringify(err));
        });
    },
    shareImage() {
      console.log(this.info.cover_image,'123');
      
      BitKeepInvoke.shareUrl(
        this.$t("blindboxInvite.inviteTitle"),
        this.$t("ActivityBlindbox.shared.content"),
        location.href + '/detail?token=' + this.userInfo,
        this.info.cover_image,
        console.log
      );
    },
    saveImage() {
      console.log(this.poster.url,);
      
      if (this.poster.url) {
        this.showLoading(this.$t("ActivityBlindbox.toast.Saving"));
        BitKeepInvoke.saveImageFromBase64(this.poster.url, e => {
          this.hideLoading();
        });
        return;
      } else {
        this.createPoster();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.overlayBox{
  
}
.qcodeModalwarpper {
  width: 100vw;
  z-index: 100;
  &.hidden {
    z-index: -10 !important;
    opacity: 0;
  }
  .canvasTmp {
    position: absolute;
    z-index: -1;
    opacity: 0;
    width: 0px;
    height: 0px;
  }
  .close {
    position: absolute;
    z-index: 1;
    top: 26px;
    right: 26px;
    width: 28px;
    height: 28px;
    background: url("https://cdn.bitkeep.vip/u_b_a1752190-5e77-11ec-b5be-b5b1720a6926.png") center center
      no-repeat;
    background-size: 100% 100%;
  }
  .postershow {
    width: 345px;
    height: 533px;
    max-height: calc(100vh - 115px);
    margin: 18px auto 0;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .poster_wrapper {
    position: relative;
    width: 345px;
    height: 534px;
    max-height: calc(100vh - 115px);
    margin: 18px auto 0;
    position: relative;
    .poster_bg {
      width: 100%;
      height: 100%;
      display: block;
    }
    .imgText{
      position: absolute;
      top: 20px;
      left: 20px;
      width: 275px;
      font-size: 26px;
      color: #0E0E0E;
      font-weight: bold;
    }
    .commany_title {
      left: 16px;
      bottom: 22px;
      position: absolute;
      font-size: 12px;
      line-height: 18px;
      color: #0E0E0E;
      .logo {
        width: 90px;
        height: 24px;
      }
      .title {
        margin-top: 10px;
      }
      .content {
        width: 165px;
        margin-left: 5px;
        word-wrap: break-word;
        line-height: 14px;
      }
    }
    .poster_qrcode {
      position: absolute;
      right: 20px;
      bottom: 20px;
      width: 80px;
      height: 80px;
      box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.4),
        inset 0px -1px 0px rgba(255, 255, 255, 0.15);
      border-radius: 8px;
    }
  }
  .footer {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    .left {
      margin-right: 19px;
    }
    .btn {
      display: flex;
      width: 162px;
      height: 50px;
      font-size: 16px;
      // background: linear-gradient(122.71deg, #5aebff 3.38%, #6d39ff 92.57%),
        // #c4c4c4;
      background:#7524f9;
      border-radius: 100px;
      font-weight: 600;
      color: #ffffff;
      justify-content: center;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
        margin-right: 6px;
      }
    }
  }
}
</style>
