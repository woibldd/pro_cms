<template>
  <van-popup v-model="visables" close-icon-position="top-right" closeable :close-on-click-overlay="false" @click-close-icon="close">
    <div class="AirdropAwardBox">
      <div class="content">
        <div class="title TTORegular">
          {{$t('polygon.awardTitle')}}
        </div>
        <!-- <div class="BKB TTOMedium">{{luckNum}} BKB</div> -->
        <div class="Walletaddress">
          <div class="title TTORegular">
            {{$t('polygon.awardAddress')}}
          </div>
          <div class="address TTORegular">
            {{currentAddress}}
          </div>
        </div>
        <!-- <div class="Getitnow TTOMedium">立即领取</div>
        <div class="yunWallet TTORegular">开通云钱包即可领取 <span>去创建</span></div> -->
      </div>
    </div>
  </van-popup>
</template>
<script>
  export default {
    name: "AirdropAwardCard",
    props: {
      showAirdropAward: {
        type: Boolean,
        default: false
      },
      currentAddress: {
        type: String,
        default: ''
      },
      luckNum: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        MintNum: 0,
        visables: this.showAirdropAward,
      }
    },
    watch: {
      showAirdropAward(n) {
        this.visables = n;
      },
    },
    methods: {
      close() {
        this.$emit("closeAirdropAwardCard", false);
      }
    }
  }

</script>
<style lang="scss" scoped>
  .AirdropAwardBox {
    width: 315px; 
    background: #202024;
    box-sizing: border-box;
    border: 1px solid #49494D;

    .content {
      padding: 40px 20px 20px;
      box-sizing: border-box;

      .title {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        text-align: center;
        margin-bottom: 10px;
      }

      .BKB {
        margin-bottom: 20px;
        font-size: 30px;
        font-weight: 500;
        color: #09EFBD;
        text-align: center;
      }

      .Walletaddress {
        width: 100%;
        text-align: center;
        margin-bottom: 40px;

        .title {
          font-size: 14px;
          font-weight: 400;
          color: #fff;
          text-align: center;
        }

        .address {
          font-size: 14px;
          font-weight: 400;
          color: #fff;
          text-align: center;
          word-wrap: break-word;
          word-break: normal;
        }
      }

      .Getitnow {
        width: 198px;
        height: 44px;
        line-height: 44px;
        background: url(@/assets/img/btnBg5.png);
        background-size: 100% 100%;
        margin: 0 auto;
        text-align: center;
        font-size: 20px;
        color: #fff;
        cursor: pointer;
      }

      .yunWallet {
        margin-top: 20px;
        font-size: 16px;
        color: #fff;
        text-align: center;

        span {
          color: #09EFBD;
          text-decoration: underline;
        }
      }

    }
  }

</style>
