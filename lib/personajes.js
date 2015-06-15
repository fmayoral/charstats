var pj_template = {
  '_id': 'xanxo',
  'type': 'user',
  'owner': 'hashDelOwner',
  'ataques': [8, 3],
  'position': {
    'map': 'hashDelMap',
    'index': {
      'r':0,
      'c':0
    }
  },
  'modificadores': {
    'str': 2,
    'dex': 4,
    'con': 2,
    'int': 1,
    'wis': 0,
    'cha': 0
  },
  'info': {
    'name': 'xanxo',
    'class': 'fighter',
    'size': 'medium',
    'distance_target': 35,
    'ataque_base': [8, 3],
    'round_type': 'full', // full or standard
    'health': {
      'total': 104,
      'damage': 0,
    },
    'experience': {
      'level': 8,
      'current': 35800,
      'next_lvl': 50000,
      'prev_lvl': 34000
    },
    'money': 24000, //Copper coins
    'atributos': {
      'str': 12,
      'dex': 14,
      'con': 12,
      'int': 11,
      'wis': 10,
      'cha': 10
    }
  },
  'habilidades': [
    {
      'active': feat.pasive,
      'id': feat.id,
      'bundle': feat.bundle
    }
  ],
  'magic': [
    {
      'active': magic.pasive,
      'id': magic.id,
      'bundle': magic.bundle
    }
  ],
  'weapons': [
    {
      '_id': 'custom01',
      'desc': 'Flaming Greatsword +1',
      'type': 'melee',
      'criticRange': [19,20],
      'criticMulti': 2,
      'bonificador': 1,
      'dado': 6,
      'cantdado': 2,
      'range': 5,
      'damage_type': 'magic',
      'dadosextra': [
        {
          'dado': 6,
          'cantdado': 1,
          'damage_type': 'fire'
        }
      ],
      'inUse': false,
      'weapon_base': 'greatsword'
    },

    {
      '_id': 'custom02',
      'desc': 'Longbow',
      'type': 'ranged',
      'criticRange': [20,20],
      'criticMulti': 3,
      'bonificador': 0,
      'dado': 8,
      'cantdado': 1,
      'range': 100,
      'damage_type': 'piercing',
      'dadosextra': [],
      'inUse': false,
      'weapon_base': 'bow'
    },

    {
      '_id': 'custom03',
      'desc': 'Shocking Heavy Crossbow +1',
      'type': 'ranged',
      'criticRange': [19,20],
      'criticMulti': 2,
      'bonificador': 0,
      'dado': 10,
      'cantdado': 1,
      'range': 120,
      'damage_type': 'piercing',
      'dadosextra': [
        {
          'dado': 6,
          'cantdado': 1,
          'damage_type': 'electric'
        }
      ],
      'inUse': true,
      'weapon_base': 'crossbow'
    }
  ],
};
