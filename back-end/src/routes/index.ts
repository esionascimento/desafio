import { Router } from 'express'

const routes = Router()

routes.get('/', function (_req, res) {
  res.send('Hello World')
})

export default routes
