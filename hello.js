// const math = require("./math") // we can destructure it
const {addFn, subFn} = require("./math")
console.log("Js...........")

// console.log(window) // will give error but in browser i am not getting error
// V8 engine is not directly embed with c++ before embeded it with c++ all dom relative(many things are changed or removed before embeded) things are removed first then embed it with c++ 

// write npm init to start new project (npm initialize it create template to run my program or file)
// after writing npm init it will create package.json file
// package.json -- is a config file 


// console.log(math.addFn(2,5))
// console.log(math.subFn(2,5))

console.log(addFn(2,5))
console.log(subFn(2,5))