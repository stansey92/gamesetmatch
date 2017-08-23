'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('nfl_teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('nfl_teams').insert([
        {
          id: 1,
          official_name: 'Arizona Cardinals',
          name: 'Cardinals',
          city: 'Glendale',
          state: 'Arizona',
          team_colors: {
            "primary": "#97233F",
            "secondary": "#000000",
            "alternate": "#FFB612"
          },
          stadium_name: 'University of Phoenix Stadium',
          logo_url: 'http://content.sportslogos.net/logos/7/177/thumbs/kwth8f1cfa2sch5xhjjfaof90.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 2,
          official_name: 'Atlanta Falcons',
          name: 'Falcons',
          city: 'Atlanta',
          state: 'Georgia',
          team_colors: {
            "primary": "#A71930",
            "secondary": "#000000",
            "alternate": "#A5ACAF"
          },
          stadium_name: 'Georgia Dome',
          logo_url: 'http://content.sportslogos.net/logos/7/173/thumbs/299.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 3,
          official_name: 'Baltimore Ravens',
          name: 'Ravens',
          city: 'Baltimore',
          state: 'Maryland',
          team_colors: {
            "primary": "#241773",
            "secondary": "#000000",
            "alternate": "#9E7C0C"
          },
          stadium_name: 'M&T Bank Stadium',
          logo_url: 'http://content.sportslogos.net/logos/7/153/thumbs/318.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 4,
          official_name: 'Buffalo Bills',
          name: 'Bills',
          city: 'Orchard Park',
          state: 'New York',
          team_colors: {
            "primary": "#00338D",
            "secondary": "#C60C30"
          },
          stadium_name: 'Ralph Wilson Stadium',
          logo_url: 'http://content.sportslogos.net/logos/7/149/thumbs/n0fd1z6xmhigb0eej3323ebwq.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 5,
          official_name: 'Carolina Panthers',
          name: 'Panthers',
          city: 'Charlotte',
          state: 'North Carolina',
          team_colors: {
            "primary": "#0085CA",
            "secondary": "#000000",
            "alternate": "#BFC0BF"
          },
          stadium_name: 'Bank of America Stadium',
          logo_url: 'http://content.sportslogos.net/logos/7/174/thumbs/f1wggq2k8ql88fe33jzhw641u.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 6,
          official_name: 'Chicago Bears',
          name: 'Bears',
          city: 'Chicago',
          state: 'Illinois',
          team_colors: {
            "primary": "#0B162A",
            "secondary": "#C83803"
          },
          stadium_name: 'Soldier Field',
          logo_url: 'http://content.sportslogos.net/logos/7/169/thumbs/364.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 7,
          official_name: 'Cincinnati Bengals',
          name: 'Bengals',
          city: 'Cincinnati',
          state: 'Ohio',
          team_colors: {
            "primary": "#000000",
            "secondary": "#FB4F14"
          },
          stadium_name: 'Paul Brown Stadium',
          logo_url: 'http://content.sportslogos.net/logos/7/154/thumbs/403.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 8,
          official_name: 'Cleveland Browns',
          name: 'Browns',
          city: 'Cleveland',
          state: 'Ohio',
          team_colors: {
            "primary": "#FB4F14",
            "secondary": "#22150C",
            "alternate": "#A5ACAF"
          },
          stadium_name: 'FirstEnergy Stadium',
          logo_url: 'http://content.sportslogos.net/logos/7/155/thumbs/15578552015.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 9,
          official_name: 'Dallas Cowboys',
          name: 'Cowboys',
          city: 'Irving',
          state: 'Texas',
          team_colors: {
            "primary": "#002244",
            "secondary": "#B0B7BC",
            "alternate": "#ACC0C6"
          },
          stadium_name: 'AT&T Stadium',
          logo_url: 'http://content.sportslogos.net/logos/7/165/thumbs/406.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 10,
          official_name: 'Denver Broncos',
          name: 'Broncos',
          city: 'Denver',
          state: 'Colorado',
          team_colors: {
            "primary": "#002244",
            "secondary": "#FB4F14"
          },
          stadium_name: 'Mile High Stadium',
          logo_url: 'http://content.sportslogos.net/logos/7/161/thumbs/9ebzja2zfeigaziee8y605aqp.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 11,
          official_name: 'Detroit Lions',
          name: 'Lions',
          city: 'Detroit',
          state: 'Michigan',
          team_colors: {
            "primary": "#005A8B",
            "secondary": "#B0B7BC",
            "alternate": "#000000"
          },
          stadium_name: 'Ford Field',
          logo_url: 'http://content.sportslogos.net/logos/7/170/thumbs/17013982017.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 12,
          official_name: 'Green Bay Packers',
          name: 'Packers',
          city: 'Green Bay',
          state: 'Wisconsin',
          team_colors: {
            "primary": "#203731",
            "secondary": "#FFB612"
          },
          stadium_name: 'Lambeau Field',
          logo_url: 'http://content.sportslogos.net/logos/7/171/thumbs/dcy03myfhffbki5d7il3.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 13,
          official_name: 'Houston Texans',
          name: 'Texans',
          city: 'Houston',
          state: 'Texas',
          team_colors: {
            "primary": "#03202F",
            "secondary": "#A71930"
          },
          stadium_name: 'NRG Stadium',
          logo_url: 'http://content.sportslogos.net/logos/7/157/thumbs/570.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 14,
          official_name: 'Indianapolis Colts',
          name: 'Colts',
          city: 'Indianapolis',
          state: 'Indiana',
          team_colors: {
            "primary": "#002C5F",
            "secondary": "#A5ACAF"
          },
          stadium_name: 'Lucas Oil Stadium',
          logo_url: 'http://content.sportslogos.net/logos/7/158/thumbs/593.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 15,
          official_name: 'Jacksonville Jaguars',
          name: 'Jaguars',
          city: 'Jacksonville',
          state: 'Florida',
          team_colors: {
            "primary": "#000000",
            "secondary": "#006778",
            "alternate": "#9F792C"
          },
          stadium_name: 'Everbank Field',
          logo_url: 'http://content.sportslogos.net/logos/7/159/thumbs/15988562013.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 16,
          official_name: 'Kansas City Chiefs',
          name: 'Chiefs',
          city: 'Kansas City',
          state: 'Missouri',
          team_colors: {
            "primary": "#E31837",
            "secondary": "#FFB612",
            "alternate": "#000000"
          },
          stadium_name: 'Arrowhead Stadium',
          logo_url: 'http://content.sportslogos.net/logos/7/162/thumbs/857.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 17,
          official_name: 'Los Angeles Chargers',
          name: 'Chargers',
          city: 'Los Angeles',
          state: 'California',
          team_colors: {
            "primary": "#002244",
            "secondary": "#0073CF",
            "alternate": "#FFB612"
          },
          stadium_name: '',
          logo_url: 'http://content.sportslogos.net/logos/7/6446/thumbs/644624152017.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 18,
          official_name: 'Los Angeles Rams',
          name: 'Rams',
          city: 'Los Angeles',
          state: 'California',
          team_colors: {
            "primary": "#002244",
            "secondary": "#B3995D"
          },
          stadium_name: 'Los Angeles Memorial Coliseum',
          logo_url: 'http://content.sportslogos.net/logos/7/5941/thumbs/594179532017.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 19,
          official_name: 'Miami Dolphins',
          name: 'Dolphins',
          city: 'Miami Garden',
          state: 'Florida',
          team_colors: {
            "primary": "#008E97",
            "secondary": "#F58220",
            "alternate": "#005778"
          },
          stadium_name: 'Sun Life Stadium',
          logo_url: 'http://content.sportslogos.net/logos/7/150/thumbs/15041052013.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 20,
          official_name: 'Minnesota Vikings',
          name: 'Vikings',
          city: 'Minneapolis',
          state: 'Minnesota',
          team_colors: {
            "primary": "#4F2683",
            "secondary": "#FFC62F",
            "alternate": "#000000"
          },
          stadium_name: 'TCF Bank Stadium',
          logo_url: 'http://content.sportslogos.net/logos/7/172/thumbs/17227042013.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 21,
          official_name: 'New England Patriots',
          name: 'Patriots',
          city: 'Foxborough',
          state: 'Massachusetts',
          team_colors: {
            "primary": "#002244",
            "secondary": "#C60C30",
            "alternate": "#B0B7BC"
          },
          stadium_name: 'Gillette Stadium',
          logo_url: 'http://content.sportslogos.net/logos/7/151/thumbs/y71myf8mlwlk8lbgagh3fd5e0.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 22,
          official_name: 'New Orleans Saints',
          name: 'Saints',
          city: 'New Orleans',
          state: 'Louisiana',
          team_colors: {
            "primary": "#9F8958",
            "secondary": "#000000"
          },
          stadium_name: 'Mercedes-Benz Superdome',
          logo_url: 'http://content.sportslogos.net/logos/7/175/thumbs/907.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 23,
          official_name: 'New York Giants',
          name: 'Giants',
          city: 'East Rutherford',
          state: 'New Jersey',
          team_colors: {
            "primary": "#0B2265",
            "secondary": "#A71930",
            "alternate": "#A5ACAF"
          },
          stadium_name: 'MetLife Stadium',
          logo_url: 'http://content.sportslogos.net/logos/7/166/thumbs/919.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 24,
          official_name: 'New York Jets',
          name: 'Jets',
          city: 'East Rutherford',
          state: 'New Jersey',
          team_colors: {
            "primary": "#203731"
          },
          stadium_name: 'MetLife Stadium',
          logo_url: 'http://content.sportslogos.net/logos/7/152/thumbs/v7tehkwthrwefgounvi7znf5k.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 25,
          official_name: 'Oakland Raiders',
          name: 'Raiders',
          city: 'Oakland',
          state: 'California',
          team_colors: {
            "primary": "#A5ACAF",
            "secondary": "#000000"
          },
          stadium_name: '',
          logo_url: 'http://content.sportslogos.net/logos/7/163/thumbs/g9mgk6x3ge26t44cccm9oq1vl.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 26,
          official_name: 'Philadelphia Eagles',
          name: 'Eagles',
          city: 'Philadelphia',
          state: 'Pennsylvania',
          team_colors: {
            "primary": "#004953",
            "secondary": "#A5ACAF",
            "alternate": "#ACC0C6"
          },
          stadium_name: 'Lincoln Financial Field',
          logo_url: 'http://content.sportslogos.net/logos/7/167/thumbs/960.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 27,
          official_name: 'Pittsburgh Steelers',
          name: 'Steelers',
          city: 'Pittsburgh',
          state: 'Pennsylvania',
          team_colors: {
            "primary": "#000000",
            "secondary": "#FFB612",
            "alternate": "#C60C30"
          },
          stadium_name: 'Heinz Field',
          logo_url: 'http://content.sportslogos.net/logos/7/156/thumbs/970.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 28,
          official_name: 'San Francisco 49ers',
          name: '49ers',
          city: 'San Francisco',
          state: 'California',
          team_colors: {
            "primary": "#AA0000",
            "secondary": "#B3995D",
            "alternate": "#000000"
          },
          stadium_name: 'Levi\'s Stadium',
          logo_url: 'http://content.sportslogos.net/logos/7/179/thumbs/17994552009.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 29,
          official_name: 'Seattle Seahawks',
          name: 'Seahawks',
          city: 'Seattle',
          state: 'Washington',
          team_colors: {
            "primary": "#002244",
            "secondary": "#69BE28",
            "alternate": "#A5ACAF"
          },
          stadium_name: 'CenturyLink Field',
          logo_url: 'http://content.sportslogos.net/logos/7/180/thumbs/pfiobtreaq7j0pzvadktsc6jv.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 30,
          official_name: 'Tampa Bay Buccaneers',
          name: 'Buccaneers',
          city: 'Tampa',
          state: 'Florida',
          team_colors: {
            "primary": "#D50A0A",
            "secondary": "#34302B",
            "alternate": "#000000"
          },
          stadium_name: 'Raymond James Stadium',
          logo_url: 'http://content.sportslogos.net/logos/7/176/thumbs/17636702014.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 31,
          official_name: 'Tennessee Titans',
          name: 'Titans',
          city: 'Nashville',
          state: 'Tennessee',
          team_colors: {
            "primary": "#002244",
            "secondary": "#4B92DB",
            "alternate": "#C60C30"
          },
          stadium_name: 'Nissan Stadium',
          logo_url: 'http://content.sportslogos.net/logos/7/160/thumbs/1053.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 32,
          official_name: 'Washington Redskins',
          name: 'Redskins',
          city: 'Landover',
          state: 'Maryland',
          team_colors: {
            "primary": "#773141",
            "secondary": "#FFB612",
            "alternate": "#000000"
          },
          stadium_name: 'FedEx Field',
          logo_url: 'http://content.sportslogos.net/logos/7/168/thumbs/im5xz2q9bjbg44xep08bf5czq.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('nfl_teams_id_seq', (SELECT MAX(id) FROM nfl_teams));");
    });
};
