Feats.combat.weapon_specialization_crossbow = {
    key: 'weapon_specialization_crossbow',
    bundle: 'combat',
    name: 'Weapon Specialization (crossbow)',
    desc: 'Add +2 to damage bonus',
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
        effect: 2
      }
    ]
  };
