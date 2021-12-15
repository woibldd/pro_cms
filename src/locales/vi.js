module.exports = {
  base: {
    loading: "Đang tải",
    no_more: "Không còn nữa",
    success: 'Làm mới thành công',
    networkErro:"Internet đã trở nên tồi tệ"
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
    how2: '2. Quy tắc về phần thưởng giao dịch:',
    howContent: 'Có 3 mức phần thưởng giao dịch BKSwap:',
    Objectives1: 'Tổng số tiền giao dịch của BKSwap trong ngày nhỏ hơn hoặc bằng 5 triệu USDT, theo quy định của hợp đồng, BKB sẽ được phát hành 300% phí giao dịch trong ngày làm tổng phần thưởng trong ngày, và tất cả người dùng tham gia giao dịch trong ngày sẽ được chia theo tỷ lệ.',
    Objectives2: 'Khi tổng số tiền giao dịch trên BKSwap vào một ngày nhất định rơi vào khoảng từ 5 triệu đến 20 triệu USDT tương đương, thì theo quy tắc hợp đồng, BitKeep sẽ cung cấp một số tiền BKB tương đương 200% phí giao dịch trong ngày làm phần thưởng của ngày. Tất cả người dùng tham gia giao dịch BKSwap trong ngày sẽ nhận được một phần tương xứng',
    Objectives3: 'Khi tổng số tiền giao dịch trên BKSwap trong một ngày nhất định vượt quá 20 triệu USDT tương đương, thì theo quy định của hợp đồng, BitKeep sẽ cung cấp số tiền BKB bằng 100% phí giao dịch trong ngày làm phần thưởng trong ngày. Tất cả người dùng tham gia giao dịch BKSwap trong ngày sẽ nhận được một phần tương xứng',
    how3: '3. Thời gian diễn ra sự kiện Phần thưởng giao dịch BKSwap đợt đầu tiên',
    OverviewContent: 'Vòng đầu tiên của sự kiện Phần thưởng giao dịch BKSwap sẽ được tổ chức từ ngày 29 tháng 11 năm 2021 lúc 12:00 PM (GMT + 8) đến ngày 3 tháng 12 năm 2021 lúc 12:00 PM (GMT + 8)',
    how4: '4. Phần thưởng giao dịch được tính như thế nào?',
    how4Content: 'Phần thưởng giao dịch được tính theo thời gian thực và người dùng có thể kiểm tra bất kỳ lúc nào trên trang "Phần thưởng giao dịch". Chu kỳ giải quyết của sự kiện là 24 giờ. Người dùng sẽ nhận được phần thưởng giao dịch của họ cho ngày hôm trước lúc 12:00 PM (GMT + 8) hàng ngày. Ví dụ: Người dùng sẽ nhận được phần thưởng giao dịch vào ngày 29 tháng 11 năm 2021 vào ngày 30 tháng 11 năm 2021 lúc 12:00 (CH). Nó sẽ giống nhau cho mỗi ngày tiếp theo. Đối với phần thưởng cho ngày 3 tháng 12 năm 2021, người dùng sẽ nhận được chúng trên Tài liệu. 4, 2021 lúc 12:00 (CH) (đúng một ngày sau khi sự kiện kết thúc)',
    how5: '5. Làm thế nào để kiểm tra phần thưởng giao dịch của bạn?',
    how5Content: 'Truy cập trang "Phần thưởng giao dịch" trong BitKeep để xem mọi thứ về lợi nhuận của bạn.',
    how6: '6. Làm thế nào để nhận phần thưởng giao dịch của bạn?',
    how6Content: 'Truy cập trang "Phần thưởng giao dịch" và nhấn vào nút "Yêu cầu" để nhận phần thưởng của bạn.',
    FQATitle: 'Câu hỏi thường gặp (FAQ)',
    FQATitle1: '1.Phần thưởng giao dịch của tôi được tính như thế nào?',
    FQAContent1: 'Phần thưởng giao dịch được tính theo thời gian thực và người dùng có thể kiểm tra bất kỳ lúc nào trên trang "Phần thưởng giao dịch".',
    FQATitle2: '2. Khi nào vòng đầu tiên của sự kiện Phần thưởng giao dịch BKSwap sẽ được tổ chức?',
    FQAContent2: 'Vòng đầu tiên của Phần thưởng giao dịch BKSwap sẽ được tổ chức từ ngày 29 tháng 11 năm 2021 lúc 12:00 PM (GMT + 8) đến ngày 3 tháng 12 năm 2021 lúc 12:00 PM (GMT + 8), tổng cộng 4 ngày. Hãy theo dõi vì sẽ có các vòng tiếp theo.',
    FQATitle3: '3. Phần thưởng giao dịch có được thanh toán trong thời gian thực không?',
    FQAContent3: 'Phần thưởng giao dịch được tính theo thời gian thực. Người dùng có thể kiểm tra kết quả bất kỳ lúc nào trên trang "Phần thưởng giao dịch". Nhưng chu kỳ thanh toán phần thưởng giao dịch là 24 giờ, người dùng sẽ nhận được phần thưởng giao dịch của họ cho ngày hôm trước vào buổi trưa hàng ngày.',
    FQATitle4: '4. Tôi đã tham gia sự kiện Phần thưởng giao dịch BKSwap, tôi có thể xem BKB mà tôi đã được thưởng ở đâu?',
    FQAContent4: 'Sau khi nhận phần thưởng BKB của bạn, vui lòng truy cập 「Cloud Wallet」 để kiểm tra chúng. Nếu bạn chưa kích hoạt 「Cloud Wallet」 của mình, chỉ cần nhấn vào thanh NAV ở góc trên cùng bên phải của trang đích, sau đó chọn 「Cloud Wallet」 để kích hoạt.',
    FQAContent41: 'Bạn cũng có thể chuyển BKB của mình từ 「Cloud Wallet」 sang địa chỉ ETH / BSC. Để biết thêm thông tin hướng dẫn về BitKeep Cloud Wallet, vui lòng nhấn vào liên kết: https://bitkeepblog.medium.com/?p=79771d2baedb',
    FQATitle5: '5. Các cách để lấy BKB là gì?',
    FQAContent5: 'Sẽ có một sự kiện khác, đó là sự kiện BKB Blind Box. Người dùng có thể mời bạn bè để mở khóa các hộp mù chứa số lượng BKB khác nhau. Cả người dùng và những người đóng góp đều có thể nhận được phần của họ về BKB. BitKeep sẽ tiếp tục hợp tác với các dự án mã thông báo khác để cùng tổ chức airdrop và các sự kiện khác, đồng thời tặng phần thưởng BKB. Ngoài ra, sự kiện Đánh cược BKB của chúng tôi sắp diễn ra. Đừng bỏ lỡ nó.',
    FQATitle6: '6. Tương lai cho BKB là gì?',
    FQAContent6: 'Chủ sở hữu BKB sẽ có thể thanh toán phí gas của họ bằng BKB và tận hưởng trải nghiệm thanh toán thuận tiện trong Bridge xuyên chuỗi của chúng tôi. Cũng:',
    FQAContent61: 'Chủ sở hữu BKB sẽ có đặc quyền tham gia vào các đợt airdrop BitKeep hàng tuần;',
    FQAContent62: 'Chủ sở hữu BKB đặt tài sản NFT của họ vào Ví BitKeep sẽ đủ điều kiện tham gia rút thăm NFT;',
    FQAContent63: 'Chủ sở hữu BKB có cơ hội tham gia IWO của các dự án chất lượng cao thông qua việc đặt BKB của họ',
    FQAContent64: 'Chủ sở hữu BKB sẽ được thưởng khi giao dịch;',
    FQAContent65: 'Chủ sở hữu BKB sẽ được chiết khấu phí giao dịch cho các giao dịch BKSwap;',
    FQAContent66: 'Chủ sở hữu BKB sẽ nhận được Phiếu thưởng tăng giá BitKeep Defi;',
    FQAContent67: 'Chủ sở hữu BKB sẽ được thưởng khi đặt cược;',
    FQAContent68: 'và nhiều hơn nữa sẽ đến trong tương lai.',
    FQAContentNote: 'Lưu ý: Người dùng phải kích hoạt ví điện toán đám mây của mình trong ứng dụng BitKeep để nhận BKB (nếu bạn chưa kích hoạt ví điện toán đám mây, chỉ cần nhấn vào thanh NAV ở góc trên cùng bên phải trên trang đích, sau đó chọn Ví điện toán đám mây để kích hoạt)',    
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
    confirm: 'Xác nhận',
    noData: 'Không có dữ liệu',
    invitationReward: "Phần thưởng lời mời",
    myInvitationRewards: "Phần thưởng lời mời của tôi",
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
  }
}
