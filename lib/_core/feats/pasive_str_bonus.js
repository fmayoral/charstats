Habilidades.core.pasive_str_damage = {
    id: 'pasive_str_damage',
    bundle: 'core',
    name: 'Apply Str bonus to damage',
    desc: 'Apply Str bonus to damage bonus',
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


CharStats.efectos.str_bonus_danio = function(pj, bonus){
  //Suma el modificador de fuerza al daño de cada arma
  bonus = pj.modificadores.str;
  for (var i = 0; i < pj.ataques.length; i++) {
    pj.ataques[i].bonificador+=bonus;
  };
  return pj;
}

CharStats.efectos.str_bonus_ataque = function(pj, bonus){
  //Suma el modificador de fuerza al daño de cada arma
  bonus = pj.modificadores.str;
  for (var i = 0; i < pj.ataques.length; i++) {
    pj.ataques[i]+=bonus;
  };
  return pj;
}

