Tablas.core.abilities = {
  'getModificador': function(val){
    return Math.floor((val-10)/2);
  },
  'getModificadores': function(atributos){
    var modificadores = {};
    for (var key in atributos) {
      if (atributos.hasOwnProperty(key)) {
        modificadores[key]=Tablas.core.abilities.getModificador(atributos[key]);
      }
    }
    return modificadores;
  }
};

Tablas.core.abilities.str = {};
Tablas.core.abilities.dex = {};
Tablas.core.abilities.con = {};
Tablas.core.abilities.int = {};
Tablas.core.abilities.wis = {};
Tablas.core.abilities.cha = {};
