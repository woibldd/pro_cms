
const NetHelper = require('./nethelper');

module.exports = class Helper {
    constructor(){}

    //[{address, chain, contract_address}]
    static async balances(data){
        return await NetHelper.post({
            "url": `${CONFIG.host_chain}/chain/balances`,
            "json": true,
            "body": {
                'list': data
            }
        });
    }

    static async balance(chain, address, contract, nocache = false){
        return await NetHelper.post({
            "url": `${CONFIG.host_chain}/chain/balance`,
            "json": true,
            "body": {
                'chain': chain,
                'address': address,
                'contract_address': contract || '',
                'nocache': nocache
            }
        });
    }

    static async balanceAvailable(chain, address, contract){
        return await NetHelper.post({
            "url": `${CONFIG.host_chain}/chain/balanceAvailable`,
            "json": true,
            "body": {
                'chain': chain,
                'address': address,
                'contract_address': contract || ''
            }
        });
    }
    
    static async transactions(chain, address, contract, type = "all", offset = 0, limit = 20){
        return await NetHelper.post({
            "url": `${CONFIG.host_chain}/chain/transaction`,
            "json": true,
            "body": {
                'chain': chain,
                'address': address,
                'contract_address': contract || '',
                type, offset, limit
            }
        });
    }

    static async detail(chain, txid){
        return await NetHelper.post({
            "url": `${CONFIG.host_chain}/chain/detail`,
            "json": true,
            "body": {chain, txid}
        });
    }

    static async nonce(chain, from){
        return await NetHelper.post({
            "url": `${CONFIG.host_chain}/chain/nonce`,
            "json": true,
            "body": {chain, from}
        });
    }

    static async fee(chain, from, to, value, data){
        return await NetHelper.post({
            "url": `${CONFIG.host_chain}/chain/fee`,
            "json": true,
            "body": {chain, from, to, value, data}
        });
    }

    static async transferParam(chain, contract, from, to, amount){
        return await NetHelper.post({
            "url": `${CONFIG.host_chain}/chain/transferParam`,
            "json": true,
            "body": {
                chain, contract, from, to, amount
            }
        });
    }

    static async send(params){
        return await NetHelper.post({
            "url": `${CONFIG.host_chain}/chain/send`,
            "json": true,
            "body": params
        });
    }

    static async height(chain){
        return await NetHelper.post({
            "url": `${CONFIG.host_chain}/chain/height`,
            "json": true,
            "body": {chain}
        });
    }

    static async block(chain, height){
        return await NetHelper.post({
            "url": `${CONFIG.host_chain}/chain/block`,
            "json": true,
            "body": {chain, height}
        });
    }

    static async tx(chain, txid){
        return await NetHelper.post({
            "url": `${CONFIG.host_chain}/chain/tx`,
            "json": true,
            "body": {chain, txid}
        });
    }

    static async ext(params){
        return await NetHelper.post({
            "url": `${CONFIG.host_chain}/chain/ext`,
            "json": true,
            "body": params
        });
    }

    static async tokenData(chain, contract){
        return await NetHelper.post({
            "url": `${CONFIG.host_chain}/chain/tokenData`,
            "json": true,
            "body": {chain, contract}
        });
    }
}