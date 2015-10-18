Tablas.core.races.half_giant = {
  'name': "Half Giant",
  'key': "half_giant",
  'size': 'medium',
  'base_speed': 30,
  'languages':[
    'common'
  ],
  'extra_skills': false,
  'getExtraSkills': function(pj){
    return Rolepack.funciones.getPjLevel(pj) * 0;
  },
  'bonus_skills': {
  },

};
