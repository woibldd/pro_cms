<template>
  <van-popup v-model="visables" close-icon-position="top-right" closeable :close-on-click-overlay="false"
    @click-close-icon="close">
    <div class="Mentpopup">
      <div class="TTORegular title">选择 MELT 的 NFT
        ({{list.filter(item=>{return item.selected==true}).length}}/{{list.length}})</div>
      <div class="MentList">
        <div class="Mentlogo" :class="item.selected==true?'MentlogoActive':''" v-for="item in list" :key="item.tokenId"
          @click="selected(item)">
          <img src="@/assets/img/Py_bg.png" alt="">
          <div class="TTORegular tokenId">{{item.tokenId}}</div>
        </div>
      </div>
      <div class="PaymentBox">
        <div class="PaymentInfo">
          <div class="title TTORegular">预估可获得</div>
          <div class="PaymentContent">
            <span class="TTOMedium">{{MATIC}} MATIC</span>
          </div>
        </div>
        <div class="MentSubmit TTOMedium" @click="MentToken(selectedList)">Ment</div>
      </div>
    </div>
  </van-popup>
</template>
<script>
  export default {
    name: "Ment",
    props: {
      showMent: {
        type: Boolean,
        default: false
      },
      MentList: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        visables: this.showMent,
        list: this.MentList.map(item => {
          item.selected = false;
          return item
        }),
        selectedList: [],
      }
    },
    watch: {
      showMent(n) {
        this.visables = n;
      },
    },
    methods: {
      selected(tokenId) {
        this.list = this.list.map(item => {
          if (item.tokenId == tokenId.tokenId) {
            item.selected = !item.selected;
          }
          return item
        })
        this.selectedList = this.list.filter(item => {
          return item.selected == true
        }).map(item => {
          return item.tokenId
        })
      },
      close() {
        this.$emit("closeMent", false);
      },
      MentToken(tokens) {
        if (tokens.length > 0) {
          this.$emit("closeMent", tokens)
        } else {
          this.$toast.fail("Ment数量不能小于0");
        }
      }
    },
    computed: {
      MATIC() {
        return this.selectedList.length * 100;
      }
    }
  }

</script>
<style lang="scss" scoped>
  @media screen and (min-width: 960px) {
    .Mentpopup {
      width: 790px;
      height: 478px;
      background: #202024;
      box-sizing: border-box;
      padding: 0px 40px;
      border: 1px solid #49494D;

      .title {
        width: 100%;
        font-size: 20px;
        color: #fff;
        font-weight: 400;
        text-align: center;
        margin: 40px 0px;
      }

      .MentList {
        display: flex;
        justify-content: flex-start;
        overflow: auto;

        .Mentlogo {
          width: 100%;
          padding: 5px;
          margin-right: 20px;
          cursor: pointer;

          .tokenId {
            width: 100%;
            text-align: center;
            font-size: 14px;
            color: #fff;
            margin-top: 10px;
          }

          img {
            display: block;
            width: 173px;
            height: 161px;
            margin: 0 auto;
          }
        }

        .MentlogoActive {
          width: 100%;
          border: 1px solid #09EFBD;
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


        .PaymentInfo {
          width: 100%;
          margin: 20px 0px;
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

        .MentSubmit {
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
  .Mentpopup {
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

</style>
