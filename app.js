const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require('https');
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res){
    res.sendFile(__dirname + '/signup.html');
});

app.post('/', function(req, res) {
    const fName = req.body.firstName;
    const sName = req.body.secondName;
    const email = req.body.email;
    
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: fName,
                    LNAME: sName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);
    const url = "https://us7.api.mailchimp.com/3.0/lists/6e2bbc0354";
    const options = {
        method: "POST",
        auth: "mashu:55f8883e6a48605fc7cafe0a6282aeaa-us7"

    }

    https.request(url, options, function(response) {
        response.on("data", function(data) {
            console.log(JSON.parse(data));
        })
    })

})

app.listen(port, function(){
    console.log("Server running on port 3000");
})

//API KEY 
// 55f8883e6a48605fc7cafe0a6282aeaa-us7

//LIST ID
// 6e2bbc0354