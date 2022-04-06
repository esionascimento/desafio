import db from '../config/database'
import { UserInterface } from '../interface'
import { QueryInsert } from '../config/mysql'
import fs = require('fs')
import path = require('path')

export class CreateUserModel {
  async create ({ id_client, first_name, last_name, phone, email, password }: UserInterface) {
    const users = fs.readFileSync(path.join(__dirname, '../sql/createUser.sql')).toString()
    const todo = [id_client, first_name, last_name, phone, email, password]

    const p  = await QueryInsert(db, users, todo);
    return p
  }
}
