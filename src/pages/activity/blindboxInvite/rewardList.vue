<template>
  <div class="rewards-list colorBackground3">
    <div class="loading" v-if="isLoading">
      <van-loading color="#1989fa" vertical
        >{{ $t("base.loading") }}...</van-loading
      >
    </div>
    <div v-else class="rewards-list-box">
      <div v-if="rewardsList.length > 0">
        <van-pull-refresh
          class="setHeight"
          v-model="refreshing"
          @refresh="onRefresh"
        >
          <van-list
            v-model="loading"
            :finished="finished"
            :immediate-check='false'
            @load="getRewardsList"
          >
            <div
              class="rewards-row-data"
              v-for="item in rewardsList"
              :key="item.number"
            >
              <div class="rewards-row-data-left">
                <div class="rewards-row-data-left-title textPrimary0">
                  {{$t('mining.invitationRewards')}}
                </div>
                <div class="rewards-row-data-left-time textSecond3">
                  {{item.create_time}}
                </div>
              </div>
              <div class="rewards-row-data-right">
                <div
                  class="
                    rewards-row-data-right-content
                    textPrimary0
                    setFontFamily
                  "
                >
                  <img
                    src="https://cdn.bitkeep.vip/u_b_04e2ea10-596d-11ec-bdbc-7722494dfa58.png"
                    alt=""
                  />
                  &nbsp; +{{item.reward}} BKB
                </div>
              </div>
            </div>
          </van-list>
        </van-pull-refresh>
      </div>
      <div class="noData" v-else>
        <img
          src="https://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png"
          alt=""
        />
        <p class="textSecond3">{{$t('mining.noData')}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { USER_API } from "@/api/client";

export default {
  data() {
    return {
      isLoading: true,
      finished: false,
      loading: false,
      refreshing: false,
      rewardsList: [],
      start: 0,
      limit: 20,
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
  async created() {
    this.isLoading = false;
  },
  beforeMount() {
    this.isBitKeep &&
      BitKeepInvoke.onLoadReady(() => {
        BitKeepInvoke.setTitle(this.$t("blindboxInvite.rewardTitle"));
        BitKeepInvoke.setIconAction();
        this.$nextTick(() => {
          BitKeepInvoke.appMode((err, res) => {
            let body = document.getElementsByTagName("body")[0];
            if (res == 1) {
              body.setAttribute("class", "theme-dark");
            } else {
              body.setAttribute("class", "theme-light");
            }
          });
        });
      });
  },
  mounted() {
    this.getRewardsList();
  },
  methods: {
    async getRewardsList() {
      const { data, status } = await USER_API.activityDoneRewardList({
        start: this.start * this.limit,
        limit: this.limit,
      });
      if (status == 1) {
        this.isLoading = false;
        this.loading = true;
        return this.$toast(data);
      }
      var moreList = data;
      moreList && this.rewardsList.push(...moreList);
      this.isLoading = false;
      this.$toast.clear();
      this.loading = false;
      this.start++;
      if (this.rewardsList.length >= data.total_count) {
        this.finished = true;
      }
    },
    async onRefresh() {
      const { data, status } = await USER_API.activityDoneRewardList({
        start: 0,
        limit: this.limit,
      });
      if (status == 1) {
        this.refreshing = false;
        return this.$toast(data);
      }
      this.rewardsList = data.data;
      this.refreshing = false;
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/css/theme.scss";
.rewards-list{
  min-height: 100vh;
}
.rewards-list-box {
  .loading {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .setHeight{
    min-height: 100vh;
  }
  .rewards-row-data {
    display: flex;
    justify-content: space-between;
    margin: 0 16px;
    height: 60px;
    align-items: center;
    .rewards-row-data-left {
      .rewards-row-data-left-title {
        font-size: 14px;
        font-weight: 500;
      }
      .rewards-row-data-left-time {
        font-size: 12px;
      }
    }
    .rewards-row-data-right {
      .rewards-row-data-right-content {
        display: flex;
        align-items: center;
        font-size: 14px;
        img {
          width: 20px;
          height: 20px;
          vertical-align: sub;
        }
      }
    }
  }
  .noData {
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 100px;
      height: 100px;
    }
    p {
      font-size: 14px;
    }
  }
}
</style>