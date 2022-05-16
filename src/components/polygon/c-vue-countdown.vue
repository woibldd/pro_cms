<template>
  <div class="cuntdown">
    <div class="item Background0">
      <span class="TTOMedium">
        {{zero(dd)}}
      </span>
      <span class="TTORegular">Days</span>
    </div>
    <img class="slot" src="../../assets/img/slot/count-down.png" alt="">
    <div class="item Background0">
      <span class="TTOMedium">{{zero(hh)}}</span>
      <span class="TTORegular">Hours</span>
    </div>
    <img class="slot" src="../../assets/img/slot/count-down.png" alt="">
    <div class="item Background0">
      <span class="TTOMedium">{{zero(mm)}}</span>
      <span class="TTORegular">Minutes</span>
    </div>
    <img class="slot" src="../../assets/img/slot/count-down.png" alt="">
    <div class="item Background0">
      <span class="TTOMedium">{{zero(ss)}}</span>
      <span class="TTORegular">Seconds</span>
    </div>
  </div>
</template>

<script>
  const conversionRate = {
    ss: 1000,
    mm: 1000 * 60,
    hh: 1000 * 60 * 60,
    dd: 1000 * 60 * 60 * 24,
    mn: 1000 * 60 * 60 * 24
  };
  const REG = {
    all: /\{(dd|hh|mm|ss|ms){1}\}/gi,
    ms: /\{(ms){1}\}/gi,
    ss: /\{(ss){1}\}/gi,
    mm: /\{(mm){1}\}/gi,
    hh: /\{(hh){1}\}/gi,
    dd: /\{(dd){1}\}/gi,
    mn: /\{(mn){1}\}/gi,
    yy: /\{(yy){1}\}/gi
  };
  export default {
    name: "cuntdown",
    props: {
      hidden: {
        type: Boolean,
        default: false
      },
      format: {
        type: String,
        default: "{dd}天{hh}小时{mm}分钟{ss}秒"
      },
      startTime: {
        type: Number || String,
        default: new Date().getTime()
      },
      endTime: {
        type: Number || String,
        default: new Date().getTime()
      }
    },
    data() {
      return {
        timer: null,
        stepTime: 0
      };
    },
    watch: {
      stepTime(val) {
        const date = {
          ms: this.ms,
          ss: this.ss,
          mm: this.mm,
          hh: this.hh,
          dd: this.dd
        };
        if (val <= 0) return this.$emit("end", date);
        this.$emit("change", date);
      },
      startTime() {
        this.stepTime = 0;
        this.init();
      },
      endTime() {
        this.stepTime = 0;
        this.init();
      }
    },
    computed: {
      options_show() {
        return {
          ms: REG.ms.test(this.format),
          ss: REG.ss.test(this.format),
          mm: REG.mm.test(this.format),
          hh: REG.hh.test(this.format),
          dd: REG.dd.test(this.format),
          mn: REG.mn.test(this.format),
          yy: REG.yy.test(this.format)
        };
      },
      ms() {
        return Math.floor(this.stepTime % conversionRate.ss);
      },
      ss() {
        // return Math.floor(this.stepTime % conversionRate.mm);
        return this.options_show.mm ?
          Math.floor(
            (this.stepTime % conversionRate.mm) / conversionRate.ss
          ) :
          Math.floor(this.stepTime / conversionRate.ss);
      },
      mm() {
        return this.options_show.hh ?
          Math.floor(
            (this.stepTime % conversionRate.hh) / conversionRate.mm
          ) :
          Math.floor(this.stepTime / conversionRate.mm);
      },
      hh() {
        return this.options_show.dd ?
          Math.floor(
            (this.stepTime % conversionRate.dd) / conversionRate.hh
          ) :
          Math.floor(this.stepTime / conversionRate.hh);
      },
      dd() {
        return this.options_show.mn ?
          this.diff.day :
          Math.floor(this.stepTime / conversionRate.dd);
        // return Math.floor(this.stepTime / conversionRate.dd);
      },
      mn() {
        const dy = this.diff.year > 0 ? this.diff.year : 0;
        const dm = this.diff.month > 0 ? this.diff.month : 0;
        return this.options_show.yy ? dm : dy * 12 + dm - 1;
      },
      yy() {
        return this.diff.year > 0 ? this.diff.year : 0;
      },

      step_times() {
        return this.options_show.ms ? 100 : 1000;
      },
      pareStr() {
        const str = this.format
          .replace(REG.ms, this.zero(this.ms, 4))
          .replace(REG.ss, this.zero(this.ss))
          .replace(REG.mm, this.zero(this.mm))
          .replace(REG.hh, this.zero(this.hh))
          .replace(REG.dd, this.zero(this.dd))
          .replace(REG.mn, this.zero(this.mn))
          .replace(REG.yy, this.zero(this.yy))
        return str;
      },
      diff() {
        const endDate = new Date(this.endTime);
        const startDate = new Date(this.startTime);
        if (isNaN(endDate) || isNaN(startDate)) console.log("请输入有效范围和有效时间戳")
        const startYears = startDate.getFullYear();
        const startMonth = startDate.getMonth() + 1;
        const startDay = startDate.getDate();
        const endYears = endDate.getFullYear();
        const endMonth = endDate.getMonth() + 1;
        const endDay = endDate.getDate();
        return {
          endDate,
          startDate,
          startYears,
          endYears,
          startMonth,
          endMonth,
          endDay,
          startDay,
          day: endDay - startDay,
          month: endMonth - startMonth,
          year: endYears - startYears
        };
      }
    },

    methods: {
      init() {
        const step = this.step_times;
        clearInterval(this.timer);
        if (this.startTime >= this.endTime) return;
        this.stepTime = this.endTime - this.startTime;
        if (this.stepTime <= 0) return (this.stepTime = 0);
        this.timer = setInterval(() => {
          this.stepTime = this.stepTime - step;
          if (this.stepTime <= 0) {
            this.stepTime = 0;
            clearInterval(this.timer);
          }
        }, step);
      },
      zero(val, len = 2) {
        const l = len - String(val).length;
        const zeros = l > 0 ? new Array(l).fill(0).join("") : "";
        return Number(val) < 10 ? zeros + val : val;
      }
    },
    filters: {
      filterZero(val) {
        return Number(val) < 10 ? "0" + val : val;
      }
    },
    created() {
      this.init();
    }
  };

</script>

<style lang="scss" scoped>
  @import "@/assets/css/theme.scss";

  @media screen and (min-width: 960px) {
    .cuntdown {
      width: 623px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .item {
        width: 120px;
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #49494D;

        span {
          display: block;
        }

        :first-child {
          font-size: 60px;
          color: #09EFBD;
        }

        :last-child {
          color: #9E9DA6;
          font-size: 20px;
        }
      }

      .slot {
        width: 5px;
        height: 25px;
      }
    }
  }

  @media screen and (max-width: 959px) {
    .cuntdown {
      width: 334px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;

      .item {
        width: 70px;
        height: 70px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #49494D;

        span {
          display: block;
        }

        :first-child {
          font-size: 30px;
          color: #09EFBD;
        }

        :last-child {
          color: #9E9DA6;
          font-size: 12px;
        }
      }

      .slot {
        width: 5px;
        height: 25px;
      }
    }
  }

</style>
