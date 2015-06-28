Feats.combat.weapon_specialization = {
    key: 'weapon_specialization',
    bundle: 'combat',
    name: 'Weapon Specialization',
    desc: 'Add +2 to damage bonus',
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
        type: 'danio_bonificador',
        effect: 2
      }
    ]
  };
