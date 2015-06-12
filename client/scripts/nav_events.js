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
          Meteor.logout();
          break;
      }
    }
  });

}
