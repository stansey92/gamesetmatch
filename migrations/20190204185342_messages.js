'use strict'
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', (table) => {
    table.increments()
    table.string('sender_name').notNullable()
    table.string('receiver_name').notNullable()
    table.string('message').notNullable()
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages')
};
