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
        <div class="InvitationCodeBtn" v-if="address" @click="InvitationCode">填写邀请码</div>
      </div>
      <div class="polygon-top-left">
        <img src="../../assets/img/Py_bg.png" alt="">
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
            <div class="TTORegular Background0 tipstext">7月17日后，可在官网以原价进行反向铸造</div>
          </div>
          <div class="item" v-else>
            <div class="MELTActive TTOMedium" @click="ableMent(MentList)">
              MELT
            </div>
            <div class="TTORegular Background0 tipstext">现在可在官网以原价进行反向铸造</div>
          </div>
        </div>
        <img src="@/assets/img/Py_bg2.png" class="Py_bg2" alt="">
      </div>
    </div>
    <div class="Polygontext Background0">
      <div class="TTORegular content">
        Polygon Warrior are the first BitKeep NFTs, and the first NFTs that can be reversed. <br>
        A Polygon Warrior NFT costs 100 Matic to mint, with the possibility to reverse after 60 <br> days of minting and
        get all costs refunded. <br>
        BitKeep will draw 100 holders of Polygon Warrior NFTs each day to reward them each 100BKB. <br>
        Polygon Warrior is the first demonstrative PFP NFT on Polygon that integrates Social-Fi
      </div>
      <div class="TTORegular tips Background0" v-if="defaultData.fromStartTime>0">
        7月16日后，可在官网以原价进行反向铸造。
      </div>
    </div>
    <div class="polygonContentBox">
      <div class="RightsAndInterests">
        <div class="contentTitle">
          <h1 class="TTORegular">权益<div class="line"></div>
          </h1>
        </div>
        <div class="RightsAndInterestsContent">
          <div class="invitationBox">
            <img src="../../assets/img/polygon_h5/InvitationCodeBg.png" alt="" class="m-InvitationCodeBg">
            <div class="TTODbold card1 Background0">邀请好友 领取空投</div>
            <img src="@/assets/img/Py_bg3.png" alt="">
            <div class="TTORegular card2 Background0" @click="InvitationCode">填写邀请码</div>
          </div>
          <div class="infoBox">
            <div class="itembox1 TTORegular">
              <p class="TTORegular">
                1.Mint 开启后 30 天内，每日随机挑选 100 位持有者，每位持有者空投 100 枚 BKB 到云钱包
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
                <p class="TTORegular text1">当前邀请成功人数 <span class="TTOMedium">{{defaultData.inviteNum}}</span>
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
          <div class="TTORegular m-ShortaddressTitle">共<span>100</span>个地址</div>
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
      <AirdropAddressCard 
        :showAirdropAddress="showAirdropAddress" 
        :airdropList="LotteryList"
        @closeAirdropAddressCard="closeAirdropAddressCard">
      </AirdropAddressCard>
      <AirdropAwardCard 
          :showAirdropAward="showAirdropAward"
          @closeAirdropAwardCard="closeAirdropAwardCard"
          :address="address"
          :amount="awardAmount">
      </AirdropAwardCard>
      <InvitedCard :showInvitedlist="showInvitedlist" @closeInvitedCard="closeInvitedCard"></InvitedCard>
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
        isLoading: false,
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
        address: "",
        chainName: "ht",
        ChainId: 128,
        token: "",
        LotteryList: [],
        MintData: [],
        MentList: [],
        awardAmount: 0,
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
      await this.initEvent()
      this.nftMintLotteryList()
      this.nftMintnftList()
    },
    methods: {
      async initEvent() {
        window.ethereum && window.ethereum.removeAllListeners();
        window.ethereum &&
          window.ethereum.on("accountsChanged", (address) => {
            this.address = address;
            this.nftMintGetInfo(this.address, 'ht')
          });
        window.ethereum &&
          window.ethereum.on("chainChanged", async (chainId) => {
            if (Number(chainId) != this.ChainId) {
              return this.$dialog.alert({
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
                // on close
              });
            }
          });
      },
      async connect() {
        try {
          this.address = await wallet.connect()
          await this.nftMintGetInfo(this.address, 'ht')
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
          this.awardAmount = data.luckNum
          this.showAirdropAward = data.isLuck
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
      InvitationCode() {
        this.address = wallet.selectedAddress()
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
          this.$toast("邀请成功");
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
          if (String(ChainId) != this.ChainId) {
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
            address: ethereum.selectedAddress,
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
            setTimeout(async () => {
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
              if (data.isSuccess) {
                this.isLoading = false
                this.$toast("Mint成功");
                this.MintData = data.list;
                this.showMintSuccess = true;
              } else {
                this.isLoading = false
                return this.$dialog.alert({
                  message: 'Mint失败',
                  confirmButtonText: "知道了",
                })
              }
            }, 5000)
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

  // @media screen and (min-width: 960px) {
  //   .polygon-contet {
  //     width: 100%;
  //     box-sizing: border-box;
  //     padding: 60px 0px;
  //     overflow: hidden;

  //     .polygon-top1 {
  //       width: 100%;
  //       display: flex;
  //       padding-left: 196px;
  //       box-sizing: border-box;

  //       .polygon-top-left {
  //         width: 50%;
  //         box-sizing: border-box;

  //         .one {
  //           font-weight: 400;
  //           font-size: 80px;
  //           color: #8247E5;
  //         }

  //         .two {
  //           font-weight: 400;
  //           font-size: 80px;
  //           color: #fff;
  //         }
  //       }

  //       .polygon-top-right {
  //         width: 50%;
  //         display: flex;
  //         justify-content: flex-end;

  //         img {
  //           width: 770px;
  //           height: 81px;
  //         }
  //       }
  //     }

  //     .polygon-top2 {
  //       margin-top: 70px;
  //       display: flex;
  //       justify-content: space-between;
  //       padding: 0px 169px;
  //       box-sizing: border-box;

  //       .polygon-m-InvitationBox {
  //         display: none;
  //       }

  //       .polygon-top-left {
  //         width: 50%; 
  //         img {
  //           width: 496px;
  //           height: 463px;
  //         }
  //       }

  //       .polygon-top-right {
  //         width: 50%;

  //         .RemainingtimeText {
  //           font-size: 20px;
  //           color: #fff;
  //           font-weight: 400;
  //           margin-bottom: 20px;
  //         }

  //         .Minted {
  //           display: flex;
  //           justify-content: space-between;
  //           margin-top: 88px;

  //           .item {
  //             font-weight: 400;

  //             .title {
  //               font-size: 20px;
  //               color: #fff;
  //             }

  //             .content {
  //               font-size: 50px;
  //               color: #09EFBD;

  //               span {
  //                 font-size: 20px;
  //               }
  //             }
  //           }
  //         }

  //         .MintBtn {
  //           display: flex;
  //           justify-content: space-between;
  //           margin: 88px 0px 150px 0px;
  //           color: #fff;

  //           .item {
  //             width: 368px;

  //             .MINT {
  //               height: 80px;
  //               background: url("@/assets/img/bthBg3.png");
  //               background-size: cover;
  //               font-size: 40px;
  //               font-weight: 400;
  //               text-align: center;
  //               line-height: 80px;
  //               cursor: pointer;
  //               margin-right: 20px;
  //             }

  //             .MELT {
  //               height: 80px;
  //               background: url("@/assets/img/bthBg2.png");
  //               background-size: cover;
  //               font-size: 40px;
  //               font-weight: 400;
  //               text-align: center;
  //               color: #707076;
  //               line-height: 80px;
  //               cursor: not-allowed;
  //             }

  //             .MELTActive {

  //               height: 80px;
  //               background: url("@/assets/img/btnBg4.png");
  //               background-size: cover;
  //               font-size: 40px;
  //               font-weight: 400;
  //               text-align: center;
  //               line-height: 80px;
  //               cursor: pointer;
  //             }

  //             .tipstext {
  //               width: 100%;
  //               color: #fff;
  //               box-sizing: border-box;
  //               padding: 12px 20px;
  //               border: 1px solid #49494D;
  //               margin-top: 20px;
  //               font-size: 18px;
  //               line-height: 23px;
  //               text-align: left;
  //               word-wrap: break-word;
  //               word-break: normal;
  //             }
  //           }
  //         }

  //         .Py_bg2 {
  //           width: 950px;
  //           height: 71px;
  //           margin-bottom: -60px;
  //         }
  //       }
  //     }

  //     .Polygontext {
  //       max-width: 1338px;
  //       color: #fff;
  //       border: 1px solid #49494D;
  //       border-left: none;
  //       padding: 70px 40px 80px 195px;
  //       box-sizing: border-box;
  //       position: relative;

  //       .content {
  //         font-size: 24px;
  //         font-weight: 400;
  //         line-height: 36px;
  //       }

  //       .tips {
  //         position: absolute;
  //         width: 355px;
  //         box-sizing: border-box;
  //         word-wrap: break-word;
  //         word-break: normal;
  //         font-size: 18px;
  //         font-weight: 400;
  //         color: #fff;
  //         padding: 12px 20px;
  //         border: 1px solid #49494D;
  //         top: -35px;
  //         right: -120px;
  //       }
  //     }

  //     .polygonContentBox {
  //       width: 100%;

  //       .contentTitle {
  //         width: 100%;
  //         padding: 0px 169px;
  //         margin: 0 auto;
  //         display: flex;
  //         box-sizing: border-box;

  //         h1 {
  //           width: 100%;
  //           font-weight: 400;
  //           font-size: 80px;
  //           color: #fff;
  //           display: flex;
  //           align-items: center;

  //           .line {
  //             flex: 1;
  //             height: 1px;
  //             background: #707076;
  //             margin-left: 32px;
  //             text-align: right;

  //             span {
  //               display: block;
  //               color: #fff;
  //               font-weight: 400;
  //               font-size: 24px;
  //               margin-top: -50px;
  //             }
  //           }
  //         }
  //       }

  //       .RightsAndInterests {
  //         padding: 80px 0px 56px 0px;

  //         .RightsAndInterestsContent {
  //           padding: 0px 169px;
  //           box-sizing: border-box;

  //           .invitationBox {
  //             display: flex;
  //             align-items: center;

  //             .m-InvitationCodeBg {
  //               display: none;
  //             }

  //             .card1 {
  //               padding: 10px 50px 9px 20px;
  //               box-sizing: border-box;
  //               color: #fff;
  //               font-size: 24px;
  //             }

  //             img {
  //               box-sizing: border-box;
  //               width: 235px;
  //               margin-right: 112px;
  //               margin-left: -10px;
  //             }

  //             .card2 {
  //               box-sizing: border-box;
  //               padding: 12px 23px;
  //               color: #fff;
  //               font-size: 20px;
  //               cursor: pointer;
  //             }
  //           }

  //           .infoBox {
  //             display: flex;
  //             min-height: 320px;
  //             box-sizing: border-box;

  //             .itembox1 {
  //               width: 755px;
  //               height: 320px;
  //               background: #8247E5;
  //               margin-right: 20px;
  //               padding: 20px;
  //               font-size: 16px;
  //               box-sizing: border-box;

  //               .InvitationCodeBox {
  //                 width: 100%;
  //                 height: 40px;
  //                 display: flex;
  //                 justify-content: flex-end;
  //                 box-sizing: border-box;


  //                 .InvitationCode {
  //                   width: 335px;
  //                   height: 40px;
  //                   box-sizing: border-box;
  //                   line-height: 40px;
  //                   // padding: 10px 0px 10px 10px;
  //                   font-weight: 400;
  //                   text-align: center;

  //                   .text {
  //                     font-size: 16px;
  //                     color: #fff;
  //                   }

  //                   .code {
  //                     font-size: 20px;
  //                     color: #09EFBD;
  //                     letter-spacing: 2px;
  //                   }

  //                   .copy {
  //                     width: 88px;
  //                     font-size: 20px;
  //                     margin-left: 10px;
  //                     color: #09EFBD;
  //                     border-left: 1px solid #707076;
  //                     padding: 0px 10px;
  //                     box-sizing: border-box;
  //                     cursor: pointer;
  //                   }
  //                 }
  //               }

  //               p {
  //                 color: #fff;
  //                 margin-bottom: 20px;
  //               }

  //               p:last-child {
  //                 margin-bottom: 0;
  //               }
  //             }

  //             .itembox2 {
  //               width: 366px;
  //               height: 320px;
  //               border: 1px solid #49494D;
  //               margin-right: 20px;
  //               display: flex;
  //               flex-direction: column;

  //               .addressTitle {
  //                 width: 100%;
  //                 // height: 80px;
  //                 color: #fff;
  //                 border-bottom: 1px solid #49494D;
  //                 padding: 10px 20px 13px 20px;
  //                 box-sizing: border-box;

  //                 .text1 {
  //                   font-size: 16px;
  //                   margin-bottom: 10px;
  //                   box-sizing: border-box;

  //                   span {
  //                     font-size: 30px;
  //                     color: #09EFBD;
  //                   }

  //                   .viewInvitee {
  //                     display: none;
  //                   }
  //                 }

  //                 .text2 {
  //                   font-size: 16px;
  //                 }
  //               }

  //               .addresslistBox {
  //                 display: flex;
  //                 height: 200px;
  //                 justify-content: center;
  //                 align-items: center;

  //                 .noData {
  //                   font-size: 100px;
  //                   color: #49494D;
  //                 }

  //                 .addresslist {
  //                   width: 100%;
  //                   height: 100%;
  //                   padding: 15px 20px;
  //                   overflow: auto;
  //                   box-sizing: border-box;

  //                   .addressItem {
  //                     width: 275px;
  //                     margin-bottom: 20px;
  //                     color: #fff;
  //                     font-weight: 400;

  //                     span {
  //                       font-size: 14px;
  //                     }

  //                     p {
  //                       font-size: 14px;
  //                       word-wrap: break-word;
  //                       word-break: normal;
  //                     }
  //                   }
  //                 }
  //               }
  //             }

  //             .itembox3 {
  //               border: 1px solid #49494D;
  //               padding: 20px;
  //               color: #fff;
  //               font-size: 20px;
  //               font-weight: 400;

  //               h2 {
  //                 font-size: 24px;
  //                 margin-top: 20px;
  //                 font-weight: 400;

  //                 :first-child {
  //                   margin-bottom: 0px;
  //                 }
  //               }
  //             }
  //           }

  //         }

  //       }

  //       .ShortaddressContent {
  //         padding: 80px 0 76px 0px;
  //         box-sizing: border-box;

  //         .Shortaddresslist {
  //           margin-top: 20px;
  //           padding: 0px 169px;
  //           box-sizing: border-box;

  //           .ShortaddressTitle {
  //             font-size: 16px;
  //             font-weight: 400;
  //             color: #fff;
  //             margin-bottom: 20px;

  //             span {
  //               color: #09EFBD;
  //               font-size: 40px;
  //             }
  //           }

  //           .m-ShortaddressTitle {
  //             display: none;
  //           }

  //           .m-viewAll {
  //             display: none;
  //           }

  //           .list {
  //             width: 100%;
  //             border: 1px solid #49494D;
  //             padding: 10px 0px;
  //             display: flex;
  //             justify-content: flex-start;

  //             .item {
  //               margin-right: 20px;
  //               color: #fff;
  //               font-size: 14px;
  //             }
  //           }
  //         }
  //       }

  //       .whiteIpcard {
  //         display: none;
  //       }

  //       .LoadMapcontent {
  //         padding: 80px 0px 275px 0px;
  //         box-sizing: border-box;

  //         .logoListBox {
  //           width: 100%;
  //           position: relative;
  //           margin-top: 240px;

  //           .logoBg {
  //             width: 100%;
  //             height: 20px;
  //             background: #0E0E0F;
  //             display: flex;
  //             justify-content: space-between;

  //             :first-child {
  //               width: 176px;
  //               height: 100%;
  //             }

  //             :last-child {
  //               width: 176px;
  //               height: 100%;
  //             }
  //           }

  //           .logoListContent {
  //             width: 100%;
  //             display: -webkit-box;
  //             display: -ms-flexbox;
  //             display: flex;
  //             justify-content: center;
  //             align-items: center;
  //             position: absolute;
  //             top: -119px;

  //             .Item {

  //               .logo {
  //                 width: 238px;
  //                 height: 238px;
  //                 background: url("@/assets/img/Py_bg6.png");
  //                 background-size: cover;
  //                 color: #fff;
  //                 font-size: 24px;
  //                 font-weight: 400;
  //                 text-align: center;
  //                 display: flex;
  //                 align-items: center;
  //                 justify-content: center;
  //               }

  //               .active {
  //                 background: url("@/assets/img/Py_bg5.png");
  //                 background-size: cover;
  //               }

  //               span {
  //                 display: block;
  //                 width: 100%;
  //                 color: #fff;
  //                 font-weight: 400;
  //                 font-size: 24px;
  //                 text-align: center;
  //                 margin-top: 16px;
  //               }
  //             }
  //           }

  //         }
  //       }
  //     }

  //     .Tipscontent {
  //       max-width: 1532px;
  //       margin: 0 auto;
  //       padding: 20px;
  //       color: #fff;
  //       font-size: 20px;
  //       font-weight: 400;
  //     }

  //   }
  // }

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
        width: 245px;
        height: 228px;
        margin: 0 auto; 
        img {
          width: 100%;
          height: 100%;
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

            .tipstext {
              display: none;
            }
          }
        }

        .Py_bg2 {
          display: none;
        }
      }
    }

    .Polygontext {
      padding-right: 20px;
      background: #202024 !important;
      margin-bottom: 60px;

      .content {
        display: none;
      }

      .tips {
        border: 1px solid #49494D;
        padding: 12px 20px;
        color: #fff;
      }
    }

    .polygonContentBox {
      .RightsAndInterests {
        .contentTitle {
          display: none;
        }

        .RightsAndInterestsContent {
          .invitationBox {
            display: flex;

            .card1 {
              display: none;
            }

            .card2 {
              display: none;
            }

            img {
              display: none;
            }

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
                    font-size: 20px;
                    color: #09EFBD;
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
