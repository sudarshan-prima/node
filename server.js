const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const fetch = require("node-fetch")

const app = express();

const fs = require("fs")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

const getdata = require('./route/index')

app.use('/', getdata)



const server = app.listen(4000, () => {
    console.log("server running on port 4000");
});
