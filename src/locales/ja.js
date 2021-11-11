module.exports = {
  base: {
    loading: "読み込み中",
    no_more: "もういや",
    success: '正常に更新',
    networkErro:"インターネットがうまくいかなくなった"
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
    loading: "読み込み中",
    success: '正常に更新',
    coundown: '秒読み',
    pull: '更新...',
    miningTitle: '貿易鉱業',
    comingsoon: '近日公開',
    inProgress: '進行中',
    startCountdown: 'カウントダウンを開始',
    endCountdown: 'カウントダウン終了',
    rewardPool: '報酬プール',
    update: 'アップデート',
    will: '今週内の報酬の分配',
    activity: 'アクティビティは終了します',
    Introduce: '導入',
    tradingVolume: '取引高',
    tradingIn: '今日の取引量',
    myRewards: '私の貿易報酬',
    totalTrading: '総取引量',
    todyVolue: '今日の価値',
    totalRewards: 'トータルリワード',
    yesterdayRewards: '今日の報酬',
    miningRuleTitle: 'マイニングルール',
    miningRule: 'BKBの取引報酬の計算に使用されるデータ。 トレーディングリワードはBitKeepウォレットによって提供されます。概要…',
    learnMore: 'もっと詳しく知る',
    day: '1日あたりの取引金額',
    swapNow: '今すぐ交換',
    phase: '段階 {v}',
    historyTitle: '歴史',
    tradeValue: '貿易価値',
    tradeReward: '貿易報酬',
    tradeUser: 'トレードユーザー',
    produced: 'BKBプロデュース',
    startTime: '始める',
    overTime: '終わり',
    notStart: '開始しない',
    ruleTitle: 'トレーディングリワード',
    ruleContent: 'トレーディングリワードプログラムの概要。',
    ruleRewards: 'ジェネシスブロックからの総供給量の20％（120,000,000 BKB）は、BKSwapで取引するユーザーに報酬を与えるために使用されます。',
    ObjectivesTitle: '目的',
    Objectives1: 'BKswapBKswapで取引するユーザーにインセンティブを与える',
    Objectives2: 'BKSwapの使用と市場の流動性を加速する',
    OverviewTitle: '概要',
    OverviewContent: 'BitKeepは、BKSwapの取引データに基づいて、4週間のサイクルで資格のあるユーザーに120,000,00BKBを配布します。',
    FQATitle: '法学',
    FQATitle1: '1.誰が報酬を取引する資格がありますか？',
    FQAContent1: 'BKswapのすべてのトレーダーは、取引報酬としてBKBを受け取る資格があります。',
    FQATitle2: '2.トレーディングリワードプログラムでどのくらいのBKBを獲得しましたか？',
    FQAContent2: '現在の時代では、ユーザーは1日で取引額と推定取引報酬を確認できます。',
    FQATitle3: '3.トレーディングリワードを請求するにはどうすればよいですか？ 獲得したBKBはいつ引き出して譲渡できますか？',
    FQAContent3: 'トレーディングリワードで獲得したBKBトークンは、毎日の終わりに譲渡できます。 BKBトークンは24時にあなたのcloundウォレットに送信されます。クレームをクリックする必要はありません。',
    about: 'BKBについて',
    viewAll: 'すべて表示',
    pickUp: '選び出す',
    aboutContent1: 'BKBを保持することは、エコロジカルガバナンスの権利を享受し、BitKeepのエコロジカルな支払い方法とメンバーシップの権利の身元証明でもあります。',
    aboutContent2: 'BKBは、複数のパブリックチェーンリソースの購入、ウォレットのVIP機能のロック解除、BitKeep広告料金の支払いなどのシナリオで使用できます。',
    distribution: 'BKBの発行と配布',
    total: 'BKB総供給: ',
    mining: '複合マイニング',
    community: 'コミュニティ',
    tram: 'チームと初期の投資家',
    partner: '相棒',
    eco: '生態系構築',
    hold: 'BKBエクイティを保有',
    hold1: '生態学的ガバナンスの権利を享受する',
    hold2: 'エコロジカルな支払い方法',
    hold3: 'メンバーの権利と身分証明書',
    hold4: 'パブリックチェーンリソースの購入',
    hold5: 'ウォレットのVIP機能のロックを解除します',
    hold6: '広告料の支払い',
    hold7: 'BitKeepIWOに参加する',
    hold8: '高品質の資産の独占チャネルに参入することを誓う',
    appreciation: 'BKB値の強化',
    appreciationSwap: 'スワップ手数料の控除',
    appreciationCoin: '支払い',
    appreciationPool: '複数のステーキングプール',
    appreciationValut: '通貨',
    more: 'BKBの詳細',
    website: '公式サイト',
    paper: '白書',
    twitter: 'ツイッター',
    github: 'Github',
    telegram: '電報',
    facebook: 'フェイスブック',
    explorer: 'ブロックエクスプローラー',
    know: 'わかった', 
    myTraded: '私の取引額'
  }
}
