const Router = require('koa-router');

const signup = new Router();
const handler = require('./handler')

signup.get('/', handler.call)
signup.put('/', handler.replace)
signup.delete('/', handler.delete)
signup.post('/', handler.create)
signup.patch('/', handler.update)

module.exports = signup;