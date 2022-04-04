import { Router } from 'express'

import { CreateUserController } from '../controllers/CreateUserController'

const routes = Router()

routes.route('/user').post(new CreateUserController().create)

export default routes
