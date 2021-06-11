
module.exports = class CoreController {

	constructor(pathPrefix){
		this._pathPrefix = pathPrefix;
	}

    _checkParams(params, arr){
        for(var i = 0; i < arr.length; i++){
            var it = arr[i];
            if(!params[it]) throw new Error('Lost ' + it);
        }
    }

    _setHeader(req){
        this._header = {};
    }

    _getClientIp(req) {
        return (req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress).replace('::ffff:', '');
    }

    _getCDN(path){
        if(!path) return '';
        return CONFIG.cdn_host + path;
    }
    _get_CMS_PATH(path){
        if(!path) return '';
        return CONFIG.host_cms + path;
    }

}