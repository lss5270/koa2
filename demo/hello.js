const Koa = require('koa')
const app = new Koa()

app.use( async ( ctx ) => {
  let url = ctx.request.url
  console.log(ctx);
  
  ctx.body = ctx
})

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')