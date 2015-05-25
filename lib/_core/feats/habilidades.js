Habilidades.core.pasive_ranged_at_melee = {
    id: 'pasive_ranged_at_melee',
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

Habilidades.core.point_blank_shot = {
    id: 'point_blank_shot',
    bundle: 'core',
    name: 'Point Blank Shot',
    desc: '+1 to attack rolls and +1 to attack damage when using ranged weapon at less than 30 feets',
    pasive: true,
    condiciones: [
      {
        type: 'distance_target',
        effect: 30
      },
      {
        type: 'weapon_type',
        effect: 'ranged'
      }
    ],
    efectos: [
      {
        type: 'ataque',
        effect: 1
      },
      {
        type: 'danio_bonificador',
        effect: 1
      }
    ]
  };

Habilidades.core.precise_shot = {
    id: 'precise_shot',
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

Habilidades.core.haste = {
    id: 'haste',
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

Habilidades.core.pasive_standard_action  = {
    id: 'pasive_standard_action',
    bundle: 'core',
    name: 'Standard Action',
    desc: 'Only allows 1 attack',
    pasive: true,
    condiciones: [
      {
        type: 'round_type',
        effect: 'standard'
      }
    ],
    efectos: [
      {
        type: 'ammount_attacks',
        effect: 1
      }
    ]
  };

Habilidades.core.weapon_focus_crossbow = {
    id: 'weapon_focus_crossbow',
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

Habilidades.core.weapon_specialization_crossbow = {
    id: 'weapon_specialization_crossbow',
bundle: 'core',
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

Habilidades.core.weapon_training_crossbow = {
    id: 'weapon_training_crossbow',
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
