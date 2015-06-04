if (Meteor.isClient) {

  Template.widgetDistanceInput.helpers({
    currentDistance: function(){
      var pj = Session.get('active-pj');
      return pj.info.distance_target;
    },
    currentDistanceMts: function(){
      var pj = Session.get('active-pj');
      return Math.floor(pj.info.distance_target * 0.3048);
    }
  });

  Template.widgetRoundTypeInput.helpers({
    roundTypeStyle: function(val){
      var pj = Session.get('active-pj');
      return pj.info.round_type != val?'':'btn-primary';
    }
  });

  Template.widgetDistanceInput.events({
    'submit .distance-to-target': function (e) {
      e.preventDefault();
      var val = $('#dtt-input').val();
      if(!isNaN(parseInt(val))){
        CharStats.funciones.setDistanceToTarget(parseInt(val));
        $('#dtt-input').val('');
        CharStats.funciones.updateCharStats();
      }
    }
  });  

  Template.widgetHealthInput.events({
    'click .btn-submit-health': function (e) {
      e.preventDefault();
      var val = $('#hp-input').val();
      if(!isNaN(parseInt(val))){
        var type = $(e.currentTarget).attr('data-value');
        var ammount = parseInt(val);
        if(type == 'heal') {
          ammount *= -1;
        }
        CharStats.funciones.modHealth(ammount);
        $('#hp-input').val('');
        CharStats.funciones.updateCharStats();
      }
    }
  });  

  Template.widgetExperienceInput.events({
    'click .btn-submit-experience': function (e) {
      e.preventDefault();
      var val = $('#xp-input').val();
      if(!isNaN(parseInt(val))){
        var type = $(e.currentTarget).attr('data-value');
        var ammount = parseInt(val);
        if(type == 'remove') {
          ammount *= -1;
        }
        CharStats.funciones.modExperience(ammount);
        $('#xp-input').val('');
        CharStats.funciones.updateCharStats();
      }
    }
  });  

  Template.widgetRoundTypeInput.events({
    'click .btn-round-type': function (e) {
      e.preventDefault();
      var type = $(e.currentTarget).attr('data-value');
      CharStats.funciones.modRoundType(type);
      CharStats.funciones.updateCharStats();
    }
  });  

}