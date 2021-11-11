module.exports = {
  base: {
    loading: "로딩 중",
    no_more: "더 이상은 없어",
    networkErro:"인터넷이 엉망이 되었다",
    success: '새로고침 성공',
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
    loading: "로딩 중",
    success: '새로고침 성공',
    pull: '새로 고치다',
    coundown: '카운트다운',
    miningTitle: '무역 채굴',
    comingsoon: '출시 예정',
    inProgress: '진행 중',
    startCountdown: '카운트다운 시작',
    endCountdown: '카운트다운 종료',
    rewardPool: '보상 풀',
    update: '업데이트',
    will: '이번주 내 보상 지급',
    activity: '활동 종료',
    tradingVolume: '거래량',
    tradingIn: '오늘의 거래량',
    myRewards: '내 무역 보상',
    totalTrading: '총 거래량',
    todyVolue: '오늘의 가치',
    totalRewards: '총 보상',
    yesterdayRewards: '오늘의 보상',
    miningRuleTitle: '마이닝 규칙',
    miningRule: 'BKB의 거래 보상을 계산하는 데 사용되는 데이터입니다. 거래 보상은 BitKeep Wallet에서 제공합니다.개요...',
    learnMore: '더 알아보기',
    Introduce: '소개하다',
    day: '하루 거래 금액',
    swapNow: '지금 교환',
    phase: '단계 {v}',
    historyTitle: '역사',
    startTime: '시작',
    overTime: '끝',
    tradeValue: '거래 가치',
    tradeReward: '무역 보상',
    tradeUser: '거래 사용자',
    produced: 'BKB 생산',
    notStart: '시작하지 않음',
    ruleTitle: '보상 거래',
    ruleContent: '트레이딩 리워드 프로그램 개요.',
    ruleRewards: '제네시스 블록의 총 공급량의 20%(120,000,000 BKB)가 BKSWap에서 거래하는 사용자에게 보상하는 데 사용됩니다.',
    ObjectivesTitle: '목표',
    Objectives1: 'BKswap BKswap에서 거래하는 사용자에게 인센티브 제공',
    Objectives2: 'BKSwap 및 시장 유동성의 사용 가속화',
    OverviewTitle: '개요',
    OverviewContent: 'BitKeep은 BKSwap의 거래 데이터를 기반으로 4주 주기로 자격을 갖춘 사용자에게 120,000,00 BKB를 배포합니다.',
    FQATitle: '법률학',
    FQATitle1: '1.거래 보상을 받을 자격이 있는 사람은 누구입니까?',
    FQAContent1: 'BKswap의 모든 거래자는 거래 보상으로 BKB를 받을 수 있습니다.',
    FQATitle2: '2.Trading Rewards 프로그램에서 얼마나 많은 BKB를 벌었습니까?',
    FQAContent2: '현재 시대에 사용자는 하루에 거래 가치와 예상 거래 보상을 볼 수 있습니다.',
    FQATitle3: '3.내 트레이딩 리워드는 어떻게 청구합니까? 적립한 BKB는 언제 출금 및 양도할 수 있나요?',
    FQAContent3: 'Trading Rewards를 통해 획득한 BKB 토큰은 매일 종료 시 양도할 수 있습니다. BKB 토큰은 24시 클라우드 지갑으로 전송되므로 청구를 클릭할 필요가 없습니다.',
    about: 'BKB 소개',
    viewAll: '모두보기',
    pickUp: '찾다',
    aboutContent1: 'BKB를 보유하는 것은 생태적 거버넌스 권리를 향유하게 되며, BitKeep의 생태적 지불 방법 및 회원권의 신원 증명이기도 합니다.',
    aboutContent2: 'BKB는 여러 퍼블릭 체인 리소스 구매, 지갑의 VIP 기능 잠금 해제, BitKeep 광고비 지불과 같은 시나리오에서 사용할 수 있습니다.',
    distribution: 'BKB 발행 및 유통',
    total: 'BKB 총 공급:',
    mining: '복합 채굴',
    community: '지역 사회',
    tram: '팀 및 초기 투자자',
    partner: '파트너',
    eco: '생태계 구축',
    hold: 'BKB 지분 보유',
    hold1: '생태 거버넌스 권리를 누리십시오',
    hold2: '생태적 지불 방법',
    hold3: '회원의 권리 및 신분증',
    hold4: '퍼블릭 체인 리소스 구매',
    hold5: '지갑의 VIP 기능 잠금 해제',
    hold6: '광고비 결제',
    hold7: 'BitKeep IWO 참여',
    hold8: '고품질 자산의 독점 채널 진입 약속',
    appreciation: 'BKB 가치 향상',
    appreciationSwap: '스왑 수수료 공제',
    appreciationCoin: '지불',
    appreciationPool: '다중 스테이킹 풀',
    appreciationValut: '통화',
    more: 'BKB에 대한 추가 정보',
    website: '공식 웹 사이트',
    paper: '백지',
    twitter: '트위터',
    github: '깃허브',
    telegram: '전보',
    facebook: '페이스북',
    explorer: '블록 탐색기',
    know: '좋아요', 
    myTraded: '나의 거래 가치'
  }
}
