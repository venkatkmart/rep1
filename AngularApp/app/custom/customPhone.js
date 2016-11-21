(
 function(){
     
     function phoneFormatterFn(){
         
         function indianFormat(input){
            var phone = input.toString();
                     var firstFive = phone.substring(0,5);
                     var lastFive = phone.substring(5,10);
                     return firstFive+"-"+lastFive;  
         }
         function USFormat(input){
             var phone = input.toString();
                    return phone.substring(0,3)+"-"+phone.substring(3,6)+"-"+phone.substring(6,10)
         }
         return function(input,criteria){
             if(input &&  input.toString().length==10){
                 if(criteria=="IN"){
                    return indianFormat(input);
                 }
                 else{
                     return USFormat(input);
                 }
                 
             }
             console.log(input.toString());
              console.log(criteria);
             return input;   
         }
     }
     angular.module("custom")
     .filter("phoneFomatter",[phoneFormatterFn]);
 }
)();