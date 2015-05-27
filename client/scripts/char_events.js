if (Meteor.isClient) {

  Template.charList.events({
    'click .new-char': function (e) {
      e.preventDefault();
      Router.go('newChar');
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
      
      newPj.owner = Meteor.user()._id;
      newPj.info.name = $('#char-name').val();
      newPj.info.class = $('#char-class').val();
      newPj.info.size = $('#char-size').val();

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