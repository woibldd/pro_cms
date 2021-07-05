<template>
  <div :class="{titleImage:true}" v-if="type == 'helper'">
    <img
      v-if="status == 2 && isOwner"
      src="@/assets/activity/blindbox/openTextTitle@2.png"
    />
    <img v-else-if="isOwner" src="@/assets/activity/blindbox/inviteTextTitle@2.png" />
    <img
      v-else
      :class="{noOwner: !isOwner}"
      src="@/assets/activity/blindbox/helperTextTitle@2.png"
    />
  </div>
  <div class="titleImage footer"   v-else-if="type == 'footer'">
    <img src="@/assets/activity/blindbox/title03@2.png" />
  </div>
  <div v-else> </div>
</template>
<script>
export default {
  name: "titleImag",
  props: {
    type: {
      default: "helper",
    },
    is_owner: {},
    status: {},
  },
  computed: {
      isOwner(){
        return this.is_owner == 1
      }
  },
};
</script>
<style lang="scss" scoped>
.titleImage {
  margin: 0 auto;
  overflow: hidden;
  width: 250px;
  height: 48px;
  justify-content: center;
  display: flex;
  img {
    width: 100%;
    height: 100%;
  }
}
.noOwner{
  width: 214px!important;
  height: 48px!important;
}

.footer{
    width: 178px;
    height: 24px;
}
</style>