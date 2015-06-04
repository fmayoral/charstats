Personajes = new Mongo.Collection();
Characters = new Mongo.Collection('personajes');
Mapas = new Meteor.Collection('mapas');
Weapons = new Mongo.Collection('weapons');
Files = new Mongo.Collection('files');

Personajes.remove({});

if (Meteor.isClient) {

  Tracker.autorun(function () {
    Meteor.subscribe("weapons");
  });

  Tracker.autorun(function () {
    Meteor.subscribe("files");
  });

  Tracker.autorun(function () {
    Meteor.subscribe("personajes", Meteor.user());
  });

  Tracker.autorun(function() {
    //Al pasar el usuario y no el ID, se resuscribe cada vez que se modifica el mismo
    //Posible problema de performance!!
    Meteor.subscribe('mapas', Meteor.user(), Session.get('map'));
  });


}