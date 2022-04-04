import app from './app'
import db from './config/database'

require('dotenv/config')

db.connect()

app.listen(process.env.PORT)
