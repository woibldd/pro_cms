module.exports = {
  base: {
    loading: "Loading",
    no_more: "No more",
    success: 'Successfully',
    networkErro:"The Internet has gone awry",
    copied: 'Copied',
    copiedError: 'Some error occurred'
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
      "InviteFriendsNow": "Invite my friends now",
      "OpenFriendsImmediately": "Help open the blind box",
      "ViewAssets":"View assets",
      "SuccessView":"Success! Please view assets", //
      // "OpenimmediatelyText": "Open the blind box immediately"
      "savePicture":"Save Picture",  //
      "ShareLink":"Share Link",  //
      "Downloadnow":"Download now",

    },
    stepDetail:[{
      title: 'Step 1 <br/>Open your Cloud Wallet',
      content: 'Download BitKeep App. In BitKeep app, tap the Nav-bar in the upper right corner, click “Cloud Wallet” to enter the cloud wallet page.',
      img: 'http://cdn.bitkeep.vip/u_b_f11e6760-599a-11ec-bdbc-7722494dfa58.jpeg',
    },{
      title: 'Step 2 <br/>Activate your Cloud Wallet',
      content: 'Enter the password as prompted to activate the cloud wallet,Tap BKB to go to BKB page.',
      img: 'http://cdn.bitkeep.vip/u_b_f12174a0-599a-11ec-bdbc-7722494dfa58.jpeg',
    },{
      title: 'Step 3 <br/>Copy your Cloud Wallet address',
      content: 'Tap Deposit to go to transfer page, and choose “Copy Address”,go back to the contribution page and fill in yourBitKeep Cloud Wallet address, then tap Contribute Now.',
      img: 'http://cdn.bitkeep.vip/u_b_f11f03a0-599a-11ec-bdbc-7722494dfa58.jpeg',
    }
  ],
    title:{
      "myBlindboxText": "My blind box"
    },
    ActivityBlindboxList: {
      "myBlindboxText": "My blind box",
      "RaidersText": "Raiders",
      "DigitalBlindBoxText": "Digital blind box",

      "blindBoxNumText": "{surplus} done <span class='color_red'>{invite}</span> to go",
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
      "ShareWithMe": "By invitation",
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
      "blindBoxNumText": "{surplus} done <span class='color_red font-20'>{invite}</span> to go",
      "inputAddressPlaceholader": "Entry BitKeep Cloud Wallet adress",
      "NoAddressDownload": "Tap here to create <br/>👉   your BitKeep Cloud Wallet 👈",
      "HelpSuccessETH":"BitKeep Cloud Wallet adress",
      "InviteSuccessETH": "The ETH address has been invited",
     "FinalInterpretation": "BitKeep owns the final interpretation right of this event.",

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
        "Each blind box contains a random number of BKB",
        `Share this link to invite your friends, and ask them to fill in valid BitKeep Cloud Wallet address (Click the link to create a BitKeep Cloud Wallet <a href='https://bit.ly/BitKeepCloudWallet' class='color_red'>https://bit.ly/BitKeepCloudWallet</a> )`,
        "With five friends manage to make contribution, the blind box will unlock, and you and your friends will get a share of the BKB inside.",
        "These BKB will be deposited in your Cloud Wallet. If you have’t activated your Cloud Wallet, please tap Cloud Wallet in the NAV bar to activate it.",
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
    appreciationValut: 'Vault',
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
    how2: '2. Rules of the event:',
    howContent: 'Invitation (Prize pool: 30WBKB): The Trading Reward events will last for 5 days. The invitation reward pool will be shared by all users with successful invitations. The rewards are calculated as follows:',
    howContent1: 'For each day, a user can get: 15*number of successfully invited users + (sum of the transaction volume of all his/her invitees/GMV of all invited users)*X<br/>in which, we consider “GMV of all invited users” as Y',
    Objectives1: 'If Y is ≥ 2M and ≤ 5M USDT equivalent, X=10,000BKB',
    Objectives2: 'If Y is ≥ 50M and ≤ 20M USDT equivalent, X=20,000BKB',
    Objectives3: 'If Y is ≥ 20M and ≤ 30M USDT equivalent, X=20,000BKB',
    Objectives4: 'If Y is > 30M USDT equivalent, X=40,000BKB',
    howContent2: 'BKSwap transaction rewards are divided into 3 levels, as follows:',
    Objectives11: ' When the total transaction amount on BKSwap on a given day is ≥ 5 million USDT equivalent and ≤ 10 million USDT equivalent, then according to the contract rules, BitKeep will provide a sum of BKB equal to 300% of the transaction fee of the day as the reward of the day. All users participated in BKSwap transactions on the day will get a proportionate share (depending on each individual user’s transaction amount)',
    Objectives12: ' When the total transaction amount on BKSwap on a given day falls between 10 million and 40 million USDT equivalent, then according to the contract rules, BitKeep will provide a sum of BKB equal to 200% of the transaction fee of the day as the reward of the day. All users participated in BKSwap transactions on the day will get a proportionate share',
    Objectives13: ' If the total transaction amount of BKSwap on the day is greater than 40 million USDT equivalent, according to the contract rules, BKB will be released at 100% of the transaction fee of the day as the total reward of the day, and all users participating in the transaction on the day will be divided proportionally',
    how3: '3. Duration:',
    OverviewContent: 'The duration for the second round of BKSwap Trading Reward event: Dec. 20, 2021 at 15:00-Dec. 25 at 23:00 (GMT+8)',
    // how4: '4. How are the trading rewards calculated?',
    // how4Content: 'The trading reward is calculated in real time, and users can check it at any time on the "Trading Reward" page. The settlement cycle of the event is 24 hours. Users will receive their trading rewards for the previous day at 12:00 PM (GMT+8) every day. For example: Users will receive trading rewards for Nov. 29, 2021 on Nov. 30, 2021 at 12:00 (PM). It will be the same for each following day. For the rewards for Dec. 3, 2021, users will receive them on Doc. 4, 2021 at 12:00 (PM) (exactly one day after the event ends)',
    // how5: '5. How to check your trading rewards?',
    // how5Content: 'Go to the "Trading Reward" page in BitKeep to see everything about your gains.',
    // how6: '6. How to claim your trading rewards?',
    // how6Content: 'Go to "Trading Reward" page and tap "Claim" button to claim your rewards.',
    FQATitle: 'Frequently Asked Questions (FAQ)',
    FQATitle1: '1. When are the rewards distributed?',
    FQAContent1: 'The trading reward is calculated in real time, and users can check it at any time on the "Trading Reward" page. Users will receive their trading rewards for the previous day at 00:00 (GMT+8) every day. For example: Users will receive trading rewards for Dec. 21, 2021 on Dec. 20, 2021 at 00:00(GMT+8). It will be the same for each following day. For the rewards for Dec. 25, 2021, users will receive them on Dec. 26, 2021 at 12:00(GMT+8) (exactly one day after the event ends).',
    FQATitle2: '2. How to check your trading rewards?',
    FQAContent2: 'Go to the "Trading Reward" page in BitKeep to see everything about your gains.',
    FQATitle3: '3. How to claim your trading rewards?',
    FQAContent3: 'Go to "Trading Reward" page and tap "Claim" button to claim your rewards.',
    FQATitle4: '4. How to invite?',
    FQAContent4: 'In the Trading Reward page, tap Invite friend now, and then copy the invitation link or share the invitation poster. Your friend (new user) confirms by downloading and installing the BitKeep app and filling in his/her ETH address. Then he/she will try to make a valid transaction (with a pre-settlement trading amount of ≥100U) with BKSwap. After that, you will get your invitation rewards.',
    FQAContent41: 'You can also transfer your BKB from your「Cloud Wallet」 to a ETH/BSC address. For more how-to information about BitKeep Cloud Wallet, please tap the link: https://bitkeepblog.medium.com/?p=79771d2baedb',
    FQATitle5: '5. How is my invitation rewards calculated?',
    FQAContent5: 'For each day, a user can get: 15*number of successfully invited users + (sum of the transaction volume of all his/her invitees/GMV of all invited users)*X; in which, we consider “(sum of the transaction volume of all his/her invitees/GMV of all invited users)” as Y',
    FQAContent51: 'If Y is ≥ 2M and ≤ 5M USDT equivalent, X=10,000BKB',
    FQAContent52: 'If Y is ≥ 50M and ≤ 20M USDT equivalent, X=20,000BKB',
    FQAContent53: 'If Y is ≥ 20M and ≤ 30M USDT equivalent, X=20,000BKB',
    FQAContent54: 'If Y is > 30M USDT equivalent, X=40,000BKB',
    FQAContentNote: 'Note: An invitation will be considered valid only if the new user make a valid transaction(with a pre-settlement trading amount of ≥100U) with BKSwap',
    FQATitle6: '6. When are the invitation rewards calculated?',
    FQAContent6: 'Users will receive their invitation rewards for the previous day at 00:00 (GMT+8) every day.',
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
    appreciationValut: 'Vault',
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
    ClaimRewardsub: 'Rewards will be settled at 24:00 each day',
    confirm: 'Confirm',
    noData: 'No data',
    invitationReward: "My Invitation Reward",
    inviteNumber1: 'Total invite Rewards',
    inviteNumber2: 'Yesterday invite Rewards',
    inviteNumber3: 'Total invite Trading Rewards',
    inviteNumber4: 'Yesterday Rewards',
    tradingRewards: "Trading Rewards",
    invitationRewards: "Invitation Rewards",
    viewDetails: "View Dtails",
    inviteFriendsNow: "Invite friends now",
    ruleDetail: 'Note: The following transactions are not considered eligible for trading rewards',
    ruleDetail1: `1. Cross-chain swaps, including：<br/>  (1) swapping the same coin on different chains, e.g. BSC-USDT to ETH-USDT swaps;<br/>  (2) swapping different coins on different chains, such as through Swft channels, or BNB to ETH swaps.`,
    ruleDetail2: '2. Burning coin transactions. Some coins are based on a burning mechanism, and they might be requited to be partially burnt whenever there is a transaction, which makes it different to count the exact transaction amount. Theses coins are therefore excluded from this BKSwap Trading Reward event.',
    invitationPool: 'Invitation Rewards Pool',
    invitationPoolContent: 'Used for the second phase of the invite-and-earn event',
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
    endCountdown : 'End countdown',
  },
  'blindboxInvite': {
    inviteTitle: 'Invite Friends',
    myRewards: 'My Rewards',
    invitedNumber: 'Invited friends',
    tokenRewards: 'Token Rewards',
    NFTRewards: 'NFT Rewards',
    boxRewards: 'Blind Box Rewards',
    inviteFriend: 'Invite Friend',
    inviteFriends: 'Invite Friends',
    inviteLink: 'Invitation Link',
    inviteFriendsNow: 'Invite your friends now',
    savePicture: 'Save Picture',
    ShareLink:"Share Link",  
    inforce: 'Activated',
    inactivated: 'Inactivated',
    Address: 'Address',
    State: 'State',
    Time: 'Time',
    nomore: 'No More',
    loading: 'Loading...',
    rewardTitle: 'Token Rewards',
    RuleTitle: 'Invite Rules',
    know: 'OK',
    toEarn: 'Invite friends to earn BKB',
    rewardsMore: 'Friends trading rewards more BKB',
    Poster: 'Scan QRcode',
    downReward: 'Download BitKeep Wallet Earn crypto asset rewards',
    imgText: 'Hi, friend, here’s a Crypto Wallet to earn you crypto assets',
    detailWallet: 'A crypto wallet that takes no effort to navigate',
    detailWallet1: 'Securely store encrypted assets',
    detailWallet2: 'Convenient and easy-to-use BKSwap',
    detailWallet3: 'Support 721 NFT',
    detailWallet4: '7000+ DApps ecosystem',
    yourFrinedInvite: 'Your friend invites you to use BitKeep multi-chain wallet',
    friendsText: 'Trade with BitKeep to earn BKB',
    detailInput: 'Please input your ETH address to join BitKeep',
    detailBtn: 'Accept the invitation',
    detailJust: 'Have no ETH address yet? Just download BitKeep app and create a wallet',
    detailWhy: 'Why choose BitKeep wallet?',
    detailContro: 'Control your digital assets',
    detailUl1: 'A safe storage for your tokens and NFTs',
    detailUl2: 'BitKeep supports 30+ main chains, 200,000+ tokens, and 7000+ DApps',
    detailUl3: 'opening the world of DeFi for our users',
    detailCrypto: 'All crypto assets can be traded with BKSwap',
    detailAny: 'Easily swap and trade multi-chain cryptocurrencies at any time',
    detailAggregate: 'Aggregate 30+ mainstream DEXs such as Uniswap, Sushiswap, PancakeSwap, etc.',
    detailNFT: 'Store your NFTs',
    detailNFTCon: 'BitKeep provides secure and reliable crypto asset management services for millions of users across more than 168 countries and regions',
    downText: 'Congratulations, you have successfully accepted the invitation! Use BitKeep wallet now to enjoy your blockchain lifestyle',
    foot1:'BitKeep Provides Service Worldwide',
    foot2:'It has provided safe and reliable crypto asset management service to millions of users in more than 168 countries around the world',
    foot3:'Number of Users',
    foot4:'Transactions Amount',
    foot5:'Covering Countries and Regions',
    inviteRuleTitle: 'What makes an valid invitation Your friend (new user) confirms?',
    ruleDetail: 'The user imports his/her wallet address or address has been imported or create a BitKeep wallet',
    ruleDetail1: 'The address is created within 24 hours',
    ruleDetail2: 'The user’s trading volume on BKSwap is larger than or equal to 10 USDT',
    myInviteRuleTitle: 'How is my invitation rewards calculated?',
    myRuleDetail: 'For each day, a user can get: 15*number of successfully invited users + (sum of the transaction volume of all his/her invitees/GMV of all invited users)*X; in which, we consider “(sum of the transaction volume of all his/her invitees/GMV of all invited users)” as Y',
    myRuleDetail1: 'If Y is ≥ 2M and ≤ 5M USDT equivalent, X=10,000BKB',
    myRuleDetail2: 'If Y is ≥ 50M and ≤ 20M USDT equivalent, X=20,000BKB',
    myRuleDetail3: 'If Y is ≥ 20M and ≤ 30M USDT equivalent, X=20,000BKB',
    myRuleDetail4: 'If Y is > 30M USDT equivalent, X=40,000BKB',
    myRuleDetail5: 'Note: An invitation will be considered valid only if the new user make a valid transaction(with a pre-settlement trading amount of ≥100U) with BKSwap',
    toast2: 'Sorry, this address has been invited',
    toast0: ' Sorry, this address has reached the maximum invite limit',
    emptyToast: 'Address field cannot be empty'
  },
  'staking':{
    stakingTitle: 'BKB Staking',
    AddPoolTitle: 'Add Pool',
    MyPoolsTitle: 'My Pools',
    stakingImg: 'Stake BKB Earn BKB',
    Introduce: 'Introduce',
    content: 'BitKeep has launched BKB Staking to provide users with opportunities to make money. BKB holders who stake there BKB are getting profits from the BKB pools every week. There will be many other projects accessible in the future, allowing you to earn more. When staking your BKB, you may choose from 4 different staking pools with maturity of 7 days, 30 days, 60 days, and 90 days. You will enjoy an APY of 20%, 30%, 40%, 50%, respectively. Your profit will be calculated and distributed to your Cloud Wallet at maturity.',
    Data: 'Data',
    StakedBKB: 'Staked BKB',
    totalSupply: 'BKB Total Supply',
    EndsIn: 'Ends in',
    APY: 'APY',
    YourStakeAmount: 'Your Stake Amount',
    Duration: 'Duration（Days）',
    StakeNow: 'Stake now',
    SoldOut: 'Sold Out',
    ComingSoon: 'Coming soon',
    EthereumChainPool: 'Ethereum Chain Pool',
    BSCChainPool: 'BSC Chain Pool',
    StakeAmount: 'Stake Amount',
    Available: 'Available',
    MAX: 'Max',
    StakeAmountLimiation: 'Stake Amount Limiation',
    Minimum: 'Minimum',
    Maximum: 'Maximum',
    Summary: 'Summary',
    StakeDate: 'Stake Date',
    ValueDate: 'Value Date',
    InterestPeriod: 'Interest Period',
    InterestEndDate: 'Interest End Date',
    RedemptionDate: 'Redemption Date',
    EstimatedInterests: 'Estimated Interests',
    Staking: 'Staking',
    Activity: 'Activity',
    BeExpired: 'Be expired',
    Pledge: 'Pledge',
    Durations: 'Duration',
    PledgeDueDate: 'Pledge Due Date',
    CurrencyReward: 'Currency Reward',
    Remove: 'Remove',
    Unstake: 'Unstake',
    Reward: 'Reward',
    Operate: 'Operate',
    Add: 'Add',
    RemovePool: 'Remove Pool',
    getBKB: 'Congratulations！You get',
    removeBefore: ' If you remove before the event ends<br/> you\'ll loss all Interests.<br/>Are you sure to remove？',
    Interests: 'Interests',
    Cancel: 'Cancel',
    Confirm: 'Confirm',
    Days: 'Days',
    authorization: 'You canceled signature authorization!',
    stakeAmount: 'Entry stake amount',
    know: 'OK',
  },
  'trading':{
    tradingTitle: 'Trading Reward',
    know: 'OK',
    ComingSoon: 'Coming soon',
    swapNow: 'Swap Now',
    claim: 'Claim',
    tradingRule: 'Mining Rule',
    learnMore: 'Learn more',
    finished: 'Finished',
    Live: 'Live',
    Upcoming: 'Upcoming',
    Past: 'Past',
    UnclaimedReward: 'Unclaimed reward',
    Chain: 'Bianance Smart Chain',
    Ending: 'Ending in',
    Start: 'Start time',
    Time: 'Time',
    Reward: 'Reward',
    YourTrading: 'Your Trading value',
    transaction: 'Total transaction amount',
    GetsBKB: 'Gets BKB number',
    in: 'in'
  }
}
