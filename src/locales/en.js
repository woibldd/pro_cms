module.exports = {
  base: {
    loading: "Loading",
    no_more: "No more",
    success: 'Successfully',
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
      "inviteFirends": 'Invited',
      "HelpFirends": 'Be helped',
      "friendList": 'Friends List',
      "inviteContent": `{helper} have been assisted `,
      "GoOpenText": "Go open",
      "GoShareText": "Go share",
      "TurnedOnText": "Turned on",
      "SuccessfullyOpenedText": "Opened",
      "expiredText": "expired",
      "ShareWithMe": "Shared width me",
      "noHelper": "No friends have been helped",
      "noInvite": "No friends have been invited",
      willOpened:"To be opened",
      noData:{
        title:"No blind box",
        content:"It is said that Using BitSwap or cross-chain swap sucessfully will get a chance to receive blind box and get digital assets"
      },
      end:{
        title:"No blind box",
        subtitle:"please stay tuned for next event",
        content:`Follow @BitKeepOS to learn more details`
      }
    },
    ActivityBlindboxDetail: {
      "blindBoxNumText": "The box is still short of <span class='color_red font-20'>{surplus}</span>/<span class='color_blod'>{invite}</span> people,you will get  digital assets",
      "inputAddressPlaceholader": "Click here to input eth address",
      "NoAddressDownload": "No address? Click download bitkeep to create an address",
      "HelpSuccessETH":"Help success eth address：",
      "InviteSuccessETH": "The ETH address has been invited",
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
    exchange: 'cBKB swap to BKB officially launching',
    exchangeTitle: 'cBKB is a credit point issued by BKB. cBKB is non-transferable and non-tradable. It is only used as a point voucher for redeeming BKB. cBKB is officially issued by BitKeep, and 100% can be exchanged for BKB.',
    exchangeTitleA: 'Users can get cBKB through ecological rewards, blind boxes, invitations, airdrops, etc. The swap channel has opened. Users can exchange into BKB by themselves.',
    exchangeTime: 'Swap Time',
    time: '2021-10-20 12:00 — 11-03 12:00 (GMT+8)',
    condition: 'Swap Rules',
    conditionText: 'Users must complete at least one Swap in BitKeep wallet ',
    proportion: 'Swap Ratio',
    proportionText: 'The conversion ratio of cBKB to BKB is 60:1',
    exchangeTitle2: 'BitKeep has the final decision right and the right to interpret the rules of this promotion. We reserve the right to disqualify any users who cheat, suspected of cheating, or violate any of BitKeep\'s rules and regulations.',
    exchangeTitle3: 'Welcome to follow BitKeep channels for more updates on BKB airdrop.',
    about: 'About BKB',
    viewAll: 'View All',
    pickUp: 'Pick up',
    aboutContent1: 'Holding BKB will enjoy ecological governance rights, and it is also the identity proof of BitKeep\'s ecological payment method and membership rights.',
    aboutContent2: 'BKB can be used in scenarios such as the purchase of multiple public chain resources, the unlocking of the VIP function of the wallet, and the payment of BitKeep advertising fees.',
    distribution: 'BKB issuance and distribution',
    total: 'BKB total supply: ',
    mining: 'Compound mining',
    community: 'Community',
    tram: 'Team and early investors',
    partner: 'Partner',
    eco: 'Ecosystem building',
    hold: 'Hold BKB equity',
    hold1: '1.Get discounts on BitSwap fees.',
    hold2: '2.Pay for BitKeep NFT Market service.',
    hold3: '3.Obtain the payment function of BitKeep Pools.',
    hold4: '4.Get the payment reduction and exemption function of BitKeep Pay.',
    hold5: '5.Obtain BitKeep Fin interest rate hike coupon rewards to support the entire product ecology.',
    hold6: '6.Get payment exemptions in the BitKeep business system.',
    hold7: '7.Obtain irregular airdrop rewards in BitKeep syrup pools.',
    hold8: '8.BKB StaKing rewards',
    appreciation: 'BKB value enhancement',
    appreciationSwap: 'Swap commission deduction',
    appreciationCoin: 'Payment',
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
    know: 'OK',
    swapTitle: 'cBKB Swap'
  },
  'airdrop':{
    get: 'You can get',
    receive: 'Receive',
    airdrop: 'BKB Airdrop',
    airdropContent: 'The total amount of BKB is 600 million, which is the ecological token of BitKeep ecology. Users holding BKB will enjoy ecological governance rights, and it is also an identity certificate for ecological payment methods and membership rights. ',
    time: 'Activity Time',
    timeContent: '2021.10.18 20:00 — 2021.10.28 00:00 (GMT+8)',
    particlpation: 'Conditions for Participation',
    particlpation1: 'From July 2020. 07. 01 to October 2021. 10 .01',
    particlpation2: 'Users who meet one of the following three requirements are eligible',
    particlpation3: 'A :  Transfer tokens via BitKeep at least twice are deemed Class A users;    ',
    particlpation4: 'B :  Those who have successfully used BKswap are deemed Class B users;',
    particlpation5: 'C：Users who deposit NFT assets on BitKeep are considered Class C users.',
    rules: 'Activity Rules',
    rules1: '1.Join BitKeep official telegram and discord community;',
    rules2: '2.During the airdrop event, users who meet the conditions of participation will be rewarded if they use BKSwap successfully;',
    rules3: '3.Class A qualified users will get 125 BKB for completing the above tasks, Class B qualified users will get 1,250 BKB for completing the above tasks, and Class C qualified users will get 250 BKB for completing the above tasks.',
    note: '* BitKeep has the final decision right and the right to interpret the rules of this promotion. We reserve the right to disqualify any users who cheat, suspected of cheating, or violate any of BitKeep\'s rules and regulations.',
    airdropTitle: 'Receive BKB airdrop',
    notStart: 'The airdrop activity has not yet started'
  },
  'mining':{
    loading: "loading...",
    success: 'Successfully',
    pull: 'Loose to refresh...',
    coundown: 'Countdown',
    miningTitle: 'Trading Reward',
    comingsoon: 'Upcoming',
    inProgress: 'Live',
    startCountdown: 'Start countdown ',
    endCountdown: 'End countdown ',
    rewardPool: 'Trading Data',
    update: 'Update',
    will: 'Reward distribution within this week',
    activity: 'End',
    Introduce: 'Introduce',
    tradingVolume: 'Trading Volume',
    tradingIn: 'Trading in today',
    userTodayValue: 'Today Trade Volume',
    myRewards: 'My Rewards',
    totalTrading: 'Total Trade Volume',
    todyVolue: 'Today Volue',
    totalRewards: 'Total Rewards',
    yesterdayRewards: 'Today Rewards',
    miningRuleTitle: 'Event Rules',
    miningRule: 'Data used to calculate Trading Rewards of BKB. Trading Rewards are provided by the BitKeep Wallet.Overview of the.…',
    learnMore: 'Learn more',
    Introduce: 'Introduce',
    day: 'Your Transaction amount a day',
    swapNow: 'Swap Now',
    phase: 'Phase {v}',
    historyTitle: 'History',
    startTime: 'Start',
    overTime: 'End',
    tradeValue: 'Trade Value',
    tradeReward: 'Trade Reward',
    tradeUser: 'Trade User',
    produced: 'BKB produced',
    notStart: 'Not Start',
    ruleTitle: 'What is BKSwap Trading Reward?',
    ruleContent: 'The BKB reward users obtain when they finish a BKSwap transaction. BitKeep will reward users who trade on BKSwap according to the smart contract distribution rules to encourage users to adopt BKB and participate in related events. At the same time, we will extend the application scenarios of BKB to further develop the blockchain wallet ecosystem in the Web3.0 era.',
    how: 'How to get BKSwap Trading Reward?',
    how1: '1. Please refer to',
    how11: ' for the latest BKSwap tutorial.',
    // how1: `1. Please refer to <a href='https://www.youtube.com/watch?v=_5expUiioV8' style="color: #495BFF">https://www.youtube.com</a> for the latest BKSwap tutorial.`,
    how2: '2. Rules about the trading rewards:',
    howContent: 'There are 3 levels of BKSwap trading rewards:',
    Objectives1: 'When the total transaction amount on BKSwap on a given day is ≤ 5 million USDT equivalent, then according to the contract rules, BitKeep will provide a sum of BKB equal to 300% of the transaction fee of the day as the reward of the day. All users participated in BKSwap transactions on the day will get a proportionate share (depending on each individual user’s transaction amount)',
    Objectives2: 'When the total transaction amount on BKSwap on a given day falls between 5 million and 20 million USDT equivalent, then according to the contract rules, BitKeep will provide a sum of BKB equal to 200% of the transaction fee of the day as the reward of the day. All users participated in BKSwap transactions on the day will get a proportionate share',
    Objectives3: 'When the total transaction amount on BKSwap on a given day exceeds 20 million USDT equivalent, then according to the contract rules, BitKeep will provide a sum of BKB equal to 100% of the transaction fee of the day as the reward of the day. All users participated in BKSwap transactions on the day will get a proportionate share',
    how3: '3. The time of the first round of BKSwap Trading Reward event',
    OverviewContent: 'The first round of BKSwap Trading Reward event will be held from Nov. 29, 2021 at 12:00 PM (GMT+8) to Dec. 3, 2021 at 12:00 PM (GMT+8)',
    how4: '4. How are the trading rewards calculated?',
    how4Content: 'The trading reward is calculated in real time, and users can check it at any time on the "Trading Reward" page. The settlement cycle of the event is 24 hours. Users will receive their trading rewards for the previous day at 12:00 PM (GMT+8) every day. For example: Users will receive trading rewards for Nov. 29, 2021 on Nov. 30, 2021 at 12:00 (PM). It will be the same for each following day. For the rewards for Dec. 3, 2021, users will receive them on Doc. 4, 2021 at 12:00 (PM) (exactly one day after the event ends)',
    how5: '5. How to check your trading rewards?',
    how5Content: 'Go to the "Trading Reward" page in BitKeep to see everything about your gains.',
    how6: '6. How to claim your trading rewards?',
    how6Content: 'Go to "Trading Reward" page and tap "Claim" button to claim your rewards.',
    FQATitle: 'Frequently Asked Questions (FAQ)',
    FQATitle1: '1.How is my trading rewards calculated?',
    FQAContent1: 'The trading reward is calculated in real time, and users can check it at any time on the "Trading Reward" page.',
    FQATitle2: '2. When will the first round of the BKSwap Trading Reward event be held?',
    FQAContent2: 'The first round of BKSwap Trading Reward will be held from Nov. 29, 2021 at 12:00 PM (GMT+8) to Dec. 3, 2021 at 12:00 PM (GMT+8), for a total of 4 days. Please stay tuned since there will be subsequent rounds.',
    FQATitle3: '3. Are the trading rewards settled in real time?',
    FQAContent3: 'The trading rewards are calculated in real time. Users can check the results at any time on the "Trading Reward" page. But the trading reward settlement cycle is 24 hours, users will receive their trading rewards for the previous day at noon every day.',
    FQATitle4: '4. I have participated in BKSwap Trading Reward event, where can I see the BKB I’ve been rewarded?',
    FQAContent4: 'After claiming your BKB rewards, please go to 「Cloud Wallet」to check them. If you haven\'t activated your「Cloud Wallet」, simply tap the NAV bar in the top right corner of the landing page, then choose 「Cloud Wallet」 to activate it.',
    FQAContent41: 'You can also transfer your BKB from your「Cloud Wallet」 to a ETH/BSC address. For more how-to information about BitKeep Cloud Wallet, please tap the link: https://bitkeepblog.medium.com/?p=79771d2baedb',
    FQATitle5: '5. What are the ways to obtain BKB?',
    FQAContent5: 'There will be another event, namely the BKB Blind Box event. Users can invite friends to unlock blind boxes containing different amounts of BKB. Both the users and the contributors can get their share of BKB. BitKeep will continue to cooperate with other token projects to jointly hold airdrops and other events, and give away BKB rewards. Also, our BKB Staking event is right around the corner. Don’t miss it.',
    FQATitle6: '6. What does the future hold for BKB?',
    FQAContent6: 'BKB holders will be able to pay their gas fees with BKB, and enjoy a convenient payment experience in our cross-chain Bridge. Also:',
    FQAContent61: 'BKB holders will have the privilege to participant in weekly BitKeep airdrops;',
    FQAContent62: 'BKB holders who put their NFT assets in BitKeep Wallet will be eligible to participate in NFT lottery draws;',
    FQAContent63: 'BKB holders have the opportunity to participate in IWO of high-quality projects through staking their BKBs;',
    FQAContent64: 'BKB holders will be rewarded for trading;',
    FQAContent65: 'BKB holders will get trading fee discounts for BKSwap transactions;',
    FQAContent66: 'BKB holders will get BitKeep Defi Rate-up Coupons;',
    FQAContent67: 'BKB holders will be rewarded for staking;',
    FQAContent68: 'and more are coming in the future.',
    FQAContentNote: 'Note: Users must activate their cloud wallet in BitKeep app to receive BKBs (if you have not activated your cloud wallet, simply tap the NAV bar in the top right corner on the landing page, then choose Cloud Wallet to activate it)',
    about: 'About BKB',
    viewAll: 'View All',
    pickUp: 'Pick up',
    aboutContent1: 'Holding BKB will enjoy ecological governance rights, and it is also the identity proof of BitKeep\'s ecological payment method and membership rights.',
    aboutContent2: 'BKB can be used in scenarios such as the purchase of multiple public chain resources, the unlocking of the VIP function of the wallet, and the payment of BitKeep advertising fees.',
    distribution: 'BKB issuance and distribution',
    total: 'BKB total supply: ',
    mining: 'Compound mining',
    community: 'Community',
    tram: 'Team and early investors',
    partner: 'Partner',
    eco: 'Ecosystem building',
    hold: 'Hold BKB equity',
    hold1: 'Enjoy ecological governance rights',
    hold2: 'Ecological payment method',
    hold3: 'Member\'s rights and identity certificate',
    hold4: 'Public chain resource purchase',
    hold5: 'Unlock the VIP function of the wallet',
    hold6: 'Advertising fee payment',
    hold7: 'Participate in BitKeep IWO',
    hold8: 'Pledge to enter the exclusive channel of high-quality assets',
    appreciation: 'BKB value enhancement',
    appreciationSwap: 'Swap commission deduction',
    appreciationCoin: 'Payment',
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
    know: 'OK', 
    myTraded: 'My traded value',
    totalDistributed: 'Total distributed',
    yesterday: 'Yesterday',
    claim: 'Claim',
    ClaimRewards: 'Claim Rewards',
    confirm: 'Confirm',
    noData: 'No data',
    ruleDetail: 'Note: The following transactions are not considered eligible for trading rewards',
    ruleDetail1: `1. Cross-chain swaps, including：<br/>  (1) swapping the same coin on different chains, e.g. BSC-USDT to ETH-USDT swaps;<br/>  (2) swapping different coins on different chains, such as through Swft channels, or BNB to ETH swaps.`,
    ruleDetail2: '2. Burning coin transactions. Some coins are based on a burning mechanism, and they might be requited to be partially burnt whenever there is a transaction, which makes it different to count the exact transaction amount. Theses coins are therefore excluded from this BKSwap Trading Reward event.',
  },
  'nft':{
    nftTitle: 'NFT Lottery',
    getEligibility: 'Get eligibility',
    drawNow: 'Draw now',
    getNft: 'Get NFT',
    not: 'Did not win',
    qualificationTime: 'Qualification time',
    lotteryTime: 'Lottery time',
    rules: 'Activity Rules',
    rule1: 'To participate in the lucky draw in the NFT section, the participating users must meet the following two conditions:',
    rule2: '1. Users must hold BKB (BKB can be obtained through airdrops and inviting friends)',
    rule3: '2. Must deposit NFT assets',
    rule4: 'Users who meet the above two conditions are eligible for each NFT sweepstakes by BK',
    note: '* BitKeep has the final decision right and the right to interpret the rules of this promotion. We reserve the right to disqualify any users who cheat, suspected of cheating, or violate any of BitKeep\'s rules and regulations.',
    dialogTitle: 'Congratulations on your winning an NFT!',
    btn: 'OK',
    endCountdown : 'End countdown'
  },
  'blindboxInvite': {
    inviteTitle: 'Invite Friends',
    myRewards: 'My Rewards',
    invitedNumber: 'Invited number',
    tokenRewards: 'Token Rewards',
    NFTRewards: 'NFT Rewards',
    boxRewards: 'Blind Box Rewards',
    inviteFriend: 'Invite Friend',
    inviteFriends: 'Invite Friends',
    inviteLink: 'Invite Link',
    inviteFriendsNow: 'Invite friends now',
    inforce: 'In force',
    inactivated: 'Inactivated',
    Address: 'Address',
    State: 'State',
    Time: 'Time',
    nomore: 'No More',
    loading: 'Loading...',
  }
}
