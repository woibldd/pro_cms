<template>
  <div>
    <div class="img">
      <img :src="locale=='en' ? 'http://cdn.bitkeep.vip/u_b_b0537090-2beb-11ec-b5c0-c1ce5b0a2535.png': 'http://cdn.bitkeep.vip/u_b_8aca85c0-2beb-11ec-b5c0-c1ce5b0a2535.png'" alt="">
    </div>
    <div class="text">
      <p class="balance">{{$t('CbkbExchange.balance')}}: {{cbkbBalance}} cBKB</p>
      <p class="text-t">{{$t('CbkbExchange.get')}}</p>
      <p class="text-n">{{available}} <span class="setFont">BKB</span></p>
      <div class="swap-btn" @click="swapBkb">{{$t('CbkbExchange.swap')}}</div>
    </div>
    <div class="exchange">
      <p class="title">{{$t('CbkbExchange.exchange')}} </p>
      <p class="content">{{$t('CbkbExchange.exchangeTitle')}}</p>
      <p class="content">{{$t('CbkbExchange.exchangeTitleA')}}</p>
      <p class="title">{{$t('CbkbExchange.exchangeTime')}}</p>
      <p class="content">{{$t('CbkbExchange.time')}}</p>
      <p class="title">{{$t('CbkbExchange.condition')}}</p>
      <p class="content">{{$t('CbkbExchange.conditionText')}}</p>
      <p class="title">{{$t('CbkbExchange.proportion')}}</p>
      <p class="content">{{$t('CbkbExchange.proportionText')}}</p>
      <p class="title">{{$t('CbkbExchange.exchangeTitle1')}}</p>
      <p class="content">{{$t('CbkbExchange.exchangeTitle2')}}</p>
      <p class="content">{{$t('CbkbExchange.exchangeTitle3')}}</p>
    </div>
    <div class="line"></div>
    <div class="about">
      <div class="about-title">
        <img src="http://cdn.bitkeep.vip/u_b_0978f140-2bec-11ec-b5c0-c1ce5b0a2535.png" alt="">
        <span>{{$t('CbkbExchange.about')}}</span>
      </div>
      <div class="about-con">
        {{$t('CbkbExchange.aboutContent')}}
      </div>
      <div class="viewAll" @click="viewAll"> {{$t('CbkbExchange.viewAll')}}</div>
    </div>
    <div class="line"></div>
    <div class="distribution">
      <div class="distribution-title">
        <img src="http://cdn.bitkeep.vip/u_b_244b3eb0-2bec-11ec-b5c0-c1ce5b0a2535.png" alt="">
        <span>{{$t('CbkbExchange.distribution')}}</span>
      </div>
      <div class="charts-img">
        <img src="http://cdn.bitkeep.vip/u_b_3b815290-2bec-11ec-b5c0-c1ce5b0a2535.png" alt="">
        <p class="total">{{$t('CbkbExchange.total')}}<span>600,000,000</span></p>
      </div>
      <div class="distribution-man">
        <div class="data">
          <div>
            <span style="background: #495BFF;"></span>
            <span>{{$t('CbkbExchange.mining')}}</span>
          </div>
          <div>50%</div>
        </div>
        <div class="data">
          <div>
            <span style="background: #1CBDB5;"></span>
            <span>{{$t('CbkbExchange.community')}}</span>
          </div>
          <div>20%</div>
        </div>
        <div class="data">
          <div>
            <span style="background: #FF8146;"></span>
            <span>{{$t('CbkbExchange.tram')}} </span>
          </div>
          <div>15%</div>
        </div>
        <div class="data">
          <div>
            <span style="background: #F04E98;"></span>
            <span>{{$t('CbkbExchange.partner')}}</span>
          </div>
          <div>10%</div>
        </div>
        <div class="data">
          <div>
            <span style="background: #080D21;"></span>
            <span>{{$t('CbkbExchange.eco')}}</span>
          </div>
          <div>5%</div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="hold">
      <div class="hold-title">
        <img src="http://cdn.bitkeep.vip/u_b_5930f660-2bec-11ec-b5c0-c1ce5b0a2535.png" alt="">
        <span>{{$t('CbkbExchange.hold')}}</span>
      </div>
      <div class="hold-content">
        <p>{{$t('CbkbExchange.hold1')}}</p>
        <p>{{$t('CbkbExchange.hold2')}}</p>
        <p>{{$t('CbkbExchange.hold3')}}</p>
        <p>{{$t('CbkbExchange.hold4')}}</p>
        <p>{{$t('CbkbExchange.hold5')}}</p>
        <p>{{$t('CbkbExchange.hold6')}}</p>
        <p>{{$t('CbkbExchange.hold7')}}</p>
        <p>{{$t('CbkbExchange.hold8')}}</p>
      </div>
    </div>
    <div class="line"></div>
    <div class="appreciation">
      <div class="appreciation-title">
        <span>{{$t('CbkbExchange.appreciation')}}</span>
      </div>
      <div class="appreciation-grid">
        <div class="appreciation-grid-flex">
          <div>
            <img src="http://cdn.bitkeep.vip/u_b_adf789c0-2bec-11ec-b5c0-c1ce5b0a2535.png" alt="">
            <span style="width: 110px">{{$t('CbkbExchange.appreciationSwap')}}</span>
          </div>
          <div>
            <img src="http://cdn.bitkeep.vip/u_b_adf71490-2bec-11ec-b5c0-c1ce5b0a2535.png" alt="">
            <span>{{$t('CbkbExchange.appreciationCoin')}}</span>
          </div>
        </div>
        <div class="appreciation-grid-flex">
          <div>
            <img src="http://cdn.bitkeep.vip/u_b_adf789c1-2bec-11ec-b5c0-c1ce5b0a2535.png" alt="">
            <span style="width: 110px">{{$t('CbkbExchange.appreciationPool')}}</span>
          </div>
          <div>
            <img src="http://cdn.bitkeep.vip/u_b_adf7b0d0-2bec-11ec-b5c0-c1ce5b0a2535.png" alt="">
            <span>{{$t('CbkbExchange.appreciationValut')}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="more">
      <div class="more-title">{{$t('CbkbExchange.more')}}</div>
      <div class="more-line">
        <a href="https://www.bitkeep.org/" target="_blank">
          <img src="http://cdn.bitkeep.vip/u_b_ddcf2860-2bec-11ec-b5c0-c1ce5b0a2535.png" alt=""><span>{{$t('CbkbExchange.website')}}</span>
        </a>
        <van-icon name="arrow"/></div>
      <div class="more-line">
        <a href="" target="_blank">
          <img src="http://cdn.bitkeep.vip/u_b_ddf09310-2bec-11ec-b5c0-c1ce5b0a2535.png" alt=""> <span>{{$t('CbkbExchange.paper')}}</span>
        </a>
        <van-icon name="arrow"/>
      </div>
      <div class="more-line">
        <a href="https://twitter.com/BitKeepOS" target="_blank">
          <img src="http://cdn.bitkeep.vip/u_b_ddcf4f71-2bec-11ec-b5c0-c1ce5b0a2535.png" alt=""> <span>{{$t('CbkbExchange.twitter')}}</span>
        </a>
        <van-icon name="arrow"/>
      </div>
      <div class="more-line">
        <a href="https://github.com/bitkeepcom" target="_blank">
          <img src="http://cdn.bitkeep.vip/u_b_ddceb330-2bec-11ec-b5c0-c1ce5b0a2535.png" alt=""> <span>{{$t('CbkbExchange.github')}}</span>
        </a>
        <van-icon name="arrow"/>
      </div>
      <div class="more-line">
        <a href="https://t.me/bitkeep" target="_blank">
          <img src="http://cdn.bitkeep.vip/u_b_ddcf0150-2bec-11ec-b5c0-c1ce5b0a2535.png" alt=""> <span>{{$t('CbkbExchange.telegram')}}</span>
        </a>
        <van-icon name="arrow"/>
      </div>
      <div class="more-line">
        <a href="" target="_blank">
          <img src="http://cdn.bitkeep.vip/u_b_ddcf4f70-2bec-11ec-b5c0-c1ce5b0a2535.png" alt=""> <span>{{$t('CbkbExchange.facebook')}}</span>
        </a>
        <van-icon name="arrow"/>
      </div>
      <div class="more-line">
        <a :href="src" target="_blank">
          <img src="http://cdn.bitkeep.vip/u_b_ddceda40-2bec-11ec-b5c0-c1ce5b0a2535.png" alt=""> <span>{{$t('CbkbExchange.explorer')}}</span>
        </a>
        <van-icon name="arrow"/>
      </div>
    </div>
  </div>
</template>

<script>
import { USER_API } from "@/api/client";
import {debounce} from "../../../tools/common";
import { mapState } from "vuex";
export default {
  name: "index",
  data(){
    return{
      cbkbBalance: 0,
      available: 0,
      src: ''
    }
  },
  computed: {
    ...mapState(["local"]),
    locale() {
      return this.local.locale;
    }
  },
  async created(){
    process.client && window.addEventListener('load',()=>{
      this.getBalance();
    })
  },
  methods:{
    // 获取地址cbkb地址
    async getBalance() {
      if(!window.ethereum){
        return
      }else{
        await window.ethereum.request({ method: "eth_requestAccounts" });
        this.getCbkbSwapInfo(window.ethereum.selectedAddress);
        this.src = 'https://cn.etherscan.com/address/'+window.ethereum.selectedAddress
      }
    },
    async getCbkbSwapInfo(address){
      const { data, status } = await USER_API.getCbkbSwapInfo({
        userid: address,
      });
      if (status == 1) return this.$toast.fail(data);
      this.cbkbBalance = data.cbkbBalance;
      this.available = data.available;
    },
    swapBkb:debounce(async function(){
      const { data, status } = await USER_API.swapBkb({
        userid: window.ethereum.selectedAddress,
      });
      if (status == 1) return this.$toast.fail(data);
      this.$toast.success(data)
    }),
    viewAll(){
      document.getElementsByClassName('about-con')[0].setAttribute('style','-webkit-line-clamp:10')
    }
  }
}
</script>

<style lang="scss" scoped>
.img img{
  width: 100%;
}
.text{
  margin-top: 30px;
  text-align: center;
  .balance{
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    color: #4B5373;
  }
  .text-t{
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: #080D21;
  }
  .text-n{
    font-size: 24px;
    line-height: 14px;
    color: #080D21;
    .setFont{
      font-size: 16px;
    }
  }
  .swap-btn{
    width: 166px;
    height: 50px;
    color: #fff;
    margin: 20px auto;
    background: #495BFF;
    border-radius: 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 50px;
  }
}
.exchange{
  margin: 30px 16px;
  background: #F3F5F6;
  border-radius: 8px;
  padding: 15px;
  font-size: 14px;
  line-height: 16px;
  .title{
    color: #080D21;
    font-weight: 600;
  }
  .content{
    color: #4B5373;
  }
}
.line{
  width: 100%;
  border-bottom: 1px solid #F4F5FA;
}
.about{
  margin: 12px 16px 30px;
  .about-title{
    img{
      width: 18px;
      height: 18px;
      vertical-align: bottom;
    }
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    color: #080D21;
    vertical-align: middle;
  }
  .about-con{
    padding-top: 15px;
    font-size: 14px;
    line-height: 20px;
    color: #4B5373;
    overflow: hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .viewAll{
    text-align: right;
    font-size: 14px;
    line-height: 14px;
    color: #495BFF;
  }
}
.distribution{
  margin: 12px 16px 30px;
  .distribution-title{
    img{
      width: 18px;
      height: 18px;
      vertical-align: bottom;
    }
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    color: #080D21;
    vertical-align: middle;
  }
  .charts-img{
    text-align: center;
    margin: 20px;
    img{
      width: 110px;
      height: 110px;
    }
    .total{
      font-size: 14px;
      line-height: 20px;
      color: #4B5373;
      span{
        color: #080D21;
      }
    }
  }
  .distribution-man{
    margin-bottom: 30px;
    background: #F3F5F6;
    border-radius: 8px;
    padding: 10px;
    .data{
      display: flex;
      justify-content: space-between;
      >div{
        font-size: 14px;
        line-height: 34px;
        color: #4B5373;
        vertical-align: middle;
        span:first-child{
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          vertical-align: middle;
          margin-right: 4px;
        }
        span:last-child{
          color: #4B5373;
          vertical-align: middle;
        }
      }
    }
  }
}
.hold{
  margin: 12px 16px 30px;
  .hold-title{
    img{
      width: 18px;
      height: 18px;
      vertical-align: bottom;
    }
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    color: #080D21;
    vertical-align: middle;
  }
  .hold-content{
    font-size: 14px;
    line-height: 12px;
    color: #4B5373;
  }
}
.appreciation{
  margin: 12px 16px 30px;
  .appreciation-title{
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    color: #080D21;
    vertical-align: middle;
  }
  .appreciation-grid{
    width: 100%;
    text-align: center;
    .appreciation-grid-flex{
      display: flex;
      flex-direction: row;
      margin-top: 20px;
      div{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 50%;
        float: left;
        height: 65px;
        img{
          margin-top: 5px;
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}
.more{
  margin:12px 16px 30px;
  .more-title{
    font-size: 16px;
    line-height: 45px;
    font-weight: 600;
    color: #080D21;
    border-bottom: 1px solid #F4F5FA;
  }
  .more-line{
    font-size: 16px;
    line-height: 50px;
    height: 50px;
    border-bottom: 1px solid #F4F5FA;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
      flex: 1;
    }
    img{
      width: 24px;
      height: 24px;
      vertical-align: middle;
    }
    span{
      color: #080D21;
      display: inline-block;
      margin-left: 10px;
    }
  }
}
</style>
