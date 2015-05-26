Personajes = new Mongo.Collection();
Characters = new Mongo.Collection('personajes');
Weapons = new Mongo.Collection('weapons');

Personajes.remove({});

if (Meteor.isClient) {

  Tracker.autorun(function () {
    Meteor.subscribe("weapons");
  });

  Tracker.autorun(function () {
    Meteor.subscribe("personajes");
  });

}