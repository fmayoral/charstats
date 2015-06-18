Tablas.core.experience.slow = {
  'getLevel': function (xp) {
    var response = {};
    switch(true){
      case (xp<3000):
        response = {
          'level': 1,
          'next_lvl':3000,
          'prev_lvl':0
        };
        break;
      case (xp<7500):
        response = {
          'level': 2,
          'next_lvl':7500,
          'prev_lvl':3000
        };
        break;
      case (xp<14000):
        response = {
          'level': 3,
          'next_lvl':14000,
          'prev_lvl':7500
        };
        break;
      case (xp<23000):
        response = {
          'level': 4,
          'next_lvl':23000,
          'prev_lvl':14000
        };
        break;
      case (xp<35000):
        response = {
          'level': 5,
          'next_lvl':35000,
          'prev_lvl':23000
        };
        break;
      case (xp<53000):
        response = {
          'level': 6,
          'next_lvl':53000,
          'prev_lvl':35000
        };
        break;
      case (xp<77000):
        response = {
          'level': 7,
          'next_lvl':77000,
          'prev_lvl':53000
        };
        break;
      case (xp<115000):
        response = {
          'level': 8,
          'next_lvl':115000,
          'prev_lvl':77000
        };
        break;
      case (xp<160000):
        response = {
          'level': 9,
          'next_lvl':160000,
          'prev_lvl':115000
        };
        break;
      case (xp<235000):
        response = {
          'level': 10,
          'next_lvl':235000,
          'prev_lvl':160000
        };
        break;
      case (xp<330000):
        response = {
          'level': 11,
          'next_lvl':330000,
          'prev_lvl':235000
        };
        break;
      case (xp<475000):
        response = {
          'level': 12,
          'next_lvl':475000,
          'prev_lvl':330000
        };
        break;
      case (xp<665000):
        response = {
          'level': 13,
          'next_lvl':665000,
          'prev_lvl':475000
        };
        break;
      case (xp<955000):
        response = {
          'level': 14,
          'next_lvl':955000,
          'prev_lvl':665000
        };
        break;
      case (xp<1350000):
        response = {
          'level': 15,
          'next_lvl':1350000,
          'prev_lvl':955000
        };
        break;
      case (xp<1900000):
        response = {
          'level': 16,
          'next_lvl':1900000,
          'prev_lvl':1350000
        };
        break;
      case (xp<2700000):
        response = {
          'level': 17,
          'next_lvl':2700000,
          'prev_lvl':1900000
        };
        break;
      case (xp<3850000):
        response = {
          'level': 18,
          'next_lvl':3850000,
          'prev_lvl':2700000
        };
        break;
      case (xp<5350000):
        response = {
          'level': 19,
          'next_lvl':5350000,
          'prev_lvl':3850000
        };
        break;
      default:
        response = {
          'level': 20,
          'next_lvl':10000000,
          'prev_lvl':5350000
        };
        break;
    }
    response.current = xp;
    return response;
  }
};
