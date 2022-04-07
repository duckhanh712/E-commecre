import knex from 'knex'


const connection = {
  host: 'http://95.111.192.214',
  port: '3306',
  user: 'sk_local',
  password: 'BIyai917L5G5nrHwnQYC1R5S3N8R3iEY',
  database: 'sk_local',
  charset: 'utf8',
}

const queryBuilder = knex({
  connection,
  client: 'mysql'
})

export default queryBuilder
