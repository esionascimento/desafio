import app from './app'
import db from './config/database'
import middleError from './middleware/error'
require('dotenv/config')

db.connect()
app.use(middleError);
app.listen(process.env.PORT)
