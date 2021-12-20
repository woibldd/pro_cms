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
          <li class="langItem" data-val="en" data="English">English</li>
          <li class="langItem" data-val="ko" data="한국어">한국어</li>
          <li class="langItem" data-val="ja" data="日本語">日本語</li>
          <li class="langItem" data-val="vi" data="Tiếng Việt">Tiếng Việt</li>
        </ul>
      </div>
    </div>
    <div class="detail_box_text">
      <p class="textPrimary0">{{$t('blindboxInvite.detailWallet')}}</p>
    </div>
    <div class="detail_box_flex">
      <div class="detail_box_flex_content">
        <div>
          <div>
            <img
              src="https://cdn.bitkeep.vip/u_b_2d8ec1f0-5bed-11ec-bdbc-7722494dfa58.png"
              alt=""
            />
          </div>
          <div class="detail_box_flex_content_first">
            {{$t('blindboxInvite.detailWallet1')}}
          </div>
        </div>
        <div class="detail_box_flex_content_right">
          <div>
            <img
              src="https://cdn.bitkeep.vip/u_b_2d96d840-5bed-11ec-bdbc-7722494dfa58.png"
              alt=""
            />
          </div>
          <div class="detail_box_flex_content_last">
            {{$t('blindboxInvite.detailWallet2')}}
          </div>
        </div>
      </div>
      <div class="detail_box_flex_content">
        <div>
          <div>
            <img
              src="https://cdn.bitkeep.vip/u_b_2d97e9b0-5bed-11ec-bdbc-7722494dfa58.png"
              alt=""
            />
          </div>
          <div class="detail_box_flex_content_first">{{$t('blindboxInvite.detailWallet3')}}</div>
        </div>
        <div class="detail_box_flex_content_right">
          <div>
            <img
              src="https://cdn.bitkeep.vip/u_b_2d8f1010-5bed-11ec-bdbc-7722494dfa58.png"
              alt=""
            />
          </div>
          <div class="detail_box_flex_font">{{$t('blindboxInvite.detailWallet4')}}</div>
        </div>
      </div>
    </div>
    <div class="detail_box_address colorBackgroundWhite">
      <div class="detail_box_address_header textPrimary0">
        {{$t('blindboxInvite.yourFrinedInvite')}}
      </div>
      <div class="detail_box_address_desc textSecond1">
                {{$t('blindboxInvite.friendsText')}}
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
            focus ? '' : $t( 'blindboxInvite.detailInput' )"
        />
        <div class="detail_box_address_textarea_btn" @click="submitAddress">{{$t( 'blindboxInvite.detailBtn' )}}</div>
        <div class="detail_box_address_textarea_link">
          <a href="https://www.bitkeep.org/" class="colorPrimary">
          {{$t( 'blindboxInvite.detailJust' )}}
          </a>
        </div>
      </div>
    </div>
    </div>
    <div class="detail_box_wallet setMargin">
      <h1>{{$t( 'blindboxInvite.detailWhy' )}}</h1>
      <img
        src="https://cdn.bitkeep.vip/u_b_916160b0-5a59-11ec-bdbc-7722494dfa58.png"
        alt=""
      />
      <div class="detail_box_wallet_title_content">
        <h1 class="detail_box_wallet_title">{{$t( 'blindboxInvite.detailContro' )}}</h1>
        <ul class="detail_box_wallet_ul">
          <li>{{$t( 'blindboxInvite.detailUl1' )}}</li>
          <li>{{$t( 'blindboxInvite.detailUl2' )}}</li>
          <li>{{$t( 'blindboxInvite.detailUl3' )}}</li>
        </ul>
      </div>
    </div>
    <div class="detail_box_wallet setBackground">
      <img
        src="https://cdn.bitkeep.vip/u_b_22575140-5bec-11ec-bdbc-7722494dfa58.png"
        alt=""
      />
      <div class="detail_box_wallet_title_content setBottom">
        <h1 class="detail_box_wallet_title">{{$t( 'blindboxInvite.detailCrypto' )}}</h1>
        <ul class="detail_box_wallet_ul">
          <li>{{$t('blindboxInvite.detailAny')}}</li>
          <li>{{$t('blindboxInvite.detailAggregate')}}</li>
        </ul>
      </div>
    </div>
    <div class="detail_box_nft">
      <h1 class="textPrimary0">{{$t('blindboxInvite.detailNFT')}}</h1>
      <div class="detail_box_nft_desc">
        {{$t('blindboxInvite.detailNFTCon')}}
      </div>
      <img
        src="https://cdn.bitkeep.vip/u_b_d35394b0-5e1f-11ec-bd49-b1b354a240c8.png"
        alt=""
      />
    </div>
    <div class="detail_box_bitkeep">
      <h1 bklang="five_1">{{$t('blindboxInvite.foot1')}}</h1>
      <p bklang="five_2">
        {{$t('blindboxInvite.foot2')}}
      </p>
      <ul>
        <li>
          <p bklang="five_3">{{$t('blindboxInvite.foot3')}}</p>
          <div class="num GB">4,000,000<span>+</span></div>
        </li>
        <li>
          <p bklang="five_4">{{$t('blindboxInvite.foot4')}}</p>
          <div class="num"><span>$</span>5,000<span>+ 亿</span></div>
        </li>
        <li>
          <p>{{$t('blindboxInvite.foot5')}}</p>
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
import { debounce } from "@/tools/common";

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
      window.addEventListener('load',()=>{
        let lang = {en: 'English', zh: 'English', ja: '日本語', ko: '한국어', vi: 'Tiếng Việt'}
        this.langText = lang[this.locale];        
        this.$store.commit('CHANGE_LANG',this.locale)
      });
    })
  },
  methods: {
    handlerFocus() {
      this.focus = true;
    },
    handlerBlur() {
      this.focus = false;
    },

    submitAddress:debounce(async function () {
      if(this.address == '') return this.$toast(this.$t( 'blindboxInvite.emptyToast' ));
      const { data, status } = await USER_API.certifyFriendship({
        address: this.address,
        token: this.$route.query.token
      });
      if (status == 1) {
        this.isLoading = false;
        return this.$toast(data);
      }
      this.address = '';
      // 0 --认证不成功
      // 1 --成功
      // 2 --地址已存在
      if(data == 0){
        this.$toast(this.$t('blindboxInvite.toast0'));
      }else if(data == 1){
        this.$router.push('/activity/blindboxInvite/download')
      }else{
        this.$toast(this.$t('blindboxInvite.toast2'));
      }
      // switch (data) {
      //   case 0:
      //     return this.$toast('认证不成功');
      //   case 1:
      //     this.$toast('成功');
      //     this.$router.push('/activity/blindboxInvite/download')
      //   case 2:
      //     return this.$toast('地址已存在');
      // }
    }),
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
  background: url("https://cdn.bitkeep.vip/u_b_4dcd9190-5bec-11ec-bdbc-7722494dfa58.png") no-repeat;
  background-size: 100% 100%;
}
.detail_box {
  h1{
    font-size: 24px;
  }
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
    margin-top: 34px;
    background: url("https://cdn.bitkeep.vip/u_b_efc07e80-5e4f-11ec-85be-634c19e2b84d.png") no-repeat;
    background-size: 100% 100%;
  }
  .detail_box_nft {
    margin: 30px 16px;
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
    height: 555px;
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
      margin-bottom: 5px;
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