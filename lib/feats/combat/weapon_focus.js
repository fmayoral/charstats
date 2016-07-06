//@todo En vez de grupo de armas, se debe elegir un sola arma
Feats.combat.weapon_focus = {
    key: 'weapon_focus',
    bundle: 'combat',
    name: 'Weapon Focus',
    desc: 'Add +1 to all attacks',
    pasive: true,
    url: 'http://www.d20pfsrd.com/feats/combat-feats/weapon-focus-combat---final',
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
        type: 'ataque',
        effect: 1
      }
    ]
  };
