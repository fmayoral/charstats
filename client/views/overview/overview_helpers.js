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
      return _.map(_.groupBy(pj.habilidades, function(hab) { return hab.bundle; }), function(val,key){return {key: key, habilidades: val};});
    },
    descripcion_bundle: function(){
      return Habilidades[this.key].info;
    },
    nombre_bundle: function(){
      return Habilidades[this.key].name;
    },
    habilidades: function(habList){
      var responseList = [];
      for (var i = 0; i < habList.length; i++) {
        var habilidad = Habilidades[habList[i].bundle][habList[i].key];
        habilidad.active = habList[i].active;
        responseList.push(habilidad);
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

  Template.featList.helpers({
  });

  Template.featsPj.helpers({
    bundles: function(){
      var pj = Session.get('active-pj');
      return _.map(_.groupBy(pj.habilidades, function(hab) { return hab.bundle; }), function(val,key){return {key: key, habilidades: val};});
    },
    descripcion_bundle: function(){
      return Habilidades[this.key].info;
    },
    nombre_bundle: function(){
      return Habilidades[this.key].name;
    },
    habilidades: function(habList){
      var responseList = [];
      for (var i = 0; i < habList.length; i++) {
        var habilidad = Habilidades[habList[i].bundle][habList[i].key];
        habilidad.active = habList[i].active;
        responseList.push(habilidad);
      }
      return _.sortBy(responseList, function(o){ return [o.pasive, o.name]; });
    },

  });

  Template.allFeats.helpers({
    bundles: function(){
      var pj = Session.get('active-pj');
      var bundles = [];
      for (var key in Habilidades) {
        if (Habilidades.hasOwnProperty(key)) {
            var val = Object.keys(Habilidades[key]);
            bundles.push({key: key, habilidades: _.without(val, 'info','name')});
        }
      }
      return _.sortBy(bundles, 'key');
    },
    descripcion_bundle: function(){
      return Habilidades[this.key].info;
    },
    nombre_bundle: function(){
      return Habilidades[this.key].name;
    },
    habilidades: function(bundle){
      var responseList = [];
      for (var i = 0; i < bundle.habilidades.length; i++) {
        var habilidad = Habilidades[bundle.key][bundle.habilidades[i]];
        responseList.push(habilidad);
      }
      return _.sortBy(responseList, function(o){ return o.name; });
    },

  });

}
