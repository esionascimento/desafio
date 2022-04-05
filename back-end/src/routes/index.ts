import { Router } from 'express'

import { UserController } from '../controllers/UserController'
import { ClientController } from '../controllers/ClientController'

const routes = Router()

routes.route('/user')
  .get(new UserController().listAllUser)
  
routes.route('/user/:id')
  .post(new UserController().createUser)

routes.route('/client')
  .get(new ClientController().listAllClient)
  .post(new ClientController().createClient)


export default routes
