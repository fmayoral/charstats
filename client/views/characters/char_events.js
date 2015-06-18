if (Meteor.isClient) {

  Template.charAttrib.events({
    'change .attrib-input, keyup .attrib-input': function (e) {
      var value = parseInt($(e.target).val());
      var attrib = $(e.target).attr('data-attr');
      var modificadores = Session.get('char-attr-list');
      modificadores[attrib] = Tablas.core.abilities.getModificador(value);
      Session.set('char-attr-list', modificadores);
    },

  });

  Template.charList.events({
    'click .new-char': function (e) {
      e.preventDefault();
      Router.go('newChar');
    },

    'click .edit-char': function (e) {
      e.preventDefault();
      var selected_char = Session.get('selected_char_id');
      if(selected_char){
        Router.go('editChar', {_id: selected_char});
      }
    },

    'click .remove-char': function (e) {
      e.preventDefault();
      var charId = Session.get('selected_char_id');
      if(charId) {
        var r = confirm("Esta seguro que desea borrar el personaje?\nESTA ACCION NO SE PUEDE DESHACER");
        if (r === true) {
          Meteor.call('removePj',charId,function(error, result){
            if (error) {
              alert(error.message);
            } else {
              Session.set('selected_char_id', null);
            }
          });
        }
      }

    },

    'click .select-char': function (e) {
      e.preventDefault();
      if (this._id == Session.get('selected_char_id')) {
        Session.set('selected_char_id', null);
      } else {
        Session.set('selected_char_id', this._id);
      }
    }
  });

  Template.charForm.events({
    'submit .form-char': function (e) {
      e.preventDefault();

      var method = '';
      var personaje = {};
      switch (Session.get('action')){
        case 'edit':
          personaje = Characters.findOne({'_id': Session.get('selected_char_id')});
          method = 'updatePj';
          break;
        case 'new':
          personaje.info = {};
          personaje.type = 'user'; //type = npc for monsters and characters created by masters
          personaje.position = {};
          personaje.habilidades = [];
          personaje.magic = [];
          personaje.weapons = [];
          personaje.skills = {};

          personaje.owner = Meteor.user()._id;

          personaje.info.health =  {
              'total': 0,
              'damage': 0,
            };
          personaje.info.distance_target =  0;
          personaje.info.ataque_base =  [0];
          personaje.info.round_type =  'full';
          personaje.info.experience = {
              'current': 0,
              'type': 'fast'
            };
          personaje.info.money = 0;
          personaje.info.atributos = {
            'str':0,
            'dex':0,
            'con':0,
            'int':0,
            'wis':0,
            'cha':0,
          };

          method = 'createPj';
          break;
      }

      //Asignar valores del formulario
      personaje.info.name = $('#char-name').val();
      personaje.info.race = $('#char-race').val();
      personaje.info.class = $('#char-class').val();
      personaje.info.size = $('#char-size').val();
      personaje.info.experience.type = $('#char-experience-size').val();
      personaje.info.health.total = parseInt($('#char-hitpoints').val());
      personaje.info.atributos.str = parseInt($('#char-attr-str').val());
      personaje.info.atributos.dex = parseInt($('#char-attr-dex').val());
      personaje.info.atributos.con = parseInt($('#char-attr-con').val());
      personaje.info.atributos.int = parseInt($('#char-attr-int').val());
      personaje.info.atributos.wis = parseInt($('#char-attr-wis').val());
      personaje.info.atributos.cha = parseInt($('#char-attr-cha').val());

      Meteor.call(method,personaje,function(error, result){
        if (error) {
          alert(error.message);
        } else {
          Session.set('selected_char_id', result.id);
          Router.go('home');
        }
      });
    }
  });

}
