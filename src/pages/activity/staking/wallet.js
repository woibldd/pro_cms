// import detectEthereumProvider from '@metamask/detect-provider';
import eventemitter3 from 'eventemitter3'
// import { transfer16 } from '../common/common'
export function transfer16(val='1'){
  val = isNaN(Number(val))? 1 : Number(val)
  return "0x" + val.toString(16)
}
class Wallet extends eventemitter3 {
  constructor() {
    super()
    this._accounts = []
    this._chainId = 0
    this._walletPlatform = 'bitkeep'
  }

  // 是否安装 bitkeep 钱包
  isInstall() {
    const isInstalled = !!window.ethereum && !!window.isBitKeep;
    !isInstalled && console.warn("no installed bitkeep")
    return isInstalled;
  }

  // 是否连接中
  isConnected() {
    return window.ethereum && window.ethereum.isConnected()
  }

  // 连接钱包
  async connect() {
    if (this.isInstall()) {
      const Accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      this.initEvent()
      return Accounts[0]
    } else {
      return {
        status: 50001,
        message: 'please download bitkeep chrome '
      }
    }
  }

  // 切换地址
  selectedAddress() {
    return window.ethereum && ethereum.selectedAddress
  }

  // 获取钱包信息
  getWalletInfo(){
    return {
      address: window.ethereum && ethereum.selectedAddress,
      chainName: window.ethereum && window.ethereum.chainName || 'eth',
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
  async switchChainId(chainId ,address){
    if(!address){
      const [ nAddress ] =  await this.getAccounts()
      address = nAddress
    }
    return window.ethereum && window.ethereum.request({ method: 'wallet_switchEthereumChain', params:[ { chainId:transfer16(chainId) }, address] })
  }

  // 获取钱包标识
  getWalletPlatform(){
      return this._walletPlatform
  } 

  // 获取钱包账号
  async getAccounts() {
    return window.ethereum ?  window.ethereum.request({method:"eth_accounts"}) : []
  }

  // 登录签名
  async LoginSign(dataToSign, address) {
    console.log(dataToSign, address,'dataToSign, addressdataToSign, addressdataToSign, address')
    return await window.ethereum.request({method:"personal_sign", params:[dataToSign, address], from: address})
    // return await window.ethereum.signMessage({ data: dataToSign })
  }


  initEvent() {
    ethereum.removeAllListeners && ethereum.removeAllListeners()
    // ethereum.removeListener && ethereum.removeListener('chainChanged')
    ethereum.on('accountsChanged', async (...arg) => {
      this.emit('accountsChanged', ...arg)
    })
    ethereum.on('chainChanged', async (...arg) => {
      this.emit('chainChanged', ...arg)
    })
  }
}

export const wallet = new Wallet()
