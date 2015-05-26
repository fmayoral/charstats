Meteor.publish('weapons', function () {
  return Weapons.find();
});

Meteor.publish('personajes', function (user) {
  if(user){
    return Characters.find();
  }
  return;
});

Meteor.publish('mapas', function(userId, mapId){
  if (Roles.userIsInRole(userId, ['jugador', 'master'])){
    if(mapId){
      return Mapas.find({'_id': mapId});
    } else {
      return Mapas.find({},{
            fields: {
              '_id': 1,
              'info': 1
            },
            sort: {
              'info.descripcion':1
            }
          });
    }
  }
  return;
});
