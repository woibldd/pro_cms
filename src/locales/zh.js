module.exports = {
    base: {
        loading: "加载中",
        success: '刷新成功',
        no_more: "没有更多了",
        networkErro:"网络开了小差",
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
    balance: '余额',
    get: '你可以兑换',
    swap: '兑换',
    exchange: 'cBKB 兑换 BKB 正式开启',
    exchangeTitle: 'cBKB 是基于 BKB 发行的积分凭证，cBKB 不可转账和不可交易，仅作为兑换 BKB 的积分凭证。cBKB 为 BitKeep官方发行，且百分之百可以兑换为 BKB。',
    exchangeTitleA: '针对用户前期通过生态奖励、盲盒、邀约、空投等形式获取到的 cBKB 现已开启兑换通道。用户可以自行兑换成  BKB。',
    exchangeTime: '兑换时间',
    time: '2021-10-20 12:00 — 11-03 12:00 (GMT+8)',
    condition: '兑换条件',
    conditionText: '用户必须用 BitKeep 钱包完成至少一次 Swap 操作，才能进行兑换。',
    proportion: '兑换比例',
    proportionText: 'cBKB 与 BKB 兑换比例为 60 : 1',
    exchangeTitle2: '* BitKeep 享有本次兑换活动规则的最终决定权和解释权。我们保留取消任何作弊、疑似作弊或违反 BitKeep 任何规章制度的用户参与资格的权利。',
    exchangeTitle3: '了解更多 BKB 的空投活动及进展，欢迎⼤家可以及时关注 BitKeep 社区公告。',
    about: '关于 BKB',
    viewAll: '查看全部',
    pickUp: '收起',
    aboutContent1: '持有 BKB 将享有生态治理权益，同时也是 BitKeep 生态支付手段和会员权益的身份证明。',
    aboutContent2: 'BKB 可用于多条公链资源购买、钱包 VIP 功能解锁、BitKeep 广告费用支付等场景。',
    distribution: 'BKB 发行及分配情况',
    total: 'BKB 总供应量：',
    mining: '复合性挖矿',
    community: '社区',
    tram: '团队及早期投资人',
    partner: '合作伙伴',
    eco: '生态建设',
    hold: '持有 BKB 权益',
    hold1: '1.获取 BitSwap 手续费折扣。',
    hold2: '2.支付 BitKeep NFT Market 服务。',
    hold3: '3.获取 BitKeep Pools 付费功能。',
    hold4: '4.获取 BitKeep Pay 支付减免功能。',
    hold5: '5.获取 BitKeep Fin 加息券奖励，用以支持整个产品生态。',
    hold6: '6.获取 BitKeep 商务体系中的支付减免。',
    hold7: '7.获取 BitKeep syrup pools 中的不定期空投奖励。',
    hold8: '8.BKB StaKing 奖励',
    appreciation: 'BKB 价值提升',
    appreciationSwap: 'Swap 手续费抵扣',
    appreciationCoin: '支付货币',
    appreciationPool: '多重质押池 ',
    appreciationValut: '机枪池',
    more: '更多关于 BKB',
    website: 'Official website',
    paper: 'White paper',
    twitter: 'Twitter',
    github: 'Github',
    telegram: 'Telegram',
    facebook: 'Facebook',
    explorer: 'Block explorer',
    know: '知道了',
    swapTitle: 'cBKB 兑换'
  },
    'airdrop':{
      get: '你可领取',
      receive: '领取',
      airdrop: 'BKB 空投活动',
      airdropContent: 'BKB 总量 6 亿枚，是 BitKeep 生态的生态令牌，用户持有 BKB 将享有生态治理权益，也是生态支付手段和会员权益的身份证明。',
      time: '活动时间',
      timeContent: '2021.10.18 20:00 — 2021.10.28 00:00 (GMT+8)',
      particlpation: '领取条件',
      particlpation1: '从 2020.07.01 到 2021.10.01',
      particlpation2: '以下三个条件满足其一即视为合格用户，可获得空投参与资格。',
      particlpation3: 'A: 使用 BitKeep 两次及两次以上并均转账成功，视为 A 类合格用户；',
      particlpation4: 'B: 使用 BKswap 并交易成功，视为 B 类合格用户；',
      particlpation5: 'C: 在 BitKeep NFT 板块成功存入 NFT 资产，视为 C 类合格用户。',
      rules: '活动规则',
      rules1: '1.加⼊到 BitKeep 官方 telegram 社群(https://t.me/bitkeep)和 discord 社群(https://discord.com/invite/qYTatUzNjM);',
      rules2: '2.在空投活动期间，满足参与条件的用户使用 BKSwap 一次及一次以上并交易成功，即获得空投奖励；',
      rules3: '3.A 类合格用户完成上述任务将获得 125个 BKB、B 类合格用户完成上述任务将获得 1250个 BKB、C 类合格用户完成上述任务将获得 250个 BKB。',
      note: '* BitKeep 享有本次推广活动规则的最终决定权和解释权。我们保留取消任何作弊、疑似作弊或违反 BitKeep 任何规章制度的用户参与资格的权利。 ',
      airdropTitle: '领取 BKB 空投',
      notStart: '空投活动还未开始'
    },
    'mining':{
        loading: "loading...",
        success: 'Successfully',
        pull: 'Loose to refresh...',
        miningTitle: 'Trading Reward',
        coundown: 'Countdown',
        comingsoon: 'Upcoming',
        inProgress: 'Live',
        startCountdown: 'Start countdown ',
        endCountdown: 'End countdown ',
        rewardPool: 'Trading Data',
        update: 'Update',
        will: 'Reward distribution within this week',
        tradingVolume: 'Trading Volume',
        tradingIn: 'Trading in today',
        userTodayValue: 'Today Trade Volume',
        myRewards: 'My Rewards',
        totalTrading: 'Total Trade Volume',
        activity: 'End',
        Introduce: 'Introduce',
        todyVolue: 'Today Volue',
        totalRewards: 'Total Rewards',
        yesterdayRewards: 'Today Rewards',
        miningRuleTitle: 'Event Rules',
        miningRule: 'Data used to calculate Trading Rewards of BKB. Trading Rewards are provided by the BitKeep Wallet.Overview of the.…',
        learnMore: 'Learn more',
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
        RuleTitle: 'Invite Rules',
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
        nftTitle: 'NFT 抽奖',
        lotteryTime: '抽奖时间',
        qualificationTime: '获取资格时间',
        not: '没有中奖',
        getNft: '领取 NFT',
        drawNow: '立即抽奖',
        getEligibility: '获取资格',
        rules: '活动规则',
        rule1: '在NFT版块做抽奖活动，参与的用户需满足以下两个条件：',
        rule2: '1.用户必须持有BKB（可通过空投、邀请好友获得BKB）',
        rule3: '2.必须存入NFT资产',
        rule4: '满足以上两个条件用户，即拥有BK每次NFT抽奖活动的资格',
        note: '* BitKeep 享有本次推广活动规则的最终决定权和解释权。我们保留取消任何作弊、疑似作弊或违反 BitKeep 任何规章制度的用户参与资格的权利。',
        dialogTitle: '恭喜您抽中一张 NFT！',
        btn: '知道了',
        endCountdown : '到计时'
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
      }
}
