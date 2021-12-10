<template>
  <div class="rewards-list">
    <div class="loading" v-if="isLoading">
      <van-loading color="#1989fa" vertical
        >{{ $t("base.loading") }}...</van-loading
      >
    </div>
    <div v-else class="rewards-list-box">
      <van-list
        v-model="loading"
        v-if="rewardsList.length > 0"
        :finished="finished"
        :immediate-check="false"
        :loading-text="$t('blindboxrewards.loading')"
        :finished-text="$t('blindboxrewards.nomore')"
        @load="getrewardsList"
      >
        <div class="rewards-row-data" v-for="item in rewardsList" :key='item.address'>
          <div class="rewards-row-data-left">
            <div class="rewards-row-data-left-title textPrimary0">活动 1 奖励</div>
            <div class="rewards-row-data-left-time textSecond3">2020-12-08 12:02:23</div>
          </div>
          <div class="rewards-row-data-right">
            <div class="rewards-row-data-right-content textPrimary0">
              <img src="http://cdn.bitkeep.vip/u_b_04e2ea10-596d-11ec-bdbc-7722494dfa58.png" alt=""> &nbsp;   +12,000.9090 BKB
            </div>
          </div>
        </div>
      </van-list>
      <div class="noData" v-else>
        <img
          src="http://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png"
          alt=""
        />
        <p class="textSecond3">No Data</p>
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
      rewardsList: [
          {address:'0x7a32....9941',state:1,time: '2021-11-12 18:21:21'},
          {address:'0x7a31....9941',state:2,time: '2021-11-12 18:21:21'},
          ],
      activeCount: 0,
      unActiveCount: 0,
      start: 0,
      limit: 20,
    };
  },
  filters:{
    address(item){
    return item && item.substring(0, 6) + " .... " + item.substr(-4);
    }
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
    // this.getrewardsList();
  },
  methods: {
    async getrewardsList() {
      const { data, status } = await USER_API.getInviteList({
        start: this.start*this.limit,
        limit: this.limit,
      });
      if (status == 1) {
        this.isLoading = false;
        this.$toast(data);
      }
      this.activeCount = data.activeCount;
      this.unActiveCount = data.unActiveCount;
      var moreList = data.data;
      this.rewardsList.push(...moreList);
      this.isLoading = false;
      Toast.clear();
      this.loading = false;
      this.start++;
      if (this.rewardsList.length >= data.total_count) {
        this.finished = true;
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/css/theme.scss";
.rewards-list-box {
  .loading {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rewards-row-data{
    display: flex;
    justify-content: space-between;
    margin: 0 16px;
    height: 60px;
    align-items: center;
    .rewards-row-data-left{
      .rewards-row-data-left-title{
        font-size: 14px;
      }
      .rewards-row-data-left-time{
        font-size: 12px;
      }
    }
    .rewards-row-data-right{
      .rewards-row-data-right-content{
        font-size: 14px;
        img{
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