const Nethelper = require('./nethelper');

module.exports = class Helper {

    static async get(lang, module, table, data) {
        const ids = [];
        if (!data || data.length == 0) return data;
        if (!lang) return data;
        if (!table) return data;
        for (var it of data) {
            if (!it.id) throw new Error('Lost id for language');
            ids.push(it.id);
        }
        let element = {};
        const reply = await Nethelper.get(`${CONFIG.host_language}/get?lang=${lang}&module=${module}&table=${table}&id=${ids.join(',')}`);

        for (const item in reply) {
            element = reply[item];
        }

        return element;
    }

    static async set(lang, module, table, id, data) {
        return await Nethelper.post({
            url: `${CONFIG.host_language}/post`,
            json: true,
            body: {
                lang: lang,
                module: module,
                table: table,
                id: id,
                data: JSON.stringify(data)
            }
        });
    }

}