<template>
  <div class="polygon-contet">
    <div class="polygon-top1">
      <div class="polygon-top-left">
        <h1 class="one TTODbold">BitKeep
        </h1>
        <h1 class="two TTOMedium">Genesis NFT Sale</h1>
      </div>
      <div class="polygon-top-right">
        <img src="../../assets/img/Py_bg1.png" alt="">
      </div>
    </div>
    <div class="polygon-top2">
      <div class="polygon-m-InvitationBox">
        <div class="InvitationCodeBtn" v-if="address&&!defaultData.isInvite" @click="InvitationCode">填写邀请码</div>
      </div>
      <div class="polygon-top-left">
        <img class="bg0" src="../../assets/img/Py_bg.png" alt="">
        <img class="bg8" src="../../assets/img/Py_bg8.png" alt="">
      </div> 
      <div class="polygon-top-middle">
        <img src="../../assets/img/Py_bg7.png" alt="">
        <div class="g-line"></div>
      </div>
      <div class="polygon-top-right">
        <p class="RemainingtimeText TTORegular" v-if="defaultData.fromStartTime>0">距离开始还剩</p>
        <div class="Countdown" v-if="defaultData.fromStartTime>0">
          <Countdown :startTime="startTime" :endTime="endTime" :format="format" />
        </div>
        <div class="Minted">
          <div class="item">
            <p class="TTORegular title">Total Minted</p>
            <p class="TTOMedium content">{{defaultData.totalMinted}}/{{defaultData.allNftNum}}</p>
          </div>
          <div class="item">
            <p class="TTORegular title">Price</p>
            <p class="TTOMedium content">
              100
              <span>MATIC</span>
            </p>
          </div>
        </div>
        <div class="MintBtn" v-if="defaultData.isMint||defaultData.isMelt">
          <div class="item">
            <div class="MINT TTOMedium" @click="showMint=true">MINT</div>
          </div>
          <div class="item" v-if="!defaultData.isMelt">
            <div class="MELT TTOMedium">MELT 
            </div> 
          </div>
          <div class="item" v-else>
            <div class="MELTActive TTOMedium" @click="ableMent(MentList)">
              MELT
            </div> 
          </div>
        </div>
        <div class="tipstext-wrap Background0">
          <div v-if="!defaultData.isMelt" class="TTORegular tipstext">7月17日后，可在官网以原价进行反向铸造</div>
          <div v-else class="TTORegular tipstext">现在可在官网以原价进行反向铸造</div>
        </div>
        <img src="@/assets/img/Py_bg2.png" class="Py_bg2" alt="">
      </div>
    </div> 
    <div class="polygonContentBox">
      <div class="RightsAndInterests">
        <div class="contentTitle">
          <h1 class="TTORegular">权益<div class="line"></div>
          </h1>
        </div>
        <div class="RightsAndInterestsContent">
          <div class="invitationBox" >
            <img src="../../assets/img/polygon_h5/InvitationCodeBg.png" alt="" class="m-InvitationCodeBg">
            <div class="TTODbold card1 Background0">邀请好友 领取空投</div>
            <!-- <img src="@/assets/img/Py_bg3.png" alt="">
            <div class="TTORegular card2 Background0"  v-if="address&&!defaultData.isInvite" @click="InvitationCode">填写邀请码</div> -->
          </div>
          <div class="infoBox">
            <div class="itembox1 TTORegular">
              <p class="TTORegular">
                 1.Mint 开启后 30 天内，每日随机挑选 100 位持有者，每位持有者空投 随机 枚 BKB 到云钱包
              </p>
              <p class="TTORegular">2.必须创建云钱包后才能领取空投</p>
              <p class="TTORegular">3.邀请人数越多，领取空投概率越大:</p>
              <p class="TTORegular" style="margin-bottom:0px">
                邀请人数 0 —— 0% 幸运加成 <br>
                邀请人数 1 —— 20% 幸运加成 <br>
                邀请人数 2 —— 50% 幸运加成<br>
                邀请人数 3 及以上 —— 100% 幸运加成<br>
                注：幸运值越高，获得空投几率越大
              </p>
              <div class="InvitationCodeBox" v-if="defaultData.inviteCode!=0">
                <div class="InvitationCode Background0">
                  <span class="TTORegular text">我的邀请码</span>
                  <span class="TTODbold code">{{defaultData.inviteCode}}</span>
                  <span class="line"></span>
                  <span class="TTODbold copy" v-copy="defaultData.inviteCode">COPY</span>
                </div>
              </div>
            </div>
            <div class="itembox2 Background0">
              <div class="addressTitle">
                <p class="TTORegular text1">
                  <label>当前邀请成功人数 </label> 
                  <span class="TTOMedium">{{defaultData.inviteNum}}</span>
                  <span v-if="defaultData.inviteNum!=0" class="viewInvitee TTORegular"
                    @click="showInvitedlist=true">查看被邀请人</span>
                </p>
                <p class="TTORegular text2">填入你的邀请码后 MINT 成功的用户算作邀请成功</p>
              </div>
              <div class="addresslistBox">
                <div class="noData TTOMedium" v-if="defaultData.inviteNum==0">0</div>
                <div class="addresslist" v-else>
                  <div class="addressItem TTORegular" v-for="item in defaultData.inviteAddress" :key="item">
                    <span class="TTORegular">被邀请地址</span>
                    <p class="TTORegular">
                      {{item}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="itembox3 TTORegular Background0">
              <h2 class="TTORegular">白名单特权</h2>
              <div class="TTORegular">
                1、白名单用户在5月15日开启Mint <br>
                2、非白名单用户在5月16日开启Mint<br>
                3、白名单用户购买上限为10个<br>
                4、非白名单用户购买上限为5个</div>
              <h2 class="TTORegular">怎样成为白名单 ？</h2>
              <div class="TTORegular">
                1、使用Swap进行交易过的用户<br>
                2、通过NFT交易市场交易过的用户<br>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ShortaddressContent">
        <!-- 接口暂时没加 -->
        <div class="contentTitle">
          <h1 class="TTORegular">空投获奖地址<div class="line">
              <span class="TTORegular">05-16-2022</span>
            </div>
          </h1>
        </div>
        <div class="Shortaddresslist">
          <div class="ShortaddressTitle TTORegular">
            以下每个地址均获得
            <span class="TTOMedium">100 BKB</span>
          </div>
          <div class="TTORegular m-ShortaddressTitle">共<span>{{LotteryList.length}}</span>个地址</div>
          <div class="list Background0"> 
            <div v-for="(item, index) in LotteryList" :key="index" v-show="index < 9" class="item TTORegular"> 
              {{item}} 
            </div> 
          </div>
          <div class="TTORegular m-viewAll" @click="showAirdropAddress=true">查看全部</div>
        </div>
      </div>
      <div class="whiteIpcard">
        <div class="text Background0">
          <span v-if="defaultData.isWhite">您是白名单特权用户</span>
          <span v-else>您暂时不是白名单用户</span>
          <img src="@/assets/img/polygon_h5/question.png" alt="" @click="showWhitelist=true"></div>
        <img src="@/assets/img/polygon_h5/Py_bottom.png" alt="">
      </div>
      <div class="LoadMapcontent">
        <div class="contentTitle">
          <h1 class="TTORegular">Load Map<div class="line"></div>
          </h1>
        </div>
        <div class="logoListBox">
          <div class="logoBg">
            <img src="@/assets/img/Load-left.png" alt="">
            <img src="@/assets/img/Load-right.png" alt="">
          </div>
          <div class="logoListContent">
            <div class="Item">
              <div class="TTOMedium logo active">
                公开发售
              </div>
              <span class="TTOMedium">05-15-2022</span>
            </div>
            <div class="Item">
              <div class="TTOMedium logo">
                公开发售
              </div>
              <span class="TTOMedium">05-15-2022</span>
            </div>
            <div class="Item">
              <div class="TTOMedium logo">
                第一轮福利 <br>
                BKB
              </div>
              <span class="TTOMedium">07-16-2022</span>
            </div>
            <div class="Item">
              <div class="TTOMedium logo">
                开启反向铸造
              </div>
              <span class="TTOMedium ">Q2-2022</span>
            </div>
            <div class="Item">
              <div class="TTOMedium logo">
                第二轮福利
              </div>
              <span class="TTOMedium">Q3-2022</span>
            </div>
            <div class="Item">
              <div class="TTOMedium logo">
                开启成就 2.0
              </div>
              <span class="TTOMedium">Q4-2022</span>
            </div>
            <div class="Item">
              <div class="TTOMedium logo">
                更多福利 <br>
                敬请期待
              </div>
              <span class="TTOMedium">2023</span>
            </div>

          </div>
          <div style="clear-both"></div>
        </div>
        <div style="clear-both"></div>
      </div>
      <div class="Tipscontent Background0 TTORegular">
        <p class="TTORegular">注意事项</p>
        <p class="TTORegular">1. 注册 BitKeep 并通过 Wallet Connect 连接该网站。</p>
        <p class="TTORegular">2. 确保你的钱包里有足够的 MATIC 来支付包括汽油费在内的总成本。</p>
        <p class="TTORegular">3. 单击铸币按钮，系统将提示您签署交易，并产生汽油费用。</p>
        <p class="TTORegular">4. 购买后，您的 NFT 将出现在您的钱包中，且可以通过 BitKeep Market 和 Opensea 进行交易！</p>
      </div>
      <van-popup v-model="show" close-icon-position="top-right" closeable>
        <div class="PopupBox">
          <div class="InvitationPopup">
            <div class="title TTORegular">
              <span class="TTORegular">输入邀请码</span>
            </div>
            <div class="Background0 invitationInput">
              <van-field v-model="invitationCode" maxlength="6" class="Background0 TTOMedium"></van-field>
              <div class="clearBox" v-show="invitationCode" @click="invitationCode=''">
                <van-icon name="clear" size="16" />
              </div>
              <div class="pastetext" v-show="!invitationCode" @click="paste">粘贴
              </div>
            </div>
            <div class="content">
              <p class="TTORegular">当前钱包地址</p>
              <p class="TTORegular">
                {{address}}
              </p>
            </div>
            <div class="invitationCodeSubmit TTOMedium" @click="invitationCodeSubmit">
              确认
            </div>
          </div>
        </div>
      </van-popup>
      <Mint :showMint="showMint" :isWhite="defaultData.isWhite" @closeMint="closeMint"></Mint>
      <Ment :showMent="showMent" v-if="showMent" :MentList="MentList" @closeMent="closeMent"></Ment>
      <AirdropAddressCard :showAirdropAddress="showAirdropAddress" :LotteryList="LotteryList" @closeAirdropAddressCard="closeAirdropAddressCard">
      </AirdropAddressCard>
      <AirdropAwardCard :showAirdropAward="showAirdropAward" :currentAddress="address" :luckNum="defaultData.luckNum" @closeAirdropAwardCard="closeAirdropAwardCard">
      </AirdropAwardCard>
       <InvitedCard :showInvitedlist="showInvitedlist" :currentAddress="address" :inviteNum="defaultData.inviteNum" :luckRate="defaultData.luckRate"  @closeInvitedCard="closeInvitedCard"></InvitedCard>
      <Whitelistcard :showWhitelist="showWhitelist" @closeWhitelistcard="closeWhitelistcard"></Whitelistcard>
      <MintSuccessCard :showMintSuccess="showMintSuccess" :MintData="MintData" @closeMintSuccess="closeMintSuccess">
      </MintSuccessCard>
      <van-overlay :show="isLoading" z-index="999">
        <div class="loading">
          <van-loading color="#7524f9" vertical>loading...</van-loading>
        </div>
      </van-overlay>
    </div>
  </div>
</template>
<script>
  // import cndMixins from "@/mixin/cnd.js";
  import Countdown from "@/components/common/c-vue-countdown";
  import Mint from "@/components/polygon/Mint";
  import Ment from "@/components/polygon/Ment";
  import AirdropAddressCard from "@/components/polygon/AirdropAddressCard";
  import AirdropAwardCard from "@/components/polygon/AirdropAwardCard";
  import InvitedCard from '@/components/polygon/InvitedCard'
  import Whitelistcard from '@/components/polygon/Whitelistcard'
  import MintSuccessCard from '@/components/polygon/MintSuccessCard'
  import {
    wallet
  } from "@/utils/wallet";
  // MintToken
  import {
    USER_API
  } from "@/api/client";
  import "@/utils/copy"
  export default {
    name: "polygon",
    // mixins: [cndMixins],
    data() {
      return {
        isLoading: true,
        defaultData: {},
        startTime: new Date().getTime(),
        endTime: 0,
        format: "{dd}天{hh}小时{mm}分钟{ss}秒",
        show: false,
        showMint: false,
        showMent: false,
        invitationCode: "",
        showAirdropAddress: false,
        showAirdropAward: false,
        showInvitedlist: false,
        showWhitelist: false,
        showMintSuccess: false,
        chainName: "ht",
        ChainId: "128",
        address: "",
        token: "",
        LotteryList: [],
        MintData: [],
        MentList: [],
      };
    },
    components: {
      Countdown,
      Mint,
      AirdropAddressCard,
      AirdropAwardCard,
      InvitedCard,
      Whitelistcard,
      MintSuccessCard,
      Ment
    },
    async mounted() {
      await this.$nextTick();
      await this.connect()
      await this.nftMintLotteryList()
      this.nftMintGetInfo(this.address, 'ht')
      this.$bus.$on('accountsChanged', async (val) => {
        this.connect()
      });
      this.isLoading = false;
    },
    methods: {
      async connect() {
        try {
          const address = await wallet.connect();
          console.log({address})
          this.address =address;
          await this.nftMintGetInfo(this.address, 'ht')
          await this.nftMintnftList()
        } catch (e) {
          console.log(e)
        }
      },
      async nftMintGetInfo(address, chain) {
        const {
          data,
          status
        } = await USER_API.nftMintGetInfo({
          address,
          chain
        });
        if (status == 0) {
          this.defaultData = data;
          this.endTime = data.fromStartTime > 0 ? new Date().getTime() + data.fromStartTime : 0
        }
      },
      async nftMintLotteryList() {
        const {
          data,
          status
        } = await USER_API.nftMintLotteryList();
        if (status == 1) {
          return this.$dialog.alert({
            message: data,
            confirmButtonText: "知道了",
            confirmButtonColor: '#7524f9'
          });
        }
        this.LotteryList = data.list;
      },
      async nftMintnftList() {
        const {
          data,
          status
        } = await USER_API.nftMintnftList({
          address: this.address,
          chain: this.chainName
        })
        if (status == 1) {
          return this.$dialog.alert({
            message: data,
            confirmButtonText: "知道了",
            confirmButtonColor: '#7524f9'
          });
        }
        this.MentList = data.list
      },
      async InvitationCode() {
        const [address] = await wallet.getAccounts()
        this.address = address
        this.show = true;
      },
      async paste() {
        if (navigator.clipboard) {
          const clipText = await navigator.clipboard.readText();
          if (clipText.replace(/\s/g, "")) {
            this.invitationCode = clipText.replace(/\s/g, "");
          } else {
            this.$toast("没有内容可以粘贴");
          }
        } else {
          this.$toast({
            message: '您的浏览器不支持粘贴功能',
            duration: 2000
          });
        }
      },
      async getToken(address) {
        const {
          data,
          status
        } = await USER_API.nftMintGetToken({
          address
        })
        if (status == 1) {
          return this.$dialog.alert({
            message: data,
            confirmButtonText: "知道了",
            confirmButtonColor: '#7524f9'
          });
        }
        this.token = data.token
      },
      async invitationCodeSubmit() {
        if (!this.invitationCode) {
          this.$toast("邀请码不能为空");
          return;
        }
        try {
          await this.getToken(this.address)
          const sign = await wallet.paritySign(this.token, this.address)
          console.log(sign)
          const {
            data,
            status
          } = await USER_API.nftMintInvite({
            address: this.address,
            chain: 'ht',
            code: this.invitationCode,
            c_token: this.token,
            verifyToken: sign
          })
          if (status == 1) {
            return this.$dialog.alert({
              message: data,
              confirmButtonText: "知道了",
              confirmButtonColor: '#7524f9'
            });
          }
          this.$toast("被邀请成功");
          this.show = false;
        } catch (error) {
          console.log(error)
          this.$toast('你取消了签名');
        }
      },
      async closeMint(MintNum) {
        this.showMint = false;
        if (MintNum) {
          const ChainId = await wallet.getChainId()
          if (Number(ChainId) != this.ChainId) {
            this.$dialog.alert({
              message: "请切换到Heco主网",
              confirmButtonText: "知道了,去切换",
              confirmButtonColor: '#7524f9'
            }).then(() => {
              try {
                window.ethereum.request({
                  method: "wallet_switchEthereumChain",
                  params: [{
                    chainId: wallet.transfer16(this.ChainId)
                  }]
                })
              } catch {
                ethereum.request({
                  method: "wallet_addEthereumChain",
                  params: [{
                    chainId: wallet.transfer16(this.ChainId),
                    chainName: "HECO",
                    rpcUrls: ["https://hecoinfo.com/"],
                    nativeCurrency: {
                      name: "HECO",
                      symbol: "HECO",
                      decimals: 18,
                    },
                  }, ],
                });
              }
            })
            return
          }
          this.isLoading = true
          const TXdata = await USER_API.buildNftMintTxs({
            address: this.address,
            chain: 'ht',
            num: MintNum
          });
          const tx = {
            gas: TXdata.data.tx.fee.gasLimitMax || TXdata.data.tx.fee.gasLimit,
            gasPrice: TXdata.data.tx.fee.gasPrice,
            nonce: String(TXdata.data.tx.nonce), // ignored by MetaMask
            to: TXdata.data.tx.to, // Required except during contract publications.
            from: TXdata.data.tx.from, // must match user's active address.
            value: TXdata.data.tx
              .value, // Only required to send ether to the recipient from the initiating external account.
            data: TXdata.data.tx.data,
            chainId: TXdata.data.tx.chainId, // required for EIP-155 chainIds
          }
          try {
            const send = await wallet.setMintToken(tx)
            var MintTimer = setInterval(async () => {
              const {
                data,
                status
              } = await USER_API.nftMintcheckTransaction({
                chain: 'ht',
                hash: send
              })
              if (status == 1) {
                this.isLoading = false
                return this.$dialog.alert({
                  message: data,
                  confirmButtonText: "知道了",
                  confirmButtonColor: '#7524f9'
                });
              }
              if (data.status == 1) {
                console.log("MintTimer", MintTimer)
                clearInterval(MintTimer)
                clearTimeout(MintTimer2)
                this.isLoading = false;
                this.$toast("Mint成功");
                this.MintData = data.list;
                this.connect()
                this.showMintSuccess = true;
              }
            }, 3000)
            var MintTimer2 = setTimeout(() => {
              this.isLoading = false
              this.connect()
              clearInterval(MintTimer)
              this.$dialog.alert({
                message: 'Mint失败',
                confirmButtonText: "知道了",
              })
            }, 1000 * 60);
          } catch (e) {
            this.isLoading = false
            console.log(e);
          }
        }
      },
      async ableMent(Mentlist) {
        if (Mentlist.length == 0) {
          return this.$dialog.alert({
            message: '暂时没有可以Ment的NFT',
          })
        }
        this.showMent = true;
      },
      async closeMent(Mentids) {
        this.showMent = false;
        if (Mentids) {
          const ChainId = await wallet.getChainId()
          if (Number(ChainId) != this.ChainId) {
            this.$dialog.alert({
              message: "请切换到Heco主网",
              confirmButtonText: "知道了,去切换",
              confirmButtonColor: '#7524f9'
            }).then(() => {
              try {
                window.ethereum.request({
                  method: "wallet_switchEthereumChain",
                  params: [{
                    chainId: wallet.transfer16(this.ChainId)
                  }]
                })
              } catch {
                ethereum.request({
                  method: "wallet_addEthereumChain",
                  params: [{
                    chainId: wallet.transfer16(this.ChainId),
                    chainName: "HECO",
                    rpcUrls: ["https://hecoinfo.com/"],
                    nativeCurrency: {
                      name: "HECO",
                      symbol: "HECO",
                      decimals: 18,
                    },
                  }, ],
                });
              }
            })
            return
          }
          this.isLoading = true
          const TXdata = await USER_API.nftMintbuildNftMeltTxs({
            address: this.address,
            chain: 'ht',
            nftIds: Mentids.join(',')
          });
          const tx = {
            gas: TXdata.data.tx.fee.gasLimitMax || TXdata.data.tx.fee.gasLimit,
            gasPrice: TXdata.data.tx.fee.gasPrice,
            nonce: String(TXdata.data.tx.nonce), // ignored by MetaMask
            to: TXdata.data.tx.to, // Required except during contract publications.
            from: TXdata.data.tx.from, // must match user's active address.
            value: TXdata.data.tx
              .value, // Only required to send ether to the recipient from the initiating external account.
            data: TXdata.data.tx.data,
            chainId: TXdata.data.tx.chainId, // required for EIP-155 chainIds
          }
          try {
            const send = await wallet.setMintToken(tx)
            var MentTimer = setTimeout(async () => {
              const {
                data,
                status
              } = await USER_API.nftMintcheckTransaction({
                chain: 'ht',
                hash: send
              })
              if (status == 1) {
                this.isLoading = false
                return this.$dialog.alert({
                  message: data,
                  confirmButtonText: "知道了",
                  confirmButtonColor: '#7524f9'
                });
              }
              if (data.status == 1) {
                console.log("MentTimer", MentTimer)
                clearInterval(MentTimer)
                clearTimeout(MentTimer2)
                this.isLoading = false;
                this.$toast("Ment成功")
                this.connect()
              }
            }, 3000)
            var MentTimer2 = setTimeout(() => {
              this.isLoading = false
              this.connect()
              MentTimer && clearInterval(MentTimer)
              this.$dialog.alert({
                message: 'Ment失败',
                confirmButtonText: "知道了",
              })
            }, 1000 * 60);
          } catch (e) {
            this.isLoading = false
            console.log(e);
          }
        }
      },
      closeAirdropAddressCard() {
        this.showAirdropAddress = false;
      },
      closeAirdropAwardCard() {
        this.showAirdropAward = false;
      },
      closeInvitedCard() {
        this.showInvitedlist = false;
      },
      closeWhitelistcard() {
        this.showWhitelist = false;
      },
      closeMintSuccess() {
        this.showMintSuccess = false;
        this.isLoading = false;
      }
    }
  }
</script>
<style lang="scss">
  @import "@/assets/css/theme.scss";

  @font-face {
    font-family: "TTORegular";
    src: url("../../assets/fonts/polygon/ttoctosquares-regular.otf");
  }
 
  // @media screen and (max-width: 959px) {
    .polygon-top1 {
      display: none;
    }

    .polygon-top2 {
      .polygon-m-InvitationBox {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;

        .InvitationCodeBtn {
          width: 90px;
          height: 28px;
          line-height: 28px;
          font-size: 14px;
          font-weight: 400;
          text-align: center;
          background: url("@/assets/img/polygon_h5/InvitationCodeBtn.png");
          background-size: 100% 100%;
          color: #fff;
          cursor: pointer;
        }
      }

      .polygon-top-left {
        position: relative;
        width: 245px;
        height: 235px;
        margin: 0 auto; 
        img {
          width: 100%;
          height: 100%;
        }
        .bg0 {
          position:relative;
          z-index: 2;
        }
        .bg8 {
          position:absolute;
          left: -64px;
          top: 104px;
          width: 376px;
          height: 40px;
          z-index: 1;
        }
      }
      .polygon-top-middle {
        position: relative;
        width: 375px;
        height: 70px;
        margin: 35px auto 58px;
        text-align: center;
        .g-line {
          position: absolute;
          right: 0;
          top: 15px;
          height: 1px;
          width: 200px;
          background-color: #09EFBD;
        }
        img {
          width: 335px;
          height: 100%;
        }
      }

      .polygon-top-right {
        .RemainingtimeText {
          font-weight: 400;
          font-size: 14px;
          color: #fff;
          margin: 10px 0px;
          text-align: center;
        }

        .Minted {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 20px;
          margin: 50px 0px;

          .item {
            .title {
              font-size: 14px;
              color: #fff;
              font-weight: 400;
            }

            .content {
              font-size: 24px;
              font-weight: 400;
              color: #09EFBD;

              span {
                font-size: 14px;
              }
            }

          }
        }

        .MintBtn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 20px;
          margin: 50px 0px;

          .item {
            width: 163px;
            height: 50px;
            color: #fff;

            .MINT {
              height: 100%;
              background: url("@/assets/img/bthBg3.png");
              background-size: 100% 100%;
              font-size: 24px;
              font-weight: 400;
              text-align: center;
              line-height: 50px;
              cursor: pointer;
            }

            .MELT {
              height: 100%;
              background: url("@/assets/img/bthBg2.png");
              background-size: 100% 100%;
              font-size: 24px;
              font-weight: 400;
              text-align: center;
              color: #707076;
              line-height: 50px;
              cursor: not-allowed;
            }

            .MELTActive {
              height: 100%;
              background: url("@/assets/img/btnBg4.png");
              background-size: 100% 100%;
              font-size: 24px;
              font-weight: 400;
              text-align: center;
              line-height: 50px;
              cursor: pointer;
            }
 
          }
        }

        .tipstext-wrap {
          padding: 12px 20px; 
          width: 355px;
          box-sizing: border-box; 
          border: 1px solid #49494D;
          border-left: none;
          .tipstext {
            color: #ffffff;
            font-size: 18px;
            line-height: 23.4px;
          }
        }

        .Py_bg2 {
          display: none;
        }
      }
    }
 
    .polygonContentBox {
      margin-top: 60px;
      .RightsAndInterests {
        .contentTitle {
          display: none;
        }

        .RightsAndInterestsContent {
          .invitationBox {
            display: flex;
            color: #ffffff;
            font-size: 24px;
            position: relative;
            .card1 { 
              position:absolute;
              top: 1px;
              left: 0;
              padding-left: 20px;
              height: 48px;
              width: 251px;
              line-height: 48px;
              background-color: #17171A;
            }

            // .card2 {
            //   display: none;
            // }

            // img {
            //   display: none;
            // }

            .m-InvitationCodeBg {
              display: block;
              width: 100%;
              height: 50px;
            }
          }

          .infoBox {
            width: 100%;

            .itembox1 {
              width: 100%;
              height: 100%;
              padding: 20px;
              font-size: 16px;
              background: #8247E5;
              color: #fff;
              box-sizing: border-box;

              .InvitationCodeBox {
                margin-top: 20px;
                width: 100%;
                height: 40px;
                display: flex;
                justify-content: flex-end;
                box-sizing: border-box;

                .InvitationCode { 
                  display: flex;
                  justify-content: flex-end;
                  width: 335px;
                  height: 40px;
                  box-sizing: border-box;
                  line-height: 40px;
                  font-weight: 400;
                  text-align: center;

                  .text {
                    font-size: 16px;
                    color: #fff;
                  }

                  .code {
                    width: 121px;
                    text-align: left;
                    margin-left: 10px;
                    margin-right: 10px;
                    font-size: 20px;
                    color: #09EFBD; 
                    letter-spacing: 8px;
                  }

                  .copy {
                    width: 88px;
                    font-size: 20px;
                    margin-left: 10px;
                    color: #09EFBD;
                    border-left: 1px solid #707076;
                    padding: 0px 10px;
                    box-sizing: border-box;
                    cursor: pointer;
                  }
                }
              }

              p {
                color: #fff;
                margin-bottom: 20px;
              }

              p:last-child {
                margin-bottom: 0;
              }
            }

            .itembox2 {
              width: 100%;
              box-sizing: border-box;
              padding-right: 20px;
              display: flex;
              flex-direction: column;
              margin: 20px 0px;
              background: #202024 !important;

              .addressTitle {
                width: 100%;
                color: #fff;
                box-sizing: border-box;
                label {
                  margin-right: 8px;
                }

                .text1 {
                  font-size: 16px;
                  box-sizing: border-box;
                  border: 1px solid #49494D;
                  background: $theme-dark-background0;
                  border-bottom: none;
                  padding: 10px 20px;
                  display: flex;
                  flex-direction: row;
                  align-items: center;

                  span {
                    font-size: 30px;
                    color: #09EFBD;
                  }

                  .viewInvitee {
                    flex: 1;
                    font-size: 16px;
                    text-align: right;
                  }
                }

                .text2 {
                  background: $theme-dark-background0;
                  padding: 10px 20px;
                  border: 1px solid #49494D;
                  font-size: 16px;
                }
              }

              .addresslistBox {
                display: none;
              }
            }

            .itembox3 {
              display: none;
            }
          }
        }
      }

      .ShortaddressContent {
        padding-right: 20px;
        margin-bottom: 40px;

        .contentTitle {
          color: #fff;
          font-size: 16px;
          background: $theme-dark-background0;

          h1 {
            font-size: 16px;
            display: flex;
            justify-items: center;
            padding: 15px 20px 10px 20px;
            border: 1px solid #49494D;
            box-sizing: border-box;
            border-bottom: none;

            .line {
              box-sizing: border-box;
              height: 100%;
              border-left: 2px solid #fff;
              padding: 0px 10px;
              margin-left: 10px;
            }
          }
        }

        .Shortaddresslist {
          padding: 10px 20px 16px 20px;
          border: 1px solid #49494D;
          background: $theme-dark-background0;

          .ShortaddressTitle {
            font-size: 14px;
            color: #fff;

            span {
              color: #09EFBD;
            }
          }

          .m-ShortaddressTitle {
            font-size: 14px;
            color: #fff;

            span {
              margin: 0px 5px;
              color: #09EFBD;
            }
          }

          .list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 10px;

            .item {
              width: 91px;
              margin-bottom: 10px;
              color: #fff;
              font-size: 12px;
            }
          }

          .m-viewAll {
            font-size: 16px;
            color: #09EFBD;
            font-weight: 400;
          }
        }
      }

      .whiteIpcard {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 80px;

        .text {
          width: 266px;
          height: 100%;
          line-height: 100%;
          font-size: 16px;
          color: #fff;
          font-weight: 400;
          padding: 15px 20px 14px 20px;
          box-sizing: border-box;

          img {
            width: 16px;
            height: 16px;
            margin-left: 5px;
          }
        }

        img {
          height: 50px;
        }
      }

      .LoadMapcontent,
      .Tipscontent {
        display: none;
      }
    }
  // }

  .InvitationPopup {
    width: 315px;
    height: 320px;
    box-sizing: border-box;
    padding: 20px;
    background: #202024;

    .title {
      color: #fff;
      font-size: 12px;
      font-weight: 400;
      margin-bottom: 20px;
    }

    .invitationInput {
      flex: 1;
      display: flex;
      align-items: center;
      position: relative;

      .clearBox {
        position: absolute;
        width: 46px;
        height: 100%;
        right: 0px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 14px;
        box-sizing: border-box;
        background: linear-gradient(270.05deg, #17171A 52.83%, rgba(23, 23, 26, 0) 94.08%);
      }

      .van-field__control {
        color: #09EFBD;
        font-size: 24px;
        letter-spacing: 5px;
      }

      .van-cell::after {
        border: none;
      }

      .van-icon-clear {
        color: #09EFBD;
      }

      .pastetext {
        width: 44px;
        color: #09EFBD;
        font-size: 14px;
        font-weight: 400;
        cursor: pointer;
      }
    }

    .content {
      width: 100%;
      box-sizing: border-box;
      font-size: 14px;
      color: #fff;
      word-wrap: break-word;
      word-break: normal;
      margin: 40px 0px;
    }

    .invitationCodeSubmit {
      width: 198px;
      height: 44px;
      line-height: 44px;
      background: url("@/assets/img/btnBg5.png");
      background-size: 100% 100%;
      margin: 0 auto;
      text-align: center;
      font-size: 20px;
      color: #fff;
    }
  }

</style>
