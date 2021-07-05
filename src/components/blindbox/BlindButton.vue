<template>
  <div v-if="info.status != 3" class="block_invite_button">
    <div
      v-if="info.status == 1 && info.is_owner == 1"
      class="invite_button heart"
      @click="handerBotton(0)"
    >
      立即开启盲盒
    </div>
    <div
      v-if="info.status == 0"
      class="invite_button heart"
      @click="handerBotton(1)"
    >
      {{ info.is_owner == 1 ? "立即邀请好友助力" : "立即助力开启盲盒" }}
    </div>
    <div
      v-if="info.status == 2 && info.is_owner == 1"
      class="invite_button heart"
      @click="handerBotton(2)"
    >
      查看资产
    </div>

    <div
      v-if="info.status == 2 && info.is_owner == 0"
      class="invite_button heart"
      @click="handerBotton(3)"
    >
      助力已完成，立即查看盲盒
    </div>
  </div>
</template>
<script>
export default {
  name: "titleImag",
  props: {
    info: {
      default: ()=>({})
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
  margin-top: 20px;
  background: url("@/assets/activity/blindbox/BTN@3.png") center center
    no-repeat;
  width: 303px;
  // height: 84px;
  background-size: 100% 100%;
  .heart {
    animation: heartbeat 1s infinite ease;
  }
  .invite_button {
    // animation: heartbeat 1s infinite ease-in;
    margin: 0 auto;
    width: 280px;
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
