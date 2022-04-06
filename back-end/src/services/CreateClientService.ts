import { CreateClientModel } from '../models/ClientModel'

const CreateClientService = async ({
  cnpj, fantasy_name, social_reason, cep, address, number, complement, district, city, uf
}) => {
  const service = new CreateClientModel()
  
  const result = await service.create({
    cnpj, fantasy_name, social_reason, cep, address, number, complement, district, city, uf
  })

  return result
}

export { CreateClientService }