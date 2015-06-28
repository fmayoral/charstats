Feats.combat.weapon_focus = {
    key: 'weapon_focus',
    bundle: 'combat',
    name: 'Weapon Focus',
    desc: 'Add +1 to all attacks',
    pasive: true,
    extra_fields:[
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
        type: 'ataque',
        effect: 1
      }
    ]
  };
