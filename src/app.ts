import express from 'express'
import Youch from 'youch'
import * as dotenv from 'dotenv'

import routes from './routes'
import database from './database'

class App {
  readonly server

  constructor () {
    this.server = express()
    dotenv.config()
    this.middlewares()
    this.routes()
    this.handleExceptions()
    database.loadModels()
  }

  middlewares () {
    this.server.use(express.json())
  }

  routes () {
    this.server.use(routes)
  }

  handleExceptions () {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON()
        console.log(errors)
        return res.status(500).json(errors)
      }
      return res.status(500).json({ error: 'Internal server error' })
    })
  }
}

export default new App().server
