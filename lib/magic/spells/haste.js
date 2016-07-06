Magic.spells.haste = {
  key: 'haste',
  bundle: 'spells',
  name: 'Haste',
  desc: '+1 to attack rolls and gives 1 extra attack when use in a full attack action',
  school: 'transmutation',
  saving: true,
  saving_attr: 'for',
  saving_effect: 'negate',
  resistance: true,
  duration: '1 round/level',
  casting_time: '1 Standar Action',
  class_level: [
    { class: 'bard', level: 3 },
    { class: 'alchemist', level: 3 },
    { class: 'summoner', level: 2 },
    { class: 'sorcerer', level: 3 },
    { class: 'wizard', level: 3 },
    { class: 'bloodrager', level: 3 },
    { class: 'magus', level: 3 }
  ],
  condiciones: [
    {
      type: 'round_type',
      effect: 'full'
    }
  ],
  efectos: [
    {
      type: 'ataque',
      effect: 1
    },
    {
      type: 'ataque_extra',
      effect: 1
    }
  ]
};
