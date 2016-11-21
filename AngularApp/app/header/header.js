(function(){
    angular.module("header",[]);
    
    angular.module("header")
    .config(function(){
       console.log("i am the header module"); 
    });
    
    angular.module("header")
    .run(function(){
       console.log("i am the run header module"); 
    });
})();