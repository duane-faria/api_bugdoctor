import * as dotenv from 'dotenv'

dotenv.config()

interface dbConfig {
  options: {
    define: any
    logging: boolean
  }
  dialect: string
  host: string
  username: string
  password: string
  database: string
  port: number
}

export default {
  dialect: process.env.DB_DRIVER,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306,
  options: {
    logging: false,
    define: {
      timestamps: true,
      paranoid: true
    }
  }
} as dbConfig
