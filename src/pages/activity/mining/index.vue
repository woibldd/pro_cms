<template>
  <div class="exchange_cbkb">
    <div class="loading" v-if="isLoading">
      <van-loading color="#1989fa" vertical>加载中...</van-loading>
    </div>
    <div v-else>
      <div class="img">
        <img
          :src="locale=='en' ? 'http://cdn.bitkeep.vip/u_b_328c6660-30a2-11ec-87e4-f9eee9da401a.png': 'http://cdn.bitkeep.vip/u_b_328c6660-30a2-11ec-87e4-f9eee9da401a.png'"
          alt="">
      </div>
      <div class="text" v-if="!status">
        <p class="total">{{ $t('mining.total') }}<span class="phase">{{ $t('mining.phase',{v: phase}) }}</span></p>
        <p class="text-n"><span class="setH">{{ available }}</span> <span class="setFont">BKB</span></p>
        <div class="line border"></div>
        <p class="timeCount">
          <span class="startCountdown">{{ $t('mining.startCountdown') }}</span>
          <span v-if="locale=='en'">
            <van-count-down :time="startTime" :format="formatEn" class="time setFontFamily"/><span class="setFontFamily time">S</span>
          </span>
          <van-count-down v-else :time="startTime" :format="formatZh" class="time setFontFamily"/>
        </p>
        <van-button class="swap-btn disabled" @click="swap">{{ $t('mining.toStart') }}</van-button>
      </div>
      <div class="text" v-else>
        <p class="total">{{ $t('mining.get') }}<span class="phase">{{ $t('mining.phase',{v:phase}) }}</span></p>
        <p class="text-n"><span class="setH">{{ available }}</span> <span class="setFont">BKB</span></p>
        <p class="setDarkColor">{{ $t('mining.day') }}<span class="setLightColor setFontFamily">${{ 123,123 }}</span></p>
        <div class="line border"></div>
        <p class="timeCount">
          <span class="startCountdown">{{ $t('mining.endCountdown') }}</span>
          <span v-if="locale=='en'">
            <van-count-down :time="endTime" :format="formatEn" class="time setFontFamily"/><span class="setFontFamily time">S</span>
          </span>
          <van-count-down v-else :time="endTime" :format="formatZh" class="time setFontFamily"/>
        </p>
        <van-button class="swap-btn" @click="swap">{{ $t('mining.swapNow') }}</van-button>
      </div>
      <div class="mining">
        <p class="title setFontFamily">{{ $t('mining.miningPhase',{v:phase}) }} </p>
        <div class="line"></div>
        <div class="mining-setP">
          <div class="produced">
            <span>{{ $t('mining.produced') }}</span>
            <span class="setFontFamily">
              <span style="color: #495BFF">7,866,780</span><span>  /  33,600,000BKB</span>
            </span>
          </div>
          <van-progress :percentage="(30423220/33600000)*100" stroke-width="10" color="#495BFF" :show-pivot="false"/>
          <div class="produced mining_trans" v-if="status">
            <span>{{ $t('mining.amountDay') }}</span>
            <span class="setFontFamily">$2,441,930.32 </span>
          </div>
          <div class="produced mining_trans" v-if="status">
            <span>{{ $t('mining.producedDay') }}</span>
            <span class="setFontFamily">327,385 BKB</span>
          </div>
          <div class="produced mining_trans">
            <span>{{ $t('mining.startTime') }}</span>
            <span class="setFontFamily">{{ fixdStartTime }}(UTC)</span>
          </div>
          <div class="produced mining_trans mbottom">
            <span>{{ $t('mining.overTime') }}</span>
            <span class="setFontFamily">{{ fixdEndTime }}(UTC)</span>
          </div>
        </div>
      </div>
      <div class="miningRule">
        <a href="" target="_blank">
          <span>{{ $t('mining.miningRule') }}</span>
        </a>
        <van-icon name="arrow" class="setIcon"/>
      </div>
      <div class="line"></div>
      <activity-com/>
    </div>
  </div>
</template>


