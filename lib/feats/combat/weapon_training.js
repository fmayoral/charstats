Feats.combat.weapon_training = {
    key: 'weapon_training',
    bundle: 'combat',
    name: 'Weapon Training',
    desc: 'Add +1 to damage bonus, +1 to all attack rolls',
    pasive: true,
    url: 'http://www.d20pfsrd.com/classes/core-classes/fighter#TOC-Weapon-Training-Ex-',
    extra_fields:[
      {
        'key': 'level',
        'text': 'Level',
        'values': function (pj){
          var response = {
            'key': Rolepack.funciones.getPjLevel(pj),
            'name': Rolepack.funciones.getPjLevel(pj)
          };
          return [response];
        },
      },
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
      },
      {
        type: 'level_taken_wp',
        effect: null
      }
    ],
    efectos: [
      {
        type: 'danio_bonificador_wp',
        effect: 1
      },
      {
        type: 'ataque_wp',
        effect: 1
      },
      {
        type: 'cmb_bonus_wp',
        effect: 1
      },
      {
        type: 'cmd_bonus_wp',
        effect: 1
      }
    ]
  };

  Rolepack.condiciones.level_taken_wp = function (pj, effect, extra_fields) {
    return Rolepack.funciones.getPjLevel(pj) >= extra_fields.level;
  };

  Rolepack.efectos.danio_bonificador_wp = function(pj, bonus, extra_fields){
    for (var i = 0; i < pj.weapons.length; i++) {
      pj.weapons[i].bonificador+=bonus + Math.floor((Rolepack.funciones.getPjLevel(pj) - parseInt(extra_fields.level)) / 4);
    }
    return pj;
  };
  Rolepack.efectos.ataque_wp = function(pj, bonus, extra_fields){
    for (var i = 0; i < pj.ataques.length; i++) {
      pj.ataques[i]+=bonus + Math.floor((Rolepack.funciones.getPjLevel(pj) - parseInt(extra_fields.level)) / 4);
    }
    return pj;
  };
  Rolepack.efectos.cmb_bonus_wp = function(pj, bonus, extra_fields){
    pj.info.combat_maneuvers.bonus += bonus + Math.floor((Rolepack.funciones.getPjLevel(pj) - parseInt(extra_fields.level)) / 4);
    return pj;
  };
  Rolepack.efectos.cmd_bonus_wp = function(pj, bonus, extra_fields){
    pj.info.combat_maneuvers.defense += bonus + Math.floor((Rolepack.funciones.getPjLevel(pj) - parseInt(extra_fields.level)) / 4);
    return pj;
  };
