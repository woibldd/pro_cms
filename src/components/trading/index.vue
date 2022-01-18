<template>
  <div>
    <div v-if="tradingList && tradingList.length>0">
      <div class="trading-wrap-box-pool colorBackground1"
       v-for="(item, index) in tradingList" :key="index">
        <div class="trading-wrap-box-pool-title">
          <img
            v-if="item.fromIcon"
            :src="item.fromIcon"
            alt=""
            class="bigImg colorBackground0"
          />
          <div v-else class="noImg colorBackground2 noImgOne textSecond3 setFontFamily">
            {{item.fromSymbol.length> 4 ? item.fromSymbol.substring(0,4).toUpperCase(): item.fromSymbol.toUpperCase()}}
          </div>
          <img
            v-if="item.toIcon"
            class="smallImg colorBackground0"
            :src="item.toIcon"
            alt=""
          />
          <div v-else class="noImg noImgTwo colorBackground2 textSecond3 setFontFamily">
            {{ item.toSymbol.length> 4 ? item.toSymbol.substring(0,4).toUpperCase(): item.toSymbol.toUpperCase()}}
            </div>
          <div class="trading-wrap-box-pool-title-flex">
            <div class="trading-wrap-box-pool-title-left">
              <div class="textPrimary0">{{item.fromSymbol.toUpperCase()}}/{{item.toSymbol .toUpperCase()}}</div>
              <div class="textSecond3">{{item.chainName}}</div>
            </div>
            <div class="trading-wrap-box-pool-title-right" v-if='!finished && activeType != 2'>
              <div class="textSecond3" v-if="activeType == 0">{{$t('trading.Ending')}}</div>
              <div class="textSecond3" v-if="activeType == 1">{{$t('trading.Start')}}</div>
              <div v-if="item.countdown > 0">
                <van-count-down
                  :time="item.countdown"
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
              <div class="textSecond2 setFontFamily">
                {{item.startTime}} — {{item.endTime}} (GMT+8)
              </div>
              <div class="setFontFamily textSecond2">
                <span class="colorPrimary">{{item.rate}}x</span> {{$t('trading.in')}} BKB
              </div>
            </div>
          </div>
          <div class="trading-wrap-line colorLine setMargin"></div>
          <!-- MY -->
          <div class="trading-wrap-box-pool-flex" v-if='!finished && activeType == 0'>
            <div class="trading-wrap-box-pool-left">
              <div class="textSecond3">{{$t('trading.TodayTradingValue')}}</div>
              <div class="textPrimary0 setFontFamily setFont16">
                ${{milliFormat(item.allTradingVolumeToday)}}
              </div>
            </div>
            <div class="trading-wrap-box-pool-right">
              <div class="textSecond3">{{$t('trading.TodayTradingReward')}}</div>
              <div class="setFontFamily colorPrimary setFont16">
                +{{milliFormat(item.rewardToday)}} BKB
              </div>
            </div>
          </div>
          <!-- YOUR -->
          <div class="trading-wrap-box-pool-flex" v-if='activeType != 1'>
            <div class="trading-wrap-box-pool-left">
              <div class="textSecond3">{{$t('trading.YourTradingValue')}}</div>
              <div class="textPrimary0 setFontFamily setFont16">
                ${{milliFormat(item.allTradingVolume)}}
              </div>
            </div>
            <div class="trading-wrap-box-pool-right">
              <div class="textSecond3">{{$t('trading.YourTradingReward')}}</div>
              <div class="setFontFamily colorPrimary setFont16">
                +{{milliFormat(item.reward)}} BKB
              </div>
            </div>
          </div>
          <div v-if='!finished && activeType == 0'
            class="trading-wrap-box-pool-stake colorwhite colorBackgroundPrimary"
            @click="swap(item.swapNow)"
          >
            {{ $t("trading.swapNow") }}
          </div>
          <div v-else-if='!finished && activeType == 1'
            class="trading-wrap-box-pool-stake textSecond3 colorBackground2"
          >
            {{ $t("trading.ComingSoon") }}
          </div>
          <div v-else-if="!finished && activeType == 2"
            class="trading-wrap-box-pool-stake textSecond3 colorBackground2"
          >
            {{ $t("trading.finished") }}
          </div>
        </div>
      </div>
    </div>
    <div class="noData" :class="!finished?'setHeight': ''" v-else>
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
    };
  },
  props: {
    finished:{
      type: Boolean,
      default: false
    },
    tradingList:{
      type: Array,
      default: ()=>{}
    },
    activeType:{
      type: Number,
      default: 0
    }
  },
  methods: {
    swap(swapNow){
      this.$emit('swap', swapNow);
    },
    milliFormat(num) {
      return (
        num &&
        num
          .toString()
          .replace(/^\d+/g, (m) => m.replace(/(?=(?!^)(\d{3})+$)/g, ","))
      );
    },
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/theme.scss";
.theme-light {
  .bigImg{
    border: 1px solid $theme-light-colorBackground1;
    border-radius: 50%;
  }
  .noImg{
    border: 1px solid $theme-light-colorBackground1;
  }
  .smallImg{
    border: 1px solid $theme-light-colorBackground1;
    border-radius: 50%;
  }
  .noImg{
    border: 1px solid $theme-light-colorBackground1;
  }
}
.theme-dark {
  .bigImg{
    border: 1px solid $theme-dark-colorBackground0;
    border-radius: 50%;
  }
  .smallImg{
    border: 1px solid $theme-dark-colorBackground0;
    border-radius: 50%;
  }
}
.setHeight{
  min-height: 32vh!important;
}
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
    // margin-bottom: 4px;
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
      margin-left: -5px;
    }
    .noImg{
      display: inline-block;
      width: 32px;
      height: 32px;
      line-height: 32px;
      border-radius: 50%;
      font-size: 11px;
      font-weight: 700;
      text-align: center;
    }
    .noImgOne{
      margin-left: 15px;
    }
    .noImgTwo{
      margin-left: -5px;
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
        margin-top: 4px;
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
        margin-top: 5px !important;
      }
      .trading-wrap-box-pool-left {
        text-align: left;
        :first-child {
          font-size: 12px;
        }
        :last-child {
          font-size: 12px;
          margin-top: 15px;
        }
      }
      .trading-wrap-box-pool-right {
        text-align: right;
        :first-child {
          font-size: 12px;
        }
        :last-child {
          font-size: 12px;
          margin-top: 15px;
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