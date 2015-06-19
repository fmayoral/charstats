Rolepack.efectos.ataque = function (pj, bonus) {
  //Suma un bonus a las tiradas de ataque
  for (var i = 0; i < pj.ataques.length; i++) {
    pj.ataques[i]+=bonus;
  }
  return pj;
};

Rolepack.efectos.ataque_extra = function (pj, ammount) {
  //Da un ataque extra usando el mejor ataque (el primero)
  var atk = pj.ataques.shift();
  pj.ataques.unshift(atk);
  for (var i = 0; i < ammount; i++) {
    pj.ataques.unshift(atk);
  }
  return pj;
};

Rolepack.efectos.danio_bonificador = function(pj, bonus){
  //Suma un bonus de daño a cada arma
  for (var i = 0; i < pj.weapons.length; i++) {
    pj.weapons[i].bonificador+=bonus;
  }
  return pj;
};

Rolepack.efectos.ammount_attacks = function (pj, ammount) {
  //Reduce la cantidad de ataques al numero indicado en ammount
  pj.ataques.splice(ammount, pj.ataques.length-ammount);
  return pj;
};

Rolepack.efectos.mod_initiative = function (pj, bonus) {
  //Suma bonus a la iniciativa del pj
  pj.info.initiative+=bonus;
  return pj;
};
