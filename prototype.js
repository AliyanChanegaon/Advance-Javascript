

// Blueprint for every car
let car = {
  wheels:"Four",
  Material:"Steel",
  
};


// To access this as a default we need to use Object.create()
// and argument we pass is the blueprint obj name
let C1=Object.create(car)
console.log(C1.wheels);
console.log(C1.Material);