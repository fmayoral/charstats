if (Meteor.isClient) {
  Template.nav.events({
    'click .logout': function (e) {
      e.preventDefault();
      Meteor.logout();
    }
  });

}