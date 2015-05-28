//Stubs
Meteor.methods({
  setCharPosition: function(charId, row, col, mapId){
    var pj = Characters.findOne({'_id':charId});
    if(pj.owner == Meteor.user()._id){
      var position = {
        'map': mapId,
        'index': {
          'r':row,
          'c':col
        }
      };
      Characters.update({'_id':charId},{'$set': {'position': position}});
    }
  },

});
