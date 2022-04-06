import db from '../config/database'
import { ClientInterface } from '../interface'
import { QueryInsert } from '../config/mysql'
import fs = require('fs')
import path = require('path')

export class CreateClientModel {
  async create ({ cnpj, fantasy_name, social_reason, cep, address, number, complement, district, city, uf }: ClientInterface) {
    const users = fs.readFileSync(path.join(__dirname, '../sql/createClient.sql')).toString()
    const todo = [cnpj, fantasy_name, social_reason, cep, address, number, complement, district, city, uf]

    const p  = await QueryInsert(db, users, todo);
    return p
  }
}
