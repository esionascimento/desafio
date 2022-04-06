
import { Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUserService'
import { ListAllUserService } from '../services/ListAllUserService'
import { validateUser } from '../middleware/validate/user'

export class UserController {
  async createUser (req: Request, res: Response, next: (arg0: { isError: boolean; code: any; message: string; } | { isError: boolean; }) => any) {
    try {
      const id_client = Number(req.params.id);
      const resultJoi = validateUser(req);

      if (resultJoi.isError) {
        return next(resultJoi);
      }

      const result = await CreateUserService(id_client, req.body)

      const data = {
        insertId: result[0]["insertId"],
        affectedRows: result[0]["affectedRows"]
      }
  
      res.status(200).send({data: data})
    } catch (err) {
      return res.status(500).json({ message: 'Error api: ', err });
    }
  }

  async listAllUser (_req: Request, res: Response) {
    const service = new ListAllUserService()

    const result = await service.execute()

    res.send(result)
  }
}
