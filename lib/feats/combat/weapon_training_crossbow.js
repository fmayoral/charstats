Habilidades.combat.weapon_training_crossbow = {
    key: 'weapon_training_crossbow',
    bundle: 'combat',
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
