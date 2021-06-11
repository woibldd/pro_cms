const NetHelper = require('./nethelper')

module.exports = class Helper {
    constructor() {}

    static async list(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_logger}/list?lang=${data.lang}&module=${data.module}&table=${data.table}&id=${data.id}`,
            "json": true
        });
    }

    static async setlog(data) {
        return await NetHelper.post({
            "url": `${CONFIG.host_logger}/post`,
            "json": true,
            'body': {
                'list': data
            }
        });
    }

}