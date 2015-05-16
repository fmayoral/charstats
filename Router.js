Router.configure({
  // the default layout
  layoutTemplate: 'container'
});

Router.route('/', function () {
  this.render('dashboard', {
    data: function () { return Personajes.findOne({_id: 'xanxo'}); }
  });
})

Router.onBeforeAction(function() {
    Session.set('active-pj', Personajes.findOne({'_id': Session.get('charName')}));
    CharStats.funciones.updateCharStats();
    this.next();
});
