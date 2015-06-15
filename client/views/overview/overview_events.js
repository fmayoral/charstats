if (Meteor.isClient) {
  Template.inventario.rendered = function (){
    Session.set('weapon-selected', null);
  };

  Template.skillsList.rendered = function (){
    Session.set('diceValue', 0);
  };

  Template.skillsList.events({
    'change #diceInput, keyup #diceInput': function (e) {
      var dice = $(e.target).val();
      Session.set('diceValue', dice);
    },
  });

  Template.habilidades.rendered = function (){
    $('.feats').popover();
  };

  Template.inventario.events({
    'click .weapon-btn': function (e) {
      e.preventDefault();
      var pj = Characters.findOne({'_id': Session.get('selected_char_id')});
      pj = Rolepack.funciones.setActiveWeapon(pj, this._id);
      Meteor.call('updatePj',pj,function(error, result){
        if (error) {
          alert(error.message);
        } else {
          Rolepack.funciones.modifyCharForDisplay(pj);
        }
      });

    }
  });

  Template.habilidades.events({
    'click .toggle-feat': function (e) {
      e.preventDefault();
      var pj = Characters.findOne({'_id': Session.get('selected_char_id')});
      pj = Rolepack.funciones.toggleFeat(pj, this.key);
      Meteor.call('updatePj',pj,function(error, result){
        if (error) {
          alert(error.message);
        } else {
          Rolepack.funciones.modifyCharForDisplay(pj);
          $('#dtt-input').val('');
        }
      });

    }
  });

  Template.spells.events({
    'click .toggle-spell': function (e) {
      e.preventDefault();
      var pj = Characters.findOne({'_id': Session.get('selected_char_id')});
      pj = Rolepack.funciones.toggleMagic(pj, this.key);
      Meteor.call('updatePj',pj,function(error, result){
        if (error) {
          alert(error.message);
        } else {
          Rolepack.funciones.modifyCharForDisplay(pj);
          $('#dtt-input').val('');
        }
      });

    }
  });
}
