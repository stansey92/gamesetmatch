'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('mlb_teams', function(table) {
    table.increments().primary();
    table.string('official_name').notNullable().defaultTo('');
    table.string('name').notNullable().defaultTo('');
    table.string('official_nickname').notNullable().defaultTo('');
    table.string('city').notNullable().defaultTo('');
    table.string('state').notNullable().defaultTo('');
    table.json('team_colors').defaultTo(null);
    table.string('stadium_name').defaultTo(null);
    table.string('logo_url').defaultTo(null);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('mlb_teams');
};
