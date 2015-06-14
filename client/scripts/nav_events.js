if (Meteor.isClient) {
  Template.nav.events({
    'click a': function (e) {
      e.preventDefault();
      switch($(e.currentTarget).attr('data-route')){
        case 'dashboard':
          Router.go('dashboard');
          break;
        case 'home':
          Router.go('home');
          break;
        case 'playmemorymap':
          Router.go('playmemorymap');
          break;
        case 'mastertools':
          Router.go('mastertools');
          break;
        case 'logout':
          var r = confirm("Esta seguro que desea salir?");
          if (r === true) {
            Meteor.logout();
          }
          break;
      }
    }
  });

}
