const { Router } = require('express')
const AWS = require('aws-sdk')
const RateLimit = require('express-rate-limit')
const config = require('./config.json')

AWS.config.update({ region: process.env.REGION })

const SES = new AWS.SES()

const limiter = new RateLimit({
  windowMs: 15*60*1000, // 15 minutes
  max: 5, // limit each IP to 100 requests per windowMs
  delayMs: 0 // disable delaying - full speed until the max limit is reached
});

const router = Router()

router.use(limiter)
router.post('/post', (req, res, next) => {
  let message = req.body.message
  let subject = req.body.subject
  const sendPromise = SES.sendEmail(
    {
      Destination: {
        ToAddresses: config.dest
      },
      Message: {
        Body: {
          Text: {
            Charset: 'UTF-8',
            Data: message
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: subject
        }
      },
      Source: config.source
    }
  ).promise();
  sendPromise.then(data => {
    console.log(data)
    res.json({ status: 'is-success', data: "Email sent successfully" })
  }).catch(err => {
    console.log(err)
    res.json({ status: 'is-danger', data: "Error sending email" })
  })
})

export default router
