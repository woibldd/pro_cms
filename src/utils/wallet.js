// import detectEthereumProvider from '@metamask/detect-provider';
import eventemitter3 from 'eventemitter3'
// import abiCoder from 'web3-eth-abi';
import BigNumber from 'bignumber.js';
// import Web3 from 'web3'
// import { transfer16 } from '../common/common'
export function transfer16(val = '1') {
  val = isNaN(Number(val)) ? 1 : Number(val)
  return "0x" + val.toString(16)
}
class Wallet extends eventemitter3 {
  constructor() {
    super()
    this._accounts = []
    this._chainId = 0
    this._walletPlatform = 'bitkeep'
  }
   transfer16(val = 0) {
    val = isNaN(Number(val)) ? 1 : Number(val);
    return "0x" + val.toString(16);
  }
  // 是否安装 bitkeep 钱包
  isInstall() {
    const isInstalled = !!window.ethereum || !!window.isBitKeep;
    !isInstalled && console.warn("no installed bitkeep")
    return isInstalled;
  }

  // 是否连接中
  isConnected() {
    return window.ethereum && window.ethereum.selectedAddress
  }

  // 连接钱包
  async connect() {
    const Accounts = window.ethereum && await window.ethereum.request({ method: 'eth_requestAccounts' })
    // this.initEvent()
    return Accounts[0]
  }

  // 切换地址
  selectedAddress() {
    return window.ethereum && window.ethereum.selectedAddress
  }

  // 获取钱包信息
  getWalletInfo() {
    return {
      address: window.ethereum && window.ethereum.selectedAddress,
      // chainName: window.ethereum && window.ethereum.chainName || 'eth',
      // chain: window.ethereum && window.ethereum.chain || 'eth',
      chainId: window.ethereum && window.ethereum.chainId || '1',
      walletId: '',
      walletPlatform: this.getWalletPlatform()
    }
  }

  // 获取 chain ID
  async getChainId() {
    return window.ethereum && window.ethereum.request({ method: 'eth_chainId' })
  }

  // 切换 chain ID
  async switchChainId(chainId, address) {
    if (!address) {
      const [nAddress] = await this.getAccounts()
      address = nAddress
    }
    return window.ethereum && window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: transfer16(chainId) }, address] })
  }

  // 获取钱包标识
  getWalletPlatform() {
    return this._walletPlatform
  }
  chainChanged() {
    window.ethereum.on('chainChanged', async (...arg) => {
      console.log(...arg, 'arg');
      // window.location.reload()
      this.emit('chainChanged', ...arg)
    })
  }

  // 获取钱包账号
  async getAccounts() {
    return window.ethereum ? window.ethereum.request({ method: "eth_accounts" }) : []
  }

  // 登录签名
  async LoginSign(dataToSign, address) {
    console.log(dataToSign, address, 'dataToSign, addressdataToSign, addressdataToSign, address')
    return await window.ethereum.request({ method: "personal_sign", params: [dataToSign,address],from: address})
    // return await window.ethereum.signMessage({ data: dataToSign })
  }

  //邀请好友签名
  async paritySign(address, inviteCode) {
    const chainId = parseInt(await this.getChainId(), 10) || 137;
    const msgParams = JSON.stringify({
      domain: {
        // Defining the chain aka Rinkeby testnet or Ethereum Main Net
        chainId: chainId,
        // Give a user friendly name to the specific contract you are signing for.
        name: 'Ether Mail',
        // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
        verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
        // Just let's you know the latest version. Definitely make sure the field name is correct.
        version: '1',
      },
  
      // Defining the message signing data content.
      message: {
        /*
         - Anything you want. Just a JSON Blob that encodes the data you want to send
         - No required fields
         - This is DApp Specific
         - Be as explicit as possible when building out the message schema.
        */
        contents: inviteCode,
        attachedMoneyInEth: 4.2,
        from: {
          name: 'Invite Code',
          wallets: [
            address
          ],
        },
        // to: [
        //   {
        //     name: 'to_address',
        //     wallets: [
        //       toConstractAddress
        //     ],
        //   },
        // ],
      },
      // Refers to the keys of the *types* object below.
      primaryType: 'Mail',
      types: {
        // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
        EIP712Domain: [
          { name: 'name', type: 'string' },
          { name: 'version', type: 'string' },
          { name: 'chainId', type: 'uint256' },
          { name: 'verifyingContract', type: 'address' },
        ],
        // Not an EIP712Domain definition
        Group: [
          { name: 'name', type: 'string' },
          { name: 'members', type: 'Person[]' },
        ],
        // Refer to PrimaryType
        Mail: [
          { name: 'from', type: 'Person' },
          // { name: 'to', type: 'Person[]' },
          { name: 'contents', type: 'string' },
        ],
        // Not an EIP712Domain definition
        Person: [
          { name: 'name', type: 'string' },
          { name: 'wallets', type: 'address[]' },
        ],
      },
    });
    return  await window.ethereum.request({ method: "eth_signTypedData_v4", params: [address, msgParams],from: address})
    // return await window.ethereum.request({ method: "eth_sign", params: [address, dataToSign],from: address})
  }
  // 取消授权
  // approveToken = async ( address, chainId, id, spender, amount ) => {
  //   await window.ethereum.request({
  //     method: 'eth_sendTransaction',
  //     params: [
  //       {
  //         from: address,
  //         to: id,
  //         chainId: chainId,
  //         data: abiCoder.encodeFunctionCall(
  //           {
  //             constant: false,
  //             inputs: [
  //               {
  //                 name: '_spender',
  //                 type: 'address',
  //               },
  //               {
  //                 name: '_value',
  //                 type: 'uint256',
  //               },
  //             ],
  //             name: 'approve',
  //             outputs: [
  //               {
  //                 name: '',
  //                 type: 'bool',
  //               },
  //             ],
  //             payable: false,
  //             stateMutability: 'nonpayable',
  //             type: 'function',
  //           },
  //           [spender, amount]
  //         ),
  //       },
  //     ],
  //   });
  // }
  //MintToken
  setMintToken =async ( data ) => {
    data.gas = "0x" +  BigNumber(data.gas||data.gasLimit||0).toString(16)
    data.gasPrice = "0x" +  BigNumber(data.gasPrice||0).times(BigNumber(10).pow(18)).toString(16)
    data.value = "0x" +  BigNumber(data.value||0).toString(16)
    return await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [
        data
      ],
    });


    //  const web3 = new Web3(ethereum)
    //  await web3.eth.sendTransaction(data)
    //  await web3.eth.request({
    //   method: 'eth_sendTransaction',
    //   params: [
    //     data
    //   ],
    // });
  }

  initEvent() {
    // if(!window.Web3) console.warn("install...")
    // window.web3 = new window.Web3(window.ethereum)
    window.ethereum.removeAllListeners && window.ethereum.removeAllListeners()
    // window.ethereum.removeListener && window.ethereum.removeListener('chainChanged')
    window.ethereum.on('accountsChanged', async (...arg) => {
      this.emit('accountsChanged', ...arg)
    })
    window.ethereum.on('chainChanged', async (...arg) => {
      this.emit('accountsChanged', ...arg)
    })
  }
}

export const wallet = new Wallet()
