<template>
  <div class="polygon_footer">
    <div class="container">
      <div class="footer-box-logo">
        <div class="footer-box-logo-img">
          <img src="https://cdn.bitkeep.vip/u_b_e018f290-b8dc-11ec-821f-dfed729e21e7.png" alt="">
        </div>
        <div class="footer-box-logo-msg">
          <p class="TTORegular">Converge the power of "Polygon Warriors"</p>
          <h3 class="TTORegular">May 1 - May 31 , 2022</h3>
        </div>
      </div>
      <div class="bottom">
        <div class="logo">
          <img src="@/assets/img/header/logo.png" alt="">
        </div>
        <ul>
          <li class="telebox">
            <a href="https://t.me/BitKeep_Official" target="_blank"><img src="@/assets/img/footer/telegram_logo.png"
                alt="Bitkeep 官方 Telegram 账号"></a>
          </li>
          <li><a href="https://twitter.com/BitKeepOS" target="_blank"><img src="@/assets/img/footer/twitter_logo.png"
                alt="Bitkeep的官方推特账号"></a></li>
          <li><a href="https://www.youtube.com/c/BitKeepWallet" target="_blank"><img
                src="@/assets/img/footer/youtube_logo.png" alt="Bitkeep的官方YouTube账号"></a></li>
          <li><a href="https://twitter.com/BitKeepOS" target="_blank"><img src="@/assets/img/footer/kaoka_logo.png"
                alt="Bitkeep的官方推特账号"></a></li>
          <li><a href="https://medium.com/@bitkeepblog" target="_blank"><img src="@/assets/img/footer/medium_logo.png"
                alt="Bitkeep 官方 Medium 账号"></a></li>

          <li><a href="https://github.com/bitkeepwallet/download" target="_blank"><img
                src="@/assets/img/footer/github_logo.png" alt="Bitkeep 官方 GitHub 账号"></a></li>
          <li><a href="https://discord.gg/qYTatUzNjM" target="_blank"><img src="@/assets/img/footer/discord_logo.png"
                alt="Bitkeep 官方 Discord 账号"></a></li>
          <li><a href="https://instagram.com/bitkeep_global?igshid=YmMyMTA2M2Y=" target="_blank"><img
                src="@/assets/img/footer/flat_logo.png" alt="Bitkeep's official instagram account"></a></li>

          <li><a href="https://www.facebook.com/BitKeep" target="_blank"><img
                src="@/assets/img/footer/facebook_logo.png" alt="Bitkeep's official facebook account"></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss">
  @media screen and (min-width: 960px) {
  .polygon_footer {
    width: 100%;
    height: 430px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 196px;
    box-sizing: border-box;
    background: #17171A;
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .footer-box-logo {
        width: 100%;
        display: flex;

        .footer-box-logo-img {
          width: 364px;
          img{
            width: 100%;
          }
        }

        .footer-box-logo-msg {
          margin-left: 24px;
          flex: 1;
          -webkit-box-flex: 1;
          -ms-flex: 1;
          border-bottom: 1px solid #707076;
          text-align: right;
          p{
            color: #fff;
            font-size: 20px;
          }
          h3{
            color: #09efbd;
            font-size: 24px;
          }
        }
      }

      .bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 121px;
        .logo {
          img {
            display: inline-block;
            width: 164px;
            height: 47px;
          }
        }

        ul {
          display: flex;

          li {
            width: 24px;
            height: 24px;
            margin-right: 28px;

            a {
              display: block;
              width: 100%;
              height: 100%;

              img {
                width: 100%;
                height: 100%;
              }
            }
          }

          li:last-child {
            margin-right: 0px;
          }
        }

      }

    }

  }
  }
  @media screen and (max-width: 959px) {
  .polygon_footer {
    display: none;
  }
  }
</style>
