import { Router } from 'express'

import BugController from './app/controller/bug'
import UserController from './app/controller/user'
import SessionControler from './app/controller/session'

const routes = Router()

routes.get('/bugs', BugController.index)
routes.post('/bug', BugController.store)
routes.put('/bug', BugController.update)
routes.delete('/bug/:id', BugController.delete)

routes.get('/users', UserController.index)
routes.post('/user', UserController.store)
routes.put('/user', UserController.update)
routes.delete('/user/:id', UserController.delete)

routes.post('/session', SessionControler.store)
export default routes
