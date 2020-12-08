// Update with your config settings.
var knex_env = require("./setup_env");
//const connection = {
//  host: process.env.HOST,
//  user: process.env.USER,
//  password: process.env.PASSWORD,
//  database: process.env.DATABASE
//}

console.log(knex_env);

module.exports = {

  development: {
    client: knex_env.client,
    connection: knex_env.connection
  },

  staging: {
    client: knex_env.client,
    connection: knex_env.connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: knex_env.client,
    connection: knex_env.connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
