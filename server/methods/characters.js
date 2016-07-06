Meteor.methods({
  createPj: function(data){
    //@todo Deberia recibir un objeto con los datos y armar la estructura del pj luego de validar que esta toda la informacion necesaria
    var loggedInUser = Meteor.user();
    if(data.info == {}){ throw new Meteor.Error(500, "Fatal error");}

    if(data.info.name === ''){ throw new Meteor.Error(500, "Debe ingresar un nombre");}
    if(data.info.class === ''){ throw new Meteor.Error(500, "Debe elegir una clase");}
    if(data.info.size === ''){ throw new Meteor.Error(500, "Debe elegir un tamaño");}

    if (Roles.userIsInRole(loggedInUser, ['master','jugador'])) {
      data.owner = loggedInUser._id;

      var newId = Characters.insert(data);
      return {id: newId};
    } else {
      throw new Meteor.Error(403, "Not authorized to create characters");
    }
  },
  removePj: function(charId){
    //@todo Deberia recibir un objeto con los datos y armar la estructura del pj luego de validar que esta toda la informacion necesaria
    var loggedInUser = Meteor.user();
    var pj = Characters.findOne({'_id':charId});
    if(pj.owner == Meteor.user()._id){
      Characters.remove(charId);
    } else {
      throw new Meteor.Error(403, "Not authorized to create characters");
    }
  },
  setCharPosition: function(charId, row, col, mapId){
    var pj = Characters.findOne({'_id':charId});
    //@todo Tener en cuenta cuando el master es el que mueve
    if(pj.owner == Meteor.user()._id){
      var position = {
        'map': mapId,
        'index': {
          'r':row,
          'c':col
        }
      };
      Characters.update({'_id':charId},{'$set': {'position': position}});
    } else {
      throw new Meteor.Error(403, "Not authorized to move this character");
    }
  },
  updatePj: function(pj){
    var loggedInUser = Meteor.user();
    if(pj.info == {}){ throw new Meteor.Error(500, "Fatal error");}

    if (pj.owner == loggedInUser._id) {

      var result = Characters.update(pj._id, pj);
      return result>0?{id: pj._id}:null;
    } else {
      throw new Meteor.Error(403, "Not authorized to update this character");
    }
  },
  addFeatToPj: function(pj, feat){
    var loggedInUser = Meteor.user();
    if (pj.owner == loggedInUser._id) {
      var result = Characters.update(
         { _id: pj._id },
         { $push: { habilidades: feat } }
      );
      return result>0?{id: pj._id}:null;
    } else {
      throw new Meteor.Error(403, "Not authorized to update this character");
    }
  },
  removeFeatFromPj: function(pj, feat){
    var loggedInUser = Meteor.user();
    if(pj.owner == Meteor.user()._id){
      Characters.update(
        { _id: pj._id },
        { $pull: { habilidades: { id: feat.id } } }
      );
    } else {
      throw new Meteor.Error(403, "Not authorized to update this character");
    }
  },


});
