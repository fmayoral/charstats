Magic.spells.flame_arrow = {
  key: 'flame_arrow',
  bundle: 'spells',
  name: 'Flame Arrow',
  desc: 'This spell allows you to turn ammunition (such as arrows, crossbow bolts, shuriken, and sling stones) into fiery projectiles. Each piece of ammunition deals an extra 1d6 points of fire damage to any target it hits. A flaming projectile can easily ignite a flammable object or structure, but it wont ignite a creature it strikes.',
  school: 'transmutation_fire',
  saving: false,
  resistance: false,
  duration: '10 min/level',
  casting_time: '1 Standar Action',
  class_level: [
    { class: 'sorcerer', level: 3 },
    { class: 'wizard', level: 3 },
    { class: 'bloodrager', level: 3 },
    { class: 'magus', level: 3 }
  ],
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

Rolepack.efectos.flame_arrow = function(pj, bonus){
  //Agrega (n) dados de daño extra de tipo fuego
  for (var i = 0; i < pj.weapons.length; i++) {
    pj.weapons[i].dadosextra.push({
      'dado': 6,
      'cantdado': 1,
      'damage_type': 'fire'
    });
  }
  return pj;
};
