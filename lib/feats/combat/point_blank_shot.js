Habilidades.combat.point_blank_shot = {
    key: 'point_blank_shot',
    bundle: 'combat',
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
