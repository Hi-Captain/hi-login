const Router = require('koa-router');

const login = new Router();
const handler = require('./handler')

login.get('/', handler.call)
login.put('/', handler.replace)
login.delete('/', handler.delete)
login.post('/', handler.create)
login.patch('/', handler.update)

module.exports = login;