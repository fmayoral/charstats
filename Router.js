//Default config
Router.configure({
  // the default layout
  layoutTemplate: 'container'
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
    this.layout('loginContainer');
    this.render('login', {});
  },
  {
    name: 'home'
  }
);

Router.route('/login', function () {
    this.layout('loginContainer');
    this.render('login', {});
  },
  {
    name: 'login'
  }
);

Router.route('/char/new', function () {
    this.layout('loginContainer');
    this.render('charNew', {});
  },
  {
    name: 'newChar'
  }
);

Router.route('/dashboard', function () {
    this.render('dashboard', {
      data: function () { return Personajes.findOne({_id: 'xanxo'}); }
    });
  },
  {
    name: 'dashboard'
  }
);
