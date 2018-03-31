app.controller('storeCtrl', function($scope,constantUrl,servercalls,$state,$rootScope,toastr,$window){
  
  $scope.searchText = '';
  $scope.updateCustomRequest = function(data){
    console.log(data,"dataaa")
  }
 

// $scope.annotations = (function() {
//   if(window.localStorage) {
//       var annotations = JSON.parse(localStorage.getItem("annotations"));
//     console.log(annotations,"annotation")
//       // if( !annotations || annotations.length == 0 ) {
//       //   //  window.localStorage.setItem("annotations", JSON.stringify(defaultAnnotations));
//       //     //return defaultAnnotations;
//       // }
//       return annotations;
//   } else {
//       return [];
//   }
// })();
 
//       console.log("store");  
        
//       servercalls.anootationShow($scope.annotations);



	
        
        

  
  /**
  *@createExcelFile method is for exporting users data in excel file 
  */
 $scope.getAnnotation = function(){
    
    servercalls.getData('/getanot',{}, function(err, data){
     if(err){
       toastr.error(data.status.message); 
     }else{

      servercalls.anootationShow(data);

      }
    })
  }
  $scope.getAnnotation ();     
})