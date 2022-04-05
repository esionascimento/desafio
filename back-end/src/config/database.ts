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
  db.query(`USE ${process.env.DB_DATABASE}`, function (err) {
    const users = fs.readFileSync(path.join(__dirname, '../sql/createDB.sql')).toString()
    db.query(users + ' ' +  process.env.DB_DATABASE, (err) => {
      if (err) {
        throw err
      }
      db.changeUser({
        database: process.env.DB_DATABASE
      }, (err) => {
        if (err) {
          console.log('Error in changing database', err)
        }
      })
    })
    if (err) {
      const aux = async () => {
        const users = fs.readFileSync(path.join(__dirname, '../sql/db.sql')).toString()
        db.query(users, (err) => {
          if (err) {
            throw err
          } else {
            console.log('Query run successfully')
          }
        })
      }
      aux()
    } else {
      console.log('Database already created')
    }
  })
})

export default db
