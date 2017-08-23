'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mlb_teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('mlb_teams').insert([
        {
          id: 1,
          official_name: 'Chicago White Sox',
          name: 'White Sox',
          official_nickname: 'Southsiders',
          city: 'Chicago',
          state: 'Illinois',
          team_colors: {
            "primary": "#000000",
            "secondary": "#FFFFFF",
            "alternate": "#DCDDDF"
          },
          stadium_name: 'Guaranteed Rate Field',
          logo_url: 'http://chicago.whitesox.mlb.com/cws/images/history/im_cws_logo_1990.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 2,
          official_name: 'Cleveland Indians',
          name: 'Indians',
          official_nickname: 'Tribe',
          city: 'Cleveland',
          state: 'Ohio',
          team_colors: {
            "primary": "#D50032",
            "secondary": "#0C2340",
            "alternate": "#FFFFFF"
          },
          stadium_name: 'Progressive Field',
          logo_url: 'http://content.sportslogos.net/logos/53/57/full/5347_cleveland_indians-primary-2014.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 3,
          official_name: 'Detroit Tigers',
          name: 'Tigers',
          official_nickname: 'Tigers',
          city: 'Detroit',
          state: 'Michigan',
          team_colors: {
            "primary": "#0C2340",
            "secondary": "#FFFFFF",
            "alternate": "#FA4614"
          },
          stadium_name: 'Comerica Park',
          logo_url: 'http://content.sportslogos.net/logos/53/59/full/8964_detroit_tigers-primary-2016.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 4,
          official_name: 'Kansas City Royals',
          name: 'Royals',
          official_nickname: 'KC',
          city: 'Kansas City',
          state: 'Missouri',
          team_colors: {
            "primary": "#15317E",
            "secondary": "#FFFFFF",
            "alternate": "#74B4FA"
          },
          stadium_name: 'Kauffman Stadium',
          logo_url: 'http://content.sportslogos.net/logos/53/62/full/fmrl2b6xf5hruiike42gn62yu.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 5,
          official_name: 'Minnesota Twins',
          name: 'Twins',
          official_nickname: 'Twinkies',
          city: 'Minneapolis',
          state: 'Minnesota',
          team_colors: {
            "primary": "#0C2341",
            "secondary": "#BA0C2E",
            "alternate": "#CFAB7A",
            "fourth": "#FFFFFF"
          },
          stadium_name: 'Target Field',
          logo_url: 'http://content.sportslogos.net/logos/53/65/full/peii986yf4l42v3aa3hy0ovlf.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 6,
          official_name: 'Baltimore Orioles',
          name: 'Orioles',
          official_nickname: 'The O\'s',
          city: 'Baltimore',
          state: 'Maryland',
          team_colors: {
            "primary": "#FC4C00",
            "secondary": "#000000",
            "alternate": "#FFFFFF"
          },
          stadium_name: 'Oriole Park at Camden Yards',
          logo_url: 'http://content.sportslogos.net/logos/53/52/full/lty880yrmrra64y6tqfqmdnbf.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 7,
          official_name: 'Boston Red Sox',
          name: 'Red Sox',
          official_nickname: 'BoSox',
          city: 'Boston',
          state: 'Massachusetts',
          team_colors: {
            "primary": "#C60C30",
            "secondary": "#002244",
            "alternate": "#FFFFFF"
          },
          stadium_name: 'Fenway Park',
          logo_url: 'http://content.sportslogos.net/logos/53/53/full/c0whfsa9j0vbs079opk2s05lx.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 8,
          official_name: 'New York Yankees',
          name: 'Yankees',
          official_nickname: 'Pinstripes',
          city: 'New York City',
          state: 'New York',
          team_colors: {
            "primary": "#1C2841",
            "secondary": "#FFFFFF",
            "alternate": "#808080"
          },
          stadium_name: 'Yankee Stadium',
          logo_url: 'http://content.sportslogos.net/logos/53/68/full/1256.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 9,
          official_name: 'Tampa Bay Rays',
          name: 'Rays',
          official_nickname: 'Rays',
          city: 'Tampa Bay',
          state: 'Florida',
          team_colors: {
            "primary": "#00285D",
            "secondary": "#79BDEE",
            "alternate": "#FFFFFF",
            "fourth": "#FFD700"
          },
          stadium_name: 'Tropicana Field',
          logo_url: 'http://content.sportslogos.net/logos/53/2535/full/qiru2jftx1a378eq8ad0s4ik4.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 10,
          official_name: 'Toronto Blue Jays',
          name: 'Blue Jays',
          official_nickname: 'Jays',
          city: 'Toronto',
          state: 'Ontario, Canada',
          team_colors: {
            "primary": "#003DA5",
            "secondary": "#041E42",
            "alternate": "#FFFFFF",
            "fourth": "#DA291C"
          },
          stadium_name: 'Rogers Centre',
          logo_url: 'http://content.sportslogos.net/logos/53/78/full/oc3tlmem3ptof3z503ih1hcfv.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 11,
          official_name: 'Houston Atros',
          name: 'Astros',
          official_nickname: '\'Stros',
          city: 'Houston',
          state: 'Texas',
          team_colors: {
            "primary": "#072854",
            "secondary": "#FF7F00",
            "alternate": "#FFFFFF"
          },
          stadium_name: 'Minute Maid Park',
          logo_url: 'http://content.sportslogos.net/logos/53/4929/full/9503_houston_astros-primary-2000.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 12,
          official_name: 'Los Angeles Angels of Annaheim',
          name: 'Angels',
          official_nickname: 'Halos',
          city: 'Los Angeles',
          state: 'California',
          team_colors: {
            "primary": "#0C2344",
            "secondary": "#BA032E",
            "alternate": "#FFFFFF"
          },
          stadium_name: 'Angel Stadium',
          logo_url: 'http://content.sportslogos.net/logos/53/6521/full/4389_los_angeles_angels-primary-2016.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 13,
          official_name: 'Oakland Athletics',
          name: 'Athletics',
          official_nickname: 'The A\'s',
          city: 'Oakland',
          state: 'California',
          team_colors: {
            "primary": "#00483A",
            "secondary": "#FFBE00",
            "alternate": "#FFFFFF"
          },
          stadium_name: 'Oakland Alameda Coliseum',
          logo_url: 'http://content.sportslogos.net/logos/53/69/full/6xk2lpc36146pbg2kydf13e50.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 14,
          official_name: 'Seattle Mariners',
          name: 'Mariners',
          official_nickname: 'The M\'s',
          city: 'Seattle',
          state: 'Washington',
          team_colors: {
            "primary": "#003166",
            "secondary": "#1C8B85",
            "alternate": "#C0C0C0",
            "fourth": "#FFFFFF"
          },
          stadium_name: 'Safeco Field',
          logo_url: 'http://content.sportslogos.net/logos/53/75/full/1305.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 15,
          official_name: 'Texas Rangers',
          name: 'Rangers',
          official_nickname: 'Rangers',
          city: 'Arlington',
          state: 'Texas',
          team_colors: {
            "primary": "#BD1021",
            "secondary": "#FFFFFF",
            "alternate": "#003279"
          },
          stadium_name: 'Globe Life Park in Arlington',
          logo_url: 'http://content.sportslogos.net/logos/53/77/full/ajfeh4oqeealq37er15r3673h.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 16,
          official_name: 'Chicago Cubs',
          name: 'Cubs',
          official_nickname: 'Cubbies',
          city: 'Chicago',
          state: 'Illinois',
          team_colors: {
            "primary": "#002F6C",
            "secondary": "#C8102E",
            "alternate": "#FFFFFF"
          },
          stadium_name: 'Wrigley Field',
          logo_url: 'http://content.sportslogos.net/logos/54/54/full/q9gvs07u72gc9xr3395u6jh68.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 17,
          official_name: 'Cincinnati Reds',
          name: 'Reds',
          official_nickname: 'Reds',
          city: 'Cincinnati',
          state: 'Ohio',
          team_colors: {
            "primary": "#BA0C2F",
            "secondary": "#FFFFFF",
            "alternate": "#000000"
          },
          stadium_name: 'Great American Ball Park',
          logo_url: 'http://content.sportslogos.net/logos/54/56/full/z9e0rqit393ojiizsemd0t1hx.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 18,
          official_name: 'Milwaukee Brewers',
          name: 'Brewers',
          official_nickname: 'Brew Crew',
          city: 'Milwaukee',
          state: 'Wisconsin',
          team_colors: {
            "primary": "#012143",
            "secondary": "#C4953B",
            "alternate": "#FFFFFF"
          },
          stadium_name: 'Miller Park',
          logo_url: 'http://content.sportslogos.net/logos/54/64/full/ophgazfdzfdkeugut9bdw3iyz.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 19,
          official_name: 'Pittsburgh Pirates',
          name: 'Pirates',
          official_nickname: 'Buccaneers',
          city: 'Pittsburgh',
          state: 'Pennsylvania',
          team_colors: {
            "primary": "#000000",
            "secondary": "#FFC72B",
            "alternate": "#FFFFFF"
          },
          stadium_name: 'PNC Park',
          logo_url: 'http://content.sportslogos.net/logos/54/71/full/1250_pittsburgh_pirates-primary-2014.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 20,
          official_name: 'St. Louis Cardinals',
          name: 'Cardinals',
          official_nickname: 'Redbirds',
          city: 'St. Louis',
          state: 'Missouri',
          team_colors: {
            "primary": "#C41E3A",
            "secondary": "#0A2252",
            "alternate": "#FFFFFF"
          },
          stadium_name: 'Busch Stadium',
          logo_url: 'http://content.sportslogos.net/logos/54/72/full/3zhma0aeq17tktge1huh7yok5.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 21,
          official_name: 'Atlanta Braves',
          name: 'Braves',
          official_nickname: 'Braves',
          city: 'Atlanta',
          state: 'Georgia',
          team_colors: {
            "primary": "#002855",
            "secondary": "#BA0C2F",
            "alternate": "#FFFFFF"
          },
          stadium_name: 'SunTrust Park',
          logo_url: 'http://content.sportslogos.net/logos/54/51/full/3kgwjp6heowkeg3w8zoow9ggy.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 22,
          official_name: 'Miami Marlins',
          name: 'Marlins',
          official_nickname: 'Fish',
          city: 'Miami',
          state: 'Florida',
          team_colors: {
            "primary": "#000000",
            "secondary": "#F9423B",
            "alternate": "#FCDE04",
            "fourth": "#A4AAAC",
            "fifth": "#0482CC",
            "sixth": "#FFFFFF"
          },
          stadium_name: 'Marlins Park',
          logo_url: 'http://content.sportslogos.net/logos/54/3637/full/1720_miami_marlins-primary-2017.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 23,
          official_name: 'New York Mets',
          name: 'Mets',
          official_nickname: 'Metropolitans',
          city: 'New York City',
          state: 'New York',
          team_colors: {
            "primary": "#002D70",
            "secondary": "#FC4C00",
            "alternate": "#FFFFFF"
          },
          stadium_name: 'Citi Field',
          logo_url: 'http://content.sportslogos.net/logos/54/67/full/m01gfgeorgvbfw15fy04alujm.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 24,
          official_name: 'Philadelphia Phillies',
          name: 'Phillies',
          official_nickname: 'Phils',
          city: 'Philadelphia',
          state: 'Pennsylvania',
          team_colors: {
            "primary": "#BA0C2E",
            "secondary": "#FFFFFF",
            "alternate": "#003086"
          },
          stadium_name: 'Citizens Bank Park',
          logo_url: 'http://content.sportslogos.net/logos/54/70/full/o4lmh7dq5e3uordl7hvk6i3ug.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 25,
          official_name: 'Washington Nationals',
          name: 'Nationals',
          official_nickname: 'The Nats',
          city: 'Washington',
          state: 'DC',
          team_colors: {
            "primary": "#BA122B",
            "secondary": "#14225A",
            "alternate": "#FFFFFF"
          },
          stadium_name: 'Nationals Park',
          logo_url: 'http://content.sportslogos.net/logos/54/578/full/rcehah9k0kekjkgzm077fflws.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 26,
          official_name: 'Arizona Diamondbacks',
          name: 'Diamondbacks',
          official_nickname: 'The D-Backs',
          city: 'Phoenix',
          state: 'Arizona',
          team_colors: {
            "primary": "#A71930",
            "secondary": "#DBCEAC",
            "alternate": "#09ADAD",
            "fourth": "#000000",
            "fifth": "#FFFFFF"
          },
          stadium_name: 'Chase Field',
          logo_url: 'http://content.sportslogos.net/logos/54/50/full/gnnnrbxcmjhdgeu6mavqk3945.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 27,
          official_name: 'Colorado Rockies',
          name: 'Rockies',
          official_nickname: 'Rockies',
          city: 'Denver',
          state: 'Colorado',
          team_colors: {
            "primary": "#24135E",
            "secondary": "#000000",
            "alternate": "#CACDCD",
            "fourth": "#FFFFFF"
          },
          stadium_name: 'Coors Field',
          logo_url: 'http://content.sportslogos.net/logos/54/58/full/6871_colorado_rockies-primary-2017.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 28,
          official_name: 'Los Angeles Dodgers',
          name: 'Dodgers',
          official_nickname: 'Think Blue',
          city: 'Los Angeles',
          state: 'California',
          team_colors: {
            "primary": "#002F6C",
            "secondary": "#FFFFFF"
          },
          stadium_name: 'Dodger Stadium',
          logo_url: 'http://content.sportslogos.net/logos/54/63/full/efvfv5b5g1zgpsf56gb04lthx.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 29,
          official_name: 'San Diego Padres',
          name: 'Padres',
          official_nickname: 'The Friars',
          city: 'San Diego',
          state: 'California',
          team_colors: {
            "primary": "#002D62",
            "secondary": "#FFFFFF",
            "alternate": "#FEC325",
            "fourth": "#483727",
            "fifth": "#A0AAB2"
          },
          stadium_name: 'Petco Park',
          logo_url: 'http://content.sportslogos.net/logos/54/73/full/4344_san_diego_padres-primary-2015.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 30,
          official_name: 'San Francisco Giants',
          name: 'Giants',
          official_nickname: 'Gigantes',
          city: 'San Francisco',
          state: 'California',
          team_colors: {
            "primary": "#000000",
            "secondary": "#FB5B1F",
            "alternate": "#FFFDD0"
          },
          stadium_name: 'AT&T Park',
          logo_url: 'http://content.sportslogos.net/logos/54/74/full/cpqj6up5bvgpoedg5fwsk20ve.png',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('mlb_teams_id_seq', (SELECT MAX(id) FROM mlb_teams));");
    });
};
