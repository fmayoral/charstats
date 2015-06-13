Habilidades.core.precise_shot = {
    key: 'precise_shot',
    bundle: 'core',
    name: 'Precise Shot',
    desc: 'Negates the -4 to attack rolls when using ranged weapon at melee',
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
        effect: 4
      }
    ]
  };
