require('./conf');

const como = require('como');
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const session = require('express-session');

const app = express();
app.set('env', CONFIG.debug ? 'development' : 'production');
app.set('views', __dirname + '/view');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'bitkeepConsole',
    resave: CONFIG.debug ? true : false,
    saveUninitialized: true,
}));

const router = express.Router();
router.use(express.static(__dirname + '/static/dist'));
router.use(function(req, res, next) {
	var ts = new Date().getTime();
	res.callback = function(status, data){
		if(status) {
			console.log('BKERROR', req.url, JSON.stringify(req.body), status, JSON.stringify(data));
		}
		if(data == null){
			if(typeof status == 'number') {
				res.json({'status': status, 'data': null});
			} else if(typeof status == 'object') {
				res.json({'status': 1, 'data': JSON.stringify(status)});
			} else {
				res.json({'status': 1, 'data': status.toString()});
			}
		} else {
			res.json({'status': status || 0, 'data': data});
		}
	}
    next();
});

function registerController(lib){
	const Controller = require(lib);
	const instance = new Controller();
	const fun = (req, res) => {
		(async() => {
			try {
				const method = req.params.method;
				const params = como.extend(req.query, req.body);
				instance._setHeader(req);
				if(instance[method]){
					const result = await instance[method](params, req, res);
					return res.callback(0, result);
				} else {
					return res.callback(404);					
				}
			} catch(e){
				if(CONFIG.debug) console.log(e);
				if(e instanceof Error){
                    return res.callback(e.message);
                } else {
                    return res.callback(e);
                }
			}
		})();
	};
	let path = '/' + instance._pathPrefix + '/:method';
	router.get(path, fun);
	router.post(path, fun);
}
registerController('./controller/controller.operation');


router.use(function(req, res){
  res.status(404).send('404');
});
app.use(router);
process.setMaxListeners(0);
app.listen(CONFIG.port, function(){
    console.log('Server listening for http on ' + CONFIG.port);
});