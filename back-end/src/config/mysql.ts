import mysql = require('mysql2')

function Query(connection: mysql.Connection, query: string) {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, result) => {
      if (error) {
        reject(error)
        return
      }
      resolve(result)
    })
  })
}

async function QueryInsert(connection: mysql.Connection, query: string, queryComplete: (string | number)[]) {
    const data = await connection.promise().query(query, queryComplete)
  return data
}

export { Query, QueryInsert }
