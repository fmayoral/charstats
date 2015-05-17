Habilidades.insert({
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
        type: 'danio_str_bonus',
        effect: null
      }
    ]
  });


CharStats.efectos.danio_str_bonus = function(pj, bonus){
  //Suma el modificador de fuerza al daño de cada arma
  bonus = pj.modificadores.str;
  for (var i = 0; i < pj.weapons.length; i++) {
    pj.weapons[i].bonificador+=bonus;
  };
  return pj;
}
