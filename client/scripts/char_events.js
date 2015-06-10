if (Meteor.isClient) {

  Template.charList.events({
    'click .new-char': function (e) {
      e.preventDefault();
      Router.go('newChar');
    },

    'click .remove-char': function (e) {
      e.preventDefault();
      var charId = Session.get('selected_char_id');
      if(charId) {
        var r = confirm("Esta seguro que desea borrar el personaje?\nESTA ACCION NO SE PUEDE DESHACER");
        if (r == true) {
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

  Template.charNew.events({
    'submit .new-char': function (e) {
      e.preventDefault();
      var newPj = {};
      newPj.info = {};
      newPj.type = 'user'; //type = npc for monsters and characters created by masters
      newPj.position = {};
      newPj.habilidades = [];
      newPj.weapons = [];

      newPj.owner = Meteor.user()._id;
      newPj.info.name = $('#char-name').val();
      newPj.info.class = $('#char-class').val();
      newPj.info.size = $('#char-size').val();


      newPj.info.distance_target =  0;
      newPj.info.ataque_base =  [0];
      newPj.info.round_type =  'full';
      newPj.info.health =  {
          'total': 0,
          'damage': 0,
        };
      newPj.info.experience = {
          'current': 0,
          'type': 'fast'
        };
      newPj.info.money = 0;


      //@todo bloquear boton de crear mientras el server procesa el request
      Meteor.call('createPj',newPj,function(error, result){
        if (error) {
          alert(error.message);
        } else {
          Router.go('home');
        }
      });

    }
  });

}
