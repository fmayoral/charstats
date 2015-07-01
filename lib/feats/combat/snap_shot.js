Feats.combat.snap_shot = {
    key: 'snap_shot',
    bundle: 'combat',
    name: 'Snap Shot',
    desc: 'With a ranged weapon, you can take advantage of any opening in your opponent’s defenses.',
    pasive: true,
    url: 'http://www.d20pfsrd.com/feats/combat-feats/snap-shot-combat',
    condiciones: [
      {
        type: 'weapon_type',
        effect: 'ranged'
      },
      {
        type: 'abilitie_min',
        effect: {
          'dex': 13
        }
      }

    ],
    efectos: [
    ]
  };
