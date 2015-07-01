Tablas.core.classes.npc = {
  'name': 'NPC',
  'key': 'npc',
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
    return Rolepack.funciones.getPjLevel(pj) * (2 + modificadores.int);
  },
  'getSaves': function (lvl){
    var salvaciones = {};
    salvaciones.fort = 0;
    salvaciones.ref = 0;
    salvaciones.will = 0;
    return salvaciones;
  }
};
