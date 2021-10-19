import { Model, UUIDV4 } from 'sequelize'
import IUser from '../protocol/user'

export default (sequelize: any, DataTypes: any) => {
  class User extends Model<IUser> implements IUser {
    id!: string
    email!: string
    password!: string
    name!: string
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'User'
    }
  )

  return User
}
