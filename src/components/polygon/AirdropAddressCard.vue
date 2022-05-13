<template>
  <van-popup v-model="visables" close-icon-position="top-right" :close-on-click-overlay="false" closeable
    @click-close-icon="close">
    <div class="AirdropAddressBox">
      <div class="content">
        <div class="title TTORegular">以下每个地址均获得 <span class="TTOMedium">BKB奖励</span></div>
        <div class="getTime TTORegular">{{((new Date).getTime())-86400000|timeFilter}}</div>
        <div class="list">
          <div class="Addresslist">
            <!-- <div v-for="(item, index) in airdropList" :key="index" class="item TTORegular">
            </div> -->
             <van-row gutter="20">
              <van-col  v-for="(item, index) in airdropList" :key="index" class="item TTORegular" span="8">
                {{item}}
              </van-col> 
            </van-row>
          </div>
        </div>
      </div>
    </div>
  </van-popup>
</template>
<script>
  export default {
    name: "AirdropAddressCard",
    props: {
      showAirdropAddress: {
        type: Boolean,
        default: false
      },
      airdropList: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        MintNum: 0,
        visables: this.showAirdropAddress,
      }
    },
    watch: {
      showAirdropAddress(n) {
        this.visables = n;
      },
    },
    methods: {
      close() {
        this.$emit("closeAirdropAddressCard", false);
      }
    }
  }

</script>
<style lang="scss" scoped>
  .AirdropAddressBox {
    width: 315px;
    // height: 557px;
    background: #202024;
    box-sizing: border-box;
    border: 1px solid #49494D;

    .content {
      padding: 20px 10px 0px 10px;
      box-sizing: border-box;

      .title {
        font-size: 14px;
        font-weight: 400;
        color: #fff;
        text-align: left;

        span {
          font-size: 20px;
          color: #09EFBD;
        }
      }

      .getTime {
        margin: 10px 0px;
        font-size: 14px;
        font-weight: 400;
        color: #fff;
      }

      .list {
        width: 100%;
        height: 454px;
        overflow: auto;
        .Addresslist {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          box-sizing: border-box;

          .item {
            display: block;
            width: 93px;
            height: 14px;
            font-weight: 400;
            color: #fff;
            box-sizing: border-box;
            margin: 10px 0px 0;
          }
        }
      }
    }
  }

</style>
