import { Router } from 'express'

import BugController from './app/controller/bug'

const routes = Router()

routes.get('/bugs', BugController.index)
routes.post('/bug', BugController.store)
routes.put('/bug', BugController.update)
routes.delete('/bug/:id', BugController.delete)

export default routes
