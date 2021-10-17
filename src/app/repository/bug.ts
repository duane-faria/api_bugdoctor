import IBug from '../protocol/bug'

class BugRepository {
  getAll (): Promise<Array<IBug>> {
    return global.models.Bug.findAll()
  }

  insert (bug: IBug): Promise<IBug> {
    return global.models.Bug.create(bug)
  }

  update (bug: IBug): Promise<IBug> {
    return global.models.Bug.update(bug)
  }

  delete (id: number): Promise<IBug> {
    return global.models.Bug.destroy({ where: { id } })
  }
}
export default new BugRepository()
