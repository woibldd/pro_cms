const CoreController = require('./controller.core');
const DBhelper = require('../tool/operationhelper');



module.exports = class BitkeepController extends CoreController {

	constructor() {
		super('article');
	}
	async detail(params) {
		let data = await DBhelper.getArticleDetail(params);
		return data
	}
	// async delete(params) {
	// 	return await DBhelper.deleteArticle(params)
	// }
	// async upadete(params) {
	// 	const data = await DBhelper.upadateArticle(params)
	// 	return {
	// 		...data,
	// 		cms_article_url: this.cms_article_url
	// 	}
	// }
	async list(params) {
		const data = await DBhelper.getArticleList(params)
		return data

	}


}