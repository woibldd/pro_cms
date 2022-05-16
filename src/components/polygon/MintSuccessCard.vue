<template>
  <van-popup v-model="visables" close-icon-position="top-right" closeable :close-on-click-overlay="false"
    @click-close-icon="close">
    <div class="Mintpopup">
      <div class="TTORegular title">
        {{ $t('polygon.mintTitle1') }}
        <span class="TTOMedium">({{ MintData.length }})</span></div>
      <!-- <div class="swpierbox" v-if="MintData.length>1">
        <div v-swiper="swiperOption" :loop="false">
          <div class="MintList swiper-wrapper">
            <div class="Mintlogo swiper-slide" v-for="item in MintData" :key="item.tokenId">
              <img :src="item.picUrl" alt="" class="picUrl">
              <span class="TTORegular tokenId">Token ID: #{{ item.tokenId }}</span>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev  swiper-button-black" slot="button-prev"></div>
        <div class="swiper-button-next  swiper-button-black" slot="button-next"></div>
      </div> -->
      <!-- <div class="oneMintList" v-else>
        <div class="oneMintlogo" v-for="item in MintData" :key="item.tokenId">
          <img :src="item.picUrl" alt="">
          <span class="TTORegular tokenId">Token ID: #{{ item.tokenId }}</span>
        </div>
      </div> -->
      <!-- <div class="MintlogoOne" v-for="item in MintData" :key="item.tokenId">
        <img :src="item.picUrl" alt=""> 
        <img src="@/assets/img/Py_bg.png" alt="">
        <div class="tokenId TTORegular">Token ID: #{{ item.tokenId }}</div>
      </div> -->
      <div class="MentList" v-if="MintData.length > 1">  
          <swiper @mousemove="e=>e" :options="swiperOption" class="swiper-wrapper"> 
            <swiper-slide 
              v-for="item in MintData" :key="item.tokenId">
              <div  class="Mentlogo" :class="item.selected==true?'MentlogoActive':''"> 
                  <!-- <img :src="item.picUrl" alt="">  -->
                  <img src="@/assets/img/Py_bg.png" alt="">
                  <div class="TTORegular tokenId">Token ID: #{{item.tokenId}}</div> 
                 
              </div>
            </swiper-slide>
          </swiper>  
      </div>
      <div v-else-if="MintData.length == 1" class="Mintlogo"> 
        <img :src="MintData[0].picUrl" alt=""> 
        <!-- <img src="@/assets/img/Py_bg.png" alt=""> -->
        <div class="TTORegular tokenId">Token ID: #{{MintData[0].tokenId}}</div> 
      </div>
      <!-- <a  class="TTORegular browserview" :href="'https://polygonscan.com/tx/' + sendhash" target="_blank"
        rel="noopener noreferrer">{{ $t("polygon.loadingtitle2") }}
        <van-icon name="arrow" />
      </a> -->
    </div>

  </van-popup>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper' 
export default {
  name: "MintSuccess",
  components: { 
      Swiper, 
      SwiperSlide,
    },
  props: {
    showMintSuccess: {
      type: Boolean,
      default: false
    },
    MintData: {
      type: Array,
      default: () => []
    },
    sendhash: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      MintNum: 1, 
      visables: this.showMintSuccess,
      swiperOption: { // 配置说明直接看官网
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        slidesPerView: 4,
        observer: true,
        observeParents: true,
        preventClicks: false,
        slideToClickedSlide: false,
        slidesPerColumn: 1,
        slidesOffsetAfter: 150,
        swiperOption: {
          initialSlide: 0,
          slidesPerView : 2.4,  
          direction: 'horizontal',  
          loop: false,  
        }
      }
    }
  },
  watch: {
    showMintSuccess(n) {
      this.visables = n;
    },
  },
  methods: {
    close() {
      this.$emit("closeMintSuccess", false);
    }
  }, 
}
</script>
<style lang="scss" scoped> 
    .Mintpopup { 
      width: 315px; 
      background: #202024;
      box-sizing: border-box;
      border: 1px solid #49494D;
     .title {
        width: 100%;
        font-size: 20px;
        color: #fff;
        font-weight: 400;
        text-align: center;
        margin: 40px 0px 20px;
        .title1 {
          padding: 20px 0 30px;
        }
      }
      .MentList {
        display: flex;
        justify-content: flex-start;
        overflow: visible;
        height: 160px;
        padding: 0 10px;
        margin-bottom: 20px;
        .swiper-wrapper {
          width: 100%;
          overflow: visible;
        }

        .Mentlogo { 
          margin: 0 5px;
          padding: 0 0 8px; 
          box-sizing: border-box;
          cursor: pointer; 
          border: 1px solid transparent; 

          .tokenId {
            width: 100%;
            text-align: center;
            font-size: 12px;
            color: #fff;
            margin-top: 10px;
          }

          img {
            display: block;
            width: 108px; 
            margin: 0 auto;
          }
        }

        .MentlogoActive { 
          position: relative;
          border: 1px solid #09EFBD;  
          opacity: 1; 
          &::after {
            content: '';
            position:absolute;
            right: -10px;
            top: -10px;
            width:20px;
            height: 20px;
            background-image:url(@/assets/img/icon-gou.png);
            background-size: 100% 100%;
          }
        }
        .swiper-slide {
          width: 120px!important;
        }
      } 
      
      .Mintlogo {
        width: 100%;  
        margin-bottom: 20px;
        img {
          display: block;
          width: 200px;
          height: 192px;
          margin: 0 auto;
        } 
        .tokenId {
          width: 100%;
          text-align: center;
          font-size: 14px;
          color: #fff;
          margin-top: 10px;
        }
      }

      

      .browserview {
        display: block;
        width: 100%;
        text-align: center;
        font-size: 14px;
        color: #fff;
        margin-top: 20px;
        margin-bottom: 20px;
        font-weight: 400;
      }
      // .Mintlogo {
      //   width: 100%;
      //   padding-top: 20px;
      //   .tokenId{
      //     width: 100%;
      //     text-align: center;
      //     margin-top: 20px;
      //     font-size: 18px;
      //     color: #fff;
      //   }
      //   img {
      //     display: block;
      //     width: 215px;
      //     height: 206px;
      //     margin: 0 auto;
      //   }
      // }
      // .MintlogoOne {
      //   .tokenId{
      //     width: 100%;
      //     text-align: center;
      //     margin-top: 20px;
      //     font-size: 18px;
      //     color: #fff;
      //   }
      //   img {
      //     display: block;
      //     width: 215px;
      //     height: 206px;
      //     margin: 0 auto;
      //   }
      // }

    } 
 
</style>
