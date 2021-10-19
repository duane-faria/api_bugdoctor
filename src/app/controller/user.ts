import { Request, Response } from 'express'
import { Controller } from '../protocol/controller'
import userRepository from '../repository/user'

class UserController implements Controller {
  async index (req: Request, res: Response) {
    return res.json({
      data: await userRepository.getAll()
    })
  }

  async store (req: Request, res: Response) {
    return res.json({
      data: await userRepository.insert(req.body)
    })
  }

  async delete (req: Request, res: Response) {
    await userRepository.delete(Number(req.params.id))

    return res.json({
      data: { success: true }
    })
  }

  async update (req: Request, res: Response) {
    return res.json({
      data: await userRepository.update(req.body)
    })
  }
}

export default new UserController()
