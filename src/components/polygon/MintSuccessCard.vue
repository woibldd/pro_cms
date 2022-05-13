<template>
  <van-popup v-model="visables" close-icon-position="top-right" closeable :close-on-click-overlay="false"
    @click-close-icon="close">
    <div class="Mintpopup">
      <div class="Mintlogo" v-for="item in MintData" :key="item.tokenId">
        <img src="@/assets/img/Py_bg.png" alt="">
        <div class="tokenId TTORegular">{{item.tokenId}}</div>
      </div>
    </div>
  </van-popup>
</template>
<script>
  export default {
    name: "MintSuccess",
    props: {
      showMintSuccess: {
        type: Boolean,
        default: false
      },
      MintData: {
        type: Array,
        default: () => []
        }
    },
    data() {
      return {
        MintNum: 1,
        visables: this.showMintSuccess,
      }
    },
    watch: {
      showMintSuccess(n) {
        this.visables = n;
      },
    },
    methods: {
      close() {
        this.$emit("closeMintSuccess", false);      }
    }
  }

</script>
<style lang="scss" scoped>
  @media screen and (max-width: 959px) {
    .Mintpopup {
      width: 315px;
      height: 557px;
      background: #202024;
      box-sizing: border-box;
      border: 1px solid #49494D;

      .Mintlogo {
        width: 100%;
        padding-top: 20px;

        img {
          display: block;
          width: 215px;
          height: 206px;
          margin: 0 auto;
        }
      }

    }
  }

  @media screen and (min-width: 960px) {
    .Mintpopup {
      width: 790px;
      height: 410px;
      background: #202024;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0px 40px;
      border: 1px solid #49494D;
      overflow: auto;
      .Mintlogo {
        width: 100%;
        .tokenId{
          width: 100%;
          text-align: center;
          margin-top: 20px;
          font-size: 18px;
          color: #fff;
        }
        img {
          display: block;
          width: 269px;
          height: 250px;
          margin: 0 auto;
        }
      }
    }
  }

</style>
