Feats.combat.crossbow_mastery = {
    key: 'crossbow_mastery',
    bundle: 'combat',
    name: 'Crossbow Mastery',
    desc: 'You can load crossbows with blinding speed and even fire them in melee with little fear of reprisal.',
    pasive: true,
    url: 'http://www.d20pfsrd.com/feats/combat-feats/crossbow-mastery-combat',
    condiciones: [
      {
        type: 'weapon_group',
        effect: 'crossbows'
      },
      {
        type: 'abilitie_min',
        effect: {
          'dex': 15
        }
      }

    ],
    efectos: [
    ]
  };
