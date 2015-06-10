Rolepack.condiciones.weapon_type = function (pj, type) {
  var weapon = Rolepack.funciones.getWeaponInUse(pj);
  return weapon && weapon.type == type;
};

Rolepack.condiciones.distance_target = function (pj, distance) {
  return pj.info.distance_target <= distance;
};

Rolepack.condiciones.base_attack = function (pj, ammount) {
  return ammount <= pj.info.ataque_base[0];
};

Rolepack.condiciones.round_type = function (pj, type) {
  return type == pj.info.round_type;
};

Rolepack.condiciones.weapon_base = function (pj, type) {
  var weapon = Rolepack.funciones.getWeaponInUse(pj);
  return weapon && type == weapon.weapon_base;
};
