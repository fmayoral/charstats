CharStats.funciones.aplicarFeat = function (pj, feat) {
  switch(feat.type){
    case 'ataque':
      pj.ataques = CharStats.efectos.modAttackBonus(pj.ataques, feat.effect);
      break;
    case 'ataque_dex_bonus':
      pj.ataques = CharStats.efectos.modAttackBonus(pj.ataques, pj.modificadores.dex);
      break;
    case 'danio_str_bonus':
      pj.weapons = CharStats.efectos.modDamageBonus(pj.weapons, pj.modificadores.str);
      break;
    case 'ataque_extra':
      pj.ataques = CharStats.efectos.extraAttack(pj.ataques, feat.effect);
      break;
    case 'danio_bonificador':
      pj.weapons = CharStats.efectos.modDamageBonus(pj.weapons, feat.effect);
      break;
    case 'danio_extra':
      pj.weapons = CharStats.efectos.addDamageDice(pj.weapons, feat.effect);
      break;
    case 'ammount_attacks':
      pj.ataques = CharStats.efectos.modAttacksCount(pj.ataques, feat.effect);
      break;
  }
  return pj;
};


CharStats.funciones.checkCondicion = function (pj, condicion){
  switch(condicion.type){
    case 'distance_target':
      return CharStats.condiciones.distanceToTarget(pj.info.distance_target, condicion.effect);
      break;
    case 'base_attack':
      return CharStats.condiciones.baseAttack(pj.info.ataque_base[0], condicion.effect);
      break;
    case 'weapon_type':
      var weapon = CharStats.funciones.getWeaponInUse(pj);
      return CharStats.condiciones.weaponType(weapon, condicion.effect);
      break;
    case 'round_type':
      return CharStats.condiciones.roundType(pj.info.round_type, condicion.effect);
      break
  }
  return false;
};

CharStats.funciones.getWeaponInUse = function (pj) {
  var weapon = false;
  for (var i = 0; i < pj.weapons.length; i++) {
    if (pj.weapons[i].inUse) {
      return weapon = pj.weapons[i];
    }
  };
  return weapon;
};

CharStats.funciones.setActiveWeapon = function (weaponId) {
  var pj = Personajes.findOne({'_id': Session.get('charName')});
  for (var i = 0; i < pj.weapons.length; i++) {
      pj.weapons[i].inUse = pj.weapons[i]._id == weaponId;
  };
  Personajes.update(pj._id, pj);
};

CharStats.funciones.setDistanceToTarget = function (distance) {
  var pj = Personajes.findOne({'_id': Session.get('charName')});
  pj.info.distance_target = distance;
  Personajes.update(pj._id, pj);
};



CharStats.funciones.updateCharStats = function () {
  var pj = Personajes.findOne({'_id': Session.get('charName')});
  for (var i = 0; i < pj.habilidades.length; i++) {
    if (pj.habilidades[i].active || pj.habilidades[i].pasive) {
      if (CharStats.funciones.aplicarEfecto(pj, pj.habilidades[i])) {
        for (var j = 0; j < pj.habilidades[i].feat.efectos.length; j++) {
          CharStats.funciones.aplicarFeat(pj, pj.habilidades[i].feat.efectos[j]);
        };
      }
    }
  };
  Session.set('active-pj', pj);
  return pj;
};

CharStats.funciones.toggleFeat = function (featId) {
  var pj = Personajes.findOne({'_id': Session.get('charName')});
  for (var i = 0; i < pj.habilidades.length; i++) {
    if(pj.habilidades[i].feat._id == featId){
      pj.habilidades[i].active = !pj.habilidades[i].active;
    }
  };
  Personajes.update(pj._id, pj);
};

CharStats.funciones.aplicarEfecto = function (pj, habilidad){
  var response = true;
  for (var j = 0; j < habilidad.feat.condiciones.length; j++) {
    response = CharStats.funciones.checkCondicion(pj, habilidad.feat.condiciones[j]) && response;
  };
  return response;
};

CharStats.funciones.modHealth = function (damage){
  var pj = Personajes.findOne({'_id': Session.get('charName')});
  pj.info.health.damage += damage;
  if(pj.info.health.damage<0) { pj.info.health.damage=0; }
  Personajes.update(pj._id, pj);
};

CharStats.funciones.modRoundType = function (roundType){
  var pj = Personajes.findOne({'_id': Session.get('charName')});
  pj.info.round_type = roundType;
  Personajes.update(pj._id, pj);
};
