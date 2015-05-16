CharStats.efectos.modAttackBonus = function (attackArray, bonus) {
  for (var i = 0; i < attackArray.length; i++) {
    attackArray[i]+=bonus;
  };
  return attackArray;
}

CharStats.efectos.extraAttack = function (attackArray, ammount) {
  var atk = attackArray.shift();
  attackArray.unshift(atk);
  for (var i = 0; i < ammount; i++) {
    attackArray.unshift(atk);
  };
  return attackArray;
}

CharStats.efectos.modDamageBonus = function(weaponArray, bonus){
  for (var i = 0; i < weaponArray.length; i++) {
    weaponArray[i].bonificador+=bonus;
  };
  return weaponArray;
}

CharStats.efectos.modAttacksCount = function (attackArray, ammount) {
  attackArray.splice(ammount, attackArray.length-ammount);
  return attackArray;
}

CharStats.efectos.addDamageDice = function(weaponArray, bonus){
  for (var i = 0; i < weaponArray.length; i++) {
    weaponArray[i].dadosextra.push({
      'dado': weaponArray[i].dado,
      'cantdado': weaponArray[i].cantdado,
      'damage_type': 'Vital Strike'
    });
  };
  return weaponArray;
}