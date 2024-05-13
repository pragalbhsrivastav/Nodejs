// step 1 create server
const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res)=>{
    const log = `${Date.now()}: ${req.url} New request received \n`
    fs.appendFile('log.txt', log, (err,data)=>{
        switch(req.url){
            case '/': res.end("Home Page") 
            break
            case '/about': res.end("about Page")
            break
            default: res.end("404 not found")
        }
    })
}); // when it gets request then this callback will get executes

myServer.listen(8000, ()=> console.log("server started"))
