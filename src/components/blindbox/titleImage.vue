<template>
  <div class="titleImage" v-if="type == 'helper'">
    <!-- 恭喜你成功开启盲盒 -->
    <!-- 并获取数字资产 -->
    <div v-if="status == 2 && isOwner" class="item">
      <img
        v-if="locale == 'zh'"
        class="openTextTitle_zh"
        src="@/assets/activity/blindbox/openTextTitle@2.png"
      />
      <img
        v-else
        class="openTextTitle_en"
        src="@/assets/activity/blindbox/openTextTitle@2.en.png"
      />
    </div>

    <!-- 邀请好友助力开启盲盒 
        获惊喜数字资产 -->
    <div v-else-if="isOwner" class="item">
      <img
        class="inviteTextTitle_zh"
        v-if="locale == 'zh'"
        src="@/assets/activity/blindbox/inviteTextTitle@2.png"
      />
      <img
        v-else
        class="inviteTextTitle_en"
        src="@/assets/activity/blindbox/inviteTextTitle@2.en.png"
      />
    </div>
    <!-- 助力好友开启盲盒 -->
    <!-- 一起分享数字资产 -->
    <div v-else class="item">
      <img
        v-if="locale == 'zh'"
        class="helperTextTitle_zh"
        src="@/assets/activity/blindbox/helperTextTitle@2.png"
      />
      <img
        v-else
        class="helperTextTitle_en"
        src="@/assets/activity/blindbox/helperTextTitle@2.en.png"
      />
    </div>
  </div>
  <!-- 盲盒活动规则 -->
  <div v-else-if="type == 'footer'" class="titleImage footer ">
    <div class="item">
      <img
        v-if="locale == 'zh'"
        class="rulesTextTitle_zh"
        src="@/assets/activity/blindbox/rulesTextTitle@2.png"
      />
      <img
        v-else
        class="rulesTextTitle_en"
        src="@/assets/activity/blindbox/rulesTextTitle@2.en.png"
      />
    </div>
  </div>
  <div v-else></div>
</template>
<script>
export default {
  name: "titleImag",
  props: {
    locale: {
      default: "en"
    },
    type: {
      default: "helper"
    },
    is_owner: {},
    status: {}
  },
  computed: {
    isOwner() {
      return this.is_owner == 1;
    }
  }
};
</script>
<style lang="scss" scoped>
.titleImage {
  .item {
    margin: 0 auto;
    justify-content: center;
    display: flex;
  }
}
.openTextTitle_zh {
  width: 250px;
  height: 48px;
}
.openTextTitle_en {
 width: 256px;
height: 40px;
}
.inviteTextTitle_zh {
  width: 250px;
  height: 48px;
}
.inviteTextTitle_en {
  width: 249px;
  height: 40px;
}
.helperTextTitle_zh {
  width: 214px !important;
  height: 48px !important;
}
.helperTextTitle_en {
  width: 287px;
  height: 40px;
}

.rulesTextTitle_zh {
  width: 178px;
  height: 24px;
}
.rulesTextTitle_en {
  width: 187px;
  height: 20px;
}
</style>
