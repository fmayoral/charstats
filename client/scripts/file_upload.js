if (Meteor.isClient) {

  Template.mapBackgroundUpload.helpers({
    files: function(){
      return S3.collection.find();
    },
    complete: function(){
      return this.status == 'complete';
    }
  });

  Template.mapBackgroundUpload.events({
    'click button.upload': function(e){
      var files = $('input.file_bag')[0].files
      e.preventDefault();

      S3.upload({
          files:files,
          path:'maps'
        },
        function(error,result){
          if(error){
            console.log(error);
          } else {
            result.type = 'map-background';
            Meteor.call('saveFile',result,function(error, result){
              if (error) {
                alert(error.message);
              } else {
                $('input.file_bag').val('');
                //Nothing to do right now
              }
            });
          }
        }
      );
    }
  });

}