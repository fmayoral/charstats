if (Meteor.isClient) {

  Template.mapaForm.helpers({
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
    piesAncho: function () {
      var info = Session.get('mapaInfo');
      if (typeof info != 'undefined'){
        return info.ancho *5 + " feets";
      }
    },
    piesAlto: function () {
      var info = Session.get('mapaInfo');
      if (typeof info != 'undefined'){
        return info.alto *5 + " feets";
      }
    },
    files: function () {
      return Files.find({'type': 'map-background'},{'sort':{'descripcion':1}});
    },
    checked: function (parent) {
      if(this && parent && this._id == parent.info.mapBackground) {
        return 'checked';
      }
    },
  });

  Template.mapList.helpers({
    listaMapas: function () {
      return  Mapas.find();
    },
  });

  Template.mapaLayout.helpers({
    altura: function (){
      if(this.info){
        var altura = "height:"+this.info.alto *cellSize+"px;";
        return altura;
      }
    },
    position: function (){
      var pos = "top:"+this.position.index.r *cellSize+"px; left:"+this.position.index.c *cellSize+"px;";
      return pos;
    },
    shortName: function (name){
      return name.slice(0,2);
    },
    healthStatus: function(health){
      var status = '';
      if(health.total !== 0){
        var percentage = Math.floor((health.damage / health.total) * 100);
        if (percentage > 50) {
          status = 'half-dead';
        }
        if (percentage > 75) {
          status = 'almost-dead';
        }
        console.log(percentage);
      }
      return status;
    },
    backgroundStyle: function (){
      if(this.info){
        var image = Files.findOne(this.info.mapBackground);
        var canvasSize = "height:"+this.info.alto *cellSize+"px; width:"+this.info.ancho *cellSize+"px;";
        var background = 'background-image:url("'+image.url+'");';
        return canvasSize+background;
      }
    },
    backgroundSize: function (){
      if(this.info){
        var size = "height:"+this.info.alto *cellSize+"px; width:"+this.info.ancho *cellSize+"px;";
        return size;
      }
    },
    canvasWidth: function (){
      if(this.info){
        var size = "width:"+this.info.ancho *cellSize+"px;";
        return size;
      }
    },
    desc: function (){
      if(this.info){
        var description = this.info.descripcion.replace(/\s+/g, '-').toLowerCase();
        return description;
      }
    },
    npcs: function (){
      return Characters.find({'position.map': Session.get('map')});
    },
    isAction: function(command){
      if(Session.get('mapAction') == command) {
        return 'active';
      }
    },
    isPjActive: function(){
      if(Session.get('selected_char_id') == this._id) {
        return 'current';
      }
    },
    isTargeting: function(){
      return Session.get('mapAction') == 'target';
    },
    actionTextHelper: function(){
      switch(Session.get('mapAction')){
        case 'play':
          if (Session.get('selected_char_id')) {
            return 'Ubicar personaje';
          } else {
            return 'Seleccione un personaje';
          }
          break;
        case 'target':
          return 'Seleccionar objetivo';
        default:
          return 'Seleccione una accion';
      }
    },
  });


}
