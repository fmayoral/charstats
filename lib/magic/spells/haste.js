Habilidades.core.haste = {
    key: 'haste',
    bundle: 'core',
    name: 'Haste',
    desc: '+1 to attack rolls and gives 1 extra attack when use in a full attack action',
    pasive: false,
    condiciones: [
      {
        type: 'round_type',
        effect: 'full'
      }
    ],
    efectos: [
      {
        type: 'ataque',
        effect: 1
      },
      {
        type: 'ataque_extra',
        effect: 1
      }
    ]
  };
