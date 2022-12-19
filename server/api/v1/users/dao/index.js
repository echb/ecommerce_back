import { knexDb } from "../../shared/db.js"

// export class UserDao {
export const daoGetUser = () => {
  return knexDb('user')
    .select()
  // .where(knex.raw(`${place} < (10000 / 1609.344) AND ${place} > 0`))
  // .where({ name: 'casa' })
  // .then((el) => el)
}

export const daoCreateUser = async () => {
  return knexDb('user')
    .select()
    .insert({
      uuid: '550e8400-e29b-41d4-a716-446655440003',
      email: 'email4',
      first_name: 'name1',
      last_name: 'last2',
    })
    .returning({ id: 'id', uuid: 'uuid' })
  // .returning('id, uuid')
  // .where(knex.raw(`${place} < (10000 / 1609.344) AND ${place} > 0`))
  // .where({ name: 'casa' })
  // .then((el) => el)
}

// export const personDao = PersonDao()
