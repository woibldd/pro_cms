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
    miningTitle: '取引報酬',
    comingsoon: '今後の',
    inProgress: '進行中',
    startCountdown: 'カウントダウンを開始',
    endCountdown: 'カウントダウン終了',
    rewardPool: '取引データ',
    update: 'アップデート',
    will: '今週内の報酬の分配',
    activity: '終わり',
    Introduce: '導入',
    tradingVolume: '取引高',
    tradingIn: '今日の下取り',
    userTodayValue: '今日の取引量',
    myRewards: '私の報酬',
    totalTrading: '総取引量',
    todyVolue: '今日の価値',
    totalRewards: 'トータルリワード',
    yesterdayRewards: '今日の報酬',
    miningRuleTitle: 'イベントルール',
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
    ruleTitle: 'BKSwapトレーディングリワードとは何ですか？',
    ruleContent: 'ユーザーがBKSwapトランザクションを完了したときに取得するBKB報酬。 BitKeepは、スマートコントラクト配布ルールに従ってBKSwapで取引するユーザーに報酬を与え、ユーザーがBKBを採用して関連イベントに参加することを奨励します。 同時に、BKBのアプリケーションシナリオを拡張して、Web3.0時代のブロックチェーンウォレットエコシステムをさらに発展させます。',
    how: 'BKSwap Trading Rewardを取得するにはどうすればよいですか？',
    how1: '1.最新のBKSwapチュートリアルについては、',
    how11: ' を参照してください。',
    // how1: `<a href='https://www.youtube.com/watch?v=_5expUiioV8' style="color: #495BFF">https://www.youtube.com</a>を参照してください。`,
    how2: '2.取引報酬に関するルール：',
    howContent: 'BKSwap取引報酬には3つのレベルがあります。',
    Objectives1: '当日のBKSwapの合計取引金額は500万USDT以下であり、契約ルールによれば、BKBはその日の合計報酬としてその日の取引手数料の300％でリリースされ、すべてのユーザーが当日の取引への参加は比例配分されます。',
    Objectives2: '特定の日のBKSwapの合計取引金額が500万から2000万USDT相当の場合、契約ルールに従って、BitKeepはその日の取引手数料の200％に等しいBKBの合計を 当日。 当日にBKSwapトランザクションに参加したすべてのユーザーは、比例したシェアを獲得します',
    Objectives3: '特定の日のBKSwapの合計取引金額が2,000万米ドル相当を超える場合、契約ルールに従って、BitKeepはその日の報酬としてその日の取引手数料の100％に等しいBKBの合計を提供します。 当日にBKSwapトランザクションに参加したすべてのユーザーは、比例したシェアを獲得します',
    how3: '3.BKSwap Trading Rewardイベントの最初のラウンドの時間',
    OverviewContent: 'BKSwap Trading Rewardイベントの最初のラウンドは、2021年11月29日午後12時（GMT + 8）から2021年12月3日午後12時（GMT + 8）まで開催されます。',
    how4: '4.取引報酬はどのように計算されますか？',
    how4Content: '取引報酬はリアルタイムで計算され、ユーザーは「取引報酬」ページでいつでも確認できます。 イベントの決済サイクルは24時間です。 ユーザーは、毎日午後12:00（GMT + 8）に前日の取引報酬を受け取ります。 例：ユーザーは、2021年11月30日の12:00（PM）に2021年11月29日の取引報酬を受け取ります。 翌日も同じになります。 2021年12月3日の報酬については、ユーザーはDocでそれらを受け取ります。 2021年4月12:00（PM）（イベント終了のちょうど1日後）',
    how5: '5.取引報酬を確認する方法は？',
    how5Content: 'BitKeepの「TradingReward」ページに移動して、利益に関するすべてを確認してください。',
    how6: '6.取引報酬を請求するにはどうすればよいですか？',
    how6Content: '「取引報酬」ページに移動し、「請求」ボタンをタップして報酬を請求します。',
    FQATitle: 'よくある質問（FAQ）',
    FQATitle1: '1.取引報酬はどのように計算されますか？',
    FQAContent1: '取引報酬はリアルタイムで計算され、ユーザーは「取引報酬」ページでいつでも確認できます。',
    FQATitle2: '2. BKSwap Trading Rewardイベントの最初のラウンドはいつ開催されますか？',
    FQAContent2: 'BKSwap Trading Rewardの最初のラウンドは、2021年11月29日午後12時（GMT + 8）から2021年12月3日午後12時（GMT + 8）まで、合計4日間開催されます。 後続のラウンドがありますので、ご期待ください。',
    FQATitle3: '3.取引報酬はリアルタイムで決済されますか？',
    FQAContent3: '取引報酬はリアルタイムで計算されます。 ユーザーは「取引報酬」ページでいつでも結果を確認できます。 ただし、取引報酬の決済サイクルは24時間であり、ユーザーは毎日正午に前日の取引報酬を受け取ります。',
    FQATitle4: '4. BKSwap Trading Rewardイベントに参加しましたが、報酬を受け取ったBKBはどこで確認できますか？',
    FQAContent4: 'BKB特典をご請求後、「クラウドウォレット」でご確認ください。 「クラウドウォレット」を有効にしていない場合は、ランディングページの右上隅にあるNAVバーをタップし、「クラウドウォレット」を選択して有効にします。',
    FQAContent41: 'BKBを「クラウドウォレット」からETH / BSCアドレスに転送することもできます。 BitKeep Cloud Walletの詳細については、次のリンクをタップしてください：https：//bitkeepblog.medium.com/？p = 79771d2baedb',
    FQATitle5: '5. BKBを取得する方法は何ですか？',
    FQAContent5: '別のイベント、つまりBKBブラインドボックスイベントがあります。 ユーザーは、友達を招待して、さまざまな量のBKBを含むブラインドボックスのロックを解除できます。 ユーザーと寄稿者の両方がBKBのシェアを取得できます。 BitKeepは、引き続き他のトークンプロジェクトと協力して、エアドロップやその他のイベントを共同で開催し、BKBの報酬を提供します。 また、BKBステーキングイベントも間もなく開催されます。 お見逃しなく。',
    FQATitle6: '6. BKBの将来はどうなりますか？',
    FQAContent6: 'BKB保有者は、BKBでガス料金を支払うことができ、クロスチェーンブリッジで便利な支払い体験を楽しむことができます。 また：',
    FQAContent61: 'BKB保有者は、毎週のBitKeepエアドロップに参加する特権があります。',
    FQAContent62: 'NFT資産をBitKeepWalletに入れたBKB保有者は、NFT宝くじ抽選に参加する資格があります。',
    FQAContent63: 'BKB保有者は、BKBをステーキングすることにより、質の高いプロジェクトのIWOに参加する機会があります。',
    FQAContent64: 'BKB保有者は取引に対して報酬が与えられます。',
    FQAContent65: 'BKB保有者は、BKSwap取引の取引手数料の割引を受けられます。',
    FQAContent66: 'BKB保有者は、BitKeepDefiレートアップクーポンを受け取ります。',
    FQAContent67: 'BKB保有者は、ステーキングに対して報酬が与えられます。',
    FQAContent68: '将来的にはさらに多くのものが登場します。',
    FQAContentNote: '注：ユーザーは、BKBを受信するためにBitKeepアプリでクラウドウォレットをアクティブ化する必要があります（クラウドウォレットをアクティブ化していない場合は、ランディングページの右上隅にあるNAVバーをタップし、クラウドウォレットを選択してアクティブ化します）',
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
    myTraded: '私の取引額',
    totalDistributed: '配布された合計',
    yesterday: '昨日',
    claim: '請求',
    ClaimRewards: '報酬を請求する',
    confirm: '確認',
    noData: 'データなし',
    invitationReward: "招待報酬",
    myInvitationRewards: "私の招待報酬",
    totalBonusPool: "賞金総額",
    todayBonusPool: "今日のボーナス",
    myTodayRewards: "私の今日の報酬",
    tradingRewards: "取引報酬",
    invitationRewards: "招待報酬",
    viewDetails: "詳細を見る",
    inviteFriendsNow: "友達を招待",
    ruleDetail: '注：以下の取引は、取引報酬の対象とは見なされません',
    ruleDetail1: `1.クロスチェーンスワップ:<br/> （1）同じコインを異なるチェーンでスワップすることを含みます。 BSC-USDTからETH-USDTへのスワップ。<br/> （2）Swftチャネル、またはBNBからETHへのスワップなど、さまざまなチェーンでさまざまなコインを交換する。`,
    ruleDetail2: '2.コイン取引を燃やす。 一部のコインは燃焼メカニズムに基づいており、トランザクションが発生するたびに部分的に燃焼する必要がある場合があります。これにより、正確なトランザクション量をカウントするのが異なります。 したがって、これらのコインはこのBKSwap TradingRewardイベントから除外されます。',
    invitationReward: "私の招待報酬",
    inviteNumber1: '合計招待報酬',
    inviteNumber2: '昨日リワードを招待',
    inviteNumber3: 'トータル招待トレーディングリワード',
    inviteNumber4: '昨日の報酬',
    invitationPool: '招待ボーナスプール',
    invitationPoolContent: '招待して獲得するイベントの第2フェーズに使用されます',  
  }
}
