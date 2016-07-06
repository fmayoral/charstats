Meteor.publish('weapons', function () {
  return Weapons.find();
});

Meteor.publish('files', function () {
  return Files.find();
});

Meteor.publish('personajes', function (user) {
  if(user){
    return Characters.find();
  }
  return;
});

Meteor.publish('mapas', function(userId){
  if (Roles.userIsInRole(userId, ['jugador', 'master'])){
    return Mapas.find({},{
          sort: {
            'info.descripcion':1
          }
        });
  }
  return;
});
