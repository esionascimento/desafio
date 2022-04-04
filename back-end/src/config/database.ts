import mysql from 'mysql2'
import fs from 'fs'
import path from 'path'
require('dotenv/config')

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_NAME,
  password: process.env.DB_PASS,
  /* database: process.env.DB_DATABASE, */
  multipleStatements: true
})

db.connect(function (err) {
  if (err) console.log('error: ', err)
  db.query('USE desafioo', function (err) {
    if (err) {
      const aux = async () => {
        const users = fs.readFileSync(path.join(__dirname, '../sql/db.sql')).toString()
        db.query(users, (err) => {
          if (err) {
            throw err
          } else {
            console.log('Query run successfully')
            console.log('Database created')
          }
          db.changeUser({
            database: process.env.DB_DATABASE
          }, (err) => {
            if (err) {
              console.log('Error in changing database', err)
            }
          })
        })
      }
      aux()
    } else {
      console.log('Database already created')
      db.query('SELECT * FROM user', function (error, results) {
        if (error) { throw error }

        console.log(results)
      })
    }
  })
})

export default db
