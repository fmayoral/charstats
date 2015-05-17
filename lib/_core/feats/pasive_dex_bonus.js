Habilidades.insert({
    name: 'Apply Dex bonus to attack',
    desc: 'Apply Dex bonus to attack rolls',
    pasive: true,
    condiciones: [
      {
        type: 'weapon_type',
        effect: 'ranged'
      }
    ],
    efectos: [
      {
        type: 'ataque_dex_bonus',
        effect: null
      }
    ]
  });

CharStats.efectos.ataque_dex_bonus = function (pj, bonus) {
  //Suma modificador de destreza a las tiradas de ataques
  bonus = pj.modificadores.dex;
  for (var i = 0; i < pj.ataques.length; i++) {
    pj.ataques[i]+=bonus;
  };
  return pj;
}
