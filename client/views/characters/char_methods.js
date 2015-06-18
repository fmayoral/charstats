//Stubs
if (Meteor.isClient) {
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
    updatePj: function(pj){
      if (pj.owner == Meteor.user()._id) {
        var result = Characters.update(pj._id, pj);
        return result>0?{id: pj._id}:null;
      }

    }

  });
}
