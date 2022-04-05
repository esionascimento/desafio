import mysql from 'mysql2'

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

function QueryInsert(connection: mysql.Connection, query: string, queryComplete) {
    return connection.promise().query(query, queryComplete)
      .then((data)=>{ // promise and callback function
        return data
      }
    )
}

export { Query, QueryInsert }
