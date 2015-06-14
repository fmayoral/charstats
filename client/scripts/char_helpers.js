if (Meteor.isClient) {

  Template.charList.helpers({
    userChars: function () {
      return Characters.find({'owner': Meteor.user()._id }, {sort: {'info.name': 1}});
    },
    isCharActive: function() {
      return this._id == Session.get('selected_char_id');
    }
  });

  Template.charForm.helpers({
    action: function () {
      switch (Session.get('action')){
        case 'edit':
          return 'Edit';
        case 'new':
          return 'New';
        default:
          return '';
      }
    },
    selectedClass: function (parent) {
      if(this && parent && this.key == parent.info.class) {
        return 'selected';
      }
    },
    selectedSize: function (parent) {
      if(this && parent && this.key == parent.info.size) {
        return 'selected';
      }
    },
    selectedXpType: function (parent) {
      if(this && parent && this == parent.info.experience.type) {
        return 'selected';
      }
    },
    classes: function (){
      var response = [];
      var keys = Object.keys(Tablas.core.classes);
      for (var i = 0; i < keys.length; i++) {
        response.push(Tablas.core.classes[keys[i]]);
      }
      return response;
    },
    sizes: function (){
      var response = [];
      var keys = Object.keys(Tablas.core.charSize);
      for (var i = 0; i < keys.length; i++) {
        response.push(Tablas.core.charSize[keys[i]]);
      }
      return response;
    },
    experiences: function (){
      var response = [];
      var keys = Object.keys(Tablas.core.experience);
      return keys;
    },
  });
}
