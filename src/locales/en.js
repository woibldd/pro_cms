module.exports = {
  base: {
    loading: "Loading",
    no_more: "No more",
    networkErro:"The Internet has gone awry"
  },

  "ActivityBlindbox": {
    shared:{
      content:"I'm opening blind free boxes, come and help me~"
  },
    dialog: {
      "isCreateWalletComfirm":"Cloud wallet does not exist. Do you want to create it now?",
        helperSuccess: "Contribute to success",
      "getBlindbox": "Congratulations on getting the BitKeep digital blind box",
      "openBlindbox": "Open to get surprise digital assets",
      "lookBlindbox": "View digital blind box",
    },
    toast:{
       open:"Opening...",
       loading:"Loading...",
       Saving:"Saving...",
       inputETH:"Please enter eth address",
       Generating:"Generating...",
       ContributeSuccess: "Contribute to success"
    },
    statusText: [
      "恭喜获得BitKeep数字盲盒",
      "开启获得惊喜数字资产",
      "查看数字盲盒"
    ],
    button:{

      "OpenimmediatelyText": "Open the blind box immediately",
      "InviteFriendsNow": "Invite friends to help now",
      "OpenFriendsImmediately": "Help open the blind box",
      "ViewAssets":"View assets",
      "SuccessView":"Success! Please view assets", //
      // "OpenimmediatelyText": "Open the blind box immediately"
      "savePicture":"Save Picture",  //
      "ShareLink":"Share Link",  //
      "Downloadnow":"Download now",

    },
    title:{
      "myBlindboxText": "My blind box"
    },
    ActivityBlindboxList: {
      "myBlindboxText": "My blind box",
      "RaidersText": "Raiders",
      "DigitalBlindBoxText": "Digital blind box",

      "blindBoxNumText": "The box is still short of <span class='color_red'>{surplus}</span>/<span class='color_blod'>{invite}</span> people,you will get  digital assets",
      "blindBoxSurpriseText": "",
      "ValidUntilText": "Valid until",

      "GoOpenText": "Go open",
      "GoShareText": "Go share",
      "TurnedOnText": "Turned on",
      "SuccessfullyOpenedText": "Opened",
      "expiredText": "expired",
      "ShareWithMe": "Shared width me",
      willOpened:"To be opened",
      noData:{
        title:"No blind box",
        content:"It is said that Using BitSwap or cross-chain swap sucessfully will get a chance to receive blind box and get digital assets"
      },
      end:{
        title:"Blind box beta event has finished",
        subtitle:"please stay tuned for next event",
        content:`You can also follow <br/>
        Twitter：@BitKeepOS <br/>
        or join Telegram：<br/>
        https://t.me/bitkeep <br/>
        to know more updates.`
      }
    },
    ActivityBlindboxDetail: {
      "blindBoxNumText": "The box is still short of <span class='color_red font-20'>{surplus}</span>/<span class='color_blod'>{invite}</span> people,you will get  digital assets",
      "inputAddressPlaceholader": "Click here to input eth address",
      "NoAddressDownload": "No address? Click download bitkeep to create an address",
      "HelpSuccessETH":"Help success eth address",
     "FinalInterpretation": "The final interpretation of this activity belongs to BitKeep",

     "invalidTimeText": "Distance blind box failure",
     "successfullyTimeText" :"The blind box has been opened successfully!",
      expiredTimeText    :"It's a pity that this blind box has expired",

      "ScanBlindBox": "Scan and receive digital blind box",
      DownloadBitkeep: "Download Bitkeep to share the digital assets in the blind box",


      "BitKeepTitleText": "BitKeep数字盲盒",
      "OpenTitleText": "开启获得惊喜数字资产",

      "InviteFriendsText": "邀请好友助力开启盲盒",
      "GetSurpriseAssetsText": "获得惊喜数字资产",
      "stillShort": "距离开启盲盒仅差3/5人助力",
      "InviteFriendsNowText": "立即邀请好友助力",
      "SuccessfullyAssistedText": "已成功助力 ETH 地址",
      "OpenStrategyText": "开启盲盒攻略",
      "shareLinkText": "分享海拔或链接给好友",
      "ClickConentSharedText": "点击「立即邀请好友助力」将海报或者链接分享给好友",
      "FriendsFillValidTitleText": "好友填写有效ETH地址助力",
      "FriendsHelpeSuccessText": "好友进入链接并输入有效的ETH地址助力成功",
      "CanopenBlindBoxText": "凑齐足够助力好友助力后开启盲盒",
      "OpenTheBlindBoxText": "当足够数量的好友助力成功后，您可以点击开启盲盒",
      "shareWidthFriendsText": '您和好友瓜分盲盒内数字资产',
      "CanViewAssetsTocloudWallet": "盲盒开启后您和助力好友均可在 BitKeep 云钱包中查看获得的数字资产",

      rules: [
        "Each blind box has random number of digital assets",
        "Friends fill in a valid ETH address to help",
        "Blind box will open when invitations reaching certain amount, you and your friends can get the rewards",
        "Invitee should download BitKeep, import the previous ETH address to get rewards",
        "Rewards will be sent to your BitKeep cloud wallet, activate it to claim"
      ],

      modal: {


        sharedHelperMeText: "助力我开启 BitKeep 数字盲盒吧",
        openSurpriseText: "开启获取惊喜数字资产",

        DownloadBitkeep: "下载 Bitkeep，瓜分盲盒中数字资产",
        savePicture: "保存图片",
        ShareLink: "分享链接",
        HelpOpenImmediatel: "立即助力开启盲盒",

        SuccessfullyHelpFriends: "成功助力好友",
        DownloadBitkeepAppNow: "立即下载 bitkeep",
        "CheckBoxToGetAssets": "查看盲盒获取惊喜数字资产",
        DownloadNow: "立即下载"
      }

    }

  },
  'CbkbExchange':{
    balance: 'Balance',
    get: 'You can get',
    swap: 'Swap',
    exchange: 'cBKB exchange BKB officially opened',
    exchangeTitle: 'cBKB is a point voucher issued by BKB. cBKB is non-transferable and non-tradable. It is only used as a point voucher for redeeming BKB. cBKB is officially issued by BitKeep, and 100% can be exchanged for BKB.',
    exchangeTitleA: 'The exchange channel for cBKB obtained by users through ecological rewards, blind boxes, invitations, airdrops, etc. in the early stage has now been opened. Users can exchange into BKB by themselves.',
    exchangeTime: 'Exchange time',
    time: '2021.10.15 00:00 - 2021.10.31.00:00(GMT+8)',
    condition: 'Exchange conditions',
    conditionText: 'Users must complete at least one Swap operation with BitKeep wallet before they can exchange.',
    proportion: 'Exchange ratio',
    proportionText: 'The conversion ratio of cBKB to BKB is 60:1',
    exchangeTitle1: 'Note: cBKB that fails to complete the redemption operation within the specified time will automatically enter the destruction process.',
    exchangeTitle2: '* BitKeep has the final decision right and the right to interpret the rules of this exchange activity. We reserve the right to disqualify users who have cheated, suspected of cheating, or violated any of BitKeep\'s rules and regulations.',
    exchangeTitle3: 'To learn more about BKB\'s airdrop activities and progress, everyone is welcome to follow the BitKeep community announcement in time.',
    about: 'About BKB',
    viewAll: 'View All',
    pickUp: 'Pick up',
    aboutContent: 'The concept of Bitcoin was first proposed by Satoshi Nakamoto in 2008. The open source software was designed and released …',
    distribution: 'BKB issuance and distribution',
    total: 'BKB total supply: ',
    mining: 'Compound mining',
    community: 'Community',
    tram: 'Team & Investors ',
    partner: 'Partner',
    eco: 'Eco-construction',
    hold: 'Hold BKB equity',
    hold1: '1.Enjoy ecological governance rights',
    hold2: '2.Ecological payment method',
    hold3: '3.Member\'s rights and identity certificate',
    hold4: '4.Public chain resource purchase',
    hold5: '5.Unlock the VIP function of the wallet',
    hold6: '6.Advertising fee payment',
    hold7: '7.Participate in BitKeep IWO',
    hold8: '8.Pledge to enter the exclusive channel of high-quality assets',
    appreciation: 'BKB appreciation',
    appreciationSwap: 'Swap commission deduction',
    appreciationCoin: 'Payment coin',
    appreciationPool: 'Multiple staking pool',
    appreciationValut: 'Valut',
    more: 'More about BKB',
    website: 'Official website',
    paper: 'White paper',
    twitter: 'Twitter',
    github: 'Github',
    telegram: 'Telegram',
    facebook: 'Facebook',
    explorer: 'Block explorer',
  }
}
