<template>
  <div class="staking-wrap colorBackground0">
    <div class="loading" v-if="isLoading">
      <van-loading color="#7524f9" vertical
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
      <div class="staking-wrap colorBackground0">
        <div class="staking-wrap-banner">
          <img
            src="https://cdn.bitkeep.vip/u_b_e5be40b0-6468-11ec-a2a9-47db2a9d25c4.png"
            alt=""
          />
          <div class="staking-wrap-imgText">
            <div class="imgTextTitle">{{$t('staking.stakingImg')}}</div>
          </div>
        </div>
        <div class="staking-wrap-box">
          <div class="staking-wrap-box-Introduce colorBackground1">
            <div class="staking-wrap-box-Introduce-title">
              <img
                src="https://cdn.bitkeep.vip/u_b_9976a830-647e-11ec-8dc3-6956fa76f0cf.png"
                alt=""
              />
              <span class="textPrimary0">{{$t('staking.Introduce')}}</span>
            </div>
            <div class="staking-wrap-line colorLine"></div>
            <div class="staking-wrap-box-Introduce-content textSecond2">
              {{$t('staking.content')}}
            </div>
            <div class="viewAll colorPrimary" @click="viewAll">
              {{ !this.flag ? $t("mining.viewAll") : $t("mining.pickUp") }}
            </div>
          </div>
          <div class="staking-wrap-box-Data colorBackground1">
            <div class="staking-wrap-box-Data-title">
              <img
                src="https://cdn.bitkeep.vip/u_b_554d2280-6481-11ec-8561-09279f51a681.png"
                alt=""
              />
              <span class="textPrimary0">{{$t('staking.Data')}}</span>
            </div>
            <div class="staking-wrap-line colorLine"></div>
            <div class="staking-wrap-box-Data-content textSecond2">
              <div class="staking-wrap-box-Data-flex">
                <div class="staking-wrap-box-Data-left">
                  <div class="textSecond2">{{$t('staking.StakedBKB')}}</div>
                  <div class="textPrimary0 setFontFamily">
                    {{
                      milliFormat(
                        listInfo.list.length > 0
                          ? listInfo.list[0].allStakeAmount.toFixed(0)
                          : 0
                      )
                    }}BKB
                  </div>
                </div>
                <div class="staking-wrap-box-Data-right">
                  <div class="textSecond2">{{$t('staking.totalSupply')}}</div>
                  <div class="textPrimary0 setFontFamily">
                    {{
                      milliFormat(
                        listInfo.list.length > 0
                          ? listInfo.list[0].bkbTotalSuperAmount
                          : 0
                      )
                    }}
                    BKB
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="staking-wrap-box-pool colorBackground1"
            v-for="(item, index) in listInfo.list"
            :key="index"
          >
            <div class="staking-wrap-box-pool-title">
              <img
                src="https://cdn.bitkeep.vip/u_b_a6bdfc60-5113-11ec-be10-ddc2856c6ac6.png"
                alt=""
                class="bigImg"
              />
              <div class="staking-wrap-box-pool-title-flex">
                <div class="staking-wrap-box-pool-title-left">
                  <div class="textPrimary0">{{ item.title }}</div>
                  <div class="textSecond2">{{$t('staking.stakingImg')}}</div>
                </div>
                <div class="staking-wrap-box-pool-title-right">
                  <div class="textSecond2">{{$t('staking.EndsIn')}}</div>
                  <div class="textPrimary0 setFontFamily">{{ ends }}</div>
                </div>
              </div>
            </div>
            <div class="staking-wrap-line colorLine"></div>
            <div class="staking-wrap-box-pool-content textSecond2">
              <div class="staking-wrap-box-pool-flex">
                <div class="staking-wrap-box-pool-left">
                  <div class="textSecond2">{{$t('staking.APY')}}</div>
                  <div class="colorSecond01 setFontFamily">{{ apy }}</div>
                </div>
                <div class="staking-wrap-box-pool-right">
                  <div class="textSecond2">{{$t('staking.YourStakeAmount')}}</div>
                  <div class="textPrimary0 setFontFamily">
                    {{ item.myAllStaking.toFixed(2) }} BKB
                  </div>
                </div>
              </div>
              <div class="staking-wrap-box-pool-duration textSecond2">
                {{$t('staking.Duration')}}
              </div>
              <div class="staking-wrap-box-pool-duration-box">
                <span
                  class="staking-wrap-box-pool-duration-smallBox setFontFamily"
                  @click="handlePoolTimeTab(sitem, i)"
                  v-for="(sitem, i) in item.config"
                  :key="i"
                  :class="[
                    isActiveSaleOut(sitem) ? 'textSecond3' : 'textSecond1',
                    i == setBorderColor ? 'setBorderColor' : '',
                  ]"
                  >{{ sitem.time }}</span
                >
              </div>
              <div
                class="
                  staking-wrap-box-pool-stake
                "
                :class="
                  btn == `${$t('staking.StakeNow')}`
                    ? 'staking-wrap-box-pool-stake-now'
                    : 'textSecond3 colorBackground2'
                "
                @click="stakeNow"
              >
                {{ btn }}
              </div>
            </div>
          </div>
          <!-- ETH chain Pool -->
          <div class="staking-wrap-box-pool colorBackground1">
            <div class="staking-wrap-box-pool-title">
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
              <div class="staking-wrap-box-pool-title-flex">
                <div class="staking-wrap-box-pool-title-left">
                  <div class="textPrimary0">{{$t('staking.EthereumChainPool')}}</div>
                  <div class="textSecond2">{{$t('staking.stakingImg')}}</div>
                </div>
                <div class="staking-wrap-box-pool-title-right">
                  <div class="textSecond2">{{$t('staking.EndsIn')}}</div>
                  <div class="textPrimary0 setFontFamily">--</div>
                </div>
              </div>
            </div>
            <div class="staking-wrap-line colorLine"></div>
            <div class="staking-wrap-box-pool-content textSecond2">
              <div class="staking-wrap-box-pool-flex">
                <div class="staking-wrap-box-pool-left">
                  <div class="textSecond2">{{$t('staking.APY')}}</div>
                  <div class="colorSecond01 setFontFamily">15.48%</div>
                </div>
                <div class="staking-wrap-box-pool-right">
                  <div class="textSecond2">{{$t('staking.YourStakeAmount')}}</div>
                  <div class="textPrimary0 setFontFamily">0 BKB</div>
                </div>
              </div>
              <div class="staking-wrap-box-pool-duration textSecond2">
                {{$t('staking.Duration')}}
              </div>
              <div class="staking-wrap-box-pool-duration-box">
                <span
                  class="
                    staking-wrap-box-pool-duration-smallBox
                    textSecond1
                    setBorderColor
                  "
                  >7</span
                >
              </div>
              <div
                class="
                  staking-wrap-box-pool-stake textSecond3 colorBackground2
                "
              >
                {{$t('staking.ComingSoon')}}
              </div>
            </div>
          </div>
          <!-- bsc chain Pool -->
          <div class="staking-wrap-box-pool colorBackground1">
            <div class="staking-wrap-box-pool-title">
              <img
                src="https://cdn.bitkeep.vip/u_b_a6bdfc60-5113-11ec-be10-ddc2856c6ac6.png"
                alt=""
                class="bigImg"
              />
              <img
                class="smallImg"
                src="https://cdn.bitkeep.vip/u_b_bc5504d0-567a-11ec-a2f6-c30da61fc62b.png"
                alt=""
              />
              <div class="staking-wrap-box-pool-title-flex">
                <div class="staking-wrap-box-pool-title-left">
                  <div class="textPrimary0">{{$t('staking.BSCChainPool')}}</div>
                  <div class="textSecond2">{{$t('staking.stakingImg')}}</div>
                </div>
                <div class="staking-wrap-box-pool-title-right">
                  <div class="textSecond2">{{$t('staking.EndsIn')}}</div>
                  <div class="textPrimary0 setFontFamily">--</div>
                </div>
              </div>
            </div>
            <div class="staking-wrap-line colorLine"></div>
            <div class="staking-wrap-box-pool-content textSecond2">
              <div class="staking-wrap-box-pool-flex">
                <div class="staking-wrap-box-pool-left">
                  <div class="textSecond2">{{$t('staking.APY')}}</div>
                  <div class="colorSecond01 setFontFamily">17.85%</div>
                </div>
                <div class="staking-wrap-box-pool-right">
                  <div class="textSecond2">{{$t('staking.YourStakeAmount')}}</div>
                  <div class="textPrimary0 setFontFamily">0 BKB</div>
                </div>
              </div>
              <div class="staking-wrap-box-pool-duration textSecond2">
                {{$t('staking.Duration')}}
              </div>
              <div class="staking-wrap-box-pool-duration-box">
                <span
                  class="
                    staking-wrap-box-pool-duration-smallBox
                    textSecond1
                    setBorderColor
                  "
                  >7</span
                >
              </div>
              <div
                class="
                  staking-wrap-box-pool-stake textSecond3 colorBackground2
                "
              >
                {{$t('staking.ComingSoon')}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>
<script>
import { USER_API } from "@/api/client";
import { mapState } from "vuex";
import moment from "moment";
import { wallet } from './wallet'

export default {
  name: "staking",
  data() {
    return {
      isLoading: true,
      refreshLoading: false,
      flag: false,
      theme: 0,
      setBorderColor: 0,
      apy: "20%",
      yourAmount: "0",
      ends: "--",
      btn: "Stake now",
      address: '',
      listInfo: {
        list: [{ allStakeAmount: 0, bkbTotalSuperAmount: 0, config: [] }],
      },
      question:
        "https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png",
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

  mounted() {
    this.setIcon();
    if(!this.isBitKeep) this.getInfo()
  },
  methods: {
    async getInfo() {
      if(!this.isBitKeep) this.address = await wallet.connect();      
      const { data, status } = await USER_API.poolList({
        userid: this.address,
      });
      if (status == 1) {
        this.isLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("staking.know"),
          confirmButtonColor: "$theme-light-colorPrimary",
        });
      }
      this.isLoading = false;
      this.listInfo = data;
      this.listInfo.list = data.list;
      let prames = data.list && data.list[0].config[0];
      this.refreshLoading = false;
      this.handlePoolTimeTab(prames, 0);
    },
    isActiveSaleOut(sitem) {
      return (
        sitem.allStake >= sitem.limit ||
        moment(sitem.lastStakeTime).isBefore(
          moment(this.listInfo.list[0].serverTime)
        )
      );
    },
    stakeNow() {
      if (this.btn == this.$t('staking.SoldOut')) return;
      this.$router.push("/activity/staking/addPool");
    },
    handlePoolTimeTab(item, index) {
      this.setBorderColor = index;
      this.apy = (item.apy * 100).toFixed(2) + "%";
      // this.yourAmount = this.milliFormat(item.limit);
      this.ends = moment(item.lastStakeTime).format("YYYY-MM-DD HH:mm");
      this.btn = !this.isActiveSaleOut(item) ? this.$t('staking.StakeNow') : this.$t('staking.SoldOut');
    },
    setIcon() {
      this.isBitKeep &&
        BitKeepInvoke.onLoadReady(() => {
          BitKeepInvoke.setTitle(this.$t("staking.stakingTitle"));
          BitKeepInvoke.getAddress(async (err, data) => {
            if (err) {
              return this.$toast(err);
            }
            this.addresses = data;
            this.address = this.addresses["eth"] || "--";
            this.getInfo();
          });
          //设置主题
          this.$nextTick(() => {
            BitKeepInvoke.appMode((err, res) => {
              let body = document.getElementsByTagName("body")[0];
              if (res == 1) {
                this.theme = 1;
                this.question =
                  "https://cdn.bitkeep.vip/u_b_47485390-4f90-11ec-ace3-97579b99c357.png";
                body.setAttribute("class", "theme-dark");
                setTimeout(() => {
                  BitKeepInvoke.setIconAction(
                    "https://cdn.bitkeep.vip/u_b_09035ca0-4dd9-11ec-a555-07d5354e6fab.png",
                    () => {
                      this.$router.push("/activity/staking/myPool");
                    }
                  );
                }, 500);
              } else {
                this.theme = 0;
                this.question =
                  "https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png";
                body.setAttribute("class", "theme-light");
                setTimeout(() => {
                  BitKeepInvoke.setIconAction(
                    "https://cdn.bitkeep.vip/u_b_2bb4fa20-3b86-11ec-8e63-1db435df936c.png",
                    () => {
                      this.$router.push("/activity/staking/myPool");
                    }
                  );
                }, 500);
              }
            });
          });
        });
    },
    viewAll() {
      this.flag = !this.flag;
      let dom = document.getElementsByClassName(
        "staking-wrap-box-Introduce-content"
      )[0];
      if (this.flag) {
        dom.setAttribute("style", "-webkit-line-clamp:20");
      } else {
        dom.setAttribute("style", "-webkit-line-clamp:3");
      }
    },
    milliFormat(num) {
      return (
        num &&
        num
          .toString()
          .replace(/^\d+/g, (m) => m.replace(/(?=(?!^)(\d{3})+$)/g, ","))
      );
    },
  },
};
</script>
<style lang="scss">
</style>
<style lang="scss" scoped>
@import "@/assets/css/theme.scss";
@import "./index.scss";
.theme-light {
  .staking-wrap-box-pool-duration-smallBox {
    border: 1px solid $theme-light-colorLine1;
  }
}
.theme-dark {
  .staking-wrap-box-pool-duration-smallBox {
    border: 1px solid $theme-dark-colorLine1;
  }
}
</style>
