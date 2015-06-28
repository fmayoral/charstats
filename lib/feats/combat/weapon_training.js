Feats.combat.weapon_training = {
    key: 'weapon_training',
    bundle: 'combat',
    name: 'Weapon Training',
    desc: 'Add +1 to damage bonus, +1 to all attack rolls',
    pasive: true,
    extra_fields:[
      {
        'key': 'level',
        'text': 'Level',
        'values': function (pj){
          return [Rolepack.funciones.getPjLevel(pj)];
        },
      },
      {
        'key': 'weapon_base',
        'text': 'Weapon Type',
        'values': function (pj){
          //Ver la forma de devolver una lista de los tipos de armas
          return ['crossbow', 'sword'];
        },
      }
    ],
    condiciones: [
      {
        type: 'weapon_base',
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
      }
    ]
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
