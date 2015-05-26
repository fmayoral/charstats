Meteor.publish('weapons', function () {
  return Weapons.find();
});

Meteor.publish('personajes', function () {
  return Characters.find();
});

