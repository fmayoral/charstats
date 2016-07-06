if (Meteor.isClient) {
  Template.registerHelper('toLowerCase', function(value) {
      if(value) {
          return value.toLowerCase();
      } else {
          return '';
      }
  });
}
