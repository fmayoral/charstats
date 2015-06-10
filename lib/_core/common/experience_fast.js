Tablas.core.experience.fast = {
  'getLevel': function (xp) {
    var response = {};
    switch(true){
      case (xp<1300):
        response = {
          'level': 1,
          'next_lvl':1300,
          'prev_lvl':0
        }
        break;
      case (xp<3300):
        response = {
          'level': 2,
          'next_lvl':3300,
          'prev_lvl':1300
        }
        break;
      case (xp<6000):
        response = {
          'level': 3,
          'next_lvl':6000,
          'prev_lvl':3300
        }
        break;
      case (xp<10000):
        response = {
          'level': 4,
          'next_lvl':10000,
          'prev_lvl':6000
        }
        break;
      case (xp<15000):
        response = {
          'level': 5,
          'next_lvl':15000,
          'prev_lvl':10000
        }
        break;
      case (xp<23000):
        response = {
          'level': 6,
          'next_lvl':23000,
          'prev_lvl':15000
        }
        break;
      case (xp<34000):
        response = {
          'level': 7,
          'next_lvl':34000,
          'prev_lvl':23000
        }
        break;
      case (xp<50000):
        response = {
          'level': 8,
          'next_lvl':50000,
          'prev_lvl':34000
        }
        break;
      case (xp<71000):
        response = {
          'level': 9,
          'next_lvl':71000,
          'prev_lvl':50000
        }
        break;
      case (xp<105000):
        response = {
          'level': 10,
          'next_lvl':105000,
          'prev_lvl':71000
        }
        break;
      case (xp<145000):
        response = {
          'level': 11,
          'next_lvl':145000,
          'prev_lvl':105000
        }
        break;
      case (xp<210000):
        response = {
          'level': 12,
          'next_lvl':210000,
          'prev_lvl':145000
        }
        break;
      case (xp<295000):
        response = {
          'level': 13,
          'next_lvl':295000,
          'prev_lvl':210000
        }
        break;
      case (xp<425000):
        response = {
          'level': 14,
          'next_lvl':425000,
          'prev_lvl':295000
        }
        break;
      case (xp<600000):
        response = {
          'level': 15,
          'next_lvl':600000,
          'prev_lvl':425000
        }
        break;
      case (xp<850000):
        response = {
          'level': 16,
          'next_lvl':850000,
          'prev_lvl':600000
        }
        break;
      case (xp<1200000):
        response = {
          'level': 17,
          'next_lvl':1200000,
          'prev_lvl':850000
        }
        break;
      case (xp<1700000):
        response = {
          'level': 18,
          'next_lvl':1700000,
          'prev_lvl':1200000
        }
        break;
      case (xp<2400000):
        response = {
          'level': 19,
          'next_lvl':2400000,
          'prev_lvl':1700000
        }
        break;
      default:
        response = {
          'level': 20,
          'next_lvl':10000000,
          'prev_lvl':2400000
        }
        break;
    }
    response.current = xp;
    return response;
  }
};
