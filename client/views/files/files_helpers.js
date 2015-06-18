if (Meteor.isClient) {

  Template.fileUpload.helpers({
    files: function(){
      return S3.collection.find();
    },
    complete: function(){
      return this.status == 'complete';
    }
  });

  Template.fileList.helpers({
    listaArchivos: function(){
      return Files.find({},{'sort':{'description':1,'type':1}});
    },
  });

}
