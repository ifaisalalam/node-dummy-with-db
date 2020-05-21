'use strict'

const fastify = require('./app')

fastify.listen({ host: '0.0.0.0', port: 3000 })
  .catch(err => {
    fastify.log.error(err)
    process.exit(1)
  })
