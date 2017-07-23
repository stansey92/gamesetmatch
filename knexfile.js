'use strict';

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/gamesetmatch_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/gamesetmatch_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
