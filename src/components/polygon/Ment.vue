<template>
  <van-popup v-model="visables" close-icon-position="top-right" closeable :close-on-click-overlay="false"
    @click-close-icon="close">
    <div class="Mentpopup">
      
      <div class="TTORegular title">
        <span v-if="list.length > 1">
          选择 MELT 的 NFT
          ({{list.filter(item=>{return item.selected==true}).length}}/{{list.length}}) 
        </span>
        <span v-else>
          待 MELT 的 NFT
        </span>
      </div>
      <div class="MentList">
        <div class="Mentlogo" :class="item.selected==true?'MentlogoActive':''" v-for="item in list" :key="item.tokenId"
          @click="selected(item)">
          <img src="@/assets/img/Py_bg.png" alt="">
          <div class="TTORegular tokenId">Token ID: #{{item.tokenId}}</div>
        </div>
      </div>
      <div class="PaymentBox">
        <div class="PaymentInfo">
          <div class="title TTORegular">预估可获得</div>
          <div class="PaymentContent">
            <span class="TTOMedium">{{MATIC}} MATIC</span>
            <span class="TTOMedium"></span>
          </div>
          <div class="PaymentValue">
          </div>
        </div>
        <div class="MentSubmit TTOMedium" @click="MentToken(selectedList)">Melt</div>
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
 
  .Mentpopup {
      width: 315px;
      height: 557px;
      background: #202024;
      box-sizing: border-box;
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
        height: 200px;
        padding: 0 10px;
        .Mentlogo { 
          padding: 10px 0 8px; 
          box-sizing: border-box;
          cursor: pointer;
          &:not(:first-child) {
            margin-left: 10px;
          }

          .tokenId {
            width: 100%;
            text-align: center;
            font-size: 12px;
            color: #fff;
            margin-top: 10px;
          }

          img {
            display: block;
            width: 115px; 
            margin: 0 auto;
            border: 1px solid transparent;
          }
        }

        .MentlogoActive { 
          position: relative;
          img {
            border: 1px solid #09EFBD;
          }
          &::after {
            content: '';
            position:absolute;
            right: -10px;
            top: 0;
            width:20px;
            height: 20px;
            background-image:url(@/assets/img/icon-gou.png);
            background-size: 100% 100%;
          }
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

            .TTOMedium:first-child {
              font-size: 24px;
              color: #09EFBD;
              font-weight: 400;
            }

            .TTOMedium:last-child {
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
          background: url(@/assets/img/btnBg6.png);
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
