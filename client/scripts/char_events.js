if (Meteor.isClient) {

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
          personaje.weapons = [];

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

          method = 'createPj';
          break;
      }

      //Asignar valores del formulario
      personaje.info.name = $('#char-name').val();
      personaje.info.class = $('#char-class').val();
      personaje.info.size = $('#char-size').val();
      personaje.info.experience.type = $('#char-experience-size').val();
      personaje.info.health.total = parseInt($('#char-hitpoints').val());


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
