Tablas.core.races.halfling = {
  'name': "Duergar",
  'key': "duergar",
  'size': 'medium',
  'base_speed': 20,
  'languages':[
    'common',
    'dwarven',
    'undercommon'
  ],
  'extra_skills': false,
  'getExtraSkills': function(pj){
    return Rolepack.funciones.getPjLevel(pj) * 0;
  },
  'bonus_skills': {
  },

};
