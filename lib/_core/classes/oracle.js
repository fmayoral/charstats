Tablas.core.classes.oracle = {
  'name': 'Oracle',
  'key': 'oracle',
  'getBaseAttackBonus': function (lvl) {
    var ataques = [];
    var nivel = parseInt(lvl);
    ataques.push(nivel - Math.ceil(nivel/4));
    if(nivel>=8) {
      ataques.push((nivel - Math.ceil(nivel/4))-5);
    }
    if(nivel>=15) {
      ataques.push((nivel - Math.ceil(nivel/4))-10);
    }
    return ataques;
  },
}
