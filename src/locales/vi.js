module.exports = {
  base: {
    loading: "Đang tải",
    no_more: "Không còn nữa",
    success: 'Làm mới thành công',
    networkErro:"Internet đã trở nên tồi tệ",
    copied: 'Đã sao chép',
    copiedError: 'Một số lỗi đã xảy ra',
    nomore: 'Không còn nữa',
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
      "ShareWithMe": "By invitation",
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
    loading: "Đang tải...",
    success: 'Làm mới thành công',
    pull: 'Làm mới',
    coundown: 'Đếm ngược',
    miningTitle: 'Phần thưởng giao dịch',
    comingsoon: 'Sắp tới',
    inProgress: 'Trong tiến trình',
    startCountdown: 'Bắt đầu đếm ngược',
    endCountdown: 'Kết thúc đếm ngược',
    rewardPool: 'Dữ liệu giao dịch',
    update: 'Cập nhật',
    will: 'Phân phối phần thưởng trong tuần này',
    activity: 'Kết thúc',
    Introduce: 'Giới thiệu',
    tradingVolume: 'Khối lượng giao dịch',
    tradingIn: 'Giao dịch hôm nay',
    userTodayValue: 'Khối lượng hôm nay',
    myRewards: 'Giải thưởng của tôi',
    totalTrading: 'Tổng khối lượng giao dịch',
    todyVolue: 'Giá trị ngày nay',
    totalRewards: 'Tổng giải thưởng',
    yesterdayRewards: 'Phần thưởng hôm nay',
    miningRuleTitle: 'Quy tắc sự kiện',
    miningRule: 'Dữ liệu được sử dụng để tính Phần thưởng giao dịch của BKB. Phần thưởng giao dịch được cung cấp bởi Ví BitKeep. Tổng quan về.…',
    learnMore: 'Tìm hiểu thêm',
    Introduce: 'Giới thiệu',
    day: 'Số tiền giao dịch của bạn một ngày',
    swapNow: 'Hoán đổi ngay',
    phase: 'Giai đoạn {v}',
    historyTitle: 'Môn lịch sử',
    tradeValue: 'Giá trị thương mại',
    tradeReward: 'Phần thưởng thương mại',
    tradeUser: 'Người dùng giao dịch',
    produced: 'BKB sản xuất',
    startTime: 'Bắt đầu',
    overTime: 'Kết thúc',
    notStart: 'Không bắt đầu',
    ruleTitle: 'Phần thưởng giao dịch BKSwap là gì?',
    ruleContent: 'Phần thưởng BKB mà người dùng nhận được khi họ hoàn thành giao dịch hoán đổi BKS. BitKeep sẽ thưởng cho người dùng giao dịch trên BKSwap theo quy tắc phân phối hợp đồng thông minh để khuyến khích người dùng thông qua BKB và tham gia vào các sự kiện liên quan. Đồng thời, chúng tôi sẽ mở rộng các kịch bản ứng dụng của BKB để phát triển hơn nữa hệ sinh thái ví blockchain trong kỷ nguyên Web3.0.',
    how: 'Làm thế nào để nhận được Phần thưởng giao dịch BKSwap?',
    how1: '1. Vui lòng tham khảo ',
    how11: ' để biết hướng dẫn về BKSwap mới nhất.',
    // how1: `<a href='https://www.youtube.com/watch?v=_5expUiioV8' style="color: #495BFF">https://www.youtube.com</a> để biết hướng dẫn về BKSwap mới nhất.`,
    how2: '2. Nội quy của sự kiện:',
    howContent: 'Lời mời (Tổng giải thưởng: 30WBKB): Các sự kiện Phần thưởng giao dịch sẽ kéo dài trong 5 ngày. Phần thưởng lời mời sẽ được chia sẻ bởi tất cả người dùng có lời mời thành công. Phần thưởng được tính như sau:',
    howContent1: 'Đối với mỗi ngày, người dùng có thể nhận được: 15 * số người dùng được mời thành công + (tổng khối lượng giao dịch của tất cả những người được mời / GMV của tất cả người dùng được mời) * X <br/> trong đó, chúng tôi coi là “GMV của tất cả người dùng được mời ”là Y',
    Objectives1: 'Nếu Y là ≥ 2 triệu và tương đương ≤ 5 triệu USDT, X = 10.000BKB',
    Objectives2: 'Nếu Y là ≥ 50 triệu và tương đương ≤ 20 triệu USDT, X = 20.000BKB',
    Objectives3: 'Nếu Y là ≥ 20 triệu và tương đương ≤ 30 triệu USDT, X = 20.000BKB',
    Objectives4: 'Nếu Y> 30 triệu USDT tương đương, X = 40.000BKB',
    howContent2: 'Phần thưởng giao dịch BKSwap được chia thành 3 cấp độ như sau:',
    Objectives11: ' Khi tổng số tiền giao dịch trên BKSwap trong một ngày nhất định là ≥ 5 triệu USDT và ≤ 10 triệu USDT tương đương, thì theo quy tắc hợp đồng, BitKeep sẽ cung cấp số tiền BKB bằng 300% phí giao dịch trong ngày như phần thưởng trong ngày. Tất cả người dùng tham gia giao dịch BKSwap trong ngày sẽ nhận được một phần tương xứng (tùy thuộc vào số tiền giao dịch của từng người dùng)',
    Objectives12: ' Khi tổng số tiền giao dịch trên BKSwap vào một ngày nhất định rơi vào khoảng từ 10 triệu đến 40 triệu USDT tương đương, thì theo các quy tắc hợp đồng, BitKeep sẽ cung cấp một số tiền BKB bằng 200% phí giao dịch trong ngày làm phần thưởng của ngày. Tất cả người dùng tham gia giao dịch BKSwap trong ngày sẽ nhận được một phần tương xứng',
    Objectives13: ' Nếu tổng số tiền giao dịch của BKSwap trong ngày lớn hơn 40 triệu USDT tương đương, theo quy định của hợp đồng, BKB sẽ được phát hành 100% phí giao dịch trong ngày làm tổng phần thưởng trong ngày và tất cả người dùng tham gia trong giao dịch trong ngày sẽ được chia theo tỷ lệ',
    how3: '3. Khoảng thời gian:',
    OverviewContent: 'Thời gian cho đợt thứ hai của sự kiện Phần thưởng giao dịch BKSwap: 15:00 ngày 20 tháng 12 năm 2021 - 23:00 ngày 25 tháng 12 năm 2021 (GMT + 8)',
    FQATitle: 'Câu hỏi thường gặp (FAQ)',
    FQATitle1: '1. Phần thưởng được phân phối khi nào?',
    FQAContent1: 'Phần thưởng giao dịch được tính theo thời gian thực và người dùng có thể kiểm tra bất kỳ lúc nào trên trang "Phần thưởng giao dịch". Người dùng sẽ nhận được phần thưởng giao dịch của ngày hôm trước vào lúc 00:00 (GMT + 8) hàng ngày. Ví dụ: Người dùng sẽ nhận được phần thưởng giao dịch vào ngày 21 tháng 12 năm 2021 vào ngày 20 tháng 12 năm 2021 lúc 00:00 (GMT + 8). Nó sẽ giống nhau cho mỗi ngày tiếp theo. Đối với phần thưởng cho ngày 25 tháng 12 năm 2021, người dùng sẽ nhận được chúng vào ngày 26 tháng 12 năm 2021 lúc 12:00 (GMT + 8) (chính xác một ngày sau khi sự kiện kết thúc).',
    FQATitle2: '2. Làm thế nào để kiểm tra phần thưởng giao dịch của bạn?',
    FQAContent2: 'Truy cập trang "Phần thưởng giao dịch" trong BitKeep để xem mọi thứ về lợi nhuận của bạn.',
    FQATitle3: '3. Làm thế nào để nhận phần thưởng giao dịch của bạn?',
    FQAContent3: 'Truy cập trang "Phần thưởng giao dịch" và nhấn vào nút "Yêu cầu" để nhận phần thưởng của bạn.',
    FQATitle4: '4. Làm thế nào để mời?',
    FQAContent4: 'Trong trang Phần thưởng giao dịch, chạm vào Mời bạn bè ngay bây giờ, sau đó sao chép liên kết lời mời hoặc chia sẻ áp phích lời mời. Bạn của bạn (người dùng mới) xác nhận bằng cách tải xuống và cài đặt ứng dụng BitKeep và điền vào địa chỉ ETH của anh ấy / cô ấy. Sau đó, anh ấy / cô ấy sẽ cố gắng thực hiện một giao dịch hợp lệ (với số tiền giao dịch thanh toán trước ≥100U) với BKSwap. Sau đó, bạn sẽ nhận được phần thưởng lời mời của mình.',
    // FQAContent41: 'You can also transfer your BKB from your「Cloud Wallet」 to a ETH/BSC address. For more how-to information about BitKeep Cloud Wallet, please tap the link: https://bitkeepblog.medium.com/?p=79771d2baedb',
    FQATitle5: '5. Phần thưởng lời mời của tôi được tính như thế nào?',
    FQAContent5: 'Đối với mỗi ngày, người dùng có thể nhận được: 15 * số người dùng được mời thành công + (tổng khối lượng giao dịch của tất cả những người được mời / GMV của tất cả người dùng được mời) * X; trong đó, chúng tôi coi “(tổng khối lượng giao dịch của tất cả những người được mời / GMV của tất cả những người dùng được mời)” là Y',
    FQAContent51: 'Nếu Y là ≥ 2 triệu và tương đương ≤ 5 triệu USDT, X = 10.000BKB',
    FQAContent52: 'Nếu Y là ≥ 50 triệu và tương đương ≤ 20 triệu USDT, X = 20.000BKB',
    FQAContent53: 'Nếu Y là ≥ 20 triệu và tương đương ≤ 30 triệu USDT, X = 20.000BKB',
    FQAContent54: 'Nếu Y> 30 triệu USDT tương đương, X = 40.000BKB',
    FQAContentNote: 'Lưu ý: Lời mời chỉ được coi là hợp lệ nếu người dùng mới thực hiện một giao dịch hợp lệ (với số tiền giao dịch thanh toán trước ≥100U) với BKSwap',
    FQATitle6: '6. Phần thưởng lời mời được tính khi nào?',
    FQAContent6: 'Người dùng sẽ nhận được phần thưởng lời mời của họ cho ngày hôm trước vào lúc 00:00 (GMT+8) hàng ngày.',
    about: 'Về BKB',
    viewAll: 'Xem tất cả',
    pickUp: 'Đón',
    aboutContent1: 'Nắm giữ BKB sẽ được hưởng các quyền quản trị sinh thái, và đó cũng là bằng chứng nhận dạng của phương thức thanh toán sinh thái và quyền thành viên của BitKeep.',
    aboutContent2: 'BKB có thể được sử dụng trong các tình huống như mua nhiều tài nguyên chuỗi công khai, mở khóa chức năng VIP của ví và thanh toán phí quảng cáo BitKeep.',
    distribution: 'BKB phát hành và phân phối',
    total: 'BKB tổng cung:',
    mining: 'Khai thác hỗn hợp',
    community: 'Cộng đồng',
    tram: 'Đội ngũ và các nhà đầu tư ban đầu',
    partner: 'Bạn đồng hành',
    eco: 'Xây dựng hệ sinh thái',
    hold: 'Nắm giữ vốn chủ sở hữu BKB',
    hold1: 'Được hưởng quyền quản trị sinh thái',
    hold2: 'Phương thức thanh toán sinh thái',
    hold3: 'Quyền của thành viên và giấy chứng nhận danh tính',
    hold4: 'Mua tài nguyên chuỗi công khai',
    hold5: 'Mở khóa chức năng VIP của ví',
    hold6: 'Thanh toán phí quảng cáo',
    hold7: 'Tham gia BitKeep IWO',
    hold8: 'PCam kết tham gia vào kênh độc quyền của nội dung chất lượng cao',
    appreciation: 'Nâng cao giá trị BKB',
    appreciationSwap: 'Hoán đổi khấu trừ hoa hồng',
    appreciationCoin: 'Thanh toán',
    appreciationPool: 'Nhiều hồ bơi đặt cược',
    appreciationValut: 'Tiền tệ',
    more: 'Thông tin thêm về BKB',
    website: 'Trang web chính thức',
    paper: 'giấy trắng',
    twitter: 'Twitter',
    github: 'Github',
    telegram: 'Telegram',
    facebook: 'Facebook',
    explorer: 'Trình khám phá khối',
    know: 'VÂNG', 
    myTraded: 'Giá trị giao dịch của tôi',
    totalDistributed: 'Tổng số đã phân phối',
    yesterday: 'Hôm qua',
    claim: 'Yêu cầu',
    ClaimRewards: 'Yêu cầu phần thưởng',
    ClaimRewardsub: 'Phần thưởng sẽ được giải quyết vào lúc 12:00 tối nay',
    confirm: 'Xác nhận',
    noData: 'Không có dữ liệu',
    invitationReward: "Phần thưởng lời mời",
    totalBonusPool: "Tổng giải thưởng",
    todayBonusPool: "Tiền thưởng hôm nay",
    myTodayRewards: "phần thưởng hôm nay",
    tradingRewards: "Phần thưởng giao dịch",
    invitationRewards: "Phần thưởng lời mời",
    viewDetails: "Xem chi tiết",
    inviteFriendsNow: "mời bạn bè",
    ruleDetail: 'Lưu ý: Các giao dịch sau đây không được coi là đủ điều kiện để nhận phần thưởng giao dịch',
    ruleDetail1: `1. Hoán đổi chuỗi chéo, bao gồm: <br/> (1) hoán đổi cùng một đồng tiền trên các chuỗi khác nhau, ví dụ: Hoán đổi BSC-USDT sang ETH-USDT;<br/> (2) hoán đổi các đồng tiền khác nhau trên các chuỗi khác nhau, chẳng hạn như thông qua các kênh Swft hoặc hoán đổi BNB sang ETH.`,
    ruleDetail2: '2. Đốt coin giao dịch. Một số đồng tiền dựa trên cơ chế đốt và chúng có thể được yêu cầu đốt một phần bất cứ khi nào có giao dịch, điều này khiến việc đếm số tiền giao dịch chính xác sẽ khác. Do đó, những đồng tiền của luận án này không được tham gia sự kiện Phần thưởng giao dịch BKSwap này.',
    invitationReward: "Phần thưởng lời mời của tôi",
    inviteNumber1: 'Tổng số Phần thưởng cho lời mời',
    inviteNumber2: 'Phần thưởng mời hôm qua',
    inviteNumber3: 'Tổng số phần thưởng giao dịch mời',
    inviteNumber4: 'Phần thưởng hôm qua',
    invitationPool: 'Tiền thưởng lời mời',
    invitationPoolContent: 'Được sử dụng cho giai đoạn thứ hai của sự kiện mời và kiếm tiền',
  },
  'blindboxInvite': {
    inviteTitle: 'Mời bạn bè',
    myRewards: 'Giải thưởng của tôi',
    invitedNumber: 'Mời bạn bè',
    tokenRewards: 'Phần thưởng mã thông báo',
    NFTRewards: 'Phần thưởng NFT',
    boxRewards: 'Phần thưởng Hộp mù',
    inviteFriend: 'Mời bạn bè',
    inviteFriends: 'Mời bạn bè',
    inviteLink: 'Liên kết lời mời',
    inviteFriendsNow: 'Mời bạn bè của bạn ngay bây giờ',
    savePicture: 'Lưu hình ảnh',
    ShareLink:"Chia sẻ",  
    inforce: 'Đã kích hoạt',
    inactivated: 'Không hoạt động',
    Address: 'Địa chỉ nhà',
    State: 'Trạng thái',
    Time: 'Thời gian',
    nomore: 'Không còn nữa',
    loading: 'Đang tải...',
    rewardTitle: 'Phần thưởng mã thông báo',
    RuleTitle: 'Nội quy mời',
    know: 'VÂNG',
    toEarn: 'Mời bạn bè để kiếm BKB',
    rewardsMore: 'Giao dịch bạn bè thưởng thêm BKB',
    Poster: 'Quét mã QR',
    downReward: 'TTải xuống ví BitKeep để kiếm phần thưởng',
    imgText: 'Xin chào bạn, đây là một Ví tiền điện tử để bạn kiếm được tài sản tiền điện tử',
    detailWallet: 'Một ví tiền điện tử không cần nỗ lực điều hướng',
    detailWallet1: 'Lưu trữ an toàn nội dung được mã hóa',
    detailWallet2: 'BKSwap thuận tiện và dễ sử dụng',
    detailWallet3: 'Hỗ trợ 721 NFT',
    detailWallet4: 'Hơn 7000 hệ sinh thái DApps',
    yourFrinedInvite: 'Bạn bè của bạn mời bạn sử dụng ví đa chuỗi BitKeep',
    friendsText: 'Giao dịch với BitKeep để kiếm BKB',
    detailInput: 'Hãy nhập địa chỉ của ETH',
    detailBtn: 'Chấp nhận lời mời',
    detailJust: 'Chưa có địa chỉ ETH? Chỉ cần tải xuống ứng dụng BitKeep và tạo ví',
    detailWhy: 'Tại sao chọn ví BitKeep?',
    detailContro: 'Kiểm soát tài sản kỹ thuật số của bạn',
    detailUl1: 'Một nơi lưu trữ an toàn cho các mã thông báo và NFT của bạn',
    detailUl2: 'BitKeep hỗ trợ hơn 30 chuỗi chính, 200.000+ mã thông báo và hơn 7000 DApps',
    detailUl3: 'mở ra thế giới DeFi cho người dùng của chúng tôi',
    detailCrypto: 'Tất cả các tài sản tiền điện tử có thể được giao dịch với BKSwap',
    detailAny: 'Dễ dàng hoán đổi và giao dịch tiền điện tử đa chuỗi bất kỳ lúc nào',
    detailAggregate: 'Tổng hợp hơn 30 DEX chính như Uniswap, Sushiswap, PancakeSwap, v.v.',
    detailNFT: 'Lưu trữ NFT của bạn',
    detailNFTCon: 'BitKeep cung cấp các dịch vụ quản lý tài sản tiền điện tử an toàn và đáng tin cậy cho hàng triệu người dùng trên hơn 168 quốc gia và khu vực',
    downText: 'Xin chúc mừng, bạn đã chấp nhận lời mời thành công! Sử dụng ví BitKeep ngay bây giờ để tận hưởng phong cách sống blockchain của bạn',
    foot1:'BitKeep cung cấp dịch vụ trên toàn thế giới',
    foot2:'Nó đã cung cấp dịch vụ quản lý tài sản tiền điện tử an toàn và đáng tin cậy cho hàng triệu người dùng ở hơn 168 quốc gia trên thế giới',
    foot3:'Số lượng người dùng',
    foot4:'Số tiền giao dịch',
    foot5:'Bao gồm các quốc gia và khu vực',
    inviteRuleTitle: 'Điều gì làm cho một lời mời hợp lệ Bạn của bạn (người dùng mới) xác nhận?',
    ruleDetail: 'Người dùng nhập địa chỉ ví của mình hoặc địa chỉ đã được nhập hoặc tạo ví BitKeep',
    ruleDetail1: 'Địa chỉ được tạo trong vòng 24 giờ',
    ruleDetail2: 'Khối lượng giao dịch của người dùng trên BKSwap lớn hơn hoặc bằng 10 USDT',
    myInviteRuleTitle: 'Phần thưởng lời mời của tôi được tính như thế nào?',
    myRuleDetail: 'Đối với mỗi ngày, người dùng có thể nhận được: 15 * số người dùng được mời thành công + (tổng khối lượng giao dịch của tất cả những người được mời / GMV của tất cả người dùng được mời) * X; trong đó, chúng tôi coi “(tổng khối lượng giao dịch của tất cả những người được mời / GMV của tất cả những người dùng được mời)” là Y',
    myRuleDetail1: 'Nếu Y là ≥ 2 triệu và tương đương ≤ 5 triệu USDT, X = 10.000BKB',
    myRuleDetail2: 'Nếu Y là ≥ 50 triệu và tương đương ≤ 20 triệu USDT, X = 20.000BKB',
    myRuleDetail3: 'Nếu Y là ≥ 20 triệu và tương đương ≤ 30 triệu USDT, X = 20.000BKB',
    myRuleDetail4: 'Nếu Y> 30 triệu USDT tương đương, X = 40.000BKB',
    myRuleDetail5: 'Lưu ý: Lời mời chỉ được coi là hợp lệ nếu người dùng mới thực hiện một giao dịch hợp lệ (với số tiền giao dịch thanh toán trước ≥100U) với BKSwap',
    toast2: 'Xin lỗi, địa chỉ này đã được mời',
    toast0: 'Xin lỗi, địa chỉ này đã đạt đến giới hạn mời tối đa',
    emptyToast: 'Trường địa chỉ không được để trống'
  },
  'staking':{
    stakingTitle: 'BKB đặt cược',
    AddPoolTitle: 'Thêm nhóm',
    MyPoolsTitle: 'Hồ bơi của tôi',
    stakingImg: 'Đặt cọc BKB Kiếm BKB',
    Introduce: 'Giới thiệu',
    content: 'BitKeep đã ra mắt BKB Staking để cung cấp cho người dùng cơ hội kiếm tiền. Những người nắm giữ BKB đặt cược vào BKB đang nhận được lợi nhuận từ nhóm BKB mỗi tuần. Sẽ có nhiều dự án khác có thể truy cập trong tương lai, cho phép bạn kiếm được nhiều tiền hơn. Khi đặt cược vào BKB của mình, bạn có thể chọn từ 4 nhóm đặt cược khác nhau với thời gian đáo hạn là 7 ngày, 30 ngày, 60 ngày và 90 ngày. Bạn sẽ được hưởng APY lần lượt là 20%, 30%, 40%, 50%. Lợi nhuận của bạn sẽ được tính toán và phân phối vào Cloud Wallet của bạn khi đáo hạn.',
    Data: 'Dữ liệu',
    StakedBKB: 'Đặt cọc BKB',
    totalSupply: 'BKB Tổng cung',
    EndsIn: 'Kết thúc ở',
    APY: 'APY',
    YourStakeAmount: 'Số tiền đặt cọc của bạn',
    Duration: 'Thời gian (Ngày)',
    StakeNow: 'Đặt cọc ngay bây giờ',
    SoldOut: 'Bán hết',
    ComingSoon: 'Sắp có',
    EthereumChainPool: 'Nhóm chuỗi Ethereum',
    BSCChainPool: 'Nhóm BSC chuỗi',
    StakeAmount: 'Số tiền đặt cọc',
    Available: 'Có sẵn',
    MAX: 'ĐA',
    StakeAmountLimiation: 'Giới hạn số tiền đặt cọc',
    Minimum: 'Tối thiểu',
    Maximum: 'Tối đa',
    Summary: 'Bản tóm tắt',
    StakeDate: 'Ngày đặt cọc',
    ValueDate: 'Ngày giá trị',
    InterestPeriod: 'Thời gian tính lãi',
    InterestEndDate: 'Ngày kết thúc lãi suất',
    RedemptionDate: 'Ngày cứu chuộc',
    EstimatedInterests: 'Tiền lãi ước tính',
    Staking: 'Đánh đập',
    Activity: 'Hoạt động',
    BeExpired: 'Đã hết hạn',
    Pledge: 'Lời hứa',
    Durations: 'Khoảng thời gian',
    PledgeDueDate: 'Ngày đến hạn cầm cố',
    CurrencyReward: 'Phần thưởng tiền tệ',
    Remove: 'Tẩy',
    Unstake: 'Không bắt đầu',
    Reward: 'Giải thưởng',
    Operate: 'Vận hành',
    Add: 'cộng',
    RemovePool: 'Xóa nhóm',
    getBKB: 'Xin chúc mừng！ Bạn nhận được',
    removeBefore: 'Nếu bạn xóa trước khi sự kiện kết thúc <br/> bạn sẽ mất tất cả các Sở thích. <br/> Bạn có chắc chắn xóa không？',
    Interests: 'Sở thích',
    Cancel: 'Hủy bỏ',
    Confirm: 'Xác nhận',
    Days: 'Ngày',
    authorization: 'Bạn đã hủy ủy quyền chữ ký!',
    stakeAmount: 'Số tiền đặt cược tham gia',
    know: 'VÂNG',
  },
  'trading':{
    tradingTitle: 'Phần thưởng giao dịch',
    know: 'VÂNG',
    ComingSoon: 'Sắp có',
    swapNow: 'Hoán đổi ngay',
    claim: 'Yêu cầu',
    tradingRule: 'Quy tắc giao dịch',
    learnMore: 'Tìm hiểu thêm',
    finished: 'Hoàn thành',
    Live: 'trực tiếp',
    Upcoming: 'Sắp tới',
    Past: 'Quá khứ',
    UnclaimedReward: 'Phần thưởng không có người nhận',
    Chain: 'Chuỗi thông minh Bianance',
    Ending: 'Hoàn thành',
    Start: 'Thời gian bắt đầu',
    Time: 'Thời gian',
    Reward: 'Giải thưởng',
    YourTradingValue: 'Giá trị giao dịch của bạn',
    TodayTradingValue: 'Giá trị giao dịch hôm nay',
    TodayTradingReward: 'Phần thưởng giao dịch hôm nay',
    YourTradingReward: 'Phần thưởng giao dịch của bạn',
    transaction: 'Tổng số tiền giao dịch',
    GetsBKB: 'Nhận số BKB',
    in: 'trong',
    make: 'Thực hiện một giao dịch',
    toGet: 'để lấy BKB',
    noticeBar: 'Sự kiện này sẽ không được hiểu là một lời khuyên đầu tư',
    ruleTitle: 'Quy tắc giao dịch',
    ruleContent: '1. Người dùng có thể truy cập trang Chi tiết hoặc trang Thị trường của một trong hai mã thông báo được chỉ định để vào trang Phần thưởng giao dịch; <br/> 2. Mọi hoán đổi đến / đi giữa hai mã thông báo được chỉ định sẽ được coi là hợp lệ; <br/> 3. Phần thưởng của một ngày nhất định sẽ được tính vào 00:00 (GMT + 8) ngày hôm sau, sau đó người dùng có thể nhận phần thưởng của họ; <br/> 4. Sự kiện này sẽ không được hiểu là một lời khuyên đầu tư',
    how: 'Làm thế nào để tham gia sự kiện Phần thưởng Giao dịch BKSwap?',
    how1: '1. Vui lòng xem:',
    how11: ' Để có hướng dẫn về BKSwap mới nhất.',
    how2: '2. Quy tắc:',
    howContent: 'Người dùng thực hiện giao dịch giữa một cặp mã thông báo cụ thể với BKSwap sẽ được thưởng',
    howContent1: 'Thông tin chi tiết:',
    Objectives1: 'Trong mỗi sự kiện, người dùng thực hiện giao dịch giữa một cặp mã thông báo cụ thể với BKSwap. Sau đó, một lượng BKB sẽ được tính theo tỷ lệ phần trăm của phí giao dịch trong ngày và được phân phối. Tất cả người dùng tham gia sự kiện trong ngày sẽ được thưởng theo tỷ lệ.',
    how3: '3. Phần thưởng giao dịch được tính như thế nào?',
    OverviewContent: 'Phần thưởng giao dịch được tính theo thời gian thực và người dùng có thể kiểm tra bất kỳ lúc nào trên trang "Phần thưởng giao dịch". Chu kỳ giải quyết của sự kiện là 24 giờ. Người dùng sẽ nhận được phần thưởng giao dịch của ngày hôm trước vào lúc 00:00 (GMT + 8) hàng ngày.',
    how4: '4. Làm thế nào để kiểm tra phần thưởng giao dịch của bạn?',
    OverviewContent4: 'Truy cập trang "Phần thưởng giao dịch" trong BitKeep để xem mọi thứ về lợi nhuận của bạn.',
    how5: '5. Làm thế nào để nhận phần thưởng giao dịch của bạn?',
    OverviewContent5: 'Truy cập trang "Phần thưởng giao dịch" và nhấn vào nút "Yêu cầu" để nhận phần thưởng của bạn.',
  
  }
}
