<template>
  <div class="wrap" :class="[status ? 'statusM' : '']">
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
          {{
            !this.flag ? $t("mining.viewAll") : $t("mining.pickUp")
          }}
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
          {{ $t("mining.total")
          }}<span class="exchangeTotal">600,000,000</span>
        </p>
      </div>
      <div class="distribution-man">
        <div class="data">
          <div>
            <span style="background: #495bff"></span>
            <span>{{ $t("mining.mining") }}</span>
          </div>
          <div>50%</div>
        </div>
        <div class="data">
          <div>
            <span style="background: #1cbdb5"></span>
            <span>{{ $t("mining.eco") }}</span>
          </div>
          <div>20%</div>
        </div>
        <div class="data">
          <div>
            <span style="background: #ff8146"></span>
            <span>{{ $t("mining.community") }} </span>
          </div>
          <div>15%</div>
        </div>
        <div class="data">
          <div>
            <span style="background: #f04e98"></span>
            <span>{{ $t("mining.partner") }}</span>
          </div>
          <div>10%</div>
        </div>
        <div class="data">
          <div>
            <span style="background: rgba(191, 203, 224, 0.7)"></span>
            <span>{{ $t("mining.tram") }}</span>
          </div>
          <div>5%</div>
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
              src="http://cdn.bitkeep.vip/u_b_87307190-3e1f-11ec-b9aa-f704e635d485.png"
              alt=""
            />
            <span>{{ $t("mining.hold1") }}</span>
          </div>
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_872e75c0-3e1f-11ec-b9aa-f704e635d485.png"
              alt=""
            />
            <span>{{ $t("mining.hold2") }}</span>
          </div>
        </div>
        <div class="appreciation-grid-flex">
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_872f8730-3e1f-11ec-b9aa-f704e635d485.png"
              alt=""
            />
            <span>{{ $t("mining.hold3") }}</span>
          </div>
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_872f6020-3e1f-11ec-b9aa-f704e635d485.png"
              alt=""
            />
            <span>{{ $t("mining.hold4") }}</span>
          </div>
        </div>
        <div class="appreciation-grid-flex">
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_3bc4bc20-3e1f-11ec-901e-77de61c391e4.png"
              alt=""
            />
            <span>{{ $t("mining.hold5") }}</span>
          </div>
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_3bc1d5f0-3e1f-11ec-901e-77de61c391e4.png"
              alt=""
            />
            <span>{{ $t("mining.hold6") }}</span>
          </div>
        </div>
        <div class="appreciation-grid-flex">
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_3bc33580-3e1f-11ec-901e-77de61c391e4.png"
              alt=""
            />
            <span>{{ $t("mining.hold7") }}</span>
          </div>
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_3bc2e760-3e1f-11ec-901e-77de61c391e4.png"
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
          src="http://cdn.bitkeep.vip/u_b_dfdfdf40-3e1c-11ec-9b39-4f7f91c175c3.png"/>
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
      src: "https://cn.etherscan.com/address/0xa286035a1e60abf172524bdbfd224abeef6ce362",
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
.line {
  border-bottom: 1px solid #f4f5fa;
}
.statusM {
  padding-bottom: 52px;
}
.wrap {
  background: #fff;
}
.hold-content{
  img{
    width: 40px!important;
    height: 40px!important;
  }
}
.about {
  .about-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    background: #f3f5f6;
  }
  .about-wrap-pos {
    text-align: center;
    font-size: 18px;
    line-height: 18px;
    color: #080d21;
    direction: cloumn;
    img {
      width: 28px;
      height: 28px;
    }
    p {
      margin-top: 5px;
      font-size: 18px;
      line-height: 18px;
      color: #080D21;
      font-weight: 600;
    }
  }
  .about-content {
    margin: 12px 16px 30px;
  }
  .about-title {
    img {
      width: 20px;
      height: 20px;
      vertical-align: text-top;
      margin-right: 5px;
    }

    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    color: #080d21;
    vertical-align: middle;
  }

  .about-con {
    padding-top: 15px;
    font-size: 14px;
    line-height: 20px;
    color: #4b5373;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .viewAll {
    text-align: right;
    font-size: 14px;
    line-height: 14px;
    color: #495bff;
    margin-top: 6px;
  }
}

.distribution {
  margin: 12px 16px 30px;

  .distribution-title {
    img {
      width: 20px;
      height: 20px;
      vertical-align: text-top;
      margin-right: 5px;
    }

    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    color: #080d21;
    vertical-align: middle;
  }

  .charts-img {
    text-align: center;
    margin: 20px;

    img {
      width: 110px;
      height: 110px;
    }

    .exchangeTotal {
      font-family: bitkeep DIN;
      font-size: 14px;
      color: #4b5373;
    }

    .total {
      font-size: 14px;
      line-height: 20px;
      color: #4b5373;

      span {
        color: #080d21;
      }
    }
  }

  .distribution-man {
    margin-bottom: 30px;
    background: #f3f5f6;
    border-radius: 8px;
    padding: 10px;

    .data {
      display: flex;
      justify-content: space-between;

      div:last-child {
        font-family: bitkeep DIN;
        font-size: 14px;
        color: #080d21;
      }

      > div {
        font-size: 14px;
        line-height: 34px;
        color: #4b5373;
        vertical-align: middle;

        span:first-child {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          vertical-align: middle;
          margin-right: 4px;
        }

        span:last-child {
          color: #4b5373;
          vertical-align: middle;
        }
      }
    }
  }
}

.hold {
  margin: 12px 16px 30px;

  .hold-title {
    img {
      width: 20px;
      height: 20px;
      vertical-align: text-top;
      margin-right: 5px;
    }

    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    color: #080d21;
    vertical-align: middle;
  }
}

.appreciation {
  margin: 12px 16px 30px;

  .appreciation-title {
    img {
      width: 20px;
      height: 20px;
      vertical-align: text-top;
      margin-right: 5px;
    }
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    color: #080d21;
    vertical-align: middle;
  }
}
.appreciation-grid {
    width: 100%;
    text-align: center;

    .appreciation-grid-flex {
      display: flex;
      flex-direction: row;
      margin-top: 20px;

      div {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 50%;
        float: left;

        img {
          margin-top: 5px;
          width: 24px;
          height: 24px;
        }

        span {
          font-size: 14px;
          color: #4b5373;
          width: 140px;
          margin-top: 5px;
          line-height: 18px;
        }
      }
    }
  }

.setIcon {
  color: #999ba3;
}

.setLightColor {
  color: #080d21;
}

.setDarkColor {
  color: #4b5373;
}
.setFontFamily {
  font-family: "bitkeep DIN";
}

.more {
  margin: 12px 16px 30px;

  .more-title {
    font-size: 16px;
    line-height: 45px;
    font-weight: 600;
    color: #080d21;
    border-bottom: 1px solid #f4f5fa;
  }

  .more-line {
    font-size: 16px;
    line-height: 50px;
    height: 50px;
    border-bottom: 1px solid #f4f5fa;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      flex: 1;
    }

    img {
      width: 24px;
      height: 24px;
      vertical-align: middle;
    }

    span {
      color: #080d21;
      display: inline-block;
      margin-left: 10px;
    }
  }
}
</style>
