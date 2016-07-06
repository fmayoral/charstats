Magic.spells.greater_magic_weapon = {
    key: 'greater_magic_weapon',
    bundle: 'spells',
    name: 'Greater Magic Weapon',
    desc: 'adds +1 to attack rolls and +1 to attack damage every 4 levels',
    school: 'transmutation',
    saving: true,
    saving_attr: 'will',
    saving_effect: 'negate',
    resistance: true,
    duration: '1 min/level',
    casting_time: '1 Standar Action',
    class_level: [
      { class: 'sorcerer', level: 3 },
      { class: 'wizard', level: 3 },
      { class: 'bloodrager', level: 3 },
      { class: 'paladin', level: 3 },
      { class: 'inquisitor', level: 3 },
      { class: 'oracle', level: 4 },
      { class: 'cleric', level: 4 },
      { class: 'antipaladin', level: 3 },
      { class: 'magus', level: 3 }
    ],
    condiciones: [],
    efectos: [
      {
        type: 'greater_magic_weapon_ataque',
        effect: 1
      },
      {
        type: 'greater_magic_weapon_danio_bonificador',
        effect: 1
      }

    ]
  };

Rolepack.efectos.greater_magic_weapon_ataque = function (pj, bonus) {
  //Suma un bonus a las tiradas de ataque
  bonus = (Math.floor(Rolepack.funciones.getPjLevel(pj)/4) )* bonus;
  for (var i = 0; i < pj.ataques.length; i++) {
    pj.ataques[i]+=bonus;
  }
  return pj;
};

Rolepack.efectos.greater_magic_weapon_danio_bonificador = function(pj, bonus){
  //Suma un bonus de daño a cada arma
  bonus = (Math.floor(Rolepack.funciones.getPjLevel(pj)/4) )* bonus;
  for (var i = 0; i < pj.weapons.length; i++) {
    pj.weapons[i].bonificador+=bonus;
  }
  return pj;
};
