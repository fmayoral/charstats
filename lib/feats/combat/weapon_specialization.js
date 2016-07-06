//@todo En vez de grupo de armas, se debe elegir un sola arma
Feats.combat.weapon_specialization = {
    key: 'weapon_specialization',
    bundle: 'combat',
    name: 'Weapon Specialization',
    desc: 'Add +2 to damage bonus',
    pasive: true,
    url: 'http://www.d20pfsrd.com/feats/combat-feats/weapon-specialization-combat---final',
    extra_fields:[
      {
        'key': 'weapon_group',
        'text': 'Weapon Type',
        'values': function (pj){
          var response = [];
          var keys = Object.keys(Tablas.core.weapon_groups);
          for (var i = 0; i < keys.length; i++) {
            response.push(Tablas.core.weapon_groups[keys[i]]);
          }
          response = _.sortBy(response, 'name');
          return _.toArray(response);
        },
      }
    ],
    condiciones: [
      {
        type: 'weapon_group',
        effect: null
      }
    ],
    efectos: [
      {
        type: 'danio_bonificador',
        effect: 2
      }
    ]
  };
