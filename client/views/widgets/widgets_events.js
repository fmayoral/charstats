if (Meteor.isClient) {
  Template.widgetDistanceInput.events({
    'submit .distance-to-target': function (e) {
      e.preventDefault();
      var val = $('#dtt-input').val();
      if(!isNaN(parseInt(val))){
        var pj = Characters.findOne({'_id': Session.get('selected_char_id')});
        pj = Rolepack.funciones.setDistanceToTarget(pj, parseInt(val));
        Meteor.call('updatePj',pj,function(error, result){
          if (error) {
            alert(error.message);
          } else {
            Rolepack.funciones.modifyCharForDisplay(pj);
            $('#dtt-input').val('');
          }
        });
      }
    }
  });

  Template.widgetHealthInput.events({
    'click .btn-submit-health': function (e) {
      e.preventDefault();
      var val = $('#hp-input').val();
      if(!isNaN(parseInt(val))){
        var pj = Characters.findOne({'_id': Session.get('selected_char_id')});
        var type = $(e.currentTarget).attr('data-value');
        var ammount = parseInt(val);
        if(type == 'heal') {
          ammount *= -1;
        }
        pj = Rolepack.funciones.modHealth(pj, ammount);
        Meteor.call('updatePj',pj,function(error, result){
          if (error) {
            alert(error.message);
          } else {
            Rolepack.funciones.modifyCharForDisplay(pj);
            $('#hp-input').val('');
          }
        });
      }
    }
  });

  Template.widgetExperienceInput.events({
    'click .btn-submit-experience': function (e) {
      e.preventDefault();
      var val = $('#xp-input').val();
      if(!isNaN(parseInt(val))){
        var pj = Characters.findOne({'_id': Session.get('selected_char_id')});
        var type = $(e.currentTarget).attr('data-value');
        var ammount = parseInt(val);
        if(type == 'remove') {
          ammount *= -1;
        }
        pj = Rolepack.funciones.modExperience(pj, ammount);
        Meteor.call('updatePj',pj,function(error, result){
          if (error) {
            alert(error.message);
          } else {
            Rolepack.funciones.modifyCharForDisplay(pj);
            $('#xp-input').val('');
          }
        });
      }
    }
  });

  Template.widgetRoundTypeInput.events({
    'click .btn-round-type': function (e) {
      e.preventDefault();
      var type = $(e.currentTarget).attr('data-value');

      var pj = Characters.findOne({'_id': Session.get('selected_char_id')});
      pj = Rolepack.funciones.modRoundType(pj, type);
      Meteor.call('updatePj',pj,function(error, result){
        if (error) {
          alert(error.message);
        } else {
          Rolepack.funciones.modifyCharForDisplay(pj);
        }
      });
    }
  });
}
