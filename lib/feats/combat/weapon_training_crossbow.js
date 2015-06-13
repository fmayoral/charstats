Habilidades.core.weapon_training_crossbow = {
    key: 'weapon_training_crossbow',
    bundle: 'core',
    name: 'Weapon Training (crossbow)',
    desc: 'Add +1 to damage bonus, +1 to all attack rolls',
    pasive: true,
    condiciones: [
      {
        type: 'weapon_base',
        effect: 'crossbow'
      }
    ],
    efectos: [
      {
        type: 'danio_bonificador',
        effect: 1
      },
      {
        type: 'ataque',
        effect: 1
      }
    ]
  };
