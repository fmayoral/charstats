if (Meteor.isClient) {

  var pj = Personajes.findOne('xanxo');
  var skills = Habilidades.find({}, {sort: {pasive: 1, name: 1}}).fetch();

  for (var i = 0; i < skills.length; i++) {
    pj.habilidades.push(
      {
        'active': skills[i].pasive,
        'feat': skills[i]
      }
    );
  };
  Personajes.upsert({'_id':pj._id}, pj);
  Session.set('charName', pj._id);
}
