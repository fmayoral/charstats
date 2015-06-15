if (Meteor.isClient) {

  Template.nav.helpers({
    inMemoryCharName: function(){
      var pj = Characters.findOne(Session.get('selected_char_id'));
      if (pj) {
        return pj.info.name.split(" ", 2)[0];
      }
      return 'Select ...';
    }
  });

}
