<template>
  <div id="download">
    <Header>
      <div class="blindbox_header">
        <!-- <span class="header_back" @click="back">
          <div>
            <img src="@/assets/activity/blindbox/nav_back_black@2.png" />
          </div>
        </span> -->
        <span class="logo">
          <img src="@/assets/activity/blindbox/logo@2.png"
        /></span>
      </div>
    </Header>
    <div class="block_body">
      <!-- <a href="intent://scan/#Intent;scheme=zxing;package=com.google.zxing.client.android;S.browser_fallback_url=http%3A%2F%2Fzxing.org;end"> Take a QR code </a> -->

      <img :class="{[locale]:true}"  v-if="locale=='zh'" src="@/assets/activity/blindbox/download@2.png" />
      <img :class="{[locale]:true}"  v-else  src="@/assets/activity/blindbox/download@2.en.png" />
      <a class="btn" href="https://bitkeep.org">{{$t("ActivityBlindbox.button.Downloadnow")}}</a>
    </div>
  </div>
</template>
<script>
import { Header } from "@/components/common";
import { mapState } from "vuex";
export default {
  name: "Download",
  components: {
    Header
  },
  computed: {
    ...mapState(["local"]),
    isBitKeep() {
      return this.local.UA.isBitKeep;
    },
    locale() {
      return this.local.locale;
    }
  },
  mounted() {
    this.isBitKeep && BitKeepInvoke.setTitle(locale=='zh'?"下载 bitKeep":'Download bitKeep');
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style lang="scss">
#download {
  font-family: PingFang SC;
  font-style: normal;
  min-height: 100vh;
  background: #ffffff;
  .blindbox_header {
    width: 100vw;

    display: flex;
    justify-content: center;
    padding: 15px;
    box-sizing: border-box;
    align-items: center;
    .logo {
      width: 90px;
      height: 24px;
      display: flex;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .header_back {
      position: absolute;
      left: 15px;
      & > div {
        display: flex;
        justify-items: center;
        img {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
  .block_body {
    padding-top: 96px;
    text-align: center;
    img {
      width: 225px;
      height: 217px;
      &.en{
      width: 314px;
      height: 232px;
    }
    }
   
  }
  .btn {
    margin: 117px auto 0;

    background: linear-gradient(122.71deg, #5aebff 3.38%, #6d39ff 92.57%),
      #c4c4c4;
    border-radius: 100px;
    width: 225px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;

    color: #ffffff;
    &:active {
      opacity: 0.8;
    }
  }
}
</style>
