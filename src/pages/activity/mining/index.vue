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
            src="http://cdn.bitkeep.vip/u_b_56506420-5f0f-11ec-a944-e370f85086e5.png"
            alt=""
          />
        </div>
        <!-- Countdown -->
        <div class="mining-wrap-one">
          <div class="mining-wrap-one-header" style="padding-right: 0">
            <div class="mining-wrap-one-header-title">
              <img
                src="http://cdn.bitkeep.vip/u_b_d9de7871-3b9e-11ec-8e63-1db435df936c.png"
                alt=""
              />
              <span class="setFontWeight">{{ $t("mining.coundown") }}</span>
            </div>
            <div
              class="mining-wrap-one-header-about inProgress"
              v-if="activityStatus == 1"
            >
              <span>{{ $t("mining.inProgress") }}</span>
            </div>

            <div
              class="mining-wrap-one-header-about comingsoon"
              v-else-if="activityStatus == 0"
            >
              <span>{{ $t("mining.comingsoon") }}</span>
            </div>
            <div class="mining-wrap-one-header-about activityEnd" v-else>
              <span>{{ $t("mining.activity") }}</span>
            </div>
          </div>
          <div class="mining-wrap-one-body">
            <p class="mining-wrap-one-body-startCountdown">
              <span v-if="activityStatus == 0">{{ $t("mining.startCountdown") }}</span>
              <span v-else>{{ $t("mining.endCountdown") }}</span>
            </p>
            <div v-if="countDown > 0">
              <span>
                <van-count-down
                  :time="countDown"
                  :format="formatEn"
                  class="mining-wrap-one-body-time setFontFamily"
                />
              </span>
            </div>
            <div class="textPrimary0" v-else>--</div>
          </div>
          <div class="mining-setP">
            <div class="produced mining_trans">
              <span>{{ $t("mining.startTime") }}</span>
              <span class="setFontFamily">{{ fixdStartTime }}(GMT+8)</span>
            </div>
            <div class="produced mining_trans mbottom">
              <span>{{ $t("mining.overTime") }}</span>
              <span class="setFontFamily">{{ fixdEndTime }}(GMT+8)</span>
            </div>
          </div>
        </div>
        <!-- Trading Data -->
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
            <div class="mining-wrap-one-body-trading mbottom">
              <div>
                <p class="mining-wrap-one-body-vol" style="text-align: left">
                  {{ $t("mining.totalDistributed") }}
                </p>
                <div class="mining-wrap-one-body-vol-number setFontFamily">
                  <span class="setW">{{ currencyPool }}</span> BKB
                </div>
              </div>
              <div>
                <p class="mining-wrap-one-body-vol">
                  {{ $t("mining.yesterday") }}
                </p>
                <div
                  class="mining-wrap-one-body-vol-number-todyVolue
                    setFontFamily">
                  <span class="setW">{{ yesCurrencyPool }}</span> BKB
                </div>
              </div>
            </div>
            <!-- <p class="mining-wrap-one-body-title setFontFamily">
              <span class="setColor" v-if="status">{{ currencyPool }}</span>
              / {{ rewardPool }} BKB
            </p>
            <van-progress
              :percentage="(currencyPooln / rewardPooln) * 100"
              stroke-width="8"
              color="$theme-light-colorPrimary"
              :show-pivot="false"
            /> -->
            <!-- <div class="mining-wrap-one-body-amount">
              <span>{{ $t("mining.will") }}</span>
            </div> -->
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
                activityStatus != 0 ? "$" + allTodayTrading : '--'
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
              <img :src="question" class="setImg" @click="ruleDetail" alt="">
            </div>
            <div class="mining-wrap-one-header-update">
              <!-- <span>{{ $t("mining.update") }} 2021-05-12 00:01</span> -->
            </div>
          </div>
          <div class="mining-wrap-one-body">
            <div class="mining-wrap-one-body-trading">
              <div>
                <p class="mining-wrap-one-body-vol" style="text-align: left">
                  {{ $t("mining.totalTrading") }}
                </p>
                <div class="mining-wrap-one-body-vol-number setFontFamily">
                  <span class="setW">${{ userTodayTrading }}</span>
                </div>
              </div>
              <div>
                <p class="mining-wrap-one-body-vol">
                  {{ $t("mining.userTodayValue") }}
                </p>
                <div class="
                    mining-wrap-one-body-vol-number-todyVolue
                    setFontFamily">{{ activityStatus != 0 ? "$" + userTodayValue: '--'}}
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
                  <span class="setW">{{ userTotalBkbReward }}</span> BKB
                </div>
              </div>
              <div>
                <p class="mining-wrap-one-body-vol" style="text-align: right">
                  {{ $t("mining.yesterdayRewards") }}
                </p>
                <div class="mining-wrap-one-body-vol-number-last setFontFamily">
                  {{ activityStatus != 0 ? "+" + userTodayDayBkbReward + " BKB" : "0 BKB" }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Invitation Rewards Pool -->
        <div class="mining-wrap-one">
          <div class="mining-wrap-one-header">
            <div class="mining-wrap-one-header-title">
              <img
                src="http://cdn.bitkeep.vip/u_b_d9ddb520-3b9e-11ec-8e63-1db435df936c.png"
                alt=""
              />
              <span class="setFontWeight">{{
                $t("mining.invitationPool")
              }}</span>
              <img :src="question" class="setImg" @click="inviteRuleDetail" alt="">
            </div>
          </div>
          <div class="mining-wrap-one-body">
            <div class="setMingMargin">
              <span class="setFontFamily textPrimary0">{{
                activity_rewardPool + ' BKB'
              }}</span>
            </div>
            <p class="mining-wrap-one-body-day textPrimary0">{{ $t("mining.invitationPoolContent") }}</p>
          </div>
        </div>
        <!-- My Invitation Reward -->
        <div class="mining-wrap-one invitation">
          <div class="mining-wrap-one-header">
            <div class="mining-wrap-one-header-title">
              <img
                src="http://cdn.bitkeep.vip/u_b_e7b661f0-5427-11ec-a16d-43771b230a03.png"
                alt=""
              />
              <span class="setFontWeight">{{ $t("mining.invitationReward") }}</span>
            </div>
            <div class="colorPrimary" @click="inviteRewards">
              <span>{{ $t("mining.viewDetails") }}</span>
            </div>
          </div>
          <div class="mining-wrap-one-body">
            <div class="mining-wrap-one-body-trading">
              <div>
                <p class="mining-wrap-one-body-vol" style="text-align: left">
                  {{ $t("mining.inviteNumber1") }}
                </p>
                <div class="mining-wrap-one-body-vol-number setFontFamily">
                  <span class="setW" style="color: #495BFF">{{ activityInviteDonereward }} BKB</span>
                </div>
              </div>
              <div>
                <p class="mining-wrap-one-body-vol">
                  {{ $t("mining.inviteNumber2") }}
                </p>
                <div class="
                    mining-wrap-one-body-vol-number-todyVolue
                    setFontFamily" style="color: #495BFF">{{ activityStatus != 0 ? "+" + activityTradingBkbReward + ' BKB' : '0 BKB' }}
                </div>
              </div>
            </div>
            <div class="line mining-wrap-one-body-line"></div>
            <div class="mining-wrap-one-body-rewards">
              <div>
                <p class="mining-wrap-one-body-vol">
                  {{ $t("mining.inviteNumber3") }}
                </p>
                <div class="mining-wrap-one-body-vol-number setFontFamily">
                  <span class="setW">{{ activityDoneTradingBkbReward }}</span> BKB
                </div>
              </div>
              <div>
                <p class="mining-wrap-one-body-vol" style="text-align: right">
                  {{ $t("mining.inviteNumber4") }}
                </p>
                <div class="mining-wrap-one-body-vol-number-last setFontFamily">
                  {{ activityStatus != 0 ? "+" + activityInviteReward + " BKB" : "0 BKB" }}
                </div>
              </div>
            </div>
          </div>
          <div class="warp-invite-link-btn colorBackgroundPrimary" @click="inviteFirends">
            {{$t("mining.inviteFriendsNow")}}
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
        <activity-com/>
        <div class="wrap-bottom" >
          <van-button class="swap-btn setColorClaim" @click="claim">{{
            $t("mining.claim")
          }}</van-button>
          <van-button class="swap-btn setColorSwap" @click="swap">{{
            $t("mining.swapNow")
          }}</van-button>
        </div>
      </div>
    </van-pull-refresh>
    <pup-protocol :show='show' @close='close' :unclaimReward='unclaimReward' :sumReward='sum_activity_today_reward' :theme='theme' :key='new Date().getTime()'></pup-protocol>
    <ruleDetail :ruleDetailFlag='ruleDetailFlag' :theme='theme' @ruleDetailClose='ruleDetailClose'></ruleDetail>
    <inviteRuleDetail :inviteRuleDetailFlag='inviteRuleDetailFlag' :theme='theme' @closeInvite='closeInvite'></inviteRuleDetail>
  </div>
</template>
<script>
import { USER_API } from "@/api/client";
import { mapState } from "vuex";
import activity from "@/components/activity";
import pupProtocol from './protocol.vue';
import ruleDetail from './RuleDetail.vue';
import inviteRuleDetail from './inviteRuleDetail.vue';
export default {
  name: "mining",
  data() {
    return {
      currencyPool: 0,
      yesCurrencyPool: 0,
      rewardPooln: 33600000,
      allTodayTrading: 0,
      userTodayTrading: 0,
      userTodayValue: 0,
      userTotalBkbReward: 0,
      userTodayDayBkbReward: 0,
      unclaimReward: 0,
      activityTradingBkbReward: 0,
      activityDoneTradingBkbReward: 0,
      activity_rewardPool: 0,
      activityInviteReward: 0,
      activityInviteDonereward: 0,
      sum_activity_today_reward: 0,
      status: false,
      show: false,
      ruleDetailFlag: false,
      inviteRuleDetailFlag: false,
      isLoading: true,
      refreshLoading: false,
      startTime: null,
      endTime: null,
      fixdStartTime: '--',
      fixdEndTime: '--',
      formatEn: "DDd HHh mmm sss",
      phase: "1",
      countDown: 0,
      activityStatus: 0,
      theme: 0,
      question: 'http://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png'
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
    pupProtocol,
    inviteRuleDetail,
    ruleDetail
  },
  
  mounted() {
    // this.startTime = this.countDown(this.fixdStartTime);
    // this.endTime = this.countDown(this.fixdEndTime);
    // if (this.startTime < 0) {
    //   this.status = true;
    //   this.startTime = this.endTime;
    // }
    this.getInfo();
    this.setIcon();
  },
  methods: {
    // 获取信息
    async getInfo() {
      const { data, status } = await USER_API.miningInfo();
      if (status == 1) {
        this.isLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("CbkbExchange.know"),
          confirmButtonColor: "$theme-light-colorPrimary",
        });
      }
      this.fixdStartTime = data.miningStartTime;
      this.fixdEndTime = data.miningEndTime;
      this.unclaimReward = data.unclaimReward;
      this.currencyPool = this.milliFormat(data.currencyPool);
      this.yesCurrencyPool = this.milliFormat(data.yesCurrencyPool);
      this.allTodayTrading = this.milliFormat(data.AllTodayTrading);
      this.userTodayTrading = this.milliFormat(data.userTodayTrading);
      this.userTodayValue = this.milliFormat(data.userTodayValue);
      this.userTotalBkbReward = this.milliFormat(data.userTotalBkbReward);
      this.userTodayDayBkbReward = this.milliFormat(data.userTodayDayBkbReward);
      

      this.activityTradingBkbReward = this.milliFormat(data.activity_TradingBkbReward);
      this.activityInviteReward = this.milliFormat(data.activity_invite_reward);
      this.activityDoneTradingBkbReward = this.milliFormat(data.activity_DoneTradingBkbReward);
      this.activityInviteDonereward = this.milliFormat(data.activity_invite_Donereward);
      this.sum_activity_today_reward = data.sum_activity_today_reward;
      this.activity_rewardPool = this.milliFormat(data.activity_rewardPool);

      this.countDown = data.countdown;
      this.activityStatus = data.activityStatus;
      // this.startTime = this.countDown(data.miningStartTime);
      // this.endTime = this.countDown(data.miningEndTime);
      // if (this.countDown < 0) {
      //   this.status = true;
      //   this.startTime = this.endTime;
      // }
      this.isLoading = false;
      this.refreshLoading = false;
    },
    ruleDetail(){
      this.ruleDetailFlag = true;
    },
    ruleDetailClose(){
      this.ruleDetailFlag = false;
    },
    inviteRuleDetail(){
      this.inviteRuleDetailFlag = true;
    },
    closeInvite(){
      this.inviteRuleDetailFlag = false;
    },
    inviteRewards(){
      this.$router.push('/activity/blindboxInvite/rewardList')
    },
    inviteFirends(){
      this.$router.push('/activity/blindboxInvite')
    },
    setIcon(){
      BitKeepInvoke.setTitle(
        this.$t("mining.miningTitle")
      );
      // window.addEventListener("load", () => {
        this.isBitKeep &&
          BitKeepInvoke.onLoadReady(() => {
            BitKeepInvoke.setTitle(
              this.$t("mining.miningTitle")
            );
          //设置主题
            this.$nextTick(() => {
              BitKeepInvoke.appMode((err, res) => {
                let body = document.getElementsByTagName("body")[0];
                if (res == 1) {
                  this.theme = 1;
                  this.question = 'http://cdn.bitkeep.vip/u_b_47485390-4f90-11ec-ace3-97579b99c357.png';
                  body.setAttribute("class", "theme-dark");
                  setTimeout(()=>{
                    BitKeepInvoke.setIconAction(
                    "http://cdn.bitkeep.vip/u_b_09035ca0-4dd9-11ec-a555-07d5354e6fab.png",
                    ()=>{
                      this.$router.push("/activity/mining/history")
                    });
                  },500)
                } else {
                  this.theme = 0;
                  this.question = 'http://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png';
                  body.setAttribute("class", "theme-light");
                  setTimeout(()=>{
                    BitKeepInvoke.setIconAction(
                    "http://cdn.bitkeep.vip/u_b_2bb4fa20-3b86-11ec-8e63-1db435df936c.png",
                    ()=>{
                      this.$router.push("/activity/mining/history")
                    //   let routeUrl = this.$router.resolve({
                    //      path: "/activity/mining/history"
                    //    });
                    //    window.open(routeUrl.href, '_blank');
                    });
                  },500)
                }
              });
          })
        });
      // });
    },
    milliFormat(num) {
      return (
        num &&
        num
          .toString()
          .replace(/^\d+/g, (m) => m.replace(/(?=(?!^)(\d{3})+$)/g, ","))
      );
    },
    claim(){
      this.show = true;
    },
    close(val){
      if(val) {
        setTimeout(()=>{
          this.getInfo();
        },500)
      }
      this.show = false;
    },
    swap(){
      BitKeepInvoke.nativeApp();
    },
    // countDown(times) {
    //   let nowTime = Date.now(); //当前时间
    //   let setDate = new Date(times.replace(/-/g, "/"));
    //   let setTime = setDate.getTime(); //设定的时间
    //   //获取剩余时间总秒数
    //   return setTime - nowTime;
    // },
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
