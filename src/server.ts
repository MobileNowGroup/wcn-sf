import Koa from 'koa'
import Router from 'koa-router'
import serve from 'koa-static'
const app = new Koa()
app.use(serve(__dirname + '/client'))

const router = new Router()

router.get('/api/messages', (ctx, next) => {
  const messages = {
    WelcomeMessage: 'Welcome to the testing of SF and WCN!',
    ThankYouMessage: "Thank you for your order. We'll process your order soon.",
    SpecialOfferMessage: 'Sales! At most 70% off! Check out our WeChat store!',
    AccountUpdatedMessage:
      'Your account info is updated. If it is not updated by you, please contact our Customer Service Representatives.',
    MembershipUpgradeMessage:
      'Congratulations! You membership card is upgraded to PLATINUM! Check out the benefits now!'
  }
  ctx.body = messages
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(80)
console.log('server started.')
