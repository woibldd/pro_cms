(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{602:function(t,a,e){},664:function(t,a,e){"use strict";e(602)},745:function(t,a,e){"use strict";e.r(a);var n=[function(){var t=this,a=t.$createElement;return(a=t._self._c||a)("div",{staticClass:"polygon-top1"},[a("div",{staticClass:"polygon-top-left"},[a("h1",{staticClass:"one TTODbold"},[t._v("BitKeep\n      ")]),t._v(" "),a("h1",{staticClass:"two TTOMedium"},[t._v("Genesis NFT Sale")])]),t._v(" "),a("div",{staticClass:"polygon-top-right"},[a("img",{attrs:{src:e(594),alt:""}})])])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"polygon-top-left"},[t("img",{staticClass:"bg0",attrs:{src:e(511),alt:""}}),this._v(" "),t("img",{staticClass:"bg8",attrs:{src:e(595),alt:""}})])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"polygon-top-middle"},[t("img",{attrs:{src:e(596),alt:""}}),this._v(" "),t("div",{staticClass:"g-line"})])},function(){var t=this,a=t.$createElement;return(a=t._self._c||a)("div",{staticClass:"item"},[a("p",{staticClass:"TTORegular title"},[t._v("Price")]),t._v(" "),a("p",{staticClass:"TTOMedium content"},[t._v("\n            100\n            "),a("span",[t._v("MATIC")])])])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"contentTitle"},[t("h1",{staticClass:"TTORegular"},[this._v("Load Map"),t("div",{staticClass:"line"})])])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"logoBg"},[t("img",{attrs:{src:e(597),alt:""}}),this._v(" "),t("img",{attrs:{src:e(598),alt:""}})])}],r=e(362),o=e(40),s=e(22),c=e(3),i=(e(67),e(36),e(55),e(42),e(95),e(233),e(49),e(157),e(68),e(41),e(580)),l=e(581),d=e(582),u=e(583),v=e(584),g=e(585),m=e(586),p=e(587),f=e(599),_=e(116),h=e(360),T=(e(600),e(156)),C=e(367),w=e(601),x=e.n(w);p={name:"polygon",layout:"polygon/default",mixins:[C.a],data:function(){return{isLoading:!1,defaultData:{isInvite:!0},startTime:(new Date).getTime(),endTime:0,format:"{dd}天{hh}小时{mm}分钟{ss}秒",show:!1,showMint:!1,showMent:!1,invitationCode:"",showAirdropAddress:!1,showAirdropAward:!1,showInvitedlist:!1,showWhitelist:!1,showMintSuccess:!1,chainName:"matic",chain:"matic",ChainId:"137",contract:"0xDE2A32e5363d01a89e3624442F8f5c43F38fc53a",symbol:"Polygon Warrior",address:"",token:"",LotteryList:[],MintData:[],MentList:[],invitationError:"",sendhash:""}},computed:{lang:function(){return this.$t("polygon")}},components:{Countdown:i.default,Mint:l.default,AirdropAddressCard:u.default,AirdropAwardCard:v.default,InvitedCard:g.default,Whitelistcard:m.default,MintSuccessCard:p.default,Ment:d.default},mounted:function(){var a=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(T.c)();case 2:return t.next=4,a.connect();case 4:a.nftMintLotteryList(),a.nftMintGetInfo(a.address||"","matic"),a.watchAddress();case 7:case"end":return t.stop()}}),t)})))()},methods:{handleCopy:function(t){x()(t),this.$toast.success(this.$t("polygon.copySuccess"))},watchAddress:function(){var t=this;this.timer=setInterval((function(){"undefined"!=typeof ethereum&&ethereum.selectedAddress&&(clearInterval(t.timer),t.connect())}),300)},inputFormatter:function(t){return t.replace(/[^\d|a-z|A-Z]/g,"")},connect:function(){var a=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.a.connect();case 3:a.init(),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),a.init();case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()},init:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_.a.isConnected()){e.next=3;break}return e.next=3,_.a.connect();case 3:return e.next=5,_.a.getAccounts();case 5:a=e.sent,a=(a=Object(s.a)(a,1))[0],t.address=a,t.nftMintGetInfo(t.address||"","matic"),t.nftMintnftList();case 11:case"end":return e.stop()}}),e)})))()},nftMintGetInfo:function(i,t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var a,r,s,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isLoading=!0,n.next=3,h.a.nftMintGetInfo({address:i,chain:t});case 3:if(r=n.sent,a=r.data,r=r.status,e.isLoading=!1,0!=r){n.next=23;break}if(e.defaultData=a,e.endTime=0<a.fromStartTime?(new Date).getTime()+a.fromStartTime:0,0<a.fromStartTime&&(s=e.endTime,setInterval((function(){var t=(new Date).getTime();s<=t+1e3&&location.reload()}),1e3)),!(0<+a.luckNum)){n.next=23;break}if(o=(new Date).setHours(23,59,59,999)-(new Date).getTime(),f.a.getItem("luckaddress")){n.next=17;break}f.a.setItem({name:"luckaddress",value:e.address,expires:o}),n.next=22;break;case 17:if(0!=f.a.getItem("luckaddress").split("|").filter((function(t){return t==e.address})).length){n.next=21;break}f.a.setItem({name:"luckaddress",value:f.a.getItem("luckaddress")+"|"+e.address,expires:o}),n.next=22;break;case 21:return n.abrupt("return",!1);case 22:e.showAirdropAward=!0;case 23:case"end":return n.stop()}}),n)})))()},nftMintLotteryList:function(){var s=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var a,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.isLoading=!0,t.next=3,h.a.nftMintLotteryList();case 3:if(e=t.sent,a=e.data,e=e.status,s.isLoading=!1,1==e)return t.abrupt("return",s.$dialog.alert({className:"polygon-dialog",message:a,confirmButtonText:s.$t("polygon.iknow"),confirmButtonColor:"#7524f9"}));t.next=9;break;case 9:s.LotteryList=a.list;case 10:case"end":return t.stop()}}),t)})))()},nftMintnftList:function(){var s=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var a,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.isLoading=!0,s.address){t.next=3;break}return t.abrupt("return",!1);case 3:return t.next=5,h.a.nftMintnftList({address:s.address,chain:s.chainName});case 5:if(e=t.sent,a=e.data,e=e.status,s.isLoading=!1,1==e)return t.abrupt("return",s.$dialog.alert({className:"polygon-dialog",message:a,confirmButtonText:s.$t("polygon.iknow"),confirmButtonColor:"#7524f9"}));t.next=11;break;case 11:s.MentList=a.list;case 12:case"end":return t.stop()}}),t)})))()},InvitationCode:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.getAccounts();case 2:a=e.sent,a=(a=Object(s.a)(a,1))[0],t.address=a,t.show=!0;case 7:case"end":return e.stop()}}),e)})))()},paste:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(navigator.clipboard)return e.next=3,navigator.clipboard.readText();e.next=7;break;case 3:(a=e.sent).replace(/\s/g,"")?t.invitationCode=a.replace(/\s/g,""):t.$toast(t.$t("polygon.pasteTips1")),e.next=8;break;case 7:t.$toast({message:t.$t("polygon.pasteTips2"),duration:2e3});case 8:case"end":return e.stop()}}),e)})))()},getToken:function(s){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.nftMintGetToken({address:s});case 2:if(a=e.sent,n=a.data,1==a.status)return e.abrupt("return",t.$dialog.alert({className:"polygon-dialog",message:n,confirmButtonText:t.$t("polygon.iknow"),confirmButtonColor:"#7524f9"}));e.next=7;break;case 7:t.token=n.token;case 8:case"end":return e.stop()}}),e)})))()},invitationCodeSubmit:function(){var s=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var a,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.invitationError="",s.invitationCode){t.next=4;break}return s.$toast(s.$t("polygon.enterCode2")),t.abrupt("return");case 4:return t.prev=4,t.next=7,h.a.nftMintInvite({address:s.address,chain:"matic",code:s.invitationCode,c_token:"",verifyToken:""});case 7:if(a=t.sent,e=a.data,1==a.status)return s.invitationError=e,t.abrupt("return");t.next=13;break;case 13:s.$toast(s.$t("polygon.InvitationSucceeded")),s.defaultData.isInvite=!0,s.show=!1,t.next=21;break;case 18:t.prev=18,t.t0=t.catch(4),s.$toast.fail("object"==Object(o.a)(t.t0)?t.t0.message||"error":t.t0);case 21:case"end":return t.stop()}}),t,null,[[4,18]])})))()},closeinvitationCode:function(){this.show=!1,this.invitationError="",this.invitationCode=""},closeMint:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var a,l,s,d,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.showMint=!1,t)return n.next=4,_.a.getChainId();n.next=29;break;case 4:if(l=n.sent,Number(l)!=e.ChainId)return e.$dialog.alert({className:"polygon-dialog",message:e.$t("polygon.switchChain1"),confirmButtonText:e.$t("polygon.switchChain2"),confirmButtonColor:"#7524f9"}).then((function(){try{window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:_.a.transfer16(e.ChainId)}]})}catch(t){ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:_.a.transfer16(e.ChainId),chainName:"Polygon",rpcUrls:[" https://polygon-rpc.com"],nativeCurrency:{name:"Polygon",symbol:"Polygon",decimals:18}}]})}})),n.abrupt("return");n.next=8;break;case 8:return n.next=10,h.a.buildNftMintTxs({address:e.address,chain:"matic",num:t});case 10:if(1==(a=n.sent).status)return e.isLoading=!1,n.abrupt("return",e.$dialog.alert({className:"polygon-dialog",message:a.data,confirmButtonText:e.$t("polygon.iknow"),confirmButtonColor:"#7524f9"}));n.next=14;break;case 14:return l={gas:a.data.tx.fee.gasLimitMax||a.data.tx.fee.gasLimit,gasPrice:a.data.tx.fee.gasPrice,nonce:String(a.data.tx.nonce),to:a.data.tx.to,from:a.data.tx.from,value:a.data.tx.value,data:a.data.tx.data,chainId:a.data.tx.chainId},n.prev=15,e.isLoading=!0,n.next=19,_.a.setMintToken(l);case 19:s=n.sent,d=setInterval(Object(c.a)(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.nftMintcheckTransaction({chain:"matic",hash:s});case 2:if(n=t.sent,a=n.data,n=n.status,e.isLoading=!1,1==n)return e.isLoading=!1,t.abrupt("return",e.$dialog.alert({className:"polygon-dialog",message:a,confirmButtonText:e.$t("polygon.iknow"),confirmButtonColor:"#7524f9"}));t.next=9;break;case 9:if(1==a.status&&(clearInterval(d),clearTimeout(i),e.isLoading=!1,e.$toast.success("Mint "+e.$t("polygon.success")),e.MintData=a.list,(n=console).log.apply(n,["list"].concat(Object(r.a)(a.list))),(n=e.MentList).push.apply(n,Object(r.a)(a.list)),e.nftMintGetInfo(e.address||"",e.chainName),e.showMintSuccess=!0,e.addCoin(e.contract,e.chain,e.contract+"#BK#NFT")),2==a.status)return clearInterval(d),clearTimeout(i),e.isLoading=!1,e.init(),t.abrupt("return",e.$dialog.alert({className:"polygon-dialog",message:"Mint "+e.$t("polygon.faild"),confirmButtonText:e.$t("polygon.iknow"),confirmButtonColor:"#7524f9"}));t.next=16;break;case 16:case"end":return t.stop()}}),t)}))),3e3),i=setTimeout((function(){e.isLoading=!1,e.init(),clearInterval(d),e.$dialog.alert({className:"polygon-dialog",message:"Mint "+e.$t("polygon.faild"),confirmButtonText:e.$t("polygon.iknow")})}),3e4),n.next=29;break;case 25:n.prev=25,n.t0=n.catch(15),e.isLoading=!1,e.$toast.fail("object"==Object(o.a)(n.t0)?n.t0.message||"error":n.t0);case 29:case"end":return n.stop()}}),n,null,[[15,25]])})))()},ableMent:function(a){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0==a.length)return e.abrupt("return",t.$dialog.alert({className:"polygon-dialog",message:t.$t("polygon.noNft")}));e.next=2;break;case 2:t.showMent=!0;case 3:case"end":return e.stop()}}),e)})))()},closeMent:function(s){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var a,n,r,i,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.showMent=!1,s)return e.next=4,_.a.getChainId();e.next=28;break;case 4:if(n=e.sent,Number(n)!=t.ChainId)return t.$dialog.alert({className:"polygon-dialog",message:t.$t("polygon.switchChain1"),confirmButtonText:t.$t("polygon.switchChain2"),confirmButtonColor:"#7524f9"}).then((function(){try{window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:_.a.transfer16(t.ChainId)}]})}catch(e){ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:_.a.transfer16(t.ChainId),chainName:"Polygon",rpcUrls:[" https://polygon-rpc.com"],nativeCurrency:{name:"Polygon",symbol:"Polygon",decimals:18}}]})}})),e.abrupt("return");e.next=8;break;case 8:return t.isLoading=!0,e.next=11,h.a.nftMintbuildNftMeltTxs({address:t.address,chain:"matic",nftIds:s.join(",")});case 11:if(1==(a=e.sent).status)return t.isLoading=!1,e.abrupt("return",t.$dialog.alert({className:"polygon-dialog",message:a.data,confirmButtonText:t.$t("polygon.iknow"),confirmButtonColor:"#7524f9"}));e.next=15;break;case 15:return n={gas:a.data.tx.fee.gasLimitMax||a.data.tx.fee.gasLimit,gasPrice:a.data.tx.fee.gasPrice,nonce:String(a.data.tx.nonce),to:a.data.tx.to,from:a.data.tx.from,value:a.data.tx.value,data:a.data.tx.data,chainId:a.data.tx.chainId},e.prev=16,e.next=19,_.a.setMintToken(n);case 19:r=e.sent,i=setInterval(Object(c.a)(regeneratorRuntime.mark((function e(){var a,n,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.nftMintcheckTransaction({chain:"matic",hash:r});case 2:if(a=e.sent,n=a.data,1==a.status)return t.isLoading=!1,e.abrupt("return",t.$dialog.alert({className:"polygon-dialog",message:n,confirmButtonText:t.$t("polygon.iknow"),confirmButtonColor:"#7524f9"}));e.next=8;break;case 8:if(1==n.status&&(clearInterval(i),clearTimeout(l),t.isLoading=!1,t.$toast("MELT"+t.$t("polygon.success")),s=n.list.map((function(t){return t.tokenId})),t.MentList=t.MentList.filter((function(t){return-1==s.indexOf(t.tokenId)}))),2==n.status)return clearInterval(i),clearTimeout(l),t.isLoading=!1,t.init(),e.abrupt("return",t.$dialog.alert({className:"polygon-dialog",message:"MELT "+t.$t("polygon.faild"),confirmButtonText:t.$t("polygon.iknow"),confirmButtonColor:"#7524f9"}));e.next=15;break;case 15:case"end":return e.stop()}}),e)}))),3e3),l=setTimeout((function(){t.isLoading=!1,t.init(),i&&clearInterval(i),t.$dialog.alert({className:"polygon-dialog",message:"MELT"+t.$t("polygon.faild"),confirmButtonText:$t("polygon.iknow")})}),3e4),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(16),t.isLoading=!1,t.$toast.fail("object"==Object(o.a)(e.t0)?e.t0.message||"error":e.t0);case 28:case"end":return e.stop()}}),e,null,[[16,24]])})))()},closeAirdropAddressCard:function(){this.showAirdropAddress=!1},closeAirdropAwardCard:function(){this.showAirdropAward=!1},closeInvitedCard:function(){this.showInvitedlist=!1},closeWhitelistcard:function(){this.showWhitelist=!1},closeMintSuccess:function(){this.showMintSuccess=!1,this.isLoading=!1},simplify:function(t){return t.substring(0,6)+"..."+t.substring(t.length-4)}}},e(664),d=e(27),n=Object(d.a)(p,(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"polygon-contet"},[t._m(0),t._v(" "),s("div",{staticClass:"polygon-top2"},[s("div",{staticClass:"polygon-m-InvitationBox"},[!t.address||t.defaultData.isInvite||t.defaultData.inviteCode?t._e():s("div",{staticClass:"InvitationCodeBtn",on:{click:t.InvitationCode}},[t._v(t._s(t.lang.enterCode))])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"polygon-top-right"},[0<t.defaultData.fromStartTime?s("p",{staticClass:"RemainingtimeText TTORegular"},[t._v(t._s(t.lang.remainingTime))]):t._e(),t._v(" "),0<t.defaultData.fromStartTime?s("div",{staticClass:"Countdown"},[s("Countdown",{attrs:{startTime:t.startTime,endTime:t.endTime,format:t.format}})],1):t._e(),t._v(" "),s("div",{staticClass:"Minted"},[s("div",{staticClass:"item"},[s("p",{staticClass:"TTORegular title"},[t._v("Total Minted")]),t._v(" "),s("p",{staticClass:"TTOMedium content"},[t._v(t._s(t.defaultData.totalMinted||0)+"/"+t._s(t.defaultData.allNftNum||1e4))])]),t._v(" "),t._m(3)]),t._v(" "),s("div",{staticClass:"contract"},[s("label",{staticClass:"TTORegular title"},[t._v(t._s(t.lang.contractAddress)+":")]),t._v(" "),s("span",{staticClass:"TTORegular "},[t._v(t._s(t.simplify(t.contract)))]),t._v(" "),s("span",{staticClass:"TTOMedium copy",on:{click:function(e){return t.handleCopy(t.contract)}}},[t._v("COPY")])]),t._v(" "),t.defaultData.isMint||t.defaultData.isMelt?s("div",{staticClass:"MintBtn"},[s("div",{staticClass:"item"},[s("div",{staticClass:"MINT TTOMedium",on:{click:function(e){t.showMint=!0}}},[t._v("MINT")])]),t._v(" "),t.defaultData.isMelt?s("div",{staticClass:"item"},[s("div",{staticClass:"MELTActive TTOMedium",on:{click:function(e){return t.ableMent(t.MentList)}}},[t._v("\n            MELT\n          ")])]):s("div",{staticClass:"item"},[s("div",{staticClass:"MELT TTOMedium"},[t._v("MELT \n          ")])])]):t._e(),t._v(" "),s("div",{staticClass:"tipstext-wrap Background0"},[t.defaultData.isMelt?s("div",{staticClass:"TTORegular tipstext"},[t._v(t._s(t.lang.tipsText2))]):s("div",{staticClass:"TTORegular tipstext"},[t._v(t._s(t.lang.tipsText1))])]),t._v(" "),s("img",{staticClass:"Py_bg2",attrs:{src:e(590),alt:""}})])]),t._v(" "),s("div",{staticClass:"polygonContentBox"},[s("div",{staticClass:"RightsAndInterests"},[s("div",{staticClass:"contentTitle"},[s("h1",{staticClass:"TTORegular"},[t._v(t._s(t.lang.rights)),s("div",{staticClass:"line"})])]),t._v(" "),s("div",{staticClass:"RightsAndInterestsContent"},[s("div",{staticClass:"invitationBox"},[s("img",{staticClass:"m-InvitationCodeBg",attrs:{src:e(591),alt:""}}),t._v(" "),s("div",{staticClass:"TTODbold card1 Background0"},[t._v(t._s(t.lang.inviteFriends))])]),t._v(" "),s("div",{staticClass:"infoBox"},[s("div",{staticClass:"itembox1 TTORegular"},[s("p",{staticClass:"TTORegular"},[t._v("\n               "+t._s(t.lang.info1)+"\n            ")]),t._v(" "),s("p",{staticClass:"TTORegular"},[t._v(t._s(t.lang.info2))]),t._v(" "),s("p",{staticClass:"TTORegular"},[t._v(t._s(t.lang.info3))]),t._v(" "),s("p",{staticClass:"TTORegular",staticStyle:{"margin-bottom":"0px"}},[t._v("\n              "+t._s(t.lang.info4)+" "),s("br"),t._v("\n              "+t._s(t.lang.info5)+" "),s("br"),t._v("\n              "+t._s(t.lang.info6)),s("br"),t._v("\n              "+t._s(t.lang.info7)),s("br"),t._v("\n              "+t._s(t.lang.info8)+"\n            ")]),t._v(" "),0!=t.defaultData.inviteCode?s("div",{staticClass:"InvitationCodeBox"},[s("div",{staticClass:"InvitationCode Background0"},[s("span",{staticClass:"TTORegular text"},[t._v(t._s(t.lang.inviteCode))]),t._v(" "),s("span",{staticClass:"TTODbold code"},[t._v(t._s(t.defaultData.inviteCode))]),t._v(" "),s("span",{staticClass:"line"}),t._v(" "),s("span",{staticClass:"TTODbold copy",on:{click:function(e){return t.handleCopy(t.defaultData.inviteCode)}}},[t._v("COPY")])])]):t._e()]),t._v(" "),s("div",{staticClass:"itembox2 Background0"},[s("div",{staticClass:"addressTitle"},[s("p",{staticClass:"TTORegular text1"},[s("label",[t._v(t._s(t.lang.inviteCount)+" ")]),t._v(" "),s("span",{staticClass:"TTOMedium"},[t._v(t._s(t.defaultData.inviteNum))]),t._v(" "),0!=t.defaultData.inviteNum?s("span",{staticClass:"viewInvitee TTORegular",on:{click:function(e){t.showInvitedlist=!0}}},[t._v(t._s(t.lang.inviteShow))]):t._e()]),t._v(" "),s("p",{staticClass:"TTORegular text2"},[t._v(t._s(t.lang.inviteTips1))])]),t._v(" "),s("div",{staticClass:"addresslistBox"},[0==t.defaultData.inviteNum?s("div",{staticClass:"noData TTOMedium"},[t._v("0")]):s("div",{staticClass:"addresslist"},t._l(t.defaultData.inviteAddress,(function(e){return s("div",{key:e,staticClass:"addressItem TTORegular"},[s("span",{staticClass:"TTORegular"},[t._v(t._s(t.lang.inviteAddress))]),t._v(" "),s("p",{staticClass:"TTORegular"},[t._v("\n                    "+t._s(e))])])})),0)])]),t._v(" "),s("div",{staticClass:"itembox3 TTORegular Background0"},[s("h2",{staticClass:"TTORegular"},[t._v(t._s(t.lang.whiteTitle))]),t._v(" "),s("div",{staticClass:"TTORegular"},[t._v("\n              "+t._s(t.lang.whiteTips1)+" "),s("br"),t._v("\n              "+t._s(t.lang.whiteTips2)),s("br"),t._v("\n              "+t._s(t.lang.whiteTips3)),s("br"),t._v("\n              "+t._s(t.lang.whiteTips4))]),t._v(" "),s("h2",{staticClass:"TTORegular"},[t._v(t._s(t.lang.whiteTips9))]),t._v(" "),s("div",{staticClass:"TTORegular"},[t._v("\n              "+t._s(t.lang.whiteTips5)),s("br"),t._v("\n              "+t._s(t.lang.whiteTips6)),s("br")])])])])]),t._v(" "),s("div",{staticClass:"ShortaddressContent"},[s("div",{staticClass:"contentTitle"},[s("h1",{staticClass:"TTORegular"},[t._v(t._s(t.lang.airdropTitle)),s("div",{staticClass:"line"},[s("span",{staticClass:"TTORegular"},[t._v(t._s(t._f("timeFilter")((new Date).getTime()-864e5)))])])])]),t._v(" "),s("div",{staticClass:"Shortaddresslist"},[s("div",{staticClass:"ShortaddressTitle TTORegular"},[t._v("\n          "+t._s(t.lang.airdropTips1)+"\n          "),s("span",{staticClass:"TTOMedium"},[t._v("BKB "+t._s(t.$t("polygon.airdropTips2")))])]),t._v(" "),s("div",{staticClass:"TTORegular m-ShortaddressTitle",domProps:{innerHTML:t._s(t.$t("polygon.airdropAmount",{amount:"<span>"+t.LotteryList.length+"</span>"}))}}),t._v(" "),s("div",{staticClass:"list Background0"},t._l(t.LotteryList,(function(e,a){return s("div",{directives:[{name:"show",rawName:"v-show",value:a<9,expression:"index < 9"}],key:a,staticClass:"item TTORegular"},[t._v(" \n            "+t._s(e)+" \n          ")])})),0),t._v(" "),0<t.LotteryList.length?s("div",{staticClass:"TTORegular m-viewAll",on:{click:function(e){t.showAirdropAddress=!0}}},[t._v(t._s(t.lang.airdropOpen))]):t._e()])]),t._v(" "),s("div",{staticClass:"whiteIpcard"},[s("div",{staticClass:"text Background0"},[t.defaultData.isWhite?s("span",[t._v(t._s(t.lang.whiteTips7))]):s("span",[t._v(t._s(t.lang.whiteTips8))]),t._v(" "),s("img",{attrs:{src:e(592),alt:""},on:{click:function(e){t.showWhitelist=!0}}})]),t._v(" "),s("img",{attrs:{src:e(593),alt:""}})]),t._v(" "),s("div",{staticClass:"LoadMapcontent"},[t._m(4),t._v(" "),s("div",{staticClass:"logoListBox"},[t._m(5),t._v(" "),s("div",{staticClass:"logoListContent"},[s("div",{staticClass:"Item"},[s("div",{staticClass:"TTOMedium logo active"},[t._v("\n              "+t._s(t.lang.sell)+"\n            ")]),t._v(" "),s("span",{staticClass:"TTOMedium"},[t._v("05-17-2022")])]),t._v(" "),s("div",{staticClass:"Item"},[s("div",{staticClass:"TTOMedium logo"},[t._v("\n              "+t._s(t.lang.sell)+"\n            ")]),t._v(" "),s("span",{staticClass:"TTOMedium"},[t._v("05-15-2022")])]),t._v(" "),s("div",{staticClass:"Item"},[s("div",{staticClass:"TTOMedium logo"},[t._v("\n              "+t._s(t.lang.welfare1)+" "),s("br"),t._v("\n              BKB\n            ")]),t._v(" "),s("span",{staticClass:"TTOMedium"},[t._v("07-16-2022")])]),t._v(" "),s("div",{staticClass:"Item"},[s("div",{staticClass:"TTOMedium logo"},[t._v("\n              "+t._s(t.lang.welfare2)+"\n            ")]),t._v(" "),s("span",{staticClass:"TTOMedium "},[t._v("Q2-2022")])]),t._v(" "),s("div",{staticClass:"Item"},[s("div",{staticClass:"TTOMedium logo"},[t._v("\n              "+t._s(t.lang.welfare3)+"\n            ")]),t._v(" "),s("span",{staticClass:"TTOMedium"},[t._v("Q3-2022")])]),t._v(" "),s("div",{staticClass:"Item"},[s("div",{staticClass:"TTOMedium logo"},[t._v("\n              "+t._s(t.lang.welfare4)+" 2.0\n            ")]),t._v(" "),s("span",{staticClass:"TTOMedium"},[t._v("Q4-2022")])]),t._v(" "),s("div",{staticClass:"Item"},[s("div",{staticClass:"TTOMedium logo"},[t._v("\n              "+t._s(t.lang.welfare5)+" "),s("br"),t._v("\n              "+t._s(t.lang.welfare6)+"\n            ")]),t._v(" "),s("span",{staticClass:"TTOMedium"},[t._v("2023")])])]),t._v(" "),s("div",{staticStyle:{}})]),t._v(" "),s("div",{staticStyle:{}})]),t._v(" "),s("div",{staticClass:"Tipscontent Background0 TTORegular"},[s("p",{staticClass:"TTORegular"},[t._v(t._s(t.lang.matters))]),t._v(" "),s("p",{staticClass:"TTORegular"},[t._v(t._s(t.lang.mattersTips1))]),t._v(" "),s("p",{staticClass:"TTORegular"},[t._v(t._s(t.lang.mattersTips2))]),t._v(" "),s("p",{staticClass:"TTORegular"},[t._v(t._s(t.lang.mattersTips3))]),t._v(" "),s("p",{staticClass:"TTORegular"},[t._v(t._s(t.lang.mattersTips4))])]),t._v(" "),s("van-popup",{attrs:{"close-icon-position":"top-right",closeable:""},on:{close:t.closeinvitationCode},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[s("div",{staticClass:"PopupBox"},[s("div",{staticClass:"InvitationPopup"},[s("div",{staticClass:"title TTORegular"},[s("span",{staticClass:"TTORegular"},[t._v(t._s(t.lang.enterCode2))])]),t._v(" "),s("div",{staticClass:"Background0 invitationInput",class:[{error:!!t.invitationError}]},[s("van-field",{staticClass:"Background0 TTOMedium",attrs:{maxlength:"6",formatter:t.inputFormatter},model:{value:t.invitationCode,callback:function(e){t.invitationCode=e},expression:"invitationCode"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.invitationCode,expression:"invitationCode"}],staticClass:"clearBox",on:{click:function(e){t.invitationCode=""}}},[s("van-icon",{attrs:{name:"clear",size:"16"}})],1),t._v(" "),t.invitationError?s("div",{staticClass:"error-text"},[t._v("\n              "+t._s(t.invitationError)+"\n            ")]):t._e()],1),t._v(" "),s("div",{staticClass:"content"},[s("p",{staticClass:"TTORegular"},[t._v(t._s(t.lang.currentAddress))]),t._v(" "),s("p",{staticClass:"TTORegular"},[t._v("\n              "+t._s(t.address)+"\n            ")])]),t._v(" "),s("div",{staticClass:"invitationCodeSubmit TTOMedium",on:{click:t.invitationCodeSubmit}},[t._v("\n            "+t._s(t.lang.confirm)+"\n          ")])])])]),t._v(" "),s("Mint",{attrs:{showMint:t.showMint,MentList:t.MentList,isWhite:t.defaultData.isWhite},on:{closeMint:t.closeMint}}),t._v(" "),t.showMent?s("Ment",{attrs:{showMent:t.showMent,MentList:t.MentList},on:{closeMent:t.closeMent}}):t._e(),t._v(" "),s("AirdropAddressCard",{attrs:{showAirdropAddress:t.showAirdropAddress,LotteryList:t.LotteryList},on:{closeAirdropAddressCard:t.closeAirdropAddressCard}}),t._v(" "),s("AirdropAwardCard",{attrs:{showAirdropAward:t.showAirdropAward,currentAddress:t.address,luckNum:t.defaultData.luckNum},on:{closeAirdropAwardCard:t.closeAirdropAwardCard}}),t._v(" "),s("InvitedCard",{attrs:{showInvitedlist:t.showInvitedlist,inviteAddress:t.defaultData.inviteAddress,inviteNum:t.defaultData.inviteNum,luckRate:t.defaultData.luckRate},on:{closeInvitedCard:t.closeInvitedCard}}),t._v(" "),s("Whitelistcard",{attrs:{showWhitelist:t.showWhitelist},on:{closeWhitelistcard:t.closeWhitelistcard}}),t._v(" "),s("MintSuccessCard",{attrs:{showMintSuccess:t.showMintSuccess,sendhash:t.sendhash,MintData:t.MintData},on:{closeMintSuccess:t.closeMintSuccess}}),t._v(" "),s("van-overlay",{attrs:{show:t.isLoading,"z-index":"999"},on:{click:function(e){t.isLoading=!1}}},[s("div",{staticClass:"loading"},[s("van-loading",{attrs:{color:"#7524f9",vertical:""}},[t._v(t._s(t.$t("base.loading"))+"...")])],1)])],1)])}),n,!1,null,null,null);a.default=n.exports}}]);