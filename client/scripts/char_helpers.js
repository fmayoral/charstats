if (Meteor.isClient) {

  Template.charList.helpers({
    userChars: function () {
      return Characters.find({'owner': Meteor.user()._id }, {sort: {'info.name': 1}});
    },
    isCharActive: function() {
      return this._id == Session.get('selected_char_id');
    }
  });

}

