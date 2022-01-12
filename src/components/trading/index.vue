<template>
  <div>
    <div v-if="tradingList.length>0">
      <div class="trading-wrap-box-pool colorBackground1"
       v-for="(item, index) in tradingList" :key="index">
        <div class="trading-wrap-box-pool-title">
          <img
            src="https://cdn.bitkeep.vip/u_b_a6bdfc60-5113-11ec-be10-ddc2856c6ac6.png"
            alt=""
            class="bigImg"
          />
          <img
            class="smallImg"
            src="https://cdn.bitkeep.vip/u_b_090033d0-5104-11ec-be10-ddc2856c6ac6.png"
            alt=""
          />
          <div class="trading-wrap-box-pool-title-flex">
            <div class="trading-wrap-box-pool-title-left">
              <div class="textPrimary0">CAKE/BNB</div>
              <div class="textSecond2">{{$t('trading.Chain')}}</div>
            </div>
            <div class="trading-wrap-box-pool-title-right" v-if='!finished && activeType != 2'>
              <div class="textSecond2" v-if="activeType == 0">{{$t('trading.Ending')}}</div>
              <div class="textSecond2" v-if="activeType == 1">{{$t('trading.Start')}}</div>
              <div v-if="countDown > 0">
                <van-count-down
                  :time="countDown"
                  :format="formatEn"
                  class="textPrimary0 setFontFamily"
                />
              </div>
              <div class="textPrimary0" v-else>--</div>
            </div>
            <div class="trading-wrap-one-header-about colorSecond08 colorSecond18" v-else-if='finished'>
              <span>{{$t('trading.finished')}}</span>
            </div>
            <div v-else></div>
          </div>
        </div>
        <div class="trading-wrap-box-pool-content textSecond2">
          <div class="trading-wrap-line colorLine"></div>
          <div class="trading-wrap-box-pool-flex">
            <div class="trading-wrap-box-pool-left">
              <div class="textSecond3">{{$t('trading.Time')}}</div>
              <div class="textSecond3">{{$t('trading.Reward')}}</div>
            </div>
            <div class="trading-wrap-box-pool-right">
              <div class="textSecond2">
                2022.01.20 12:00 — 01.22 12:00 (GMT+8)
              </div>
              <div class="setFontFamily textSecond3">
                <span class="colorPrimary">1x</span> {{$t('trading.in')}} BKB
              </div>
            </div>
          </div>
          <div class="trading-wrap-line colorLine setMargin"></div>
          <div class="trading-wrap-box-pool-flex">
            <div class="trading-wrap-box-pool-left">
              <div class="textSecond3">{{$t('trading.YourTrading')}}</div>
              <div class="textPrimary0 setFontFamily setFont16">
                $8,125,250.87
              </div>
            </div>
            <div class="trading-wrap-box-pool-right">
              <div class="textSecond2">{{$t('trading.tradingTitle')}}</div>
              <div class="setFontFamily colorPrimary setFont16">
                +3,750.8704 BKB
              </div>
            </div>
          </div>
          <div v-if='!finished && activeType == 0'
            class="trading-wrap-box-pool-stake colorwhite colorBackgroundPrimary"
            @click="swap"
          >
            {{ $t("trading.swapNow") }}
          </div>
          <div v-else-if='!finished && activeType == 1'
            class="trading-wrap-box-pool-stake textSecond3 colorBackground2"
          >
            {{ $t("trading.ComingSoon") }}
          </div>
          <div v-else
            class="trading-wrap-box-pool-stake textSecond3 colorBackground2"
          >
            {{ $t("trading.finished") }}
          </div>
        </div>
      </div>
    </div>
    <div class="noData" v-else>
      <img src="https://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png" alt="">
      <p class="textSecond3">{{ $t('mining.noData') }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formatEn: "DDd HHh mmm sss",
      countDown: 30 * 60 * 60 * 1000,
    };
  },
  props: {
    finished:{
      type: Boolean,
      default: false
    },
    tradingList:{
      type: Array,
      default: []
    },
    activeType:{
      type: Number,
      default: 0
    }
  },
  methods: {
    swap(){
      this.$emit('swap');
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/theme.scss";
.noData{
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img{
    width: 100px;
    height: 100px;
  }
  p{
    font-size: 14px;
  }
}
.setMargin{
  margin-top: 15px;
}
.trading-wrap-box-pool {
  border-radius: 8px;
  margin-top: 10px;
  .trading-wrap-box-pool-title {
    display: flex;
    height: 54px;
    align-items: center;
    position: relative;
    .bigImg {
      width: 32px;
      height: 32px;
      display: inline-block;
      margin-left: 15px;
      vertical-align: middle;
    }
    .smallImg {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-left: -4px;
    }
  }
  .trading-wrap-line {
    width: 100%;
    height: 1px;
  }
  .trading-wrap-box-pool-title-flex {
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    .trading-wrap-box-pool-title-left {
      :first-child {
        font-weight: 600;
        font-size: 16px;
      }
      :last-child {
        font-size: 12px;
        margin-top: 2px;
        width: 125px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
    }
    .trading-wrap-one-header-about{
      height: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 24px;
      text-align: center;
      padding: 2px 12px;
      border-top-right-radius: 8px;
      border-bottom-left-radius: 8px;
      position: absolute;
      right: 0;
      top: 0;
    }
    .trading-wrap-box-pool-title-right {
      text-align: right;
      position: absolute;
      right: 15px;
      margin-top: 5px;
      :first-child {
        font-size: 12px;
      }
      :last-child {
        font-size: 12px;
        margin-top: 2px;
      }
    }
  }
  .trading-wrap-box-pool-content {
    padding: 0 15px 15px;
    .trading-wrap-box-pool-flex {
      display: flex;
      justify-content: space-between;
      padding: 15px 0 0;
      .setFont16 {
        font-size: 16px !important;
      }
      .trading-wrap-box-pool-left {
        text-align: left;
        :first-child {
          font-size: 12px;
        }
        :last-child {
          font-size: 12px;
          margin-top: 5px;
        }
      }
      .trading-wrap-box-pool-right {
        text-align: right;
        :first-child {
          font-size: 12px;
        }
        :last-child {
          font-size: 12px;
          margin-top: 5px;
        }
      }
    }
    .trading-wrap-box-pool-stake {
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-radius: 10px;
      font-weight: 500;
      font-size: 16px;
      margin-top: 15px;
    }
    .trading-wrap-box-pool-stake-now {
      background: #495bff;
      color: #fff;
    }
    .trading-wrap-box-pool-stake-soon {
      color: #9ca5b3;
    }
  }
}
</style>