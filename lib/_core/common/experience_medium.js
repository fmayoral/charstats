Tablas.core.experience.medium = {
  'getLevel': function (xp) {
    var response = {};
    switch(true){
      case (xp<2000):
        response = {
          'level': 1,
          'next_lvl':2000,
          'prev_lvl':0
        };
        break;
      case (xp<5000):
        response = {
          'level': 2,
          'next_lvl':5000,
          'prev_lvl':2000
        };
        break;
      case (xp<9000):
        response = {
          'level': 3,
          'next_lvl':9000,
          'prev_lvl':5000
        };
        break;
      case (xp<15000):
        response = {
          'level': 4,
          'next_lvl':15000,
          'prev_lvl':9000
        };
        break;
      case (xp<23000):
        response = {
          'level': 5,
          'next_lvl':23000,
          'prev_lvl':15000
        };
        break;
      case (xp<35000):
        response = {
          'level': 6,
          'next_lvl':35000,
          'prev_lvl':23000
        };
        break;
      case (xp<51000):
        response = {
          'level': 7,
          'next_lvl':51000,
          'prev_lvl':35000
        };
        break;
      case (xp<75000):
        response = {
          'level': 8,
          'next_lvl':75000,
          'prev_lvl':51000
        };
        break;
      case (xp<105000):
        response = {
          'level': 9,
          'next_lvl':105000,
          'prev_lvl':75000
        };
        break;
      case (xp<155000):
        response = {
          'level': 10,
          'next_lvl':155000,
          'prev_lvl':105000
        };
        break;
      case (xp<220000):
        response = {
          'level': 11,
          'next_lvl':220000,
          'prev_lvl':155000
        };
        break;
      case (xp<315000):
        response = {
          'level': 12,
          'next_lvl':315000,
          'prev_lvl':220000
        };
        break;
      case (xp<445000):
        response = {
          'level': 13,
          'next_lvl':445000,
          'prev_lvl':315000
        };
        break;
      case (xp<635000):
        response = {
          'level': 14,
          'next_lvl':635000,
          'prev_lvl':445000
        };
        break;
      case (xp<890000):
        response = {
          'level': 15,
          'next_lvl':890000,
          'prev_lvl':635000
        };
        break;
      case (xp<1300000):
        response = {
          'level': 16,
          'next_lvl':1300000,
          'prev_lvl':890000
        };
        break;
      case (xp<1800000):
        response = {
          'level': 17,
          'next_lvl':1800000,
          'prev_lvl':1300000
        };
        break;
      case (xp<1440000):
        response = {
          'level': 18,
          'next_lvl':1440000,
          'prev_lvl':1800000
        };
        break;
      case (xp<3600000):
        response = {
          'level': 19,
          'next_lvl':3600000,
          'prev_lvl':1440000
        };
        break;
      default:
        response = {
          'level': 20,
          'next_lvl':10000000,
          'prev_lvl':3600000
        };
        break;
    }
    response.current = xp;
    return response;
  }
};
