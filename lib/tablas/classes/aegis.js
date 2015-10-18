Tablas.core.classes.aegis = {
  'name': 'Aegis',
  'key': 'aegis',
  'getBaseAttackBonus': function (lvl) {
    var ataques = [];
    var nivel = parseInt(lvl);
    var attack = nivel;
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
  'getSaves': function (lvl){
    var nivel = parseInt(lvl);
    var salvaciones = {};
    salvaciones.fort = 2 + Math.floor(nivel/2);
    salvaciones.ref = 0 + Math.floor(nivel/3);
    salvaciones.will = 1 + Math.floor(nivel/3);
    return salvaciones;
  }
};
