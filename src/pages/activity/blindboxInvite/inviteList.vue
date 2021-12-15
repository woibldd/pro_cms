<template>
  <div class="invite-list">
    <div class="loading" v-if="isLoading">
      <van-loading color="#1989fa" vertical
        >{{ $t("base.loading") }}...</van-loading
      >
    </div>
    <div v-else class="invite-list-box">
      <div class="invite-list-header">
        <div class="invite-list-header-left">
          <div>{{ $t("blindboxInvite.inforce") }}</div>
          <div class="setFontFamily">{{ activeCount || 0 }}</div>
        </div>
        <div class="color-line"></div>
        <div class="invite-list-header-right">
          <div>{{ $t("blindboxInvite.inactivated") }}</div>
          <div class="setFontFamily">{{ unActiveCount || 0 }}</div>
        </div>
      </div>
      <div v-if="inviteList.length > 0">
        <van-pull-refresh
          class="setHeight"
          v-model="refreshing"
          :success-text="$t('mining.success')"
          :loading-text="$t('mining.loading')"
          :loosing-text="$t('mining.loading')"
          @refresh="onRefresh"
        >
          <van-list
            v-model="loading"
            :finished="finished"
            :immediate-check="false"
            @load="getInviteList"
          >
            <van-row class="invite-row">
              <van-col span="8" class="invite-col textSecond3">{{
                $t("blindboxInvite.Address")
              }}</van-col>
              <van-col span="7" class="invite-col textSecond3">{{
                $t("blindboxInvite.State")
              }}</van-col>
              <van-col span="9" class="invite-col textSecond3">{{
                $t("blindboxInvite.Time")
              }}</van-col>
            </van-row>
            <div class="invite-line colorLine"></div>
            <div
              class="invite-row-data"
              v-for="item in inviteList"
              :key="item.address"
            >
              <van-row
                class="invite-row-data-row"
                :class="item.state == 1 ? 'textPrimary0' : 'textSecond3'"
              >
                <van-col span="8" class="invite-row-data-col">{{
                  item.address_friend | address
                }}</van-col>
                <van-col span="7" class="invite-row-data-col">{{
                  item.state == 1 ? "In force" : "Inactivated"
                }}</van-col>
                <van-col span="9" class="invite-row-data-col">{{
                  item.create_time | filterTime
                }}</van-col>
              </van-row>
              <div class="invite-line colorLine"></div>
            </div>
          </van-list>
        </van-pull-refresh>
      </div>
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
      refreshing: false,
      inviteList: [],
      activeCount: 0,
      unActiveCount: 0,
      start: 0,
      limit: 20,
    };
  },
  filters: {
    address(item) {
      return item && item.substring(0, 6) + " .... " + item.substr(-4);
    },
    filterTime(date) {
      let val = new Date(date)
      var Y = val.getFullYear()
      var M = val.getMonth()
      var D = val.getDate()
      var H = val.getHours()
      var MI = val.getMinutes()
      var S = val.getSeconds()
      return Y + "-" + M + "-" + D + " " + H + ":" + MI + ":" + S 
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
        BitKeepInvoke.setTitle(this.$t("blindboxInvite.inviteFriends"));
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
    this.getInviteList();
  },
  methods: {
    async getInviteList() {
      const { data, status } = await USER_API.getInviteList({
        start: this.start * this.limit,
        limit: this.limit,
      });
      if (status == 1) {
        this.isLoading = false;
        this.loading = true;
        return this.$toast(data);
      }
      this.activeCount = data.activeCount;
      this.unActiveCount = data.unActiveCount;
      var moreList = data.list;
      moreList && this.inviteList.push(...moreList);
      this.isLoading = false;
      this.$toast.clear();
      this.loading = false;
      this.start++;
      if (this.inviteList.length >= data.total_count) {
        this.finished = true;
      }
    },
    async onRefresh() {
      const { data, status } = await USER_API.getInviteList({
        start: 0,
        limit: this.limit,
      });
      if (status == 1) {
        this.isLoading = false;
        this.$toast(data);
      }
      this.rewardsList = data.data;
      this.refreshing = false;
    },
    getSub() {
      // 中间显示省略号
      let copy = JSON.parse(JSON.stringify(this.inviteLink));
      let fisrt = copy.substring(0, 14);
      this.inviteLink = fisrt + " .... " + copy.substr(-15);
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/css/theme.scss";
.invite-list-box {
  .loading {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .setHeight{
    min-height: 90vh;
  }
  .invite-list-header {
    margin: 16px 16px 0;
    border-radius: 8px 8px 0px 0px;
    color: #495bff;
    display: flex;
    padding: 10px 15px 15px;
    line-height: 28px;
    background-color: rgba(73, 91, 255, 0.1);
    .color-line {
      width: 1px;
      height: 36px;
      opacity: 0.1;
      margin-top: 14px;
      background: #495bff;
    }
    .invite-list-header-left {
      width: 50%;
      :first-child {
        font-size: 14px;
      }
      :last-child {
        font-size: 24px;
      }
    }
    .invite-list-header-right {
      width: 50%;
      padding-left: 16px;
      :first-child {
        font-size: 14px;
      }
      :last-child {
        font-size: 24px;
      }
    }
  }
  .invite-row {
    padding: 0 16px;
    height: 30px;
    line-height: 30px;
  }
  .invite-line {
    width: 100%;
    height: 1px;
  }
  .invite-row-data {
    height: 50px;
    line-height: 50px;
    margin: 0 16px;
    .invite-row-data-row {
      font-family: "bitkeep DIN";
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