Feats.general.greater_spell_focus = {
    key: 'greater_spell_focus',
    bundle: 'general',
    name: 'Greater Spell Focus',
    desc: 'Any spells you cast of this school are very hard to resist.',
    pasive: true,
    url: 'http://www.d20pfsrd.com/feats/general-feats/greater-spell-focus---final',
    extra_fields:[
      {
        'key': 'magic_school',
        'text': 'Magic School',
        'values': function (pj){
          var response = [];
          var keys = Object.keys(Tablas.core.magic_school);
          for (var i = 0; i < keys.length; i++) {
            response.push(Tablas.core.magic_school[keys[i]]);
          }
          response = _.sortBy(response, 'name');
          return _.toArray(response);
        },
      }
    ],
    condiciones: [
    ],
    efectos: [
    ]
  };
