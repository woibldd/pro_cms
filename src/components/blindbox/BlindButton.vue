<template>
  <div class="block_invite_button">
    <div v-if="info.status == 1 && info.is_owner == 1">
      <!-- 立即开启盲盒 -->
      <div class="invite_button heart" @click="handerBotton(0)">
        {{ $t("ActivityBlindbox.button.OpenimmediatelyText") }}
      </div>
    </div>
    <div v-if="info.status == 0">
      <!-- {{ info.is_owner == 1 ? "立即邀请好友助力" : "立即助力开启盲盒" }} -->

      <div class="invite_button heart" @click="handerBotton(1)">
        {{
          info.is_owner == 1
            ? $t("ActivityBlindbox.button.InviteFriendsNow")
            : $t("ActivityBlindbox.button.OpenFriendsImmediately")
        }}
      </div>
    </div>
    <div v-if="info.status == 2 && info.is_owner == 1">
      <!-- 查看资产 -->
      <div class="invite_button" @click="handerBotton(2)">
        {{ $t("ActivityBlindbox.button.ViewAssets") }}
      </div>
    </div>

    <div v-if="info.status == 2 && info.is_owner == 0">
      <div class="invite_button" @click="handerBotton(2)">
        {{ $t("ActivityBlindbox.button.SuccessView") }}
      </div>
      <!-- 助力已完成，立即查看盲盒 -->
    </div>
  </div>
</template>
<script>
export default {
  name: "titleImag",
  props: {
    isBitKeep: {
      type: Boolean
    },
    info: {
      default: () => ({})
    }
  },
  computed: {
    isOwner() {
      return this.is_owner == 1;
    }
  },
  methods: {
    handerBotton(...arg) {
      this.$emit("handerBotton", ...arg);
    }
  }
};
</script>
<style lang="scss" scoped>
.block_invite_button {
  position: relative;
  margin-top: 20px;
  &>div::after {
      position: absolute;
      width: 303px;
      height: 69px;
      background: url("@/assets/activity/blindbox/BTN@3.png") center center
        no-repeat;
      background-size: 100% 100%;
      content: "";
      left: 0;
      top: 0;
    }
  
  .heart {
    animation: heartbeat 1s infinite ease;
  }
  
  .invite_button {
    z-index: 1;
    position: relative;
    // animation: heartbeat 1s infinite ease-in;
    margin: 0 auto;
    min-width: 280px;
    padding: 0 10px;
    height: 50px;
    background: url("@/assets/activity/blindbox/shareBtn.png") center center
      no-repeat;
    background-size: 100% 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-weight: 600;
    font-size: 17px;
    &:hover {
      opacity: 0.6 !important;
    }
  }
}
</style>
