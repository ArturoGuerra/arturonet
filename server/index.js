import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import bodyParser from 'body-parser'
import http from 'http'
import fs from 'fs'

import api from './api'

const app = express()
const httpServer = http.createServer(app)
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000
const socket = process.env.SOCKET || null

app.set('port', port)
app.set('host', host)
app.set('socket', socket)

app.use(bodyParser.json());

// Import API Routes
app.use('/api', api)

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

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
function StartServer () {
  if (socket) {
    if (fs.existsSync(socket)) {
      fs.unlinkSync(socket)
    }
    httpServer.listen(socket, () => { console.log('Server listening on ' + socket) })
    fs.chmodSync(socket, '0777')
  } else {
    httpServer.listen(port, host, () => {
      console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
    })
  }
}

StartServer()
