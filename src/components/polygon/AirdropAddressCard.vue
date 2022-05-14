<template>
  <van-popup v-model="visables" close-icon-position="top-right" :close-on-click-overlay="false" closeable
    @click-close-icon="close">
    <div class="AirdropAddressBox">
      <div class="content">
        <div class="title TTORegular">以下每个地址均获得 <span class="TTOMedium">BKB奖励</span></div>
        <div class="getTime TTORegular">{{((new Date).getTime())-86400000|timeFilter}}</div>
        <div class="list">
          <div @touchmove.stop="touchmove"  class="Addresslist" style="" > 
            <!-- <van-list :finished="true">
              <van-cell v-for="dr in showList" :key="dr" :title="dr">
                <van-row gutter="20">
                  <van-col  v-for="(item, index) in dr" :key="index" class="item TTORegular" span="8">
                    {{item}}
                  </van-col> 
                </van-row>
                <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; height: 30px;">
                  <div v-for="(item, index) in dr" :key="index" class="item TTORegular" >{{item}}</div>
                </div>
              </van-cell>
            </van-list>  -->
            <!-- <van-grid :border="false" :column-num="3">
              <van-grid-item v-for="(item, index) in LotteryList" :key="index" class="item TTORegular" :text="item"> 
              </van-grid-item> 
            </van-grid> -->
            <!-- <p style="display:grid; grid-template-columns: 1fr 1fr 1fr;">
              <span 
                @touchmove="touchmove" 
                @touchstart="touchstart" 
                @touchend="touchend" 
                v-for="(item, index) in LotteryList" 
                :key="index" class="grid-item item TTORegular" >{{item}}</span>
            </p> -->
            <!-- <div style="position:absolute; top:0; left:0; z-index: 100; width: 100%; height:100%;"></div> -->
             <div v-for="(item, index) in LotteryList" :key="index"  class="item TTORegular"> 
              {{item}} 
            </div> 
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
      LotteryList: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        MintNum: 0,
        visables: this.showAirdropAddress,
      }
    },
    computed: {
      showList() {
        const list = []
        let dr = []
        for (let i = 0; i < this.LotteryList.length; i++) {  
          if (dr.length < 3) {
            dr.push(this.LotteryList[i])
          }
          if (i % 3 === 2) {
            list.push(dr)
            dr = []
          } 
        } 
        return list
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
      },
      touchmove(event) {  
      }, 
    },
    async mounted() {
     
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
          overflow: auto;  
          box-sizing: border-box; 
          display:grid; 
          grid-template-columns: 1fr 1fr 1fr; 
          padding-bottom: 20px;

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
