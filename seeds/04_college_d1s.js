'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('college_d1s').del()
    .then(function () {
      // Inserts seed entries
      return knex('college_d1s').insert([
        {
          id: 1,
          official_name: 'Air Force Falcons',
          name: 'Falcons',
          city: 'Colorado Springs',
          state: 'Colorado',
          conference: 'Mountain West',
          team_colors: {
            "primary": "#0061AA",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/595/thumbs/3pr1czgf0mqhfdqfv1mqrvfiq.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 2,
          official_name: 'Akron Zips',
          name: 'Zips',
          city: 'Akron',
          state: 'Ohio',
          conference: 'MAC',
          team_colors: {
            "primary": "#000E41",
            "secondary": "#C29C41",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/596/thumbs/59688302014.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 3,
          official_name: 'Alabama Crimson Tide',
          name: 'Crimson Tide',
          city: 'Tuscaloosa',
          state: 'Alabama',
          conference: 'SEC',
          team_colors: {
            "primary": "#A80532",
            "secondary": "#FFFFFF",
            "alternate": "#CACCCE"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/597/thumbs/d8nqfhswwqiht1dc4y5p0dmeh.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 4,
          official_name: 'Appalachian State Mountaineers',
          name: 'Mountaineers',
          city: 'Boone',
          state: 'North Carolina',
          conference: 'Sun Belt',
          team_colors: {
            "primary": "#000000",
            "secondary": "#FFC520",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/602/thumbs/60213682014.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 5,
          official_name: 'Arizona Wildcats',
          name: 'Wildcats',
          city: 'Tucson',
          state: 'Arizona',
          conference: 'Pac-12',
          team_colors: {
            "primary": "#003559",
            "secondary": "#BB003A",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/603/thumbs/2416.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 6,
          official_name: 'Arizona State Sun Devils',
          name: 'Sun Devils',
          city: 'Tempe',
          state: 'Arizona',
          conference: 'Pac-12',
          team_colors: {
            "primary": "#96203D",
            "secondary": "#FEC927",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/604/thumbs/60465632012.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 7,
          official_name: 'Arkansas Razorbacks',
          name: 'Razorbacks',
          city: 'Fayetteville',
          state: 'Arkansas',
          conference: 'SEC',
          team_colors: {
            "primary": "#CD1041",
            "secondary": "#231F20",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/606/thumbs/60692202014.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 8,
          official_name: 'Arkansas State Red Wolves',
          name: 'Red Wolves',
          city: 'Jonesboro',
          state: 'Arkansas',
          conference: 'Sun Belt',
          team_colors: {
            "primary": "#ED1B2E",
            "secondary": "#FFFFFF",
            "alternate": "#231F20"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/605/thumbs/60588462008.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 9,
          official_name: 'Army West Point Black Knights',
          name: 'Black Knights',
          city: 'West Point',
          state: 'New York',
          conference: 'Independent',
          team_colors: {
            "primary": "#D19D00",
            "secondary": "#000000",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/609/thumbs/60961542015.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 10,
          official_name: 'Auburn Tigers',
          name: 'Tigers',
          city: 'Auburn',
          state: 'Alabama',
          conference: 'SEC',
          team_colors: {
            "primary": "#172240",
            "secondary": "#FE3300",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/610/thumbs/61011451968.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 11,
          official_name: 'Ball State Cardinals',
          name: 'Cardinals',
          city: 'Muncie',
          state: 'Indiana',
          conference: 'MAC',
          team_colors: {
            "primary": "#DA0000",
            "secondary": "#FFFFFF",
            "alternate": "#000000"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/612/thumbs/61273522015.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 12,
          official_name: 'Baylor Bears',
          name: 'Bears',
          city: 'Waco',
          state: 'Texas',
          conference: 'Big 12',
          team_colors: {
            "primary": "#008649",
            "secondary": "#FFC227",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/613/thumbs/7369.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 13,
          official_name: 'Boise State Broncos',
          name: 'Broncos',
          city: 'Boise',
          state: 'Idaho',
          conference: 'Mountain West',
          team_colors: {
            "primary": "#2D4492",
            "secondary": "#F27E34",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/617/thumbs/61736902013.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 14,
          official_name: 'Boston College Eagles',
          name: 'Eagles',
          city: 'Chestnut Hill',
          state: 'Massachusetts',
          conference: 'ACC',
          team_colors: {
            "primary": "#821E1E",
            "secondary": "#000000",
            "alternate": "#EEE8B7"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/618/thumbs/x17r48dtcnhsyveh1iyf7rzqc.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 15,
          official_name: 'Bowling Green Falcons',
          name: 'Falcons',
          city: 'Bowling Green',
          state: 'Ohio',
          conference: 'MAC',
          team_colors: {
            "primary": "#4E2400",
            "secondary": "#F5793F",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/620/thumbs/62081602016.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 16,
          official_name: 'Buffalo Bulls',
          name: 'Bulls',
          city: 'Buffalo',
          state: 'New York',
          conference: 'MAC',
          team_colors: {
            "primary": "#0068B4",
            "secondary": "#FFFFFF",
            "alternate": "#000000"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/819/thumbs/81942602016.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 17,
          official_name: 'BYU Cougars',
          name: 'Cougars',
          city: 'Provo',
          state: 'Utah',
          conference: 'Independent',
          team_colors: {
            "primary": "#002D62",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/622/thumbs/t2k7w98wp67rswqopr1pra06h.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 18,
          official_name: 'California Golden Bears',
          name: 'Golden Bears',
          city: 'Berkeley',
          state: 'California',
          conference: 'Pac-12',
          team_colors: {
            "primary": "#003768",
            "secondary": "#FFDE30",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/630/thumbs/7456.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 19,
          official_name: 'Central Michigan Chippewas',
          name: 'Chippewas',
          city: 'Mount Pleasant',
          state: 'Michigan',
          conference: 'MAC',
          team_colors: {
            "primary": "#780006",
            "secondary": "#FFFFFF",
            "alternate": "#E2A253"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/636/thumbs/6843.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 20,
          official_name: 'Charlotte 49ers',
          name: '49ers',
          city: 'Charlotte',
          state: 'North Carolina',
          conference: 'C-USA',
          team_colors: {
            "primary": "#006331",
            "secondary": "#FFFFFF",
            "alternate": "#949431"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/639/thumbs/2447.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 21,
          official_name: 'Cincinnati Bearcats',
          name: 'Bearcats',
          city: 'Cincinnati',
          state: 'Ohio',
          conference: 'American',
          team_colors: {
            "primary": "#000000",
            "secondary": "#FD0026",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/642/thumbs/7482.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 22,
          official_name: 'Clemson Tigers',
          name: 'Tigers',
          city: 'Clemson',
          state: 'South Carolina',
          conference: 'ACC',
          team_colors: {
            "primary": "#F06014",
            "secondary": "#FFFFFF",
            "alternate": "#441F6F"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/643/thumbs/2451.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 23,
          official_name: 'Colorado Buffaloes',
          name: 'Buffaloes',
          city: 'Boulder',
          state: 'Colorado',
          conference: 'Pac-12',
          team_colors: {
            "primary": "#D9C994",
            "secondary": "#231F20",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/647/thumbs/7489.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 24,
          official_name: 'Colorado State Rams',
          name: 'Rams',
          city: 'Fort Collins',
          state: 'Colorado',
          conference: 'Mountain West',
          team_colors: {
            "primary": "#008C75",
            "secondary": "#F8E793",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/648/thumbs/64819792015.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 25,
          official_name: 'Connecticut Huskies',
          name: 'Huskies',
          city: 'Storrs',
          state: 'Connecticut',
          conference: 'American',
          team_colors: {
            "primary": "#0A1D5A",
            "secondary": "#FFFFFF",
            "alternate": "#B2B2AE"
          },
          logo_url: 'http://content.sportslogos.net/logos/35/884/thumbs/88491222013.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 26,
          official_name: 'Duke Blue Devils',
          name: 'Blue Devils',
          city: 'Durham',
          state: 'North Carolina',
          conference: 'ACC',
          team_colors: {
            "primary": "#004C7D",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/31/663/thumbs/66395011978.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 27,
          official_name: 'East Carolina Pirates',
          name: 'Pirates',
          city: 'Greenville',
          state: 'North Carolina',
          conference: 'American',
          team_colors: {
            "primary": "#4A1F68",
            "secondary": "#FFCE28",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/31/665/thumbs/66580462014.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 28,
          official_name: 'Eastern Michigan Eagles',
          name: 'Eagles',
          city: 'Ypsilanti',
          state: 'Michigan',
          conference: 'MAC',
          team_colors: {
            "primary": "#0B5F24",
            "secondary": "#FFFFFF",
            "alternate": "#7F7F7F"
          },
          logo_url: 'http://content.sportslogos.net/logos/31/669/thumbs/66988442013.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 29,
          official_name: 'FIU Panthers',
          name: 'Panthers',
          city: 'Miami',
          state: 'Florida',
          conference: 'C-USA',
          team_colors: {
            "primary": "#002D62",
            "secondary": "#C5960B",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/31/678/thumbs/67854492010.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 30,
          official_name: 'Florida Gators',
          name: 'Gators',
          city: 'Gainesville',
          state: 'Florida',
          conference: 'SEC',
          team_colors: {
            "primary": "#2139CE",
            "secondary": "#FF4208",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/31/675/thumbs/67570762013.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 31,
          official_name: 'Florida Atlantic Owls',
          name: 'Owls',
          city: 'Boca Raton',
          state: 'Florida',
          conference: 'C-USA',
          team_colors: {
            "primary": "#004B85",
            "secondary": "#FFFFFF",
            "alternate": "#CD1041"
          },
          logo_url: 'http://content.sportslogos.net/logos/31/677/thumbs/vviv38wr7tk9nq4k2liou3r1e.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 32,
          official_name: 'Florida State Seminoles',
          name: 'Seminoles',
          city: 'Tallahassee',
          state: 'Florida',
          conference: 'ACC',
          team_colors: {
            "primary": "#900028",
            "secondary": "#A8936B",
            "alternate": "#231F20"
          },
          logo_url: 'http://content.sportslogos.net/logos/31/679/thumbs/67959842014.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 33,
          official_name: 'Fresno State Bulldogs',
          name: 'Bulldogs',
          city: 'Fresno',
          state: 'California',
          conference: 'Mountain West',
          team_colors: {
            "primary": "#00427A",
            "secondary": "#E32F38",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/31/681/thumbs/68177952006.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 34,
          official_name: 'Georgia Bulldogs',
          name: 'Bulldogs',
          city: 'Athens',
          state: 'Georgia',
          conference: 'SEC',
          team_colors: {
            "primary": "#A0000B",
            "secondary": "#000000",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/31/687/thumbs/hr85j3g1duiqf59eiep9bvnsd.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 35,
          official_name: 'Georgia Southern Eagles',
          name: 'Eagles',
          city: 'Statesboro',
          state: 'Georgia',
          conference: 'Sun Belt',
          team_colors: {
            "primary": "#FFFFFF",
            "secondary": "#9B8348",
            "alternate": "#9DB7C4"
          },
          logo_url: 'http://content.sportslogos.net/logos/31/688/thumbs/68879472010.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 36,
          official_name: 'Georgia State Panthers',
          name: 'Panthers',
          city: 'Atlanta',
          state: 'Georgia',
          conference: 'Sun Belt',
          team_colors: {
            "primary": "#005DAA",
            "secondary": "#FFFFFF",
            "alternate": "#F8112B"
          },
          logo_url: 'http://content.sportslogos.net/logos/31/689/thumbs/68949972014.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 37,
          official_name: 'Georgia Tech Yellow Jackets',
          name: 'Yellow Jackets',
          city: 'Atlanta',
          state: 'Georgia',
          conference: 'ACC',
          team_colors: {
            "primary": "#160A06",
            "secondary": "#FDB813",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/31/690/thumbs/2491.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 38,
          official_name: 'Hawai\'i Rainbow Warriors',
          name: 'Rainbow Warriors',
          city: 'Honolulu',
          state: 'Hawai\'i',
          conference: 'Mountain West',
          team_colors: {
            "primary": "#004231",
            "secondary": "#000000",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/31/696/thumbs/2494.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 39,
          official_name: 'Houston Cougars',
          name: 'Cougars',
          city: 'Houston',
          state: 'Texas',
          conference: 'American',
          team_colors: {
            "primary": "#C90822",
            "secondary": "#012259",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/31/700/thumbs/70063032012.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 40,
          official_name: 'Idaho Vandals',
          name: 'Vandals',
          city: 'Moscow',
          state: 'Idaho',
          conference: 'Sun Belt',
          team_colors: {
            "primary": "#000000",
            "secondary": "#FFCC13",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/704/thumbs/70458472004.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 41,
          official_name: 'Illinois Fighting Illini',
          name: 'Fighting Illini',
          city: 'Urbana–Champaign',
          state: 'Illinois',
          conference: 'Big Ten',
          team_colors: {
            "primary": "#F5873C",
            "secondary": "#1B4178",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/706/thumbs/70683592014.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 42,
          official_name: 'Indiana Hoosiers',
          name: 'Hoosiers',
          city: 'Bloomington',
          state: 'Indiana',
          conference: 'Big Ten',
          team_colors: {
            "primary": "#A82B3D",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/709/thumbs/70922132002.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 43,
          official_name: 'Iowa Hawkeyes',
          name: 'Hawkeyes',
          city: 'Iowa City',
          state: 'Iowa',
          conference: 'Big Ten',
          team_colors: {
            "primary": "#000000",
            "secondary": "#FFD700",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/712/thumbs/iu01050mxpzmj4zqegb0vvhgu.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 44,
          official_name: 'Iowa State Cyclones',
          name: 'Cyclones',
          city: 'Ames',
          state: 'Iowa',
          conference: 'Big 12',
          team_colors: {
            "primary": "#840A2C",
            "secondary": "#FEC938"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/713/thumbs/71346122008.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 45,
          official_name: 'Kansas Jayhawks',
          name: 'Jayhawks',
          city: 'Lawrence',
          state: 'Kansas',
          conference: 'Big 12',
          team_colors: {
            "primary": "#006AB5",
            "secondary": "#FFD204",
            "alternate": "#EF1837"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/718/thumbs/t96oee4doe8n2oxaft7f.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 46,
          official_name: 'Kansas State Wildcats',
          name: 'Wildcats',
          city: 'Manhattan',
          state: 'Kansas',
          conference: 'Big 12',
          team_colors: {
            "primary": "#633194",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/719/thumbs/2508.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 47,
          official_name: 'Kent State Golden Flashes',
          name: 'Golden Flashes',
          city: 'Kent',
          state: 'Ohio',
          conference: 'MAC',
          team_colors: {
            "primary": "#131149",
            "secondary": "#F7BD0A",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/720/thumbs/72036552012.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 48,
          official_name: 'Kentucky Wildcats',
          name: 'Wildcats',
          city: 'Lexington',
          state: 'Kentucky',
          conference: 'SEC',
          team_colors: {
            "primary": "#003399",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/721/thumbs/72178322016.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 49,
          official_name: 'Louisiana Tech Bulldogs',
          name: 'Bulldogs',
          city: 'Ruston',
          state: 'Louisiana',
          conference: 'C-USA',
          team_colors: {
            "primary": "#006AB5",
            "secondary": "#ED1C24",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/731/thumbs/eeb5y75gih97igg7lxvph7v4o.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 50,
          official_name: 'Louisiana-Lafayette Ragin\' Cajuns',
          name: 'Ragin\' Cajuns',
          city: 'Lafayette',
          state: 'Louisiana',
          conference: 'Sun Belt',
          team_colors: {
            "primary": "#D73347",
            "secondary": "#F4AA2A",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/732/thumbs/2511.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 51,
          official_name: 'Louisiana-Monroe Warhawks',
          name: 'Warhawks',
          city: 'Monroe',
          state: 'Louisiana',
          conference: 'Sun Belt',
          team_colors: {
            "primary": "#231F20",
            "secondary": "#98012E",
            "alternate": "#B38807"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/733/thumbs/73372142015.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 52,
          official_name: 'Louisville Cardinals',
          name: 'Cardinals',
          city: 'Louisville',
          state: 'Kentucky',
          conference: 'ACC',
          team_colors: {
            "primary": "#FD0B20",
            "secondary": "#070707",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/734/thumbs/73446722007.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 53,
          official_name: 'LSU Tigers',
          name: 'Tigers',
          city: 'Baton Rouge',
          state: 'Louisiana',
          conference: 'SEC',
          team_colors: {
            "primary": "#33297B",
            "secondary": "#FDB827",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/723/thumbs/72396272014.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 54,
          official_name: 'Marshall Thundering Herd',
          name: 'Thundering Herd',
          city: 'Huntington',
          state: 'West Virginia',
          conference: 'C-USA',
          team_colors: {
            "primary": "#01592F",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/742/thumbs/2529.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 55,
          official_name: 'Maryland Terrapins',
          name: 'Terrapins',
          city: 'College Park',
          state: 'Maryland',
          conference: 'Big Ten',
          team_colors: {
            "primary": "#D5002B",
            "secondary": "#FFFFFF",
            "alternate": "#000000"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/743/thumbs/74354442012.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 56,
          official_name: 'Massachusetts Minutemen',
          name: 'Minutemen',
          city: 'Amherst',
          state: 'Massachusetts',
          conference: 'Independent',
          team_colors: {
            "primary": "#9F011A",
            "secondary": "#FFFFFF",
            "alternate": "#12090A"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/887/thumbs/88759612012.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 57,
          official_name: 'Memphis Tigers',
          name: 'Tigers',
          city: 'Memphis',
          state: 'Tennessee',
          conference: 'American',
          team_colors: {
            "primary": "#2A2A9B",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/746/thumbs/pep4eclqlq0phflhok70y3u41.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 58,
          official_name: 'Miami Hurricanes',
          name: 'Hurricanes',
          city: 'Coral Gables',
          state: 'Florida',
          conference: 'ACC',
          team_colors: {
            "primary": "#003E24",
            "secondary": "#E75C2D",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/748/thumbs/2848.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 59,
          official_name: 'Miami RedHawks',
          name: 'RedHawks',
          city: 'Oxford',
          state: 'Ohio',
          conference: 'MAC',
          team_colors: {
            "primary": "#C60808",
            "secondary": "#080808",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/749/thumbs/74994712014.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 60,
          official_name: 'Michigan Wolverines',
          name: 'Wolverines',
          city: 'Ann Arbor',
          state: 'Michigan',
          conference: 'Big Ten',
          team_colors: {
            "primary": "#272341",
            "secondary": "#FAC417",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/750/thumbs/75075012012.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 61,
          official_name: 'Michigan State Spartans',
          name: 'Spartans',
          city: 'East Lansing',
          state: 'Michigan',
          conference: 'Big Ten',
          team_colors: {
            "primary": "#1C453A",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/751/thumbs/w7n08iftauae3h6rhueh.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 62,
          official_name: 'Middle Tennessee Blue Raiders',
          name: 'Blue Raiders',
          city: 'Murfreesboro',
          state: 'Tennessee',
          conference: 'C-USA',
          team_colors: {
            "primary": "#0079C2",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/752/thumbs/75235561998.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 63,
          official_name: 'Minnesota Golden Gophers',
          name: 'Golden Gophers',
          city: 'Minneapolis',
          state: 'Minnesota',
          conference: 'Big Ten',
          team_colors: {
            "primary": "#7F011B",
            "secondary": "#FFF63E"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/753/thumbs/r8cdw98hpgz0sevha7ejthble.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 64,
          official_name: 'Mississippi State Bulldogs',
          name: 'Bulldogs',
          city: 'Starkville',
          state: 'Mississippi',
          conference: 'SEC',
          team_colors: {
            "primary": "#762123",
            "secondary": "#D1D5D8"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/755/thumbs/91xsfe9nvvedeghyqi4sx161k.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 65,
          official_name: 'Missouri Tigers',
          name: 'Tigers',
          city: 'Columbia',
          state: 'Missouri',
          conference: 'SEC',
          team_colors: {
            "primary": "#231F20",
            "secondary": "#E8AF11",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/757/thumbs/70yox0z4pkkwwedhxgo92kp9f.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 66,
          official_name: 'Navy Midshipmen',
          name: 'Midshipmen',
          city: 'Annapolis',
          state: 'Maryland',
          conference: 'American',
          team_colors: {
            "primary": "#131630",
            "secondary": "#FCBA29",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/765/thumbs/udqt7nirahbtdehp0gn5pi0f6.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 67,
          official_name: 'NC State Wolfpack',
          name: 'Wolfpack',
          city: 'Raleigh',
          state: 'North Carolina',
          conference: 'ACC',
          team_colors: {
            "primary": "#EF1216",
            "secondary": "#FFFFFF",
            "alternate": "#221E1F"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/777/thumbs/77759072006.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 68,
          official_name: 'Nebraska Cornhuskers',
          name: 'Cornhuskers',
          city: 'Lincoln',
          state: 'Nebraska',
          conference: 'Big Ten',
          team_colors: {
            "primary": "#F20017",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/766/thumbs/u5a0z147qunbzxwnec8ef7bkl.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 69,
          official_name: 'Nevada Wolf Pack',
          name: 'Wolf Pack',
          city: 'Reno',
          state: 'Nevada',
          conference: 'Mountain West',
          team_colors: {
            "primary": "#153E5F",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/767/thumbs/76753092008.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 70,
          official_name: 'New Mexico Lobos',
          name: 'Lobos',
          city: 'Albuquerque',
          state: 'New Mexico',
          conference: 'Mountain West',
          team_colors: {
            "primary": "#D41045",
            "secondary": "#C4C4C4",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/769/thumbs/ghyb25tvzhogmpe3beytq4wtg.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 71,
          official_name: 'New Mexico State Aggies',
          name: 'Aggies',
          city: 'Las Cruces',
          state: 'New Mexico',
          conference: 'Sun Belt',
          team_colors: {
            "primary": "#891216",
            "secondary": "#221E1F"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/770/thumbs/77055192007.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 72,
          official_name: 'NIU Huskies',
          name: 'Huskies',
          city: 'DeKalb',
          state: 'Illinois',
          conference: 'MAC',
          team_colors: {
            "primary": "#F1122C",
            "secondary": "#0F0D0D"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/785/thumbs/2886.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 73,
          official_name: 'North Carolina Tar Heels',
          name: 'Tar Heels',
          city: 'Chapel Hill',
          state: 'North Carolina',
          conference: 'ACC',
          team_colors: {
            "primary": "#98BFE5",
            "secondary": "#00275D"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/775/thumbs/77515392015.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 74,
          official_name: 'North Texas Mean Green',
          name: 'Mean Green',
          city: 'Denton',
          state: 'Texas',
          conference: 'C-USA',
          team_colors: {
            "primary": "#00853D",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/782/thumbs/78267462005.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 75,
          official_name: 'Northwestern Wildcats',
          name: 'Wildcats',
          city: 'Evanston',
          state: 'Illinois',
          conference: 'Big Ten',
          team_colors: {
            "primary": "#393996",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/787/thumbs/2889.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 76,
          official_name: 'Notre Dame Fighting Irish',
          name: 'Fighting Irish',
          city: 'South Bend',
          state: 'Indiana',
          conference: 'Independent',
          team_colors: {
            "primary": "#00122B",
            "secondary": "#BAA008"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/789/thumbs/h4taj4rqfe7eigc0f2llj59xx.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 77,
          official_name: 'Ohio Bobcats',
          name: 'Bobcats',
          city: 'Athens',
          state: 'Ohio',
          conference: 'MAC',
          team_colors: {
            "primary": "#295A29",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/792/thumbs/4688.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 78,
          official_name: 'Ohio State Buckeyes',
          name: 'Buckeyes',
          city: 'Columbus',
          state: 'Ohio',
          conference: 'Big Ten',
          team_colors: {
            "primary": "#DE3121",
            "secondary": "#FFFFFF",
            "alternate": "#313139"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/791/thumbs/79176452013.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 79,
          official_name: 'Oklahoma Sooners',
          name: 'Sooners',
          city: 'Norman',
          state: 'Oklahoma',
          conference: 'Big 12',
          team_colors: {
            "primary": "#BA0034",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/793/thumbs/f9hclkzyftlynvgb1wgf.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 80,
          official_name: 'Oklahoma State Cowboys',
          name: 'Cowboys',
          city: 'Stillwater',
          state: 'Oklahoma',
          conference: 'Big 12',
          team_colors: {
            "primary": "#FF6500",
            "secondary": "#000000",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/794/thumbs/79478612015.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 81,
          official_name: 'Old Dominion Monarchs',
          name: 'Monarchs',
          city: 'Norfolk',
          state: 'Virginia',
          conference: 'C-USA',
          team_colors: {
            "primary": "#00507D",
            "secondary": "#999DA0",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/795/thumbs/uz5zw5f3gfhh8o9wbeco.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 82,
          official_name: 'Ole Miss Rebels',
          name: 'Rebels',
          city: 'Oxford',
          state: 'Mississippi',
          conference: 'SEC',
          team_colors: {
            "primary": "#002C91",
            "secondary": "#FF002C"
          },
          logo_url: 'http://content.sportslogos.net/logos/32/754/thumbs/75419761996.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 83,
          official_name: 'Oregon Ducks',
          name: 'Ducks',
          city: 'Eugene',
          state: 'Oregon',
          conference: 'Pac-12',
          team_colors: {
            "primary": "#044520",
            "secondary": "#F4E600"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/797/thumbs/by8dfvb6j89hs5nrvlb1ibx5e.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 84,
          official_name: 'Oregon State Beavers',
          name: 'Beavers',
          city: 'Corvallis',
          state: 'Oregon',
          conference: 'Pac-12',
          team_colors: {
            "primary": "#000203",
            "secondary": "#AE3800"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/797/thumbs/by8dfvb6j89hs5nrvlb1ibx5e.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 85,
          official_name: 'Penn State Nittany Lions',
          name: 'Nittany Lions',
          city: 'State College',
          state: 'Pennsylvania',
          conference: 'Big Ten',
          team_colors: {
            "primary": "#00265D",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/801/thumbs/6g3sx3a2zxgt5z2vb10g.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 86,
          official_name: 'Pittsburgh Panthers',
          name: 'Panthers',
          city: 'Pittsburgh',
          state: 'Pennsylvania',
          conference: 'ACC',
          team_colors: {
            "primary": "#003263",
            "secondary": "#B89D29"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/803/thumbs/80318662016.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 87,
          official_name: 'Purdue Boilermakers',
          name: 'Boilermakers',
          city: 'West Lafayette',
          state: 'Indiana',
          conference: 'Big Ten',
          team_colors: {
            "primary": "#000000",
            "secondary": "#B89D29"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/809/thumbs/80966442012.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 88,
          official_name: 'Rice Owls',
          name: 'Owls',
          city: 'Houston',
          state: 'Texas',
          conference: 'C-USA',
          team_colors: {
            "primary": "#003D7D",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/813/thumbs/81337422010.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 89,
          official_name: 'Rutgers Scarlet Knights',
          name: 'Scarlet Knights',
          city: 'Piscataway',
          state: 'New Jersey',
          conference: 'Big Ten',
          team_colors: {
            "primary": "#EE363D",
            "secondary": "#FFFFFF",
            "alternate": "#0E1112"
          },
          logo_url: 'http://content.sportslogos.net/logos/33/817/thumbs/j9mxrf2bfzasqkq3by70.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 90,
          official_name: 'San Diego State Aztecs',
          name: 'Aztecs',
          city: 'San Diego',
          state: 'California',
          conference: 'Mountain West',
          team_colors: {
            "primary": "#231F20",
            "secondary": "#BF2C37"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/826/thumbs/82676662013.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 91,
          official_name: 'San Jose State Spartans',
          name: 'Spartans',
          city: 'San Jose',
          state: 'California',
          conference: 'Mountain West',
          team_colors: {
            "primary": "#005893",
            "secondary": "#FFC021"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/828/thumbs/2616.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 92,
          official_name: 'SMU Mustangs',
          name: 'Mustangs',
          city: 'University Park',
          state: 'Texas',
          conference: 'American',
          team_colors: {
            "primary": "#E32F38",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/842/thumbs/2632.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 93,
          official_name: 'South Alabama Jaguars',
          name: 'Jaguars',
          city: 'Mobile',
          state: 'Alabama',
          conference: 'Sun Belt',
          team_colors: {
            "primary": "#003E7E",
            "secondary": "#D11241",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/833/thumbs/f0escusps8d57q2gf0bpy1otm.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 94,
          official_name: 'South Carolina Gamecocks',
          name: 'Gamecocks',
          city: 'Columbia',
          state: 'South Carolina',
          conference: 'SEC',
          team_colors: {
            "primary": "#CD0000",
            "secondary": "#000000",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/834/thumbs/5gje9m4b1shmcd442rkpxkeb8.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 95,
          official_name: 'South Florida Bulls',
          name: 'Bulls',
          city: 'Tampa',
          state: 'Florida',
          conference: 'American',
          team_colors: {
            "primary": "#004A36",
            "secondary": "#A08B4D",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/837/thumbs/l3qg5gf3wu3cdrgvpee4.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 96,
          official_name: 'Southern Miss Golden Eagles',
          name: 'Golden Eagles',
          city: 'Hattiesburg',
          state: 'Mississippi',
          conference: 'C-USA',
          team_colors: {
            "primary": "#FFAA3C",
            "secondary": "#201C1D"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/843/thumbs/84360242015.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 97,
          official_name: 'Stanford Cardinal',
          name: 'Cardinal',
          city: 'Stanford',
          state: 'California',
          conference: 'Pac-12',
          team_colors: {
            "primary": "#A80532",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/854/thumbs/85448032014.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 98,
          official_name: 'Syracuse Orange',
          name: 'Orange',
          city: 'Syracuse',
          state: 'New York',
          conference: 'ACC',
          team_colors: {
            "primary": "#002D62",
            "secondary": "#F37321"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/859/thumbs/lhf2fxwjfmysj71nzmqw.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 99,
          official_name: 'TCU Horned Frogs',
          name: 'Horned Frogs',
          city: 'Fort Worth',
          state: 'Texas',
          conference: 'Big 12',
          team_colors: {
            "primary": "#3C3778",
            "secondary": "#EBEBEB"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/854/thumbs/85448032014.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 100,
          official_name: 'Temple Owls',
          name: 'Owls',
          city: 'Philadelphia',
          state: 'Pennsylvania',
          conference: 'American',
          team_colors: {
            "primary": "#A80532",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/860/thumbs/2648.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 101,
          official_name: 'Tennessee Volunteers',
          name: 'Volunteers',
          city: 'Knoxville',
          state: 'Tennessee',
          conference: 'SEC',
          team_colors: {
            "primary": "#EE9627",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/861/thumbs/86166262015.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 102,
          official_name: 'Texas Longhorns',
          name: 'Longhorns',
          city: 'Austin',
          state: 'Texas',
          conference: 'Big 12',
          team_colors: {
            "primary": "#EE7524",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/865/thumbs/5o2wuto6hq2592hhy9e4prm6e.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 103,
          official_name: 'Texas A&M Aggies',
          name: 'Aggies',
          city: 'College Station',
          state: 'Texas',
          conference: 'SEC',
          team_colors: {
            "primary": "#5C0025",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/866/thumbs/86674172007.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 104,
          official_name: 'Texas State Bobcats',
          name: 'Bobcats',
          city: 'San Marcos',
          state: 'Texas',
          conference: 'Sun Belt',
          team_colors: {
            "primary": "#744143",
            "secondary": "#9B8449"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/847/thumbs/hfiohfg4thrpxlb9r8o2qkuee.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 105,
          official_name: 'Texas Tech Red Raiders',
          name: 'Red Raiders',
          city: 'Lubbock',
          state: 'Texas',
          conference: 'Big 12',
          team_colors: {
            "primary": "#C80025",
            "secondary": "#000000"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/870/thumbs/4661.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 106,
          official_name: 'Toledo Rockets',
          name: 'Rockets',
          city: 'Toledo',
          state: 'Ohio',
          conference: 'MAC',
          team_colors: {
            "primary": "#00488F",
            "secondary": "#FFD51D"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/874/thumbs/87490502017.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 107,
          official_name: 'Troy Trojans',
          name: 'Trojans',
          city: 'Troy',
          state: 'Alabama',
          conference: 'Sun Belt',
          team_colors: {
            "primary": "#AE0210",
            "secondary": "#AE0210",
            "alternate": "#000000"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/876/thumbs/87630012008.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 108,
          official_name: 'Tulane Green Wave',
          name: 'Green Wave',
          city: 'New Orleans',
          state: 'Louisiana',
          conference: 'American',
          team_colors: {
            "primary": "#005837",
            "secondary": "#00A6EB",
            "alternate": "#6EA396"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/877/thumbs/87736922014.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 109,
          official_name: 'Tulsa Golden Hurricane',
          name: 'Golden Hurricane',
          city: 'Tulsa',
          state: 'Oklahoma',
          conference: 'American',
          team_colors: {
            "primary": "#004371",
            "secondary": "#E21721",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/878/thumbs/2669.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 110,
          official_name: 'UCF Knights',
          name: 'Knights',
          city: 'Orlando',
          state: 'Florida',
          conference: 'American',
          team_colors: {
            "primary": "#231F20",
            "secondary": "#B4985A"
          },
          logo_url: 'http://content.sportslogos.net/logos/30/635/thumbs/63556372012.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 111,
          official_name: 'UCLA Bruins',
          name: 'Bruins',
          city: 'Los Angeles',
          state: 'California',
          conference: 'Pac-12',
          team_colors: {
            "primary": "#005C8E",
            "secondary": "#FFB325"
          },
          logo_url: 'http://content.sportslogos.net/logos/35/882/thumbs/f14dh4p8ot36v1exxoazhf03a.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 112,
          official_name: 'UNLV Rebels',
          name: 'Rebels',
          city: 'Las Vegas',
          state: 'Nevada',
          conference: 'Mountain West',
          team_colors: {
            "primary": "#231E1F",
            "secondary": "#D50026"
          },
          logo_url: 'http://content.sportslogos.net/logos/35/888/thumbs/1g4meeffhnmghxfdv57f.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 113,
          official_name: 'USC Trojans',
          name: 'Trojans',
          city: 'Los Angeles',
          state: 'California',
          conference: 'Pac-12',
          team_colors: {
            "primary": "#AE2531",
            "secondary": "#FFAC33"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/840/thumbs/84098311993.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 114,
          official_name: 'Utah Utes',
          name: 'Utes',
          city: 'Salt Lake City',
          state: 'Utah',
          conference: 'Pac-12',
          team_colors: {
            "primary": "#CD1041",
            "secondary": "#231F20"
          },
          logo_url: 'http://content.sportslogos.net/logos/35/892/thumbs/f59mntuxy6z31v0gapgueoyg2.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 115,
          official_name: 'Utah State Aggies',
          name: 'Aggies',
          city: 'Logan',
          state: 'Utah',
          conference: 'Mountain West',
          team_colors: {
            "primary": "#003263",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/35/893/thumbs/fexosti2ekonhhvpjlq0gvyhn.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 116,
          official_name: 'UTEP Miners',
          name: 'Miners',
          city: 'El Paso',
          state: 'Texas',
          conference: 'C-USA',
          team_colors: {
            "primary": "#002843",
            "secondary": "#F9783B"
          },
          logo_url: 'http://content.sportslogos.net/logos/35/889/thumbs/2711.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 117,
          official_name: 'UTSA Roadrunners',
          name: 'Roadrunners',
          city: 'San Antonio',
          state: 'Texas',
          conference: 'C-USA',
          team_colors: {
            "primary": "#002A5C",
            "secondary": "#F47321"
          },
          logo_url: 'http://content.sportslogos.net/logos/34/890/thumbs/8w7wa2e7efz3h7g9m98ja3idd.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 118,
          official_name: 'Vanderbilt Commodores',
          name: 'Commodores',
          city: 'Nashville',
          state: 'Tennessee',
          conference: 'SEC',
          team_colors: {
            "primary": "#000000",
            "secondary": "#BB8D09"
          },
          logo_url: 'http://content.sportslogos.net/logos/35/895/thumbs/oz59klw60uzer5pralxhznrl1.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 119,
          official_name: 'Virginia Cavaliers',
          name: 'Cavaliers',
          city: 'Charlottesville',
          state: 'Virginia',
          conference: 'ACC',
          team_colors: {
            "primary": "#00204E",
            "secondary": "#EA4B0F"
          },
          logo_url: 'http://content.sportslogos.net/logos/35/898/thumbs/7135.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 120,
          official_name: 'Virginia Tech Hokies',
          name: 'Hokies',
          city: 'Blacksburg',
          state: 'Virginia',
          conference: 'ACC',
          team_colors: {
            "primary": "#74232D",
            "secondary": "#FBB088"
          },
          logo_url: 'http://content.sportslogos.net/logos/35/901/thumbs/gabem67h4rb7golayyr7qsole.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 121,
          official_name: 'Wake Forest Demon Deacons',
          name: 'Demon Deacons',
          city: 'Winston-Salem',
          state: 'North Carolina',
          conference: 'ACC',
          team_colors: {
            "primary": "#000000",
            "secondary": "#C49544"
          },
          logo_url: 'http://content.sportslogos.net/logos/35/903/thumbs/90361392007.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 122,
          official_name: 'Washington Huskies',
          name: 'Huskies',
          city: 'Seattle',
          state: 'Washington',
          conference: 'Pac-12',
          team_colors: {
            "primary": "#2B2F64",
            "secondary": "#E8D4A3"
          },
          logo_url: 'http://content.sportslogos.net/logos/35/904/thumbs/yookgal4j29r36rx6fz3jug2p.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 123,
          official_name: 'Washington State Cougars',
          name: 'Cougars',
          city: 'Pullman',
          state: 'Washington',
          conference: 'Pac-12',
          team_colors: {
            "primary": "#97002F",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/35/905/thumbs/2724.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 124,
          official_name: 'West Virginia Mountaineers',
          name: 'Mountaineers',
          city: 'Morgantown',
          state: 'West Virginia',
          conference: 'Big 12',
          team_colors: {
            "primary": "#FFC600",
            "secondary": "#2B2F64"
          },
          logo_url: 'http://content.sportslogos.net/logos/35/907/thumbs/90726501980.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 125,
          official_name: 'Western Kentucky Hilltoppers',
          name: 'Hilltoppers',
          city: 'Bowling Green',
          state: 'Kentucky',
          conference: 'C-USA',
          team_colors: {
            "primary": "#F32026",
            "secondary": "#010000"
          },
          logo_url: 'http://content.sportslogos.net/logos/35/909/thumbs/45vahaduw2h85i3nqehdgn7xq.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 126,
          official_name: 'Western Michigan Broncos',
          name: 'Broncos',
          city: 'Kalamazoo',
          state: 'Michigan',
          conference: 'MAC',
          team_colors: {
            "primary": "#7E3E09",
            "secondary": "#B59966"
          },
          logo_url: 'http://content.sportslogos.net/logos/35/910/thumbs/91055312016.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 127,
          official_name: 'Wisconsin Badgers',
          name: 'Badgers',
          city: 'Madison',
          state: 'Wisconsin',
          conference: 'Big Ten',
          team_colors: {
            "primary": "#A00000",
            "secondary": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/35/914/thumbs/ydl01hfj8hw4p1mbg1zd.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        },
        {
          id: 128,
          official_name: 'Wyoming Cowboys',
          name: 'Cowboys',
          city: 'Laramie',
          state: 'Wyoming',
          conference: 'Mountain West',
          team_colors: {
            "primary": "#533B22",
            "secondary": "#000000",
            "alternate": "#FFFFFF"
          },
          logo_url: 'http://content.sportslogos.net/logos/35/918/thumbs/hub2luegxli9ec81hx65b50hg.gif',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('college_d1s_id_seq', (SELECT MAX(id) FROM college_d1s));");
    });
};
