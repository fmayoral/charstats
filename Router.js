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
}, {except: ['login']});

//Routes
Router.route('/login', function () {
  this.layout('login-container');
  this.render('login', {
  });
});

Router.route('/', function () {
  this.render('dashboard', {
    data: function () { return Personajes.findOne({_id: 'xanxo'}); }
  });
})
