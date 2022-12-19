import { getUser, createUser } from "../controller/index.js"

const userGetOptions = {
  handler: getUser,
}
const userCreateOptions = {
  handler: createUser,
}

export function userRoutes(fastify, options, done) {
  // fastify.get('/items', getAllItems)
  // fastify.get('/items', getPrivateUserItemsOptions)
  // fastify.get('/items/:itemId', getSingleItemOptions)
  // // fastify.post('/items', postCreateItemOptions)
  // fastify.put('/items/:itemId', putEditItemOptions)
  // fastify.delete('/items/:itemId', deleteItemOptions)
  // fastify.get('/items/sync', syncItemOptions)
  // fastify.post('/items/robotPost', postItemsOptions)
  // fastify.post('/items/robotAuto', robotAutoOptions)
  // fastify.get('/items/robotAutoTotal', robotTotalItemsAutoOptions)
  fastify.get('/user', userGetOptions)
  fastify.get('/user1', userCreateOptions)
  done()
}