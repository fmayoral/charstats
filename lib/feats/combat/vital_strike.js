Feats.combat.vital_strike = {
    key: 'vital_strike',
    bundle: 'combat',
    name: 'Vital Strike',
    desc: 'Extra damage on when use in a standard action',
    pasive: false,
    url: 'http://www.d20pfsrd.com/feats/combat-feats/vital-strike-combat---final',
    condiciones: [
      {
        type: 'round_type',
        effect: 'standard'
      },
      {
        type: 'base_attack',
        effect: 6
      }
    ],
    efectos: [
      {
        type: 'vital_strike',
        effect: 1
      }
    ]
  };

Rolepack.efectos.vital_strike = function(pj, bonus){
  //Agrega (n) dados de daño extra de tipo vital strike
  for (var i = 0; i < pj.weapons.length; i++) {
    pj.weapons[i].dadosextra.push({
      'dado': pj.weapons[i].dado,
      'cantdado': pj.weapons[i].cantdado,
      'damage_type': 'Vital Strike'
    });
  }
  return pj;
};
