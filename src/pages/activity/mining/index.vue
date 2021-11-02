<template>
  <div class="mining">
    <div class="loading" v-if="isLoading">
      <van-loading color="#1989fa" vertical
        >{{ $t("base.loading") }}...</van-loading
      >
    </div>
    <div v-else class="mining-wrap">
      <div class="img">
        <img
          :src="
            locale == 'en'
              ? 'http://cdn.bitkeep.vip/u_b_62c2dea0-3baa-11ec-b6dc-f5798cff9565.png'
              : 'http://cdn.bitkeep.vip/u_b_62c2dea0-3baa-11ec-b6dc-f5798cff9565.png'
          "
          alt=""
        />
      </div>
      <!-- Countdown -->
      <div class="mining-wrap-one">
        <div class="mining-wrap-one-header">
          <div class="mining-wrap-one-header-title">
            <img
              src="http://cdn.bitkeep.vip/u_b_d9de7871-3b9e-11ec-8e63-1db435df936c.png"
              alt=""
            />
            <span class="setFontWeight">{{ $t("mining.coundown") }}</span>
          </div>
          <div class="mining-wrap-one-header-about">
            <span v-if="status">{{ $t("mining.comingsoon") }}</span>
            <span v-else>{{ $t("mining.inProgress") }}</span>
          </div>
        </div>
        <div class="mining-wrap-one-body">
          <p class="mining-wrap-one-body-startCountdown">
            <span v-if="status">{{ $t("mining.startCountdown") }}</span>
            <span v-else>{{ $t("mining.endCountdown") }}</span>
          </p>
          <span v-if="locale == 'en'">
            <van-count-down
              :time="startTime"
              :format="formatEn"
              class="mining-wrap-one-body-time setFontFamily time"
            /><span class="setFontFamily time">S</span>
          </span>
          <van-count-down
            v-else
            :time="startTime"
            :format="formatZh"
            class="time setFontFamily"
          />
        </div>
        <div class="mining-setP">
          <div class="produced mining_trans">
            <span>{{ $t("mining.startTime") }}</span>
            <span class="setFontFamily">{{ fixdStartTime }}(UTC)</span>
          </div>
          <div class="produced mining_trans mbottom">
            <span>{{ $t("mining.overTime") }}</span>
            <span class="setFontFamily">{{ fixdEndTime }}(UTC)</span>
          </div>
        </div>
      </div>
      <!-- Reward Pool -->
      <div class="mining-wrap-one">
        <div class="mining-wrap-one-header">
          <div class="mining-wrap-one-header-title">
            <img
              src="http://cdn.bitkeep.vip/u_b_d9ddb520-3b9e-11ec-8e63-1db435df936c.png"
              alt=""
            />
            <span class="setFontWeight">{{ $t("mining.rewardPool") }}</span>
          </div>
          <div class="mining-wrap-one-header-update">
            <span>{{ $t("mining.update") }} 2021-05-12 00:01</span>
          </div>
        </div>
        <div class="mining-wrap-one-body">
          <p class="mining-wrap-one-body-title setFontFamily">
            <span class="setColor">1,632,234 /</span>33,600,000 BKB
          </p>
          <van-progress
            :percentage="(30423220 / 33600000) * 100"
            stroke-width="8"
            color="#495BFF"
            :show-pivot="false"
          />
          <div class="mining-wrap-one-body-amount">
            <span>{{ $t("mining.will") }}</span>
          </div>
        </div>
      </div>
      <!-- Trading Volume -->
      <div class="mining-wrap-one">
        <div class="mining-wrap-one-header">
          <div class="mining-wrap-one-header-title">
            <img
              src="http://cdn.bitkeep.vip/u_b_381594a0-3b9f-11ec-8e63-1db435df936c.png"
              alt=""
            />
            <span class="setFontWeight">{{ $t("mining.tradingVolume") }}</span>
          </div>
          <div class="mining-wrap-one-header-update">
            <span>{{ $t("mining.update") }} 2021-05-12 00:01</span>
          </div>
        </div>
        <div class="mining-wrap-one-body">
          <p class="mining-wrap-one-body-day">{{ $t("mining.tradingIn") }}</p>
          <div class="mining-wrap-one-body-number">
            <span class="setFontFamily">${{ 123 }}</span>
          </div>
        </div>
      </div>
      <!-- My Rewards -->
      <div class="mining-wrap-one">
        <div class="mining-wrap-one-header">
          <div class="mining-wrap-one-header-title">
            <img
              src="http://cdn.bitkeep.vip/u_b_d9de5160-3b9e-11ec-8e63-1db435df936c.png"
              alt=""
            />
            <span class="setFontWeight">{{ $t("mining.myRewards") }}</span>
          </div>
          <div class="mining-wrap-one-header-update">
            <span>{{ $t("mining.update") }} 2021-05-12 00:01</span>
          </div>
        </div>
        <div class="mining-wrap-one-body">
          <div class="mining-wrap-one-body-trading">
            <div>
              <p class="mining-wrap-one-body-vol">
                {{ $t("mining.totalTrading") }}
              </p>
              <div class="mining-wrap-one-body-vol-number setFontFamily">
                ${{ 123 }}
              </div>
            </div>
            <div>
              <p class="mining-wrap-one-body-vol">
                {{ $t("mining.todyVolue") }}
              </p>
              <div
                class="mining-wrap-one-body-vol-number-todyVolue setFontFamily"
              >
                ${{ 123 }}
              </div>
            </div>
          </div>
          <div class="line mining-wrap-one-body-line"></div>
          <div class="mining-wrap-one-body-rewards">
            <div>
              <p class="mining-wrap-one-body-vol">
                {{ $t("mining.totalRewards") }}
              </p>
              <div class="mining-wrap-one-body-vol-number setFontFamily">
                {{ 123 }}BKB
              </div>
            </div>
            <div>
              <p class="mining-wrap-one-body-vol">
                {{ $t("mining.yesterdayRewards") }}
              </p>
              <div class="mining-wrap-one-body-vol-number-last setFontFamily">
                +{{ 123 }}BKB
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Mining Rule -->
      <div class="mining-wrap-one">
        <div class="mining-wrap-one-header">
          <div class="mining-wrap-one-header-title">
            <img
              src="http://cdn.bitkeep.vip/u_b_d9de7870-3b9e-11ec-8e63-1db435df936c.png"
              alt=""
            />
            <span class="setFontWeight">{{
              $t("mining.miningRuleTitle")
            }}</span>
          </div>
          <div>
            <span class="mining-wrap-one-header-right" @click="learnMore">{{
              $t("mining.learnMore")
            }}</span>
          </div>
        </div>
        <div class="mining-wrap-one-body" @click="learnMore">
          <p class="mining-wrap-one-body-text">{{ $t("mining.miningRule") }}</p>
        </div>
      </div>
      <div class="line"></div>
      <activity-com :status="status" />
      <div class="wrap-bottom" v-if="status">
        <van-button class="swap-btn" @click="swap">{{
          $t("mining.swapNow")
        }}</van-button>
      </div>
    </div>
  </div>
