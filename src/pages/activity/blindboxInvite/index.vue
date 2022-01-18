<template>
  <div class="warp-invite colorBackground0">
    <div class="loading" v-if="isLoading">
      <van-loading color="#1989fa" vertical
        >{{ $t("base.loading") }}...</van-loading
      >
    </div>
      <div v-else>
        <div class="warp-invite colorBackground0">
          <div class="warp-invite-banner">
            <img
              src="https://cdn.bitkeep.vip/u_b_d6f84c30-5e3f-11ec-bd49-b1b354a240c8.png"
            />
            <div class="imgText">
              <div class="imgTextTitle">{{ $t("blindboxInvite.toEarn") }}</div>
              <div class="imgTextContent">{{ $t("blindboxInvite.rewardsMore") }}</div>
            </div>
          </div>
          <div class="warp-invite-one colorBackground1 setTop">
            <div class="warp-invite-one-header" style="padding-right: 0">
              <div class="warp-invite-one-header-title textPrimary0">
                <span>{{ $t("blindboxInvite.myRewards") }}</span>
              </div>
            </div>
            <!-- <div class="borderBottom colorLine"></div> -->
            <div class="invite-setP">
              <div class="warp-invite-produced" @click="inviteFriendList">
                <span class="textSecond1"><img src="https://cdn.bitkeep.vip/u_b_e7b661f0-5427-11ec-a16d-43771b230a03.png" alt="">{{ $t("blindboxInvite.invitedNumber") }}</span>
                <span class="setFontFamily setDisplay textPrimary0">
                  <van-icon name="arrow" color='#999BA3'/>
                </span>
              </div>
              <div class="warp-invite-produced" @click="rewardsList">
                <span class="textSecond1"><img src="https://cdn.bitkeep.vip/u_b_e7b6fe30-5427-11ec-a16d-43771b230a03.png" alt="">{{ $t("blindboxInvite.tokenRewards") }}</span>
                <span class="setFontFamily">
                  <van-icon name="arrow" color='#999BA3'/>
                </span>
              </div>
            </div>
            <!-- <div class="invite-setP">
              <div class="warp-invite-produced">
                <span><img src="https://cdn.bitkeep.vip/u_b_e7b63ae0-5427-11ec-a16d-43771b230a03.png" alt="">{{ $t("blindboxInvite.NFTRewards") }}</span>
                <span class="setFontFamily">0
                  <van-icon name="arrow" color='#999BA3'/>
                </span>
              </div>
              <div class="warp-invite-produced">
                <span><img src="https://cdn.bitkeep.vip/u_b_e7b5c5b0-5427-11ec-a16d-43771b230a03.png" alt="">{{ $t("blindboxInvite.boxRewards") }}</span>
                <span class="setFontFamily">0
                  <van-icon name="arrow" color='#999BA3'/>
                </span>
              </div>
            </div> -->
          </div>
          <div class="warp-invite-one colorBackground1 setTop">
            <div class="warp-invite-one-header" style="padding-right: 0">
              <div class="warp-invite-one-header-title">
                <span class="textPrimary0">{{ $t("blindboxInvite.inviteFriends") }}</span>
              </div>
            </div>
            <!-- <div class="borderBottom colorLine"></div> -->
            <div class="invite-setP">
              <div class="warp-invite-link colorBackground3">
                <div class="warp-invite-link-box" v-copy="inviteLinkAll">
                  <span>
                    <span class="textSecond2">{{ $t("blindboxInvite.inviteLink") }}<br/>
                      <span class="warp-invite-address textPrimary0">{{inviteLink}}</span>
                    </span> 
                  </span>
                  <span class="setFontFamily">
                    <van-icon name=https://cdn.bitkeep.vip/u_b_1a477b90-3579-11ec-8690-93c311cd0b88.png></van-icon>
                  </span>
                </div>
              </div>
              <div class="warp-invite-link-btn colorBackgroundPrimary" @click="inviteFirends">
                  {{$t("blindboxInvite.inviteFriendsNow")}}
                </div>
            </div>
          </div>
          <div class="warp-invite-imgLink setTop">
            <!-- <div @click="toReward" class="setBg">
              <img src="https://cdn.bitkeep.vip/u_b_c9755b00-6206-11ec-9638-bfd886e3565b.png" alt="">
            </div> -->
            <!-- <img src="https://cdn.bitkeep.vip/u_b_eac5dc40-5ee5-11ec-97a4-9306645a7a9a.png" alt="">
            <img src="https://cdn.bitkeep.vip/u_b_eac5dc40-5ee5-11ec-97a4-9306645a7a9a.png" alt="">
            <img src="https://cdn.bitkeep.vip/u_b_eac5dc40-5ee5-11ec-97a4-9306645a7a9a.png" alt="">
            <img src="https://cdn.bitkeep.vip/u_b_eac5dc40-5ee5-11ec-97a4-9306645a7a9a.png" alt=""> -->
          </div>
        </div>
      </div>
    <CreatePoster
      :locale="locale"
      :zIndex="100"
      ref="CreatePoster"
      :isBitKeep="isBitKeep"
      :userInfo="userInfo"
    />
  </div>
