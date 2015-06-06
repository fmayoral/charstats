Habilidades.core.flame_arrow = {
    id: 'flame_arrow',
    bundle: 'core',
    name: 'Flame Arrow',
    desc: 'Extra 1d6 for all ammunition',
    pasive: false,
    condiciones: [
      {
        type: 'weapon_type',
        effect: 'ranged'
      }
    ],
    efectos: [
      {
        type: 'flame_arrow',
        effect: 1
      }
    ]
  };

CharStats.efectos.flame_arrow = function(pj, bonus){
  //Agrega (n) dados de daño extra de tipo fuego
  for (var i = 0; i < pj.weapons.length; i++) {
    pj.weapons[i].dadosextra.push({
      'dado': 6,
      'cantdado': 1,
      'damage_type': 'fire'
    });
  };
  return pj;
}