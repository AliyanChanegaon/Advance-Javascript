

console.log("fierst")


setTimeout(function() {
  console.log("Timer")
},1)

setImmediate(function() {
  console.log("setImmediate")
})

console.log("second")