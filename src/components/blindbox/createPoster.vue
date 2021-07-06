<template>
  <van-overlay
    :class="{
      qcodeModalwarpper: true,
      hidden: !showModal
    }"
    :show="true"
  >
    <canvas class="canvasTmp" ref="qrcode"></canvas>
    <div @click.stop>
      <BlindTimeText
        class="block_time"
        :info="info"
        :startTime="startTime"
        :endTime="endTime"
        :format="format"
      />
      <span class="close" name="close" @click="showModal = false" />
      <div class="poster_wrapper" v-show="!poster.url" id="poster" ref="poster">
        <!-- <img class="poster_bg"  :src="info.invite_image1" alt="" /> -->
        <img class="poster_bg" :src="proxy_img" alt="" @load="createPoster" />
          <!-- <van-image  class="poster_bg" width="100%" height="100%" @load="createPoster" :src="proxy_img" /> -->
        <div class="commany_title">
          <img
            class="logo"
            src="@/assets/activity/blindbox/poster_logo@2.png"
            alt=""
          />
          <div class="content">
            <div>扫描领取数字盲盒</div>
            <div>下载 Bitkeep，瓜分盲盒中数字资产</div>
          </div>
        </div>
        <img class="poster_qrcode" :src="qrcodeUrl" />
      </div>
      <div class="postershow" v-show="poster.url">
        <img :src="poster.url" />
      </div>
      <div class="footer">
        <div v-if="isBitKeep || pedding" class="btn left" @click="saveImage">
          <img src="@/assets/activity/blindbox/BTN1@2.png" alt="" />
        </div>
        <a
          v-else
          class="btn left"
          :href="poster.url"
          :download="new Date().getTime() + '.jpeg'"
        >
          <img src="@/assets/activity/blindbox/BTN1@2.png" alt="" />
        </a>
        <div v-if="isBitKeep" class="btn" @click="shareImage">
          <img src="@/assets/activity/blindbox/BTN2@2.png" alt="" />
        </div>
        <div v-else class="btn">
          <img src="@/assets/activity/blindbox/BTN2@2.png" alt="" />
        </div>
      </div>
    </div>
  </van-overlay>
</template>
<script>
import QRCode from "qrcode";
import { mapState } from "vuex";
import { BaseMixin } from "@/mixin/base.js";
import html2canvas from "html2canvas";
import BlindTimeText from "@/components/blindbox/blindTimeText.vue";
import { getImageInfo, Download, downloadFile, DPR } from "@/tools/common";
export default {
  name: "CrearePoster",
  mixins: [BaseMixin],
  components: { BlindTimeText },
  props: {
    zIndex: {
      default: 100
    },
    isBitKeep: {
      default: false
    },
    qrcodeText: {
      default: ""
    },
    info: {
      default: () => ({
        status: 0,
        is_owner: 0
      })
    },
    format: {
      default: () => "{dd}天{hh}小时{mm}分钟{ss}秒"
    },
    startTime: {
      default: () => 0
    },
    endTime: {
      default: () => 0
    }
  },
  computed: {
    proxy_img() {
      const sourceUrl = this.info.invite_image1 || ""
      return sourceUrl? `/poster${(sourceUrl)
        .replace("http://cdn.bitkeep.vip", "")
        .replace("https://cdn.bitkeep.vip", "")}`:'';
    },
    codeText() {
      return this.qrcodeText || (process.client ? location.href : "");
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
    this.qrcodeUrl = await QRCode.toDataURL(this.codeText,{
      errorCorrectionLevel: 'H',
      //  quality: 1,
      // margin: 5,
      color: {
  
      // // background: ;
      // dark:"#FFBF60FF",
      // light:"#ffffffb3"
    }
    }).catch(err => "");
  },
  methods: {
    init() {
    
     this.showModal = true;
      if (this.pedding) {
        this.showLoading("生成中...");
      }
    },
    async createPoster() {
      // if(!this.proxy_img && !this.info.invite_image1) return 
      if (this.pedding) return this.showLoading("生成中...");

      this.showModal && this.showLoading("生成中...");
      this.pedding = true
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
        // backgroundColor: "#fff",
        // useCORS: true,
        // windowWidth: document.body.scrollWidth,
        // windowHeight: document.body.scrollHeight,
        width: el.offsetWidth - 1,
        height: el.offsetHeight - 1,
        scale: 1,
        async: true,
        // width: 375,
        // height: 812,
        scrollY: 0,
        scrollX: 0,
        allowTaint: false
      })
        .then(async canvas => {
          // canvas.toBlob((blob) => {
          //   console.log({blob})
          // })
          // canvas.toDataURL("image/png");
          // const wid = canvas.width;
          // const hei = canvas.height;
          // const img = html2canvas.convertToJPEG(canvas, wid, hei);
          // const dataURL = img.getAttribute("src");
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
      BitKeepInvoke.shareUrl(
        this.info.title,
        this.info.title,
        location.href,
        this.info.invite_image1,
        console.log
      );
    },
    saveImage() {
      if (this.poster.url) {
        this.showLoading("保存中...");
        BitKeepInvoke.saveImageFromBase64(this.poster.url, e => {
          this.hideLoading();
        });
        return;
      } else {
        this.createPoster();
      }
      // this.createPoster();
    }
  }
};
</script>
<style lang="scss">
.qcodeModalwarpper {
  width: 100vw;
  z-index: 100;
  &.hidden {
    z-index: -10 !important;
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
    top: 60px;
    right: 26px;
    width: 28px;
    height: 28px;
    background: url("@/assets/activity/blindbox/icon_close@2.png") center center
      no-repeat;
    background-size: 100% 100%;
  }
  .block_time {
    opacity: 0.6;
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
    // display: flex;
    // width: 100%;

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
    .commany_title {
      left: 16px;
      bottom: 22px;
      position: absolute;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      /* or 150% */

      color: #ffffff;
      .logo {
        width: 90px;
        height: 24px;
      }
      .title {
        margin-top: 10px;
      }
    }
    .poster_qrcode {
      position: absolute;
      right: 18px;
      bottom: 20px;
      width: 60px;
      height: 60px;
  
      box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.4), inset 0px -1px 0px rgba(255, 255, 255, 0.15);

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
      background: linear-gradient(122.71deg, #5aebff 3.38%, #6d39ff 92.57%),
        #c4c4c4;
      border-radius: 100px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
