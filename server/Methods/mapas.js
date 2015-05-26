Meteor.methods({
  createMapa: function(data){
    var loggedInUser = Meteor.user();

    if (Roles.userIsInRole(loggedInUser, ['master'])) {
      var mapa = {};
      mapa.info = data;
      mapa.grilla = [];
      
      if(data.alto<1 || data.alto>50 || data.ancho<1 || data.ancho>50) {
        throw new Meteor.Error(403, "Wrong size");
      }
      if(data.descripcion == "") { throw new Meteor.Error(403, "Empty description"); }


      for(var i = 0;i<data.alto;i++){
        for(var j = 0;j<data.ancho;j++){
          mapa.grilla.push({
            index: {r:i, c:j},
            //Sacar esta info de la DB, coleccion terrenos
            terreno: data.terrenoDefault,
            bloqueo: false, //db Data
            movimiento: "1", //db Data
            visibilidad: "1"
          });
        }
      }
      var newId = Mapas.insert(mapa);
      return {id: newId};
    } else {
      throw new Meteor.Error(403, "Not authorized to create maps");      
    }
    
  },

  removeMapa: function(mapId){
    var loggedInUser = Meteor.user();

    if (Roles.userIsInRole(loggedInUser, ['master'])) {
      Mapas.remove(mapId);
    } else {
      throw new Meteor.Error(403, "Not authorized to remove maps");      
    }
  },

  updateMapa: function(data){
    var loggedInUser = Meteor.user();

    if (Roles.userIsInRole(loggedInUser, ['master'])) {
      Mapas.update(data._id, data);
    } else {
      throw new Meteor.Error(403, "Not authorized to modify maps");      
    }
  },

});