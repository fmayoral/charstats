Tablas.core.classes.oracle = {
  'name': 'Oracle',
  'key': 'oracle',
  'getBaseAttackBonus': function (lvl) {
    var ataques = [];
    var nivel = parseInt(lvl);
    var attack = Math.floor(nivel*3/4);
    do {
      ataques.push(attack);
      attack-=5;
    } while (attack>0);
    return ataques;
  },
  'getSkillRanks': function (pj) {
    var modificadores = Tablas.core.abilities.getModificadores(pj.info.atributos);
    return Rolepack.funciones.getPjLevel(pj) * (4 + modificadores.int);
  },
};
