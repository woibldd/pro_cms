const NetHelper = require('./nethelper')

module.exports = class Helper {
    constructor() {}

    static async list(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_user}/admin/userList?key=${data.key}&start=${data.start}&limit=${data.limit}&language=${data.language}&sort=${data.sort}&sortItem=${data.sortItem}`,
            "json": true
        });
    }

    static async assetsList(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_user}/admin/assetsList?key=${data.key}&value=${data.value}&chain=${data.chain}&start=${data.start}&limit=${data.limit}&sort=${data.sort}&sortItem=${data.sortItem}`,
            "json": true
        });
    }

    static async versionList(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_user}/admin/versionList?key=${data.key}`,
            "json": true
        });
    }

    static async updateVersion(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_user}/admin/updateVersion`,
            "json": true,
            body: data
        });
    }

    static async delVersion(data) {
        return await NetHelper.post({
            "url": `${CONFIG.host_user}/admin/delVersion`,
            "json": true,
            body: {
                id: data.id
            }
        });
    }
    static async sendsList(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_chain}/admin/${data.table}?key=${data.key}&page=${data.page}`,
            "json": true
        });
    }

}