if (Meteor.isClient) {
  Template.newmap.rendered = function (){
    Session.set('nuevoMapaInfo',{ancho:1, alto:1, tipo: 'pasto'});
  };

  Template.newmap.helpers({
    piesAncho: function () {
      var info = Session.get('nuevoMapaInfo');
      if (typeof info != 'undefined'){
        return info.ancho *5 + " pies";
      }
    },
    piesAlto: function () {
      var info = Session.get('nuevoMapaInfo');
      if (typeof info != 'undefined'){
        return info.alto *5 + " pies";
      }
    },
    files: function () {
      return Files.find({'type': 'map-background'});
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
        var altura = "height:"+this.info.alto *50+"px;";
        return altura;
      }
    },
    position: function (){
      var pos = "top:"+this.position.index.r *50+"px; left:"+this.position.index.c *50+"px;";
      return pos;
    },
    textCenter: function (){
      var pj = $('div').find("[data-id='" + this._id + "']");
      return "line-height: "+pj.height()+"px;";
    },
    shortName: function (name){
      return name.slice(0,2);
    },
    backgroundStyle: function (){
      if(this.info){
        var image = Files.findOne(this.info.mapBackground);
        var size = "height:"+this.info.alto *75+"px; width:"+this.info.ancho *50+"px;";
        var background = 'background-image:url("'+image.url+'");';
        return size+background;
      }
    },
    backgroundSize: function (){
      if(this.info){
        var size = "height:"+this.info.alto *50+"px; width:"+this.info.ancho *50+"px;";
        return size;
      }
    },
    canvasWidth: function (){
      if(this.info){
        var size = "width:"+this.info.ancho *50+"px;";
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
          break;
        default:
          return 'Seleccione una accion';
          break;
      }
    },
  });


}