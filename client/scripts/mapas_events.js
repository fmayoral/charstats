if (Meteor.isClient) {

  Template.newmap.events({
    'change #anchoMapa, keyup #anchoMapa': function (e) {
      var info = Session.get('nuevoMapaInfo');
      info.ancho = $(e.target).val();
      Session.set('nuevoMapaInfo', info);
    },
    'change #altoMapa, keyup #altoMapa': function (e) {
      var info = Session.get('nuevoMapaInfo');
      info.alto = $(e.target).val();
      Session.set('nuevoMapaInfo', info);
    },
    'submit .newMapForm': function (e) {
      var data = {};
      e.preventDefault();

      data.ancho = $('#anchoMapa').val();
      data.alto = $('#altoMapa').val();
      data.descripcion = $('#descripcionMapa').val();
      data.terrenoDefault = $('#terrenoMapa').val();
      data.mapBackground = $('input[name=fondosRadios]:checked').val();
      if(data.terrenoDefault == '') { data.terrenoDefault = 'default'; }
      
      //Como el terreno se usa como clase de CSS, debe ser lowerCase
      //@todo limpiar el string para evitar simbolos raros y espacios
      data.terrenoDefault = data.terrenoDefault.toLowerCase();

      Meteor.call('createMapa',data,function(error, result){
        if (error) {
          alert(error.message);
          //@todo desbloquear boton de crear
        } else {
          //Redirect to id
          Router.go('mapList');
        }
      });
      //@todo bloquear boton de crear  
    },
  });

  Template.mapList.events({
    'click .del-mapa': function (event) {
      var mapId = $(event.currentTarget).closest('tr').attr('data-id');
      var r = confirm("Esta seguro que desea borrar el mapa?\nESTA ACCION NO SE PUEDE DESHACER");
      if (r == true) {
        Meteor.call('removeMapa', mapId, function(error, result){
          if (error) {
            alert(error.message);
          }          
        });
      }
    },

    'click .edit-mapa': function (event) {
      var mapId = $(event.currentTarget).closest('tr').attr('data-id');
      //Router.go('editMapa', {_id: mapId});
    },

    'click .play-mapa': function (event) {
      var mapId = $(event.currentTarget).closest('tr').attr('data-id');
      Router.go('playmap', {_id: mapId});
    }

  });

  Template.mapaLayout.events({
    'click .tresd-toggle': function(event){
      $('#canvas').toggleClass('tresD');
    },
    
    'click .map-change': function(event){
      Router.go('mapList');
    },

    'click .pj-move': function(event){
      Session.set('mapAction','play');
    },

    'click .pj-target': function(event){
      Session.set('mapAction','target');
    },

    'click .pj-remove': function(event){
      var charId = Session.get('selected_char_id');
      if (charId) {
        Meteor.call('setCharPosition', charId, null, null, null, function(error, result){
          if (error) {
            alert(error.message);
          }      
        });
      }
    },

    'click .click-layer': function(event){
      var cellRow = Math.floor(event.offsetY/50);
      var cellCol = Math.floor(event.offsetX/50);
      var mapId = $(event.currentTarget).closest('div#canvas').attr('data-id');

      switch(Session.get('mapAction')){
        case 'play':
          var charId = Session.get('selected_char_id');
          if (charId) {
            Meteor.call('setCharPosition', charId, parseInt(cellRow), parseInt(cellCol), mapId, function(error, result){
              if (error) {
                alert(error.message);
              }      
            });
          }
          break;
      }
    },
    
    'click .celda': function(event){
      var mapId = $(event.currentTarget).closest('div#canvas').attr('data-id');
      var mapa = Mapas.findOne({_id:mapId});

      var cellRow = $(event.currentTarget).attr('data-row');
      var cellCol = $(event.currentTarget).attr('data-column');

      switch(Session.get('mapAction')){
        case 'edit':
          for(var i=0;i<mapa.grilla.length;i++){
            if(mapa.grilla[i].index.r == cellRow && mapa.grilla[i].index.c == cellCol){
                mapa.grilla[i].terreno = $('#cellTerrain').val().toLowerCase();
                mapa.grilla[i].bloqueo = $('#cellBlock').is(':checked');
                mapa.grilla[i].movimiento = $('#cellMovimiento').val();
              break;
            }
          }
          //Update Celda
          Meteor.call('updateMapa', mapa, function(error, result){
            if (error) {
              alert(error.message);
            }          
          });
          break;
        case 'play':
          var charId = Session.get('char-selected');
          if (charId) {
            Meteor.call('setCharPosition', charId, parseInt(cellRow), parseInt(cellCol), function(error, result){
              if (error) {
                alert(error.message);
              } else {
                Session.set('alert-type', 'warning');
                Session.set('alert-text', 'seleccione un PJ');
              }      
            });
          }
          break;
        default:
        //do nothing (por ahora)
          break;
      }
    },
    'click .criatura': function (e) {
      var id = $(e.currentTarget).attr('data-id');
      $('.criaturaSB.selected').toggleClass('selected');
      $(e.currentTarget).toggleClass('selected');
      Session.set('char-selected', id);
      Session.set('alert-type', 'success');
      Session.set('alert-text', 'Seleccione una accion');
    }    
  });

  

}