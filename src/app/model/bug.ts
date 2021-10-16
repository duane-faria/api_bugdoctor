import { Model, UUIDV4 } from 'sequelize'
import IBug from '../protocol/bug'

export default (sequelize: any, DataTypes: any) => {
  class Bug extends Model<IBug> implements IBug {
    id!: string
    description!: string
    responsible!: string
    reporter!: string

    // static associate (models: any) {
    //   User.belongsToMany(models.Project, {
    //     through: 'ProjectAssignments'
    //   })
    // }
  }

  Bug.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      responsible: {
        type: DataTypes.STRING,
        allowNull: false
      },
      reporter: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Bug'
    }
  )

  return Bug
}
