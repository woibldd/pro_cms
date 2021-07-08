<template>
  <div id="blindTimeText" class="block_time_content">
      <!-- {{$t("ActivityBlindbox.ActivityBlindboxDetail.invalidTimeText")}} -->
  

  </div>
</template>
<script>

export default {
  name: "blindStrategy",

  props: {
    locale:{
      type: String,
      default: () => "en"
    },
    info: {
      type: Object,
      default: () => ({
        status: 0,
        is_owner:0
      })
    },
    startTime: {
      type: Number || String,
      default: 0
    },
    endTime: {
      type: Number || String,
      default: 0
    },
    format: {
      type: String,
      default: "{dd}天{hh}小时{mm}分钟{ss}秒"
    }
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.block_open_strategy {
  margin-top: 20px;
  padding: 0px 16px 0px 11px;
  box-sizing: border-box;
  width: 100%;
  .block_open_strategy_warpper {
    width: 100%;
    height: 100%;
    background: url("@/assets/activity/blindbox/02@2.png") center center
      no-repeat;
    background-size: 100% 100%;
    &.en {
      background: url("@/assets/activity/blindbox/02@2.en.png") center center
        no-repeat;
      background-size: 100% 100%;
    }
  }

  // width: 348px;
  height: 426px;
}
</style>
