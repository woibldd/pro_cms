const NetHelper = require('./nethelper')
// const Qs = require('qs');
const Qs = {
    stringify(obj = {}) {
        if (Object.prototype.toString.call(obj) != "[object Object]") return ''
        return Object.entries(obj).reduce((s, [key, value]) => {
            value && value != "undefined" && s.push(`${key}=${value}`)
            return s
        }, []).join("&")

    }


}
module.exports = class Helper {
    constructor() {}

    /**
     * 
     * @param {*} data  
     * @returns 
     */
    static async getArticleList(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_operation}/article/list?${Qs.stringify({
                start:data.start,
                limit:data.limit,
                sort:data.sort,
                language:data.language,
                ...data,
            })}`,
            "json": true
        });
    }
    /**
     * 
     * @param {Object} data     
            @param {} user_name, 创建者 bitkeep
            @param {} title, 标题 bitkeep'
            @param {} content, 富文本内容
            @param {} share_times, 分享次数
            @param {} share_user, 分享人
            @param {} readed_times, 阅读次数
            @param {} status,   状态  0无状态
            @param {} language   消息多语言，默认中文 zh
     * 
     * 
     * @returns  {Promise}
     */
    static async addArticle(data) {
        return await NetHelper.post({
            "url": `${CONFIG.host_operation}/article/add`,
            "json": true,
            'body': data
        });
    }

    static async upadateArticle(data) {
        return await NetHelper.post({
            "url": `${CONFIG.host_operation}/article/add`,
            "json": true,
            'body': {
                key: data.id,
                content: data.content
            }
        });
    }

    static async deleteArticle(data) {
        return await NetHelper.post({
            "url": `${CONFIG.host_operation}/article/delete`,
            "json": true,
            'body': data
        });
    }
    /**
     * 
     * @param {*} data  
     * @returns 
     */
    static async getArticleDetail(data) {
        return await NetHelper.get({
            "url": `${CONFIG.host_operation}/article/detail?${Qs.stringify(data)}`,
            "json": true
        });
    }







}