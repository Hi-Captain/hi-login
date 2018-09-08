const Router = require('koa-router');

const login = new Router();

const handler = (ctx, next) => {
  ctx.body = `${ctx.request.method} ${ctx.request.path}`;
}

login.get('/', handler)
login.put('/', handler)
login.delete('/', handler)
login.post('/', handler)
login.patch('/', handler)

module.exports = login;