const Router = require('koa-router');

const signup = new Router();

const handler = (ctx, next) => {
  ctx.body = `${ctx.request.method} ${ctx.request.path}`
}

signup.get('/', handler)
signup.put('/', handler)
signup.delete('/', handler)
signup.post('/', handler)
signup.patch('/', handler)

module.exports = signup;