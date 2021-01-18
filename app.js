const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.listen(port, function(){
    console.log("Server running on port 3000");
})