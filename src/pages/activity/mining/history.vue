<template>
  <div class="hisory-wrap">
    <div class="mining-wrap-one" v-for="(item, index) in historyPhaseList" :key="index">
      <div class="mining-wrap-one-header">
        <div class="mining-wrap-one-header-title">
          <span class="setFontFamily">{{$t('mining.phase',{v:item.phase})  }}</span>
        </div>
        <div class="mining-wrap-one-header-about">
          <span v-if='item.isActivity == 0'>{{ $t("mining.comingsoon") }}</span>
          <span v-if='item.isActivity == 1'>{{ $t("mining.inProgress") }}</span>
          <span v-if='item.isActivity == 2'>{{ $t("mining.activity") }}</span>
        </div>
      </div>
      <div class="mining-setP">
        <div class="produced mining_trans">
          <span>{{ $t("mining.startTime") }}</span>
          <span class="setFontFamily">{{ item.startTime }}(UTC)</span>
        </div>
        <div class="produced">
          <span>{{ $t("mining.overTime") }}</span>
          <span class="setFontFamily">{{ item.endTime }}(UTC)</span>
        </div>
      </div>
      <div class="mining-setP">
        <div class="produced mining_trans">
          <span>{{ $t("mining.tradeValue") }}</span>
          <span class="setFontFamily">{{ item.tradeValue }}</span>
        </div>
        <div class="produced mining_trans">
          <span>{{ $t("mining.tradeReward") }}</span>
          <span class="setFontFamily">{{ item.tradeReward }}</span>
        </div>
        <div class="produced mining_trans mbottom">
          <span>{{ $t("mining.tradeUser") }}</span>
          <span class="setFontFamily">{{ item.tradeUser }}</span>
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
      historyPhaseList: []
    };
  },
  beforeMount() {
    BitKeepInvoke.setTitle(this.$t("mining.historyTitle", { v: this.phase }));
  },
  mounted() {
    this.historyPhase();
  },
  methods: {
    async historyPhase(){
      const { data, status } = await USER_API.historyPhase();
      if (status == 1) {
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("CbkbExchange.know"),
          confirmButtonColor: "#495BFF",
        });
      }
      this.historyPhaseList = data
    }
  },
};
</script>
<style scoped lang='scss'>
.hisory-wrap {
  background: #f3f5f6;
  min-height: 100vh;
  padding: 15px 16px 40px;
  .mining-wrap-one:not(:first-child){
    margin-top: 10px;
  }
  .mining-wrap-one {
    background: #fff;
    border-radius: 8px;
    font-size: 14px;
    line-height: 16px;
    .mining-wrap-one-header {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #F4F5FA;
      height: 36px;
      line-height: 36px;
      padding: 0 8px 0 17px;
      .mining-wrap-one-header-title {
        img {
          width: 15px;
          height: 15px;
          vertical-align: text-bottom;
        }
        span {
          font-size: 16px;
          line-height: 16px;
          color: #080d21;
          vertical-align: text-bottom;
        }
      }
      .mining-wrap-one-header-right {
        color: #495bff;
        padding-right: 15px;
      }
      .mining-wrap-one-header-update {
        font-size: 10px;
        color: #9ca5b3;
      }
      .mining-wrap-one-header-about {
        width: 96px;
        height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 24px;
        text-align: center;
        color: #9ca5b3;
        padding: 2px 8px;
        background: #f3f5f6;
        border-radius: 4px;
        margin-top: 4px;
      }
    }
    .produced {
      font-size: 14px;
      color: #7f828f;
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