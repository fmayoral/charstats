Feats.combat.rapid_shot = {
    key: 'rapid_shot',
    bundle: 'combat',
    name: 'Rapid Shot',
    desc: 'Full Action. 1 extra attack. -2 to all attack rolls',
    pasive: false,
    url: 'http://www.d20pfsrd.com/feats/combat-feats/rapid-shot-combat---final',
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
