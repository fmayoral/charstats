if (Meteor.isClient) {

  Template.charList.helpers({
    userChars: function () {
      return Characters.find({'owner': Meteor.user()._id }, {sort: {'info.name': 1}});
    },
    isCharActive: function() {
      return this._id == Session.get('selected_char_id');
    }
  });

  Template.charNew.helpers({
    sizes: function (){
      var response = [];
      var keys = Object.keys(Tablas.core.charSize);
      for (var i = 0; i < keys.length; i++) {
        response.push(Tablas.core.charSize[keys[i]]);
      }
      return response;
    },
    classes: function (){
      var response = [];
      var keys = Object.keys(Tablas.core.classes);
      for (var i = 0; i < keys.length; i++) {
        response.push(Tablas.core.classes[keys[i]]);
      }
      return response;
    }
  })
}
