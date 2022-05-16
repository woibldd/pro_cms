<template>
  <van-popup v-model="visables" close-icon-position="top-right" closeable :close-on-click-overlay="false" @click-close-icon="close">
    <div class="WhitelistBox">
      <div class="content TTORegular">
        <h1 class="TTORegular title1">{{$t('polygon.whiteTitle')}}</h1>
        <div class="TTORegular">{{$t('polygon.whiteTips1')}}</div>
        <div class="TTORegular">{{$t('polygon.whiteTips2')}}</div>
        <div class="TTORegular">{{$t('polygon.whiteTips3')}}</div>
        <div class="TTORegular">{{$t('polygon.whiteTips4')}}</div>
        <h1 class="TTORegular title2">{{$t('polygon.whiteTips9')}}</h1>
        <div class="TTORegular">{{$t('polygon.whiteTips5')}}</div>
        <div class="TTORegular">{{$t('polygon.whiteTips6')}}</div>
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
      line-height: 2em;
      h1 {
        font-size: 20px;
        font-weight: 400;
        line-height: 2em;
        color: #fff;
      }

      div {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        margin-top: 5px;
        word-wrap: break-word;
        word-break: normal;
        line-height: 2em;
      }

      .title2 {
        width: 100%;
        margin-top: 30px;
      }
    }
  }

</style>
