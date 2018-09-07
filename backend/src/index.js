const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', (ctx, next) => {
  ctx.body = '홈';
})

router.get('/signup', (ctx, next) => {
  ctx.body = '회원가입';
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(4000, () => {
  console.log('backend open ! port4000')
})