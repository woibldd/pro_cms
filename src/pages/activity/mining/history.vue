<template>
  <div class="hisory-wrap">
    <div
      class="mining-wrap-one"
      v-for="(item, index) in historyPhaseList"
      :key="index"
    >
      <div class="mining-wrap-one-header">
        <div class="mining-wrap-one-header-title">
          <span class="setFontFamily">{{
            $t("mining.phase", { v: item.phase })
          }}</span>
        </div>
        <div class="mining-wrap-one-header-about comingsoon" v-if="item.isActivity == 0">
          <span>{{ $t("mining.comingsoon") }}</span>
        </div>
        <div class="mining-wrap-one-header-about inProgress" v-if="item.isActivity == 1">
          <span>{{ $t("mining.inProgress") }}</span>
        </div>
        <div class="mining-wrap-one-header-about activityEnd" v-if="item.isActivity == 2">
          <span>{{ $t("mining.activity") }}</span>
        </div>
      </div>
      <div class="mining-setP">
        <div class="produced mining_trans">
          <span>{{ $t("mining.startTime") }}</span>
          <span class="setFontFamily textPrimary0">{{ item.startTime }}(UTC)</span>
        </div>
        <div class="produced">
          <span>{{ $t("mining.overTime") }}</span>
          <span class="setFontFamily textPrimary0">{{ item.endTime }}(UTC)</span>
        </div>
      </div>
      <div class="mining-setP">
        <div class="produced mining_trans">
          <span>{{ $t("mining.tradeValue") }}</span>
          <span class="setFontFamily textPrimary0">{{ item.tradeValue }}</span>
        </div>
        <div class="produced mining_trans">
          <span>{{ $t("mining.tradeReward") }}</span>
          <span class="setFontFamily textPrimary0">{{ item.tradeReward }}</span>
        </div>
        <div class="produced mining_trans">
          <span>{{ $t("mining.tradeUser") }}</span>
          <span class="setFontFamily textPrimary0">{{ item.tradeUser }}</span>
        </div>
        <div class="produced mining_trans mbottom">
          <span>{{ $t("mining.myTraded") }}</span>
          <span class="setFontFamily textPrimary0">{{ item.userReward }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { USER_API } from "@/api/client";

export default {
  data() {
    return {
      historyPhaseList: [],
    };
  },
  beforeMount() {
    window.addEventListener("load", () => {
        BitKeepInvoke.onLoadReady(() => {
        BitKeepInvoke.setTitle(this.$t("mining.historyTitle"));
        BitKeepInvoke.setIconAction();
        //设置主题
          this.$nextTick(() => {
            BitKeepInvoke.appMode((err, res) => {
              let body = document.getElementsByTagName("body")[0];
              if (res == 1) {
                this.theme = 1;
                body.setAttribute("class", "theme-dark");
              } else {
                this.theme = 0;
                body.setAttribute("class", "theme-light");
              }
            });
        })
      });
    });
  },
  mounted() {
    this.historyPhase();
  },
  methods: {
    async historyPhase() {
      const { data, status } = await USER_API.historyPhase();
      if (status == 1) {
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("CbkbExchange.know"),
          confirmButtonColor: "#495BFF",
        });
      }
      this.historyPhaseList = data;
    },
  },
};
</script>
<style scoped lang='scss'>
@import "@/assets/css/theme.scss";
.theme-light{
  .hisory-wrap {
    background: $theme-light-colorBackground0;
    .mining-wrap-one{
      background: $theme-light-colorBackground1;
      .mining-wrap-one-header{
         border-bottom: 1px solid $theme-light-colorLine;
         .mining-wrap-one-header-title{
           color: $theme-light-textPrimary0;
           spam{
             color: $theme-light-textPrimary0;
           }
         }
         .mining-wrap-one-header-right{
           color: $theme-light-colorPrimary;
         }
         .mining-wrap-one-header-update {
          color: $theme-light-textSecond3;
        }
        .mining-wrap-one-header-about{
          color: $theme-light-textSecond3;
          background: $theme-light-colorBackground2;
        }
        .inProgress {
          color: $theme-light-colorSecond01;
          background: $theme-light-colorSecond11;
        }
        .comingsoon {
          color: $theme-light-colorSecond04;
          background: $theme-light-colorSecond14;
        }
        .activityEnd {
          color: $theme-light-textSecond3;
          background: $theme-light-colorBackground2;
        }
      }
      .produced{
        color: $theme-light-textSecond2;
      }
    }
    .line {
      border-bottom: 1px solid $theme-light-colorLine
    }
  }
}
.theme-dark{
  .hisory-wrap {
    background: $theme-dark-colorBackground0;
    .mining-wrap-one{
      background: $theme-dark-colorBackground1;
      .mining-wrap-one-header{
         border-bottom: 1px solid $theme-dark-colorLine;
         .mining-wrap-one-header-title{
           color: $theme-dark-textPrimary0;
           spam{
             color: $theme-dark-textPrimary0;
           }
         }
         .mining-wrap-one-header-right{
           color: $theme-dark-colorPrimary;
         }
         .mining-wrap-one-header-update {
          color: $theme-dark-textSecond3;
        }
        .mining-wrap-one-header-about{
          color: $theme-dark-textSecond3;
          background: $theme-dark-colorBackground2;
        }
        .inProgress {
          color: $theme-dark-colorSecond01;
          background: $theme-dark-colorSecond11;
        }
        .comingsoon {
          color: $theme-dark-colorSecond04;
          background: $theme-dark-colorSecond14;
        }
        .activityEnd {
          color: $theme-dark-textSecond3;
          background: $theme-dark-colorBackground2;
        }
      }
      .produced{
        color: $theme-dark-textSecond2;
      }
    }
    .line {
      border-bottom: 1px solid $theme-dark-colorLine
    }
  }
}
.hisory-wrap {
  min-height: 100vh;
  padding: 15px 16px 40px;
  .mining-wrap-one:not(:first-child) {
    margin-top: 10px;
  }
  .mining-wrap-one {
    border-radius: 8px;
    font-size: 14px;
    line-height: 16px;
    .mining-wrap-one-header {
      display: flex;
      justify-content: space-between;
      height: 36px;
      line-height: 36px;
      padding-left: 17px;
      .mining-wrap-one-header-title {
        img {
          width: 15px;
          height: 15px;
          vertical-align: text-bottom;
        }
        span {
          font-size: 16px;
          line-height: 16px;
          vertical-align: text-bottom;
        }
      }
      .mining-wrap-one-header-right {
        padding-right: 15px;
      }
      .mining-wrap-one-header-update {
        font-size: 10px;
      }
      .mining-wrap-one-header-about {
        height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 24px;
        text-align: center;
        padding: 2px 12px;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 8px;   
      }
    }
    .produced {
      font-size: 14px;
      display: flex;
      justify-content: space-between;
    }
    .mining-setP {
      padding: 0 15px 1px;
    }
    .line {
      border-bottom: 1px solid #dadbde;
    }

    .mining_trans {
      margin: 20px 0 !important;
    }
    .mbottom {
      margin-bottom: 15px !important;
    }
    .setFontFamily {
      font-family: "bitkeep DIN";
    }
  }
}
</style>