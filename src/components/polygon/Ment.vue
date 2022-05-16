<template>
  <van-popup v-model="visables" close-icon-position="top-right" closeable :close-on-click-overlay="false"
    @click-close-icon="close">
    <div class="Mentpopup"> 
      <div class="TTORegular title">
        <div class="title1" v-if="list.length > 1">
          {{$t('polygon.meltTitle1')}}
          ({{list.filter(item=>{return item.selected==true}).length}}/{{list.length}}) 
        </div>
        <div class="title2" v-else>
          {{$t('polygon.meltTitle2')}}
        </div>
      </div>
      <div class="MentList" v-if="list.length > 1">  
          <swiper @mousemove="e=>e" :options="swiperOption" class="swiper-wrapper"> 
            <swiper-slide 
              v-for="item in list" :key="item.tokenId">
              <div  class="Mentlogo" :class="item.selected==true?'MentlogoActive':''"  @click="selected(item)"> 
                  <img :src="item.picUrl" alt=""> 
                  <!-- <img src="@/assets/img/Py_bg.png" alt=""> -->
                  <div class="TTORegular tokenId">Token ID: #{{item.tokenId}}</div> 
                 
              </div>
            </swiper-slide>
          </swiper>  
      </div>
      <div v-else-if="list.length == 1" class="Mintlogo"> 
        <img :src="list[0].picUrl" alt=""> 
        <!-- <img src="@/assets/img/Py_bg.png" alt=""> -->
        <div class="TTORegular tokenId">Token ID: #{{list[0].tokenId}}</div> 
      </div>
      <div class="PaymentBox">
        <div class="PaymentInfo">
          <div class="title TTORegular">{{$t('polygon.meltValue')}}</div>
          <div class="PaymentContent"> 
            <span class="TTOMedium" v-if="list.length>1">{{ MATIC }} MATIC</span>
            <span class="TTOMedium" v-else>100 MATIC</span> 
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
        if (this.list.length == 1) {
          this.selected(this.list[0])
          this.$emit("closeMent", this.selectedList)
        } else if (tokens.length > 0) {
          console.log({tokens})
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
          opacity: .5;

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
      } 
      
      .Mintlogo {
        width: 100%;  
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
          }
        }

        .MentSubmit { 
          width: 198px;
          height: 44px;
          line-height: 44px;
          background: url('../../assets/img/btnBg6.png');
          background-size: 100% 100%;
          margin: 30px auto 40px;
          text-align: center;
          font-size: 20px;
          color: #fff;
          cursor: pointer;
        }
      }
    }

</style>
