import db from '../config/database'
import { Query } from '../config/mysql'

export class ListAllClientService {
  async execute () {
    const sqlQuery = 'SELECT * FROM Client';

    const p  = await Query(db, sqlQuery);
    return p
  }
}
