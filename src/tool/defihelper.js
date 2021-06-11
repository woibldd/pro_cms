const NetHelper = require('./nethelper')

module.exports = class Helper {
    constructor() {}

    static async list(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_defi}/
            ?key=${data.key}&value=${data.value}&start=${data.start}&limit=${data.limit}`,
            "json": true
        });
    }

    static async iconList(data) {
        return await NetHelper.post({
            "url": `${CONFIG.host_defi}/admin/iconList`,
            "json": true,
            'body': {
                'list': data
            }
        });
    }

    static async updatePair(item) {
        return await NetHelper.post({
            'url': `${CONFIG.host_defi}/admin/updatePair`,
            'json': true,
            'body': {
                'pairItem': item.pairItem
            }
        })
    }

    static async pairDetail(data){
        return await NetHelper.get({
            'url':`${CONFIG.host_defi}/admin/pairDetail`,
            'json':true,
            'body':{
                id:data.id
            }
        })
    }

    static async getTotalSupply(data) {
        return await NetHelper.get({
            'url': `${CONFIG.host_defi}/admin/getTotalSupply`,
            'json': true,
            'body': {
                'eid': data.eid || '',
                'chain': data.chain || '',
                'symbolA': data.symbolA || ''
            }
        })
    }

    static async configList(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_defi}/admin/configList?type=${data.type}&status=${data.status}&start=${data.start}&limit=${data.limit}`,
            "json": true
        });
    }

    static async configDetail(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_defi}/admin/configDetail?id=${data.id}`,
            "json": true
        });
    }

    static async updateConfig(item) {
        return await NetHelper.post({
            'url': `${CONFIG.host_defi}/admin/updateConfig`,
            'json': true,
            'body': {
                'id': item.id || '',
                'type': item.type,
                'appid': item.appid,
                'rank': item.rank,
                'status': item.status
            }
        })
    }

    static async delConfig(item) {
        return await NetHelper.post({
            'url': `${CONFIG.host_defi}/admin/delConfig`,
            'json': true,
            'body': {
                'id': item.id
            }
        })
    }

}