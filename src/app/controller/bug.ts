import { Controller } from './controller'
import bugRepository from '../repository/bug'

class BugController implements Controller {
  async index (req, res) {
    return res.json({
      data: await bugRepository.getAll()
    })
  }

  async store (req, res) {
    return res.json({
      data: await bugRepository.insert(req.body)
    })
  }

  async delete (req, res) {
    await bugRepository.delete(req.params.id)

    return res.json({
      data: { success: true }
    })
  }

  async update () {}
}

export default new BugController()
