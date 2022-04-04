import mysql from 'mysql2'

const Query = async (connection: mysql.Connection, query: string) =>
  new Promise((resolve, reject) => {
    connection.query(query, connection, (error, result) => {
      if (error) {
        reject(error)
        return
      }

      resolve(result)
    })
  })

export { Query }