<script>
import {USER_API} from "@/api/client";
import {debounce} from "../../../tools/common";
import {mapState} from "vuex";
import activity from "@/components/activity"
export default {
  name: "mining",
  data() {
    return {
      cbkbBalance: 0,
      available: 0,
      status: false,
      isLoading: true,
      startTime: 0,
      endTime: 0,
      fixdStartTime: '2021-10-23 12:00',
      fixdEndTime: '2021-10-24 14:24',
      formatEn: 'DDD : HHH : mmM : ss',
      formatZh: 'DD 天 HH 时 mm 分 ss 秒',
      phase: '1'
    }
  },
  computed: {
    ...mapState(["local"]),
    locale() {
      return this.local.locale;
    },
    isBitKeep() {
      return this.local.UA.isBitKeep;
    }
  },
  components: {
    activityCom: activity
  },
  async created() {
    process.client && window.addEventListener('load', () => {
      this.getBalance();
    });
    await this.$nextTick();
    this.isLoading = false;
  },
  beforeMount() {
    this.isBitKeep &&
    BitKeepInvoke.setTitle(this.$t("mining.miningTitle",{v: this.phase}));
  },
  mounted() {
    this.startTime = this.countDown(this.fixdStartTime);
    this.endTime = this.countDown(this.fixdEndTime);
    if(this.startTime<0) this.status = true;
  },
  methods: {
    // 获取地址cbkb地址
    async getBalance() {
      if (!window.ethereum) {
        return
      } else {
        await window.ethereum.request({method: "eth_requestAccounts"});
        this.getCbkbSwapInfo(window.ethereum.selectedAddress);
        // this.src = 'https://cn.etherscan.com/address/'+window.ethereum.selectedAddress
      }
    },
    async getCbkbSwapInfo(address) {
      const {data, status} = await USER_API.getCbkbSwapInfo({
        userid: address,
      });
      if (status == 1) {
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t('CbkbExchange.know'),
          confirmButtonColor: '#495BFF'
        });
      }
      // let reg="/(\d)(?=(\d{3})+\b)/g"; //小数点也带有千位分隔符
      // let reg = "/(?<=^\d+)(?=(\d{3})+\b)/"; //小数点没有千位分隔符
      this.cbkbBalance = this.milliFormat(data.cbkbBalance)
      this.available = this.milliFormat(data.available)
    },
    milliFormat(num) {
      return num && num.toString()
        .replace(/^\d+/g, (m) => m.replace(/(?=(?!^)(\d{3})+$)/g, ','))
    },
    swap: debounce(async function () {
      if(!this.status) return this.$toast(this.$t('mining.notStart'))
      const {data, status} = await USER_API.swapBkb({
        userid: window.ethereum.selectedAddress,
      });
      if (status == 1) {
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t('CbkbExchange.know'),
          confirmButtonColor: '#495BFF'
        });
      }
      this.$dialog.alert({
        message: data,
        confirmButtonText: this.$t('CbkbExchange.know'),
        confirmButtonColor: '#495BFF'
      }).then(() => {
        this.getCbkbSwapInfo(window.ethereum.selectedAddress);
      });
    }),
    countDown(times) {
      let nowTime = Date.now(); //当前时间
      let setDate = new Date(times.replace(/-/g, '/'));
      let setTime = setDate.getTime(); //设定的时间
      //获取剩余时间总秒数
      return setTime - nowTime;
    }
  }
}
</script>
<style lang="scss">
.van-dialog__message {
  font-size: 16px !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
  font-weight: 500;
  line-height: 20px;
}
.van-dialog__confirm {
  font-weight: 500;
  font-size: 17px;
}

.mining {
  .van-progress {
    border-radius: 10px;
    background: #fff;
    border: 1px solid #DADBDE;
  }
}

</style>
<style lang="scss" scoped>

