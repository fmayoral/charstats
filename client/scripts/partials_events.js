if (Meteor.isClient) {
  Template.inventario.rendered = function (){
    Session.set('weapon-selected', null);
  };

  Template.habilidades.rendered = function (){
    $('.feats').popover();
  };

  Template.inventario.events({
    'click .weapon-btn': function (e) {
      e.preventDefault();
      CharStats.funciones.setActiveWeapon(this._id);
      CharStats.funciones.updateCharStats();
    }
  });

  Template.habilidades.events({
    'click .toggle-feat': function (e) {
      e.preventDefault();
      CharStats.funciones.toggleFeat(this.id);
    }
  });  
}