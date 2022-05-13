<template>
  <van-popup v-model="visables" close-icon-position="top-right" closeable :close-on-click-overlay="false"
    @click-close-icon="close">
    <div class="Mintpopup">
      <div class="Mintlogo">
        <img src="@/assets/img/Py_bg.png" alt="">
      </div>
      <div class="PaymentBox">
        <div class="TTORegular title">购买数量</div>
        <div class="PaymentNum">
          <van-icon name="minus" size="18" class="subtraction" @click="subtraction" />
          <span class="TTOMedium number">{{MintNum}}</span>
          <van-icon name="plus" size="18" class="Addition" @click="Addition" />
        </div>
        <div class="PaymentInfo">
          <div class="title TTORegular">待支付</div>
          <div class="PaymentContent">
            <span class="TTOMedium">{{MATIC}} MATIC</span>
            <!-- <span class="TTOMedium">~${{MATICPRICE}}</span> -->
          </div>
        </div>
        <div class="mintSubmit TTOMedium" @click="MintToken(MintNum)">MINT</div>
      </div>
    </div>
  </van-popup>
</template>
<script>
  export default {
    name: "Mint",
    props: {
      showMint: {
        type: Boolean,
        default: false
      },
      isWhite: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        MintNum: 1,
        visables: this.showMint,
      }
    },
    watch: {
      showMint(n) {
        this.visables = n;
      },
    },
    methods: {
      subtraction() {
        if (this.MintNum > 1) {
          this.MintNum--;
        } else {
          this.$toast("Mint数量不能小于1");
        }
      },
      Addition() {
        let MintNum=5;
        if(this.isWhite){
          MintNum=10
        }
        if (this.MintNum < MintNum) {
          this.MintNum++;
        }else{
          this.$toast(this.isWhite?"白名单用户Mint数量不能大于10个":"非白名单用户Mint数量不能大于5个");
        }
      },
      close() {
        this.$emit("closeMint", false);
        this.MintNum=1;
      },
      MintToken(MintNum) {
        if (MintNum >= 1) {
          this.$emit("closeMint", MintNum)
        } else {
          this.$toast.fail("Mint数量不能小于1");
        }
      }
    },
    computed: {
      MATIC() {
        return this.MintNum * 100;
      }
      // MATICPRICE() {
      //   return this.MintNum * 100 * 6.6
      // }
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

      .PaymentBox {
        width: 100%;

        .title {
          width: 100%;
          text-align: center;
          font-size: 14px;
          color: #fff;
          margin-top: 20px;
          margin-bottom: 10px;
          font-weight: 400;
        }

        .PaymentNum {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          .subtraction {
            font-size: 18px;
            color: #fff;
            margin-right: 10px;
            cursor: pointer;
            font-weight: 800;
          }

          .number {
            width: 40px;
            height: 40px;
            border: 1px solid #49494D;
            color: #09EFBD;
            font-size: 40px;
            margin-right: 10px;
            text-align: center;
            line-height: 40px;
            box-sizing: border-box;
          }

          .Addition {
            font-size: 18px;
            color: #fff;
            cursor: pointer;
            font-weight: 800;
          }
        }

        .PaymentInfo {
          width: 100%;
          margin: 40px 0px;
          box-sizing: border-box;

          .title {
            width: 100%;
            font-size: 14px;
            color: #fff;
            font-weight: 400;
            text-align: center;
          }

          .PaymentContent {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            :first-child {
              font-size: 24px;
              color: #09EFBD;
              font-weight: 400;
            }

            :last-child {
              font-size: 14px;
              color: #fff;
              font-weight: 400;
            }
          }
        }

        .mintSubmit {
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
      justify-content: center;
      align-items: center;
      padding: 0px 40px;
      border: 1px solid #49494D;

      .Mintlogo {
        width: 100%;

        img {
          display: block;
          width: 269px;
          height: 250px;
          margin: 0 auto;
        }
      }

      .PaymentBox {
        width: 100%;

        .title {
          width: 100%;
          text-align: center;
          font-size: 14px;
          color: #fff;
          margin-top: 20px;
          margin-bottom: 10px;
          font-weight: 400;
        }

        .PaymentNum {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          .subtraction {
            font-size: 18px;
            color: #fff;
            margin-right: 20px;
            cursor: pointer;
            font-weight: 800;
          }

          .number {
            width: 40px;
            height: 40px;
            border: 1px solid #49494D;
            color: #09EFBD;
            font-size: 40px;
            margin-right: 20px;
            text-align: center;
            line-height: 40px;
            box-sizing: border-box;
          }

          .Addition {
            font-size: 18px;
            color: #fff;
            cursor: pointer;
            font-weight: 800;
          }
        }

        .PaymentInfo {
          width: 100%;
          margin: 40px 0px;
          box-sizing: border-box;

          .title {
            width: 100%;
            font-size: 14px;
            color: #fff;
            font-weight: 400;
            text-align: center;
          }

          .PaymentContent {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            :first-child {
              font-size: 24px;
              color: #09EFBD;
              font-weight: 400;
            }

            :last-child {
              font-size: 14px;
              color: #fff;
              font-weight: 400;
            }
          }
        }

        .mintSubmit {
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
      }
    }
  }

</style>
