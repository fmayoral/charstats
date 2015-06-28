Rolepack.condiciones.weapon_type = function (pj, type, extra_fields) {
  var weapon = Rolepack.funciones.getWeaponInUse(pj);
  return weapon && weapon.type == type;
};

Rolepack.condiciones.distance_target = function (pj, distance) {
  return pj.info.distance_target <= distance;
};

Rolepack.condiciones.base_attack = function (pj, ammount) {
  return ammount <= Tablas.core.classes[pj.info.class].getBaseAttackBonus(pj.info.experience.level)[0];
};

Rolepack.condiciones.round_type = function (pj, type) {
  return type == pj.info.round_type;
};

Rolepack.condiciones.weapon_group = function (pj, type, extra_fields) {
  var weapon = Rolepack.funciones.getWeaponInUse(pj);
  return weapon && extra_fields.weapon_group == weapon.weapon_group;
};
