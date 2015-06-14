Habilidades.magic.haste = {
    key: 'haste',
    bundle: 'magic',
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
