<template>
  <van-popup
    v-model="visables"
    closeable
    :close-icon="closeIcon"
    round
    position="bottom"
    @click-overlay="close"
    @click-close-icon="close"
    class="colorBackground1 setHeight"
    :style="{ overflow: 'hidden' }"
  >
    <div class="title">
      <div class="textPrimary0">{{$t('staking.RemovePool')}}</div>
    </div>
    <div class="line colorLine"></div>
    <div class="content">
      <img
        src="https://cdn.bitkeep.vip/u_b_7d8ec4f0-4b78-11ec-9826-e3fc5958ff1e.png"
        class="logo"
        alt=""
        v-if='stakingStatus'
      />
      <img
        src="http://cdn.bitkeep.vip/u_b_eaa1a130-6792-11ec-ae16-9772e16dd24c.png"
        class="logo"
        alt=""
        v-else
      />
      <p class="colorPrimary" v-if='stakingStatus'>
        <span class="textPrimary0">{{$t('staking.getBKB')}}</span><br/>
        <span class="setFontFamily setFontSize24">{{ milliFormat(currencyReward * 1 + stakeAmount) }} BKB</span>
      </p>
      <p class="textPrimary0 setFontSize" v-html="$t('staking.removeBefore')" v-else>
       
      </p>
      <div class="content_invite">
        <div class="content_invite_flex colorBackground3">
          <div class="content_invite_flex_cont">
            <div>
              <img
                src="https://cdn.bitkeep.vip/u_b_2297b4f0-66c9-11ec-86f9-3314f114ad70.png"
                alt=""
              />
              <span class="textSecond1">{{$t('staking.YourStakeAmount')}}</span>
            </div>
            <div class="invite_number textPrimary0 setFontFamily">{{ milliFormat(stakeAmount) }} BKB</div>
          </div>
          <div class="content_invite_flex_cont setMargin">
            <div>
              <img
                src="https://cdn.bitkeep.vip/u_b_e7b6fe30-5427-11ec-a16d-43771b230a03.png"
                alt=""
              />
              <span class="textSecond1">{{$t('staking.Interests')}}</span>
            </div>
            <div class="invite_number colorSecond01 setFontFamily">{{milliFormat(currencyReward)}} BKB</div>
          </div>
        </div>
      </div>
    </div>
    <div class="confirm-bottom">
      <van-button
        class="swap-btn colorBackground2"
        :class="stakingStatus? 'colorBackground2 textPrimary0' : 'colorBackgroundPrimary colorwhite'"
        :disabled="btnStatus"
        @click="Cancel"
        >{{$t('staking.Cancel')}}</van-button>
      <van-button
        class="swap-btn"
        :class="!stakingStatus? 'colorBackground2 textPrimary0' : 'colorBackgroundPrimary colorwhite'"
        :disabled="btnStatus"
        @click="sign"
        >{{$t('staking.Remove')}}</van-button>
    </div>
  </van-popup>
</template>
<script>
import { debounce } from "@/tools/common";
import { USER_API } from "@/api/client";
import { wallet } from "./wallet";

export default {
  data() {
    return {
      addAllContent: "",
      visables: this.showPool,
      btnStatus: false,
      closeIcon:
        "https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png",
    };
  },
  watch: {
    showPool(n) {
      this.visables = n;
    }
  },
  props: ["token", "stakeId", "address", "showPool", "theme", "currencyReward", "stakeAmount", 'stakingStatus'],
  mounted () {
    if (this.theme == 1) {
        this.closeIcon =
          "https://cdn.bitkeep.vip/u_b_d71e28c0-4c2d-11ec-ad04-d1b66ed0d35e.png";
      } else {
        this.closeIcon =
          "https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png";
      }
    // this.filter_unclaimReward = this.currencyReward && this.milliFormat(this.currencyReward)
    // this.filter_sumReward = this.stakeAmount && this.milliFormat(this.stakeAmount)
  },
  methods: {
    swapConfirm: debounce(async function (loginSign) {
      if ((this.currencyReward + this.stakeAmount) == 0) return;
      this.btnStatus = true;
      const { data, status } = await USER_API.receiveStakingReward({ 
        userid: this.address,
        stakeId: this.stakeId,
        c_token: this.token,
        verifyToken: loginSign,
      });
      if (status == 1) {
        this.close();
        setTimeout(() => {
          this.btnStatus = false;
        }, 1000);
        return this.$toast(data);
      }
      this.$toast(data);
      this.$emit("Cancel", true);
      setTimeout(() => {
        this.btnStatus = false;
      }, 1000);
    }),
    async sign(){
      try {
        let loginSign = await wallet.LoginSign(this.token, this.address);
        this.swapConfirm(loginSign);
      } catch (error) {
        this.$toast('You canceled signature authorization!')
      }
    },
    close() {
      this.$emit("Cancel", false);
    },
    Cancel(){
      this.$emit('Cancel')
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
.van-popup__close-icon--top-right {
  top: 10px;
  right: 9px;
  img {
    width: 28px;
    height: 28px;
  }
}
.theme-dark {
  .van-toast {
    background-color: #dfe0e3;
    color: #171a26;
  }
}
</style>
<style scoped lang='scss'>
@import "@/assets/css/theme.scss";
.setHeight{
  height: 400px;
}
.title {
  margin: 14px 16px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
}
.setOpactive {
  opacity: 0.3;
}
.line {
  width: 100%;
  margin-top: 0;
  height: 1px;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // height: 100%;
  overflow: auto;
  padding-top: 20px;
  .content_invite {
    width: 100%;
    .content_invite_flex {
      border-radius: 6px;
      margin:10px 20px 20px;
      padding: 10px;
      .content_invite_flex_cont {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .setMargin{
        margin-top: 14px;
      }
      img {
        width: 16px;
        height: 16px;
        vertical-align: sub;
      }
      span {
        display: inline-block;
        margin-left: 5px;
        font-size: 14px;
      }
      .invite_number{
        font-size: 14px;
      }
    }
  }
  img {
    width: 48px;
    height: 48px;
  }
  p {
    // font-family: bitkeep DIN;
    font-size: 24px;
    margin: 10px;
    text-align: center;
    span{
      font-size: 18px;
    }
  }
  .setFontSize{
    font-size: 18px;
    font-weight: 600;
  }
  .setFontSize24{
    font-size: 24px;
  }
}
.confirm-bottom {
  height: 48px;
  width: 100%;
  bottom: 0;
  z-index: 99;
  position: fixed;
  padding: 11px 0 34px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  .swap-btn {
    font-weight: 500;
    height: 50px;
    border-radius: 10px;
    text-align: center;
    line-height: 44px;
    border: none;
    font-size: 16px;
    width: 167px;
    z-index: 0;
    margin-left: 10px;
  }
}
</style>