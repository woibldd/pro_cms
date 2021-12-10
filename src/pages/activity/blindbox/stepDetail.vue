<template>
  <div class="step_detail_box">
    <h1>How to create a BitKeep cloud wallet</h1>
    <div
      class="step_detail_box_con"
      v-for="item in $t('ActivityBlindbox.stepDetail')"
      :key="item.img"
    >
    <div class="line"></div>
      <h2 v-html="item.title"></h2>
      <div class="step_detail_box_content textPrimary0">
        {{ item.content }}
      </div>
      <div class="step_detail_box_img">
        <img :src="item.img" alt="" />
      </div>
    </div>
    <div class="download" id="IosBtnen" v-if="isIos">
      <!-- <div class="version">
        BitKeep V <span class="j_v">{{ clientversion }}</span>
      </div> -->
      <div class="left">
        <a
          href="https://itunes.apple.com/app/bitkeep/id1395301115"
          target="_blank"
        >
          <img
            src="https://cdn.bitkeep.vip/u_b_333f4110-d0ba-11eb-a1fd-1b9796c35a14.png"
            alt="btn1"
          />
        </a>
      </div>
      <div class="right">
        <a href="https://www.bitkeep.com/testFlight.html">
          <img
            src="https://cdn.bitkeep.vip/u_b_33418b00-d0ba-11eb-a1fd-1b9796c35a14.png"
            alt="btn2"
          />
        </a>
      </div>
    </div>
    <div class="download" id="AndroidBtnen" v-else>
      <!-- <div class="version">
        BitKeep V <span class="j_v">{{ clientversion }}</span>
      </div> -->
      <div class="left">
        <a
          href="https://www.bitkeep.com/"
          target="_blank"
        >
          <img
            src="https://cdn.bitkeep.vip/u_b_33740cb0-d0ba-11eb-a1fd-1b9796c35a14.png"
            alt="btn1"
          />
        </a>
      </div>
      <div class="right">
        <a class="btnDwonload" href='https://www.bitkeep.com/'>
          <img
            src="https://cdn.bitkeep.vip/u_b_337433c0-d0ba-11eb-a1fd-1b9796c35a14.png"
            alt="btn2"
          />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "stepDetail",
  computed: {
    ...mapState(["local"]),
    locale() {
      return this.local.locale;
    },
    isIos() {
      return this.local.UA.ios;
    },
  },
};
</script>
<style lang='scss' scoped>
.step_detail_box {
  margin-top: 25px;
  .line{
    margin: 25px 32px;
    background: #080D21;
    height: 2px;
  }
  h1 {
    margin: 10px 32px 0;
  }
  h2 {
    font-size: 20px;
    margin: 10px 32px 0;
  }
  .step_detail_box_con {
    margin-top: 15px;
    .step_detail_box_content {
      font-size: 16px;
      margin: 10px 32px;
    }
    .step_detail_box_img {
      width: 100%;
      margin-top: 20px;
      img{
        width: 100%;
      }
    }
  }
  &:last-child {
    margin-bottom: 95px;
  }
  .download {
    box-sizing: border-box;
    position: fixed;
    z-index: 100;
    bottom: 0;
    width: 100%;
    height: 75px;
    padding: 0 16px;
    background: #fff;
    border-top: 1px solid #f4f5fa;
  }
  .download .left {
    box-sizing: border-box;
    float: left;
    width: 50%;
    padding-right: 1%;
  }
  .download .right {
    box-sizing: border-box;
    float: left;
    width: 50%;
    padding-left: 1%;
  }
  .download a {
    display: block;
    width: 100%;
    margin: 12px 0 0;
  }
  .download a img {
    display: block;
    width: 100%;
  }
  .download .version {
    width: 100%;
    color: #9ca5b3;
    font-size: 12px;
    margin-top: 5px;
    text-align: center;
  }
}
</style>