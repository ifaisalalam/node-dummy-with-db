'use strict'

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : process.env.PG_HOST,
    user : process.env.PG_USERNAME,
    password : process.env.PG_PASSWORD,
    database : process.env.PG_DATABASE_NAME
  }
})

module.exports = knex
