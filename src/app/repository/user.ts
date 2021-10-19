import IUser from '../protocol/user'

class BugRepository {
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
export default new BugRepository()
