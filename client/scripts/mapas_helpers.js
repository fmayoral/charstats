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
      var pos = "top:"+this.index.r *50+"px; left:"+this.index.c *50+"px;";
      return pos;
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
    criaturas: function (){
      if(Session.get('mapAction') == 'play') {
        //return Criaturas.find({'map': Session.get('map'), 'positionSet':true});
      }
      return null;
    },
    isActive: function(command){
      if(Session.get('mapAction') == command) {
        return 'active';
      }
    },
  });


}