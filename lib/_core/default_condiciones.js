CharStats.condiciones.weapon_type = function (pj, type) {
  var weapon = CharStats.funciones.getWeaponInUse(pj);
  return weapon && weapon.type == type;
}

CharStats.condiciones.distance_target = function (pj, distance) {
  return pj.info.distance_target <= distance;
}

CharStats.condiciones.base_attack = function (pj, ammount) {
  return ammount <= pj.info.ataque_base[0];
}

CharStats.condiciones.round_type = function (pj, type) {
  return type == pj.info.round_type;
}

CharStats.condiciones.weapon_base = function (pj, type) {
  var weapon = CharStats.funciones.getWeaponInUse(pj);
  return weapon && type == weapon.weapon_base;
}