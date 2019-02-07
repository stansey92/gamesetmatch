
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(() => {
      // Inserts seed entries
      return knex('messages').insert([
        {
          id: 1,
          sender_name: 'Will Brown',
          receiver_name: "Sean Tansey",
          message: 'Yo you watch that dolphins game?',
          created_at: new Date('2016-06-29 14:26:16 UTC'),
        },
        {
          id: 2,
          sender_name: 'Sean Tansey',
          receiver_name: "Will Brown",
          message: 'nah dude, why would i?',
          created_at: new Date('2016-06-29 14:26:17 UTC'),
        },
        {
          id: 3,
          sender_name: 'Marc Wilk',
          receiver_name: "Ben Strader",
          message: 'hey whats up man, its your boss Marc Wilk just checking in',
          created_at: new Date('2016-06-29 14:26:17 UTC'),
        },
        {
          id: 4,
          sender_name: 'Sean Tansey',
          receiver_name: "Marc Wilk",
          message: 'Whats up dawg?',
          created_at: new Date('2016-06-29 14:26:17 UTC'),
        },
      ]);
    });
};
