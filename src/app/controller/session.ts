import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import { Controller } from '../protocol/controller'
import userRepository from '../repository/user'
import authConfig from '../../config/auth'

class SessionController implements Controller {
  async store (req, res) {
    const { email, password } = req.body
    const user = await userRepository.findOne({
      where: {
        email
      }
    })

    if (!user) {
      return res.status(401).json({ error: 'E-mail not found' })
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'The password is wrong' })
    }

    const { id, name, email: userEmail } = user

    const token = jwt.sign({ id, name, email: userEmail }, authConfig.secret, {
      expiresIn: authConfig.expiresIn
    })

    return res.json({
      data: {
        id,
        name,
        email,
        token
      }
    })
  }
}

export default new SessionController()
