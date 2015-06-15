//Default config
Router.configure({
  // the default layout
  layoutTemplate: 'defaultContainer'
});

//Aux functions
var mustBeSignedIn = function(){
  if(!Meteor.loggingIn() && !Meteor.user()) {
    this.redirect('login');
  }
  this.next();
};

//Global rules
Router.onBeforeAction(mustBeSignedIn, {except: ['login']});

Router.onBeforeAction(function() {
  //Session.set('active-pj', Personajes.findOne({'_id': Session.get('charName')}));
  var pj = Characters.findOne({'_id': Session.get('selected_char_id')});
  if(pj){
    Rolepack.funciones.modifyCharForDisplay(pj);
  }
  this.next();
}, {only: ['dashboard']});


//Routes
Router.route('/', function () {
    this.render('login', {});
  },
  {
    name: 'home'
  }
);

Router.route('/login', function () {
    this.render('login', {});
  },
  {
    name: 'login'
  }
);

Router.route('/char/new', function () {
    Session.set('selected_char_id', null);
    Session.set('action', 'new');
    this.render('charForm', {});
  },
  {
    name: 'newChar'
  }
);

Router.route('/char/edit/:_id', function () {
    var modificadores = {
      'str': 0,
      'dex': 0,
      'con': 0,
      'int': 0,
      'wis': 0,
      'cha': 0,
    };
    Session.set('action', 'edit');
    Session.set('char-attr-list', modificadores);

    this.render('charForm', {
      data: function () {
        return Characters.findOne({'_id': Session.get('selected_char_id')});
      }
    });
  },
  {
    name: 'editChar'
  }
);

Router.route('/maps', function () {
    this.render('mapList', {});
    if (Roles.userIsInRole(Meteor.user(), ['master'])) {
      this.layout('sideBarContainer');
      this.render('mastertoolbar', {to: 'sidebar'});
    }
  },
  {
    name: 'mapList'
  }
);

Router.route('/maps/new', function () {
    Session.set('mapaInfo',{ancho:1, alto:1});
    Session.set('action', 'new');

    this.layout('sideBarContainer');
    this.render('mastertoolbar', {to: 'sidebar'});
    this.render('mapaForm', {});
  },
  {
    name: 'newmap'
  }
);

Router.route('/maps/edit/:_id', function () {

    var map = Mapas.findOne({_id: this.params._id});
    Session.set('map', this.params._id);
    Session.set('action', 'edit');
    Session.set('mapaInfo',map.info);

    this.layout('sideBarContainer');
    this.render('mastertoolbar', {to: 'sidebar'});
    this.render('mapaForm', {
      data: function () {
        return Mapas.findOne({_id: this.params._id});
      }
    });
  },
  {
    name: 'editmap'
  }
);

Router.route('/maps/play/:_id', function () {
    this.layout('simpleContainer');
    this.render('mapaPlay', {
      data: function () {
        Session.set('map', this.params._id);
        Session.set('mapAction', 'play');
        return Mapas.findOne({_id: this.params._id});
      }
    });
  },
  {
    name: 'playmap'
  }
);

Router.route('/maps/play', function () {
    var inMemoryMap = Session.get('map');
    this.layout('simpleContainer');
    if(inMemoryMap){
      Router.go('playmap', {'_id':inMemoryMap});
    } else {
      Router.go('mapList');
    }
  },
  {
    name: 'playmemorymap'
  }
);

Router.route('/master-tools', function () {
    this.layout('sideBarContainer');
    this.render('mastertools', {});
    this.render('mastertoolbar', {to: 'sidebar'});
  },
  {
    name: 'mastertools'
  }
);

Router.route('/dashboard', function () {
    if(Session.get('active-pj')){
      this.layout('sideBarContainer');
      this.render('dashboard', {
        data: function () {
          return Session.get('active-pj');
        }
      });
      this.render('dashboardsidebar', {to: 'sidebar'});
    } else {
      Router.go('home');
    }

  },
  {
    name: 'dashboard'
  }
);

Router.route('/skills', function () {
    if(Session.get('active-pj')){
      this.layout('sideBarContainer');
      this.render('skillsList', {
        data: function () {
          return Session.get('active-pj');
        }
      });
      this.render('dashboardsidebar', {to: 'sidebar'});
    } else {
      Router.go('home');
    }

  },
  {
    name: 'skillsList'
  }
);

Router.route('/feats', function () {
    if(Session.get('active-pj')){
      this.layout('sideBarContainer');
      this.render('featList', {
        data: function () {
          return Session.get('active-pj');
        }
      });
      this.render('dashboardsidebar', {to: 'sidebar'});
    } else {
      Router.go('home');
    }

  },
  {
    name: 'featsList'
  }
);

Router.route('/files', function () {
    this.render('fileList', {});
    if (Roles.userIsInRole(Meteor.user(), ['master'])) {
      this.layout('sideBarContainer');
      this.render('mastertoolbar', {to: 'sidebar'});
    }
  },
  {
    name: 'fileList'
  }
);
