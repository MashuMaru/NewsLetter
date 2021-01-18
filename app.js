const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res){
    res.sendFile(__dirname + '/signup.html');
});

app.post('/', function(req, res) {
    var fName = req.body.firstName;
    var sName = req.body.secondName;
    var email = req.body.email;
    console.log(fName, sName, email);
})

app.listen(port, function(){
    console.log("Server running on port 3000");
})