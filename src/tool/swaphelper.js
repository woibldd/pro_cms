const NetHelper = require('./nethelper')

module.exports = class Helper {
    constructor() {}

    static async coinList(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_swap}/admin/coinList?key=${data.key}&start=${data.start}&limit=${data.limit}`,
            "json": true
        });
    }

    static async coinUpdate(data) {
        return await NetHelper.post({
            "url": `${CONFIG.host_swap}/admin/coinUpdate`,
            "json": true,
            'body': data
        });
    }

    static async orderList(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_swap}/admin/orderList?uid=${data.uid}&orderId=${data.orderId}&status=${data.status}&start=${data.start}&limit=${data.limit}`,
            "json": true
        });
    }

    static async orderUpdate(data) {
        return await NetHelper.post({
            "url": `${CONFIG.host_swap}/admin/orderUpdate`,
            "json": true,
            'body': data
        });
    }

}