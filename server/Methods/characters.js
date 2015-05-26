Meteor.methods({
  createPj: function(data){
    var loggedInUser = Meteor.user();
    if(data.info == {}){ throw new Meteor.Error(500, "Fatal error");}

    if(data.info.name == ''){ throw new Meteor.Error(500, "Debe ingresar un nombre");}
    if(data.info.class == ''){ throw new Meteor.Error(500, "Debe ingresar una clase");}

    if (Roles.userIsInRole(loggedInUser, ['master','jugador'])) {
      data.owner = loggedInUser._id;

      var newId = Characters.insert(data);
      return {id: newId};
    } else {
      throw new Meteor.Error(403, "Not authorized to create characters");      
    }
    
  },
});