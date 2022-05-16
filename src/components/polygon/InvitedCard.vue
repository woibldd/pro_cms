<template>
  <van-popup v-model="visables" close-icon-position="top-right" :close-on-click-overlay="false" closeable  @click-close-icon="close">
    <div class="InvitedBox">
      <div class="content">
        <div class="title TTORegular">{{$t('polygon.inviteCount')}} <span class="TTOMedium">{{inviteNum}}</span></div>
        <div class="title TTORegular">{{$t('polygon.inviteTips2')}}<span class="TTOMedium ">{{luckRate}}%</span></div>
        <div class="Invitedlist TTORegular">
          <div class="item TTORegular" v-for="(item,index) in inviteAddress" :key="index">
            <div class="TTORegular Invitedlabel">
              {{$t('polygon.inviteAddress')}}
            </div>
            <div class="address TTORegular">
              {{item}}
            </div>
          </div>  
        </div>
      </div>
    </div>
  </van-popup>
</template>
<script>

  export default {
    name: "InvitedCard",
    props: {
      showInvitedlist: {
        type: Boolean,
        default: false
      },
      inviteAddress: {
        type: Array,
        default: () => []
      },
      inviteNum: {
        type: Number,
        default: 0
      },
      luckRate: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        visables: this.showInvitedlist,
      }
    },
    watch: {
      showInvitedlist(n) {
        this.visables = n;
      },
    },
    methods: {
      close() {
        this.$emit("closeInvitedCard", false);
      }
    }
  }

</script>
<style lang="scss" scoped>
  .InvitedBox {
    width: 315px;
    height: 557px;
    background: #202024;
    box-sizing: border-box;
    border: 1px solid #49494D;

    .content {
      padding: 20px;
      box-sizing: border-box;

      .title {
        font-size: 16px;
        font-weight: 400;
        color: #fff;

        span {
          font-size: 20px;
          color: #09EFBD;
        }
      }



      .Invitedlist {
        width: 100%;
        height: 454px;
        overflow: auto;
        border-top: 1px solid #49494D;

        .item {
          font-size: 14px;
          color: #fff;
          font-weight: 400;
          margin-top: 20px;

          .address {
            word-wrap: break-word;
            word-break: normal;
          }
        }
      }
    }
  }

</style>
