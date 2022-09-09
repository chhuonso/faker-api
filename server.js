const { faker } = require('@faker-js/faker');
const express = require("express");
const User = require("./User.js")
const Company = require("./Company.js")
const app = express();
const port = 8000;



app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/", ( req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/users/new", (req, res) =>{
    res.json( User() );
    console.log(User())
})
app.get("/api/companies/new", (req,res) =>{
    res.json( Company() );
})
app.get("/api/user/company", ( req, res) =>{
    res.json( { user: User(), company : Company()});
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );

