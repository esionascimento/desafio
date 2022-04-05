import db from '../config/database'
import { GameRequest } from '../interface'
import { QueryInsert } from '../config/mysql'
import fs from 'fs'
import path from 'path'

export class CreateUserService {
  async execute ({ id_client, first_name, last_name, phone, email, password }: GameRequest) {
    const users = fs.readFileSync(path.join(__dirname, '../sql/createUser.sql')).toString()
    const todo = [id_client, first_name, last_name, phone, email, password]
    const sqlQuery = 'SELECT * FROM User';
    /* const aux = []
    const p  = db.promise().query(sqlQuery)
      .then((data)=>{ // promise and callback function
      return data[0]
    });
    return p */
    const p  = await QueryInsert(db, users, todo);
    return p

    /* console.log('aux :', aux); */
    /* const aux = db.query(users, todo, (err, results, fields) => {
      if (err) {
        return console.log('error: ', err.message)
      } 
      return JSON.stringify(results);
    }) */
    /* return aux */
   
    /* const query =  'INSERT INTO User (id_client, first_name, last_name, phone, email, password) VALUES (?, ?, ?, ?, ?, ?);'
    const aux = await Query(db, `${query}, ${[id_client, first_name, last_name, phone, email, password]}`)
    console.log('aux :', aux); */
  }
}
