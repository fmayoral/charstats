Meteor.methods({
  saveFile: function(fileObject){
    var loggedInUser = Meteor.user();

    if (Roles.userIsInRole(loggedInUser, ['master', 'jugador'])) {
      if(fileObject.hasOwnProperty('_id')){
        delete fileObject._id;
      }
      var newId = Files.insert(fileObject);
      return {id: newId};
    } else {
      throw new Meteor.Error(403, "Not authorized to save files");
    }

  },

  removeFile: function(fileId){
    var loggedInUser = Meteor.user();

    if (Roles.userIsInRole(loggedInUser, ['master'])) {
      Files.remove(fileId);
    } else {
      throw new Meteor.Error(403, "Not authorized to remove files");
    }
  },

});
