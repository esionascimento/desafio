import db from '../config/database'
import { ClientInterface } from '../interface'
import { QueryInsert } from '../config/mysql'
import fs from 'fs'
import path from 'path'

export class CreateClientService {
  async execute ({ cnpj, fantasy_name, social_reason, cep, address, number, complement, district, city, uf }: ClientInterface) {
    const users = fs.readFileSync(path.join(__dirname, '../sql/createClient.sql')).toString()
    const todo = [cnpj, fantasy_name, social_reason, cep, address, number, complement, district, city, uf]

    const p  = await QueryInsert(db, users, todo);
    return p
  }
}
