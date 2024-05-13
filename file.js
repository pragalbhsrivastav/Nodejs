// File Handling:- means operation on files read, write 
const fs = require('fs') //fs is built in to interact with files

// craete a new file (two methods writeFile and writeFileSync)

//SYNC...
// fs.writeFileSync('./text.txt', 'Hello there') // this means i want to create a file name test.txt and i want to write Hello world inside this file

//ASYNC...
// fs.writeFile('./text.txt', 'Hello there ASYNC', (err)=>{console.log(err)})

//Read (also have async and sync)

// SYNC
// Synchronous (Blocking) File Reading:
// In synchronous file reading, the operation blocks the execution of further code until it's completed. 
// This means that the result (the contents of the file in this case) is available immediately after the operation finishes.
// Since the code execution is paused until the operation completes, you can directly assign the result to a variable within the same execution context.
// There's no need for a callback because the result is available immediately after the operation is done.

// const result = fs.readFileSync('./contacts.txt', 'utf-8')


// ASYNC (this will always )
// Asynchronous (Non-blocking) File Reading:
// In asynchronous file reading, the operation doesn't block the execution of further code. Instead, it continues to execute while the file reading operation is ongoing.
// Because of this non-blocking nature, you can't directly access the result immediately after initiating the operation because it hasn't been retrieved yet.
// Instead, you provide a callback function that will be executed once the operation completes and the result is available. This callback function allows you to handle the result asynchronously, once it's ready.
fs.readFile('./contacts.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log('err', err)
    } else {
        console.log(result)
    }
})

fs.
fs.appendFileSync('./test.txt', `abc \n`)
