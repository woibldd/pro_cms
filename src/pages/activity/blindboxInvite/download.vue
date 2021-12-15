<template>
  <div id="download">
    <Header>
      <div class="blindbox_header">
        <span class="logo">
          <img src="@/assets/activity/blindbox/logo@2.png"
        /></span>
      </div>
    </Header>
    <div class="block_body">
      <img
        :class="{ [locale]: true }"
        src="http://cdn.bitkeep.vip/u_b_95224b10-596e-11ec-bdbc-7722494dfa58.png"
      />
      <div class="textBox textPrimary0">
        <p>{{ $t("blindboxInvite.downText") }}</p>
      </div>
      <a class="btn" @click="back">{{
        $t("blindboxInvite.know")
      }}</a>
    </div>
  </div>
</template>
<script>
import { Header } from "@/components/common";
import { mapState } from "vuex";
export default {
  name: "Download",
  components: {
    Header,
  },
  computed: {
    ...mapState(["local"]),
    isBitKeep() {
      return this.local.UA.isBitKeep;
    },
    locale() {
      return this.local.locale;
    },
  },
  mounted() {
    
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>
<style lang="scss">
#download {
  font-family: PingFang SC;
  font-style: normal;
  min-height: 100vh;
  background: #ffffff;
  .blindbox_header {
    width: 100vw;

    display: flex;
    justify-content: center;
    padding: 15px;
    box-sizing: border-box;
    align-items: center;
    .logo {
      width: 90px;
      height: 24px;
      display: flex;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .header_back {
      position: absolute;
      left: 15px;
      & > div {
        display: flex;
        justify-items: center;
        img {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
  .block_body {
    padding-top: 96px;
    text-align: center;
    .textBox {
      width: 100%;
      p {
        margin: 0 auto;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        width: 246px;
      }
    }

    img {
      width: 150px;
      height: 150px;
    }
  }
  .btn {
    margin: 190px auto 0;
    background: #495BFF;
    border-radius: 100px;
    width: 225px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    font-size: 18px;
    line-height: 18px;

    color: #ffffff;
    &:active {
      opacity: 0.8;
    }
  }
}
</style>
