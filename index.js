function receivesAFunction(newFunction){

    console.log(newFunction());
   }
   
   receivesAFunction(function () { return "Mo is awesome"});



   function returnsANamedFunction (){
    
   return (function namedFunc() { return "Hey"} )
   }

   function returnsAnAnonymousFunction (){
    return (function () { return "Hey"} )
   }