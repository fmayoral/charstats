Tablas.core.classes.wizard = {
  'name': 'Wizard',
  'key': 'wizard',
  'getBaseAttackBonus': function (lvl) {
    var ataques = [];
    var nivel = parseInt(lvl);
    ataques.push(Math.floor(nivel/2));
    if(nivel>=12) {
      ataques.push(Math.floor(nivel/2)-5);
    }
    return ataques;
  },
};
