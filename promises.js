//Promises 


function checkPromise(value){

  return new Promise( function(resolve, reject){

       if(value<=10){
         return resolve
       }else{
         return reject
       }
    
  
  })
  
}

checkPromise(5)

