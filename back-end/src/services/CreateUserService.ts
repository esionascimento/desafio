import bcrypt = require('bcrypt')

import { CreateUserModel } from '../models/UserModels'

const CreateUserService = async (id_client: number, {
  first_name, last_name, phone, email, password
}: any) => {
  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);

  const service = new CreateUserModel()
  
  return await service.create({id_client, first_name, last_name, phone, email, password})
}

export { CreateUserService }