if (Meteor.isClient) {
  Template.inventario.helpers({
    armas: function(){
      var pj = Session.get('active-pj');
      return pj.weapons;
    }
  });

  Template.ataques.helpers({
    withSign: function(val){
      if (val>=0) { return '+'+val; }
      return val;
    },
    ataques: function(){
      var pj = Session.get('active-pj');
      return pj.ataques;
    }

  });

  Template.habilidades.helpers({
    bundles: function(){
      var pj = Session.get('active-pj');
      return _.sortBy(_.map(_.groupBy(pj.habilidades, function(hab) { return hab.bundle; }), function(val,key){return {key: key, habilidades: val};}), 'key');
    },
    descripcion_bundle: function(){
      return Feats[this.key].info.descripcion;
    },
    nombre_bundle: function(){
      return Feats[this.key].info.name;
    },
    habilidades: function(habList){
      var responseList = [];
      for (var i = 0; i < habList.length; i++) {
        var habilidad = jQuery.extend(true, {}, Feats[habList[i].bundle][habList[i].key]);
        habilidad.active = habList[i].active;
        habilidad.extra_fields_pj = habList[i].extra_fields;
        responseList.push(habilidad);
      }
      return _.sortBy(responseList, function(o){ return [o.pasive, o.name]; });
    },
    activationStatus: function(){
      var pj = Session.get('active-pj');
      if( Rolepack.funciones.verificarCondiciones(pj, this, this.extra_fields_pj)){
        if (this.active) { return 'list-group-item-success';}
        if (!this.active && this.pasive) { return 'list-group-item-danger';}
        return '';
      }
      return 'disabled';
    },
    extraFields: function(){
      var fields = [];
      if(this.extra_fields){
        for (var i = 0; i < this.extra_fields.length; i++) {
          fields.push({
            'text': this.extra_fields[i].text,
            'value': this.extra_fields_pj[this.extra_fields[i].key]
          });
        }
      }
      return fields;
    }
  });

  Template.feat_desc.helpers({
    extraFields: function(){
      var fields = [];
      if(this.extra_fields){
        for (var i = 0; i < this.extra_fields.length; i++) {
          fields.push({
            'text': this.extra_fields[i].text,
            'value': this.extra_fields_pj[this.extra_fields[i].key]
          });
        }
      }
      return fields;
    }
  });

  Template.spells.helpers({
    bundles: function(){
      var pj = Session.get('active-pj');
      return _.map(_.groupBy(pj.magic, function(magic) { return magic.bundle; }), function(val,key){return {key: key, magic: val};});
    },
    descripcion_bundle: function(){
      return Magic[this.key].info.descripcion;
    },
    nombre_bundle: function(){
      return Magic[this.key].info.name;
    },
    spells: function(magicList){
      var responseList = [];
      for (var i = 0; i < magicList.length; i++) {
        var magic = Magic[magicList[i].bundle][magicList[i].key];
        magic.active = magicList[i].active;
        responseList.push(magic);
      }
      return _.sortBy(responseList, function(o){ return [o.pasive, o.name]; });
    },
    activationStatus: function(){
      var pj = Session.get('active-pj');
      if( Rolepack.funciones.verificarCondiciones(pj, this)){
        if (this.active) { return 'list-group-item-success';}
        if (!this.active && this.pasive) { return 'list-group-item-danger';}
        return '';
      }
      return 'disabled';
    }
  });

  Template.weaponStats.helpers({
    arma: function(){
      return Rolepack.funciones.getWeaponInUse(Session.get('active-pj'));
    },
    damageRange: function(weapon){
      var minimo = weapon.bonificador+weapon.cantdado;
      var maximo = weapon.bonificador+(weapon.cantdado*weapon.dado);
      for (var i = 0; i < weapon.dadosextra.length; i++) {
        minimo += weapon.dadosextra[i].cantdado;
        maximo += weapon.dadosextra[i].cantdado*weapon.dadosextra[i].dado;
      }
      return minimo+' - '+maximo;
    },
    criticRange: function(weapon){
      return weapon.criticRange[0]+' - '+weapon.criticRange[1];
    }

  });

  Template.dashboard.helpers({
    life: function(){
      var pj = Session.get('active-pj');
      var response = {
        'label': 'Health',
        'info': 'Damage: '+pj.info.health.damage+' Total: '+pj.info.health.total,
        'color': 'blood-red',
        'value': pj.info.health.total,
        'progress': 0
      };
      response.value -= pj.info.health.damage;
      response.progress = Math.floor(((response.value) / pj.info.health.total) * 100);
      return response;
    },

    experience: function(){
      var pj = Session.get('active-pj');
      var response = {
        'label': 'Level: '+pj.info.experience.level,
        'info': 'Next Level at: '+pj.info.experience.next_lvl,
        'color': 'experience-green',
        'value': pj.info.experience.current,
        'progress': 0
      };
      response.progress = Math.floor(((pj.info.experience.current - pj.info.experience.prev_lvl) / (pj.info.experience.next_lvl - pj.info.experience.prev_lvl) ) * 100);
      return response;
    }
  });

  Template.skillsList.helpers({
    skills: function(){
      var responseList = [];
      for (var key in Tablas.core.skills) {
        if (Tablas.core.skills.hasOwnProperty(key)) {
            responseList.push(Tablas.core.skills[key]);
        }
      }
      return _.sortBy(responseList, function(o){ return o.name; });
    },
    diceValue: function(){
      var dice = Session.get('diceValue');
      return dice;
    },
    maxRanks: function(){
      var pj = Session.get('active-pj');
      return Rolepack.funciones.maxRanks(pj);
    },
    usedRanks: function(){
      var pj = Session.get('active-pj');
      return Rolepack.funciones.usedRanks(pj);
    }
  });

  Template.skillRow.helpers({
    cantUse: function(){
      var ranks = 0;
      var pj = Session.get('active-pj');
      if(!pj.skills) { pj.skills = {}; }
      if(pj.skills.hasOwnProperty(this.key)) { ranks = pj.skills[this.key]; }
      return (!this.untrained && ranks === 0);
    },
    aModifier: function(){
      var pj = Session.get('active-pj');
      return pj.modificadores[this.ability];
    },
    ranks: function(){
      var ranks = 0;
      var pj = Session.get('active-pj');
      if(!pj.skills) { pj.skills = {}; }
      if(pj.skills.hasOwnProperty(this.key)) { ranks = pj.skills[this.key]; }
      return ranks;
    },
    mModifier: function(){
      var mod = 0;
      var ranks = 0;
      var pj = Session.get('active-pj');
      var clasea = this.classes.indexOf(pj.info.class);
      if(!pj.skills) { pj.skills = {}; }
      if(pj.skills.hasOwnProperty(this.key)) { ranks += pj.skills[this.key]; }

      if (clasea!== -1 && ranks>0) { mod +=3; }
      //Armor check si asi lo inica la feat


      //Agregar skills raciales
      var raciales = Tablas.core.races[pj.info.race].bonus_skills;
      if(raciales.hasOwnProperty(this.key)) { mod += raciales[this.key]; }

      return mod;
    },
    totalBonus: function(a,b,c){
      var dice = Session.get('diceValue');
      return a+b+c+parseInt(dice);
    },
    clasea: function(){
      var pj = Session.get('active-pj');
      var a = this.classes.indexOf(pj.info.class);
      return a!== -1;
    }

  });

}
