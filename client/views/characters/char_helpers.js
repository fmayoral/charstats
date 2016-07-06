if (Meteor.isClient) {

  Template.charList.helpers({
    userChars: function () {
      return Characters.find({'owner': Meteor.user()._id }, {sort: {'info.name': 1}});
    },
    isCharActive: function() {
      return this._id == Session.get('selected_char_id');
    }
  });

  Template.charForm.onRendered(function () {
    var modificadores = {
      'str': Tablas.core.abilities.getModificador(this.data?this.data.info.atributos.str:10),
      'dex': Tablas.core.abilities.getModificador(this.data?this.data.info.atributos.dex:10),
      'con': Tablas.core.abilities.getModificador(this.data?this.data.info.atributos.con:10),
      'int': Tablas.core.abilities.getModificador(this.data?this.data.info.atributos.int:10),
      'wis': Tablas.core.abilities.getModificador(this.data?this.data.info.atributos.wis:10),
      'cha': Tablas.core.abilities.getModificador(this.data?this.data.info.atributos.cha:10),
    };
    Session.set('char-attr-list', modificadores);
  });

  Template.charAttrib.helpers({
    value: function(){
      return this.parent?this.parent.info.atributos[this.attrib]:0;
    },
    modificador: function(){
      var modificadores = Session.get('char-attr-list');
      return modificadores?modificadores[this.attrib]:'';
    },
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
    atribList: function(){
      return ['str','dex','con','int','wis','cha'];
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
    selectedRace: function (parent) {
      if(this && parent && this == parent.info.race) {
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
      for (var i = 0; i < keys.length; i++) {
        response.push(Tablas.core.experience[keys[i]]);
      }
      return keys;
    },
    races: function (){
      var response = [];
      var keys = Object.keys(Tablas.core.races);
      for (var i = 0; i < keys.length; i++) {
        response.push(Tablas.core.races[keys[i]]);
      }
      return keys;
    },
  });
}
