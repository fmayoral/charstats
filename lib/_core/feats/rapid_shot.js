Habilidades.core.rapid_shot = {
    id: 'rapid_shot',
    bundle: 'core',
    name: 'Rapid Shot',
    desc: 'Full Action. 1 extra attack. -2 to all attack rolls',
    pasive: false,
    condiciones: [
      {
        type: 'weapon_type',
        effect: 'ranged'
      },
      {
        type: 'round_type',
        effect: 'full'
      }
    ],
    efectos: [
      {
        type: 'ataque_extra',
        effect: 1
      },
      {
        type: 'ataque',
        effect: -2
      }
    ]
  };
