Feats.general.spell_focus = {
    key: 'spell_focus',
    bundle: 'general',
    name: 'Spell Focus',
    desc: 'Any spells you cast of that school are more difficult to resist.',
    pasive: true,
    url: 'http://www.d20pfsrd.com/feats/general-feats/spell-focus---final',
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
