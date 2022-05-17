<template>
  <div class="polygon-contet">
    <div class="polygon-top1">
      <div class="polygon-top-left">
        <h1 class="one TTODbold">BitKeep
        </h1>
        <h1 class="two TTOMedium">Genesis NFT Sale</h1>
      </div>
      <div class="polygon-top-right">
        <img src="@/assets/img/Py_bg1.png" alt="">
      </div>
    </div>
    <div class="polygon-top2">
      <div class="polygon-m-InvitationBox">
        <div class="InvitationCodeBtn" v-if="address&&(!defaultData.isInvite && !defaultData.inviteCode)" @click="InvitationCode">{{lang.enterCode}}</div>
      </div>
      <div class="polygon-top-left">
        <img class="bg0" src="@/assets/img/Py_bg.png" alt="">
        <img class="bg8" src="@/assets/img/Py_bg8.png" alt="">
      </div> 
      <div class="polygon-top-middle">
        <img src="@/assets/img/Py_bg7.png" alt="">
        <div class="g-line"></div>
      </div>
      <div class="polygon-top-right">
        <p class="RemainingtimeText TTORegular" v-if="defaultData.fromStartTime>0">{{lang.remainingTime}}</p>
        <div class="Countdown" v-if="defaultData.fromStartTime>0">
          <Countdown :startTime="startTime" :endTime="endTime" :format="format" />
        </div>
        <div class="Minted">
          <div class="item">
            <p class="TTORegular title">Total Minted</p>
            <p class="TTOMedium content">{{defaultData.totalMinted || 0}}/{{defaultData.allNftNum || 10000}}</p>
          </div>
          <div class="item">
            <p class="TTORegular title">Price</p>
            <p class="TTOMedium content">
              100
              <span>MATIC</span>
            </p>
          </div>
        </div>
        <div class="contract"> 
          <label class="TTORegular title">{{lang.contractAddress}}:</label>
          <span  class="TTORegular ">{{simplify('0x76b9a40Fb2844A450C086B06A4D20599C16FF6eA')}}</span> 
          <span class="TTOMedium copy" v-copy="'0x76b9a40Fb2844A450C086B06A4D20599C16FF6eA'">COPY</span>
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
          <div v-if="!defaultData.isMelt" class="TTORegular tipstext">{{lang.tipsText1}}</div>
          <div v-else class="TTORegular tipstext">{{lang.tipsText2}}</div>
        </div>
        <img src="@/assets/img/Py_bg2.png" class="Py_bg2" alt="">
      </div>
    </div> 
    <div class="polygonContentBox">
      <div class="RightsAndInterests">
        <div class="contentTitle">
          <h1 class="TTORegular">{{lang.rights}}<div class="line"></div>
          </h1>
        </div>
        <div class="RightsAndInterestsContent">
          <div class="invitationBox" >
            <img src="@/assets/img/polygon_h5/InvitationCodeBg.png" alt="" class="m-InvitationCodeBg">
            <div class="TTODbold card1 Background0">{{lang.inviteFriends}}</div>
            <!-- <img src="@/assets/img/Py_bg3.png" alt="">
            <div class="TTORegular card2 Background0"  v-if="address&&!defaultData.isInvite" @click="InvitationCode">填写邀请码</div> -->
          </div>
          <div class="infoBox">
            <div class="itembox1 TTORegular">
              <p class="TTORegular">
                 {{lang.info1}}
              </p>
              <p class="TTORegular">{{lang.info2}}</p>
              <p class="TTORegular">{{lang.info3}}</p>
              <p class="TTORegular" style="margin-bottom:0px">
                {{lang.info4}} <br>
                {{lang.info5}} <br>
                {{lang.info6}}<br>
                {{lang.info7}}<br>
                {{lang.info8}}
              </p>
              <div class="InvitationCodeBox" v-if="!+defaultData.inviteCode">
                <div class="InvitationCode Background0">
                  <span class="TTORegular text">{{lang.inviteCode}}</span>
                  <span class="TTODbold code">{{defaultData.inviteCode}}</span>
                  <span class="line"></span>
                  <span class="TTODbold copy" v-copy="defaultData.inviteCode">COPY</span>
                </div>
              </div>
            </div>
            <div class="itembox2 Background0">
              <div class="addressTitle">
                <p class="TTORegular text1">
                  <label>{{lang.inviteCount}} </label> 
                  <span class="TTOMedium">{{defaultData.inviteNum}}</span>
                  <span v-if="defaultData.inviteNum!=0" class="viewInvitee TTORegular"
                    @click="showInvitedlist=true">{{lang.inviteShow}}</span>
                </p>
                <p class="TTORegular text2">{{lang.inviteTips1}}</p>
              </div>
              <div class="addresslistBox">
                <div class="noData TTOMedium" v-if="defaultData.inviteNum==0">0</div>
                <div class="addresslist" v-else>
                  <div class="addressItem TTORegular" v-for="item in defaultData.inviteAddress" :key="item">
                    <span class="TTORegular">{{lang.inviteAddress}}</span>
                    <p class="TTORegular">
                      {{item}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="itembox3 TTORegular Background0">
              <h2 class="TTORegular">{{lang.whiteTitle}}</h2>
              <div class="TTORegular">
                {{lang.whiteTips1}} <br>
                {{lang.whiteTips2}}<br>
                {{lang.whiteTips3}}<br>
                {{lang.whiteTips4}}</div>
              <h2 class="TTORegular">{{lang.whiteTips9}}</h2>
              <div class="TTORegular">
                {{lang.whiteTips5}}<br>
                {{lang.whiteTips6}}<br>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ShortaddressContent">
        <!-- 接口暂时没加 -->
        <div class="contentTitle">
          <h1 class="TTORegular">{{lang.airdropTitle}}<div class="line">
              <span class="TTORegular">{{ ((new Date).getTime()) - 86400000 | timeFilter }}</span>
            </div>
          </h1>
        </div>
        <div class="Shortaddresslist">
          <div class="ShortaddressTitle TTORegular">
            {{lang.airdropTips1}}
            <span class="TTOMedium">BKB {{$t('polygon.airdropTips2')}}</span>
          </div>
          <div class="TTORegular m-ShortaddressTitle" v-html="$t('polygon.airdropAmount', {amount: `<span>${LotteryList.length}</span>`})">
            <!-- 共<span>{{LotteryList.length}}</span>个地址 -->
          </div>
          <div class="list Background0"> 
            <div v-for="(item, index) in LotteryList" :key="index" v-show="index < 9" class="item TTORegular"> 
              {{item}} 
            </div> 
          </div>
          <div v-if="LotteryList.length > 0" class="TTORegular m-viewAll" @click="showAirdropAddress=true">{{lang.airdropOpen}}</div>
        </div>
      </div>
      <div class="whiteIpcard">
        <div class="text Background0">
          <span v-if="defaultData.isWhite">{{lang.whiteTips7}}</span>
          <span v-else>{{lang.whiteTips8}}</span>
          <img src="@/assets/img/polygon_h5/question.png" alt="" @click="showWhitelist=true">
        </div>
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
                {{lang.sell}}
              </div>
              <span class="TTOMedium">05-17-2022</span>
            </div>
            <div class="Item">
              <div class="TTOMedium logo">
                {{lang.sell}}
              </div>
              <span class="TTOMedium">05-15-2022</span>
            </div>
            <div class="Item">
              <div class="TTOMedium logo">
                {{lang.welfare1}} <br>
                BKB
              </div>
              <span class="TTOMedium">07-16-2022</span>
            </div>
            <div class="Item">
              <div class="TTOMedium logo">
                {{lang.welfare2}}
              </div>
              <span class="TTOMedium ">Q2-2022</span>
            </div>
            <div class="Item">
              <div class="TTOMedium logo">
                {{lang.welfare3}}
              </div>
              <span class="TTOMedium">Q3-2022</span>
            </div>
            <div class="Item">
              <div class="TTOMedium logo">
                {{lang.welfare4}} 2.0
              </div>
              <span class="TTOMedium">Q4-2022</span>
            </div>
            <div class="Item">
              <div class="TTOMedium logo">
                {{lang.welfare5}} <br>
                {{lang.welfare6}}
              </div>
              <span class="TTOMedium">2023</span>
            </div>

          </div>
          <div style="clear-both"></div>
        </div>
        <div style="clear-both"></div>
      </div>
      <div class="Tipscontent Background0 TTORegular">
        <p class="TTORegular">{{lang.matters}}</p>
        <p class="TTORegular">{{lang.mattersTips1}}</p>
        <p class="TTORegular">{{lang.mattersTips2}}</p>
        <p class="TTORegular">{{lang.mattersTips3}}</p>
        <p class="TTORegular">{{lang.mattersTips4}}</p>
      </div> 
      <van-popup v-model="show" close-icon-position="top-right" closeable>
        <div class="PopupBox">
          <div class="InvitationPopup">
            <div class="title TTORegular">
              <span class="TTORegular">{{lang.enterCode2}}</span>
            </div>
            <div class="Background0 invitationInput" :class="[{error: !!invitationError}]">
              <van-field v-model="invitationCode" maxlength="6" :formatter="inputFormatter" class="Background0 TTOMedium"></van-field>
              <div class="clearBox" v-show="invitationCode" @click="invitationCode=''">
                <van-icon name="clear" size="16" />
              </div>
              <div class="pastetext" v-show="!invitationCode" @click="paste">{{lang.paste}}
              </div>
              <div class="error-text" v-if="invitationError">
                {{invitationError}}
              </div>
            </div>
            <div class="content">
              <p class="TTORegular">{{lang.currentAddress}}</p>
              <p class="TTORegular">
                {{address}}
              </p>
            </div>
            <div class="invitationCodeSubmit TTOMedium" @click="invitationCodeSubmit">
              {{lang.confirm}}
            </div>
          </div>
        </div>
      </van-popup>
      <Mint :showMint="showMint" :MentList="MentList" :isWhite="defaultData.isWhite"  @closeMint="closeMint"></Mint>
      <Ment :showMent="showMent" :MentList="MentList" v-if="showMent" @closeMent="closeMent"></Ment>
      <AirdropAddressCard :showAirdropAddress="showAirdropAddress" :LotteryList="LotteryList" @closeAirdropAddressCard="closeAirdropAddressCard">
      </AirdropAddressCard>
      <AirdropAwardCard :showAirdropAward="showAirdropAward" :currentAddress="address" :luckNum="defaultData.luckNum" @closeAirdropAwardCard="closeAirdropAwardCard">
      </AirdropAwardCard>
      <InvitedCard :showInvitedlist="showInvitedlist" :inviteAddress="defaultData.inviteAddress"
        :inviteNum="defaultData.inviteNum" :luckRate="defaultData.luckRate" @closeInvitedCard="closeInvitedCard">
      </InvitedCard>
      <Whitelistcard :showWhitelist="showWhitelist" @closeWhitelistcard="closeWhitelistcard"></Whitelistcard> 
      <MintSuccessCard :showMintSuccess="showMintSuccess" :sendhash="sendhash" :MintData="MintData" @closeMintSuccess="closeMintSuccess">
      </MintSuccessCard>
      <van-overlay :show="isLoading" z-index="999" @click="isLoading = false">
        <div class="loading">
          <van-loading color="#7524f9" vertical>{{$t('base.loading')}}...</van-loading>
        </div> 
      </van-overlay>
    </div>
  </div>
</template>
<script>
  // import cndMixins from "@/mixin/cnd.js";
import Countdown from "@/components/polygon/c-vue-countdown";
import Mint from "@/components/polygon/Mint";
import Ment from "@/components/polygon/Ment";
import AirdropAddressCard from "@/components/polygon/AirdropAddressCard";
import AirdropAwardCard from "@/components/polygon/AirdropAwardCard";
import InvitedCard from '@/components/polygon/InvitedCard'
import Whitelistcard from '@/components/polygon/Whitelistcard'
import MintSuccessCard from '@/components/polygon/MintSuccessCard'
import { storage } from '@/utils/Storage'
import { wallet } from "@/utils/wallet"; 
// MintToken
import { USER_API } from "@/api/client";
import "@/utils/copy"
import { loadView } from "@/tools/common.js" 
// Vue.prototype.$bus = new Vue();
import { BaseMixin } from "@/mixin/base.js"
export default {
  name: "polygon",
  layout:"polygon/default",
  mixins: [BaseMixin],
  data() {
    return { 
      isLoading: false,
      defaultData: {
        isInvite: true
      },
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
      chainName: "matic",
      chain:"matic",
      ChainId: "137",
      contract:"0xDE2A32e5363d01a89e3624442F8f5c43F38fc53a",
      symbol:"Polygon Warrior",
      address: "",
      token: "",
      LotteryList: [],
      MintData: [],
      MentList: [],
      invitationError: "",
      sendhash: "", 
    };
  },
  computed: {
    lang() {
      return this.$t('polygon')
    }
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
    this.loading =true
    await loadView()
    this.loading =false
    await this.connect()    
    this.nftMintLotteryList()
    // this.$bus.$on('changeAccounts', async (val) => {
    //   this.init()
    // });
    // this.nftMintGetInfo(this.address, 'matic') 
  },
  methods: {
    loadingAddress(){
       this.timer = setInterval(()=>{
           if(typeof window != "undefined" && window.ethereum){
                if(window.ethereum.selectedAddress){
                      this.connect()
                      clearInterval(this.timer)
                }
           }
       },300)
    },
    inputFormatter(value) {
      return value.replace(/[^\d|a-z|A-Z]/g,'')
    },
    async connect() {
      try {
        await wallet.connect();
        this.init()
      } catch (e) {
        this.init()
        console.log(e)
      }
    },
    async init() {
      if (!wallet.isConnected()) {
        await wallet.connect();
      } 
      const [nAddress] = await wallet.getAccounts()
      if(!address){
         this.loadingAddress()
      }
      this.address = nAddress
      this.nftMintGetInfo(this.address ? this.address : '', 'matic')
      this.nftMintnftList()
    },
    async nftMintGetInfo(address, chain) { 
      this.isLoading = true
      const {
        data,
        status
      } = await USER_API.nftMintGetInfo({
        address,
        chain
      }); 
      this.isLoading = false
      if (status == 0) {
        this.defaultData = data; 
        this.endTime = data.fromStartTime > 0 ? new Date().getTime() + data.fromStartTime : 0; 
        // data.fromStartTime = 100 
        // this.endTime =  new Date().getTime() + 10000 
        if (data.fromStartTime > 0) {
          let endTime = this.endTime
          const timer = setInterval(() => {
            let newTime = new Date().getTime()
            if (endTime <= newTime + 1000) {  
              location.reload()
            }
          }, 1000);
        }

        if (+data.luckNum > 0) {
          const expires = new Date().setHours(23, 59, 59, 999) - new Date().getTime()
          if (!storage.getItem("luckaddress")) {
            storage.setItem({ name: 'luckaddress', value: this.address, expires: expires })
          } else if (storage.getItem("luckaddress").split("|").filter(item => { return item == this.address }).length == 0) {
            storage.setItem({ name: 'luckaddress', value: storage.getItem("luckaddress") + '|' + this.address, expires: expires })
          } else {
            return false
          }
          this.showAirdropAward = true
        }
      }
    },
    async nftMintLotteryList() { 
      this.isLoading = true
      const {
        data,
        status
      } = await USER_API.nftMintLotteryList();
      this.isLoading = false
      if (status == 1) {
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t('polygon.iknow'),
          confirmButtonColor: '#7524f9'
        });
      }
      this.LotteryList =  data.list;
    },
    async nftMintnftList() { 
      this.isLoading = true
      if (!this.address) {
        return false
      }
      const {
        data,
        status
      } = await USER_API.nftMintnftList({
        address: this.address,
        chain: this.chainName
      }) 
      this.isLoading = false
      if (status == 1) {
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t('polygon.iknow'),
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
          this.$toast(this.$t("polygon.pasteTips1"));
        }
      } else {
        this.$toast({
          message: this.$t("polygon.pasteTips2"),
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
          confirmButtonText: this.$t('polygon.iknow'),
          confirmButtonColor: '#7524f9'
        });
      }
      this.token = data.token
    },
    async invitationCodeSubmit() {
      this.invitationError = ''
      if (!this.invitationCode) {
        this.$toast(this.$t("polygon.enterCode2"));
        return;
      }
      try { 
        this.isLoading = true
        await this.getToken(this.address) 
        const sign = await wallet.paritySign(this.address,this.invitationCode)  
        const {
          data,
          status
        } = await USER_API.nftMintInvite({
          address: this.address,
          chain: 'matic',
          code: this.invitationCode,
          c_token: this.token,
          verifyToken: sign
        })
        if (status == 1) {
          this.invitationError = this.lang.invitationError
          return this.$dialog.alert({
            message: data,
            confirmButtonText: this.$t('polygon.iknow'),
            confirmButtonColor: '#7524f9'
          });
        }
        this.isLoading = false
        this.$toast(this.$t("polygon.InvitationSucceeded")); 
        this.defaultData.isInvite = true
        this.show = false;
      } catch (error) { 
        this.isLoading = false
        this.$toast.fail(typeof error == "object" ? error.message || 'error' : error);
      }
    },
    closeinvitationCode() {
      this.show = false;
      this.invitationCode = ""
    },
    async closeMint(MintNum) {
      this.showMint = false;   
      if (MintNum) {
        const ChainId = await wallet.getChainId()
        if (Number(ChainId) != this.ChainId) {
          this.$dialog.alert({
            message: this.$t("polygon.switchChain1"),
            confirmButtonText: this.$t("polygon.switchChain2"),
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
                  chainName: "Polygon",
                  rpcUrls: [" https://polygon-rpc.com"],
                  nativeCurrency: {
                    name: "Polygon",
                    symbol: "Polygon",
                    decimals: 18,
                  },
                },],
              });
            }
          })
          return
        }
        const TXdata = await USER_API.buildNftMintTxs({
          address: this.address,
          chain: 'matic',
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
          this.isLoading = true
          const send = await wallet.setMintToken(tx) 
          console.log({send})
          var MintTimer = setInterval(async () => {
            const {
              data,
              status
            } = await USER_API.nftMintcheckTransaction({
              chain: 'matic',
              hash: send
            }) 
            this.isLoading = false
            if (status == 1) {
              this.isLoading = false
              return this.$dialog.alert({
                message: data,
                confirmButtonText: this.$t('polygon.iknow'),
                confirmButtonColor: '#7524f9'
              });
            }
            if (data.status == 1) {
              console.log("MintTimer", MintTimer)
              clearInterval(MintTimer)
              clearTimeout(MintTimer2)
              this.isLoading = false;
              this.$toast.success("Mint " + this.$t("polygon.success"));
              this.MintData = data.list;
              console.log("list", ...data.list)
              this.MentList.push(...data.list)
              console.log("MentList", this.MentList)
              this.nftMintGetInfo(this.address ? this.address : '', this.chainName)
              this.showMintSuccess = true;
            } 
          }, 3000)
          var MintTimer2 = setTimeout(() => {
            this.isLoading = false
            this.init()
            clearInterval(MintTimer)
            this.$dialog.alert({
              message: 'Mint ' + this.$t('polygon.faild'),
              confirmButtonText: this.$t('polygon.iknow'),
            })
          }, 1000 * 60);
        } catch (error) {
          this.isLoading = false;
          this.$toast.fail(typeof error == "object" ? error.message || 'error' : error); 
        }
        
        this.addCoin(this.contract, this.chain, this.contract+'#BK#NFT') 
      }
    },
    async ableMent(Mentlist) {
      if (Mentlist.length == 0) {
        return this.$dialog.alert({
          message: this.$t('polygon.noNft'),
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
            message: this.$t("polygon.switchChain1"),
            confirmButtonText: this.$t("polygon.switchChain2"),
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
                  chainName: "Polygon",
                  rpcUrls: [" https://polygon-rpc.com"],
                  nativeCurrency: {
                    name: "Polygon",
                    symbol: "Polygon",
                    decimals: 18,
                  },
                },],
              });
            }
          })
          return
        }
        this.isLoading = true
        const TXdata = await USER_API.nftMintbuildNftMeltTxs({
          address: this.address,
          chain: 'matic',
          nftIds: Mentids.join(',')
        });
        if (TXdata.status == 1) {
          this.isLoading = false
          return this.$dialog.alert({
            message: TXdata.data,
            confirmButtonText: this.$t('polygon.iknow'),
            confirmButtonColor: '#7524f9'
          }); 
        }
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
          var MentTimer = setInterval(async () => {
            const {
              data,
              status
            } = await USER_API.nftMintcheckTransaction({
              chain: 'matic',
              hash: send
            })
            if (status == 1) {
              this.isLoading = false
              return this.$dialog.alert({
                message: data,
                confirmButtonText: this.$t('polygon.iknow'),
                confirmButtonColor: '#7524f9'
              });
            }
            if (data.status == 1) {
              console.log("MentTimer", MentTimer)
              clearInterval(MentTimer)
              clearTimeout(MentTimer2)
              this.isLoading = false;
              this.$toast("MELT" + this.$t("polygon.success"))
              const MLETsuccess=data.list.map(item => {
                return item.tokenId
              })
               this.MentList=this.MentList.filter(item => {
                return MLETsuccess.indexOf(item.tokenId) == -1
              });
            }
          }, 3000)
          var MentTimer2 = setTimeout(() => {
            this.isLoading = false
            this.init()
            MentTimer && clearInterval(MentTimer)
            this.$dialog.alert({
              message: 'MELT' + this.$t("polygon.faild"),
              confirmButtonText: $t('polygon.iknow'),
            })
          }, 1000 * 60);
        } catch (error) {
          this.isLoading = false
          this.$toast.fail(typeof error == "object" ? error.message || 'error' : error);
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
    },
    simplify(address) {
      return address.substring(0, 6) + '...' + address.substring(address.length - 4)
    } 
  }
}
</script>
<style lang="scss">
  @import "@/assets/css/theme.scss";

  @font-face {
    font-family: "TTORegular";
    src: url("@/assets/fonts/polygon/ttoctosquares-regular.otf");
  }
  .van-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
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
          white-space: nowrap;
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
        margin: 35px auto 0; 
        .g-line {
          position: absolute;
          right: 0;
          top: 15px;
          height: 1px;
          width: 210px;
          background-color: #09EFBD;
        }
        img {
          width: 300px;
          margin-left: 20px;
        }
      }

      .polygon-top-right {
        .RemainingtimeText {
          font-weight: 400;
          font-size: 14px;
          color: #fff;
          margin: 15px 0px 10px;
          text-align: center;
        }

        .Minted {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 20px;
          margin: 50px 0px 5px;

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
          margin: 50px 0px 0;

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

        .contract {
          padding: 0px 20px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 400;
          .copy { 
            color: #09EFBD; 
            font-weight: 400;
          }
        }

        .tipstext-wrap {
          margin-top: 50px;
          padding: 12px 20px; 
          width: 355px;
          box-sizing: border-box; 
          border: 1px solid #49494D;
          border-left: none;
          .tipstext {
            color: #ffffff;
            font-size: 16px;
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
              white-space: nowrap;
              overflow: hidden;
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
                  white-space: nowrap;
                  .text {
                    font-size: 16px;
                    color: #fff;
                    text-align: left;
                    overflow: hidden;
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
                    font-size: 16px;
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
                  border-left: none;
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
                  border-left: none;
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
          white-space: nowrap;
          h1 {
            font-size: 16px;
            display: flex;
            justify-items: center;
            padding: 15px 20px 10px 20px;
            border: 1px solid #49494D;
            border-left: none;
            box-sizing: border-box;
            border-bottom: none;
            font-weight: 400;

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
          border-left: none;
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
        display: flex;
        justify-content: space-between;
        margin-bottom: 80px; 
        overflow: hidden;
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
      font-size: 14px;
      font-weight: 400;
      margin: 20px 0 10px;;
    }

    .invitationInput {
      flex: 1;
      display: flex;
      align-items: center;
      position: relative;
      border: solid 1px #49494d;
      &.error {
        border-color: #F36464;
      }

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

      .van-cell {
        padding: 6px 16px;
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
      
      .error-text {
        position: absolute;
        top: 42px;
        left: 0;
        margin-top: 2px;
        color: #F36464;
        font-size: 14px;
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

  [lang='en'] {
    .polygon-top2 .polygon-m-InvitationBox .InvitationCodeBtn {
      font-size: 11px;
    }
    .polygonContentBox .RightsAndInterests .RightsAndInterestsContent .infoBox .itembox1 {
      font-size: 14px;
    }
    .polygonContentBox .RightsAndInterests .RightsAndInterestsContent .infoBox .itembox2 .addressTitle .text1 {
      font-size: 14px
    }
    .polygonContentBox .RightsAndInterests .RightsAndInterestsContent .infoBox .itembox2 .addressTitle .text2 {
      font-size: 14px
    }
    .polygonContentBox .ShortaddressContent .contentTitle h1 {
      font-size: 14px;
    }
    .polygonContentBox .whiteIpcard .text {
      font-size: 14px;
    }
  }

</style>
