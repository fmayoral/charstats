if (Meteor.isClient) {

  Template.fileUpload.events({
    'click button.upload': function(e){
      var files = $('input.file-bag')[0].files
      e.preventDefault();

      var newFile = {};
      newFile.owner = Meteor.user()._id;
      newFile.descripcion = $('#file-desc').val();
      newFile.type = $('#file-type').val();

      var valid = true;
      if(newFile.descripcion == ''){ valid = false; alert("Debe ingresar una descripcion");}
      if(newFile.type == ''){ valid = false; alert("Debe seleccionar un tipo de archivo");}

      switch(newFile.type){
        case 'map-background':
          path = 'mapas';
          break;
        case 'char-profile':
          path = 'charprofiles';
          break;
        case 'char-standUp':
          path = 'charstandup';
          break;
        default:
          path = 'tmp';
      }

      if (valid){
        S3.upload({
            files:files,
            path: path
          },
          function(error,result){
            if(error){
              console.log(error);
            } else {
              result.type = newFile.type;
              result.newFile = newFile.newFile;
              result.descripcion = newFile.descripcion;
              Meteor.call('saveFile',result,function(error, result){
                if (error) {
                  alert(error.message);
                } else {
                  $('input.file-bag').val('');
                  $('#file-desc').val('');
                }
              });
            }
          }
        );
      }
    }
  });

  Template.archivosList.events({
    'click .del-archivo': function (event) {
      var fileId = $(event.currentTarget).closest('tr').attr('data-id');
      var r = confirm("Esta seguro que desea borrar el archivo?\nESTA ACCION NO SE PUEDE DESHACER");
      if (r == true) {
        var archivo = Files.findOne(fileId);
        S3.delete(archivo.relative_url,
          function(error,result){
            if(error){
              console.log(error);
            } else {
              Meteor.call('removeFile', fileId, function(error, result){
                if (error) {
                  alert(error.message);
                }          
              });
            }
          }
        );
      }
    },
  });

}