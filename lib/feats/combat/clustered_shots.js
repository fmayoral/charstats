Feats.combat.clustered_shots = {
    key: 'clustered_shots',
    bundle: 'combat',
    name: 'Clustered Shots',
    desc: 'You take a moment to carefully aim your shots, causing them all to strike nearly the same spot.',
    pasive: false,
    url: 'http://www.d20pfsrd.com/feats/combat-feats/clustered-shots-combat',
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
    ]
  };
