
import { Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUserService'
import { ListAllUserService } from '../services/ListAllUserService'

export class UserController {
  async createUser (req: Request, res: Response) {
    const { first_name, last_name, phone, email, password } = req.body
    const id_client = Number(req.params.id);

    const service = new CreateUserService()

    const result = await service.execute({
      id_client, first_name, last_name, phone, email, password
    })

    res.send(result)
  }

  async listAllUser (_req: Request, res: Response) {
    const service = new ListAllUserService()

    const result = await service.execute()

    res.send(result)
  }
}
