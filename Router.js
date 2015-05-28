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
  Session.set('active-pj', Personajes.findOne({'_id': Session.get('charName')}));
  CharStats.funciones.updateCharStats();
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
    this.render('charNew', {});
  },
  {
    name: 'newChar'
  }
);

Router.route('/maps', function () {
    Session.set('map', null);
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
    this.layout('sideBarContainer');
    this.render('newmap', {});
    this.render('mastertoolbar', {to: 'sidebar'});
  },
  {
    name: 'newmap'
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

