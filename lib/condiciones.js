CharStats.condiciones.weaponType = function (weaponInUse, type) {
  return weaponInUse && weaponInUse.type == type;
}

CharStats.condiciones.distanceToTarget = function (dtt, distance) {
  return dtt <= distance;
}

CharStats.condiciones.baseAttack = function (ataqueBase, ammount) {
  return ammount <= ataqueBase;
}

CharStats.condiciones.roundType = function (roundType, type) {
  return type == roundType;
}