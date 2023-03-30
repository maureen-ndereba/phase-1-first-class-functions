function receivesAFunction(newFunction){

    console.log(newFunction());
   }
   
   receivesAFunction(function () { return "Tech is awesome"});



   function returnsANamedFunction (){
    
   return (function namedFunc() { return "Hey"} )
   }

   function returnsAnAnonymousFunction (){
    return (function () { return "Hey"} )
   }