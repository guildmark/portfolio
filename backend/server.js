var express = require("express");
var cors = require("cors");
var nodemailer = require("nodemailer");
const creds = require("./config");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Start server and listen to port
app.listen(port, () => {
    console.log(`Server is connected to port ${port}`)
});

//Create GET route
app.get('/express_backend', (req, res) => {
    res.send({express: "Your express backend is connected to react"});
})

//Add transport variables
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
   
});

var mailOptions = {
    name: "dinkydonut",
    to: creds.USER,
    subject: "TEST",
    text: "TEST"
}

transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
        console.log(error)
    }
    else {
        console.log("Email sent: " + info.response)
    }
});
