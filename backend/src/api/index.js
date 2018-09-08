const Router = require('koa-router');

const api = new Router();
const login = require('./login');
const signup = require('./signup');

api.use('/login', login.routes());
api.use('/signup', signup.routes());

module.exports = api;