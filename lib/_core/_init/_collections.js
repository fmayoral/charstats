Personajes = new Mongo.Collection();
Weapons = new Mongo.Collection('weapons');

Personajes.remove({});

if (Meteor.isClient) {

  Tracker.autorun(function () {
    Meteor.subscribe("weapons");
  });

}