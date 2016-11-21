(function(){
    angular.module("register",[]);
    
    angular.module("register")
    .config(function(){
       console.log("i am the register module"); 
    });
    
    angular.module("register")
    .run(function(){
       console.log("i am the run for  register module"); 
    });
})();