</template>


<script>
import { USER_API } from "@/api/client";
import { debounce } from "../../../tools/common";
import { mapState } from "vuex";
import activity from "@/components/activity";
export default {
  name: "mining",
  data() {
    return {
      cbkbBalance: 0,
      available: 0,
      status: false,
      isLoading: true,
      startTime: "2021-10-23 12:00",
      endTime: 0,
      fixdStartTime: "2021-11-03 12:00",
      fixdEndTime: "2021-12-24 14:24",
      formatEn: "DDd HHh mmm ss",
      formatZh: "DD 天 HH 时 mm 分 ss 秒",
      phase: "1",
    };
  },
  computed: {
    ...mapState(["local"]),
    locale() {
      return this.local.locale;
    },
    isBitKeep() {
      return this.local.UA.isBitKeep;
    },
  },
  components: {
    activityCom: activity,
  },
  async created() {
    process.client &&
      window.addEventListener("load", () => {
        // this.getInfo();
        this.isBitKeep &&
          BitKeepInvoke.onLoadReady(() => {
            BitKeepInvoke.setTitle(
              this.$t("mining.miningTitle", { v: this.phase })
            );
            BitKeepInvoke.setIconAction(
              "http://cdn.bitkeep.vip/u_b_2bb4fa20-3b86-11ec-8e63-1db435df936c.png",
              () => {
                this.$router.push("/activity/mining/history");
              }
            );
          });
      });

    await this.$nextTick();
    this.isLoading = false;
  },
  mounted() {
    this.startTime = this.countDown(this.fixdStartTime);
    this.endTime = this.countDown(this.fixdEndTime);
    if (this.startTime < 0) this.status = true;
  },
  methods: {
    // 获取信息
    async getInfo() {
      if (!window.ethereum) {
        return;
      } else {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        this.getSwapInfo(window.ethereum.selectedAddress);
      }
    },
    async getSwapInfo(address) {
      const { data, status } = await USER_API.getCbkbSwapInfo({
        userid: address,
      });
      if (status == 1) {
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("CbkbExchange.know"),
          confirmButtonColor: "#495BFF",
        });
      }
      this.cbkbBalance = this.milliFormat(data.cbkbBalance);
      this.available = this.milliFormat(data.available);
    },
    milliFormat(num) {
      return (
        num &&
        num
          .toString()
          .replace(/^\d+/g, (m) => m.replace(/(?=(?!^)(\d{3})+$)/g, ","))
      );
    },
    swap: debounce(async function () {
      if (!this.status) return this.$toast(this.$t("mining.notStart"));
      const { data, status } = await USER_API.swapBkb({
        userid: window.ethereum.selectedAddress,
      });
      if (status == 1) {
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("CbkbExchange.know"),
          confirmButtonColor: "#495BFF",
        });
      }
      this.$dialog
        .alert({
          message: data,
          confirmButtonText: this.$t("CbkbExchange.know"),
          confirmButtonColor: "#495BFF",
        })
        .then(() => {
          this.getCbkbSwapInfo(window.ethereum.selectedAddress);
        });
    }),
    countDown(times) {
      let nowTime = Date.now(); //当前时间
      let setDate = new Date(times.replace(/-/g, "/"));
      let setTime = setDate.getTime(); //设定的时间
      //获取剩余时间总秒数
      return setTime - nowTime;
    },
    learnMore() {
      this.$router.push("/activity/mining/miningRule");
    },
  },
};
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
    border: 1px solid #dadbde;
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
.mining {
  background: #f3f5f6;
  .mining-wrap {
    .img {
      img {
        width: 100%;
      }
    }
    .mining-wrap-one {
      margin: 15px 16px 0;
      background: #fff;
      border-radius: 8px;
      font-size: 14px;
      line-height: 16px;
      .produced {
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        :first-child {
          color: #7f828f;
        }
      }
      .mining-wrap-one-header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f4f5fa;
        height: 40px;
        line-height: 40px;
        padding: 0 8px 0 15px;
        .mining-wrap-one-header-title {
          img {
            width: 20px;
            height: 20px;
            vertical-align: sub;
            margin-right: 4px;
          }
          span {
            font-size: 16px;
            line-height: 16px;
            color: #080d21;
            vertical-align: text-bottom;
          }
        }
        .mining-wrap-one-header-right {
          color: #495bff;
          padding-right: 7px;
        }
        .mining-wrap-one-header-update {
          font-size: 10px;
          color: #9ca5b3;
          margin: 3px 2px 0 0;
        }
        .mining-wrap-one-header-about {
          width: 96px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          color: #ff8146;
          padding: 2px 8px;
          background: rgba(255, 129, 70, 0.1);
          border-radius: 4px;
          margin-top: 7px;
        }
      }
      .mining-wrap-one-body {
        padding: 0 15px 7px;
        .mining-wrap-one-body-line {
          margin-top: 15px;
        }
        .mining-wrap-one-body-startCountdown {
          font-size: 14px;
          line-height: 14px;
          color: #7f828f;
        }
        .mining-wrap-one-body-time {
          font-size: 20px;
          line-height: 20px;
          color: #080d21;
          display: inline-block;
        }
        .mining-wrap-one-body-day {
          font-size: 12px;
          line-height: 14px;
          color: #7f828f;
        }
        .mining-wrap-one-body-title {
          font-size: 14px;
          color: #080d21;
        }
        .mining-wrap-one-body-amount {
          font-size: 14px;
          line-height: 14px;
          color: #7f828f;
          margin: 20px 0 15px;
        }
        .mining-wrap-one-body-number {
          font-size: 20px;
          line-height: 20px;
          color: #080d21;
          font-family: "bitkeep DIN";
          padding-bottom: 10px;
        }
        .mining-wrap-one-body-trading {
          display: flex;
          justify-content: space-between;
          .mining-wrap-one-body-vol {
            font-size: 12px;
            line-height: 14px;
            color: #7f828f;
          }
          .mining-wrap-one-body-vol-number {
            font-size: 16px;
            line-height: 16px;
            color: #080d21;
          }
          .mining-wrap-one-body-vol-number-last {
            text-align: right;
          }
          .mining-wrap-one-body-vol-number-todyVolue {
            text-align: right;
            font-size: 16px;
            color: #080d21;
          }
        }
        .mining-wrap-one-body-rewards {
          display: flex;
          justify-content: space-between;
          padding-bottom: 10px;
          .mining-wrap-one-body-vol {
            font-size: 12px;
            line-height: 14px;
            color: #7f828f;
          }
          .mining-wrap-one-body-vol-number {
            font-size: 16px;
            line-height: 16px;
            color: #495bff;
          }
          .mining-wrap-one-body-vol-number-last {
            text-align: right;
            font-size: 16px;
            color: #495bff;
          }
        }
        .mining-wrap-one-body-text {
          font-size: 14px;
          line-height: 18px;
          color: #4b5373;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      }
      .mining-setP {
        padding: 0 15px 1px;
      }
      .line {
        border-bottom: 1px solid #f4f5fa;
      }

      .mining_trans {
        margin: 20px 0 !important;
      }
      .mbottom {
        margin-bottom: 15px !important;
      }
    }
  }
}
.line {
  border-bottom: 1px solid #f4f5fa;
}

.setIcon {
  color: #999ba3;
}

.setLightColor {
  color: #4b5373;
}

.setDarkColor {
  color: #080d21;
}
.setColor {
  color: #495bff;
}
.setFontFamily {
  font-family: "bitkeep DIN";
}
.setFontWeight {
  font-size: 16px;
  font-weight: 600;
  color: #080d21;
}
.wrap-bottom {
  height: 48px;
  background: #fff;
  width: 100%;
  bottom: 0;
  z-index: 99;
  position: fixed;
  padding-bottom: 34px;
  border-top: 1px solid #f3f5f6;
  .swap-btn {
    height: 44px;
    background: #495bff;
    border-radius: 10px;
    color: #ffffff;
    text-align: center;
    line-height: 44px;
    position: fixed;
    font-weight: 500;
    bottom: 28px;
    font-size: 16px;
    width: 284px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
  }
}
</style>
