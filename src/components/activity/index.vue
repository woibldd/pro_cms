<template>
  <div class="wrap-min" :class="[status ? 'statusM' : '']">
    <div class="about">
      <div class="about-wrap">
        <div class="about-wrap-pos">
          <img
            src="http://cdn.bitkeep.vip/u_b_0978f140-2bec-11ec-b5c0-c1ce5b0a2535.png"
            alt=""
          />
          <p>{{ $t("mining.about") }}</p>
        </div>
      </div>
      <div class="about-content">
        <div class="about-title">
          <img
            src="http://cdn.bitkeep.vip/u_b_d9de0340-3b9e-11ec-8e63-1db435df936c.png"
          />
          <span>{{ $t("mining.Introduce") }}</span>
        </div>
        <div class="about-con">
          <span>
            {{ $t("mining.aboutContent1") }}
          </span>
          <span>
            {{ $t("mining.aboutContent2") }}
          </span>
        </div>
        <div class="viewAll" @click="viewAll">
          {{ !this.flag ? $t("mining.viewAll") : $t("mining.pickUp") }}
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="distribution">
      <div class="distribution-title">
        <img
          src="http://cdn.bitkeep.vip/u_b_244b3eb0-2bec-11ec-b5c0-c1ce5b0a2535.png"
          alt=""
        />
        <span>{{ $t("mining.distribution") }}</span>
      </div>
      <div class="charts-img">
        <img
          src="http://cdn.bitkeep.vip/u_b_9aa7b0e0-3dec-11ec-91b2-899abceaa0ac.png"
          alt=""
        />
        <p class="total">
          {{ $t("mining.total") }}<span class="exchangeTotal">600,000,000</span>
        </p>
      </div>
      <div class="distribution-man">
        <div class="data">
          <div>
            <span style="background: #495bff"></span>
            <span>{{ $t("mining.mining") }}</span>
          </div>
          <div class="textPrimary0">50%</div>
        </div>
        <div class="data">
          <div>
            <span style="background: #1cbdb5"></span>
            <span>{{ $t("mining.eco") }}</span>
          </div>
          <div class="textPrimary0">20%</div>
        </div>
        <div class="data">
          <div>
            <span style="background: #ff8146"></span>
            <span>{{ $t("mining.community") }} </span>
          </div>
          <div class="textPrimary0">15%</div>
        </div>
        <div class="data">
          <div>
            <span style="background: #f04e98"></span>
            <span>{{ $t("mining.partner") }}</span>
          </div>
          <div class="textPrimary0">10%</div>
        </div>
        <div class="data">
          <div>
            <span style="background: rgba(191, 203, 224, 0.7)"></span>
            <span>{{ $t("mining.tram") }}</span>
          </div>
          <div class="textPrimary0">5%</div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="hold">
      <div class="hold-title">
        <img
          src="http://cdn.bitkeep.vip/u_b_5930f660-2bec-11ec-b5c0-c1ce5b0a2535.png"
          alt=""
        />
        <span>{{ $t("mining.hold") }}</span>
      </div>
      <!-- <div class="hold-content">
        <p>{{ $t("mining.hold1") }}</p>
        <p>{{ $t("mining.hold2") }}</p>
        <p>{{ $t("mining.hold3") }}</p>
        <p>{{ $t("mining.hold4") }}</p>
        <p>{{ $t("mining.hold5") }}</p>
        <p>{{ $t("mining.hold6") }}</p>
        <p>{{ $t("mining.hold7") }}</p>
        <p>{{ $t("mining.hold8") }}</p>
      </div> -->
      <div class="appreciation-grid hold-content">
        <div class="appreciation-grid-flex">
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_06654b70-4b63-11ec-9826-e3fc5958ff1e.png"
              alt=""
            />
            <span>{{ $t("mining.hold1") }}</span>
          </div>
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_066e4c20-4b63-11ec-9826-e3fc5958ff1e.png"
              alt=""
            />
            <span>{{ $t("mining.hold2") }}</span>
          </div>
        </div>
        <div class="appreciation-grid-flex">
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_066dfe00-4b63-11ec-9826-e3fc5958ff1e.png"
              alt=""
            />
            <span>{{ $t("mining.hold3") }}</span>
          </div>
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_066f5d90-4b63-11ec-9826-e3fc5958ff1e.png"
              alt=""
            />
            <span>{{ $t("mining.hold4") }}</span>
          </div>
        </div>
        <div class="appreciation-grid-flex">
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_066e9a40-4b63-11ec-9826-e3fc5958ff1e.png"
              alt=""
            />
            <span>{{ $t("mining.hold5") }}</span>
          </div>
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_066f0f70-4b63-11ec-9826-e3fc5958ff1e.png"
              alt=""
            />
            <span>{{ $t("mining.hold6") }}</span>
          </div>
        </div>
        <div class="appreciation-grid-flex">
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_0699f000-4b63-11ec-9826-e3fc5958ff1e.png"
              alt=""
            />
            <span>{{ $t("mining.hold7") }}</span>
          </div>
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_069a6530-4b63-11ec-9826-e3fc5958ff1e.png"
              alt=""
            />
            <span>{{ $t("mining.hold8") }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="appreciation">
      <div class="appreciation-title">
        <img
          src="http://cdn.bitkeep.vip/u_b_dfdfdf40-3e1c-11ec-9b39-4f7f91c175c3.png"
        />
        <span>{{ $t("mining.appreciation") }}</span>
      </div>
      <div class="appreciation-grid">
        <div class="appreciation-grid-flex">
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_9f4a5d20-3e1c-11ec-9b39-4f7f91c175c3.png"
              alt=""
            />
            <span>{{ $t("mining.appreciationSwap") }}</span>
          </div>
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_9f4a3610-3e1c-11ec-9b39-4f7f91c175c3.png"
              alt=""
            />
            <span>{{ $t("mining.appreciationCoin") }}</span>
          </div>
        </div>
        <div class="appreciation-grid-flex">
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_9f494bb0-3e1c-11ec-9b39-4f7f91c175c3.png"
              alt=""
            />
            <span>{{ $t("mining.appreciationPool") }}</span>
          </div>
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_9f4a3611-3e1c-11ec-9b39-4f7f91c175c3.png"
              alt=""
            />
            <span>{{ $t("mining.appreciationValut") }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="more">
      <div class="more-title">{{ $t("mining.more") }}</div>
      <div class="more-line">
        <a href="https://www.bitkeep.com/" target="_blank">
          <img
            src="http://cdn.bitkeep.vip/u_b_ddcf2860-2bec-11ec-b5c0-c1ce5b0a2535.png"
            alt=""
          /><span>{{ $t("mining.website") }}</span>
        </a>
        <van-icon name="arrow" class="setIcon" />
      </div>
      <div class="more-line">
        <a href="https://twitter.com/BitKeepOS" target="_blank">
          <img
            src="http://cdn.bitkeep.vip/u_b_ddcf4f71-2bec-11ec-b5c0-c1ce5b0a2535.png"
            alt=""
          />
          <span>{{ $t("mining.twitter") }}</span>
        </a>
        <van-icon name="arrow" class="setIcon" />
      </div>
      <div class="more-line">
        <a href="https://t.me/bitkeep" target="_blank">
          <img
            src="http://cdn.bitkeep.vip/u_b_ddcf0150-2bec-11ec-b5c0-c1ce5b0a2535.png"
            alt=""
          />
          <span>{{ $t("mining.telegram") }}</span>
        </a>
        <van-icon name="arrow" class="setIcon" />
      </div>
      <div class="more-line">
        <a :href="src" target="_blank">
          <img
            src="http://cdn.bitkeep.vip/u_b_ddceda40-2bec-11ec-b5c0-c1ce5b0a2535.png"
            alt=""
          />
          <span>{{ $t("mining.explorer") }}</span>
        </a>
        <van-icon name="arrow" class="setIcon" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      src: "https://cn.etherscan.com/token/0xcadd468f1bca4b0d637d6051cbc576a830f00000",
      flag: false,
    };
  },
  props: ["status"],
  methods: {
    viewAll() {
      this.flag = !this.flag;
      let dom = document.getElementsByClassName("about-con")[0];
      if (this.flag) {
        dom.setAttribute("style", "-webkit-line-clamp:10");
      } else {
        dom.setAttribute("style", "-webkit-line-clamp:2");
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/css/theme.scss";
@import "./index.scss";

</style>
