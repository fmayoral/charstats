if (Meteor.isClient) {
  Template.mastertoolbar.events({
    'click a': function (e) {
      e.preventDefault();
      switch($(e.currentTarget).attr('data-route')){
        case 'newmap':
          Router.go('newmap');
          break;
        case 'listmap':
          Router.go('mapList');
          break;
        case 'newnpc':
          Router.go('newnpc');
          break;
        case 'listnpc':
          Router.go('npcList');
          break;
        case 'archivos':
          Router.go('archivosList');
          break;
      }
    }
  });

}