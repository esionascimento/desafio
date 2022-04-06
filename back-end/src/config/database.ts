import mysql = require('mysql2')
import path = require('path')
import fs = require('fs')
require('dotenv/config')

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  /* database: process.env.MYSQL_DATABASE, */
  multipleStatements: true
})

const verifyTable = () => {
  db.query(`SELECT * FROM User`, function (err) {
    if (!err) {
      console.log('=== Table already created ===')
    } else {
      const users = fs.readFileSync(path.join(__dirname, '../sql/table.sql')).toString()
      db.query(users, (err) => {
        if (!err) console.log('=== Query run successfully ===')
      })
    }
  })
}

db.connect(function (err) {
  if (err) {
    console.log("Error connection: ", err)
  } 
  console.log('Database Connect')

  db.query(`USE ${process.env.MYSQL_DATABASE}`, function (err) {
    if (!err) {
      console.log('=== Database already created ===')
      verifyTable()
    } else {
      const users = fs.readFileSync(path.join(__dirname, '../sql/createDB.sql')).toString()
      db.query(users + ' ' +  process.env.MYSQL_DATABASE, (err) => {
        if (err) {
          console.log('=== Error create Database ===', err)
        } else {
          console.log("=== Database created successfully ===")
          db.changeUser({database: process.env.MYSQL_DATABASE}, (err) => {
            if (!err) {
              console.log('=== Changing database ===')
            }
          })
        }
        verifyTable()
      })
    }
  })

})

export default db
