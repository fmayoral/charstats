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

  Template.widgetCombatManeuver.helpers({
    cmb: function(){
      var pj = Session.get('active-pj');
      var cmb = 0;
      if(pj){
        cmb += parseInt(Tablas.core.classes[pj.info.class].getBaseAttackBonus(pj.info.experience.level)[0]);
        cmb += parseInt(pj.modificadores.str);
        cmb += parseInt(pj.info.combat_maneuvers.bonus);
        cmb += parseInt(Tablas.core.charSize[pj.info.size].special_modifier);
      }
      return cmb;
    },
    cmd: function(){
      var pj = Session.get('active-pj');
      var cmd = 10;
      if(pj){
        cmd += parseInt(Tablas.core.classes[pj.info.class].getBaseAttackBonus(pj.info.experience.level)[0]);
        cmd += parseInt(pj.modificadores.str);
        cmd += parseInt(pj.modificadores.dex);
        cmd += parseInt(pj.info.combat_maneuvers.defense);
        cmd += parseInt(Tablas.core.charSize[pj.info.size].special_modifier);
      }
      return cmd;
    },
  });

}
