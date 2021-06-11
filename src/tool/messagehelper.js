const NetHelper = require('./nethelper')

module.exports = class Helper {
    constructor() {}

    static async push(data) {
        return await NetHelper.post({
            "url": `${CONFIG.host_message}/admin/addPush`,
            "json": true,
            'body': {
                uid: data.uid,
                title: data.title,
                content: data.content
            }
        });
    }
    static async poolList(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_message}/admin/poolList`,
            "json": true
        });
    }

    static async addPool(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_message}/admin/addPool`,
            "json": true,
            'body': data
        });
    }

    static async updatePool(data) {
        return await NetHelper.post({
            "url": `${CONFIG.host_message}/admin/updatePool`,
            "json": true,
            'body': {
                key:data.id,
                content: data.content
            }
        });
    }

    static async poolDel(data) {
        return await NetHelper.post({
            "url": `${CONFIG.host_message}/admin/poolDel`,
            "json": true,
            'body': {
                key:data.id
            }
        });
    }


    static async messageList(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_message}/admin/messageList`,
            "json": true,
            'body': {
                uid: data.uid,
                type: data.type,
                start: data.start,
                limit: data.limit
            }
        });
    }

    static async messageUpdate(data) {
        return await NetHelper.post({
            "url": `${CONFIG.host_message}/admin/messageUpdate`,
            "json": true,
            'body': {
                'identity': data.identity,
                'type': data.type,
                'content': data.content,
                'isReaded': data.isReaded,
                'flag': data.flag,
                'id': data.id || ''
            }
        });
    }
    static async delMessage(data) {
        return await NetHelper.post({
            "url": `${CONFIG.host_message}/admin/messageDel`,
            "json": true,
            'body': {
                id: data.id
            }
        });
    }

}