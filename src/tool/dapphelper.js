const NetHelper = require('./nethelper')

module.exports = class Helper {
    constructor() {}

    static async feedList(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_dapp}/admin/feedList`,
            "json": true,
            "body": data
        });
    }

    static async feedDetail(data){
        return await NetHelper.get({
            "url": `${CONFIG.host_dapp}/admin/feedDetail`,
            "json": true,
            "body": data
        })
    }

    static async feedUpdate(data) {
        return await NetHelper.post({
            'url': `${CONFIG.host_dapp}/admin/feedUpdate`,
            'json': true,
            'body': {
                'lang':data.lang,
                'title':data.title,
                'icon':data.icon,
                'source':data.source,
                'url':data.url,
                'relationDapps':data.relationDapps,
                'status':data.status,
                'isAd':data.isAd,
                'id': data.id
            }
        })
    }

    static async dappList(data){
        return await NetHelper.get({
            'url': `${CONFIG.host_dapp}/admin/dappList`,
            'json': true,
            "body": data
        })
    }

    static async dappDetail(data){
        return await NetHelper.get({
            'url': `${CONFIG.host_dapp}/admin/dappDetail`,
            'json': true,
            "body": data
        })
    }

    static async dappUpdate(data){
        return await NetHelper.get({
            'url': `${CONFIG.host_dapp}/admin/dappUpdate`,
            'json': true,
            'body': data
        })
    }

    static async getOptions(key){
        return await NetHelper.get({
            'url': `${CONFIG.host_dapp}/admin/getOptions`,
            'json': true,
            'body': {
                'key': key || '',
            }
        })
    }
}