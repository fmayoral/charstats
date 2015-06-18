Tablas.core.races.human = {
  'name': "Human",
  'key': "human",
  'size': 'medium',
  'base_speed': 30,
  'languages':[
    'common'
  ],
  'extra_skills': true,
  'getExtraSkills': function(pj){
    return Rolepack.funciones.getPjLevel(pj) * 1;
  },
  'bonus_skills': {},

};
