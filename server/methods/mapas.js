Meteor.methods({
  createMapa: function(data){
    var loggedInUser = Meteor.user();

    if (Roles.userIsInRole(loggedInUser, ['master'])) {
      var mapa = {};
      mapa.info = data;
      
      if(data.alto<1 || data.alto>75 || data.ancho<1 || data.ancho>75) {
        throw new Meteor.Error(403, "Wrong size");
      }
      if(data.descripcion == "") { throw new Meteor.Error(403, "Empty description"); }
      if(data.mapBackground == "") { throw new Meteor.Error(403, "Empty map background"); }

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
    var mapId = data._id;
    delete data._id;

    if(data.alto<1 || data.alto>75 || data.ancho<1 || data.ancho>75) {
      throw new Meteor.Error(403, "Wrong size");
    }
    if(data.descripcion == "") { throw new Meteor.Error(403, "Empty description"); }
    if(data.mapBackground == "") { throw new Meteor.Error(403, "Empty map background"); }
    if (Roles.userIsInRole(loggedInUser, ['master'])) {
      Mapas.update({'_id':mapId},{'$set': {'info':data}});
    } else {
      throw new Meteor.Error(403, "Not authorized to modify maps");      
    }
  },

});