import Koa from 'koa'
import Router from 'koa-router'
import serve from 'koa-static'
const app = new Koa()
app.use(serve(__dirname + '/client'))

const router = new Router()

router.get('/api/messages', async (ctx, next) => {
  const messages = {
    'Welcome Message': 'Welcome to the testing of SF and WCN!',
    'Thank You Message': "Thank you for your order. We'll process your order soon.",
    'Special Offer Message': 'Sales! At most 70% off! Check out our WeChat store!',
    'Account Updated Message':
      'Your account info is updated. If it is not updated by you, please contact our Customer Service Representatives.',
    'Membership Upgrade Message':
      'Congratulations! You membership card is upgraded to PLATINUM! Check out the benefits now!'
  }
  ctx.body = messages
})

router.get('/api/sendmessage', async (ctx, next) => {
  const openId = ctx.query.openId
  if(openId === 'myOpenId') {
    ctx.body = 'SUCCESS'
  } else {
    ctx.status = 400
    ctx.body = 'Invliad open ID.'
  }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
console.log('server started.')
