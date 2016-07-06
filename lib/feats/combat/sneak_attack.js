Feats.combat.sneak_attack = {
    key: 'sneak_attack',
    bundle: 'combat',
    name: 'Sneak Attack',
    desc: 'Rogue Talent',
    pasive: false,
    url: 'http://paizo.com/pathfinderRPG/prd/classes/rogue.html#sneak-attack',
    condiciones: [
    ],
    efectos: [
      {
        type: 'sneak_attack',
        effect: null
      }
    ]
  };

Rolepack.efectos.sneak_attack = function(pj, bonus){
  //Agrega (n) dados de daño extra de tipo sneak attack por nivel
  var pj_level = Rolepack.funciones.getPjLevel(pj);
  for (var i = 0; i < pj.weapons.length; i++) {
    pj.weapons[i].dadosextra.push({
      'dado': 6,
      'cantdado': Math.ceil(pj_level/2),
      'damage_type': 'Sneak Attack'
    });
  }
  return pj;
};
