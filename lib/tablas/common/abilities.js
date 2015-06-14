Tablas.core.abilities = {
  'getModificador': function(val){
    return Math.floor((val-10)/2);
  },
  'getModificadores': function(atributos){
    for (var key in atributos) {
      if (atributos.hasOwnProperty(key)) {
        atributos[key]=Tablas.core.abilities.getModificador(atributos[key]);
      }
    }
    return atributos;
  }
};

Tablas.core.abilities.str = {};
Tablas.core.abilities.dex = {};
Tablas.core.abilities.con = {};
Tablas.core.abilities.int = {};
Tablas.core.abilities.wis = {};
Tablas.core.abilities.cha = {};
