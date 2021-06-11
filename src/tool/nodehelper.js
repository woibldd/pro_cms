const NetHelper = require('./nethelper');

module.exports = class Helper {
    constructor() {}

    static async getChainlist(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_chain}/admin/getChains`,
            "json": true
        });
    }

    static async getHeight(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_chain}/admin/getHeight`,
            "json": true,
            'body':data
        });
    }
}