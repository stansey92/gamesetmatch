'use strict';

const express = require('express');
const knex = require('../knex');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('mlb_teams')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('mlb_teams')
    .select()
    .where('id', req.params.id)
    .first()
    .then((blog) => {
      if (!blog) {
        return next();
      }

      res.send(blog);
    })
    .catch((err) => {
      next(err);
    });
});


router.post('/', (req, res, next) => {
  knex('mlb_teams')
  .insert({
    official_name: req.body.official_name,
    name: req.body.name,
    official_nickname: req.body.official_nickname,
    city: req.body.city,
    state: req.body.state,
    team_colors: req.body.team_colors,
    stadium_name: req.body.stadium_name,
    logo_url: req.body.logo_url
  }, '*')
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});


router.patch('/:id', (req, res, next) => {
  knex('mlb_teams')
  .where('id', req.params.id)
  .update({
    official_name: req.body.official_name,
    name: req.body.name,
    official_nickname: req.body.official_nickname,
    city: req.body.city,
    state: req.body.state,
    team_colors: req.body.team_colors,
    stadium_name: req.body.stadium_name,
    logo_url: req.body.logo_url
  }, '*')
    .then((results)=>{
       res.status(200).send(results[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/:id', (req, res, next) => {
    let record;

      knex('mlb_teams')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('mlb_teams')
            .del()
            .where('id', req.params.id);
        })
        .then(() => {
          var holder = record.id;
          delete record.id;

          var obj = {
            id: holder,
            official_name: record.official_name,
            name: record.name,
            official_nickname: record.official_nickname,
            city: record.city,
            state: record.state,
            team_colors: record.team_colors,
            stadium_name: record.stadium_name,
            logo_url: record.logo_url,
            created_at: record.created_at,
            updated_at: record.updated_at
          };

          res.send(obj);
        })
        .catch((err) => {
          next(err);
        });
    });




module.exports = router;
