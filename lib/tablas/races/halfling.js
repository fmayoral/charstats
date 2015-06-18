Tablas.core.races.halfling = {
  'name': "Halfling",
  'key': "halfling",
  'size': 'small',
  'base_speed': 20,
  'languages':[
    'common',
    'halfling'
  ],
  'extra_skills': false,
  'getExtraSkills': function(pj){
    return Rolepack.funciones.getPjLevel(pj) * 0;
  },
  'bonus_skills': {
    'acrobatics': 2,
    'climb': 2,
    'perception': 2,
  },

};
