/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex, Promise) {
  return knex.schema.withSchema('public').createTable('user', (table) => {
    table.increments('id');
    table.uuid('uuid').notNullable().unique();
    table.string('email').notNullable().unique();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.timestamps(true, true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex, Promise) {
  return knex.schema.withSchema('public').dropTable('user')
};
