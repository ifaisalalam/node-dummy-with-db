'use strict'

require('dotenv').config()

const fastify = require('fastify')()
const knex = require('../knex')

/**
 * @param {fastify.FastifyRequest} request
 * @param {fastify.FastifyReply} reply
 * @return {Promise<void>}
 */
const handler =  async (request, reply) => {
    const result = await knex.raw('SELECT 123').debug(true)
    console.info(result)

    reply.status(200)
    reply.send({ hello: 'world' })
}

fastify.get('/', { prefixTrailingSlash: 'both' }, handler)

/**
 * @param {fastify.FastifyRequest} request
 * @param {fastify.FastifyReply} reply
 * @return {Promise<void>}
 */
const pingPongHandler = async (request, reply) => {
    reply.status(200)
    reply.send('pong')
}

fastify.get('/ping', { prefixTrailingSlash: 'both' }, pingPongHandler)

module.exports = fastify
