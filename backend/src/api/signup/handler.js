exports.call = (ctx) => {
  ctx.body = `${ctx.request.method} ${ctx.request.path} called`
}

exports.replace = (ctx) => {
  ctx.body = `${ctx.request.method} ${ctx.request.path} replaced`
}

exports.delete = (ctx) => {
  ctx.body = `${ctx.request.method} ${ctx.request.path} deleted`
}

exports.create = (ctx) => {
  ctx.body = `${ctx.request.method} ${ctx.request.path} created`
}

exports.update = (ctx) => {
  ctx.body = `${ctx.request.method} ${ctx.request.path} updated`
}