if (Meteor.isClient) {
  Template.login.helpers({
    userLogged: function () {
      return Meteor.user();
    }
  });
  
  Template.titulo.helpers({
    appTitle: function(){
      return 'charStats';
    }
  });

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
    habilidades: function(){
      var pj = Session.get('active-pj');
      return pj.habilidades;
    },
    habilidad: function(){
      return Habilidades[this.bundle][this.id];
    },
    activationStatus: function(){
      var pj = Session.get('active-pj');
      if( CharStats.funciones.aplicarEfecto(pj, Habilidades[this.bundle][this.id])){
        if (this.active) { return 'list-group-item-success';}
        if (!this.active && Habilidades[this.bundle][this.id].pasive) { return 'list-group-item-danger';}
        return '';
      }
      return 'disabled';
    }
  });

  Template.weaponStats.helpers({
    arma: function(){
      return CharStats.funciones.getWeaponInUse(Session.get('active-pj'));
    },
    damageRange: function(weapon){
      var minimo = weapon.bonificador+weapon.cantdado;
      var maximo = weapon.bonificador+(weapon.cantdado*weapon.dado);
      for (var i = 0; i < weapon.dadosextra.length; i++) {
        minimo += weapon.dadosextra[i].cantdado;
        maximo += weapon.dadosextra[i].cantdado*weapon.dadosextra[i].dado;
      };
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
        'info': 'Next Level: '+pj.info.experience.next_lvl,
        'color': 'experience-green',
        'value': pj.info.experience.current,
        'progress': 0
      };
      response.progress = Math.floor(((pj.info.experience.current - pj.info.experience.prev_lvl) / (pj.info.experience.next_lvl - pj.info.experience.prev_lvl) ) * 100);
      return response;
    }
  });

}