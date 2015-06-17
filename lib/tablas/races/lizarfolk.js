Tablas.core.races.lizardfolk = {
  'name': "Lizardfolk",
  'key': "lizardfolk",
  'size': 'medium',
  'base_speed': 30,
  'languages':[
    'draconic'
  ],
  'extra_skills': false,
  'getExtraSkills': function(pj){
    return Rolepack.funciones.getPjLevel(pj) * 0;
  },
  'bonus_skills': {
    'swim': 8,
  },

};
