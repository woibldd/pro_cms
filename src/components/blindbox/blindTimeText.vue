<template>
  <div id="blindTimeText" class="block_time_content">
    <span class="color_white" v-if="info.status == 0 || info.status == 1"
      >{{$t("ActivityBlindbox.ActivityBlindboxDetail.invalidTimeText")}} &nbsp;&nbsp;</span
    >
    <span class="color_white" v-if="info.status == 2"
      >{{$t("ActivityBlindbox.ActivityBlindboxDetail.successfullyTimeText")}} &nbsp;&nbsp;</span
    >
    <span class="color_white" v-if="info.status == 3"
      >{{$t("ActivityBlindbox.ActivityBlindboxDetail.expiredTimeText")}} &nbsp;&nbsp;</span
    >
    <Countdown
      v-if="info.status == 0 || info.status == 1"
      class="color_red"
      :startTime="startTime"
      :endTime="endTime"
      :format="format"
    />
  </div>
</template>
<script>
import Countdown from "@/components/common/c-vue-countdown";
export default {
  name: "blindTimeText",
  components: { Countdown },
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
    chountChange(...arg) {
      this.$emit("change", ...arg);
    },
    end(...arg) {
      this.$emit("end", ...arg);
    }
  }
};
</script>
<style lang="scss" scoped>
.block_time_content {
  font-family: PingFang SC;
  font-style: normal;
  position: relative;

  width: 100%;
  height: 32px;
  box-sizing: border-box;
  background: url("@/assets/activity/blindbox/time_bg.png") center center
    no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #ffffff;
}
</style>
