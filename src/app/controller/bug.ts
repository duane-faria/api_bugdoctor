import { Controller } from './controller'
import bugRepository from '../repository/bug'

class BugController implements Controller {
  async index (req, res) {
    return res.json({
      data: await bugRepository.getAll()
    })
  }

  async store (req, res) {
    // console.log(global.models.Bug);
    return res.json({
      data: await bugRepository.insert(req.body)
    })
  }

  async delete () {}

  async update () {}
}

export default new BugController()
