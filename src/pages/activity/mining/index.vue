<template>
  <div class="mining">
    <div class="loading" v-if="isLoading">
      <van-loading color="#1989fa" vertical
        >{{ $t("base.loading") }}...</van-loading
      >
    </div>
    <van-pull-refresh
      v-model="refreshLoading"
      v-else
      :success-text="$t('mining.success')"
      :loading-text="$t('mining.loading')"
      :loosing-text="$t('mining.loading')"
      @refresh="getInfo"
    >
      <div class="mining-wrap">
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
            <div
              class="mining-wrap-one-header-about inProgress"
              v-if="status && startTime > 0"
            >
              <span>{{ $t("mining.inProgress") }}</span>
            </div>

            <div
              class="mining-wrap-one-header-about comingsoon"
              v-else-if="!status"
            >
              <span>{{ $t("mining.comingsoon") }}</span>
            </div>
            <div class="mining-wrap-one-header-about activityEnd" v-else>
              <span>{{ $t("mining.activity") }}</span>
            </div>
          </div>
          <div class="mining-wrap-one-body">
            <p class="mining-wrap-one-body-startCountdown">
              <span v-if="!status">{{ $t("mining.startCountdown") }}</span>
              <span v-else>{{ $t("mining.endCountdown") }}</span>
            </p>
            <div v-if="startTime > 0">
              <span>
                <van-count-down
                  :time="startTime"
                  :format="formatEn"
                  class="mining-wrap-one-body-time setFontFamily time"
                /><span class="setFontFamily time">S</span>
              </span>
            </div>
            <div v-else>--</div>
          </div>
          <div class="mining-setP">
            <div class="produced mining_trans">
              <span>{{ $t("mining.startTime") }}</span>
              <span class="setFontFamily">{{ fixdStartTime }}(UTC+8)</span>
            </div>
            <div class="produced mining_trans mbottom">
              <span>{{ $t("mining.overTime") }}</span>
              <span class="setFontFamily">{{ fixdEndTime }}(UTC+8)</span>
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
              <!-- <span>{{ $t("mining.update") }} 2021-05-12 00:01</span> -->
            </div>
          </div>
          <div class="mining-wrap-one-body">
            <p class="mining-wrap-one-body-title setFontFamily">
              <span class="setColor" v-if="status">{{ currencyPool }}</span>
              / {{ rewardPool }} BKB
            </p>
            <van-progress
              :percentage="(currencyPooln / rewardPooln) * 100"
              stroke-width="8"
              color="$theme-light-colorPrimary"
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
              <span class="setFontWeight">{{
                $t("mining.tradingVolume")
              }}</span>
            </div>
            <div class="mining-wrap-one-header-update">
              <!-- <span>{{ $t("mining.update") }} 2021-05-12 00:01</span> -->
            </div>
          </div>
          <div class="mining-wrap-one-body">
            <p class="mining-wrap-one-body-day">{{ $t("mining.tradingIn") }}</p>
            <div class="mining-wrap-one-body-number">
              <span class="setFontFamily">{{
                status && startTime > 0 ? "$" + allTodayTrading : "--"
              }}</span>
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
              <!-- <span>{{ $t("mining.update") }} 2021-05-12 00:01</span> -->
            </div>
          </div>
          <div class="mining-wrap-one-body">
            <div class="mining-wrap-one-body-trading">
              <div>
                <p class="mining-wrap-one-body-vol">
                  {{ $t("mining.totalTrading") }}
                </p>
                <div class="mining-wrap-one-body-vol-number setFontFamily">
                  ${{ userTodayTrading }}
                </div>
              </div>
              <div>
                <p class="mining-wrap-one-body-vol">
                  {{ $t("mining.tradingIn") }}
                </p>
                <div
                  class="
                    mining-wrap-one-body-vol-number-todyVolue
                    setFontFamily
                  "
                >
                  {{ status && startTime > 0 ? "$" + userTodayValue : "--" }}
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
                  {{ userTotalBkbReward }}BKB
                </div>
              </div>
              <div>
                <p class="mining-wrap-one-body-vol">
                  {{ $t("mining.yesterdayRewards") }}
                </p>
                <div class="mining-wrap-one-body-vol-number-last setFontFamily">
                  {{
                    status && startTime > 0
                      ? "+" + userTodayDayBkbReward + "BKB"
                      : "--"
                  }}
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
            <p class="mining-wrap-one-body-text">
              {{ $t("mining.miningRule") }}
            </p>
          </div>
        </div>
        <activity-com :status="status" />
        <div class="wrap-bottom" v-if="status">
          <van-button class="swap-btn" @click="swap">{{
            $t("mining.swapNow")
          }}</van-button>
        </div>
      </div>
    </van-pull-refresh>
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
      currencyPool: 0,
      currencyPooln: 0,
      rewardPool: 0,
      rewardPooln: 33600000,
      allTodayTrading: 0,
      userTodayTrading: 0,
      userTodayValue: 0,
      userTotalBkbReward: 0,
      userTodayDayBkbReward: 0,
      status: false,
      isLoading: true,
      refreshLoading: false,
      startTime: null,
      endTime: null,
      fixdStartTime: "2021-11-03 11:00",
      fixdEndTime: "2021-11-04 14:24",
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
        let that = this;
        this.isBitKeep &&
          BitKeepInvoke.onLoadReady(() => {
            BitKeepInvoke.setTitle(
              this.$t("mining.miningTitle", { v: this.phase })
            );
            this.$nextTick(() => {
                BitKeepInvoke.appMode((res) => {
                  let body = document.getElementsByTagName("body");
                  if(res == 1){
                    body.setAttribute('class','theme-dark')
                  }else{
                    body.setAttribute('class','theme-light')
                  }
                });
            });
            BitKeepInvoke.setIconAction(
              "http://cdn.bitkeep.vip/u_b_2bb4fa20-3b86-11ec-8e63-1db435df936c.png",
              () => {
                that.$router.push("/activity/mining/history");
              }
            );
          });
      });
  },
  mounted() {
    this.startTime = this.countDown(this.fixdStartTime);
    this.endTime = this.countDown(this.fixdEndTime);
    if (this.startTime < 0) {
      this.status = true;
      this.startTime = this.endTime;
    }
    this.getInfo();
    this.isLoading = false;
  },
  methods: {
    // 获取信息
    async getInfo() {
      const { data, status } = await USER_API.miningInfo();
      if (status == 1) {
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("CbkbExchange.know"),
          confirmButtonColor: "$theme-light-colorPrimary",
        });
      }
      this.fixdStartTime = data.miningStartTime;
      this.fixdEndTime = data.miningEndTime;
      this.currencyPool = this.milliFormat(data.currencyPool);
      this.currencyPooln = data.currencyPool;
      this.rewardPooln = data.rewardPool;
      this.rewardPool = this.milliFormat(data.rewardPool);
      this.allTodayTrading = this.milliFormat(data.AllTodayTrading);
      this.userTodayTrading = this.milliFormat(data.userTodayTrading);
      this.userTodayValue = this.milliFormat(data.userTodayValue);
      this.userTotalBkbReward = this.milliFormat(data.userTotalBkbReward);
      this.userTodayDayBkbReward = this.milliFormat(data.userTodayDayBkbReward);
      this.startTime = this.countDown(data.miningStartTime);
      this.endTime = this.countDown(data.miningEndTime);
      if (this.startTime < 0) {
        this.status = true;
        this.startTime = this.endTime;
      }
      this.refreshLoading = false;
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
      BitKeepInvoke.nativeApp();
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


</style>
<style lang="scss" scoped>
@import "@/assets/css/theme.scss";
@import "./index.scss";
</style>
