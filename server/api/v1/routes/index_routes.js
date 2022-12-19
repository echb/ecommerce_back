// import { itemRoutes } from "../items/routes/items.js"
// import { userRoutes } from "../users/routes/user_routes.js"

import { itemRoutes } from "../item/routes/item_routes.js"
import { userRoutes } from "../users/routes/user_routes.js"

// example: const routes = new Set([testsRoutes, testsRoutes2])
const apiV1Routes = new Set([userRoutes, itemRoutes])

export default apiV1Routes