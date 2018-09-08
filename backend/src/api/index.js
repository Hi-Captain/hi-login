const Router = require('koa-router');

const api = new Router();
const user = require('./users');

api.use('/users', user.routes());

module.exports = api;