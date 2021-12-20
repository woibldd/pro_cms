<template>
  <div class="firenddivst">
    <div class="loading" v-if="isLoading">
      <van-loading color="#1989fa" />
    </div>
    <div class="firenddivst-tab" v-else>
      <van-pull-refresh
          class="blindbox_list_content"
          v-model="refreshing"
          @refresh="userInvite"
        >
      <!-- <van-tabs v-model="active" @click="userInvite"> -->
        <!-- <van-tab
          :title="
            $t('ActivityBlindbox.ActivityBlindboxList.inviteFirends') +
            '\xa0' +
            inviteNum
          "
        >
          <div class="firenddivst-tab-con" v-if="inviteList.length > 0">
            <div class="firenddivst-tab-divst">
              <span>{{
                $t("ActivityBlindbox.ActivityBlindboxDetail.InviteSuccessETH")
              }}</span>
              <div class="firenddivst-tab-address">
                <div v-for="(item, index) in inviteList" :key="index">
                  {{ index + 1 }}. {{ item }}
                </div>
              </div>
            </div>
          </div>
          暂时没有已助力好友 -->
          <!-- <div v-else class="noData"><p>{{$t("ActivityBlindbox.ActivityBlindboxList.noInvite")}}</p></div> -->
        <!--</van-tab> -->
        <!-- <van-tab
          :title="
            $t('ActivityBlindbox.ActivityBlindboxList.HelpFirends') +
            '\xa0' +
            helpNum
          "
        > -->
          <div class="firenddivst-tab-con radial-gradient" v-if="inviteList.length > 0">
            <div class="firenddivst-tab-divst">
              <span>{{
                $t("ActivityBlindbox.ActivityBlindboxDetail.HelpSuccessETH")+ '（'+ helpNum + '）:'
              }}</span>
              <div class="firenddivst-tab-address">
                <div v-for="(item, index) in inviteList" :key="index">
                  {{ index + 1 }}. {{ item }}
                </div>
              </div>
            </div>
          </div>
          <div v-else class="noDataBox">
          <div class="noData"><p>{{$t("ActivityBlindbox.ActivityBlindboxList.noHelper")}}</p></div>
          </div>
        <!-- </van-tab> -->
      <!-- </van-tabs> -->
      <div class="block_page_footer" v-if="inviteList.length > 0">
        <div class="block_warpper">
          <div class="block_header">
            <img src="@/assets/activity/blindbox/logo2@3.png" />
          </div>
        </div>
      </div>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { USER_API } from "@/api/client";

export default {
  name: "firendList",
  data() {
    return {
      active: 0,
      inviteNum: 0,
      helpNum: 0,
      isLoading: true,
      refreshing: false,
      inviteList: [],
    };
  },
  computed: {
    ...mapState(["local"]),
    isBitKeep() {
      return this.local.UA.isBitKeep;
    },
    locale() {
      return this.local.locale;
    },
  },
  mounted() {
    this.isBitKeep &&
      BitKeepInvoke.setTitle(
        this.$t("ActivityBlindbox.ActivityBlindboxList.friendList")
      );
    this.userInvite();
  },
  methods: {
    async userInvite() {
      let { data, status } = await USER_API.userInviteList({
        type: this.active + 1,
      });
      if (status == 1) {
        return this.$toast(data);
      }
      this.inviteList = data.list;      
      this.inviteNum = data.invite_number;
      this.helpNum = data.help_number;
      this.isLoading = false;
      this.refreshing = false;
    },
  },
};
</script>
<style lang='scss'>
.firenddivst {
  .van-tabs__nav {
    background-color: #3d0b88;
  }
  .van-tab {
    color: #9ca5b3;
    font-size: 16px;
  }
  .van-tabs__line {
    display: none;
    background-color: #3d0b88 !important;
  }
  .van-tab--active {
    color: #fff;
  }
}
</style>
<style scoped lang='scss'>
.firenddivst {
  .loading {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .blindbox_list_content{
      min-height: 100vh;
  }
  background: #3d0b88;
  min-height: 100vh;
  .firenddivst-tab {
    .firenddivst-tab-con {
      // background-image: linear-gradient(to bottom right, #FFF0F6, #D5C6FF);
      border-radius: 16px;
      margin: 16px;
      padding: 20px;
      .firenddivst-tab-divst {
        padding: 16px;
        background: #ffffff;
        border-radius: 8px;
        span {
          font-size: 12px;
          color: #4b5373;
          font-weight: 500;
          line-height: 18px;
        }
        .firenddivst-tab-address {
          word-break: break-all;
          margin-top: 5px;
          line-height: 18px;
          color: #4b5373;
          font-weight: 400;
        }
      }
    }
  }
  .block_page_footer {
    padding: 40px 0 27px;
    box-sizing: border-box;
    .block_header {
      margin: 0 auto;
      width: 90px;
      height: 24px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .noDataBox{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .noData {
    background: url("https://cdn.bitkeep.vip/u_b_652ddc30-572a-11ec-9c68-896cd381f4ca.png")
      center center no-repeat;
    background-size: 100% 100%;
    height: 198px;
    width: 200px;
    position: relative;
    p{
      width: 136px;
      font-size: 18px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #0C0998;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0px;
      font-weight: 600;
      display: flex;
      justify-content: center;
    }
  }
}
</style>