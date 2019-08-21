const router = require('koa-router')()

router.prefix('/user')

router.get('/', function (ctx, next) {
  ctx.status = 500
  ctx.body = {
    code: 1,
    data: [1, 2, 3],
    message: 'hao',
  }
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
