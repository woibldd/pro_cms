<template>
  <van-popup v-model="visables" close-icon-position="top-right" closeable :close-on-click-overlay="false"
    @click-close-icon="close">
    <div class="Mentpopup">
      
      <div class="TTORegular title">
        <span v-if="list.length > 1">
          {{$t('polygon.meltTitle1')}}
          ({{list.filter(item=>{return item.selected==true}).length}}/{{list.length}}) 
        </span>
        <span v-else>
          {{$t('polygon.meltTitle2')}}
        </span>
      </div>
      <div class="MentList">
        <!-- <div class="Mentlogo" :class="item.selected==true?'MentlogoActive':''" v-for="item in list" :key="item.tokenId"
          @click="selected(item)">
          <img src="@/assets/img/Py_bg.png" alt="">
          <div class="TTORegular tokenId">Token ID: #{{item.tokenId}}</div>
        </div> -->
        <!-- <van-swipe :loop="true" :width="115"> 
          <van-swipe-item class="Mentlogo" :class="item.selected==true?'MentlogoActive':''" v-for="item in list" :key="item.tokenId"
            @click="selected(item)">
            <img src="@/assets/img/Py_bg.png" alt="">
            <div class="TTORegular tokenId">Token ID: #{{item.tokenId}}</div>
          </van-swipe-item>
        </van-swipe>
         -->
        <swiper @mousemove="e=>e" :options="swiperOption" class="swiper-wrapper"> 
          <swiper-slide 
            v-for="item in list" :key="item.tokenId">
            <div  class="Mentlogo" :class="item.selected==true?'MentlogoActive':''"  @click="selected(item)">
              <img src="@/assets/img/Py_bg.png" alt="">
              <div class="TTORegular tokenId">Token ID: #{{item.tokenId}}</div> 
            </div>
          </swiper-slide>
        </swiper> 
      </div>
      <div class="PaymentBox">
        <div class="PaymentInfo">
          <div class="title TTORegular">{{$t('polygon.meltValue')}}</div>
          <div class="PaymentContent">
            <span class="TTOMedium">{{MATIC}} MATIC</span>
            <span class="TTOMedium"></span>
          </div>
          <div class="PaymentValue">
          </div>
        </div>
        <div class="MentSubmit TTOMedium" @click="MentToken(selectedList)">Melt</div>
      </div>
    </div>
  </van-popup>
</template>
<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'   
  export default {
    name: "Ment",
    components: { 
      Swiper, 
      SwiperSlide,
    },
    props: {
      showMent: {
        type: Boolean,
        default: false
      },
      MentList: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        visables: this.showMent,
        list: this.MentList.map(item => {
          item.selected = false;
          return item
        }),
        selectedList: [],
        swiperOption: {
          initialSlide: 0,
          slidesPerView : 2.4,  
          direction: 'horizontal',  
          loop: false,  
        }
      }
    },
    watch: {
      showMent(n) {
        this.visables = n;
      },
    },
    methods: {
      selected(tokenId) {
        this.list = this.list.map(item => {
          if (item.tokenId == tokenId.tokenId) {
            item.selected = !item.selected;
          }
          return item
        })
        this.selectedList = this.list.filter(item => {
          return item.selected == true
        }).map(item => {
          return item.tokenId
        })
      },
      close() {
        this.$emit("closeMent", false);
      },
      MentToken(tokens) {
        if (tokens.length > 0) {
          this.$emit("closeMent", tokens)
        } else {
          this.$toast.fail(this.$t('polygon.mentAlert'));
        }
      }
    },
    computed: {
      MATIC() {
        return this.selectedList.length * 100;
      }
    }
  }

</script>
<style lang="scss" scoped>
 
  .Mentpopup {
      width: 315px;
      height: 557px;
      background: #202024;
      box-sizing: border-box;
      border: 1px solid #49494D;
      .title {
        width: 100%;
        font-size: 20px;
        color: #fff;
        font-weight: 400;
        text-align: center;
        margin: 40px 0px;
      }
      
      .MentList {
        display: flex;
        justify-content: flex-start;
        overflow: auto;
        height: 200px;
        padding: 0 10px;
        .swiper-wrapper {
          width: 100%;
        }

        .Mentlogo { 
          margin: 0 5px;
          padding: 10px 5px 8px; 
          box-sizing: border-box;
          cursor: pointer;
          // &:not(:first-child) {
          //   margin-left: 10px;
          // }

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
            border: 1px solid transparent;
          }
        }

        .MentlogoActive { 
          position: relative;
          img {
            border: 1px solid #09EFBD;
          }
          &::after {
            content: '';
            position:absolute;
            right: -10px;
            top: 0;
            width:20px;
            height: 20px;
            background-image:url(@/assets/img/icon-gou.png);
            background-size: 100% 100%;
          }
        }
      } 
      .PaymentBox {
        width: 100%;

        .title {
          width: 100%;
          text-align: center;
          font-size: 14px;
          color: #fff;
          margin-top: 20px;
          margin-bottom: 10px;
          font-weight: 400;
        }


        .PaymentInfo {
          width: 100%;
          margin: 20px 0px;
          box-sizing: border-box;

          .title {
            width: 100%;
            font-size: 14px;
            color: #fff;
            font-weight: 400;
            text-align: center;
          }

          .PaymentContent {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .TTOMedium:first-child {
              font-size: 24px;
              color: #09EFBD;
              font-weight: 400;
            }

            .TTOMedium:last-child {
              font-size: 14px;
              color: #fff;
              font-weight: 400;
            }
          }
        }

        .MentSubmit {
          width: 198px;
          height: 44px;
          line-height: 44px;
          background: url(@/assets/img/btnBg6.png);
          background-size: 100% 100%;
          margin: 0 auto;
          text-align: center;
          font-size: 20px;
          color: #fff;
          cursor: pointer;
        }
      }
    }

</style>
