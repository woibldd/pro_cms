<template>
  <div class="warp-invite colorBackground3">
    <div class="loading" v-if="isLoading">
      <van-loading color="#1989fa" vertical
        >{{ $t("base.loading") }}...</van-loading
      >
    </div>
    <div v-else>
      <div class="warp-invite colorBackground3">
        <div class="warp-invite-banner">
          <img
            src="http://cdn.bitkeep.vip/u_b_e0135f70-5422-11ec-a16d-43771b230a03.png"
          />
        </div>
        <div class="warp-invite-one colorBackgroundWhite setTop">
          <div class="warp-invite-one-header" style="padding-right: 0">
            <div class="warp-invite-one-header-title">
              <span>{{ $t("blindboxInvite.myRewards") }}</span>
            </div>
          </div>
          <!-- <div class="borderBottom colorLine"></div> -->
          <div class="invite-setP">
            <div class="warp-invite-produced">
              <span><img src="http://cdn.bitkeep.vip/u_b_e7b661f0-5427-11ec-a16d-43771b230a03.png" alt="">{{ $t("blindboxInvite.invitedNumber") }}</span>
              <span class="setFontFamily">0
                <van-icon name="arrow" color='#999BA3'/>
              </span>
            </div>
            <div class="warp-invite-produced">
              <span><img src="http://cdn.bitkeep.vip/u_b_e7b6fe30-5427-11ec-a16d-43771b230a03.png" alt="">{{ $t("blindboxInvite.tokenRewards") }}</span>
              <span class="setFontFamily">0
                <van-icon name="arrow" color='#999BA3'/>
              </span>
            </div>
          </div>
          <!-- <div class="invite-setP">
            <div class="warp-invite-produced">
              <span><img src="http://cdn.bitkeep.vip/u_b_e7b63ae0-5427-11ec-a16d-43771b230a03.png" alt="">{{ $t("blindboxInvite.NFTRewards") }}</span>
              <span class="setFontFamily">0
                <van-icon name="arrow" color='#999BA3'/>
              </span>
            </div>
            <div class="warp-invite-produced">
              <span><img src="http://cdn.bitkeep.vip/u_b_e7b5c5b0-5427-11ec-a16d-43771b230a03.png" alt="">{{ $t("blindboxInvite.boxRewards") }}</span>
              <span class="setFontFamily">0
                <van-icon name="arrow" color='#999BA3'/>
              </span>
            </div>
          </div> -->
        </div>
        <div class="warp-invite-one colorBackgroundWhite setTop">
          <div class="warp-invite-one-header" style="padding-right: 0">
            <div class="warp-invite-one-header-title">
              <span>{{ $t("blindboxInvite.inviteFriend") }}</span>
            </div>
          </div>
          <!-- <div class="borderBottom colorLine"></div> -->
          <div class="invite-setP">
            <div class="warp-invite-link colorBackground3">
              <div class="warp-invite-link-box">
                <span>
                  <span class="textSecond2">{{ $t("blindboxInvite.inviteLink") }}<br/>
                    <span class="warp-invite-address textPrimary0">{{inviteLink}}</span>
                  </span> 
                </span>
                <span class="setFontFamily">
                  <van-icon v-copy="inviteLinkAll" name=http://cdn.bitkeep.vip/u_b_1a477b90-3579-11ec-8690-93c311cd0b88.png></van-icon>
                </span>
              </div>
            </div>
            <div class="warp-invite-link-btn colorBackgroundPrimary" @click="inviteFirends">
                {{$t("blindboxInvite.inviteFriendsNow")}}
              </div>
          </div>
        </div>
      </div>
    </div>
    <CreatePoster
      :locale="locale"
      :zIndex="100"
      ref="CreatePoster"
      :isBitKeep="isBitKeep"
    />
  </div>
</template>


<script>
// import { USER_API } from "@/api/client";
// import { debounce } from "../../../tools/common";
import { mapState } from "vuex";
import CreatePoster from "./component/createPoster.vue";
import copy from "./copy";

export default {
  name: "blindboxInvite",
  data() {
    return {
      isLoading: true,
      inviteLink: "",
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
        let devSrc =
          "http://192.168.50.246:8081/activity/blindboxInvite?token=";
        // let proSrc = 'https://news.bitkeep.io/activity/blindboxInvite';
        this.inviteLink = devSrc + this.userInfo;
        this.inviteLinkAll = devSrc + this.userInfo;
        this.getSub()
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
  methods: {
    getSub() {
      // 中间显示省略号
      let copy = JSON.parse(JSON.stringify(this.inviteLink))
      let fisrt = copy.substring(0, 14);
      this.inviteLink = fisrt + " .... " + copy.substr(-15); 
    },
    inviteFirends(){
      // this.$refs.CreatePoster && this.$refs.CreatePoster.init();
      this.$router.push('/activity/blindboxInvite/inviteList')
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.warp-invite {
  min-height: 100vh;
  padding-bottom: 25px;
  .loading {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .warp-invite-banner {
    height: 160px;
    img {
      width: 100%;
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
      span {
        font-size: 14px;
        img {
          width: 20px;
          height: 20px;
          margin-right: 5px;
          vertical-align: sub;
        }
        i {
          vertical-align: text-bottom;
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
