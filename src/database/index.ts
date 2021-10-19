import Sequelize from 'sequelize'
import fs from 'fs'
import path from 'path'

import databaseConfig from '../config/database'

class Database {
  public connection: Sequelize.Sequelize
  public db: any = {}

  constructor () {
    this.init()
    this.loadModels()
  }

  init (): void {
    const { username, database, password, host, options } = databaseConfig

    this.connection = new Sequelize.Sequelize(database, username, password, {
      dialect: 'mysql',
      host,
      ...options
    })
  }

  loadModels () {
    const db = this.db
    const basename = path.basename(__filename)
    const dir = path.resolve(__dirname, '..', 'app', 'model')

    fs.readdirSync(dir)
      .filter((file: string) => {
        return (
          file.indexOf('.') !== 0 &&
          file !== basename &&
          file.slice(-3) === '.ts'
        )
      })
      .forEach((file: any) => {
        const model = require(path.join(dir, file)).default(
          this.connection,
          Sequelize.DataTypes
        )
        db[model.name] = model
      })

    Object.keys(db).forEach(modelName => {
      if (db[modelName].associate) {
        db[modelName].associate(db)
      }
    })
    global.models = db
    db.sequelize = this.connection
    db.Sequelize = Sequelize

    db.sequelize
      .sync({ alter: true, force: false })
      .then(() => console.log('all models have been created'))
  }
}

export default new Database()