</template>


<script>
// import { USER_API } from "@/api/client";
// import { debounce } from "../../../tools/common";
import { mapState } from "vuex";
import CreatePoster from "./component/createPoster.vue";
import copy from "./copy";
import { USER_API } from "@/api/client";

export default {
  name: "blindboxInvite",
  data() {
    return {
      isLoading: true,
      // refreshLoading: false,
      inviteLink: "",
      // inviteNumber: 0,
      inviteLinkAll: "",
    };
  },
  directives: {
    copy
  },
  components: {
    CreatePoster
  },
  computed: {
    ...mapState(["local"]),
    locale() {
      return this.local.locale;
    },
    isBitKeep() {
      return this.local.UA.isBitKeep;
    },
    userInfo() {
      return this.local.userInfo.token;
    },
  },
  async created() {
    this.isLoading = false;
  },
  beforeMount() {
    this.isBitKeep &&
      BitKeepInvoke.onLoadReady(() => {
        BitKeepInvoke.setTitle(this.$t("blindboxInvite.inviteTitle"));
        let devSrc = location.href + "/detail?token=";
        this.inviteLink = devSrc + this.userInfo;
        this.inviteLinkAll = devSrc + this.userInfo;
        this.getSub()
        this.$nextTick(() => {
          BitKeepInvoke.setIconAction();
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
      // this.getInviteNumber()
  },
  methods: {
    getSub() {
      // 中间显示省略号
      let copy = JSON.parse(JSON.stringify(this.inviteLink))
      let fisrt = copy.substring(0, 14);
      this.inviteLink = fisrt + " .... " + copy.substr(-15); 
    },
    // async getInviteNumber(){
    //   const { data, status } = await USER_API.getInviteList({
    //     start: 0,
    //     limit: 10,
    //   });
    //   if (status == 1) {
    //     this.isLoading = false;
    //     this.$toast(data);
    //   }
    //   this.inviteNumber = data.total_count;
    //   this.refreshLoading =false;
    // },
    inviteFriendList(){
      this.$router.push('/activity/blindboxInvite/inviteList')
    },
    rewardsList(){
      this.$router.push('/activity/blindboxInvite/rewardList')
    },
    toReward(){
      this.$router.push('/activity/mining')
    },
    inviteFirends(){
      this.$refs.CreatePoster && this.$refs.CreatePoster.init();
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.warp-invite {
  min-height: 100vh;
  .loading {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .warp-invite-imgLink{
    padding: 0 16px 10px;
    .setBg{
      border-radius: 8px;
      margin-top: 10px;
    }
    img{
      width: 100%;
    }
  }
  .warp-invite-banner {
    height: 160px;
    position: relative;
    img {
      width: 100%;
    }
    .imgText{
      position: absolute;
      top: 45px;
      left: 16px;
      .imgTextTitle{
        font-size: 26px;
        font-weight: bold;
        line-height: 28px;
        width:200px;
        color: #080D21;
      }
      .imgTextContent{
        font-size: 12px;
        width:220px;
        color: #080D21;
      }
    }
  }
  .setTop {
    position: relative;
    top: -45px;
  }
  .warp-invite-one {
    margin: 10px 16px 0;
    border-radius: 8px;
    font-size: 14px;
    line-height: 16px;
    .warp-invite-produced {
      display: flex;
      height: 50px;
      line-height: 50px;
      justify-content: space-between;
      .setDisplay{
        display: flex;
        align-items: center;
      }
      span {
        font-size: 14px;
        img {
          width: 20px;
          height: 20px;
          margin-right: 5px;
          vertical-align: sub;
        }
        i {
          vertical-align: middle;
          display: inline-block;
          font-size: 14px;
        }
      }
      span:last-child {
        font-size: 18px;
      }
    }
    .warp-invite-one-header {
      display: flex;
      justify-content: space-between;
      height: 35px;
      line-height: 35px;
      padding: 0 8px 0 15px;
      .warp-invite-one-header-title {
        span {
          font-size: 18px;
          font-family: "bitkeep DIN";
        }
      }
      .warp-invite-one-header-right {
        padding-right: 7px;
      }
    }
    .borderBottom {
      height: 1px;
    }
    .invite-setP {
      padding: 0 15px 1px;
    }
    .warp-invite-link {
      border-radius: 8px;
      margin: 10px 0 10px;
      .warp-invite-link-box {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .warp-invite-link-btn {
      height: 50px;
      line-height: 50px;
      color: #fff;
      text-align: center;
      border-radius: 10px;
      margin-bottom: 20px;
      font-size: 16px;
    }
  }
}
</style>
