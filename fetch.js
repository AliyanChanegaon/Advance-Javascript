let arr = []


fetch('https://fakestoreapi.com/products')
.then((res)=> console.log(res,"resolve"))
.catch((err)=> console.log(err,"Rejected"))        