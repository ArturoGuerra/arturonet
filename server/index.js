const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const { Nuxt, Builder } = require('nuxt')
const express = require('express')
const morgan = require('morgan')
const api = require( './api')
const http = require('http')

require('dotenv').config()

const app = new express()
const httpServer = http.createServer(app)
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000
const socket = process.env.SOCKET || null

let blacklist
if (process.env.BLACKLIST) {
  blacklist = process.env.BLACKLIST.split(' ')
} else {
  blacklist = []
}

console.log(`Loaded blacklist: ${blacklist}`)

app.set('port', port)
app.set('host', host)
app.set('socket', socket)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

if (!config.dev) {
  app.set('trust proxy', true)
}

app.use(cookieParser())
app.use(bodyParser.json())
app.use(morgan('short'))

app.use((req, res, next) => {
  if (blacklist.indexOf(req.ip) >= 0) {
    res.send('fuck off ' + req.ip)
  } else {
    next()
  }
})

// Import API Routes
app.use('/api', api)

// Give nuxt middleware to express
app.use(nuxt.render)

// Listening on
httpServer.on('listening', onListening)
function onListening () {
  let msg
  if (socket) {
    msg = `[unix socket] Listening on ${socket}`
  } else {
    let address = this.address().family === 'IPv4' ? this.address().address : `[${this.address().address}]`
    let name = this.address().family === 'IPv4' ? 'ipv4server' : 'ipv6server'
    msg = `[${name}]` + ' Listening on http://' + `${address}:${this.address().port}` // eslint-disable-line no-console
  }
  console.log(msg)
}

function StartServer () {
  if (socket) {
    if (fs.existsSync(socket)) {
      fs.unlinkSync(socket)
    }
    httpServer.listen(socket, () => {
      fs.chmodSync(socket, '0777')
    })
  } else {
    httpServer.listen(port, host)
  }
}

StartServer()
