
import { Request, Response } from 'express'
import { ListAllClientService } from '../services/ListAllClientService'
import { CreateClientService } from '../services/CreateClientService'

export class ClientController {
  async createClient (req: Request, res: Response) {
    const { cnpj, fantasy_name, social_reason, cep, address, number, complement, district, city, uf } = req.body

    const service = new CreateClientService()

    const result = await service.execute({
      cnpj, fantasy_name, social_reason, cep, address, number, complement, district, city, uf
    })

    res.send(result)
  }

  async listAllClient (req: Request, res: Response) {
    const service = new ListAllClientService()

    const result = await service.execute()

    res.send(result)
  }
}
