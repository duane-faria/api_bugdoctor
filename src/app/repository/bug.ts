import IBug from '../protocol/bug'

class BugRepository {
  getAll (): Promise<Array<IBug>> {
    return global.models.Bug.findAll()
  }

  insert (bug: IBug): Promise<IBug> {
    return global.models.Bug.create(bug)
  }
}
export default new BugRepository()
