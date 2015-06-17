Tablas.core.races.elf = {
  'name': "Elf",
  'key': "elf",
  'size': 'medium',
  'base_speed': 30,
  'languages':[
    'common',
    'elven'
  ],
  'extra_skills': false,
  'getExtraSkills': function(pj){
    return Rolepack.funciones.getPjLevel(pj) * 0;
  },
  'bonus_skills': {
    'perception': 2
  },

};
