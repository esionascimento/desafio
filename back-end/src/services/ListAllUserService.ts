import db from '../config/database'
import { GameRequest } from '../interface'
import { Query } from '../config/mysql'
import fs from 'fs'
import path from 'path'

export class ListAllUserService {
  async execute () {
    const sqlQuery = 'SELECT * FROM User';

    const p  = await Query(db, sqlQuery);
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
