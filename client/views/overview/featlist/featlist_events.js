if (Meteor.isClient) {
  Template.addFeat.events({
    'click .add-feat': function (e) {
      e.preventDefault();
      e.stopPropagation();
      var pj = Session.get('active-pj');
      var allFields = true;
      var pj_feat={};
      var r = true;

      if(this.extra_fields){
        var inputId;
        var extra={};
        for (var i = 0; i < this.extra_fields.length; i++) {
          inputId = 'input_'+this.key+'_'+this.extra_fields[i].key;
          if(!$('#'+inputId).val()){allFields = false;}
          extra[this.extra_fields[i].key] = $('#'+inputId).val();
        }
        pj_feat.extra_fields = extra;
      }
      pj_feat.id = Random.id(32);
      pj_feat.key = this.key;
      pj_feat.bundle = this.bundle;
      pj_feat.active = this.pasive;
      
      if(this.pjHasIt){
        r = confirm("Ya posee la habilidad "+this.name+"\nEsta seguro que desa agregarla nuevamente?");
      }
      if (pj && allFields && r){
        Meteor.call('addFeatToPj', pj, pj_feat,function(error, result){
          if (error) {
            alert(error.message);
          }
        });
      } else if (!allFields) {
        alert("Debe llenar todos los campos de esta feat");
      }
    },
  });

  Template.featsPj.events({
    'click .remove-feat': function (e){
      e.preventDefault();
      e.stopPropagation();
      var pj = Session.get('active-pj');
      var r = confirm("Esta seguro que desea eliminar la habilidad "+this.name+"?\nESTA ACCION NO SE PUEDE DESHACER");
      if (r === true) {
        Meteor.call('removeFeatFromPj',pj,this,function(error, result){
          if (error) {
            alert(error.message);
          }
        });
      }
    }
  });

}
