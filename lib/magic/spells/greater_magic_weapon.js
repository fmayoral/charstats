Habilidades.magic.greater_magic_weapon = {
    key: 'greater_magic_weapon',
    bundle: 'magic',
    name: 'Greater Magic Weapon',
    desc: 'adds +1 to attack rolls and +1 to attack damage every 4 levels',
    pasive: false,
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
  var base_attack = pj.info.ataque_base[0];
  bonus = (Math.floor(pj.info.ataque_base[0]/4) )* bonus;
  for (var i = 0; i < pj.ataques.length; i++) {
    pj.ataques[i]+=bonus;
  }
  return pj;
};

Rolepack.efectos.greater_magic_weapon_danio_bonificador = function(pj, bonus){
  //Suma un bonus de daño a cada arma
  var base_attack = pj.info.ataque_base[0];
  bonus = (Math.floor(pj.info.ataque_base[0]/4) )* bonus;
  for (var i = 0; i < pj.weapons.length; i++) {
    pj.weapons[i].bonificador+=bonus;
  }
  return pj;
};
