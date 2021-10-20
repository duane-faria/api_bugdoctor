import IUser from '../protocol/user'

class UserRepository {
  findOne (conditions?: any): Promise<IUser> {
    return global.models.User.findOne(conditions)
  }

  getAll (): Promise<Array<IUser>> {
    return global.models.User.findAll()
  }

  insert (bug: IUser): Promise<IUser> {
    return global.models.User.create(bug)
  }

  update (bug: IUser): Promise<IUser> {
    return global.models.User.update(bug)
  }

  delete (id: number): Promise<IUser> {
    return global.models.User.destroy({ where: { id } })
  }
}

export default new UserRepository()
