const NetHelper = require('./nethelper')

module.exports = class Helper {
    constructor() {}
    
    static async loggerList(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_logger}/admin/loggerList?type=${data.type}&service=${data.service}&name=${data.name}&start=${data.start}&limit=${data.limit}`,
            "json": true
        });
    }

    static async delLogger(data) {
        return await NetHelper.post({
            "url": `${CONFIG.host_logger}/admin/delLogger`,
            "json": true,
            "body":data
        });
    }

    static async getServiceStatus(data){
        let serviceHost = `host_${data.name}`
        return await NetHelper.get({
            "url": `${CONFIG[serviceHost]}/status/ping`,
            "json": true
        });
    }

    static async nextServiceStatus(data){
        let serviceHost = `host_${data.name}`
        return await NetHelper.get({
            "url": `${CONFIG[serviceHost]}/status/serviceStatus`,
            "json": true
        });
    }

}