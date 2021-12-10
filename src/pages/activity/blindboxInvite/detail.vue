<template>
  <div class="detail_box">
    <div class="detail_box_header">
      <div><img src="@/assets/activity/blindbox/logo@2.png" /></div>
      <div class="detail_box_lang">
        <div class="langBox" id="showLang">
          <span class="curLang">中文</span>
          <van-icon name="play" class="icon" />
        </div>
        <ul class="langList" id="langList">
          <li class="langItem" data-val="zh" data="中文">中文</li>
          <li class="langItem" data-val="en" data="English">English</li>
        </ul>
      </div>
    </div>
    <div class="detail_box_text">
      <p class="textPrimary0">The most trusted & secure crypto wallet</p>
    </div>
    <div class="detail_box_flex">
      <div class="detail_box_flex">
          <div></div>
      <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped lang="scss">
@import "@/assets/css/theme.scss";

.detail_box {
  .detail_box_header {
    display: flex;
    justify-content: space-between;
    margin: 8px 22px 8px 16px;
    align-items: center;
    img {
      width: 108px;
      height: 28px;
    }
    .detail_box_lang {
      .langBox {
        box-sizing: border-box;
        .curLang {
          font-size: 14px;
        }
        .icon {
          transform: rotate(90deg);
          -ms-transform: rotate(90deg); /* IE 9 */
          -moz-transform: rotate(90deg); /* Firefox */
          -webkit-transform: rotate(90deg); /* Safari 和 Chrome */
          -o-transform: rotate(90deg);
        }
      }
      .langList {
        display: none;
        position: absolute;
        right: 16px;
        overflow: hidden;
        padding: 12px 22px;
        background: #fff;
        border-radius: 0.3rem;
        box-shadow: 0px 30px 40px 0px #0e1b400d;
        font-size: 14px;
        line-height: 30px;
        text-align: center;
      }
    }
  }
  .detail_box_text {
    width: 100%;
    margin: 28px 16px 0;
    p {
      width: 230px;
      font-weight: bold;
      font-size: 24px;
      line-height: 24px;
    }
  }
  a {
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    -moz-tap-highlight-color: transparent;
  }
}
</style>