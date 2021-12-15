<template>
<div>
  <div class="loading" v-if="isLoading">
      <van-loading color="#1989fa" vertical
        >{{ $t("base.loading") }}...</van-loading
      >
  </div>
  <div class="detail_box" v-else>
    <div class="detail_box_back">
      <div class="detail_box_header">
      <div><img src="@/assets/activity/blindbox/logo@2.png" /></div>
      <div class="detail_box_lang">
        <div class="langBox" id="showLang" @click="changeLang">
          <span class="curLang">{{langText}}</span>
          <van-icon name="play" class="icon setFont" />
        </div>
        <ul class="langList" id="langList" v-show='langShow'>
          <li class="langItem" data-val="zh" data="中文">中文</li>
          <li class="langItem" data-val="en" data="English">English</li>
          <li class="langItem" data-val="ko" data="韩语">韩语</li>
          <li class="langItem" data-val="ja" data="日语">日语</li>
          <li class="langItem" data-val="vi" data="越南语">越南语</li>
        </ul>
      </div>
    </div>
    <div class="detail_box_text">
      <p class="textPrimary0">The most trusted & secure crypto wallet</p>
    </div>
    <div class="detail_box_flex">
      <div class="detail_box_flex_content">
        <div>
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_2d8ec1f0-5bed-11ec-bdbc-7722494dfa58.png"
              alt=""
            />
          </div>
          <div class="detail_box_flex_content_first">
            Securely store encrypted assets
          </div>
        </div>
        <div class="detail_box_flex_content_right">
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_2d96d840-5bed-11ec-bdbc-7722494dfa58.png"
              alt=""
            />
          </div>
          <div class="detail_box_flex_content_last">
            Convenient & easy to use BKSwap
          </div>
        </div>
      </div>
      <div class="detail_box_flex_content">
        <div>
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_2d97e9b0-5bed-11ec-bdbc-7722494dfa58.png"
              alt=""
            />
          </div>
          <div class="detail_box_flex_content_first">Support 721 NFT</div>
        </div>
        <div class="detail_box_flex_content_right">
          <div>
            <img
              src="http://cdn.bitkeep.vip/u_b_2d8f1010-5bed-11ec-bdbc-7722494dfa58.png"
              alt=""
            />
          </div>
          <div class="detail_box_flex_font">7000+ DApp ecosystem</div>
        </div>
      </div>
    </div>
    <div class="detail_box_address colorBackgroundWhite">
      <div class="detail_box_address_header textPrimary0">
        Your friend invites you to join BitKeep multi-chain wallet
      </div>
      <div class="detail_box_address_desc textSecond1">
        Trade and mine together to get BKB asset rewards
      </div>
      <div class="detail_box_address_textarea colorBackground2">
        <textarea
          type="text"
          ref="textarea"
          v-model="address"
          @focus="handlerFocus"
          :class="{ focus: focus || !!address }"
          @blur="handlerBlur()"
          :placeholder="
            focus ? '' : $t( 'ActivityBlindbox.ActivityBlindboxDetail.inputAddressPlaceholader' )"
        />
        <div class="detail_box_address_textarea_btn" @click="submitAddress">提交地址 接受邀请</div>
        <div class="detail_box_address_textarea_link">
          <a href="https://www.bitkeep.org/" class="colorPrimary">
          没有 ETH 地址? 点击下方按钮下载 BitKeep 创建
          </a>
        </div>
      </div>
    </div>
    </div>
    <div class="detail_box_wallet setMargin">
      <h1>Why choose BitKeep wallet？</h1>
      <img
        src="http://cdn.bitkeep.vip/u_b_916160b0-5a59-11ec-bdbc-7722494dfa58.png"
        alt=""
      />
      <div class="detail_box_wallet_title_content">
        <div class="detail_box_wallet_title">Control your crypto</div>
        <ul class="detail_box_wallet_ul">
          <li>安全存储加密数字货币及 NFT，资产自我掌控</li>
          <li>支持 30+ 主链，5000+ 种加密资产</li>
          <li>7000+ DApp 生态功能，畅玩 DeFi</li>
        </ul>
      </div>
    </div>
    <div class="detail_box_wallet setBackground">
      <img
        src="http://cdn.bitkeep.vip/u_b_22575140-5bec-11ec-bdbc-7722494dfa58.png"
        alt=""
      />
      <div class="detail_box_wallet_title_content setBottom">
        <div class="detail_box_wallet_title">Trading anycoins on BKSwap</div>
        <ul class="detail_box_wallet_ul">
          <li>随时轻松兑换和交易多链加密货币</li>
          <li>聚合 Uniswap、Sushiswap、PancakeSwap 等 30+ 主流 DEX</li>
        </ul>
      </div>
    </div>
    <div class="detail_box_nft">
      <h2 class="textPrimary0">Store your NFTs</h2>
      <div class="detail_box_nft_desc">
        Safely store and easily view all of your NFTs (ERC721 tokens) right in
        your Wallet.
      </div>
      <img
        src="http://cdn.bitkeep.vip/u_b_f565c310-5a60-11ec-bdbc-7722494dfa58.png"
        alt=""
      />
    </div>
    <div class="detail_box_bitkeep">
      <h1 bklang="five_1">BitKeep 为全球提供服务</h1>
      <p bklang="five_2">
        已为全球 168+ 个国家地区的数百万用户提供安全、可靠的加密资产管理服务
      </p>
      <ul>
        <li>
          <p bklang="five_3">用户量</p>
          <div class="num GB">4,000,000<span>+</span></div>
        </li>
        <li>
          <p bklang="five_4">转账金额</p>
          <div class="num"><span>$</span>5,000<span>+ 亿</span></div>
        </li>
        <li>
          <p>覆盖国家和地区</p>
          <div class="num">168<span>+</span></div>
        </li>
      </ul>
      <div class="people">
        <img
          src="https://cdn.bitkeep.vip/u_b_e27e3060-d0b9-11eb-a1fd-1b9796c35a14.png"
          alt="people"
        />
      </div>
    </div>
    <div class="blindbox_logo">
      <span class="logo">
        <img src="@/assets/activity/blindbox/logo@2.png"
      /></span>
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
        <a href="https://www.bitkeep.com/" target="_blank">
          <img
            src="https://cdn.bitkeep.vip/u_b_33740cb0-d0ba-11eb-a1fd-1b9796c35a14.png"
            alt="btn1"
          />
        </a>
      </div>
      <div class="right">
        <a class="btnDwonload" href="https://www.bitkeep.com/">
          <img
            src="https://cdn.bitkeep.vip/u_b_337433c0-d0ba-11eb-a1fd-1b9796c35a14.png"
            alt="btn2"
          />
        </a>
      </div>
    </div>
  </div>
