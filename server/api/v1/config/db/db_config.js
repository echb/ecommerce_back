import * as dotenv from 'dotenv'

dotenv.config()

const {
  db_host,
  db_port,
  db_user,
  db_secret,
  db_name,
  // db_client,
} = process.env;

export const DB_CONFIG = {

  development: {
    client: 'pg',
    // version: '7.2',
    connection: {
      host: db_host,
      port: db_port,
      user: db_user,
      password: db_secret,
      database: db_name,
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

  // searchPath: ['public'],
  // useNullAsDefault: true
}