.loading {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img {
  height: 240px;

  img {
    width: 100%;
  }
}

.text {
  margin-top: 20px;
  text-align: center;

  .total {
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #080D21;
    font-weight: 600;
    .phase {
      color: #9CA5B3;
    }
  }

  .border {
    margin: 20px 16px;
  }

  .timeCount {
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    color: #4B5373;

    .time {
      font-size: 14px;
      line-height: 14px;
      color: #080D21;
      display: inline-block;
    }
    .startCountdown{
      display: inline-block;
      margin-right: 10px;
    }
  }

  .text-t {
    font-weight: 500;
    font-size: 14px;
    margin: 10px 0 0 0;
    color: #080D21;
  }

  .text-n {
    font-size: 30px;
    margin: 10px 0 0;
    line-height: 18px;
    font-family: "bitkeep DIN";
    color: #080D21;
    height: 18px;

    .setH {
      height: 18px;
    }

    .setFont {
      font-size: 16px;
    }
  }

  .swap-btn {
    width: 166px;
    height: 50px;
    color: #fff;
    margin: 10px auto;
    background: #495BFF;
    border-radius: 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 50px;
    display: block;
  }

  .disabled {
    opacity: .3;
  }
}

.mining {
  margin: 50px 16px 0;
  background: #F3F5F6;
  border-radius: 8px;
  font-size: 14px;
  line-height: 16px;
  .title{
    margin: 10px 0 12px;
    padding: 10px 15px 0;
  }
  .mining-setP{
    padding: 0 15px 1px;
  }
  .line {
    border-bottom: 1px solid #DADBDE;
  }

  .mining_trans {
    margin: 20px 0 !important;
  }
  .mbottom{
    margin-bottom: 15px!important;
  }

  .produced {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 14px;
    margin: 15px 0 10px;

    :first-child {
      color: #4B5373;
    }

    :last-child {
      color: #080D21;
    }
  }
}

.miningRule {
  margin: 10px 16px;
  background: #F3F5F6;
  border-radius: 8px;
  padding: 18px 15px;
  font-size: 14px;
  line-height: 16px;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #4B5373;
  }
}

.line {
  border-bottom: 1px solid #F4F5FA;
}

.about {
  margin: 12px 16px 30px;

  .about-title {
    img {
      width: 20px;
      height: 20px;
      vertical-align: text-top;
      margin-right: 5px;
    }

    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    color: #080D21;
    vertical-align: middle;
  }

  .about-con {
    padding-top: 15px;
    font-size: 14px;
    line-height: 20px;
    color: #4B5373;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .viewAll {
    text-align: right;
    font-size: 14px;
    line-height: 14px;
    color: #495BFF;
    margin-top: 6px;
  }
}

.distribution {
  margin: 12px 16px 30px;

  .distribution-title {
    img {
      width: 20px;
      height: 20px;
      vertical-align: text-top;
      margin-right: 5px;
    }

    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    color: #080D21;
    vertical-align: middle;
  }

  .charts-img {
    text-align: center;
    margin: 20px;

    img {
      width: 110px;
      height: 110px;
    }

    .exchangeTotal {
      font-family: bitkeep DIN;
      font-size: 14px;
      color: #4B5373;
    }

    .total {
      font-size: 14px;
      line-height: 20px;
      color: #4B5373;

      span {
        color: #080D21;
      }
    }
  }

  .distribution-man {
    margin-bottom: 30px;
    background: #F3F5F6;
    border-radius: 8px;
    padding: 10px;

    .data {
      display: flex;
      justify-content: space-between;

      div:last-child {
        font-family: bitkeep DIN;
        font-size: 14px;
        color: #080D21;
      }

      > div {
        font-size: 14px;
        line-height: 34px;
        color: #4B5373;
        vertical-align: middle;

        span:first-child {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          vertical-align: middle;
          margin-right: 4px;
        }

        span:last-child {
          color: #4B5373;
          vertical-align: middle;
        }
      }
    }
  }
}

.hold {
  margin: 12px 16px 30px;

  .hold-title {
    img {
      width: 20px;
      height: 20px;
      vertical-align: text-top;
      margin-right: 5px;
    }

    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    color: #080D21;
    vertical-align: middle;
  }

  .hold-content {
    font-size: 14px;
    color: #4B5373;
    text-indent: -14px;
    padding-left: 15px;
  }
}

.appreciation {
  margin: 12px 16px 30px;

  .appreciation-title {
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    color: #080D21;
    vertical-align: middle;
  }

  .appreciation-grid {
    width: 100%;
    text-align: center;

    .appreciation-grid-flex {
      display: flex;
      flex-direction: row;
      margin-top: 20px;

      div {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 50%;
        float: left;

        img {
          margin-top: 5px;
          width: 24px;
          height: 24px;
        }

        span {
          font-size: 14px;
          color: #4B5373;
          width: 120px;
          margin-top: 5px;
        }
      }
    }
  }
}

.setIcon {
  color: #999BA3;
}

.setLightColor{
  color: #080D21;
}

.setDarkColor {
  color: #4B5373;
}
.setFontFamily {
  font-family: "bitkeep DIN";
}
</style>
