import { Request, Response } from 'express'
import { ListAllClientService } from '../services/ListAllClientService'
import { CreateClientService } from '../services/CreateClientService'
import { validateClient } from '../middleware/validate/client'

export class ClientController {
  async createClient (req: Request, res: Response, next: (arg0: { isError: boolean; code: any; message: string } | { isError: boolean }) => any) {
    try {
      console.log('req.body :', req.body);
      const resultJoi = validateClient(req);

      if (resultJoi.isError) {
        return next(resultJoi);
      }

      const result = await CreateClientService(req.body)

      const data = {
        insertId: result[0]["insertId"],
        affectedRows: result[0]["affectedRows"]
      }
  
      res.status(200).send({data: data})
    } catch (err) {
      return res.status(500).json({ message: 'Error api: ', err });
    }
  }

  async listAllClient (_req: Request, res: Response) {
    const service = new ListAllClientService()

    const result = await service.execute()

    res.status(200).send(result)
  }
}
