Rolepack.funciones.aplicarFeat = function (pj, feat) {
  return Rolepack.efectos[feat.type](pj, feat.effect);
};


Rolepack.funciones.checkCondicion = function (pj, condicion){
  return Rolepack.condiciones[condicion.type](pj, condicion.effect);
};

Rolepack.funciones.getWeaponInUse = function (pj) {
  var weapon = false;
  for (var i = 0; i < pj.weapons.length; i++) {
    if (pj.weapons[i].inUse) {
      weapon = pj.weapons[i];
    }
  }
  return weapon;
};

Rolepack.funciones.setActiveWeapon = function (pj, weaponId) {
  for (var i = 0; i < pj.weapons.length; i++) {
      pj.weapons[i].inUse = pj.weapons[i]._id == weaponId;
  }
  return pj;
};

Rolepack.funciones.setDistanceToTarget = function (pj, distance) {
  pj.info.distance_target = distance;
  return pj;
};

Rolepack.funciones.toggleFeat = function (pj, featId) {
  for (var i = 0; i < pj.habilidades.length; i++) {
    if(pj.habilidades[i].id == featId){
      pj.habilidades[i].active = !pj.habilidades[i].active;
    }
  }
  return pj;
};

Rolepack.funciones.aplicarEfecto = function (pj, habilidad){
  var response = true;
  for (var j = 0; j < habilidad.condiciones.length; j++) {
    response = Rolepack.funciones.checkCondicion(pj, habilidad.condiciones[j]) && response;
  }
  return response;
};

Rolepack.funciones.modHealth = function (pj, damage){
  pj.info.health.damage += damage;
  if(pj.info.health.damage<0) { pj.info.health.damage=0; }
  return pj;
};

Rolepack.funciones.modExperience = function (pj, modValue){
  pj.info.experience.current += modValue;
  return pj;
};

Rolepack.funciones.modRoundType = function (pj, roundType){
  pj.info.round_type = roundType;
  return pj;
};


Rolepack.funciones.updateRolepack = function (pj) {
  var feat = {};
  //Calcular atributos basicos
  pj.info.experience = Tablas.core.experience[pj.info.experience.type].getLevel(pj.info.experience.current);

  //Ataques deberan ser sacados de la clase+nivel

  pj.ataques = Tablas.core.classes[pj.info.class].getBaseAttackBonus(pj.info.experience.level);

  //Aplicar Habilidades
  for (var i = 0; i < pj.habilidades.length; i++) {
    feat = Habilidades[pj.habilidades[i].bundle][pj.habilidades[i].id];
    if (pj.habilidades[i].active || feat.pasive) {
      if (Rolepack.funciones.aplicarEfecto(pj, feat)) {
        for (var j = 0; j < feat.efectos.length; j++) {
          Rolepack.funciones.aplicarFeat(pj, feat.efectos[j]);
          console.log(feat.efectos[j]);
        }
      }
    }
  }
  Session.set('active-pj', pj);
  return pj;
};
