const Koa = require('koa')
const app = new Koa()

app.use( async ( ctx ) => {
  let url = ctx.url
  // 从上下文的request对象中获取
  let request = ctx.request   //{ a:1, b:2 }
  let req_query = request.query //{ a:1, b:2 }
  let req_querystring = request.querystring //a=1&b=2

  // 从上下文中直接获取
  let ctx_query = ctx.query //{ a:1, b:2 }
  let ctx_querystring = ctx.querystring  //a=1&b=2

  ctx.body = {
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring
  }
})

app.listen(3000)
console.log('[demo] request get is starting at port 3000')