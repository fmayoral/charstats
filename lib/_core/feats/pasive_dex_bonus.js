Habilidades.core.pasive_dex_attack = {
    id: 'pasive_dex_attack',
    bundle: 'core',
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
        type: 'dex_bonus_ataque',
        effect: null
      }
    ]
  };

Rolepack.efectos.dex_bonus_ataque = function (pj, bonus) {
  //Suma modificador de destreza a las tiradas de ataques
  bonus = pj.modificadores.dex;
  for (var i = 0; i < pj.ataques.length; i++) {
    pj.ataques[i]+=bonus;
  };
  return pj;
}
