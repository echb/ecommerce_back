import { fastify } from "fastify"
import { networkInterfaces } from 'os'
import { default as cors } from '@fastify/cors'
import swagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
// import { default as socket } from 'fastify-socket.io'
// import { send } from "process"
// import { testsRoutes } from './routes/test.js'


import { swaggerConfig, swaggerConfigUi } from "./api/v1/config/swagger/swagger_config.js"
import apiV1Routes from "./api/v1/routes/index_routes.js"
import { knexDb } from "./api/v1/shared/db.js"


const { PORT } = process.env || 5000;
const app = fastify({ logger: true })

const routes = Array.from(apiV1Routes);

async function main() {
  // const path = require('path')
  // const { test } = require('./temporalTests.js')
  // const { setInitialUser } = require('./controllers/initAppController')

  // const { usersRoutes } = require('./routes/users.js')
  // const { itemRoutes } = require('./routes/items.js')
  // const { assetsRoutes } = require('./routes/assets.js')
  // const { offerRoutes } = require('./offerRoutes.js')

  // fastify register plugins
  await plugins()

  // app.register(socket, {
  //   cors: cors,
  //   // put your options here
  // })

  // app.ready(err => {
  //   if (err) throw err

  //   app.io.on('connect', (socket) => console.info('Socket connected!', socket.id))
  //   app.io.on('disconnect', (socket) => console.info('Socket disconnected!', socket.id))
  // })

  // fastify.register(require('fastify-static'), {
  //   root: path.resolve('public'),
  //   prefix: '/public/',
  // })


  // fastify register routes

  // fastify.register(usersRoutes)
  // fastify.register(itemRoutes)
  // fastify.register(assetsRoutes)
  // fastify.register(offerRoutes)

  setRoutes()




  // here start the app
  const start = async () => {
    try {
      await app.ready()

      app.listen({
        port: PORT,
        host: getIp(),
      })

    } catch (error) {
      app.log.error(error)
      process.exitCode = 1
    }
  }
  start()
}

main()

function getIp() {
  const nets = networkInterfaces()
  let results

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        results = net.address
      }
    }
  }
  return results
}

async function plugins() {
  app.register(cors), {
    origin: true,
  }

  await app.register(swagger, swaggerConfig)
  await app.register(fastifySwaggerUi, swaggerConfigUi)

}

function setRoutes() {
  const routesNames = routes.map((route) => route.name)

  app.log.info(routesNames.length === 0 ? 'No routes' : routesNames);

  routes.forEach((route) => {
    app.register(route)
  });
}