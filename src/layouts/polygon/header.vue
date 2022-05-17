<template>
  <div class="polygon_header">
    <div class="container">
      <div class="logo">
        <img src="@/assets/img/header/logo.png" alt="">
      </div>
      <div class="header_right">
        <img src="@/assets/img/header/right_log.png" alt="" class="right_log">
        <div class="connect">
          <span @click="connect" class="TTORegular" v-if="!address">连接钱包</span>
          <span class="TTORegular" v-else>{{address|blurredDisplay}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import '@/filter/filter'
  import { loadView } from "@/tools/common.js"  
  import {
    wallet } from "@/utils/wallet";
  export default {
    data() {
      return {
        address: "",
      };
    },
    async mounted() { 
      // await this.$nextTick();
      await loadView()
      this.connect()
    },
    methods: {
      async connect() {
        if (wallet.isConnected()) {
          const address = await wallet.selectedAddress()
          this.address = address
        } else {
          this.address = await wallet.connect();
        }
      }
    }
  }

</script>
<style lang="scss">
  @media screen and (min-width: 960px) {
    .polygon_header {
      width: 100%;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0px 196px;
      box-sizing: border-box;

      .container {
        width: 100%;
        height: 100%;
        align-items: center;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #49494D;

        .logo {
          img {
            display: inline-block;
            width: 137px;
            height: 40px;
          }
        }

        .header_right {
          display: flex;

          .right_log {
            width: 222px;
            height: 50px;
          }

          .connect {
            width: 186px;
            height: 50px;
            cursor: pointer;
            margin-left: 88px;
            background-image: url("@/assets/img/btnBg1.png");
            background-size: cover;
            overflow: hidden;

            span {
              display: flex;
              width: 100%;
              height: 100%;
              justify-content: center;
              align-items: center;
              font-size: 20px;
              font-weight: 400;
              color: #fff;
            }
          }
        }
      }

    }
  }

  @media screen and (max-width: 960px) {
    .polygon_header {
      width: 100%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0px 20px;
      box-sizing: border-box;

      .container {
        width: 100%;
        height: 100%;
        display: flex;
        box-sizing: border-box;
        align-items: flex-end;
        justify-content: space-between;
        border-bottom: 1px solid #49494D;
        padding-bottom: 10px;

        .logo {
          img {
            display: inline-block;
            width: 83px;
            height: 24px;
          }
        }

        .header_right {
          display: flex;

          .right_log {
            width: 107px;
            height: 24px;
          }

          .connect {
            display: none;
          }
        }
      }
    }
  }

</style>
