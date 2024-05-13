// 4th part
const fs = require('fs')

console.log("1")

// Blocking...
// const result = fs.readFileSync("contacts.txt", "utf-8")
// console.log('result: ', result);

// Non-Blocking...
fs.readFile("contacts.txt", 'utf-8', ((err, response)=>{
    console.log(response,'response')
}))

console.log("2")

