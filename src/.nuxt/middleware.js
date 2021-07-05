const middleware = {}

middleware['initRouter'] = require('../middleware/initRouter.js')
middleware['initRouter'] = middleware['initRouter'].default || middleware['initRouter']

export default middleware
