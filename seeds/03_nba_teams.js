'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('nba_teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('nba_teams').insert([
        {
          id: 1,
          official_name: 'Atlanta Hawks',
          name: 'Hawks',
          city: 'Atlanta',
          state: 'Georgia',
          team_colors: {
            "primary": "#E13A3E",
            "secondary": "#C4D600",
            "alternate": "#061922"
          },
          stadium_name: 'Philips Arena',
          logo_url: 'http://content.sportslogos.net/logos/6/220/thumbs/22091682016.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 2,
          official_name: 'Boston Celtics',
          name: 'Celtics',
          city: 'Boston',
          state: 'Massachusetts',
          team_colors: {
            "primary": "#008348",
            "secondary": "#BB9753"
          },
          stadium_name: 'TD Garden',
          logo_url: 'http://content.sportslogos.net/logos/6/213/thumbs/slhg02hbef3j1ov4lsnwyol5o.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 3,
          official_name: 'Brooklyn Nets',
          name: 'Nets',
          city: 'Brooklyn',
          state: 'New York',
          team_colors: {
            "primary": "#061922"
          },
          stadium_name: 'Barclays Center',
          logo_url: 'http://content.sportslogos.net/logos/6/3786/thumbs/hsuff5m3dgiv20kovde422r1f.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 4,
          official_name: 'Charlotte Hornets',
          name: 'Hornets',
          city: 'Charlotte',
          state: 'North Carolina',
          team_colors: {
            "primary": "#1D1160",
            "secondary": "#008CA8",
            "alternate": "#A1A1A4"
          },
          stadium_name: 'Spectrum Center',
          logo_url: 'http://content.sportslogos.net/logos/6/5120/thumbs/512019262015.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 5,
          official_name: 'Chicago Bulls',
          name: 'Bulls',
          city: 'Chicago',
          state: 'Illinois',
          team_colors: {
            "primary": "#CE1141",
            "secondary": "#061922"
          },
          stadium_name: 'United Center',
          logo_url: 'http://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 6,
          official_name: 'Cleveland Cavaliers',
          name: 'Cavaliers',
          city: 'Cleveland',
          state: 'Ohio',
          team_colors: {
            "primary": "#860038",
            "secondary": "#FDBB30",
            "alternate": "#002D62"
          },
          stadium_name: 'Quicken Loans Arena',
          logo_url: 'http://content.sportslogos.net/logos/6/222/thumbs/22269212018.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 7,
          official_name: 'Dallas Mavericks',
          name: 'Mavericks',
          city: 'Dallas',
          state: 'Texas',
          team_colors: {
            "primary": "#007DC5",
            "secondary": "#C4CED3",
            "alternate": "#061922"
          },
          stadium_name: 'American Airlines Center',
          logo_url: 'http://content.sportslogos.net/logos/6/228/thumbs/22834632018.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 8,
          official_name: 'Denver Nuggets',
          name: 'Nuggets',
          city: 'Denver',
          state: 'Colorado',
          team_colors: {
            "primary": "#4D90CD",
            "secondary": "#FDB927",
            "alternate": "#0F586C"
          },
          stadium_name: 'Pepsi Center',
          logo_url: 'http://content.sportslogos.net/logos/6/229/thumbs/xeti0fjbyzmcffue57vz5o1gl.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 9,
          official_name: 'Detroit Pistons',
          name: 'Pistons',
          city: 'Detroit',
          state: 'Michigan',
          team_colors: {
            "primary": "#ED174C",
            "secondary": "#006BB6",
            "alternate": "#0F586C"
          },
          stadium_name: 'Little Caesars Arena',
          logo_url: 'http://content.sportslogos.net/logos/6/223/thumbs/22321642018.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 10,
          official_name: 'Golden State Warriors',
          name: 'Warriors',
          city: 'Oakland',
          state: 'California',
          team_colors: {
            "primary": "#FDB927",
            "secondary": "#006BB6",
            "alternate": "#26282A"
          },
          stadium_name: 'Oracle Arena',
          logo_url: 'http://content.sportslogos.net/logos/6/235/thumbs/qhhir6fj8zp30f33s7sfb4yw0.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 11,
          official_name: 'Houston Rockets',
          name: 'Rockets',
          city: 'Houston',
          state: 'Texas',
          team_colors: {
            "primary": "#CE1141",
            "secondary": "#C4CED3",
            "alternate": "#061922"
          },
          stadium_name: 'Toyota Center',
          logo_url: 'http://content.sportslogos.net/logos/6/230/thumbs/8xe4813lzybfhfl14axgzzqeq.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 12,
          official_name: 'Indiana Pacers',
          name: 'Pacers',
          city: 'Indianapolis',
          state: 'Indiana',
          team_colors: {
            "primary": "#FFC633",
            "secondary": "#00275D",
            "alternate": "#BEC0C2"
          },
          stadium_name: 'Bankers Life Fieldhouse',
          logo_url: 'http://content.sportslogos.net/logos/6/224/thumbs/3083.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 13,
          official_name: 'LA Clippers',
          name: 'Clippers',
          city: 'Los Angeles',
          state: 'California',
          team_colors: {
            "primary": "#ED174C",
            "secondary": "#006BB6",
            "alternate": "#061922"
          },
          stadium_name: 'Staples Center',
          logo_url: 'http://content.sportslogos.net/logos/6/236/thumbs/23654622016.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 14,
          official_name: 'Los Angeles Lakers',
          name: 'Lakers',
          city: 'Los Angeles',
          state: 'California',
          team_colors: {
            "primary": "#FDB927",
            "secondary": "#552582",
            "alternate": "#619222"
          },
          stadium_name: 'Staples Center',
          logo_url: 'http://content.sportslogos.net/logos/6/237/thumbs/uig7aiht8jnpl1szbi57zzlsh.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 15,
          official_name: 'Memphis Grizzlies',
          name: 'Grizzlies',
          city: 'Memphis',
          state: 'Tennessee',
          team_colors: {
            "primary": "#0F586C",
            "secondary": "#7399C6",
            "alternate": "#BED4E9"
          },
          stadium_name: 'FedExForum',
          logo_url: 'http://content.sportslogos.net/logos/6/231/thumbs/793.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 16,
          official_name: 'Miami Heat',
          name: 'Heat',
          city: 'Miami',
          state: 'Florida',
          team_colors: {
            "primary": "#98002E",
            "secondary": "#F9A01B",
            "alternate": "#061922"
          },
          stadium_name: 'American Airlines Arena',
          logo_url: 'http://content.sportslogos.net/logos/6/214/thumbs/burm5gh2wvjti3xhei5h16k8e.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 17,
          official_name: 'Milwaukee Bucks',
          name: 'Bucks',
          city: 'Milwaukee',
          state: 'Wisconsin',
          team_colors: {
            "primary": "#00471B",
            "secondary": "#F0EBD2",
            "alternate": "#061922"
          },
          stadium_name: 'Bradley Center',
          logo_url: 'http://content.sportslogos.net/logos/6/225/thumbs/22582752016.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 18,
          official_name: 'Minnesota Timberwolves',
          name: 'Timberwolves',
          city: 'Minneapolis',
          state: 'Minnesota',
          team_colors: {
            "primary": "#005083",
            "secondary": "#00A94F",
            "alternate": "#C4CED3"
          },
          stadium_name: 'Target Center',
          logo_url: 'http://content.sportslogos.net/logos/6/232/thumbs/23296692018.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 19,
          official_name: 'New Orleans Pelicans',
          name: 'Pelicans',
          city: 'New Orleans',
          state: 'Louisiana',
          team_colors: {
            "primary": "#002B5C",
            "secondary": "#E31837",
            "alternate": "#B4975A"
          },
          stadium_name: 'Smoothie King Center',
          logo_url: 'http://content.sportslogos.net/logos/6/4962/thumbs/496226812014.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 20,
          official_name: 'New York Knicks',
          name: 'Knicks',
          city: 'New York City',
          state: 'New York',
          team_colors: {
            "primary": "#006BB6",
            "secondary": "#F58426",
            "alternate": "#BEC0C2"
          },
          stadium_name: 'Madison Square Garden',
          logo_url: 'http://content.sportslogos.net/logos/6/216/thumbs/2nn48xofg0hms8k326cqdmuis.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 21,
          official_name: 'Oklahoma City Thunder',
          name: 'Thunder',
          city: 'Oklahoma City',
          state: 'Oklahoma',
          team_colors: {
            "primary": "#007DC3",
            "secondary": "#F05133",
            "alternate": "#FDBB30"
          },
          stadium_name: 'Chesapeake Energy Arena',
          logo_url: 'http://content.sportslogos.net/logos/6/2687/thumbs/khmovcnezy06c3nm05ccn0oj2.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 22,
          official_name: 'Orlando Magic',
          name: 'Magic',
          city: 'Orlando',
          state: 'Florida',
          team_colors: {
            "primary": "#007DC5",
            "secondary": "#C4CED3",
            "alternate": "#061922"
          },
          stadium_name: 'Amway Center',
          logo_url: 'http://content.sportslogos.net/logos/6/217/thumbs/wd9ic7qafgfb0yxs7tem7n5g4.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 23,
          official_name: 'Philadelphia 76ers',
          name: '76ers',
          city: 'Philadelphia',
          state: 'Pennsylvania',
          team_colors: {
            "primary": "#ED174C",
            "secondary": "#006BB6",
            "alternate": "#002B5C"
          },
          stadium_name: 'Wells Fargo Center',
          logo_url: 'http://content.sportslogos.net/logos/6/218/thumbs/21870342016.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 24,
          official_name: 'Phoenix Suns',
          name: 'Suns',
          city: 'Phoenix',
          state: 'Arizona',
          team_colors: {
            "primary": "#E56020",
            "secondary": "#1D1160",
            "alternate": "#63717A"
          },
          stadium_name: 'Talking Stick Resort Arena',
          logo_url: 'http://content.sportslogos.net/logos/6/238/thumbs/23843702014.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 25,
          official_name: 'Portland Trail Blazers',
          name: 'Trail Blazers',
          city: 'Portland',
          state: 'Oregon',
          team_colors: {
            "primary": "#E03A3E",
            "secondary": "#BAC3C9",
            "alternate": "#061922"
          },
          stadium_name: 'Moda Center',
          logo_url: 'http://content.sportslogos.net/logos/6/239/thumbs/23997252018.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 26,
          official_name: 'Sacramento Kings',
          name: 'Kings',
          city: 'Sacramento',
          state: 'California',
          team_colors: {
            "primary": "#724C9F",
            "secondary": "#8E9090",
            "alternate": "#061922"
          },
          stadium_name: 'Golden 1 Center',
          logo_url: 'http://content.sportslogos.net/logos/6/240/thumbs/24040432017.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 27,
          official_name: 'San Antonio Spurs',
          name: 'Spurs',
          city: 'San Antonio',
          state: 'Texas',
          team_colors: {
            "primary": "#BAC3C9",
            "secondary": "#061922"
          },
          stadium_name: 'AT&T Center',
          logo_url: 'http://content.sportslogos.net/logos/6/233/thumbs/827.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 28,
          official_name: 'Toronto Raptors',
          name: 'Raptors',
          city: 'Toronto',
          state: 'Ontario, Canada',
          team_colors: {
            "primary": "#CE1141",
            "secondary": "#061922",
            "alternate": "#A1A1A4"
          },
          stadium_name: 'Air Canada Centre',
          logo_url: 'http://content.sportslogos.net/logos/6/227/thumbs/22745782016.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 29,
          official_name: 'Utah Jazz',
          name: 'Jazz',
          city: 'Salt Lake City',
          state: 'Utah',
          team_colors: {
            "primary": "#002B5C",
            "secondary": "#F9A01B",
            "alternate": "#00471B"
          },
          stadium_name: 'Vivint Smart Home Arena',
          logo_url: 'http://content.sportslogos.net/logos/6/234/thumbs/23467492017.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 30,
          official_name: 'Washington Wizards',
          name: 'Wizards',
          city: 'Washington',
          state: 'D.C.',
          team_colors: {
            "primary": "#002B5C",
            "secondary": "#E31837",
            "alternate": "#C4CED4"
          },
          stadium_name: 'Verizon Center',
          logo_url: 'http://content.sportslogos.net/logos/6/219/thumbs/21956712016.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('nba_teams_id_seq', (SELECT MAX(id) FROM nba_teams));");
    });
};
