'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          name: 'Devin Hurd',
          email: 'devin@devinhurd.com',
          hashed_password: '$2a$06$R08R8hCrwbQlv5m2YnB6a.MyTOMxVMu17rTCKd4LVPfnEZWf6ELP.',
          is_admin: true,
          user_avatar_url: 'https://s-media-cache-ak0.pinimg.com/originals/b1/a9/25/b1a9258f681b6d0c86182e5bac02200d.jpg',
          smack_talk: 'You can\'t have Astros without "ass."',
          friends_list: {
            "friends": "[ 2 ]"
          },
          favorite_teams: null,
          physical_street_address: null,
          physical_state: null,
          physical_zip: null,
          phone: null,
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));");
    });
};
