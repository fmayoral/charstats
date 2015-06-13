Habilidades.core.weapon_focus_crossbow = {
    key: 'weapon_focus_crossbow',
    bundle: 'core',
    name: 'Weapon Focus (crossbow)',
    desc: 'Add +1 to all attacks',
    pasive: true,
    condiciones: [
      {
        type: 'weapon_base',
        effect: 'crossbow'
      }
    ],
    efectos: [
      {
        type: 'ataque',
        effect: 1
      }
    ]
  };
