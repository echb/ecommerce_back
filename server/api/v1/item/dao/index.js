import { knexDb } from "../../shared/db.js"

const place = '(point(lat, lon) <@> point(0, 0))'

export const daoCreateItem = () => {
  return knexDb('item')
    .insert({
      item_id: '250e8400-e29b-41d4-a716-446655440000',
      user_id: '550e8400-e29b-41d4-a716-446655440000',
      title: 'title',
      description: 'desc',
      price: 23.93,
      // views:,
      // likes:,
      lat: 0,
      lon: 0,

    })
    .returning({ id: 'id' })

}

export const daoGetItem = () => {
  return knexDb('item')
    .select(knexDb.raw(`*, ${place} AS distance`))
    .where(knexDb.raw(`${place} < (10000 / 1609.344) AND ${place} > 0`))
  // .where({ name: 'casa' })
}


// export class UserDao {
// export const daoGetUser = () => {
//   return knexDb('user')
//     .select()
//   // .where(knex.raw(`${place} < (10000 / 1609.344) AND ${place} > 0`))
//   // .where({ name: 'casa' })
//   // .then((el) => el)
// }

// export const daoCreateUser = async () => {
//   return knexDb('user')
//     .select()
//     .insert({
//       uuid: '550e8400-e29b-41d4-a716-446655440003',
//       email: 'email4',
//       first_name: 'name1',
//       last_name: 'last2',
//     })
//     .returning({ id: 'id', uuid: 'uuid' })
//   // .returning('id, uuid')
//   // .where(knex.raw(`${place} < (10000 / 1609.344) AND ${place} > 0`))
//   // .where({ name: 'casa' })
//   // .then((el) => el)
// }

// export const personDao = PersonDao()
