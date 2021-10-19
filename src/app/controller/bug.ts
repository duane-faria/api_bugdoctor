import { Request, Response } from 'express'
import { Controller } from '../protocol/controller'
import bugRepository from '../repository/bug'

class BugController implements Controller {
  async index (req: Request, res: Response) {
    return res.json({
      data: await bugRepository.getAll()
    })
  }

  async store (req: Request, res: Response) {
    return res.json({
      data: await bugRepository.insert(req.body)
    })
  }

  async delete (req: Request, res: Response) {
    await bugRepository.delete(Number(req.params.id))

    return res.json({
      data: { success: true }
    })
  }

  async update (req: Request, res: Response) {}
}

export default new BugController()
