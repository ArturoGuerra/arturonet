const { app } = require('./build/main.js')
const awsServerlessExpress = require('aws-serverless-express')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
app.use(awsServerlessExpressMiddleware.eventContext())
const server = awsServerlessExpress.createServer(app)
module.exports.render = (event, context) => {
  event.headers['Accept-Encoding'] = 'identity'
  console.log('proxying event=', event)
  awsServerlessExpress.proxy(server, event, context)
}
