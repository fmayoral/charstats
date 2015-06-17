Rolepack.funciones.aplicarFeat = function (pj, feat) {
  return Rolepack.efectos[feat.type](pj, feat.effect);
};


Rolepack.funciones.checkCondicion = function (pj, condicion){
  return Rolepack.condiciones[condicion.type](pj, condicion.effect);
};

Rolepack.funciones.getWeaponInUse = function (pj) {
  var weapon = false;
  if(pj.weapons) {
    for (var i = 0; i < pj.weapons.length; i++) {
      if (pj.weapons[i].inUse) {
        weapon = pj.weapons[i];
      }
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
    if(pj.habilidades[i].key == featId){
      pj.habilidades[i].active = !pj.habilidades[i].active;
    }
  }
  return pj;
};

Rolepack.funciones.toggleMagic = function (pj, magicId) {
  for (var i = 0; i < pj.magic.length; i++) {
    if(pj.magic[i].key == magicId){
      pj.magic[i].active = !pj.magic[i].active;
    }
  }
  return pj;
};

Rolepack.funciones.verificarCondiciones = function (pj, accion){
  var response = true;
  for (var j = 0; j < accion.condiciones.length; j++) {
    response = Rolepack.funciones.checkCondicion(pj, accion.condiciones[j]) && response;
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

Rolepack.funciones.maxRanks = function (pj){
  var maxRanks = Tablas.core.classes[pj.info.class].getSkillRanks(pj);
  if(Tablas.core.races[pj.info.race].extra_skills){
    maxRanks += Tablas.core.races[pj.info.race].getExtraSkills(pj);
  }
  return maxRanks;
};

Rolepack.funciones.getPjLevel = function (pj){
  if(pj.info.experience.hasOwnProperty('level')) {
    experience = pj.info.experience;
  } else {
    experience = Tablas.core.experience[pj.info.experience.type].getLevel(pj.info.experience.current);
  }
  return experience.level;
};

Rolepack.funciones.usedRanks = function (pj){
  var ranks = 0;
  for(var key in pj.skills) {
    ranks += pj.skills[key];
  }
  return ranks;
};

Rolepack.funciones.changeRank = function (pj, skill, value){
  //Verificar que no este excedido en rangos
  var max = Rolepack.funciones.maxRanks(pj);
  var used = Rolepack.funciones.usedRanks(pj);
  if(used+value > max) {
    alert('No puede asignar mas puntos que su maximo');
    return pj;
  }

  if(!pj.skills){ pj.skills = {}; }

  if(pj.skills.hasOwnProperty(skill)) {
    pj.skills[skill] += value;
  } else {
    pj.skills[skill] = value;
  }
  if(pj.skills[skill] < 0) { pj.skills[skill] = 0;}
  if(pj.skills[skill] > Rolepack.funciones.getPjLevel(pj)) { pj.skills[skill] -= value; alert('No puede asignar mas puntos que su nivel');}
  return pj;
};


Rolepack.funciones.modifyCharForDisplay = function (pj) {
  var feat = {};
  //Calcular atributos basicos
  pj.info.experience = Tablas.core.experience[pj.info.experience.type].getLevel(pj.info.experience.current);

  //Procesar items para agregar sus efectos (nuevas feats/variacion en los atributos) Chequear con max si hay otro tipo
  //de efectos.

  //Calcular modificadores de los atributos
  pj.modificadores = Tablas.core.abilities.getModificadores(pj.info.atributos);

  //Ataques son sacados de la clase+nivel
  pj.ataques = Tablas.core.classes[pj.info.class].getBaseAttackBonus(pj.info.experience.level);

  //Aplicar Feats
  if(pj.habilidades){
    for (var i = 0; i < pj.habilidades.length; i++) {
      feat = Feats[pj.habilidades[i].bundle][pj.habilidades[i].key];
      if (pj.habilidades[i].active) {
        if (Rolepack.funciones.verificarCondiciones(pj, feat)) {
          for (var j = 0; j < feat.efectos.length; j++) {
            Rolepack.funciones.aplicarFeat(pj, feat.efectos[j]);
            //console.log(feat.efectos[j]);
          }
        }
      }
    }
  }

  //Aplicar spells activos
  if(pj.magic){
    for (var i = 0; i < pj.magic.length; i++) {
      feat = Magic[pj.magic[i].bundle][pj.magic[i].key];
      if (pj.magic[i].active) {
        if (Rolepack.funciones.verificarCondiciones(pj, feat)) {
          for (var j = 0; j < feat.efectos.length; j++) {
            Rolepack.funciones.aplicarFeat(pj, feat.efectos[j]);
            //console.log(feat.efectos[j]);
          }
        }
      }
    }
  }


  //Calcular los skills (o mejor hacerlos on the fly en la vista?)

  Session.set('active-pj', pj);
  return pj;
};
