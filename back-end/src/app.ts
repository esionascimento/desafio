import express from 'express'
import cors from 'cors'
import indexRoutes from './routes'
require('dotenv/config')

class App {
    public express: express.Application

    public constructor () {
      this.express = express()

      this.middlewares()
      /* this.database() */
      this.routes()
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    /* private async database () {
      if (global.connection && global.connection.state !== 'disconnected') { return global.connection }

      const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_NAME,
        password: process.env.DB_PASS
      })
      connection.connect(function (err) {
        if (err) throw err
        connection.query(`CREATE DATABASE ${process.env.DB_DATABASE}`, function (err) {
          if (err) {
            console.log('Database already created')
          } else {
            console.log('Database created')
          }
        })
      })
      global.connection = connection
      return connection
    } */

    private routes (): void {
      this.express.use(indexRoutes)
    }
}

export default new App().express
