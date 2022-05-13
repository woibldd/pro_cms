<template>
  <van-popup v-model="visables" close-icon-position="top-right" closeable :close-on-click-overlay="false" @click-close-icon="close">
    <div class="WhitelistBox">
      <div class="content TTORegular">
        <h1 class="TTORegular title1">白名单特权</h1>
        <div class="TTORegular">1.白名单用户在5月15日开启Mint</div>
        <div class="TTORegular">2.非白名单用户在5月16日开启Mint</div>
        <div class="TTORegular">3.白名单用户购买上限为10个</div>
        <div class="TTORegular">4.非白名单用户购买上限为5个</div>
        <h1 class="TTORegular title2">怎样成为白名单？</h1>
        <div class="TTORegular">1.使用Swap进行交易过的用户</div>
        <div class="TTORegular">2.通过NFT交易市场交易过的用户</div>
      </div>
    </div>
  </van-popup>
</template>
<script>
  export default {
    name: "WhitelistCard",
    props: {
      showWhitelist: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        MintNum: 0,
        visables: this.showWhitelist,
      }
    },
     watch: {
      showWhitelist(n) {
        this.visables = n;
      },
    },
    methods: {
      close() {
        this.$emit("closeWhitelistcard", false);
      }
    }
  }

</script>
<style lang="scss" scoped>
  .WhitelistBox {
    width: 315px;
    height: 355;
    background: #202024;
    box-sizing: border-box;
    border: 1px solid #49494D;

    .content {
      padding: 30px 20px;
      box-sizing: border-box;

      h1 {
        font-size: 20px;
        font-weight: 400;
        color: #fff;
      }

      div {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        margin-top: 5px;
        word-wrap: break-word;
        word-break: normal;
      }

      .title2 {
        width: 100%;
        margin-top: 30px;
      }
    }
  }

</style>
