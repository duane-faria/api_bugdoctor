import { Router } from 'express'

import BugController from './app/controller/bug'

const routes = Router()

routes.get('/bugs', BugController.index)
routes.post('/bug', BugController.store)

export default routes
