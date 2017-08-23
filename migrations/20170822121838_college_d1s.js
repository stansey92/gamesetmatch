'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('college_d1s', function(table) {
    table.increments().primary();
    table.string('official_name').notNullable().defaultTo('');
    table.string('name').notNullable().defaultTo('');
    table.string('city').notNullable().defaultTo('');
    table.string('state').notNullable().defaultTo('');
    table.string('conference').notNullable().defaultTo('');
    table.json('team_colors').defaultTo(null);
    table.string('logo_url').defaultTo(null);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('college_d1s');
};
