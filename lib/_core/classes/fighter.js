Tablas.core.classes.fighter = {
  'name': 'Fighter',
  'key': 'fighter',
  'getBaseAttackBonus': function (lvl) {
    var ataques = [];
    var nivel = parseInt(lvl);
    for (var i = 0; i < nivel; i+=5) {
      ataques.push(nivel-i);
    }
    return ataques;
  },
}
