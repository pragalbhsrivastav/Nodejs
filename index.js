// step 1 create server
// const http = require("http");
const fs = require("fs");

const express = require('express');
const mongoose = require('mongoose')

const app = express() // instance of express

app.use(express.json())
const users = require('./MOCK_DATA.json')

// app.Method(path, habdler)

// app is a instance of express
// methos is an http request method in lowercase
// patj is a path on the server like '/', '/about' , 'about?name=abc'
// handler is a function executed when  the route is matched.

// connection 
mongoose.connect("mongodb://127.0.0.1:27017/demoapp")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("err"))

// Schema
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        // required: true
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        // required: true,
        unique: true
    },
    jobTitle: {
        type: String
    },
    gender: {
        type: String
    },
})

//model
const User = mongoose.model('user', userSchema)

app.get('/', (req, res) => {
    return res.send("hello from home page")
})

app.get('/about', (req, res) => {
    return res.send(`Hello ${req.query.name}`)
})

app.get('/users', (req, res) => {

    const html = `
     <ul>
     ${users?.map((user) => (
        `<li>${user.first_name}</li>`
    ))} </ul>
     `
    return res.send(html)
})

app.get('/api/users', (req, res) => {
    console.log('req.params.id: ', req.params);
    res.setHeader("x-myName", "Pragalbh") // custom header
    // always add X to custom Headers
    return res.json(users)
})

// app.patch('/api/users', (req, res) => {
//     console.log('req.params.id: ', req.params.id);
//     return res.json(users)
// })

// app.delete('/api/users', (req, res) => {
//     console.log('req.params.id: ', req.params.id);
//     return res.json(users)
// })

// Dynamic Path parameter
// app.get('/api/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find(user => user.id === id);
//     console.log('user: ', user);
//     return res.json(user);
// })

// we can  do chaining like this if there api is same but http request is diffrent/ or on same http request also 
app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id);
        if (!user) return res.status(404).json({ error: 'user not found' })
        console.log('user: ', user);
        return res.json(user);
    })
    .patch((req, res) => {
        // Edit user with id
        return res.json({ status: "Pending" });
    })
    .delete((req, res) => {
        // Delete user with id
        return res.json({ status: "Pending" });
    })

app.post("/api/users", async (req, res) => {
    const body = req.body;

    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email
    ) {
        return res.status(400).json({ msg: 'All fields are required' });
    }


    // users.push({ ...body, id: users.length + 1 })
    // fs.writeFile("./Mock_data.json", JSON.stringify(users), (err, data) => {
    //     return res.status(201).json({ status: 'success', id: users.length })
    // })

    const result = await User.create({
        first_name: body?.first_name,
        last_name: body?.last_name,
        email: body?.email,
        jobTitle: body?.jobTitle,
        gender: body?.gender,
    })

    console.log(result, 'result')
    return res.status(201).json({ msg: 'Success 😎' })
})

app.listen(8000, () => console.log("server started"))

// function myHandler(req, res){
//     const myServer = http.createServer((req, res)=>{
//         const log = `${Date.now()}: ${req.url} New request received \n`
//         fs.appendFile('log.txt', log, (err,data)=>{
//             switch(req.url){
//                 case '/': res.end("Home Page")
//                 break
//                 case '/about': res.end("about Page")
//                 break
//                 default: res.end("404 not found")
//             }
//         })
//     }); // when it gets request then this callback will get executes
// }

// const myServer = http.createServer(app);

// myServer.listen(8000, ()=> console.log("server started"))


// const http = require("http");
// const myServer = http.createServer(app);



// myServer.listen(8000, ()=> console.log("server started"))

