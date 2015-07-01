Tablas.core.classes.wizard = {
  'name': 'Wizard',
  'key': 'wizard',
  'getBaseAttackBonus': function (lvl) {
    var ataques = [];
    var nivel = parseInt(lvl);
    var attack = Math.floor(nivel*1/2);
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
    var nivel = parseInt(lvl);
    var salvaciones = {};
    salvaciones.fort = 0 + Math.floor(nivel/3);
    salvaciones.ref = 0 + Math.floor(nivel/3);
    salvaciones.will = 2 + Math.floor(nivel/2);
    return salvaciones;
  }
};
