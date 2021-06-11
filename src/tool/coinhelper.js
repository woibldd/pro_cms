const NetHelper = require('./nethelper');
const DBhelper = require('./dbhelper');
module.exports = class Helper {
    constructor() {}

    static async noStorage(){
        return await DBhelper.getRedis(REDIS,CONFIG.KEY_DATA_COIN);
    }

    static async list(data) {
        return await NetHelper.post({
            "url": `${CONFIG.host_coin}/admin/coinList`,
            "json": true,
            "body": data
        });
    }

    static async coinDetail(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_coin}/admin/coinDetail`,
            "json": true,
            "body": data
        });
    }

    static async getChainlist(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_chain}/admin/getChains`,
            "json": true
        });
    }

    static async getExchanges(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_price}/admin/getExchanges`,
            "json": true
        });
    }

    static async update(data) {
        return await NetHelper.post({
            "url": `${CONFIG.host_coin}/admin/coinUpdate`,
            "json": true,
            "body": data
        });
    }

    static async getOptions(key) {
        return await NetHelper.get({
            'url': `${CONFIG.host_coin}/admin/getOptions`,
            'json': true,
            'body': {
                'key': key || '',
            }
        })
    }

    static async getPrice(data) {
        return await NetHelper.get({
            'url': `${CONFIG.host_coin}/admin/coinPrice`,
            'json': true,
            'body': data
        })
    }
}