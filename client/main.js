if (Meteor.isClient) {

  var pj = Personajes.findOne('xanxo');
  

  var skills = [];
  for(var key in Habilidades.core) {
    skills[key] = (Habilidades.core[key]);
  }
  var sortedSkills = _.sortBy(Habilidades.core, function(hab){return hab.name;});
  sortedSkills = _.sortBy(sortedSkills, function(hab){return hab.pasive?1:0;});
  //console.log(Habilidades.core);
  //console.log(sortedSkills);

  for(var key in sortedSkills) {
    pj.habilidades.push(
      {
        'active': sortedSkills[key].pasive,
        'id': sortedSkills[key].id,
        'bundle': sortedSkills[key].bundle
      }
    );
  }

  Personajes.upsert({'_id':pj._id}, pj);
  Session.set('charName', pj._id);
}
