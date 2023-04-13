
// Promises : its promisew by javascript to us that something is done or not done

// Promises has 3 state ( pending , resolve , rejected)
// once promise is fulfilled we can not change the state again 

// with the help this Promises we get 100% of our code that the work we provided its done or not done 

// we can handle our promise using this two methods 
// 1 async await 
// 2 .then and .catch

// .then and .catch ( we use this to handle our promise)
// Promise give us call back function .then adn catch 
// we can write our logic according our promise is resolve or rejected 
// callback function ( if your promise is rejected you can )

function PromiseCheck ( value ){

  return new Promise((resolve , rejected)=>{

    if(value>5){
       resolve("this is Rsolved")
    }else{
       rejected("This is Rejected")
    }
  
  })
  
}


PromiseCheck(14)
.then((res)=>console.log(res))
.catch((err)=>console.log(err))


PromiseCheck(4)
.then((res)=>console.log(res))
.catch((err)=>console.log(err))