if (Meteor.isClient) {

  Template.featList.helpers({
  });

  Template.featsPj.helpers({
    bundles: function(){
      var pj = Session.get('active-pj');
      return _.map(_.groupBy(pj.habilidades, function(hab) { return hab.bundle; }), function(val,key){return {key: key, habilidades: val};});
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
        habilidad.id = habList[i].id;
        responseList.push(habilidad);
      }
      return _.sortBy(responseList, function(o){ return [o.pasive, o.name]; });
    },


  });

  Template.allFeats.helpers({
    bundles: function(){
      var pj = Session.get('active-pj');
      var bundles = [];
      for (var key in Feats) {
        if (Feats.hasOwnProperty(key)) {
            var val = Object.keys(Feats[key]);
            bundles.push({key: key, habilidades: _.without(val, 'info')});
        }
      }
      return _.sortBy(bundles, 'key');
    },
    descripcion_bundle: function(){
      return Feats[this.key].info.descripcion;
    },
    nombre_bundle: function(){
      return Feats[this.key].info.name;
    },
    habilidades: function(bundle){
      var responseList = [];
      var pj = Session.get('active-pj');
      var habPj = _.map(pj.habilidades, function (h) {
        return h.bundle+h.key;
      });
      for (var i = 0; i < bundle.habilidades.length; i++) {
        var habilidad = Feats[bundle.key][bundle.habilidades[i]];
        habilidad.pjHasIt = false;
        if(_.indexOf(habPj, habilidad.bundle+habilidad.key) !== -1){
          habilidad.pjHasIt = true;
        }
        responseList.push(habilidad);
      }
      return _.sortBy(responseList, function(o){ return o.name; });
    }
  });

  Template.addFeat.helpers({
    singleValue: function(){
      var pj = Session.get('active-pj');
      var response = [];
      if (pj) { response = this.values(pj); }
      return response.length <= 1;
    },
    getSingleValue: function(){
      var pj = Session.get('active-pj');
      var response = [];
      if (pj) { response = this.values(pj); }
      return response[0];
    },
    valueList: function(){
      var pj = Session.get('active-pj');
      var response = [];
      if (pj) { response = this.values(pj); }
      return response;
    }
  });

}
