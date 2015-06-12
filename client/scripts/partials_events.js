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
      Rolepack.funciones.setActiveWeapon(this._id);
      /*@todo pasar pj a la funcion*/
      Rolepack.funciones.updateCharForDisplay();
    }
  });

  Template.habilidades.events({
    'click .toggle-feat': function (e) {
      e.preventDefault();
      Rolepack.funciones.toggleFeat(this.id);
    }
  });
}
