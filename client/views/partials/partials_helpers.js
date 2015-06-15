if (Meteor.isClient) {
  Template.login.helpers({
    userLogged: function () {
      return Meteor.user();
    }
  });

  Template.titulo.helpers({
    appTitle: function(){
      return 'Rolepack';
    }
  });

}
