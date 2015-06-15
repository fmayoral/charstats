Feats.core.pasive_ranged_at_melee = {
    key: 'pasive_ranged_at_melee',
    bundle: 'core',
    name: 'Use Ranged weapon at melee',
    desc: '-4 to attack rolls when using ranged weapon at melee',
    pasive: true,
    condiciones: [
      {
        type: 'distance_target',
        effect: 5
      },
      {
        type: 'weapon_type',
        effect: 'ranged'
      }
    ],
    efectos: [
      {
        type: 'ataque',
        effect: -4
      }
    ]
  };
