Habilidades.core.deadly_aim = {
    key: 'deadly_aim',
    bundle: 'core',
    name: 'Deadly Aim',
    desc: 'takes -1 to attack rolls and add +2 to attack damage every 4 levels',
    pasive: false,
    condiciones: [
      {
        type: 'weapon_type',
        effect: 'ranged'
      }
    ],
    efectos: [
      {
        type: 'deadly_aim_ataque',
        effect: -1
      },
      {
        type: 'deadly_aim_danio_bonificador',
        effect: 2
      }

    ]
  };

Rolepack.efectos.deadly_aim_ataque = function (pj, bonus) {
  //Suma un bonus a las tiradas de ataque
  bonus = (1 + Math.floor(pj.info.experience.level/4) )* bonus;
  for (var i = 0; i < pj.ataques.length; i++) {
    pj.ataques[i]+=bonus;
  }
  return pj;
};
Rolepack.efectos.deadly_aim_danio_bonificador = function(pj, bonus){
  //Suma un bonus de daño a cada arma
  bonus = (1 + Math.floor(pj.info.experience.level/4) )* bonus;
  for (var i = 0; i < pj.weapons.length; i++) {
    pj.weapons[i].bonificador+=bonus;
  }
  return pj;
};
