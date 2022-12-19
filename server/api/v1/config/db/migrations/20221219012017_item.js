/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex, Promise) {
  return knex.schema.withSchema('public').createTable('item', (table) => {
    table.increments('id').notNullable();
    table.uuid('item_id', true).notNullable().unique();
    table.uuid('user_id').notNullable();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.float('price').notNullable().defaultTo(0);
    table.integer('views').notNullable().defaultTo(0);
    table.integer('likes').notNullable().defaultTo(0);
    table.double('lat').notNullable();
    table.double('lon').notNullable();
    table.timestamps(true, true);
  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex, Promise) {
  return knex.schema.withSchema('public').dropTable('item')
};
