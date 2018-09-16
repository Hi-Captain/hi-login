const Router = require('koa-router');

const user = new Router();
const handler = require('./handler')

user.get('/:name', handler.check)
user.delete('/:name', handler.delete)
user.post('/login', handler.login)
user.post('/signup', handler.signup)
user.patch('/:name', handler.update)

user.get('/', handler.list)

module.exports = user;