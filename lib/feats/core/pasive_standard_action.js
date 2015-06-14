Habilidades.core.pasive_standard_action  = {
    key: 'pasive_standard_action',
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
