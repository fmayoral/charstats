Feats.core.pasive_str_damage = {
    key: 'pasive_str_damage',
    bundle: 'core',
    name: 'Apply Str bonus to damage and attack rolls',
    desc: 'Apply Str bonus to damage bonus and attack with melee weapons',
    pasive: true,
    condiciones: [
      {
        type: 'weapon_type',
        effect: 'melee'
      }
    ],
    efectos: [
      {
        type: 'str_bonus_danio',
        effect: null
      },
      {
        type: 'str_bonus_ataque',
        effect: null
      }
    ]
  };


Rolepack.efectos.str_bonus_danio = function(pj, bonus){
  //Suma el modificador de fuerza al daño de cada arma
  bonus = pj.modificadores.str;
  for (var i = 0; i < pj.weapons.length; i++) {
    pj.weapons[i].bonificador+=bonus;
  }
  return pj;
};

Rolepack.efectos.str_bonus_ataque = function(pj, bonus){
  //Suma el modificador de fuerza al daño de cada arma
  bonus = pj.modificadores.str;
  for (var i = 0; i < pj.ataques.length; i++) {
    pj.ataques[i]+=bonus;
  }
  return pj;
};
