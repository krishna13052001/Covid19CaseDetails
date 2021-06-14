const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fetch = require("node-fetch");
const { response } = require('express');


const app = express()
app.set("view engine", 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

app.get("/state/:stateCode",(req,res)=>{
    res.render("state.ejs",{
        stateCode: req.params.stateCode,
    });
})
app.get("/",(req,res)=>{
    res.render("index.ejs");
})


app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(3000);

