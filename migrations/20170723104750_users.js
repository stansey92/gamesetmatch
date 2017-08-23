'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments().primary();
    table.string('name').notNullable().defaultTo('');
    table.string('email').notNullable().defaultTo('');
    table.string('hashed_password').notNullable().defaultTo('');
    table.boolean('is_admin').notNullable().defaultTo(false);
    table.string('user_avatar_url').defaultTo(null);
    table.string('smack_talk').defaultTo(null);
    table.json('friends_list').defaultTo(null);
    table.json('favorite_teams').defaultTo(null);
    table.date('last_visit').notNullable().defaultTo('2017-03-22 14:55:16 UTC');
    table.integer('loyalty_score').notNullable().defaultTo(0);
    table.string('physical_street_address').defaultTo(null);
    table.string('physical_state').defaultTo(null);
    table.string('physical_zip').defaultTo(null);
    table.string('phone').defaultTo(null);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