</div>
  
</template>
<script>
import { mapState } from "vuex";
import { USER_API } from "@/api/client";

export default {
  name: "Detail",
  data () {
    return {
      isLoading: true,
      address: '',
      focus: false,
      langShow: false,
      langText: 'English'
    }
  },
  computed: {
    ...mapState(["local"]),
    locale() {
      return this.local.locale;
    },
    isIos() {
      return this.local.UA.ios;
    },
  },
  mounted () {
    this.$nextTick(()=>{
      this.isLoading = false;
    })
  },
  methods: {
    handlerFocus() {
      this.focus = true;
    },
    handlerBlur() {
      this.focus = false;
    },
    async submitAddress() {
      const { data, status } = await USER_API.certifyFriendship({
        address: this.address
      });
      if (status == 1) {
        this.isLoading = false;
        return this.$toast(data);
      }
      this.address = '';
      // 0 --认证不成功
      // 1 --成功
      // 2 --地址已存在
      switch (data) {
        case 0:
          return this.$toast('认证不成功');
          break
        case 1:
          this.$toast('成功');
          this.$router.push('/activity/blindboxInvite/download')
        case 2:
          return this.$toast('地址已存在');
      }
      
    },
    changeLang(){
      this.langShow = true;
      // 点击切换语言
      let langItem = document.getElementsByClassName('langItem');
      for (let i = 0; i < langItem.length; i++) {
        let curItem = langItem[i];
        curItem.addEventListener('click', () => {
          let lang = curItem.getAttribute('data-val');
          this.langShow = false;
          this.langText = curItem.getAttribute('data');
          // 获取对应语言包数据
          this.$store.commit('CHANGE_LANG',lang)
        })
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import "@/assets/css/theme.scss";
.loading {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.detail_box_back{
  background: url("http://cdn.bitkeep.vip/u_b_4dcd9190-5bec-11ec-bdbc-7722494dfa58.png") no-repeat;
  background-size: 100% 100%;
}
.detail_box {
  .detail_box_header {
    display: flex;
    justify-content: space-between;
    padding: 8px 22px 8px 16px;
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
        // display: none;
        position: absolute;
        right: 16px;
        overflow: hidden;
        padding: 12px 22px;
        background: #fff;
        border-radius: 6px;
        box-shadow: 0px 30px 40px 0px #0e1b400d;
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        margin-top: 6px;
      }
    }
  }
  .detail_box_text {
    margin: 28px 16px 0;
    p {
      width: 230px;
      font-weight: bold;
      font-size: 24px;
      line-height: 24px;
    }
  }
  .detail_box_flex_content {
    display: flex;
    align-items: center;
    margin: 10px 16px;
    .detail_box_flex_content_first {
      width: 111px;
      font-size: 14px;
    }
    .detail_box_flex_content_last {
      font-size: 14px;
      width: 124px;
    }
    .detail_box_flex_content_right {
      margin-left: 66px;
      .detail_box_flex_font{
      font-size: 14px;
      }
    }
    img {
      width: 24px;
      height: 24px;
    }
  }
  .detail_box_address {
    margin: 50px 16px 40px;
    height: 262px;
    border-radius: 16px;
    padding: 10px;
    background: #fff;
    .detail_box_address_header {
      font-size: 18px;
      line-height: 24px;
      font-weight: 600;
      text-align: center;
    }
    .detail_box_address_desc {
      font-size: 13px;
      line-height: 14px;
      text-align: center;
      margin-top: 10px;
    }
    .detail_box_address_textarea {
      margin: 20px 0;
      height: 110px;
      border-radius: 8px;
      textarea {
        border-radius: 8px;
        border: none;
        width: 271px;
        height: 32px;
        padding: 14px;
        text-align: center;
        line-height: 32px;
        outline: none;
        background: #f3f5f6;
        resize: none;
        font-size: 12px;
        &::placeholder {
          color: #4b5373;
        }
        &.focus {
          line-height: 16px;
          font-size: 12px;
          text-align: left;
        }
      }
      .detail_box_address_textarea_btn {
        background: #495bff;
        border-radius: 8px;
        color: #fff;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
      }
      .detail_box_address_textarea_link {
        margin: 15px 70px;
        text-align: center;
        font-size: 14px;
      }
    }
  }
  .setMargin {
    margin: 40px 16px 20px;
  }
  .setBottom {
    padding: 0 16px 34px;
  }
  .detail_box_wallet {
    >h1{
      font-size: 24px;
    }
    img {
      width: 100%;
    }
    .detail_box_wallet_title_content {
      .detail_box_wallet_title {
        font-size: 22px;
        font-weight: 600;
      }
      .detail_box_wallet_ul {
        margin-top: 14px;
        line-height: 20px;
        color: #0e1b40;
        li {
          margin-left: 18px;
          font-size: 12px;
        }
        li::before {
          content: "";
          display: block;
          position: absolute;
          left: 14px;
          margin-top: 3px;
          width: 14px;
          height: 14px;
          background: url("@/assets/activity/icon/01icon.png") no-repeat;
          background-size: 100% auto;
        }
      }
    }
  }
  .setBackground {
    width: 100%;
    margin-top: 34px;
    background: url("https://cdn.bitkeep.vip/u_b_ad386c70-d0bb-11eb-a1fd-1b9796c35a14.jpeg")
      no-repeat;
  }
  .detail_box_nft {
    margin: 50px 16px;
    h2 {
      font-size: 22px;
    }
    .detail_box_nft_desc {
      color: #0e1b40;
      font-size: 12px;
      line-height: 16px;
    }
    img {
      width: 100%;
      margin-top: 30px;
    }
  }
  .detail_box_bitkeep {
    position: relative;
    box-sizing: border-box;
    height: 544px;
    padding: 30px 16px 0;
    background: #0e1b40;
    > h1 {
      font-size: 22px;
      color: #fff;
    }
    p {
      color: #fff;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
    }
    div {
      color: #fff;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
    }
    ul {
      li {
        margin-top: 30px;
        font-size: 14px;
        .num {
          font-size: 24px;
          font-weight: 600;
          span {
            font-size: 14px;
          }
        }
      }
    }
    .people {
      position: absolute;
      bottom: 0;
      left: 2.5%;
      width: 95%;
      img {
        display: block;
        width: 100%;
      }
    }
  }
  .blindbox_logo {
    width: 100%;
    margin: 15px auto 70px;
    display: flex;
    justify-content: center;
    padding: 15px;
    box-sizing: border-box;
    align-items: center;
    .logo {
      width: 105px;
      height: 28px;
      display: flex;
      img {
        width: 100%;
        height: 100%;
      }
    }
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
    .left {
      box-sizing: border-box;
      float: left;
      width: 50%;
      padding-right: 1%;
    }
    .right {
      box-sizing: border-box;
      float: left;
      width: 50%;
      padding-left: 1%;
    }
    a {
      display: block;
      width: 100%;
      margin: 12px 0 0;
      img {
        display: block;
        width: 100%;
      }
    }
    .version {
      width: 100%;
      color: #9ca5b3;
      font-size: 12px;
      margin-top: 5px;
      text-align: center;
    }
  }
  .setFont{
    font-size: 12px;
  }
  a {
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    -moz-tap-highlight-color: transparent;
  }
}
</style>