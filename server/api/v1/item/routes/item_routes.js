import { createItem, getItems } from "../controller/index.js"

// const image = {
//   tags: 'pets',
//   schema: {
//     description: 'post some data',
//     tags: ['user', 'code'],
//     response: {
//       200: {
//         type: 'array',
//         items: {
//           type: 'object',
//           properties: {
//             id: { type: 'number' },
//             item_id: { type: 'number' },
//             title: { type: 'string' },
//             price: { type: 'number' },
//             item_photos_url: { type: 'string' },
//           }
//         }
//       }
//     },
//   },
//   // preValidation: userValidate,
//   handler: async (req, res) => {
//     const { item_id, id } = req.params


//     res.code(201).send(`/${item_id}/${id}`)
//   }
// }

const getItemOptions = {
  handler: getItems
}
const creteItemOptions = {
  handler: createItem
}

export function itemRoutes(fastify, options, done) {
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
  fastify.get('/items', getItemOptions)
  fastify.get('/items1', creteItemOptions)
  done()
}