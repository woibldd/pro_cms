module.exports = {
  base: {
    loading: "로딩 중",
    no_more: "더 이상은 없어",
    networkErro:"인터넷이 엉망이 되었다",
    success: '새로고침 성공',
    copied: '복사됨',
    copiedError: '일부 오류가 발생했습니다.'
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
      "ShareWithMe": "Shared with me",
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
    miningTitle: '거래 보상',
    comingsoon: '다가오는',
    inProgress: '진행 중',
    startCountdown: '카운트다운 시작',
    endCountdown: '카운트다운 종료',
    rewardPool: '거래 데이터',
    update: '업데이트',
    will: '이번주 내 보상 지급',
    activity: '끝',
    tradingVolume: '거래량',
    tradingIn: '오늘 거래',
    userTodayValue: '오늘 거래량',
    myRewards: '내 보상',
    totalTrading: '총 거래량',
    todyVolue: '오늘의 가치',
    totalRewards: '총 보상',
    yesterdayRewards: '오늘의 보상',
    miningRuleTitle: '이벤트 규칙',
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
    ruleTitle: 'BKSwap 거래 보상이란 무엇입니까?',
    ruleContent: 'BKB 보상 사용자는 BKSap 거래를 완료할 때 획득합니다. BitKeep은 사용자가 BKB를 채택하고 관련 이벤트에 참여하도록 장려하기 위해 스마트 계약 배포 규칙에 따라 BKSwap에서 거래하는 사용자에게 보상합니다. 동시에 BKB의 응용 시나리오를 확장하여 Web3.0 시대의 블록체인 지갑 생태계를 더욱 발전시킬 것입니다.',
    how: 'BKSwap 거래 보상은 어떻게 받나요?',
    how1: '1. 최신 BKSwap 튜토리얼은 ',
    how11: '을 참조하세요.',
    // how1: `1. 최신 BKSwap 튜토리얼은 <a href='https://www.youtube.com/watch?v=_5expUiioV8' style="color: #495BFF">https://www.youtube.com</a>을 참조하세요.`,
    how2: '2. 이벤트 규칙:',
    howContent: '초대 (상금 풀: 30WBKB): 트레이딩 리워드 이벤트는 5일간 진행됩니다. 초대 보상 풀은 초대에 성공한 모든 사용자가 공유합니다. 보상은 다음과 같이 계산됩니다.',
    howContent1: '매일 사용자는 다음을 얻을 수 있습니다. 15*성공적으로 초대된 사용자 수 + (모든 초대 대상자의 거래량 합계/초대된 모든 사용자의 GMV)*X<br/>여기서 "GMV 초대된 모든 사용자"를 Y로',
    Objectives1: 'Y가 ≥ 2M이고 ≤ 5M USDT에 해당하는 경우 X=10,000BKB',
    Objectives2: 'Y가 ≥ 50M이고 ≤ 20M USDT에 해당하는 경우 X=20,000BKB',
    Objectives3: 'Y가 ≥ 20M이고 ≤ 30M USDT에 해당하는 경우 X=20,000BKB',
    Objectives4: 'Y가 > 30M USDT에 해당하는 경우 X=40,000BKB',
    howContent2: 'BKSwap 거래 보상은 다음과 같이 3단계로 나뉩니다.',
    Objectives11: ' 특정 날짜에 BKSwap의 총 거래 금액이 ≥ 5백만 USDT 및 ≤ 1천만 USDT에 해당하는 경우 BitKeep은 계약 규칙에 따라 당일 거래 수수료의 200%에 해당하는 BKB 합계를 다음과 같이 제공합니다. 오늘의 보상. 당일 BKSwap 거래에 참여한 모든 사용자는 비례 지분을 얻습니다(각 개별 사용자의 거래 금액에 따라 다름).',
    Objectives12: ' 특정 날짜에 BKSwap의 총 거래 금액이 1000만~4000만 USDT에 해당하는 경우 BitKeep은 계약 규칙에 따라 당일 거래 수수료의 200%에 해당하는 BKB 합계를 보상으로 제공합니다. 그 날. 당일 BKSwap 거래에 참여한 모든 사용자는 비례 배분을 받게 됩니다.',
    Objectives13: ' 당일 BKSwap의 총 거래 금액이 4000만 USDT 이상일 경우 계약 규칙에 따라 BKB는 당일 총 보상으로 당일 거래 수수료의 100%로 해제되며 참여하는 모든 사용자는 당일 거래에서 비례하여 나누어집니다.',
    how3: '3. 지속:',
    OverviewContent: 'BKSwap 트레이딩 리워드 2차 이벤트 기간: 2021년 12월 20일 01:00 ~ 2021년 12월 24일 23:00(EST)',
    FQATitle: '자주 묻는 질문(FAQ)',
    FQATitle1: '1. 보상은 언제 지급되나요?',
    FQAContent1: '거래 보상은 실시간으로 계산되며, 이용자는 "거래 보상" 페이지에서 언제든지 확인할 수 있습니다. 사용자는 매일 00:00(EST)에 전날의 거래 보상을 받게 됩니다. 예: 사용자는 2021년 12월 20일 00:00(EST)에 2021년 12월 20일에 대한 거래 보상을 받습니다. 다음 날에도 마찬가지입니다. 2021년 12월 25일 보상의 경우 2021년 12월 26일 오후 12시(이벤트 종료 하루 후)에 사용자에게 지급됩니다.',
    FQATitle2: '2. 거래 보상을 확인하는 방법은 무엇입니까?',
    FQAContent2: 'BitKeep의 "거래 보상" 페이지로 이동하여 수익에 대한 모든 것을 확인하십시오.',
    FQATitle3: '3. 거래 보상을 청구하는 방법은 무엇입니까?',
    FQAContent3: '"보상 거래" 페이지로 이동하여 "청구" 버튼을 눌러 보상을 청구하십시오.',
    FQATitle4: '4. 어떻게 초대합니까?',
    FQAContent4: '거래 보상 페이지에서 지금 친구 초대를 누른 후 초대 링크를 복사하거나 초대 포스터를 공유하세요. 친구(신규 사용자)는 BitKeep 앱을 다운로드 및 설치하고 ETH 주소를 입력하여 확인합니다. 그런 다음 BKSwap과 유효한 거래(사전 결제 거래 금액 ≥100U)를 시도합니다. 그 후 초대 보상을 받게 됩니다.',
    // FQAContent41: 'You can also transfer your BKB from your「Cloud Wallet」 to a ETH/BSC address. For more how-to information about BitKeep Cloud Wallet, please tap the link: https://bitkeepblog.medium.com/?p=79771d2baedb',
    FQATitle5: '5. 초대 보상은 어떻게 계산되나요?',
    FQAContent5: '매일 사용자는 다음을 얻을 수 있습니다. 15*성공적으로 초대된 사용자 수 + (모든 초대 대상자의 트랜잭션 볼륨/초대된 모든 사용자의 GMV 합계)*X; 여기서 우리는 "(모든 초대받은 사람의 거래량/초대받은 모든 사용자의 GMV의 합계)"를 Y로 간주합니다.',
    FQAContent51: 'Y가 ≥ 2M이고 ≤ 5M USDT에 해당하는 경우 X=10,000BKB',
    FQAContent52: 'Y가 ≥ 50M이고 ≤ 20M USDT에 해당하는 경우 X=20,000BKB',
    FQAContent53: 'Y가 ≥ 20M이고 ≤ 30M USDT에 해당하는 경우 X=20,000BKB',
    FQAContent54: 'Y가 > 30M USDT에 해당하는 경우 X=40,000BKB',
    FQAContentNote: '참고: 새 사용자가 BKSwap과 유효한 거래(사전 결제 거래 금액 ≥100U)를 한 경우에만 초대가 유효한 것으로 간주됩니다.',
    FQATitle6: '6. 초대 보상은 언제 계산되나요?',
    FQAContent6: '사용자는 매일 00:00(EST)에 전날의 초대 보상을 받게 됩니다.',
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
    myTraded: '나의 거래 가치',
    totalDistributed: '총 분배',
    yesterday: '어제',
    claim: '주장하다',
    ClaimRewards: '보상 청구',
    confirm: '확인하다',
    noData: '데이터 없음',
    invitationReward: "초대 보상",
    myInvitationRewards: "나의 초대 보상",
    totalBonusPool: "총 상금 풀",
    todayBonusPool: "오늘의 보너스",
    myTodayRewards: "나의 오늘 보상",
    tradingRewards: "거래 보상",
    invitationRewards: "초대 보상",
    viewDetails: "세부 정보보기",
    inviteFriendsNow: "친구를 초대",
    ruleDetail: '참고: 다음 거래는 거래 보상을 받을 수 있는 것으로 간주되지 않습니다.',
    ruleDetail1: `1. 다른 체인에서 동일한 코인을 교환하는 것을 포함하는 교차 체인 스왑, 예: <br/> (1) BSC-USDT에서 ETH-USDT로의 스왑; <br/> (2) Swft 채널을 통해 또는 BNB에서 ETH로의 스왑과 같이 서로 다른 체인에서 서로 다른 코인을 스왑합니다.`,
    ruleDetail2: '2. 코인 거래 소각. 일부 코인은 소각 메커니즘을 기반으로 하며 거래가 있을 때마다 부분적으로 소각될 수 있으므로 정확한 거래 금액을 계산하는 데 차이가 있습니다. 따라서 이 코인은 이 BKSwap 거래 보상 이벤트에서 제외됩니다.',
    invitationReward: "나의 초대 보상",
    inviteNumber1: '총 초대 보상',
    inviteNumber2: '어제 초대 보상',
    inviteNumber3: '총 초대 거래 보상',
    inviteNumber4: '어제 보상',
    invitationPool: '초대 보너스 풀',
    invitationPoolContent: '초대 및 적립 이벤트의 두 번째 단계에 사용',  
  },
  'blindboxInvite': {
    inviteTitle: '친구를 초대',
    myRewards: '내 보상',
    invitedNumber: '친구를 초대',
    tokenRewards: '토큰 보상',
    NFTRewards: 'NFT 보상',
    boxRewards: '블라인드 박스 보상',
    inviteFriend: '친구를 초대',
    inviteFriends: '친구를 초대',
    inviteLink: '초대 링크',
    inviteFriendsNow: '지금 친구를 초대하세요',
    savePicture: '사진을 저장하다',
    ShareLink:"링크 공유",  
    inforce: '활성화됨',
    inactivated: '비활성화됨',
    Address: '주소',
    State: '상태',
    Time: '시간',
    nomore: '더 이상은 없어',
    loading: '로딩 중...',
    rewardTitle: '토큰 보상',
    RuleTitle: '초대 규칙',
    know: '확인',
    toEarn: '친구를 초대하여 BKB 적립',
    rewardsMore: '친구 거래는 더 많은 BKB를 보상합니다.',
    Poster: 'QR코드 스캔',
    downReward: 'BitKeep Wallet 다운로드 암호화 자산 보상 받기',
    imgText: '안녕하세요, 친구, 여기 암호화 자산을 적립할 수 있는 Crypto Wallet이 있습니다',
    detailWallet: '탐색에 노력이 필요하지 않은 암호화 지갑',
    detailWallet1: '암호화된 자산을 안전하게 저장',
    detailWallet2: '편리하고 사용하기 쉬운 BKSwap',
    detailWallet3: '721 NFT 지원',
    detailWallet4: '7000개 이상의 DApp 생태계',
    yourFrinedInvite: '친구가 BitKeep 다중 체인 지갑을 사용하도록 초대합니다.',
    friendsText: 'BitKeep과 거래하여 BKB 획득',
    detailInput: 'BitKeep에 가입하려면 ETH 주소를 입력하세요.',
    detailBtn: '초대를 수락하다',
    detailJust: '아직 ETH 주소가 없으신가요? BitKeep 앱을 다운로드하고 지갑을 만드세요.',
    detailWhy: 'BitKeep 지갑을 선택하는 이유는 무엇입니까?',
    detailContro: '디지털 자산 제어',
    detailUl1: '토큰 및 NFT를 위한 안전한 저장소',
    detailUl2: 'BitKeep은 30개 이상의 메인 체인, 200,000개 이상의 토큰 및 7000개 이상의 DApp을 지원합니다.',
    detailUl3: '사용자를 위한 DeFi의 세계를 열다',
    detailCrypto: '모든 암호화 자산은 BKSwap으로 거래할 수 있습니다.',
    detailAny: '언제든지 멀티체인 암호화폐를 쉽게 교환하고 거래할 수 있습니다.',
    detailAggregate: 'Uniswap, Sushiswap, PancakeSwap 등과 같은 30개 이상의 주류 DEX를 집계합니다.',
    detailNFT: 'NFT 저장',
    detailNFTCon: 'BitKeep은 168개 이상의 국가 및 지역에 걸쳐 수백만 명의 사용자에게 안전하고 안정적인 암호화 자산 관리 서비스를 제공합니다.',
    downText: '축하합니다. 초대를 수락했습니다! 지금 BitKeep 지갑을 사용하여 블록체인 라이프스타일을 즐기세요',
    foot1:'BitKeep은 전 세계적으로 서비스를 제공합니다',
    foot2:'전 세계 168개국 이상 수백만 명의 사용자에게 안전하고 안정적인 암호화 자산 관리 서비스를 제공했습니다.',
    foot3:'사용자 수',
    foot4:'거래 금액',
    foot5:'국가 및 지역 포함',
    inviteRuleTitle: '친구(신규 사용자)가 확인하는 유효한 초대는 무엇입니까?',
    ruleDetail: '사용자가 자신의 지갑 주소를 가져오거나 주소를 가져오거나 BitKeep 지갑을 생성합니다.',
    ruleDetail1: '주소는 24시간 이내에 생성됩니다.',
    ruleDetail2: 'BKSwap에서 사용자의 거래량이 10 USDT 이상입니다.',
    myInviteRuleTitle: '초대 보상은 어떻게 계산되나요?',
    myRuleDetail: '매일 사용자는 다음을 얻을 수 있습니다. 15*성공적으로 초대된 사용자 수 + (모든 초대 대상자의 트랜잭션 볼륨/초대된 모든 사용자의 GMV 합계)*X; 여기서 우리는 "(모든 초대받은 사람의 거래량/초대받은 모든 사용자의 GMV의 합계)"를 Y로 간주합니다.',
    myRuleDetail1: 'Y가 ≥ 2M이고 ≤ 5M USDT에 해당하는 경우 X=10,000BKB',
    myRuleDetail2: 'Y가 ≥ 50M이고 ≤ 20M USDT에 해당하는 경우 X=20,000BKB',
    myRuleDetail3: 'Y가 ≥ 20M이고 ≤ 30M USDT에 해당하는 경우 X=20,000BKB',
    myRuleDetail4: 'Y가 > 30M USDT에 해당하는 경우 X=40,000BKB',
    myRuleDetail5: '참고: 새 사용자가 BKSwap과 유효한 거래(사전 결제 거래 금액 ≥100U)를 한 경우에만 초대가 유효한 것으로 간주됩니다.',
    toast2: '죄송합니다. 이 주소는 초대되었습니다.',
    toast0: '죄송합니다. 이 주소는 최대 초대 한도에 도달했습니다.',
    emptyToast: '주소 필드는 비워둘 수 없습니다.'
  }
}
